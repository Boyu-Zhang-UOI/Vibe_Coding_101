# GitHub Codespaces

> A Codespace is the VS Code editor running in your browser, on a computer in the cloud. From week 4 onward, it's where you work.

This page covers creating a codespace, finding your way around, running and previewing your projects, using GitHub Copilot, keeping secrets, and starting a project from one of the course's starter kits. If you haven't used GitHub yet, read [github-basics.md](github-basics.md) first.

## What a Codespace is

When you create a **codespace**, GitHub starts a small computer in the cloud, copies your repository onto it, and shows you **VS Code** (a popular code editor) in a browser tab. The cloud computer already has the tools this course needs, such as Node.js and Python, so there's nothing to install on your laptop.

The course uses Codespaces for three reasons:

- **Everyone has the same setup**, whatever laptop they own, so instructions work the same way for everybody.
- **Nothing to install.** A Chromebook or a locked-down work laptop is fine.
- **It's a sandbox.** In weeks 6–8, AI agents edit files and run commands. In a codespace they can only touch that one project, not your own computer. Simon Willison recommends a remote environment like this for running agents ([Willison](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/)).

A few terms (more in the [glossary](../resources/glossary.md)):

- **Terminal:** a text window where you type commands for the computer to run.
- **Port:** a numbered "door" that a running program listens on. A preview server might listen on port 8000.
- **Forwarded port:** Codespaces gives that door a private web address, so your browser can reach a program running on the cloud computer.

### Your free monthly quota

Your GitHub account includes a free monthly allowance of Codespaces **hours** (counted while a codespace is running) and **storage** (counted while a codespace exists, even when stopped). The current numbers are in [TOOLS.md](../TOOLS.md). If you have no payment method on GitHub, running out means codespaces are **blocked until the next month, not billed**. So:

- **Stop** your codespace when you finish a session ([how](#stop-and-delete-codespaces)).
- **Delete** codespaces you no longer need, after pushing your work.
- Use the default (smallest) machine type. Bigger machines use up the allowance faster.

## Create a codespace

1. Open your repository on github.com.
2. Click the green **Code** button → **Codespaces** tab → **Create codespace on main**.
3. A new tab opens. The first start takes a minute or two; later starts are faster.

✅ **Checkpoint:** you see VS Code, with your repository's files listed on the left.

**To come back to it later,** go to [github.com/codespaces](https://github.com/codespaces) and click its name, or use **Code** → **Codespaces** on the repository page. Reopen the **same** codespace rather than creating a new one each time. Your uncommitted work lives in it.

## A tour of the editor

```
┌────┬──────────────┬──────────────────────────────────────┐
│ A  │  B           │  C  Editor (open files, as tabs)     │
│ c  │  Side bar    │                                      │
│ t  │  (Explorer,  │                                      │
│ i  │  Search,     ├──────────────────────────────────────┤
│ v  │  Source      │  D  Panel: TERMINAL · PORTS ·        │
│ i  │  Control…)   │     PROBLEMS · OUTPUT                │
│ t  │              │                                      │
│ y  │              │                                      │
├────┴──────────────┴──────────────────────────────────────┤
│ E  Status bar: codespace name · branch · Copilot icon    │
└──────────────────────────────────────────────────────────┘
```

| Part | What it's for |
|---|---|
| **A. Activity bar** | Icons that switch the side bar: **Explorer** (files), **Search**, **Source Control** (commits), **Extensions** |
| **B. Side bar** | Shows whatever you picked in the activity bar |
| **C. Editor** | Your open files. A white dot on a tab means the file has **unsaved** changes. Save with `Ctrl+S` (Windows, Linux, ChromeOS) or `Cmd+S` (macOS) |
| **D. Panel** | The **Terminal**, the **Ports** list, and **Problems** (errors the editor noticed) |
| **E. Status bar** | Your current branch, sync status and the Copilot icon |
| **Chat** | GitHub Copilot's chat view opens on the right (see [below](#turn-on-github-copilot-free)) |

Two shortcuts worth learning now:

- **Command Palette:** `Ctrl+Shift+P` (`Cmd+Shift+P` on macOS). Type what you want to do ("stop codespace", "toggle terminal") and pick it from the list. When you can't find a menu, use this.
- **Quick Open:** `Ctrl+P` (`Cmd+P`). Type part of a file name to open it.

> [!TIP]
> Turn on **Auto Save** (menu ☰ → **File** → **Auto Save**) so you never test an old version of a file by mistake.

## The terminal

Open it from the menu (☰ → **Terminal** → **New Terminal**) or with `` Ctrl+` ``. You'll see a **prompt**, something like:

```
@alexkim ➜ /workspaces/habit-tracker (main) $
```

That says who you are (`@alexkim`), which folder you're in (`/workspaces/habit-tracker`) and which branch (`main`). You type after the `$`. The commands in this course never include the `$`.

A few commands to start with:

| Command | What it does |
|---|---|
| `pwd` | Print which folder you're in |
| `ls` | List the files in this folder |
| `cd public` | Move into the `public` folder; `cd ..` moves back up one |
| `clear` | Clear the screen |
| `Ctrl+C` | Stop the program that's running (for example, a preview server) |
| `↑` (up arrow) | Bring back your previous command |

To paste into the terminal, use `Ctrl+V` (`Cmd+V` on macOS), or right-click. Your browser may ask for permission to use the clipboard the first time; allow it.

> [!WARNING]
> **Read a command before you run it,** especially one an AI suggested. Be very careful with anything containing `rm` (delete), `sudo`, `--force` or `reset --hard`. Commit first, so you can go back (safety contract rule 3).

## Preview a static site

A **static site** is plain HTML, CSS and JavaScript, like your week 1–4 projects. To see it running:

1. In the terminal, make sure you're in the folder that contains `index.html` (use `ls` to check).
2. Start a simple web server:

   ```bash
   python3 -m http.server 8000
   ```

3. A notification appears: *Your application running on port 8000 is available.* Click **Open in Browser**.
   If you missed it, open the **Ports** tab in the panel, find port **8000**, and click the globe icon next to its **Forwarded Address**.

✅ **Checkpoint:** your page opens in a new browser tab, at an address ending in `.app.github.dev`.

- **After you change a file,** save it and **reload** the preview tab. This server doesn't reload by itself.
- **When you're done,** click in the terminal and press `Ctrl+C` to stop the server.
- **A list of files instead of your page** means there's no `index.html` in the folder where you started the server.

> [!NOTE]
> Some features, such as JavaScript modules (`<script type="module">`), don't work if you open an HTML file directly from disk. They need a server like this one. That's why the course always previews through a server.

## Run a Node app

From week 5, projects have a small **server** part written in JavaScript that runs on **Node.js**. Starter kits include a `package.json` file listing their commands (called "scripts"). In the project folder:

```bash
node --version
npm install
npm test
npm run dev
```

- `node --version` should print `v20` or higher.
- `npm install` downloads any packages the project needs. The course starters need none, so it finishes almost instantly, but it's a good habit.
- `npm test` runs the automated tests.
- `npm run dev` starts the app. Open it from the notification, or from port **3000** in the **Ports** tab, the same way as above. Stop it with `Ctrl+C`.

Starters that need secrets read them from a `.env` file or from environment variables. Week 5 explains this; see also [Keep secrets in Codespaces secrets](#keep-secrets-in-codespaces-secrets).

### Share a preview (only if you need to)

Forwarded ports are **private** by default: only you, signed in to GitHub, can open the address. That's what you want almost all the time.

If you must let someone else see it (a classmate testing on their phone, say), right-click the port in the **Ports** tab → **Port Visibility** → **Public**. Now **anyone with the link** can use your app while your codespace is running. If the app calls an AI API with your key, they're spending your key. Switch it back to **Private** as soon as you're done. To share a project properly, deploy it instead (GitHub Pages in weeks 1–4, Vercel from week 5).

## Save your work: commit and push

A commit made in a codespace lives **only in that codespace** until you **push** it to GitHub. Push at the end of every session.

1. Click the **Source Control** icon in the activity bar. Changed files are listed.
2. Click a file to read its diff. Keep only what you can explain (Safe Loop step 5).
3. Type a message in the box and click **Commit**. If asked whether to stage all changes, choose **Yes**.
4. Click **Sync Changes** (or **Publish Branch**) to push your commits to GitHub.

Or, in the terminal:

```bash
git add -A
git commit -m "Add weekly summary chart"
git push
```

✅ **Checkpoint:** on github.com, refresh your repository. Your commit message appears at the top of the file list.

## Turn on GitHub Copilot Free

**GitHub Copilot** is the AI assistant built into VS Code. Every GitHub account can use **Copilot Free**. Verified students can use **Copilot Student** instead ([accounts.md](accounts.md)). What each plan includes is in [TOOLS.md](../TOOLS.md).

1. On github.com, go to [Settings → Copilot](https://github.com/settings/copilot) and turn on Copilot Free (or confirm that Copilot Student is active).
2. On the same page, **turn off use of your data for training** ([privacy-settings.md](privacy-settings.md#github-copilot)).
3. In your codespace, look for the **Copilot icon** in the status bar and the **chat icon** at the top of the window. If you see **Use AI Features** or **Set up Copilot**, click it and follow the prompts. You're already signed in with GitHub.

> [!NOTE]
> Menus move. Copilot's buttons and mode names change between VS Code versions. If something here doesn't match, ask Copilot itself ("How do I switch to agent mode?") or ask your instructor.

### The three ways you'll use Copilot

**1. Completions.** As you type, Copilot suggests the rest of the line in grey "ghost text". Press `Tab` to accept it or `Esc` to dismiss it. Accept only what you understand.

**2. Chat.** Open the Chat view: click the chat icon, or press `Ctrl+Alt+I` (`Ctrl+Cmd+I` on macOS). Below the message box, a picker lets you choose a **mode**:

| Mode | What it does | When the course uses it |
|---|---|---|
| **Ask** | Answers questions and explains code. Doesn't change your files | Week 4 onward: "Explain this function", "Why does this error happen?" |
| **Plan** | Researches your request and writes a step-by-step plan, without editing anything | Weeks 6–8: plan first, then build (Safe Loop step 2) |
| **Agent** | Edits files and runs terminal commands itself, asking your permission for commands | Weeks 6–8, once you've learned how agents work |

Some versions also show an **Edit** mode, which changes files you choose but doesn't run commands. To give Copilot a specific file as context, drag it into the chat box, or type `#` and pick it.

**3. Copilot CLI.** A terminal version of the agent, introduced in week 6. The week 6 lab has the setup steps.

### Approving what the agent does

In Agent mode, Copilot shows each terminal command it wants to run and waits for you to click **Allow** (or **Continue**).

- **Read every command before you allow it.** If you don't understand it, ask: "What will this command do?"
- Choose the option to allow **once**, not "always".
- Don't turn on settings that approve every command automatically.
- Before each agent task, commit. After it, read the diff and commit again (safety contract rule 3).

### Credits

Chat and agent requests use your plan's monthly allowance of AI credits. Agent mode uses much more than Ask mode. When the allowance runs out, chat and agent mode **stop** until it resets. Click the Copilot icon in the status bar to see how much you've used. Numbers are in [TOOLS.md](../TOOLS.md), and what to do when you run out is in [troubleshooting](../resources/troubleshooting.md#i-ran-out-of-free-credits).

## Turn Copilot off for AI-off activities

Some activities are done with the AI off, like the week 4 **Debug Clinic** and the **oral walkthroughs**, because the point is to practice your own skills. To switch Copilot off in a codespace:

1. Open **Settings**: menu ☰ → **File** → **Preferences** → **Settings**, or `Ctrl+,` (`Cmd+,` on macOS).
2. Make sure the **User** tab is selected, then search for `disable AI features`.
3. Tick **Chat: Disable AI Features**.

✅ **Checkpoint:** the chat view disappears and no grey suggestions appear as you type.

When the activity is over, untick the same setting to turn Copilot back on.

In the Debug Clinic you may use **tutor mode** after 10 minutes on a bug: a chat assistant that gives only hints, set up with the prompt in [instructor/course-tutor.md](../instructor/course-tutor.md). That's 🟡 Limited use, and it's the only AI allowed there.

## Stop and delete codespaces

**Stop** a codespace whenever you finish a session. It stops using your monthly hours, and everything in it, including uncommitted changes, is kept.

- In the codespace: Command Palette (`Ctrl+Shift+P`) → **Codespaces: Stop Current Codespace**.
- Or on [github.com/codespaces](https://github.com/codespaces): **…** next to the codespace → **Stop codespace**.

Codespaces also stop by themselves after a period of inactivity. Don't rely on that: every idle minute before it kicks in uses your allowance. You can shorten the wait under **Settings** → **Codespaces** → **Default idle timeout**.

**Delete** a codespace when you've finished with that project, or when you want a fresh one. A stopped codespace still uses storage.

1. **Commit and push first.** Deleting a codespace destroys everything in it that isn't on GitHub.
2. On [github.com/codespaces](https://github.com/codespaces): **…** → **Delete**.

GitHub also deletes codespaces automatically after they've been stopped for a long time (you can see and change the period under **Settings** → **Codespaces**). One more reason to push at the end of every session.

**Check your usage** in your GitHub account's billing settings (profile photo → **Settings** → **Billing and licensing** → **Usage**; menus move). If you've ever added a payment method to GitHub, check your budgets there too, so Codespaces can't charge you.

## Keep secrets in Codespaces secrets

From week 5, your apps need an **API key**: a secret password that lets your server use an AI service. Week 5 teaches the standard way to handle it, a `.env` file that is listed in `.gitignore` so git never saves it. **Codespaces secrets** are an alternative that keeps the key out of your project folder entirely.

1. On github.com: profile photo → **Settings** → **Codespaces** → **Codespaces secrets** → **New secret**.
2. **Name:** the environment variable name your code expects, for example `LLM_API_KEY`.
3. **Value:** paste the key. (This is the one place it's fine to paste it.)
4. **Repository access:** choose the repository that needs it.
5. Click **Add secret**. If a codespace for that repository is already running, VS Code offers to reload it; accept. Otherwise stop and restart it.

The secret is now an **environment variable** (a named value that programs can read) inside every codespace for that repository. The course starters read keys with `process.env`, so they find it with no `.env` file at all. Settings that aren't secret, like `LLM_BASE_URL` and `LLM_MODEL`, can stay in `.env` or be added the same way. Put each variable in one place only, so you always know which value is in use. (If a variable is in both, the course starters use the Codespaces secret and ignore the `.env` line.)

To check that the key arrived **without printing it on screen**:

```bash
test -n "$LLM_API_KEY" && echo "LLM_API_KEY is set"
```

| | `.env` file | Codespaces secret |
|---|---|---|
| Where the key lives | A file in your project folder | Your GitHub account settings |
| Risk of committing it by mistake | Yes, if `.gitignore` is wrong | No, it's never a file in the project |
| Can an AI agent read it? | Yes, if it opens the file | Yes, if it runs a command such as `env`, so still approve commands carefully |
| Works on your laptop too | Yes | No, only in codespaces |
| Needed for deployment | No. Set the key in Vercel's settings ([week 5](../weeks/05-apis-secrets-servers/README.md)) | Same |

## Start a project from a starter

From week 4, several activities begin from a **starter kit**: a small ready-made project in this course's repository. You'll copy it into **your own** repository, so you can commit, deploy and show it in your portfolio. There are two ways to do it. Use the first if your instructor has set it up.

### Way 1 (preferred): use your instructor's template repository

Your instructor publishes each starter as a **template repository**, a GitHub repository that others can copy with one click. The course's own templates are linked in [the starters table](#the-starters) below. If your instructor published their own copies, use the links on your course page instead.

1. Open the template link and click **Use this template** → **Create a new repository**. (Don't choose **Open in a codespace** from that menu: it creates a codespace without a repository of your own.)
2. **Owner:** choose **your personal account**, not an organization, even if you're a member of one for this class. Vercel's free Hobby plan can't deploy repositories owned by an organization, and you'll deploy from week 5.
3. **Repository name:** your own, for example `ai-quote-helper` or `capstone-study-buddy`.
4. Choose **Public**.
5. Click **Create repository**.
6. In your new repository: **Code** → **Codespaces** → **Create codespace on main**.

✅ **Checkpoint:** your codespace shows the starter's files, and the repository on github.com belongs to you (`github.com/<your-username>/<name>`).

### Way 2 (fallback): copy the starter with degit

This works whenever the course repository is public, even if no template has been published.

1. Create a new **public** repository in your personal account and tick **Add a README file** ([how](github-basics.md#create-a-repository)).
2. Open a codespace on it: **Code** → **Codespaces** → **Create codespace on main**.
3. In the terminal, run the command for your starter from the list below. For example, for week 5:

   ```bash
   npx --yes degit Boyu-Zhang-UOI/Vibe_Coding_101/weeks/05-apis-secrets-servers/starter --force
   ```

   [degit](https://www.npmjs.com/package/degit) is a small, widely used tool that copies a folder from a GitHub repository without its history. `npx --yes` downloads and runs it once. `--force` lets it copy into your folder even though it already has a README; the starter's README replaces yours.

4. Run `ls -a` and check that the starter's files are there.
5. Commit and push:

   ```bash
   git add -A
   git commit -m "Start from the course starter"
   git push
   ```

✅ **Checkpoint:** on github.com, your repository shows the starter's files and your commit.

### The starters

| Week | Starter | Path in the course repository | Template (click, then **Use this template**) |
|---|---|---|---|
| 4 | Debug Clinic (contains bugs on purpose) | `weeks/04-read-debug-own-it/debug-clinic` | [vc101-debug-clinic](https://github.com/Boyu-Zhang-UOI/vc101-debug-clinic) |
| 5 | AI micro-app starter | `weeks/05-apis-secrets-servers/starter` | [vc101-micro-app-starter](https://github.com/Boyu-Zhang-UOI/vc101-micro-app-starter) |
| 6 | Be the Agent kit (contains a bug on purpose) | `weeks/06-agents/be-the-agent` | [vc101-be-the-agent](https://github.com/Boyu-Zhang-UOI/vc101-be-the-agent) |
| 6–8 | Capstone starter | `projects/capstone-starter` | [vc101-capstone-starter](https://github.com/Boyu-Zhang-UOI/vc101-capstone-starter) |
| 7 | RLS Attack Lab | `weeks/07-security-and-review/rls-lab` | [vc101-rls-lab](https://github.com/Boyu-Zhang-UOI/vc101-rls-lab) |
| 7 | Prompt-injection demo | `weeks/07-security-and-review/injection-demo` | [vc101-injection-demo](https://github.com/Boyu-Zhang-UOI/vc101-injection-demo) |

The degit command for each (copy one line):

- Week 4 Debug Clinic:

  ```bash
  npx --yes degit Boyu-Zhang-UOI/Vibe_Coding_101/weeks/04-read-debug-own-it/debug-clinic --force
  ```

- Week 5 AI micro-app:

  ```bash
  npx --yes degit Boyu-Zhang-UOI/Vibe_Coding_101/weeks/05-apis-secrets-servers/starter --force
  ```

- Week 6 Be the Agent:

  ```bash
  npx --yes degit Boyu-Zhang-UOI/Vibe_Coding_101/weeks/06-agents/be-the-agent --force
  ```

- Capstone:

  ```bash
  npx --yes degit Boyu-Zhang-UOI/Vibe_Coding_101/projects/capstone-starter --force
  ```

- Week 7 RLS Attack Lab:

  ```bash
  npx --yes degit Boyu-Zhang-UOI/Vibe_Coding_101/weeks/07-security-and-review/rls-lab --force
  ```

- Week 7 prompt-injection demo:

  ```bash
  npx --yes degit Boyu-Zhang-UOI/Vibe_Coding_101/weeks/07-security-and-review/injection-demo --force
  ```

If your instructor runs their own copy of the course, replace `Boyu-Zhang-UOI/Vibe_Coding_101` with their repository's path.

### After copying a starter

Read the starter's `README.md` first. Then, for the Node starters (week 5, Be the Agent and the capstone):

```bash
npm test
npm run dev
```

The week 5 starter and the capstone also need a `.env` file made from the example (`cp .env.example .env`) or [Codespaces secrets](#keep-secrets-in-codespaces-secrets). The Debug Clinic is a static site: preview it with `python3 -m http.server 8000`.

## Troubleshooting

| Problem | What to try |
|---|---|
| The codespace is stuck on "Setting up" or won't open | Reload the tab. Try Chrome, Edge or Firefox, or a private window with extensions off. Check [githubstatus.com](https://www.githubstatus.com/) for an outage |
| "You've used your included Codespaces usage" or codespaces are blocked | Your monthly allowance is used up. Delete codespaces you don't need. Until the allowance resets, edit in **github.dev** (press `.` on your repository; no terminal) or use [local-setup.md](local-setup.md), and tell your instructor. See [troubleshooting](../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| The preview tab says "This site can't be reached" or shows an error page | The server isn't running, or it's on a different port. Check the terminal: is the command still running? Check the **Ports** tab for the right number |
| `OSError: [Errno 98] Address already in use` or `EADDRINUSE` | A server is already running on that port, probably in another terminal tab. Find it and press `Ctrl+C`, or use another port: `python3 -m http.server 8001` |
| The preview shows a list of files | You started the server in the wrong folder, or there's no `index.html`. `cd` into the right folder and start it again |
| My change doesn't appear | Save the file (look for the white dot on its tab), then reload the preview. Try a hard reload: `Ctrl+Shift+R` (`Cmd+Shift+R`) |
| `node --version` shows a version below 20 | Run `nvm install --lts`, then open a new terminal and check again |
| `npm ERR! enoent ... package.json` | You're in the wrong folder. Run `ls`: you should see `package.json`. Use `cd` to move to the project folder |
| Copilot doesn't answer, or says you're out of credits | See [Credits](#credits) and [troubleshooting](../resources/troubleshooting.md#i-ran-out-of-free-credits). Meanwhile, use a chat assistant in another tab (fallbacks in [TOOLS.md](../TOOLS.md)) |
| degit says "could not find commit hash" or "destination directory is not empty" | Check the path's spelling: it's case-sensitive and has no trailing `/`. Make sure you included `--force`. Ask your instructor whether the course repository is public |
| degit keeps failing | Use git instead: `git clone --depth 1 https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101.git /tmp/course`, then `cp -r /tmp/course/<path-to-starter>/. .` (replace `<path-to-starter>` with the path from the table), then commit |
| Vercel can't find my repository | The repository is owned by an organization, or you gave Vercel access to selected repositories only. Create the repository in your personal account, or add it in Vercel's GitHub access settings |
| `git push` is rejected | Someone (or you, on the web) committed to GitHub since your last pull. Run `git pull`, then `git push` again. If you see "conflict", stop and ask for help |
| I lost my work | Is the codespace still listed on [github.com/codespaces](https://github.com/codespaces)? Open it: uncommitted work is still there. If it was deleted, only what you pushed survives. Push at the end of every session |

More problems and fixes: [resources/troubleshooting.md](../resources/troubleshooting.md).
