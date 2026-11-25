# O que a IA pode fazer pelo Rafael
Base: mapa do trabalho (`memoria/sobre-mim.md`, respostas simuladas para teste) + `memoria/falta-trazer.md` + `pesquisa/diagnostico.md` · Data: 2026-10-26

## Em uma frase
A IA monta a cotação e a proposta a partir da tabela de preços, guarda cada proposta numa lista que avisa quais estão paradas e deixa o relatório de sexta pronto para o Rafael só revisar.

## As 3 primeiras (fazer esta semana)

### 1. Trazer os 3 documentos para a pasta
- **O que é:** colocar a tabela de preços, o modelo de proposta e a planilha de metas em `dados/`. Sem eles a IA chuta preço; com eles, acerta.
- **Processo:** proposta e relatório de sexta
- **Tipo:** Contexto · **Impacto 3 / Esforço 1**
- **Próximo passo:** coloque `tabela-de-precos.xlsx`, `modelo-proposta.pptx` e `metas-vendedoras.xlsx` em `dados/` e diga: "Leia os 3 arquivos de dados/ e me diga o que falta para montar uma proposta sozinho."

### 2. Skill `/proposta`
- **O que é:** o Rafael cola a lista que a vendedora mandou no WhatsApp; a IA cruza com a tabela de preços, faz a cotação item por item, aplica o desconto por quantidade (até 8%; acima, marca "precisa do diretor" e não aplica), monta a proposta na marca da Amorieu e registra a proposta em `dados/propostas.csv` (data, cliente, vendedora, valor, status).
- **Processo:** proposta para cliente novo (45 min cada, ~10 por semana)
- **Tipo:** Skill · **Impacto 3 / Esforço 2**
- **Tempo poupado:** de ~7h30 para ~2h30 por semana, se cada proposta cair para uns 15 min `estimativa`
- **Próximo passo:** depois do passo 1, diga: "Crie a skill /proposta e teste com a última cotação que a Bia me mandou: <cole a lista>."

### 3. Skill `/relatorio-semanal`
- **O que é:** o Rafael solta em `dados/` a exportação de vendas do Omie e a do funil do Pipedrive; a IA cruza com as metas de cada vendedora, faz os gráficos e escreve o resumo para o diretor em uma página HTML (fica no computador).
- **Processo:** relatório semanal e previsão (~3h toda sexta)
- **Tipo:** Skill · **Impacto 3 / Esforço 2**
- **Tempo poupado:** de ~3h para ~1h por semana `estimativa`
- **Próximo passo:** na sexta, exporte as vendas da semana do Omie para `dados/vendas-semana.xlsx` e diga: "Crie a skill /relatorio-semanal usando este arquivo e dados/metas-vendedoras.xlsx."

## Todas as sugestões

| # | Sugestão | Processo | Tipo | Impacto | Esforço | Próximo passo |
|---|---|---|---|---|---|---|
| 1 | Trazer tabela de preços, modelo de proposta e metas | Proposta e relatório | Contexto | 3 | 1 | Coloque os 3 arquivos em `dados/` |
| 2 | `/proposta`: cotação, desconto e proposta pronta | Proposta | Skill | 3 | 2 | "Crie a skill /proposta e teste com a última cotação da Bia" |
| 3 | `/relatorio-semanal`: Omie + metas + funil em uma página | Relatório de sexta | Skill | 3 | 2 | Exporte o Omie para `dados/vendas-semana.xlsx` e peça a skill |
| 4 | Lista diária de propostas paradas com rascunho de cobrança | Proposta (cobrar em 3 dias) | Rotina agendada | 3 | 2 | Depois da `/proposta`: "Toda manhã de dia útil às 8h, leia dados/propostas.csv e liste as propostas sem resposta há 3 dias, com um rascunho de mensagem para a vendedora" |
| 5 | Lista de objeções e respostas, ditada | Visitas e propostas | Prompt pronto | 2 | 1 | "Vou ditar as objeções que mais ouço de empresas e cerimoniais. Para cada uma, escreva uma resposta curta no tom da Amorieu e grave em memoria/objecoes.md" |
| 6 | Ligar Google Drive e Gmail no claude.ai | Achar documentos e responder clientes | Conector | 2 | 1 | claude.ai → Configurações → Conectores → Google Drive e Gmail; depois: "Ache no meu Drive a tabela de preços mais recente" |
| 7 | Cotador para a Bia e a Lu: escolhem itens e quantidade e veem o total com desconto até 8% | Proposta (menos pedidos ao Rafael) | Artifact | 2 | 2 | Depois do passo 1: "Faça um Artifact de cotador com a tabela de preços, com desconto até 8% e aviso 'falar com o Rafael' acima disso" |
| 8 | Projeto "Comercial Amorieu" para o time | Dúvidas da Bia e da Lu | Projeto (claude.ai) | 2 | 2 | Crie o projeto no claude.ai e suba a tabela de preços, as objeções e a regra de desconto |
| 9 | Atualizar o Pipedrive com o status das propostas | Relatório (funil desatualizado) | Claude no navegador | 2 | 2 | Com o Pipedrive aberto: "Para cada linha de dados/propostas.csv, ache o negócio no Pipedrive e atualize a etapa; me mostre antes de salvar" |
| 10 | Kits de fim de ano: lista de empresas que já compraram e mensagem pronta | Prospecção de novembro | Prompt pronto | 2 | 1 | "Com o que eu colar do Omie, liste as empresas que compraram kit no fim do ano passado e escreva uma mensagem de WhatsApp para a vendedora mandar até 10/11" |

## Rotinas agendadas

| Quando | O que roda | O que deixa pronto para revisar |
|---|---|---|
| Dia útil, 8h | Lê `dados/propostas.csv` e acha propostas sem resposta há 3 dias ou mais | Lista por vendedora com um rascunho de mensagem de cobrança para cada cliente. Quem envia é a vendedora |
| Sexta, 12h | Roda o `/relatorio-semanal` se a exportação do Omie estiver em `dados/` | Página do relatório e o resumo para o diretor, para o Rafael conferir antes de mandar |

Nenhuma rotina envia mensagem, aplica desconto ou mexe no Omie sozinha.

## Skills para criar

| Nome | O que faz | Arquivos que lê |
|---|---|---|
| `/proposta` | Cotação item por item, desconto por quantidade (trava em 8%), proposta na marca e registro em `dados/propostas.csv` | `dados/tabela-de-precos.xlsx`, `dados/modelo-proposta.pptx`, `marca/marca.md`, `memoria/preferencias.md` |
| `/relatorio-semanal` | Vendas × meta por vendedora, funil, gráficos e resumo para o diretor (HTML local) | `dados/vendas-semana.xlsx` (Omie), `dados/funil.csv` (Pipedrive), `dados/metas-vendedoras.xlsx`, `dados/propostas.csv` |

## Conexões e arquivos que faltam
- Tabela de preços, modelo de proposta e planilha de metas: onde estão hoje [a confirmar].
- Exportação do funil do Pipedrive em CSV (Pipedrive → Negócios → Exportar).
- Conector direto do Pipedrive ou do Omie: precisa da chave de acesso do sistema, que vem de quem administra (esforço 3). Até lá, exportar o arquivo resolve.
- Se o resumo de sexta vai por e-mail ou é apresentado na segunda [a confirmar].
- Atenção: a tabela de preços precisa ser uma só. O site e o que a Ana passou não batem (`pesquisa/diagnostico.md`).

## O que continua com você (e por quê)
- **Desconto acima de 8% e negociação:** é decisão sua e do diretor. A IA só avisa quando passa.
- **Visita a empresas e cerimoniais:** relação pessoal é o que fecha casamento e kit corporativo.
- **Quais clientes cada vendedora atende:** depende de conhecer as pessoas.
- **Enviar a proposta e a cobrança:** a IA deixa o rascunho; quem manda é a vendedora, depois de você revisar.
