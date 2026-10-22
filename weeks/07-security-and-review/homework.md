# Week 7 homework — Persist it, secure it, review it, hand it off

> **Due before next week's Studio A** (default 11:59 pm the night before). About **9.5 hours** of core work, all on your **capstone**. This week counts as **Milestone 2**. Work in the [Safe Loop](../../resources/safe-loop.md): check first, one small step, test, read the diff, teach back, commit.

## Deliverables checklist

- [ ] Your **second feature type** works on the production URL: Supabase + RLS with `supabase/policies.sql` (grants and policies together), **or** another feature type ([Part 1](#1-finish-your-data-feature-about-3-h))
- [ ] Every chosen feature type works at least roughly, `npm test` passes, and the app is deployed ([Part 2](#2-project-build-time-about-2-h))
- [ ] `SECURITY_CHECKLIST.md` with evidence for every ticked item, dated this week ([Part 3](#3-security-checklist-with-evidence-about-1-h))
- [ ] **Peer review given:** your written review on Canvas (the course's learning management system), shared with the author privately (🔴 AI off) ([Part 4](#4-respond-to-the-review-about-15-h))
- [ ] **Response to the review you received**, on Canvas: what you changed (with links to the commits or pull request) and what you decided not to change, and why
- [ ] **Handoff test** done in both directions; you fixed what confused your tester and noted it in `PROMPTS.md` ([Part 5](#5-the-handoff-test-about-1-h))
- [ ] `PROMPTS.md` up to date: a teach-back before every agent commit, `Assisted-by:` lines, and your maintenance-task entry
- [ ] Reflection submitted on Canvas (🔴 AI off) ([Part 6](#6-prompts-and-reflection-about-1-h))
- [ ] On Canvas: your repo link, and your **production URL plus a screenshot** of it working

| Part | Time |
|---|---|
| 1. Finish your data feature | about 3 h |
| 2. Project build time | about 2 h |
| 3. Security checklist with evidence | about 1 h |
| 4. Respond to the review | about 1.5 h |
| 5. The handoff test | about 1 h |
| 6. PROMPTS.md and reflection | about 1 h |
| **Total** | **about 9.5 h** |

## Milestone 2

This week's homework is **Milestone 2** of your capstone. The row below is copied word for word from the [capstone milestones](../../projects/capstone.md#milestones):

| Milestone | Due | Deliverables | Graded as |
|---|---|---|---|
| **Milestone 2: feature complete** (end of week 7) | Before week 8 Studio A | • Your **second feature type** working, for example Supabase with row-level security, its grants and policies saved in `supabase/policies.sql`<br>• `SECURITY_CHECKLIST.md` with evidence for every ticked item<br>• **Peer review given:** your written review of a classmate's capstone, on Canvas<br>• **Response to the review you received:** what you changed (link the commits or pull request) and what you decided not to change, and why, on Canvas<br>• **Handoff test:** a classmate tried one small change using only your README and `AGENTS.md`; you fixed what confused them and noted it in `PROMPTS.md` | Week 7 homework ([weekly rubric](../../assessment/rubrics.md#weekly-labs-and-homework)); the peer review in [Reflections and peer reviews](../../assessment/rubrics.md#reflections-and-peer-reviews) |

Everything marked "on Canvas" goes there, never in a repo.

Stuck on Supabase? [Troubleshooting: Supabase](../../resources/troubleshooting.md#supabase) covers "permission denied", empty lists, and which key goes where.

## Core tier (required)

### 1. Finish your data feature (about 3 h)

🟢 AI on for building (approvals on); 🟡 AI limited for `supabase/policies.sql`: you decide the rules and can explain every line.

Your capstone needs **at least two** of the four feature types ([capstone brief](../../projects/capstone.md#feature-types-include-at-least-two)). This week is the natural moment for the database, but pick what your app needs.

**Option A — Supabase with RLS** (feature type b). Carry on from Studio A [Part 2](lab.md#part-2--connect-your-capstone-to-supabase-core-65-min):

1. List every read and write your feature needs. For each new one, update your "who may do what" table first.
2. Add the matching **grant and policy together** in `supabase/policies.sql`, re-run the whole file in the SQL Editor, and read its check query (RLS on, grants and policies as you intended). Never add a grant on its own.
3. If any row belongs to one person (notes, a profile, anything private), "anyone may read" is wrong. Use sign-in and the starter's Pattern B, with policies using `(select auth.uid()) = user_id` (see the lab's [Part 3](lab.md#part-3--per-user-rows-or-attack-from-the-console-if-time)).
4. Then build the feature with the agent, using `getDb()` from `public/lib/db.js`. Give it a loading state and a friendly error message.
5. **Test locally before you deploy:** run your check-first steps with `npm run dev`, plus one edge case (empty input, very long input, the network turned off in DevTools). Then push, and test again on the production URL.
6. Attack your own table again with the [RLS attack page](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/tools/rls-attack.html) and record the result.

> [!WARNING]
> If you or an agent hit `permission denied for table …`, the fix goes in `supabase/policies.sql`: grant **and** RLS **and** a policy, together. A bare `grant … to anon` with RLS off is how 16,326 databases ended up public.

**Option B — another feature type.** Use the matching pattern from the capstone starter's [feature patterns](../../projects/capstone-starter/README.md#feature-patterns):

- **(c) Data visualization:** the no-dependency chart helper `public/lib/chart.js`, with a tested data-prep function.
- **(d) External public API:** a server route like `api/weather.js` that calls a no-key public API, tested with a mocked `fetch`. Handle errors and timeouts.
- **(a) Server-side API call with a hidden key:** the week-5 pattern (`api/ask.js`); the key lives only in `.env` and Vercel's environment variables.

✅ **Done when:** the feature works on your production URL, your check-first test passes, and (Option A) the policies are in `supabase/policies.sql` and your own attack can't reach data it shouldn't.

### 2. Project build time (about 2 h)

Use this time to get **every chosen feature type working, at least roughly**, so week 8 can be about polish, not building.

- Write each new test **before** asking for the code it checks, in a separate prompt (check first). Keep testable logic in `public/lib/` so `npm test` can reach it.
- Merge through pull requests, as in week 6, once a change has been reviewed (by your partner, or a self-review against [CODE_REVIEW.md](../../templates/CODE_REVIEW.md)).
- Take a screenshot of the app working at its **production URL** for your Canvas submission. Vercel deletes old preview deployments, so always submit the production URL.

✅ **Done when:** each chosen feature type works on the production URL, and `npm test` passes.

### 3. Security checklist with evidence (about 1 h)

Finish [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) for your capstone. For every item, tick it **and** paste one line of evidence: a command's output, a file name, a screenshot link. Pay special attention to:

- **Section 1 (secrets):** run `npm run check:secrets` again after your last commit. It scans your whole git history, so a clean result covers old commits too.
- **Section 3 (database):** every table that grants access to `anon` or `authenticated` has RLS on and at least one policy (paste the check query's output); your own attack failed; and the one sentence saying **where authorization is enforced** ("in the RLS policies and grants on `public.messages`, in `supabase/policies.sql`", or "nowhere needed: single-user app, data stays in the browser").
- **Section 4 (XSS):** the `<img src=x onerror=alert(1)>` test showed no alert, before and after a reload.
- **Section 6 (agents):** which parts of the lethal trifecta your setup has, and what keeps it from having all three.

✅ **Done when:** every applicable box is ticked with evidence, and section 3's sentence is filled in.

### 4. Respond to the review (about 1.5 h)

**Finish your written review (about 45 min), 🔴 AI off.** Complete the review you started in Studio B, using the headings of [CODE_REVIEW.md](../../templates/CODE_REVIEW.md), including the compare table from your AI review. Submit it on Canvas, and share it with the author privately (a Canvas comment or email), never as a file or issue in their repo. Refer to people by GitHub username. It's graded with the [peer review rubric](../../assessment/rubrics.md#reflections-and-peer-reviews).

**Act on the review you received (about 45 min).** Fix the **single most important issue** your reviewer raised, in the Safe Loop. Commit with a message that names the issue, for example `Fix XSS in list rendering raised in PR review`. Then write your **response to the review** on Canvas: what you changed (link the commits or pull request) and what you decided not to change, and why. Disagreeing with a point, with your reasoning, counts. You may also reply on the pull request; that's ordinary code review.

✅ **Done when:** your review is on Canvas and shared, and your response to the review you received is on Canvas with links.

### 5. The handoff test (about 1 h)

Can someone else change your app from your docs alone? Your partner tries **one tiny change** using only your `README.md` and `AGENTS.md`, with an agent and approvals on, **without asking you anything**. You do the same for them. About 30 minutes each way.

**How your partner gets access** (nobody shares keys or `.env` files):

1. Your capstone repo is public, so your partner opens it in **their own** Codespace: on your repo's GitHub page, **Code → Codespaces → Create codespace on main**. It runs on their account and uses their Codespaces hours. They can't push to your repo, and they don't need to. Nobody has to be added to anything.
2. **Keys stay with their owners.** They never get your `.env`. If the change needs the AI feature, they put their own free key in their own `.env` in that Codespace, or they pick a change that doesn't need a key. Your `public/config.js` points their copy at your Supabase project, which is fine: the publishable key is public anyway, and RLS decides what it can do. That's part of the test.
3. **Private repo?** Add your partner under **Settings → Collaborators** for the week, and remove them when the test is done.

**The tester's job:**

1. Pick a small change (one of the Studio B change-request cards they didn't get, or "add a footer with the app's name").
2. Using only the README and `AGENTS.md`, get the app running and make the change, in 30 minutes at most.
3. Write down every place you got stuck or had to guess. Send the notes to the author in person, by chat or by email (not as an issue in their repo). Then delete the Codespace (see [Stop and delete codespaces](../../setup/codespaces.md#stop-and-delete-codespaces)).

**The author's job:** fix every gap in your `README.md` and `AGENTS.md` in one commit, for example `docs: fill gaps found in handoff test`, and add a short "Handoff test" entry to `PROMPTS.md`: what confused your tester and what you changed. Don't name your partner in the commit, the docs or `PROMPTS.md`.

> [!NOTE]
> **Working alone?** Your instructor, or a volunteer with a fresh GitHub account, does the tester's job. See the [Self-paced path](../../resources/self-paced.md).

✅ **Done when:** both tests are done, your docs commit is pushed, and the `PROMPTS.md` entry is there.

### 6. PROMPTS and reflection (about 1 h)

- **`PROMPTS.md` (15 min):** check there's a 2–3 sentence teach-back before every agent commit this week, every AI-assisted commit has an `Assisted-by: [tool]` line, and your AI-off maintenance-task entry is there.
- **Reflection (45 min), 🔴 AI off:** write it yourself and submit it on Canvas, never in your repo. Use [REFLECTION.md](../../templates/REFLECTION.md) as a starting shape. Anchor it in one concrete moment: the first time your attack worked, the moment in the maintenance task when you got stuck (or didn't), or a review comment that changed your mind.

## Stretch tier (optional)

- **Per-user rows with Supabase Auth**, if your app doesn't have them yet: sign-in (or Anonymous Sign-Ins) and policies using `(select auth.uid()) = user_id`.
- **Protect `main`.** The starter already runs `npm test` on every push (see your repo's **Actions** tab). Turn on branch protection so `main` only accepts changes through a pull request with a green test run.
- **Attack from the Console:** the lab's [Part 3](lab.md#part-3--per-user-rows-or-attack-from-the-console-if-time) second option, on your own live site.

> [!NOTE]
> Supabase free projects **pause after about a week without activity**. Open your project the day before each studio and before the Project Fair, and restore it if needed ([Troubleshooting: Supabase](../../resources/troubleshooting.md#supabase)).

## Looking ahead

Week 8 is **Ship It**: polish, accessibility, a known-issues section, a demo video and the Project Fair. **Oral walkthrough 3** is in week 8 Studio A, or by appointment during week 8 before the Project Fair: book your slot on Canvas now ([what to expect](../../assessment/oral-walkthroughs.md#what-to-expect)).

> [!IMPORTANT]
> **Minimum to keep up:** your capstone is deployed at its production URL with every chosen feature type at least roughly working, and any table it uses has RLS on, explicit grants and policies in `supabase/policies.sql`. Week 8 polishes and ships what you have; it leaves no time to build a missing feature. Behind? Tell your instructor before Studio A, and come to office hours.
