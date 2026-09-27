---
name: criar-slides
description: Use quando pedirem apresentação da empresa ou /criar-slides. Gera uma apresentação institucional de 10 slides a partir do mapa, com a marca (8 min).
---

# /criar-slides: a apresentação da empresa

Entrega. Lê o mapa inteiro e `marca/marca.md`. Usa `frontend-design` e, se instalada, a `pptx` para gerar também o PowerPoint.

## Passos

1. Uma pergunta: "Para quem é a apresentação? (cliente, investidor, equipe nova, parceiro)"
2. 10 slides: capa · quem somos (01) · o problema do cliente (02) · como resolvemos (07) · o que nos diferencia (03) · como funciona · provas · números que podem ser mostrados (só com o ok do dono) · próximos passos · contato.
3. Gerar `conteudo/slides-<publico>/slides.html` (16:9, setas do teclado para passar) com a marca.
4. Se a skill `pptx` estiver instalada: também `slides.pptx`. Se o Google estiver conectado: oferecer subir no Google Apresentações e devolver o link.

**Número de `negocio/04` só entra se o dono disser que pode.**

Registrar em `controle/progresso.md`, em "Entregas feitas".

## Fechar

"✓ Apresentação → `conteudo/slides-<publico>/`" + 1 linha + "Desafio: apresente o slide 3 em voz alta. Ficou claro em 30 segundos?"
