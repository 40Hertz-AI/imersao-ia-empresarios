# Cérebro da empresa

Esta pasta é o cérebro da empresa: a memória, a pesquisa, os números, a marca e tudo o que a IA produz para ela. O Claude lê estes arquivos antes de trabalhar. Quanto mais a pasta sabe, melhor ele ajuda.

## Ao começar qualquer conversa

1. Ler `memoria/empresa.md`, `memoria/preferencias.md`, `memoria/foco.md` e `controle/progresso.md`.
2. Se `memoria/empresa.md` estiver vazio: dizer em 1 linha "Comece por `/instalar` (5 min)." e esperar.
3. Não listar o que leu. Usar o contexto naturalmente.

## Como falar (vale para tudo nesta pasta)

- **No máximo 5 linhas por mensagem. Uma pergunta por vez.** Quem usa esta pasta quer ver resultado, não ler.
- O detalhe vai para o arquivo. No chat: o resumo em até 3 linhas e onde abrir.
- Sem elogio, sem preâmbulo, sem repetir o que a pessoa disse.
- Termo técnico, só com tradução na mesma frase.
- Toda fase termina neste formato:
  ```
  ✓ <o que ficou pronto> → <arquivo>
  <resumo em até 3 linhas>
  Desafio: <1 linha>
  Próximo: /<comando> (~N min)
  ```

## As pastas

| Pasta | O que guarda |
|---|---|
| `memoria/` | Quem é a empresa, como ela fala, o foco de agora |
| `controle/` | `progresso.md`: em que fase do mapa a empresa está |
| `pesquisa/` | O que é público: empresa, nicho, concorrentes |
| `negocio/` | O que só o dono sabe: números, comercial, equipe, oferta |
| `marca/` | Cores, fontes, logo, tom de voz |
| `conteudo/` | O que a IA produz: propostas, carrosséis, apresentações |
| `dados/` | Planilhas e PDFs que o dono solta aqui para análise |

## A trilha (o mapa da empresa)

| # | Comando | Sai com |
|---|---|---|
| 0 | `/instalar` | `memoria/` preenchida |
| 1 | `/mapear-empresa` | `pesquisa/01-empresa.md` + `marca/marca.md` |
| 2 | `/mapear-nicho` | `pesquisa/02-nicho.md` |
| 3 | `/mapear-concorrentes` | `pesquisa/03-concorrentes.md` |
| 4 | `/mapear-numeros` | `negocio/04-numeros.md` |
| 5 | `/mapear-comercial` | `negocio/05-comercial.md` |
| 6 | `/mapear-equipe` | `negocio/06-equipe.md` |
| 7 | `/criar-oferta` | `negocio/07-oferta.md` (oferta + playbook de vendas) |
| 8 | `/mapa-completo` | `MAPA.html`: a empresa inteira numa página |

Entregas, a qualquer momento depois da fase 3: `/criar-proposta`, `/criar-carrossel`, `/criar-slides`.

Quando a pessoa perguntar "e agora?", "por onde começo?" ou "o que falta?": ler `controle/progresso.md` e apontar a próxima fase em 1 linha. Se pular uma fase, tudo bem: cada skill usa o que existir e marca o resto como `[a confirmar]`.

## Regras

- **Não inventar.** Toda informação sobre a empresa vem do site, de busca (com o link) ou do dono. Sem fonte: `[a confirmar]`. Número do dono nunca é estimado pela IA.
- **Privado fica no computador.** `negocio/` e `dados/` têm números e pessoas da empresa: nunca publicar, enviar ou subir para lugar público sem o dono pedir.
- **Toda fase atualiza o controle:** ao terminar, marcar `[x]` e a data na linha da fase em `controle/progresso.md`.
- **HTML sempre com a marca:** para qualquer HTML (proposta, carrossel, slides, mapa), usar a skill `frontend-design` se estiver instalada e as cores e fontes de `marca/marca.md`.
- **Aprender com correção:** quando o dono corrigir algo que vale para sempre ("na verdade é assim", "não faça mais isso"), perguntar "Salvo isso na memória?" e, se sim, acrescentar 1 linha no arquivo certo de `memoria/`.
- **Skill nova:** se uma tarefa se repetir, oferecer "Isso pode virar uma skill. Quer que eu crie?" e usar a `skill-creator`, salvando em `.claude/skills/`.
