# Exemplo 1 · E-mail de reajuste

> Gerado de verdade pelo Claude Code (modelo Opus) nesta pasta, com o prompt do passo, em 25/10/2026. **Dados fictícios de exemplo.** O seu resultado vai sair diferente nas palavras; o que importa é chegar no mesmo tipo de entrega.

## ❌ Prompt ruim

**Você:**

```
Escreve um e-mail avisando que o preço vai subir.
```

**Claude:**

**Assunto:** Um aviso sobre o preço dos nossos cafés

Olá, [confirmar: nome do cliente],

Queremos te avisar com antecedência: a partir de [confirmar: data], o preço dos cafés da Torra Viva vai subir [confirmar: percentual ou novos valores].

O motivo é simples: o café verde, que é o grão cru que compramos dos pequenos produtores do Sul de Minas e do Cerrado Mineiro, ficou mais caro [confirmar: motivo do reajuste]. A gente segurou o preço o quanto deu. Para continuar pagando bem quem planta e entregando café torrado na semana, precisamos fazer esse ajuste.

O que não muda: o café continua sendo torrado esta semana e chegando na sua xícara na próxima, com o mesmo cuidado de sempre.

[confirmar: existe alguma condição para quem fechar antes do reajuste? Ex.: renovar o contrato e manter o preço atual]

Se tiver qualquer dúvida, é só responder este e-mail ou chamar no WhatsApp [confirmar: número].

Obrigado por estar com a gente.

[confirmar: quem assina], Torra Viva Cafés Especiais
torraviva.exemplo

---

Seu pedido não dizia o cliente, a data, o percentual, o motivo nem quem assina. Por isso deixei os `[confirmar: ...]`, e o e-mail saiu genérico. Esse é o "prompt ruim" do Exemplo 1 do passo 3. Agora digite `/clear` e cole o prompt bom de `passos/03-prompts-que-funcionam/INSTRUCOES.md` para comparar.


## ✅ Prompt bom

**Você:**

```
Papel: você é a Marina, gerente comercial da Torra Viva Cafés Especiais, e fala com os clientes de um jeito próximo e direto.
Contexto: a Clínica Bem Viver é cliente desde novembro de 2025, tem 32 funcionários, plano Mantiqueira Clássico com contrato anual e deu nota 10 na última pesquisa. O preço do kg vai subir 6% a partir de 01/12/2026, porque o café verde (o grão cru, antes da torra) ficou mais caro. Quem renovar o contrato anual até 30/11 mantém o preço atual por mais 12 meses.
Tarefa: escreva o e-mail avisando o reajuste e oferecendo a renovação.
Formato: assunto + corpo de até 150 palavras, sem jargão, com uma chamada clara no fim. Assine "Marina, Torra Viva".
```

**Claude:**

**Assunto:** Seu café vai ter reajuste em dezembro. Veja como manter o preço atual

Olá, pessoal da Clínica Bem Viver,

Antes de tudo, obrigada pela nota 10 na última pesquisa. É muito bom fazer parte do café de vocês desde novembro de 2025.

Quero avisar com antecedência: a partir de 01/12/2026, o preço do kg vai subir 6%. O motivo é o café verde, o grão cru que compramos dos produtores antes da torra, que ficou mais caro.

Vocês podem ficar fora desse reajuste. Se renovarem o contrato anual do plano Mantiqueira Clássico até 30/11, o preço atual fica valendo por mais 12 meses. O resto continua como está.

**Quer garantir o preço atual? Responda este e-mail com "renovar" até 30/11 e eu cuido do resto.**

Um abraço,
Marina, Torra Viva

