# Sabor da Mama — v2 fiel ao mockup

Página reescrita em `page.tsx` (arquivo único, só importa `@tanstack/react-router`, sem `window` no render, menu mobile com `<details>`).
Fontes Google: **Crimson Pro** (serifada dos títulos, com itálico) e **Nunito Sans** (texto, nav e botões). Paleta tirada do mockup por amostragem de pixels: creme `#FBF1E5`, pêssego `#F6E6D2`, terracota `#94321D`/`#8F2C18`, mostarda `#DC9A3A`, oliva `#4C4F2D`.

Processo: o mockup foi escalado para 1440px e comparado lado a lado com o print, seção por seção, e as posições foram medidas com Playwright. Foram 4 rodadas de print → comparação → ajuste em 1440px, mais verificação em 390, 768, 1024 e 1280px.
Na versão final, em 1440px, o hero ocupa y=172–712 (mockup: 172–713) e o título "Nossos produtos" está centrado em y=768 (mockup: 767). O header, a navegação e o botão "Seja um Lojista" estão na mesma posição do mockup.

---

## (a) O que o Impeccable apontou e o que foi corrigido

Auditoria feita com `/impeccable audit`: o detector automático (`impeccable detect`) rodou no código-fonte e na página renderizada em 1440, 1024 e 390px. Depois veio a revisão manual de acessibilidade, performance, tokens, responsivo e integridade.

| # | Apontamento | Severidade | Situação |
|---|---|---|---|
| 1 | **Contraste baixo**: mostarda `#EDB24E` sobre a faixa terracota `#8F2C18` dava 4,36:1, abaixo de 4,5:1 (nomes das depoentes) | P1 (WCAG AA) | **Corrigido**: troquei para `#F2BC5A`, que dá 4,77:1 |
| 2 | **Brilho colorido** (`dark-glow`): sombra avermelhada no avatar sobre fundo escuro | P2 | **Corrigido**: sombra removida (o mockup também não tem) |
| 3 | **Palavras órfãs** (`straggler`): "preparar!", "sabor!", "árabes!" e "temperos!" sozinhas na última linha | P3 | **Corrigido**: `text-wrap: pretty` em parágrafos e listas, `text-wrap: balance` nos títulos e na citação |
| 4 | **Padding apertado** (`cramped-padding`) na faixa inferior do rodapé no mobile | P2 | **Corrigido**: espaçamento vertical nas linhas da faixa |
| 5 | **Serifada itálica em display** (`italic-serif-display`) no h1 ("uma mãe"), em "da Mama" e em "Sabor da Mama" | aviso | **Mantido de propósito**: está no mockup aprovado, e a fidelidade vem antes |
| 6 | Faltava link para pular a navegação | P2 (a11y) | **Corrigido**: "Pular para o conteúdo" aparece no primeiro Tab |
| 7 | Foco do teclado | P2 (a11y) | **Corrigido**: contorno terracota em fundo claro e mostarda em fundo escuro. Ordem de tabulação testada no Playwright |
| 8 | Áreas de toque pequenas (links de e-mail e "Trabalhe Conosco" no rodapé) | P2 | **Corrigido**: altura mínima maior. Ícones sociais e itens do menu mobile têm ≥44px |
| 9 | Rótulo do botão do menu mobile ("Abrir menu" mesmo com o menu aberto) | P3 | **Corrigido**: virou "Menu"; o `<details>` já anuncia aberto/fechado |
| 10 | Cores hex soltas pelas classes (sete tons quase iguais de tinta escura) | P2 (tema) | **Corrigido**: viraram tokens CSS (`--nav`, `--ink-dk`, `--olive-btn`, `--sand`, `--on-band` …). Ficaram fixas só as cores internas das ilustrações SVG |
| 11 | Responsivo: em 1280px a nav quebrava "FOOD SERVICE" em duas linhas, o título da franquia vazava para o rodapé e a citação quebrava; em 768px o subtítulo do hero passava por cima da foto | P1 | **Corrigido**: nav compacta entre 1280 e 1399px; grade da franquia em 3 colunas abaixo de 1400px e em 2 linhas no tablet; produtos em 3+2 centralizados no tablet. Testado em 390/768/1024/1280/1440, sem rolagem horizontal |
| 12 | Estados de interação (polimento com emil-design-eng) | P3 | **Adicionado**: sublinhado mostarda que cresce na nav; botões escurecem no hover e encolhem para 0,97 no clique; cards sobem e a foto dá um zoom leve, só com mouse; `prefers-reduced-motion` desliga as transições |
| 13 | Performance básica | — | Hero com `fetchPriority="high"`, demais imagens com `loading="lazy"`, todas com `width`/`height` (sem salto de layout); fontes com `preconnect` e `display=swap`; animações só de `transform` e `box-shadow` |

**Pendências que não corrigi (e por quê):**
- As fotos de produto têm 1600×1600 (90–295 KB cada) e aparecem com ~250px; o `logo.png` pesa 650 KB. Pela regra, só posso usar os arquivos de `assets/`, então não gerei versões menores. Recomendo criar variantes redimensionadas (`srcset`) no pipeline de deploy.
- O preview usa Tailwind pela CDN porque é o que o `build.tsx` faz. Em produção as classes são compiladas pelo Tailwind v4 do projeto.

Nota final do detector: só restou o aviso nº 5, que é intencional.
Saúde estimada da auditoria: acessibilidade 4, performance 3, tema 3, responsivo 4, integridade 4 = **18/20**.

---

## (b) Diferenças que restaram em relação ao mockup e por quê

1. **Logo**: o logo empilhado do mockup (com panela) foi trocado pelo `logo.png` original, horizontal, verde e vermelho, sem fundo nem caixa, no header e no rodapé, como pede o brief. Por ser horizontal, ocupa menos altura que o do mockup. Mantive embaixo dele o ornamento do mockup: filete, coração, "TEMPEROS • MOLHOS • FAROFAS" e "POÁ/SP".
2. **Foto do hero**: no lugar dos potes inventados do mockup, usei o `hero.webp` real com os 5 produtos (Farofa, Sal de Parrilla, Alho Triturado, Ketchup e Molho Árabe). Composição, degradê para o creme à esquerda e borda superior levemente inclinada seguem o mockup.
3. **Cards de produto**
   - As fotos são as reais, com embalagens diferentes das desenhadas no mockup.
   - "Tempero Árabe" virou **"Molho Árabe"**.
   - As descrições são os **textos reais** do brief. São mais longos que os do mockup (3–4 linhas em vez de 2), então os cards ficaram ~13px mais altos.
   - A linha com ícone ("Ideal para churrasco", "Aroma e sabor únicos"…) era inventada. Troquei pelo atributo **impresso na embalagem real** que aparece nas fotos: "Defumada com pimenta", "Sem sal", "Tradicional", "Com pimenta", "Com alho". Os ícones do mockup foram mantidos (carne, alho, tomate, folha, tigela).
   - O filete curto acima dessa linha aparece em todos os cards; no mockup aparece só em 2, por inconsistência do próprio mockup.
4. **Receitas da Mama**: o mockup tem 3 receitas (Picanha, Arroz com alho e legumes, Farofa), mas só existem 2 fotos. Ficaram **2 cards** um pouco mais largos, com legendas genéricas ("Churrasco com Sal de Parrilla" e "Farofa da Mama"), sem inventar receita. O botão "Ver receitas", os links "Ver receita" e a seta redonda levam para https://sabordamama.com.br/.
5. **Depoimentos**
   - A foto da senhora foi trocada por uma **ilustração neutra** (coração com aspas), porque não há foto real.
   - O texto inventado virou o depoimento real de **Dona Marlene**. O destaque "Virei fã e não troco por nada!" é uma frase dela; o resto do depoimento vem embaixo, com "comprou Sal de Parrilla".
   - O coração desenhado à mão do mockup continua no mesmo lugar, um pouco maior, e agora **emoldura o segundo depoimento real**, de **Dona Lourdes** ("Comprei e adorei! A tapioca é muito boa!"). O dado "comprou Tapioca" fica disponível para leitores de tela.
6. **Franquia**
   - O subtítulo inventado ("Leve sabor, tradição e sucesso…") virou o texto real da franquia, em 2 linhas em vez de 1.
   - Os 4 bullets inventados viraram fatos reais: "Mais de 16 anos no mercado", "Ingredientes de qualidade", "Lojas em todo o Brasil" e "Linha completa de temperos, molhos e derivados", com ícones correspondentes (medalha, folha, alfinete de mapa, pote).
   - A loja ilustrada e o ramo com corações foram redesenhados em SVG próprio.
7. **Rodapé**
   - Acrescentei o **LinkedIn**, uma rede real que o mockup não mostra.
   - Acrescentei uma faixa fina com **e-mail** (contato@sabordamama.com.br), "Trabalhe Conosco" e ©. São dados reais que não cabiam na linha do mockup, e por isso a página tem +46px.
   - As redes apontam para https://sabordamama.com.br/, como pede o brief.
   - O endereço abre o Google Maps e o telefone abre o WhatsApp.
8. **Altura total**: 2234px contra 2168px do mockup escalado para 1440px. A diferença vem da faixa extra do rodapé e dos textos reais mais longos nos cards.
9. **Tipografia**: o mockup é uma imagem, então as fontes exatas são desconhecidas. Crimson Pro e Nunito Sans foram as mais próximas no Google Fonts, calibradas pela largura das palavras no mockup. Sobram pequenas diferenças de desenho das letras.
10. **Textura**: a faixa terracota do mockup tem um leve granulado de papel. Usei cor chapada com ramos desenhados nas bordas, para não depender de imagem extra.
11. **Itens de menu**: "Derivados", "Diversos" e "Trabalhe Conosco" não entram no header desktop, para manter o header idêntico ao mockup. Estão no menu mobile, e "Trabalhe Conosco" também no rodapé.
12. **Destinos dos links**: as categorias da nav (Temperos, Molhos, Churrasco…) rolam até "Nossos produtos", porque a landing não tem páginas de categoria. "Seja um Lojista" e "Quero saber mais" abrem o WhatsApp com mensagem pronta.
13. **Entre 1024 e 1279px** a nav completa do mockup não cabe, então essa faixa usa o menu hambúrguer. Em 1280px ou mais o header é o do mockup.
