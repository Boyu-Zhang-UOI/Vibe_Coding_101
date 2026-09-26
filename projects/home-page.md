# Home Page (weeks 1–2)

> Your first project: a personal page, live on the public web by the end of week 1, with a browser game added in week 2. It becomes the portfolio that links to everything else you build.

| | |
|---|---|
| **Weeks** | 1–2 |
| **Repo** | `<username>.github.io` (use your GitHub username, exactly) |
| **Live at** | `https://<username>.github.io/` (page) and `https://<username>.github.io/game/` (game) |
| **Tools** | A chat assistant with live preview (Gemini Canvas, or a fallback from [TOOLS.md](../TOOLS.md)); the GitHub website (week 1); github.dev (week 2) |
| **Due** | Page: end of week 1 · Game: end of week 2 |
| **Graded as** | Part of [Weekly labs and homework](../assessment/rubrics.md#weekly-labs-and-homework) |
| **Step-by-step labs** | [Week 1 lab](../weeks/01-hello-vibe-coding/lab.md) · [Week 2 lab](../weeks/02-prompting-and-save-points/lab.md) |

## What you'll build

1. **Week 1: a personal page.** One HTML file that says who you are, what you're learning and what you're building. You make it with a chat assistant, change parts of it by hand, and publish it with [GitHub Pages](../resources/glossary.md#github-pages) (GitHub's free hosting for static websites) from a [repository](../resources/glossary.md#repository) (a project folder that git tracks).
2. **Week 2: a game.** A small browser game in a `game/` folder of the same repo, built in the timed **Game in an Hour**, one working step at a time, with a [commit](../resources/glossary.md#commit) (a git save point) after each step.

## Why this project

Most vibe-coding courses start the same way, with a small single-file page you can publish on day one ([landscape report](../research/landscape-report-2026-09.md)). A live page in week 1 proves that you can make real things. The game in week 2 proves that the method works on something new, and it gives you instant visual feedback with no server to worry about.

Keep it simple. The point of this project is the loop (describe, generate, run, change, commit, publish), not a perfect design.

## Week 1: the page

**Requirements**

- [ ] One file, `index.html`, at the top level of the repo. Styles go inside a `<style>` tag in that file; any script goes inside a `<script>` tag.
- [ ] Built with a chat assistant that shows a live preview. Afterwards, ask the AI to explain the page section by section, and read the explanation.
- [ ] A `<title>` and a main heading with your name or a display name you choose.
- [ ] At least three sections, for example "About me", "What I'm learning" and "Projects". The Projects section is where you will add links later.
- [ ] **Three changes you made by hand**, typed yourself without AI help. Examples: rewrite a heading, change a color, add an item to a list. Note them in `PROMPTS.md` under "What I wrote or decided myself".
- [ ] Any image has **alt text** (a short description in the `alt="..."` attribute, read aloud by screen readers).
- [ ] Published: a **public** repo named exactly `<username>.github.io`, with GitHub Pages turned on, so the page loads at `https://<username>.github.io/`.
- [ ] A `PROMPTS.md` file in the repo, copied from the [template](../templates/PROMPTS.md), with your most important prompt and what you changed.
- [ ] Ready for the week 1 understanding check: you can explain **three parts** of your page in plain English.

✅ **Checkpoint:** you open `https://<username>.github.io/` in a private window, on your phone or a friend's, and see your page. (A new Pages site can take a few minutes to appear.)

## Week 2: the game

Pick a game from the [game menu](../weeks/02-prompting-and-save-points/game-menu.md), or propose your own of similar size.

**Requirements**

- [ ] The game is one file, `game/index.html`, in the **same repo** as your page. It loads at `https://<username>.github.io/game/`.
- [ ] Built from a **five-step plan**, with **one commit per working step**. Each commit message says what works now, for example `Step 3: ball bounces off the paddle`.
- [ ] **One deliberate break and restore.** Make a change that breaks the game, commit it, then put the last working version back as a new commit. Your history shows the bad commit and the restore commit. (This is what the git command `git revert` does; you'll use the real command in week 4.)
- [ ] **A two-model comparison.** Give the same prompt to two chat assistants and note in `PROMPTS.md` which result was better, and why.
- [ ] Your home page links to the game from its Projects section.
- [ ] `PROMPTS.md` has a week 2 section.
- [ ] Ready for the week 2 understanding check: you can explain **one function** in your game (and in a classmate's).

✅ **Checkpoint:** the history of `game/index.html` on GitHub shows one commit per working step, one bad commit and one restore commit.

## Repository layout

```
<username>.github.io/
├── index.html            ← your page (week 1)
├── PROMPTS.md            ← how you used AI, one section per week
├── SAFETY_CONTRACT.md    ← signed in week 1 (or submitted privately)
├── prompt-makeover.md    ← week 2 homework
├── reflections/          ← weekly reflections, unless your instructor collects them elsewhere
│   └── week-1.md
└── game/
    └── index.html        ← your game (week 2)
```

A `README.md` is optional here. Later projects each get their own repo. The exact homework items are in the [week 1](../weeks/01-hello-vibe-coding/homework.md) and [week 2](../weeks/02-prompting-and-save-points/homework.md) homework checklists.

## Privacy: a public page is really public

Search engines can find your page, and every old commit stays visible.

- Don't publish your phone number, home address, date of birth, student ID or anything you'd put on a password-reset form.
- A first name or a nickname is fine. So is leaving out a photo.
- Only use images you made or have permission to use, and credit them (for example, "Photo by … on Unsplash") in a small Credits section at the bottom of the page.
- Don't put other people's names or photos on your page without asking them.

## Done when

- [ ] The page and the game both load from their live URLs in a private window.
- [ ] Everything on the two requirement lists above is ticked.
- [ ] You have submitted the repo URL and live URL on the course site ([how to submit](README.md#how-to-submit)).

## Stretch ideas (optional)

- Make the page look good on a phone (ask the AI for a "responsive" layout, then test it by making your browser window narrow).
- Add a high score to your game that survives a page reload (hint: ask about `localStorage`).
- After each later project, add its live link to your Projects section. By week 8 this page is your portfolio.

## If you get stuck

- **The page doesn't appear at the URL:** check that the repo is public, the file is called `index.html` (all lowercase) and sits at the top level, and Pages is turned on in the repo settings. Then wait a few minutes. Menus move; if you can't find the Pages setting, ask your chat assistant where it is.
- **The AI's code doesn't work:** use the [two-strikes rule](../resources/safe-loop.md#the-two-strikes-rule). After two failed fixes, start a fresh chat with a better prompt.
- **Your chat assistant hit a limit:** switch to the fallback in [TOOLS.md](../TOOLS.md). See [I ran out of free credits](../resources/troubleshooting.md#i-ran-out-of-free-credits).
- **Git confuses you:** see the [git cheat sheet](../resources/git-cheatsheet.md) and [GitHub basics](../setup/github-basics.md).
