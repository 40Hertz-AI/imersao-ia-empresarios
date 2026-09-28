---
name: criar-conteudo
description: Use após o /mapear-empresa ou quando pedirem /criar-conteudo, carrossel ou posts. Monta pilares, 12 pautas, calendário de 4 semanas e 1 carrossel pronto com a marca (8 min).
---

# /criar-conteudo: o que postar no próximo mês

**Sem perguntas.** Lê `memoria/`, `marca/marca.md`, `pesquisa/` e `entregas/oferta.md` (o que existir). Tom de `memoria/preferencias.md`. Usa a skill `humanizer`, se instalada, nas legendas.

## Montar

1. **4 pilares** tirados das dores (`pesquisa/cliente.md`) e dos espaços vazios (`pesquisa/concorrentes.md`), cada um com objetivo e % do mix (soma 100).
2. **3 novidades reais do setor** (busca na web, com link e data) para as pautas de notícia.
3. **12 pautas** no formato **notícia ou dúvida do cliente × opinião da empresa**. Cada uma: título, pilar, formato (carrossel, reel, post único), primeira frase e chamada final.
4. **Calendário de 4 semanas**, 3 posts por semana, alternando pilares e formatos.
5. **1 carrossel completo** (a pauta mais forte), 6 a 8 lâminas, no arco gancho → problema → método → virada → chamada. Texto de cada lâmina com no máximo 25 palavras. Legenda completa e a palavra para o cliente comentar.
6. **O roteiro de 1 reel** de 30 segundos (gancho de 3 s, 3 pontos, chamada).

## Escrever `entregas/conteudo.md` (até 150 linhas)

Pilares · novidades com link · 12 pautas em tabela · calendário · carrossel lâmina a lâmina + legenda · roteiro do reel.

## Atualizar o RESULTADO.html

Trocar `conteudo`, `proximos` e `atualizado` seguindo `controle/componentes.md`: pilares em `.barras`, o carrossel dentro de `.post` (nome da empresa no `.post-topo`, um `.slide` por lâmina com `<h4>` e `<p>`, legenda em `.post-legenda`) e o calendário em tabela.

## Fechar

Marcar a fase em `controle/progresso.md` e responder no formato do `CLAUDE.md`. Resumo: os 4 pilares em 1 linha · o tema do carrossel.
Desafio: "Poste o carrossel esta semana. Para virar imagem, peça: 'gera as lâminas do carrossel em PNG'."
Próximo: mapa completo. Abra o `RESULTADO.html` do começo ao fim e escolha 1 dos próximos passos para a semana.
