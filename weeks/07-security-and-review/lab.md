# Week 7 lab — Attack, sweep, inject, review

> About 100 minutes in four parts. You will break a database you own, fix it, sweep your capstone,
> watch an agent meet a planted instruction, and review a classmate's code.
> Work in the [Safe Loop](../../resources/safe-loop.md). Commit after every part.

**What you need:** a free Supabase account ([TOOLS.md](../../TOOLS.md)), the [rls-lab/](rls-lab/) and
[injection-demo/](injection-demo/) kits, your capstone repo, and a partner for Part 4.

> [!WARNING]
> Everything here runs against **your own** practice project and **your own** capstone, or a
> classmate's repo **with their consent** for review. Never point these tools at a database or site
> you do not own.

---

## Part 1 — RLS Attack Lab (45 min)

Big idea: with the public key and no row-level security, anyone can read and change every row. You
will prove it, then lock it down.

### 1.1 Create a practice project (5 min)

1. Open the Supabase dashboard and create a **new project** (free plan). Give it a throwaway name
   like `rls-lab`. Choose any region and a database password you won't need again.
2. Wait for it to finish setting up (a minute or two).

✅ **Checkpoint:** you can see the project dashboard with a left-hand menu including **SQL Editor**
and **Table Editor**.

> [!NOTE]
> Menus move. If a name here doesn't match what you see, ask your assistant "Where is the SQL Editor
> in the current Supabase dashboard?" or search the Supabase docs.

### 1.2 Create the vulnerable table (5 min)

1. Open **SQL Editor** → **New query**.
2. Open [rls-lab/setup.sql](rls-lab/setup.sql), copy **all** of it, paste, and click **Run**.
   Supabase may ask you to confirm because the script contains `drop table`. Confirm: this is your
   practice project.
3. Read what Supabase tells you. Open **Database → Advisors → Security**. You should see an error:
   **"RLS Disabled in Public"** — *"Anyone with your project URL can read, edit, and delete all data
   in this table because Row-Level Security is not enabled."* The Table Editor may also mark the
   table **Unrestricted**.

✅ **Checkpoint:** the `guestbook` table exists with 6 rows, and Supabase is warning you that RLS is
off. That warning is the whole point.

> [!IMPORTANT]
> Newer Supabase projects no longer expose new tables through the web API automatically, and tables
> made in the Table Editor get RLS on by default. `setup.sql` undoes both on purpose (`disable row
> level security` and explicit `grant`s) so the vulnerable state is reproducible. That is realistic:
> real leaks happen when someone turns protections off, or a tool generates code that does.

### 1.3 Get your keys (3 min)

1. Click **Connect** at the top of the dashboard (or go to **Settings → API Keys**).
2. Copy two things:
   - the **Project URL** (looks like `https://abcdxyz.supabase.co`)
   - the **publishable** key (starts with `sb_publishable_`; on older projects it's the **anon**
     key, a long string starting `eyJ`).
3. Do **not** copy the secret key. If you see `sb_secret_` or a key labeled `service_role`, leave it
   alone.

✅ **Checkpoint:** you have a URL and a publishable key on your clipboard or in a scratch note.

### 1.4 Attack the table with only the public key (12 min)

You'll use the kit's tester page, which is what a stranger could build.

1. Open [rls-lab/attack.html](rls-lab/attack.html). In a Codespace, serve the folder and open the
   forwarded port:

   ```bash
   python3 -m http.server 8000
   ```

   Then open `rls-lab/attack.html` on the forwarded address. On your own laptop you can just
   double-click the file.
2. Read the yellow banner. Paste your **Project URL** and **publishable key**, leave the table as
   `guestbook`, and click **Connect**.
3. Run each button and record what happens:
   - **Read all rows** — you should see all 6 rows, *including the 2 private notes* marked
     `is_public = false`.
   - **Insert a row** — succeeds. Try again with `is_public` set to `false`: also succeeds.
   - **Update row #1** — succeeds; the message changes.
   - **Delete newest row** — succeeds; a row disappears.

✅ **Checkpoint:** with just the public key, you read private notes and changed and deleted data.
This is the Lovable/Moltbook state. Fill in the "Before" column of the table in 1.6.

> [!TIP]
> The page keeps your URL and key **in memory only** and never saves them. Click **Forget key**
> when you're done, or just close the tab.

### 1.5 Fix it with row-level security (10 min)

1. Back in **SQL Editor** → **New query**, open [rls-lab/fix.sql](rls-lab/fix.sql), paste all of it,
   and **Run**.
2. Read the result of its last query: it lists the table's RLS status (`rls_enabled` = true) and the
   two policies it created.
3. Re-open **Database → Advisors → Security**. The "RLS Disabled" error should be gone.

✅ **Checkpoint:** RLS is on and two policies exist (one for reading public rows, one for inserting a
valid public row).

### 1.6 Re-run the attack and compare (7 min)

Go back to `attack.html` (reconnect if needed) and run every button again. Fill in this table:

| Action (public key) | Before fix | After fix |
|---|---|---|
| Read all rows | | |
| Insert a normal public row | | |
| Insert a private row (`is_public = false`) | | |
| Insert a 1,000-character message | | |
| Update row #1 | | |
| Delete newest row | | |

What you should find after the fix: read shows **only the 4 public rows**; a normal public insert
still works; a private or over-long insert is **refused** with *"new row violates row-level security
policy"*; update and delete report **0 rows changed and no error**.

> [!IMPORTANT]
> The update and delete results are the subtle lesson. RLS doesn't error on a blocked update — it
> just finds no rows you're allowed to touch, so nothing changes. **Always check how many rows
> changed, not only whether there was an error.**

Optional — see it in SQL too. In the SQL Editor you can act as the public role safely inside a
transaction that never saves:

```sql
begin;
set local role anon;
-- Try to read everything the public key could:
select id, name, is_public from public.guestbook order by id;
-- Try to change a row:
update public.guestbook set message = 'changed by anon' where id = 1 returning id, message;
rollback;   -- undoes everything above
```

Before the fix this reads all rows and changes row 1. After the fix it reads only public rows and
changes nothing.

### 1.7 Stretch — per-user rows with Supabase Auth (optional)

Make a table where each signed-in user sees only their own rows. Follow
[rls-lab/README.md](rls-lab/README.md#stretch-per-user-private-notes): create `private_notes`, turn
on RLS, then write four policies using `(select auth.uid()) = user_id`. Enable **Anonymous Sign-Ins**
under **Authentication → Providers** to test it without building a login. Your instructor has a model
answer.

### 1.8 Clean up and commit

- If you'll reuse this project for your capstone later, keep it. Otherwise you can delete it (the
  free plan allows only a limited number of active projects; see [TOOLS.md](../../TOOLS.md)).
- Commit your before/after table into your capstone's notes or `SECURITY_CHECKLIST.md`, and log the
  session in [PROMPTS.md](../../templates/PROMPTS.md) if you used AI to explain any policy.

---

## Part 2 — Security sweep on your capstone (20 min)

Run the top of [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) against your capstone.
Tick each item **and write one line of evidence**.

1. **Secrets.** In your capstone repo:

   ```bash
   npm run check:secrets
   ```

   Confirm `.env` is in `.gitignore` and `.env.example` holds only placeholders. Confirm no secret
   key appears anywhere under `public/`.

   ✅ **Checkpoint:** the scanner reports no findings, and you can say where each key lives.

2. **Dependencies.**

   ```bash
   npm audit
   ```

   Then open `package.json` and check **every** dependency on npmjs.com: it exists, has real
   downloads and a real repository. This catches slopsquatting.

   ✅ **Checkpoint:** no high/critical audit issues you can't explain, and every package is one you
   meant to install.

3. **XSS.** Search your front-end code for `innerHTML`:

   ```bash
   grep -rn "innerHTML" public/
   ```

   For each hit, decide: is any user-typed text going in there? If so, switch it to `textContent`
   (or escape it). Then test live: type `<img src=x onerror=alert(1)>` into every input your app
   has. **No alert box should appear.**

   ✅ **Checkpoint:** the payload shows as literal text, not an alert. Record the result.

> [!NOTE]
> No database yet? Skip section 3 of the checklist for now; you'll complete it in homework when you
> add persistence. Everything else applies today.

---

## Part 3 — Prompt-injection demo (15 min)

Do the exercise in [injection-demo/README.md](injection-demo/README.md). In short:

1. Open the [injection-demo/](injection-demo/) kit in a **fresh** Codespace (not your capstone).
2. Read the two planted messages in `tiny-tip-jar/index.html` and `tiny-tip-jar/README.md` so you
   know what the bait is.
3. Give your agent an innocent task (summarize the app, fix the README typos) and watch whether it
   also creates `CANARY.txt` or adds a comment — following an instruction you never gave.
4. Reset (`rm -f tiny-tip-jar/CANARY.txt`) and discuss with the lethal trifecta.

✅ **Checkpoint:** you can say whether your agent **obeyed**, **warned you**, or **ignored** the
hidden instruction, and which two of the three trifecta pieces your capstone agent already has.

---

## Part 4 — Review and handoff (30 min)

Swap capstone repos with a partner. You review theirs; they review yours.

### 4.1 Human review, AI off (12 min)

Open [CODE_REVIEW.md](../../templates/CODE_REVIEW.md) and fill it in **yourself**, with AI turned
off. Try to run their app from the README alone, check three acceptance criteria from their
`SPEC.md`, read one function and explain it in plain English, and do the safety checks (secrets,
`innerHTML`, RLS, dependencies).

✅ **Checkpoint:** a completed review with one thing that works well, the most important thing to
fix, and one question for the author.

### 4.2 AI review of the same code (6 min)

Now ask an AI to review the **same** code:

```text
Goal: Review this code for bugs, security issues and unclear names.
Context: I'll paste the file(s) below. It's a beginner web app.
Constraints: Be specific: point to lines. Separate real problems from style opinions.
Done when: You've listed the issues you're most confident about, worst first.
```

### 4.3 Compare (6 min)

Fill in the compare table at the bottom of `CODE_REVIEW.md`:

| | Found by me | Found by AI |
|---|---|---|
| Real problems | | |
| False alarms | | |
| Missed | | |

Note one thing the AI caught that you didn't, and one thing you caught that it didn't.

### 4.4 Handoff test (6 min)

Your partner now tries **one tiny change** to your app — using only your `README.md` and
`AGENTS.md`, with an agent, and **without asking you**. Watch silently.

✅ **Checkpoint:** either the change worked from your docs alone, or you have a concrete list of what
was missing. That list is your homework: fix your docs.

---

## Wrap up

- Commit everything: your before/after RLS table, the filled `SECURITY_CHECKLIST.md`, the review you
  wrote.
- Update [PROMPTS.md](../../templates/PROMPTS.md) with any AI reviews or explanations you used.
- Do the [week 7 exit ticket](../../assessment/exit-tickets.md#week-7), AI off.
- Homework: [homework.md](homework.md).
