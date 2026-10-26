---
name: criar-conteudo
description: Use após o /mapear-empresa ou quando pedirem /criar-conteudo, carrossel, posts ou lâminas para Instagram. Monta pilares, 12 pautas, calendário de 4 semanas, 1 carrossel e 2 posts únicos desenhados com a marca, em HTML que abre no navegador, sem PNG (10 min). Funciona em qualquer pasta.
---

# /criar-conteudo: o que postar no próximo mês, pronto para postar

**Sem perguntas.** Lê `memoria/`, `marca/marca.md`, `pesquisa/` e `entregas/oferta.md` (o que existir). Tom de `memoria/preferencias.md`. **Tudo sai em HTML**, que abre com dois cliques no navegador. Não gerar PNG e não usar Playwright nem outro programa de print.

## 0. Pasta fora da aula

- Sem `memoria/empresa.md` (ou vazio) e sem nenhum outro arquivo que diga qual é a empresa: perguntar **numa mensagem só**: "Para montar o conteúdo, me diga: nome da empresa e @ do Instagram, o que vende e para quem, e o tom (ex.: próximo, técnico, divertido)." Gravar a resposta em `memoria/empresa.md` (criar a pasta) e seguir.
- Sem `marca/marca.md` com cores e fontes: rodar a skill `marca` se ela existir. Se não existir, escolher 4 cores e 2 fontes do Google Fonts coerentes com o produto, gravar em `marca/marca.md` marcado `[sugestão]` e avisar no fechamento.
- Sem `pesquisa/`: tirar pilares e pautas do que a pessoa contou e marcar no `conteudo.md` "pautas sem pesquisa de cliente: confirmar".
- Sem `controle/` ou `RESULTADO.html`: pular os passos 5 e 6 do relatório e do progresso.

## 1. Planejar → `entregas/conteudo.md` (até 150 linhas)

1. **4 pilares** tirados das dores (`pesquisa/cliente.md`) e dos espaços vazios (`pesquisa/concorrentes.md`), cada um com objetivo e % do mix (soma 100).
2. **3 novidades reais do setor** (busca na web, com link e data; data que não aparece: `data a confirmar`). Sem busca na web: trocar por 3 dúvidas reais de cliente de `pesquisa/cliente.md`.
3. **12 pautas** no formato **notícia ou dúvida do cliente × opinião da empresa**: título, pilar, formato (carrossel, reel, post único), primeira frase e chamada final.
4. **Calendário de 4 semanas**, 3 posts por semana, alternando pilares e formatos.
5. **1 carrossel completo** (a pauta mais forte), 6 a 8 lâminas, no arco gancho → problema → método → virada → chamada. Até 25 palavras por lâmina. Legenda completa e a palavra para o cliente comentar.
6. **2 posts únicos** (as duas pautas seguintes de formato "post único"): texto da lâmina e legenda.
7. **Roteiro de 1 reel** de 30 segundos (gancho de 3 s, 3 pontos, chamada).

## 2. Desenhar em HTML → `entregas/posts/`

Carregar a skill `frontend-design` (se existir). Ler `references/lamina.md` (o sistema de lâmina e o esqueleto do arquivo). Resumo:
- `carrossel-1.html` (as 6 a 8 lâminas), `post-1.html` e `post-2.html` (1 lâmina cada). Cada lâmina é um `<section class="lamina">` de **1080 × 1350 px** (4:5, o tamanho do feed).
- O arquivo abre mostrando **uma lâmina por vez, do tamanho da janela**, com setas (botões e teclado) e o contador. Com `?n=3` no endereço mostra só a lâmina 3, sem botões: é assim que o relatório e o print usam.
- **Um sistema só**, com layout que muda pela função da lâmina: gancho (tipografia dominante), problema (um elemento gráfico que mostra a cena), método (lista desenhada), virada (selo ou carimbo), chamada (a palavra para comentar em destaque).
- Cores e fontes de `marca/marca.md`. Grafismos em SVG desenhados no arquivo; fotos só se o dono pôs em `marca/`. Nada de foto de banco nem emoji.
- Fixos em todas: @ da empresa, contador `1/7` (no carrossel), indicação de "arraste" nas primeiras.
- Legível no celular: título ≥ 72 px, apoio ≥ 36 px.

## 3. Conferir (sem print)

Reler cada arquivo e corrigir antes de seguir:
- Até 25 palavras por lâmina; nenhum texto passa da margem de 96 px (contar linhas: título de 72–96 px cabe em ~5 linhas).
- Contraste: texto sobre o fundo de cada lâmina passa 4,5:1 (calcular com os hex de `marca/marca.md`).
- O `<link>` do Google Fonts tem as duas fontes; `font-family` das lâminas usa as variáveis.
- `?n=` funciona: o script lê o número e mostra só aquela lâmina.
- Nada de fora além do Google Fonts: sem imagem da internet, sem biblioteca.

Abrir o carrossel no navegador para o dono: `open` (Mac), `start ""` (Windows), `xdg-open` (Linux). Se falhar, só dar o caminho.

## 4. Legendas → `entregas/posts/legendas.md`

A legenda do carrossel (com a palavra para comentar) e as dos 2 posts únicos, prontas para colar, e no fim 1 linha: "Para postar: abra cada lâmina (ex.: `carrossel-1.html?n=1`) em tela cheia e tire um print."

## 5. Atualizar o RESULTADO.html

Se existir. Trocar `conteudo`, `proximos` e `atualizado` seguindo `controle/componentes.md`: o carrossel dentro de `.post` com **um `.slide html` por lâmina** (cada um com o `<iframe>` de `carrossel-1.html?n=<k>`; o relatório já põe setas, pontos e a escala), a legenda em `.post-legenda`, os pilares em `.rosca`, botões `.botao` para abrir o carrossel e os 2 posts, o calendário em tabela com selos de formato e um `.bastidor`.

## 6. Fechar

Marcar a fase em `controle/progresso.md` (se existir) e responder:

```
✓ Conteúdo do mês → entregas/conteudo.md + entregas/posts/ (HTML)
<os 4 pilares em 1 linha> · carrossel: <tema>
Abra entregas/posts/carrossel-1.html no navegador (setas para passar). Atualize o RESULTADO.html: a seção Conteúdo apareceu.
Falta confirmar: <o que ficou [a confirmar]; omitir se nada>
Próximo: poste o carrossel esta semana (print de cada lâmina em tela cheia) e escolha 1 dos próximos passos do RESULTADO.html.
```
Sem RESULTADO.html, trocar a terceira linha por: "Abra entregas/posts/carrossel-1.html no navegador (setas para passar)."
