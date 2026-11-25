---
name: sugerir-automacoes
description: Use quando a pessoa pedir /sugerir-automacoes ou perguntar o que a IA pode fazer por ela. Lê a pasta (e o mapa do /sobre-mim, se houver) e sugere o que usar do Claude (app, projetos, Artifacts, skills, rotinas agendadas, conectores, plugins, Claude no navegador e Claude Code), priorizados por impacto e esforço, cada um com o próximo passo concreto. Funciona em qualquer pasta, com ou sem mapa.
---

# /sugerir-automacoes: o que a IA pode fazer por você

Transforma o que a pasta sabe sobre o trabalho da pessoa num plano prático. Cada sugestão usa a ferramenta do Claude que melhor resolve aquele passo, não só o Claude Code. A pessoa sai sabendo **o que** a IA faz e **com qual recurso**.

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
| Prompt pronto | Pedido avulso que já funciona hoje, no app ou no Claude Code | Um prompt para colar |
| Projeto (claude.ai) | Conversas sobre o mesmo assunto que precisam sempre dos mesmos documentos e instruções | Projeto "Cobrança" com a política de crédito e o modelo de e-mail |
| Contexto | Falta um documento para a IA acertar | Trazer a tabela de preços para a pasta ou para o projeto |
| Skill | Tarefa que se repete sempre do mesmo jeito | /proposta, /triagem-curriculos, /relatorio-semanal |
| Artifact | Algo para ver ou usar no navegador e compartilhar: página, painel, calculadora, formulário | Painel do relatório mensal; guia de dúvidas para os funcionários |
| Rotina agendada | Tarefa com hora marcada (toda terça 8h, dia 5 do mês) que pode rodar sozinha e deixar o resultado pronto para revisar | Toda terça 8h: lista de cobranças com os rascunhos de e-mail |
| Conector | O dado está em outro serviço (Gmail, Google Drive, Agenda, Notion, CRM) | Ligar o Google Drive no claude.ai para ler a planilha de vendas |
| Plugin | Pacote pronto de skills e conectores de uma área (vendas, marketing, finanças, RH) | Instalar o plugin da área e usar as skills dele |
| Claude no navegador | O trabalho é clicar em sites ou sistemas web sem conector: pesquisar, copiar dados, preencher | Abrir o Instagram de 5 concorrentes e resumir os posts da semana |

Variar os tipos: num plano de 10, usar pelo menos 4 tipos diferentes, sempre o que encaixa no passo (não forçar).

**Impacto** (1 a 3): tempo poupado segundo o que a pessoa disse (tempo × frequência) e tamanho da dor. **Esforço** (1 a 3): 1 = funciona hoje com um prompt ou um conector de 1 clique no claude.ai; 2 = criar uma skill, um projeto, um Artifact, uma rotina ou trazer um arquivo; 3 = precisa de acesso de outra pessoa (TI, chave de sistema) ou de algo pago. Tempo poupado só com números ditos pela pessoa e sempre com a palavra `estimativa`; sem números, `[a confirmar]`.

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

## Rotinas agendadas   (quando · o que roda · o que deixa pronto para revisar)
## Skills para criar    (nome · o que faz · arquivos que lê)
## Conexões e arquivos que faltam
## O que continua com você (e por quê)
```

Regras:
- No máximo 10 sugestões. Primeiro impacto alto e esforço baixo.
- Todo "próximo passo" é executável na hora: um comando (`/nome`), um prompt entre aspas ou "coloque o arquivo X na pasta".
- Não sugerir skill que já existe na pasta; se ela resolve, sugerir usá-la.
- Rotina agendada entrega **rascunho para revisar**, nunca executa sozinha o que tem efeito fora (enviar, publicar, pagar, bloquear cliente).
- Claude no navegador: dizer que a pessoa assiste e aprova cada envio; nunca senha, pagamento ou dado de cartão.
- Não sugerir nada que envie mensagem, publique ou pague sem a pessoa revisar.

**Na pasta do cérebro da empresa** (fase 5 de 8), se existirem:
- **Página do mapa** (`mapa-<primeiro-nome>.html`, do `/sobre-mim`): se existir, preencher entre `<!-- INICIO:plano -->` e `<!-- FIM:plano -->` a seção "O que a IA pode fazer por você" (as 3 primeiras em cartões, a tabela com o tipo em selo, as rotinas agendadas), no mesmo visual da página.
- `RESULTADO.html`: trocar os blocos `automacoes` (com o botão para a página do mapa, se existir), `proximos` e `atualizado` seguindo `controle/componentes.md` e as regras do `CLAUDE.md` (só o trecho entre `INICIO` e `FIM`, sem ler o arquivo inteiro).
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
