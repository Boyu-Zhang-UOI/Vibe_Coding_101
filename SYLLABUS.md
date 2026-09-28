# Directed Study: Vibe Coding 101 — Syllabus

**Build real software with AI, on a $0 budget.**
Eight weeks · one 3-hour studio per week · about 3 hours of homework per week · no programming experience required.

## Course information

| | |
|---|---|
| **Course title** | Directed Study: Vibe Coding 101 |
| **Institution** | University of Idaho |
| **Course number** | None assigned. If one is needed, the university's standard Directed Study numbers are 2990, 4990, 5020 and 6020 ([catalog](https://catalog.uidaho.edu/course-information/)). |
| **Credits** | To be arranged |
| **Instructor** | Boyu Zhang |
| **Contact** | *to be added* |
| **Meeting time and place** | *to be added* |
| **Office hours** | *to be added* |
| **Course website** | [boyu-zhang-uoi.github.io/Vibe_Coding_101](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/) |
| **Course site (LMS)** | *to be added* |

> Tool names, limits and prices live in [TOOLS.md](TOOLS.md), which carries a date and is re-checked before every cohort. This syllabus deliberately avoids model versions and credit numbers, because they change monthly.

---

## 1. Course description

In February 2025 Andrej Karpathy named a new way of making software: describe what you want to an AI, accept what it writes, run it, and keep going on "vibes". A year later the same people were calling the professional version *agentic engineering*, and a lot of vibe-coded apps had leaked their users' data.

This course teaches both halves. You will build and ship five working web projects by directing AI tools, starting in a chat window in week 1 and ending with an AI agent working inside your own repository in weeks 6–8. You will also learn the small set of habits that separate a demo from software you can trust: writing a spec before you prompt, working in small steps with git save points, testing, reading what the AI wrote, keeping secrets secret, and locking down your database.

Every required tool has a free tier. The course is designed so that when a tool changes its limits (and they will), you switch to a fallback and keep working.

## 2. Who this course is for

- **Primary audience:** adults (18+) with no programming background who are comfortable using a computer, a browser and files. Students from any major are welcome.
- **Also useful for:** people who took one programming class, and CS students who want a structured, modern AI workflow.
- **Minors or cohorts in the EEA/UK:** several free tools are 18+ only or cannot be used to serve European users. See [instructor/variants.md](instructor/variants.md) for the adjusted stack.

**What you need:** a laptop (Windows, macOS, Linux or ChromeOS) with a modern browser, a personal email address, and a GitHub account. All coding happens in the browser through GitHub Codespaces, so you do not have to install anything. A local setup is optional ([setup/local-setup.md](setup/local-setup.md)).

## 3. Learning outcomes

By the end of the course you will be able to:

1. **Direct** AI tools to build working web software, from single-file pages to a deployed full-stack app, using a repeatable workflow (the Safe Loop).
2. **Specify** what you want before you build it: a one-page spec with user stories and testable acceptance criteria.
3. **Verify** AI output instead of trusting it: run it, test the happy path and edge cases, and read the diff.
4. **Explain** every part of the code you submit, and debug a failing program by reading its error messages, with the AI switched off.
5. **Use version control** (git and GitHub) as a safety net: commit, compare, revert, branch and review.
6. **Build safely:** protect privacy and secrets, keep API keys on the server, enforce database access rules, check dependencies, and contain AI agents.
7. **Ship** projects to the public web and present them clearly.
8. **Adapt** when tools change: choose between chat assistants, app builders, editor agents and terminal agents, and switch to a fallback without losing work.

## 4. How the course works

### The Safe Loop

Every lab from week 2 onward uses the same six-step loop ([resources/safe-loop.md](resources/safe-loop.md)):

| # | Step | What you do |
|---|---|---|
| 1 | **Describe** | State the goal, context, constraints and "done when". |
| 2 | **Plan** | Ask the AI for a plan. Edit it before any code is written. |
| 3 | **Step** | Build one small piece at a time. |
| 4 | **Test** | Run it. Check the normal case and at least one edge case yourself. |
| 5 | **Read** | Read the diff. Keep only what you can explain. |
| 6 | **Commit** | Make a git save point with a clear message. |

**Two-strikes rule:** if two attempts to fix the same problem fail, stop. Start a fresh chat and rewrite your prompt with what you learned.

### A weekly studio (3 hours)

| Time | Block |
|---|---|
| 0:00–0:10 | Show and tell: two students demo their homework |
| 0:10–0:30 | Concept mini-lecture (20 minutes maximum) |
| 0:30–0:40 | Live demo: the instructor runs the Safe Loop on this week's skill |
| 0:40–2:20 | Lab, with checkpoints and a 10-minute break |
| 2:20–2:45 | Debrief and share-out |
| 2:45–3:00 | Exit ticket (AI-free, three questions) and homework preview |

Homework comes in two tiers. **Core** is required and sized for about three hours. **Stretch** is optional and is for students who want more.

### The ladder of tools

The course climbs from the most guided tools to the most autonomous. Each rung is introduced only after the habits it needs.

```
Week 1–2   Chat assistant with live preview  (you copy, paste and commit)
Week 3     Browser app builders             (the AI builds a whole app from your spec)
Week 4     Editor + AI assistant            (you read, debug and write, the AI advises)
Week 5     Editor + AI + your own server    (secrets, APIs, deployment)
Week 6–8   AI agent in your repository      (the AI edits files and runs commands; you supervise)
```

## 5. Weekly schedule

| Week | Title | Big idea | You build | Tools (primary) |
|---|---|---|---|---|
| 0 | [Pre-work](setup/README.md) | Accounts, privacy, safety contract | — | GitHub, Google account |
| 1 | [Hello, Vibe Coding](weeks/01-hello-vibe-coding/) | What vibe coding is, and how an LLM writes code | A personal home page, live on the web | Chat assistant with preview · GitHub Pages |
| 2 | [Prompting & Save Points](weeks/02-prompting-and-save-points/) | Prompts as direction; commits as save points | A browser game in one hour | Two chat assistants · github.dev |
| 3 | [Spec First](weeks/03-spec-first/) | A spec is the prompt for the whole project | Project 1 v1 from your own spec | App builders (bake-off) · chat assistant |
| 4 | [Read It, Debug It, Own It](weeks/04-read-debug-own-it/) | You must be able to read and fix what the AI wrote | Debug clinic; Project 1 final | Codespaces · VS Code · Copilot (Ask mode) |
| 5 | [APIs, Secrets & Servers](weeks/05-apis-secrets-servers/) | The browser is public; secrets live on the server | An AI-powered micro-app, deployed | Free LLM API · Vercel |
| 6 | [How Agents Work](weeks/06-agents/) | An agent is an LLM in a loop with tools | Capstone kickoff: first agent-built, tested feature | Copilot agent mode and CLI in a Codespace |
| 7 | [Security, Data & Review](weeks/07-security-and-review/) | Public key + missing access rules = public database | Row-level-security attack lab; capstone database | Supabase · secret and dependency scanners |
| 8 | [Ship It](weeks/08-ship-it/) | Done means deployed, documented and explainable | Capstone polish; Project Fair | Everything |

### Week-by-week detail

**Week 1 — Hello, Vibe Coding.** What Karpathy meant, and why the field moved on. A mental model of LLMs: next-token prediction, context, non-determinism, confident mistakes. Privacy settings and the safety contract. *Lab:* build a single-file personal page in a chat assistant with live preview; ask the AI to explain it section by section; make three changes by hand; publish it on GitHub Pages. *Understanding check:* explain three parts of your page in plain English.

**Week 2 — Prompting & Save Points.** Prompt anatomy (goal, context, constraints, done-when). Why one giant prompt produces code you cannot change later. Git basics: commit, history, diff, revert. *Lab:* the timed "Game in an Hour", built from a five-step plan with one commit per working step, a deliberate break-and-rollback, and a two-model comparison. *Understanding check:* explain one function in a classmate's game.

**Week 3 — Spec First.** The one-page spec: problem, user, user stories, acceptance criteria in WHEN/SHALL form, out-of-scope list, wireframe. Browser app builders, what they generate, lock-in and credit budgets. The "70% problem". *Lab:* write the spec for Project 1 and get a peer review; run a builder bake-off with the same spec in two app builders, scoring each against your criteria; generate the version you will keep as plain HTML, CSS and JavaScript in your own repository. *Understanding check:* which acceptance criteria fail, and why?

**Week 4 — Read It, Debug It, Own It.** Anatomy of a web app (structure, style, behavior, state, storage). Browser DevTools, error messages and the scientific method of debugging. Edge cases. *Lab:* move Project 1 into a Codespace; a Debug Clinic with planted bugs and the AI switched off; add one small feature using "the AI plans, you write, the AI reviews"; write edge-case tests. *Oral walkthrough 1.* Project 1 due.

**Week 5 — APIs, Secrets & Servers.** Requests, responses, JSON and APIs. Client versus server: anything sent to the browser is public. API keys, environment variables, `.gitignore`, free-tier rate limits, and why a public endpoint that spends your key needs limits. *Lab:* run the starter AI micro-app with a free LLM API key kept in `.env`; make it your own; switch LLM providers by changing configuration only; deploy to Vercel with environment variables; prove the key is not visible in the browser or in git. *Understanding check:* show where the key lives and who can read it. Capstone pitch due.

**Week 6 — How Agents Work.** An agent is an LLM in a loop with tools. Context as working memory, AGENTS.md, plan-first prompting, approval modes, sandboxes, and how agents fail (fake success, deleted files, loops). Red/green testing. *Lab:* "Be the Agent" — change a small app using only an agent's tools; start the capstone from the starter repo with SPEC.md and AGENTS.md; build the first feature with an agent, test first. *Oral walkthrough 2* (modify the agent's code live).

**Week 7 — Security, Data & Review.** Authentication versus authorization; row-level security; publishable versus secret keys; cross-site scripting; slopsquatting; prompt injection, the "lethal trifecta" and the Rule of Two. Case studies: Lovable, Moltbook, Replit, Nx. *Lab:* attack your own Supabase table with its public key, then fix it with row-level security; run a security sweep on the capstone; a safe prompt-injection demonstration; human code review, compared with an AI review; a project handoff to a partner. *Understanding check:* explain one vulnerability you fixed.

**Week 8 — Ship It.** Definition of done, polish, accessibility basics, telling the story of a project, and where the field is going. *Lab:* polish sprint with a checklist; demo rehearsal; Project Fair. *Oral walkthrough 3.* Capstone and final reflection due.

## 6. Projects

| Project | Weeks | What it is | Where it lives |
|---|---|---|---|
| Home page | 1–2 | A personal page that becomes your portfolio, plus a game in `/game/` | `<username>.github.io` on GitHub Pages |
| Project 1: A Tool I'd Actually Use | 3–4 | A multi-feature, single-user web tool built from your spec, saving data in the browser | Its own repo, on GitHub Pages |
| AI micro-app | 5 | A small app that calls an LLM from a server route | Its own repo, on Vercel |
| Capstone | 6–8 | A deployed full-stack web app of your choice, built with an agent | Its own repo, on Vercel (+ Supabase if it stores shared data) |

Full briefs: [projects/](projects/). Every project repository contains a **PROMPTS.md** log of how you used AI.

**Rules for every project:** no real payments; no real personal data about other people; nothing you would miss if an AI agent deleted it.

## 7. Assessment

| Component | Weight | How it is graded |
|---|---|---|
| Weekly labs and homework | 20% | Effort and completion of the core tier ([rubric](assessment/rubrics.md#weekly-labs-and-homework)) |
| In-class builds, exit tickets and participation | 15% | Attendance, timed builds, peer explanation swaps, exit tickets |
| Project 1 | 10% | [Project 1 rubric](assessment/rubrics.md#project-1) |
| Capstone | 30% | Spec quality, tests including edge cases, security, deployment and prompt log. A working demo is required but not sufficient ([capstone rubric](assessment/rubrics.md#capstone)) |
| Oral walkthroughs (weeks 4, 6, 8) | 15% | 10-minute conversations with the AI off: explain your code, change it live, find a planted bug ([protocol](assessment/oral-walkthroughs.md)) |
| AI-free reflections and peer reviews | 10% | Your own writing, anchored in specific moments ([rubric](assessment/rubrics.md#reflections-and-peer-reviews)) |

See [assessment/README.md](assessment/README.md) for late work, pairs, and pass/fail options.

### Six skills you must be able to show without AI

These are tested in the oral walkthroughs and exit tickets ([resources/without-ai-skills.md](resources/without-ai-skills.md)):

1. Read an error message and find the failing line.
2. Explain any function you committed.
3. Write an acceptance criterion and a test for it.
4. Revert a bad commit.
5. Spot a committed secret.
6. Say where authorization is enforced in your app.

## 8. AI use policy

This course **requires** AI. The rule is not "how much AI did you use" but "can you explain what you shipped".

| | When | Examples |
|---|---|---|
| 🟢 **Expected** | Building, explaining, learning | Generating code, asking for explanations, planning, reviewing your diffs |
| 🟡 **Limited** | Where the goal is your own thinking | The AI may critique your spec but not write it; in the Debug Clinic, tutor mode (hints only) after 10 minutes on a bug |
| 🔴 **Not allowed** | Writing addressed to people, and checks of your understanding | Reflections, peer reviews, exit tickets, oral walkthroughs |

- **Disclose:** every project has a PROMPTS.md with your key prompts, links to exported chats where possible, and notes on what you changed.
- **Own it:** "If you can't explain it, you didn't build it." You may be asked to explain any line you submit.
- **Credit others:** if you use code, images or text from a person or website, credit it in your README.

## 9. Safety and privacy

Before week 1, every student sets privacy settings on each tool and signs the [safety contract](setup/safety-contract.md). In short:

1. Turn off "use my data for training" where you can; use temporary chats for anything sensitive.
2. Never paste API keys, passwords, `.env` files or other people's personal data into an AI tool.
3. Commit before and after every agent task.
4. Contain agents: work in a Codespace, approve commands that delete or move files, never give an agent production credentials.
5. Verify claims against real output; agents have reported success while tests were failing.
6. Check that every new package exists and is the one you meant before installing it.
7. Read any AGENTS.md file, rules file or MCP server from the internet before you use it.
8. Keep a record of what you wrote yourself.

## 10. Tools and cost

Required cost: **$0**. Every layer has a primary free tool and two fallbacks, listed in [TOOLS.md](TOOLS.md). If you choose to pay for one thing, the most useful options are the cheapest paid plan of the editor assistant, or one month of a frontier coding agent timed to weeks 6–8 (prices in TOOLS.md). Neither is needed to earn full marks.

Free tiers change without notice. When a tool stops working for you, the fallback is part of the course, not a failure: see [resources/troubleshooting.md](resources/troubleshooting.md#i-ran-out-of-free-credits).

## 11. Accessibility and support

- Every lab lists a core path that fits in the studio time; the stretch tier is optional.
- Slides are plain Markdown and readable with a screen reader; every lab is written as step-by-step text.
- If a disability, time zone, device or connectivity issue affects your work, contact the instructor in week 1 so we can plan together.
- Office hours are for anything: stuck code, tool trouble, or "I don't understand what the AI did".

## 12. Why the course looks like this

The design is based on a review of 2025–26 university and industry courses, education research, security incidents, and the free-tool landscape as of September 2026. Short version: [research/design-rationale.md](research/design-rationale.md). Full report: [research/landscape-report-2026-09.md](research/landscape-report-2026-09.md).
