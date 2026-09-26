---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 7"
footer: "CC BY 4.0"
---

# Security, Data & Review

### Public key + missing access rules = public database

<!--
20 minutes, then a live demo. The whole talk builds to one sentence they must leave with:
a public key with no row-level security is a public database. Everything else supports it.
Keep energy high; the lab is where it lands. No model versions or prices here — those live in TOOLS.md.
-->

---

## Two questions every app must answer

**Authentication:** who are you?

**Authorization:** what are you allowed to do?

They are different. Logging in does not mean you may read *everyone's* data.

<!--
Analogy: authentication is showing ID at the door. Authorization is which rooms your keycard opens.
Karpathy's MenuGen bug: an agent matched two accounts by email instead of a stable user ID —
a design error only an understanding human caught. Auth was fine; authorization was wrong.
-->

---

## Where must the check happen?

Anything in the browser is **public**.

Anyone can open DevTools, read your JavaScript, and call your database directly.

Hiding a button changes **nothing**.

> The check must run where the user can't edit it: the **server** or the **database**.

<!--
Say it plainly: front-end code is a suggestion, not a lock. If the only thing stopping a user is
that you didn't draw the button, you have no security. This is the whole week in one idea.
-->

---

## Supabase in one line

A **Postgres database** + an **automatic web API**.

Your page can talk to the database directly, using a key.

That convenience is also the danger: the browser holds a key that reaches your data.

<!--
Most students will use Supabase for the capstone database. They don't need to be Postgres experts.
The one thing that matters: the browser talks straight to the database, so the database itself has
to enforce the rules.
-->

---

## Two keys, two very different jobs

| Publishable key | Secret key |
|---|---|
| Older name: **anon key** | Older name: **service_role key** |
| **Public by design** | **Never leaves the server** |
| Ships in the browser | Skips every access rule |
| Safe **only** if RLS is on | Never in `public/`, a repo, or a chat |

<!--
Supabase renamed these. Publishable = the one that goes in the browser. Secret = the one that
bypasses everything. If a student ever sees a "service_role" or "sb_secret_" key in front-end code,
that is a five-alarm fire. A secret key in a browser even gets a 401 from Supabase now — but don't
rely on that; keep it on the server.
-->

---

## Row-level security (RLS), in plain words

A switch on each table.

- **Off:** anyone with the public key reads and writes **every** row.
- **On, no policies:** nobody with the public key can read **anything**.
- **On, with policies:** each request is allowed only if a rule says so.

A **policy** is one rule: *"anyone may read rows where `is_public` is true."*

<!--
Draw the three states on the board. The middle one surprises people: turning RLS on with no
policies locks everyone out, which is safe but useless. You need on + the right policies.
"Enable RLS with no policies" is the most common student mistake in the lab.
-->

---

## The bug that keeps happening

**Public key in the browser + RLS off = your database is public.**

Anyone who views your site can read, edit and delete every row.

<!--
This is the payload of the whole talk. Pause here. Then the next slides are the receipts:
three real apps that made exactly this mistake.
-->

---

## Lovable — CVE-2025-48757 (May 2025)

A scan of **1,645** apps found **170** with exposed databases.

The browser called Supabase with the public key. The RLS policies were **missing**.

<!--
Source: Superblocks, https://www.superblocks.com/blog/lovable-vulnerabilities
10.3% of scanned apps. Not exotic attacks — just missing the switch we're about to teach.
-->

---

## Moltbook (January 2026)

A vibe-coded social network. Supabase key hard-coded in the page. No RLS.

Exposed **~1.5 million** agent API tokens and **~35,000** emails.

The founder reportedly wrote no code.

<!--
Source: Wiz, https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys
"Wrote no code" is the hook. You can ship an app without understanding it — and ship the leak too.
Base44 (July 2025) is a third example: an auth bypass let attackers into private apps
(https://www.wiz.io/blog/critical-vulnerability-base44).
-->

---

## It's not just databases

- **XSS:** user text put into the page with `innerHTML` can run as code. Only **15%** of AI code samples defended against it (Veracode 2026).
- **Secrets:** AI-assisted commits leak secrets about **twice** as often (GitGuardian).
- **Slopsquatting:** models invent package names; attackers register them with malware (USENIX 2025; still 4.6-6.1% in a 2026 re-test).

<!--
Sources: Veracode Spring 2026 (https://www.veracode.com/blog/spring-2026-genai-code-security/);
GitGuardian 2026 (https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/);
CSA/USENIX slopsquatting (https://labs.cloudsecurityalliance.org/research/csa-research-note-slopsquatting-ai-supply-chain-20260419-csa/).
Fix for XSS: use textContent, not innerHTML. Fix for packages: check every one on npmjs.com.
-->

---

## When your own AI turns on you

**Nx "s1ngularity" (Aug 2025):** a poisoned npm package used the **AI CLIs already installed** on developers' machines to hunt for secrets. 2,349 credentials leaked from 1,079 systems.

<!--
Source: GitGuardian, https://blog.gitguardian.com/the-nx-s1ngularity-attack-inside-the-credential-leak/
The first known case of malware weaponizing developers' own AI assistants. This is why we check
packages before installing and run agents in a sandbox, not on our main machine.
-->

---

## Prompt injection

An agent reads a file, web page or issue. Hidden inside is a message **to the agent**.
The agent follows it.

- **Lethal trifecta** (Willison): private data + untrusted content + a way out = data theft.
- **Meta's Rule of Two:** an agent should hold at most **two** of those without human approval.

<!--
Sources: Willison https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/ ;
Meta https://ai.meta.com/blog/practical-ai-agent-security/
Real cases: invisible-Unicode backdoors in shared rules files (Pillar Security), and the July 2025
Amazon Q wipe prompt that shipped to ~964k installs. We'll do a harmless version in the lab.
-->

---

## Two reviewers, both needed

**AI review:** fast, tireless, catches patterns. Misses the goal, cries wolf.

**Human review:** understands what the app is *for*. Slower, tires.

You'll do both on a classmate's repo and compare what each caught.

<!--
CodeRabbit found ~1.7x as many issues in AI-generated PRs — so the review matters. But an AI
reviewer alone raises false alarms and misses intent. The compare step is the learning:
what did the AI catch that you didn't, and what did you catch that it didn't?
-->

---

## Today's lab (100 min)

1. **RLS Attack Lab:** break your own table, then fix it with policies.
2. **Security sweep:** scan your capstone for secrets, packages, XSS.
3. **Prompt-injection demo:** watch your agent meet a planted instruction.
4. **Review & handoff:** human review, AI review, compare, then hand off.

<!--
Move fast to the lab; that's where it sticks. Kits: rls-lab/ and injection-demo/. Everyone can do
parts 1 and 3 even if their capstone is behind.
-->

---

## Homework

- Add **persistence with RLS** to your capstone (policies committed in `supabase/policies.sql`).
- Complete **SECURITY_CHECKLIST.md** with evidence.
- Write your **peer review** (AI-free); fix the top issue in the review you received.
- **Reflection** (AI-free).

Exit ticket now: explain one vulnerability you fixed, and where authorization is enforced.

<!--
Remind them: Supabase free projects pause after ~1 week idle — restore from the dashboard.
Stretch: Supabase Auth with per-user rows; tests on every push with GitHub Actions.
-->
