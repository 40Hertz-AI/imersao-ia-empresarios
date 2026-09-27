---
name: mapear-nicho
description: Use após o /mapear-empresa ou quando pedirem /mapear-nicho. Define o nicho, o cliente ideal, as dores e como o cliente fala (6 min).
---

# /mapear-nicho: quem é o cliente e o que dói nele

Fase 2 do mapa. Lê `pesquisa/01-empresa.md` e `memoria/`. Arquivo final com no máximo 50 linhas.

## Passos

1. Uma pergunta ao dono: "Quem é o seu melhor cliente hoje? Descreva um de verdade (sem nome)."
2. Nicho em 1 frase: **setor + tipo de cliente + região**.
3. Buscar frases reais de clientes do setor (pelo menos 3 buscas):
   - `site:reclameaqui.com.br <tipo de serviço>`
   - avaliações no Google de empresas do mesmo ramo
   - `"<serviço>" como escolher` ou perguntas em fóruns
4. Escrever `pesquisa/02-nicho.md`:

```markdown
# Nicho e cliente ideal: <Nome>

## Nicho em uma frase
## Cliente ideal          (tabela curta: quem é, porte/perfil, quem decide, quanto gasta [a confirmar], onde encontrar)
## Quem NÃO é cliente     (2 linhas)
## 3 dores                (cada uma: o que é · frase real do cliente entre aspas · link da fonte)
## Como o cliente fala    (8 palavras que ele usa · 3 para evitar)
## Quando ele procura     (3 momentos que fazem o cliente sair buscando)
## 3 objeções             (a frase dele → a resposta)
```

Sem frase real depois de 3 buscas: escrever a frase provável e marcar `(inferida)`. No máximo 1 das 3 dores pode ser inferida.

## Fechar

Ao terminar, marcar a fase em `controle/progresso.md` (`[x]` + data) e responder no formato do `CLAUDE.md` (✓ / resumo / Desafio / Próximo).

- Resumo: nicho · cliente ideal · dor nº 1 com a frase real.
- Desafio: "Leia as 3 dores. Qual delas o seu site não responde?"
- Próximo: `/mapear-concorrentes` (~7 min).
