---
name: criar-conteudo
description: Use após o /mapear-empresa ou quando pedirem /criar-conteudo, carrossel, posts ou lâminas em PNG. Monta pilares, 12 pautas, calendário de 4 semanas e 1 carrossel desenhado com a marca, exportado em PNG pronto para postar (10 min).
---

# /criar-conteudo: o que postar no próximo mês, pronto para postar

**Sem perguntas.** Lê `memoria/`, `marca/marca.md`, `pesquisa/` e `entregas/oferta.md` (o que existir). Tom de `memoria/preferencias.md`. Se `marca/marca.md` estiver sem cores ou fontes, rodar a skill `marca` antes.

## 1. Planejar → `entregas/conteudo.md` (até 150 linhas)

1. **4 pilares** tirados das dores (`pesquisa/cliente.md`) e dos espaços vazios (`pesquisa/concorrentes.md`), cada um com objetivo e % do mix (soma 100).
2. **3 novidades reais do setor** (busca na web, com link e data; data que não aparece: `data a confirmar`). Sem busca na web: trocar por 3 dúvidas reais de cliente de `pesquisa/cliente.md`.
3. **12 pautas** no formato **notícia ou dúvida do cliente × opinião da empresa**: título, pilar, formato (carrossel, reel, post único), primeira frase e chamada final.
4. **Calendário de 4 semanas**, 3 posts por semana, alternando pilares e formatos.
5. **1 carrossel completo** (a pauta mais forte), 6 a 8 lâminas, no arco gancho → problema → método → virada → chamada. Até 25 palavras por lâmina. Legenda completa e a palavra para o cliente comentar.
6. **Roteiro de 1 reel** de 30 segundos (gancho de 3 s, 3 pontos, chamada).

## 2. Desenhar o carrossel → `entregas/posts/carrossel-1.html`

Carregar a skill `frontend-design`. Ler `references/lamina.md` (o sistema de lâmina). Resumo:
- Cada lâmina é um `<section class="lamina">` de **1080 × 1350 px** (4:5, o tamanho do feed).
- **Um sistema só**, com layout que muda pela função da lâmina: gancho (tipografia dominante), problema (um elemento gráfico que mostra a cena), método (lista desenhada), virada (selo/carimbo), chamada (a palavra para comentar em destaque).
- Cores e fontes de `marca/marca.md`. Grafismos em SVG desenhados no arquivo; fotos só se o dono pôs em `marca/`. Nada de foto de banco nem emoji.
- Fixos em todas: @ da empresa, contador `1/7`, indicação de "arraste" nas primeiras.
- Legível no celular: título ≥ 72 px, apoio ≥ 36 px.

## 3. Exportar em PNG → `entregas/posts/carrossel-1-01.png` …

O arquivo aceita `?n=3` para mostrar só a lâmina 3 sem margem (ver `references/lamina.md`). Para cada lâmina:
```bash
# Mac / Linux (troque 7 pelo nº de lâminas)
for i in $(seq 1 7); do npx --yes playwright screenshot --wait-for-timeout=1500 --viewport-size=1080,1350 "file://$PWD/entregas/posts/carrossel-1.html?n=$i" "entregas/posts/carrossel-1-0$i.png"; done
```
```powershell
# Windows (PowerShell)
1..7 | % { npx --yes playwright screenshot --wait-for-timeout=1500 --viewport-size=1080,1350 "file:///$($PWD.Path -replace '\\','/')/entregas/posts/carrossel-1.html?n=$_" "entregas/posts/carrossel-1-0$_.png" }
```
Abrir cada PNG e olhar: texto cortado, fonte que não carregou (apareceu Times/Arial), contraste, excesso de elemento. Corrigir e exportar de novo. Sem Node: pedir ao dono para abrir o HTML e tirar print.

Gravar a legenda em `entregas/posts/legenda-1.md`.

## 4. Atualizar o RESULTADO.html

Trocar `conteudo`, `proximos` e `atualizado` seguindo `controle/componentes.md`: o carrossel dentro de `.post` com **um `.slide img` por PNG** (o relatório já põe setas e pontos), a legenda em `.post-legenda`, os pilares em `.rosca`, o calendário em tabela com selos de formato e um `.bastidor`.

## Fechar

Marcar a fase em `controle/progresso.md` e responder no formato do `CLAUDE.md`. Resumo: os 4 pilares em 1 linha · o tema do carrossel · onde estão os PNGs.
Desafio: "Poste o carrossel esta semana: as 7 imagens estão em `entregas/posts/`."
Próximo: mapa completo. Abra o `RESULTADO.html` do começo ao fim e escolha 1 dos próximos passos para a semana.
