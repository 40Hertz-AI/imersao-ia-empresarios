# Página de vendas: Torra Viva para escritórios

Data: 25/10/2026 · Fontes: `memoria/`, `marca/marca.md`, `pesquisa/cliente.md`, `entregas/oferta.md`
**Foco da página:** a oferta principal (plano de café para escritório) com a oferta de entrada (degustação na copa). O Clube aparece como saída para quem quer café em casa.
**Trava (de `oferta.md`):** só divulgar a página para escritório novo depois que o calendário fixo de torra estiver rodando.

## 1. Topo

Três títulos:
1. **Dor:** "Acabou o café da copa de novo? Aqui tem dia marcado." (10 palavras)
2. **Resultado:** "Café torrado na semana, na copa no dia marcado." (9 palavras)
3. **Mecanismo:** "Seu escritório ganha um dia fixo no nosso calendário de torra." (11 palavras)

**Escolhido: 2 (resultado).** É a promessa da oferta e ecoa a frase real do site novo ("Torrado esta semana, na sua xícara na próxima."). Junta as duas coisas que o escritório não acha nos concorrentes: café fresco e dia certo. O título 1 fica para anúncio, em que a dor chama mais atenção.

- **Subtítulo:** Cafés especiais de pequenos produtores do Sul de Minas, torrados em lotes pequenos em Mogi das Cruzes e entregues no escritório no dia combinado, com aviso na véspera.
- **Botão:** Pedir a degustação na copa
- **Botão secundário:** Ver como funciona

## 2. Problema

> "Já é a segunda vez que o café não chega e o pessoal fica reclamando comigo na copa."
Frase inferida pela IA a partir das reclamações de atraso ("MEGA ATRASO NA ENTREGA", Reclame Aqui). Na página aparece como "o que a gente ouve de quem cuida da copa", sem nome e sem parecer depoimento.

Texto: Quem cuida da copa não quer pensar em café. Quer que ele chegue. Café de cápsula pede máquina emprestada e cota mínima. Café de mercado chega sem data de torra.

## 3. Como funciona: a Torra Marcada

1. **Prova na copa.** A Marina leva 2 cafés da torra da semana para a equipe provar, sem custo. Vocês escolhem o café.
2. **Dia combinado.** O escritório ganha um dia fixo de entrega no calendário de torra.
3. **Torra da semana.** O lote é torrado na semana da entrega, com a data de torra no pacote.
4. **Aviso e reserva.** Mensagem na véspera e 1 semana de café de reserva na copa.

## 4. O que vai

**Para o escritório (plano):** café em grão ou moído para o método da copa (coado, prensa, máquina) · entrega própria em dia fixo · aviso na véspera · 1 semana de reserva · data de torra em cada pacote · troca de café quando a equipe quiser variar.
**Preço:** a partir de R$ 98 o kg (dado da dona). Preço por xícara: `[a confirmar]` (falta saber quantos gramas por xícara).
**Para casa:** Clube Torra Viva, R$ 79 por mês, entrega no Brasil todo.

## 5. Provas

Bloco fora: não há nota no Google, depoimento nem contagem de escritórios atendidos. Quando existirem (ver "Provas que faltam" em `oferta.md`), entram aqui.

## 6. Oferta de entrada

**Degustação na copa + 1º mês sem amarra.** A Marina leva 2 cafés para a equipe provar. Se gostarem, o primeiro mês entra no calendário, sem multa para sair.

## 7. Pedido (formulário)

1. Seu nome e o nome da empresa
2. Em que cidade fica o escritório (Mogi das Cruzes · outra cidade do Alto Tietê · São Paulo capital · outro lugar)
3. Quantas pessoas tomam café (até 10 · 10 a 30 · 30 a 60 · mais de 60)
4. Como o café é feito na copa (coado · prensa · máquina de grão · ainda não sei)
5. Melhor dia para a degustação (data, a partir de hoje)

Fora da área (outro lugar): aviso de que o plano para escritório atende só Alto Tietê e SP, e convite para o Clube.

## 8. Onde atende

Torrefação em Mogi das Cruzes (SP). Escritórios no Alto Tietê e em São Paulo capital. Clube e loja online: Brasil todo.
Endereço e horário: `[a confirmar]` (não são públicos ainda; o mapa mostra a cidade).

## 9. Perguntas frequentes

1. **E se a gente quiser sair?** Não tem multa. Uma mensagem no WhatsApp resolve, a qualquer momento.
2. **E se o café atrasar?** Vocês têm dia fixo, recebem aviso na véspera e ficam com 1 semana de reserva na copa. Se uma entrega atrasar, o escritório pode encerrar na hora, sem custo.
3. **Cápsula não é mais prática?** Com grão fresco não tem máquina emprestada nem cota mínima de cápsulas. Na degustação a equipe compara.

## 10. Garantia e chamada final

**Garantia:** Sem multa para sair, a qualquer momento, com uma mensagem. Se uma entrega atrasar, vocês encerram na hora, sem custo.
**Chamada final:** "A próxima torra sai esta semana. Marque a degustação." Botão: Pedir a degustação na copa.

## Falta confirmar

- WhatsApp da empresa (o formulário abre o WhatsApp sem número; trocar em `formulario.html`, na linha marcada `trocar pelo número real`)
- Endereço público e horário
- Política "sem multa para sair" e "encerra se atrasar" (vem da oferta, é hipótese)
- Preço por xícara

## Plano de design

**Cor (de `marca/marca.md`):** Folha `#234B3F` (blocos fortes, mecanismo) · Cereja `#C23B22` (só botões de ação) · Leite `#F6F1EA` (fundo) · Grão `#2B1D14` (texto) · Bourbon `#E8B547` (etiquetas de torra e marcação do calendário) · Apoio `#6B5E55` (texto secundário).
**Tipo:** Bricolage Grotesque 800 nos títulos, grande e apertado (como no print do site); Albert Sans 400/700 no texto. Escala 1,25 no celular, 1,333 no computador.
**Layout:** alinhado à esquerda, coluna de leitura de até 64 caracteres.

```
[torra viva]                         [Pedir degustação]
torra desta semana
Café torrado na semana,          (xícara vista de cima)
na copa no dia marcado.
[Pedir degustação] [Como funciona]
| seg torra | ter | qua aviso | qui entrega | sex |   <- a semana se desenha
--------------------------------------------------------
"frase da copa" grande, sobre Folha
Torra Marcada: 4 etapas numa linha (é sequência: número ok)
Abas: Para o escritório | Para casa
Degustação (Bourbon) + formulário embutido
Mapa da cidade | áreas atendidas
Perguntas (details) · Garantia + chamada final · rodapé
```

**Princípio:** o memorável é o calendário da semana no topo. Ele explica a oferta inteira (torra num dia, aviso na véspera, entrega no dia certo) e é o único momento de abertura. O resto fica quieto: sem cartões iguais em fila, sem rótulo em caixa alta, sem seta em botão.

**Revisão contra o clichê:** o fundo creme com acento terracota é um padrão de página feita por IA, mas aqui vem da marca (Leite e Cereja, do print), então fica. O que mudei: troquei a ideia inicial de "3 cartões de benefício" pela semana desenhada, que é específica desta oferta, e tirei a faixa de números do topo (não há número com fonte para mostrar).
