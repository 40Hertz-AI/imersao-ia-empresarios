#!/usr/bin/env python3
"""Monta testes/RESULTADOS.md a partir das provas (info.txt) e das verificações (verificacao*.json).

Uso: python3 testes/montar-resultados.py
"""
import json
import re
from pathlib import Path

T = Path(__file__).resolve().parent


def ver(arquivo):
    f = T / arquivo
    return json.loads(f.read_text(encoding="utf-8")) if f.exists() else {}


VM = ver("manha/verificacao.json")
VA = ver("tarde/verificacao.json")
VV = ver("pasta-vazia/verificacao-tarde.json")


def placar(v, *testes):
    itens = [x for t in testes for x in v.get(t, [])]
    if not itens:
        return None
    ok = sum(x["ok"] for x in itens)
    return ok, len(itens), [x for x in itens if not x["ok"]]


def tempo(pasta):
    f = T / pasta / "info.txt"
    if not f.exists():
        return "não rodou"
    s = f.read_text(encoding="utf-8")
    msgs = re.findall(r"mensagem \d+: saída (\d+) em (\d+) s", s)
    if not msgs:
        return "não terminou"
    codigos = {c for c, _ in msgs}
    total = sum(int(t) for _, t in msgs)
    return f"{len(msgs)} msg · {total // 60} min {total % 60} s" + ("" if codigos == {"0"} else f" · saída {','.join(sorted(codigos))}")


def cel(v, testes, texto):
    p = placar(v, *testes)
    if not p:
        return texto
    ok, n, falhas = p
    s = f"{texto} · **{ok}/{n}** conferências"
    if falhas:
        s += " (falhou: " + "; ".join(f["nome"] for f in falhas[:2]) + ")"
    return s


CORRIGIDO = """Rodar de novo até passar. Tudo abaixo foi corrigido e o teste refeito, menos o último item (cosmético).

1. **Teste sem isolamento (1ª rodada da manhã):** na pasta vazia, o Claude procurou no disco, achou o material em `/workspace` e usou (passo 6). Os testes passaram a rodar dentro do `bwrap`; a rodada inteira da manhã foi refeita.
2. **Pasta de teste reaproveitada:** o harness reusava a pasta de uma rodada anterior quando ela já existia (apareceram arquivos `-anterior`). Agora todo teste sem `--dir` começa numa pasta nova, e a prova também começa limpa.
3. **Harness editado durante o lote:** o bash lê o script aos poucos; a edição quebrou o pós-processamento do passo 8. Passo 8 refeito; o harness passou a ser trocado só com `mv`.
4. **Apresentação do passo 7:** o rodapé sobrepunha o texto em 1280 × 720 (slides 1 e 3). O prompt do aluno ganhou "cabe numa tela de notebook (1280 × 720) sem nada sobreposto"; refeito e conferido em 1280 × 720 e 1366 × 657.
5. **`/impeccable` na pasta vazia:** abriu dois subagentes em segundo plano e o `claude -p` terminou antes do relatório (no Claude Code normal, o aviso chega depois). O prompt do teste pede tudo na mesma resposta; refeito.
6. **`frontend-design` da tarde:** o teste recebeu o prompt do `/criar-pagina` por engano; refeito com `/frontend-design`.
7. **`/criar-pagina` na trilha:** o aviso de design do Impeccable (hook no fim da resposta) fez a última mensagem virar um relatório de design, sem o fechamento da fase. Entrou `hook.quiet` no `.impeccable/config.json` e uma regra no `CLAUDE.md` da tarde; refeito (`tarde/criar-pagina-de-novo`): fecha no formato da fase, com a linha "Ajuste de design".
8. **Frase inferida como fala de cliente:** a crítica do `/impeccable` achou na página uma frase marcada `(inferida)` na pesquisa apresentada como citação. O `/criar-pagina` agora proíbe; no teste refeito, nenhuma frase inferida aparece na página.
9. **Fechamento fora da pasta da aula:** o `/criar-pagina` na pasta vazia sugeria `/criar-conteudo`, que não existia lá. Corrigido e refeito.
10. **Capa do relatório:** a frase da capa dizia "2 de 6 fases" enquanto o menu já mostrava 4. A contagem saiu da frase; `/instalar` refeito (`tarde/instalar-revisado`).
11. **Posts de 1 lâmina** mostravam a barrinha "1 / 1" embaixo (`display:flex` vence o atributo `hidden`). Uma linha de CSS no esqueleto da lâmina e no exemplo; teste não refeito (fora da lâmina, não aparece no relatório nem no print).

"""

DEPENDE = """| O quê | Onde | Por que não deu para testar aqui | Plano B na aula |
|---|---|---|---|
| **Login Google e conector Google Drive** (claude.ai → Configurações → Conectores) | Manhã, passo 2 | Precisa da conta Google de cada aluno e de autorizar o conector; os testes rodaram sem conectores para não escrever em conta real | O plano B do passo 2 lê os mesmos dados dos CSV da pasta (testado: números 100% certos). Conta da empresa bloqueada: usar a pessoal |
| **Importar o .xlsx no Google Planilhas** | Manhã, passo 2 | Precisa de conta Google | O `.xlsx` foi gerado com openpyxl e abre no Excel/LibreOffice; se o import falhar, usar o plano B |
| **Claude Motion** | Manhã, passo 8 | Beta só nos planos **Team e Enterprise** (ajuda oficial da Anthropic, out/2026); no Pro e no Max não aparece | Plano B testado: animação em HTML/CSS feita no Claude Code, gravada com a gravação de tela do Windows (Win+Alt+R) ou do Mac (Cmd+Shift+5) |
| **Artifacts do claude.ai** (Docs, Slides, Dashboard) | Manhã, passo 7 (parte 4) | É a interface web do claude.ai; Dashboards está em beta nos planos pagos e os nomes dos botões podem mudar | As três páginas do Claude Code (testadas) cobrem o mesmo; se a opção Dashboard não aparecer, pedir "um artifact interativo em HTML" |
| **Dribbble** | Manhã, passo 6 | Site de terceiros; pode pedir login ou bloquear | A imagem própria `passos/06-design-system/referencia-design.png` (testada) |
| **Internet para o Impeccable** | Tarde (`/impeccable` e a conferência automática de HTML) | Testado aqui com internet: na primeira vez ele baixa o motor (~21 MB) do GitHub do projeto. Em Wi-Fi lento, o download pode passar dos 5 s do hook e falhar em silêncio até completar | O `/instalar` já dispara o download em segundo plano no começo da tarde. Sem internet, as skills seguem sem o Impeccable (a regra está no CLAUDE.md da tarde). Se travar: apagar `.claude/settings.json` da pasta desliga os hooks |
| **Busca na web** | Tarde (`/mapear-empresa`, `/mapear-concorrentes`, `/criar-conteudo`) | Testado com internet | Sem internet, as fases marcam `[a confirmar]`; dá para seguir com a memória do `/instalar` |
| **Node.js** | `find-skills` (manhã) e o print de conferência do `/criar-pagina` (`npx playwright --channel chrome`, usa o Chrome do computador) | Testado com Node 20 | Sem Node: instalar skill pelo professor; no `/criar-pagina`, a skill pede ao dono para olhar a página no navegador |
| **Google Fonts e mapa do Google** | Páginas e posts | Carregam da internet | Sem internet, as páginas abrem com fontes do sistema e o mapa mostra o fundo desenhado com o nome da cidade |
"""

# (passo/skill, [testes aula], texto aula, [pastas aula], [testes vazia], texto vazia, [pastas vazia], resultado)
MANHA = [
    ("1 · Abrir a pasta", ["passo-01"], "Respondeu o que dá para fazer, citando a Torra Viva, os dados e os 8 passos", ["manha/passo-01"],
     [], "Pasta sem nada: diz que está vazia e oferece o que dá para fazer", ["pasta-vazia/manha-passo-01"], "passou"),
    ("2 · Google Drive e planilhas (plano B: CSV)", ["passo-02"], "6 mensagens seguidas; todos os números batem com o cálculo direto dos CSV (`scripts/respostas-certas.py`)", ["manha/passo-02"],
     [], "Sem `dados/`: avisa que não achou os CSV e não inventa número", ["pasta-vazia/manha-passo-02"], "passou · conector do Drive não testado (externo)"),
    ("3 · Prompts (Papel, Contexto, Tarefa, Formato)", [f"passo-03-ex{i}-{t}" for i in range(1, 5) for t in ("ruim", "bom")], "4 pares ruim × bom, cada um numa conversa nova", [f"manha/passo-03-ex{i}-{t}" for i in range(1, 5) for t in ("ruim", "bom")],
     [], "Exemplo 1 sem o CLAUDE.md: o ruim vira modelo genérico com campos; o bom funciona igual", ["pasta-vazia/manha-passo-03-ex1-ruim", "pasta-vazia/manha-passo-03-ex1-bom"], "passou"),
    ("4 · Skill pronta `/eli5`", ["passo-04-margem", "passo-04-arquivo"], "Conceito (margem de contribuição) e arquivo (`orcamento.csv`), nas 5 partes", ["manha/passo-04-margem", "manha/passo-04-arquivo"],
     [], "Só a skill: explica o conceito no mesmo formato", ["pasta-vazia/manha-passo-04-eli5"], "passou"),
    ("5 · Criar skill `/resposta-cliente`", ["passo-05-criar", "passo-05-uso-1", "passo-05-uso-2", "passo-05-uso-3"], "Criou a skill (sem skill-creator) e respondeu as 3 mensagens; orçamento de 30 pessoas com a conta certa; `[confirmar]` no que as políticas não dizem", ["manha/passo-05-criar", "manha/passo-05-uso-1", "manha/passo-05-uso-2", "manha/passo-05-uso-3"],
     [], "Só a skill, outra empresa: fez a pergunta única (nome e tom) e respondeu sem inventar preço", ["pasta-vazia/manha-passo-05-resposta-cliente"], "passou"),
    ("6 · Design system a partir de imagem", ["passo-06"], "Leu o PNG e tirou as 6 cores certas, as 2 fontes e o `:root`, com contraste conferido", ["manha/passo-06"],
     [], "Sem a imagem: não inventa o design system e pede a imagem ou uma descrição", ["pasta-vazia/manha-passo-06"], "passou"),
    ("7 · Páginas web", ["passo-07-calculadora", "passo-07-dashboard", "passo-07-apresentacao"], "Calculadora com a conta certa em 10 de 10 casos; dashboard com totais e filtro certos; apresentação de 6 slides que cabe em 1280 × 720", ["manha/passo-07-calculadora", "manha/passo-07-dashboard", "manha/passo-07-apresentacao"],
     [], "Sem `orcamento.csv` e sem design system: não inventa regra de preço e pergunta como seguir", ["pasta-vazia/manha-passo-07-calculadora"], "passou · Artifacts do claude.ai não testados (externo)"),
    ("8 · Animação (plano B do Claude Motion)", ["passo-08"], "Animação HTML/CSS de 20 s, 9:16, com os números do B2B tirados do CSV e `prefers-reduced-motion`", ["manha/passo-08"],
     [], "Sem dados e sem design system: pergunta como seguir", ["pasta-vazia/manha-passo-08"], "passou · Claude Motion não testado (só Team/Enterprise)"),
    ("skill `find-skills`", ["skill-find-skills"], "Buscou com `npx skills find` e listou 3 opções com autor e instalações, sem instalar", ["manha/skill-find-skills"],
     [], "Só a skill: o mesmo resultado", ["pasta-vazia/manha-find-skills"], "passou · precisa de Node e internet"),
    ("skill `frontend-design`", ["skill-frontend-design"], "Cartão fidelidade da Torra Viva; o carimbo marca e desmarca", ["manha/skill-frontend-design"],
     [], "Só a skill: cartão fidelidade de uma padaria, que funciona no celular", ["pasta-vazia/manha-frontend-design"], "passou"),
    ("skill `humanizer`", ["skill-humanizer"], "Tirou os vícios de IA do texto do site", ["manha/skill-humanizer"],
     [], "Só a skill: o mesmo com o texto de uma padaria", ["pasta-vazia/manha-humanizer"], "passou"),
    ("skill `grill-me` (+ `grilling`)", ["skill-grill-me"], "2 rodadas de perguntas respondidas como a Helena e o plano salvo em `meu-trabalho/plano-capsulas.md`", ["manha/skill-grill-me"],
     [], "`grill-me` + `grilling` e `grilling` sozinha: entrevistaram e salvaram o plano", ["pasta-vazia/manha-grill-me", "pasta-vazia/manha-grilling"], "passou"),
]
TARDE = [
    ("`/instalar`", ["instalar", "instalar-revisado"], "7 perguntas respondidas como a Helena; memória gravada, números só em `numeros.md`, RESULTADO.html criado. Refeito depois do ajuste da frase da capa", ["tarde/instalar", "tarde/instalar-revisado"],
     ["instalar"], "Pasta sem a estrutura: criou `memoria/`, `marca/`, `controle/` e pulou o RESULTADO.html, avisando", ["pasta-vazia/tarde-instalar"]),
    ("`/mapear-empresa`", ["mapear-empresa"], "3 frentes de pesquisa na internet; 4 arquivos com fonte; 5 blocos do relatório", ["tarde/mapear-empresa"],
     ["mapear-empresa"], "Sem `/instalar`: fez a pergunta única, gravou a memória e pesquisou", ["pasta-vazia/tarde-mapear-empresa"]),
    ("`/marca`", ["marca"], "Leu um print (o mockup do passo 6) e montou a marca com as cores dele", ["tarde/marca"],
     ["marca"], "Sem site nem logo: sugeriu cores e fontes marcadas `[sugestão]`, com contraste conferido", ["pasta-vazia/tarde-marca"]),
    ("`/mapear-concorrentes`", ["mapear-concorrentes"], "Concorrentes, força digital, mapa 2x2 e espaços vazios no relatório", ["tarde/mapear-concorrentes"],
     ["mapear-concorrentes"], "Sem memória: perguntou o mínimo e pesquisou concorrentes reais da cidade", ["pasta-vazia/tarde-mapear-concorrentes"]),
    ("`/criar-oferta`", ["criar-oferta"], "Proposta de valor, oferta de entrada e roteiro de venda", ["tarde/criar-oferta"],
     ["criar-oferta"], "Sem pesquisa: oferta marcada como hipótese no topo", ["pasta-vazia/tarde-criar-oferta"]),
    ("`/criar-pagina`", ["criar-pagina", "criar-pagina-de-novo"], "Página de vendas, formulário para o WhatsApp e mapa; sem rolagem lateral no celular. Na 1ª rodada o aviso de design do Impeccable virou a última mensagem; refeito com a regra nova do CLAUDE.md (fechamento por último) e sem citar frase inferida", ["tarde/criar-pagina", "tarde/criar-pagina-de-novo"],
     ["criar-pagina"], "Sem marca e sem oferta: marca `[sugestão]` e oferta mínima anotada no topo da copy", ["pasta-vazia/tarde-criar-pagina"]),
    ("`/criar-conteudo` (só HTML)", ["criar-conteudo", "criar-conteudo-forno"], "Carrossel de 7 lâminas + 2 posts em HTML, `?n=` funcionando, relatório com as lâminas em iframe; nenhum PNG, nenhum Playwright. Rodou também sobre o Forno da Vila (virou o exemplo novo)", ["tarde/criar-conteudo", "tarde/criar-conteudo-forno"],
     ["criar-conteudo"], "Sem nada: perguntou o mínimo, sugeriu a marca e entregou carrossel e posts em HTML", ["pasta-vazia/tarde-criar-conteudo"]),
    ("`/impeccable` (sem plugin)", ["impeccable"], "Crítica da página de vendas sem alterar arquivo; `impeccable telemetry status` = off pelo `.impeccable/config.json`", ["tarde/impeccable"],
     ["impeccable"], "Só a skill (com os scripts dela): crítica completa com o detector", ["pasta-vazia/tarde-impeccable"]),
    ("`/sobre-mim`", ["sobre-mim"], "Entrevista respondida como a Helena; mapa em `memoria/sobre-mim.md` (usou a pasta da aula), `falta-trazer.md` e seção no CLAUDE.md", ["tarde/sobre-mim"],
     ["sobre-mim"], "Pasta vazia: criou `contexto/` e um CLAUDE.md mínimo", ["pasta-vazia/tarde-sobre-mim"]),
    ("`/sugerir-automacoes`", ["sugerir-automacoes"], "Leu o mapa do `/sobre-mim` e gravou 10 sugestões com impacto, esforço e próximo passo", ["tarde/sugerir-automacoes"],
     ["sugerir-automacoes"], "Sem mapa: fez as 4 perguntas rápidas e gravou `entregas/sugestoes.md`", ["pasta-vazia/tarde-sugerir-automacoes"]),
    ("`frontend-design` (cópia da tarde)", [], "Usada por dentro do `/criar-pagina` e do `/criar-conteudo`", ["tarde/criar-pagina"],
     ["frontend-design"], "Só a skill: página do café da manhã para empresas de uma padaria", ["pasta-vazia/tarde-frontend-design"]),
]

L = ["# Resultados dos testes",
     "",
     "Cada passo da manhã e cada skill (manhã e tarde) rodou como um aluno faria: `claude -p \"<pedido do aluno>\" --model opus --dangerously-skip-permissions --output-format text`, numa cópia limpa da pasta (`git archive`) e numa pasta vazia só com a skill. Nos testes com entrevista, o próprio pedido traz as respostas simuladas do aluno.",
     "",
     "**Como foi rodado** (detalhes em `rodar-teste.sh`):",
     "- `--setting-sources project,local`: sem os plugins e skills globais desta máquina (o aluno não tem). Por isso a `skill-creator` não estava disponível: o passo 5 foi testado no caso mais difícil.",
     "- `--strict-mcp-config`: sem conectores (Drive, Notion...). Nenhum teste escreveu em conta real.",
     "- Dentro do `bwrap`, que esconde o resto do disco: o Claude só enxerga a pasta do teste (na 1ª rodada, sem isso, ele achou o material em outra pasta; a rodada foi descartada).",
     "- Na pasta vazia, `DO_NOT_TRACK=1` (lá não existe o `.impeccable/config.json`).",
     "- As conferências automáticas estão em `verificar/` (`verificar-manha.mjs`, `verificar-tarde.mjs`): abrem os HTML no Chrome, testam a calculadora contra as regras do `orcamento.csv` calculadas à parte, contam lâminas, conferem números contra `scripts/respostas-certas.py` etc. Resultado em `manha/verificacao.json`, `tarde/verificacao.json` e `pasta-vazia/verificacao-tarde.json`; prints em `manha/prints/` e `tarde/prints/`.",
     "- Os tempos abaixo foram medidos com até 10 testes rodando juntos: com a API disputada, os testes longos levaram mais que levariam para um aluno sozinho.",
     "",
     "Em cada prova: `prompt-N.txt` (o que o aluno mandou), `transcricao.txt` (stdout), `arquivos-gerados.txt` (lista) e `arquivos/` (cópia do que foi criado ou alterado), mais `info.txt` (tempo e código de saída).",
     "",
     "## Manhã",
     "",
     "| Passo / skill | Teste na pasta da aula | Teste na pasta vazia | Resultado | Caminho da prova |",
     "|---|---|---|---|---|"]
for nome, ta, xa, pa, tv, xv, pv, res in MANHA:
    L.append(f"| {nome} | {cel(VM, ta, xa)} ({', '.join(tempo(p) for p in pa[:1])}) | {xv} | {res} | {' · '.join('`' + p + '`' for p in pa + pv)} |")
L += ["", "## Tarde", "",
      "Na pasta da aula, a trilha rodou **inteira e em sequência numa pasta só**, como a aluna faria no dia: `/instalar` → `/mapear-empresa` → `/marca` (com um print) → `/mapear-concorrentes` → `/criar-oferta` → `/criar-pagina` → `/criar-conteudo` → `/impeccable`. A empresa é a Torra Viva (fictícia; o site não existe, então a pesquisa da empresa volta vazia e vira `[a confirmar]`, e a de mercado, cliente e concorrentes é real). Os extras rodaram em outra pasta da aula. Na pasta vazia, a empresa é a Padaria Trigo Azul (fictícia, Campinas).",
      "",
      "| Skill | Teste na pasta da aula | Teste na pasta vazia | Resultado | Caminho da prova |",
      "|---|---|---|---|---|"]
for nome, ta, xa, pa, tv, xv, pv in TARDE:
    pa_ = placar(VA, *ta); pv_ = placar(VV, *tv)
    falhas = (pa_[2] if pa_ else []) + (pv_[2] if pv_ else [])
    res = "passou" if not falhas else "ver falhas"
    L.append(f"| {nome} | {cel(VA, ta, xa)} ({tempo(pa[0])}) | {cel(VV, tv, xv)} ({tempo(pv[0])}) | {res} | {' · '.join('`' + p + '`' for p in pa + pv)} |")
p = placar(VA, "todas-as-skills")
L += ["", f"**Nenhuma skill fala de almoço:** `grep -ri almoço manha/.claude tarde/.claude` vazio{' (conferido no verificador)' if p and p[0] == p[1] else ''}.", ""]
L += ["## O que deu errado e foi corrigido", "", CORRIGIDO, "## Depende de algo externo (e o plano B para a aula)", "", DEPENDE]
open(T / "RESULTADOS.md", "w", encoding="utf-8").write("\n".join(L) + "\n")
print("\n".join(L))
