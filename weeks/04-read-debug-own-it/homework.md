# Week 4 Homework — Project 1 final

**Core:** about 3 hours, required · **Stretch:** optional · **Due:** end of week 4, before the week 5 studio (check your course calendar)

This is the finish line for **Project 1: A Tool I'd Actually Use**. It's graded with the [Project 1 rubric](../../assessment/rubrics.md#project-1), and you should be ready to explain any line of it in your [oral walkthrough](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4). The full brief is in [projects/project-1-useful-tool.md](../../projects/project-1-useful-tool.md).

Work in a Codespace on your Project 1 repository. Use the Safe Loop for every change: describe, plan, one step, test, read the diff, commit ([Safe Loop](../../resources/safe-loop.md)). Copilot's **Ask** mode and your chat assistant are 🟢 expected; don't use agent mode yet.

---

## Core (about 3 hours)

### 1. Make every MUST criterion pass (about 90 min)

1. Open your README's acceptance table and your `SPEC.md`. List the MUST criteria that don't pass yet.
2. Fix them one at a time with the Safe Loop. For each one: reproduce the failure, read the Console, form a hypothesis, then fix it yourself or with AI help, and commit (`Fix AC4: stop button saves session`).
3. If you decide to change a criterion instead of the code (because the spec was wrong or too big), change `SPEC.md`, and say why in the commit message. Moving a MUST to SHOULD is allowed if you explain it in your README's "Known issues".

✅ **Checkpoint:** every MUST criterion passes **on your GitHub Pages site**, not only in the Codespace preview. Test it on your phone too.

### 2. Finish TESTS.md (30 min)

Complete the `TESTS.md` you started in the lab ([template](../../templates/TESTS.md)):

- At least **one manual test for every acceptance criterion**, including **at least three edge-case tests** (empty, very long, duplicates, special characters, reload, small screen).
- Run every test on your live site and record the result with the date.
- Fill in **Bugs found by testing**, with the commit that fixed each one.

### 3. Finish your README (30 min)

Your README (from [templates/PROJECT_README.md](../../templates/PROJECT_README.md)) needs:

- The **live link** and a screenshot (optional but recommended).
- **How it works:** 3–6 sentences a classmate could follow, plus the table: which file does what, what is saved in localStorage and in what format (for example, "a JSON array of plants under the key `plants`"), and "Authorization: n/a, single-user app; data stays in your browser".
- **Status against the spec:** every criterion, marked ✅ passes or ⚠️ partly, with a note for anything that doesn't fully pass.
- **Known issues and next steps**, and **Credits** for anything you used from other people.

Write "How it works" yourself. You'll be asked to explain it out loud.

### 4. Complete PROMPTS.md (15 min)

Make sure `PROMPTS.md` covers weeks 3 and 4: the key prompts, what the AI got wrong, the Part 3 feature you wrote yourself (plan prompt, review prompt, which review points you accepted), and a filled-in **What I wrote or decided myself** section.

### 5. Reflection (20 min)

Create `reflections/week-4.md` using the four headings of [templates/REFLECTION.md](../../templates/REFLECTION.md). Anchor it in a concrete moment from the Debug Clinic or from writing your feature: an error message you read, a hypothesis that turned out wrong, a line you wrote by hand.

> 🔴 **Write this yourself, without AI.** 150–300 words, graded on specifics, not polish.

### 6. Tidy up

- Stop your codespaces at [github.com/codespaces](https://github.com/codespaces).
- Push everything. Check that your repository on github.com shows your latest commits.

---

## Deliverables checklist

Submit your repository link and your GitHub Pages link the way your instructor asks.

- [ ] Every MUST criterion passes on the live site
- [ ] `index.html`, `style.css` and `app.js`, with no frameworks and no build step
- [ ] `SPEC.md` up to date (criteria added for new features; changes explained)
- [ ] `TESTS.md`: a test for every criterion, at least 3 edge-case tests, results dated
- [ ] `README.md`: live link, "How it works", acceptance table, known issues, credits
- [ ] `PROMPTS.md`: weeks 3–4, including "What I wrote or decided myself"
- [ ] `reflections/week-4.md`, written without AI
- [ ] At least 6 small commits with clear messages, including at least one `git revert`
- [ ] No real personal data about other people anywhere in the app or repository
- [ ] Codespaces stopped

---

## Stretch (optional): your first automated test

**Why:** a manual test is steps a person follows. An **automated test** is code that checks your code, in a second, every time. It's also how you'll check an agent's work in weeks 6–8.

You'll move one **pure function** (a [function](../../resources/glossary.md#function) that only uses its inputs and returns a result, with no `document` and no `localStorage`) into its own file, a **[module](../../resources/glossary.md#module)**, and test it with Node's built-in test runner. A Codespace already has Node installed.

**1. Pick a pure function** from your `app.js`, or write one: a total, a count, a filter, a date calculation. Examples: `totalMinutes(sessions)`, `plantsDueToday(plants, today)`, `isValidName(text)`.

**2. Create these files** (this example uses a study log; use your own function):

```text
your-project/
├── index.html
├── style.css
├── app.js
├── package.json          (new)
├── lib/
│   └── stats.js          (new: your pure function)
└── tests/
    └── stats.test.js     (new: the tests)
```

`package.json`:

```json
{
  "name": "study-log",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "node --test"
  }
}
```

`lib/stats.js`:

```js
// Pure functions: they use only their inputs and return a result.
// No document, no localStorage, so Node can test them.

export function totalMinutes(sessions) {
  return sessions.reduce((sum, session) => sum + session.minutes, 0);
}
```

`tests/stats.test.js`:

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { totalMinutes } from "../lib/stats.js";

test("adds up the minutes of every session", () => {
  const sessions = [{ minutes: 25 }, { minutes: 50 }];
  assert.equal(totalMinutes(sessions), 75);
});

test("an empty log adds up to 0", () => {
  assert.equal(totalMinutes([]), 0);
});
```

**3. Run the tests** in the terminal:

```bash
npm test
```

You should see both tests pass (`pass 2`, `fail 0`). Now **make one fail on purpose**: change `75` to `76`, run `npm test` again, and read the output. It shows what was expected and what actually came back. Change it back. This red-then-green habit returns in week 6.

**4. Use the module in your app.** In `index.html`, change the script tag to load `app.js` as a module:

```html
<script type="module" src="app.js"></script>
```

At the top of `app.js`, import the function, and delete the old copy from `app.js`:

```js
import { totalMinutes } from "./lib/stats.js";
```

Test the app in your Codespace preview and on GitHub Pages.

> [!WARNING]
> Two things change when `app.js` becomes a module. (1) If your HTML uses `onclick="someFunction()"`, it stops working, because module functions aren't global. Switch to `addEventListener`, or ask Copilot (Ask mode) to explain how. (2) Modules don't work when you open `index.html` straight from your computer's files, only through a web server (your Codespace preview or GitHub Pages).

**5. Record it.** Add your test file to the **Automated tests** table in `TESTS.md`, and commit: `Add automated test for totalMinutes`.
