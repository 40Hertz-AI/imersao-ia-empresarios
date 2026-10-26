# Exemplo 3 · Análise de vendas

> Gerado de verdade pelo Claude Code (modelo Opus) nesta pasta, com o prompt do passo, em 26/10/2026. **Dados fictícios de exemplo.** O seu resultado vai sair diferente nas palavras; o que importa é chegar no mesmo tipo de entrega.

## ❌ Prompt ruim

**Você:**

```
Analisa minhas vendas.
```

**Claude:**

# Vendas da Torra Viva · jan a set/2026 (dados fictícios de exemplo)

**No total:** R$ 765.578 de faturamento e R$ 445.207 de lucro bruto (lucro bruto é o que sobra depois do custo do produto), com margem de 58%. O faturamento passou de R$ 59.494 em janeiro para R$ 105.015 em setembro, uma alta de 77%.

| Canal | Faturamento | Lucro bruto | Margem | Jan → Set |
|---|---|---|---|---|
| Loja online | R$ 356.049 | R$ 216.586 | 60,8% | +57% |
| Clube (assinatura) | R$ 165.189 | R$ 96.186 | 58,2% | +65% |
| Cafeterias parceiras | R$ 131.780 | R$ 74.760 | 56,7% | +40% |
| B2B Escritórios | R$ 112.560 | R$ 57.675 | 51,2% | +368% |

**O que chama atenção:**
- **O Clube é o produto que mais fatura** (R$ 165 mil). Cresceu todo mês, de 181 para 298 assinaturas.
- **O B2B foi o canal que mais cresceu**, mas tem a menor margem. O Blend Escritório caiu de R$ 98 para cerca de R$ 86 o kg e tem margem de 48%, a menor de todos os produtos.
- **O Kit Degustação teve picos em maio e agosto** (136 e 129 unidades; nos outros meses ficou perto de 40). [confirmar: o motivo, talvez datas comemorativas]
- **O Etiópia Yirgacheffe**, lançado em junho, subiu de 62 para 151 pacotes em setembro. A margem dele é de 51,5%, menor que a dos outros cafés de 250 g (perto de 62%).
- **Setembro caiu 7,7% em relação a agosto**, principalmente porque o Kit Degustação voltou ao normal.

Este é o **prompt ruim do Exemplo 3** do passo 3. Para comparar, digite `/clear` e cole o prompt bom de `passos/03-prompts-que-funcionam/INSTRUCOES.md`. A resposta pronta para conferir está em `gabarito/03-prompts-que-funcionam/`.


## ✅ Prompt bom

**Você:**

```
Papel: você é um analista financeiro que explica números para quem não é da área.
Contexto: o arquivo dados/vendas-mensais.csv tem as vendas da Torra Viva de janeiro a setembro de 2026 (dados fictícios de exemplo), por produto e por canal. Quero decidir onde colocar esforço no último trimestre.
Tarefa: compare os 4 canais de venda: faturamento total, crescimento de janeiro para setembro e lucro bruto.
Formato: uma tabela (canal | faturamento jan a set | crescimento jan → set em % | lucro bruto) e 3 recomendações de 1 linha cada. Use só os dados do arquivo e mostre a conta do crescimento.
```

**Claude:**

**Vendas por canal, janeiro a setembro de 2026** (dados fictícios de exemplo, `dados/vendas-mensais.csv`)

| Canal | Faturamento jan a set | Crescimento jan → set em % | Lucro bruto |
|---|---|---|---|
| Loja online | R$ 356.049,00 | (46.535,00 ÷ 29.601,00 − 1) × 100 = **+57,2%** | R$ 216.585,90 |
| Clube Torra Viva (no arquivo: "Assinatura") | R$ 165.189,00 | (23.542,00 ÷ 14.299,00 − 1) × 100 = **+64,6%** | R$ 96.186,00 |
| Cafeterias parceiras | R$ 131.780,00 | (16.186,00 ÷ 11.583,00 − 1) × 100 = **+39,7%** | R$ 74.760,00 |
| B2B Escritórios | R$ 112.560,40 | (18.752,40 ÷ 4.011,00 − 1) × 100 = **+367,5%** | R$ 57.675,40 |
| **Total** | **R$ 765.578,40** | | **R$ 445.207,30** |

Como ler o crescimento: divido o faturamento de setembro pelo de janeiro, tiro 1 e multiplico por 100.
Lucro bruto é o faturamento menos o custo do produto, sem contar despesas como frete, salários e aluguel.

**3 recomendações para o último trimestre**

1. **B2B Escritórios:** é o canal que mais cresce (+367,5%). Vale colocar esforço de vendas da Marina para fechar novos contratos, mas a margem é a menor dos quatro (51,2% do faturamento vira lucro bruto). Antes de dar desconto, revise o preço.
2. **Loja online:** traz quase metade do lucro bruto (R$ 216,6 mil de R$ 445,2 mil) e tem a melhor margem (60,8%). Proteja esse canal com campanhas de fim de ano no site e no Instagram.
3. **Clube Torra Viva:** cresce mais que a loja (+64,6%) e tem margem boa (58,2%). Use os pedidos da loja online para convidar quem já compra a virar assinante.

Obs.: o crescimento compara só dois meses (janeiro e setembro). O B2B começou com uma base pequena (R$ 4.011,00), por isso o percentual sai tão alto.

