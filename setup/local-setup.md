# Optional: set up your own computer

> You don't need this page to complete the course. Everything runs in GitHub Codespaces. Use it if you want to work offline, have run out of Codespaces hours, or want to keep working after the course ends.

Setting up takes 30–60 minutes. You'll install three things:

| Tool | What it is | Why you need it |
|---|---|---|
| **VS Code** | The code editor, the same one you use in Codespaces | Editing, Source Control, GitHub Copilot |
| **Git** | The version-control tool behind GitHub | Commits, history, push and pull |
| **Node.js** (LTS version, 20 or newer) | Runs JavaScript outside the browser, plus **npm**, its package manager | Running the week 5+ starters and their tests |

**LTS** means "long-term support": the stable version most people should use. The course's code needs Node.js 20 or newer. Some AI command-line tools need newer still, so install whatever the current LTS is.

> [!WARNING]
> **On your own computer, an AI agent can reach your own files.** Agents have overwritten real users' files and, in one case, wiped a whole drive ([AI Incident Database #1178](https://incidentdatabase.ai/cite/1178/); [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/googles-agentic-ai-wipes-users-entire-hard-drive-without-permission-after-misinterpreting-instructions-to-clear-a-cache-i-am-deeply-deeply-sorry-this-is-a-critical-failure-on-my-part)). Keep course projects in one dedicated folder, open only a single project in the editor, and do agent work (weeks 6–8) in a Codespace unless your instructor says otherwise. See [When to stay in Codespaces](#when-to-stay-in-codespaces).

## macOS

1. **Git.** Open the **Terminal** app and run:

   ```bash
   xcode-select --install
   ```

   Click **Install** in the window that appears. This installs Apple's command-line tools, which include Git and Python 3. If it says they're already installed, you're done.

2. **VS Code.** Download it from [code.visualstudio.com](https://code.visualstudio.com/), open the downloaded file, and drag **Visual Studio Code** into **Applications**. Open it once, then open the Command Palette (`Cmd+Shift+P`) and run **Shell Command: Install 'code' command in PATH**. You can then type `code .` in Terminal to open a folder.

3. **Node.js.** Choose one:
   - **Official installer (simplest):** download the **LTS** macOS installer from [nodejs.org](https://nodejs.org/) and run it.
   - **A version manager (flexible):** tools such as [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm) let you switch Node versions per project. Follow their install instructions, then run `nvm install --lts` (or `fnm install --lts`).

## Windows

1. **Git.** Download **Git for Windows** from [git-scm.com](https://git-scm.com/downloads/win) and run the installer. The default options are fine. When asked for a default editor, you can pick **Visual Studio Code**. The installer includes **Git Credential Manager**, which handles signing in to GitHub, and **Git Bash**, a terminal that understands the same commands as Codespaces.

2. **VS Code.** Download the **User Installer** from [code.visualstudio.com](https://code.visualstudio.com/) and run it. Tick **Add "Open with Code" action** and **Add to PATH** when offered.

3. **Node.js.** Download the **LTS** Windows installer (`.msi`) from [nodejs.org](https://nodejs.org/) and run it with the default options. Or, in PowerShell:

   ```bash
   winget install OpenJS.NodeJS.LTS
   ```

4. **Python (only for previewing static sites).** Install it from [python.org](https://www.python.org/downloads/) and tick **Add python.exe to PATH**. On Windows the command is usually `py` or `python` rather than `python3`.

### Windows notes

- **Which terminal?** VS Code's built-in terminal opens **PowerShell** by default. Most commands in this course work there. A few differ: to copy a file, use `Copy-Item .env.example .env` instead of `cp .env.example .env`. To get the same commands as in Codespaces, switch the terminal to **Git Bash** (the **⌄** next to the **+** in the terminal panel).
- **WSL (optional).** The Windows Subsystem for Linux runs a real Linux system inside Windows. You don't need it for this course. Some open-source AI terminal tools recommend it, though, so if you try those later, see Microsoft's [WSL install guide](https://learn.microsoft.com/windows/wsl/install).
- **Line endings.** If git warns about `LF will be replaced by CRLF`, that's normal on Windows and harmless for this course.

## Linux

Instructions for Ubuntu and Debian; other distributions have equivalents.

1. **Git and Python:**

   ```bash
   sudo apt update
   sudo apt install git python3
   ```

2. **VS Code.** Download the `.deb` package from [code.visualstudio.com](https://code.visualstudio.com/) and install it, for example with `sudo apt install ./code_*.deb` from the download folder.

3. **Node.js.** Your distribution's own `nodejs` package is often too old. Use a version manager such as [nvm](https://github.com/nvm-sh/nvm), then:

   ```bash
   nvm install --lts
   ```

## Check your installation

Close and reopen your terminal, then run:

```bash
git --version
node --version
npm --version
```

✅ **Checkpoint:** each command prints a version number, and `node --version` prints `v20` or higher.

## Tell git who you are

Git records a name and email address with every commit. Use the private **noreply** address GitHub gives you, so your real email doesn't appear in public repositories. Find it under GitHub **Settings** → **Emails**; it ends in `@users.noreply.github.com`.

```bash
git config --global user.name "Your Name"
git config --global user.email "12345678+yourusername@users.noreply.github.com"
```

Replace both values with your own.

## Sign in to GitHub in VS Code

1. In VS Code, click the **Accounts** icon (the person, bottom left) → **Sign in with GitHub**.
2. Your browser opens. Sign in to GitHub and approve the request, then allow the browser to return to VS Code.
3. The first time you push, Git may open the browser again to sign you in. That's expected.

> [!IMPORTANT]
> Never type your GitHub password into a terminal. GitHub doesn't accept passwords there. Sign-in always happens in the browser.

## GitHub Copilot on your computer

Copilot is built into VS Code. Once you're signed in with GitHub, click the **Copilot** icon in the status bar, or **Use AI Features** if it's offered. It uses the same plan (Free or Student) and the same monthly allowance as in Codespaces. The modes and approvals work the same way: see [codespaces.md](codespaces.md#turn-on-github-copilot-free).

- Your privacy setting on github.com applies here too ([privacy-settings.md](privacy-settings.md#github-copilot)).
- To stop VS Code sending usage statistics: **Settings** → search `telemetry` → set **Telemetry Level** to **off**.
- To turn AI off for AI-off activities: **Settings** → search `disable AI features` → tick **Chat: Disable AI Features**.

## Get a project onto your computer

**Cloning** means downloading a repository, with its full history, so you can work on it locally.

1. Make a folder for all your course work, for example `vc101` inside your Documents folder. Keep course projects only there.
2. On github.com, open your repository, click **Code** → **Local** tab, and copy the **HTTPS** address.
3. In a terminal (use `cd` to go into your `vc101` folder first):

   ```bash
   git clone https://github.com/yourusername/your-repo.git
   cd your-repo
   code .
   ```

   Or, in VS Code: Command Palette → **Git: Clone** → paste the address → choose your `vc101` folder.

To start a **new** project from a course starter, first create the repository on GitHub and clone it, then run the degit command from [codespaces.md](codespaces.md#start-a-project-from-a-starter) inside the cloned folder. The same command works on your computer.

## Run the starters

Static sites (weeks 1–4):

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser. (**localhost** means "this computer". On Windows, use `py -m http.server 8000`.)

Node starters (week 5 onward):

```bash
npm install
npm test
cp .env.example .env
npm run dev
```

Then open `http://localhost:3000`. Fill in `.env` as the week 5 lab explains. On Windows PowerShell, replace the `cp` line with `Copy-Item .env.example .env`. Codespaces secrets don't reach your computer, so locally you always use `.env`.

Stop a running server with `Ctrl+C`.

## Keep your laptop and Codespaces in step

Your repository on GitHub is the single source of truth. Before you start work in one place, **pull**. When you stop, **commit and push**.

```bash
git pull
```

If you edit the same file in a codespace and on your laptop without pushing and pulling in between, git will report a **conflict**. That's fixable, but it's easier to avoid.

## When to stay in Codespaces

Stay in Codespaces (or come back to it) when:

- **You're doing agent work (weeks 6–8).** A codespace is a sandbox: an agent there can't reach your personal files, passwords or other projects. That's safety contract rule 4.
- **Your computer is managed by work or school,** or you can't install software on it.
- **Your computer is low on memory or disk space,** or it's a Chromebook.
- **You're stuck and need help.** Your instructor can reproduce problems in a codespace exactly; a local setup has endless small differences.
- **It's an oral walkthrough or an in-class activity,** unless your instructor says otherwise.

Local setup is a good choice when you have no reliable internet, when your Codespaces hours are used up for the month, when you want to try running AI models on your own machine (see the Ollama row in [TOOLS.md](../TOOLS.md); it needs a lot of memory), or after the course, to keep building.

Back to [Week 0 pre-work](README.md) · [Codespaces guide](codespaces.md)
