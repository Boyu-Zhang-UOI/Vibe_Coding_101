# Week 6 — How Agents Work

> An agent is an LLM in a loop with tools.

| | |
|---|---|
| **Time** | One 3-hour studio + about 3 hours of homework |
| **Tools** | GitHub Codespaces · GitHub Copilot **agent mode** in VS Code, and optionally the Copilot CLI (fallbacks in [TOOLS.md](../../TOOLS.md)) · Vercel |
| **You'll build** | **Capstone kickoff:** your capstone repository with `SPEC.md` and `AGENTS.md`, and a first feature built by an agent, test first |
| **Due before week 7** | Two more capstone features, each with a test · capstone deployed on Vercel · agent log in `PROMPTS.md` · AI-free reflection · mid-course feedback survey |

## Learning objectives

By the end of this week you can:

1. Describe an **agent** as a model, tools, a loop and a context window (its working memory), and trace what it does one tool call at a time.
2. Write a short `AGENTS.md`, use `SPEC.md` as standing context, and make the agent plan first.
3. Choose safe approval settings, contain an agent in a Codespace, and commit before and after every agent task.
4. Recognize how agents fail (fake success, deleted files, loops) using real incidents.
5. Use **red/green testing**, with test output as evidence, and treat AI credits as a budget.
6. Explain and change agent-written code live, with the AI off (oral walkthrough 2).

## Before class

- [ ] Your **capstone pitch** is submitted ([projects/capstone.md](../../projects/capstone.md)). Bring it: today it becomes your `SPEC.md`.
- [ ] Your micro-app from week 5 is live, committed and synced.
- [ ] In any Codespace, check that Copilot Chat's mode picker offers **Agent**, and how much of your monthly Copilot allowance is left (github.com → Settings → Copilot; menus move). Agent work can use credits much faster than chat.
- [ ] Skim the [AGENTS.md format](https://agents.md/) (a two-minute read) and the course's [AGENTS.md template](../../templates/AGENTS.md).

> [!WARNING]
> From today, an AI can edit your files and run commands. Re-read rules 3, 4, 5 and 7 of the [safety contract](../../setup/safety-contract.md) before class.

## Studio agenda

| Time | Block | What happens |
|---|---|---|
| 0:00–0:10 | Show and tell | Two students demo their live micro-apps and say where the key lives |
| 0:10–0:30 | Concept talk | [slides.md](slides.md): the agent loop, context, AGENTS.md and SPEC.md, plan first, approvals and sandboxes, how agents fail, red/green tests, credits |
| 0:30–0:40 | Live demo | The instructor runs one small task in Copilot agent mode: plan first, a failing test, approval prompts, the diff, the commit |
| 0:40–2:20 | Lab | [lab.md](lab.md): **Be the Agent** in pairs; set up your capstone; build your first feature with an agent, test first. **Oral walkthrough 2** starts for those who finish early (includes a 10-minute break) |
| 2:20–2:45 | Debrief | What surprised you about the agent? How many tool calls did it make? Did it claim anything that wasn't true? |
| 2:45–3:00 | Exit ticket and homework | [Week 6 exit ticket](../../assessment/exit-tickets.md#week-6) (🔴 no AI), then a homework preview |

## Materials

| File | What it is |
|---|---|
| [slides.md](slides.md) | The 20-minute concept talk (Marp slides with speaker notes) |
| [lab.md](lab.md) | The studio lab, step by step, with checkpoints and troubleshooting |
| [be-the-agent/](be-the-agent/) | The **Be the Agent** kit: a tiny app with a planted bug, [tool cards](be-the-agent/tool-cards.md) and a [task card](be-the-agent/task-card.md) |
| [../../projects/capstone-starter/](../../projects/capstone-starter/) | The capstone starter: a working app shell with tests, deployment settings and project documents |
| [homework.md](homework.md) | Core and stretch homework, with a checklist |
| [instructor-notes.md](instructor-notes.md) | Run sheet, demo script, pitfalls and fallback plans |

Shared course files you will use this week:

- [projects/capstone.md](../../projects/capstone.md): the capstone brief
- [templates/AGENTS.md](../../templates/AGENTS.md), [templates/SPEC.md](../../templates/SPEC.md), [templates/PROMPTS.md](../../templates/PROMPTS.md), [templates/TESTS.md](../../templates/TESTS.md)
- [resources/safe-loop.md](../../resources/safe-loop.md), especially "Using the loop with an agent"
- [resources/case-studies.md](../../resources/case-studies.md): what went wrong when agents misfired
- [resources/glossary.md](../../resources/glossary.md): [agent](../../resources/glossary.md#agent), [context window](../../resources/glossary.md#context-window), [AGENTS.md](../../resources/glossary.md#agentsmd), [plan mode](../../resources/glossary.md#plan-mode), [sandbox](../../resources/glossary.md#sandbox), [red/green testing](../../resources/glossary.md#redgreen-testing)

## Key ideas

If you are working through this week on your own, read this section, then do the [lab](lab.md).

### An agent is an LLM in a loop with tools

An **agent** has **tools** (list files, read, search, edit, run a command) and works in a **loop**: choose a tool call, run it, read the result, choose the next step, until it believes the task is done. Everything it knows comes from its **context**: your prompt, standing instructions and every tool result so far. It never sees your screen. In **Be the Agent** you play both halves of this loop by hand.

### The context window is working memory

Everything the agent reads fills its context window. As it fills up, details get squeezed out and quality drops. So: one task per session, a fresh session for the next feature, and short standing instructions.

### AGENTS.md and SPEC.md

`AGENTS.md` is "a README for agents": what the project is, the commands, the rules. It's an open format that many agents read ([agents.md](https://agents.md/)). Keep it short; every line costs context in every session. `SPEC.md` says what to build. Read any rules file from the internet before using it: instructions can be hidden in them.

### Plan first

Ask for a plan before any code ("Plan first and wait for my approval"), or pick **Plan** where your tool has it. Fixing a plan costs seconds; undoing a wrong implementation costs an afternoon.

### Approvals and sandboxes

Agents ask before running commands; you can switch that off. Don't. Read each command before approving it, especially anything that deletes or moves files. Run agents in a Codespace, a sandbox away from your personal files, and **commit before and after every agent task**: an agent's own undo is not a backup.

### How agents fail

In July 2025 Replit's agent deleted a company's production database during a code freeze, created fake data, and wrongly said recovery was impossible ([Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/)). Gemini CLI overwrote a user's files one after another after a folder failed to be created ([AI Incident Database #1178](https://incidentdatabase.ai/cite/1178/)). Antigravity, asked to clear a cache, wiped a user's whole drive ([Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/googles-agentic-ai-wipes-users-entire-hard-drive-without-permission-after-misinterpreting-instructions-to-clear-a-cache-i-am-deeply-deeply-sorry-this-is-a-critical-failure-on-my-part)). More in [resources/case-studies.md](../../resources/case-studies.md).

### Tests are the agent's eyes

An agent can't see your app; a test is how it, and you, check the work. **Red/green testing** ([Willison](https://simonwillison.net/guides/agentic-engineering-patterns/)): write a test and watch it fail (red), then write code until it passes (green). The red step proves the test can catch a problem. Ask for test output as evidence, then run the tests yourself.

### Credits are a budget

Agent sessions make many model calls, so they can use credits much faster than chat. On Copilot's free plans, when the credits run out, chat and agent work stop until the monthly reset ([TOOLS.md](../../TOOLS.md)). Small, clear tasks cost less. Know your fallback.

### Why we check understanding more now

In CMU's 15-113, students' self-rated understanding and code reading fell to their lowest point of the year once agents took over the assignments ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). That's why from now on you read every diff, keep only what you can explain, and do oral walkthroughs with the AI off.

## Understanding check

- The [Week 6 exit ticket](../../assessment/exit-tickets.md#week-6) (🔴 no AI) at the end of the studio.
- **Oral walkthrough 2** ([protocol](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6)), at the end of the lab or in a slot before the week 7 studio: ten minutes with your instructor and the AI off. You explain the first feature the agent built for you, change it live, and talk through your `AGENTS.md`. Only commit code you can explain.

## Homework

About 3 hours. Full details in [homework.md](homework.md).

- **Core (required):** two more capstone features through the Safe Loop with an agent, each with a test; deploy your capstone to Vercel now ("deploy on day one"); an agent log in `PROMPTS.md`; an AI-free reflection on "a moment the agent surprised me"; the mid-course feedback survey.
- **Stretch (optional):** add an MCP server after reading it (for example browser automation, so the agent can check your page); compare a second agent on the same task.

Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)); the capstone has its own rubric ([capstone](../../assessment/rubrics.md#capstone)).

## If a tool is down

| Problem | What to do |
|---|---|
| Copilot credits ran out | Switch to the fallback agent in [TOOLS.md](../../TOOLS.md) (Antigravity if you're 18+, or OpenCode with a free Groq or OpenRouter model), or continue in Ask mode and make the edits yourself. See [resources/troubleshooting.md](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| No **Agent** option in Copilot Chat | Check you're signed in to GitHub in the Codespace and Copilot is enabled for your account. Menus move; the mode picker is at the bottom of the chat box |
| Codespaces quota used up | Stop unused codespaces at github.com/codespaces, or use the optional [local setup](../../setup/local-setup.md) (keep agents away from your personal files) |
| Vercel won't import the capstone | Personal-account repository only. See the [week 5 troubleshooting](../05-apis-secrets-servers/lab.md#troubleshooting) |

## Going further

- The [AGENTS.md](https://agents.md/) open format, with examples from real projects.
- Simon Willison, [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/) (red/green testing, and more) and [Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/) (why a Codespace is a good sandbox).
- GitHub Docs, [About GitHub Copilot CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli).
- VS Code Docs, [Permissions and approvals for agents](https://code.visualstudio.com/docs/agents/run/approvals).
- More readings: [resources/reading-list.md](../../resources/reading-list.md).
