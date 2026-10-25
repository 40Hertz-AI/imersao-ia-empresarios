# O que a IA pode fazer por Jorge (Padaria Trigo Azul)
Base: respostas rápidas (sem mapa do /sobre-mim) · Data: 2026-10-25

## Em uma frase
Hoje são umas 3h40 por semana (estimativa: 5 pedidos × 20 min + 2 h de compras) em conta no celular, caderno e ligações. A IA pode fazer as contas, escrever a resposta para o cliente e montar a lista de compras. Você continua revisando, enviando e negociando.

## As 3 primeiras (fazer esta semana)

### 1. Passar o cardápio e os preços para a pasta
- **O que é:** um arquivo `contexto/cardapio-empresas.md` com os itens do café da manhã para empresas, o preço de cada um, o tamanho das porções por pessoa, a taxa de entrega e o pedido mínimo. Sem isso, a IA chuta os preços.
- **Processo:** pedidos de café da manhã (e, depois, as compras).
- **Tipo:** Contexto · **Impacto 3 / Esforço 1**
- **Próximo passo:** tire foto da página do caderno com os preços (ou dite) e cole aqui:
  > "Monte o arquivo contexto/cardapio-empresas.md com estes itens e preços do meu café da manhã para empresas. Organize em tabela: item, unidade, preço, quanto vai por pessoa. Pergunte o que faltar (taxa de entrega, pedido mínimo, prazo). [cole aqui o texto ou a foto]"

### 2. Skill `/orcamento-cafe`
- **O que é:** você cola a mensagem do cliente que chegou no WhatsApp. A IA calcula o total pelo cardápio, escreve a resposta pronta para você revisar e copiar no WhatsApp, e anota o pedido em `pedidos/AAAA-MM.md` (no lugar do caderno).
- **Processo:** pedidos de café da manhã. Dá para cair de uns 20 min para uns 5 min por pedido, uns 75 min a menos por semana (estimativa).
- **Tipo:** Skill nova · **Impacto 3 / Esforço 2**
- **Próximo passo:** depois do item 1, peça: "Crie a skill /orcamento-cafe" e teste com o último pedido que chegou no WhatsApp.

### 3. Skill `/lista-compras` (usar toda segunda)
- **O que é:** junta os pedidos da semana (`pedidos/`) e o que você disser que falta no estoque. Monta a lista de compras separada por fornecedor, com quantidades e um roteiro curto para cada ligação. Depois das ligações, você dita os preços e ela compara.
- **Processo:** compras da semana. As ligações continuam com você; a IA faz a preparação e a comparação. Dá para economizar uns 40 a 60 min por segunda (estimativa, a confirmar depois de 2 semanas de uso).
- **Tipo:** Skill nova + Contexto · **Impacto 3 / Esforço 2**
- **Próximo passo:** cole este prompt:
  > "Monte o arquivo contexto/fornecedores.md com meus 3 fornecedores: nome, telefone, o que compro de cada um, dia e horário de entrega, último preço que paguei. [dite aqui]"

  Depois peça: "Crie a skill /lista-compras".

## Todas as sugestões

| # | Sugestão | Processo | Tipo | Impacto | Esforço | Próximo passo |
|---|---|---|---|---|---|---|
| 1 | Cardápio e preços para empresas na pasta | Pedidos de café | Contexto | 3 | 1 | Prompt do item 1 acima |
| 2 | Calcular pedido já hoje, antes da skill | Pedidos de café | Comando pronto | 2 | 1 | "Leia contexto/cardapio-empresas.md. Este é um pedido do WhatsApp: [cole]. Calcule o total item por item e escreva uma resposta curta e simpática para eu revisar e mandar." |
| 3 | `/orcamento-cafe` | Pedidos de café | Skill nova | 3 | 2 | "Crie a skill /orcamento-cafe" |
| 4 | Fornecedores na pasta | Compras | Contexto | 2 | 1 | Prompt do item 3 acima |
| 5 | `/lista-compras` | Compras | Skill nova | 3 | 2 | "Crie a skill /lista-compras" |
| 6 | Comparar preços depois das ligações | Compras | Comando pronto | 2 | 1 | "Estes são os preços que os fornecedores me passaram hoje: [dite]. Compare com contexto/fornecedores.md, diga onde comprar cada item e o que subiu." |
| 7 | Caderno de pedidos em arquivo (`pedidos/AAAA-MM.md`) | Pedidos e compras | Contexto | 2 | 1 | "Crie pedidos/2026-10.md e anote este pedido confirmado: [cliente, data, itens, total]" |
| 8 | Rotina de sexta: resumo da semana | Gestão | Rotina | 2 | 2 | "Leia pedidos/2026-10.md e me diga: quantos pedidos de empresa, total vendido, clientes que repetiram e quem não pede faz tempo." |
| 9 | Conectar o WhatsApp direto | Pedidos de café | Conexão | 2 | 3 | Deixar para depois. Exige WhatsApp Business API e configuração técnica; copiar e colar resolve por enquanto. |

## Rotinas da semana
| Dia | Comando | O que entrega |
|---|---|---|
| Quando chega pedido | `/orcamento-cafe` | Total calculado + resposta pronta para revisar + pedido anotado |
| Segunda, antes de ligar | `/lista-compras` | Lista por fornecedor + roteiro das ligações |
| Segunda, depois de ligar | prompt da sugestão 6 | Onde comprar cada item e o que subiu de preço |
| Sexta | prompt da sugestão 8 | Resumo da semana dos pedidos de empresa |

Você mesmo dispara cada rotina. Nada aqui roda sozinho.

## Skills para criar
| Nome | O que faz | Arquivos que lê |
|---|---|---|
| `/orcamento-cafe` | Calcula o pedido, escreve a resposta e anota o pedido | `contexto/cardapio-empresas.md`, `pedidos/` |
| `/lista-compras` | Monta a lista por fornecedor e compara preços | `contexto/fornecedores.md`, `pedidos/` |

## Conexões e arquivos que faltam
- `contexto/cardapio-empresas.md`: itens, preços, porção por pessoa, taxa de entrega, pedido mínimo.
- `contexto/fornecedores.md`: os 3 fornecedores, o que vende cada um e os últimos preços.
- `pedidos/`: passa a ser o caderno dos pedidos de empresa.
- (Opcional) As receitas básicas, com quanto de farinha, manteiga etc. vai em cada item. Assim a lista de compras sai calculada pelos pedidos.
- Conexão com o WhatsApp: esforço 3, não vale agora.

## O que continua com você (e por quê)
- **Enviar a resposta ao cliente:** a IA escreve, mas você revisa e manda. É o seu nome e o seu preço.
- **Dar desconto ou mudar preço para um cliente:** é decisão comercial sua.
- **As ligações e a negociação com os fornecedores:** a relação é sua. A IA só prepara o roteiro e compara os preços depois.
- **Confirmar o estoque:** só você vê a prateleira. A IA trabalha com o que você disser.

> Dica: quando tiver uns 15 min, rode /sobre-mim (se instalar a skill) para guardar o mapa do seu trabalho. As próximas sugestões ficam mais certeiras.
