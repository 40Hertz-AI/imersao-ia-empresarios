# Passo 4 · Usar uma skill pronta: `/eli5`

**Tempo:** 10 min.
**O que você vai fazer:** usar a skill `eli5`, que já vem nesta pasta, para entender um conceito de negócio.

**A ideia:** skill é um arquivo que ensina o Claude a fazer uma tarefa sempre do mesmo jeito. Em cima, **quando usar**; embaixo, **como fazer**. Você ensina uma vez e ele repete sempre. As skills desta pasta ficam em `.claude/skills/` (no Mac, a pasta é escondida: **Cmd+Shift+.** mostra).

A `eli5` ("explain like I'm 5", explique como se eu tivesse 5 anos) explica qualquer coisa em 5 partes: uma frase, uma comparação, o passo a passo, por que importa e o que aprender depois.

---

## 1. Ver a skill

Digite `/` no Claude Code e procure **eli5** na lista. Quer ver por dentro? Abra o arquivo `.claude/skills/eli5/SKILL.md` num editor de texto (Bloco de Notas, TextEdit) ou peça:

```
Me mostre, em 5 linhas, o que a skill eli5 desta pasta manda você fazer.
```

## 2. Usar (escolha um)

```
/eli5 o que é margem de contribuição
```
```
/eli5 qual a diferença entre torra clara e torra escura
```
```
/eli5 o que é NPS e por que a Torra Viva pergunta isso aos clientes
```

## 3. Usar com um arquivo

A skill também explica arquivos:

```
/eli5 dados/orcamento.csv
```

Conversa nova (`/clear`) antes de cada um, para ver que o jeito de explicar é sempre o mesmo, com qualquer assunto.

## Resultado esperado

Uma explicação curta com as 5 partes, na mesma ordem, sem palavra difícil. As respostas prontas estão em `gabarito/04-usar-uma-skill-pronta/`.

**O que reparar:** o assunto muda, o formato fica · você não explicou nada ao Claude sobre como responder: a skill explicou · há milhares de skills prontas em [skills.sh](https://skills.sh) (olhe quem fez e quantas pessoas instalaram antes de confiar).

Quer instalar uma skill da internet? Precisa do Node.js. Cole (troque o endereço pelo que o professor passar):
```
Rode no terminal e me avise quando terminar: npx -y skills add <endereço da skill> -a claude-code -y
```
Depois, `/exit` e `claude` de novo, e digite `/`.

✅ **Pronto quando:** a `/eli5` explicou um conceito do seu jeito de entender. Marque o passo 4 em `progresso.md`.
