---
name: mapear-empresa
description: Use após o /instalar ou quando pedirem /mapear-empresa. Lê só o que é público (site, redes, Google) e monta o raio-x da empresa e da marca (5 min).
---

# /mapear-empresa: o que a internet diz sobre a empresa

Fase 1 do mapa. **Só informação pública.** Enxuto: o arquivo final tem no máximo 40 linhas.

## Pesquisar (dizer em 1 linha: "Lendo o site e as redes da <nome>. Uns 3 min.")

1. Site em `memoria/empresa.md` (se não tiver, perguntar uma vez).
2. Abrir a página inicial e até 3 páginas internas (sobre, produtos/serviços, contato). Se der erro, anotar e seguir.
3. Buscar na web: `"<nome>"`, `"<nome>" instagram`, `"<nome>" avaliações`. Pegar redes, nota no Google e notícias.
4. Marca: cores e fontes do site. Pelo terminal:
   ```bash
   curl -sL -A "Mozilla/5.0" <site> -o pagina.html
   grep -oiE '#[0-9a-f]{6}' pagina.html | sort | uniq -c | sort -rn | head -8
   grep -oiE "font-family:[^;\"]+|fonts.googleapis.com/css[^\"']+" pagina.html | sort -u | head -5
   ```
   Depois apagar o `pagina.html`. Não deu? Cores ficam `[a confirmar]`.
5. O tom de voz do site: 3 adjetivos e 1 frase real.

## Escrever `pesquisa/01-empresa.md`

```markdown
# <Nome>: raio-x público
Fontes: <links> · Data: <AAAA-MM-DD>

## Em uma frase
## O que vende            (lista: produto/serviço → para quem)
## Diferenciais que o site declara   (até 3)
## Provas                 (clientes, números, depoimentos, nota no Google)
## Presença digital       (tabela: site, Instagram, Google, WhatsApp, blog → estado)
## Marca                  (cores, fontes, tom de voz)
## O que o site não diz   (preço? prazo? área de entrega? até 5 lacunas)
```

Tudo com fonte. Sem fonte: `[a confirmar]`.

Se `marca/marca.md` estiver em branco, preencher com as cores e fontes achadas, marcando `[do site — confirmar]`. Se `memoria/preferencias.md` não tiver tom, preencher com o do site, marcando o mesmo.

## Fechar

Ao terminar, marcar a fase em `controle/progresso.md` (`[x]` + data) e responder no formato do `CLAUDE.md` (✓ / resumo / Desafio / Próximo).

- Resumo: o que vende · para quem · 1 diferencial · 1 lacuna.
- Desafio: "Abra o seu site e ache uma coisa que o raio-x mostrou e você nunca tinha notado."
- Próximo: `/mapear-nicho` (~6 min).
