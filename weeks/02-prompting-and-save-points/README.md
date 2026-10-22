# Week 2 — Prompting & Save Points

> A clear prompt tells the AI where to go; a commit makes sure you can always get back.

## This week at a glance

| Item | Details |
|---|---|
| **Before Studio A** (≤1 h) | Your week 1 page is live with a Projects section · you can sign in to two chat assistants · pick two games from the [game menu](game-menu.md) · read this page and the six steps of the [Safe Loop](../../resources/safe-loop.md) |
| **Studio A** | Concept talk, then **Game in an Hour**: a timed build of a small browser game, one commit per working step |
| **Studio B** | Break your game and restore it, add an `Assisted-by:` line to AI-helped commits, compare two AI models, explain a classmate's function (🔴 AI off), a prompt makeover workshop, exit ticket |
| **Due before next week's Studio A** (default 11:59 pm the night before) | Your game at `https://[your-username].github.io/game/`, linked from your home page, with one more feature built in 3+ commits · `PROMPTS.md` week 2 entries · `prompt-makeover.md` · on Canvas (the course's learning management system): your reflection, including the reading. Full list: [deliverables checklist](homework.md#deliverables-checklist) |
| **AI use this week** | 🟢 AI on: planning and building the game, the model comparison, testing one makeover prompt · 🟡 AI limited: none this week · 🔴 AI off: the peer explanation swap, the prompt-makeover rewrites, the restore drill, "What I wrote or decided myself", the exit ticket and the reflection |
| **Must read** | This page, the [lab](lab.md), the [homework](homework.md) |
| **Look up when needed** | [Game menu](game-menu.md) · [Git Cheat Sheet](../../resources/git-cheatsheet.md) · [Prompt Patterns](../../resources/prompt-patterns.md) · [Troubleshooting](../../resources/troubleshooting.md) · [Glossary](../../resources/glossary.md) · [Tool Handout](../../TOOLS.md) · [Screen reader and keyboard guide](../../resources/accessibility.md) |
| **Minimum to keep up** | Your game is at `/game/` with at least three working-step commits, and you can restore an earlier version of a file from its History. Week 3 starts a new project with the same commit habits |
| **Time** | Studios 6 h · outside about 10 h (prep up to 1 h, homework core about 9 h); stretch is optional |

## Studio agenda

| Studio | What happens |
|---|---|
| **Studio A — Learn & build** | Recap of week 1's most-missed exit-ticket question · concept talk ([slides](slides.md)): prompt anatomy, context, small steps, the two-strikes rule, git as save points · live demo · lab: open github.dev, **Game in an Hour** (timed), play-test, link your game · checkpoint share |
| **Studio B — Workshop** | Show and tell · lab: break and restore, the `Assisted-by:` line, the two-model comparison, the peer explanation swap, the prompt makeover workshop, project time · debrief · [exit ticket](../../assessment/exit-tickets.md#week-2) (🔴 AI off) |

## Learning objectives

By the end of this week you can:

1. Write a prompt in four parts, **Goal · Context · Constraints · Done when**, and explain why each part is there.
2. Explain why the AI only knows what is in its context, and decide what to paste into a prompt.
3. Ask for a plan before any code, and improve that plan.
4. Build in small steps, and explain why one giant prompt produces code that is hard to change.
5. Use the **two-strikes rule** when a fix isn't working.
6. Use git through github.dev: make commits with clear messages, read a diff, and view a file's history.
7. Go back to an earlier working version of a file, and explain what `git revert` means.
8. Say when AI helped with a commit, with an `Assisted-by:` line.
9. Compare two AI models' answers to the same prompt against your own "Done when".
10. Explain a function in someone else's code, without AI.

## Before Studio A

- [ ] Your week 1 home page is live at `https://[your-username].github.io`, with a **Projects** section linking to `game/`. If not, finish [week 1's lab](../01-hello-vibe-coding/lab.md) first, or ask your instructor for help.
- [ ] You can sign in to **two** chat assistants from the [Tool Handout](../../TOOLS.md), with [privacy settings](../../setup/privacy-settings.md) done. At least one needs a live preview (Gemini Canvas, or Claude Artifacts if you're 18+).
- [ ] Skim the [game menu](game-menu.md) and pick two games you'd like to build. First time coding? Pick a ★ Easy game.
- [ ] Read the six steps of the [Safe Loop](../../resources/safe-loop.md) (about 10 minutes; the rest of the page is for later). You'll use all six this week.

## Key ideas

If you are working through this week on your own, read this section, then do the [lab](lab.md). The [self-paced path](../../resources/self-paced.md) says what to do instead of the pair activities.

### A prompt is a set of directions

A prompt is a work order for someone who can't ask you questions (unless you invite it to: week 1's first habit). Write it in four parts:

| Part | Question it answers | Example |
|---|---|---|
| **Goal** | What do I want? | Make the snake speed up as it grows. |
| **Context** | What does the AI need to know? | Here is my current `game/index.html`: … |
| **Constraints** | What are the rules? | Change only the speed. Give me the complete file. |
| **Done when** | How will we both check? | After every 5 foods, the snake is visibly faster. |

"Done when" is the part people skip, and the most useful one: it turns "looks fine" into something you can test.

### The AI only knows what's in its context

The model can't see your screen, your files or your repository. It doesn't know you changed something by hand. A new chat starts empty. So paste what it needs: the current file, the exact error message, what you expected and what happened.

### Small steps beat one giant prompt

In a study of 33 learners using an AI code generator, those who generated a whole solution from one prompt did best on the first try, and worst when they later had to change their code. The same learners asked the AI before writing any code themselves in 92% of 760 tasks ([Kazemitabaar et al., Koli Calling 2023](https://arxiv.org/abs/2309.14049)). Code always needs changing later, so build it in steps you can test and understand: **ask for a plan first, edit it, then build one step at a time.**

### The two-strikes rule

If two attempts to fix the same problem fail, stop. Go back to your last working version, start a fresh chat, and write a better prompt with what you've learned.

### Commits are save points

**Git** tracks every version of your project, and **GitHub** stores it online. A **repository** is a tracked project folder. A **commit** is a save point with a **commit message** naming it. The **history** lists every commit. A **diff** shows what changed: removed lines in red, added lines in green. To undo a bad change, you don't delete it. You make a new commit that puts the file back the way it was. That's what `git revert` does, and you'll use the real command in week 4.

This week you commit in **github.dev**: on your repository page, press **.** (period) and VS Code opens in your browser.

### Saying when AI helped: the `Assisted-by:` line

Many open-source projects, including LLVM and Fedora, ask contributors to add a line such as `Assisted-by: Gemini` at the end of a commit message when an AI tool helped write the change ([All Things Open](https://allthingsopen.org/articles/open-source-ai-contributions-assisted-by-git-trailer-standard)). It tells anyone reading your history which changes to read most carefully. You practice it from this week; it's required from week 6.

### Two models, one prompt

Different assistants give different answers to the same prompt. You judge them against your own "Done when", not by which looks cooler, and not by what the AI claims.

### Game in an Hour is graded on effort

The timer is real, but the score isn't about finishing. Game in an Hour is graded on effort, like every studio ([rubric](../../assessment/rubrics.md#in-class-work-and-participation)). A game that stops at step 3 with clean save points is a full-credit hour. Anyone may do it untimed ([Timed builds](../../resources/accessibility.md#timed-builds)).

## Understanding check

- **In Studio B:** the peer explanation swap. You explain one function in a classmate's game, with 🔴 AI off, and they confirm or correct you.
- **At the end of Studio B:** the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2), on Canvas or paper, with 🔴 AI off. Expect questions like: name the four parts of a prompt; what does a commit do; how do you get back to an earlier version; plus one question about your week 1 page. It's scored for completion, not correctness.

## Homework

About 9 hours of core work. Full details and the checklist are on the [homework page](homework.md).

- **Project time:** finish the game, play-test it, then plan and build **one more feature** in at least three save points.
- **Homework:** finish the **prompt makeover** (🔴 AI off for the rewrites), a restore drill on your own (🔴 AI off), and one reading: Simon Willison's "Not all AI-assisted programming is vibe coding".
- **Journal:** `PROMPTS.md` entries in four-part form, with a short teach-back for each feature commit; the reflection on Canvas (🔴 AI off).
- **Stretch (optional):** a second feature, or a ★★★ game.

Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)).

## If a tool is down

| Problem | What to do |
|---|---|
| Your main assistant is down or you hit a limit | Switch to a fallback from the [Tool Handout](../../TOOLS.md) and paste your current `game/index.html` from GitHub. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| Only one assistant works | For the comparison, send the same prompt to two fresh chats in the same assistant |
| github.dev won't open | Edit and commit on github.com with the pencil icon; create files with **Add file → Create new file** |
| GitHub is down | Keep working in the chat preview, save your code in a text file, and commit each step later with a clear message |

## Going further

- [Prompt Patterns](../../resources/prompt-patterns.md): more prompt structures, with examples.
- [Kazemitabaar et al. (Koli Calling 2023)](https://arxiv.org/abs/2309.14049): the study behind "small steps".
- [Pro Git](https://git-scm.com/book/en/v2), chapters 1–2: the free book on git, for when you want the full picture.
- The [Reading List](../../resources/reading-list.md).
