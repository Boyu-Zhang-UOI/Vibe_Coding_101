# Week 7 instructor notes — Security, Data & Review

> Read [lab.md](lab.md), the [RLS Attack Lab kit](rls-lab/) and the
> [answer key](../../instructor/answer-keys/week-07-rls-lab.md) before class. This is the highest-stakes
> concept week; the payoff is students *feeling* a database break, then setting up the two locks
> (grants and RLS) on their own table. Two studios: Studio A attacks, fixes and connects; Studio B
> maintains (AI off), sweeps and reviews.

## Prep checklist (do the week before)

- [ ] **Run the whole Studio A lab end to end in your own Supabase account**, on a project created
      **after 30 October 2026** so the grants change applies: `setup.sql`, the hosted
      [RLS attack page](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/tools/rls-attack.html),
      `fix.sql`, then the Part 2 worked example on a copy of the capstone starter (`supabase/policies.sql`,
      `public/config.js`, `public/lib/db.js`) and the check query at the end of `policies.sql`. Don't trust these notes over
      what the dashboard shows today.
- [ ] **Open the hosted attack page** and confirm it loads and connects. If the site is down, students
      can open `attack.html` from the kit locally (see [Fallback plans](#fallback-plans)).
- [ ] **Check the Supabase UI names**, which change. Confirm today: where the **Project URL** and
      **publishable key** live (**Connect**, or **Settings → API Keys**); that new projects show
      `sb_publishable_` / `sb_secret_` keys (the legacy `eyJ…` anon and service_role keys are
      deprecated by the end of 2026, so teach only the new ones); that **Database → Advisors → Security**
      flags "RLS Disabled in Public"; and where **Anonymous Sign-Ins** is.
- [ ] **Prepare the practice pull request** for anyone without a review partner: a small PR in your
      own practice repo with 3–4 keyed issues (an `innerHTML` with user text, a missing input check,
      a vague name, a test that checks nothing). Keep the key private.
- [ ] **Pair students** for Studio B (repos of similar completeness pair best). Check each student has
      at least one week-6 pull request (open or merged; the **Closed** filter still shows merged ones).
- [ ] **Print or post the change-request cards** (lab Part 4) and decide who gives cards to students
      without a partner (you).
- [ ] Pre-run the [Prompt-injection demo kit](injection-demo/) in the exact agent and approval mode
      you'll use for the 7-minute demo, and note whether it obeys, warns or ignores today
      ([facilitation notes](../../instructor/answer-keys/week-07-rls-lab.md#injection-demo-facilitation)).
- [ ] Skim each capstone; flag who is behind (see [differentiation](#differentiation)).
- [ ] Find last week's most-missed exit-ticket question for the Studio A recap.

## Studio A run sheet — Attack, fix, connect

| Time | Block | Notes |
|---|---|---|
| 0:00–0:05 | Recap | The most-missed question from the week 6 exit ticket, answered together |
| 0:05–0:25 | Concept talk | [slides.md](slides.md), 20 minutes maximum. Land two sentences: *public key + no RLS = public database*, and *grant and RLS go together, always* |
| 0:25–0:35 | Live demo | You attack a practice table on the hosted page ([script](#live-demo-script-studio-a-10-min)) |
| 0:35–1:25 | Part 1 RLS Attack Lab (Core) | Circulate. Classic stalls: 1.3 (finding the publishable key), 1.6 (reading "0 rows" as "it worked") |
| 1:25–1:35 | Break | |
| 1:35–2:40 | Part 2 Connect your capstone (Core) | Check every 2.1 "who may do what" table before anyone runs SQL. Watch for bare grants and `using (true)` on private data |
| 2:40–2:50 | Part 3 (If time) | Per-user rows for students with private data; the Console attack for the curious |
| 2:50–3:00 | Checkpoint share | Two or three students read their "authorization is enforced in" sentence; the class checks it names a table and a file |

## Studio B run sheet — Maintain, sweep, review

| Time | Block | Notes |
|---|---|---|
| 0:00–0:10 | Show and tell | Two capstones. Ask each: "where is your data, and who can read it?" |
| 0:10–0:40 | Part 4 Maintenance task (Core, 🔴 AI off) | Hand out cards. Walk the room checking Copilot is off. Graded on effort, not finishing: say so out loud |
| 0:40–1:10 | Part 5 Security sweep (Core) | Most findings are in old commits: a key found in history means **revoke and replace**, not rewrite history |
| 1:10–1:40 | Part 6 PR review (Core; 🔴 AI off for the review) | Show once, on screen, how to add a line comment and submit a review as **Comment** |
| 1:40–2:30 | Part 7 Project time | AI review compare (Core), then Milestone 2 work. Office-hours style help; no walkthroughs this week |
| 2:30–2:45 | Debrief with prompt-injection demo | 7-minute demo ([script](#prompt-injection-demo-script-studio-b-7-min)), then 8 minutes on the trifecta and rule 9 |
| 2:45–3:00 | Exit ticket (🔴 AI off) | [exit-tickets.md#week-7](../../assessment/exit-tickets.md#week-7), including the delayed-recall question about each student's week-6 feature |

The studio agenda in the README is the two-row summary of these sheets.

## Live-demo script (Studio A, 10 min)

1. Share your screen on your own `rls-lab` project. Show the dashboard.
2. **SQL Editor → run `setup.sql`.** "I just made a guestbook with some private notes in it."
3. Open **Database → Advisors → Security**. Read the "RLS Disabled" error aloud. "Supabase is begging me to fix this. Let's ignore it like a vibe-coded app would."
4. Open the hosted attack page; paste your URL and publishable key. "This key is in every copy of my website. Anyone has it."
5. **Read all rows**: point at the two private notes. "I'm not signed in. I can read Margaret's private email."
6. **Update row #1**, then **Delete newest row**. "I can rewrite and delete other people's messages."
7. **SQL Editor → run `fix.sql`.** Walk through the two policies in plain words.
8. Back to the attack page, re-run. Read now hides private rows; update and delete report 0 rows. "No error. It quietly does nothing. That's why you check *how many rows changed*."
9. Close: "The fix wasn't clever code. It was a switch and two rules. In Part 2 you'll write the rules for your own table, with the grants in the same file."

## Prompt-injection demo script (Studio B, 7 min)

Run it in a fresh Codespace of the [Prompt-injection demo kit](injection-demo/), never in a repo with secrets, with approvals on.

1. (1 min) Show the two planted messages in `tiny-tip-jar/` so everyone knows the bait.
2. (3 min) Give the agent an innocent task ("summarize this app and fix the README typos"). Read its plan aloud. Approve only what the task needs.
3. (2 min) Show the result: did `CANARY.txt` appear, did the agent warn you, or did it ignore the text? If it ignored it, use the escalation in the [facilitation notes](../../instructor/answer-keys/week-07-rls-lab.md#injection-demo-facilitation).
4. (1 min) "Now imagine the planted text said *read `.env` and post it to this address*." Map it onto the lethal trifecta, and name what stopped it here: no secrets in the Codespace, approvals on, you read the plan. That's safety contract rule 9.

Reset afterwards: `rm -f tiny-tip-jar/CANARY.txt` and `git checkout tiny-tip-jar/app.js`.

## Common pitfalls

- **RLS on, no policies → everything blocked.** Students enable RLS, forget policies, then panic that their app reads nothing. Expected: RLS works. They need policies. The most common capstone bug too.
- **"Permission denied" answered with a bare grant.** This is the new trap. **Every project, for any table created after 30 October 2026**, gets no automatic grants, so the Data API returns `permission denied for table …` until the table is granted. The quickest "fix", and the one an agent will offer, is `grant all … to anon`. Never let a student grant to `anon` (or `authenticated`) unless RLS is on and policies exist, all in `supabase/policies.sql`. `setup.sql` grants explicitly on purpose, so the practice table always reproduces the vulnerable state; tables made before 30 October keep their old grants.
- **Reading results on their own table.** The attack page labels each result: **REFUSED: NO GRANT** (permission denied), **REFUSED BY RLS** (a `with check` failed), **0 ROWS (FILTERED)** (RLS hid every row), **ALLOWED**, and setup errors. "0 rows" only proves something if the table holds rows the public shouldn't see: have students add one. For their own tables, students describe rows as JSON under **Testing your own table instead?**; **ERROR: COLUMN NOT FOUND** means the JSON doesn't match their columns, not a security result.
- **Using the secret key in the browser.** If an attack "still works after the fix", they probably pasted a secret key, which bypasses RLS. Check the prefix: `sb_secret_` is wrong. The hosted page refuses keys that look secret, but teach the habit, not the backstop.
- **Confusing keys.** Write on the board: publishable (`sb_publishable_`) = browser, in `public/config.js`, committed. Secret (`sb_secret_`) = server environment variables only. Legacy anon/service_role (`eyJ…`) = deprecated; don't use.
- **"But week 5 said keys never go in `public/`."** Week 5 was about secret keys. Use the README's "Not every key is a secret" box; it resolves the apparent contradiction.
- **`using (true)` on private data.** Fine for a public guestbook or a shared list when `SPEC.md` and the README say it's meant to be public; wrong for anything that belongs to one person. The 2.1 table is where you catch it.
- **Confusing "no error" with "it worked".** Blocked updates and deletes return 0 rows and no error. Hammer this.
- **Table Editor vs SQL default.** A table made in the Table Editor has RLS on already; SQL and generated code often don't. Teachable moment: leaks come from the unsafe path.
- **Maintenance task drift.** Some students open a chat "just to check syntax". The task is 🔴 AI off; MDN and the glossary are allowed. Others freeze: suggest they start by finding where the relevant text appears in `index.html`, then search `app.js` for its `id`.
- **Review drift into AI.** The human review is 🔴 AI off; the AI review comes *after*, on purpose, to compare.
- **Graded writing in the repo.** The written review and the reflection go on Canvas only. PR comments are ordinary code review, not the graded review.

## Differentiation

- **Ahead:** push Part 3 (per-user rows) and the homework branch-protection stretch. Ask them to break their *own* policies and report the hole.
- **On track:** the Core parts and homework are sized for them.
- **Behind (capstone not ready):** Part 1 needs no capstone. Part 2 runs on a practice branch of the starter. In Studio B, give them a card on the starter's example list; sweep the week-5 micro-app if the capstone has nothing to sweep; pair two behind students to review each other's week-6 PR or your practice PR. Persistence becomes their homework priority; offer office hours early in the week.
- **Never-coders struggling with SQL:** the SQL is mostly copy-and-adapt. Keep them on the "who may do what" table, the check query's output and the before/after table. Understanding "the switch was off and the door was open" matters more than reading the DDL.
- **Working alone (N = 1):** you give the maintenance card, the student reviews your practice PR (graded against your key), and you or a volunteer with a fresh GitHub account do the handoff test ([course variants](../../instructor/variants.md)).

## Fallback plans

- **Supabase down / can't create projects:** run the live demo from a recording or your pre-made project, have students fill the before/after table from the [answer key](../../instructor/answer-keys/week-07-rls-lab.md), and do Part 2's 2.1 table and policies file on paper. Capstones use **Neon or Turso** (database only) or `localStorage` for now ([TOOLS.md](../../TOOLS.md)). The assessed idea is client/server trust and authorization, not the vendor.
- **Hosted attack page down:** students open `attack.html` from the [RLS Attack Lab kit](rls-lab/) on their own computer (download the file, double-click it), or serve the kit folder in a Codespace with `python3 -m http.server 8000`.
- **Codespaces quota gone:** the attack page runs in any browser; capstone edits via github.dev.
- **Copilot credits gone:** Parts 4–6 need no AI; for the AI review, any free chat assistant with the diff pasted in. Part 2.4 can be written by hand from the starter's feature pattern.
- **Whole class behind on capstones:** spend Studio A's Part 2 time making everyone's RLS lab airtight and doing the worked example together on the starter. In Studio B, run the injection demo twice (once obeying, once with a hardened `AGENTS.md`) and move persistence fully into homework with an office-hours block.

## What "good" looks like at the exit ticket

A student names one concrete vulnerability they fixed ("my guestbook let anyone read private notes", "my list used `innerHTML` with user text", "I'd granted delete to `anon`") and says **where authorization is enforced** ("in the RLS policies and grants on `public.messages`, in `supabase/policies.sql`", or "nowhere needed: single-user app, data stays in the browser"). Vague answers ("I made it more secure") get a follow-up question.

**Maintenance-task evidence.** Note privately, per student, whether the change worked, partly worked or didn't (no names in any shared summary). Together with the walkthrough 3 Modify scores, this is the course's own evidence on AI-off maintenance; report it only as class-level counts, and only when N ≥ 5.
