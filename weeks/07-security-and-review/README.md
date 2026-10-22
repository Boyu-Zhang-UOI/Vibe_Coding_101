# Week 7 — Security, Data & Review
> A public key plus missing access rules equals a public database. This week you make that mistake on purpose, fix it, then connect your capstone to a database the safe way.

## This week at a glance

| Item | Details |
|---|---|
| **Before Studio A** (≤1 h) | Read this page. Create a free Supabase account and open an empty project dashboard. Read [case 12 (UpGuard)](../../resources/case-studies.md#12-upguard-16326-exposed-supabase-databases) in Case Studies. Check that Milestone 1 is in place: your capstone is deployed and your week-6 features went through pull requests |
| **Studio A** | Talk: keys, grants, row-level security and this year's leaks · RLS Attack Lab on the hosted attack page · connect your capstone to Supabase (worked example) |
| **Studio B** | Maintenance task on your own capstone (🔴 AI off) · security sweep · peer review as a pull-request review · a 7-minute prompt-injection demo · exit ticket |
| **Due before next week's Studio A** | **Milestone 2** (see [Homework](#homework)): your second feature type working (for example Supabase with RLS, its grants and policies in `supabase/policies.sql`); `SECURITY_CHECKLIST.md` with evidence; your written peer review and your response to the review you received, both on Canvas; the handoff test, noted in `PROMPTS.md`; your reflection on Canvas; your production URL plus a screenshot |
| **AI use this week** | 🟢 AI on: building features with the agent (approvals on), explaining errors and SQL, the AI review you compare with your own · 🟡 AI limited: `supabase/policies.sql`, where you decide who may do what and can explain every line; the AI may explain and critique · 🔴 AI off: the maintenance task, your written peer review, the reflection, the exit ticket |
| **Must read** | README (this page), [lab.md](lab.md), [homework.md](homework.md) |
| **Look up when needed** | [Troubleshooting: Supabase](../../resources/troubleshooting.md#supabase) · the capstone starter's [feature patterns](../../projects/capstone-starter/README.md#feature-patterns) · [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) · [CODE_REVIEW.md](../../templates/CODE_REVIEW.md) · [RLS Attack Lab kit](rls-lab/) · [Prompt-injection demo kit](injection-demo/) · [Glossary](../../resources/glossary.md) |
| **Minimum to keep up** | Your capstone is deployed at its production URL with every chosen feature type at least roughly working, and any table it uses has RLS on, explicit grants and policies in `supabase/policies.sql` |
| **Time** | Studios 6 h · outside about 11 h |

Canvas is the course's learning management system. Graded personal writing (the written review, your reflection) goes there, never in a repo.

## Learning objectives

By the end of this week you can:

1. Explain the difference between **authentication** (who you are) and **authorization** (what you are allowed to do), and say why authorization must be enforced on the server or in the database, never only in the page.
2. Explain why a Supabase **publishable key** is safe in the browser **only** when **row-level security (RLS)** is on, and why a **secret key** never goes in the browser.
3. Put a practice table in a vulnerable state, attack it with only its public key, then write RLS policies until your own attack fails.
4. Connect your capstone to Supabase with explicit **grants** and RLS policies kept in `supabase/policies.sql`.
5. Change your own code with the AI switched off, and run a security sweep: secrets (including old commits), packages, and cross-site scripting (XSS).
6. Review a classmate's pull request as a human, compare it with an AI review, and hand a project off so someone else can change it.

## Before class

Before Studio A (about 1 hour):

- [ ] Read this page.
- [ ] Create a free Supabase account and confirm you can open a project dashboard ([TOOLS.md](../../TOOLS.md)). You don't need a database yet.
- [ ] Read [case 12: UpGuard's 16,326 exposed Supabase databases](../../resources/case-studies.md#12-upguard-16326-exposed-supabase-databases) in Case Studies.
- [ ] Check Milestone 1: your capstone runs, it's deployed, and your week-6 features went through **pull requests** (your partner reviews one of them in Studio B; merged ones work too). If you're behind, tell your instructor and read [If a tool is down](#if-a-tool-is-down): every Studio A activity works without a finished capstone.

## Studio agenda

| Studio | What happens |
|---|---|
| **Studio A — Learn & build** | Recap · talk ([slides](slides.md)) · live attack demo · [RLS Attack Lab](lab.md#studio-a--attack-fix-connect) on the hosted attack page · connect your capstone to Supabase · checkpoint share |
| **Studio B — Workshop** | Show and tell · [maintenance task (🔴 AI off), security sweep, pull-request review](lab.md#studio-b--maintain-sweep-review) · project time · debrief with a prompt-injection demo · exit ticket |

## Materials

- [Slides](slides.md): the 20-minute concept talk
- [Lab](lab.md): Studio A and Studio B, with Core and If time parts
- [Homework](homework.md): Milestone 2, the security checklist, the review, the handoff test
- [RLS attack page](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/tools/rls-attack.html): the hosted tester you use in the lab (nothing to install)
- [RLS Attack Lab kit](rls-lab/): `setup.sql`, `fix.sql`, the tester page's source, and the per-user stretch
- [Prompt-injection demo kit](injection-demo/): optional, to try the instructor's demo yourself
- Templates: [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md), [CODE_REVIEW.md](../../templates/CODE_REVIEW.md)

## Key ideas

**Authentication vs authorization.** Authentication answers "who are you?" (signing in). Authorization answers "what are you allowed to see and do?" A signed-in user is still not allowed to read *everyone's* private notes. Karpathy's own example: an agent matched two accounts by email address instead of a stable user ID, a bug only an understanding human caught ([September report](../../research/landscape-report-2026-09.md)).

**Authorization must live on the server or in the database.** Anything in the browser is public: a user can open DevTools, read your JavaScript and call your database directly. Hiding a button stops no one. The check has to run where the user can't edit it: a server route, or a database rule.

**Supabase in one line.** A Postgres database plus an automatic web API (the **Data API**), so your page can talk to the database directly with a key.

> [!IMPORTANT]
> **Not every key is a secret.** The Supabase **publishable key** (starts `sb_publishable_`) and your project URL are public by design: they go in `public/config.js`, and anyone who loads your site can read them. That's safe **only** when RLS is on with the right policies. The **secret key** (starts `sb_secret_`) skips every access rule, so it lives only in server environment variables, never in `public/`, a repo or a chat. Your LLM key from week 5 is a secret too. Older projects also show legacy `anon` and `service_role` keys (long strings starting `eyJ`); they are deprecated, so use the new ones.

**Two locks on every table.** A **grant** decides whether a role, such as `anon` (anyone with the publishable key), may use a table at all. An RLS **policy** decides which rows that role may read or change. From 30 October 2026, new Supabase tables get no grants automatically, so the API answers "permission denied" until you add them ([Supabase changelog](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically)). Always add grants **and** turn on RLS with policies together, in one file. Never "fix" a permission-denied error with a bare grant to `anon`: that rebuilds exactly the leak below.

**RLS in plain words.** A switch on each table. **Off:** anyone with a grant can read and write every row. **On, with no policies:** nobody using the public key gets anything. **On, with policies:** each request is allowed only if a policy says so. A policy is one rule, such as "anyone may read rows where `is_public` is true".

**This year's leaks.** In September 2026 UpGuard found **16,326 Supabase databases with publicly readable tables**; tables that agents create through the API start with RLS off ([UpGuard](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps)). Platforms fail too: a missing ownership check in Lovable's project API let any free account read other users' code and database credentials ([Sable](https://dev.to/alejandxr/lovable-bola-48-days-five-api-calls-source-code-database-credentials-of-other-peoples-projects-4ai0)). And some leaks need no attacker: helpful agents created public repositories that exposed more than 13,000 internal screenshots (PixelLeak, [The Hacker News](https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html)), and an agent used a token it found in an unrelated file to delete a production database and its backups in about nine seconds (PocketOS, [Information Age](https://ia.acs.org.au/article/2026/gone-in-9-seconds--ai-agent-deletes-company-database.html)). Malware now hunts for AI keys and agent settings: a compromised npm package stole `.env` files and `.claude` and MCP settings the moment it installed ([Socket](https://socket.dev/blog/tensorlake-compromise)). Full write-ups, including the 2025 cases (Lovable's missing policies, Moltbook, Base44, Nx): [Case Studies](../../resources/case-studies.md).

**Passing tests is not a security check.** Given 186 real vulnerabilities rewritten as feature requests, a frontier model wrote working code 93.5% of the time but working **and secure** code only 54.8% of the time ([Semgrep](https://semgrep.dev/blog/2026/claude-opus-5-5-susvibes-benchmark)). You test who can read and change your data yourself.

**Other risks this week names:** XSS from `innerHTML` (user text that runs as code); secrets in old commits, which is why the secret scan now reads your whole git history; invented or hijacked packages (slopsquatting, poisoned releases); and **prompt injection**, where text an agent reads gives it orders. The **lethal trifecta** is private data + untrusted content + a way to send data out ([Willison](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)); Meta's **Rule of Two** says an agent should hold at most two of them without a human approving ([Meta](https://ai.meta.com/blog/practical-ai-agent-security/)).

**Humans and AI both review.** An AI reviewer is fast and tireless, but it misses the goal and raises false alarms. A human reviewer knows what the app is for. You review a classmate's pull request yourself, then compare with an AI review.

**Can you maintain it without the AI?** In one study, 77% of students who used AI without restrictions failed a 30-minute maintenance task with the AI switched off, against 39% of those who had to explain the code first ([Sankaranarayanan](https://arxiv.org/abs/2602.20206)). Studio B's maintenance task is your rehearsal, and it's graded on effort, not on finishing.

## Understanding check

Complete the [week 7 exit ticket](../../assessment/exit-tickets.md#week-7) at the end of Studio B, with AI off (🔴). You'll explain one vulnerability you fixed and say exactly where authorization is enforced in your app. Exit tickets are graded on completion, not correctness.

## Homework

[Homework](homework.md): reach **Milestone 2**. Finish your second feature type (Supabase + RLS with `supabase/policies.sql`, or another feature type); complete [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) with evidence; submit your written review on Canvas, fix the top issue from the review you received and write your response to it on Canvas; run the handoff test; write your reflection on Canvas. About 9.5 hours.

## If a tool is down

- **Supabase is down or won't create a project:** follow the instructor's live demo and fill in the before/after table from it, then use **Neon or Turso** (database only, no sign-in; see [TOOLS.md](../../TOOLS.md)), or keep data in the browser with `localStorage` for now. The *idea* (client vs server, authorization rules) is assessed, not the vendor. More: [Troubleshooting: Supabase](../../resources/troubleshooting.md#supabase).
- **"Permission denied for table …":** the table has no grant yet. Add the grant **and** RLS and policies together (lab Part 2), never a grant on its own.
- **Supabase project paused:** free projects pause after about a week without activity. Open the dashboard and restore it; your data comes back ([TOOLS.md](../../TOOLS.md)).
- **The hosted attack page won't load:** open `attack.html` from the [RLS Attack Lab kit](rls-lab/) on your own computer, or serve the kit folder in a Codespace with `python3 -m http.server 8000`.
- **Codespaces quota gone:** the attack page runs in any browser; edit your capstone in github.dev and deploy from there.
- **Copilot credits gone:** the review, the maintenance task and the sweep need no AI. For the AI half of the review, use any free chat assistant with the code pasted in. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits).
- **Your capstone is behind:** do the RLS lab and the worked example on the practice table; they need no capstone. Persistence becomes your homework priority; book office hours early in the week.

## Going further

- Add Supabase Auth so each user sees only their own rows (the lab's If time part).
- Turn on GitHub Actions to run your tests on every push, and protect your main branch (homework stretch).
- Read one 2026 incident in full from [Case Studies](../../resources/case-studies.md) and add a one-line lesson to your `SECURITY_CHECKLIST.md`.
- Try the [Prompt-injection demo kit](injection-demo/) yourself in a fresh Codespace.
