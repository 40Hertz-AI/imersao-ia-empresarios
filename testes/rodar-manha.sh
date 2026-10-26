#!/usr/bin/env bash
# Roda todos os testes da manhã (passos e skills), na pasta da aula e na pasta vazia.
# Até $PARALELO testes ao mesmo tempo; os que dependem de outro esperam por ele.
# Uso: testes/rodar-manha.sh [filtro]   (ex.: testes/rodar-manha.sh passo-07)
set -u
cd "$(dirname "$0")/.."
R=testes/rodar-teste.sh
P=testes/prompts/manha
PARALELO=${PARALELO:-6}
filtro=${1:-}
mkdir -p testes/logs
rm -rf /tmp/teste-manha-*${filtro}* /tmp/vazia-manha-*${filtro}*

vez() { while [ "$(jobs -rp | wc -l)" -ge "$PARALELO" ]; do sleep 3; done; }
quer() { [ -z "$filtro" ] || [[ "$1" == *"$filtro"* ]]; }
corre() { # corre <rótulo> <comando...>: em segundo plano, com log
  local r=$1; shift
  quer "$r" || return 0
  vez; ( "$@" > "testes/logs/manha-$r.log" 2>&1; echo "[$(date +%T)] fim $r" ) &
}

corre passo-01 $R manha passo-01 aula $P/passo-01.txt
corre passo-01-vazia $R manha passo-01 vazia $P/passo-01.txt
corre passo-02 $R manha passo-02 aula $P/passo-02-{1,2,3,4,5,6}.txt
corre passo-02-vazia $R manha passo-02 vazia $P/passo-02-1.txt $P/passo-02-2.txt
for i in 1 2 3 4; do
  for t in ruim bom; do corre passo-03-ex$i-$t $R manha passo-03-ex$i-$t aula $P/passo-03-ex$i-$t.txt; done
done
corre passo-03-ex1-ruim-vazia $R manha passo-03-ex1-ruim vazia $P/passo-03-ex1-ruim.txt
corre passo-03-ex1-bom-vazia $R manha passo-03-ex1-bom vazia $P/passo-03-ex1-bom.txt
corre passo-04-margem $R manha passo-04-margem aula $P/passo-04-margem.txt
corre passo-04-arquivo $R manha passo-04-arquivo aula $P/passo-04-arquivo.txt
corre passo-04-vazia $R manha passo-04-eli5 vazia $P/passo-04-margem.txt --skills eli5

# passo 5: cria a skill e usa em 3 conversas novas na mesma pasta; depois a skill sozinha numa pasta vazia
passo5() {
  $R manha passo-05-criar aula $P/passo-05-criar.txt
  for i in 1 2 3; do $R manha passo-05-uso-$i aula $P/passo-05-uso-$i.txt --dir /tmp/teste-manha-passo-05-criar; done
  $R manha passo-05-resposta-cliente vazia $P/passo-05-vazia.txt \
    --preparar "mkdir -p .claude/skills && cp -a /tmp/teste-manha-passo-05-criar/.claude/skills/resposta-cliente .claude/skills/"
}
corre passo-05 passo5

# passo 6: as três páginas, cada uma numa conversa nova (no -p o artifact fica desligado: vale o arquivo em meu-trabalho/)
for t in calculadora dashboard apresentacao; do
  corre passo-06-$t $R manha passo-06-$t aula $P/passo-06-$t.txt
done
corre passo-06-vazia $R manha passo-06-calculadora vazia $P/passo-06-calculadora.txt
# plano B do passo 6 (claude.ai): pasta só com os "anexos" e o começo do prompt trocado, como manda o INSTRUCOES
corre passo-06-claudeai $R manha passo-06-claudeai-calculadora vazia $P/passo-06-claudeai-calculadora.txt \
  --preparar "mkdir -p anexos && cp '$PWD/manha/CLAUDE.md' '$PWD/manha/dados/orcamento.csv' anexos/"

# skills que já vêm na pasta
corre skill-find-skills $R manha skill-find-skills aula $P/skill-find-skills.txt
corre skill-find-skills-vazia $R manha find-skills vazia $P/skill-find-skills.txt --skills find-skills
corre skill-frontend-design $R manha skill-frontend-design aula $P/skill-frontend-design.txt
corre skill-frontend-design-vazia $R manha frontend-design vazia $P/skill-frontend-design-vazia.txt --skills frontend-design
corre skill-humanizer $R manha skill-humanizer aula $P/skill-humanizer.txt
corre skill-humanizer-vazia $R manha humanizer vazia $P/skill-humanizer-vazia.txt --skills humanizer
corre skill-grill-me $R manha skill-grill-me aula $P/skill-grill-me.txt
corre skill-grill-me-vazia $R manha grill-me vazia $P/skill-grill-me-vazia.txt --skills grill-me,grilling
corre skill-grilling-vazia $R manha grilling vazia $P/skill-grilling-vazia.txt --skills grilling
wait
echo "manhã: todos os testes terminaram"
