# Respostas certas do passo 2

> Calculadas direto de `dados/*.csv` pelo script `scripts/respostas-certas.py` do repositório do curso. **Dados fictícios de exemplo.**
> Use para conferir o que o Claude respondeu.

## 1. O que tem em cada arquivo
- `vendas-mensais.csv`: vendas de janeiro a setembro de 2026 por mês, produto e canal (107 linhas).
- `produtos.csv`: 12 produtos com preço, custo e margem.
- `clientes-b2b.csv`: 14 clientes de empresas (12 ativos, 1 pausado, 1 cancelado).
- `orcamento.csv`: as regras do orçamento de café para escritório.

## 2. Produto que mais faturou e o que mais vendeu em unidades
- Mais faturou: **Clube Torra Viva (assinatura mensal, 2 × 250 g)**, R$ 165.189,00 (depois: Mantiqueira Clássico 250 g, R$ 122.220,00).
- Mais unidades: **Mantiqueira Clássico 250 g**, 2910 unidades.

## 3. Melhor e pior mês
- Melhor: **agosto**, R$ 113.768,40.
- Pior: **fevereiro**, R$ 56.095,00.

| Mês | Faturamento |
|---|---|
| janeiro | R$ 59.494,00 |
| fevereiro | R$ 56.095,00 |
| março | R$ 70.356,80 |
| abril | R$ 77.616,60 |
| maio | R$ 93.928,80 |
| junho | R$ 90.838,80 |
| julho | R$ 98.464,60 |
| agosto | R$ 113.768,40 |
| setembro | R$ 105.015,40 |
| **Total** | **R$ 765.578,40** |

Lucro bruto de janeiro a setembro: R$ 445.207,30.

## 4. Canal que mais cresceu (janeiro → setembro)

| Canal | Janeiro | Setembro | Crescimento | Faturamento jan a set | Lucro bruto jan a set |
|---|---|---|---|---|---|
| B2B Escritórios | R$ 4.011,00 | R$ 18.752,40 | +367,5% | R$ 112.560,40 | R$ 57.675,40 |
| Assinatura | R$ 14.299,00 | R$ 23.542,00 | +64,6% | R$ 165.189,00 | R$ 96.186,00 |
| Loja online | R$ 29.601,00 | R$ 46.535,00 | +57,2% | R$ 356.049,00 | R$ 216.585,90 |
| Cafeterias parceiras | R$ 11.583,00 | R$ 16.186,00 | +39,7% | R$ 131.780,00 | R$ 74.760,00 |

Mais cresceu: **B2B Escritórios**: R$ 18.752,40 ÷ R$ 4.011,00 = 4,68 vezes (+367,5%).

## 5. Clientes B2B que precisam de atenção

- **Coworking Ponto de Encontro** (ativo, NPS 7, a nota mais baixa entre os ativos). Observação na planilha: Pediu orçamento para incluir chás.
- **Imobiliária Casa Certa** (pausado desde 2026-07, NPS 6): Pausou o plano durante a reforma do escritório; volta em novembro.
- **Laboratório Vida Clara** (cancelado desde 2026-08, NPS 4): Cancelou depois de duas entregas atrasadas em julho.
