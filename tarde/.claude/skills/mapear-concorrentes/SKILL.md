---
name: mapear-concorrentes
description: Use após o /mapear-empresa ou quando pedirem /mapear-concorrentes. Acha 4 a 6 concorrentes, compara e mostra os espaços vazios que a empresa pode ocupar (6 min). Funciona em qualquer pasta.
---

# /mapear-concorrentes: contra quem você disputa o cliente

**Sem perguntas.** Lê `memoria/`, `pesquisa/empresa.md`, `pesquisa/mercado.md` e `pesquisa/cliente.md` (o que existir). Se `pesquisa/` estiver vazia, avisar em 1 linha que o resultado sai melhor depois do `/mapear-empresa` e seguir mesmo assim com a memória.

Dizer em 1 linha: "Procurando os concorrentes da <nome>. Uns 6 min."

## Pasta fora da aula

- Sem `memoria/empresa.md` (ou vazio): perguntar **numa mensagem só** "Para achar os concorrentes, me diga: nome da empresa, site ou @, cidade, o que vende e para quem, e os concorrentes que você já conhece." Gravar em `memoria/empresa.md` (criar a pasta) e seguir.
- Sem `RESULTADO.html` ou `controle/`: pular o relatório e o progresso. No fechamento, trocar a linha do RESULTADO por "O mapa completo está em pesquisa/concorrentes.md." e citar no "Próximo" só os comandos que existem em `.claude/skills/`.

## Pesquisar

1. Montar a lista de **4 a 6 concorrentes diretos** (mesmo produto, mesma região ou mesmo canal). Fontes: quem apareceu nas buscas de `pesquisa/mercado.md`, buscas `"<produto>" <cidade>` e `"<produto>" site:instagram.com`, e concorrentes que o dono citou. Se o dono citou, entra.
2. Para cada um: abrir o site (home + 1 página: sobre, produtos ou depoimentos). Registrar: promessa principal, para quem, diferencial, preço se visível, chamada para ação, provas (nota no Google, depoimentos, clientes), canais. Sem site: usar Instagram, Linktree, Google Maps, iFood ou guias (Tripadvisor, Restaurant Guru). Página que não abre: anotar e seguir.
3. **Força digital de 1 a 5**, mesma régua para todos, inclusive a empresa: +1 site que funciona no celular · +1 preço ou orçamento fácil de achar · +1 prova social visível · +1 Instagram com post nos últimos 30 dias · +1 aparece nas buscas de compra. Critério que não deu para checar (ex.: Instagram bloqueado) não soma para ninguém, e a nota diz isso.
4. **Mapa de posicionamento:** escolher 2 eixos que o cliente dessa categoria valoriza (ex.: preço × atendimento, pronta-entrega × personalizado). Posicionar todos, de 0 a 100 em cada eixo, com a justificativa em 1 linha por empresa.
5. **Espaços vazios (3 a 4):** o que ninguém faz ou faz mal e a empresa poderia ocupar, cada um ligado a uma dor de `pesquisa/cliente.md`.
6. **O que aprender de método** (nunca de identidade): 3 coisas que os concorrentes fazem bem.

## Escrever `pesquisa/concorrentes.md` (até 100 linhas)

```markdown
# Concorrentes: <Nome>
Fontes: <links> · Data: <AAAA-MM-DD>

## Em uma frase
## Tabela comparativa     (concorrente · promessa · público · diferencial · preço · prova · força 1–5)
## Mapa de posicionamento (eixos, notas e 1 linha de justificativa por empresa)
## Espaços vazios         (3–4, cada um com a dor que resolve)
## O que dá para aprender com eles (método, não identidade)
```

Tudo com link. Sem fonte: `[a confirmar]`.

## Atualizar o RESULTADO.html

Se existir. Trocar os blocos `concorrentes`, `proximos` e `atualizado` seguindo `controle/componentes.md`: tabela com a linha `nos`, `.barras` de força digital, `.mapa` 2x2 e os espaços vazios em cartões (o mais promissor em cartão `forte`). Acrescentar em `memoria/foco.md` (criar se não existir) → "Próximas ações" a ação do espaço vazio principal, na posição da prioridade dela (o bloco `proximos` mostra as 3 primeiras).

## Fechar

Marcar a fase em `controle/progresso.md` (se existir) e responder:

```
✓ Concorrentes → pesquisa/concorrentes.md
Mais forte: <concorrente, em 1 linha> · Espaço vazio nº 1: <1 linha>
Atualize o RESULTADO.html: a seção Concorrentes apareceu.
Falta confirmar: <o que ficou [a confirmar]; omitir se nada>
Próximo: /criar-oferta (~6 min)
```
