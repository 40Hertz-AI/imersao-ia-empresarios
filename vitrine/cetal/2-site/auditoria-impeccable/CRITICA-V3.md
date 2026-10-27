# CETAL — Crítica v3 (refinamento premium e espaçamento)

Escopo: a v2 (`page.tsx`) foi aprovada pelo cliente. Esta rodada **refina** a página, sem redesenho. O header continua idêntico ao mockup. A estrutura, a ordem das seções, a paleta e o conteúdo real não mudam.

## Como a crítica foi feita

- **`/impeccable critique` com dois agentes isolados:**
  - **A (revisão de design):** leu `page.tsx`, `mockup.png` e os prints da v2 e mediu os prints com varredura de pixels.
  - **B (detector):** rodou `impeccable detect` no código e na página renderizada no Chrome em 1440, 1024 e 390 px, injetou o overlay `detect.js` e coletou estilos computados com Playwright.
  - A não viu os achados de B antes de terminar.
- **`/impeccable audit`:** feito por mim sobre o código, nas 5 dimensões, usando as evidências de B.
- **Referências usadas:** `layout`, `typeset`, `polish` e `quieter` (pasta `reference/` do plugin) para montar o plano, e a skill **emil-design-eng** para as microinterações.
- **Sem perguntas ao cliente.** Esta sessão não tem ferramenta de pergunta estruturada. As decisões que o Impeccable deixaria para o usuário foram tiradas do BRIEF-V3: refinar sem redesenhar e manter header, estrutura, paleta e dados reais.

## Nota do audit — ANTES: **13/20 (Aceitável)**

| # | Dimensão | Nota | Achado principal |
|---|---|---|---|
| 1 | Acessibilidade | 3 | WCAG AA quase todo atendido: contraste ≥ 6:1, foco visível, link de pular, avisos de nova aba. Falta o título da página: a rota não define `head()` e o `document.title` sai vazio (WCAG 2.4.2, nível A). |
| 2 | Performance | 3 | Imagens leves. Carrega a Figtree 600, que não é usada. Os `width`/`height` das imagens (1600×905, 880×1168) não batem com os arquivos atuais (1400×792, 1000×566, 753×1000), mas a proporção é a mesma, então não há layout shift. |
| 3 | Tokens / tema | 2 | As cores estão em variáveis, mas o resto não segue um sistema: 230 valores `[Npx]` (82 distintos), 24 tamanhos de fonte, 13 entrelinhas e 4 receitas de sombra com 4 tons diferentes. Não há escala de espaço nem de tipo. |
| 4 | Responsivo | 3 | Sem overflow de 320 a 1920 px e alvos de toque ≥ 44 px. Dois problemas: no mobile, a primeira capa de e-book fica colada na borda (x = 0); e os hovers não são restritos a `(hover:hover)`, então a capa fica "levantada" depois de um toque. |
| 5 | Integridade | 2 | O detector renderizado está limpo, mas há deriva causada pelo encaixe pixel a pixel no mockup: padding assimétrico na figura (18/24/28), recuo de 16 px no texto dos cards, filetes de 59/61/62/76 px, 4 bordas esquerdas e 4 bordas direitas, e 3 tamanhos de botão. |

**Detector (agente B):**
- **Scan estático:** 16 achados, todos falsos positivos. Ele não executa o Tailwind CDN, então leu texto navy sobre navy, cards "sem padding" e tudo com 16 px.
- **Scan renderizado:** 0 achados em 1440, 1024 e 390 px. O overlay `detect.js` também deu "No anti-patterns found".
- **Fatos reais que o detector não marca:** a página não tem `<title>`, e no mobile a primeira capa do carrossel fica colada na borda.

**Heurísticas de Nielsen (agente A):** 23/32 (72 %, "Bom"). Os itens 7 e 10 ficaram como n/a por ser landing page. A nota mais baixa foi Consistência (2): 24 tamanhos de fonte, 3 tamanhos de botão, 4 sombras e 4 bordas direitas.

> Observação: a nota da v2 no RELATORIO (17/20) não pesava a falta de sistema de espaçamento e de tipo. Com o foco desta rodada, essa deriva conta, e a nota fica em 13/20.

## Diagnóstico

A página tem cara de laboratório:
- a paleta é contida: navy dá autoridade, o teal aparece só em ação e acento;
- as fotos são reais;
- os títulos em Caslon dão o tom.

O esqueleto, porém, é o de qualquer site de serviços B2B. Como a estrutura está congelada, o "premium" desta rodada só pode vir de **precisão**: uma escala de tipo, uma escala de espaço, um sistema de elevação e bordas compartilhadas.

É justamente aí que a v2 está mais solta. Um laboratório que vende "precisão" não pode ter 24 tamanhos de fonte e 82 medidas avulsas. O pior trecho é o terço final da página:
- as costuras entre seções têm 17 a 24 px;
- o logo do rodapé fica espremido com 12 a 14 px de folga.

Pelo princípio do pico-fim, a última impressão do visitante é de aperto.

## Crítica priorizada

### Espaçamento

**P1 — Terço final esmagado.**
- O problema:
  - entre a figura do laboratório e a faixa dos e-books há **17 px**;
  - as capas têm **24 px** acima e **23 px** abaixo dentro da seção;
  - o logo do rodapé tem **12 e 14 px** de folga.
- Por comparação, o header até o H1 tem 70 px.
- A causa são as alturas fixas `xl:h-[407px]`, `xl:h-[336px]` e `xl:h-[116px]`, que prendem a página às coordenadas do mockup.
- **Correção:** trocar as alturas fixas por padding de seção numa escala só: 80 px nas seções de conteúdo, 48 px na faixa navy e 40 px no rodapé.

**P1 — Cards de análises com 88 px de vazio embaixo.**
- O conteúdo termina em y = 977, mas o card vai até 1065 por causa de `xl:min-h-[298px]`. Fica 32 px acima e 88 px abaixo.
- Isso acontece porque o texto real tem 2 linhas, e o do mockup tinha 4.
- **Correção:** remover a altura mínima e usar padding de 40 px nos quatro lados.

**P1 — Sem escala de espaçamento.**
- São 82 medidas distintas, como `mt-[29px]`, `pt-[31px]`, `pt-[37px]`/`pb-[34px]`, `pl-[39px]`, `pr-[54px]`, `gap-[37px]` e `mt-[4.5px]`.
- O ritmo título → filete → texto → CTA muda de seção para seção:

  | Seção | Título → filete | Filete → texto | Texto → CTA |
  |---|---|---|---|
  | Hero | 16 | 29 | 29 |
  | Metodologias | 22 | 26 | — |
  | E-books | 20 | 22 | 30 |

- **Correção:**
  - escala em passos de 4 px: 4·8·12·16·20·24·32·40·48·64·80;
  - um ritmo único: título → filete 16, filete → texto 24, texto → CTA 32.

**P2 — Bordas desalinhadas.**
- Bordas esquerdas em 48 (logo e cards), 88 (faixa, metodologias, e-books e rodapé), 95 (texto dos cards) e 108 (texto do hero).
- Bordas direitas em 1392, 1352, 1344 e 1338.
- **Correção:** ficar com dois trilhos:
  - **48/1392 para a moldura:** header e cards;
  - **88/1352 para o conteúdo:** o hero sobe 20 px para a esquerda, o padding dos cards passa a 40 px (o conteúdo cai em 88) e a figura e as capas terminam em 1352.

**P2 — Descrições da faixa navy desalinhadas.**
- O título da coluna 4 tem 2 linhas, então a descrição dela começa 20 px acima das outras.
- O padding da faixa é 37 px em cima e 34 px embaixo.
- **Correção:** dar altura mínima comum à linha ícone + título, para as quatro descrições começarem na mesma altura, e usar padding simétrico de 48 px.

**P3 — Medida das linhas.**
- O parágrafo de metodologias tem cerca de 70 caracteres a 19 px. Está no limite, mas aceitável.
- O texto dos cards fica estreito por causa do recuo de 16 px.
- **Correção:** alinhar o texto dos cards ao ícone e limitar os parágrafos a cerca de 60–65 caracteres.

### Premium

**P1 — Escala tipográfica espalhada.**
- São 24 tamanhos, e só o corpo de texto no desktop usa 7 (16,5 / 17 / 17,5 / 18 / 18,5 / 19 / 19,5).
- Papéis vizinhos ficam próximos demais:
  - título do card (25,5) e H2 (28,5): razão 1,12;
  - os dois H2 têm 28 e 28,5 px, com entrelinhas de 44 e 36,4 px.
- **Correção:** papéis fixos, todos a ±1,5 px do mockup, em 14 · 16 · 18 · 20 · 22 · 24 · 30 · 38 · 52.
  - **52:** H1.
  - **30:** H2 e telefone.
  - **24:** título do card.
  - **22:** título da faixa e capas.
  - **20:** subtítulo do card e lead do hero (serifa).
  - **18:** corpo.
  - **16:** descrições da faixa, endereço e legenda.
  - **14:** faixa inferior do rodapé e subtítulo das capas.
- **Acabamento:**
  - tracking de −0,012em no H1 (a Libre Caslon *Text* em 52 px bold fica frouxa);
  - algarismos alinhados no "2002" e no telefone.

**P2 — Hierarquia de cor no texto.**
- Títulos e corpo usam o mesmo navy, `#14264F`, então o corpo compete com os títulos.
- **Correção:** um tom do próprio navy só para o texto corrido, `--body #3A4A6B` (8,85:1 no branco e 7,8:1 no névoa). Os títulos continuam navy.

**P2 — Sem sistema de elevação.**
- São 4 receitas de sombra com 4 tons (`11,42,94`, `0,40,60`, `0,78,88` e `0,20,50`).
- O brilho teal do botão, com alfa .55 a .7, lembra SaaS.
- A borda da figura tem 1,5 px e sai borrada.
- Os raios variam: 2, 4, 8, 10 e 12.
- **Correção:**
  - um tom de sombra (navy) em dois níveis;
  - botão com sombra curta e mais discreta;
  - bordas de 1 px;
  - raios de 12 nos contêineres, 8 nos botões, 4 nas capas e na foto.

**P2 — Três tamanhos de botão.**
- Header: 59 / 20 px. Hero: 62 / 22 px. E-books: 53 / 19 px.
- **Correção:** dois tamanhos:
  - **L:** 59 px de altura com texto de 20 px, no header e no hero;
  - **M:** 52 px com texto de 18 px, nos e-books.

**P2 — Ícones da faixa navy pesados.**
- O traço renderiza em cerca de 3–4 px, contra cerca de 2 px no mockup. As células do calendário saem quase sólidas.
- **Correção:** `vector-effect: non-scaling-stroke`, com 2 px na faixa e 2,25 px nos cards.

**P2 — Corte seco na base da foto do hero.**
- Em y = 823 a foto vai de cinza para branco de uma vez. O corte aparece nas calhas entre os cards e na margem direita.
- **Correção:** cruzar a máscara horizontal com um esmaecimento vertical nos últimos 15 % (`mask-composite: intersect`), para a foto se dissolver atrás dos cards.

**P2 — Rodapé sem acabamento.**
- O logo está espremido numa linha de 116 px.
- O WhatsApp, principal canal de conversão, aparece como letra miúda.
- A metade direita da faixa inferior fica vazia e não há linha de copyright.
- O CEP fica separado do endereço.
- **Correção:**
  - padding de 40 px no rodapé;
  - colunas alinhadas às dos cards;
  - endereço completo, com CEP, num lugar só;
  - WhatsApp em branco e com peso 500;
  - "© {ano} CETAL · Centro Tecnológico de Análise de Alimentos" alinhado à direita (sem dado novo).

**P2 — Capas de e-book.**
- O subtítulo tem 12,5 px, o menor texto da página, e fica sobre imagem movimentada.
- O título da capa 3 quebra em 2 linhas e desalinha o subtítulo em 27 px.
- O "CETAL" fica sobre os detalhes da imagem.
- **Correção:**
  - subtítulo de 14/20;
  - título de 22/28 com altura mínima de 2 linhas;
  - escurecimento mais forte nos 40 % de baixo.

**P3 — Título da página e metadados.**
- **Correção:** `head()` na rota com título e descrição, ambos feitos só com dados reais.

### Mobile (390 px)

**P1 — Primeira capa do carrossel colada na borda (x = 0).**
- `snap-start` sem `scroll-padding` faz o Chrome alinhar a primeira capa à borda da área de rolagem.
- **Correção:** `scroll-px-5`.

**P2 — Logo colado no topo.**
- O lockup ocupa de y = 9 a 92 num header de 104 px.
- **Correção:** header mobile de 112 px e lockup de 204 px.

**P2 — Começo do hero apertado.**
- O H1 começa 20 px abaixo do header.
- **Correção:** 32 px.

**P3 — Sem degrau de tamanho nos cards.**
- O subtítulo serifado e o corpo têm os dois 17 px.
- **Correção:** corpo com 16 px no mobile.

**P3 — Faixa inferior do rodapé com 3 linhas de 44 px empilhadas.**
- **Correção:** o CEP vai para o endereço, e a faixa fica com WhatsApp, horário e copyright.

### Microinterações (emil-design-eng)

| Antes | Depois | Por quê |
| --- | --- | --- |
| `.btn:hover`, `.cover:hover` e `.nav-a:hover` sem media query | hovers dentro de `@media (hover:hover) and (pointer:fine)` | no toque, o hover "gruda": a capa continua levantada depois do tap |
| sublinhado do menu cresce e encolhe pela esquerda | cresce da esquerda e sai pela direita (`transform-origin` muda no hover) | a linha segue a direção do cursor; detalhe invisível que soma |
| zoom da capa em 600 ms; elevação de −4 px | zoom em 500 ms e elevação de −3 px em 280 ms; `:active` em `scale(.985)` | o hover decorativo fica mais discreto, e o toque passa a ter resposta |
| brilho teal de alfa .55–.7 no botão | `inset` de 1 px de luz + sombra curta | profundidade sem halo colorido (modo "quieter") |
| ícone de download parado | o ícone desce 1 px no hover | indica a ação sem animação gratuita |
| `prefers-reduced-motion` desliga **todas** as transições | tira só movimento (transform); mantém as transições de cor e opacidade | menos movimento não significa feedback zero |
| endereço e telefone com `group-hover:underline` seco | sublinhado de 1 px com offset de 5 px, que aparece por transição de cor | sublinhado refinado e mais calmo |
| nenhuma entrada no hero | um único momento autoral: o hero sobe 10 px com fade (600 ms, escalonado em 30–50 ms) e a foto aparece em fade | é visto uma vez por visita; com movimento reduzido, vira só fade |
| sem `-webkit-tap-highlight-color` | transparente, com `:active` próprio | o flash cinza padrão do mobile some |

## O que fica fora (exigiria mudar conteúdo ou o header congelado)

- "Lab Online", botão cheio no header, compete com "Solicitar orçamento". O header está congelado.
- "Metodologias reconhecidas" aparece na faixa (conforme o BRIEF) e logo depois no H2. A checklist repete itens da faixa. Trocar isso exige texto novo do cliente.
- Oito links levam a `cetal.com.br/site/`, porque não há URLs específicas.

## Perguntas que o Impeccable faria (respondidas pelo BRIEF-V3)

1. Aceitar cerca de 250 px a mais de altura para ganhar respiro no terço final? **Sim.** O brief pede "respiro entre seções" e mantém só estrutura e ordem.
2. Encolher os cards ou acrescentar texto? **Encolher.** Não há texto real que preencha 4 linhas.
3. Mudar a cópia repetida? **Não.** Exige dado do cliente. Fica como pendência.

---

# Depois do refinamento

Foram 3 rodadas de print, comparando cada uma com a v2 (`prints/v2-desktop.png`) e com o `mockup.png`:
1. Primeira aplicação.
2. Ajustes de medida do texto, dos ícones e das quebras no mobile.
3. Correções em 768, 1024 e 1280 px, mais o título da faixa navy.

Cada rodada foi conferida em 1440 e 390 px. A última também em 768, 1024 e 1280 px, com medição por Playwright e estados de hover capturados.

## O que foi aplicado

### Layout e espaçamento (`/impeccable layout`)

**Alturas fixas trocadas por padding.** As seções de metodologias, e-books e rodapé tinham altura fixa. Agora o espaço vem do padding, numa escala de 4 px:

| Trecho | Antes | Depois |
|---|---|---|
| Cards → faixa navy | 27 | 64 |
| Faixa navy (cima / baixo) | 37 / 34 | 48 / 48 |
| Metodologias (cima / baixo) | 38 / 0 | 80 / 80 |
| E-books (cima / baixo) | ~24 | 80 / 80 |
| Rodapé (cima / baixo) | 0 | 40 / 40 |

- A figura do laboratório deixou de ficar a 17 px da faixa dos e-books.
- As capas não encostam mais nas bordas da seção.
- O logo do rodapé ganhou folga.

**Dois trilhos de alinhamento.** Medido em 1440 px:
- **Moldura em 48 e 1392:** header e cards.
- **Conteúdo em 88 e 1352:** H1, ícone dos cards, faixa, metodologias, e-books, logo do rodapé e faixa inferior começam em x = 88. A figura, as capas e a faixa terminam em 1352.
- Os trilhos continuam valendo entre 1280 e 1391 px: margem de 24, conteúdo em 64.

**Cards de análises.**
- Sem altura mínima: passaram de 298 para 250 px, com padding de 40 px nos quatro lados.
- O texto agora alinha com o ícone; o recuo de 16 px saiu.

**Faixa navy.** A linha ícone + título tem altura mínima comum, e as 4 descrições começam na mesma altura (y = 1229 nas quatro colunas).

**Ritmo único em todas as seções:** título → filete 16 px, filete → texto 24 px, texto → CTA 32 px.

**Rodapé.**
- As colunas seguem o grid dos cards: logo em 88, endereço em 541, telefone em 993.
- O endereço ficou completo num só lugar: rua, bairro e cidade, e CEP.
- A faixa inferior tem o WhatsApp em destaque (branco, peso 500), o horário e o copyright alinhado à direita.

**Bugs de largura intermediária, herdados da v2:**
- Entre 1180 e 1343 px, o logo, o botão Lab Online e os cards encostavam na borda da janela. Agora têm 24 px de margem.
- Em 768 px, o título "Microbiologia" estourava o card. Agora os cards empilham até 1023 px e viram 3 colunas a partir de 1024.

### Tipografia (`/impeccable typeset`)

- **De 24 para 16 tamanhos de fonte.** Os papéis fixos ficaram em 52 · 30 · 24 · 22 · 20 · 18 · 16 · 14. Os outros tamanhos que sobraram são os do header congelado (17,5 / 20) e os do mobile (34 / 26 / 17).
- **Os dois H2 iguais:** 30/40.
- **Hero:**
  - H1 com 52 px, tracking de −0,012em e quebra igual à do mockup;
  - lead em 20/32 com largura máxima de 430 px, para não invadir a parte opaca da foto.
- **Algarismos alinhados** no "2002" e no telefone.
- **`text-wrap`:** `balance` em títulos e legenda, `pretty` no corpo. O endereço e o copyright não deixam mais palavra sozinha no mobile.
- **Cor do texto corrido:** `--body #3A4A6B` (8,85:1). Os títulos continuam navy.
- **Capas de e-book:**
  - título em 22/28 com 2 linhas reservadas, então os subtítulos alinham;
  - subtítulo em 14/20, antes 12,5;
  - "CETAL" em 14 px com tracking de .1em.
- **Fontes:** a Figtree 600, que não era usada, deixou de ser carregada.

### Polimento e redução de ruído (`/impeccable polish` + `/impeccable quieter`)

- **Elevação.** Um tom de sombra (navy) em dois níveis: `--e1` para cards e figura, `--e2` para as capas. O brilho teal do botão ficou mais curto e discreto, com 1 px de luz interna.
- **Bordas e raios.**
  - Bordas de 1 px em tudo; a figura tinha 1,5 px.
  - Raios de 12 px nos contêineres, 8 nos botões e 4 nas capas e na foto.
  - A figura tem padding uniforme de 16 px (antes 18/24/28), e a foto ganhou um contorno interno sutil.
- **Ícones.**
  - Traço de 2 px na faixa e 2,25 px nos cards, com `vector-effect: non-scaling-stroke`. Antes o traço chegava a 3–4 px.
  - O ícone dos cards passou de 46 para 50 px dentro do disco de 88 px.
- **Botões em dois tamanhos.** L com 59 px de altura e texto de 20 px (header e hero); M com 52 px e texto de 18 px (e-books).
- **Foto do hero.** A máscara horizontal agora cruza com um esmaecimento vertical nos últimos 16 %, e o corte seco atrás dos cards sumiu. No mobile, a foto esmaece em cima e embaixo.
- **Filetes.** 56 px nas seções e 48 px nos cards. Antes havia 59, 61, 62 e 76 px.
- **Mobile.**
  - Header de 112 px com lockup de 204 px.
  - H1 a 32 px do header.
  - Disco dos cards de 56 px, para "composição de alimentos" caber numa linha.
  - Carrossel com `scroll-px-5`: a primeira capa respeita a margem de 20 px.
- **Metadados.** A rota ganhou `head()` com título e descrição. São só dados reais: nome, cidade, ano de fundação e serviços.
- **Imagens.** `width`/`height` corrigidos para as dimensões reais dos arquivos atuais.

### Microinterações (`emil-design-eng`)

Aplicada a tabela da seção "Microinterações" acima:
- hovers restritos a `(hover:hover) and (pointer:fine)`;
- sublinhado do menu que entra pela esquerda e sai pela direita;
- capa sobe 3 px em 280 ms, zoom em 500 ms, e `:active` em `scale(.985)`;
- ícone de download desce 1 px no hover;
- sublinhado de 1 px que aparece por transição de cor no endereço, telefone e WhatsApp;
- `:active` no botão do menu mobile;
- tap highlight do mobile removido;
- uma única entrada autoral no hero: o texto sobe 10 px em 600 ms, com escalonamento de 40 ms, e a foto aparece em fade. A curva é `cubic-bezier(.23,1,.32,1)`.

Com `prefers-reduced-motion`, a entrada vira só fade e todo movimento por transform sai. As transições de cor e sombra continuam.

### Fidelidade

- **Header em 1440 px:** a comparação de pixels com a v2 só acusa diferença na borda superior do botão Lab Online, por causa do novo realce interno de 1 px. Logo, menu, posições e tamanhos estão iguais.
- **Estrutura:** a ordem das seções, a paleta e todo o texto são os mesmos da v2.
- **Altura da página:** 2505 px, contra 2225 na v2. Os +280 px são respiro entre seções e no rodapé.

## Nota do audit — DEPOIS: **18/20 (Excelente)**

| # | Dimensão | Antes | Depois | O que mudou |
|---|---|---|---|---|
| 1 | Acessibilidade | 3 | 4 | Título e descrição via `head()`. Hovers sem efeito "grudado" no toque. Movimento reduzido preserva o feedback de cor. Texto corrido ≥ 7:1, com exceção do copyright (5,8:1). |
| 2 | Performance | 3 | 3 | Peso de fonte não usado removido e dimensões das imagens corrigidas. As imagens abaixo da dobra seguem com carregamento imediato para não sumirem no print de página inteira. |
| 3 | Tokens / tema | 2 | 3 | Tokens de cor, de texto e de elevação, e escalas documentadas no topo do arquivo. Os valores `[Npx]` caíram de 230 (82 distintos) para 153 (48 distintos); os que restam são do header congelado e da geometria do mockup. |
| 4 | Responsivo | 3 | 4 | Margens corrigidas entre 1180 e 1391 px, cards ok em 768 px, carrossel com margem. Sem overflow em 390, 768, 1024, 1280 e 1440 px. |
| 5 | Integridade | 2 | 4 | Dois trilhos, um ritmo, dois tamanhos de botão, um tom de sombra. |

**Detector final:**
- **Renderizado:** 0 achados em 1440, 1024 e 390 px (`impeccable detect --viewport`).
- **Estático:** os mesmos 16 falsos positivos de antes, todos em `index.html`: low-contrast, cramped-padding e flat-type-hierarchy. Ele não executa o Tailwind CDN. `page.tsx` teve 0 achados.

**Heurísticas:** Consistência sobe de 2 para 3. As outras não mudam, porque dependem de conteúdo ou do header congelado.

## Pendências

1. **"Lab Online" compete com "Solicitar orçamento".** Os dois são botões teal cheios, e o do header não pode mudar. Sugestão para uma próxima rodada com o cliente: Lab Online em contorno.
2. **Cópia repetida.** "Metodologias reconhecidas" aparece na faixa e logo depois no H2. A checklist repete dois itens da faixa. Resolver exige texto novo do cliente.
3. **Links genéricos.** Oito links apontam para `https://cetal.com.br/site/` (Legislação, Escopos, Blog, Compliance, Lab Online, capas e "Baixar e-books"), porque faltam as URLs específicas.
4. **Título da página fora do HTML de preview.** O `head()` da rota funciona no TanStack Start, mas o `build.tsx` de preview só renderiza o componente, então o `index.html` gerado continua sem `<title>`.
5. **CTA do hero não indica WhatsApp visualmente.** O aviso existe só para leitor de tela. Dá para acrescentar "pelo WhatsApp" visível, mas isso muda o texto aprovado.
6. **Ano do copyright.** É calculado na renderização (`new Date().getFullYear()`). É seguro no SSR; só pode divergir entre servidor e cliente na virada do ano.
7. **Contexto do Impeccable.** Ainda não existem PRODUCT.md e DESIGN.md (`/impeccable init` e `/impeccable document`). Não foram criados porque a direção está fixada pelo mockup aprovado.
8. **Assets recomprimidos.** Os `.webp` em `assets/` já estavam modificados no working tree antes desta rodada: 1400×792, 1000×566 e 753×1000, com a mesma proporção. Foram usados como estão e entram no commit.
