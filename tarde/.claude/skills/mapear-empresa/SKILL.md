---
name: mapear-empresa
description: Use após o /instalar ou quando pedirem /mapear-empresa. Pesquisa a fundo a empresa, o mercado e o cliente na internet e entrega o diagnóstico do negócio (10 min).
---

# /mapear-empresa: o estudo do negócio

A fase que faz o dono conhecer melhor o próprio negócio. Parte do que ele contou no `/instalar` e cruza com o que a internet mostra: a empresa, o mercado, o cliente e onde estão os gargalos. **Não faz pergunta nenhuma.** O que faltar vira `[a confirmar]`.

## Antes

- Ler `memoria/` inteira e `marca/marca.md`. Se `memoria/empresa.md` estiver vazio: "Rode `/instalar` antes (6 min)." e parar.
- Dizer em 1 linha: "Pesquisando a <nome>, o mercado e o cliente. Uns 10 min; te aviso quando o relatório atualizar."

## Pesquisar

As três frentes são independentes. **Se a ferramenta de agentes (Agent/Task) estiver disponível, rodar as três em paralelo**, cada agente com o conteúdo de `memoria/empresa.md` e as instruções da sua frente, devolvendo o markdown pronto do arquivo. Sem ela, fazer em sequência. Em qualquer caso: página que não abre ou busca vazia é anotada em 1 linha e a pesquisa segue.

### Frente A · A empresa → `pesquisa/empresa.md`
1. Abrir o site: a página inicial e até 4 internas (sobre, produtos/serviços, contato, loja). Se as rotas devolverem o mesmo conteúdo, é site de página única: registrar e parar.
2. Buscar na web: `"<nome>" <cidade>`, `"<nome>" instagram`, `"<nome>" avaliações`, `"<nome>" reclame aqui`. Pegar redes, nota e nº de avaliações no Google, notícias, ano de abertura se aparecer.
3. Cores e fontes, pelo terminal (o leitor de página perde o CSS):
   ```bash
   curl -sL -A "Mozilla/5.0 (Macintosh) AppleWebKit/537.36 Chrome/120 Safari/537.36" <site> -o pagina.html
   grep -oiE -- '--[a-z0-9_-]*(color|cor)[a-z0-9_-]*:\s*#[0-9a-f]{3,6}' pagina.html | sort -u | head -12
   grep -oiE '#[0-9a-f]{6}' pagina.html | sort | uniq -c | sort -rn | head -8
   grep -oiE "font-family:[^;\"]+|fonts.googleapis.com/css[^\"']+" pagina.html | sort -u | head -5
   ```
   Preferir as variáveis do tema às cores mais repetidas (widget de WhatsApp polui a contagem). Apagar `pagina.html` no fim. Sem resultado: `[a confirmar]`.
4. Tom de voz do site: 3 adjetivos e 2 frases reais.
5. Presença digital: site funciona no celular? loja? blog (data do último post)? WhatsApp? Instagram ativo (último post)? Google Meu Negócio?
   **Sem site:** tom de voz e cores saem do Instagram (legendas e paleta dos posts), marcados `[do Instagram — confirmar]`. Sem nada: sugerir uma paleta coerente com o setor e o gosto do dono (pergunta 6 do `/instalar`), marcada `[sugestão]`.
6. Comparar com o que o dono disse no `/instalar` (preço, produto, cliente). Divergência é achado: registrar as duas versões.

### Frente B · O mercado → `pesquisa/mercado.md`
1. Definir o nicho em 1 frase: setor + tipo de cliente + região.
2. 3 a 5 números do setor no Brasil ou na região (IBGE, Sebrae, associações do setor, imprensa), cada um com link e ano. Sem número confiável: escrever "sem dado público confiável". **Nunca** inventar ou arredondar número de mercado.
3. 3 tendências (regulação, tecnologia, hábito) e o que cada uma significa para esta empresa.
4. 10 buscas que o cliente faz antes de comprar (produto + cidade, "melhor", "preço", "perto de mim"). Pesquisar as 5 mais próximas de compra e anotar quem aparece. Intenção em alta/média/baixa **por observação**, escrito assim no arquivo.
5. Veredito em 3 linhas: mercado `crescendo` / `estável` / `apertado`, e por quê.

### Frente C · O cliente → `pesquisa/cliente.md`
1. Persona principal: quem é, o que faz, quanto gasta, quem decide, onde se informa. Cruzar com a resposta 3 do `/instalar`. Mais o anti-cliente (quem parece, mas não é).
2. 3 a 5 dores, cada uma com a **frase real do cliente e o link**. Onde procurar: `site:reclameaqui.com.br <categoria>`, avaliações do Google da empresa e dos concorrentes, comentários no YouTube e no Instagram, perguntas em fórum. Não conta: texto de blog de fornecedor. Sem frase real depois de 3 buscas: escrever como o cliente diria e marcar `(inferida)`. No máximo 2 inferidas.
3. 8 palavras que o cliente usa e 5 a evitar.
4. 5 gatilhos: o momento em que o cliente sai procurando.
5. 3 objeções, com a frase literal e a resposta.

## Juntar → `pesquisa/diagnostico.md`

Depois das três frentes, ler os três arquivos e `memoria/`:
- **Gargalos (3 a 5):** sintoma · evidência (arquivo e link) · custo de não resolver · primeira ação. O problema que o dono declarou vem primeiro, dizendo se a pesquisa **confirma** ou **aponta outra causa**. Usar `memoria/numeros.md` para raciocinar (ex.: ticket × clientes), mas nunca copiar o número para fora da memória.
- **Oportunidades (3 a 5):** o que é · o sinal que mostra (com link) · por que o dono provavelmente não está vendo · primeiro passo. ★ na mais forte.
- **O que ficou `[a confirmar]`.**

Cada arquivo tem no topo `Fontes:` e `Data:`, e no máximo 120 linhas. Cortar adjetivo, nunca fonte.

## Atualizar memória e marca

Só campos em branco. O que o dono escreveu nunca é sobrescrito.
- `marca/marca.md` ← cores e fontes achadas, marcadas `[do site — confirmar]`. Se não achou fonte, sugerir uma do Google Fonts que combine e marcar `[sugestão]`.
- `memoria/preferencias.md` ← tom de voz e frases reais, marcados `[do site — confirmar]`; em "O que evitar", as 5 palavras a evitar.
- `memoria/foco.md` → "Próximas ações" ← a primeira ação dos 3 gargalos principais.

## Atualizar o RESULTADO.html

Ler `controle/componentes.md`. Trocar os blocos `marca` (cores e fontes reais), `capa` (lede "Mapa da empresa: 2 de 6 fases" e números públicos novos, como nota no Google), `empresa`, `mercado`, `cliente`, `diagnostico`, `proximos` e `atualizado`. Usar a skill `frontend-design` só para escolher bem a fonte, se `marca/marca.md` não tiver uma. Conferir no fim: procurar no arquivo por `{`, `undefined` e `[a confirmar]` solto em título.

## Fechar

Marcar a fase em `controle/progresso.md` e responder:

```
✓ Estudo da empresa → pesquisa/ (4 arquivos)
Maior gargalo: <1 linha>
Maior oportunidade: <1 linha>
Atualize o RESULTADO.html: Raio-X, Mercado, Cliente e Diagnóstico apareceram.
Próximo: /mapear-concorrentes (~6 min) · ou /criar-oferta, /criar-pagina, /criar-conteudo, na ordem que quiser
```
