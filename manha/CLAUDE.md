# Imersão IA para empresários · pasta da manhã

Esta pasta é o projeto de uma pessoa aprendendo o Claude Code. Ela segue o `README.md` e as instruções de `passos/`. A empresa dos exercícios é a **Torra Viva Cafés Especiais**, que é **fictícia**.

## Como falar

- Português do Brasil, simples. Termo técnico só com tradução na mesma frase.
- Explicações curtas: **no máximo 6 linhas**, sem elogio e sem preâmbulo.
- Quando a pessoa pedir um texto, uma tabela ou um arquivo, entregue completo, no formato pedido. O limite de 6 linhas vale para as explicações, não para a entrega.
- Antes de criar, apagar ou rodar algo, dizer em 1 linha o que vai fazer.

## A Torra Viva (empresa fictícia, só para a aula)

- Torrefação pequena de cafés especiais em Mogi das Cruzes (SP), aberta em 2019. 9 pessoas: Helena (fundadora e mestre de torra), Marina (vendas para empresas), Caio (loja online e Instagram) e mais 6 na torra, embalagem, expedição e atendimento.
- Promessa: "Torrado esta semana, na sua xícara na próxima." Café de pequenos produtores do Sul de Minas e do Cerrado Mineiro.
- Vende em 4 canais: **Loja online**, **Clube Torra Viva** (assinatura de R$ 79/mês), **Cafeterias parceiras** (café de 1 kg) e **B2B Escritórios** (café todo mês para empresas, com máquina em comodato, que é empréstimo sem custo).
- Tom de voz: próximo, direto, fala de café sem frescura. Evita "o melhor café do mundo", "gourmet" e exagero.
- Site e Instagram de mentira: `torraviva.exemplo` e `@torraviva.exemplo`.

## Os arquivos

| Onde | O que tem |
|---|---|
| `dados/` | Dados fictícios de exemplo: `vendas-mensais.csv`, `produtos.csv`, `clientes-b2b.csv`, `orcamento.csv` (regras do orçamento para escritório), `politicas-atendimento.md` e `torra-viva.xlsx` (tudo junto, para subir no Google Planilhas) |
| `passos/0N-.../INSTRUCOES.md` | O que fazer em cada passo, com o prompt pronto |
| `gabarito/0N-.../` | O resultado pronto de cada passo, para comparar |
| `meu-trabalho/` | Onde vai tudo o que a pessoa criar |
| `progresso.md` | O checklist dos 8 passos |

## A trilha (8 passos)

| # | Passo | Fica pronto |
|---|---|---|
| 1 | Abrir a pasta no Claude Code | o Claude respondeu nesta pasta |
| 2 | Google Drive e planilhas | `meu-trabalho/resumo-vendas.md` (ou o Doc no Drive) |
| 3 | Prompts que funcionam | `meu-trabalho/prompts.md` |
| 4 | Usar uma skill pronta (`/eli5`) | a explicação na conversa |
| 5 | Criar uma skill | `.claude/skills/resposta-cliente/SKILL.md` |
| 6 | Design system | `meu-trabalho/design-system.md` |
| 7 | Páginas web | `meu-trabalho/calculadora-orcamento.html`, `dashboard-vendas.html`, `apresentacao.html` |
| 8 | Animação (Claude Motion ou plano B) | o MP4 do Motion ou `meu-trabalho/animacao-torra-viva.html` |

Quando a pessoa perguntar "o que falta?" ou "e agora?": ler `progresso.md`, ver quais arquivos de `meu-trabalho/` existem, dizer em 1 linha o próximo passo e apontar o `passos/0N-.../INSTRUCOES.md`. Quando um passo ficar pronto, marcar `[x]` nele em `progresso.md`.

## Regras

- **Dados fictícios.** Tudo em `dados/` é inventado para a aula. Ao usar esses números num texto, página ou apresentação, escrever "dados fictícios de exemplo" em algum lugar visível.
- **Não inventar.** Número, nome ou fato que não está em `dados/`, neste arquivo ou no que a pessoa disse não entra. Faltou informação: escrever `[confirmar: ...]`.
- **CSV:** a primeira linha de cada `.csv` é o aviso `# ... dados fictícios de exemplo`; o cabeçalho vem na linha 2. Valores com ponto decimal (42.00).
- **Nunca alterar `dados/` nem `gabarito/`.** Resultado vai para arquivo novo em `meu-trabalho/`.
- **Páginas e apresentações:** HTML num arquivo só (CSS e JavaScript dentro), que abre com dois cliques, com as cores e fontes de `meu-trabalho/design-system.md` se ele existir. Para o acabamento visual, usar a skill `frontend-design`.
- Um assunto por conversa: se a pessoa mudar de passo no meio, sugerir `/clear` (conversa nova).
