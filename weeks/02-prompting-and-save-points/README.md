# Week 2 — Prompting & Save Points

> A clear prompt tells the AI where to go; a commit makes sure you can always get back.

| | |
|---|---|
| **Time** | One 3-hour studio + about 3 hours of homework |
| **Tools** | Two chat assistants (Gemini Canvas plus a fallback from [TOOLS.md](../../TOOLS.md)) · github.dev · GitHub Pages |
| **You'll build** | **Game in an Hour**: a small browser game at `https://<your-username>.github.io/game/`, one commit per working step |
| **Due before week 3** | The finished game linked from your home page · `PROMPTS.md` with four-part prompts · the prompt makeover · an AI-free reflection |

## Learning objectives

By the end of this week you can:

1. Write a prompt in four parts, **Goal · Context · Constraints · Done when**, and explain why each part is there.
2. Explain why the AI only knows what is in its context, and decide what to paste into a prompt.
3. Ask for a plan before any code, and improve that plan.
4. Build in small steps, and explain why one giant prompt produces code that is hard to change.
5. Use the **two-strikes rule** when a fix isn't working.
6. Use git through github.dev: make commits with clear messages, read a diff, and view a file's history.
7. Go back to an earlier working version of a file, and explain what `git revert` means.
8. Compare two AI models' answers to the same prompt against your own "Done when".
9. Explain a function in someone else's code, without AI.

## Before class

- [ ] Your week 1 home page is live at `https://<your-username>.github.io`, with a **Projects** section linking to `game/`. If not, finish [week 1's lab](../01-hello-vibe-coding/lab.md) first.
- [ ] You can sign in to **two** chat assistants from [TOOLS.md](../../TOOLS.md), with privacy settings done ([setup/privacy-settings.md](../../setup/privacy-settings.md)). At least one needs a live preview (Gemini Canvas, or Claude Artifacts if you're 18+).
- [ ] Skim the [game menu](game-menu.md) and pick two games you'd like to build.
- [ ] Optional: read the [Safe Loop](../../resources/safe-loop.md). You'll use all six steps this week.

## Studio agenda

| Time | Block | What happens |
|---|---|---|
| 0:00–0:10 | Show and tell | Two students show their week 1 home pages and one prompt that surprised them |
| 0:10–0:30 | Concept talk | [slides.md](slides.md): prompt anatomy, context, small steps, the two-strikes rule, git as save points |
| 0:30–0:40 | Live demo | The instructor plans a game with the AI, builds step 1, and commits it in github.dev |
| 0:40–2:20 | Lab | [lab.md](lab.md): set up, then the timed **Game in an Hour**, a break, the peer explanation swap, and linking your game |
| 2:20–2:45 | Debrief | Play three games on the projector. Who lost work? Who restored it? Which model won the comparison, and why? |
| 2:45–3:00 | Exit ticket and homework | [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2) (🔴 no AI), then a homework preview |

## Materials

| File | What it is |
|---|---|
| [slides.md](slides.md) | The 20-minute concept talk (Marp slides with speaker notes) |
| [lab.md](lab.md) | Game in an Hour, step by step, with checkpoints and troubleshooting |
| [game-menu.md](game-menu.md) | Ten games with difficulty ratings and sample 5-step plans |
| [homework.md](homework.md) | Core and stretch homework, including the prompt makeover |
| [instructor-notes.md](instructor-notes.md) | Run sheet, demo script, timer management and fallback plans |

Shared course files you will use this week:

- [resources/safe-loop.md](../../resources/safe-loop.md): the six-step loop (print it)
- [resources/prompt-patterns.md](../../resources/prompt-patterns.md): more prompt examples
- [resources/git-cheatsheet.md](../../resources/git-cheatsheet.md): git words and actions
- [templates/PROMPTS.md](../../templates/PROMPTS.md) and [templates/REFLECTION.md](../../templates/REFLECTION.md)
- [projects/home-page.md](../../projects/home-page.md): the home-page and game project brief

## Key ideas

If you are working through this week on your own, read this section, then do the [lab](lab.md).

### A prompt is a set of directions

A prompt is a work order for someone who can't ask you questions. Write it in four parts:

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

### Two models, one prompt

Different assistants give different answers to the same prompt. You judge them against your own "Done when", not by which looks cooler, and not by what the AI claims.

## Understanding check

- **In the lab:** the peer explanation swap. You explain one function in a classmate's game, with no AI (🔴), and they confirm or correct you.
- **At the end of the studio:** the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2), on paper or a form, with no AI. Expect questions like: name the four parts of a prompt; what does a commit do; how do you get back to an earlier version.

## Homework

About 3 hours. Full details in [homework.md](homework.md).

- **Core (required):** finish the game and link it from your home page; `PROMPTS.md` entries in four-part form; the **prompt makeover** (rewrite four weak prompts); the AI-free reflection.
- **Stretch (optional):** a high score that survives a reload, sound, touch controls for phones, or a second level.

Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)).

## If a tool is down

| Problem | What to do |
|---|---|
| Your main assistant is down or you hit a limit | Switch to a fallback from [TOOLS.md](../../TOOLS.md) and paste your current `game/index.html` from GitHub. See [resources/troubleshooting.md](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| Only one assistant works | For the comparison, send the same prompt to two fresh chats in the same assistant |
| github.dev won't open | Edit and commit on github.com with the pencil icon; create files with **Add file → Create new file** |
| GitHub is down | Keep working in the chat preview, save your code in a text file, and commit each step later with a clear message |

## Going further

- [resources/prompt-patterns.md](../../resources/prompt-patterns.md): more prompt structures, with examples.
- [Kazemitabaar et al. (Koli Calling 2023)](https://arxiv.org/abs/2309.14049): the study behind "small steps".
- [Pro Git](https://git-scm.com/book/en/v2), chapters 1–2: the free book on git, for when you want the full picture.
- [resources/reading-list.md](../../resources/reading-list.md).
