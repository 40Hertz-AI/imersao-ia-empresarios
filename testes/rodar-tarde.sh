#!/usr/bin/env bash
# Roda os testes da tarde: a trilha inteira encadeada numa pasta da aula (Torra Viva, fictícia),
# o /criar-conteudo sobre o exemplo Forno da Vila, os extras e cada skill sozinha numa pasta vazia.
# Uso: testes/rodar-tarde.sh [filtro]
set -u
cd "$(dirname "$0")/.."
REPO=$(pwd)
R=testes/rodar-teste.sh
P=testes/prompts/tarde
PARALELO=${PARALELO:-7}
filtro=${1:-}
mkdir -p testes/logs

vez() { while [ "$(jobs -rp | wc -l)" -ge "$PARALELO" ]; do sleep 3; done; }
quer() { [ -z "$filtro" ] || [[ "$1" == *"$filtro"* ]]; }
corre() { local r=$1; shift; quer "$r" || return 0; vez; ( "$@" > "testes/logs/tarde-$r.log" 2>&1; echo "[$(date +%T)] fim $r" ) & }

# A · a trilha da aula, fase por fase, na mesma pasta (como a aluna faria)
trilha() {
  local d=/tmp/teste-tarde-trilha
  rm -rf "$d"
  $R tarde instalar aula $P/instalar-aula.txt --dir "$d" --preparar "true" 2>/dev/null || true
  $R tarde mapear-empresa aula $P/mapear-empresa-aula.txt --dir "$d"
  $R tarde marca aula $P/marca-aula.txt --dir "$d" --preparar "mkdir -p marca && cp '$REPO/manha/passos/06-design-system/referencia-design.png' marca/print-site.png"
  $R tarde mapear-concorrentes aula $P/mapear-concorrentes-aula.txt --dir "$d"
  $R tarde criar-oferta aula $P/criar-oferta-aula.txt --dir "$d"
  $R tarde criar-pagina aula $P/criar-pagina-aula.txt --dir "$d"
  $R tarde criar-conteudo aula $P/criar-conteudo-aula.txt --dir "$d"
  $R tarde impeccable aula $P/impeccable-aula.txt $P/impeccable-aula-telemetria.txt --dir "$d"
}
corre trilha trilha

# B · /criar-conteudo sobre o exemplo Forno da Vila (a saída vira o exemplo novo)
SEMEIA_FORNO="cp -a exemplo-forno-da-vila/memoria exemplo-forno-da-vila/marca exemplo-forno-da-vila/pesquisa exemplo-forno-da-vila/entregas exemplo-forno-da-vila/RESULTADO.html . && cp exemplo-forno-da-vila/controle/progresso.md controle/ && rm -rf entregas/posts entregas/conteudo.md && sed -i 's/^- \[x\] 6 · \(.*\) · 28\/09\/2026$/- [ ] 6 · \1/' controle/progresso.md"
corre criar-conteudo-forno $R tarde criar-conteudo-forno aula $P/criar-conteudo-forno.txt --preparar "$SEMEIA_FORNO"

# C · os extras: /sobre-mim e depois /sugerir-automacoes, numa pasta da aula nova
extras() {
  local d=/tmp/teste-tarde-extras
  rm -rf "$d"
  $R tarde sobre-mim aula $P/sobre-mim-aula.txt --dir "$d" --preparar "true"
  $R tarde sugerir-automacoes aula $P/sugerir-automacoes-aula.txt --dir "$d"
}
corre extras extras

# D · cada skill sozinha numa pasta vazia
for s in instalar mapear-empresa mapear-concorrentes criar-oferta criar-pagina criar-conteudo marca sobre-mim sugerir-automacoes; do
  corre $s-vazia $R tarde $s vazia $P/$s-vazia.txt --skills $s
done
corre impeccable-vazia $R tarde impeccable vazia $P/impeccable-vazia.txt --skills impeccable \
  --preparar "cp '$REPO/tarde/exemplo-forno-da-vila/entregas/pagina-de-vendas.html' pagina.html"
corre frontend-design-vazia $R tarde frontend-design vazia $P/criar-pagina-vazia.txt --skills frontend-design
wait
echo "tarde: todos os testes terminaram"
