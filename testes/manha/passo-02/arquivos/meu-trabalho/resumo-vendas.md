# Resumo de vendas · Torra Viva Cafés Especiais

> **Dados fictícios de exemplo.** Todos os números vêm dos arquivos de `dados/`, inventados para a aula.

Período: janeiro a setembro de 2026.

## 1. O que tem em cada arquivo .csv

- **`vendas-mensais.csv`**: 107 linhas de vendas, de janeiro a setembro de 2026. Cada linha traz o mês, o produto, o canal, a quantidade, o preço, o faturamento, o custo e o lucro bruto.
- **`produtos.csv`**: os 12 produtos à venda, com código, origem, tipo de torra, notas de sabor, preço, custo e margem (a porcentagem que sobra do preço depois do custo).
- **`clientes-b2b.csv`**: as 14 empresas do B2B Escritórios. Mostra o café do plano, os kg por mês, o valor mensal, o NPS (nota de satisfação de 0 a 10) e a situação: 12 ativas, 1 pausada e 1 cancelada.
- **`orcamento.csv`**: as 17 regras para montar o orçamento de um escritório. Por exemplo: 2 xícaras por pessoa por dia, 10 g por xícara, 21 dias úteis no mês, total arredondado para cima em pacotes de 1 kg, e os preços por kg.

## 2. Produto que mais faturou e produto que mais vendeu

- **Mais faturou:** o Clube Torra Viva (a assinatura), com **R$ 165.189,00**. Em segundo vem o Mantiqueira Clássico 250 g, com R$ 122.220,00.
- **Mais vendeu unidades:** o **Mantiqueira Clássico 250 g**, com **2.910 pacotes**. Depois vêm o Cerrado Doce 250 g (2.100) e o Clube (2.091 mensalidades).

As unidades não são do mesmo tamanho: um pacote de 250 g, um de 1 kg e uma mensalidade do Clube contam como 1 cada. Por isso o faturamento compara melhor os produtos.

| Produto | Faturamento | Unidades |
|---|---|---|
| Clube Torra Viva (assinatura mensal, 2 × 250 g) | R$ 165.189,00 | 2.091 |
| Mantiqueira Clássico 250 g | R$ 122.220,00 | 2.910 |
| Espresso da Casa 1 kg | R$ 98.040,00 | 760 |
| Mantiqueira Clássico 1 kg | R$ 84.658,00 | 639 |
| Cerrado Doce 250 g | R$ 79.800,00 | 2.100 |
| Kit Degustação (3 × 100 g) | R$ 48.416,00 | 544 |
| Blend Escritório 1 kg | R$ 48.176,80 | 557 |
| Drip Bag Mantiqueira (caixa com 10) | R$ 46.935,00 | 1.341 |
| Etiópia Yirgacheffe 250 g | R$ 29.444,00 | 433 |
| Descafeinado Suave 250 g | R$ 16.882,00 | 367 |
| Cerrado Doce 1 kg | R$ 13.465,60 | 110 |
| Cold Brew 300 ml | R$ 12.352,00 | 772 |

## 3. Faturamento por mês

| Mês | Faturamento |
|---|---|
| Janeiro | R$ 59.494,00 |
| Fevereiro | R$ 56.095,00 ⬇️ menor |
| Março | R$ 70.356,80 |
| Abril | R$ 77.616,60 |
| Maio | R$ 93.928,80 |
| Junho | R$ 90.838,80 |
| Julho | R$ 98.464,60 |
| Agosto | R$ 113.768,40 ⬆️ maior |
| Setembro | R$ 105.015,40 |
| **Total** | **R$ 765.578,40** |

- **Maior:** agosto, com R$ 113.768,40.
- **Menor:** fevereiro, com R$ 56.095,00. Agosto faturou cerca de o dobro de fevereiro.
- Junho e setembro caíram em relação ao mês anterior. Nos outros meses o faturamento subiu.

## 4. Canal que mais cresceu de janeiro para setembro

Conta: **crescimento = (setembro − janeiro) ÷ janeiro × 100**.

| Canal | Janeiro | Setembro | Diferença | Crescimento |
|---|---|---|---|---|
| **B2B Escritórios** | R$ 4.011,00 | R$ 18.752,40 | + R$ 14.741,40 | 14.741,40 ÷ 4.011,00 = **+367,5%** |
| Assinatura (Clube) | R$ 14.299,00 | R$ 23.542,00 | + R$ 9.243,00 | 9.243,00 ÷ 14.299,00 = +64,6% |
| Loja online | R$ 29.601,00 | R$ 46.535,00 | **+ R$ 16.934,00** | 16.934,00 ÷ 29.601,00 = +57,2% |
| Cafeterias parceiras | R$ 11.583,00 | R$ 16.186,00 | + R$ 4.603,00 | 4.603,00 ÷ 11.583,00 = +39,7% |

- **Em porcentagem**, o B2B Escritórios foi o que mais cresceu: o faturamento ficou cerca de 4,7 vezes maior.
- **Em reais**, quem mais ganhou foi a Loja online, com R$ 16.934,00 a mais. Ela partiu de uma base maior, por isso a porcentagem é menor.

## 5. Clientes B2B que precisam de atenção

Para "nota baixa" foi usada a regra comum do NPS: nota de 0 a 6 é cliente insatisfeito, 7 e 8 é neutro, e 9 e 10 é satisfeito.

**Precisam de atenção**

| Cliente | Situação | Nota | Valor/mês | Motivo |
|---|---|---|---|---|
| **B09 · Laboratório Vida Clara** (Suzano) | Cancelado desde 2026-08 | 4 | R$ 1.459,20 | Cancelou depois de duas entregas atrasadas em julho. É a nota mais baixa da lista. |
| **B06 · Imobiliária Casa Certa** (Guarulhos) | Pausado desde 2026-07 | 6 | R$ 743,00 | Pausou durante a reforma do escritório e diz que volta em novembro. A nota 6 também está na faixa de insatisfeito. |

**Vale acompanhar**

- **B05 · Coworking Ponto de Encontro:** nota 7 (neutro). Pediu orçamento para incluir chás e ainda não há resposta registrada. Paga R$ 2.165,80 por mês.
- **B13 · Sorriso Pleno Odontologia** e **B14 · Hotel Serra Azul:** são clientes novos, de 2026-09, e ainda não responderam à pesquisa de satisfação.
