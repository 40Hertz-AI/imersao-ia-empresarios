# Exemplo 1 · E-mail de reajuste

> Gerado de verdade pelo Claude Code (modelo Opus) nesta pasta, com o prompt do passo, em 26/10/2026. **Dados fictícios de exemplo.** O seu resultado vai sair diferente nas palavras; o que importa é chegar no mesmo tipo de entrega.

## ❌ Prompt ruim

**Você:**

```
Escreve um e-mail avisando que o preço vai subir.
```

**Claude:**

Seu pedido não diz qual cliente, quanto o preço sobe nem a partir de quando. Por isso deixei esses pontos marcados com `[confirmar: ...]`.

---

**Assunto:** Novo preço do café a partir de [confirmar: data]

Olá, [confirmar: nome do cliente],

Queremos te avisar com antecedência: a partir de **[confirmar: data]**, o preço dos nossos cafés vai subir **[confirmar: percentual ou novos valores]**.

O motivo é que o café verde (o grão cru, antes da torra) que compramos de pequenos produtores do Sul de Minas e do Cerrado Mineiro ficou mais caro. A gente segurou o preço o quanto deu e não vai mexer na qualidade nem no frescor: o café continua torrado esta semana e chegando na sua xícara na próxima.

[confirmar: existe alguma condição especial, como manter o preço atual para quem renovar ou comprar até certa data?]

Se tiver qualquer dúvida, é só responder este e-mail.

Um abraço,
[confirmar: quem assina], Torra Viva Cafés Especiais
torraviva.exemplo

---

O e-mail ficou genérico e cheio de lacunas porque o prompt era vago. É isso que o passo 3 quer mostrar. Agora digite `/clear` e cole o prompt "bom" do Exemplo 1 em `passos/03-prompts-que-funcionam/INSTRUCOES.md` para comparar os dois.


## ✅ Prompt bom

**Você:**

```
Papel: você é a Marina, gerente comercial da Torra Viva Cafés Especiais, e fala com os clientes de um jeito próximo e direto.
Contexto: a Clínica Bem Viver é cliente desde novembro de 2025, tem 32 funcionários, plano Mantiqueira Clássico com contrato anual e deu nota 10 na última pesquisa. O preço do kg vai subir 6% a partir de 01/12/2026, porque o café verde (o grão cru, antes da torra) ficou mais caro. Quem renovar o contrato anual até 30/11 mantém o preço atual por mais 12 meses.
Tarefa: escreva o e-mail avisando o reajuste e oferecendo a renovação.
Formato: assunto + corpo de até 150 palavras, sem jargão, com uma chamada clara no fim. Assine "Marina, Torra Viva".
```

**Claude:**

**Assunto:** Clínica Bem Viver: mantenha o preço atual do café por mais 12 meses

Olá, [confirmar: nome do contato na clínica],

Obrigada pela nota 10 na última pesquisa. Ficamos muito contentes em saber que o café está agradando a equipe da Bem Viver.

Quero avisar com antecedência: a partir de 01/12/2026, o preço do kg vai subir 6%. O motivo é o café verde, que é o grão cru que compramos dos produtores antes da torra. Ele ficou mais caro.

Vocês podem ficar fora desse aumento. Se renovarem o contrato anual do Mantiqueira Clássico até 30/11, o preço atual fica valendo por mais 12 meses.

Querem garantir? É só responder este e-mail com "quero renovar" até 30/11 que eu cuido do resto.

Um abraço,
Marina, Torra Viva

---

O corpo tem cerca de 100 palavras. Como você não passou o nome do contato, deixei a marcação `[confirmar: ...]` para preencher.

