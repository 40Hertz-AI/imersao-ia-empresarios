#!/usr/bin/env python3
"""Monta manha/gabarito/ com o que os testes geraram de verdade (testes/manha/ e testes/pasta-vazia/).

Uso: python3 scripts/montar-gabarito-manha.py   (depois de testes/rodar-manha.sh e da verificação)
"""
import re
import shutil
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
T = RAIZ / "testes" / "manha"
V = RAIZ / "testes" / "pasta-vazia"
G = RAIZ / "manha" / "gabarito"


def limpa(texto):
    texto = re.sub(r"/tmp/(teste|vazia)-manha-[\w-]+/", "", texto)
    return texto.strip() + "\n"


def conversa(pasta):
    """Lista de (mensagem do aluno, resposta do Claude) da transcrição."""
    txt = (pasta / "transcricao.txt").read_text(encoding="utf-8")
    partes = re.split(r"════════ mensagem \d+ do aluno ════════\n", txt)[1:]
    saida = []
    for p in partes:
        pedido, _, resposta = p.partition("════════ resposta do Claude ════════\n")
        saida.append((pedido.strip(), limpa(resposta)))
    return saida


def bloco_conversa(pasta, titulo_msg="Você"):
    linhas = []
    for pedido, resposta in conversa(pasta):
        linhas += [f"**{titulo_msg}:**", "", "```", pedido, "```", "", "**Claude:**", "", resposta, ""]
    return "\n".join(linhas)


def copia(origem, destino):
    destino.parent.mkdir(parents=True, exist_ok=True)
    shutil.copy2(origem, destino)


CAB = "> Gerado de verdade pelo Claude Code (modelo Opus) nesta pasta, com o prompt do passo, em 25/10/2026. **Dados fictícios de exemplo.** O seu resultado vai sair diferente nas palavras; o que importa é chegar no mesmo tipo de entrega.\n"

if G.exists():
    for f in G.iterdir():
        if f.name != "02-google-drive-e-planilhas":
            shutil.rmtree(f) if f.is_dir() else f.unlink()

(G / "LEIA-ME.md").write_text(f"""# Gabarito da manhã

O resultado pronto de cada passo, **gerado de verdade** pelo Claude Code com os mesmos prompts de `passos/` (o teste está em `testes/` no repositório do curso). Use para comparar com o seu. Não precisa ser igual: a IA escreve diferente a cada vez.

| Passo | O que tem aqui |
|---|---|
| 1 | `01-abrir-a-pasta/resposta.md`: a primeira resposta do Claude nesta pasta |
| 2 | `02-google-drive-e-planilhas/`: as respostas certas (calculadas direto dos dados) e o resumo que o Claude fez |
| 3 | `03-prompts-que-funcionam/`: os 4 exemplos, ruim e bom, com as respostas, e o exemplo 1 numa pasta sem contexto |
| 4 | `04-usar-uma-skill-pronta/`: a `/eli5` explicando um conceito e um arquivo |
| 5 | `05-criar-uma-skill/`: a skill `resposta-cliente` pronta e as respostas às 3 mensagens |
| 6 | `06-design-system/design-system.md`: o design system tirado da imagem de referência |
| 7 | `07-paginas-web/`: a calculadora, o dashboard e a apresentação (abra no navegador) |
| 8 | `08-claude-motion/animacao-torra-viva.html`: a animação do plano B |

Todos os números são **dados fictícios de exemplo**.
""", encoding="utf-8")

# 1
d = G / "01-abrir-a-pasta"; d.mkdir(parents=True, exist_ok=True)
(d / "resposta.md").write_text(f"# Passo 1 · A primeira resposta\n\n{CAB}\n{bloco_conversa(T / 'passo-01')}", encoding="utf-8")

# 2
d = G / "02-google-drive-e-planilhas"; d.mkdir(parents=True, exist_ok=True)
copia(T / "passo-02/arquivos/meu-trabalho/resumo-vendas.md", d / "resumo-vendas.md")
(d / "conversa.md").write_text(f"# Passo 2 · A conversa do plano B (lendo os CSV da pasta)\n\n{CAB}\nAs respostas certas, para conferir, estão em `respostas-certas.md`.\n\n{bloco_conversa(T / 'passo-02')}", encoding="utf-8")

# 3
d = G / "03-prompts-que-funcionam"; d.mkdir(parents=True, exist_ok=True)
nomes = {1: "E-mail de reajuste", 2: "Post para o Instagram", 3: "Análise de vendas", 4: "Primeira mensagem para um cliente novo"}
for i, nome in nomes.items():
    txt = [f"# Exemplo {i} · {nome}\n", CAB]
    for tipo, rotulo in [("ruim", "❌ Prompt ruim"), ("bom", "✅ Prompt bom")]:
        txt += [f"## {rotulo}\n", bloco_conversa(T / f"passo-03-ex{i}-{tipo}")]
    (d / f"exemplo-{i}.md").write_text("\n".join(txt), encoding="utf-8")
txt = ["# Exemplo 1 numa pasta vazia (sem o CLAUDE.md da Torra Viva)\n", CAB,
       "Aqui o Claude não sabe nada da empresa. O prompt ruim vira um modelo genérico com campos para preencher; o bom funciona igual, porque leva o contexto dentro dele.\n"]
for tipo, rotulo in [("ruim", "❌ Prompt ruim"), ("bom", "✅ Prompt bom")]:
    txt += [f"## {rotulo}\n", bloco_conversa(V / f"manha-passo-03-ex1-{tipo}")]
(d / "exemplo-1-sem-contexto.md").write_text("\n".join(txt), encoding="utf-8")

# 4
d = G / "04-usar-uma-skill-pronta"; d.mkdir(parents=True, exist_ok=True)
(d / "eli5-margem-de-contribuicao.md").write_text(f"# /eli5 o que é margem de contribuição\n\n{CAB}\n{bloco_conversa(T / 'passo-04-margem')}", encoding="utf-8")
(d / "eli5-orcamento-csv.md").write_text(f"# /eli5 dados/orcamento.csv\n\n{CAB}\n{bloco_conversa(T / 'passo-04-arquivo')}", encoding="utf-8")

# 5
d = G / "05-criar-uma-skill"; d.mkdir(parents=True, exist_ok=True)
copia(T / "passo-05-criar/arquivos/.claude/skills/resposta-cliente/SKILL.md", d / "resposta-cliente/SKILL.md")
txt = ["# A skill /resposta-cliente em uso\n", CAB, "## Criando a skill\n", bloco_conversa(T / "passo-05-criar")]
for i in (1, 2, 3):
    txt += [f"## Mensagem {i}\n", bloco_conversa(T / f"passo-05-uso-{i}")]
txt += ["## A mesma skill numa pasta vazia, para outra empresa\n",
        "Sem os arquivos da Torra Viva, a skill pergunta o nome da empresa e o tom antes (aqui o próprio teste respondeu como o dono de uma padaria fictícia).\n",
        bloco_conversa(V / "manha-passo-05-resposta-cliente")]
(d / "exemplo-de-uso.md").write_text("\n".join(txt), encoding="utf-8")

# 6
d = G / "06-design-system"; d.mkdir(parents=True, exist_ok=True)
copia(T / "passo-06/arquivos/meu-trabalho/design-system.md", d / "design-system.md")

# 7
d = G / "07-paginas-web"; d.mkdir(parents=True, exist_ok=True)
for teste, f in [("passo-07-calculadora", "calculadora-orcamento.html"), ("passo-07-dashboard", "dashboard-vendas.html"), ("passo-07-apresentacao", "apresentacao.html")]:
    copia(T / teste / "arquivos/meu-trabalho" / f, d / f)

# 8
d = G / "08-claude-motion"; d.mkdir(parents=True, exist_ok=True)
copia(T / "passo-08/arquivos/meu-trabalho/animacao-torra-viva.html", d / "animacao-torra-viva.html")
(d / "LEIA-ME.md").write_text("""# Passo 8 · Gabarito

- `animacao-torra-viva.html`: a animação do **plano B**, feita no Claude Code com o prompt do passo. Abra no Chrome, em tela cheia.
- O caminho A (Claude Motion, no claude.ai) não foi testado aqui: ele só existe nos planos Team e Enterprise, em beta. O prompt está em `passos/08-claude-motion/INSTRUCOES.md`.
""", encoding="utf-8")

# o gabarito não pode apontar para pastas de teste
for f in G.rglob("*"):
    if f.is_file() and f.suffix in (".md", ".html"):
        s = f.read_text(encoding="utf-8")
        assert "/tmp/" not in s, f
print("gabarito montado:", sorted(str(p.relative_to(G)) for p in G.rglob("*") if p.is_file()))
