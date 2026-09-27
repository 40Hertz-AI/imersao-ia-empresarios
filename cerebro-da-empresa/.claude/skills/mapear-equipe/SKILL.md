---
name: mapear-equipe
description: Use após o /mapear-comercial ou quando pedirem /mapear-equipe. Mapeia quem faz o quê, as tarefas repetitivas e o que a IA pode assumir (8 min).
---

# /mapear-equipe: quem faz o quê e o que a IA pode assumir

Fase 6 do mapa. **Privado.** Usar **cargos, não nomes** (ex.: "atendente 1").

## Perguntas (uma por vez)

1. "Liste as funções da empresa e quantas pessoas em cada. (ex.: 2 atendentes, 1 financeiro)"
2. Para cada função, uma pergunta: "O que o <cargo> faz toda semana que é sempre igual?"
3. "Que ferramentas vocês usam no dia a dia? (WhatsApp, planilha, sistema...)"
4. "Se alguém faltar uma semana, o que para?"

## Escrever `negocio/06-equipe.md` (até 40 linhas)

```markdown
# Equipe: <Nome>

## Quem faz o quê        (tabela: função · pessoas · o que faz · ferramentas)
## Tarefas repetitivas   (tabela: tarefa · função · horas/semana [estimativa do dono] · a IA pode: fazer | ajudar | não)
## O que para se alguém faltar   (risco de conhecimento só na cabeça de uma pessoa)
## Top 3 para a IA assumir       (para cada: vira skill, conexão (MCP) ou os dois)
```

## Fechar

Ao terminar, marcar a fase em `controle/progresso.md` (`[x]` + data) e responder no formato do `CLAUDE.md` (✓ / resumo / Desafio / Próximo).

- Resumo: nº de funções · tarefa nº 1 para a IA · horas por semana que ela libera (se o dono estimou).
- Desafio: "Escolha a tarefa nº 1 e peça: 'crie uma skill para isso'. Você vira quem orquestra, não quem executa."
- Próximo: `/criar-oferta` (~8 min).
