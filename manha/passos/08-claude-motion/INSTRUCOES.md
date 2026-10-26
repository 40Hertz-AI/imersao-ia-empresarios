# Passo 8 · Animação curta da Torra Viva: Claude Motion (ou plano B)

**Tempo:** 15 min.
**O que você vai fazer:** criar um vídeo curto (20 segundos) para o Instagram da Torra Viva, com os números das vendas animados.

**A ideia:** o Claude Motion transforma um pedido e os seus arquivos numa animação: texto, números, gráficos e formas se mexendo, como um vídeo curto. Ele não filma nem cria pessoas: escreve a animação como código, por isso dá para mudar um número ou uma frase e o resto fica igual. Exporta em MP4.

**Quem tem:** o Claude Motion saiu em teste (beta) em outubro de 2026, **só nos planos Team e Enterprise**. No Pro e no Max ele não aparece. Não tem? Vá direto ao **plano B**: o resultado é parecido e funciona em qualquer plano.

---

## Caminho A · Claude Motion (planos Team e Enterprise)

1. Abra o [claude.ai](https://claude.ai) e comece uma conversa nova.
2. Chame o Motion de um destes jeitos: digite `/motion` no campo de mensagem; ou escolha **Motion** no botão de tipo de saída do campo de mensagem; ou vá à aba **Artifacts** e escolha um modelo de Motion.
3. **Anexe** `dados/vendas-mensais.csv` e `meu-trabalho/design-system.md` (ou o do gabarito).
4. Cole o prompt:

```
Crie uma animação de 20 segundos, vertical (9:16), para o Instagram da Torra Viva Cafés Especiais.
Cena 1 (0 a 4 s): o nome "Torra Viva" aparece, com grãos de café caindo.
Cena 2 (4 a 10 s): um gráfico de barras que sobe mês a mês com o faturamento do canal B2B Escritórios, de janeiro a setembro de 2026, e uma frase curta dizendo quanto ele cresceu. Use os números do arquivo anexado, sem arredondar para mais.
Cena 3 (10 a 16 s): três frases, uma de cada vez: "Torrado esta semana", "Entregue todo mês", "Máquina emprestada, sem custo".
Cena 4 (16 a 20 s): "Peça o orçamento do seu escritório" e @torraviva.exemplo.
Cores e fontes do design system anexado. Sem pessoas e sem fotos. No canto, pequeno: "dados fictícios de exemplo".
```

5. Ajuste conversando: `deixe a cena 2 mais lenta`, `troque a frase da cena 4`.
6. Para baixar: **Export** (Exportar) → **MP4**. A animação começa privada; para mostrar a alguém, use **Share** (Compartilhar).

## Plano B · Animação em HTML feita no Claude Code (qualquer plano)

No Claude Code, nesta pasta (conversa nova com `/clear`):

```
Crie meu-trabalho/animacao-torra-viva.html: uma animação de 20 segundos em HTML e CSS, num arquivo só, em formato vertical 9:16 que cabe inteira na tela, rodando em loop.
Cena 1 (0 a 4 s): o nome "Torra Viva" aparece, com grãos de café caindo (desenhados em CSS ou SVG).
Cena 2 (4 a 10 s): um gráfico de barras que sobe mês a mês com o faturamento do canal B2B Escritórios de janeiro a setembro de 2026, tirado de dados/vendas-mensais.csv (some as linhas do canal em cada mês), e uma frase curta dizendo quanto ele cresceu.
Cena 3 (10 a 16 s): três frases, uma de cada vez: "Torrado esta semana", "Entregue todo mês", "Máquina emprestada, sem custo".
Cena 4 (16 a 20 s): "Peça o orçamento do seu escritório" e @torraviva.exemplo.
Use as cores e fontes de meu-trabalho/design-system.md. Sem fotos e sem biblioteca de fora. Escreva pequeno, num canto: "dados fictícios de exemplo". Respeite quem prefere menos movimento (prefers-reduced-motion).
```

Abra o arquivo no navegador (Chrome de preferência), em tela cheia (**F11** no Windows, **Ctrl+Cmd+F** no Mac).

**Para virar vídeo** (gravar a tela enquanto a animação roda):
- **Windows:** **Win+Alt+R** começa e para a gravação (Xbox Game Bar); o vídeo vai para Vídeos → Capturas. Ou: Ferramenta de Captura → **Gravar**.
- **Mac:** **Cmd+Shift+5** → **Gravar parte da tela** → selecione a animação → Gravar. Para parar, clique no botão de parar na barra de cima.

## Resultado esperado

- Caminho A: um MP4 de uns 20 segundos.
- Plano B: `meu-trabalho/animacao-torra-viva.html` rodando em loop. A pronta está em `gabarito/08-claude-motion/animacao-torra-viva.html`.

**O que reparar:** a animação usa os números do arquivo (dá para conferir) · animação feita de código muda fácil: um número, uma cor, uma frase · o design system do passo 6 de novo deixou tudo com a mesma cara.

✅ **Pronto quando:** você tem o MP4 ou a animação em HTML. Marque o passo 8 em `progresso.md`. Fim da manhã!
