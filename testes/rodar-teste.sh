#!/usr/bin/env bash
# Roda um pedido de aluno no Claude Code numa cópia limpa da pasta (ou numa pasta vazia)
# e guarda a prova em testes/: prompt, transcrição (stdout), lista de arquivos gerados e cópia deles.
#
# Uso:
#   testes/rodar-teste.sh <area> <nome> <aula|vazia> <prompt.txt> [prompt2.txt ...] [opções]
#
#   area     manha | tarde (as pastas do repo: torra-viva/ e minha-empresa/)
#   aula     copia a pasta limpa (git archive HEAD:<pasta da área>) para /tmp/teste-<area>-<nome>
#   vazia    cria /tmp/vazia-<area>-<nome> só com as skills de --skills (copiadas de <pasta da área>/.claude/skills)
#   prompts  o 1º abre a conversa; os seguintes continuam a mesma conversa (claude -p --continue),
#            como um aluno mandando várias mensagens seguidas
#
# Opções:
#   --skills a,b        skills copiadas para a pasta vazia (padrão: nenhuma)
#   --preparar <cmd>    comando rodado dentro da pasta antes do Claude (ex.: copiar um arquivo do gabarito)
#   --dir <pasta>       usa uma pasta que já existe (continua um teste anterior: fases em sequência)
#   --timeout <seg>     limite de cada chamada (padrão 2400)
#
# Prova em testes/<area>/<nome>/ (aula) ou testes/pasta-vazia/<area>-<nome>/ (vazia).
#
# O comando é o do aluno, com duas travas para o teste ser limpo e seguro:
#   --setting-sources project,local  não carrega plugins e skills globais desta máquina (o aluno não tem)
#   --strict-mcp-config              não liga conectores (Drive, Notion...): o teste nunca escreve em conta real
# e roda dentro do bwrap, que esconde o resto do disco (/workspace e /tmp): o Claude não acha outra cópia do material.
set -uo pipefail

REPO=$(cd "$(dirname "$0")/.." && pwd)
SESSOES="$HOME/.cache/testes-imersao-sessoes"; mkdir -p "$SESSOES"
area=$1; nome=$2; modo=$3; shift 3
case "$area" in manha) pasta=torra-viva ;; tarde) pasta=minha-empresa ;; *) echo "área desconhecida: $area"; exit 1 ;; esac
prompts=(); skills=""; preparar=""; dir=""; limite=2400
while [ $# -gt 0 ]; do
  case "$1" in
    --skills) skills=$2; shift 2 ;;
    --preparar) preparar=$2; shift 2 ;;
    --dir) dir=$2; shift 2 ;;
    --timeout) limite=$2; shift 2 ;;
    *) prompts+=("$(realpath "$1")"); shift ;;
  esac
done

novo=0; [ -z "$dir" ] && novo=1
if [ "$modo" = aula ]; then
  prova="$REPO/testes/$area/$nome"
  [ -n "$dir" ] || dir="/tmp/teste-$area-$nome"
else
  prova="$REPO/testes/pasta-vazia/$area-$nome"
  [ -n "$dir" ] || dir="/tmp/vazia-$area-$nome"
fi
# sem --dir, o teste sempre começa numa pasta nova (nunca reaproveita resto de teste anterior)
[ "$novo" = 1 ] && rm -rf "$dir"

if [ ! -d "$dir" ]; then
  mkdir -p "$dir"
  if [ "$modo" = aula ]; then
    git -C "$REPO" archive HEAD "$pasta" | tar -x -C "$dir" --strip-components=1
  else
    for s in ${skills//,/ }; do
      mkdir -p "$dir/.claude/skills"
      cp -a "$REPO/$pasta/.claude/skills/$s" "$dir/.claude/skills/"
    done
  fi
fi
cd "$dir" || exit 1
if [ -n "$preparar" ]; then bash -c "$preparar" || { echo "preparar falhou"; exit 1; }; fi

# a prova sempre começa limpa: nada de transcrição, erro ou arquivo de uma rodada anterior
rm -rf "$prova"; mkdir -p "$prova"
marca=$(mktemp); sleep 1
inicio=$(date +%s)
{
  echo "pasta: $dir"
  echo "modo: $modo · skills na pasta vazia: ${skills:-nenhuma}"
  echo "claude: $(claude --version 2>/dev/null)"
  echo "início: $(date -Iseconds)"
} > "$prova/info.txt"

n=0
: > "$prova/transcricao.txt"
for p in "${prompts[@]}"; do
  n=$((n + 1))
  cont=(); [ $n -gt 1 ] && cont=(--continue)
  cp "$p" "$prova/prompt-$n.txt"
  {
    echo "════════ mensagem $n do aluno ════════"
    cat "$p"; echo
    echo "════════ resposta do Claude ════════"
  } >> "$prova/transcricao.txt"
  t0=$(date +%s)
  # bwrap: o Claude só enxerga a pasta do teste; o repositório (/workspace) e as outras pastas de teste (/tmp) somem
  bwrap --dev-bind / / --tmpfs /workspace --tmpfs /tmp --bind "$dir" "$dir" \
    --bind "$SESSOES" "$HOME/.claude/projects" --chdir "$dir" \
    env -u ANTHROPIC_API_KEY -u CLAUDE_CODE_OAUTH_TOKEN timeout "$limite" \
    claude -p "$(cat "$p")" "${cont[@]}" --model opus --dangerously-skip-permissions --output-format text \
    --setting-sources project,local --strict-mcp-config \
    >> "$prova/transcricao.txt" 2>> "$prova/erros.txt"
  code=$?
  echo >> "$prova/transcricao.txt"
  echo "mensagem $n: saída $code em $(( $(date +%s) - t0 )) s" >> "$prova/info.txt"
done
echo "fim: $(date -Iseconds) · total $(( $(date +%s) - inicio )) s" >> "$prova/info.txt"
[ -s "$prova/erros.txt" ] || rm -f "$prova/erros.txt"

# arquivos criados ou alterados durante o teste
find . -type f -newer "$marca" ! -path './.claude/projects/*' ! -path './.git/*' ! -path '*/node_modules/*' \
  -printf '%P\t%s bytes\n' | sort > "$prova/arquivos-gerados.txt"
rm -f "$marca"
rm -rf "$prova/arquivos"; mkdir -p "$prova/arquivos"
while IFS=$'\t' read -r f _; do
  [ -z "$f" ] && continue
  tam=$(stat -c %s "$f")
  if [ "$tam" -le 3000000 ]; then
    mkdir -p "$prova/arquivos/$(dirname "$f")"; cp -a "$f" "$prova/arquivos/$f"
  fi
done < "$prova/arquivos-gerados.txt"
echo "prova em: $prova"
cat "$prova/info.txt"
