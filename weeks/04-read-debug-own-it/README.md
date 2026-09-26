# Week 4 — Read It, Debug It, Own It

> You must be able to read and fix what the AI wrote.

| | |
|---|---|
| **Studio** | 3 hours: 20-minute talk, 10-minute demo, 100-minute lab, 25-minute Debug Clinic debrief |
| **Tools** | GitHub Codespaces (VS Code in the browser) · GitHub Copilot, **Ask mode only** · browser DevTools · git in the terminal |
| **You'll do** | The **Debug Clinic** (five planted bugs, AI off), one feature you write yourself, edge-case tests, and your first `git revert` from the terminal |
| **Assessed** | [Oral walkthrough 1](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4) (during the lab or office hours) |
| **Due this week** | **Project 1 final** ([homework](homework.md)) |

## Learning objectives

By the end of this week you can:

1. Name the parts of a small web app (structure, style, behavior, state, storage) and find each one in your own files.
2. Read a browser error message and a stack trace, and go to the failing line.
3. Debug with a method (reproduce → isolate → hypothesize → test → fix → verify) instead of pasting errors into a chat.
4. Explain why `input.value` is text, and how `JSON.stringify` and `JSON.parse` save and load data in localStorage.
5. Use Copilot's Ask mode to plan and review a change that you write yourself.
6. Write and run edge-case tests, and undo a bad commit with `git revert`.

## Before class

- [ ] Project 1 version 1 is live on GitHub Pages (week 3 homework).
- [ ] You can open a Codespace, and Copilot is switched on for your GitHub account ([setup/codespaces.md](../../setup/codespaces.md), [setup/accounts.md](../../setup/accounts.md)).
- [ ] Read [resources/web-basics.md](../../resources/web-basics.md) (about 15 minutes) and find one variable, one function and one `addEventListener` in your own `app.js`.
- [ ] Sign up for an oral walkthrough slot, if your instructor uses a sign-up sheet ([what to expect](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4)).

## Studio agenda

| Time | Block |
|---|---|
| 0:00–0:10 | Show and tell: two Project 1 version 1s |
| 0:10–0:30 | Concept talk ([slides](slides.md)): anatomy of a web app, error messages, the debugging method, Copilot's modes |
| 0:30–0:40 | Live demo: debugging with the method, then "the AI plans, you write, the AI reviews" |
| 0:40–2:20 | [Lab](lab.md): Codespace tour, **Debug Clinic** (AI off), write a feature yourself, TESTS.md and `git revert` (with a 10-minute break). Oral walkthroughs run alongside |
| 2:20–2:45 | Debug Clinic debrief: the five bugs, one by one |
| 2:45–3:00 | Exit ticket (AI-free) and homework preview |

## Materials

| File | What it's for |
|---|---|
| [slides.md](slides.md) | The 20-minute concept talk |
| [lab.md](lab.md) | Step-by-step studio lab |
| [homework.md](homework.md) | Project 1 final: core and stretch, with a checklist |
| [debug-clinic/](debug-clinic/README.md) | The Debug Clinic kit: a Reading Log app with five planted bugs, rules, scoring and [hint cards](debug-clinic/hint-cards.md) |
| [instructor-notes.md](instructor-notes.md) | Run sheet, demo script, pitfalls |
| [templates/TESTS.md](../../templates/TESTS.md) · [PROMPTS.md](../../templates/PROMPTS.md) · [PROJECT_README.md](../../templates/PROJECT_README.md) · [REFLECTION.md](../../templates/REFLECTION.md) | Templates for your Project 1 repository |
| [instructor/course-tutor.md](../../instructor/course-tutor.md) | The hint-only tutor prompt (🟡 tutor mode in the clinic) |
| [resources/git-cheatsheet.md](../../resources/git-cheatsheet.md) · [web-basics.md](../../resources/web-basics.md) · [glossary.md](../../resources/glossary.md) | References |

## Key ideas

**Why this week exists.** AI helps people finish tasks, but it can stop them learning to debug. In Anthropic's January 2026 randomized trial, junior engineers who learned a new library with an AI assistant scored 50% on a follow-up quiz, against 67% for those without it, and the biggest gap was on debugging ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). When researchers watched students build apps with an AI agent, only 7.4% of their actions involved looking at code or logs, and no one wrote a unit test ([Geng et al.](https://arxiv.org/pdf/2507.22614)). In CMU's AI coding course, students' understanding peaked on the assignment where they read and partly wrote the code ([CMU 15-113](https://www.cs.cmu.edu/~113/bestPractices.html)). So this week you read, debug and write, before agents arrive in week 6.

**Anatomy of a web app.** Every app in weeks 1–4 has five parts. **Structure**: HTML elements such as `<button>` and `<ul>`, each of which can have an **id**, a unique name tag JavaScript uses to find it. **Style**: CSS, which rarely crashes but can look wrong. **Behavior**: JavaScript **variables** (labeled boxes for values), **functions** (named recipes you call) and **events** (clicks, typing), connected with `addEventListener`. JavaScript sees the page as the **[DOM](../../resources/glossary.md#dom)**, a live model of the HTML it can read and change. **State**: the data the app is holding right now, in variables, lost on reload. **Storage**: [localStorage](../../resources/glossary.md#localstorage) keeps **text only**, so data goes in with `JSON.stringify` and comes back out with `JSON.parse`. And whatever a user types arrives as text, even in a number box: `40 + "5"` is `"405"`.

**Read the error before you paste it.** Browser **[DevTools](../../resources/glossary.md#devtools)** (F12) has a **[Console](../../resources/glossary.md#console)** that shows errors in red and warnings in yellow. An error has a type (`SyntaxError`: the file couldn't be read; `TypeError`: a value wasn't what the code expected; `ReferenceError`: a name doesn't exist), a message, and a file and line number you can click. A **[stack trace](../../resources/glossary.md#stack-trace)** lists the chain of function calls: the top line is where it broke, the lines below are who called it. CMU students' own advice: spend 20 seconds reading an error before pasting it anywhere.

**The debugging method.** **Reproduce** (make it happen on purpose), **isolate** (which file, function and line?), **hypothesize** (say what you think is wrong and why), **test** the idea before changing code (type a variable name in the Console, or add `console.log`), **fix** the cause with the smallest change, and **verify** (repeat the steps and check nothing else broke). Bugs live at the **[edges](../../resources/glossary.md#edge-case)**: empty input, huge input, duplicates, reloading, a first visit with no saved data.

**Copilot's three modes.** *Inline suggestions* (grey text that appears as you type), *Ask* (a chat that answers without changing your files) and *Agent* (edits files and runs commands itself). This week uses **Ask only**, with suggestions switched off while you write. Agents arrive in week 6.

**The AI plans, you write, the AI reviews.** Ask Copilot for a plan with no code, write the code yourself, ask Copilot to review your diff, then fix and commit. You keep the thinking; the AI helps you plan it and check it.

## Understanding check

- **Exit ticket** (AI-free): [week 4 questions](../../assessment/exit-tickets.md#week-4).
- **Oral walkthrough 1** (10 minutes, AI off, on your own Project 1): explain a function, find the failing line after the examiner breaks one line of your code, fix it, then commit and revert a change ([protocol](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4)).

To check yourself first: open your `app.js`, point to the line that saves your data and the line that loads it, and explain each in one sentence. Then explain what `Cannot read properties of null` means and where you'd look first.

## Homework

**Project 1 final** is due: all MUST criteria passing on GitHub Pages, TESTS.md (run and dated), PROMPTS.md, a README with an acceptance table and a "How it works" section, and an AI-free reflection. Stretch: move one pure function into a module and test it with `node --test`. Details: [homework.md](homework.md). Grading: [Project 1 rubric](../../assessment/rubrics.md#project-1).

## If a tool is down

| If this fails | Do this |
|---|---|
| Codespaces won't start or you're out of free hours | Stop your other codespaces at [github.com/codespaces](https://github.com/codespaces). Otherwise pair with a partner in their codespace, or use [setup/local-setup.md](../../setup/local-setup.md). The clinic app also runs by opening `index.html` directly in a browser after downloading the repository as a ZIP |
| Copilot is unavailable or out of credits (Part 3) | Use your chat assistant in a browser tab with the same prompts, pasting the code you want planned or reviewed. Other options: [TOOLS.md](../../TOOLS.md) |
| Tutor mode isn't available | Use the hint cards and ask your instructor or TA |
| GitHub Pages is slow to update | Check the **Actions** tab. Your Codespace preview shows the same files |

## Going further

- MDN, "What went wrong? Troubleshooting JavaScript": <https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong>
- Chrome DevTools, "Debug JavaScript" (breakpoints, stepping through code): <https://developer.chrome.com/docs/devtools/javascript>
- The Anthropic study, including the AI-use patterns of high scorers: <https://www.anthropic.com/research/AI-assistance-coding-skills>
- [resources/without-ai-skills.md](../../resources/without-ai-skills.md): the six skills you'll be asked to show without AI
