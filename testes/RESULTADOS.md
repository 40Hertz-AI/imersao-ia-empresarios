# Resultados dos testes

Cada passo da manhã e cada skill (manhã e tarde) rodou como um aluno faria: `claude -p "<pedido do aluno>" --model opus --dangerously-skip-permissions --output-format text`, numa cópia limpa da pasta (`git archive`) e numa pasta vazia só com a skill. Nos testes com entrevista, o próprio pedido traz as respostas simuladas do aluno.

**Como foi rodado** (detalhes em `rodar-teste.sh`):
- `--setting-sources project,local`: sem os plugins e skills globais desta máquina (o aluno não tem). Por isso a `skill-creator` não estava disponível: o passo 5 foi testado no caso mais difícil.
- `--strict-mcp-config`: sem conectores (Drive, Notion...). Nenhum teste escreveu em conta real.
- Dentro do `bwrap`, que esconde o resto do disco: o Claude só enxerga a pasta do teste (na 1ª rodada, sem isso, ele achou o material em outra pasta; a rodada foi descartada).
- Na pasta vazia, `DO_NOT_TRACK=1` (lá não existe o `.impeccable/config.json`).
- As conferências automáticas estão em `verificar/` (`verificar-manha.mjs`, `verificar-tarde.mjs`): abrem os HTML no Chrome, testam a calculadora contra as regras do `orcamento.csv` calculadas à parte, contam lâminas, conferem números contra `scripts/respostas-certas.py` etc. Resultado em `manha/verificacao.json`, `tarde/verificacao.json` e `pasta-vazia/verificacao-tarde.json`; prints em `manha/prints/` e `tarde/prints/`.
- Os tempos abaixo foram medidos com até 10 testes rodando juntos: com a API disputada, os testes longos levaram mais que levariam para um aluno sozinho.

Em cada prova: `prompt-N.txt` (o que o aluno mandou), `transcricao.txt` (stdout), `arquivos-gerados.txt` (lista) e `arquivos/` (cópia do que foi criado ou alterado), mais `info.txt` (tempo e código de saída).

## Manhã

| Passo / skill | Teste na pasta da aula | Teste na pasta vazia | Resultado | Caminho da prova |
|---|---|---|---|---|
| 1 · Abrir a pasta | Respondeu o que dá para fazer, citando a Torra Viva, os dados e os 8 passos · **1/1** conferências (1 msg · 0 min 10 s) | Pasta sem nada: diz que está vazia e oferece o que dá para fazer | passou | `manha/passo-01` · `pasta-vazia/manha-passo-01` |
| 2 · Google Drive e planilhas (plano B: CSV) | 6 mensagens seguidas; todos os números batem com o cálculo direto dos CSV (`scripts/respostas-certas.py`) · **10/10** conferências (6 msg · 25 min 28 s) | Sem `dados/`: avisa que não achou os CSV e não inventa número | passou · conector do Drive não testado (externo) | `manha/passo-02` · `pasta-vazia/manha-passo-02` |
| 3 · Prompts (Papel, Contexto, Tarefa, Formato) | 4 pares ruim × bom, cada um numa conversa nova · **10/10** conferências (1 msg · 0 min 11 s) | Exemplo 1 sem o CLAUDE.md: o ruim vira modelo genérico com campos; o bom funciona igual | passou | `manha/passo-03-ex1-ruim` · `manha/passo-03-ex1-bom` · `manha/passo-03-ex2-ruim` · `manha/passo-03-ex2-bom` · `manha/passo-03-ex3-ruim` · `manha/passo-03-ex3-bom` · `manha/passo-03-ex4-ruim` · `manha/passo-03-ex4-bom` · `pasta-vazia/manha-passo-03-ex1-ruim` · `pasta-vazia/manha-passo-03-ex1-bom` |
| 4 · Skill pronta `/eli5` | Conceito (margem de contribuição) e arquivo (`orcamento.csv`), nas 5 partes · **2/2** conferências (1 msg · 0 min 17 s) | Só a skill: explica o conceito no mesmo formato | passou | `manha/passo-04-margem` · `manha/passo-04-arquivo` · `pasta-vazia/manha-passo-04-eli5` |
| 5 · Criar skill `/resposta-cliente` | Criou a skill (sem skill-creator) e respondeu as 3 mensagens; orçamento de 30 pessoas com a conta certa; `[confirmar]` no que as políticas não dizem · **6/6** conferências (1 msg · 24 min 56 s) | Só a skill, outra empresa: fez a pergunta única (nome e tom) e respondeu sem inventar preço | passou | `manha/passo-05-criar` · `manha/passo-05-uso-1` · `manha/passo-05-uso-2` · `manha/passo-05-uso-3` · `pasta-vazia/manha-passo-05-resposta-cliente` |
| 6 · Design system a partir de imagem | Leu o PNG e tirou as 6 cores certas, as 2 fontes e o `:root`, com contraste conferido · **4/4** conferências (1 msg · 25 min 12 s) | Sem a imagem: não inventa o design system e pede a imagem ou uma descrição | passou | `manha/passo-06` · `pasta-vazia/manha-passo-06` |
| 7 · Páginas web | Calculadora com a conta certa em 10 de 10 casos; dashboard com totais e filtro certos; apresentação de 6 slides que cabe em 1280 × 720 · **22/22** conferências (1 msg · 1 min 48 s) | Sem `orcamento.csv` e sem design system: não inventa regra de preço e pergunta como seguir | passou · Artifacts do claude.ai não testados (externo) | `manha/passo-07-calculadora` · `manha/passo-07-dashboard` · `manha/passo-07-apresentacao` · `pasta-vazia/manha-passo-07-calculadora` |
| 8 · Animação (plano B do Claude Motion) | Animação HTML/CSS de 20 s, 9:16, com os números do B2B tirados do CSV e `prefers-reduced-motion` · **6/6** conferências (1 msg · 19 min 5 s) | Sem dados e sem design system: pergunta como seguir | passou · Claude Motion não testado (só Team/Enterprise) | `manha/passo-08` · `pasta-vazia/manha-passo-08` |
| skill `find-skills` | Buscou com `npx skills find` e listou 3 opções com autor e instalações, sem instalar · **1/1** conferências (1 msg · 0 min 14 s) | Só a skill: o mesmo resultado | passou · precisa de Node e internet | `manha/skill-find-skills` · `pasta-vazia/manha-find-skills` |
| skill `frontend-design` | Cartão fidelidade da Torra Viva; o carimbo marca e desmarca · **4/4** conferências (1 msg · 25 min 58 s) | Só a skill: cartão fidelidade de uma padaria, que funciona no celular | passou | `manha/skill-frontend-design` · `pasta-vazia/manha-frontend-design` |
| skill `humanizer` | Tirou os vícios de IA do texto do site · **1/1** conferências (1 msg · 17 min 26 s) | Só a skill: o mesmo com o texto de uma padaria | passou | `manha/skill-humanizer` · `pasta-vazia/manha-humanizer` |
| skill `grill-me` (+ `grilling`) | 2 rodadas de perguntas respondidas como a Helena e o plano salvo em `meu-trabalho/plano-capsulas.md` · **1/1** conferências (1 msg · 0 min 42 s) | `grill-me` + `grilling` e `grilling` sozinha: entrevistaram e salvaram o plano | passou | `manha/skill-grill-me` · `pasta-vazia/manha-grill-me` · `pasta-vazia/manha-grilling` |

## Tarde

Na pasta da aula, a trilha rodou **inteira e em sequência numa pasta só**, como a aluna faria no dia: `/instalar` → `/mapear-empresa` → `/marca` (com um print) → `/mapear-concorrentes` → `/criar-oferta` → `/criar-pagina` → `/criar-conteudo` → `/impeccable`. A empresa é a Torra Viva (fictícia; o site não existe, então a pesquisa da empresa volta vazia e vira `[a confirmar]`, e a de mercado, cliente e concorrentes é real). Os extras rodaram em outra pasta da aula. Na pasta vazia, a empresa é a Padaria Trigo Azul (fictícia, Campinas).

| Skill | Teste na pasta da aula | Teste na pasta vazia | Resultado | Caminho da prova |
|---|---|---|---|---|
| `/instalar` | 7 perguntas respondidas como a Helena; memória gravada, números só em `numeros.md`, RESULTADO.html criado. Refeito depois do ajuste da frase da capa · **16/16** conferências (1 msg · 0 min 46 s) | Pasta sem a estrutura: criou `memoria/`, `marca/`, `controle/` e pulou o RESULTADO.html, avisando · **6/6** conferências (1 msg · 0 min 21 s) | passou | `tarde/instalar` · `tarde/instalar-revisado` · `pasta-vazia/tarde-instalar` |
| `/mapear-empresa` | 3 frentes de pesquisa na internet; 4 arquivos com fonte; 5 blocos do relatório · **13/13** conferências (1 msg · 21 min 54 s) | Sem `/instalar`: fez a pergunta única, gravou a memória e pesquisou · **6/6** conferências (1 msg · 20 min 36 s) | passou | `tarde/mapear-empresa` · `pasta-vazia/tarde-mapear-empresa` |
| `/marca` | Leu um print (o mockup do passo 6) e montou a marca com as cores dele · **2/2** conferências (1 msg · 0 min 46 s) | Sem site nem logo: sugeriu cores e fontes marcadas `[sugestão]`, com contraste conferido · **2/2** conferências (1 msg · 0 min 38 s) | passou | `tarde/marca` · `pasta-vazia/tarde-marca` |
| `/mapear-concorrentes` | Concorrentes, força digital, mapa 2x2 e espaços vazios no relatório · **4/4** conferências (1 msg · 3 min 19 s) | Sem memória: perguntou o mínimo e pesquisou concorrentes reais da cidade · **3/3** conferências (1 msg · 2 min 3 s) | passou | `tarde/mapear-concorrentes` · `pasta-vazia/tarde-mapear-concorrentes` |
| `/criar-oferta` | Proposta de valor, oferta de entrada e roteiro de venda · **3/3** conferências (1 msg · 1 min 4 s) | Sem pesquisa: oferta marcada como hipótese no topo · **3/3** conferências (1 msg · 0 min 42 s) | passou | `tarde/criar-oferta` · `pasta-vazia/tarde-criar-oferta` |
| `/criar-pagina` | Página de vendas, formulário para o WhatsApp e mapa; sem rolagem lateral no celular. Na 1ª rodada o aviso de design do Impeccable virou a última mensagem; refeito com a regra nova do CLAUDE.md (fechamento por último) e sem citar frase inferida · **9/9** conferências (1 msg · 7 min 45 s) | Sem marca e sem oferta: marca `[sugestão]` e oferta mínima anotada no topo da copy · **3/3** conferências (1 msg · 6 min 33 s) | passou | `tarde/criar-pagina` · `tarde/criar-pagina-de-novo` · `pasta-vazia/tarde-criar-pagina` |
| `/criar-conteudo` (só HTML) | Carrossel de 7 lâminas + 2 posts em HTML, `?n=` funcionando, relatório com as lâminas em iframe; nenhum PNG, nenhum Playwright. Rodou também sobre o Forno da Vila (virou o exemplo novo) · **46/46** conferências (1 msg · 3 min 45 s) | Sem nada: perguntou o mínimo, sugeriu a marca e entregou carrossel e posts em HTML · **18/18** conferências (1 msg · 20 min 36 s) | passou | `tarde/criar-conteudo` · `tarde/criar-conteudo-forno` · `pasta-vazia/tarde-criar-conteudo` |
| `/impeccable` (sem plugin) | Crítica da página de vendas sem alterar arquivo; `impeccable telemetry status` = off pelo `.impeccable/config.json` · **3/3** conferências (2 msg · 6 min 9 s) | Só a skill (com os scripts dela): crítica completa com o detector · **1/1** conferências (1 msg · 3 min 57 s) | passou | `tarde/impeccable` · `pasta-vazia/tarde-impeccable` |
| `/sobre-mim` | Entrevista respondida como a Helena; mapa em `memoria/sobre-mim.md` (usou a pasta da aula), `falta-trazer.md` e seção no CLAUDE.md · **4/4** conferências (1 msg · 0 min 26 s) | Pasta vazia: criou `contexto/` e um CLAUDE.md mínimo · **4/4** conferências (1 msg · 0 min 36 s) | passou | `tarde/sobre-mim` · `pasta-vazia/tarde-sobre-mim` |
| `/sugerir-automacoes` | Leu o mapa do `/sobre-mim` e gravou 10 sugestões com impacto, esforço e próximo passo · **3/3** conferências (1 msg · 0 min 48 s) | Sem mapa: fez as 4 perguntas rápidas e gravou `entregas/sugestoes.md` · **2/2** conferências (1 msg · 0 min 47 s) | passou | `tarde/sugerir-automacoes` · `pasta-vazia/tarde-sugerir-automacoes` |
| `frontend-design` (cópia da tarde) | Usada por dentro do `/criar-pagina` e do `/criar-conteudo` (1 msg · 7 min 45 s) | Só a skill: página do café da manhã para empresas de uma padaria · **2/2** conferências (1 msg · 2 min 18 s) | passou | `tarde/criar-pagina` · `pasta-vazia/tarde-frontend-design` |

**Nenhuma skill fala de almoço:** `grep -ri almoço manha/.claude tarde/.claude` vazio (conferido no verificador).

## O que deu errado e foi corrigido

Rodar de novo até passar. Tudo abaixo foi corrigido e o teste refeito, menos o último item (cosmético).

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


## Depende de algo externo (e o plano B para a aula)

| O quê | Onde | Por que não deu para testar aqui | Plano B na aula |
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

