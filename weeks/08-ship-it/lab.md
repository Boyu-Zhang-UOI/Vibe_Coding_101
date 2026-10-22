# Week 8 lab — Polish, secure, record, present

> Two studios. **Studio A:** polish your capstone, write an honest known-issues section, do a final security pass and record a 2–3 minute demo video, while oral walkthrough 3 runs alongside. **Studio B:** the Project Fair, your revised AI-use rules, a course retrospective and the post-course self-assessment.
> Do the **Core** parts first. **If time** parts are optional. Work in the [Safe Loop](../../resources/safe-loop.md): check first, small step, test, read the diff, teach back, commit.

**AI-use key:** 🟢 AI on: use AI freely, in the Safe Loop · 🟡 AI limited: the AI may explain and critique, but you decide and write · 🔴 AI off: no AI tools at all, including code completions.

**What you need:** your deployed capstone and its **production URL**, the [Polish checklist](polish-checklist.md), the [Project Fair guide](project-fair.md), and a free built-in screen recorder (Part 3).

---

## Studio A — Polish, secure, record

| Time | Part | Core or If time |
|---|---|---|
| 0:35–1:35 | [Part 1 — Polish sprint](#part-1--polish-sprint-core-60-min) | Core, 60 min |
| 1:35–1:45 | Break | |
| 1:45–2:05 | [Part 2 — Final security pass](#part-2--final-security-pass-core-20-min) | Core, 20 min |
| 2:05–2:35 | [Part 3 — Record your demo video](#part-3--record-your-demo-video-core-30-min) | Core, 30 min |
| 2:35–2:50 | [Part 4 — Rehearse your Fair pitch](#part-4--rehearse-your-fair-pitch-if-time-15-min) | If time, 15 min |
| 2:50–3:00 | Checkpoint share: one polish fix you're proud of, and one known issue you chose to name | |

> [!NOTE]
> **Oral walkthrough 3 runs alongside this studio** (10 minutes, 🔴 AI off). When you're called, commit your work, close AI chat panels, take your laptop to the walkthrough table, then come back and carry on where you stopped. No slot today? Yours is by appointment during week 8, before the Project Fair ([what to expect](../../assessment/oral-walkthroughs.md#what-to-expect)).

### Part 1 — Polish sprint (Core, 60 min)

🟢 AI on for fixes. Work through the [Polish checklist](polish-checklist.md) against your **live** site. Fix the quick wins first. You won't finish every item: that's expected; the rest is homework.

#### 1.1 How to run it (5 min)

1. Open your **production URL** (not localhost) in a normal window and in a phone-sized window (your browser's device toolbar).
2. Work in this order: the **three states** (empty, loading, error) → **phone** → **title and favicon** → **accessibility** → **README and known issues**.
3. For each fix, write the "done when" check first, then prompt in the Safe Loop:

   ```text
   Goal: Show "No items yet — add one above" when the list is empty.
   Context: public/app.js renders items from an array `items` into <ul id="list">.
   Constraints: Only touch app.js and style.css. Don't change how items are added or saved.
   Done when: With an empty list I see the message; adding an item hides it; reloading keeps the right state.
   ```

   Test all three cases yourself (empty, one item, reload), read the diff (only the render function should change), write a short teach-back in `PROMPTS.md`, and commit.

#### 1.2 Accessibility (20 min)

Two of the most common misses, and their fixes:

- An image with no `alt`: add `alt="Chart of weekly totals"`, or `alt=""` if it's purely decorative.
- An input with no label: wrap it, for example `<label>Name <input id="name"></label>`, or add `aria-label="Name"`.

**The keyboard test (do this one live).** Put your mouse away. Press **Tab** through your whole app. You should be able to reach and use every button and field with Tab, Enter and Space, and always **see** where you are (a focus outline). If focus disappears, look in your CSS for `outline: none` and give focused elements a visible style instead.

> [!TIP]
> Not sure about color contrast or missing labels? Your browser's built-in accessibility panel, or its Lighthouse audit, flags both. Menus move: ask your assistant where it is in your browser. If you use a screen reader yourself, the [Accessibility guide](../../resources/accessibility.md) covers the course's tools.

#### 1.3 The three states and the phone (20 min)

Trigger each state on purpose: empty (no data), loading (throttle the network in DevTools), error (turn the network off, or submit bad input). Each should look intentional, with words that say what to do next. Then check phone width: nothing scrolls sideways, buttons are big enough to tap.

#### 1.4 README with a known-issues section (15 min)

🟡 AI limited: you decide what's true; the AI may critique your wording. Open your README (from the [README template](../../templates/PROJECT_README.md)) and fill in **Known issues and next steps**. For each issue: what doesn't work, when it happens, any workaround, and what you'd do next. For example:

```markdown
## Known issues and next steps

- **Long notes overflow on phones.** Notes over about 300 characters spill out of the card at
  phone width. Workaround: turn the phone sideways. Next: let the text wrap in `.card` (style.css).
- **Everyone shares one list.** There's no sign-in in v1.0 (out of scope in SPEC.md). Next:
  Supabase Auth with per-user policies.
- **The weather panel says "unavailable" when the public API is down.** Reload to retry.
```

Naming a real limitation **never costs points**, and the Project Fair gives credit for it. Hiding one that a grader finds does.

✅ **Checkpoint:** the three states each look intentional, the app works at phone width, the tab has a real title and favicon, you can operate the app with the keyboard alone, and your README lists at least one honest known issue. Commit after each fix.

> [!TIP]
> **A fix broke another feature?** You have a save point: `git restore [file]`, or revert the commit, and try a smaller step (the two-strikes rule). **The live site looks different from localhost?** The production URL is the one that's graded: push, wait for the deploy, and re-check.

### Part 2 — Final security pass (Core, 20 min)

🟢 AI on for explaining results. Re-run the week 7 checks so nothing regressed while you polished.

```bash
npm test
npm run check:secrets
npm audit
grep -rn "innerHTML" public/
```

`npm run check:secrets` scans your files and your whole git history, so a clean result covers old commits too. Then, on the **live** site:

- Open DevTools → **Sources** and **Network**. Confirm no secret key is visible (only the project URL and publishable key, if you use Supabase).
- Type `<img src=x onerror=alert(1)>` into every input, and reload if the app saves it. **No alert** should appear.
- If you have a database: **Database → Advisors → Security** shows no "RLS Disabled" error, and the check query at the end of `supabase/policies.sql` still matches your "who may do what" table.
- In Vercel's project settings, confirm every secret is an environment variable there, and none is in your code.

Update [SECURITY_CHECKLIST.md](../../templates/SECURITY_CHECKLIST.md) with fresh evidence and today's date.

✅ **Checkpoint:** tests pass, no secrets found (including in history), the XSS payload stays inert, and RLS (if any) is on with the grants you intended.

### Part 3 — Record your demo video (Core, 30 min)

A 2–3 minute video so people can see your app even when it isn't running.

**Free built-in recorders:**

- **macOS:** press **Shift-Cmd-5**, choose to record the whole screen or a selected portion, then **Record**. Stop from the menu bar.
- **Windows:** **Snipping Tool** (it records video), or the **Game Bar** (**Win-G**, then record).
- **ChromeOS:** the **Screen capture** tool in quick settings, set to video.
- **Any device:** a phone camera pointed at the screen is acceptable for grading.

**What to record (the story shape):**

1. **Problem** (about 15 seconds): who it's for and what it solves.
2. **Demo** (60–90 seconds): do the main task live, including your feature types and **one edge case** handled well (empty input, an error).
3. **How** (about 20 seconds): one line on how it's built and where the data and secrets live.
4. **What broke and what you learned** (about 20 seconds): one honest moment.

**Make it accessible.** Add **captions** (automatic captions are fine once you've fixed their mistakes) **or a transcript**. Writing your script first gives you the transcript for free. Put the transcript in your README under the video link, or upload it with the video.

**Can't record, or can't speak on a recording?** Any of these counts the same: a silent recording with captions or on-screen text; a short sequence of screenshots with written narration; or a live 3-minute demo to your instructor, who notes it on Canvas. Ask early; the [Accessibility guide](../../resources/accessibility.md) explains how the course handles video.

**Privacy:**

- Close `.env`, terminals and dashboards before you start. **Never show** API keys, your Vercel or Supabase dashboards, or real people's information. Use made-up data.
- Upload it as an **unlisted** video (only people with the link can watch) and put the link in your README and your Canvas submission. Rather not have your voice or face reachable from a public repo? Upload it to Canvas only and write "Demo video: submitted on Canvas" in the README.

**Tips:** rehearse once before you hit record; one clean take beats ten edited ones. If you fluff a line, keep going. Check the file plays and is under 3 minutes before you upload.

✅ **Checkpoint:** a 2–3 minute video exists, plays, has captions or a transcript, shows no secrets, and its link is in your README (or it's on Canvas).

### Part 4 — Rehearse your Fair pitch (If time, 15 min)

Pair up. Each of you gives your 60–90 second Fair pitch (problem → quick demo → one thing you're proud of → one known issue) to your partner, who fills in a [feedback card](project-fair.md#feedback-cards) and says one thing that landed and one thing to tighten. Swap.

✅ **Checkpoint:** you've said your pitch out loud once and have one concrete note to apply before the Fair.

---

## Studio B — Fair, rules, retrospective

| Time | Part | Core or If time |
|---|---|---|
| 0:00–0:10 | Set up your Fair station (this replaces show and tell) | Core |
| 0:10–1:40 | [Part 5 — Project Fair](#part-5--project-fair-core-90-min) | Core, 90 min |
| 1:40–1:55 | [Part 6 — Revise your personal AI-use rules](#part-6--revise-your-personal-ai-use-rules-core-15-min), 🔴 AI off | Core, 15 min |
| 1:55–2:10 | [Part 7 — Post-course self-assessment](#part-7--post-course-self-assessment-core-15-min), 🔴 AI off | Core, 15 min |
| 2:10–2:30 | [Part 8 — Course retrospective](#part-8--course-retrospective-core-20-min) | Core, 20 min |
| 2:30–2:45 | [Debrief: Fair awards and closing](#debrief-fair-awards-and-closing-15-min) | |
| 2:45–3:00 | [Exit ticket](../../assessment/exit-tickets.md#week-8), 🔴 AI off | |

### Part 5 — Project Fair (Core, 90 min)

The closing event: a gallery walk, so everyone presents and everyone tries each other's apps. Your instructor runs the [run sheet](project-fair.md#run-sheet). Bring to your station:

- your **live app** at its production URL, ready to hand to a visitor;
- your 60–90 second pitch, ending with **one known issue**;
- your demo video queued as a backup;
- a sign or sticky note with the app's name and its URL or QR code.

When you visit, try the app yourself, ask one question, and fill in a feedback card (🔴 AI off; a printed card or the digital form). Vote with the slips you're given, for projects other than your own. Keep the cards you receive: they're honest user feedback, and good material for your final reflection.

✅ **Checkpoint:** you presented in one round, visited in the other, and handed in your votes.

### Part 6 — Revise your personal AI-use rules (Core, 15 min)

🔴 **AI off.** In week 1 you wrote your own rules for when you use AI and when you don't. Students who write their own rules do better ([Azimi](https://arxiv.org/abs/2609.16784)), and you now have eight weeks of evidence. Open your week 1 rules on Canvas, the course's learning management system.

1. For each rule: **keep**, **change** or **drop** it, with one piece of evidence from the course (a walkthrough, the AI-off maintenance task, a bug you caught, a time you over-relied on the AI).
2. Add up to two new rules you now need (for example about agents, keys or tests).
3. Keep the final list to seven rules or fewer, each one sentence you'd actually follow.

Submit the revised list on Canvas. It stays private; it's never committed to a repo. You'll also paste it into your final reflection.

✅ **Checkpoint:** your revised rules are on Canvas, each with a keep/change/drop decision.

### Part 7 — Post-course self-assessment (Core, 15 min)

🔴 **AI off.** Complete the [post-course self-assessment](../../assessment/self-assessment.md) on Canvas. It pairs with the one you took at the start, so you can see what changed. Answer honestly: it isn't graded on the answers.

### Part 8 — Course retrospective (Core, 20 min)

Your feedback shapes the next cohort. It's anonymous and not graded.

1. **Write (5 min), on your own:** one thing to **keep**, one to **change**, one to **drop**. Use the sticky notes or the anonymous form your instructor gives you.
2. **Group (10 min):** the class sorts the notes into themes and talks through the biggest ones. Say what happened, not who.
3. **Advice to the next cohort (5 min):** one sentence you'd tell someone starting week 1. With your permission, your instructor may share these anonymously with the next cohort.

✅ **Checkpoint:** your keep/change/drop and your one sentence of advice are in.

### Debrief: Fair awards and closing (15 min)

Your instructor announces the Fair categories and closes the course. Then the last [exit ticket](../../assessment/exit-tickets.md#week-8), 🔴 AI off, graded on completion. If time runs short, your instructor may let the self-assessment stand in for it. The final submission is still to come ([homework](homework.md)).

> [!NOTE]
> **Working alone?** The Fair becomes a public demo slot your instructor arranges (a department seminar, a lab meeting or invited staff), plus three outside testers using the feedback card on made-up data; there's no voting. The retrospective becomes a short conversation with your instructor. See the [Self-paced path](../../resources/self-paced.md).

---

## Wrap up

- Commit all polish changes, the known-issues section and the updated `SECURITY_CHECKLIST.md`.
- Make sure your README has the production URL, a screenshot and the demo video link (or "submitted on Canvas").
- Finish the rest of the [Polish checklist](polish-checklist.md) and the [final submission](homework.md).
- Walkthrough 3 happens in Studio A or by appointment during week 8, before the Project Fair. Missed it for illness or another recognized reason? Tell your instructor: it's rescheduled without penalty ([what to expect](../../assessment/oral-walkthroughs.md#what-to-expect)).
