---
name: criar-pagina
description: Use após o /criar-oferta ou quando pedirem /criar-pagina ou página de vendas. Escreve a copy e gera a página de vendas em HTML com a marca da empresa (8 min).
---

# /criar-pagina: a página de vendas

**Sem perguntas.** Lê `memoria/`, `marca/marca.md`, `pesquisa/cliente.md` e `entregas/oferta.md`. Sem a oferta: avisar em 1 linha e montar a oferta mínima a partir do estudo (proposta de valor + oferta de entrada), anotando isso no topo da copy.

Antes de escrever o HTML, carregar a skill `frontend-design`.

## Copy → `entregas/pagina-de-vendas.md`

Bloco a bloco, na linguagem do cliente (`pesquisa/cliente.md`), nunca com as palavras a evitar:
1. **Topo:** 3 títulos (um pela dor, um pelo resultado, um pelo mecanismo), até 12 palavras cada. Escolher 1 e dizer por quê. Subtítulo e botão.
2. **Problema:** a dor nº 1 com a frase real do cliente.
3. **Como funciona:** o mecanismo, etapa por etapa.
4. **Provas:** só as que existem (nota no Google, clientes, anos de mercado). Sem prova: deixar o bloco de fora.
5. **Oferta de entrada** e o que a pessoa ganha.
6. **Perguntas frequentes:** as 3 objeções.
7. **Garantia** e **chamada final**.

## HTML → `entregas/pagina-de-vendas.html`

- Arquivo único: CSS dentro dele, só Google Fonts de fora, sem imagem externa (logo em `../marca/logo.*` se existir).
- Cores e fontes de `marca/marca.md`. Celular primeiro: legível em 390 px sem rolagem para o lado.
- Botão aponta para o WhatsApp da empresa (`https://wa.me/55...` com mensagem pronta) se o número estiver no site ou na memória. Sem número: `href="#"` e `[a confirmar]` na copy.
- Conferir: abrir no navegador (`open` no Mac, `start ""` no Windows) e, se der, tirar print no tamanho de celular:
  `npx --yes playwright screenshot --full-page --viewport-size=390,844 entregas/pagina-de-vendas.html controle/print-pagina.png`
  Olhar o print: texto cortado, botão fora da tela, cor ilegível → corrigir. Depois apagar o print. Sem Node: pedir ao dono para olhar no navegador.

## Atualizar o RESULTADO.html

Trocar `pagina`, `proximos` e `atualizado` seguindo `controle/componentes.md`: `.molduras` com a página dentro do `.celular` (`<iframe src="entregas/pagina-de-vendas.html">`) e, ao lado, o título escolhido, as 3 variações e o link "Abrir em tela cheia".

## Fechar

Marcar a fase em `controle/progresso.md` e responder no formato do `CLAUDE.md`. Resumo: o título escolhido · para quem é a página. Próximo: `/criar-conteudo` (~8 min).
