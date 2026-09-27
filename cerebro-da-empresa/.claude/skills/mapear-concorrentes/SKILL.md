---
name: mapear-concorrentes
description: Use após o /mapear-nicho ou quando pedirem /mapear-concorrentes. Acha 3 a 5 concorrentes, compara e mostra os espaços vazios (7 min).
---

# /mapear-concorrentes: quem disputa o mesmo cliente

Fase 3 do mapa. Lê `pesquisa/01` e `02`. Arquivo final com no máximo 50 linhas.

## Passos

1. Uma pergunta ao dono: "Quem você vê como concorrente? Pode dizer 'não sei'."
2. Buscar na web mais nomes: `"<serviço>" <cidade>`, `"<serviço>" instagram`. Fechar em **3 a 5 concorrentes** (mesmo serviço, mesma região ou canal).
3. Para cada um, abrir o site (e o Instagram, se abrir): promessa, para quem, diferencial, preço (se aparecer), força digital de 1 a 5.
4. Escrever `pesquisa/03-concorrentes.md`:

```markdown
# Concorrentes: <Nome>
Buscas usadas: <...>

## Tabela
| Empresa | Promessa | Para quem | Diferencial | Preço | Digital (1-5) |
(a empresa do dono na primeira linha, em negrito)

## Cada um em 2 linhas   (forte em · fraco em)
## 3 espaços vazios      (o que ninguém faz bem → como a empresa pode ocupar)
## O que dá para aprender (método, nunca copiar identidade)
```

## Fechar

Ao terminar, marcar a fase em `controle/progresso.md` (`[x]` + data) e responder no formato do `CLAUDE.md` (✓ / resumo / Desafio / Próximo).

- Resumo: os concorrentes em 1 linha · o espaço vazio nº 1.
- Desafio: "Quer ir mais fundo? Peça: 'procure uma skill de análise de concorrentes'. A `find-skills` acha uma pronta."
- Próximo: `/mapear-numeros` (~8 min). Avisar: "Daqui em diante é o que só você sabe, e fica só no seu computador."
