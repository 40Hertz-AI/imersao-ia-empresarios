---
name: criar-pagina
description: Use após o /criar-oferta ou quando pedirem /criar-pagina, página de vendas, landing, site, formulário de pedido ou mapa. Escreve a copy e gera a página completa (com formulário, mapa e motion) e o formulário de pedido em HTML com a marca da empresa (10 min).
---

# /criar-pagina: página de vendas completa + formulário de pedido

**Sem perguntas.** Lê `memoria/`, `marca/marca.md`, `pesquisa/cliente.md` e `entregas/oferta.md`. Sem a oferta: avisar em 1 linha e montar a oferta mínima a partir do estudo (proposta de valor + oferta de entrada), anotando isso no topo da copy.

**Antes de escrever o HTML:**
1. Se `marca/marca.md` estiver sem cores ou fontes, rodar a skill `marca` primeiro (ela pede print se não achar nada).
2. Carregar a skill `frontend-design` e seguir o processo dela (plano de tokens → revisão → código → print → crítica). O plano vai numa seção "Plano de design" no fim de `entregas/pagina-de-vendas.md` e **não precisa de aprovação** (a fase é sem perguntas). `marca/marca.md` vence os avisos de clichê da frontend-design: a skill decide o layout, a marca decide cor e fonte.
3. Ler `references/secoes.md` (o que vai em cada bloco) e `references/motion.md` (as regras de movimento).

## 1. Copy → `entregas/pagina-de-vendas.md`

Bloco a bloco, na linguagem do cliente (`pesquisa/cliente.md`), nunca com as palavras a evitar:
1. **Topo:** 3 títulos (dor, resultado, mecanismo), até 12 palavras cada. Escolher 1 e dizer por quê. Subtítulo e botão.
2. **Problema:** a dor nº 1 com a frase real do cliente.
3. **Como funciona:** o mecanismo, etapa por etapa.
4. **O que vai / planos:** o que o cliente leva, por tamanho ou plano. Preço só o que o dono deu.
5. **Provas:** só as que existem (nota no Google, clientes, anos de mercado). Sem prova: bloco fora. **Nunca inventar depoimento.**
6. **Oferta de entrada** e o que a pessoa ganha.
7. **Pedido:** as perguntas que a empresa precisa para fechar (as do mecanismo, 3 a 6).
8. **Onde atende:** cidade, bairro, endereço (se público), horário.
9. **Perguntas frequentes:** as 3 objeções.
10. **Garantia** e **chamada final**.

## 2. Página → `entregas/pagina-de-vendas.html`

Página completa de uma tela só (one-page), não um cartaz. Seções e interações em `references/secoes.md`. Obrigatório:
- **Arquivo único:** CSS e JS dentro dele. De fora, só Google Fonts e o iframe do mapa. Sem foto de banco: ilustração só em SVG desenhado no próprio arquivo, ou fotos reais que o dono pôs em `marca/`.
- **Marca:** cores e fontes de `marca/marca.md` como variáveis no `:root`.
- **Formulário:** escrever a lógica uma vez (a do `formulario.html`, passo 3) e reusar na página, ou embutir com `<iframe src="formulario.html">`. Formulário embutido em passos, validação simples e barra de progresso. O envio monta a mensagem e abre o WhatsApp: `https://wa.me/55<DDD><número>?text=<mensagem codificada>`. Sem número no site ou na memória: `https://wa.me/?text=...` e comentário `<!-- trocar pelo número real -->`.
- **Mapa:** iframe sem chave `https://www.google.com/maps?q=<endereço ou cidade, codificado>&output=embed` com `loading="lazy"` e `title`. Endereço só se for público (site ou Google); sem endereço público, o mapa mostra a cidade. Por trás do iframe, um fundo desenhado com o nome da cidade, para nunca aparecer buraco se estiver offline.
- **Motion com significado** (ver `references/motion.md`): 1 momento orquestrado no topo, dados que se desenham quando entram na tela, resposta a clique. Tudo desliga com `prefers-reduced-motion`.
- **Conteúdo visível sem JavaScript:** a animação é realce, nunca condição para ler.
- Celular primeiro: legível em 390 px sem rolagem para o lado; foco de teclado visível.
- Armadilha: `display:flex` numa classe vence o atributo `hidden`. Pôr `[hidden]{display:none!important}` no CSS.
- Tamanho: página até ~30 KB. Mais que isso gasta o limite do plano sem melhorar a página.
- Dado fictício ou de exemplo (nota, @, número) aparece com a palavra "fictício" ao lado. Preço: só a faixa que o dono deu.

## 3. Formulário → `entregas/formulario.html`

A página só do pedido, para o link da bio e para responder "quanto custa?" no direct. Uma pergunta por tela (estilo Typeform): Enter avança, botão voltar, progresso, resumo final editável e envio para o WhatsApp com a mensagem pronta. Mesma marca, transição entre passos curta (até 300 ms).

## 4. Conferir (obrigatório)

Abrir no navegador (`open` no Mac, `start ""` no Windows). Tirar print no tamanho de celular e de computador:
```bash
npx --yes playwright screenshot --full-page --wait-for-timeout=4000 --viewport-size=390,844 entregas/pagina-de-vendas.html controle/prints/celular.png
npx --yes playwright screenshot --full-page --wait-for-timeout=4000 --viewport-size=1440,900 entregas/pagina-de-vendas.html controle/prints/computador.png
```
Olhar os prints: texto cortado, botão fora da tela, cor ilegível, mapa vazio, seção em branco → corrigir e tirar de novo. Animação de abertura pela metade no print não é bug: não tirar a animação por isso. Conteúdo que só aparece rolando é bug (regra 5 de `references/motion.md`). Sem Node: pedir ao dono para olhar no navegador.

## 5. Atualizar o RESULTADO.html

Trocar `pagina`, `proximos` e `atualizado` seguindo `controle/componentes.md`: `.abas` com três painéis, "No celular" (`.molduras` + `.celular` com a página), "No computador" (`.navegador`) e "Formulário de pedido" (`.celular` com o formulário), mais os botões para abrir cada um. Fechar a seção com um `.bastidor` contando os passos.

## Fechar

Marcar a fase em `controle/progresso.md` e responder no formato do `CLAUDE.md`. Resumo: o título escolhido · o formulário manda para onde. Próximo: `/criar-conteudo` (~8 min).
