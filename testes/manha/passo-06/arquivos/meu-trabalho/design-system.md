# Design system · Torra Viva

> O "manual visual" da Torra Viva: as cores, fontes e estilos que se repetem em todas as páginas.
> Feito a partir de `passos/06-design-system/referencia-design.png`, usado só como inspiração de estilo.
> Torra Viva é uma empresa fictícia, criada para a aula.

## Estilo visual em 3 palavras

**Quente · Artesanal · Direto**

Fundo creme como papel de saco de café, cores de grão, cereja e folha, títulos grandes e grossos, formas arredondadas. Nada de brilho, sombra pesada ou cara de "gourmet".

---

## 1. Cores

| Nome | Hex | Para que serve |
|---|---|---|
| **Grão** | `#2B1D14` | Títulos e texto principal. A cor "preta" da marca (um marrom bem escuro). |
| **Cereja** | `#C23B22` | Ação: botão principal, preços, links importantes. Usar pouco, para chamar atenção. |
| **Folha** | `#234B3F` | Cor de apoio forte: botão secundário (contorno), faixas e rodapé com fundo escuro, ícones. |
| **Bourbon** | `#E8B547` | Destaque: selos e etiquetas ("torra desta semana"). **Só como fundo**, nunca como cor de texto em fundo claro. |
| **Leite** | `#F6F1EA` | Fundo geral das páginas. Também é o texto sobre fundo Folha ou Cereja. |
| **Apoio** | `#6B5E55` | Texto secundário: descrições, notas sensoriais, legendas, datas. |
| **Branco** | `#FFFFFF` | Fundo dos cartões, para se destacarem do fundo Leite. |
| **Borda** | `#E6DDD2` | Linhas finas de cartões, divisórias e campos de formulário. |

### Contraste (texto x fundo)

Conferido pela regra WCAG (o padrão internacional de acessibilidade). O mínimo é **4,5:1** para texto normal e **3:1** para texto grande (a partir de 24 px, ou 19 px em negrito).

| Texto | Fundo | Contraste | Resultado |
|---|---|---|---|
| Grão | Leite | 14,5:1 | ✅ ótimo |
| Grão | Branco | 16,3:1 | ✅ ótimo |
| Grão | Bourbon (selo) | 8,6:1 | ✅ ótimo |
| Folha | Leite | 8,7:1 | ✅ ótimo |
| Leite | Folha | 8,7:1 | ✅ ótimo |
| Apoio | Leite | 5,6:1 | ✅ passa |
| Apoio | Branco | 6,3:1 | ✅ passa |
| Folha | Bourbon | 5,2:1 | ✅ passa |
| Branco | Cereja (botão) | 5,3:1 | ✅ passa |
| Leite | Cereja (botão) | 4,7:1 | ✅ passa (no limite; prefira texto Branco) |
| Cereja | Leite / Branco (preço) | 4,7:1 / 5,3:1 | ✅ passa |
| **Bourbon** | **Leite** | **1,7:1** | ❌ **não usar**: Bourbon como texto some no fundo claro |
| **Apoio** | **Folha** | **1,6:1** | ❌ **não usar**: no fundo Folha, o texto é sempre Leite |

---

## 2. Fontes (Google Fonts)

| Uso | Fonte | Peso |
|---|---|---|
| Títulos, preços, botões, selos | **Bricolage Grotesque** | 800 (extra negrito) nos títulos; 700 em botões e selos |
| Texto corrido, menus, descrições | **Albert Sans** | 400 (regular) e 600 (seminegrito) |

Link para colocar no `<head>` das páginas:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;600&family=Bricolage+Grotesque:wght@700;800&display=swap" rel="stylesheet">
```

### Tamanhos

| Nome | Tamanho | Fonte e peso | Onde |
|---|---|---|---|
| Título grande (H1) | 56 px (no celular, 36 px) | Bricolage 800, entrelinha 1,05, letras um pouco mais juntas (-0,02em) | Chamada principal da página |
| Título de seção (H2) | 36 px (no celular, 28 px) | Bricolage 800, entrelinha 1,1 | Início de cada bloco |
| Título de cartão (H3) | 22 px | Bricolage 700 | Nome do café, nome do plano |
| Texto grande | 19 px | Albert Sans 400, entrelinha 1,6 | Parágrafo de abertura |
| Texto normal | 16 px | Albert Sans 400, entrelinha 1,6 | Todo o resto |
| Texto pequeno | 14 px | Albert Sans 400, cor Apoio | Notas sensoriais, legendas, avisos |
| Preço | 20 px | Bricolage 700, cor Cereja | Valor nos cartões |
| Botão e selo | 15 px / 13 px | Bricolage 700 | Texto de botões / selos |

---

## 3. Espaçamentos e cantos

**Espaçamento:** tudo em múltiplos de 8 px.

| Nome | Valor | Uso típico |
|---|---|---|
| xs | 4 px | Entre ícone e texto |
| sm | 8 px | Entre título e descrição dentro do cartão |
| md | 16 px | Dentro de selos e entre itens de lista |
| lg | 24 px | Dentro dos cartões, entre cartões |
| xl | 40 px | Entre blocos de conteúdo |
| xxl | 72 px | Entre seções grandes da página |

Largura máxima do conteúdo: **1200 px**, centralizado, com 24 px de margem lateral no celular.

**Cantos arredondados:**

| Nome | Valor | Uso |
|---|---|---|
| Pequeno | 8 px | Campos de formulário, miniaturas |
| Médio | 14 px | Cartões e quadrados de cor do produto |
| Grande | 24 px | Blocos e painéis grandes |
| Pílula | 999 px | Botões e selos (bem redondos nas pontas) |

---

## 4. Componentes

### Botões
Formato de pílula (cantos 999 px), altura 52 px, 32 px de espaço nas laterais, texto Bricolage 700, 15 px.

| Tipo | Visual | Quando usar |
|---|---|---|
| **Principal** | Fundo Cereja, texto Branco | A ação mais importante da tela (ex.: "Assine o clube"). Só **um** por bloco. |
| **Secundário** | Fundo transparente, contorno de 2 px Folha, texto Folha | A segunda opção (ex.: "Café no escritório"). |
| **Sobre fundo escuro** | Fundo Leite, texto Folha | Botão dentro de faixa Folha. |

Ao passar o mouse: o principal escurece um pouco (`#A8321C`); o secundário ganha fundo Folha e texto Leite. Sem sombra.

### Cartões
- Fundo Branco, borda de 1,5 px na cor Borda, cantos de 14 px, 24 px de espaço interno.
- Sem sombra: a separação vem da borda e do contraste Branco x Leite.
- Estrutura do cartão de café: quadrado de cor (72 px, cantos 14 px, em Cereja, Bourbon ou Folha) à esquerda; à direita o nome (H3, Grão), as notas sensoriais (texto pequeno, Apoio, separadas por " · ") e o preço (Cereja).
- Ao passar o mouse: a borda vira Grão.

### Selos (etiquetas)
- Formato pílula, fundo Bourbon, texto Grão, Bricolage 700, 13 px, 6 px em cima e embaixo e 16 px nas laterais.
- Servem para avisos curtos: "torra desta semana", "novo", "mais pedido".
- Variação: fundo Folha com texto Leite, para informação neutra (ex.: "B2B").
- No máximo 3 palavras por selo.

### Ilustrações
Formas chapadas e simples (xícara vista de cima, grãos), nas cores da paleta, sem degradê e sem foto de banco de imagem.

---

## 5. Regras rápidas

1. Fundo da página sempre Leite; cartões em Branco.
2. Cereja só para ação e preço. Se tudo for vermelho, nada chama atenção.
3. Bourbon nunca como cor de texto em fundo claro.
4. Texto sobre Folha ou Cereja: sempre Leite ou Branco.
5. Quando a página mostrar números de `dados/`, escrever "dados fictícios de exemplo" em lugar visível (texto pequeno, cor Apoio).

---

## 6. Variáveis CSS para reaproveitar

```css
:root {
  /* Cores */
  --cor-grao: #2B1D14;        /* títulos e texto principal */
  --cor-cereja: #C23B22;      /* botão principal, preços */
  --cor-cereja-escura: #A8321C; /* botão principal ao passar o mouse */
  --cor-folha: #234B3F;       /* botão secundário, faixas escuras */
  --cor-bourbon: #E8B547;     /* fundo de selos (nunca texto em fundo claro) */
  --cor-leite: #F6F1EA;       /* fundo da página, texto sobre fundo escuro */
  --cor-apoio: #6B5E55;       /* texto secundário */
  --cor-branco: #FFFFFF;      /* fundo de cartões */
  --cor-borda: #E6DDD2;       /* bordas e divisórias */

  /* Fontes */
  --fonte-titulo: "Bricolage Grotesque", "Arial Black", sans-serif;
  --fonte-texto: "Albert Sans", Arial, sans-serif;

  /* Tamanhos de texto */
  --texto-h1: 56px;
  --texto-h1-celular: 36px;
  --texto-h2: 36px;
  --texto-h2-celular: 28px;
  --texto-h3: 22px;
  --texto-grande: 19px;
  --texto-normal: 16px;
  --texto-pequeno: 14px;
  --texto-preco: 20px;
  --texto-botao: 15px;
  --texto-selo: 13px;

  /* Espaçamentos */
  --espaco-xs: 4px;
  --espaco-sm: 8px;
  --espaco-md: 16px;
  --espaco-lg: 24px;
  --espaco-xl: 40px;
  --espaco-xxl: 72px;
  --largura-max: 1200px;

  /* Cantos arredondados */
  --canto-pequeno: 8px;
  --canto-medio: 14px;
  --canto-grande: 24px;
  --canto-pilula: 999px;

  /* Bordas */
  --borda-cartao: 1.5px solid var(--cor-borda);
  --borda-botao: 2px solid var(--cor-folha);
}
```
