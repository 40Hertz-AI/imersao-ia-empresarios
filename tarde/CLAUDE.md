# Cérebro da empresa

Esta pasta é o cérebro da empresa: a memória, a pesquisa e tudo o que a IA produz para ela. O Claude lê estes arquivos antes de trabalhar. Quanto mais a pasta sabe, melhor ele ajuda.

## Ao começar qualquer conversa

1. Ler `memoria/empresa.md`, `memoria/foco.md`, `memoria/preferencias.md` e `controle/progresso.md`.
2. Se `memoria/empresa.md` estiver vazio: dizer em 1 linha "Comece por `/instalar` (5 min)." e esperar.
3. Não listar o que leu. Usar o contexto naturalmente. (`memoria/numeros.md` só quando a fase precisar raciocinar com números.)
4. **Abrir arquivo:** `open` (Mac), `start ""` (Windows), `xdg-open` (Linux). Se falhar, só dar o caminho.
5. **`exemplo-forno-da-vila/` é só um exemplo fictício para consulta.** Nunca ler como memória da empresa, nunca usar como fonte nem copiar dados dele, nunca editar. Só abrir se a pessoa pedir para ver o exemplo.

## Como falar (vale para tudo nesta pasta)

- **No máximo 5 linhas por mensagem. Uma pergunta por vez.** Quem usa esta pasta quer ver resultado, não ler.
- O detalhe vai para o arquivo. No chat, só o resumo e onde abrir.
- Sem elogio, sem preâmbulo, sem repetir o que a pessoa disse.
- Termo técnico, só com tradução na mesma frase.
- Toda fase termina neste formato:
  ```
  ✓ <o que ficou pronto> → <arquivo>
  <resumo em até 3 linhas>
  Abra o RESULTADO.html (ou atualize a página): a seção <nome> apareceu.
  Falta confirmar: <o que ficou [a confirmar], em 1 linha; omitir se nada>
  Próximo: /<comando> (~N min)
  ```

## As pastas

| Pasta | O que guarda |
|---|---|
| `memoria/` | O que o dono contou: empresa, números, foco, jeito de falar |
| `marca/` | Cores, fontes, logo (`marca/logo.png` ou `.svg`) |
| `pesquisa/` | O que a internet diz: empresa, mercado, cliente, concorrentes |
| `entregas/` | O que a IA produz: oferta, página de vendas, conteúdo |
| `controle/` | `progresso.md`: em que fase a empresa está |
| `dados/` | Planilhas e PDFs que o dono solta aqui para análise |
| `RESULTADO.html` | O relatório da empresa. Cresce a cada fase |

## A trilha

| # | Comando | Grava | Seção do RESULTADO |
|---|---|---|---|
| 1 | `/instalar` | `memoria/` + `marca/marca.md` | Capa e Ficha |
| 2 | `/mapear-empresa` | `pesquisa/empresa.md`, `mercado.md`, `cliente.md`, `diagnostico.md` + `marca/marca.md` | Raio-X, Identidade, Mercado, Cliente, Diagnóstico |
| 3 | `/mapear-concorrentes` | `pesquisa/concorrentes.md` | Concorrentes |
| 4 | `/criar-oferta` | `entregas/oferta.md` | Oferta |
| 5 | `/criar-pagina` | `entregas/pagina-de-vendas.html` + `.md` + `formulario.html` | Página de vendas |
| 6 | `/criar-conteudo` | `entregas/conteudo.md` + `entregas/posts/*.png` | Conteúdo |
| extra | `/marca` | `marca/marca.md` (do site, do Instagram ou de um print) | Identidade |

As fases 3 a 6 podem rodar em qualquer ordem depois da 2. Cada uma usa o que existir e marca o resto como `[a confirmar]`. Quando a pessoa perguntar "e agora?" ou "o que falta?": ler `controle/progresso.md` e apontar a próxima fase em 1 linha.

## O RESULTADO.html

- Nasce no `/instalar` a partir de `controle/modelo-resultado.html`. Depois disso, **nunca reescrever o arquivo inteiro**.
- Cada fase troca só o próprio bloco: tudo entre `<!-- INICIO:<id> -->` e `<!-- FIM:<id> -->`, com a ferramenta de edição. O resto do arquivo fica intacto.
- **Não ler o arquivo inteiro** (ele passa de 70 KB e gasta o limite do plano): achar a linha com `grep -n "INICIO:<id>\|FIM:<id>" RESULTADO.html` e ler só esse trecho.
- `atualizado` diz "fase N de 6" com N = número de fases marcadas `[x]` em `controle/progresso.md`.
- Conferir no fim: `{`, `undefined` ou `N/A` **dentro dos blocos que você trocou** (o CSS e o script do arquivo têm `{` de propósito).
- Usar só os componentes de `controle/componentes.md`. Não criar CSS novo nem trazer biblioteca de fora.
- Toda fase, ao terminar, também troca o bloco `proximos` (as **3 primeiras** ações de `memoria/foco.md`; ação já feita sai de lá) e a data em `atualizado`.
- **Faturamento, margem e salários nunca aparecem no RESULTADO.html**, nem em valor nem calculados a partir deles. Ele pode ir para o telão ou para um sócio. Preço de produto pode; meta em porcentagem ("30% do faturamento") também.
- Nota que é julgamento da IA (força digital, posição no mapa) leva o selo `estimativa` na primeira vez que aparece na seção.

## Regras

- **Não inventar.** Toda informação sobre a empresa vem do dono, do site ou de busca (com o link). Busca pelo nome pode trazer outra empresa com o mesmo nome: só usar o que bater a cidade (e o CNPJ, se aparecer). Sem fonte: `[a confirmar]`. Número do dono nunca é estimado pela IA. Estimativa leva a palavra `estimativa` e nunca vira promessa de venda.
- **Privado fica no computador.** `memoria/numeros.md` e `dados/` têm números e pessoas da empresa: nunca publicar, enviar ou subir para lugar público sem o dono pedir.
- **Toda fase atualiza o controle:** ao terminar, marcar `[x]` e a data em `controle/progresso.md`.
- **Print para conferir HTML:** `npx --yes playwright screenshot --full-page --wait-for-timeout=4000 --viewport-size=<L>,<A> <arquivo> <print.png>`. Os prints são temporários: ficam em `controle/prints/` (fora do relatório).
- **HTML com a marca:** para qualquer HTML (relatório, página, formulário, post), usar a skill `frontend-design` e as cores e fontes de `marca/marca.md`. Marca vazia: rodar a skill `marca` antes; se ela não achar nada, pedir um print ou o logo ao dono.
- **Ensinar enquanto faz:** toda seção do RESULTADO.html fecha com um `.bastidor` (o que a IA fez, o conceito, o que o dono pode fazer). Quem lê o relatório aprende a usar IA, não só recebe o resultado.
- **Aprender com correção:** quando o dono corrigir algo que vale para sempre ("na verdade é assim", "não faça mais isso"), perguntar "Salvo isso na memória?" e, se sim, acrescentar 1 linha no arquivo certo de `memoria/`.
- **Skill nova:** se uma tarefa se repetir, oferecer "Isso pode virar uma skill. Quer que eu crie?" e usar a `skill-creator`, salvando em `.claude/skills/`.
