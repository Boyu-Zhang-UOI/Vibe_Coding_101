# Week 7 homework — Persist it, secure it, review it

> About 3 hours for the core tier. Everything is on your **capstone**. Work in the
> [Safe Loop](../../resources/safe-loop.md): one small step, test, read the diff, commit.

## Core tier (required)

### 1. Add persistence with access rules (about 90 min)

Give your capstone a real database with row-level security (RLS), or complete another required
capstone data feature. The capstone must include at least two of: a server-side API call with a
hidden key, a database with access rules and/or auth, a data visualization, or an external public
API ([SYLLABUS](../../SYLLABUS.md)). This week is the natural moment for the database.

1. Create (or reuse) a Supabase project and a table for your app's data. Insert a couple of fake
   rows.
2. **Turn RLS on and write policies** so the public key can do only what your app needs. Commit the
   policies as SQL in your repo at **`supabase/policies.sql`** so a reviewer (and you, next month)
   can see the rules:

   ```sql
   -- supabase/policies.sql
   alter table public.notes enable row level security;

   create policy "Anyone can read notes" on public.notes
     for select to anon, authenticated using ( true );
   -- add insert/update/delete policies your app actually needs
   ```

3. Put the **Project URL and publishable key in a small public config file** (for example
   `public/config.js` exporting them, or a `<meta>` tag your `app.js` reads). In a comment there,
   explain in one sentence **why this is safe**: the key is public by design and RLS is what
   protects the data.

   > [!IMPORTANT]
   > This is only safe because RLS is on. Before you commit, re-run your own `attack.html` (or the
   > SQL `set local role anon` check) against your real table and confirm the public key **cannot**
   > read or change anything it shouldn't.

4. Connect your front end with `@supabase/supabase-js` from the CDN and make one feature read/write
   the table. Test the happy path and one edge case (empty input, very long input).

✅ **Done when:** your app stores and loads data across a reload, the policies are in
`supabase/policies.sql`, and the public key cannot reach data it shouldn't.

### 2. Complete the security checklist with evidence (about 40 min)

Finish [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) for your capstone. For every
item, tick it **and** paste one line of evidence: a command's output, a file name, a screenshot
link. Pay special attention to:

- Section 3 (database): RLS on every table; you tried to read/change data you shouldn't and it
  failed; the one sentence saying **where authorization is enforced**.
- Section 4 (XSS): the `<img src=x onerror=alert(1)>` test showed no alert.
- Section 6 (agents): which parts of the lethal trifecta your setup has, and what keeps it from
  having all three.

✅ **Done when:** every box is ticked or explained, with evidence, and section 3's "where
authorization is enforced" sentence is filled in.

### 3. Peer review, both directions (about 30 min)

- **Write** the review of your partner's repo you started in the lab, using
  [CODE_REVIEW.md](../../templates/CODE_REVIEW.md). Do this **yourself, AI off** — reviews are
  addressed to a person (🔴, see [SYLLABUS](../../SYLLABUS.md#8-ai-use-policy)). Send it to them.
- **Act on** the review you received: fix the **single most important issue** they raised. Commit it
  with a message that references the review.

✅ **Done when:** your review is delivered and you have one commit fixing the top issue from your own
review.

### 4. Reflection, AI off (about 15 min)

Write this week's reflection with [REFLECTION.md](../../templates/REFLECTION.md). Anchor it in a
concrete moment: the first time your attack succeeded, or the line where you found `innerHTML`.

## Deliverables checklist

- [ ] Capstone stores data with RLS on; `supabase/policies.sql` committed
- [ ] Public config file with URL + publishable key, and a one-line "why this is safe" comment
- [ ] `SECURITY_CHECKLIST.md` completed with evidence
- [ ] Peer review written (AI-free) and delivered
- [ ] One commit fixing the top issue from the review you received
- [ ] `PROMPTS.md` updated
- [ ] `REFLECTION.md` written (AI-free)

## Stretch tier (optional)

- **Per-user rows with Supabase Auth.** Add sign-in (or Anonymous Sign-Ins) and policies using
  `(select auth.uid()) = user_id`, so each user only touches their own rows. Base it on the lab
  Stretch.
- **Tests on every push.** Add a GitHub Actions workflow that runs `node --test` on each push, so a
  broken change is caught automatically.
- **Pull-request workflow.** Make your next change on a branch, open a pull request, and turn on
  branch protection so `main` requires the PR (and, if you did the Actions stretch, a green test
  run) before merging.

> [!NOTE]
> Supabase free projects **pause after about a week of inactivity**. If yours is paused when you come
> back, open the dashboard and click restore; your data returns ([TOOLS.md](../../TOOLS.md)). Plan
> for this before the week 8 Project Fair.

## Looking ahead

Next week is **Ship It**: polish, accessibility, a demo video and the Project Fair. Bring a capstone
that runs end to end.
