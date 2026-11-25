---
name: criar-oferta
description: Use após o /mapear-empresa ou quando pedirem /criar-oferta. Monta proposta de valor, oferta principal, oferta de entrada e o roteiro de venda a partir do estudo (6 min). Funciona em qualquer pasta.
---

# /criar-oferta: o que vender e como falar

**Sem perguntas.** O que o dono quer vender vem de `memoria/foco.md` (meta de 12 meses) e dos produtos de `memoria/empresa.md`. Lê tudo o que existir em `memoria/` e `pesquisa/`.

## Pasta fora da aula

- Sem `memoria/empresa.md` (ou vazio) e sem outro arquivo que descreva a empresa: perguntar **numa mensagem só** "Para montar a oferta, me diga: nome da empresa, o que vende (com preço ou faixa), para quem, o que mais quer vender nos próximos meses e a objeção que você mais ouve." Gravar em `memoria/empresa.md` e `memoria/foco.md` (criar as pastas) e seguir.
- Sem `pesquisa/`: montar com o que a pessoa contou e escrever no topo do arquivo "Sem estudo de cliente e concorrentes: tudo aqui é hipótese."
- Sem `RESULTADO.html` ou `controle/`: pular o relatório e o progresso; no fechamento, citar só os comandos que existem em `.claude/skills/`.

## Montar

1. **Proposta de valor** em 1 frase: "Para <quem>, a <empresa> <faz o quê>, diferente porque <espaço vazio ou diferencial real>".
2. **Promessa** em até 10 palavras. Número só se for dado real (do dono ou do site). Estimativa nunca vira promessa.
3. **Mecanismo:** o jeito da empresa de resolver a dor principal, em 3 a 4 etapas com nome. Dar 3 opções de nome e escolher 1.
4. **Oferta principal:** o produto que a empresa mais quer vender · para quem · o que inclui · preço do `/instalar` (sem preço: `[a confirmar]` no markdown; no HTML, a faixa que o dono deu ou "preço fechado no orçamento").
5. **Oferta de entrada:** o primeiro passo fácil, barato ou grátis (amostra, diagnóstico, visita, orçamento em X horas), pensado para derrubar a objeção nº 1 de `pesquisa/cliente.md`.
6. **Redutor de risco:** uma garantia honesta, que a empresa consiga cumprir.
7. **Roteiro de venda:** abertura · 3 perguntas para o cliente · como apresentar · resposta às 3 objeções · 3 mensagens de follow-up no WhatsApp (dia 1, 3 e 7), no tom de `memoria/preferencias.md`.
8. **Provas que faltam:** o que construir para a promessa ser crível e onde conseguir.

## Escrever `entregas/oferta.md` (até 80 linhas)

No topo: `> Hipótese montada a partir do estudo. Só vale depois que você confirmar que consegue entregar.` Cada escolha aponta de onde veio (dor, espaço vazio, gargalo).

## Atualizar o RESULTADO.html

Se existir. Trocar `oferta`, `proximos` e `atualizado` seguindo `controle/componentes.md`: proposta de valor em `.destaque`, promessa, mecanismo em `.etapas`, oferta principal × de entrada em `.grade g2`, garantia em parágrafo ou em `.comparar` (sem × com a garantia), selo `<span class="selo atencao">hipótese a validar</span>`. O roteiro de venda fica só no markdown (o relatório pode ir para o telão).

## Fechar

Marcar a fase em `controle/progresso.md` (se existir) e responder:

```
✓ Oferta → entregas/oferta.md
Proposta de valor: <1 linha> · Oferta de entrada: <1 linha>
Atualize o RESULTADO.html: a seção Oferta apareceu.
Falta confirmar: <o que ficou [a confirmar]; omitir se nada>
Próximo: /criar-pagina (~10 min)
```
