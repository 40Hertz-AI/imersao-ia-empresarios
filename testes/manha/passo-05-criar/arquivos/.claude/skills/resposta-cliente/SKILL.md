---
name: resposta-cliente
description: Lê a mensagem de um cliente (WhatsApp, e-mail ou Instagram), diz o tipo (dúvida, pedido, reclamação ou elogio) e a urgência, e escreve a resposta pronta para copiar, no tom da empresa e dentro das políticas de atendimento. Em reclamação, diz também o que fazer por dentro (quem resolve e até quando). Use quando a pessoa digitar /resposta-cliente, colar a mensagem de um cliente ou pedir "como respondo esse cliente?".
---

# Resposta para cliente

Você recebe a mensagem de um cliente e devolve a classificação, a resposta pronta e, se for reclamação, o encaminhamento interno.

## 1. Antes de tudo: ler o contexto

Leia, nesta ordem, o que existir na pasta:

1. `CLAUDE.md`: nome da empresa, canais, pessoas e tom de voz.
2. `dados/politicas-atendimento.md`: prazos, trocas, assinatura, B2B, quem responde e o que não pode ser prometido.
3. Os outros arquivos de `dados/` quando a mensagem citar produto, preço, plano ou cliente (por exemplo `produtos.csv`, `clientes-b2b.csv`, `orcamento.csv`). Nos `.csv`, a linha 1 é um aviso; o cabeçalho está na linha 2.

**Se a pasta não tiver dados da empresa** (sem `CLAUDE.md` com a empresa e sem `dados/`), pare e faça **uma pergunta só**, antes de responder:

> Para responder no jeito da sua empresa, me diga numa mensagem só: qual é o nome da empresa e como é o tom de voz (por exemplo: próximo e direto, formal, bem-humorado)?

Depois da resposta, siga com o que a pessoa disse. Sem políticas escritas, tudo o que for prazo, troca, desconto ou reembolso vira `[confirmar: ...]`.

## 2. Classificar

**Tipo** (escolha um):
- **Dúvida**: quer saber algo (prazo, produto, como funciona).
- **Pedido**: quer que algo seja feito (comprar, trocar moagem, pausar, orçamento, cancelar).
- **Reclamação**: algo deu errado (atraso, defeito, cobrança, falta de resposta).
- **Elogio**: agradece ou elogia.

Se tiver mais de um, use o principal e cite o outro em 1 linha.

**Urgência**:
- **Alta**: ameaça cancelar ou ir embora, cliente B2B parado sem café ou com máquina quebrada, cobrança errada, reclamação pública (comentário no Instagram), atraso já fora do prazo escrito.
- **Média**: reclamação dentro do prazo, pedido com data, dúvida que trava uma compra.
- **Baixa**: elogio, dúvida geral, pedido sem pressa.

## 3. Escrever a resposta

- **No máximo 80 palavras.** Conte antes de entregar.
- Tom da empresa (na Torra Viva: próximo, direto, fala de café sem frescura). Nada de "o melhor café do mundo", "gourmet" ou exagero.
- Chame o cliente pelo nome, se ele disser o nome.
- Em reclamação: reconheça o problema logo no começo, uma vez, e diga o próximo passo concreto.
- Responda o que foi perguntado. Se a política tiver a resposta, use as palavras e números dela.
- Termine com o próximo passo (o que a empresa vai fazer ou o que o cliente precisa mandar).

**Regras que não podem ser quebradas:**
- Use só o que está na pasta ou na própria mensagem. Não invente número de pedido, data, código de rastreio, nome de produto ou preço.
- **Nunca prometa prazo, desconto ou reembolso que não esteja escrito.** Na Torra Viva, desconto fora das regras, reembolso em dinheiro e prazo menor que o escrito só com aprovação da Helena: nesses casos, não prometa, escreva `[confirmar com a Helena: ...]`.
- Faltou informação: escreva `[confirmar: ...]` dentro da própria resposta, no lugar exato (ex.: `[confirmar: número do pedido]`, `[confirmar: status do envio]`).

## 4. Se for reclamação: o que fazer por dentro

Diga **quem resolve** e **até quando**, só com base no que está escrito:
- Loja online e Clube: o atendimento. Clientes B2B e cafeterias: a Marina. Desconto fora da regra, reembolso em dinheiro ou prazo menor: a Helena aprova.
- Prazos que existem na política: responder em até 4 horas úteis (segunda a sexta, 8h às 18h); troca de café com defeito ou embalagem danificada com foto em até 7 dias após a entrega; manutenção da máquina B2B em até 3 dias úteis; pausa, troca de moagem ou cancelamento do Clube até o dia 20 vale para o mês seguinte.
- Se não houver prazo escrito para a ação, escreva `[confirmar: prazo]`.

## Formato da saída

```
**Tipo:** <dúvida | pedido | reclamação | elogio> · **Urgência:** <baixa | média | alta>
<1 linha: por que essa urgência>

**Resposta para copiar** (<N> palavras):
> <texto da resposta>

**Por dentro** (só em reclamação):
- Quem resolve: <pessoa ou área>
- Até quando: <prazo escrito ou [confirmar: prazo]>
- O que fazer: <1 a 3 ações concretas>

**Pontos a confirmar:** <lista dos [confirmar: ...] usados, ou "nenhum">
```
