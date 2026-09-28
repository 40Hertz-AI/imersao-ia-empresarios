# Sistema de lâmina (carrossel 1080 × 1350)

## Esqueleto

```html
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=<TITULO>&family=<TEXTO>&display=swap" rel="stylesheet">
<style>
:root{--marca:#…;--destaque:#…;--fundo:#…;--texto:#…;--t:'<Título>',serif;--c:'<Texto>',sans-serif}
*{box-sizing:border-box;margin:0}
body{background:#ddd;display:flex;flex-direction:column;gap:40px;align-items:center;padding:40px}
.lamina{width:1080px;height:1350px;position:relative;overflow:hidden;background:var(--fundo);color:var(--texto);padding:110px 96px;font-family:var(--c)}
.lamina h2{font-family:var(--t);font-size:96px;line-height:1.02;letter-spacing:-.02em}
.lamina p{font-size:40px;line-height:1.35}
.rodape{position:absolute;left:96px;right:96px;bottom:64px;display:flex;justify-content:space-between;font-size:28px;opacity:.7}
/* modo exportação: ?n=3 mostra só a lâmina 3, sem margem */
body.so{background:none;padding:0;gap:0}
body.so .lamina{display:none} body.so .lamina.on{display:flex}
.lamina{display:flex;flex-direction:column} /* margin-top:auto ancora o bloco embaixo */
</style></head><body>
<section class="lamina">…<div class="rodape"><span>@empresa</span><span>1/7</span></div></section>
…
<script>
const n=+new URLSearchParams(location.search).get('n');
if(n){document.body.classList.add('so');document.querySelectorAll('.lamina')[n-1]?.classList.add('on');}
</script></body></html>
```

## Layout por função

| Lâmina | Função | Layout |
|---|---|---|
| 1 | Gancho | Frase grande ocupando 60% da altura; fundo na cor principal; seta/indicação de arraste |
| 2–3 | Problema | Um gráfico que mostra a cena (conversa sem resposta, calendário, fila, conta) + 1 frase |
| 4–5 | Método | Lista numerada só se for sequência; ícones em SVG simples, traço da cor principal |
| 6 | Virada | O resultado como selo, carimbo ou antes × depois |
| 7 | Chamada | A palavra para comentar enorme, na cor de destaque; o que acontece depois em 1 linha |

## Regras

- Alternar fundo claro e escuro por função, não por par/ímpar.
- Lista ou grafismo não fica colado no título deixando meia lâmina vazia: ancorar no centro ou embaixo (`margin-top:auto`).
- No máximo 1 grafismo por lâmina. Tire um acessório antes de exportar.
- Margem mínima de 96 px: o Instagram corta as bordas na grade do perfil.
- A lâmina 1 também é a capa do perfil: precisa funcionar em miniatura (título legível a 1/4 do tamanho).
