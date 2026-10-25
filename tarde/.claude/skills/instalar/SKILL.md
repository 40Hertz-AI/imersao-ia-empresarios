---
name: instalar
description: Use quando a pessoa abrir a pasta pela primeira vez ou pedir /instalar. Entrevista o dono em 7 perguntas, grava a memória da empresa e cria o RESULTADO.html (6 min). Funciona em qualquer pasta, com ou sem a estrutura do cérebro da empresa.
---

# /instalar: a empresa em 7 perguntas

Primeiro contato da pessoa com a pasta. **Uma pergunta por mensagem, no máximo 3 linhas cada. Nunca mais de 7 perguntas.** Aqui não se pesquisa nada: a pesquisa é o `/mapear-empresa`.

## Antes (em silêncio)

- Se `memoria/empresa.md` já tiver conteúdo: perguntar "Já tem memória aqui. Recomeço ou só completo o que falta?" (não conta como pergunta da entrevista).
- Se existir `.claude/skills/impeccable/scripts/impeccable`: rodar em segundo plano `sh .claude/skills/impeccable/scripts/impeccable engine-probe` (prepara o Impeccable, a skill de design; baixa uns 20 MB uma vez só). No Windows sem `sh`: `.claude\skills\impeccable\scripts\impeccable.cmd engine-probe`. Falhou ou sem internet: seguir sem avisar.
- **Pasta fora da aula** (sem `memoria/`, `marca/` ou `controle/`): criar só o que falta, com os campos de "Arquivos que esta fase cria", lá embaixo. Não avisar nada no começo.

## As 7 perguntas (uma por vez, nesta ordem)

Abrir com 1 linha: "São 7 perguntas rápidas. Responda do seu jeito; 'não sei' também vale."

1. **Empresa e lugar:** "Nome da empresa, site ou @ do Instagram, e a cidade. Vocês atendem só a região ou o Brasil todo?"
2. **Produto e preço:** "Quais são os 3 produtos ou serviços que mais vendem, e o preço de cada um (pode ser uma faixa)?"
3. **Cliente:** "Quem mais compra de vocês e como essa pessoa costuma chegar até vocês (indicação, Instagram, Google, loja, WhatsApp)?"
4. **Equipe:** "Quantas pessoas trabalham aí, quem faz o quê, e qual é o seu papel no dia a dia?"
5. **Financeiro:** "Mais ou menos: faturamento por mês, quantos clientes por mês e a margem. Fica só no seu computador e não aparece no relatório. 'Não sei' é resposta."
6. **Site e marca:** "O que você gosta e o que te incomoda no seu site e no seu Instagram? Tem alguma marca, de qualquer setor, cujo visual você admira?"
7. **Foco:** "Qual é o maior problema da empresa hoje, e onde você quer estar daqui a 12 meses?"

Resposta vaga: pedir **um** exemplo concreto, uma vez, e seguir com o que vier. Se a pessoa responder duas perguntas de uma vez, pular a que já foi respondida. Sem site nem Instagram: seguir, e avisar no fim que o `/mapear-empresa` vai pesquisar pelo nome e pela cidade.

## Gravar

Só o que a pessoa disse. Nada inventado, nada completado com suposição.

| Arquivo | Recebe |
|---|---|
| `memoria/empresa.md` | Perguntas 1, 2, 3, 4 e 6 nos campos do arquivo. "Em uma frase": o que vende, para quem, onde |
| `memoria/numeros.md` | Pergunta 5. Criar o arquivo (ele não vem na pasta, para nunca ir parar no Git) com o título "Números (privado)", os campos Faturamento por mês, Clientes por mês, Ticket médio, Margem, e a seção "O que falta medir". O que faltou: `[não sei ainda]`. **Não calcular** o que o dono não disse (ex.: ticket = faturamento ÷ clientes) |
| `memoria/foco.md` | Pergunta 7 |
| `marca/marca.md` | Da pergunta 6, só "Estilo das imagens": o que o dono gosta, o que evita e a referência que admira. Cores e fontes ficam para o `/mapear-empresa` (skill `marca`). Se a pessoa arrastar logo ou print durante a entrevista, salvar em `marca/` e rodar a skill `marca` no fim (se ela existir) |

### Arquivos que esta fase cria (se não existirem)

- `memoria/empresa.md`: `# Empresa` + campos **Nome:**, **Site / Instagram:**, **Onde fica e onde atende:**, **Em uma frase:** + seções `## Produtos e preços`, `## Cliente e como ele chega`, `## Equipe`, `## Site e marca (o que o dono gosta e o que incomoda)`.
- `memoria/foco.md`: `# Foco de agora` + `## Maior problema hoje`, `## Onde o dono quer estar em 12 meses`, `## Próximas ações`.
- `memoria/preferencias.md`: `# Preferências` + `## Tom de voz`, `## Frases reais da empresa (exemplo)`, `## O que evitar` (vazias: o `/mapear-empresa` preenche).
- `marca/marca.md`: `# Marca` + campos **Cor principal:**, **Cor de destaque (botões):**, **Fundo:**, **Texto:**, **Fonte dos títulos:**, **Fonte do texto:**, **Logo:**, **Estilo das imagens:**.
- `controle/progresso.md`: `# Progresso` + uma linha `- [ ]` por fase: 1 Instalar, 2 Mapear a empresa, 3 Concorrentes, 4 Oferta, 5 Página de vendas, 6 Conteúdo.
- Pasta com Git: se não houver `.gitignore` com `memoria/numeros.md`, acrescentar essa linha (o número do dono não vai para o Git).

## Criar o RESULTADO.html

Só se existir `controle/modelo-resultado.html` (a pasta da aula). Sem ele, pular esta parte.

1. Copiar `controle/modelo-resultado.html` para `RESULTADO.html` na raiz da pasta.
2. Ler `controle/componentes.md` e trocar só estes blocos: `titulo`, `nome`, `capa`, `ficha`, `proximos`, `atualizado`. O bloco `marca` fica com as cores neutras do modelo até o `/mapear-empresa`.
   - `capa`: `<p class="tipo">` cidade e setor · `<h1>` a empresa em 1 frase · `.lede` "Mapa da empresa em construção." (sem contar fases: o contador do menu e a trilha da capa já mostram) · `.numeros` com 2 a 4 números que o dono contou e podem ir para o telão: pessoas na equipe, linhas de produto, anos de mercado, cidades atendidas. Cada um em `<b data-conta>`. **Nada do financeiro.**
   - `ficha`: `<h2>` com a conclusão (ex.: "Uma empresa de 6 pessoas que vive de indicação") · `.ficha` com produtos e preços, onde atende, equipe, como o cliente chega · `.grade g2` com dois cartões: "O que mais incomoda hoje" (cartão `forte`) e "Onde quer chegar em 12 meses".
   - `ficha`: termina com o `.bastidor` (o que a IA fez: entrevistou, gravou, separou o privado; conceito: memória) e o `<p class="base">`.
   - `atualizado`: "fase 1 de 6".
   - `proximos`: as 3 primeiras ações: rodar `/mapear-empresa`, completar o que ficou `[não sei ainda]` em `memoria/numeros.md`, salvar o logo em `marca/logo.png`.
3. Abrir no navegador: `open RESULTADO.html` (Mac), `start "" RESULTADO.html` (Windows) ou `xdg-open RESULTADO.html` (Linux). Se falhar, só dar o caminho.

## Fechar

Marcar a fase em `controle/progresso.md` (`[x]` + data) e responder:

```
✓ Memória da empresa → memoria/
<3 linhas: o que vende · para quem · o problema nº 1>
Abri o RESULTADO.html: a capa e a ficha já estão lá.
Próximo: /mapear-empresa (~10 min)
```

Sem RESULTADO.html (pasta fora da aula), a terceira linha vira: "O relatório visual (RESULTADO.html) só existe na pasta da aula; a memória já vale para as próximas conversas." Se a skill `mapear-empresa` não existir na pasta, a última linha vira: "Próximo: peça o que quiser; eu já sei da empresa."

Se a pasta ainda tiver nome genérico (`imersao-tarde` ou `cerebro-da-empresa`), sugerir em 1 linha renomear para o nome da empresa.
