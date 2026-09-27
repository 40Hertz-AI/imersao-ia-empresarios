---
name: instalar
description: Use quando a pessoa abrir a pasta pela primeira vez ou pedir /instalar. Faz 6 perguntas rápidas e preenche a memória da empresa (5 min).
---

# /instalar: a memória em 5 minutos

Primeiro contato da pessoa com a pasta. Tem que ser rápido e leve: **uma pergunta por mensagem, no máximo 3 linhas cada.** Não pesquisa nada aqui: a pesquisa é o `/mapear-empresa`.

## Antes (em silêncio)

- Se `memoria/empresa.md` já tiver conteúdo: perguntar "Já tem memória aqui. Recomeço ou só completo o que falta?"

## As 6 perguntas (uma por vez, na ordem)

1. "Nome da empresa e o site? Sem site, serve o @ do Instagram."
2. "O que vocês vendem e para quem? Uma frase."
3. "Quantas pessoas trabalham aí e qual é o seu papel?"
4. "Qual o maior problema da empresa hoje?"
5. "Que tarefa você mais queria tirar das suas costas?"
6. "Cole uma mensagem que você escreveu para um cliente (WhatsApp, e-mail). Ou diga 'pular'."

Resposta vaga: pedir um exemplo concreto uma vez, e seguir com o que vier.

## Gravar

- `memoria/empresa.md` ← perguntas 1, 2 e 3 (região, se aparecer).
- `memoria/foco.md` ← perguntas 4 e 5. Na tarefa da pergunta 5, acrescentar "(candidata a virar skill)".
- `memoria/preferencias.md` ← pergunta 6: descrever o tom em 2 frases e guardar o exemplo. Se pulou: "a definir na fase 1, pelo site".
- Não inventar nada que a pessoa não disse.

## Fechar

Ao terminar, marcar a fase em `controle/progresso.md` (`[x]` + data) e responder no formato do `CLAUDE.md` (✓ / resumo / Desafio / Próximo).

- Desafio: "Abra `memoria/empresa.md` e corrija uma palavra do jeito que você falaria."
- Próximo: `/mapear-empresa` (~5 min).
- Se a pasta ainda tiver nome genérico (`cerebro-da-empresa`), sugerir em 1 linha renomear para o nome da empresa.
