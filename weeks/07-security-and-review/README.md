# Week 7 — Security, Data & Review
> A public key plus missing access rules equals a public database. This week you make that mistake on purpose, then fix it.

| | |
|---|---|
| **Time** | 3-hour studio + about 3 hours homework |
| **Tools** | Supabase Free, GitHub Codespaces + Copilot, secret and dependency scanners ([TOOLS.md](../../TOOLS.md)) |
| **You'll build** | The RLS Attack Lab; a database with access rules for your capstone; a security review of a partner's repo |
| **Due** | Capstone persistence + `SECURITY_CHECKLIST.md` + a written peer review; [exit ticket](../../assessment/exit-tickets.md#week-7) |

## Learning objectives

By the end of this week you can:

1. Explain the difference between **authentication** (who you are) and **authorization** (what you are allowed to do), and say why authorization must be enforced on the server or database, never only in the page.
2. Explain why a Supabase **publishable key** is safe to ship in the browser **only** when **row-level security (RLS)** is on, and why the **secret key** never goes in the browser.
3. Put a table in a vulnerable state, attack it with only its public key, then write RLS policies until your own attack fails.
4. Run a security sweep on your capstone: scan for secrets, check dependencies, and test for cross-site scripting (XSS).
5. Recognize a **prompt-injection** attack and name the **lethal trifecta** that makes an agent dangerous.
6. Review a classmate's code as a human, compare it with an AI review, and hand a project off so someone else can run it.

## Before class

- [ ] Bring a capstone that runs and has at least one feature (from week 6). If yours is behind, read [If a tool is down](#if-a-tool-is-down) and tell your instructor; you will still do every lab on the practice table.
- [ ] Create a free Supabase account and confirm you can open a project dashboard ([TOOLS.md](../../TOOLS.md)). You do **not** need a database yet.
- [ ] Skim the safety contract's rules 4-7 ([setup/safety-contract.md](../../setup/safety-contract.md)) and the two-part case study "public key + no RLS = public database".
- [ ] Have the RLS lab kit ready to open: [rls-lab/](rls-lab/) and [injection-demo/](injection-demo/). Start them from a starter the usual way ([setup/codespaces.md](../../setup/codespaces.md#start-a-project-from-a-starter)).

## Studio agenda

| Time | Block |
|---|---|
| 0:00-0:10 | Show and tell: two capstones from last week |
| 0:10-0:30 | Concept talk: auth vs authorization, keys, RLS, and how vibe-coded apps leak ([slides.md](slides.md)) |
| 0:30-0:40 | Live demo: the instructor attacks a practice table with its public key |
| 0:40-1:25 | **Part 1 — RLS Attack Lab** ([lab.md](lab.md#part-1--rls-attack-lab-45-min)) |
| 1:25-1:35 | Break |
| 1:35-1:55 | **Part 2 — Security sweep on your capstone** ([lab.md](lab.md#part-2--security-sweep-on-your-capstone-20-min)) |
| 1:55-2:10 | **Part 3 — Prompt-injection demo** ([lab.md](lab.md#part-3--prompt-injection-demo-15-min)) |
| 2:10-2:40 | **Part 4 — Review and handoff** ([lab.md](lab.md#part-4--review-and-handoff-30-min)) |
| 2:40-2:55 | Debrief and share-out |
| 2:55-3:00 | Exit ticket (AI-free) and homework preview |

## Materials

- [slides.md](slides.md) — the 20-minute concept talk
- [lab.md](lab.md) — the four-part studio lab
- [homework.md](homework.md) — add persistence with RLS; finish the security checklist; peer review
- [rls-lab/](rls-lab/) — `setup.sql`, `fix.sql`, `attack.html` and a README
- [injection-demo/](injection-demo/) — the safe prompt-injection kit
- Templates you will use: [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md), [CODE_REVIEW.md](../../templates/CODE_REVIEW.md)

## Key ideas

**Authentication vs authorization.** Authentication answers "who are you?" (a login). Authorization answers "what are you allowed to see and do?" These are different. A logged-in user is still not allowed to read *everyone's* private notes. Karpathy's own example: an agent matched two accounts by email address instead of a stable user ID, a bug only an understanding human caught ([report](../../research/landscape-report-2026-09.md)).

**Authorization must live on the server or in the database.** Anything in the browser is public: a user can open DevTools, read your JavaScript, and call your database directly. Hiding a button does not stop anyone. The check has to run somewhere the user cannot edit: a server route, or a database rule.

**Supabase in one line.** Supabase is a Postgres database plus an automatic web API, so your page can talk to the database directly with a key.

**Two keys, two jobs.** The **publishable key** (older name: **anon key**) is public by design; anyone who loads your site can read it. It is safe **only** if RLS is on. The **secret key** (older name: **service_role key**) ignores all access rules and belongs only on a server. Never put it in `public/`, a repo, or a chat.

**RLS in plain words.** Row-level security is a switch on each table. Off: anyone with the public key can read and write every row (this is the Lovable and Moltbook bug). On, with no policies: nobody using the public key can read anything. On, with policies: each request is allowed only if a policy says so. A policy is one rule, like "anyone may read rows where `is_public` is true".

**How vibe-coded apps leak.** In the Lovable disclosure (CVE-2025-48757), a scan of 1,645 apps found 170 with exposed databases: the browser called Supabase with the public key and the RLS policies were missing ([Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities)). Moltbook (Jan 2026) hard-coded a Supabase key and had no RLS; about 1.5M agent API tokens and about 35,000 emails were exposed, and the founder reportedly wrote no code ([Wiz](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)). Base44 (July 2025) had an authentication bypass that let attackers into private apps ([Wiz](https://www.wiz.io/blog/critical-vulnerability-base44)).

**Other risks this week names:** cross-site scripting from `innerHTML` (only 15% of AI samples defended against XSS in [Veracode's 2026 tests](https://www.veracode.com/blog/spring-2026-genai-code-security/)); leaked secrets ([GitGuardian](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)); slopsquatting (invented package names, [USENIX 2025](https://labs.cloudsecurityalliance.org/research/csa-research-note-slopsquatting-ai-supply-chain-20260419-csa/)); the Nx s1ngularity attack that used installed AI CLIs to hunt secrets ([GitGuardian](https://blog.gitguardian.com/the-nx-s1ngularity-attack-inside-the-credential-leak/)); and prompt injection with the lethal trifecta and Meta's Rule of Two ([Willison](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/); [Meta](https://ai.meta.com/blog/practical-ai-agent-security/)).

**Humans and AI both review.** An AI reviewer is fast and tireless but misses context and raises false alarms. A human reviewer understands the goal. You will do both and compare.

## Understanding check

Complete the [week 7 exit ticket](../../assessment/exit-tickets.md#week-7), with AI off. You will explain one vulnerability you fixed and say exactly where authorization is enforced in your app.

## Homework

[homework.md](homework.md): add persistence to your capstone behind RLS (or another required capstone feature); complete [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) with evidence; write your peer review (AI-free) and act on the review you received; write the AI-free reflection ([REFLECTION.md](../../templates/REFLECTION.md)).

## If a tool is down

- **Supabase is down or won't create a project:** do the whole RLS lab reading the answer key and the instructor's live demo, then switch your capstone's database to **Neon or Turso** (Postgres/SQLite, database only, no auth; see [TOOLS.md](../../TOOLS.md)) or keep data in the browser with `localStorage` for now. The *idea* (client vs server, authorization rules) is what's assessed, not the vendor.
- **Supabase project paused:** free projects pause after about a week of no activity. Open the dashboard and click restore; it comes back with your data ([TOOLS.md](../../TOOLS.md)).
- **Codespaces quota gone:** run `attack.html` from your own laptop (open the file, or `python3 -m http.server 8000`) and edit your capstone in github.dev.
- **Copilot credits gone:** the review and handoff work with any agent, or with no agent for the human-review half. See [resources/troubleshooting.md](../../resources/troubleshooting.md#i-ran-out-of-free-credits).
- **Your capstone is behind:** do every lab on the practice table and the demo kit; they need no capstone. Catch persistence up in homework.

## Going further

- Add Supabase Auth so each user only sees their own rows (the lab Stretch).
- Turn on GitHub Actions to run your tests on every push, and protect your main branch (homework Stretch).
- Read one incident writeup in full from [resources/case-studies.md](../../resources/case-studies.md) and add a one-line lesson to your `SECURITY_CHECKLIST.md`.
