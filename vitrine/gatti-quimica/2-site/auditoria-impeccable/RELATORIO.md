# Gatti Química — v2 fiel ao mockup

Arquivo único `page.tsx` (React 19 + Tailwind, SSR-safe, sem imports além de `@tanstack/react-router`). Prints finais em `prints/desktop.png` (1440), `prints/mobile.png` (390) e `prints/header.png`.

## Como a fidelidade foi verificada

- O mockup (1360×2048) foi escalado para 1440px e comparado faixa por faixa com o print (header, hero, cards, faixa + clientes, rodapé) em 4 rodadas de print → comparação → ajuste.
- As fontes não foram escolhidas no olho. Medi as caixas de texto do mockup (largura × altura de caixa-alta) e comparei com 14 fontes do Google. A **Barlow** ficou a até ~3% das proporções no menu, nos títulos dos cards, na faixa, no rodapé e no corpo. A **Barlow Semi Condensed** bate com o H1 e com o selo. Para o wordmark "GATTI" usei **Archivo** expandida (wdth 112, peso 900).
- As cores foram amostradas direto do mockup: hero `#012348`, faixa `#012955`, rodapé `#013066`, botão `#034198`, títulos `#062A85`, cinza do "QUÍMICA" `#6E6C6D`, entre outras.
- Resultado em 1440px: altura total de 2172px contra 2168px do mockup. Os topos de cada seção ficam a ±5px do mockup. Menu, logo, H1, botão, selo, cards, faixa, títulos e colunas do rodapé ficam a poucos px das posições medidas.

## (a) O que o Impeccable apontou e o que foi corrigido

Auditoria feita com `/impeccable audit`: detector mecânico sobre o fonte e sobre a página renderizada (1440, 1024 e 390px), mais revisão manual em 5 dimensões.

**Pontuação do audit:** 14/20 antes das correções e 18/20 depois.

| Dimensão | Antes | Depois |
|---|---|---|
| Acessibilidade | 3 | 4 |
| Performance | 3 | 3 |
| Theming | 3 | 3 |
| Responsivo | 1 | 4 |
| Integridade | 4 | 4 |

### Detector (página renderizada)

- **[P2] Entrelinha apertada (1.21×)** na descrição do rodapé. Corrigido: 19px/25px (1.32×).
- **[Aviso] Palavra órfã** ("pesados." sozinha na última linha do card Automotiva). Corrigido com `text-wrap: pretty` nas descrições dos cards.
- **Falsos positivos.** O scan estático do `index.html` acusou contraste de 1.2:1 e hierarquia "plana" (tudo 16px). Isso acontece porque o detector estático não executa o Tailwind CDN. Refiz o scan com a página servida em navegador e esses avisos não aparecem.
- **Estado final:** 0 achados em 1440, 1024 e 390px, e 0 achados no `page.tsx`.

### Revisão manual

**[P1] Responsivo entre 1024 e 1399px**

O menu colidia com o logo, e a faixa de clientes e o rodapé estouravam a largura (scrollWidth de 1387px numa tela de 1024px). Correções:

- O menu completo aparece a partir de 1280px, distribuído de forma fluida (`justify-between`, máximo de 871px, fonte com `clamp`). Abaixo disso entra o hambúrguer.
- Os logos de clientes têm largura proporcional ao viewport.
- As colunas do rodapé usam frações proporcionais às do mockup e paddings fluidos.
- A faixa ANVISA e a barra prateada têm fonte e espaçamentos fluidos.
- Resultado: sem rolagem horizontal em 390, 768, 1024, 1280 e 1440px.

**[P1] Overflow no mobile (página com 405px numa tela de 390px)**

O logo da Frigelar tinha largura fixa. Agora o recorte dos logos é feito em %, com `aspect-ratio` e `max-width: 100%`.

**[P1] Contraste do H1 sobre a foto em 1024px: 3.1:1**

As paradas do degradê estavam em %, então o trecho sólido encolhia nessa largura. Agora cada parada tem um mínimo em px (`max(23%, 330px)` etc.) e o H1 escala com `clamp`. Contraste medido no fundo real atrás do texto, depois da correção:

| Largura | H1 | Texto de apoio |
|---|---|---|
| 1440px | 7.8:1 | 15:1 |
| 1280px | 6.9:1 | 13.7:1 |
| 1024px | 9.2:1 | 14.6:1 |
| 390px | 10.4:1 | 8.9:1 |

**[P1] Anel de foco invisível no rodapé**

O anel azul-marinho ficava sobre fundo azul-marinho. Agora há um anel branco (`focusDark`) no rodapé, no botão do hero e nos ícones sociais. O anel azul continua nas áreas claras.

**[P2] Alvos de toque no mobile**

- Links do rodapé: de 28px para 44px de altura.
- Ícones sociais: de 40px para 44px.
- Hambúrguer e itens do menu mobile já tinham 44px ou mais.

**[P2] Ajustes de semântica e leitor de tela**

- Removi `aria-haspopup` do link "Produtos": o submenu não tem papel de menu, então o atributo prometia um comportamento que não existe.
- Links que abrem em nova aba agora anunciam "(abre em nova aba)": Saiba mais, redes sociais, mapa e endereço.

**[P2] Imagens**

- O hero tem `fetchpriority="high"`.
- As imagens têm `width`/`height`, o que evita deslocamento de layout.
- Tirei `decoding="async"` e `loading="lazy"`: com eles, os cards e os logos saíam em branco no print de página inteira.

**[P3] Superfícies do navegador**

A cor de seleção de texto segue a paleta (`::selection` azul) e o sublinhado dos links tem `text-underline-offset`.

**Já atendido antes do audit**

- Link "Pular para o conteúdo".
- Landmarks (`header`, `nav` ×2 com rótulo, `main`, `footer`).
- Hierarquia de títulos: h1 → h2 → h3.
- `alt` com o nome real em cada logo de cliente.
- `prefers-reduced-motion`: as transições ficam instantâneas, sem perder a mudança de estado.
- Menu mobile com `<details>`, sem JS.

### Pendências conscientes (não corrigidas)

- **[P2] Fotos dos cards maiores que o necessário.** São de 1168px para uma exibição de cerca de 330px. Não gerei versões menores porque o brief limita as imagens às de `assets/`.
- **[P2] Sem lazy-load abaixo da dobra.** Com lazy-load as imagens não carregam no print de página inteira, que é o entregável.
- **[P3] Submenu "Produtos" não fecha com Esc.** O submenu abre por hover/foco e fechar com Esc exigiria JS. Ficou só com CSS por ser SSR-safe.
- **[P3] Cores hex em classes Tailwind arbitrárias.** Algumas ficam fora do objeto de tokens `C` (bordas e hovers). Sem modo escuro, já que o mockup é claro.

## (b) Diferenças que restaram em relação ao mockup

1. **Logo.** O "G" estilizado do mockup não é o logo real. Usei o símbolo original (`gatti-icon.svg`) com o wordmark tipográfico GATTI / QUÍMICA / DESDE 1964 na mesma diagramação. O símbolo fica azul-marinho no header e prata monocromático no rodapé. O degradê metálico do "G" do mockup não foi reproduzido.
2. **Foto do hero.** É outra fábrica, sem o nome na fachada (aceito no brief), com os tanques à esquerda em vez do prédio de esquina. O pôr do sol alaranjado foi esfriado com uma camada de cor na borda direita, para aproximar do tom azul/prata do mockup.
3. **Textos inventados trocados por textos reais:**
   - Subtítulo do hero: "Tradição, tecnologia e confiança…" virou "Produtos e matérias-primas para limpeza e higienização profissional." (trecho da frase oficial).
   - Descrições dos 4 cards: textos oficiais de cada linha. São mais curtos, mas a altura dos cards foi mantida.
   - Texto do rodapé: frase oficial "No segmento desde 1964…".
4. **Clientes.** O mockup mostra nomes digitados. No lugar deles estão os 9 logos reais (incluindo Disparcon), monocromáticos no azul da marca e com altura óptica uniforme.
5. **"Siga-nos".** A Gatti não tem canal de YouTube, então o ícone do YouTube virou WhatsApp comercial. LinkedIn e Instagram apontam para os perfis reais citados no site oficial.
6. **Menu.**
   - "Página Inicial" não aparece no header do mockup, então o logo leva à página inicial.
   - A seta de "Produtos" abre um submenu com as 4 linhas, ligadas às páginas reais de cada linha.
   - Entre 1280 e 1439px os espaços entre itens encolhem; abaixo de 1280px entra o hambúrguer.
7. **Selo "Nº1".** Foi desenhado em SVG (roseta, coroa, louros, placa prateada com recorte diagonal). É uma aproximação vetorial do selo metálico do mockup, sem o brilho fotográfico.
8. **Ícones** (cards, escudo, frasco, mapa, redes, barra de contato). Desenhados em SVG próprio no mesmo estilo; não são cópias idênticas.
9. **Barra prateada do rodapé.** Degradê horizontal no lugar da textura de metal escovado.
10. **Molduras do mockup.** As linhas finas de borda (artefato da geração) não foram reproduzidas.
11. **"Onde estamos" e o endereço da barra prateada** viraram links para o Google Maps com o endereço completo (R. Suzano, 1000 – Vila Monte Belo, Itaquaquecetuba/SP, 08577-520).
