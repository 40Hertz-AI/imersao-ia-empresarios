#!/usr/bin/env python3
"""Tira os prompts dos testes da manhã direto dos INSTRUCOES.md (o mesmo texto que o aluno copia).

Saída: testes/prompts/manha/<nome>.txt
Uso:   python3 testes/gerar-prompts-manha.py
"""
import re
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
SAIDA = RAIZ / "testes" / "prompts" / "manha"
SAIDA.mkdir(parents=True, exist_ok=True)


def blocos(passo):
    texto = (RAIZ / "torra-viva" / "passos" / passo / "INSTRUCOES.md").read_text(encoding="utf-8")
    return [b.strip() for b in re.findall(r"```[a-z]*\n(.*?)```", texto, re.S)]


def grava(nome, texto):
    (SAIDA / f"{nome}.txt").write_text(texto.strip() + "\n", encoding="utf-8")


b = blocos("01-abrir-a-pasta")
grava("passo-01", b[5])

b = blocos("02-google-drive-e-planilhas")
grava("passo-02-1", b[6])
for i, k in enumerate([1, 2, 3, 4], start=2):
    grava(f"passo-02-{i}", b[k])
grava("passo-02-6", b[7])

b = blocos("03-prompts-que-funcionam")
for i in range(4):
    grava(f"passo-03-ex{i + 1}-ruim", b[2 * i])
    grava(f"passo-03-ex{i + 1}-bom", b[2 * i + 1])

b = blocos("04-usar-uma-skill-pronta")
grava("passo-04-margem", b[1])
grava("passo-04-arquivo", b[4])

b = blocos("05-criar-uma-skill")
grava("passo-05-criar", b[0])
msgs = (RAIZ / "torra-viva" / "passos" / "05-criar-uma-skill" / "mensagens-de-clientes.md").read_text(encoding="utf-8")
textos = [re.sub(r"\n> ", " ", m).strip() for m in re.findall(r"\n> (.*?)\n> —", msgs, re.S)]
for i, t in enumerate(textos, start=1):
    grava(f"passo-05-uso-{i}", f"/resposta-cliente {t}")
grava("passo-05-vazia", f"/resposta-cliente {textos[1]}\n\n(Se a skill precisar perguntar algo, responda você mesmo como se fosse o aluno Jorge, dono da Padaria Pão Quente, em Campinas: tom simpático e direto, trata o cliente por você. A padaria faz café da manhã para empresas, mas ainda não tem tabela de preços.)")

b = blocos("06-paginas-web")
grava("passo-06-calculadora", b[0])
grava("passo-06-dashboard", b[1])
grava("passo-06-apresentacao", b[2])
# plano B (claude.ai): a primeira linha do prompt troca pelo bloco do INSTRUCOES; os anexos ficam em anexos/
inicio, _, resto = b[0].partition("\n")
assert inicio.startswith("Crie uma calculadora") and b[3].startswith("Com os arquivos anexados")
resto = "\n" + resto
grava("passo-06-claudeai-calculadora",
      "(Simulação do claude.ai: os arquivos que o aluno anexou à conversa estão na pasta anexos/. "
      "Salve o artifact como calculadora-orcamento.html nesta pasta, que é o que o aluno baixaria em Export → HTML.)\n\n"
      + b[3] + resto)

# skills que já vêm na pasta (fora dos 6 passos)
grava("skill-find-skills", "/find-skills Quero uma skill que crie apresentações em PowerPoint (.pptx). Procure e me diga as 3 melhores opções, com quem fez e quantas instalações. Não instale nada.")
grava("skill-frontend-design", "Use a skill frontend-design para criar meu-trabalho/cartao-fidelidade.html: um cartão fidelidade digital da Torra Viva (10 carimbos; o 10º café é por nossa conta), num arquivo só, que funciona no celular. Clicar num carimbo marca e desmarca.")
grava("skill-frontend-design-vazia", "/frontend-design Crie cartao-fidelidade.html: um cartão fidelidade digital para uma padaria de bairro (10 carimbos; o 10º pão é por conta da casa), num arquivo só, que funciona no celular. Clicar num carimbo marca e desmarca.")
TEXTO_IA = ("Na Torra Viva, acreditamos que o café é muito mais do que uma bebida: é uma verdadeira jornada sensorial. "
            "Cada grão é cuidadosamente selecionado, meticulosamente torrado e entregue com paixão, proporcionando uma experiência única, "
            "inesquecível e transformadora. Não é apenas café — é um estilo de vida. Venha fazer parte dessa revolução!")
grava("skill-humanizer", f"/humanizer Reescreva este texto do site da Torra Viva:\n\n{TEXTO_IA}")
grava("skill-humanizer-vazia", "/humanizer Reescreva este texto do site da minha padaria:\n\nNa Padaria Pão Quente, acreditamos que o pão é muito mais do que um alimento: é uma verdadeira experiência de afeto. Cada fornada é cuidadosamente preparada, meticulosamente assada e entregue com paixão. Não é apenas pão — é um estilo de vida. Venha fazer parte dessa revolução!")
grava("skill-grill-me", "/grill-me Quero lançar café em cápsulas na Torra Viva. Responda você mesmo, como se fosse a Helena (dona da Torra Viva), a cada rodada de perguntas, usando só isto que ela sabe: quer lançar em março de 2027; pode investir até R$ 40 mil; a produção seria terceirizada numa fábrica de cápsulas em Minas; venderia na loja online e para os escritórios B2B; pensa em R$ 3,20 por cápsula; meta de 3 mil cápsulas por mês no primeiro semestre; ainda não sabe o custo por cápsula nem se as cápsulas serão compatíveis com Nespresso. O que ela não souber, ela diz \"não sei\". Faça no máximo 2 rodadas e, no fim, salve o plano com as decisões e o que ficou em aberto em meu-trabalho/plano-capsulas.md.")
grava("skill-grill-me-vazia", "/grill-me Quero abrir uma segunda loja da minha padaria. Responda você mesmo, como se fosse o dono, o Jorge, a cada rodada de perguntas, usando só isto que ele sabe: a padaria fica em Campinas e fatura bem de manhã; ele pensa num bairro a 5 km; tem R$ 150 mil guardados; o padeiro-chefe toparia treinar uma equipe nova; não sabe quanto custa o aluguel no bairro novo. O que ele não souber, ele diz \"não sei\". Faça no máximo 2 rodadas e, no fim, salve o plano em plano-segunda-loja.md.")
grava("skill-grilling-vazia", "Me grelhe (grill me) sobre este plano antes de eu começar: quero oferecer cestas de café da manhã para empresas na minha padaria em Campinas. Responda você mesmo, como se fosse o dono, o Jorge, a cada rodada, usando só isto: ele já faz cestas para presente; tem 1 carro de entrega; quer começar em dezembro; não sabe o preço que vai cobrar. O que ele não souber, ele diz \"não sei\". No máximo 2 rodadas; no fim, salve as decisões em plano-cestas.md.")
print(sorted(p.name for p in SAIDA.glob("*.txt")))
