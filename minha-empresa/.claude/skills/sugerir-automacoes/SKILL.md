---
name: sugerir-automacoes
description: Use quando a pessoa pedir /sugerir-automacoes ou perguntar o que a IA pode fazer por ela. Lê a pasta (e o mapa do /sobre-mim, se houver) e sugere automações, rotinas, skills novas, conexões e comandos do Claude Code, priorizados por impacto e esforço, cada um com o próximo passo concreto. Funciona em qualquer pasta, com ou sem mapa.
---

# /sugerir-automacoes: o que a IA pode fazer por você

Transforma o que a pasta sabe sobre o trabalho da pessoa num plano prático. Tudo o que sugerir precisa dar para fazer **no Claude Code, com esta pasta**: skills, comandos, arquivos de contexto, conexões (MCP, o "cabo" que liga o Claude a outras ferramentas) e rotinas que a pessoa dispara.

**Duração:** uns 5 a 10 minutos com o mapa pronto; uns 5 minutos a mais sem ele.

## 1 · Olhar a pasta (em silêncio)

Ler o que existir, sem alterar nada:
- `CLAUDE.md` ou `AGENTS.md` na raiz.
- O mapa do trabalho: procurar `sobre-mim.md` (em `memoria/`, `contexto/` ou outra pasta) e `falta-trazer.md`.
- Outros arquivos sobre a pessoa ou a empresa: `memoria/`, `pesquisa/diagnostico.md`, `docs/`, planilhas em `dados/`. `memoria/numeros.md` e `dados/` são privados: usar para raciocinar, nunca copiar números para o plano.
- Skills que já existem em `.claude/skills/` (para não sugerir de novo o que já existe) e conexões ativas (ex.: Google Drive).

Dizer em 1 linha o que vai usar: "Vou usar <mapa / arquivos encontrados> para sugerir. Uns minutos."

## 2 · Se não houver mapa do trabalho

Oferecer em 1 linha: "Não achei um mapa do seu trabalho. Quer rodar /sobre-mim antes (uns 15 min, sugestões bem melhores) ou prefere 4 perguntas rápidas agora?" (Se a skill `sobre-mim` não existir na pasta, ir direto às 4 perguntas.)

Perguntas rápidas (uma por vez):
1. "Qual é o seu papel e em que empresa ou área?"
2. "Quais 2 ou 3 tarefas mais tomam o seu tempo toda semana?"
3. "Para cada uma: o que faz começar, que ferramentas usa e quanto tempo leva?"
4. "Onde estão os seus dados e documentos (Drive, planilhas, e-mail, sistema)?"

Usar as respostas só para esta análise. No fim, sugerir rodar /sobre-mim para guardar o mapa.

## 3 · Analisar

Para cada processo e rotina, classificar os passos:
- **IA faz:** escrever, resumir, comparar, calcular a partir de planilha, montar documento ou página, pesquisar na internet.
- **IA prepara, você decide:** proposta, resposta a cliente, aprovação, preço.
- **Fica com você:** relação pessoal, negociação, decisão estratégica.

Para cada oportunidade, escolher **um tipo**:

| Tipo | Quando usar | Exemplo |
|---|---|---|
| Skill nova | Tarefa que se repete sempre do mesmo jeito | /proposta, /resumo-reuniao, /relatorio-semanal |
| Rotina | Algo com gatilho de tempo (toda segunda, fim do mês) que a pessoa dispara com 1 comando | "Toda segunda: /relatorio-semanal" |
| Conexão | O dado está em outro lugar (Drive, Sheets, e-mail) | Conectar o Google Drive para ler a planilha de vendas |
| Contexto | Falta um documento para a IA acertar | Trazer a tabela de preços para a pasta |
| Comando pronto | Pedido avulso que já funciona hoje | Um prompt para colar |

**Impacto** (1 a 3): tempo poupado segundo o que a pessoa disse (tempo × frequência) e tamanho da dor. **Esforço** (1 a 3): 1 = funciona hoje com um prompt; 2 = criar uma skill ou trazer um arquivo; 3 = precisa de conexão nova ou de outra pessoa. Tempo poupado só com números ditos pela pessoa e sempre com a palavra `estimativa`; sem números, `[a confirmar]`.

## 4 · Gravar

**Onde:** se a pasta tiver um lugar para entregas ou documentos (`entregas/`, `docs/`, `saidas/`, `outputs/`), usar o dela: `<pasta>/sugestoes.md`. Senão, criar `entregas/sugestoes.md`. Se o arquivo já existir, não sobrescrever: acrescentar uma seção nova com a data no topo (ou criar `sugestoes-<AAAA-MM-DD>.md`, se a pessoa preferir).

```markdown
# O que a IA pode fazer por <nome>
Base: <mapa ou respostas rápidas> · Data: <AAAA-MM-DD>

## Em uma frase
## As 3 primeiras (fazer esta semana)
Para cada uma: o que é · qual processo resolve · tipo · impacto/esforço · **próximo passo concreto** (o comando ou o prompt exato para colar agora)

## Todas as sugestões
| # | Sugestão | Processo | Tipo | Impacto | Esforço | Próximo passo |

## Rotinas da semana   (dia · comando · o que entrega)
## Skills para criar    (nome · o que faz · arquivos que lê)
## Conexões e arquivos que faltam
## O que continua com você (e por quê)
```

Regras:
- No máximo 10 sugestões. Primeiro impacto alto e esforço baixo.
- Todo "próximo passo" é executável na hora: um comando (`/nome`), um prompt entre aspas ou "coloque o arquivo X na pasta".
- Não sugerir skill que já existe na pasta; se ela resolve, sugerir usá-la.
- Não prometer automação que rode sozinha. Se algo pedir agendamento ou sistema externo, dizer isso e marcar esforço 3.
- Não sugerir nada que envie mensagem, publique ou pague sem a pessoa revisar.

**Na pasta do cérebro da empresa** (fase 5 de 8), se existirem:
- `RESULTADO.html`: trocar os blocos `automacoes`, `proximos` e `atualizado` seguindo `controle/componentes.md` e as regras do `CLAUDE.md` (só o trecho entre `INICIO` e `FIM`, sem ler o arquivo inteiro).
- `controle/progresso.md`: marcar a fase 5 com `[x]` e a data.

## 5 · Fechar

```
✓ Plano de automações → <caminho>
Top 3: <1> · <2> · <3>
Abra o RESULTADO.html (ou atualize a página): a seção Automações apareceu.
Começo por qual? Se for uma skill, eu crio agora e testamos com um caso seu.
```
Sem RESULTADO.html, omitir a terceira linha. Na pasta do cérebro da empresa, a fase seguinte é `/criar-oferta`.

Se a pessoa escolher uma skill: usar a `skill-creator` (se não estiver disponível, escrever o SKILL.md direto), salvar em `.claude/skills/<nome>/`, testar com um caso real dela e marcar a sugestão como feita no arquivo.
