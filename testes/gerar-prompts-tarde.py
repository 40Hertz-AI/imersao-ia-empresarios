#!/usr/bin/env python3
"""Prompts dos testes da tarde: o comando que o aluno digita + as respostas simuladas do aluno.

Saída: testes/prompts/tarde/<nome>.txt
Uso:   python3 testes/gerar-prompts-tarde.py
"""
from pathlib import Path

SAIDA = Path(__file__).resolve().parent / "prompts" / "tarde"
SAIDA.mkdir(parents=True, exist_ok=True)


def grava(nome, texto):
    (SAIDA / f"{nome}.txt").write_text(texto.strip() + "\n", encoding="utf-8")


# ---------------------------------------------------------------- pasta da aula: Torra Viva (fictícia)
HELENA = """Responda você mesmo, como se fosse a aluna Helena, dona da empresa, a cada pergunta da entrevista, usando só estas respostas (vá até o fim, sem esperar por mim):
1) Torra Viva Cafés Especiais. Site torraviva.exemplo e Instagram @torraviva.exemplo (a empresa é fictícia, criada para o teste: o site não existe). Mogi das Cruzes (SP). A loja online vende para o Brasil todo; café para empresas, só no Alto Tietê e na cidade de São Paulo.
2) Clube Torra Viva (assinatura), R$ 79 por mês; Mantiqueira Clássico 250 g, R$ 42; plano de café para escritório, a partir de R$ 98 o kg.
3) Pessoas de 30 a 50 anos que já tomam café especial, que chegam pelo Instagram e por indicação. As empresas chegam por indicação de outros clientes.
4) 9 pessoas: eu (Helena, fundadora e mestre de torra), a Marina (vendas para empresas), o Caio (loja online e Instagram) e mais 6 na torra, embalagem, expedição e atendimento.
5) Uns R$ 100 mil por mês, uns 900 clientes por mês. Margem eu não sei.
6) Gosto das cores do nosso Instagram (verde-escuro e vermelho), não gosto do site, que é lento. Admiro o visual da Granado.
7) O maior problema é atrasar entrega para empresa: perdemos um cliente em agosto por isso. E tudo depende de mim para torrar. Em 12 meses quero 30 escritórios atendidos e uma segunda pessoa que torra."""
grava("instalar-aula", "/instalar\n\n" + HELENA)
grava("mapear-empresa-aula", "/mapear-empresa")
grava("marca-aula", "/marca Salvei um print do nosso site novo em marca/print-site.png. Use ele.")
grava("mapear-concorrentes-aula", "/mapear-concorrentes")
grava("criar-oferta-aula", "/criar-oferta")
grava("criar-pagina-aula", "/criar-pagina")
grava("criar-conteudo-aula", "/criar-conteudo")
grava("criar-conteudo-forno", "/criar-conteudo")

SOBRE_HELENA = """Responda você mesmo, como se fosse a aluna Helena, a cada pergunta da entrevista, usando só isto que ela sabe (vá até o fim, sem esperar por mim):
- Papel: fundadora da Torra Viva Cafés Especiais (empresa fictícia de teste) e mestre de torra. Só ela decide preço, compra de café verde e contratação.
- Semana: segunda de manhã planeja a torra; terça e quinta torra o dia todo; quarta e sexta atende empresas, faz orçamentos e fecha o caixa.
- Fala com: a equipe pelo WhatsApp, os produtores por telefone, as empresas por e-mail e WhatsApp, a contadora uma vez por mês.
- Processo 1, orçamento para escritório: começa quando uma empresa manda e-mail ou WhatsApp pedindo preço. Ela pergunta quantas pessoas, abre a planilha de preços no Excel, faz a conta do kg e dos descontos, escreve a proposta num modelo do Word e manda por e-mail. Se o cliente aprova, a Marina agenda a entrega; se não responde, às vezes ela esquece de cobrar. Leva uns 40 minutos, umas 6 vezes por semana. A dor: demora e esquece o follow-up.
- Processo 2, planejamento da torra: toda segunda às 7h. Ela olha os pedidos da loja online (Nuvemshop), a lista do Clube e a planilha das empresas, soma os kg de cada café na mão e monta a escala da torra. Leva umas 2 horas por semana. A dor: conta na mão e já faltou café do Clube.
- Documentos: tabela de preços (Excel, no computador dela), modelo de proposta (Word), relatório mensal de vendas (Google Planilhas).
- Dados: Google Drive, Nuvemshop, Gmail e WhatsApp Business."""
grava("sobre-mim-aula", "/sobre-mim\n\n" + SOBRE_HELENA)
grava("sugerir-automacoes-aula", "/sugerir-automacoes")

# ---------------------------------------------------------------- pasta vazia: Padaria Trigo Azul (fictícia)
JORGE = ("(Se a skill fizer alguma pergunta, responda você mesmo como se fosse o aluno Jorge, sem esperar por mim, usando só isto: "
         "Padaria Trigo Azul, empresa fictícia de teste, sem site e sem Instagram, em Campinas (SP), bairro Cambuí. "
         "Vende pão de fermentação natural (R$ 24), café da manhã para empresas (R$ 35 por pessoa) e bolo inteiro (R$ 70). "
         "Clientes: moradores do bairro e escritórios da região. WhatsApp (19) 90000-0000, fictício. "
         "Para pedir o café da manhã, o cliente informa a data, o número de pessoas e o endereço. "
         "Tom: simpático e direto, trata o cliente por você. Maior problema: vende pouco à tarde. "
         "A objeção que mais ouve: 'é caro'. Quer vender mais café da manhã para empresas. "
         "Concorrentes que conhece: as padarias grandes do bairro. Não tem logo nem marca definida.)")
grava("instalar-vazia", """/instalar

Responda você mesmo, como se fosse o aluno Jorge, dono da empresa, a cada pergunta da entrevista, usando só estas respostas (vá até o fim, sem esperar por mim):
1) Padaria Trigo Azul (empresa fictícia de teste, sem site e sem Instagram), Campinas (SP). Atende só o bairro Cambuí e arredores.
2) Pão de fermentação natural, R$ 24; café da manhã para empresas, R$ 35 por pessoa; bolo inteiro, R$ 70.
3) Moradores do bairro, que passam na frente ou chegam por indicação. As empresas pedem pelo WhatsApp.
4) 6 pessoas: eu (Jorge, dono, cuido do caixa e das compras), 2 padeiros, 2 no balcão e 1 entregador.
5) Uns R$ 60 mil por mês, uns 2 mil clientes. Margem não sei.
6) Não tenho site e o Instagram está parado. Admiro o visual da Casa Bauducco.
7) O maior problema é vender pouco à tarde. Em 12 meses, quero 10 empresas fixas no café da manhã.""")
for skill in ["mapear-empresa", "mapear-concorrentes", "criar-oferta", "criar-pagina", "criar-conteudo", "marca"]:
    grava(f"{skill}-vazia", f"/{skill}\n\n{JORGE}")
grava("sobre-mim-vazia", """/sobre-mim

Responda você mesmo, como se fosse o aluno Jorge, a cada pergunta da entrevista, usando só isto que ele sabe (vá até o fim, sem esperar por mim):
- Papel: dono da Padaria Trigo Azul (fictícia, Campinas). Decide compras, preços e escala.
- Semana: abre a padaria às 6h todo dia; segunda faz as compras; sexta fecha o caixa da semana.
- Fala com: a equipe pessoalmente, os fornecedores por WhatsApp, as empresas por WhatsApp.
- Processo 1, pedido de café da manhã para empresa: chega pelo WhatsApp; ele pergunta data, pessoas e endereço; calcula na calculadora do celular; manda o preço por WhatsApp; se aprovar, anota no caderno e avisa os padeiros. Leva uns 20 minutos, 5 vezes por semana. Dor: perde pedido anotado no caderno.
- Processo 2, compras da semana: toda segunda de manhã; olha o estoque, liga para 3 fornecedores e compara preço. Leva 2 horas. Dor: não sabe se está pagando caro.
- Documentos: lista de preços num papel na parede, caderno de pedidos.
- Dados: WhatsApp e caderno; não usa planilha.""")
grava("sugerir-automacoes-vazia", """/sugerir-automacoes

(Se perguntar se quero rodar /sobre-mim antes, escolha as perguntas rápidas e responda você mesmo como se fosse o aluno Jorge, sem esperar por mim: dono da Padaria Trigo Azul, fictícia, em Campinas. As tarefas que mais tomam tempo: responder pedidos de café da manhã para empresas no WhatsApp (20 minutos cada, 5 por semana, calcula no celular e anota no caderno) e fazer as compras da semana (2 horas toda segunda, liga para 3 fornecedores). Os dados estão no WhatsApp e num caderno; não usa planilha.)""")
grava("frontend-design-vazia", "/frontend-design Crie pagina.html: a página do café da manhã para empresas da Padaria Trigo Azul (fictícia), no bairro Cambuí, em Campinas: R$ 35 por pessoa, pedido pelo WhatsApp (19) 90000-0000 (fictício) com data, número de pessoas e endereço. Um arquivo só, que funciona no celular.")
print(sorted(p.name for p in SAIDA.glob("*.txt")))
