# Passo 5 · Criar uma skill: `/resposta-cliente`

**O que você vai fazer:** criar uma skill que lê a mensagem de um cliente da Torra Viva e devolve a resposta pronta, no tom da empresa.

**A ideia:** se você faz a mesma tarefa toda semana, ela pode virar uma skill. Você explica uma vez e depois só digita `/resposta-cliente`.

---

## 1. Criar a skill

Cole no Claude Code:

```
Crie uma skill chamada resposta-cliente

Ela recebe a mensagem de um cliente (WhatsApp, e-mail ou Instagram) e devolve:

1) o tipo da mensagem (dúvida, pedido, reclamação ou elogio) e a urgência (baixa, média ou alta);
2) a resposta pronta para copiar, no tom da empresa: próxima, direta, sem exagero, com no máximo 80 palavras.
```

O Claude pede licença para criar o arquivo: aceite.

## 2. Ver a skill

Digite `/` e procure **resposta-cliente**. Não apareceu? `/exit`, depois `claude` de novo.
Abra `.claude/skills/resposta-cliente/SKILL.md` e leia: em cima o **quando usar**, embaixo o **como fazer**.

## 3. Testar com mensagens de clientes

Conversa nova (`/clear`) e teste as 3 mensagens de `mensagens-de-clientes.md` (nesta pasta). Por exemplo:

```
/resposta-cliente Oi, pedi 2 pacotes do Mantiqueira na segunda e até agora nada. Ninguém responde o WhatsApp. Se não chegar até sexta vou cancelar o Clube.
```

Confira: ele prometeu só o que está em `dados/politicas-atendimento.md`? Marcou `[confirmar: ...]` o que não sabia?

## 4. Melhorar

Achou algo para mudar? Peça, por exemplo:

```
Na skill resposta-cliente, sempre termine a resposta com o nome de quem atende ("Equipe Torra Viva") e, em reclamação, peça desculpas uma vez só, logo no começo.
```

Teste de novo. É assim que uma skill fica boa: usar, ajustar, usar.

## Resultado esperado

A skill em `.claude/skills/resposta-cliente/SKILL.md`.

**O que reparar:** a skill usou os arquivos da pasta (contexto) sem você colar nada · você explicou uma vez e agora vale para todas as mensagens · primeiro procure uma skill pronta, depois crie.

✅ **Pronto quando:** `/resposta-cliente` respondeu as 3 mensagens. Marque o passo 5 em `progresso.md`.
