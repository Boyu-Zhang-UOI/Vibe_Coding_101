# Git Cheat Sheet

> Git is your safety net. Every [commit](glossary.md#commit) is a save point you can go back to, whatever an AI does to your files.
> This page shows each idea two ways: **by clicking** (GitHub website, github.dev, or VS Code in a Codespace) and **by typing** (the terminal). Use whichever you're comfortable with. From week 4 on, you'll use both.

**On this page:** [Quick reference](#quick-reference) · [Where you'll use git](#where-youll-use-git) · [Concepts](#concepts) · [The save-point workflow](#the-save-point-workflow) · [Revert vs reset](#revert-vs-reset) · ["Oh no" recipes](#oh-no-recipes)

> [!NOTE]
> Menus move. If a button isn't where this page says, hover over the icons in the left sidebar, or ask your assistant "Where is the Source Control commit button in VS Code?"

---

## Quick reference

Print this table. In the terminal column, replace anything in `<angle brackets>` with your own value, without the brackets.

| I want to… | Click (VS Code in a Codespace) | Type (terminal) |
|---|---|---|
| See what changed since my last commit | Source Control panel → click a file | `git status` then `git diff` |
| Make a save point | Type a message → **Commit** | `git add -A` then `git commit -m "<message>"` |
| Send my commits to GitHub | **Sync Changes** | `git push` |
| Get commits made elsewhere | **Sync Changes** (or ··· → Pull) | `git pull` |
| See the history | Source Control Graph, or Timeline under Explorer | `git log --oneline` |
| See one commit's changes | Click it in the graph | `git show <hash>` |
| Throw away uncommitted changes to one file | Hover the file → **Discard Changes** (curved arrow) | `git restore <file>` |
| Undo a commit, safely | *(use the terminal)* | `git revert --no-edit <hash>` |
| Start a branch | Click the branch name (bottom left) → **Create new branch** | `git switch -c <name>` |
| Switch branches | Click the branch name → pick one | `git switch <name>` |
| Find when some text was added or removed | *(use the terminal)* | `git log --oneline -S "<text>"` |
| Check `.env` is not tracked | *(use the terminal)* | `git ls-files .env` (no output = good) |
| **Never, in this course** | | `git reset --hard` · `git push --force` |

A *hash* is the short code that names a commit, such as `a1b2c3d`. `git log --oneline` shows one per line.

## Where you'll use git

| Weeks | Where | What you can do there |
|---|---|---|
| 1 | **GitHub website** | Upload files (**Add file → Upload files**), commit, see history. |
| 2–3 | **github.dev** (press `.` on your repo's page) | Edit files, commit and push in one click, see diffs. No terminal. |
| 4–8 | **VS Code in a Codespace** | Everything: the Source Control panel *and* a terminal. |

In a Codespace, git is already installed and signed in to your GitHub account. You don't need to set anything up.

---

## Concepts

### Repository

**What it is:** a project folder that git tracks, plus its whole history. *Like a folder with a built-in time machine.* On GitHub, each repository has its own page.

**Click:** on github.com, **+** (top right) → **New repository**. Tick "Add a README file" so it isn't empty.

**Type:** you'll rarely create one from the terminal in this course. To see where you are and what state it's in:

```bash
git status
```

### Commit

**What it is:** a saved snapshot of your files with a message saying what changed. *A save point in a video game.* Commits are cheap. Make lots of small ones.

**Click:**

- *GitHub website:* after uploading or editing a file, write a message and press **Commit changes**.
- *github.dev:* open **Source Control** (the branching-lines icon in the left bar), type a message, press **Commit & Push**. In github.dev, that also sends it to GitHub.
- *VS Code in a Codespace:* open **Source Control**, type a message in the box, press **Commit**, then **Sync Changes** to send it to GitHub. If VS Code asks whether to stage all changes, say yes.

**Type:**

```bash
git add -A
git commit -m "Add high score saved in localStorage"
git push
```

`git add -A` chooses every changed file for the next commit (this is called *staging*). `git commit` makes the save point on your machine. `git push` copies it to GitHub. **Until you push, your commit exists only in your Codespace.**

Good messages say what changed, in a few words: `Fix empty-input bug in add button`, not `update` or `stuff`.

### History

**What it is:** the list of all commits, newest first.

**Click:**

- *GitHub website:* on your repo's page, click the **commits** link (a clock icon with a number) above the file list.
- *VS Code:* the **Source Control Graph** at the bottom of the Source Control panel shows every commit. For one file's history, open **Timeline** at the bottom of the Explorer panel.

**Type:**

```bash
git log --oneline
```

Press `q` to get your prompt back if the list is long.

### Diff

**What it is:** exactly what changed: removed lines in red with `-`, added lines in green with `+`. *Track changes for code.* Reading the diff is step 5 of [the Safe Loop](safe-loop.md), and it's where you catch the AI changing things you didn't ask for.

**Click:**

- *GitHub website:* click any commit in the history.
- *github.dev and VS Code:* in **Source Control**, click a changed file. You get old and new side by side.

**Type:**

```bash
git diff
git diff --staged
git show <hash>
```

The first shows changes you haven't staged yet, the second shows staged changes, and the third shows what one past commit changed.

### Branch

**What it is:** a separate line of commits where you can try something without touching `main`. *A photocopy of the draft to scribble on.* If it works, you merge it back. If not, you switch back to `main` and nothing was harmed. Useful before a risky agent task (week 6).

**Click:** in VS Code, click the branch name in the bottom-left corner → **Create new branch…** → type a name such as `add-dark-mode`. Click it again to switch back to `main`.

**Type:**

```bash
git switch -c add-dark-mode
git push -u origin add-dark-mode
git switch main
```

The first line creates the branch and moves you onto it, the second sends it to GitHub for the first time, and the third takes you back to `main`.

### Pull request

**What it is:** a page on GitHub that proposes merging one branch into another. It shows the diff, and people can comment and approve before anything changes on `main`. You'll use pull requests for code review in [week 7](../weeks/07-security-and-review/).

**Click:** push your branch, then open your repo on github.com. Click the yellow **Compare & pull request** banner (or **Pull requests → New pull request**). Write what you changed and how you tested it, then **Create pull request**. When it's reviewed, press **Merge pull request**.

**Type:** most people create pull requests on the website. After merging on GitHub, update your Codespace:

```bash
git switch main
git pull
```

### .gitignore

**What it is:** a file named `.gitignore` in the top folder of your repo, listing files git must never track. The course starters already have one:

```text
.env
node_modules/
.vercel/
.DS_Store
```

**Click:** create a new file named exactly `.gitignore` in the top folder and type one pattern per line.

**Type:** check that git is ignoring your secrets file:

```bash
git check-ignore .env
git ls-files .env
```

The first should print `.env` (it is ignored). The second should print **nothing** (it is not tracked).

> [!WARNING]
> `.gitignore` only stops *future* tracking. If `.env` was committed before you added the rule, it is still in your history. See [I committed a secret](#i-committed-a-secret).

---

## The save-point workflow

This is the Commit step of [the Safe Loop](safe-loop.md), in practice.

1. **Before you start a step, check you're clean.** Run `git status` or look at Source Control. If it lists changes, commit them or discard them first, so each commit holds one idea.
2. **Do one small step.** Test it: the normal case and at least one edge case.
3. **Read the diff.** Keep only what you can explain. Discard anything you didn't ask for.
4. **Commit with a clear message, then push.**
5. **With an agent (weeks 6–8): commit before and after every agent task.** The "before" commit is your way back. The agent's own undo or checkpoint feature is not a backup; git is ([safety contract rule 3](../setup/safety-contract.md)).

```bash
git status
git add -A
git commit -m "Before agent: add delete button"
```

Then let the agent work, and afterwards:

```bash
git status
git diff
npm test
git add -A
git commit -m "Add delete button with confirmation (agent, reviewed)"
git push
```

If the agent's work is bad, don't commit it. Go back with [the agent made a mess](#the-agent-made-a-mess).

---

## Revert vs reset

There are two ways to "undo" in git. Use the first.

| | `git revert <hash>` (use this) | `git reset --hard <hash>` (avoid) |
|---|---|---|
| What it does | Makes a **new** commit that does the opposite of an old one | Moves your branch back and **deletes** everything after, including uncommitted work |
| History | Kept. You can see the mistake and the fix, and undo the undo. | Rewritten. Commits after that point disappear from your branch. |
| Safe after you've pushed? | Yes | No. To make GitHub match, you'd need `git push --force`, which overwrites GitHub's copy. |
| Can you recover? | Always | Sometimes, with expert help |

> [!CAUTION]
> Don't run `git reset --hard` or `git push --force` in this course, and don't let an agent run them. They are the git commands that can destroy work. The [AGENTS.md template](../templates/AGENTS.md) tells agents never to use them without asking; if an agent asks, say no and use a revert.

---

## "Oh no" recipes

Start every rescue the same way: **stop, and look before you change anything.**

```bash
git status
git log --oneline
```

### I want to undo my last commit

The safe way keeps history and works even after you've pushed:

```bash
git revert --no-edit HEAD
git push
```

`HEAD` means "the commit you're on now". Git makes a new commit called `Revert "…"`, and `--no-edit` accepts that message without opening an editor. To undo an older commit, use its hash instead: `git revert --no-edit <hash>`.

### I want to throw away changes I haven't committed

For one file:

```bash
git restore app.js
```

For every file:

```bash
git restore .
```

**Click:** in Source Control, hover a file and click **Discard Changes**. This cannot be undone, so read the diff first to make sure you don't want any of it. Brand-new files that were never committed aren't affected by `git restore`; delete them yourself if you don't want them.

### I deleted a file

**Not committed yet** (it shows as deleted in `git status`):

```bash
git restore style.css
```

**Already committed:** find the commit that deleted it, then take the file from just before that commit. `~1` means "the commit before".

```bash
git log --oneline --diff-filter=D -- style.css
git restore --source=<hash>~1 -- style.css
git add style.css
git commit -m "Restore style.css"
```

### I want yesterday's version back

First, look without changing anything. On github.com, open your commit history and click the **`<>`** button (Browse the repository at this point) next to yesterday's last good commit. Check it really is the version you want.

Then bring it back, keeping history. This undoes every commit after the good one, in a single new commit:

```bash
git log --oneline
git revert --no-commit <good-hash>..HEAD
git commit -m "Go back to the version from <day>"
git push
```

Replace `<good-hash>` with the hash of the last commit you want to *keep*. If you only need one file back, it's simpler:

```bash
git restore --source=<good-hash> -- index.html
git add index.html
git commit -m "Restore index.html from <day>"
```

**No terminal (week 2):** do it on github.com, as in the [week 2 lab](../weeks/02-prompting-and-save-points/lab.md). Open the file and click **History**. Next to the good commit, copy its hash and click **`<>`** (Browse repository at this point). Open the file and click **Copy raw file**. Go back to `main`, open the file again, click the **pencil** (Edit this file), select everything, paste, and commit with a message such as `Restore working version from 4f2a9c1`. If you have github.dev open, close it and press `.` again afterwards, or you'll be editing an old copy.

### The agent made a mess

1. **Stop the agent** (its stop button, or **Esc** in a terminal agent). Don't ask it to fix its own damage yet.
2. See what it changed:

   ```bash
   git status
   git diff --stat
   ```

3. **If it didn't commit:** throw it all away and go back to your "before" commit:

   ```bash
   git restore .
   ```

   Files the agent *created* show under "Untracked files" in `git status`. Read the list and delete the ones you don't want. Don't use commands you don't understand to do this in bulk.
4. **If it committed:** revert its commits (see [yesterday's version](#i-want-yesterdays-version-back)).
5. Write down what happened in `PROMPTS.md`, then follow [the two-strikes rule](safe-loop.md#the-two-strikes-rule): fresh session, better prompt, smaller task.

More help: [troubleshooting: the agent broke or deleted things](troubleshooting.md#the-agent-broke-or-deleted-things).

### I committed a secret

> [!WARNING]
> **Revoke the key first.** Deleting it from your code does not remove it from git history, and public repos are scanned by bots constantly. A revoked key is harmless wherever it appears.

1. **Revoke (delete) the key** on the provider's website and create a new one. Do this before anything else.
2. Put the new key in `.env` (and in your host's environment variables, then redeploy).
3. Remove the old key from your code, and check `.gitignore` lists `.env`.
4. Commit and push.
5. Check that nothing else leaked:

   ```bash
   npm run check:secrets
   git log --oneline -S "<first few characters of the old key>"
   ```

The old key is still in your history, but it no longer works. Don't try to rewrite history with `git push --force`; ask your instructor if you think you need to. Full steps: [troubleshooting](troubleshooting.md#i-committed-a-secret).

### I have a merge conflict

Git found the same lines changed in two places and wants you to choose. See [troubleshooting: merge conflicts](troubleshooting.md#i-have-a-merge-conflict).

### Git says "detached HEAD"

You're looking at an old commit instead of a branch. Nothing is broken. Go back to `main`:

```bash
git switch main
```

---

Practice these before you need them. Reverting a bad commit is one of the [six skills you must show without AI](without-ai-skills.md#4-revert-a-bad-commit).
