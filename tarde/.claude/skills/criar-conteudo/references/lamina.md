# Sistema de lâmina (carrossel e post de 1080 × 1350)

## Esqueleto

O mesmo para `carrossel-1.html` (várias lâminas) e `post-1.html` (uma lâmina). Copiar e preencher.

```html
<!doctype html><html lang="pt-BR"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title><Empresa> · carrossel 1</title>
<link href="https://fonts.googleapis.com/css2?family=<TITULO>&family=<TEXTO>&display=swap" rel="stylesheet">
<style>
:root{--marca:#…;--destaque:#…;--fundo:#…;--texto:#…;--t:'<Título>',serif;--c:'<Texto>',sans-serif;--s:1}
*{box-sizing:border-box;margin:0}
html,body{height:100%}
body{background:#1d1d1d;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;overflow:hidden;font-family:var(--c)}
.palco{width:1080px;height:1350px;zoom:var(--s)}
.lamina{width:1080px;height:1350px;position:relative;overflow:hidden;background:var(--fundo);color:var(--texto);padding:110px 96px;display:flex;flex-direction:column}
.lamina[hidden]{display:none}
.lamina h2{font-family:var(--t);font-size:96px;line-height:1.02;letter-spacing:-.02em}
.lamina p{font-size:40px;line-height:1.35}
.rodape{position:absolute;left:96px;right:96px;bottom:64px;display:flex;justify-content:space-between;font-size:28px;opacity:.7}
.controles{display:flex;align-items:center;gap:16px;color:#eee;font:600 16px/1 var(--c)}
.controles button{font:inherit;width:44px;height:44px;border-radius:50%;border:1px solid #666;background:#2a2a2a;color:#fff;cursor:pointer}
.controles button:disabled{opacity:.3;cursor:default}
.nav{display:flex;align-items:center;gap:16px}
.nav[hidden]{display:none} /* display:flex venceria o atributo hidden */
.controles .gerar{width:auto;border-radius:22px;padding:0 18px}
.caixa{margin:auto;max-width:640px;width:calc(100% - 32px);border:0;border-radius:12px;padding:24px;font:16px/1.5 var(--c)}
.caixa::backdrop{background:rgba(0,0,0,.6)}
.caixa textarea{width:100%;height:220px;margin:12px 0;font:15px/1.5 var(--c);padding:12px}
.caixa button{font:600 15px/1 var(--c);padding:12px 18px;border-radius:8px;border:1px solid #999;background:#fff;cursor:pointer;margin-right:8px}
body.so{background:var(--fundo)} body.so .controles{display:none}
/* margin-top:auto numa peça ancora o bloco embaixo */
</style></head><body>
<div class="palco">
  <section class="lamina" data-prompt="Crie uma imagem vertical 4:5 (1080 × 1350 px) para um post de Instagram da …">…<div class="rodape"><span>@empresa</span><span>1/7</span></div></section>
  …
</div>
<div class="controles"><span class="nav"><button type="button" aria-label="Lâmina anterior">&#8249;</button><span class="conta"></span><button type="button" aria-label="Próxima lâmina">&#8250;</button></span><button type="button" class="gerar">Gerar prompt de imagem</button></div>
<dialog class="caixa"><b>Prompt de imagem desta lâmina</b><br>Cole no ChatGPT (ou outro gerador de imagem) para criar a imagem.<textarea readonly></textarea><button type="button" class="copiar">Copiar</button><button type="button" class="fechar">Fechar</button></dialog>
<script>
// Uma lâmina por vez, do tamanho da janela. ?n=3 mostra só a lâmina 3, sem botões (relatório e print).
const n=+new URLSearchParams(location.search).get('n'), ls=[...document.querySelectorAll('.lamina')];
const [ant,prox]=document.querySelectorAll('.nav button'), conta=document.querySelector('.conta');
let i=Math.min(Math.max((n||1)-1,0),ls.length-1);
if(n) document.body.classList.add('so');
if(ls.length<2) document.querySelector('.nav').hidden=true;
function mostra(){ ls.forEach((l,k)=>l.hidden=k!==i); conta.textContent=(i+1)+' / '+ls.length; ant.disabled=i===0; prox.disabled=i===ls.length-1; }
function escala(){ const folga=n?0:80; document.documentElement.style.setProperty('--s',Math.min(1,innerWidth/1080,(innerHeight-folga)/1350)); }
ant.onclick=()=>{ if(i>0){i--;mostra();} }; prox.onclick=()=>{ if(i<ls.length-1){i++;mostra();} };
addEventListener('keydown',e=>{ if(caixa.open) return; if(e.key==='ArrowRight') prox.click(); if(e.key==='ArrowLeft') ant.click(); });
// Gerar prompt de imagem: mostra e copia o data-prompt da lâmina atual.
const caixa=document.querySelector('.caixa'), txt=caixa.querySelector('textarea');
function copia(){ txt.select(); document.execCommand('copy'); }
document.querySelector('.gerar').onclick=()=>{ txt.value=ls[i].dataset.prompt; caixa.showModal(); copia(); };
caixa.querySelector('.copiar').onclick=copia; caixa.querySelector('.fechar').onclick=()=>caixa.close();
addEventListener('resize',escala); escala(); mostra();
</script></body></html>
```

## Layout por função

| Lâmina | Função | Layout |
|---|---|---|
| 1 | Gancho | Frase grande ocupando 60% da altura; fundo na cor principal; seta ou indicação de arraste |
| 2–3 | Problema | Um gráfico que mostra a cena (conversa sem resposta, calendário, fila, conta) + 1 frase |
| 4–5 | Método | Lista numerada só se for sequência; ícones em SVG simples, traço da cor principal |
| 6 | Virada | O resultado como selo, carimbo ou antes × depois |
| 7 | Chamada | A palavra para comentar enorme, na cor de destaque; o que acontece depois em 1 linha |

Post único: uma lâmina só, com a função da pauta (em geral gancho + 1 dado ou 1 dica), o @ e a chamada.

## Regras

- Alternar fundo claro e escuro por função, não por par/ímpar.
- Lista ou grafismo não fica colado no título deixando meia lâmina vazia: ancorar no centro ou embaixo (`margin-top:auto`).
- No máximo 1 grafismo por lâmina. Tire um acessório antes de entregar.
- Margem mínima de 96 px: o Instagram corta as bordas na grade do perfil.
- A lâmina 1 também é a capa do perfil: precisa funcionar em miniatura (título legível a 1/4 do tamanho).
- Nada de PNG nem print automático: o dono abre o HTML e, para postar, tira print de cada lâmina em tela cheia.

## Prompt de imagem (o botão "Gerar prompt de imagem")

Toda `<section class="lamina">` leva um `data-prompt` com o prompt pronto para colar no ChatGPT e gerar uma imagem a partir daquela lâmina. O botão mostra e copia o prompt da lâmina que está na tela. Escrever em português, num parágrafo só, nesta ordem:

1. `Crie uma imagem vertical 4:5 (1080 × 1350 px) para um post de Instagram da <empresa>, <o que é, em poucas palavras> em <cidade>.`
2. `Cena: <uma cena concreta que mostra a ideia da lâmina>.` Coisas e lugares do negócio; sem rosto de pessoa real, sem produto que a empresa não vende.
3. `Estilo: <o estilo de imagem de marca/marca.md; sem ele, fotografia com luz natural>.`
4. `Cores: <as cores de marca/marca.md, com nome e hex>.`
5. `Texto na imagem, exatamente assim, em português: "<o título da lâmina>", sem logos, sem marca d'água e sem nenhuma outra palavra.`

No atributo, as aspas viram `&quot;`. Nunca colocar número privado (`memoria/numeros.md`, `dados/`) no prompt.
