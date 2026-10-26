# O que a IA pode fazer pela Helena
Base: mapa do trabalho (`memoria/sobre-mim.md`) e `memoria/falta-trazer.md` · Data: 2026-10-25

## Em uma frase
Os dois processos que mais pesam, o orçamento para escritório (~40 min, ~6 vezes por semana) e o planejamento da torra (~2 h toda segunda), viram duas skills: a IA faz a conta e o rascunho, e a Helena só confere e decide.

## As 3 primeiras (fazer esta semana)

### 1. Trazer a tabela de preços e o modelo de proposta para a pasta
- **Processo:** Orçamento para escritório (base para a sugestão 2).
- **Tipo:** Contexto · **Impacto** 3 · **Esforço** 1
- **Por quê:** sem a tabela e o modelo, a IA não consegue fazer a conta do kg e dos descontos nem escrever a proposta no seu formato.
- **Próximo passo:** coloque o Excel da tabela de preços e o Word do modelo de proposta em `dados/`. Depois marque os dois como `[x]` em `memoria/falta-trazer.md`.

### 2. Skill `/orcamento`: proposta pronta para revisar
- **Processo:** Orçamento para escritório. Hoje leva ~40 min, ~6 vezes por semana: cerca de 4 h por semana (estimativa feita com os números que você deu). O tempo poupado só dá para medir depois de testar: `[a confirmar]`.
- **Tipo:** Skill nova · **Impacto** 3 · **Esforço** 2
- **O que faz:** você cola o pedido da empresa (e-mail ou WhatsApp) e diz quantas pessoas tem o escritório. A IA calcula os kg e os descontos pela tabela, escreve a proposta no seu modelo e grava o orçamento numa lista (`entregas/orcamentos.md`, com a data e o status "enviado"). **Você confere o preço e envia.**
- **Próximo passo:** com os arquivos em `dados/`, me diga "Cria a skill /orcamento" e testamos com um pedido real desta semana.

### 3. Skill `/planejar-torra`: a escala da segunda em minutos
- **Processo:** Planejamento da torra (~2 h toda segunda, a conta é feita na mão e já faltou café do Clube).
- **Tipo:** Skill nova + rotina de segunda · **Impacto** 3 · **Esforço** 2
- **O que faz:** lê os pedidos exportados da Nuvemshop, a lista do Clube e a planilha das empresas, soma os kg de cada café, separa o do Clube primeiro e monta a escala de terça e quinta. Também avisa se algum café verde parece não dar `[a confirmar estoque]`.
- **Próximo passo:** na próxima segunda, exporte os pedidos da Nuvemshop em CSV (planilha simples) e coloque em `dados/`, junto com a lista do Clube e a planilha das empresas. Depois diga "Cria a skill /planejar-torra".

## Todas as sugestões

| # | Sugestão | Processo | Tipo | Impacto | Esforço | Próximo passo |
|---|---|---|---|---|---|---|
| 1 | Tabela de preços e modelo de proposta na pasta | Orçamento | Contexto | 3 | 1 | Coloque o Excel e o Word em `dados/` |
| 2 | `/orcamento`: conta e proposta para revisar | Orçamento | Skill nova | 3 | 2 | "Cria a skill /orcamento" |
| 3 | `/planejar-torra`: soma os kg e monta a escala | Planejamento da torra | Skill nova + rotina | 3 | 2 | Exporte os pedidos da Nuvemshop (CSV) para `dados/` |
| 4 | `/follow-up`: lista os orçamentos sem resposta e escreve a mensagem de retomar o contato | Orçamento (dor: esquece de cobrar) | Skill nova + rotina | 3 | 2 | Criar depois da `/orcamento` (ela usa a lista `entregas/orcamentos.md`) |
| 5 | Resposta rápida ao pedido de preço | Orçamento (passo 2) | Comando pronto | 2 | 1 | Cole: "Escreva uma resposta curta e cordial para este pedido de orçamento de café para escritório, perguntando quantas pessoas trabalham lá e com que frequência querem a entrega: <cole o pedido>" |
| 6 | Lista do Clube e planilha das empresas na pasta (ou dizer onde ficam) | Planejamento da torra | Contexto | 2 | 1 | Coloque as duas em `dados/` ou me diga onde estão |
| 7 | Rodar o `/instalar` | Tudo (a IA ainda não sabe produtos, preços e equipe) | Contexto | 2 | 1 | `/instalar` |
| 8 | Conectar o Google Drive (ler o relatório mensal de vendas e as planilhas sem baixar) | Fechamento do mês / torra | Conexão | 2 | 3 | Instalar uma conexão (MCP) do Google Drive no Claude Code; precisa de configuração da conta Google |
| 9 | Conectar o Gmail (ler os pedidos de preço e criar só rascunhos) | Orçamento | Conexão | 2 | 3 | Instalar uma conexão (MCP) do Gmail; a IA cria rascunho, você envia |
| 10 | `/resumo-do-mes` para a contadora | Fechamento do mês | Skill nova + rotina | [a confirmar] | 2 | Coloque o relatório mensal de vendas em `dados/`; antes, contar quanto tempo leva hoje |

## Rotinas da semana

| Dia | Comando | O que entrega |
|---|---|---|
| Segunda, 7h | `/planejar-torra` | Escala da torra de terça e quinta, com o Clube separado primeiro |
| Quarta e sexta | `/orcamento` (a cada pedido) | Proposta pronta para você conferir e enviar |
| Quarta e sexta | `/follow-up` | Orçamentos sem resposta há mais de 3 dias `[a confirmar prazo]`, com a mensagem pronta para revisar |
| Fim do mês | `/resumo-do-mes` | Resumo das vendas para mandar à contadora |

Nada roda sozinho: você digita o comando no dia. Rodar sem você pedir exige agendamento (esforço 3).

## Skills para criar

| Nome | O que faz | Arquivos que lê |
|---|---|---|
| `/orcamento` | Calcula os kg e os descontos, escreve a proposta no seu modelo e registra o orçamento | `dados/` (tabela de preços, modelo de proposta), `memoria/preferencias.md` |
| `/planejar-torra` | Soma os kg de cada café dos 3 canais e monta a escala da torra | `dados/` (CSV da Nuvemshop, lista do Clube, planilha das empresas) |
| `/follow-up` | Acha os orçamentos parados e escreve a mensagem de retomar o contato | `entregas/orcamentos.md`, `memoria/preferencias.md` |
| `/resumo-do-mes` | Organiza o mês de vendas para a contadora | `dados/` (relatório mensal de vendas) |

## Conexões e arquivos que faltam
- **Arquivos (solte em `dados/`):** tabela de preços (Excel), modelo de proposta (Word), relatório mensal de vendas (Google Planilhas, baixar como .xlsx), lista do Clube, planilha das empresas, pedidos da Nuvemshop (exportar CSV).
- **Conexões possíveis (esforço 3):** Google Drive e Gmail. Nuvemshop e WhatsApp Business: por enquanto, exportar e colar é o caminho mais simples.
- **Memória:** `memoria/empresa.md`, `foco.md` e `preferencias.md` estão vazios. O `/instalar` preenche e melhora o tom das propostas e mensagens.

## O que continua com você (e por quê)
- **Preço final e descontos especiais:** a IA faz a conta pela tabela, mas a decisão de preço é sua.
- **Enviar a proposta e a mensagem de cobrança:** a IA prepara, você revisa e envia. Nada sai sem você.
- **Compra de café verde e conversa com os produtores:** relação pessoal e negociação.
- **Contratação e a relação com as empresas clientes:** decisões estratégicas, só suas.
- **A torra em si:** a escala ajuda a planejar; o ponto de torra é seu ofício.
