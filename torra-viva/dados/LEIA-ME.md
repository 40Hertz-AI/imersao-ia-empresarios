# Dados da Torra Viva Cafés Especiais

> **Dados fictícios de exemplo**, criados para a aula. A Torra Viva não existe; nomes, clientes e números foram inventados.

| Arquivo | O que tem |
|---|---|
| `vendas-mensais.csv` | Vendas de janeiro a setembro de 2026: mês, produto, canal, quantidade, preço, faturamento, custo e lucro bruto |
| `produtos.csv` | Os 12 produtos, com origem, torra, notas, preço, custo e margem |
| `clientes-b2b.csv` | Os 14 escritórios que já assinaram o plano de café: tamanho, café, kg por mês, valor, contrato, status e nota de satisfação (NPS, de 0 a 10) |
| `orcamento.csv` | As regras para montar o orçamento de café para escritório, na ordem do cálculo |
| `politicas-atendimento.md` | Prazos, trocas, Clube e o que o atendimento pode prometer |
| `torra-viva.xlsx` | As quatro tabelas numa planilha só (uma aba cada, mais a aba Sobre), para subir no Google Planilhas |

**Como ler:**
- A primeira linha de cada `.csv` é o aviso de dados fictícios; o cabeçalho vem na linha 2.
- Faturamento = quantidade × preço unitário. Lucro bruto = faturamento − custo dos produtos (sem aluguel, salários e frete).
- Canais: Loja online, Assinatura (Clube Torra Viva), Cafeterias parceiras e B2B Escritórios.
- No canal B2B Escritórios, a quantidade é em kg e o preço unitário é o preço médio do kg depois dos descontos do contrato. As vendas desse canal batem com os clientes ativos de `clientes-b2b.csv`.
- `valor_mensal` dos clientes B2B inclui máquina e frete (pelas regras do `orcamento.csv`); as vendas só contam o café.

Os arquivos são gerados por um script do repositório do curso (`scripts/gerar-dados-torra-viva.py`). Rodar de novo dá os mesmos números.
