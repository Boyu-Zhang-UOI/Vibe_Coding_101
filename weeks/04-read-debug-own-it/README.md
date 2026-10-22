# Week 4 — Read It, Debug It, Own It

> You must be able to read and fix what the AI wrote.

## This week at a glance

| Item | Details |
|---|---|
| **Before Studio A** (≤1 h) | Read this page and [How the Web Works](../../resources/web-basics.md) (about 15 minutes); find one variable, one function and one `addEventListener` in your own `app.js`. Read **only** the [What to expect](../../assessment/oral-walkthroughs.md#what-to-expect) section of the oral walkthroughs page (5 minutes) and book a walkthrough slot. Stop old codespaces so you have free hours |
| **Studio A** | Map the parts of your own app, then the **Debug Clinic**: five planted bugs, in pairs, with the AI off (about 60 minutes), and a debrief. Finish by checking your own code for the same five bugs |
| **Studio B** | `git log`, `git diff` and `git revert` practice, then oral walkthrough 1 slots begin. Write a feature yourself from a feature card. Write your **first automated test** and run it with `node --test` |
| **Due before next week's Studio A** (default 11:59 pm the night before) | **Project 1 final:** every MUST criterion passing on GitHub Pages · `TESTS.md` with a test for every criterion, at least 3 edge cases, results dated · one automated test passing, with its output in `TESTS.md` · `SPEC.md`, `README.md` and `PROMPTS.md` up to date · reflection on Canvas · oral walkthrough 1 done (in Studio B or office hours this week). Details: [homework](homework.md) |
| **AI use this week** | 🟢 AI on: fixing your Project 1 at home (Copilot **Ask** mode or a chat assistant; no agent mode yet) · 🟡 AI limited: tutor mode in the clinic after 10 minutes stuck; Copilot Ask mode reviews the feature you write by hand · 🔴 AI off: the Debug Clinic, mapping your app, the git practice, walkthrough 1, the reflection, the exit ticket |
| **Must read** | This page, the [lab](lab.md), the [homework](homework.md), and "What to expect" on the [oral walkthroughs](../../assessment/oral-walkthroughs.md#what-to-expect) page. The rest of that page is the examiners' protocol: you don't need it |
| **Look up when needed** | The [Debug Clinic kit](debug-clinic/README.md) (you read it in the lab) · [hint cards](debug-clinic/hint-cards.md) · [Git Cheat Sheet](../../resources/git-cheatsheet.md) · [TESTS template](../../templates/TESTS.md) · [Glossary](../../resources/glossary.md) · [Troubleshooting](../../resources/troubleshooting.md) · [Screen reader and keyboard guide](../../resources/accessibility.md) |
| **Minimum to keep up** | Project 1 opens in a Codespace, and `npm test` runs at least one passing test. Week 5 starts from a Node project with tests, and this week's test is the pattern |
| **Time** | Studios 6 h · outside about 11 h (prep up to 1 h, homework core about 9½ h); stretch is optional |

## Learning objectives

By the end of this week you can:

1. Name the parts of a small web app (structure, style, behavior, state, storage) and find each one in your own files.
2. Read a browser error message and a stack trace, and go to the failing line.
3. Debug with a method (reproduce → isolate → hypothesize → test → fix → verify) instead of pasting errors into a chat.
4. Explain why `input.value` is text, and how `JSON.stringify` and `JSON.parse` save and load data in localStorage.
5. See your history and changes with `git log` and `git diff`, and undo a bad commit with `git revert`.
6. Write a small feature yourself and have Copilot's Ask mode review it.
7. Write an automated test for a pure function **before** the function exists, and run it with `node --test`.

## Before class

- [ ] Project 1 version 1 is live on GitHub Pages (week 3 homework).
- [ ] Copilot is switched on for your GitHub account ([accounts](../../setup/accounts.md)). Click the Copilot icon in a Codespace's status bar to see how much of this month's allowance is left: Ask mode uses some of it. If you run out, use your chat assistant in a browser tab with the same prompts.
- [ ] Stop any codespaces you aren't using at [github.com/codespaces](https://github.com/codespaces). You'll run two in Studio A.
- [ ] Read [How the Web Works](../../resources/web-basics.md) and find one variable, one function and one `addEventListener` in your own `app.js`.
- [ ] Read [What to expect](../../assessment/oral-walkthroughs.md#what-to-expect) and book your walkthrough 1 slot the way your instructor asks.

## Studio agenda

| Studio | What happens |
|---|---|
| **Studio A — Learn & build** | Recap, concept talk ([slides](slides.md)) and a live debugging demo. Lab: map your own app, the **Debug Clinic** (🔴 AI off), the debrief, then check your own code for the same bugs. Checkpoint share: one bug claim, read aloud |
| **Studio B — Workshop** | Show and tell. Lab: git practice, a feature you write yourself, your first automated test. Project work time with **oral walkthrough 1** slots, debrief, exit ticket (🔴 AI off) |

## Materials

| File | What it's for |
|---|---|
| [Lab](lab.md) | Step-by-step, both studios, including the feature cards and the test worked example (must read) |
| [Homework](homework.md) | Project 1 final, with the deliverables checklist (must read) |
| [Debug Clinic kit](debug-clinic/README.md) | The Reading Log app with five planted bugs, its rules, scoring and [hint cards](debug-clinic/hint-cards.md) |
| [Slides](slides.md) | The 20-minute concept talk and two Studio B mini-lessons |
| Templates: [TESTS](../../templates/TESTS.md) · [PROMPTS](../../templates/PROMPTS.md) · [Project README](../../templates/PROJECT_README.md) | For your Project 1 repository |
| [Tutor mode](../../instructor/course-tutor.md) | The hint-only tutor prompt (🟡 AI limited, in the clinic only) |

## Key ideas

If you're working through this week on your own, read this section, then do the [lab](lab.md). The [self-paced path](../../resources/self-paced.md) says what to do instead of the pair activities.

**Why this week exists.** AI helps people finish tasks, but it can stop them learning to debug. In Anthropic's January 2026 randomized trial, junior engineers who learned a new library with an AI assistant scored 50% on a follow-up quiz, against 67% for those without it, and the biggest gap was on debugging ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). In a 2026 study of 78 learners, 77% of those who had used AI without limits failed a 30-minute maintenance task once the AI was switched off ([Sankaranarayanan](https://arxiv.org/abs/2602.20206)). In CMU's AI coding course, students' understanding peaked on the assignment where they read and partly wrote the code ([CMU 15-113](https://www.cs.cmu.edu/~113/bestPractices.html)). So this week you read, debug and write, before agents arrive in week 6.

**Anatomy of a web app.** Every app in weeks 1–4 has five parts. **Structure**: HTML elements such as `<button>` and `<ul>`, each of which can have an **id**, a unique name tag JavaScript uses to find it. **Style**: CSS, which rarely crashes but can look wrong. **Behavior**: JavaScript **variables** (labeled boxes for values), **functions** (named recipes you call) and **events** (clicks, typing), connected with `addEventListener`. JavaScript sees the page as the **[DOM](../../resources/glossary.md#dom)**, a live model of the HTML it can read and change. **State**: the data the app is holding right now, in variables, lost on reload. **Storage**: [localStorage](../../resources/glossary.md#localstorage) keeps **text only**, so data goes in with `JSON.stringify` and comes back out with `JSON.parse`. And whatever a user types arrives as text, even in a number box: `40 + "5"` is `"405"`.

**Read the error before you paste it.** Browser **[DevTools](../../resources/glossary.md#devtools)** (F12) has a **[Console](../../resources/glossary.md#console)** that shows errors in red and warnings in yellow. An error has a type (`SyntaxError`: the file couldn't be read; `TypeError`: a value wasn't what the code expected; `ReferenceError`: a name doesn't exist), a message, and a file and line number you can click. A **[stack trace](../../resources/glossary.md#stack-trace)** lists the chain of function calls: the top line is where it broke, the lines below are who called it. CMU students' own advice: spend 20 seconds reading an error before pasting it anywhere.

**The debugging method.** **Reproduce** (make it happen on purpose), **isolate** (which file, function and line?), **hypothesize** (say what you think is wrong and why), **test** the idea before changing code (type a variable name in the Console, or add `console.log`), **fix** the cause with the smallest change, and **verify** (repeat the steps and check nothing else broke). Bugs live at the **[edges](../../resources/glossary.md#edge-case)**: empty input, huge input, duplicates, reloading, a first visit with no saved data.

**Your history is a debugging tool.** `git log --oneline` lists your save points; `git diff` shows exactly what changed since the last one; `git revert` undoes a commit by adding a new commit, so nothing is lost. When something worked yesterday and doesn't today, the answer is in the history.

**You write it; the AI reviews.** Copilot has three modes: *inline suggestions* (grey text as you type), *Ask* (a chat that answers without changing your files) and *Agent* (edits files and runs commands itself). This week uses **Ask only**, with suggestions switched off while you write. You write a small feature from a feature card, then ask Copilot to review your [diff](../../resources/glossary.md#diff). You keep the thinking; the AI helps you check it.

**Check first, with code.** A manual test is steps a person follows. An **[automated test](../../resources/glossary.md#test-manual-and-automated)** is a few lines of code that check your code, in a second, every time. You'll move one **[pure function](../../resources/glossary.md#pure-function)** (it uses only its inputs and returns a result, with no `document` and no `localStorage`) into its own file and test it with Node's built-in test runner. Write the test **first** and watch it fail, then write the function and watch it pass ([red/green testing](../../resources/glossary.md#redgreen-testing)). Tests written apart from the code catch more mistakes than tests written to fit it ([The Safe Loop](../../resources/safe-loop.md#check-first)). From week 5 on, every project has tests like this.

## Understanding check

- **Exit ticket** (🔴 AI off, graded on completion, not correctness): [week 4 questions](../../assessment/exit-tickets.md#week-4).
- **Oral walkthrough 1** (10 minutes, 🔴 AI off, on your own Project 1): explain a function, find the failing line after the examiner breaks one line of your code, fix it, then commit and revert a change ([Walkthrough 1](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4)). It's a conversation, not a trick test, and it can be retaken once.

To check yourself first: open your `app.js`, point to the line that saves your data and the line that loads it, and explain each in one sentence. Then explain what `Cannot read properties of null` means and where you'd look first.

## Homework

**Project 1 final** (about 9½ hours core): every MUST criterion passing on GitHub Pages; `TESTS.md` (a test for every criterion, at least three edge cases, run and dated); one automated test passing; `PROMPTS.md` with teach-backs and the feature you wrote by hand; a README with an acceptance table and "How it works"; a reflection on Canvas, written without AI. Details: [homework](homework.md). Grading: [Project 1 rubric](../../assessment/rubrics.md#project-1).

## If a tool is down

| If this fails | Do this |
|---|---|
| Codespaces won't start or you're out of free hours | Stop your other codespaces at [github.com/codespaces](https://github.com/codespaces). Otherwise pair with a partner in their codespace, or use [local setup](../../setup/local-setup.md). The clinic app also runs by opening `index.html` directly in a browser after downloading the repository as a ZIP |
| Copilot is unavailable or out of credits | Use your chat assistant in a browser tab with the same prompts, pasting the code you want reviewed. Other options: [Tool Handout](../../TOOLS.md) |
| Tutor mode isn't available | Use the hint cards and ask your instructor or TA |
| `npm` isn't found or Node is too old | In a Codespace it's preinstalled. Elsewhere you need Node.js 22 LTS (minimum 20.12): [troubleshooting](../../resources/troubleshooting.md#npm-command-not-found-or-the-wrong-node-version) |
| GitHub Pages is slow to update | Check the **Actions** tab. Your Codespace preview shows the same files |

## Going further

- MDN, "What went wrong? Troubleshooting JavaScript": <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong>
- Chrome DevTools, "Debug JavaScript" (breakpoints, stepping through code): <https://developer.chrome.com/docs/devtools/javascript>
- Node.js test runner documentation: <https://nodejs.org/api/test.html>
- The Anthropic study, including the AI-use patterns of high scorers: <https://www.anthropic.com/research/AI-assistance-coding-skills>
- [Six Skills You Must Show Without AI](../../resources/without-ai-skills.md), with practice for each
