# Exemplo 3 · Análise de vendas

> Gerado de verdade pelo Claude Code (modelo Opus) nesta pasta, com o prompt do passo, em 25/10/2026. **Dados fictícios de exemplo.** O seu resultado vai sair diferente nas palavras; o que importa é chegar no mesmo tipo de entrega.

## ❌ Prompt ruim

**Você:**

```
Analisa minhas vendas.
```

**Claude:**

# Vendas da Torra Viva, jan a set de 2026 (dados fictícios de exemplo)

**No geral**
- Faturamento: **R$ 765.578,40**. Lucro bruto: **R$ 445.207,30**, ou seja, 58% do faturamento.
- As vendas subiram de R$ 59.494 em janeiro para R$ 105.015 em setembro, uma alta de 76,5%.
- O melhor mês foi agosto (R$ 113.768). Setembro caiu 7,7% em relação a agosto.

**Por canal**

| Canal | Faturamento | Lucro bruto (margem) | Jan → Set |
|---|---|---|---|
| Loja online | R$ 356.049,00 | R$ 216.585,90 (60,8%) | +57,2% |
| Clube Torra Viva | R$ 165.189,00 | R$ 96.186,00 (58,2%) | +64,6% |
| Cafeterias parceiras | R$ 131.780,00 | R$ 74.760,00 (56,7%) | +39,7% |
| B2B Escritórios | R$ 112.560,40 | R$ 57.675,40 (51,2%) | +367,5% |

**O que chama atenção**
- **B2B Escritórios** foi o canal que mais cresceu (de R$ 4.011 para R$ 18.752 por mês), mas tem a menor margem, porque o Blend Escritório sai por cerca de R$ 86 o kg.
- **O Clube** cresceu todo mês, de 181 para 298 assinaturas. É receita que se repete.
- O **Kit Degustação** dispara em maio e agosto (136 e 129 unidades, contra uns 40 nos outros meses). [confirmar: deve ser Dia das Mães e Dia dos Pais]
- O **Etiópia Yirgacheffe** entrou em junho e mais que dobrou até setembro (62 → 151 pacotes).
- Os produtos que mais faturam: Clube, Mantiqueira 250 g e Espresso da Casa 1 kg.

---
Essa foi a resposta ao **prompt ruim** do Exemplo 3. Sem saber para que você quer a análise, saiu um resumo genérico. Agora digite `/clear` e cole o prompt bom de `passos/03-prompts-que-funcionam/INSTRUCOES.md` para comparar o foco e o formato.


## ✅ Prompt bom

**Você:**

```
Papel: você é um analista financeiro que explica números para quem não é da área.
Contexto: o arquivo dados/vendas-mensais.csv tem as vendas da Torra Viva de janeiro a setembro de 2026 (dados fictícios de exemplo), por produto e por canal. Quero decidir onde colocar esforço no último trimestre.
Tarefa: compare os 4 canais de venda: faturamento total, crescimento de janeiro para setembro e lucro bruto.
Formato: uma tabela (canal | faturamento jan a set | crescimento jan → set em % | lucro bruto) e 3 recomendações de 1 linha cada. Use só os dados do arquivo e mostre a conta do crescimento.
```

**Claude:**

**Torra Viva · canais de venda, janeiro a setembro de 2026** (dados fictícios de exemplo)

| Canal | Faturamento jan a set | Crescimento jan → set em % | Lucro bruto (margem) |
|---|---|---|---|
| Loja online | R$ 356.049,00 | (46.535,00 − 29.601,00) ÷ 29.601,00 = **+57,2%** | R$ 216.585,90 (60,8%) |
| Assinatura (Clube Torra Viva) | R$ 165.189,00 | (23.542,00 − 14.299,00) ÷ 14.299,00 = **+64,6%** | R$ 96.186,00 (58,2%) |
| Cafeterias parceiras | R$ 131.780,00 | (16.186,00 − 11.583,00) ÷ 11.583,00 = **+39,7%** | R$ 74.760,00 (56,7%) |
| B2B Escritórios | R$ 112.560,40 | (18.752,40 − 4.011,00) ÷ 4.011,00 = **+367,5%** | R$ 57.675,40 (51,2%) |
| **Total** | **R$ 765.578,40** | | **R$ 445.207,30 (58,2%)** |

Como li a tabela: o crescimento compara o faturamento de setembro com o de janeiro. Margem é quanto sobra de cada R$ 100 vendidos depois de pagar o custo do café.

**Recomendações para o último trimestre**
1. **B2B Escritórios:** é o canal que mais cresce (mais de 4 vezes desde janeiro). Vale colocar mais esforço de vendas nele, mas olhando a margem, que é a menor (51,2%).
2. **Loja online:** fatura e lucra mais que os outros e tem a melhor margem (60,8%). Precisa continuar recebendo investimento para não perder ritmo.
3. **Clube Torra Viva:** cresceu 64,6% com margem boa (58,2%). Uma campanha de novos assinantes até dezembro faz sentido.

No arquivo, o Clube aparece com o nome "Assinatura".

