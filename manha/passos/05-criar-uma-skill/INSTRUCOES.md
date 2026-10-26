# Passo 5 · Criar uma skill: `/resposta-cliente`

**O que você vai fazer:** criar uma skill que lê a mensagem de um cliente da Torra Viva e devolve a resposta pronta, no tom da empresa e dentro das regras de atendimento.

**A ideia:** se você faz a mesma tarefa toda semana, ela pode virar uma skill. Você explica uma vez e depois só digita `/resposta-cliente`.

---

## 1. Criar a skill

Cole no Claude Code:

```
Crie uma skill chamada resposta-cliente, no arquivo .claude/skills/resposta-cliente/SKILL.md.
Ela recebe a mensagem de um cliente (WhatsApp, e-mail ou Instagram) e devolve:
1) o tipo da mensagem (dúvida, pedido, reclamação ou elogio) e a urgência (baixa, média ou alta);
2) a resposta pronta para copiar, no tom da empresa: próxima, direta, sem exagero, com no máximo 80 palavras;
3) se for reclamação: o que fazer por dentro (quem resolve e até quando).
Regras: usar só o que está na pasta (CLAUDE.md, dados/politicas-atendimento.md e os outros arquivos de dados/) ou na própria mensagem; nunca prometer prazo, desconto ou reembolso que não esteja escrito; se faltar informação, escrever [confirmar: ...] dentro da resposta.
Se a pasta não tiver dados da empresa, a skill pergunta antes o nome da empresa e o tom de voz, numa pergunta só.
Use a skill-creator se ela estiver disponível. No fim, me explique a skill em 5 linhas.
```

O Claude pede licença para criar o arquivo: aceite.

**Sobre a `skill-creator`:** é uma skill da Anthropic que ajuda a escrever skills. Ela vem com a conta do Claude quando está ligada em claude.ai → Configurações → Capacidades/Skills. Não tem? Tudo bem: o prompt acima funciona sem ela.

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

- A skill em `.claude/skills/resposta-cliente/SKILL.md`.
- A skill pronta, gerada com este mesmo prompt, está em `gabarito/05-criar-uma-skill/resposta-cliente/SKILL.md`, e as respostas às 3 mensagens em `gabarito/05-criar-uma-skill/exemplo-de-uso.md`.

Quer usar a do gabarito? Copie a pasta `gabarito/05-criar-uma-skill/resposta-cliente/` para `.claude/skills/`.

**O que reparar:** a skill usou os arquivos da pasta (contexto) sem você colar nada · uma regra escrita ("nunca prometer o que não está escrito") vale para todas as respostas · primeiro procure uma skill pronta, depois crie.

✅ **Pronto quando:** `/resposta-cliente` respondeu as 3 mensagens. Marque o passo 5 em `progresso.md`.
