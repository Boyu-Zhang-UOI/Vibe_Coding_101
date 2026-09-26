# Week 7 instructor notes — Security, Data & Review

> Read [lab.md](lab.md), the [rls-lab/](rls-lab/) kit, and the
> [answer key](../../instructor/answer-keys/week-07-rls-lab.md) before class. This is the highest-stakes
> concept week; the payoff is students *feeling* a database break.

## Prep checklist (do the week before)

- [ ] **Create your own Supabase practice project and run the whole lab end to end**, including
      `attack.html` and the Stretch. Don't trust these notes over what the current dashboard shows.
- [ ] **Check the Supabase UI names**, which change. Confirm today: where the **Project URL** and
      **publishable key** live (**Connect** button, or **Settings → API Keys**); that the publishable
      key starts `sb_publishable_` (older projects show an **anon** JWT starting `eyJ`); that
      **Database → Advisors → Security** flags "RLS Disabled in Public"; and where **Anonymous
      Sign-Ins** is (**Authentication → Providers**).
- [ ] Confirm `setup.sql` produces the vulnerable state in *your* project (RLS off, anon can
      read/write). It disables RLS and grants explicitly, so it should, regardless of project age.
- [ ] Run `attack.html` from a Codespace (`python3 -m http.server 8000`) and from a local file, so
      you can help with both.
- [ ] Pre-run [injection-demo/](injection-demo/) in the exact agent your cohort uses, and note
      whether it obeys, warns, or ignores today. See the
      [facilitation notes](../../instructor/answer-keys/week-07-rls-lab.md#injection-demo-facilitation).
- [ ] Pair students for Part 4 in advance (repos of similar completeness pair best).
- [ ] Skim each student's capstone; flag who is behind (see [differentiation](#differentiation)).

## Minute-by-minute run sheet

| Time | Block | Notes |
|---|---|---|
| 0:00-0:10 | Show and tell | Two capstones. Ask each: "where is your data, and who can read it?" |
| 0:10-0:30 | Concept talk | [slides.md](slides.md). Land the one sentence: public key + no RLS = public database. |
| 0:30-0:40 | Live demo | You attack a practice table (script below). |
| 0:40-1:25 | Part 1 RLS lab | Circulate. The classic stall is 1.5/1.6 (RLS on, no policies). |
| 1:25-1:35 | Break | |
| 1:35-1:55 | Part 2 sweep | Some capstones have no DB yet — that's fine, they skip section 3. |
| 1:55-2:10 | Part 3 injection | Tally obeyed/warned/ignored on the board. |
| 2:10-2:40 | Part 4 review | Human review first, AI off. Keep them honest about the "AI off" half. |
| 2:40-2:55 | Debrief | Collect one surprise per table. |
| 2:55-3:00 | Exit ticket | AI off. [exit-tickets.md#week-7](../../assessment/exit-tickets.md#week-7). |

## Live-demo script (10 min)

1. Share your screen on your own `rls-lab` project. Show the dashboard.
2. **SQL Editor → run `setup.sql`.** "I just made a guestbook with some private notes in it."
3. Open **Database → Advisors → Security**. Read the "RLS Disabled" error aloud: *anyone with your
   project URL can read, edit and delete all data.* "Supabase is begging me to fix this. Let's
   ignore it like a vibe-coded app would."
4. Open `attack.html`, paste your URL + publishable key. "This is the public key. It's in every copy
   of my website. Anyone has it."
5. Click **Read all rows** — point at the two private notes. "I'm not logged in. I can read
   Margaret's private email."
6. Click **Update row #1**, then **Delete newest row**. "I can rewrite and delete other people's
   messages."
7. **SQL Editor → run `fix.sql`.** Walk through the two policies in plain words.
8. Back to `attack.html`, re-run. Read now hides private rows; update/delete report 0 rows. "No
   error — it just quietly does nothing. That's why you check *how many rows changed*."
9. One sentence to close: "The fix wasn't clever code. It was turning on the switch and writing two
   rules. That's the whole week."

## Common pitfalls

- **RLS on, no policies → everything blocked.** Students enable RLS but forget policies, then panic
  that their own app can't read anything. This is *expected*; it means RLS works. They need policies.
  The most common real bug in their capstones, too.
- **Using the secret key in the browser.** If a student's attack "still works after the fix", they
  probably pasted the **secret / service_role** key, which bypasses RLS. Check the key prefix
  (`sb_secret_` = wrong). Newer Supabase even 401s a secret key in a browser, but a legacy
  service_role JWT may not — so teach the habit, not the backstop.
- **Confusing "no error" with "it worked".** Blocked updates/deletes return 0 rows and no error.
  Hammer this.
- **`drop table` confirmation.** Supabase asks for confirmation on destructive SQL. Tell them to
  confirm; it's their practice project.
- **Table Editor vs SQL default.** A student who makes a table in the Table Editor finds RLS already
  on and is confused why it's "already safe". Good teachable moment: the dashboard defaults to safe;
  SQL and generated code often don't; leaks come from the unsafe path.
- **Data API not exposing new tables.** On very new projects, a table made with plain `create table`
  may not be reachable through the API until granted. `setup.sql` includes explicit `grant`s so this
  doesn't bite. If a student's *capstone* table returns nothing even with RLS off, check that the
  role has table privileges (`grant select ... to anon`).
- **Confusing keys.** "anon" (old) = "publishable" (new) = the browser key. "service_role" (old) =
  "secret" (new) = server only. Write this on the board.
- **Part 4 AI-off drift.** Students reach for AI during the human review. Remind them the human
  review is 🔴; the AI review comes *after*, on purpose, to compare.

## Differentiation

- **Ahead:** push the Stretch (per-user rows with Auth) and the homework PR/Actions stretch. Ask
  them to break their *own* capstone's policies and report the hole.
- **On track:** the core lab and homework are sized for them.
- **Behind (capstone not ready):** Parts 1 and 3 need no capstone — everyone does the RLS lab and the
  injection demo fully. For Part 2, sweep the week-5 micro-app or the starter instead. For Part 4,
  pair two behind students to review the week-5 starter together. Persistence becomes their homework
  priority; offer office hours.
- **Never-coders struggling with SQL:** the SQL is copy-paste; keep them on `attack.html` and the
  before/after table. Understanding "the switch was off" matters more than reading the DDL.

## Fallback plans

- **Supabase down / can't create projects:** run the live demo from a recording or your pre-made
  project, have students fill the before/after table from the [answer key](../../instructor/answer-keys/week-07-rls-lab.md),
  and discuss. Point capstones at **Neon or Turso** (database only) or `localStorage` for now
  ([TOOLS.md](../../TOOLS.md)). The assessed idea is client/server trust and authorization, not the
  vendor.
- **Codespaces quota gone:** `attack.html` runs from a local file; capstone edits via github.dev.
- **Copilot credits gone:** Part 4's human half needs no AI; for the AI-review half, pair with a
  student who has credits, or use any free chat assistant with pasted code.
- **Whole class behind on capstones:** spend the saved time making everyone's RLS lab airtight and
  doing the injection demo twice (once obeying, once with a hardened `AGENTS.md`). Move persistence
  fully into homework with an office-hours block.

## What "good" looks like at the exit ticket

A student can name one concrete vulnerability they fixed ("my guestbook let anyone read private
notes / my capstone had `innerHTML` with user text") and say **where authorization is enforced**
("in the RLS policies on the `notes` table, `supabase/policies.sql`" or "n/a, single-user app, data
stays in the browser"). Vague answers ("I made it more secure") get a follow-up question.
