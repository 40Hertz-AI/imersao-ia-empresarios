# CLAUDE.md — imersao-ia-empresarios

> Se você é aluno, abra a pasta `manha/` ou `tarde/` no Claude Code. Este arquivo é para quem mantém o repositório.

Material público e portal do **treinamento de IA para empresários** da 40 Hertz. A 1ª turma foi em 29/09/2026.

## Estrutura
| Pasta | O que é | Pode editar aqui? |
|---|---|---|
| `site/` | Portal do aluno, em HTML estático | Sim |
| `site/downloads/` | ZIPs das pastas e guias. **Tudo aqui é público** | Não: são gerados por script |
| `manha/`, `tarde/` | Pastas dos alunos (projetos do Claude Code com skills em `.claude/skills/`) | **Não.** São espelho de uma fonte privada e a próxima publicação sobrescreve |

## Deploy
- Vercel, time **40 Hertz**, projeto `ia-para-empresarios-v2`, com Root Directory `site`.
- Um push na `main` publica em cerca de 10 s, no endereço https://ia-para-empresarios-v2.vercel.app.
- Publicar só com aprovação do Lucas. O repo e os downloads são públicos.

## Regras
- O portal tem uma trava de downloads por data (horário de Brasília) e uma pesquisa pós-aula que libera o material. Para testar, intercepte a rede: **nunca** envie dado de teste para a planilha ou o endpoint reais.
- Para dizer que um material foi atualizado, compare o hash do arquivo baixado do ar, e não o do disco.
- Não comite dado de aluno: e-mail, nome, respostas.

## Tasks
Linear, workspace Empregga, time **40 Hertz**, projeto **Treinamento**. O nome da branch leva o ID da issue.
