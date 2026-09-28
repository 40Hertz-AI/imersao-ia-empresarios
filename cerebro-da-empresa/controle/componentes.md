# Componentes do RESULTADO.html

Cada fase troca só o próprio bloco, entre `<!-- INICIO:<id> -->` e `<!-- FIM:<id> -->`. Usar só as classes abaixo (o CSS já está no arquivo). Não criar `<style>` novo, não trazer biblioteca de fora, não mexer em outro bloco.

Regras de todas as seções:
- Começa com `<h2>` que diz a conclusão (não o tema) e um `<p class="lede">` de 1–2 frases.
- Termina com `<p class="base">Base: <a href="pesquisa/arquivo.md">pesquisa/arquivo.md</a></p>`.
- Dado sem fonte não entra. Estimativa leva `<span class="selo estimativa">estimativa</span>`.
- Elemento sem dado some. Nunca mostrar vazio, "N/A" ou `{campo}`.
- Texto dentro do HTML: escapar `<`, `>` e `&`.
- **Nunca** colocar faturamento, margem ou salário no RESULTADO.html.

## Peças

```html
<!-- cartões lado a lado: g2 ou g3 -->
<div class="grade g3">
  <div class="cartao"><h4>Título</h4><p>Texto.</p></div>
  <div class="cartao forte"><h4>O mais importante</h4><p>Texto.</p></div>
</div>

<!-- ficha de dados -->
<dl class="ficha"><dt>Rótulo</dt><dd>Valor</dd></dl>

<!-- selos: ok / atencao / risco / estimativa -->
<span class="selo ok">tem</span> <span class="selo atencao">fraco</span> <span class="selo risco">não tem</span>

<!-- frase real de cliente, com fonte -->
<p class="citacao">"Frase literal do cliente."</p>
<p class="fonte"><a href="URL">Reclame Aqui, 2025</a></p>

<!-- frase grande de destaque (proposta de valor, veredito) -->
<p class="destaque">Uma frase.</p>

<!-- tabela; linha da própria empresa com class="nos" -->
<div class="tabela-wrap"><table>
  <thead><tr><th>Coluna</th><th>Coluna</th></tr></thead>
  <tbody><tr class="nos"><td>Nós</td><td>…</td></tr><tr><td>Outro</td><td>…</td></tr></tbody>
</table></div>

<!-- barras: --v de 0 a 100 (nota 1–5 → ×20) -->
<div class="barras">
  <div class="barra nos"><span>Nome da empresa</span><span class="trilha"><i style="--v:60"></i></span><span>3/5</span></div>
  <div class="barra"><span>Concorrente</span><span class="trilha"><i style="--v:80"></i></span><span>4/5</span></div>
</div>

<!-- etapas em sequência (jornada, mecanismo); etapa onde perde cliente: class="perde" -->
<ol class="etapas">
  <li><b>Descoberta</b>Texto curto.</li>
  <li class="perde"><b>Orçamento</b>Onde perde gente hoje.</li>
</ol>

<!-- mapa 2x2 de posicionamento: --x e --y de 0 a 100 -->
<div class="mapa" role="img" aria-label="Mapa de posicionamento: eixo X preço, eixo Y atendimento">
  <div class="eixo-x"><span>Preço baixo</span><span>Preço alto</span></div>
  <div class="eixo-y"><span>Atendimento padrão</span><span>Atendimento próximo</span></div>
  <span class="ponto nos" style="--x:35;--y:70">Nós</span>
  <span class="ponto" style="--x:75;--y:40">Concorrente A</span>
</div>

<!-- lista de próximos passos com checkbox -->
<ol class="passos">
  <li><input type="checkbox" aria-label="feito"><div><b>Ação</b><br>Por quê · <code>/comando</code></div></li>
</ol>
```

## O que vai em cada bloco

| Bloco | Fase | Conteúdo |
|---|---|---|
| `titulo` | 1 | `<title><Nome> · Cérebro da empresa</title>` |
| `marca` | 1 e 2 | O `<link>` do Google Fonts e o `:root` com as 6 variáveis. A fase 2 troca pelas cores e fontes reais de `marca/marca.md` |
| `nome` | 1 | `<a class="nome" href="#capa">Nome</a>`. Se existir `marca/logo.*`, usar só o nome aqui |
| `atualizado` | todas | `<p class="atualizado">Atualizado em DD/MM/AAAA · fase N de 6</p>` |
| `capa` | 1, refinada na 2 | `<p class="tipo">`cidade e setor · `<h1>` a empresa em 1 frase · `.lede` · `.numeros` com 3–4 números **públicos** (anos de mercado, nº de produtos, nota no Google, concorrentes mapeados). Logo: `<img class="logo" src="marca/logo.png" alt="Nome">` se o arquivo existir |
| `ficha` | 1 | `<h2>` · `.ficha` com o que o dono contou (produtos e faixa de preço, onde atende, equipe em nº de pessoas, como o cliente chega) · cartão "O que o dono quer resolver" com o maior problema e a meta de 12 meses. Sem faturamento |
| `empresa` | 2 | Presença digital em tabela com selos (site, Instagram, Google, WhatsApp, loja, blog) · o que vende · provas que existem · o que o site não diz |
| `mercado` | 2 | 3–5 números do setor com fonte e ano (`.grade g3` de cartões) · tendências · buscas que o cliente faz, com intenção em selo · veredito em `.destaque` |
| `cliente` | 2 | Cartão forte da persona · 3–5 dores com `.citacao` + `.fonte` · linguagem (usar × evitar) · gatilhos de compra · objeções |
| `diagnostico` | 2 | Gargalos em tabela (gargalo · evidência · custo de não resolver · primeira ação), dizendo se o problema que o dono declarou se confirma · 3–5 oportunidades em cartões, ★ na mais forte |
| `concorrentes` | 3 | Tabela comparativa (linha `nos`) · `.barras` de força digital · `.mapa` · espaços vazios em cartões |
| `oferta` | 4 | Proposta de valor em `.destaque` · promessa · mecanismo em `.etapas` · oferta principal × de entrada em `.g2` · garantia · selo "hipótese a validar" |
| `pagina` | 5 | `.molduras` com `.celular` + `<iframe title="Página de vendas" src="entregas/pagina-de-vendas.html">` · ao lado: headline escolhida, as 3 variações e o link "abrir em tela cheia" |
| `conteudo` | 6 | 4 pilares em `.barras` (% do mix) · o carrossel 1 dentro de `.post` com `.slides` (um `.slide` por lâmina) e `.post-legenda` · calendário de 4 semanas em tabela |
| `proximos` | todas | `<h2>` · `.passos` com as 3 próximas ações de `memoria/foco.md`, cada uma com o comando que ajuda |
