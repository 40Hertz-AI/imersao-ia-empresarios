# Componentes do RESULTADO.html

Cada fase troca só o próprio bloco, entre `<!-- INICIO:<id> -->` e `<!-- FIM:<id> -->`. Usar só as classes abaixo (o CSS e o JavaScript já estão no arquivo). Não criar `<style>` novo, não trazer biblioteca de fora, não mexer em outro bloco. O relatório anima sozinho: barras, números, mapa, rosca e etapas se desenham quando aparecem; abas, carrossel e bastidores ganham botões. Não escrever JavaScript.

Regras de todas as seções:
- Começa com `<p class="fase">` (a fase e o comando), `<h2>` que diz a conclusão (não o tema) e um `<p class="lede">` de 1–2 frases.
- **Pelo menos 1 visual por seção** (tabela, barras, rosca, funil, etapas, mapa, kpis, comparar). Seção só de cartões com texto é seção fraca.
- **Termina com um `.bastidor`** (o que a IA fez, o conceito por trás, o que o dono pode fazer) e o `<p class="base">`.
- Termo técnico na primeira vez: `<em class="termo" tabindex="0" data-def="explicação curta">termo</em>`.
- Dado sem fonte não entra. Estimativa leva `<span class="selo estimativa">estimativa</span>`.
- Elemento sem dado some. Nunca mostrar vazio, "N/A" ou `{campo}`.
- Texto dentro do HTML: escapar `<`, `>` e `&`.
- **Nunca** colocar faturamento, margem ou salário no RESULTADO.html.
- As regras de estilo da `frontend-design` (sem ' · ', sem rótulo em caixa alta) valem para as entregas, não para este relatório: aqui vale este arquivo.

## Peças

```html
<!-- abertura da seção -->
<p class="fase"><span class="selo">fase 2</span> <code>/mapear-empresa</code> · mercado</p>

<!-- cartões lado a lado: g2 ou g3 -->
<div class="grade g3">
  <div class="cartao"><h4>Título</h4><p>Texto.</p></div>
  <div class="cartao forte"><h4>O mais importante</h4><p>Texto.</p></div>
</div>

<!-- ficha de dados -->
<dl class="ficha"><dt>Rótulo</dt><dd>Valor</dd></dl>

<!-- números grandes com fonte (data-conta faz o número contar ao aparecer) -->
<div class="kpis">
  <div><b data-conta>332.558</b><p>O que o número é.</p><p class="fonte"><a href="URL">Fonte, ano</a></p></div>
</div>

<!-- selos: ok / atencao / risco / estimativa / sugestao (sem classe = neutro) -->
<span class="selo ok">tem</span> <span class="selo atencao">fraco</span> <span class="selo risco">não tem</span> <span class="selo sugestao">sugestão</span>
<!-- intenção de busca: alta = ok · média = atencao · baixa = sem classe -->

<!-- frase real de cliente, com fonte. Frase inferida: sem link, com <p class="fonte">inferida pela IA</p> -->
<p class="citacao">"Frase literal do cliente."</p>
<p class="fonte"><a href="URL">Reclame Aqui, 2025</a></p>

<!-- frase grande de destaque (proposta de valor, veredito) -->
<p class="destaque">Uma frase.</p>

<!-- antes × depois, dono × internet -->
<div class="comparar"><div><h4>Hoje</h4><p>…</p></div><div><h4>Depois</h4><p>…</p></div></div>

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

<!-- rosca (partes de um todo, até 5): o script desenha a partir de data-v -->
<div class="rosca"><ul>
  <li data-v="35"><span>Pilar A</span><b>35%</b><small>Para quê</small></li>
  <li data-v="65"><span>Pilar B</span><b>65%</b><small>Para quê</small></li>
</ul></div>

<!-- funil (quantos passam em cada etapa; só com número real): --v de 0 a 100 -->
<ol class="funil">
  <li style="--v:100"><div class="faixa">Pedem orçamento</div><span>Texto curto</span></li>
  <li class="perde" style="--v:40"><div class="faixa">Fecham</div><span>Onde perde gente</span></li>
</ol>

<!-- etapas em sequência (jornada, mecanismo); etapa onde perde cliente: class="perde" -->
<ol class="etapas">
  <li><b>Descoberta</b>Texto curto.</li>
  <li class="perde"><b>Orçamento</b>Onde perde gente hoje.</li>
</ol>

<!-- mapa 2x2 de posicionamento: --x e --y de 0 a 100; data-nota aparece ao passar o mouse -->
<div class="mapa" role="img" aria-label="Mapa de posicionamento: eixo X preço, eixo Y atendimento">
  <div class="eixo-x"><span>Preço baixo</span><span>Preço alto</span></div>
  <div class="eixo-y"><span>Atendimento padrão</span><span>Atendimento próximo</span></div>
  <span class="vazio" style="--x:25;--y:80">espaço vazio</span>
  <span class="ponto nos" tabindex="0" style="--x:35;--y:70" data-nota="Por que está aqui.">Nós</span>
  <span class="ponto" tabindex="0" style="--x:75;--y:40" data-nota="Por que está aqui.">Concorrente A</span>
</div>

<!-- abas: o script cria os botões a partir de data-aba -->
<div class="abas">
  <div data-aba="Primeira">…</div>
  <div data-aba="Segunda">…</div>
</div>

<!-- identidade: paleta (clicar copia o hex) e fontes -->
<div class="paleta">
  <button class="cor" type="button" style="--c:#4A5230"><b>Nome da cor</b><code>#4A5230</code><span>Função</span></button>
</div>
<div class="tipos">
  <div><span class="aa" style="font-family:var(--fonte-titulo)">Aa</span><b>Nome da fonte</b><p>Uso.</p></div>
</div>

<!-- página: celular e computador -->
<div class="molduras"><div class="celular"><iframe title="…" src="entregas/pagina-de-vendas.html" loading="lazy"></iframe></div><div class="lado">…</div></div>
<div class="navegador"><div class="janela"><iframe title="…" src="entregas/pagina-de-vendas.html" loading="lazy"></iframe></div></div>
<a class="botao" href="…" target="_blank" rel="noopener">Abrir a página</a> <a class="botao leve" href="…">Outro</a>

<!-- bloco pagina: no .lado, o título escolhido em .destaque, as 3 variações em <ul> e os botões .botao / .botao.leve -->
<!-- bloco conteudo: .molduras com o .post à esquerda e, no .lado, a .rosca dos pilares -->
<!-- carrossel: um .slide img por PNG (o script põe setas e pontos). A legenda respeita as quebras de linha do texto -->
<div class="post">
  <div class="post-topo"><i></i>@empresa</div>
  <div class="slides"><div class="slide img"><img src="entregas/posts/carrossel-1-01.png" alt="Lâmina 1 de 7" loading="lazy"></div></div>
  <p class="post-legenda">Legenda.</p>
</div>

<!-- bastidor: como a IA chegou aqui (a parte que ensina) -->
<details class="bastidor">
  <summary>Bastidores: como a IA fez isto</summary>
  <div>
    <ol class="passo-ia"><li><b>Verbo</b> o que fez, em 1 linha.</li></ol>
    <p class="conceito"><b>O conceito:</b> a ideia por trás, em 1–2 frases.</p>
    <p class="faca">Faça na sua pasta:<code>/comando ou prompt</code></p>
  </div>
</details>

<!-- próximos passos com checkbox (o contador atualiza sozinho) -->
<p class="conta-passos">0 de 3 feitos</p>
<ol class="passos">
  <li><input type="checkbox" aria-label="feito"><div><b>Ação</b><br>Por quê · <code>/comando</code></div></li>
</ol>
```

## Que visual usar

| A pergunta | O visual |
|---|---|
| Quanto? (números do setor) | `.kpis` |
| Quem é maior/melhor? | `.barras` |
| Do que é feito o todo? | `.rosca` |
| Em que ordem? Onde quebra? | `.etapas` (ou `.funil` se houver número real por etapa) |
| Onde cada um está? | `.mapa` |
| O que muda? | `.comparar` |
| Muitos atributos por item | tabela |

## O que vai em cada bloco

| Bloco | Fase | Conteúdo |
|---|---|---|
| `titulo` | 1 | `<title><Nome> · Cérebro da empresa</title>` |
| `marca` | 1, 2 ou `/marca` | O `<link>` do Google Fonts e o `:root` com as 6 variáveis de `marca/marca.md` |
| `nome` | 1 | `<a class="nome" href="#capa">Nome</a>`. Se existir `marca/logo.*`: `<a class="nome" href="#capa"><img src="marca/logo.png" alt="Nome"></a>` |
| `atualizado` | todas | `<p class="atualizado">Atualizado em DD/MM/AAAA · fase N de 6</p>` |
| `capa` | 1, refinada na 2 | `<p class="tipo">` cidade e setor · `<h1>` a empresa em 1 frase · `.lede` · `.numeros` com 3–4 números **públicos**, cada `<b data-conta>`. Logo: `<img class="logo" src="marca/logo.png" alt="Nome">` se existir. A trilha das 6 fases aparece sozinha |
| `ficha` | 1 | `.ficha` com o que o dono contou · `.grade g2` com "O que mais incomoda hoje" (forte) e "Onde quer chegar em 12 meses" · bastidor sobre memória. Sem faturamento |
| `empresa` | 2 | Presença digital em tabela com selos · o que vende, prova e não diz (`.g3`) · `.comparar` dono × internet · bastidor |
| `identidade` | 2 ou `/marca` | `.paleta` · `.tipos` · como a empresa fala (citação + palavras a evitar) · bastidor sobre de onde veio a marca |
| `mercado` | 2 | `.kpis` com fonte · `.barras` quando houver comparação real · tendências · buscas com intenção em selo · veredito em `.destaque` · bastidor |
| `cliente` | 2 | Persona em cartão forte + anti-cliente · jornada em `.etapas` com `perde` · dores em `.abas` (uma aba por dor, com `.citacao` e `.fonte`) · gatilhos e objeções · bastidor |
| `diagnostico` | 2 | Gargalos em tabela (confirma ou não o problema do dono) · oportunidades em cartões, ★ na mais forte · bastidor |
| `concorrentes` | 3 | `.mapa` com `data-nota` e `.vazio` · `.barras` de força digital · tabela com linha `nos` · espaços vazios em cartões · bastidor |
| `oferta` | 4 | `.destaque` com a proposta de valor · mecanismo em `.etapas` · principal × entrada em `.g2` · garantia · selo "hipótese a validar" · bastidor |
| `pagina` | 5 | `.abas`: "No celular" (`.molduras` + `.celular`), "No computador" (`.navegador`), "Formulário de pedido" · botões para abrir · bastidor |
| `conteudo` | 6 | `.post` com os PNGs · pilares em `.rosca` · calendário em tabela com selo de formato · bastidor |
| `proximos` | todas | `<h2>` · `.conta-passos` · `.passos` com as 3 primeiras ações de `memoria/foco.md`, cada uma com o comando ou arquivo que ajuda (sem nenhum, omitir) |
