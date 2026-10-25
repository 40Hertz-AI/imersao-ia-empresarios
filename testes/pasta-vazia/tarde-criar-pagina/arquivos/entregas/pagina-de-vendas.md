# Página de vendas — Padaria Trigo Azul

> **Aviso:** não havia `entregas/oferta.md` nem `pesquisa/cliente.md`. A oferta mínima abaixo foi montada só com o que o dono informou (`memoria/empresa.md`). Itens marcados **[a confirmar]** precisam do OK do dono.

**Oferta mínima**
- **Proposta de valor:** café da manhã de padaria de bairro, com pão de fermentação natural, entregue no seu escritório no Cambuí. R$ 35 por pessoa e você sabe o total antes de pedir.
- **Oferta de entrada:** orçamento na hora pelo WhatsApp. Você manda data, número de pessoas e endereço; a padaria confirma.

Foco da página: **café da manhã para empresas** (objetivo do dono). Pão e bolo entram como "também tem".

---

## 1. Topo
Títulos (até 12 palavras):
1. **Dor:** "Reunião cedo e ninguém comeu? A gente resolve o café." (9)
2. **Resultado:** "Seu time começa o dia bem alimentado, sem você correr atrás." (11)
3. **Mecanismo:** "Café da manhã com pão de fermentação natural, entregue no escritório." (11)

**Escolhido: o 3 (mecanismo).** O cliente-alvo (escritórios do Cambuí) já tem as padarias grandes por perto; o que diferencia a Trigo Azul é o pão de fermentação natural feito por uma padaria de bairro. O título conta isso de cara e já diz onde chega (no escritório).

- **Subtítulo:** R$ 35 por pessoa, com o total na sua frente antes de pedir. Você diz a data, quantas pessoas e o endereço. A gente cuida do resto.
- **Botão:** Montar meu pedido

## 2. Problema
> "Café da manhã para a equipe é caro."

É a frase que a padaria mais ouve. E faz sentido: quando o preço só aparece depois de três mensagens, tudo parece caro. Aqui você vê o valor por pessoa e o total antes de pedir.

## 3. Como funciona
1. **Você conta:** data, número de pessoas e endereço do escritório.
2. **A gente confirma** pelo WhatsApp: total e horário de entrega [a confirmar: prazo de resposta].
3. **Pão no forno:** fermentação natural, feito na padaria do bairro.
4. **Chega no seu escritório**, pronto para servir.

## 4. O que vai / planos
- **Café da manhã para empresas — R$ 35 por pessoa.** Calculadora: escolha o número de pessoas e veja o total (pessoas × R$ 35). Itens do cardápio [a confirmar].
- **Também tem:** pão de fermentação natural (R$ 24) e bolo inteiro (R$ 70).
- Sem planos por tamanho: o dono deu só o preço por pessoa.

## 5. Provas
**Bloco fora.** Não há nota no Google, depoimentos nem tempo de mercado informados. Nada foi inventado.

## 6. Oferta de entrada
**Orçamento na hora, sem compromisso.** Responda 4 perguntas, a mensagem chega pronta no WhatsApp da padaria e você só confirma se gostar do total.

## 7. Pedido (perguntas do formulário)
1. Seu nome e o nome da empresa
2. Data do café da manhã
3. Número de pessoas (mostra o total na hora)
4. Endereço de entrega
5. Alguma observação? (restrição alimentar, horário) — opcional

## 8. Onde atende
Cambuí, Campinas (SP). Endereço da padaria não é público: o mapa mostra o bairro. Horário de funcionamento [a confirmar]. Área de entrega: escritórios da região [a confirmar: até onde entrega].

## 9. Perguntas frequentes
1. **"É caro?"** R$ 35 por pessoa, e você vê o total antes de pedir. Para 10 pessoas, R$ 350. É pão de fermentação natural feito no bairro, não pão de saco.
2. **"Por que não pedir na padaria grande do bairro?"** Aqui você fala direto com quem faz o pão, pelo WhatsApp, e o pedido é montado para o seu time.
3. **"Preciso pedir com quanta antecedência?"** Mande a data no formulário; a padaria confirma se dá para atender [a confirmar: antecedência mínima].

## 10. Garantia e chamada final
- **Garantia [a confirmar]:** você só paga depois de confirmar tudo (total, data e horário) pelo WhatsApp. Sem surpresa no valor.
- **Chamada final:** "Sua próxima reunião começa com café de verdade." Botão: Montar meu pedido.

---

## Plano de design

- **Tokens:** cores e fontes de `marca/marca.md` [sugestão] no `:root` (`--azul`, `--trigo`, `--creme`, `--tinta`, `--acao`; Fraunces nos títulos, Work Sans no texto). Escala de tipo fluida com `clamp()`; espaçamento em múltiplos de 8 px; cantos 14 px.
- **Layout:** celular primeiro, uma coluna; em ≥ 900 px o topo vira duas colunas (texto + pão em SVG). Problema em faixa azul com a frase grande. Como funciona como linha do tempo vertical no celular e horizontal no computador. Calculadora em cartão creme com o total em destaque.
- **Visual com significado:** pão de fermentação natural desenhado em SVG; o corte da casca (a "orelha" do pão) se desenha na abertura, com um ramo de trigo azul.
- **Motion:** 1 abertura (título em sequência + corte do pão desenhando); etapas acendem uma a uma ao entrar na tela; clique na etapa abre o detalhe; calculadora responde na hora; FAQ em `<details>`. Tudo desliga com `prefers-reduced-motion`. Estado inicial só com `.js`.
- **Formulário:** embutido via `<iframe src="formulario.html">` (lógica escrita uma vez). A calculadora manda o número de pessoas para o formulário (`postMessage`).
- **Crítica pós-print:** ver conferência no fechamento.
