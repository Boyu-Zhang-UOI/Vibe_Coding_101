# Week 8 lab — Polish, record, present

> About 100 minutes: polish your capstone, do a final security pass, record a demo video, rehearse,
> and present at the Project Fair. Work in the [Safe Loop](../../resources/safe-loop.md): small step,
> test, read the diff, commit.

**What you need:** your deployed capstone, [polish-checklist.md](polish-checklist.md),
[project-fair.md](project-fair.md), and a free built-in screen recorder (see Part 3).

---

## Part 1 — Polish sprint (50 min)

Work through [polish-checklist.md](polish-checklist.md) against your **live** site. Fix the quick wins
first. You will not finish every item in 50 minutes — that's expected; the rest is homework.

### How to run it

1. Open your **deployed URL** (not localhost) in a normal window and in a phone-sized window (your
   browser's device toolbar).
2. Go section by section. For each fix, use the Safe Loop:

   ```text
   Goal: Show a friendly "No items yet" message when the list is empty.
   Context: Plain HTML/CSS/JS app; the list renders in public/app.js from an array called items.
   Constraints: Don't change how items are added. Keep it to app.js and style.css.
   Done when: With an empty list I see the message; adding an item hides it.
   ```

3. Prioritize in this order: the **three states** (empty/loading/error) → **phone** → **title &
   favicon** → **accessibility** → copy.

### A worked example: the empty state

Say your app renders a list and shows nothing when it's empty. A small, safe fix:

```text
Goal: Show "No items yet — add one above" when the list is empty.
Context: public/app.js renders items from an array `items` into <ul id="list">.
Constraints: Only touch app.js and style.css. Don't change how items are added or saved.
Done when: With an empty list I see the message; adding an item hides it; reloading keeps the right state.
```

Then **test all three cases** yourself (empty, one item, reload) before you commit. Read the diff:
you should see only the render function change, nothing else.

### A worked example: an accessibility fix

Two of the most common misses, and their fixes:

- An image with no `alt`: add `alt="Chart of weekly totals"` (or `alt=""` if it's purely
  decorative).
- An input with no label: wrap it, e.g. `<label>Name <input id="name"></label>`, or add
  `aria-label="Name"`.

Make one change, tab to that element to confirm it's reachable and announced, then commit.

### The keyboard test (do this one live)

Put your mouse away. Press **Tab** through your whole app. You should be able to reach and use every
button and field, and always **see** where you are (a focus outline). If focus disappears, check your
CSS for `outline: none` and give focused elements a visible style instead.

✅ **Checkpoint:** the three states each look intentional, the app works at phone width, the tab has a
real title and favicon, and you can operate the app with the keyboard alone. Commit after each fix.

> [!TIP]
> If you're not sure whether text has enough contrast, open your browser's built-in accessibility or
> "Lighthouse"/"Insights" panel and let it flag contrast and missing labels. Menus move — ask your
> assistant where the accessibility panel is in your browser.

### If you're stuck

- **Too many things to fix, not enough time:** do the checklist in order and stop when the block
  ends. Sections 1-4 matter most; the rest is homework.
- **A fix breaks another feature:** you have a save point. `git checkout <file>` (or revert the
  commit) and try a smaller step. This is the two-strikes rule.
- **The live site looks different from localhost:** you're testing the deployed URL, which is the one
  that's graded. Redeploy after committing and re-check.

---

## Part 2 — Final security pass (15 min)

Re-run the week-7 checks so nothing regressed while you polished.

```bash
npm test
npm run check:secrets
npm audit
grep -rn "innerHTML" public/
```

Then, on the **live** site:

- Open DevTools → **Sources** and **Network**. Confirm no secret key is visible (only the publishable
  key and URL, if you use Supabase).
- Type `<img src=x onerror=alert(1)>` into every input. **No alert** should appear.
- If you have a database, confirm RLS is still on (Supabase **Database → Advisors → Security** shows
  no "RLS Disabled" error).

Update [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) with fresh evidence and the date.

✅ **Checkpoint:** tests pass, no secrets found, the XSS payload is inert, and RLS (if any) is on.

---

## Part 3 — Record your demo video (20 min)

A 2-3 minute video so people can see your app even when it's not running.

### Free built-in recorders

- **macOS:** press **Shift-Cmd-5**, choose "Record Selected Portion" or the whole screen, click
  Record. Stop from the menu bar. (The Screenshot toolbar.)
- **Windows:** **Snipping Tool** (it records video), or the **Game Bar** (**Win-G** → record).
- **ChromeOS:** the **Screen capture** tool in the quick settings, set to video.
- Any OS: a phone camera pointed at the screen is an acceptable fallback for grading.

### What to record (the story shape)

1. **Problem** (15s): who it's for and what it solves.
2. **Demo** (60-90s): do the main task live. Show one edge case handled (empty input, error).
3. **How** (20s): one line on how it's built and where data/secrets live.
4. **What broke & what you learned** (20s): one honest moment.

Keep it under 3 minutes. Speak over it or add captions. Upload it (an unlisted link is fine) and put
the link in your `README.md` and your final submission.

### Tips for a clean recording

- **Rehearse once** before you hit record; a single clean take beats ten edited ones.
- **Close secret files** and terminals first — no `.env` open, no keys on screen, no personal data.
- Use **fake data** you're happy to show the world.
- If you fluff a line, keep going; small stumbles are fine and human.
- Check the file **plays** and is **under 3 minutes** before you upload.

✅ **Checkpoint:** a 2-3 minute video exists, plays, and its link is in your README.

> [!NOTE]
> No real personal data in the video: use fake data, and don't show any secret keys on screen.

---

## Part 4 — Demo rehearsal in pairs (15 min)

Pair up. Each person gives their ~2-minute talk to their partner as if at the Fair; the partner uses
a feedback card ([project-fair.md](project-fair.md#feedback-cards)) and gives one thing that landed
and one thing to tighten. Swap.

✅ **Checkpoint:** you've said your pitch out loud once and have one concrete note to apply before the
Fair.

---

## Project Fair (35 min)

Run the [Project Fair](project-fair.md): half the class presents at stations while the other half
circulates, then swap; a few spotlight demos; peer voting; feedback cards. Your instructor runs the
[run sheet](project-fair.md#run-sheet).

---

## Wrap up

- Commit all polish changes and the updated `SECURITY_CHECKLIST.md`.
- Make sure your README has the live URL and the demo video link.
- Finish the rest of [polish-checklist.md](polish-checklist.md) and the
  [final submission](homework.md) as homework.
- Schedule your [oral walkthrough 3](../../assessment/oral-walkthroughs.md#walkthrough-3-week-8) if you
  haven't.
