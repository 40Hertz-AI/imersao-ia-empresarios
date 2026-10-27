# Gatti Química — Crítica v3 (refinamento premium e espaçamento)

Method: dual-agent (A: revisão de design isolada · B: detector + navegador isolado), sintetizado depois que as duas terminaram.
Alvo: `page.tsx` (render `index.html`), comparado com `mockup.png` e `prints/v2-desktop.png`, em 320, 390, 1024, 1280, 1440 e 1920px.
Escopo desta rodada: refinamento, não redesign. Header idêntico ao mockup, mesmas seções na mesma ordem, mesma paleta, só dados reais e só imagens de `assets/`.

---

## Nota do audit ANTES: 13/20 (Aceitável)

| # | Dimensão | Nota | Achado principal |
|---|---|---|---|
| 1 | Acessibilidade | 3 | Em 320px a página tem 328px de largura: a placa do selo (250px fixos) e o logo do rodapé estouram, o que viola WCAG 1.4.10 (Reflow). Na barra prateada do celular, os alvos de toque têm 30–32px. `prefers-reduced-motion` zera todas as transições, inclusive as de cor, que são feedback útil. |
| 2 | Performance | 2 | O React gera 15 `<link rel="preload">`: além do ícone e do hero, as 4 fotos dos cards e os 9 logos, todos abaixo da dobra, disputando banda com a foto do hero. |
| 3 | Theming | 2 | São 48 hex únicos, 11 deles azuis. O título, o link, o círculo e o royal ficam a 1.03–1.06:1 entre si (não dá para distinguir). O objeto `C` existe, mas metade das cores está solta em classes. |
| 4 | Responsivo | 3 | Sem largura máxima: em 1920 os cards ficam com 450px e o rodapé se espalha. O hero de 716px fixos deixa 120–140px vazios em 1024–1279. Em 1024, as descrições dos cards ficam com 178px de largura (até 6 linhas). |
| 5 | Integridade | 3 | O detector renderizado dá 0 achados (1440, 1024, 390; escopos layout e type). Mas o card inteiro reage ao hover e só o link é clicável. O espaçamento não segue escala. O ícone da linha Automotiva é um carro de passeio, enquanto o texto fala em veículos pesados e a foto mostra um caminhão. |

**Detector (Assessment B):**
- `page.tsx`: 0 achados. É um scan só por regex, então não prova que está limpo.
- `index.html` estático: 14 achados, todos falsos positivos (11 `low-contrast`, 2 `cramped-padding` e 1 `flat-type-hierarchy`), porque o scan não executa o Tailwind CDN.
- URL renderizada com o overlay `detect.js`: "No anti-patterns found" em 1440, 1024 e 390.

O que o detector não pega (overflow em 320, preloads, affordance falsa, ritmo) veio da medição com Playwright e da revisão de design.

> A v2 se deu 18/20. A nota menor agora não significa que a página piorou. Esta rodada mediu mais coisas: reflow em 320, a largura de 1920, os preloads gerados pelo React e a contagem de cores.

## Heurísticas de Nielsen (Assessment A): 23/32 (72%, Bom)

| # | Heurística | Nota | Ponto-chave |
|---|---|---|---|
| 1 | Visibilidade do status | 3 | Hover e foco existem. "Saiba mais" leva a outro domínio sem nenhuma pista visual disso. |
| 2 | Correspondência com o mundo real | 3 | O ícone da Automotiva é um carro de passeio, mas a linha é para veículos pesados. |
| 3 | Controle e liberdade | 3 | O menu mobile (`<details>`) não fecha ao tocar fora. |
| 4 | Consistência e padrões | 2 | O card reage como clicável e não é. São 6 margens laterais diferentes. |
| 5 | Prevenção de erros | 3 | O clique na foto do card é um erro induzido. |
| 6 | Reconhecimento em vez de memória | 3 | No mobile, os dois selos da faixa ANVISA se fundem numa frase. |
| 7 | Flexibilidade | n/a | Landing page. |
| 8 | Estética e minimalismo | 3 | A página é limpa, mas os pesos ficam todos entre 500 e 700 e há 14 tamanhos de fonte quase iguais. |
| 9 | Recuperação de erros | 3 | Não há fluxos de erro. Em 320 aparece rolagem horizontal. |
| 10 | Ajuda | n/a | Landing page. |

**Especificidade:** a página é específica na superfície e genérica na estrutura. O wordmark real, o selo Nº1 prata/navy e a barra metálica são da Gatti. O esqueleto (hero, 4 cards, faixa, logos, rodapé) é o padrão do setor, e isso não muda nesta rodada. O premium tem que vir do acabamento.

**Carga cognitiva:** 2 de 8 itens falham.
- Foco único: o selo prateado (12.8:1 contra o fundo) grita mais que o CTA. O preenchimento do botão tem 1.66:1 contra o hero.
- Seis itens no menu. Isso fica, porque o header é fixo pelo mockup.

**Jornada emocional:**
- O pico é o hero: o H1 condensado com o selo.
- O primeiro vale é a faixa de clientes, espremida (26px abaixo da faixa azul).
- O fim é abrupto: o texto do rodapé termina 12px acima da barra prateada, contra cerca de 28px no mockup.

---

## Crítica priorizada

### P1 (corrigir nesta rodada)

**P1.1 Ritmo vertical sem escala, com seções sem respiro** (`/impeccable layout`)
- Em 1440 aparecem 13 valores de espaçamento distintos: 8, 12, 19, 21, 22, 26, 33, 37, 38, 40, 43, 44 e 66. Dos 66 valores de margin, padding e gap do `page.tsx`, 41 estão fora da grade de 4pt.
- Os intervalos de cada seção, em 1440:

  | Seção | Intervalos |
  |---|---|
  | Hero | 66 / 19 / 33 / 43 / 33 |
  | Cards | 40 em cima, 37 embaixo, gap de 21 |
  | Dentro do card | 12 / 19 / 26 / 40 |
  | Clientes | 26 / 22 / 44 |
  | Rodapé | altura fixa de 266px, com a descrição a 12px da barra |

- **Correção:** escala de 4pt (4, 8, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80) com um ritmo deliberado:
  - pares apertados entre título e texto (16–20);
  - blocos internos com 24–32;
  - respiro entre seções de 48–64.
- O rodapé deixa de ter altura fixa e passa a ter padding de 56/48.

**P1.2 Grade lateral sem regra: 6 margens esquerdas em 1440, sem largura máxima** (`/impeccable layout`)
- As margens são: header 40, hero 59, cards 28, faixa 84, clientes 60 e rodapé 50.
- Em 1920 tudo se espalha: o escudo e o frasco ficam a cerca de 1.100px do texto.
- **Correção:**
  - Um único gutter, `clamp(20px, 3.9vw, 56px)` (56 em 1440), que coincide com a margem direita do menu (57).
  - O conteúdo de cada seção vai num container `max-width: 1440px` centralizado, com o fundo continuando de ponta a ponta.
  - O header não muda (o logo continua em 40).

**P1.3 Tipografia achatada: tudo pesado e versal sem tracking** (`/impeccable typeset`)
- O texto corrido está em peso 500: subtítulo do hero (26/37) e descrições dos cards (18/27, `#2B2A2C`). O mockup usa um peso regular e mais leve.
- Versal sem tracking no botão, no "Saiba mais", na faixa, no título de clientes e nos títulos do rodapé.
- São 14 tamanhos quase duplicados: 17/18/18.5/19, 21/22/23, 25/26/27 e 30/30.5.
- **Correção:** escala de papéis, com o header intocado:

  | Papel | Valor |
  |---|---|
  | Display | H1, inalterado |
  | Lead | 24/34, peso 400 |
  | Título do card | 26/30, +0.01em |
  | Corpo | 17/27, peso 400, ardósia azulada `#3A4150` |
  | Rótulo versal | 15px, peso 600, +0.08em |
  | Título de seção | 22px, peso 700, +0.05em |
  | Título do rodapé | 18px, +0.07em |

**P1.4 Card com affordance falsa** (`/impeccable polish` + emil-design-eng)
- O `li` inteiro reage ao hover: zoom na foto, sombra e seta. Mas só o link "Saiba mais" (126×52) é clicável; sobre a foto, o cursor é `auto`.
- **Correção:** link esticado (`::after` com `inset: 0`), com anel de foco no card inteiro e o ícone ↗ de "abre em outro site".

**P1.5 Reflow em 320px** (`/impeccable adapt`)
- A placa do selo tem 250px fixos e o logo do rodapé tem 304px de largura somada; a página fica com 328px.
- **Correção:** a placa passa a ter largura fluida (`min(250px, 100vw - 150px)`) e o logo do rodapé encolhe abaixo de 360px.

### P2

**P2.1 Hero** (`/impeccable polish`)
- O CTA é chapado (#034198 sobre #012348 dá 1.66:1) e perde para o selo. Proposta: degradê sutil de cima para baixo, fio de luz interno (`inset 0 1px 0 rgba(255,255,255,.2)`) e sombra mais funda.
- A altura fixa de 716px deixa um vão morto em 1024–1279. Proposta: `min-height` fluida.
- No mobile, o véu de 72–92% transforma a fábrica numa placa azul. Proposta: abrir o véu no meio.

**P2.2 Logos de clientes competem com os títulos** (`/impeccable quieter`)
- Estão no mesmo azul da marca, a 100%. O peso óptico é desigual: CIMED, FRIGELAR e DISPARCON dominam, diRoma e Osmagrio somem.
- Os slogans de 4px do Refricril e do Osmagrio viram ruído.
- O `alt` diz "Osmag", mas o logo diz "Osmagrio".
- **Correção:**
  - tinta ardósia-navy mais calma (prova social silenciosa);
  - escala por logo para equalizar o peso;
  - recortar os slogans ilegíveis;
  - `alt` "Osmagrio".

**P2.3 Mobile 390 longo e serrilhado** (`/impeccable layout`)
- A página tem 4669px. Os cards somam 2167px (46%) e o rodapé 1175px (25%).
- Na barra prateada, os ícones ficam em x = 32 / 51 / 120.
- "PRODUTOS CERTIFICADOS PELA ANVISA" e "FÓRMULAS CONCENTRADAS" viram uma frase só.
- **Correção:**
  - Cards mais compactos no celular: foto de 192px, círculo de 64, título numa linha só.
  - Rodapé: navegação em 2 colunas, "Onde estamos" e "Siga-nos" lado a lado.
  - Barra prateada: coluna de ícones fixa e alinhada à esquerda.
  - Faixa: um fio prata separando os dois selos.

**P2.4 Microinterações genéricas** (emil-design-eng)
- Tudo usa a curva padrão do Tailwind `(.4,0,.2,1)`.
- O submenu fecha seco: `visibility` não transiciona, então não há fade de saída.
- O menu mobile abre sem transição.
- O botão não responde ao toque (falta `:active`).
- Os hovers não são restritos a ponteiro fino.
- No reduced-motion, tudo vai a 0s.

  Plano:

  | Antes | Depois | Por quê |
  | --- | --- | --- |
  | `transition-colors duration-150` (curva padrão) | `color 160ms cubic-bezier(.23,1,.32,1)` | Curva ease-out forte; responde no primeiro quadro |
  | Botão sem `:active` | `transform: scale(.97)` em 160ms | O botão precisa "ouvir" o toque |
  | Submenu `opacity`+`translate` com saída seca | Entrada em 200ms ease-out a partir de `scale(.98) translateY(4px)`, origem no gatilho (topo); saída em 120ms com `visibility` atrasada | Popover ancorado no gatilho; saída mais rápida que a entrada |
  | Menu mobile aparece seco | `@starting-style` com `opacity 0; scale(.97)`, origem no canto superior direito, 200ms | Evita mudança brusca; ancorado no botão |
  | Hover do card com zoom de 1.03 em 500ms e sem link | Link esticado + zoom de 1.04 em 700ms `cubic-bezier(.23,1,.32,1)` + sombra, só com `@media (hover:hover) and (pointer:fine)` | O movimento corresponde a uma ação real; no toque não "gruda" |
  | Hover no menu só troca a cor | Fio de 2px que cresce da esquerda (`scaleX` 0→1, 220ms) | Indicação precisa, só com transform |
  | Ícones sociais apagam no hover (opacidade 1 → .8) | Repouso em .85, hover em 1 + `translateY(-1px)` | O hover acende em vez de apagar |
  | `prefers-reduced-motion`: tudo a 0s | Remove só o movimento (transform, scroll suave); mantém os fades de cor e opacidade | Movimento reduzido, não feedback zero |

**P2.5 Preloads abaixo da dobra** (`/impeccable optimize`)
- 13 preloads gerados pelo React disputam banda com o hero.
- **Correção:** `fetchPriority="low"` nas fotos dos cards e nos logos. O React então não gera preload para elas, e elas continuam carregando sem lazy, o que mantém o print de página inteira.
- Corrigir também `width`/`height` reais (1000×753, hero 1400×792).

**P2.6 Paleta com quase-duplicatas** (`/impeccable polish`)
- 11 azuis.
- **Correção:** consolidar em tokens semânticos:
  - três fundos navy (hero, faixa e rodapé, amostrados do mockup);
  - `brand` para títulos e links;
  - `royal` para ação;
  - `steel` para texto sobre prata;
  - `slate` para o corpo;
  - `line` para fios.

**P2.7 Ícone da Automotiva** (`/impeccable polish`)
- **Correção:** trocar o carro de passeio por um caminhão (cavalo e baú), coerente com "veículos pesados" e com a foto.

### P3

- **Barra prateada:** falta o fio de luz superior e a textura escovada do mockup. Os divisores são pesados (30px a .75). Proposta: fio interno branco, escovado sutil em `repeating-linear-gradient`, divisores de 24px a .35 e `tabular-nums` no telefone.
- **Círculos dos cards:** têm anel branco chapado, enquanto o mockup sugere aro metálico. Proposta: aro branco de 3px, fio prata de 1px e fundo radial que ecoa o selo.
- **Fotos dos cards:** temperaturas de cor diferentes. A foto branca (Institucional) se dissolve no corpo branco do card. Proposta: graduação leve (`saturate(.94) contrast(1.03)`) e fio de 1px na base da foto.
- **Placa do selo:** falta o fio de luz no topo e a sombra de chanfro na base (as camadas de fundo cabem no `clip-path`).
- **Rodapé:**
  - O hover dos links é imperceptível (branco/95 → branco). Proposta: repouso em 78% e sublinhado com transição.
  - A descrição tem entrelinha de 1.32. Proposta: 1.6.
  - Os títulos são versais sem tracking.
- **Sombras dos cards:** a sombra de 2 camadas mais um `ring` cinza parece de framework. Proposta: sombra em 3 camadas mais suaves, com tom navy.

### O que não muda (de propósito)

- **Header:** logo, menu, alturas e pesos ficam idênticos ao mockup. Só ganha microinterações de hover e foco.
- **Foto do hero:** a observação de que a refinaria sugere "petroquímica" procede, mas só existem as imagens de `assets/`.
- **Estrutura:** hero → 4 linhas → faixa ANVISA → clientes → rodapé → barra prateada, nesta ordem. Não entram CTA nem bloco novo de contato.

Questions skipped: sessão não interativa (sem ferramenta de pergunta). O BRIEF-V3 já fixa o escopo (aplicar as melhorias de espaçamento e de aspecto premium dentro das restrições), então todos os P1 e P2 entram nesta rodada e os P3 entram se couberem.

---

# Depois: o que foi aplicado

Fiz 3 rodadas de print, comparando a v3 com a v2 (`prints/v2-desktop.png`) e com o mockup, em 1440 e 390. Também conferi 320, 360, 768, 1024, 1280 e 1920.

- **Header:** em 1440, a diferença pixel a pixel contra a v2 é zero (0 px diferentes). Só ganhou microinterações de hover e foco.
- **Altura:**
  - desktop: 2172 → 2312px (+140px de respiro distribuído);
  - mobile: 4669 → 3962px (−15%).
- **Rolagem horizontal:** nenhuma em 320, 360, 390, 768, 1024, 1280, 1440 e 1920.

## Espaçamento (`/impeccable layout`)

**Gutter único.** `--g: clamp(20px, 3.9vw, 56px)` vale para hero, cards, faixa, clientes, rodapé e barra prateada. O conteúdo fica num container de no máximo 1440px, com os fundos de ponta a ponta.
- Em 1440, as bordas esquerdas passaram de 6 valores (28/40/50/59/60/84) para 2: o logo do header em 40 (preservado) e todas as seções em 56.
- Em 1920, a página não se espalha mais.

**Ritmo na escala de 4pt:**

| Onde | v2 | v3 |
|---|---|---|
| Hero | 66 / 19 / 33 / 43 / 33, altura fixa de 716 | 64 / 20 / 32 / 40 / 48, altura pelo conteúdo (sem vão morto em 1024–1279) |
| Seção dos cards | 40 em cima / 37 embaixo, gap 21 | 56 / 64, gap 24 |
| Dentro do card | foto 259, círculo 82, 12 / 19 / 26 / 40 | foto 256, círculo 80, 16 / 16 / 24 / 40 |
| Clientes | 26 / 22 / 44 | 48 / 32 / 56 |
| Rodapé | altura fixa de 266, texto a 12px da barra | padding 56/48, texto a 48px da barra; o logo alinha com o topo dos títulos das colunas |
| Barra prateada | 84 | 80 |

**Valores fora da grade de 4pt:** caíram de 42 para 28. Os que sobraram são todos deliberados:
- miolo do logo e header, preservados;
- sobreposições ópticas do selo e da placa;
- padding de 10px que dá alvo de 44px aos links do rodapé;
- recuo de 2px dos ícones sociais.

## Tipografia (`/impeccable typeset`)

Papéis definidos, com o header intocado:

| Papel | v2 | v3 |
|---|---|---|
| Lead do hero | 26/37, peso 500 | 26/36, peso 400 (mobile 18/28) |
| Corpo dos cards | 18/27, peso 500, `#2B2A2C` | 17/27, peso 400, ardósia `#3A4150` (10.2:1) |
| Título do card | 27/31 | 26/30, +0.01em; no celular cabe numa linha (22px) |
| Botão | 23px, peso 500 | 20px, peso 600, +0.04em |
| "Saiba mais" | 17px, peso 600 | 15px, peso 600, +0.08em |
| Faixa | `clamp(…, 30.5px)` | `clamp(21px, 1.95vw, 28px)`, +0.03em |
| Título de clientes | 25px | 22px, +0.05em |
| Títulos do rodapé | 21px | 17px, +0.08em |
| Descrição do rodapé | 19/25 | 17/27 |
| Links do rodapé | 17px | 16/24, branco a 80% (8.8:1) |

Também:
- "no Brasil" no selo com +0.08em;
- `tabular-nums` na barra de contato;
- `text-pretty` / `text-balance` nos textos e títulos.

## Cor e superfícies (`/impeccable quieter` + `polish`)

**Paleta.** Os 11 azuis viraram tokens por papel:
- `hero`, `band` e `footer` (fundos amostrados do mockup);
- `royal` (ação; absorveu o `#033E90` dos círculos);
- `brand` (títulos e links; unifica `#062A85` e `#0B2C88`);
- `steel` (texto sobre prata; unifica `#0A1F55` e `#10265E`);
- `slate` (corpo);
- `mark` (logos).

**Clientes:** saíram do azul da marca a 100% e foram para uma ardósia-navy `#2E3E66` (10.5:1). Cada logo tem um ajuste óptico para todos pesarem igual: CIMED ×0.86, DISPARCON ×0.84, FRIGELAR ×0.9, diRoma ×1.1, Osmagrio ×1.12. O `alt` passou a ser "Osmagrio", que é o que o logo diz.

**Cards:**
- A sombra virou 3 camadas tingidas de navy mais um fio de 1px, no lugar da sombra de 2 camadas com `ring` cinza.
- Fotos com graduação leve (`saturate(.94) contrast(1.03)`) e um fio de 1px na base, para a foto branca do Institucional não se dissolver no corpo do card.
- Círculos com fundo radial que ecoa o selo, aro branco de 3px e fio prata de 1px.
- Ícone da Automotiva: o carro de passeio virou caminhão, coerente com "veículos pesados" e com a foto.

**Botão do hero:** degradê vertical, fio de luz interno e sombra mais funda. Ele volta a competir com o selo.

**Metal escovado** na placa do selo e na barra prateada, como no mockup:
- É um ruído fractal SVG esticado na horizontal, desenhado em código como o selo. Não é imagem nova.
- A placa ganhou chanfro na base; a barra, um fio de luz no topo.
- Divisores da barra: de 30px a .75 para 24px a .35.

**Faixa ANVISA:**
- o "•" virou um ponto prata de 6px;
- no celular, um fio prata separa as duas afirmações.

## Microinterações (emil-design-eng)

| Antes | Depois | Por quê |
| --- | --- | --- |
| `transition-colors duration-150`, curva padrão `(.4,0,.2,1)` | `--ease-out: cubic-bezier(.23,1,.32,1)` em todas as transições, 160–220ms | Curva forte: a resposta aparece no primeiro quadro |
| Card reage ao hover, mas só o link é clicável | Link esticado (`a::after { inset: 0 }`): o card inteiro leva à linha, com anel de foco por dentro do card | Fim da affordance falsa; o cursor vira `pointer` sobre a foto |
| Zoom da foto 1.03 em 500ms, sem restrição | Zoom 1.04 em 700ms ease-out, sombra mais funda e seta +4px, só com `(hover:hover) and (pointer:fine)` | No toque nada "gruda" |
| Hover do menu só troca a cor | Fio de 2px que cresce da esquerda (`scaleX`, 220ms), também no foco por teclado | Indicação precisa, só com transform |
| Submenu abre com fade e fecha seco | Entrada de `scale(.98) translateY(4px)` em 200ms, com origem no gatilho; saída em 120ms, com `visibility` atrasada | Popover ancorado; saída mais rápida que a entrada |
| Menu mobile aparece seco | `@starting-style`: `opacity 0`, `scale(.97)`, origem no canto superior direito, 200ms | Abre a partir do botão, sem JS |
| Botões sem `:active` | `scale(.97)` em 160ms no CTA e no botão do menu | O toque tem resposta |
| Ícones sociais apagam no hover (1 → .8) | Repouso em .9; hover em 1 + `translateY(-1px)` | O hover acende em vez de apagar |
| Links do rodapé: branco/95 → branco | Repouso a 80%; hover em branco com sublinhado em fade | Diferença perceptível |
| Reduced motion: todas as transições a 0s | Remove só o movimento (zoom, deslocamentos, `scaleX`, scroll suave); fades de cor e opacidade ficam | Movimento reduzido, sem perder feedback |

## Responsivo, acessibilidade e performance (`/impeccable audit`)

- **320px:** a placa do selo, o selo e o logo do rodapé encolhem abaixo de 360px, então não há mais rolagem horizontal (WCAG 1.4.10).
- **Cards:**
  - 1 coluna abaixo de 640px, 2 colunas entre 640 e 1279, 4 colunas a partir de 1280;
  - em 1024, a descrição foi de 178px de largura (até 6 linhas) para cerca de 400px.
- **Rodapé:**
  - 4 colunas só a partir de 1280px; abaixo disso, grade 2×2;
  - no celular, a navegação fica em 2 colunas, e "Onde estamos" e "Siga-nos" lado a lado (empilhados abaixo de 360px).
- **Barra prateada no celular:** coluna de ícones fixa e alinhada à esquerda, com alvos de 44px (antes 30–32px).
- **Hero no celular:** o véu foi de .90/.72/.92 para .90/.82/.50/.66. A fábrica volta a aparecer, e o texto continua acima de 12:1.
- **Preloads:** o React gerava 15; agora são 2 (ícone e hero). Fotos dos cards e logos levam `fetchPriority="low"`, então o React não as pré-carrega, e elas continuam sem lazy-load (o print de página inteira continua completo). `width`/`height` com as dimensões reais (1000×753; hero 1400×792).
- **Contrastes medidos:**

  | Par | Contraste |
  |---|---|
  | Corpo sobre branco | 10.2:1 |
  | Títulos sobre branco | 12.4:1 |
  | Logos sobre branco | 10.5:1 |
  | Links do rodapé | 8.8:1 |
  | Texto sobre a prata mais escura | 7.4:1 |
  | Lead do hero | 12.9:1 |

**Detector Impeccable depois:** 0 achados no `page.tsx` e na página renderizada em 1440 e 390.
- Numa rodada intermediária ele acusou "repeating-gradient stripes" na primeira versão da textura escovada (listras regulares). Troquei pelo ruído fractal e o aviso sumiu.

## Nota do audit DEPOIS: 18/20 (Excelente)

| # | Dimensão | Antes | Depois | O que mudou |
|---|---|---|---|---|
| 1 | Acessibilidade | 3 | 4 | Reflow em 320, alvos de 44px na barra, foco visível no card inteiro, reduced motion sem perder feedback, contrastes ≥7.4:1 |
| 2 | Performance | 2 | 3 | Preloads de 15 para 2. As fotos continuam com 1000px para slots de ~314px, sem srcset |
| 3 | Theming | 2 | 3 | Tokens por papel; gutter e easing em custom properties. Ainda há hex literais em classes Tailwind |
| 4 | Responsivo | 3 | 4 | 320–1920 sem overflow; container de 1440; layouts intermediários para cards e rodapé |
| 5 | Integridade | 3 | 4 | Detector limpo, affordance coerente, ícone correto, ritmo em escala |
| | **Total** | **13/20** | **18/20** | |

As heurísticas de Nielsen (23/32) não foram repontuadas numa nova crítica com dois agentes. Os problemas por trás das notas mais baixas (consistência: card e margens; mundo real: o ícone) foram corrigidos.

## O que ficou pendente

- **Foto do hero.** É uma refinaria, que sugere "petroquímica" e não "limpeza profissional". Só as imagens de `assets/` são permitidas, então só uma foto nova resolve.
- **Slogans de 4px do Refricril e do Osmagrio.** Não recortei: o "R" circular do Refricril e o arco do Osmagrio atravessam a linha do slogan, e o recorte mutilaria o logo. A solução certa é pedir aos clientes versões simplificadas.
- **Submenu "Produtos"** não fecha com Esc, e o **menu mobile** não fecha ao tocar fora. Corrigir isso exige JavaScript; a página continua só com CSS (SSR-safe).
- **Imagens responsivas.** As fotos dos cards têm 1000px para slots de ~314px (cerca de 1.6× em telas retina). Não há srcset porque só existe um tamanho em `assets/`. Não há lazy-load, para o print de página inteira sair completo; isso foi mitigado com `fetchPriority="low"`.
- **Hex literais em classes Tailwind:** borda do header, hover `#EEF3FA`, anel de foco `#034198`. O Tailwind de build lê as classes literalmente no código, então elas não podem vir interpoladas do objeto `C`. Os valores são os mesmos dos tokens.
- **"Saiba mais"** leva a outro domínio (`materiais.gattiquimica.com.br`) e só avisa isso para leitor de tela; não há pista visual.
- **"DESDE 1964"** sai com 9px no logo do header mobile. Esse tamanho vem da proporção do logo, e o header não foi alterado.
- **WhatsApp comercial** continua só como ícone em "Siga-nos". Um bloco de contato com rótulo seria uma seção nova, fora do escopo de refinamento.
- **Desvios conscientes do mockup:** títulos do rodapé com 17px tracked (o mockup usa 21px), cards com gutter de 56 (o mockup tem 28) e +140px de altura total. É tudo respiro e ritmo; a estrutura e a ordem continuam as mesmas.
- **Documentação de design.** O projeto não tem PRODUCT.md nem DESIGN.md. `/impeccable init` e `/impeccable document` podem registrar este sistema (tokens, escala de 4pt, papéis tipográficos, curvas) para as próximas rodadas.
