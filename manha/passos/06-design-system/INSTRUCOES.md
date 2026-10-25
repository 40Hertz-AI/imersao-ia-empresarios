# Passo 6 · Design system a partir de uma imagem

**Tempo:** 15 min.
**O que você vai fazer:** escolher um visual de que você gosta, tirar um print e pedir ao Claude para transformar em `design-system.md`, o "manual visual" da Torra Viva. No passo 7, todas as páginas usam esse arquivo.

**A ideia:** design system é a lista de cores, fontes e estilos que se repetem em tudo o que a marca faz. Escrito num arquivo, a IA segue sempre o mesmo padrão, em qualquer página.

---

## 1. Escolher a referência (5 min)

**Caminho A · Dribbble**
1. Abra [dribbble.com/search/coffee-branding](https://dribbble.com/search/coffee-branding) (ou pesquise "coffee website").
2. Escolha um trabalho com cores e letras de que você gosta. É só inspiração: não vamos copiar a marca de ninguém.
3. Tire um print e salve dentro da pasta `meu-trabalho/` com o nome `minha-referencia.png`:
   - **Windows:** **Win+Shift+S** → selecione a área → clique na notificação que aparece → **Salvar** (disquete ou Ctrl+S) → escolha a pasta `meu-trabalho`.
   - **Mac:** **Cmd+Shift+4** → selecione a área. O print vai para a Mesa; arraste para `meu-trabalho/` e renomeie para `minha-referencia.png`.

**Caminho B · Sem Dribbble (plano B)**
Use a imagem desta pasta: `passos/06-design-system/referencia-design.png`. É um mockup feito para a aula (não é de ninguém).

## 2. O prompt (5 min)

Troque o caminho da imagem se usou o caminho A (`meu-trabalho/minha-referencia.png`):

```
Olhe a imagem passos/06-design-system/referencia-design.png e crie o design system da Torra Viva a partir dela.
Quero: as cores com nome, código hex e para que serve cada uma; as fontes do Google Fonts para títulos e texto, com tamanhos; espaçamentos e cantos arredondados; como são os botões, os cartões e os selos; e o estilo visual em 3 palavras.
Use a imagem só como inspiração de estilo, sem copiar marca ou texto de ninguém. Confira se o texto tem contraste suficiente com o fundo.
Salve em meu-trabalho/design-system.md e coloque no fim um bloco de CSS com as variáveis (:root) para eu reaproveitar nas páginas.
```

No app do Claude também dá para colar o print direto na conversa (Ctrl+V ou Cmd+V). No terminal, o jeito mais seguro é salvar a imagem na pasta e escrever o caminho, como acima. Outro jeito: arrastar o arquivo da imagem para dentro da janela do terminal.

## 3. Conferir (5 min)

Abra `meu-trabalho/design-system.md`. Pergunte o que não entendeu:

```
/eli5 o que é contraste de cor e por que ele importa
```

Não gostou de uma cor? Peça: `troque a cor de destaque por um verde mais escuro e atualize o design-system.md`.

## Resultado esperado

O arquivo `meu-trabalho/design-system.md` com cores (hex), fontes, espaçamentos, componentes e o bloco `:root`. O gerado a partir de `referencia-design.png` está em `gabarito/06-design-system/design-system.md`.

**O que reparar:** a IA "lê" imagens · o arquivo vira contexto para o passo 7 · um design system curto e claro vale mais que um longo.

✅ **Pronto quando:** `meu-trabalho/design-system.md` existe. Marque o passo 6 em `progresso.md`.
