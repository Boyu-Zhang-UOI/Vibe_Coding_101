# Week 4 Homework — Project 1 final

**Due before next week's Studio A** (week 5; default 11:59 pm the night before) · **Core:** about 9½ hours, required · **Stretch:** optional

## Deliverables checklist

In your **public Project 1 repository**:

- [ ] Every MUST criterion passes on your GitHub Pages site (or was moved to SHOULD, with the reason in your README's "Known issues")
- [ ] `index.html`, `style.css`, `app.js` and `lib/validate.js`, with no frameworks and no build step
- [ ] `SPEC.md` up to date, including the criterion for the feature you wrote by hand
- [ ] `TESTS.md`: a manual test for every criterion, **at least 3 edge-case tests**, every result dated, and "Bugs found by testing" with the commit that fixed each one
- [ ] **One automated test file passing** with `npm test`, its output pasted in `TESTS.md`, and the tested function used in your app
- [ ] `README.md`: live link, "How it works", acceptance table, known issues, credits
- [ ] `PROMPTS.md` covering weeks 3–4: checks written first, teach-backs, the feature you wrote by hand, and "What I wrote or decided myself"
- [ ] At least 6 small commits with clear messages, including at least one `git revert`
- [ ] No real personal data about other people, and no classmates' names, anywhere in the repository

On **Canvas** (private: never in your repository):

- [ ] Your week 4 reflection, written without AI
- [ ] Your repository link and your GitHub Pages link

Also this week:

- [ ] **Oral walkthrough 1** done, in Studio B or in office hours ([What to expect](../../assessment/oral-walkthroughs.md#what-to-expect)). You can retake it once within 7 days.
- [ ] Codespaces stopped at [github.com/codespaces](https://github.com/codespaces).

## Time plan

| Task | Kind | Time |
|---|---|---|
| 1. Make every MUST criterion pass | Project time | about 3½ h |
| 2. Finish `TESTS.md` | Homework | 1¼ h |
| 3. Finish your automated test | Homework | 1¼ h |
| 4. Fix what your tests found | Project time | 1 h |
| 5. Finish your README | Homework | 45 min |
| 6. Update `SPEC.md` and `PROMPTS.md` | Journal | 45 min |
| 7. Reflection on Canvas | Journal | 45 min |
| 8. Walkthrough 1, if not done in the studio | Homework | 15 min |
| **Total** | | **about 9½ h** |

Before next week's Studio A, also do the "Before Studio A" list on the [week 5 page](../05-apis-secrets-servers/README.md) (up to 1 hour).

This is the finish line for **Project 1: A Tool I'd Actually Use**. It's graded with the [Project 1 rubric](../../assessment/rubrics.md#project-1); the full brief is the [Project 1 brief](../../projects/project-1-useful-tool.md).

Work in your Project 1 Codespace. 🟢 AI on for fixing your project: Copilot's **Ask** mode or your chat assistant. Don't use agent mode yet (week 6). Use the Safe Loop for every change: describe, plan, **check first**, one step, test, read the diff and **teach back**, commit ([The Safe Loop](../../resources/safe-loop.md)).

---

## Core

### 1. Make every MUST criterion pass (about 3½ hours)

1. Open your README's acceptance table and `SPEC.md`. List the MUST criteria that don't pass yet, plus anything [Part 4 of the lab](lab.md#part-4--the-five-bugs-in-your-own-code-15-min) found.
2. Fix them one at a time. For each one: write the check first (in `PROMPTS.md`, or as a test if the fix is in a pure function); reproduce the failure and read the Console; form a hypothesis; fix it yourself or with AI help; test in the preview; read the diff; write a two- or three-sentence teach-back for any AI-written change; commit (`Fix AC4: stop button saves session`).
3. If you decide to change a criterion instead of the code (because the spec was wrong or too big), change `SPEC.md` and say why in the commit message. Moving a MUST to SHOULD is allowed if you explain it in your README's "Known issues".

✅ **Checkpoint:** every MUST criterion passes **on your GitHub Pages site**, not only in the Codespace preview. Test it on your phone too.

### 2. Finish TESTS.md (1¼ hours)

Use the [TESTS template](../../templates/TESTS.md):

- At least **one manual test for every acceptance criterion**: numbered steps and the expected result.
- At least **three edge-case tests**, marked "(edge case)". Pick from: empty input, very long input (paste 500 characters), duplicates, special characters such as `<b>hi</b>` and emoji, reloading, a small phone screen (in DevTools, click the phone-and-tablet icon to switch on device mode).
- Run every test **on your live site** and record the result with the date.
- Fill in **Bugs found by testing**, with the commit that fixed each one. A test that failed and then passed after a fix is the best evidence you can show.

If `<b>hi</b>` shows up **bold**, your app is treating typed text as code. Ask the AI why, and fix it (the usual fix is `textContent` instead of `innerHTML`).

### 3. Finish your automated test (1¼ hours)

1. If you didn't finish them in the studio, do steps 6–7 of [lab Part 8](lab.md#part-8--your-first-automated-test-30-min): use `isValidEntry` in your app, then record the test in `TESTS.md` and commit.
2. **Write one test of your own, first.** Add a test to `tests/validate.test.js` for an input your app should handle, before you look at whether the function handles it. Ideas: an entry with accents or emoji (`"Café ☕"`), a number typed as text (`"42"`), a tab on its own (`"\t"`). Predict the result, run `npm test`, and write in `PROMPTS.md` whether you were right. If the test fails, decide yourself whether the function or the test is wrong, and say why.
3. Paste the summary lines of `npm test` (the `pass` and `fail` counts) into `TESTS.md`, and commit.

Never change a test just to make it pass. If a test seems wrong, decide, and write down why.

### 4. Fix what your tests found (1 hour)

Fix the bugs your manual and automated tests found, one commit each, with the Safe Loop. Log each one under "Bugs found by testing". Anything you can't fix goes into your README's "Known issues": an honest known issue never costs points.

### 5. Finish your README (45 min)

Your README (from the [Project README template](../../templates/PROJECT_README.md)) needs:

- The **live link** and, if you like, a screenshot.
- **How it works:** 3–6 sentences a classmate could follow, plus the table: which file does what (including `lib/validate.js` and `tests/`), what is saved in localStorage and in what format (for example, "a JSON array of plants under the key `plants`"), and "Authorization: n/a, single-user app; data stays in your browser".
- **Run it yourself:** "Open the live site. To run it in a Codespace: `python3 -m http.server 8000` and open the forwarded port. To run the tests: `npm test`."
- **Status against the spec:** every criterion, marked ✅ passes or ⚠️ partly, with a note for anything that doesn't fully pass.
- **Known issues and next steps**, and **Credits** for anything you used from other people.

Write "How it works" yourself. You'll be asked to explain it out loud.

### 6. Update SPEC.md and PROMPTS.md (45 min)

- `SPEC.md`: the criterion for your hand-written feature is there, every criterion matches the finished tool, and "Last updated" has today's date.
- `PROMPTS.md` covers weeks 3 and 4: your Goldfish tests, the key prompts, what the AI got wrong and how you noticed, the checks you wrote first, your teach-backs, the feature you wrote by hand (its check, the review prompt, which review points you accepted), and a filled-in **What I wrote or decided myself**.

### 7. Reflection on Canvas (45 min)

Use the four headings of the [reflection template](../../templates/REFLECTION.md), on Canvas. Anchor it in a concrete moment: an error message you read in the Debug Clinic, a hypothesis that turned out wrong, a line you wrote by hand, the moment a test turned red.

> 🔴 **AI off.** 150–300 words, graded on specifics, not polish ([reflection rubric](../../assessment/rubrics.md#reflections-and-peer-reviews)). It goes on Canvas, not in your repository.

### 8. Walkthrough 1 (15 min, if not done in the studio)

Book a slot in office hours this week. Before you go, read [What to expect](../../assessment/oral-walkthroughs.md#what-to-expect), commit everything, and practice explaining your save and load lines.

---

> [!IMPORTANT]
> **Minimum to keep up:** Project 1 opens in a Codespace, and `npm test` runs at least one passing test. Week 5 starts from a Node project with tests, and this week's test is the pattern for all of them.
>
> **Fallen behind?** Tell your instructor early. A [grace token](../../assessment/README.md#late-work-and-grace-tokens) can buy you time on Project 1, and you can practice the testing steps on the [rescue starter](../../projects/rescue-starters/study-timer/) before week 5.

---

## Stretch (optional)

### A. Test a second pure function

Pick another calculation from your `app.js` (a total, a count, a streak, a date calculation), move it into `lib/`, and give it at least two tests, one of them an edge case such as an empty list. Write the tests first. For example:

```js
// lib/stats.js
export function totalMinutes(sessions) {
  return sessions.reduce((sum, session) => sum + session.minutes, 0);
}
```

```js
// tests/stats.test.js
import { test } from "node:test";
import assert from "node:assert/strict";
import { totalMinutes } from "../lib/stats.js";

test("adds up the minutes of every session", () => {
  assert.equal(totalMinutes([{ minutes: 25 }, { minutes: 50 }]), 75);
});

test("an empty log adds up to 0", () => {
  assert.equal(totalMinutes([]), 0);
});
```

### B. Breakpoints

In DevTools → **Sources**, set a breakpoint in your draw function and step through it once with a real list. Write down one thing you learned about your own code.

### C. Get ahead on week 5

Skim the [week 5 overview](../05-apis-secrets-servers/README.md) and the [How the Web Works](../../resources/web-basics.md) sections on requests, APIs and the trust boundary.
