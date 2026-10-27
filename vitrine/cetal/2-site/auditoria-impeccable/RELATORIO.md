# CETAL — v2 fiel ao mockup · Relatório

Página reescrita em `page.tsx` (arquivo único, só importa `@tanstack/react-router`, SSR-safe, menu mobile em `<details>` sem JS).
Comparação feita com o `mockup.png` reescalado para 1440 px, em 5 rodadas de print → medição → ajuste. As medições usaram varredura de pixels, não só inspeção visual.

Resultado das medições no desktop (1440 px), com as mesmas coordenadas do mockup:

| Bloco | Mockup | v2 |
|---|---|---|
| Header | 0–162 | 0–162 |
| Foto do hero | 162–823 | 162–823 |
| Cards de análises | 767–1065 | 767–1065 |
| Faixa navy | 1092–1309 | 1092–1309 |
| Metodologias | 1309–1716 | 1309–1716 |
| E-books | 1716–2052 | 1716–2052 |
| Rodapé (linha principal) | 2052–2168 | 2052–2168 (+ faixa extra, ver item b.7) |

---

## (a) O que o Impeccable apontou e o que foi corrigido

Fluxo usado: `/impeccable audit`, com o detector mecânico (`impeccable detect`) e a verificação manual nas 5 dimensões: acessibilidade, performance, tokens, responsivo e integridade. O hook de design do Impeccable também rodou a cada edição do `page.tsx`, sem achados.

### Detector mecânico
- **Scan estático (`page.tsx` + `index.html`): 14 alertas, todos falsos positivos.** O scanner estático não executa o Tailwind CDN. Por isso ele leu `h1 = 16px` (hierarquia "plana"), texto `#14264F` sobre a faixa navy (contraste 1,1:1) e cards "sem padding". O scan renderizado confirmou que nenhum desses problemas existe.
- **Scan renderizado no Chrome (1440, 1024 e 390 px): 1 aviso.** Em 390 px, a palavra "oficiais" ficava sozinha na última linha da legenda da foto do laboratório. **Corrigido** com `text-wrap: balance` nas legendas.
- **Re-scan final: 0 achados nas três larguras.**

### Verificação manual
Score estimado: **13/20 antes → 17/20 depois.**

| Dimensão | Antes | Depois | Observação |
|---|---|---|---|
| Acessibilidade | 2 | 3 | Restam apenas os descritores pequenos do logo, que são decorativos |
| Performance | 3 | 3 | O Tailwind via CDN vem do `build.tsx`, não da página |
| Tokens / tema | 2 | 3 | A página é só clara por definição do mockup |
| Responsivo | 3 | 4 | |
| Integridade | 3 | 4 | |

**P1 — corrigidos**
1. **Hierarquia de títulos.**
   - Problema: os nomes dos serviços e os itens da faixa eram `h2` soltos, sem título de seção, e "Desde 2002" era um `<p>`.
   - Correção: criei `h2` acessíveis (somente para leitor de tela) "Análises laboratoriais" e "Qualidade CETAL". Os itens passaram a `h3`, incluindo "Desde 2002".
2. **Alvo de toque pequeno.**
   - Problema: o link do WhatsApp no rodapé tinha 22 px de altura.
   - Correção: agora tem 44 px no mobile e 28 px no desktop (WCAG 2.5.8).
3. **Logo colado na borda no mobile.**
   - Problema: o logo ficava a 4 px do topo.
   - Correção: header mobile com 104 px e logo com 214 px.
4. **Descritor do logo sobre o ícone.**
   - Problema: o texto "Centro Tecnológico de Análise de Alimentos" invadia o ícone do logo original, que ocupa 0–28% da largura do SVG.
   - Correção: o descritor fica centralizado só sob o nome "CETAL" (33,6–100% da largura).

**P2 — corrigidos**
5. **Links que abrem nova aba sem aviso** (Lab Online, e-books, WhatsApp, páginas do site): agora têm o texto "(abre em nova aba)" para leitor de tela. O botão "Solicitar orçamento" anuncia "pelo WhatsApp".
6. **Área de clique do menu desktop:** passou de 22 px para 38 px de altura, sem mexer no layout (padding com margem negativa). O sublinhado animado foi reposicionado.
7. **Endereço não acionável:** virou link para o Google Maps.
8. **Cores fixas fora do sistema:** `#121C3A` e `#071a3a` foram substituídas pelos tokens `--ink` e `--cover`. Também declarei `color-scheme: light`. Paleta final em variáveis CSS: navy `#0B2A5E`, faixa `#002C62`, teal `#00626E` / `#004E58`, névoa `#ECF2F5`, linhas `#D8DFE7`.
9. **Botão do menu mobile:** o rótulo era "Abrir menu" mesmo com o menu aberto. Agora é "Menu", e o estado aberto/fechado já é exposto pelo `<details>`.
10. **Imagens abaixo da dobra não apareciam nos prints:** com `loading="lazy"` ou `decoding="async"`, elas saíam em branco no print de página inteira. Passaram a carregar normalmente (peso total das imagens ≈ 300 KB). O hero usa `fetchpriority="high"`.

**Polimento** (princípios de detalhe e interação; skill `emil-design-eng` não foi invocada)
- **Botões:** hover escurece o teal e aprofunda a sombra; `:active` reduz para `scale(.97)`; curva ease-out própria (`cubic-bezier(.22,1,.36,1)`).
- **Menu:** sublinhado que cresce da esquerda.
- **Capas de e-book:** sobem 4 px e a imagem dá um zoom lento.
- **Menu mobile:** entra com fade/slide de 220 ms.
- **Elementos não clicáveis** (cards de serviço) não têm hover.
- **Movimento reduzido:** tudo isso é desligado com `prefers-reduced-motion`.
- **Superfícies do navegador:**
  - seleção de texto em teal;
  - anel de foco teal (branco nos fundos navy);
  - scrollbar temática no carrossel de e-books do mobile;
  - link "Pular para o conteúdo";
  - `scroll-margin` nas âncoras.

### Verificações que passaram
- **Contraste:**
  - navy sobre a área esmaecida da foto: 8,1:1;
  - branco a 85% na faixa navy: 10,2:1;
  - texto branco sobre o teal dos botões: 7,1:1;
  - teal sobre o fundo dos e-books: 6,25:1;
  - títulos sobre as capas: ≥ 6,25:1.
- **Overflow horizontal:** nenhum, de 320 a 1920 px.
- **Menu hambúrguer:** testado aberto em 390 px.

O Impeccable sugere criar PRODUCT.md e DESIGN.md (`/impeccable init`). Não criei, porque a direção visual já estava fixada pelo mockup aprovado e a sessão não era interativa.

---

## (b) Diferenças que restaram em relação ao mockup e por quê

1. **Logo.** Usei o logo original vetorizado (`cetal-logo.svg`: ícone em degradê azul→verde e nome em bloco), conforme o brief, no lugar do microscópio com "CETAL" serifado do mockup.
   - O descritor "Centro Tecnológico de Análise de Alimentos" foi recomposto em HTML sob o nome para manter a silhueta do mockup.
   - Pelas proporções do logo real, o conjunto tem 300 px de largura (350 px no mockup).
   - No rodapé, o logo branco inclui o ícone; no mockup, ali era só texto.
2. **Tipografia.** O mockup é uma imagem; escolhi as fontes do Google Fonts que mais se aproximam, medindo as larguras:
   - **Libre Caslon Text** nos títulos, no menu e no telefone. A linha 1 do título tem 569 px, igual ao mockup.
   - **Figtree** no texto corrido.
   - Diferenças pequenas permanecem no desenho das letras. A Caslon só tem pesos 400 e 700: o menu do mockup parece um pouco mais encorpado, e os títulos dos cards ficam levemente mais baixos na mesma largura.
3. **Menu desktop.** Mantive exatamente os 6 itens do mockup (Quem Somos, Análises, Qualidade, Legislação, Escopos, Blog) e o botão Lab Online, para o header ficar idêntico.
   - Home, Compliance e Contato, que estão no menu real, aparecem no menu hambúrguer. Contato também é o rodapé (`#contato`).
   - Legislação, Escopos, Blog, Compliance, Lab Online e E-books apontam para `https://cetal.com.br/site/`, porque não foram informadas URLs específicas dessas páginas.
4. **Conteúdo inventado trocado por dados reais**, mantendo os elementos visuais:
   - **Hero:** o parágrafo usa o texto real ("Desde 2002, análises laboratoriais em microbiologia, microscopia e físico-químico…").
   - **Cards:** usam as descrições reais, que são mais curtas. Mantive a altura de 298 px do mockup, então sobra mais respiro embaixo do texto.
   - **Faixa navy:**
     - "Rigor e Confiabilidade" virou "Metodologias reconhecidas", com ícone de documento verificado no lugar da roseta, para não sugerir selo ou certificação;
     - as descrições foram reescritas a partir do texto real, sem o "Mais de 20 anos".
   - **Metodologias:**
     - removi "Métodos oficiais: AOAC, MAPA, ANVISA e ISO" e "Rastreabilidade…";
     - entraram "Instrumentos analíticos modernos", "Controle de qualidade exigido pelo mercado internacional" e "Corpo técnico altamente qualificado";
     - o parágrafo é o "Fundado em 2002…".
   - **E-books:**
     - o texto é o real;
     - saiu o "gratuitos", que não foi confirmado;
     - as capas ganharam rótulos genéricos ("E-book CETAL", "Acreditações", "Análises laboratoriais") no lugar de "Guia Prático da ISO/IEC 17025" e outros.
5. **Fotos.**
   - `hero.webp` é outra foto: sem logo CETAL na parede ou no jaleco, e com óculos em vez de máscara. Repliquei posição, enquadramento e o esmaecimento para branco à esquerda.
   - A foto do laboratório não tem a placa CETAL do mockup.
6. **Terceira capa de e-book.** Só existem duas artes (`ebook-1` e `ebook-2`). A terceira usa um recorte ampliado e clareado da primeira para não repetir a mesma imagem.
7. **Rodapé.** A linha principal (logo | endereço | telefone) segue o mockup. Abaixo dela acrescentei uma faixa fina com WhatsApp, horário (Segunda a Sexta das 8h às 17h48) e CEP: são dados reais que o mockup não tinha onde mostrar.
   - Por isso a página tem 2225 px de altura no desktop, contra 2168 px no mockup. A diferença inteira é essa faixa.
8. **Larguras intermediárias e mobile.** O mockup só tem a versão de 1440 px.
   - O layout desktop vale a partir de 1280 px; o menu completo, a partir de 1180 px.
   - Abaixo disso, o conteúdo empilha e a foto do hero vai para baixo do CTA, esmaecendo a partir do topo.
   - No mobile, os e-books viram um carrossel horizontal nativo (scroll-snap).
