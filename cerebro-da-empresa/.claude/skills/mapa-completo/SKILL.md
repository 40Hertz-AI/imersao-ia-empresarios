---
name: mapa-completo
description: Use quando as fases estiverem prontas ou pedirem /mapa-completo. Junta tudo num MAPA.html com a marca da empresa e aponta os próximos passos (5 min).
---

# /mapa-completo: a empresa inteira numa página

Fase 8, o fechamento. Lê tudo e gera `MAPA.html` na raiz da pasta. Usa a skill `frontend-design` (se instalada) e as cores e fontes de `marca/marca.md`.

## Antes

- Ler `controle/progresso.md`. Fase faltando não trava: o card dela aparece como "a fazer" com o comando.

## O `MAPA.html` (um arquivo só, abre com clique duplo)

1. **Capa:** nome da empresa, a frase de `01`, a data.
2. **Progresso:** as 8 fases, feitas e a fazer.
3. **Um card por fase** (empresa, nicho, concorrentes, números, comercial, equipe, oferta): 3 linhas de resumo + link para o arquivo.
4. **Os 5 próximos passos**, em ordem, cada um com o comando ou a ação.
5. **O que ainda está `[a confirmar]`:** a lista, para o dono completar.
6. **Conecte mais:** 3 ideias de conexão (MCP) para o cérebro ver mais, escolhidas pelo que apareceu no mapa (ex.: a planilha de vendas no Google, a agenda, o CRM).
7. **Skills para criar:** as 3 tarefas de `06-equipe.md` que viram skill.

Regras: sem gráfico de número inventado; mobile primeiro; nenhuma dependência além de Google Fonts.

Atualizar `memoria/foco.md` → "Próximas ações" com os 5 passos.

## Fechar

Ao terminar, marcar a fase em `controle/progresso.md` (`[x]` + data) e responder no formato do `CLAUDE.md` (✓ / resumo / Desafio / Próximo).

- Resumo: "Mapa pronto. Abra o `MAPA.html`." + o passo nº 1.
- Desafio: "Abra o mapa e marque o que você discorda. Corrija na conversa: o cérebro aprende."
- Próximo: uma entrega: `/criar-proposta`, `/criar-carrossel` ou `/criar-slides`.
