# Motion: movimento que explica

Movimento entra para mostrar **o que mudou** ou **o que vem em seguida**. Se tirar a animação e nada se perder, tire.

## Regras

1. **Um momento de abertura, só um.** No topo, ao carregar: os elementos do título entram em sequência (60–120 ms entre eles, 600–900 ms no total) ou o elemento visual se desenha. Nada de cada seção "subindo" ao rolar: é o padrão genérico de página feita por IA.
2. **Dado se desenha quando aparece, uma vez.** Barras crescem até o valor, números contam, etapas acendem em sequência, pontos aparecem no mapa. Usar `IntersectionObserver` com `threshold` 0.25 e desligar depois (`unobserve`).
3. **Resposta a clique é imediata.** Abrir, fechar, trocar de aba, avançar passo: 150–300 ms, curva `cubic-bezier(.2,.7,.2,1)`.
4. **Só `transform` e `opacity`** para animar (e `width` de barra). Nada de animar `top`, `height` de layout grande ou sombra.
5. **Conteúdo visível por padrão.** O estado "antes da animação" é aplicado só quando o JavaScript roda (classe `js` no `<html>`). Sem JS, print ou leitor de tela: tudo aparece.
6. **Respeitar quem pediu menos movimento:**
   ```css
   @media (prefers-reduced-motion: reduce){
     *,*::before,*::after{animation:none!important;transition:none!important}
     html{scroll-behavior:auto}
   }
   ```
   E no JS: `matchMedia('(prefers-reduced-motion: reduce)').matches` → pular contagem e desenho.

## Receitas prontas

```js
// dados que se desenham ao entrar na tela
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visto'); io.unobserve(e.target); }
}), { threshold: .25 });
document.querySelectorAll('[data-desenha]').forEach(el => io.observe(el));
```
```css
.js [data-desenha]:not(.visto) .barra i{width:0}
.barra i{width:calc(var(--v)*1%);transition:width 1s cubic-bezier(.2,.7,.2,1)}
```
```js
// número que conta até o valor (mantém vírgula e prefixo)
function conta(b){ const alvo=b.textContent, m=alvo.match(/[\d.]+(,\d+)?/); if(!m) return;
  const dec=(m[0].split(',')[1]||'').length, n=parseFloat(m[0].replace(/\./g,'').replace(',','.')); let t0;
  requestAnimationFrame(function p(t){ t0??=t; const k=Math.min(1,(t-t0)/1100), e=1-(1-k)**3;
    b.textContent=alvo.replace(m[0],(n*e).toLocaleString('pt-BR',{minimumFractionDigits:dec,maximumFractionDigits:dec}));
    if(k<1) requestAnimationFrame(p); else b.textContent=alvo; }); }
```
