# Sabor da Mama: crítica v3 (espaçamento e acabamento premium)

Método: `/impeccable critique` com duas avaliações isoladas em subagentes.
- **A:** revisão de design, com medição no Playwright a 1440 e 390px.
- **B:** detector `impeccable detect` no código e na página renderizada, overlay injetado no navegador e medição mecânica de espaçamento, tipografia e contraste.

Depois, `/impeccable audit` sobre o mesmo estado. Referências: `mockup.png` (escalado para 1440), `prints/v2-desktop.png` e `prints/mobile.png`.

Escopo desta rodada: **refinamento, não redesign**.
- O header fica idêntico.
- Seções na mesma ordem e com a mesma estrutura.
- Mesma paleta.
- Só dados reais e só imagens de `assets/`.

Sessão não interativa: as perguntas do critique foram puladas, porque o escopo já está definido no BRIEF-V3.

---

## Nota ANTES (v2)

### Audit técnico: **14/20** (Bom, mas com dimensões fracas)

| # | Dimensão | Nota | Achado principal |
|---|---|---|---|
| 1 | Acessibilidade | 3 | Contraste AA passa em tudo (o menor é 4,77:1). Problemas: no mobile, endereço e WhatsApp do rodapé têm só 30px de altura de toque; o `prefers-reduced-motion` zera **todas** as transições (inclusive as de cor, que ajudam a perceber o hover). |
| 2 | Performance | 3 | `lazy`, `width`/`height` e `fetchPriority` estão certos. Mas os `width`/`height` declarados não batem com os arquivos novos de `assets/` (1000px, logo 700×200), e as fontes carregam o eixo inteiro 400–800, em romano e itálico. |
| 3 | Tema/tokens | 2 | As cores viraram tokens, mas espaçamento e tipo não têm sistema: **44 valores de espaçamento distintos** (64% fora da grade de 4px), **30 tamanhos de fonte**, 4 raios (7/9/11/14) e ainda 8 hex soltos nas classes. |
| 4 | Responsivo | 3 | Sem rolagem horizontal em 390–1440. No mobile, o CTA do hero invade 16px a foto; na franquia, os paddings se somam (16+20), deixando o texto em x=37 enquanto o resto da página está em x=20. |
| 5 | Integridade | 3 | Detector limpo no código. Os 3 avisos `italic-serif-display` vêm do mockup aprovado e são intencionais. Mas a grade não é compartilhada: 8 bordas esquerdas diferentes. |
| **Total** | | **14/20** | |

> Na v2 o RELATORIO dava 18/20. A diferença é que agora a auditoria cobra também o **sistema de espaçamento e tipo** e o **grid**, que eram justamente o foco desta rodada.

### Heurísticas de Nielsen (avaliação A): **21/32**

As heurísticas 7 e 10 ficaram como n/a, por ser uma landing de persuasão.

| # | Heurística | Nota | Ponto-chave |
|---|---|---|---|
| 1 | Estado do sistema | 3 | Hover e foco existem. Nada avisa que "Seja um Lojista" e "Quero saber mais" abrem o WhatsApp. |
| 2 | Mundo real | 2 | "Food Service", "Churrasco" e "Refogas" levam aos mesmos 5 cards. "Ver receita" abre a home. |
| 3 | Controle | 3 | Há link para pular navegação, âncoras e links externos em nova aba. |
| 4 | Consistência | 2 | 4 estilos de botão, 3 tamanhos de H2, 2 linguagens de borda e 8 bordas esquerdas. |
| 5 | Prevenção de erro | 3 | Quase não há o que errar. |
| 6 | Reconhecimento | 3 | Ícones têm rótulo e o contato está sempre no rodapé. |
| 8 | Estética e minimalismo | 2 | O conteúdo é claro, mas há ~11 corações decorativos e **nenhum respiro** entre seções. |
| 9 | Recuperação de erro | 3 | Não há formulários; telefone, e-mail e endereço servem de alternativa. |

### Veredito de especificidade
A **superfície** é inconfundivelmente Sabor da Mama: fotos reais, terracota/mostarda/oliva sobre creme, ilustrações desenhadas e a voz materna. O **esqueleto** é genérico: hero, 5 cards iguais, faixa de receitas, faixa de depoimento, caixa de CTA e rodapé de uma linha.

O premium aqui vai vir da **disciplina**: ritmo, grid e escala de tipo. Mais ornamento não ajuda.

### O que funciona (manter)
1. **O hero.**
   - Crimson Pro em 96px com o itálico "uma mãe".
   - A foto real sai do creme por máscara, com a borda superior inclinada.
   - Um único CTA.
2. **Paleta contida.** A terracota só aparece em ênfases e na faixa, e todos os pares passam AA.
3. **Cards alinhados.** O `mt-auto` mantém todas as linhas de atributo na mesma altura, mesmo com descrições de 2 a 4 linhas.

---

## Crítica priorizada

### P1: ritmo vertical colapsado no desktop
- **Problema:** em 1440px o respiro das seções é menor que no mobile.

  | Seção | Padding vertical |
  |---|---|
  | Produtos | 28 / 27px |
  | Receitas | 24 / 24px |
  | Depoimentos | 13 / 13px (disco de 205px numa faixa de 231px) |
  | Franquia | 6 / 9px |

  Pontos de colisão:
  - O ornamento de "Nossos produtos" fica **6px** acima dos cards.
  - A caixa da franquia fica **6px** abaixo da faixa vermelha.
  - O botão "Quero saber mais" **invade o rodapé em 6px**.
- **Por que importa:** aperto é o sinal nº 1 de "barato". Além disso, a página termina justamente no ponto mais apertado, que é o momento de conversão B2B.
- **Correção:**
  - Tokens de seção: **72px** em seções creme no desktop, **56px** nas faixas de cor, **56–64px** no mobile.
  - Do bloco de título até o conteúdo: **40–48px**.
  - Franquia com pelo menos 64px livres abaixo do botão que fica sobre a borda.
  - Custo estimado: +300px de altura, aceitável para uma landing.

### P1: espaçamento fora de escala
- **Problema:**
  - São 44 valores distintos no código: 2, 3, 5, 6, 7, 9, 10, 11, 13, 14, 17, 18, 22, 26, 27, 30, 33, 34, 38, 42, 50, 58, 62, 66, 70, 103, 110, 150, 165…
  - Dentro do card: padding 11/18/14, título→texto 5px, filete→atributo 11px.
- **Correção:** escala de 4pt: **4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 72**.
  - Card: 20px de padding, título→texto 8px, texto→filete 16px, filete→atributo 12px.
  - Grade de produtos com gap de 24px.

### P1: sem grid comum (alinhamentos)
- **Problema:** em 1440px os elementos começam em 8 posições diferentes, e a borda direita varia entre 1287 e 1413px.

  | Elemento | Borda esquerda (px) |
  |---|---|
  | Caixa da franquia | 27 |
  | Loja ilustrada | 38 |
  | Cards | 44 |
  | Logo | 58 |
  | Batedor | 62 |
  | Rodapé | 96 |
  | H1 | 103 |
  | Avatar | 165 |

- **Correção:**
  - Um container único de **48 a 1392px** (calha de 48px) para produtos, receitas, depoimentos, caixa da franquia e as duas linhas do rodapé.
  - Uma segunda linha só para o texto do hero, em **104px**.
  - O header não muda.

### P1: escala tipográfica espalhada
- **Problema:**
  - 30 tamanhos no código; só o texto corrido usa 11 tamanhos entre 14 e 19px, em meios pixels.
  - Os H2 têm 54, 60 e 56px.
  - O itálico "Sabor da Mama" (70px) é 25% maior que o próprio título.
  - O contato do rodapé (23px) é maior que qualquer parágrafo.
  - Os botões em caixa alta têm só 0,02–0,03em de tracking: maiúsculas sem ar parecem gritadas.
- **Correção:** papéis fixos.

  | Papel | Tamanho |
  |---|---|
  | Display | 96 |
  | H2 | 56, com o itálico da franquia em 64 (40 no mobile) |
  | Citação | 40 |
  | Título de card | 26 / 22 |
  | Lead | 26 (hero) / 18 |
  | Corpo | 17 |
  | Pequeno | 15 |
  | Meta | 14 |

  - Maiúsculas fora do header: 15–16px com tracking de **0,07em**.
  - H2 com tracking de −0,01em; leading do display de 0,82 para 0,86.

### P2: fotos de produto mal enquadradas
- **Problema:** o zoom de 1,10–1,16 com recorte 252/230 corta a tampa do Sal de Parrilla, a base do Ketchup, a tampa do Molho Árabe e o topo do pacote de Farofa. As fotos originais têm respiro próprio, e o recorte o joga fora.
- **Correção:** recorte quadrado (o mesmo das fotos), zoom 1 e um filete de 1px separando a foto do corpo do card.

### P2: alinhamento misto no card
- **Problema:** título, texto e filete estão centralizados, mas o atributo com ícone ("Defumada com pimenta" etc.) está alinhado à esquerda. Sob um filete centralizado, isso parece erro.
- **Correção:** centralizar a linha do atributo.

### P2: faixa de depoimentos carregada
- **Problema:** o disco de 205px com coração e aspas não traz informação, mas é o maior objeto da faixa. Ainda divide espaço com as aspas da citação, o coração desenhado e dois ramos.
- **Correção:**
  - Disco de 205 para **168px**, só com o coração (as aspas ficam na citação).
  - Ramos mais discretos.
  - Faixa com 56px de padding vertical.

### P2: sistema de CTA e sombras datado
- **Problema:**
  - Quatro tratamentos de botão (altura 58/46/46/40; raio 7/9/round).
  - Sombras coloridas `0 3px 8px -3px rgba(120,80,20,.5)` em todos.
  - Botão da franquia com borda de 2px.
- **Correção:**
  - Raio único de **8px** fora do header.
  - Alturas de **56px** (primário do hero) e **48px** (secundários).
  - Sombra de duas camadas, quase imperceptível: um filete de 1px e um desfoque largo com 12% de opacidade.
  - Borda do botão da franquia em 1px.

### P3: duas linguagens de borda
- **Problema:** os cards usam 1px `#EADCC6`, mas a caixa da franquia usa **1,5px `#56553A`**. É a linha mais escura da página e parece moldura de formulário.
- **Correção:** 1px na mesma família de linha (oliva a ~35%), raio 16 na caixa e 12 nos cards e fotos.

### P3: rodapé alto demais na voz e baixo demais no acabamento
- **Problema:**
  - Contato em 23px.
  - Divisórias verticais de 64/52/52px.
  - A faixa de baixo termina em x=1290, enquanto as redes terminam em 1280.
  - No mobile, "uma mãe" fica sozinho na linha do ©, e endereço e telefone têm só 30px de altura de toque.
- **Correção:**
  - Contato em 20px e divisórias de 48px.
  - As duas linhas no mesmo container.
  - © e slogan separados no mobile.
  - Altura mínima de toque de 44px.

### P3: microinterações (emil-design-eng)
| Antes | Depois | Por quê |
| --- | --- | --- |
| `prefers-reduced-motion` com `transition-duration:0s!important` em tudo | Mantém cor/opacidade e remove só `transform` | Movimento reduzido não é zero: a mudança de cor no hover ainda ajuda |
| Hover do card: `translateY(-3px)` + sombra `0 14px 30px -18px` em 300ms | `translateY(-4px)` + sombra em duas camadas, 280ms `cubic-bezier(.23,1,.32,1)` | Ease-out forte, sombra mais macia e realista |
| Zoom de foto 1,04 em 500ms | 1,035 em 600ms com a mesma curva | Mais lento e menor fica mais caro; é decorativo e raro |
| Seta do "Quero saber mais" parada | Avança 3px no hover (180ms) | Indica direção sem chamar atenção |
| Receitas: só a cor do título muda | Coração do "Ver receita" cresce 12% no hover | Liga o gesto ao símbolo da marca, sem exagero |
| Links do rodapé: `underline` padrão | Sublinhado de 1px com offset de 4px e cor de transição | O sublinhado padrão do navegador é o detalhe que denuncia página montada |
| Botões: `:active scale(.97)` | Mantido, 160ms | Já estava certo |

### Pendências fora do escopo (registradas, não aplicadas)
- **Seta redonda das Receitas:** sugere um carrossel que não existe. Ela é do mockup; mantenho e só a centralizo nas fotos.
- **Links "Ver receita" e redes sociais:** todos levam à home, como manda o brief. Faltam URLs reais.
- **Categorias da nav:** "Food Service", "Churrasco" etc. levam aos mesmos 5 cards, porque não existem páginas de categoria.
- **Consumidor final:** não há CTA para quem quer comprar. Não existe dado real de onde comprar.

### Perguntas a considerar
1. Todos os CTAs depois do hero são B2B (lojista, franqueado). O que faz quem se apaixonou pelo Sal de Parrilla?
2. Sem foto real da Dona Marlene, a faixa precisa de um disco? Ou a própria citação pode ser a imagem?

Perguntas do critique puladas: sessão não interativa; o BRIEF-V3 já fixa a direção (refinar espaçamento e acabamento, sem redesign).

---

## O que foi aplicado

O trabalho foi feito em 3 rodadas de print, comparando com a v2 e o mockup, e checado em 390, 768, 900, 1024, 1279, 1280, 1400 e 1440px. Nenhuma largura tem rolagem horizontal.

O header ficou **idêntico pixel a pixel** à v2. A única diferença está dentro da caixa do logo e vem do `logo.png` novo em `assets/`, não do código.

**Layout e espaçamento** (`/impeccable layout`)
- Criei os tokens `--gutter` (20 / 32 / 48px) e `--sec` (56 / 64 / 72px), e as classes `.wrap` e `.sec`. Do produto ao rodapé, tudo se alinha a um único container de **48 a 1392px** em 1440. O texto do hero fica na segunda linha, em 104px.

  | Seção (1440px) | v2 | v3 |
  |---|---|---|
  | Produtos | 28 / 27 | 72 / 72 |
  | Receitas | 24 / 24 | 72 / 72 |
  | Depoimentos | 13 / 13 | 56 / 56 |
  | Franquia | 6 / 9 | 56 / 80 |

- Título até os cards: de 6 para 48px.
- O botão "Quero saber mais" continua sobre a borda da caixa. Agora fica 26px abaixo dos bullets e 57px acima do rodapé (antes **invadia** o rodapé).
- Dentro do card, tudo foi para a escala de 4pt: padding 20, título→texto 8, texto→filete 16, filete→atributo 12. Gap da grade em 24.
- Fora do header, o espaçamento caiu de 44 valores (64% fora da grade) para **21 valores**. Os 4 que ficaram fora da grade são ajustes ópticos documentados: o −33 do hero sob o header, o 42 que alinha o texto às aspas, o 10 dos ícones sociais e o 6 do glifo de aspas.
- Altura da página: 2234 → **2844px** em 1440. É o preço do respiro, com a mesma estrutura e a mesma ordem do mockup.

**Tipografia** (`/impeccable typeset`)
- Papéis fixos em 1440:

  | Papel | Tamanho |
  |---|---|
  | Display | 96 |
  | H2 | 56, com o itálico da franquia em 64 (era 70) |
  | Citação | 40 |
  | Título de card | 26 / 22 |
  | Lead | 26 / 18 |
  | Corpo | 17 |
  | Pequeno | 15 |
  | Meta | 14 |

- Os três H2 eram 54, 60 e 56px; agora todos têm 56 (38 no mobile).
- Leading do display de 0,82 para 0,85, e tracking dos H2 em −0,01em.
- Maiúsculas fora do header (botões) em 15–16px com **0,07em** de tracking, no lugar de 17–19px com 0,025em.
- Contato do rodapé de 23 para 20px.
- Fontes: só os pesos usados (Crimson Pro 600–700, Nunito Sans 400/500/600).

**Acabamento premium** (`/impeccable polish` e `/impeccable quieter`)
- **Fotos de produto:** recorte quadrado (o mesmo das fotos) e zoom 1. Nenhuma tampa ou pacote é cortado, e um filete de 1px separa a foto do corpo do card.
- **Fotos de receita:** de 2,2:1 para 16:9.
- **Atributo do card** ("Sem sal" etc.) centralizado no mesmo eixo do título. Fica em 1 linha de 768 a 1440px.
- **Botões:** sistema único, com raio de 8, alturas de 48 e 56 e sombra de duas camadas quase imperceptível. A sombra colorida pesada saiu, e a borda do botão da franquia passou de 2 para 1px.
- **Linhas e raios:** a caixa da franquia passou de 1,5px `#56553A` para 1px oliva a 34% e raio 16. Cards e fotos com raio 12. Os raios ficaram em 3 (8/12/16).
- **Faixa de depoimentos:**
  - Disco de 205 para 168px, só com o coração; as aspas ficam na citação.
  - Anel de 3px.
  - Ramos a 80%.
- **Rodapé:**
  - Linha principal distribuída no container.
  - Divisórias de 48px.
  - Faixa inferior alinhada às mesmas bordas.
  - No mobile, © e slogan em linhas separadas.
  - Altura de toque ≥44px em endereço, WhatsApp, e-mail e "Trabalhe Conosco".
- **Carrossel mobile:** cards de 76 para 70vw, para que o próximo card apareça mais (cerca de 80px) e fique claro que dá para rolar.
- **Mobile:** o CTA do hero não invade mais a foto.
- **Dimensões das imagens:** `width`/`height` corrigidos para os arquivos atuais de `assets/` (1000², 1400×792, 1000×753, 700×200).
- **Tokens de cor:** as cores soltas do corpo viraram tokens (`--rule`, `--orn`, `--branch`, `--hero-line`, `--box-line`, `--icon-ring`, `--hairline`, `--on-olive`).

**Microinterações** (emil-design-eng): a tabela "Antes → Depois" da crítica P3 foi aplicada inteira. Conferido no Playwright:
- **Card:** sobe 4px com sombra macia e a foto vai a 1,035, em 280/600ms com `cubic-bezier(.23,1,.32,1)`.
- **Setas:** avançam 3px no hover.
- **Coração do "Ver receita":** cresce 12%.
- **Links do rodapé:** sublinhado de 1px com offset de 5px, que aparece por transição de cor.
- **Botões:** `scale(.97)` no clique.
- **Correção de bug:** a seta das receitas usava `translate` junto com `.btn:active`, então pulava 34px ao ser clicada. Agora é posicionada por margem.
- **Movimento reduzido:** mantém só as transições de cor e tira todo `transform`. Conferido com `reducedMotion: 'reduce'`.
- **Foco por teclado:** contorno de 2px em toda a ordem de tabulação, também conferido.

## Nota DEPOIS (v3)

### Audit técnico: **17/20** (Bom)

| # | Dimensão | Antes | Depois | O que mudou |
|---|---|---|---|---|
| 1 | Acessibilidade | 3 | 4 | Alvos de toque ≥44px no mobile (só o link "pular", que é oculto, fica menor). Movimento reduzido intencional. AA mantido. |
| 2 | Performance | 3 | 3 | Fontes enxutas e dimensões certas. Ainda falta `srcset`: fotos de 1000px aparecem com ~250px. |
| 3 | Tema/tokens | 2 | 3 | Escalas de espaço, tipo e raio documentadas e tokenizadas. O header mantém os hex antigos porque está congelado. |
| 4 | Responsivo | 3 | 4 | 8 larguras testadas, sem estouro, atributos sem quebra e carrossel mostrando o próximo card. |
| 5 | Integridade | 3 | 3 | Grid e sistema de CTA coerentes. A seta "carrossel" das receitas continua (é do mockup). |

**Detector depois:**
- `page.tsx`: 0 achados.
- Página renderizada: só os 3 `italic-serif-display` intencionais do mockup. São os mesmos de antes, com o itálico da franquia agora em 64px.

### Heurísticas depois: **23/32** (eram 21)
- Consistência: 2 → 3 (um grid, um sistema de botão, um tamanho de H2).
- Estética: 2 → 3 (respiro entre seções e ornamento mais contido).

As demais não mudaram, porque dependem de conteúdo e destinos reais.

## O que ficou pendente
1. **Seta redonda das Receitas:** continua sugerindo um carrossel que não existe. Mantida por fidelidade ao mockup.
2. **Destinos dos links:** "Ver receita", redes sociais e categorias da nav levam à home ou aos mesmos cards. Faltam URLs reais de receitas, redes e categorias.
3. **Botões que abrem o WhatsApp** ("Seja um Lojista" e "Quero saber mais") em nova aba sem aviso visual. É recomendação de acessibilidade, não falha AA.
4. **`srcset`/variantes menores das imagens:** pela regra, não gerei arquivos novos.
5. **Header:** congelado por regra. Mantém valores próprios (raio 7, 15,5px, hex soltos) que não seguem o novo sistema; só os atributos `width`/`height` do logo foram corrigidos.
6. **Itálico serifado em display:** é aviso do detector, mantido por estar no mockup aprovado.
7. **CTA para o consumidor final:** fica para quando houver um dado real de onde comprar.
