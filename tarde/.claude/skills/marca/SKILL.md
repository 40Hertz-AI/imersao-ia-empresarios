---
name: marca
description: Use quando pedirem /marca, quando a pessoa mandar print, logo ou site da empresa, ou antes de gerar qualquer HTML ou post se marca/marca.md estiver vazio. Monta o design system da empresa (cores, fontes, logo, tom) a partir do site, do Instagram ou de um print (4 min).
---

# /marca: o design system da empresa

Tudo o que a IA desenha (relatório, página, formulário, posts) lê `marca/marca.md`. Esta skill preenche esse arquivo **com o que a empresa já usa**, não com gosto da IA. Roda sozinha (`/marca`) ou dentro do `/mapear-empresa`, `/criar-pagina` e `/criar-conteudo` quando a marca estiver vazia.

## 1. Achar a fonte da marca (nesta ordem, para no primeiro que der)

1. **O que o dono escreveu** em `marca/marca.md`: vale mais que tudo. Só completar o que falta.
2. **Logo ou print na pasta:** procurar `marca/logo.*`, `marca/*.png|jpg|webp|svg` e imagens soltas em `dados/`. Se houver, abrir a imagem e ler as cores.
3. **Site:** ler o CSS pelo terminal (o leitor de página perde o CSS):
   ```bash
   curl -sL -A "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/120 Safari/537.36" <site> -o pagina.html
   grep -oiE -- '--[a-z0-9_-]*(color|cor|primary|brand|accent)[a-z0-9_-]*:\s*#[0-9a-f]{3,8}' pagina.html | sort -u | head -15
   grep -oiE '#[0-9a-f]{6}' pagina.html | sort | uniq -c | sort -rn | head -10
   grep -oiE "font-family:[^;\"]+|fonts.googleapis.com/css2?[^\"']+" pagina.html | sort -u | head -6
   grep -oiE '<link[^>]+rel="[^"]*icon[^"]*"[^>]*>|<meta[^>]+og:image[^>]*>' pagina.html | head -3
   ```
   Preferir variáveis do tema às cores mais repetidas (widget de WhatsApp e cookie polui a contagem). Se o CSS vier de arquivo externo (`<link rel="stylesheet" href=...>`), baixar os 2 primeiros e repetir o grep. Baixar o logo se achar (`og:image` ou ícone) para `marca/logo.<ext>`. Apagar `pagina.html` no fim.
4. **Instagram:** paleta dos últimos posts e da foto de perfil; marcar `[do Instagram — confirmar]`.
5. **Nada disso deu:** **pedir, uma vez só, em 2 linhas:**
   > "Não achei a marca de vocês na internet. Arraste para cá um print do Instagram, do cardápio, da fachada ou o logo. Se não tiver, me diga uma marca que você admira e eu sugiro a partir dela."

   Rodando sozinha (`/marca`): esperar a resposta. **Dentro de outra fase** (`/mapear-empresa`, `/criar-pagina`, `/criar-conteudo`, que são sem perguntas): não esperar; seguir com `[sugestão]` e fazer o pedido acima na mensagem de fechamento.
   Se a pessoa disser "não tenho", sugerir a partir do setor, do produto (materiais, cores do que vende) e da referência do `/instalar` (pergunta 6), tudo marcado `[sugestão]`.

## 2. Montar o sistema (curto e usável)

- **4 cores com nome e função:** principal, destaque (botões), fundo, texto. Nome que venha do negócio ("casca tostada", não "laranja 2"). Conferir contraste: texto sobre fundo, branco sobre a principal e branco sobre o destaque (a cor dos botões) precisam passar 4,5:1; se não passar, escurecer a cor e avisar.
- **Sugestão sem referência:** fugir do trio que toda IA sugere (fundo creme + serifada + terracota), a menos que o produto peça. Tirar a paleta do material do negócio (azulejo da loja, embalagem, uniforme, o próprio produto).
- **2 fontes do Google Fonts:** títulos e texto. Se o site usa fonte paga, escolher a mais parecida no Google Fonts e escrever "parecida com <nome>".
- **Logo:** caminho do arquivo, ou "só o nome, tipográfico".
- **Estilo das imagens:** do `/instalar` (o que gosta, o que evita).
- **Tom:** se `memoria/preferencias.md` estiver vazio, 3 adjetivos + 2 frases reais do site/Instagram.

## 3. Gravar

`marca/marca.md` nos campos existentes. Cada valor com a origem: `[do site — confirmar]`, `[do print]`, `[do Instagram — confirmar]` ou `[sugestão]`. No RESULTADO.html a origem vira selo: `<span class="selo sugestao">sugestão</span>` ou `<span class="selo atencao">confirmar</span>`. Nunca sobrescrever o que o dono escreveu.

## 4. Atualizar o RESULTADO.html

Trocar os blocos `marca` (Google Fonts + `:root` com as 6 variáveis), `identidade`, `proximos` e `atualizado`, seguindo `controle/componentes.md`. O bloco `identidade` usa `.paleta` (um `.cor` por cor) e `.tipos`, a seção "Como a empresa fala" e um `.bastidor` contando de onde veio a marca.

## Fechar

```
✓ Design system da empresa → marca/marca.md
<cores e fontes em 1 linha · de onde vieram>
Atualize o RESULTADO.html: o relatório já está com as cores da empresa.
Próximo: /mapear-empresa (~10 min) · ou /criar-pagina, que já vai sair com a marca
```
