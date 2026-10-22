# Week 7 lab — Attack, fix, connect, maintain, review

> Two studios. **Studio A:** break a practice database with its public key, fix it, then connect your capstone to Supabase the safe way. **Studio B:** change your own code with the AI off, sweep your capstone for security problems, and review a classmate's pull request.
> Do the **Core** parts first. **If time** parts are optional. Work in the [Safe Loop](../../resources/safe-loop.md) and commit after every part.

**AI-use key:** 🟢 AI on: use AI freely, in the Safe Loop · 🟡 AI limited: the AI may explain and critique, but you decide and write · 🔴 AI off: no AI tools at all, including code completions.

**What you need:** a free Supabase account ([TOOLS.md](../../TOOLS.md)), your capstone repo in a Codespace, and (Studio B) a partner. The attack page is hosted, so there's nothing to install for Part 1.

> [!WARNING]
> Everything here runs against **your own** practice project and **your own** capstone, or a classmate's pull request **with their consent**. Never point these tools at a database or site you don't own. Use made-up data only.

---

## Studio A — Attack, fix, connect

| Time | Part | Core or If time |
|---|---|---|
| 0:35–1:25 | [Part 1 — RLS Attack Lab](#part-1--rls-attack-lab-core-50-min) | Core, 50 min |
| 1:25–1:35 | Break | |
| 1:35–2:40 | [Part 2 — Connect your capstone to Supabase](#part-2--connect-your-capstone-to-supabase-core-65-min) | Core, 65 min |
| 2:40–2:50 | [Part 3 — Per-user rows, or attack from the Console](#part-3--per-user-rows-or-attack-from-the-console-if-time) | If time |
| 2:50–3:00 | Checkpoint share: your before/after table and your "authorization is enforced in" sentence | |

<a id="part-1--rls-attack-lab-45-min"></a>

### Part 1 — RLS Attack Lab (Core, 50 min)

🟢 AI on, if you want explanations. Big idea: with the public key and no row-level security (RLS), anyone can read and change every row. You prove it, then lock it down.

#### 1.1 Create a practice project (5 min)

1. In the Supabase dashboard, create a **new project** on the free plan. Call it something throwaway like `rls-lab`. Pick any region and a database password you won't need again.
2. Wait a minute or two for it to finish setting up.

✅ **Checkpoint:** you see the project dashboard, with **SQL Editor** and **Table Editor** in the left-hand menu.

> [!NOTE]
> Menus move. If a name here doesn't match what you see, ask your assistant "Where is the SQL Editor in the current Supabase dashboard?" or search the Supabase docs.

#### 1.2 Create the vulnerable table (8 min)

1. Open **SQL Editor** → **New query**.
2. Open [setup.sql](rls-lab/setup.sql) from the RLS Attack Lab kit, copy **all** of it, paste it in, and click **Run**. Supabase may ask you to confirm because the script contains `drop table`. Confirm: this is your practice project.
3. Open **Database → Advisors → Security**. You should see an error called **"RLS Disabled in Public"**, warning that anyone with your project URL can read, edit and delete all data in the table. The Table Editor may also mark the table **Unrestricted**.

✅ **Checkpoint:** the `guestbook` table has 6 rows, and Supabase is warning you that RLS is off. That warning is the whole point.

> [!IMPORTANT]
> Supabase now protects new tables in two ways: tables made in the Table Editor get RLS on, and from 30 October 2026 new tables get **no grants** (no permission for the public roles to use them at all). `setup.sql` undoes both on purpose, with explicit `grant`s and `disable row level security`, so the vulnerable state is the same in every project. Real leaks happen the same way: someone, or an agent, turns the protections off.

#### 1.3 Get your keys (5 min)

1. Click **Connect** at the top of the dashboard, or go to **Settings → API Keys**.
2. Copy two things into a scratch note (not a file in a repo):
   - the **Project URL** (looks like `https://abcdxyz.supabase.co`)
   - the **publishable** key (starts `sb_publishable_`)
3. Leave the **secret** key alone (starts `sb_secret_`). You never need it in this course's front end.

> [!NOTE]
> If you only see a legacy **anon** key (a long string starting `eyJ`), look for the tab with publishable and secret keys and create a publishable key there. Supabase is retiring the legacy `anon` and `service_role` keys by the end of 2026.

✅ **Checkpoint:** you have a Project URL and a publishable key in a scratch note.

#### 1.4 Attack the table with only the public key (12 min)

You use a tester page that does what any stranger could build in an afternoon.

1. Open the hosted [RLS attack page](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/tools/rls-attack.html). It runs in your browser and talks straight to your Supabase project.
2. Read the banner. Paste your **Project URL** and **publishable key**, leave the table as `guestbook`, and click **Connect**.
3. Run each button and note the label the page gives each result (open **How to read the results** on the page for what each label means):
   - **Read all rows**: you see all 6 rows, *including the 2 private notes* (`is_public = false`).
   - **Insert a row**: works. Try again with `is_public` set to `false`: also works.
   - **Update row #1**: works; the message changes.
   - **Delete newest row**: works; a row disappears.

✅ **Checkpoint:** with only the public key, you read private notes and changed and deleted data. This is the state UpGuard found in 16,326 databases. Fill in the "Before fix" column in 1.6.

> [!TIP]
> The page keeps your URL and key **in memory only** and never saves them. Click **Forget key** when you're done, or close the tab. The page refuses keys that look secret, but check the prefix yourself anyway: only ever paste a key starting `sb_publishable_`.

#### 1.5 Fix it with row-level security (8 min)

1. Back in **SQL Editor** → **New query**, open [fix.sql](rls-lab/fix.sql), paste all of it, and **Run**.
2. Read the result of its last query: the table's RLS status (`rls_enabled` = true) and the two policies it created. Say each policy out loud in plain words.
3. Re-open **Database → Advisors → Security**. The "RLS Disabled" error should be gone.

✅ **Checkpoint:** RLS is on and two policies exist: one for reading public rows, one for adding a valid public row.

#### 1.6 Re-run the attack and compare (12 min)

Go back to the attack page (reconnect if needed) and run every button again. Fill in this table:

| Action (public key) | Before fix | After fix |
|---|---|---|
| Read all rows | | |
| Insert a normal public row | | |
| Insert a private row (`is_public = false`) | | |
| Insert a 1,000-character message | | |
| Update row #1 | | |
| Delete newest row | | |

What you should find after the fix: reading shows **only the 4 public rows**; a normal public insert still works; a private or over-long insert is **refused** with *"new row violates row-level security policy"*; update and delete report **0 rows changed and no error**.

> [!IMPORTANT]
> Read the result carefully. There are three different "blocked" answers, and they mean different things:
>
> - **"permission denied"** (the page says **REFUSED: NO GRANT**): the role has no **grant** for that operation. Lock 1 stopped it.
> - **"new row violates row-level security policy"** (**REFUSED BY RLS**): an insert or update broke a policy's rule. Lock 2 stopped it.
> - **No error, 0 rows** (**0 ROWS (FILTERED)**): RLS hid every row you weren't allowed to touch, so nothing matched. Also blocked, silently.
>
> So **always check how many rows changed**, not only whether there was an error. And "0 rows" only proves something if the table really holds rows the public shouldn't see. Labels starting **ERROR**, and **REFUSED BY A COLUMN RULE**, aren't security results: they mean a setup problem or bad data.

✅ **Checkpoint:** your before/after table is filled in, and you can explain why update says "0 rows" instead of an error.

Clean up: keep the practice project if you might reuse it, or delete it from its settings page later. Paste your before/after table into your capstone's `SECURITY_CHECKLIST.md` under "What I found and fixed".

---

### Part 2 — Connect your capstone to Supabase (Core, 65 min)

The worked example for feature type (b), a database with access rules. You set up the two locks yourself, then let the agent wire up the page.

**Not using a database in your capstone?** Do this part anyway on a practice branch you won't merge (`git switch -c practice/supabase`): it's the only time the course walks through it, and walkthrough 3 asks everyone where authorization is enforced. If you hit the free plan's project limit, reuse your `rls-lab` project after running `drop table public.guestbook;`.

The capstone starter has three files for this. The starter README's [feature patterns](../../projects/capstone-starter/README.md#feature-patterns) explain each one:

| File | What it holds | Public? |
|---|---|---|
| `public/config.js` (copied from `public/config.example.js`) | Your Project URL and **publishable** key | Yes, by design. Committed |
| `public/lib/db.js` | `getDb()`, which gives your page one Supabase client. It loads the Supabase library from the jsDelivr **CDN** (a public server that hosts copies of open-source code, so a page can load it with one `import` line) and refuses to start with a secret key | Yes |
| `supabase/policies.sql` | Your tables, their grants and their RLS policies, plus a check query at the end | Yes. A reviewer reads it to see your rules |

#### 2.1 Decide who may do what (10 min)

🔴 AI off for the decision; this is your app's authorization. Before any SQL, fill in this table in `SPEC.md` (or a comment at the top of `supabase/policies.sql`), one per table:

| Role | Read | Add | Change | Delete |
|---|---|---|---|---|
| Anyone (publishable key, not signed in) | | | | |
| Signed-in user (only if you add sign-in) | | | | |

`supabase/policies.sql` has two patterns to start from:

- **Pattern A, a public table** (`messages`, like a guestbook): anyone may read every row and add a short one; nobody using the publishable key may change or delete one. Only for data you'd be happy to see on a public notice board.
- **Pattern B, private rows** (`notes`): a signed-in user may read, add, change and delete only their own rows; anyone not signed in gets nothing. Needs sign-in (see Part 3).

If any row could ever be private (a note, an email, a phone number), "anyone may read" is wrong: that's Pattern B.

✅ **Checkpoint:** you can say your rules in one sentence each, and you know which pattern you'll start from.

#### 2.2 Create the table, the grants and the policies (15 min)

🟡 AI limited: the AI may explain any line or critique your file, but you decide the rules and must be able to explain every line.

1. Create a Supabase project for your capstone (named after your app) and copy its Project URL and publishable key into your scratch note.
2. Open `supabase/policies.sql`. Keep the pattern that matches your 2.1 table, rename the table and columns to fit your app, and delete the other pattern. No data of your own yet? Keep Pattern A exactly as it is.
3. Find the three parts in what you kept and say each one in plain words: the **`grant`** lines (lock 1: may this role use the table at all?), **`enable row level security`**, and the **`create policy`** statements (lock 2: which rows?). Change the grants and policies so they match your 2.1 table exactly: no grant for anything your table says "no" to.
4. Paste the whole file into **SQL Editor** → **New query** and **Run**. Read the result of its last query: one line per table, with `rls_enabled`, its `api_grants` and its number of `policies`.

✅ **Checkpoint:** every table shows `rls_enabled` = true, its `api_grants` match your 2.1 table (Pattern A unchanged shows only `INSERT` and `SELECT`), and there's at least one policy for each granted operation.

> [!WARNING]
> **Never answer "permission denied" with a bare grant.** If your app or an agent hits `permission denied for table …`, the fix is to add the grant **in `supabase/policies.sql`, together with RLS on and a policy**, then re-run the file. A line like `grant all on my_table to anon` on its own, with RLS off, rebuilds exactly the leak you attacked in Part 1. If an agent proposes it, stop and reject it.

#### 2.3 Put the URL and publishable key in `public/config.js` (5 min)

1. In the terminal: `cp public/config.example.js public/config.js`
2. Paste your Project URL and publishable key where the file says.
3. Read the comment at the top of the file. Then write one sentence in your README's "where each key lives" section, in your own words, saying why this key is safe to publish (it's public by design; RLS and the grants protect the data).

✅ **Checkpoint:** `public/config.js` holds a key starting `sb_publishable_` and nothing starting `sb_secret_`.

> [!IMPORTANT]
> This is the "Not every key is a secret" rule from the [README](README.md#key-ideas). The publishable key goes in `public/` and gets committed, because the deployed site needs it. Your LLM key and any secret key stay in `.env` and in Vercel's environment variables, never in `public/`.

#### 2.4 Connect one feature with the agent (25 min)

🟢 AI on, approvals on. Follow the Safe Loop with its two habits: **check first**, then **teach back**.

1. **Check first (3 min):** write the "done when" check in `TESTS.md` before you prompt, for example: *"Add a message, reload the page, it's still there. Turn off the network in DevTools, add a message, see a friendly error."*
2. **Prompt the agent** in plan mode first. Change the table and column names to yours:

   ```text
   Goal: Show the latest messages and let a visitor add one, using getDb() from public/lib/db.js.
   Context: Capstone starter. The table public.messages (id, name, message, created_at) exists and
   its rules are in supabase/policies.sql. public/config.js holds the project URL and publishable
   key. The starter README's "Feature patterns" section shows the read and insert calls.
   Constraints: Use only getDb() from public/lib/db.js. Don't edit supabase/policies.sql or
   public/config.js. Don't add npm packages or any other key. Show user text with textContent,
   never innerHTML. Show a loading message while waiting and a friendly message if a request fails.
   Show me the plan and wait for my OK.
   Done when: a message I add is still there after a reload, npm test passes, and a failed request
   shows a message instead of freezing.
   ```

3. Read the plan, approve it (or correct it), then let it make the change. **Read the diff.**
4. Run your check from step 1 with `npm run dev`. Run `npm test`.
5. **Teach back (2 min):** in `PROMPTS.md`, write 2–3 sentences in your own words: what changed and why. Then commit, with an `Assisted-by: [tool]` line.

✅ **Checkpoint:** your data survives a reload, `npm test` passes, and the commit has a teach-back in `PROMPTS.md`.

> [!TIP]
> Blank list and a red error in the Console? Check the error's words against the three answers in 1.6. "Permission denied" means a missing grant (fix it in `policies.sql`); "0 rows" with data in the Table Editor means a missing or too-strict select policy. More: [Troubleshooting: Supabase](../../resources/troubleshooting.md#supabase).

#### 2.5 Attack your own table (10 min)

1. Open the [RLS attack page](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/tools/rls-attack.html) again. Connect with your **capstone's** URL and publishable key, and type your table's name.
2. Open **Testing your own table instead?** and describe a row in JSON that matches your columns, for example `{"name": "Mallory", "message": "Hello"}` for Pattern A.
3. Try each operation. Everything your 2.1 table says "no" to must come back **REFUSED** or **0 ROWS**. Anything it says "yes" to should be **ALLOWED**. An **ERROR: COLUMN NOT FOUND** means your JSON doesn't match the table: fix it and try again.
4. "0 rows" only proves something if the table holds rows the public shouldn't see. If your rules hide any rows, add one in the Table Editor and check it stays hidden.
5. Fill in the "authorization is enforced in" line of `SECURITY_CHECKLIST.md`, for example *"in the RLS policies and grants on `public.messages`, in `supabase/policies.sql`"*.
6. Copy the page's results table into `SECURITY_CHECKLIST.md` as evidence.
7. Commit `supabase/policies.sql` and `public/config.js`. Deploy, and check the live site saves data too.

✅ **Checkpoint:** your own attack fails wherever your rules say "no", the grants match your rules, and the checklist names where authorization is enforced.

---

### Part 3 — Per-user rows, or attack from the Console (If time)

Pick one.

- **Per-user rows with Supabase Auth.** Make a table where each signed-in user sees only their own rows. Start from the starter's Pattern B (`notes`), or follow the kit's [per-user stretch](rls-lab/README.md#stretch-per-user-private-notes) and write the four policies yourself using `(select auth.uid()) = user_id`. Turn on **Anonymous Sign-Ins** (under **Authentication**; menus move) to test without building a login. This is the pattern for any capstone with private data.
- **Attack from the Console, like a stranger would.** Your publishable key is in your live site's source, so anyone can use it from their browser's DevTools Console, not only from the attack page. Ask your assistant to explain each line of a short supabase-js snippet that tries to update and delete every row of your table, then run it **on your own live site** and read the result using the three answers from 1.6. Expected: "permission denied" for anything you didn't grant.

---

## Studio B — Maintain, sweep, review

| Time | Part | Core or If time |
|---|---|---|
| 0:00–0:10 | Show and tell: two capstones; "where is your data, and who can read it?" | |
| 0:10–0:40 | [Part 4 — AI-off maintenance task](#part-4--ai-off-maintenance-task-core-30-min) | Core, 30 min |
| 0:40–1:10 | [Part 5 — Security sweep](#part-5--security-sweep-core-30-min) | Core, 30 min |
| 1:10–1:40 | [Part 6 — Peer review as a pull-request review](#part-6--peer-review-as-a-pull-request-review-core-30-min) | Core, 30 min |
| 1:40–2:30 | [Part 7 — Project time](#part-7--project-time-50-min): AI review comparison (Core), then Milestone 2 work or the handoff test | Core, then If time |
| 2:30–2:45 | [Debrief and prompt-injection demo](#debrief-and-prompt-injection-demo-15-min) | |
| 2:45–3:00 | [Exit ticket](../../assessment/exit-tickets.md#week-7), 🔴 AI off | |

### Part 4 — AI-off maintenance task (Core, 30 min)

🔴 **AI off.** Can you change your own app without the AI? In one study, most students who had used AI freely couldn't ([Sankaranarayanan](https://arxiv.org/abs/2602.20206)). This is a rehearsal for walkthrough 3, and it's **graded on effort, not on finishing**.

**Set up (5 min):**

1. Turn Copilot off ([how](../../setup/codespaces.md#turn-copilot-off-for-ai-off-activities)) and close every AI chat tab.
2. Check `git status` shows nothing to commit, then make a branch: `git switch -c maintenance-task`.
3. Your partner (or your instructor) picks **one** change request for you from the cards below and words it for your app. You do the same for them.

**Work (25 min):** make the change by hand. Allowed: your code, the running app, DevTools, git, [MDN Web Docs](https://developer.mozilla.org/) and the course [Glossary](../../resources/glossary.md). Not allowed: Copilot, chat assistants, or AI answer boxes in search results.

**Change-request cards** (small on purpose; adapt the words to your app):

1. While a save or request is in flight, the button says "Saving…" and can't be clicked twice.
2. Show a count next to the list's heading ("3 items"), and keep it right after adding.
3. Reject input longer than [a number your partner picks] characters, with a visible message.
4. Show the newest entry first instead of the oldest.
5. Add a "Clear" button that empties the text box (not the saved data) and puts the cursor back in it.
6. Change the empty-state message to [wording your partner picks], and hide it when there's data.
7. Trim spaces from what the user typed before it's saved, and add one automated test for that.

Cards never touch `supabase/policies.sql`, keys or deployment settings.

**Finish:** test the change yourself, then let your partner try it (2 min). Commit it on the branch if it works, or leave it uncommitted and `git restore .` if it doesn't. In `PROMPTS.md`, add a short "AI-off maintenance task" entry: the request, what you changed, how long it took, and what you had to look up. How it *felt* goes in this week's reflection on Canvas.

✅ **Checkpoint:** you tried the change for the full time with the AI off, and recorded what happened.

> [!NOTE]
> **Working alone?** Your instructor sends you a card at the start. See [Self-paced path](../../resources/self-paced.md) for the other substitutions this week.

### Part 5 — Security sweep (Core, 30 min)

🟢 AI on for explaining results. Run the top of [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) against your capstone. Tick each item **and write one line of evidence**.

1. **Secrets, including old commits (8 min).** In your capstone repo:

   ```bash
   npm run check:secrets
   ```

   The scan reads your files **and your whole git history**. A key found in an old commit is still public, because anyone can read the history. If it finds one, **revoke the key and make a new one** ([I committed a secret](../../resources/troubleshooting.md#i-committed-a-secret)); deleting the line isn't enough. Then confirm `.env` is in `.gitignore`, `.env.example` holds only placeholders, and nothing under `public/` starts `sb_secret_`.

   ✅ **Checkpoint:** no findings, and you can say where each key lives and why.

2. **Packages (8 min).**

   ```bash
   npm audit
   ```

   It works because the starter commits a `package-lock.json` (a **lockfile**: the exact list of package versions). If you see `ENOLOCK`, run `npm install` once and commit the `package-lock.json` it creates. Then check **every** dependency in `package.json` on npmjs.com (it exists, has real downloads and a real repository), and every library your page imports from a CDN:

   ```bash
   grep -rn "https://" public/ --include=*.js
   ```

   Each import should name the package you meant, with a version in the URL. The starter's `db.js` pins an exact version (`@2.118.0`, all three numbers), so nobody can swap the code under you. When you update it, change the number on purpose and test again. Real packages get hijacked too, so the safety contract says: install only what the plan named, and pin the version.

   ✅ **Checkpoint:** no high or critical audit issues you can't explain, and every package and CDN import is one you meant.

3. **Cross-site scripting (XSS) (10 min).**

   ```bash
   grep -rn "innerHTML" public/
   ```

   For each hit, ask: can user-typed text reach it? If so, switch to `textContent`. Then, on the **live** site, type `<img src=x onerror=alert(1)>` into every input. **No alert box should appear.** If your app saves data, reload after saving the payload: text stored in a database reaches every visitor, so it must stay inert there too.

   ✅ **Checkpoint:** the payload shows as plain text, before and after a reload.

4. **Record it (4 min).** Fill in the evidence lines, including the new database line: every table that grants access to `anon` or `authenticated` has RLS on and at least one policy.

### Part 6 — Peer review as a pull-request review (Core, 30 min)

🔴 AI off for your review. You review one of your partner's week-6 **pull requests** (a proposed change on a branch, shown as a diff, that's reviewed before it joins `main`). They review yours.

**Getting access (5 min).** Capstone repos are public, so you don't need to be added: open your partner's repo on GitHub → **Pull requests** → the week-6 pull request they point you to. Anyone with a GitHub account can comment on a public repo's pull request.

- **Their pull request is already merged?** Open it from the **Closed** filter; the **Files changed** tab still works. Or they open a new small one now.
- **Their repo is private?** They add you under **Settings → Collaborators** for this week, and remove you afterwards. Collaborators can push, so they should also turn this off once the review and handoff are done.

**Review on GitHub (20 min).**

1. Open **Files changed** and read the whole diff first.
2. Use the headings of [CODE_REVIEW.md](../../templates/CODE_REVIEW.md) as your guide: does it do what their `SPEC.md` says (try it on their live site)? Can you explain one function in plain English? Safety: secrets, `innerHTML`, grants and RLS, packages.
3. To comment on a line, hover over it and click the **+** button (or move to the line and use the comment button on its row), write the comment, and choose **Start a review**. Point to the line, explain why, and suggest a fix.
4. When you're done, click **Review changes** (or **Submit review**), choose **Comment**, write a two-line summary, and submit. Menus move; ask a classmate if you can't find it.

Keep comments about the code. No grades, no names other than GitHub usernames.

**Start your written review (5 min).** The **graded** review is the written one on Canvas, the course's learning management system, using the CODE_REVIEW.md headings. Start it now; finish it in homework. Share it with the author privately (a Canvas comment or email), never as a file or issue in their repo.

✅ **Checkpoint:** your partner's pull request has your submitted review with at least three located comments, and your Canvas draft has one thing that works well, the most important fix and one question.

> [!NOTE]
> **Working alone?** Review the practice pull request your instructor assigns; it has known issues to find.

### Part 7 — Project time (50 min)

1. **Core: compare with an AI review (10 min).** 🟢 AI on. Ask an AI to review the **same** pull request:

   ```text
   Goal: Review this pull request for bugs, security issues and unclear names.
   Context: I'll paste the diff below. It's a beginner web app (plain HTML, CSS, JavaScript; Supabase).
   Constraints: Be specific: point to lines. Separate real problems from style opinions.
   Done when: You've listed the issues you're most confident about, worst first.
   ```

   Fill in the compare table from CODE_REVIEW.md in your Canvas draft: real problems, false alarms and misses, for you and for the AI. Note one thing the AI caught that you didn't, and one the other way round.

2. **Core: Milestone 2 work.** Start [homework](homework.md) Part 1 (your data feature) or Part 3 (act on the review you received).
3. **If time: the handoff test, in person.** If you and your partner are both ready, do [homework Part 5](homework.md#5-the-handoff-test-about-1-h) now, while you're in the same room.

### Debrief and prompt-injection demo (15 min)

Your instructor runs a 7-minute demo: an agent is given an innocent task in a small app whose files hide an instruction meant for the agent. Watch whether it **obeys**, **warns** or **ignores** it. Then discuss: which parts of the lethal trifecta (private data, untrusted content, a way out) does *your* capstone agent have, and what keeps it from having all three? Safety contract rule 9 applies: when an agent reads untrusted content, approvals stay on and no secrets are within its reach.

Want to try it yourself? The [Prompt-injection demo kit](injection-demo/) is optional and self-paced; run it only in a fresh Codespace, never in your capstone.

---

## Wrap up

- Commit everything: `supabase/policies.sql`, `public/config.js`, your before/after table and `SECURITY_CHECKLIST.md` evidence.
- Update [PROMPTS.md](../../templates/PROMPTS.md): teach-backs for agent commits, and the maintenance-task entry.
- Do the [week 7 exit ticket](../../assessment/exit-tickets.md#week-7), AI off (🔴). It's graded on completion, not correctness.
- Homework: [homework.md](homework.md).
