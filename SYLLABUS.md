# Directed Study: Vibe Coding — Building Software with AI — Syllabus

**Build real software with AI, on a $0 budget.**
Vibe Coding 101 · University of Idaho · 3 credits · eight accelerated weeks · two 3-hour studios a week plus about 11 hours outside class · no programming experience required.

## Course information

| Item | Details |
|---|---|
| **Course title** | Directed Study: Vibe Coding — Building Software with AI (short name: Vibe Coding 101) |
| **Course number** | [subject] 2990, Directed Study (lower-division undergraduate). The department assigns the subject prefix ([catalog](https://catalog.uidaho.edu/course-information/)) |
| **Institution** | University of Idaho |
| **Credits** | 3, which means about **135 hours** of work in all (catalog Regulation D-1) |
| **Format and length** | In person. **Eight weeks, accelerated**: two 3-hour studios a week (**Studio A — Learn & build** and **Studio B — Workshop**) plus about 11 hours of work outside class, so about **17 hours a week** ([section 4](#4-how-the-course-works)) |
| **Dates** | *to be added* |
| **Meeting times and rooms** | Studio A: *to be added* · Studio B: *to be added* |
| **Prerequisites** | None. You don't need any programming experience |
| **Instructor** | Boyu Zhang, *title to be added* |
| **Email and phone** | *to be added* · Response time: *to be added* |
| **Office** | *to be added* |
| **Office hours** | *to be added* |
| **Canvas** | Canvas, the course's learning management system (LMS): *link to be added*. Submissions, grades, feedback and all your personal writing go here |
| **Course website** | [boyu-zhang-uoi.github.io/Vibe_Coding_101](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/) (all course materials, published from the [GitHub repository](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101)) |
| **Required materials** | No textbook. A laptop with a modern browser and free accounts ([section 2](#2-who-this-course-is-for)). Required cost: **$0** ([section 10](#10-tools-and-cost)) |

> Tool names, limits and prices live in [TOOLS.md](TOOLS.md), which carries a date and is re-checked before every cohort. This syllabus deliberately avoids model versions and credit numbers, because they change monthly.

**First step:** do the [first-hour quick start](setup/README.md#before-studio-1) before Studio 1 (about 60–90 minutes).

---

## 1. Course description

In February 2025 Andrej Karpathy named a new way of making software: describe what you want to an AI, accept what it writes, run it, and keep going on "vibes". A year later the same people were calling the professional version *agentic engineering*, and a lot of vibe-coded apps had leaked their users' data.

This course teaches both halves. You will build and ship five working web projects by directing AI tools, starting in a chat window in week 1 and ending with an AI agent working inside your own repository in weeks 6–8. You will also learn the small set of habits that separate a demo from software you can trust: writing a spec before you prompt, writing the check before the code, working in small steps with git save points, testing, reading and explaining what the AI wrote, keeping secrets secret, and locking down your database.

Every required tool has a free tier. The course is designed so that when a tool changes its limits (and they will), you switch to a fallback and keep working.

**This is an accelerated course.** It packs a 3-credit semester course (about 135 hours of work) into eight weeks, so each week asks about twice what a semester-long course would: about 17 hours, including 6 hours of studios. Plan your other commitments before the course starts, and talk to me in week 1 if your schedule changes. A [16-week version](instructor/variants.md#16-week-semester-version) exists for departments that want a gentler pace.

## 2. Who this course is for

- **Primary audience:** adults (18+) with no programming background who are comfortable using a computer, a browser and files. Students from any major are welcome.
- **Also useful for:** people who took one programming class, and CS students who want a structured, modern AI workflow.
- **Under 18, or in the EEA, the UK or Switzerland?** Several free tools are 18+ only or can't be used to serve European users. **Tell the instructor before the course starts**, so the class can switch to the adjusted stack in [instructor/variants.md](instructor/variants.md).

**What you need:** a laptop (Windows, macOS, Linux or ChromeOS) with a modern browser, a personal email address, your phone for two-factor sign-in, and a GitHub account. All coding happens in the browser through GitHub Codespaces, so you don't have to install anything. A local setup is optional ([setup/local-setup.md](setup/local-setup.md)). The accounts are listed in [setup/accounts.md](setup/accounts.md).

## 3. Learning outcomes

By the end of the course you will be able to:

1. **Direct** AI tools to build working web software, from single-file pages to a deployed full-stack app, using a repeatable workflow (the Safe Loop).
2. **Specify** what you want before you build it: a one-page spec with user stories and testable acceptance criteria.
3. **Verify** AI output instead of trusting it: write the check first, run it, test the happy path and edge cases, and read the diff.
4. **Explain** every part of the code you submit, and debug a failing program by reading its error messages, with the AI switched off.
5. **Use version control** (git and GitHub) as a safety net: commit, compare, revert, branch and review through pull requests.
6. **Build safely:** protect privacy and secrets, keep API keys on the server, enforce database access rules, check dependencies, and contain AI agents.
7. **Ship** projects to the public web and present them clearly.
8. **Adapt** when tools change: choose between chat assistants, app builders, editor agents and terminal agents, and switch to a fallback without losing work.

### How each outcome is assessed

| Outcome | Where you show it | What the grader looks for |
|---|---|---|
| 1. Direct | Weekly labs and homework; `PROMPTS.md` | The "Save points and log" row of the [weekly rubric](assessment/rubrics.md#weekly-labs-and-homework): small commits and an honest prompt log |
| 2. Specify | `SPEC.md` in [Project 1](assessment/rubrics.md#project-1) and the [capstone](assessment/rubrics.md#capstone); the week 3 peer spec review | The "Spec" rows: checkable WHEN … THE APP SHALL … criteria, edge cases, a logged Goldfish test |
| 3. Verify | `TESTS.md` and automated tests | The "Tests" rows: edge cases with dated results; in the capstone, tests written before the code |
| 4. Explain | [Oral walkthroughs](assessment/oral-walkthroughs.md) 1–3; exit tickets (practice) | The Explain, Modify and Debug areas of each walkthrough, and the [six skills](#six-skills-you-must-be-able-to-show-without-ai) |
| 5. Version control | Walkthrough "Process" area; capstone "Process" row | Reverting a commit with the AI off; small commits; features merged through pull requests |
| 6. Build safely | Capstone security checklist; the micro-app's "Key stays on the server" row | Real evidence: secret-scan output, RLS on with policies, your own attack failing |
| 7. Ship | Deployment rows; the capstone README and demo video; the Project Fair | A production URL that works in a private window, a clear README and a 2–3 minute demo |
| 8. Adapt | The micro-app's "Provider swap" row; the capstone README's tools line | Two providers run by changing configuration only; the tools and any fallback you used |

**Example: how outcome 4 is assessed.** In [walkthrough 1](assessment/oral-walkthroughs.md#walkthrough-1-week-4) (week 4), with the AI off, you explain a function from your Project 1, find the failing line after the examiner breaks something, fix it, and revert a commit. The examiner scores four areas (Explain, Modify, Debug, Process) from 0 to 4 each ([scoring](assessment/oral-walkthroughs.md#scoring)), and records which of the six without-AI skills you showed.

## 4. How the course works

### Two studios a week

Each week has two 3-hour studios a few days apart, plus work outside class. The week's `README.md` opens with a **This week at a glance** table: what to do before Studio A, what each studio covers, what's due, the AI rules and the minimum you need to keep up.

| Block | Time | What happens |
|---|---|---|
| **Studio A — Learn & build** | 3 h | Recap of last week's most-missed exit-ticket question (5 min) · concept talk (20 minutes at most) · live demo (10 min) · lab, core parts (about 2 hours 15 minutes, with a 10-minute break) · checkpoint share (10 min) |
| **Studio B — Workshop** | 3 h | Show and tell (10 min) · lab continued, or a mini-lesson and practice on the week's second skill (90 min) · project work time, with oral walkthroughs in weeks 4, 6 and 8 and catch-up help (50 min) · debrief (15 min) · exit ticket (15 min, 🔴 AI off) |
| **Outside class** | about 11 h | Prep before Studio A (1 hour at most: the week's README and one reading) · homework core (about 6–7 hours) · project build time (about 2–3 hours) · `PROMPTS.md` and your weekly reflection (about 1 hour) |

- **Due dates:** homework is **due before next week's Studio A** (by default, 11:59 pm the night before). Canvas shows the exact time.
- **Core and stretch.** Every lab part is marked **Core** or **If time**. Homework has a **core** tier (required) and a **stretch** tier (optional, never graded). Every homework ends with a **Minimum to keep up** box: the one thing you must have working before the next week.
- **Exit tickets** are three short questions at the end of Studio B, with the AI off. One question each week asks about a decision or function in *last* week's project, because remembering it later is what counts. They're graded on completion, not on correctness.

### The Safe Loop

Every lab from week 2 onward uses the same six-step loop ([resources/safe-loop.md](resources/safe-loop.md)):

| # | Step | What you do |
|---|---|---|
| 1 | **Describe** | State the goal, context, constraints and "done when". **Check first:** write the "done when" check before you ask for the code, in a separate prompt (from week 4, an automated test) |
| 2 | **Plan** | Ask the AI for a plan. Edit it before any code is written |
| 3 | **Step** | Build one small piece at a time |
| 4 | **Test** | Run it: your check, the normal case and at least one edge case, yourself |
| 5 | **Read** | Read the diff. Keep only what you can explain. **Teach back:** before you commit AI-written code, write 2–3 sentences in `PROMPTS.md` saying what changed and why |
| 6 | **Commit** | Make a git save point with a clear message. Commits made with AI help end with an `Assisted-by: [tool]` line (taught in week 2, required from week 6) |

**Two-strikes rule:** if two attempts to fix the same problem fail, stop. Start a fresh chat and rewrite your prompt with what you learned.

**Why check first and teach back?** Tests an AI writes *after* faulty code tend to agree with the faults ([Konstantinou et al.](https://arxiv.org/abs/2607.05139)), and students who had to explain AI code before adding it failed an AI-off maintenance task far less often than students who didn't ([Sankaranarayanan](https://arxiv.org/abs/2602.20206)).

### Three habits for talking to an AI

Taught in week 1 and used all course:

1. **Ask the AI to ask you questions first,** before it builds anything.
2. **Show, don't describe:** give it a picture, a sketch or a reference instead of a long description.
3. **Say what already works** before you ask for a change, so it doesn't break it.

The **Goldfish test** (weeks 3 and 6) checks your documents the same way: paste only your `SPEC.md` (or `AGENTS.md`) into a fresh chat. If it can't understand or build from the document alone, without asking you, the document needs revising.

### The ladder of tools

The course climbs from the most guided tools to the most autonomous. Each rung is introduced only after the habits it needs.

| Weeks | Tool | Who does what |
|---|---|---|
| 1–2 | Chat assistant with live preview | You copy, paste and commit |
| 3 | Browser app builders | The AI builds a whole app from your spec |
| 4 | Editor with an AI assistant | You read, debug and write; the AI advises |
| 5 | Editor, AI and your own server | Secrets, APIs and deployment |
| 6–8 | AI agent in your repository | The AI edits files and runs commands; you supervise, with approvals on |

## 5. Weekly schedule

| Week | Title | Big idea | You build | Tools (primary) |
|---|---|---|---|---|
| 0 | [Pre-work](setup/README.md) | Accounts, privacy, a first win | A one-line web page in a chat preview; a tested Codespace | GitHub, Google account |
| 1 | [Hello, Vibe Coding](weeks/01-hello-vibe-coding/) | What vibe coding is, and how an LLM writes code | A personal home page, live on the web; your personal AI-use rules | Chat assistant with preview · GitHub Pages |
| 2 | [Prompting & Save Points](weeks/02-prompting-and-save-points/) | Prompts as direction; commits as save points | A browser game in one hour | Two chat assistants · github.dev |
| 3 | [Spec First](weeks/03-spec-first/) | A spec is the prompt for the whole project | Project 1 v1 from your own spec | App builders (jigsaw bake-off) · Codespaces |
| 4 | [Read It, Debug It, Own It](weeks/04-read-debug-own-it/) | You must be able to read and fix what the AI wrote | Debug Clinic; your first automated test; Project 1 final | Codespaces · VS Code · Copilot (Ask mode) |
| 5 | [APIs, Secrets & Servers](weeks/05-apis-secrets-servers/) | The browser is public; secrets live on the server | An AI-powered micro-app, deployed | Free LLM API · Vercel |
| 6 | [How Agents Work](weeks/06-agents/) | An agent is an LLM in a loop with tools | Capstone kickoff: first agent-built, tested feature; your first pull request | Copilot agent mode and CLI in a Codespace |
| 7 | [Security, Data & Review](weeks/07-security-and-review/) | Public key + missing access rules = public database | RLS Attack Lab; your capstone's database | Supabase · secret and dependency scanners |
| 8 | [Ship It](weeks/08-ship-it/) | Done means deployed, documented and explainable | Capstone polish; Project Fair | Everything |

### Week-by-week detail

**Week 0 — Pre-work.** **Before Studio 1** (about 60–90 minutes, [quick start](setup/README.md#before-studio-1)): create your accounts, change the privacy settings, open a test Codespace, switch on GitHub Copilot, and get a first win: a one-line web page running in a chat assistant's preview. **During week 1** ([details](setup/README.md#during-week-1)): sign the [safety contract](setup/safety-contract.md) on Canvas, take the pre-course [self-assessment](assessment/self-assessment.md) on Canvas, and apply for GitHub Education (verification can take several days, so start early).

**Week 1 — Hello, Vibe Coding.** What Karpathy meant, and why the field moved on. A mental model of LLMs: next-token prediction, context, non-determinism, confident mistakes. Privacy and the safety contract. *Studio A:* build a single-file personal page in a chat assistant with live preview; ask the AI to explain it section by section; make three changes by hand (🔴 AI off). *Studio B:* publish it on GitHub Pages; the **three habits** card; check your page's accessibility; write your **personal AI-use rules**, version 1 (🔴 AI off, on Canvas); exit ticket. *Outside class:* improve the page; start `PROMPTS.md` (five entries); **AI fluency pre-work**: Anthropic's free [AI Fluency: Framework & Foundations](https://anthropic.skilljar.com/ai-fluency-framework-foundations) course (a free sign-up; about 3 hours) or an equivalent your instructor names, with a short AI-free response on Canvas; reflection on Canvas. *Understanding check:* explain three parts of your page in plain English.

**Week 2 — Prompting & Save Points.** Prompt anatomy (Goal · Context · Constraints · Done when). Why one giant prompt produces code you can't change later. Git basics: commit, history, diff, revert, and the `Assisted-by:` line. *Studio A:* the timed **Game in an Hour**, built from a five-step plan with one commit per working step (graded on effort and save points, not on finishing). *Studio B:* a deliberate break-and-restore rollback; a two-model comparison; a peer explanation swap (🔴 AI off); the **prompt makeover** workshop; exit ticket. *Outside class:* finish the game and add one more feature in at least three save points; finish your prompt makeover (🔴 AI off for the rewrites); read Simon Willison's ["Not all AI-assisted programming is vibe coding"](https://simonwillison.net/2025/Mar/19/vibe-coding/); reflection. *Understanding check:* explain one function in a classmate's game.

**Week 3 — Spec First.** The one-page spec: problem, user, user stories, acceptance criteria in WHEN … THE APP SHALL … form, out-of-scope list, wireframe. Browser app builders, what they generate, lock-in and credit budgets. The "70% problem". *Studio A:* write the `SPEC.md` for Project 1 (35 minutes, 🔴 AI off for the first draft); a **peer spec review** (written up on Canvas); the **Goldfish test** of your spec, then revise it. *Studio B:* the builder bake-off as a **jigsaw**: each student runs one builder on their own spec and scores it, then pairs compare scorecards; start Project 1 in a Codespace, previewing every change **before** you commit it, in Safe Loop order (and if the page goes blank, open the Console). *Outside class:* Project 1 v1 live, with at least half of its MUST criteria working; an acceptance table in the README. Your bake-off Verdict (🔴 AI off, on Canvas) is this week's reflection. *Understanding check:* which acceptance criteria fail, and why?

**Week 4 — Read It, Debug It, Own It.** Anatomy of a web app (structure, style, behavior, state, storage). Browser DevTools, error messages and the scientific method of debugging. Edge cases. *Studio A:* the **Debug Clinic**: planted bugs, about 60 minutes with the AI off (🟡 hint-only tutor mode after 10 minutes stuck on one bug), then a debrief. *Studio B:* practise `git log`, `git diff` and `git revert` first, then **oral walkthrough 1** slots begin; "**You write it**": pick one of three feature cards and write the code yourself from a plan and a code skeleton with blanks (30 minutes); a worked example of your **first automated test** (a small function checked with `node --test`). *Outside class:* Project 1 final; `TESTS.md` with three edge cases; one automated test of your own. **Project 1 due.**

**Week 5 — APIs, Secrets & Servers.** Requests, responses, JSON and APIs. Client versus server: anything sent to the browser is public. API keys, environment variables, `.gitignore`, free-tier rate limits, and why a public endpoint that spends your key needs limits. Not every key is a secret: some are public by design and safe only with access rules. *Studio A:* a tour of the starter AI micro-app; a free LLM API key kept in `.env`; run it in your Codespace; make it your own (its job and its page). *Studio B:* deploy to Vercel and check the production URL; the provider-swap drill (change configuration only); prove the key is secret (DevTools, and a secret scan that also checks your git history); a mini-lesson on **external public APIs** (a server route that calls a public API needing no key). *Outside class:* micro-app live; a "Where the key lives and who can read it" README section (🔴 AI off); validation tests, written from a fill-in test skeleton; a hidden-costs checklist. Rewriting the rate-limit message is stretch. **Capstone pitch due 72 hours before week 6 Studio A.**

**Week 6 — How Agents Work.** An agent is an LLM in a loop with tools. Context as working memory, plan-first prompting, approval modes and sandboxes, and how agents fail (fake success, deleted files, loops). `AGENTS.md` is advice, not enforcement: what actually protects you is the Codespace, approval prompts, narrowly scoped keys, spending caps and database rules. Approvals stay on; never use autopilot or skip-permissions modes. *Studio A:* **Be the Agent** (30 min); open your capstone repo (created from the starter **before** class); write `SPEC.md` for today's one criterion and an `AGENTS.md` with a **Scope** section; build your first feature with an agent (50+ minutes), checking first and teaching back. *Studio B:* a mini-lesson on **branches and pull requests** (open one, review it yourself, merge it); find a planted bug in agent-written code; **feature clinic** stations, where you pick what your capstone needs: a simple chart, or an external API; **oral walkthrough 2** slots. *Outside class:* complete `SPEC.md` and run its Goldfish test; the **`AGENTS.md` trial** (two small tasks: did the agent follow the file? make one change); one more feature as a pull request with a test; deploy early; agent log in `PROMPTS.md`; reflection; mid-course survey. **Milestone 1** ([milestones](projects/capstone.md#milestones)).

**Week 7 — Security, Data & Review.** Authentication versus authorization; row-level security (RLS); publishable versus secret keys; database permissions ("grants") always together with RLS; cross-site scripting; slopsquatting; prompt injection and the "lethal trifecta". 2026 case studies: thousands of databases with publicly readable tables, an agent that deleted a production database and its backups, agents that published private screenshots, malware that hunts for AI keys, and a platform that let anyone read other users' projects ([case studies](resources/case-studies.md)). *Studio A:* the **RLS Attack Lab**, using the attack page hosted on the course website; a worked example of connecting your app to Supabase (the project URL and publishable key in `public/config.js`, grants and RLS policies). *Studio B:* an **AI-off maintenance task** on your own capstone (20–30 minutes, 🔴 AI off); a security sweep (secret scan including history, `npm audit`, a package check, an XSS test); **peer review as a pull-request review**, plus your written review on Canvas (🔴 AI off); a 7-minute prompt-injection demonstration by the instructor. *Outside class:* persistence (Supabase with RLS and `supabase/policies.sql`, or another feature type); `SECURITY_CHECKLIST.md` with evidence; respond to your review; the **handoff test** (a partner tries a change using only your README and `AGENTS.md`); reflection. **Milestone 2.**

**Week 8 — Ship It.** Definition of done, polish, accessibility basics, telling the story of a project, and where the field is going. *Studio A:* polish sprint (accessibility; empty, loading and error states; a README with an honest **Known issues** section); a final security pass; record a 2–3 minute demo video; **oral walkthrough 3** slots (or by appointment during week 8, before the Project Fair). *Studio B:* the **Project Fair**; revise your personal AI-use rules (🔴 AI off, on Canvas); course retrospective; post-course self-assessment (Canvas). **Final submission:** the production URL and a screenshot, a `v1.0` release, the demo video, and your final reflection (on Canvas).

## 6. Projects

| Project | Weeks | What it is | Where it lives |
|---|---|---|---|
| Home page | 1–2 | A personal page that becomes your portfolio, plus a game in `/game/` | `[username].github.io` on GitHub Pages |
| Project 1: A Tool I'd Actually Use | 3–4 | A multi-feature, single-user web tool built from your spec, saving data in the browser | Its own repo, on GitHub Pages |
| AI micro-app | 5 | A small app that calls an LLM from a server route | Its own repo, on Vercel |
| Capstone | 6–8 | A deployed full-stack web app of your choice, built with an agent, with at least two of four feature types (pairs: three) | Its own repo, on Vercel (+ Supabase if it stores shared data) |

Full briefs: [projects/](projects/). Capstone dates are in one place: the [capstone milestones](projects/capstone.md#milestones). Every project repository contains a **`PROMPTS.md`** log of how you used AI.

**Rules for every project:** no real payments; no real personal data about other people; nothing you would miss if an AI agent deleted it.

## 7. Assessment

| Component | Weight | How it is graded |
|---|---|---|
| Weekly labs and homework | 20% | Effort and completion of the core tier ([rubric](assessment/rubrics.md#weekly-labs-and-homework)). Week 5 is graded with the [AI micro-app rubric](assessment/rubrics.md#ai-micro-app) |
| In-class builds, exit tickets and participation | 15% | 16 studios (two a week): lab work, peer explanation, checkpoints and exit tickets ([rubric](assessment/rubrics.md#in-class-work-and-participation)) |
| Project 1 | 10% | [Project 1 rubric](assessment/rubrics.md#project-1) |
| Capstone | 30% | Spec quality, tests including edge cases, security, deployment and prompt log. A working demo is required but not sufficient ([capstone rubric](assessment/rubrics.md#capstone)) |
| Oral walkthroughs (weeks 4, 6, 8) | 15% | 10-minute conversations with the AI off: explain your code, change it live, find a planted bug ([protocol](assessment/oral-walkthroughs.md); [what to expect](assessment/oral-walkthroughs.md#what-to-expect)) |
| AI-free reflections and peer reviews | 10% | Your own writing, anchored in specific moments, submitted on Canvas ([rubric](assessment/rubrics.md#reflections-and-peer-reviews)) |

**The [assessment guide](assessment/README.md) is part of this syllabus.** It explains how points become your grade, the drops (your lowest weekly score and lowest two studios), retakes, grace tokens, late work, make-ups, pairs and regrades. I go through it in the first studio.

**What's graded on effort, not correctness:** weekly labs, timed builds such as the Game in an Hour, and exit tickets. A lab that didn't work, with a clear record of the error and what you tried, can still earn full marks.

### Letter grades

The University of Idaho uses letter grades without plus or minus.

| Grade | Course percentage |
|---|---|
| **A** | 90–100 |
| **B** | 80–89 |
| **C** | 70–79 |
| **D** | 60–69 |
| **F** | below 60 |

To earn a C or higher you must also have a capstone that works at its production URL, have taken all three oral walkthroughs, and have shown each of the six skills below at least once ([details](assessment/README.md#letter-grades)).

### Six skills you must be able to show without AI

These are checked in the oral walkthroughs, and practised in the exit tickets ([resources/without-ai-skills.md](resources/without-ai-skills.md)). Each needs to be shown only once, and you get several chances.

1. Read an error message and find the failing line.
2. Explain any function you committed.
3. Write an acceptance criterion and a test for it.
4. Revert a bad commit.
5. Spot a committed secret.
6. Say where authorization is enforced in your app.

### Late work

You have **two grace tokens**, each extending one deadline by 48 hours with no reason needed. After that, late work loses 10% of its points per day for up to three days. Tokens can't be used for live events (studios, exit tickets, walkthroughs, the Project Fair), which have make-up rules instead ([section 11](#missed-studios-and-make-up-work)). Running out of free credits is not by itself a reason to be late, because switching to a fallback is part of the course. Full rules: [Late work and grace tokens](assessment/README.md#late-work-and-grace-tokens).

### Pass/fail

This course is letter-graded. If you're eligible, you may take it under the University's pass/fail option (catalog Regulation B-10: talk with your advisor first; there are limits, for example on courses in your major or used for general education). I'm not told who chose it: I report a letter grade, and the Registrar records a C or higher as P. For undergraduates, a D stays a D. (Regulation E-1-b also lets a department grade a directed study pass/fail for every student; if that applies, it will be announced in the first studio.)

### Incompletes

An Incomplete (I) is possible only under catalog Regulation F: you have been attending and doing passing work until near the end (the regulation's cutoff is three weeks before the close of the semester), and an extenuating circumstance, such as serious illness or a death in the family, makes it impossible to finish on time. We agree it together, I set out in writing what's left to do and by when, and I record a grade that applies if the work isn't completed. Running out of time because of procrastination doesn't qualify. If something serious happens, talk to me as early as you can.

## 8. AI use policy

This course **requires** AI. The rule is not "how much AI did you use" but "can you explain what you shipped". Every task is labeled with one of three levels, always in words as well as color.

| Level | When | The complete list |
|---|---|---|
| 🟢 **AI on** | Building, explaining, learning | Generating code; asking for explanations, plans and reviews of your diffs; debugging outside the Debug Clinic; the Goldfish test; writing `AGENTS.md`; translating instructions into your own language. Everything not listed below is 🟢 AI on |
| 🟡 **AI limited** | Where the goal is your own thinking | **Your `SPEC.md`** (Project 1 and capstone): the AI may ask questions, critique it and run the Goldfish test, but you write it. **Your capstone pitch:** critique only. **The Debug Clinic** (week 4): AI off, then hint-only [tutor mode](instructor/course-tutor.md) after 10 minutes stuck on one bug. **"You write it"** (week 4): the AI may plan and review, but you write the code |
| 🔴 **AI off** | Checks of your understanding, and writing addressed to people | Exit tickets · oral walkthroughs, retakes, skill follow-ups and "explain it" conversations · weekly and final reflections, including the week 3 bake-off Verdict · written peer reviews (an AI review may come *after* yours, to compare) · peer explanation swaps · the pre- and post-course self-assessments · your personal AI-use rules (week 1, revised in week 8) · your response to the AI fluency pre-work · the first draft of your Project 1 spec (week 3 Studio A) · the hand-made code changes in week 1 · the prompt-makeover rewrites (week 2) · the micro-app's "Where the key lives and who can read it" section (week 5) · the AI-off maintenance task (week 7) · the teach-back notes and the "What I wrote or decided myself" section of `PROMPTS.md` · a pair's contribution statement · any other task a brief marks 🔴 AI off |

**If two labels ever seem to disagree,** follow the stricter one and ask. Using AI on 🔴 AI-off work, or beyond what a 🟡 AI-limited label allows, is academic dishonesty under the University's Student Code of Conduct ([section 11](#academic-integrity)).

- **Disclose:** every project has a `PROMPTS.md` with your key prompts, links to exported chats where possible, notes on what you changed, and teach-back notes for AI-written changes. Commits made with AI help end with an `Assisted-by: [tool]` line.
- **Own it:** "If you can't explain it, you didn't build it." You may be asked to explain any line you submit.
- **Credit others:** if you use code, images or text from a person or website, credit it in your README. Using prompts you found online is fine; say where they came from.
- **Your own rules:** in week 1 you write a few personal rules for when you will and won't use AI, and in week 8 you revise them. Students who set their own rules tend to do better ([Azimi](https://arxiv.org/abs/2609.16784)).

## 9. Safety and privacy

### The safety contract

Before Studio 1 you set your privacy settings and skim the [safety contract](setup/safety-contract.md); you sign it on Canvas during week 1. Each rule starts the week it's taught, and the course sets up the protections around you (a Codespace sandbox, starters that keep keys off the browser, a secret scanner). In short:

| Rule | In plain words | Taught in |
|---|---|---|
| 1. Privacy settings first | Turn off "train on my chats" before you type anything | Weeks 0–1 |
| 2. I never paste secrets or other people's data into an AI tool | No keys, passwords, `.env` files or anyone else's personal information in a chat | Week 1; keys in week 5 |
| 3. I commit before and after every agent task | Git is your backup, not the agent's undo | Week 2; agents in week 6 |
| 4. I keep agents contained | Agents work in a sandbox with approvals on, the smallest keys possible, hard spending caps, and no reach to your backups | Weeks 5–6 |
| 5. I verify, I don't trust | Check claims against real output; passing tests is not a security check, so test who can read and change your data yourself | Weeks 2 and 4; security in week 7 |
| 6. I check packages before I install them | Installing runs code: install only what the plan named, check it, and pin the version | Week 5; again in week 7 |
| 7. I read before I adopt | Read any rules file, skill, plugin, hook, MCP server or script first; never open a project folder someone sent you with an agent; clone it from its URL instead | Week 6 |
| 8. I keep a record of what I wrote myself | `PROMPTS.md`, and an `Assisted-by:` line on AI-assisted commits | Weeks 1–2; required from week 6 |
| 9. Agents don't publish, and untrusted content never shares a session with my secrets | No agent makes anything public without your approval; an agent reading strangers' content never has your keys within reach; no autopilot modes | Weeks 6–7 |

### Privacy of your work

Your projects are public on purpose: they become your portfolio. Your grades and personal writing are not. University policy treats grades and graded work as private (FSH 4700 F-6, and FSH 2600, which applies FERPA, the US federal student-records law), so:

- **In your public repos,** under your GitHub username: code, `SPEC.md`, `TESTS.md`, `PROMPTS.md`, `AGENTS.md`, `SECURITY_CHECKLIST.md` and READMEs.
- **On Canvas only:** reflections, exit tickets, your personal AI-use rules, the signed safety contract, self-assessments, written peer reviews, pair contribution statements, the capstone pitch, and all grades and feedback.
- **Never commit** grades, feedback, reflections, classmates' real names (use GitHub usernames), your student ID, or real personal data about anyone. You don't need your real name anywhere public.

Details, including private repos and recordings: [Privacy of your work](assessment/README.md#privacy-of-your-work).

## 10. Tools and cost

Required cost: **$0**. Every layer has a primary free tool and two fallbacks, listed in [TOOLS.md](TOOLS.md). If you choose to pay for one thing, the most useful options are the cheapest paid plan of the editor assistant, or one month of a frontier coding agent timed to weeks 6–8 (prices in TOOLS.md). Neither is needed to earn full marks.

Free tiers change without notice. When a tool stops working for you, the fallback is part of the course, not a failure: see [resources/troubleshooting.md](resources/troubleshooting.md#i-ran-out-of-free-credits). Never add a payment method to a free account just to keep going; ask first.

## 11. Course policies

### Attendance and participation

Studios are where most of the learning happens, and they count for **15% of your grade** (16 studios, each scored out of 10 for lab work, peer explanation, and the checkpoint or exit ticket). Your **lowest two studio scores are dropped**, which covers an ordinary missed day. Missing more than that lowers this component, and missing a walkthrough or the Project Fair affects those items too. You're responsible for catching up on what you missed: each week's lab is written step by step, and Studio B's project-work time and office hours are there for catch-up help.

### Missed studios and make-up work

- **Absences the University recognizes** (catalog Regulation M-1): official university activities, your own illness, family illness or care, or other compelling circumstances. Tell me as soon as you can (before the absence, for official activities). You can make up the studio for **full credit within one week**: do the lab's core parts and, for a Studio B, the exit ticket on Canvas. Missed walkthroughs are rescheduled without penalty.
- **Religious observance** (Regulation M-3): walkthroughs, exit tickets and the Project Fair are rescheduled. Tell me as early as you can.
- **Other absences:** do the lab and (for Studio B) the exit ticket within 48 hours for up to 7 of the 10 points.
- **Online or in another time zone for part of the course?** Talk to me in week 1; the online arrangements are in [instructor/variants.md](instructor/variants.md#online-and-hybrid-delivery).

Full rules: [Absences and make-up work](assessment/README.md#absences-and-make-up-work). All three oral-walkthrough windows are posted on Canvas in week 1.

### Recording of class sessions

Students may record studios only with my consent or as a CDAR accommodation (FSH 4700 F-8). Concept talks I record are posted only on Canvas. Oral walkthroughs are recorded only with your consent, kept where only staff can see them, and deleted once grades are final.

### Academic integrity

**Disclosure is the rule.** Honest disclosure of AI use in `PROMPTS.md` is never penalized, even when the AI did most of the typing.

The University of Idaho Student Code of Conduct (FSH 2300) applies. In this course, academic dishonesty includes: using AI on 🔴 AI-off work or beyond a 🟡 AI-limited label (the Code names "reliance on prohibited technological assistance/artificial intelligence tools"); fabricating evidence such as test results, security evidence or `PROMPTS.md` entries; submitting someone else's code, prompts or writing as your own; reusing work from another course without both instructors' approval; and having someone else take your walkthrough or exit ticket.

There are two separate processes, and they never mix:

1. **"Explain it or redo it" is a learning conversation, not a sanction.** If you can't yet explain part of your own work, we talk for about 10 minutes. If you still can't, you redo that part within 7 days and it is graded on the normal rubric, with no penalty.
2. **Suspected academic dishonesty goes through the University's process.** If I suspect it, I will tell you and report it to the Dean of Students, as FSH 2300 requires. **No grade consequence is applied until that process has concluded** and its decision has been communicated to you; if grades are due before then, an Incomplete is entered until it is resolved (FSH 2300 F-9). The Dean of Students explains your options and rights.

The course doesn't use AI detectors. Full details: [Academic integrity](assessment/README.md#academic-integrity).

### Learning civility

In any environment in which people gather to learn, it is essential that all members feel as free and safe as possible in their participation. Everyone in this course is expected to be respectful and civil to one another in discussion, in action, in teaching and in learning. If our class interactions fall short of that, please talk with me; you can also contact the [Dean of Students](https://www.uidaho.edu/student-affairs/dean-of-students) (208-885-6757) or the [Counseling & Testing Center](https://www.uidaho.edu/current-students/ctc)'s confidential services (208-885-6716). See also FSH 4170 (Maintaining Instructional Order).

### Firearms

The University of Idaho bans firearms from its property, with only limited exceptions ([University policy APM 95.12](https://www.uidaho.edu/policies/apm/95/12)). One exception lets holders of the licenses described in Idaho Code 18-3309(2), such as an Idaho enhanced concealed carry license, carry a firearm that stays concealed at all times; it doesn't apply in residence halls and some large venues. If you see a firearm on University property, or anyone who appears to be a danger, call 911.

## 12. Accessibility and support

### Accessibility and accommodations

If you believe you require disability-related academic adjustments for this class (including pregnancy-related disabilities), please contact the Center for Disability Access and Resources ([CDAR](https://www.uidaho.edu/current-students/cdar)) to discuss eligibility. A current accommodation letter from CDAR is required before any modifications, above and beyond what is otherwise available for all other students in this class, will be provided. Disability-related academic adjustments are not retroactive. CDAR: Bruce M. Pitman Center, Suite 127; 208-885-6307; cdar@uidaho.edu.

Many adjustments are open to **everyone**, with or without a letter: typed answers, extra time or a written-first version for walkthroughs; untimed timed builds (they're graded on effort, not speed); a written script with screenshots instead of a demo video; large-print or screen-reader-friendly exit tickets ([full list](assessment/README.md#accommodations)). The [accessibility guide](resources/accessibility.md) covers the course's tools with a screen reader or keyboard. Slides are plain text, every lab is written as step-by-step text, and Codespaces runs in a browser on modest laptops and Chromebooks. If a health condition, time zone, device or connectivity issue affects your work, tell me in week 1 so we can plan together.

### If you fall behind

Each week builds on the last, so act early:

- Do the **Minimum to keep up** box at the end of each week's homework first.
- If Project 1 isn't working by week 4, a **rescue starter** (a small working app built from the course's example spec) lets you keep going: [projects/rescue-starters/](projects/rescue-starters/).
- Use Studio B's project-work time and office hours. "I don't understand what the AI did" is exactly what office hours are for.

### Student resources

- **Technology help:** [ITS](https://www.uidaho.edu/infrastructure/its), 208-885-HELP (4357), [support.uidaho.edu](https://support.uidaho.edu/). For course tools, see [troubleshooting](resources/troubleshooting.md) first.
- **Library:** [lib.uidaho.edu](https://www.lib.uidaho.edu/)
- **Tutoring and study help:** SI-PASS (peer-led study sessions), Tutoring and the Writing Center (links on Canvas)
- **Dean of Students:** [support, advocacy and student conduct](https://www.uidaho.edu/student-affairs/dean-of-students), 208-885-6757
- **Counseling & Testing Center:** [confidential counseling](https://www.uidaho.edu/current-students/ctc), 208-885-6716
- **Vandal Food Pantry:** [free food for any student](https://www.uidaho.edu/current-students/student-involvement/food-pantry)
- **Green Dot:** the University's violence-prevention program (link on Canvas)

## 13. Why the course looks like this

The design is based on a review of 2025–26 university and industry courses, education research, security incidents, and the free-tool landscape, updated in October 2026. Short version: [research/design-rationale.md](research/design-rationale.md). Full reports: [research/landscape-report-2026-09.md](research/landscape-report-2026-09.md) and the [October 2026 update](research/landscape-update-2026-10.md).
