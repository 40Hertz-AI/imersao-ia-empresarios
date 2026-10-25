# Notas da branch `exercicios-27-10`

Trabalho feito em 25/10/2026 para a turma de terça, 27/10. Base: `origin/main` (fb89580). Nada foi publicado: sem push e sem merge.

## O que mudou, em uma tela

- **Manhã:** a Lanchonete Bom Pedaço saiu; entrou a **Torra Viva Cafés Especiais** (fictícia) numa trilha de **8 passos**, cada um com `passos/0N-.../INSTRUCOES.md` (o que fazer, prompt pronto, resultado esperado, plano B) e `gabarito/0N-.../` gerado de verdade pelos testes. Dados fictícios em `manha/dados/` (4 CSV + `.xlsx` + políticas de atendimento), mockup próprio para o design system, `progresso.md`, README para iniciante (Windows e Mac).
- **Tarde:** Impeccable dentro da pasta, sem plugin (skill, 4 agentes, hooks, licença, telemetria desligada); `/criar-conteudo` só em HTML (carrossel + 2 posts, sem PNG nem Playwright) e o exemplo Forno da Vila refeito com ele; skills novas `/sobre-mim` e `/sugerir-automacoes`; todas as skills funcionam fora da pasta da aula.
- **Testes:** `testes/` com harness, prompts, provas de cada passo e skill (pasta da aula e pasta vazia), verificadores automáticos e `testes/RESULTADOS.md`.
- **ZIPs** regerados em `site/downloads/` por um script novo (`scripts/gerar-zips.sh`). Dois textos do portal que falavam da lanchonete foram trocados (só texto; datas e trava não mexi).

## Árvore das duas pastas

(`tree -a -I .git -L 3`, gerada com `scripts/arvore.py` porque o `tree` não está instalado nesta máquina)

### manha/

```
ARVORE_MANHA
```

### tarde/

```
ARVORE_TARDE
```

## Decisões (simples, tomadas sem as Pages de especificação)

1. **Editei `manha/` e `tarde/` direto**, como pedido, embora o `CLAUDE.md` da raiz diga que são espelho de uma fonte privada. Ver "o que o Lucas precisa fazer".
2. **Onde o aluno salva:** tudo vai para `manha/meu-trabalho/` (o gabarito fica em `gabarito/`, os dados em `dados/`). Raiz da pasta limpa para o iniciante achar as coisas.
3. **"Orçamento" nos dados** virou `orcamento.csv` = as **regras do orçamento de café para escritório** (consumo, preço do kg, descontos, comodato da máquina, frete), na ordem do cálculo. É o que a calculadora do passo 7 segue. As vendas do canal B2B são calculadas a partir de `clientes-b2b.csv` com essas regras, para os arquivos baterem entre si.
4. **Rótulo "dados fictícios de exemplo":** primeira linha de cada CSV (`# Torra Viva Cafés Especiais · dados fictícios de exemplo`; o cabeçalho vem na linha 2), linha 1 de cada aba do `.xlsx`, aba Sobre, `dados/LEIA-ME.md`, `politicas-atendimento.md` e as páginas geradas. O `.xlsx` tem só valores (sem fórmula), para o Google Planilhas e o conector lerem igual.
5. **Empresa e lugar:** Torra Viva em Mogi das Cruzes (cidade da 1ª turma), site e Instagram de mentira com `.exemplo` (`torraviva.exemplo`, `@torraviva.exemplo`) para não apontar para ninguém real. Busquei "Torra Viva" café especial e não achei empresa com esse nome.
6. **Passo 1 (instalar):** caminho principal pelo terminal (PowerShell no Windows, Terminal no Mac), com os comandos da documentação oficial (`irm https://claude.ai/install.ps1 | iex` e `curl -fsSL https://claude.ai/install.sh | bash`), e o app do Claude (aba Code) como alternativa sem terminal. Truque para iniciante: digitar `powershell` na barra de endereço do Explorador; no Mac, arrastar a pasta para o Terminal depois de `cd `.
7. **Passo 3:** os exemplos rodam na pasta da aula, onde o `CLAUDE.md` já dá contexto; por isso até o prompt ruim sabe o nome da empresa. Para mostrar o contraste puro, o gabarito tem também o exemplo 1 numa pasta sem contexto.
8. **Passo 5:** o prompt pede para usar a `skill-creator` se existir; nos testes ela não existia (testes sem as skills sincronizadas do claude.ai) e o prompt funcionou do mesmo jeito. A skill do gabarito é a que o teste gerou, sem retoque.
9. **Passo 6:** a imagem própria (`referencia-design.png`, desenhada com PIL por `scripts/gerar-mockup-design.py`) imita um "shot" do Dribbble e traz a paleta e as fontes escritas, para o resultado sair previsível. No terminal, a instrução é salvar o print na pasta e escrever o caminho (colar imagem no terminal varia por sistema); no app, colar funciona.
10. **Passo 7:** o prompt da calculadora pede a conta numa função `calcularOrcamento(...)`, para dar para testar (e o teste confere 10 casos contra as regras calculadas à parte). O prompt da apresentação ganhou "cabe numa tela de notebook (1280 × 720) sem nada sobreposto" depois que o primeiro teste sobrepôs o rodapé nessa resolução.
11. **Passo 8 (Claude Motion):** pela ajuda oficial (out/2026), o Motion está em beta **só nos planos Team e Enterprise**, e se abre com `/motion`, pelo botão de saída do campo de mensagem ou pela aba Artifacts; exporta MP4. Como o curso usa Pro, o plano B (animação HTML no Claude Code + gravação de tela) é o caminho testado e o mais provável na sala.
12. **Skills de terceiros da manhã** (`find-skills`, `frontend-design`, `humanizer`, `grill-me`, `grilling`) ficaram, como extras. A `eli5` não mudou.
13. **Impeccable:** gerado com `bun install && bun run build:skills` no clone (v4.7.1, motor 0.1.17, commit `3671d50`), e copiado sem alteração: `dist/claude-code/.claude/skills/impeccable`, `.claude/agents/impeccable-*.md` e `.claude/settings.json` (hooks de conferência de HTML). Licença em `tarde/licencas/impeccable/LICENSE` e `NOTICE.md`; **o LICENSE diz "Copyright 2025 Paul Bakaus" (linha 179), confirmado**. Crédito no README da tarde e no da raiz.
14. **Telemetria do Impeccable** (evidência no código, `crates/context/src/telemetry.rs`, `opt_out_reason`, linhas 72–112): o motor desliga a telemetria quando acha `"telemetry": false` em `~/.impeccable/config.json` **ou** em `<projeto>/.impeccable/config.json` / `config.local.json` ("a project may opt everyone out"); a chave é conhecida pelo `doctor` (`crates/context/src/staleness.rs:39`); o contrato está em `docs/CLI-CONTRACT.md` ("A project config `"telemetry": false` also turns it off for everyone in that project"). Criei `tarde/.impeccable/config.json` com `"telemetry": false` e conferi com o próprio binário, na pasta do teste: `telemetry: off ("telemetry": false in .impeccable/config.json)`. Também pus `"updateCheck": false` (sem aviso de atualização na aula) e `detector.ignoreFiles` com `**/RESULTADO.html`, `controle/*.html` e `exemplo-forno-da-vila/**`, para o hook não mandar "consertar" o relatório, que tem visual fixo (com caminho literal o `doctor` reclamava de arquivo inexistente; com glob, não).
15. **Hook do Impeccable no fim da fase:** no teste, a "passada final" (hook `Stop`) do Impeccable fez o Claude continuar depois do `/criar-pagina`: a última mensagem virou um relatório de design, e não o fechamento da fase. Não há chave de configuração para desligar só essa passada, e o pedido era copiar o `.claude` do dist como está; então mantive o `settings.json` intacto e resolvi pela pasta: `"hook": {"quiet": true}` no `.impeccable/config.json` (sem os avisos de "arquivo limpo") e uma regra no `CLAUDE.md` da tarde ("depois do aviso de design, corrigir só o que for problema real e terminar de novo com o fechamento da fase"). Refiz o `/criar-pagina` com isso (prova em `testes/tarde/criar-pagina-de-novo`). O hook também pode gravar exceções (`ignoreValues`) no `.impeccable/config.json` do aluno; a telemetria continua `false` (conferido).
16. **Frase inferida não vira citação:** a crítica do `/impeccable` no teste achou, na página de vendas, uma frase marcada `(inferida)` na pesquisa apresentada como fala de cliente ("O que a gente ouve"). O `/criar-pagina` agora proíbe isso (vira pergunta, sem aspas).
17. **Download do motor do Impeccable:** o launcher baixa ~21 MB do GitHub na primeira vez; os hooks têm 5 s de limite. O `/instalar` agora dispara esse download em segundo plano (`impeccable engine-probe`), para os hooks já acharem o motor pronto.
18. **`/criar-conteudo` só HTML:** cada arquivo (`carrossel-1.html`, `post-1.html`, `post-2.html`) mostra uma lâmina por vez do tamanho da janela, com setas; `?n=3` mostra só a lâmina 3 (é assim que o relatório mostra, com um `<iframe>` por lâmina escalado pelo script do modelo). Para postar: print de cada lâmina em tela cheia. O modelo do relatório (`controle/modelo-resultado.html`) e o `componentes.md` ganharam a peça `.slide.html`.
19. **Exemplo Forno da Vila:** a fase 6 foi refeita rodando o `/criar-conteudo` novo sobre os arquivos do exemplo; saíram os 7 PNGs e a `legenda-1.md`, entraram o carrossel e os 2 posts em HTML e `legendas.md`. Retoque à mão: uma linha de CSS (`.controles[hidden]{display:none}`) nos 3 HTML, a mesma que entrou no esqueleto da skill depois do teste.
20. **Skills fora da pasta da aula:** cada skill da tarde ganhou um trecho "pasta fora da aula": cria só os arquivos que grava, pergunta o mínimo numa mensagem só quando não sabe nem qual é a empresa, pula o RESULTADO.html quando não há modelo e, no fechamento, cita só comandos que existem. O `CLAUDE.md` da tarde deixa de mandar "comece por /instalar" quando a pessoa já pediu outro comando.
21. **`/sobre-mim` e `/sugerir-automacoes`:** fiéis aos rascunhos, com ajustes: usam `memoria/` e `entregas/` quando a pasta é a da aula (senão `contexto/` e `entregas/`), tratam `numeros.md` e `dados/` como privados, e o `/sugerir-automacoes` vai direto às 4 perguntas se não houver `/sobre-mim`. Entraram como extras na trilha (fora da contagem "fase N de 6") e no README (bloco D).
22. **Testes isolados:** rodam com `--setting-sources project,local` e `--strict-mcp-config` (além do comando pedido) dentro do `bwrap`, que esconde o resto do disco. Sem isso, a 1ª rodada achou o material em `/workspace` e usou; foi descartada. Respostas de entrevista são simuladas no próprio pedido.
23. **Commits:** autor configurado só neste repositório (`git config user.email santanalc.santos@gmail.com`, `user.name santanalc`), porque a máquina não tinha identidade.

## Riscos que continuam

- **A fonte privada vai sobrescrever `manha/` e `tarde/`** na próxima publicação, se essas mudanças não forem levadas para lá.
- **Provas com nomes de empresas reais:** `testes/tarde/mapear-*` e `testes/pasta-vazia/tarde-mapear-*` têm a pesquisa de verdade (concorrentes reais de Mogi das Cruzes e de Campinas, com nota e "força digital" estimada pela IA). O repositório é público. O exemplo Forno da Vila evitou isso de propósito, com concorrentes inventados.
- **Impeccable na sala:** primeiro download de ~21 MB por aluno; hooks de 5 s em Wi-Fi ruim podem atrasar cada edição de HTML até o motor baixar. No Windows sem Git Bash, os hooks (`sh`) podem falhar e mostrar aviso. O hook pode fazer o Claude ajustar a página depois da fase (mais tempo e mais uso do limite do plano); a regra do CLAUDE.md garante o fechamento por último, mas o tempo extra continua.
- **Claude Motion e Artifacts** mudam rápido (beta). Os nomes de botão nas instruções vieram da ajuda oficial de out/2026 e não foram vistos na tela.
- **Ajustes finais sem rodar a fase inteira de novo:** a frase da capa no `/mapear-empresa` (uma linha; o `/instalar` com a mesma mudança foi refeito) e uma linha de CSS no esqueleto do `/criar-conteudo` (`.controles[hidden]`, aplicada também no exemplo). Os testes dessas duas fases são da versão anterior a esses retoques.
- **Gabarito é uma amostra:** a IA escreve diferente a cada vez; o aluno não vai ter o mesmo texto. Os números, sim, precisam bater (o passo 2 e a calculadora foram conferidos).
- **Tempo dos passos:** as estimativas do README são as da turma anterior; nos testes, com 10 rodando juntos, páginas e pesquisas levaram de 2 a 25 min.
- **`site/downloads/guia-claude-code-imersao.md`** (público, liberado depois da aula) ainda descreve a manhã antiga: cita a lanchonete 3 vezes. Não mexi: é gerado pela fonte privada.
- **O portal** ainda diz 29/09 na contagem, na trava de downloads (`dia0 = new Date(2026, 8, 29)`) e na pesquisa (`TURMA = '2026-09-29'`). Não mexi.

## O que o Lucas precisa fazer antes de terça (27/10)

1. **Revisar e decidir o push** desta branch (o repo e os ZIPs são públicos). Se for publicar, pensar antes nos nomes de empresas reais em `testes/` (pode tirar essas provas do commit ou anonimizar).
2. **Levar as mudanças de `manha/` e `tarde/` para a fonte privada**, senão a próxima publicação apaga tudo.
3. **Guia público** (`site/downloads/guia-claude-code-imersao.md`): atualizar na fonte privada, porque ainda fala da lanchonete.
4. **Portal:** decidir a data da turma nova (contagem, trava de downloads e `TURMA` da pesquisa ainda em 29/09) e conferir os textos da manhã (troquei só os dois que citavam a lanchonete).
5. **Depois do deploy**, baixar os dois ZIPs do ar e comparar o hash com o do disco (`sha256sum site/downloads/*.zip`).
6. **Testar o conector do Google Drive** com uma conta de teste (não com a planilha real do portal) e o import do `torra-viva.xlsx` no Google Planilhas: é a única parte da manhã que não deu para rodar aqui.
7. **Avisar a turma no pré-requisito:** Claude Pro (o plano grátis não tem Claude Code), Node.js, Git (no Windows) e Chrome; o Claude Motion não vai aparecer no Pro (o passo 8 usa o plano B).
8. **Opcional:** no primeiro bloco da tarde, pedir que todos rodem o `/instalar` logo no começo (ele já baixa o motor do Impeccable) e, se a rede estiver ruim, apagar `.claude/settings.json` da pasta da tarde desliga os hooks.
9. **Linear:** o `CLAUDE.md` pede o ID da issue no nome da branch; `exercicios-27-10` não tem. Ligar a uma issue do projeto Treinamento, se quiser manter a regra.
