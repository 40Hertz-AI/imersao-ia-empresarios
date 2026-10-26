# Passo 1 · Baixar a pasta e abrir no Claude Code

**O que você vai fazer:** instalar o Claude Code, abrir esta pasta nele e fazer a primeira pergunta.

O Claude Code é o Claude trabalhando dentro de uma pasta do seu computador. Ele lê os arquivos, cria arquivos novos e roda comandos, sempre pedindo licença antes. **Projeto = uma pasta.**

Você precisa de: uma conta do Claude paga (Pro, Max, Team ou Enterprise; o plano grátis não tem Claude Code) e internet.

---

## No Windows

**1. Baixar e descompactar**
1. No portal da aula, clique em **Baixar a pasta da manhã**. O arquivo `imersao-manha.zip` vai para a pasta **Downloads**.
2. Abra o **Explorador de Arquivos** (ícone de pasta amarela na barra de tarefas) → **Downloads**.
3. Clique com o botão direito em `imersao-manha.zip` → **Extrair tudo...**
4. No campo do destino, clique em **Procurar** e escolha **Área de Trabalho** → **Extrair**.
5. Abra a pasta `imersao-manha` na Área de Trabalho. Se dentro dela houver outra pasta `imersao-manha`, use a de dentro (é a que tem o `README.md`).

**2. Instalar o Claude Code** (só na primeira vez)
1. Clique no menu **Iniciar**, digite `PowerShell` e abra o **Windows PowerShell**. Abre uma janela com texto e um cursor piscando: é o terminal.
2. Copie a linha abaixo, clique na janela, cole com **Ctrl+V** (ou botão direito) e aperte **Enter**:
   ```powershell
   irm https://claude.ai/install.ps1 | iex
   ```
3. Espere terminar (não aparece barra de progresso; leva 1 a 3 minutos). **Feche a janela e abra o PowerShell de novo.**
4. Confira: digite `claude --version` e aperte Enter. Apareceu um número de versão? Instalado.
   Apareceu "não é reconhecido"? Feche e abra o PowerShell mais uma vez. Se continuar, chame um monitor.
5. Recomendado: instale também o [Git para Windows](https://git-scm.com/downloads/win) (avançar, avançar, concluir). Com ele, o Claude Code roda mais comandos.

**3. Abrir o terminal dentro da pasta**
- Jeito mais fácil: abra a pasta `imersao-manha` no Explorador, clique na **barra de endereço** (onde aparece o caminho), apague, digite `powershell` e aperte **Enter**. O PowerShell abre já dentro da pasta.
- Windows 11: clique com o botão direito num espaço vazio dentro da pasta → **Abrir no Terminal**.
- Pelo comando `cd` (se a Área de Trabalho estiver no OneDrive, o caminho muda):
  ```powershell
  cd "$HOME\Desktop\imersao-manha"
  ```
  Deu erro? Tente `cd "$HOME\OneDrive\Área de Trabalho\imersao-manha"`.

**4. Abrir o Claude Code**
Digite `claude` e aperte Enter. Siga para "Primeira vez" lá embaixo.

---

## No Mac

**1. Baixar e descompactar**
1. No portal da aula, clique em **Baixar a pasta da manhã**.
2. Abra o **Finder** → **Downloads**. Se aparecer `imersao-manha.zip`, dê dois cliques: ele vira a pasta `imersao-manha` (o Safari às vezes já faz isso sozinho).
3. Arraste a pasta `imersao-manha` para a **Mesa** (Área de Trabalho) na barra lateral do Finder.

**2. Instalar o Claude Code** (só na primeira vez)
1. Aperte **Cmd+Espaço**, digite `Terminal` e aperte **Enter**. Abre uma janela com texto: é o terminal.
2. Copie a linha abaixo, cole no Terminal com **Cmd+V** e aperte **Enter**:
   ```bash
   curl -fsSL https://claude.ai/install.sh | bash
   ```
3. Espere terminar. **Feche o Terminal (Cmd+Q) e abra de novo.**
4. Confira: digite `claude --version` e aperte Enter. Apareceu um número de versão? Instalado.
   Apareceu `command not found: claude`? Cole isto, aperte Enter e tente de novo:
   ```bash
   echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc && source ~/.zshrc
   ```

**3. Entrar na pasta**
Digite `cd ` (com um espaço no fim), **arraste a pasta `imersao-manha` do Finder para dentro do Terminal** (o caminho aparece sozinho) e aperte **Enter**. Ou digite:
```bash
cd ~/Desktop/imersao-manha
```

**4. Abrir o Claude Code**
Digite `claude` e aperte Enter.

Dica: no Finder, a pasta `.claude` (onde ficam as skills) é escondida. **Cmd+Shift+.** mostra. Ela está lá, e o Claude Code a encontra sozinho.

---

## Primeira vez (Windows e Mac)

1. O Claude Code pergunta o tema de cores: escolha qualquer um com as setas e aperte Enter.
2. Escolha **entrar com a conta do Claude** (Claude account). O navegador abre: entre com a sua conta e clique em **Autorizar**. Volte ao terminal.
3. Ele pergunta se você confia nos arquivos desta pasta (*Do you trust the files in this folder?*): escolha **Sim** (*Yes, proceed*).
4. Pronto: aparece uma caixa para digitar. É ali que você conversa.

Sem terminal? Também dá pelo **app do Claude** (computador): aba **Code** → escolha a pasta `imersao-manha`. O resto da manhã funciona igual.

## O prompt

Copie e cole na caixa do Claude Code:

```
O que você consegue fazer nesta pasta?
```

## Resultado esperado

Em poucas linhas, ele diz que a pasta é da aula com a **Torra Viva** (empresa fictícia), cita os dados em `dados/`, os 6 passos e as skills que já vêm prontas.

Teste também: digite `/` e veja a lista de comandos. As skills da pasta (`eli5`, `frontend-design`, `humanizer`...) aparecem ali.

## Atalhos que você vai usar

| Tecla | O que faz |
|---|---|
| **Enter** | Envia a mensagem |
| **Esc** | Para o que o Claude está fazendo |
| `/clear` | Começa uma conversa nova (um assunto por conversa) |
| `/exit` | Sai do Claude Code |
| **Shift+Tab** | Troca o modo de permissão (ex.: aceitar edições sem perguntar) |

## Se der errado

- **"claude não é reconhecido" / "command not found":** feche e abra o terminal. Depois, veja o passo 2 do seu sistema.
- **O navegador não abriu para o login:** copie o endereço que apareceu no terminal e cole no navegador.
- **"Your plan doesn't include Claude Code":** a conta é do plano grátis. Precisa de Pro ou superior.
- **Abriu o Claude na pasta errada:** digite `/exit`, entre na pasta certa com `cd` e rode `claude` de novo.

✅ **Pronto quando:** o Claude respondeu a pergunta nesta pasta. Marque o passo 1 em `progresso.md`.
