# Exemplo 4 · Primeira mensagem para um cliente novo

> Gerado de verdade pelo Claude Code (modelo Opus) nesta pasta, com o prompt do passo, em 25/10/2026. **Dados fictícios de exemplo.** O seu resultado vai sair diferente nas palavras; o que importa é chegar no mesmo tipo de entrega.

## ❌ Prompt ruim

**Você:**

```
Cria uma mensagem para vender café para empresas.
```

**Claude:**

**Mensagem: café da Torra Viva para o seu escritório**

Olá, [nome]! Tudo bem?

Aqui é a Marina, da Torra Viva Cafés Especiais, uma torrefação de Mogi das Cruzes. Torramos café de pequenos produtores do Sul de Minas e do Cerrado Mineiro, e a nossa regra é simples: torrado esta semana, na sua xícara na próxima.

Temos um plano para escritórios que funciona assim:

- **Entrega todo mês**, com a quantidade calculada pelo tamanho da equipe.
- **Máquina em comodato** (emprestada, sem custo) a partir de 8 kg por mês.
- **Café a partir de R$ 98,00 o kg**, com desconto para volume maior e para contrato anual.
- **Três cafés para escolher:** Blend Escritório, Mantiqueira Clássico e Cerrado Doce.

Hoje atendemos escritórios de contabilidade, clínicas, agências, escritórios de advocacia e coworkings da região.

Quantas pessoas tomam café aí no dia a dia? Com esse número eu monto um orçamento sem compromisso.

Abraço,
Marina, Torra Viva
torraviva.exemplo

*(preços e clientes: dados fictícios de exemplo)*

---

Usei o prompt ruim do Exemplo 4 do passo 3, e o resultado ficou genérico. Não sei para quem vai a mensagem nem por qual canal (WhatsApp ou e-mail), e o texto saiu longo e com preço. Agora digite `/clear`, cole o prompt bom de `passos/03-prompts-que-funcionam/INSTRUCOES.md` e compare as duas mensagens.


## ✅ Prompt bom

**Você:**

```
Papel: você é a Marina, que vende o plano de café para escritórios da Torra Viva.
Contexto: o plano tem entrega todo mês, máquina em comodato (emprestada, sem custo) a partir de 8 kg por mês e café a partir de R$ 98 o kg. O contato é o Paulo, sócio de um escritório de contabilidade com 20 funcionários que hoje compra café no supermercado. Ele foi indicado pela Contábil Horizonte, que já é nossa cliente.
Tarefa: escreva a primeira mensagem de WhatsApp para o Paulo.
Formato: até 60 palavras, sem preço, sem "Prezado", citando a indicação e terminando com uma pergunta fácil de responder.
```

**Claude:**

Oi, Paulo! Aqui é a Marina, da Torra Viva, torrefação de cafés especiais em Mogi das Cruzes. O pessoal da Contábil Horizonte, que já toma nosso café, me passou seu contato. A gente entrega café fresco todo mês no escritório e, dependendo do consumo, empresta a máquina sem custo. Hoje vocês tomam café coado ou de máquina?

---
A mensagem tem 57 palavras e não fala de preço. A pergunta do final se responde com uma palavra só e já mostra como o escritório toma café hoje, o que ajuda a puxar a conversa.

