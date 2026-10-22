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
20 minutes maximum (about 16 slides, roughly a minute each), then the live attack demo.
The whole talk builds to one sentence they must leave with: a public key with no row-level
security is a public database. Second sentence: grant and RLS go together, always.
No model versions or prices here; those live in TOOLS.md.
-->

---

## Two questions every app must answer

**Authentication:** who are you?

**Authorization:** what are you allowed to do?

Signing in does not mean you may read *everyone's* data.

<!--
Analogy: authentication is showing ID at the door. Authorization is which rooms your keycard opens.
Karpathy's MenuGen bug: an agent matched two accounts by email instead of a stable user ID.
Sign-in was fine; authorization was wrong, and only a human who understood the app caught it.
-->

---

## Where must the check happen?

Anything in the browser is **public**.

Anyone can open DevTools, read your JavaScript and call your database directly.

> The check must run where the user can't edit it: the **server** or the **database**.

<!--
Front-end code is a suggestion, not a lock. If the only thing stopping a user is that you
didn't draw the button, you have no security. This is the whole week in one idea.
-->

---

## Not every key is a secret

| Publishable key | Secret key |
|---|---|
| Starts `sb_publishable_` | Starts `sb_secret_` |
| **Public by design** | **Never leaves the server** |
| Goes in `public/config.js` | Server environment variables only |
| Safe **only** with RLS on | Skips every access rule |

<!--
This resolves the week 5 puzzle ("keys live in .env and nowhere else"). That rule was about
SECRET keys. The Supabase publishable key and project URL are meant to be seen; the database's
rules protect the data, not the key's secrecy.
Legacy names: anon = publishable, service_role = secret. The legacy JWT keys (eyJ...) are
deprecated by the end of 2026, so we teach only the new ones.
A sb_secret_ key in front-end code is a five-alarm fire. Supabase rejects a secret key used from
a browser, but don't rely on that.
-->

---

## Row-level security (RLS), in plain words

A switch on each table.

- **Off:** anyone who can reach the table reads and writes **every** row.
- **On, no policies:** the public key gets **nothing**.
- **On, with policies:** a request works only if a rule says so.

A **policy** is one rule: *"anyone may read rows where `is_public` is true."*

<!--
Draw the three states on the board. The middle one surprises people: RLS on with no policies
locks everyone out, which is safe but useless. "RLS on, no policies" is the most common stall
in the lab and in capstones.
-->

---

## Two locks: grant, then policy

1. **Grant:** may this role use the table at all?
2. **RLS policy:** which rows may it read or change?

From **30 Oct 2026**, new Supabase tables get **no grants** automatically.
The API says *permission denied* until you add them.

<!--
Source: Supabase changelog
(https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically).
This applies to every project, for any table created after 30 October 2026; existing tables keep
their grants. The new default is safer. But it sets a trap: see the next slide.
-->

---

## The trap: "permission denied"

The quickest "fix" an agent will suggest:

`grant all on my_table to anon;`

Without RLS, that **is** the leak.

> Always: grant **and** RLS **and** policies, together, in `supabase/policies.sql`.

<!--
This is an inference from two sources in the October research report (the grants change plus
UpGuard), but it's exactly the failure to rehearse. If an agent proposes a bare grant, stop it.
In Studio A's worked example everyone writes the three together in one file.
-->

---

## 16,326 databases anyone could read

**UpGuard, Sep 2026:** Supabase apps with publicly readable tables, more than half with personal data.

The cause: grants given out, RLS missing.

Tables an agent creates through the API **start without RLS**.

<!--
Source: UpGuard (https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps).
Examples: an immigration service with 884 plaintext passwords; a consulate's records on 25,000
people. Not a Supabase breach: configuration. BleepingComputer reports AI-assisted development
accounts for more than 60% of new Supabase databases; UpGuard can't prove every exposed site was
built with AI. This extends cases 1-2 (Lovable 2025, Moltbook) in resources/case-studies.md.
-->

---

## Platforms make the same mistake

**Lovable (2026):** a missing **ownership check** let any free account read other users' code, database credentials and AI chats.

**An audit of 200 AI-built apps:** 91% had at least one vulnerability, mostly broken access control.

<!--
Sources: Sable Offensive Research
(https://dev.to/alejandxr/lovable-bola-48-days-five-api-calls-source-code-database-credentials-of-other-peoples-projects-4ai0);
Deng et al., arXiv 2606.23130 (https://arxiv.org/abs/2606.23130).
Lovable first called this intended behavior for "public" projects. Discussion hook:
"Your project was 'public'. What did that mean?" Ownership check = "is this row yours?",
which is exactly what an RLS policy with auth.uid() answers.
-->

---

## No attacker needed

**PixelLeak (Sep 2026):** agents asked to attach screenshots **created public repos** for them. 13,000+ internal screenshots exposed.

**PocketOS (Apr 2026):** an agent used a token from an unrelated file to delete a production database **and its backups** in ~9 seconds.

<!--
Sources: The Hacker News (https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html);
Information Age (https://ia.acs.org.au/article/2026/gone-in-9-seconds--ai-agent-deletes-company-database.html).
PocketOS is from the week 6 set; here the point is where keys sit. Safety contract rule 9:
agents don't publish without your approval. Rule 4: scoped tokens outside the project folder,
backups out of the agent's reach. Secret scanners read text; they can't see what's in an image.
-->

---

## Malware wants your AI keys

- A hijacked npm package stole `.env`, `.claude` and MCP settings **on install**.
- A poisoned Python release stole AI provider keys.
- Fake "free AI credits" packages.
- A hosted console's breach led to $1,000+ of charges on users' keys.

<!--
Sources: Socket (https://socket.dev/blog/tensorlake-compromise); Wiz
(https://www.wiz.io/blog/litellm-compromised-steals-credentials); The Hacker News
(https://thehackernews.com/2026/10/fake-web3-accelerator-uses-npm-packages.html); TechCrunch
(https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/).
Hook: "Why would malware want your .claude folder?" Extends case 7 (Nx s1ngularity).
Rule 6: install only what the plan named, pin the version. Rule 4: hard spending caps.
-->

---

## It's not just databases

- **XSS:** user text put on the page with `innerHTML` can run as code. Use `textContent`.
- **Secrets in old commits:** deleting a key from today's file doesn't remove it from history.
- **Packages:** check every one exists and is the one you meant.

<!--
Veracode's 2026 tests: only 15% of AI code samples defended against XSS
(https://www.veracode.com/blog/spring-2026-genai-code-security/).
The course's secret scan (npm run check:secrets) now reads the whole git history, not just
today's files. A key found in history must be revoked and replaced; rewriting history isn't enough.
-->

---

## Passing tests ≠ secure

Given 186 real vulnerabilities rewritten as feature requests, a frontier model wrote:

- working code: **93.5%**
- working **and secure** code: **54.8%**

You test who can read and change your data. **Yourself.**

<!--
Source: Semgrep (https://semgrep.dev/blog/2026/claude-opus-5-5-susvibes-benchmark). Access control
was among its weakest areas; 41% of working solutions reintroduced the original vulnerability.
Safety contract rule 5 now says it in words: passing tests is not a security check.
-->

---

## Prompt injection

An agent reads a file, page or issue. Hidden inside is a message **to the agent**. It follows it.

**Lethal trifecta:** private data + untrusted content + a way out.

**Rule of Two:** at most two without a human approving.

<!--
Sources: Willison (https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/); Meta
(https://ai.meta.com/blog/practical-ai-agent-security/).
I'll demo a harmless version at the end of Studio B (7 minutes). The kit is there if you want to
try it yourself. Rule 9: when an agent reads untrusted content, approvals stay on and no secrets
are within reach; never autopilot.
-->

---

## Two reviewers, both needed

**AI review:** fast, tireless, catches patterns. Misses the goal, raises false alarms.

**Human review:** knows what the app is *for*. Slower.

Studio B: you review a classmate's **pull request** yourself, then compare with an AI.

<!--
The compare step is the learning: what did the AI catch that you didn't, and the reverse?
The graded written review goes on Canvas; comments on the PR are ordinary code review.
-->

---

## Today's lab

1. **RLS Attack Lab:** attack a practice table on the hosted page, then fix it with RLS.
2. **Connect your capstone:** grants + RLS + policies in one file; URL and publishable key in `public/config.js`.

**Studio B:** maintenance task (🔴 AI off) · security sweep · PR review · injection demo.

<!--
Move fast to the lab. The attack page is hosted: no repo and no Codespace needed for Part 1.
Everyone can do both parts even if their capstone is behind: the worked example runs on a
practice branch.
-->

---

## Homework: Milestone 2

- Finish your data feature (Supabase + RLS, or another feature type).
- `SECURITY_CHECKLIST.md` with evidence.
- Written review on Canvas; fix the top issue from yours.
- The handoff test. Reflection on Canvas.

<!--
Remind them: Supabase free projects pause after about a week idle; restore from the dashboard.
Exit ticket at the end of Studio B: one vulnerability you fixed, and where authorization is enforced.
-->

