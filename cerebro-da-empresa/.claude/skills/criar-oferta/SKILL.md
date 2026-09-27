---
name: criar-oferta
description: Use após as fases de mapa ou quando pedirem /criar-oferta. Monta proposta de valor, oferta e um playbook de vendas a partir do mapa (8 min).
---

# /criar-oferta: oferta e playbook de vendas

Fase 7 do mapa. Lê tudo o que existir em `pesquisa/` e `negocio/`. Usa a skill `humanizer`, se instalada, nos textos de venda.

## Passos

1. Uma pergunta: "O que você mais quer vender nos próximos 3 meses?"
2. Escrever `negocio/07-oferta.md` (até 60 linhas):

```markdown
# Oferta e playbook: <Nome>
> Hipótese montada a partir do mapa. Só vale depois que o dono confirmar que consegue entregar.

## Proposta de valor   (Para <quem>, a <empresa> <faz o quê>, diferente porque <espaço vazio de 03>.)
## Promessa            (até 10 palavras, sem número inventado)
## Oferta principal    (o que é · para quem · preço [a confirmar])
## Oferta de entrada   (o primeiro passo fácil: diagnóstico, amostra, orçamento rápido)
## Provas que faltam   (o que construir para a promessa ser crível)

## Playbook de vendas
### Primeira conversa   (abertura · 3 perguntas · como apresentar · como fechar)
### Respostas às 3 objeções   (de 02)
### Follow-up no WhatsApp     (3 mensagens: dia 1, dia 3, dia 7, no tom de memoria/preferencias.md)
```

Tudo ligado ao mapa: dor de 02, espaço vazio de 03, gargalo de 05. Sem fonte: `[a confirmar]`.

## Fechar

Ao terminar, marcar a fase em `controle/progresso.md` (`[x]` + data) e responder no formato do `CLAUDE.md` (✓ / resumo / Desafio / Próximo).

- Resumo: proposta de valor · oferta de entrada.
- Desafio: "Mande a mensagem de follow-up do dia 1 para um cliente real esta semana."
- Próximo: `/mapa-completo` (~5 min).
