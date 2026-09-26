# GitHub basics

> Everything you build in this course is saved on GitHub. This page teaches the parts you need, starting from zero, using only your browser.

You'll use this page mostly in weeks 1–3. In week 4 you move to Codespaces ([codespaces.md](codespaces.md)), and the same ideas carry over. For a one-page summary of git commands, see the [git cheat sheet](../resources/git-cheatsheet.md).

## What Git and GitHub are

**Git** is a tool that records the history of a folder of files. Each time you save a snapshot, called a **commit**, git remembers exactly what every file looked like. You can compare any two snapshots and go back to an earlier one. In this course, a commit is your **save point**: if the AI breaks something, you return to the last one that worked.

**GitHub** is a website that stores git folders online and adds useful extras: a web editor, a place to publish websites (GitHub Pages), cloud computers for coding (Codespaces) and an AI assistant (Copilot).

A few words you'll see everywhere (more in the [glossary](../resources/glossary.md)):

| Word | Meaning |
|---|---|
| **Repository** (repo) | One project: a folder of files plus its full history |
| **Commit** | A saved snapshot of the repository, with a message saying what changed |
| **Branch** | A separate line of work. Every repo starts with one branch, called `main` |
| **Push / pull** | Send your commits up to GitHub / bring commits down from GitHub. The web editor does this for you |
| **Diff** | The differences between two versions: lines removed (red) and added (green) |
| **Fork / template** | Ways to start your own repository from someone else's |

## Your account and profile

If you haven't created your account yet, follow [accounts.md](accounts.md) first. Then make your profile look like a portfolio, because it will become one:

1. Click your profile photo (top right) → **Your profile** → **Edit profile**.
2. Add your name (optional), a one-line bio ("Learning to build web apps with AI") and, if you like, a photo.
3. Later in the course, use **Customize your pins** on your profile page to show your best projects first.

> [!TIP]
> Your username appears in the address of every site you publish: `https://<username>.github.io`. You can change it in Settings, but every link you've shared will break. If you're going to change it, do it before week 1.

## Repositories

A repository is a project. In this course you'll create several:

| Repository | Weeks | What goes in it |
|---|---|---|
| `<username>.github.io` | 1–2 | Your home page, and your game in a `game/` folder |
| Project 1 (you choose the name) | 3–4 | A tool you'd actually use |
| AI micro-app | 5 | An app with a server part |
| Capstone | 6–8 | Your final project |

Every repository should have a **README.md**: the page GitHub shows under the file list. It says what the project is and how to use it. You'll learn to write one [below](#markdown-basics-for-readmes).

## Public or private

When you create a repository, you choose:

- **Public:** anyone on the internet can see the files and their **entire history**. This is how a portfolio works, and it's what the course expects for your projects.
- **Private:** only you, and people you invite, can see it. Good for practice.

Two consequences matter:

1. **GitHub Pages needs public repositories** on a free account. Your home page and Project 1 must be public to be published.
2. **Anything you commit to a public repository is public forever**, even if you delete it in a later commit, because the old version stays in the history. So never commit passwords, API keys, `.env` files, or personal information about other people. If a secret is ever committed, **revoke it** (cancel it at the service that issued it) and make a new one. Deleting the file isn't enough.

## Create a repository

1. On any GitHub page, click **+** (top right) → **New repository**.
2. **Repository name:** short, lowercase, words joined with hyphens, such as `habit-tracker`. (For your home page, the name must be exactly `<username>.github.io`; see [GitHub Pages](#publish-a-site-with-github-pages).)
3. **Description:** one sentence (optional).
4. Choose **Public** or **Private**.
5. Tick **Add a README file**. A README gives the repository its first commit, and some tools need that.
6. Click **Create repository**.

✅ **Checkpoint:** you see your new repository with one file, `README.md`, and "1 commit" near the top of the file list.

## Upload files

This is how you'll add the page you build in week 1.

1. Open your repository and click **Add file** → **Upload files**.
2. Drag your files onto the page, or click **choose your files**.
3. Under **Commit changes**, write a message such as `Add first version of home page`.
4. Leave **Commit directly to the `main` branch** selected, and click **Commit changes**.

**To put a file inside a folder:** click **Add file** → **Create new file**, and type the folder name followed by a slash in the name box, for example `game/`. GitHub turns it into a folder. Then type the file name (`index.html`), paste the contents, and commit. You can't upload an empty folder; a folder exists only when there's a file in it.

> [!NOTE]
> File names are **case-sensitive** on GitHub. `Index.html`, `index.HTML` and `index.html` are three different names. Web pages should use lowercase names with no spaces: `about-me.html`, not `About Me.html`.

## Edit a file and commit on the web

1. Click a file to open it, then click the **pencil icon** (Edit this file).
2. Make your change. The **Preview** tab shows how Markdown files will look.
3. Click **Commit changes…**, write a message, and click **Commit changes**.

Each commit should be **one small, working change**, which is step 6 of the [Safe Loop](../resources/safe-loop.md).

### Write a good commit message

A commit message tells future-you what changed and why. Start with a verb and be specific.

| Weak | Better |
|---|---|
| `update` | `Add contact section with email link` |
| `fix` | `Fix score not resetting when game restarts` |
| `changes from AI` | `Make header sticky on small screens` |

## Edit several files at once with github.dev

From week 2 you'll often change more than one file at a time. **github.dev** is a lightweight version of the VS Code editor that opens in your browser, straight from any repository.

1. Open your repository on github.com and **press the `.` (full stop) key**. (Or change `github.com` to `github.dev` in the address bar.)
2. The editor opens with your files in the **Explorer** on the left. Click a file to edit it.
3. When you've made a change, click the **Source Control** icon on the left (it looks like a branching line). Your changed files are listed there.
4. Click a changed file to see a **diff**: old version on the left, new on the right.
5. Type a commit message in the box at the top and click **Commit & Push**.

✅ **Checkpoint:** back on github.com (refresh the page), your change and your commit message appear.

github.dev is free and doesn't use your Codespaces hours. But it **can't run code**: there's no terminal and no preview server. To see your page, use GitHub Pages or, from week 4, a Codespace.

## See your history

Your history is the list of every commit: who made it, when, and what changed.

- **Whole repository:** on the repository page, click the **commits** link (a clock icon with a number, near the top of the file list).
- **One file:** open the file and click **History**.
- **One commit:** click its message. You'll see the diff for every file it changed: red lines were removed, green lines were added.

Reading diffs is a core skill in this course. It's step 5 of the Safe Loop: before you keep a change, read what actually changed.

## Undo a change

**Before you commit:** in the web editor, click **Cancel changes**. In github.dev, in the Source Control panel, hover over the file and click the **Discard changes** arrow.

**After you commit, on the web:** there's no one-click undo for a commit, but you can put an old version back.

1. Open the file's **History** and click the last commit where the file was right.
2. Click **Browse files** (or the **…** menu → **View file**) to see the repository as it was at that commit. Open your file.
3. Copy the whole file (the **Copy raw file** button, or open **Raw** and select everything).
4. Go back to the current version of the file, click the pencil icon, select everything, paste the old version over it, and commit with a message such as `Revert header to version before sticky change`.

**In a Codespace (week 4 onward):** the terminal command `git revert <commit-id>` makes a new commit that undoes an old one. See the [git cheat sheet](../resources/git-cheatsheet.md).

> [!TIP]
> Reverting is easy when commits are small. If one commit changed twelve things, you can't undo just the one that broke. That's why the course asks for one commit per working step.

## Markdown basics for READMEs

**Markdown** is a simple way to format text using ordinary characters. README files, and most files in this course, are written in it. This:

```markdown
# Habit Tracker

A tiny app for tracking **three daily habits**. Your data stays in your browser.

## How to use it

1. Type a habit and press **Add**.
2. Tick it off each day.
3. Reload the page: your habits are still there.

## Links

- Live site: [my habit tracker](https://example.github.io/habit-tracker/)
- Built with the [Safe Loop](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101)

![Screenshot of the app](docs/screenshot.png)

| Feature | Status |
|---|---|
| Add a habit | ✅ done |
| Weekly chart | not started |

Run it locally with `python3 -m http.server 8000`.
```

…shows up on GitHub as a formatted page with a title, bold text, a numbered list, links, an image, a table and a bit of code.

| You type | You get |
|---|---|
| `# Title`, `## Section` | A big heading, a smaller heading |
| `**bold**`, `*italic*` | **bold**, *italic* |
| `- item` or `1. item` | A bulleted or numbered list |
| `[text](https://…)` | A link |
| `![description](path/to/image.png)` | An image (the description is read aloud by screen readers) |
| `` `code` `` | `code` in a fixed-width font |
| A blank line | A new paragraph |

Use the **Preview** tab in GitHub's editor to check your formatting before you commit. The course's README template is [templates/PROJECT_README.md](../templates/PROJECT_README.md).

## Publish a site with GitHub Pages

**GitHub Pages** turns a public repository into a website for free. It serves **static** files: HTML, CSS, JavaScript and images that the browser runs by itself, with no server code. That's everything you build in weeks 1–4.

The file a visitor sees first must be called `index.html`.

### Your home page: `<username>.github.io`

Your home page lives in a repository with a special name. If your username is `alexkim`, the repository must be called `alexkim.github.io`, and the site appears at `https://alexkim.github.io`.

1. Create a **public** repository named exactly `<username>.github.io`, using your own username in lowercase ([how](#create-a-repository)).
2. Upload your page as `index.html`, at the top level of the repository, not inside a folder ([how](#upload-files)).
3. Go to the repository's **Settings** tab → **Pages** (left sidebar).
4. Under **Build and deployment**, check that **Source** is **Deploy from a branch** and **Branch** is **`main`** with the folder **`/ (root)`**. If not, choose them and click **Save**.
5. Wait a minute or two. To watch progress, open the **Actions** tab: a run called **pages build and deployment** turns into a green tick when the site is live.
6. Back in **Settings** → **Pages**, a banner says **Your site is live at…**. Click **Visit site**.

✅ **Checkpoint:** `https://<username>.github.io` shows your page, from any device.

**Adding pages later:** a file at `game/index.html` in the same repository appears at `https://<username>.github.io/game/`. A file called `about.html` appears at `https://<username>.github.io/about.html`.

### A project site

Any other public repository can have its own site too, such as Project 1.

1. Make sure the repository is **public** and has an `index.html` at the top level.
2. **Settings** → **Pages** → **Source:** **Deploy from a branch** → **Branch:** **`main`** and **`/ (root)`** → **Save**.
3. Wait for the green tick in the **Actions** tab.
4. The site appears at `https://<username>.github.io/<repository-name>/`.

Every time you commit to `main`, GitHub republishes the site automatically. Give it a minute, then reload.

## Fix a GitHub Pages 404

A **404** means "page not found": the address doesn't match a file GitHub is publishing. Work down this table.

| What you see | Likely cause | Fix |
|---|---|---|
| "There isn't a GitHub Pages site here" | Pages isn't turned on, it's still building, or the address is wrong | Check **Settings** → **Pages**. Look for a green tick in **Actions**. Copy the address from **Visit site** rather than typing it |
| **Settings** → **Pages** says to upgrade or make the repository public | The repository is private | Make it public (**Settings** → **General** → **Danger Zone** → **Change visibility**), after checking it contains no secrets |
| Your README appears instead of your page | There's no `index.html` at the top level | Rename your page to `index.html` (lowercase) and move it out of any folder |
| The home page works but a sub-page is 404 | The folder or file name doesn't match the address exactly. Names are case-sensitive | Compare letter by letter: `game/` versus `Game/`, `index.html` versus `index.html.txt` |
| The page loads but has no styling or images | The file paths in your HTML are wrong | Use relative paths like `style.css` or `images/cat.png`. On a project site, a path starting with `/` points at `<username>.github.io`, not your project |
| You still see the old version | The browser cached (saved) the old copy, or the build hasn't finished | Wait for the green tick, then hard-reload: `Ctrl+Shift+R` (Windows, Linux) or `Cmd+Shift+R` (macOS) |
| A red cross in **Actions** | The build failed | Open the failed run and read the error. GitHub Pages runs a tool called Jekyll on your files. Adding an empty file named `.nojekyll` at the top level turns it off and fixes most failures |
| Files or folders whose names start with `_` are missing | Jekyll ignores them | Add an empty `.nojekyll` file at the top level, or rename them |

Still stuck? See [resources/troubleshooting.md](../resources/troubleshooting.md), or ask your chat assistant, pasting the exact error text and your repository's file list (never a password or key).

## Where next

- Week 1 uses the web upload and GitHub Pages: [weeks/01-hello-vibe-coding](../weeks/01-hello-vibe-coding/README.md).
- Week 2 uses github.dev, history and reverting: [weeks/02-prompting-and-save-points](../weeks/02-prompting-and-save-points/README.md).
- From week 4 you work in a Codespace: [codespaces.md](codespaces.md).
- How the web fits together (HTML, CSS, JavaScript, servers): [resources/web-basics.md](../resources/web-basics.md).
