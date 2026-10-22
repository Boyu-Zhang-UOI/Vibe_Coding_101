# Oral Walkthroughs

> Three 10-minute conversations with the AI switched off, in weeks 4, 6 and 8. You explain your code, change it live and find a problem in it. This is where you show that you own what you shipped.

**For students:** read [What to expect](#what-to-expect), then the section for your walkthrough ([1](#walkthrough-1-week-4), [2](#walkthrough-2-week-6) or [3](#walkthrough-3-week-8)). The questions are published on purpose. Nothing here is a trick, and practicing with this page is exactly what we want you to do. Most of the rest of the page is the examiners' protocol, published so you know exactly how it works.

**For examiners:** the protocol, a question bank for each walkthrough, the scoring rubric, the six-skill rules, and notes on fairness, accommodations and online delivery. The repository copy of this page also has the examiner script, staffing notes and a record sheet.

## What to expect

A walkthrough is a 10-minute conversation about your own project, with one examiner (your instructor or a TA) and the AI tools switched off. It's not a test with trick questions. It's the moment you show that you own what you shipped, and you get three of them: in weeks 4, 6 and 8.

**Before:** start your app, open your live URL, commit everything, and close AI chat panels ([checklist](#students-before-you-arrive)). During the walkthrough you can use your code, the browser and DevTools, the terminal, git and the course [glossary](../resources/glossary.md).

**During:** the examiner asks you to explain part of your code, change something by hand, and find a problem. Walkthrough 1 starts with the feature you're proudest of. Think out loud: that's how the examiner sees what you understand. Silence while you think is fine, and you can ask for a question to be repeated or put another way. If you're stuck, the examiner gives a hint, then another; after three hints they show you and move on. The examiner keeps time, so you never have to watch the clock.

**What earns points:** understanding, not vocabulary. "The thing that holds the list" is a fine way to say "array". "I don't know, but I'd check the Console" earns credit, and so does a right approach that doesn't finish. Accents, grammar and nerves are never scored.

**The questions are published.** Each walkthrough's section below lists them, with what a good answer includes. Practicing with a classmate is the best preparation.

**After:** you hear one thing you did well and one thing to practice. Walkthroughs 1 and 2 can each be retaken once within 7 days, and the better score counts. Each of the [six without-AI skills](#the-six-skills-you-must-show-without-ai) only has to be shown once, and you get several chances.

**Need something different?** Typed answers, extra time, a written-first version, breaks, camera off and your own assistive technology are all available ([accommodations](#accommodations)). Missed your slot because of illness, an official university activity or religious observance? It's rescheduled without penalty.

## Why we do this

When AI writes most of the code, a running program no longer shows that a student understands it. Courses have moved to short conversations instead. CMU 15-113 follows each project with a TA interview styled as a mock job interview ([CMU 15-113](https://www.cs.cmu.edu/~113/)). UCSD can hold back a grade until the student walks staff through the code ([UCSD](https://ucsd-cse-115-215.github.io/sp26/index.html)). UCSD's CS1-LLM asked for a video in which students spent at least three minutes explaining one function ([Vadaparty et al.](https://arxiv.org/pdf/2406.15379)).

The walkthroughs are in weeks 4, 6 and 8 because understanding tends to drop exactly when AI agents take over. In CMU 15-113's survey data, students' self-rated understanding fell to its lowest point of the year during the agent assignments ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). So the checks get more frequent in the agent weeks, not less.

**What the four scoring areas check.** Researchers now call the gap between the code you have and the code you understand **comprehension debt** ([Ahmad](https://arxiv.org/abs/2604.13277)). A 2026 review proposes four kinds of evidence that pay it down: **explain, verify, modify and account** ([Mahmoud](https://arxiv.org/abs/2609.29473)). The walkthrough's four scoring areas match them:

| Evidence | Walkthrough area | What you do |
|---|---|---|
| Explain | **Explain** | Say what the code does and how it connects to the rest of the app |
| Verify | **Debug** | Check the code against evidence: an error message, a test result, what the app actually does |
| Modify | **Modify** | Change the code by hand, and check that the change works |
| Account | **Process** | Show the record: git history, `PROMPTS.md`, `AGENTS.md`, where the secrets live |

## At a glance

| Detail | Walkthrough 1 | Walkthrough 2 | Walkthrough 3 |
|---|---|---|---|
| **When** | Week 4 Studio B, after the git revert practice, or in office hours that week | Week 6 Studio B, or by appointment before week 7 Studio A | Week 8 Studio A, or by appointment during week 8 before the Project Fair |
| **Project** | Project 1 (your own plain HTML, CSS and JavaScript) | Capstone: your first agent-built feature | Capstone: the final app |
| **Focus** | Explain a function; find the failing line from an error; fix it and make one small change; revert a commit | Explain what the agent changed; write a new acceptance criterion and its test by hand; read a failing test; spot a committed secret | Where authorization is enforced; find and fix a planted bug; spot a committed secret; explain a test |
| **Skills checked** | 1, 2, 4 | 1, 2, 3, 4, 5 | 1, 2, 5, 6 |
| **Weight** | 5% | 5% | 5% |
| **Retake** | Once, within 7 days | Once, within 7 days | No score retake; a skill follow-up if needed |

Scores are out of 16: four areas (Explain, Modify, Debug, Process), each scored 0–4 ([scoring](#scoring)).

**One timing rule.** These windows are the same everywhere in the course. All three are posted on Canvas in week 1, and sign-up slots open a week ahead. If you can't get a studio slot, you choose one of several times offered outside the studio, in person or online. It takes about 15 minutes, and counts as part of that week's homework time. Walkthroughs missed for a reason in Regulation M-1 (official university activities, your own illness, family illness or care, other compelling circumstances) or for religious observance (Regulation M-3) are rescheduled without penalty, and don't use up a retake.

**Pairs:** each partner is examined alone. In walkthrough 2 that's on the first feature you built yourself; in walkthrough 3, any part of the app can come up, but detailed questions focus on the parts your contribution statement says you built.

## The six skills you must show without AI

The six skills in [section 7 of the syllabus](../SYLLABUS.md#six-skills-you-must-be-able-to-show-without-ai) are a requirement of their own, not just part of a score. **Each must be shown at least once by the end of the course**, and showing all six is needed for a C or higher ([letter grades](README.md#letter-grades)). The walkthroughs are where they are checked. Exit tickets let you practice them, but don't count as showing them. More practice: [resources/without-ai-skills.md](../resources/without-ai-skills.md).

| Skill | Walkthrough 1 | Walkthrough 2 | Walkthrough 3 |
|---|---|---|---|
| 1. Read an error message and find the failing line | Debug (examiner's break) | Debug (test output) | Debug (planted bug) |
| 2. Explain any function you committed | Explain | Explain (the agent's code) | Explain |
| 3. Write an acceptance criterion and a test for it | — | Modify (always this task) | — |
| 4. Revert a bad commit | Process (revert) | Process (undo an agent commit) | — |
| 5. Spot a committed secret | — | Process (sample diff) | Process (sample diff) |
| 6. Say where authorization is enforced in your app | — | — | Explain |

**When a skill counts as shown:** you do it correctly with no more than one hint. The examiner marks each skill checked as "shown" or "not yet" on the record sheet and tells you at the end of the slot. Once shown, a skill stays shown.

**If a skill is still "not yet":**

1. It comes up again in the next walkthrough that checks it (see the table), or in your retake of walkthrough 1 or 2.
2. After walkthrough 3, each skill still "not yet" gets a **5-minute skill follow-up** by appointment in week 8: AI off, the same rules, a fresh example. If it's needed, there's one more follow-up before the grade deadline.
3. Skills 3 and 6 have the fewest scheduled chances, so practice them early ([skill 3](../resources/without-ai-skills.md#3-write-an-acceptance-criterion-and-a-test-for-it), [skill 6](../resources/without-ai-skills.md#6-say-where-authorization-is-enforced-in-your-app)).

Follow-ups only record the skill. They don't change a walkthrough score.

## Protocol

These rules apply to every walkthrough.

- **10 minutes**, one student and one examiner (an instructor or TA). Allow 15 minutes per slot, including scoring and changeover.
- 🔴 **AI off.** Copilot Chat closed, code completions turned off, no chat assistant tabs. The examiner can see the screen. If a suggestion pops up anyway, ignore it.
- **Allowed:** your repo, the running app, the browser and its DevTools, the terminal, git, and the [course glossary](../resources/glossary.md).
- **In person or by screen share.** The online version is [below](#online-variant).
- **The student brings a running project.** The walkthrough starts when the app is running, not when the Codespace is loading.

### Students: before you arrive

- [ ] Book your slot on Canvas (or come to the studio slot you were given).
- [ ] Start your Codespace **before** your slot and run your app: `python3 -m http.server 8000` for Project 1, `npm run dev` for the capstone.
- [ ] Open the live URL in another tab.
- [ ] **Commit everything.** The examiner may change a line during the walkthrough, and a clean commit lets you undo that in one click.
- [ ] Close AI chat panels and turn off code completions ([how](../setup/codespaces.md#turn-copilot-off-for-ai-off-activities)). Menus move; ask a TA if you can't find it.
- [ ] Have `PROMPTS.md` open, plus `AGENTS.md` (walkthrough 2) or `SECURITY_CHECKLIST.md` (walkthrough 3).
- [ ] Practice: go through your walkthrough's question bank with a classmate, taking turns as examiner.

### Examiners: before each slot (for instructors)

- [ ] Open the student's repo on GitHub and skim it for 1–2 minutes. Pick the function you'll ask about, using the rules in the question bank, so every student gets a comparable question.
- [ ] Check the student's record so far: which of the six skills are still "not yet"? Plan to include them.
- [ ] Walkthroughs 2 and 3: pick one [sample diff](#sample-diffs-spot-the-secret), a different one in walkthrough 3 from the one the student saw in walkthrough 2. Walkthrough 3: pick a planted bug from the [menu](#planted-bug-menu).
- [ ] Have a blank [record sheet](#record-sheet) ready.
- [ ] Check the student's accommodations, if any.

### After each slot (for instructors)

- If you changed any code, **undo it together** before the student leaves: Source Control → Discard Changes (or `git restore <file>`), then check that `git status` shows nothing changed.
- Finish the record sheet within the slot: a score and a short line of evidence for each area, and "shown" or "not yet" for each skill checked.

## Examiner script

Use these words, or close to them, so every student hears the same thing.

**Opening (30 seconds)**

> "Thanks for coming. This is a 10-minute conversation about your project, not a test with trick questions. I'll ask you to explain some code, change something, and find a problem. Please think out loud, because that shows me what you understand. 'I don't know' is a fine answer, and so is 'here's how I'd find out.' The AI tools stay off, but you can use your code, the browser, DevTools, the terminal and git. I'll keep an eye on the time, so you don't have to. Ready?"

**Hints.** Give hints in this order, and note each one on the record sheet. After the third hint, show the answer and move on. It's a conversation, not an interrogation.

1. A question: "Where would you look first?"
2. A tool: "What does the Console say?" / "What does the test output say?"
3. A place: "Have a look at `app.js` around line 20."

**If a student freezes:** "Take your time. What do you see on the screen right now?" If that doesn't help, switch to a different question from the bank and come back later if there's time.

**Never say "wrong."** Say "Let's check that together" or "What would happen if…?"

**Closing (30 seconds)**

> "That's time, thank you. One thing you did well: … One thing to practice before the next walkthrough: … Skills you showed today: … Still to show: … [Walkthroughs 1 and 2:] If you'd like a retake, you can sign up for one within 7 days."

Point the student to [without-ai-skills.md](../resources/without-ai-skills.md) for the skill they should practice.

## Scoring

Score each area 0–4. Total out of 16. Write one line of evidence for each score (what the student said or did).

| Score | Explain | Modify | Debug | Process |
|---|---|---|---|---|
| **4** | Accurate, in their own words, with no hints; connects the part to the rest of the app (where data comes from and goes) | Makes the change by hand, checks it (reload or `npm test`), and it works; can say why | Reads the error or test output, goes straight to the right file and line, states the cause and confirms it | Uses git confidently (commit, diff, history, revert); knows what their `PROMPTS.md`, `AGENTS.md` or security checklist says and why; handles secrets correctly |
| **3** | Accurate, with a small gap or one hint | Makes the change with one hint; it works | Finds the right place with one hint; gives a plausible cause | Does the right steps with one hint |
| **2** | Partly right; needs several hints, or reads the code aloud more than explains it | Partial change, or needs step-by-step guidance; does check it | Finds the right area with several hints; guesses at the cause | Knows what should happen but needs help doing it |
| **1** | Mostly inaccurate, or can't find the code being discussed | Can't make a working change even with hints | Doesn't use the error message; edits at random | Can't do or describe the step |
| **0** | No attempt | No attempt | No attempt | No attempt |

**"I don't know" is not zero.** "I don't know, but I'd check the Network tab" shows a real skill. Credit it in the area it belongs to.

**Grade understanding, not vocabulary.** "The thing that holds the list" is a fine way to say "array." Accents, grammar and nerves are not scored.

---

## Walkthrough 1 (week 4)

**When:** week 4 Studio B, after the git revert practice, or in office hours that week. **Project:** Project 1, running in a Codespace. **Focus:** explain a function, find the failing line from an error, fix it and make one small change, revert a commit. **Skills checked:** 1, 2 and 4.

### Run sheet

| Minute | Part | Scores |
|---|---|---|
| 0:00–1:00 | Opening script; check the app is running, the AI is off and everything is committed | — |
| 1:00–4:00 | "Show me your tool and the feature you're proudest of." Then the examiner picks a function to explain | Explain |
| 4:00–6:00 | **Examiner's break:** the student looks away while the examiner makes a one-line change. The student reloads and finds the failing line from the error | Debug |
| 6:00–7:30 | The student fixes it by hand and shows it works, then makes one small change from the Modify list | Modify |
| 7:30–9:30 | Commit a small change, then revert it; one question about `PROMPTS.md` | Process |
| 9:30–10:00 | Closing script | — |

### Question bank

**Explain** (pick one or two). Rule for picking the function: the one that **saves** data, or, if the student already explained that one, the one that **draws the list** on the page.

| Question | A good answer includes |
|---|---|
| "Walk me through what happens, step by step, when I click [the main button]." | The event listener; the function it calls; reading the input; updating the list in memory; saving to `localStorage`; redrawing the page |
| "Explain this function line by line." | What it's for; what goes in and comes out; what each line does in plain words |
| "Where is your data saved? Show me." | DevTools → Application → Local Storage; the key name; why it's turned into text (`JSON.stringify`) and back (`JSON.parse`) |
| "What happens the first time someone opens your tool, when nothing is saved yet?" | `getItem` returns `null`; the code falls back to an empty list (or the student spots that it doesn't) |
| "Show me the feature you wrote yourself this week. Explain it." | Points to the feature from their feature card and explains it without notes |

**Debug: the examiner's break** (pick one; all are one-line changes). Ask the student to find it from the error message first, without `git diff`. Afterwards ask, "How else could you have found it?" (Answer: `git diff` shows what changed since the last commit. Credit that under Process.)

| Break | What the student should see | Difficulty |
|---|---|---|
| Misspell a variable at one place it's used (`items` → `itmes`) | Console: `Uncaught ReferenceError: itmes is not defined` with a file and line number | Easier |
| Change an element's `id` in `index.html` so JavaScript can't find it | Console: `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')` | Medium |
| Delete a closing bracket `)` or `}` | Console: a `SyntaxError` pointing at or near the line | Medium |
| Change the `localStorage` key name in the load function only | **No error.** The list is empty after a reload. The student must reason from the behavior | Harder; use for strong students |

A good answer: opens the Console; reads the error type and message aloud; clicks through to the file and line; explains the cause in plain words.

**Modify.** The fix itself is often a one-character change, so **always** add one of these after it:

- "Change the empty-input message to something friendlier."
- "Stop the input from accepting more than 50 characters."
- "Show the newest entry at the top instead of the bottom."

**Process**

| Question | A good answer includes |
|---|---|
| "Change the page title, commit it with the message `Walkthrough test`, then undo that commit with a revert. Show me the history." | Commits in Source Control; reverts with `git revert HEAD` (or the equivalent); explains that a revert is a **new** commit that undoes the old one, so history is kept |
| "Show me an entry in `PROMPTS.md` where the AI got something wrong. How did you notice?" | A real example, and a check they did (ran it, read it, tested an edge case) |
| "If a change two commits ago broke everything, how would you get back?" | Find the last good commit in the history (`git log --oneline`); revert the bad commit(s) |

---

## Walkthrough 2 (week 6)

**When:** week 6 Studio B, or by appointment before week 7 Studio A. **Project:** the capstone's first feature, built with an agent. **Focus:** explain what the agent changed, write a new acceptance criterion and its test by hand, read a failing test, spot a committed secret. **Skills checked:** 1, 2, 3, 4 and 5.

### Run sheet

| Minute | Part | Scores |
|---|---|---|
| 0:00–0:45 | Opening script; `npm run dev` running, `npm test` passing, everything committed | — |
| 0:45–3:15 | "Show me the diff of the agent's first feature. Walk me through what it changed, file by file." | Explain |
| 3:15–6:15 | A new acceptance criterion and its test, written by hand; `npm test` | Modify |
| 6:15–7:30 | Read a failing test output: the student's own, or the sample below | Debug |
| 7:30–9:30 | Spot the secret in a sample diff; one question about `AGENTS.md` or undoing an agent commit | Process |
| 9:30–10:00 | Closing script | — |

### Question bank

**Explain.** Rule for picking: start with the diff of the agent's first feature commit; if it's large, pick the main function it added in `public/lib/` or `lib/`.

| Question | A good answer includes |
|---|---|
| "Show me the commit where the agent built your first feature. What did it change in each file?" | Opens the diff in Source Control or on GitHub; names each file and the purpose of each change; separates tested logic (`public/lib/`), page behavior (`public/app.js`) and server code (`api/`, `lib/`) |
| "Read me your teach-back for this commit in `PROMPTS.md`. Is it still accurate?" | The note matches the diff; the student corrects any part where the agent did something different |
| "Why is this logic in `public/lib/` (or `lib/`) and not in `app.js`?" | So the tests can import and check it in Node without a browser; `lib/` holds code that must only run on the server |
| "Which test was written first? Did you see it fail before the feature existed? Why does that matter?" | The test was written first, in its own prompt; red, then green: a test that never failed may not be testing anything |
| "Did the agent change anything you didn't ask for? How would you know?" | Reads the whole diff, not just the summary; checks the list of changed files |
| "Explain this function the agent wrote, line by line." | As in walkthrough 1, for code they didn't type |

**Modify (always this task; it is how skill 3 is checked).** "Add a check for one more edge case, such as empty input or a value just over a limit. First say the acceptance criterion in WHEN … THE APP SHALL … form. Then write the test by hand and run `npm test`: does it fail? Then make it pass." If the feature has no sensible new edge case, use a criterion from `SPEC.md` that has no test yet.

A good answer: states a checkable criterion; types the test by hand; runs `npm test` and reads the output; makes the change and runs the tests again. If the new test passes straight away, the student can say why (the code already handles it) and how they'd make it fail to prove it's testing something.

**Debug.** Either dictate a small change to the student's logic (for example, "change `500` to `5` in the length check") and ask them to run `npm test` and explain the failure, or use this sample output from Node's test runner:

```
✔ rejects empty input (0.3ms)
✖ accepts a 200-character question (0.3ms)
ℹ tests 2
ℹ pass 1
ℹ fail 1

✖ failing tests:

test at tests/validate.test.js:9:1
✖ accepts a 200-character question (0.3ms)
  AssertionError [ERR_ASSERTION]: Expected values to be strictly equal:

  false !== true

      at TestContext.<anonymous> (file:///workspaces/study-buddy/tests/validate.test.js:11:10)
```

```js
// tests/validate.test.js, lines 9–12
test("accepts a 200-character question", () => {
  const text = "a".repeat(200);
  assert.equal(validateQuestion(text).ok, true);
});
```

Ask: "Which test failed, in which file and on which line? What does `false !== true` mean here? Where would you look next? And is the code wrong, or the test?"

A good answer: the test "accepts a 200-character question" failed at `tests/validate.test.js` line 11. The function returned `false` (not OK) where the test expected `true`, so `validateQuestion` rejects a 200-character question. Next, look at the length limit in `validateQuestion`. To decide whether the code or the test is wrong, **check `SPEC.md`**: the acceptance criterion says what the limit should be. (In the sample, the code's limit was set to 20 characters while the spec says 500, so the code is wrong.)

**Process.** Always the sample diff, then one question from the table. If skill 4 is still "not yet" from walkthrough 1, use the revert question.

- **Spot the secret:** show one [sample diff](#sample-diffs-spot-the-secret). Ask: "This is a commit from a classmate's project. Is anything wrong? If this were your repo, what would you do?"

| Question | A good answer includes |
|---|---|
| "Undo the agent's last commit (or make a small test commit now and undo that). Show me the history." | `git revert <hash>` (or `git revert HEAD`); explains that the revert is a new commit, so the history is kept |
| "What's in your `AGENTS.md` Scope section? Does the file stop the agent going outside it? What does?" | Names the folders in scope; `AGENTS.md` is advice the agent can ignore; the real limits are the Codespace, approval prompts, narrowly scoped tokens, spending caps and (later) row-level security |
| "What's in your `AGENTS.md`, and why? Point to one line you added and what it prevents." | A specific line, such as "never read `.env`", "ask before adding a dependency" or "paste the `npm test` output as evidence", and the problem it prevents |
| "Did the agent ever say something was done, or that tests passed, when it wasn't true? How did you check?" | Ran `npm test` themselves; read the diff; tried it in the browser |

---

## Walkthrough 3 (week 8)

**When:** week 8 Studio A, or by appointment during week 8 before the Project Fair. **Project:** the final capstone. **Focus:** where authorization is enforced, find and fix a planted bug, spot a committed secret in a sample diff, explain a test. **Skills checked:** 1, 2, 5 and 6.

### Run sheet

| Minute | Part | Scores |
|---|---|---|
| 0:00–1:00 | Opening script. In person: the student looks away while the examiner plants the bug. Online: see [online variant](#online-variant) | — |
| 1:00–2:30 | "Where is authorization enforced in your app? Show me." | Explain |
| 2:30–5:30 | Find the planted bug from the app's behavior, the Console, the Network tab or the tests; then fix it by hand | Debug, Modify |
| 5:30–7:00 | Spot the secret in a sample diff (a different one from walkthrough 2), and say what to do about it | Process |
| 7:00–9:30 | "Explain this test." | Explain |
| 9:30–10:00 | Closing script; discard the planted change together | — |

If the student scores differently on the two Explain questions, record the average (rounded down).

### Question bank

**Explain**

| Question | A good answer includes |
|---|---|
| "Where is authorization enforced in your app? Show me." | The exact place: a row-level security policy on a named table (shown in `supabase/policies.sql` or the dashboard), or a check in a server route. Why it can't be in the browser: anyone can change browser code. **No database or accounts?** A good answer says what anyone may do (for example, call the AI route), what protects it (input limits, the key on the server), and where authorization would go if accounts were added |
| "What stops a stranger with your publishable key from reading everyone's rows?" | Row-level security policies, and the attack they tried in week 7 that failed. A strong answer adds that a table's grants and its RLS policies go together: a grant without RLS would open the table to everyone |
| "Explain this test." (Pick one from `tests/`: the one for the most important MUST criterion.) | What it checks; which acceptance criterion it covers; one change to the code that would make it fail |
| "Walk me through one request: from the click, to your server route, to the database or AI model, and back." | Each hop in order; what is sent; where the key or policy applies |

### Planted-bug menu

Pick one bug that doesn't touch the authorization code. Plant it in the student's running Codespace (in person) or your own Codespace (online). Ask the student not to use `git diff` at first; afterwards ask, "How else could you have found it?"

| Plant | Typical symptom | Difficulty |
|---|---|---|
| Flip a comparison in a `public/lib/` function (`>=` → `>`) | A test fails at a boundary value | Easier |
| Change the path in a `fetch` call (`/api/summary` → `/api/sumary`) | 404 in the Network tab; a friendly error (or none) on the page | Easier |
| Misspell a property read from data (`entry.title` → `entry.titel`) | "undefined" appears on the page | Medium |
| Swap two arguments in a function call | Wrong numbers in the chart or summary | Medium |
| Remove `await` before a `fetch` or database call | Empty data, or `[object Promise]` on the page | Harder |
| Change a column name in a database query | An error in the Console or in the Network response | Harder |

A good answer: reproduces the problem, uses the Console, Network tab or `npm test` to find the file and line, explains the cause, fixes it by hand and shows it working.

---

## Sample diffs: spot the secret

Used in walkthroughs 2 and 3. Show the student one of these (on paper or on your screen). Ask: "This is a commit from a classmate's project. Is anything wrong? If this were your repo, what would you do?" It's fine that students can read these in advance: recognizing the pattern is the skill. You can make fresh ones by changing names and values.

The values below are fake, made for practice.

**Diff A: "Add question feature"**

```diff
diff --git a/public/app.js b/public/app.js
--- a/public/app.js
+++ b/public/app.js
@@ -1,9 +1,12 @@
+const API_KEY = "demo-key-3f9a1c7e5b2d4a6f8e0c";
+
 async function askQuestion(question) {
-  const response = await fetch("/api/ask", {
+  const response = await fetch("https://llm.example.com/v1/chat/completions", {
     method: "POST",
-    headers: { "Content-Type": "application/json" },
-    body: JSON.stringify({ question }),
+    headers: {
+      "Content-Type": "application/json",
+      Authorization: `Bearer ${API_KEY}`,
+    },
+    body: JSON.stringify({ model: "example-model", messages: [{ role: "user", content: question }] }),
   });
```

**Diff B: "Fix deploy"**

```diff
diff --git a/.gitignore b/.gitignore
--- a/.gitignore
+++ b/.gitignore
@@ -1,4 +1,3 @@
-.env
 node_modules/
 .vercel/
 .DS_Store
diff --git a/.env b/.env
new file mode 100644
--- /dev/null
+++ b/.env
@@ -0,0 +1,3 @@
+LLM_BASE_URL=https://llm.example.com/v1
+LLM_API_KEY=demo-key-8b2e6d0a4c1f9e7b3a5d
+LLM_MODEL=example-model
```

**Diff C: "Handle missing configuration"**

```diff
diff --git a/api/ask.js b/api/ask.js
--- a/api/ask.js
+++ b/api/ask.js
@@ -12,6 +12,10 @@ export default {
+    const key = process.env.LLM_API_KEY;
+    if (!key) {
+      return Response.json({ error: "The server isn't set up yet. Please try later." }, { status: 500 });
+    }
diff --git a/.env.example b/.env.example
--- a/.env.example
+++ b/.env.example
@@ -1,3 +1,3 @@
 LLM_BASE_URL=
-LLM_API_KEY=
+LLM_API_KEY=paste-your-key-here
 LLM_MODEL=
```

**Diff D: "Make saving work"**

```diff
diff --git a/public/config.js b/public/config.js
--- a/public/config.js
+++ b/public/config.js
@@ -1,4 +1,5 @@
 export const SUPABASE_URL = "https://demo-project.supabase.co";
-export const SUPABASE_KEY = "demo-publishable-key-4d2f8a";
+// The insert kept failing, so use the secret key instead
+export const SUPABASE_KEY = "demo-secret-key-7c1e9a3b5d";
```

<details>
<summary><strong>Check your answers</strong></summary>

- **Diff A: a secret in browser code.** The key is committed **and** shipped to every visitor in `public/app.js`, where anyone can read it with DevTools. What to do: revoke the key at the provider now, go back to calling your own `/api/ask` route, and keep the key only in environment variables on the server.
- **Diff B: `.env` committed.** `.env` was removed from `.gitignore`, then committed with the real key. Deleting it in a later commit isn't enough, because it stays in the history. What to do: revoke the key and create a new one, put `.env` back in `.gitignore`, stop tracking it (`git rm --cached .env`), and store the new key only in `.env` and the host's settings.
- **Diff C: no secret. This one is safe.** The key is read from the environment on the server, and `.env.example` holds only a placeholder. Credit students who also notice the friendly error for missing configuration.
- **Diff D: the wrong key in the browser.** Not every key is a secret: a publishable key is designed to be public, and is safe only with row-level security switched on and policies in place. A secret key (or the older service_role key) **skips** row-level security, so putting it in `public/` gives every visitor full read and write access to every table. The comment reveals the real bug: the insert failed because no policy (or, for a new table, no grant) allowed it. What to do: revoke the secret key, switch back to the publishable key, and add the missing grant together with RLS and an insert policy in `supabase/policies.sql`.

A score of 4 names the problem, where it is and who can now see it, and says **revoke first**, then fix the code.

</details>

---

## Optional variant: short weekly code reviews

A small cohort can add short weekly code-review conversations to the three walkthroughs. A CS1 course that allowed generative AI but held weekly oral code reviews saw no change in exam scores, even though students pasted far more code; its main costs were scheduling and examiner training ([Fowles et al.](https://arxiv.org/abs/2605.21374)).

- **Format:** about 5 minutes per student, in Studio B's project-work block or office hours, AI off, on one function or commit from that week's work. Use the questions on this page.
- **Credit:** feedback only, counted as that studio's peer-explanation row ([in-class rubric](rubrics.md#in-class-work-and-participation)). The instructor announces in week 1 whether the variant is used.
- **Skills:** a skill shown in one of these conversations, under walkthrough rules (AI off, no more than one hint), counts as shown.

## Fairness

- **Same questions, same rules.** Every student in a round gets the same run sheet and picks from the same question bank, and the examiner chooses functions, bugs and diffs by the rules on this page.
- **Calibrate before each round** when there's more than one examiner: all examiners score the same practice walkthrough (a volunteer's recording, or the instructor playing a student) and compare scores until they agree on what a 2, 3 and 4 look like.
- **Evidence for every score.** One line per area on the record sheet: what the student said or did.
- **Spot checks.** With TAs, the instructor sits in on a few walkthroughs by each examiner.
- **Second opinion.** A student who thinks a walkthrough went unfairly can ask for a second opinion. With a second examiner available, that is another walkthrough with them. With a single examiner, the walkthrough is recorded (with the student's consent) and a department colleague reviews it. A second opinion does not use up a retake.
- **No conflicts of interest.** Examiners don't assess friends, partners or housemates.
- **Recording** is optional and needs the student's consent. It is only for resolving disputes, is stored where only staff can see it, and is deleted once grades are final.

## Reducing anxiety

Oral checks can be stressful, especially for beginners. These practices help, and they don't make the check any less valid.

- **Publish everything.** This page is the question bank, and [What to expect](#what-to-expect) tells students how it feels from their side.
- **Practice first.** The peer explanation swaps in weeks 2–4 are practice rounds. Encourage a practice walkthrough with a classmate using this page.
- **Start with their choice.** Walkthrough 1 opens with the feature the student is proudest of.
- **The examiner keeps time.** If a task runs long, the examiner moves on; the student never has to watch the clock.
- **Partial credit is real.** "I don't know, but I'd look here" earns points, and so does an approach that's right even if it doesn't finish.
- **Low stakes and second chances.** Each walkthrough is 5%, walkthroughs 1 and 2 can be retaken once, and each skill has several chances.
- **Think aloud; silence is fine.** Students can ask for a question to be repeated or put differently.
- **End with a strength.** The closing always names one thing that went well.

## Accommodations

Follow the student's CDAR accommodation letter, and agree the details before the walkthrough. Most of these options are open to any student who asks.

- **Extra time:** 15–20 minutes instead of 10, or as the letter says.
- **Written first:** 10 minutes before the slot, give the student the function to explain and the sample diff. They write notes, then discuss.
- **Typed answers:** the student types their answers in a chat or document while the examiner watches. Useful for students who are Deaf or hard of hearing, have a speech disability, or experience severe anxiety.
- **Interpreters and captions:** book a sign-language interpreter if needed; turn on live captions in video calls.
- **Breaks, a quiet room, camera off:** all fine.
- **Assistive technology:** screen-reader users use their own setup, with extra time to navigate; the examiner can read code aloud if helpful. See the course's [accessibility guide](../resources/accessibility.md).
- **Motor impairments:** use "the student directs, the examiner types" from the online variant.
- **Religious observance** (Regulation M-3): a slot that falls on a day the student can't attend is moved.

## Online variant

- **Video call with screen share.** Ask the student to close other apps and notifications, then share their whole screen, so the examiner can see that AI tools are off. Camera on for the first minute to confirm identity, then optional.
- **Walkthroughs 1 and 2:** the student works in their own Codespace while sharing their screen.
- **Planted bugs and examiner's breaks:** before the slot, open the student's repo in **your own** Codespace, start the app and make your change. During the slot, share your screen. **The student directs, the examiner types:** the student says what to open, where to look and what to change. This tests the same skill: reading the error and finding the line.
- **If the connection drops:** continue by phone while the examiner looks at the repo and live URL, or reschedule without penalty.
- **Last resort (time zones, no stable connection):** a recorded 5-minute video answering questions from this bank, with at least 3 minutes explaining one function (the CS1-LLM format, [Vadaparty et al.](https://arxiv.org/pdf/2406.15379)), followed by a short live follow-up when possible. Submit it on Canvas, not on a public site.

## Staffing and scheduling

- **Time per student:** 15 minutes including scoring and changeover, based on UCSD CS1-LLM's reported 10–15 minutes to grade each project walkthrough ([Vadaparty et al.](https://arxiv.org/pdf/2406.15379)). For three rounds: 45 minutes per student, so about 3.8 hours for 5 students, 7.5 for 10 and 15 for 20.
- **In the studio:** walkthroughs 1 and 2 use Studio B's project-work block (1:40–2:30), and walkthrough 3 uses Studio A's polish sprint. One examiner fits about three slots in a 50-minute block while the rest of the class works on their projects. With 5 or more students, put the rest in office hours (walkthrough 1) or booked slots before the deadline in the [timing rule](#at-a-glance).
- **Don't examine during the risky moments.** A lone instructor should hold slots only while students do project work, never during a first agent run or the first hand-written code. With a TA, one person examines while the other circulates.
- **Week 1:** post all three walkthrough windows on Canvas, and open sign-up sheets with 15-minute slots a week before each round.
- **Slots outside the studio.** Regulation O-9-c treats required meetings outside the class schedule as needing provost approval, at least two weeks' notice and an alternative for students with conflicts. So offer every student a choice of several times (including online), keep the studio slots for those who want them, and ask your department whether booked slots need approval. With a TA, most slots fit inside studio time.
- **Skill follow-ups:** reserve one 30-minute office-hour block in week 8, after walkthrough 3, for 5-minute skill follow-ups, plus one more before the grade deadline.
- **One instructor, no TAs:** spread each round over the studio block and two office-hour blocks, and shorten the Process part to the required question.
- **Non-credit and self-paced:** a mentor or experienced peer can run the walkthrough with this page; self-paced learners can record themselves answering the question bank.

## Record sheet

Copy one per student per walkthrough, and keep it where only staff can see it (for example, as a Canvas rubric comment).

| Field | Entry |
|---|---|
| Walkthrough (1, 2, 3, retake, follow-up) · date | |
| Student · examiner | |
| Setup: AI off / app running / everything committed | ☐ / ☐ / ☐ |
| Accommodations used | |
| **Explain** (0–4) and evidence | |
| **Modify** (0–4) and evidence | |
| **Debug** (0–4) and evidence | |
| **Process** (0–4) and evidence | |
| Hints given (which task, which hint level) | |
| **Total** (out of 16) | |
| Skill 1 · read an error, find the line | shown ☐ · not yet ☐ · not checked ☐ |
| Skill 2 · explain a function | shown ☐ · not yet ☐ · not checked ☐ |
| Skill 3 · write a criterion and a test | shown ☐ · not yet ☐ · not checked ☐ |
| Skill 4 · revert a bad commit | shown ☐ · not yet ☐ · not checked ☐ |
| Skill 5 · spot a committed secret | shown ☐ · not yet ☐ · not checked ☐ |
| Skill 6 · say where authorization is enforced | shown ☐ · not yet ☐ · not checked ☐ |
| One strength | |
| One thing to practice | |
| Planted change discarded and `git status` clean | ☐ |
