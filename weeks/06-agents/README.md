# Week 6 — How Agents Work

> An agent is an LLM in a loop with tools. You decide what it may do; your tests decide whether it worked.

## This week at a glance

| Item | Details |
|---|---|
| **Before Studio A** (≤1 h) | Read this page and your instructor's reply to your pitch (Go, Shrink or Rethink). **Create your capstone repository** from the starter (personal account, public), open it in a Codespace and check that `npm test` passes ([how](lab.md#before-studio-a-create-your-capstone-repository)). Check that Copilot Chat offers **Agent** and how many credits you have left. Re-read rules 3, 4, 7 and 9 of the [Safety Contract](../../setup/safety-contract.md) |
| **Studio A** | Talk: the agent loop; `AGENTS.md` is advice, not enforcement; approvals on, never autopilot · **Be the Agent** (30 min) · `SPEC.md` for today's criterion and `AGENTS.md` with a Scope section · your first agent-built feature: the test first, in a separate prompt, then a teach-back · checkpoint share |
| **Studio B** | Show and tell · **branches and pull requests** · find a planted bug in agent-written code (🔴 AI off) · **feature clinic:** a simple chart or an external API route · project time and oral walkthrough 2 · debrief · exit ticket |
| **Due before next week's Studio A** | Default 11:59 pm the night before. **Milestone 1**, as defined in the [capstone milestones](../../projects/capstone.md#milestones) and copied in [homework.md](homework.md#milestone-1): `SPEC.md` complete with a Goldfish test · `AGENTS.md` with Scope and trial notes · at least two features merged through pull requests, each with a test written first · production URL and screenshot on Canvas · `PROMPTS.md` with teach-backs. Also: your reflection on Canvas (🔴 AI off) and the mid-course survey |
| **AI use this week** | 🟢 AI on: Copilot agent mode for features, with approvals on (never autopilot or skip-permissions modes); Ask mode to explain code · 🟡 AI limited: `SPEC.md` and `AGENTS.md` (you write them; the AI may critique), the Goldfish test (a fresh chat reads your spec; you revise it) · 🔴 AI off: Be the Agent, the planted-bug hunt, the edge-case test you write by hand, every teach-back, the reflection, the exit ticket, oral walkthrough 2 |
| **Must read** | README (this page), [lab.md](lab.md), [homework.md](homework.md) |
| **Look up when needed** | [Capstone brief](../../projects/capstone.md) · [capstone starter: feature patterns](../../projects/capstone-starter/README.md#feature-patterns) · [Be the Agent kit](be-the-agent/README.md) · [AGENTS.md template](../../templates/AGENTS.md) · [The Safe Loop](../../resources/safe-loop.md) · [Git Cheat Sheet](../../resources/git-cheatsheet.md) · [Troubleshooting: the agent broke or deleted things](../../resources/troubleshooting.md#the-agent-broke-or-deleted-things) · [Tool Handout: credits](../../TOOLS.md#credits-budget-for-the-course) |
| **Minimum to keep up** | Your capstone runs at its production URL, and both features are in pull requests on GitHub. Week 7 Studio B reviews one of them, and Studio A connects your capstone to a database |
| **Time** | Studios 6 h · outside about 11 h: prep 1 h, homework about 9 h (including the reflection and survey), and a 15-minute walkthrough slot if yours is by appointment |

Canvas is the course's learning management system. Your reflection, the survey and your submission links go there; your code, `SPEC.md`, `AGENTS.md` and `PROMPTS.md` stay in your public repository.

## Learning objectives

By the end of this week you can:

1. Describe an **agent** as a model, tools, a loop and a context window (its working memory), and trace what it does one tool call at a time.
2. Write a short `AGENTS.md` with a **Scope** section, use `SPEC.md` as standing context, and make the agent plan first.
3. Explain why `AGENTS.md` is advice, not enforcement, and name what actually limits an agent: the Codespace, approval prompts, scoped keys and save points.
4. Keep approvals on, contain an agent in a Codespace, and commit before and after every agent task.
5. Recognize how agents fail (fake success, deleted data, publishing what should stay private) using real incidents.
6. Write the test **before** the code, in a separate prompt, and use test output as evidence.
7. Put work on a **branch**, open a **pull request**, review it and merge it.
8. Find and fix a bug in agent-written code by hand, and explain agent-written code with the AI off (oral walkthrough 2).

## Before class

- [ ] Your **capstone pitch** is submitted, and you've read your instructor's reply. Bring it: today it becomes your `SPEC.md`.
- [ ] Your **capstone repository** exists, created from the starter ([how](lab.md#before-studio-a-create-your-capstone-repository)), and `npm test` passes in its Codespace. Pairs: one partner creates it and adds the other as a collaborator.
- [ ] In the Codespace, Copilot Chat's mode picker offers **Agent**. Check your credits: the Copilot icon in the status bar shows your usage. Agent work uses credits much faster than chat ([Credits budget for the course](../../TOOLS.md#credits-budget-for-the-course)).
- [ ] Skim the [AGENTS.md template](../../templates/AGENTS.md), especially its **Scope** section.

> [!WARNING]
> From today, an AI can edit your files and run commands. Re-read rules [3](../../setup/safety-contract.md#3-i-commit-before-and-after-every-agent-task), [4](../../setup/safety-contract.md#4-i-keep-agents-contained), [7](../../setup/safety-contract.md#7-i-read-before-i-adopt) and [9](../../setup/safety-contract.md#9-agents-dont-publish-and-untrusted-content-never-shares-a-session-with-my-secrets) of the Safety Contract before class. Approvals stay on all week; autopilot and skip-permissions modes are never allowed in this course.

## Studio agenda

| Studio | What happens |
|---|---|
| **Studio A — Learn & build** | Recap · concept talk ([slides](slides.md)) · live demo · [lab](lab.md#studio-a--be-the-agent-then-direct-one): Be the Agent, capstone `SPEC.md` and `AGENTS.md`, your first agent-built feature · checkpoint share |
| **Studio B — Workshop** | Show and tell · [lab](lab.md#studio-b--pull-requests-a-planted-bug-a-feature-clinic): branches and pull requests, a planted-bug hunt, the feature clinic · project time and oral walkthrough 2 · debrief · [exit ticket](../../assessment/exit-tickets.md#week-6) |

## Materials

- [Slides](slides.md): the 20-minute concept talk
- [Lab](lab.md): Studio A and Studio B, with Core and If time parts and a troubleshooting table
- [Homework](homework.md): Milestone 1, the AGENTS.md trial, your reflection
- [Be the Agent kit](be-the-agent/README.md): a tiny app with a planted bug, [tool cards](be-the-agent/tool-cards.md) and [task cards](be-the-agent/task-card.md)
- [Capstone starter](../../projects/capstone-starter/): a working app shell with tests, deployment settings, project documents and [feature patterns](../../projects/capstone-starter/README.md#feature-patterns) (a chart helper and an external-API route)
- Templates: [AGENTS.md](../../templates/AGENTS.md), [SPEC.md](../../templates/SPEC.md), [PROMPTS.md](../../templates/PROMPTS.md), [TESTS.md](../../templates/TESTS.md)
- Glossary: [agent](../../resources/glossary.md#agent), [context window](../../resources/glossary.md#context-window), [AGENTS.md](../../resources/glossary.md#agentsmd), [harness](../../resources/glossary.md#harness), [sandbox](../../resources/glossary.md#sandbox), [red/green testing](../../resources/glossary.md#redgreen-testing), [branch](../../resources/glossary.md#branch), [pull request](../../resources/glossary.md#pull-request)

## Key ideas

If you are working through this week on your own, read this section, then do the [lab](lab.md).

### An agent is an LLM in a loop with tools

An **agent** has **tools** (list files, read, search, edit, run a command) and works in a **loop**: choose a tool call, run it, read the result, choose the next step, until it believes the task is done. Everything it knows comes from its **context**: your prompt, standing instructions and every tool result so far. It never sees your screen. In **Be the Agent** you play both halves of this loop by hand.

### The context window is working memory

Everything the agent reads fills its context window. As it fills up, details get squeezed out and quality drops. So: one task per session, a fresh session for the next feature, and short standing instructions.

### AGENTS.md and SPEC.md

`AGENTS.md` is "a README for agents": what the project is, the commands, what the agent may change (**Scope**), and what it must never do. It's an open format that many agents read ([agents.md](https://agents.md/)). Keep it short; every line costs context in every session. `SPEC.md` says what to build. Read any rules file from the internet before using it: instructions can be hidden in them.

### AGENTS.md is advice, not enforcement

A scope sentence measurably helps. In one study of 7,500 agent runs, removing only the scope and consent statement from the prompt raised one agent's rate of out-of-scope actions from 0% to 17.1% ([Qu et al.](https://arxiv.org/pdf/2605.18583)). But the file is something the agent *reads*, not a lock: Anthropic's own documentation calls instruction files "context, not enforced configuration" ([Claude Code docs](https://code.claude.com/docs/en/memory)). What actually holds is outside the agent's control: the **Codespace** it runs in, the **approval prompts** you answer, keys that can do only one job (or that aren't within its reach at all), **save points** pushed to GitHub, and, in week 7, database rules.

### Plan first, and keep approvals on

Ask for a plan before any code ("Plan first and wait for my approval"), or pick **Plan** where your tool has it. Agents ask before running commands; you can switch that off. Don't. Read each command before you approve it, especially anything that deletes, moves, installs or publishes. **Commit before and after every agent task**: an agent's own undo is not a backup.

### How agents fail

In April 2026, an agent doing a routine task on a test environment deleted a company's production storage volume, and the backups on it, in about nine seconds, using a key it found in an unrelated file ([case 13: PocketOS](../../resources/case-studies.md#13-pocketos-a-nine-second-database-deletion)). In September 2026, agents asked to attach screenshots to code reviews created **public** repositories to hold them, exposing more than 13,000 internal screenshots, with no attacker involved ([case 14: PixelLeak](../../resources/case-studies.md#14-pixelleak-agents-publish-13000-screenshots)). Earlier cases: an agent that deleted a production database during a code freeze and faked its results ([case 4](../../resources/case-studies.md#4-replit-the-deleted-production-database)), and agents that overwrote or wiped a user's files ([cases 5](../../resources/case-studies.md#5-gemini-cli-files-that-overwrote-each-other) and [6](../../resources/case-studies.md#6-antigravity-clear-the-cache-wipes-a-drive)).

### Tests are the agent's eyes, so write them first

An agent can't see your app; a test is how it, and you, check the work. **Check first:** write the test before the code, in a **separate prompt**, so the test isn't bent to fit the code. When an AI writes tests after faulty code, the tests tend to agree with the faults: in one study they caught 14% of faults, against 25% for tests written independently ([Konstantinou et al.](https://arxiv.org/abs/2607.05139)). Watch the test fail (red), then make it pass (green). And watch the tests themselves: one developer's "fix it" prompt changed a test's expected status from 200 to 500, so the test passed and the bug stayed ([HN discussion](https://news.ycombinator.com/item?id=48662310)).

### Teach back before you commit

Before you commit agent-written code, write 2–3 sentences in `PROMPTS.md`, in your own words: what changed and why it works ([how](../../resources/safe-loop.md#teach-back)). If you can't, you're not ready to commit. Commits with AI help end with an `Assisted-by:` line, required from this week ([how](../../resources/safe-loop.md#the-assisted-by-line)).

### Branches and pull requests

A **branch** is a separate line of work: if a feature goes wrong, `main` (the version that's deployed) is untouched. A **pull request** asks to merge a branch into `main`, and shows the whole change as a diff where you, a partner or a reviewer can read it before it joins. From this week, every capstone feature joins `main` through a pull request.

### Credits are a budget

Agent sessions make many model calls, so they can use credits much faster than chat. On Copilot's free plans, when the credits run out, chat and agent work stop until the monthly reset ([Tool Handout](../../TOOLS.md#credits-budget-for-the-course)). Small, clear tasks cost less. Know your fallback.

## Understanding check

- The [Week 6 exit ticket](../../assessment/exit-tickets.md#week-6) (🔴 AI off) at the end of Studio B, including one question about a decision in your week 5 micro-app. Exit tickets are graded on completion, not correctness.
- **Oral walkthrough 2** ([what to expect](../../assessment/oral-walkthroughs.md#what-to-expect), [protocol](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6)): in week 6 Studio B, or by appointment before week 7 Studio A. Ten minutes with the AI off: you explain the first feature the agent built for you, write a new criterion and its test by hand, read a failing test, and talk through your `AGENTS.md`. Only commit code you can explain.

## Homework

About 9 hours outside class, plus 1 hour of prep. Full details and the checklist are in [homework.md](homework.md).

- **Core (required):** Milestone 1: complete `SPEC.md` and run a Goldfish test on it; the **AGENTS.md trial** (two small tasks, whether the agent followed the file, one change); one more feature as a pull request, with a test written first; deploy (production URL and screenshot); `PROMPTS.md` with an entry and a teach-back for each agent session. Plus: an AI-free reflection on Canvas and the mid-course survey.
- **Stretch (optional):** add an MCP server after reading it; compare a second agent on the same task.

Week 6 is scored with the [weekly rubric](../../assessment/rubrics.md#weekly-labs-and-homework); the capstone has its own [rubric](../../assessment/rubrics.md#capstone).

## If a tool is down

| Problem | What to do |
|---|---|
| Copilot credits ran out | Switch to the fallback agent in the [Tool Handout](../../TOOLS.md#editor-and-agents-weeks-48), or continue in Ask mode and make the edits yourself. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| No **Agent** option in Copilot Chat | Check you're signed in to GitHub in the Codespace and Copilot is enabled for your account. Menus move; the mode picker is at the bottom of the chat box |
| Codespaces quota used up | Stop unused codespaces at github.com/codespaces, or use the optional [local setup](../../setup/local-setup.md) (keep agents away from your personal files) |
| Vercel won't import the capstone | Personal-account repository only; Vercel's free plan can't deploy private organization repos. See the [week 5 troubleshooting](../05-apis-secrets-servers/lab.md#troubleshooting) |
| No partner for Be the Agent or the planted-bug hunt | Each activity has a "Working alone?" option in the lab |

## Going further

- The [AGENTS.md](https://agents.md/) open format, with examples from real projects.
- Simon Willison, [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/) (red/green testing, and more) and [Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/) (why a Codespace is a good sandbox).
- GitHub Docs, [About pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests).
- GitHub Docs, [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli).
- VS Code Docs, [Permissions and approvals for agents](https://code.visualstudio.com/docs/agents/run/approvals).
- More readings: the [Reading List](../../resources/reading-list.md).
