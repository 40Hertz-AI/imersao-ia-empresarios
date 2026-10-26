# Passo 3 · Prompts que funcionam: Papel, Contexto, Tarefa e Formato

**O que você vai fazer:** mandar o mesmo pedido de dois jeitos, um vago e um bem montado, e comparar as respostas. No fim, escrever um prompt seu.

**A ideia:** a IA não lê a sua mente. Um prompt bom tem 4 partes:

| Parte | Pergunta que responde | Exemplo |
|---|---|---|
| **Papel** | Quem a IA deve ser? | "Você é a gerente comercial da Torra Viva" |
| **Contexto** | O que ela precisa saber? | cliente, situação, números, tom |
| **Tarefa** | O que exatamente fazer? | "escreva o e-mail avisando o reajuste" |
| **Formato** | Como deve vir a resposta? | "assunto + até 150 palavras, com 1 chamada no fim" |

**Como fazer cada exemplo:** cole o prompt ruim, leia a resposta, digite `/clear` (conversa nova) e cole o prompt bom. Assim um não ajuda o outro.

Esta pasta já tem o contexto da Torra Viva no `CLAUDE.md`, então até o prompt ruim sabe o nome da empresa. Repare no que muda no **foco**, na **precisão** e no **formato**.

---

## Exemplo 1 · E-mail de reajuste

❌ Ruim:
```
Escreve um e-mail avisando que o preço vai subir.
```

✅ Bom:
```
Papel: você é a Marina, gerente comercial da Torra Viva Cafés Especiais, e fala com os clientes de um jeito próximo e direto.
Contexto: a Clínica Bem Viver é cliente desde novembro de 2025, tem 32 funcionários, plano Mantiqueira Clássico com contrato anual e deu nota 10 na última pesquisa. O preço do kg vai subir 6% a partir de 01/12/2026, porque o café verde (o grão cru, antes da torra) ficou mais caro. Quem renovar o contrato anual até 30/11 mantém o preço atual por mais 12 meses.
Tarefa: escreva o e-mail avisando o reajuste e oferecendo a renovação.
Formato: assunto + corpo de até 150 palavras, sem jargão, com uma chamada clara no fim. Assine "Marina, Torra Viva".
```

## Exemplo 2 · Post para o Instagram

❌ Ruim:
```
Faz um post sobre café.
```

✅ Bom:
```
Papel: você cuida do Instagram da Torra Viva Cafés Especiais.
Contexto: chegou um lote novo do Etiópia Yirgacheffe: torra clara, notas florais e de limão-siciliano, R$ 68 o pacote de 250 g. O público já toma café especial e gosta de provar coisas diferentes. Tom próximo, sem exagero: nada de "o melhor café do mundo".
Tarefa: escreva a legenda do post que anuncia o lote novo.
Formato: primeira linha com até 10 palavras que dê vontade de ler o resto, 3 parágrafos curtos, uma pergunta para o seguidor responder nos comentários, 5 hashtags e no máximo 2 emojis.
```

## Exemplo 3 · Análise de vendas

❌ Ruim:
```
Analisa minhas vendas.
```

✅ Bom:
```
Papel: você é um analista financeiro que explica números para quem não é da área.
Contexto: o arquivo dados/vendas-mensais.csv tem as vendas da Torra Viva de janeiro a setembro de 2026 (dados fictícios de exemplo), por produto e por canal. Quero decidir onde colocar esforço no último trimestre.
Tarefa: compare os 4 canais de venda: faturamento total, crescimento de janeiro para setembro e lucro bruto.
Formato: uma tabela (canal | faturamento jan a set | crescimento jan → set em % | lucro bruto) e 3 recomendações de 1 linha cada. Use só os dados do arquivo e mostre a conta do crescimento.
```

## Exemplo 4 · Primeira mensagem para um cliente novo

❌ Ruim:
```
Cria uma mensagem para vender café para empresas.
```

✅ Bom:
```
Papel: você é a Marina, que vende o plano de café para escritórios da Torra Viva.
Contexto: o plano tem entrega todo mês, máquina em comodato (emprestada, sem custo) a partir de 8 kg por mês e café a partir de R$ 98 o kg. O contato é o Paulo, sócio de um escritório de contabilidade com 20 funcionários que hoje compra café no supermercado. Ele foi indicado pela Contábil Horizonte, que já é nossa cliente.
Tarefa: escreva a primeira mensagem de WhatsApp para o Paulo.
Formato: até 60 palavras, sem preço, sem "Prezado", citando a indicação e terminando com uma pergunta fácil de responder.
```

---

## Agora é a sua vez

Pense num texto que você escreve toda semana no seu trabalho. Peça:

```
Me ajude a montar um prompt com Papel, Contexto, Tarefa e Formato para esta tarefa: [descreva a tarefa]. Faça 3 perguntas para preencher o que falta e depois salve o prompt ruim e o prompt bom em meu-trabalho/prompts.md.
```

## Resultado esperado

- O seu prompt em `meu-trabalho/prompts.md`.

**O que reparar:** o prompt ruim gera um texto genérico, que você teria de reescrever · o bom já sai pronto para usar · o **Formato** é a parte que as pessoas mais esquecem.

✅ **Pronto quando:** você comparou pelo menos 2 exemplos e salvou o seu prompt. Marque o passo 3 em `progresso.md`.
