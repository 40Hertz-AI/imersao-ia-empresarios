# Página de vendas: Torra Viva Cafés Especiais

Data: 25/10/2026 · Fontes: `memoria/`, `marca/marca.md`, `pesquisa/cliente.md`, `entregas/oferta.md`
**Trava (da oferta):** divulgar a página para escritórios novos só depois que o calendário fixo de torra estiver rodando (`memoria/foco.md`, ação 1).
**Público da página:** quem decide o café do escritório (office manager, RH, sócio) no Alto Tietê e em SP. Quem é de casa é levado ao Clube.

## 1. Topo
- **Dor:** Acabou o café da copa de novo? Aqui tem dia marcado. (9 palavras)
- **Resultado (escolhido):** Café torrado na semana, na copa no dia marcado. (9 palavras)
- **Mecanismo:** Seu escritório ganha um dia fixo no nosso calendário de torra. (11 palavras)

**Por quê:** é a promessa da oferta e ecoa a frase real do site novo ("Torrado esta semana, na sua xícara na próxima."). Junta as duas dores do escritório: café velho e café que não chega.
**Subtítulo:** A Torra Viva torra café especial em Mogi das Cruzes e leva até o seu escritório no mesmo dia, toda semana, com aviso na véspera.
**Botão:** Pedir a degustação grátis

## 2. Problema
Acabou o café da copa de novo? E o pessoal veio reclamar com você? (cena descrita; a frase do escritório em `cliente.md` é inferida, por isso sem aspas)
Apoio com títulos reais de reclamações sobre fornecedores de café:
- "MEGA ATRASO NA ENTREGA": https://www.reclameaqui.com.br/coffee-mais/mega-atraso-na-entrega_i_YZ1-VvsI7et22r/
- "Café velho, 18 meses de validade": https://www.reclameaqui.com.br/coffee-mais/cafe-velho-18-meses-de-validade_hEUtptr73qAZBPcz/

## 3. Como funciona: Torra Marcada
1. **Prova na copa:** a Marina leva 2 cafés para a equipe provar, sem custo.
2. **Dia combinado:** seu escritório ganha um dia fixo no calendário de torra.
3. **Torra da semana:** o lote é torrado na semana da entrega, com a data de torra no pacote.
4. **Aviso e reserva:** mensagem na véspera e 1 semana de café de reserva na copa.

## 4. O que vai
**Para o escritório:** Plano de café, a partir de R$ 98 o kg. Café em grão ou moído para o método da copa, torrado na semana, entrega própria em dia fixo, aviso na véspera, 1 semana de reserva, data de torra em cada pacote, troca de café quando a equipe quiser variar. Atende Alto Tietê e São Paulo capital.
**Para casa:** Clube Torra Viva por R$ 79 por mês, ou o Mantiqueira Clássico 250 g por R$ 42. Entrega para o Brasil todo.

## 5. Provas
Fora da página: não há nota no Google, depoimento nem número de escritórios atendidos com fonte. Entram quando existirem (lista em `oferta.md`, seção 8).

## 6. Oferta de entrada
Degustação na copa + 1º mês sem amarra: a Marina leva 2 cafés da torra da semana; se a equipe gostar, o 1º mês entra no calendário sem multa para sair.

## 7. Pedido (formulário)
1. Seu nome e o nome da empresa
2. Cidade do escritório (Alto Tietê, São Paulo capital ou outra; outra leva ao Clube)
3. Quantas pessoas tomam café
4. Como o café é feito na copa (coado, prensa, máquina de grão, outro)
5. Melhor dia para a degustação (a partir de hoje)

## 8. Onde atende
Torrefação em Mogi das Cruzes (SP). Escritórios: Alto Tietê e São Paulo capital. Loja online: Brasil todo. Endereço e horário: `[a confirmar]` (não são públicos ainda; o mapa mostra a cidade).

## 9. Perguntas frequentes
1. **E se a gente ficar preso num contrato?** Não tem multa para sair. Se não gostar, uma mensagem no WhatsApp encerra.
2. **E se o café atrasar?** Você tem dia fixo, recebe aviso na véspera e fica com 1 semana de reserva na copa. Se uma entrega atrasar, pode encerrar na hora, sem custo.
3. **Cápsula não é mais prática?** Com grão fresco não tem máquina emprestada nem cota mínima de cápsulas. Na degustação a equipe compara.

## 10. Garantia e chamada final
**Garantia:** sem multa para sair, a qualquer momento, com uma mensagem. Se uma entrega atrasar, o escritório pode encerrar na hora, sem custo. `[a confirmar com a dona]`
**Chamada final:** Na próxima semana, o café da copa pode ter data de torra. Botão: Pedir a degustação grátis

## Falta confirmar
- Número do WhatsApp (o formulário abre o WhatsApp sem destinatário)
- Política de saída sem multa e encerramento por atraso
- Endereço e horário públicos

## Plano de design
**Cor:** Leite `#F6F1EA` (fundo), Grão `#2B1D14` (texto), Folha `#234B3F` (blocos fortes: problema, chamada final), Cereja `#C23B22` (só botões de pedido), Bourbon `#E8B547` (etiquetas de dia e de torra), Apoio `#6B5E55` (texto secundário).
**Tipo:** Bricolage Grotesque 800 nos títulos, grande e apertado; Albert Sans 400/700 no texto. Escala 1,25.
**Layout:** alinhado à esquerda, coluna de leitura de até 64 caracteres.
```
[torra viva]             [Pedir degustação]
Café torrado na semana,     ┌ seg ter qua qui sex ┐
na copa no dia marcado.     │ torra  aviso entrega│  ← a semana se desenha
[Pedir degustação]          └─────────────────────┘
███ Folha: Acabou o café da copa de novo? ███
Torra Marcada: 1 — 2 — 3 — 4 (acendem; clique abre)
[Escritório | Casa]  cartão do plano
Degustação + formulário em passos (iframe)
Mapa de Mogi │ Perguntas │ Garantia (Folha) │ rodapé
```
**Princípio:** o elemento marcante é a semana de calendário que se desenha no topo (torra, aviso na véspera, entrega). Ela é a promessa em forma de imagem. O resto fica quieto: cartões brancos com borda fina, pílulas da marca, sem foto.
**Revisão contra o genérico:** fundo creme + destaque vermelho lembra o padrão de página feita por IA, mas é a paleta do print do site novo, e a marca vence. Trocado: em vez do número grande com rótulo no topo, a semana desenhada; sem rótulos em caixa alta nem setas nos botões; numeração só no mecanismo, que é sequência de verdade.
