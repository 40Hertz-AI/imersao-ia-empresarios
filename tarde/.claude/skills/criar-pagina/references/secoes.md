# Seções da página de vendas

Ordem sugerida. Seção sem conteúdo real some (sem prova → sem bloco de provas).

| Seção | O que tem | Interação que ensina algo |
|---|---|---|
| Cabeçalho | Nome ou logo, 3–4 links âncora, botão do pedido | Fixo e discreto; ganha fundo ao rolar |
| Topo | Título escolhido, subtítulo, botão, 1 elemento visual com significado (ex.: o mecanismo desenhando-se, um relógio do prazo, o produto em SVG) | O único momento de abertura orquestrado da página |
| Problema | A frase real do cliente, grande, com a fonte | Nenhuma: frase parada tem mais força |
| Como funciona | As etapas do mecanismo numa linha do tempo | Etapas acendem uma a uma quando entram na tela; clicar numa etapa abre o detalhe |
| O que vai / planos | Tamanhos ou planos lado a lado | Seletor (abas ou controle de quantidade de pessoas/itens) que destaca o plano indicado. Sem inventar preço por plano |
| Provas | Nota no Google, nº de avaliações, anos, clientes | Número conta até o valor quando aparece |
| Oferta de entrada | O primeiro passo fácil | Botão direto para o formulário |
| Pedido | Formulário em passos com as perguntas do mecanismo | Progresso, validação, resumo, envio ao WhatsApp |
| Onde atende | Mapa (iframe Google Maps sem chave) + endereço/horário | Fundo desenhado por trás do iframe |
| Perguntas frequentes | As 3 objeções em `<details>` | Abrir/fechar com altura animada |
| Garantia e chamada final | A garantia honesta e o último botão | — |
| Rodapé | Nome, cidade, contato, Instagram | — |

## Infográficos (quando a página tem dado)

Use o gráfico que responde a pergunta do cliente, não o que parece bonito:
- **Comparar grandezas** (antes × depois, nós × média): barras horizontais.
- **Partes de um todo** (o que vai na cesta, mix): rosca com no máximo 5 fatias.
- **Sequência** (como funciona, prazo): linha do tempo com etapas.
- **Onde** (área de entrega): mapa.
Todo número de infográfico precisa de fonte (do dono, do site ou com link). Sem fonte, não vira gráfico.

## Formulário: a mensagem pronta

```js
const texto = `Olá, <Empresa>! Quero um orçamento.\nEmpresa: ${empresa}\nData: ${data}\nHorário: ${hora}\nPessoas: ${pessoas}\nRestrições: ${restricoes || 'nenhuma'}`;
window.open('https://wa.me/55DDDNUMERO?text=' + encodeURIComponent(texto), '_blank');
```
Campos com `label` visível, `autocomplete` certo, `inputmode="numeric"` para números, data com `type="date"` e mínimo = hoje.
