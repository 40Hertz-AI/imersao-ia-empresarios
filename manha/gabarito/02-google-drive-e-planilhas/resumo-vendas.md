# Resumo de vendas · Torra Viva Cafés Especiais

> **Dados fictícios de exemplo.** Período: janeiro a setembro de 2026. Fonte: `dados/vendas-mensais.csv` e `dados/clientes-b2b.csv`.

## 1. Produtos: faturamento e unidades

- **Maior faturamento:** Clube Torra Viva (assinatura), com **R$ 165.189,00**. Em 2º lugar ficou o Mantiqueira Clássico 250 g, com R$ 122.220,00.
- **Mais unidades vendidas:** Mantiqueira Clássico 250 g, com **2.910 unidades**. Depois vêm o Cerrado Doce 250 g (2.100) e o Clube (2.091 assinaturas-mês).

Os rankings são diferentes porque o Clube custa R$ 79 por mês e o pacote de 250 g do Mantiqueira custa R$ 42.

## 2. Faturamento por mês

| Mês | Faturamento |
|---|---|
| Janeiro | R$ 59.494,00 |
| Fevereiro | R$ 56.095,00 ⬇ **menor** |
| Março | R$ 70.356,80 |
| Abril | R$ 77.616,60 |
| Maio | R$ 93.928,80 |
| Junho | R$ 90.838,80 |
| Julho | R$ 98.464,60 |
| Agosto | R$ 113.768,40 ⬆ **maior** |
| Setembro | R$ 105.015,40 |

Agosto faturou cerca de 2 vezes o que fevereiro faturou. De fevereiro a agosto o faturamento subiu quase todo mês. As únicas quedas foram em junho e setembro.

## 3. Crescimento por canal (janeiro → setembro)

| Canal | Jan/2026 | Set/2026 | Diferença (set − jan) | Crescimento (diferença ÷ jan) |
|---|---|---|---|---|
| B2B Escritórios | R$ 4.011,00 | R$ 18.752,40 | + R$ 14.741,40 | 14.741,40 ÷ 4.011,00 = **+367,5%** |
| Clube Torra Viva (no arquivo aparece como "Assinatura") | R$ 14.299,00 | R$ 23.542,00 | + R$ 9.243,00 | 9.243,00 ÷ 14.299,00 = +64,6% |
| Loja online | R$ 29.601,00 | R$ 46.535,00 | **+ R$ 16.934,00** | 16.934,00 ÷ 29.601,00 = +57,2% |
| Cafeterias parceiras | R$ 11.583,00 | R$ 16.186,00 | + R$ 4.603,00 | 4.603,00 ÷ 11.583,00 = +39,7% |

Em percentual, o canal que mais cresceu foi o **B2B Escritórios**: quase quintuplicou, mas partiu de uma base pequena. Em reais, quem mais cresceu foi a **Loja online**.

## 4. Clientes B2B que pedem atenção

Pela regra comum do NPS, quem dá nota de 0 a 6 é um cliente insatisfeito.

**Precisam de atenção**

| Cliente | Situação | Motivo |
|---|---|---|
| B09 · Laboratório Vida Clara | **Cancelado** desde ago/2026 · NPS 4 | Cancelou depois de duas entregas atrasadas em julho. Pagava R$ 1.459,20/mês. Tem a nota mais baixa da lista. |
| B06 · Imobiliária Casa Certa | **Pausado** desde jul/2026 · NPS 6 | Pausou durante a reforma do escritório e diz que volta em novembro. Pagava R$ 743,00/mês. A nota 6 já conta como insatisfeito. |

**Para acompanhar**

| Cliente | Motivo |
|---|---|
| B05 · Coworking Ponto de Encontro | NPS 7, a nota mais baixa entre os ativos. Pediu orçamento para incluir chás, e esse pedido está em aberto. |
| B13 · Sorriso Pleno Odontologia e B14 · Hotel Serra Azul | Entraram em set/2026 e ainda não responderam à pesquisa de satisfação. |

**Próximos passos sugeridos:** em novembro, falar com a Casa Certa para confirmar a volta do plano. O Vida Clara saiu por causa de atraso na entrega, então vale conferir se o problema se repetiu com outros clientes: `[confirmar: houve outros atrasos?]`.
