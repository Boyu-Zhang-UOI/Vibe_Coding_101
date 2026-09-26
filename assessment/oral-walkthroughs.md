# Oral Walkthroughs

> Three 10-minute conversations with the AI switched off, in weeks 4, 6 and 8. You explain your code, change it live and find a problem in it. This is where you show that you own what you shipped.

**For students:** read this whole page before walkthrough 1. The questions are published on purpose. Nothing here is a trick, and practicing with this page is exactly what we want you to do.

**For examiners:** everything you need is here: the protocol, a script, a question bank for each walkthrough, the scoring rubric, and notes on fairness, accommodations, online delivery and staffing.

## Why we do this

When AI writes most of the code, a running program no longer shows that a student understands it. Courses have moved to short conversations instead. CMU 15-113 follows each project with a TA interview styled as a mock job interview ([CMU 15-113](https://www.cs.cmu.edu/~113/)). UCSD can hold back a grade until the student walks staff through the code ([UCSD](https://ucsd-cse-115-215.github.io/sp26/index.html)). UCSD's CS1-LLM asked for a video in which students spent at least three minutes explaining one function ([Vadaparty et al.](https://arxiv.org/pdf/2406.15379)).

The walkthroughs are in weeks 4, 6 and 8 because understanding tends to drop exactly when AI agents take over. In CMU 15-113's survey data, students' self-rated understanding fell to its lowest point of the year during the agent assignments ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). So the checks get more frequent in the agent weeks, not less.

## At a glance

| | Walkthrough 1 | Walkthrough 2 | Walkthrough 3 |
|---|---|---|---|
| **When** | Week 4 studio | Week 6 studio, or before the week 7 studio | Week 8 studio, or scheduled slots that week |
| **Project** | Project 1 (your own plain HTML, CSS and JavaScript) | Capstone: the first agent-built feature | Capstone: the final app |
| **Focus** | Explain a function; find the failing line from an error; revert a commit | Explain what the agent changed; modify it live; what's in `AGENTS.md` and why | Where authorization is enforced; find a planted bug; spot a committed secret; explain a test |
| **Weight** | 5% | 5% | 5% |
| **Retake** | Once, within 7 days | Once, within 7 days | Only by arrangement |

Scores are out of 16: four areas (Explain, Modify, Debug, Process), each scored 0–4 ([scoring](#scoring)).

## The six skills you must show without AI

The walkthroughs test the six skills listed in [section 7 of the syllabus](../SYLLABUS.md#six-skills-you-must-be-able-to-show-without-ai). More practice: [resources/without-ai-skills.md](../resources/without-ai-skills.md).

| Skill | Walkthrough 1 | Walkthrough 2 | Walkthrough 3 |
|---|---|---|---|
| 1. Read an error message and find the failing line | Debug | Debug (test output) | Debug (planted bug) |
| 2. Explain any function you committed | Explain | Explain (agent's code) | Explain |
| 3. Write an acceptance criterion and a test for it | — | Modify (new check plus test) | Explain (a test) |
| 4. Revert a bad commit | Process | Process (undo an agent task) | — |
| 5. Spot a committed secret | — | — | Process (sample diff) |
| 6. Say where authorization is enforced in your app | — | — | Explain |

## Protocol

These rules apply to every walkthrough.

- **10 minutes**, one student and one examiner (an instructor or TA). Allow 10–15 minutes per slot, including scoring and changeover.
- 🔴 **AI off.** Copilot Chat closed, code completions turned off, no chat assistant tabs. The examiner can see the screen. If a suggestion pops up anyway, ignore it.
- **Allowed:** your repo, the running app, the browser and its DevTools, the terminal, git, and the [course glossary](../resources/glossary.md).
- **In person or by screen share.** The online version is [below](#online-variant).
- **The student brings a running project.** The walkthrough starts when the app is running, not when the Codespace is loading.

### Students: before you arrive

- [ ] Start your Codespace **before** your slot and run your app: `python3 -m http.server 8000` for Project 1, `npm run dev` for the capstone.
- [ ] Open the live URL in another tab.
- [ ] **Commit everything.** The examiner may change a line during the walkthrough, and a clean commit lets you undo that in one click.
- [ ] Close AI chat panels and turn off code completions. (In VS Code, the Copilot menu in the status bar can switch completions off. Menus move; ask a TA if you can't find it.)
- [ ] Have `PROMPTS.md` open, plus `AGENTS.md` (walkthrough 2) or `SECURITY_CHECKLIST.md` (walkthrough 3).
- [ ] Practice: go through this page's question bank with a classmate, taking turns as examiner.

### Examiners: before each slot

- [ ] Open the student's repo on GitHub and skim it for 1–2 minutes. Pick the function you'll ask about (using the rules in the question bank, so every student gets a comparable question).
- [ ] Walkthrough 3: pick a planted bug from the [menu](#planted-bug-menu) and one [sample diff](#sample-diffs-spot-the-secret).
- [ ] Have a blank [record sheet](#record-sheet) ready.
- [ ] Check the student's accommodations, if any.

### After each slot

- If you changed any code, **undo it together** before the student leaves: Source Control → Discard Changes (or `git restore <file>`), then check that `git status` shows nothing changed.
- Finish the record sheet within the slot: a score and a short line of evidence for each area.

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

> "That's time, thank you. One thing you did well: … One thing to practice before the next walkthrough: … [Walkthroughs 1 and 2:] If you'd like a retake, you can sign up for one within 7 days."

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

**Project:** Project 1, running in a Codespace. **Focus:** explain a function, find the failing line from an error, revert a commit.

### Run sheet

| Minute | Part | Scores |
|---|---|---|
| 0:00–1:00 | Opening script; check the app is running, the AI is off and everything is committed | — |
| 1:00–4:30 | "Show me your tool and the feature you're proudest of." Then the examiner picks a function to explain | Explain |
| 4:30–6:30 | **Examiner's break:** the student looks away while the examiner makes a one-line change. The student reloads and finds the failing line from the error | Debug |
| 6:30–7:30 | The student fixes it by hand and shows it works | Modify |
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
| "Which part did you write yourself this week? Explain it." | Points to their own feature and explains it without notes |

**Debug: the examiner's break** (pick one; all are one-line changes). Ask the student to find it from the error message first, without `git diff`. Afterwards ask, "How else could you have found it?" (Answer: `git diff` shows what changed since the last commit. Credit that under Process.)

| Break | What the student should see | Difficulty |
|---|---|---|
| Misspell a variable at one place it's used (`items` → `itmes`) | Console: `Uncaught ReferenceError: itmes is not defined` with a file and line number | Easier |
| Change an element's `id` in `index.html` so JavaScript can't find it | Console: `Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')` | Medium |
| Delete a closing bracket `)` or `}` | Console: a `SyntaxError` pointing at or near the line | Medium |
| Change the `localStorage` key name in the load function only | **No error.** The list is empty after a reload. The student must reason from the behavior | Harder; use for strong students |

A good answer: opens the Console; reads the error type and message aloud; clicks through to the file and line; explains the cause in plain words.

**Modify** (the fix counts; if it was trivial, add one of these):

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

**Project:** the capstone's first feature, built with an agent. **Focus:** explain what the agent changed, modify it live, what's in `AGENTS.md` and why.

### Run sheet

| Minute | Part | Scores |
|---|---|---|
| 0:00–1:00 | Opening script; `npm run dev` running, `npm test` passing, everything committed | — |
| 1:00–4:00 | "Show me the diff of the agent's first feature. Walk me through what it changed, file by file." | Explain |
| 4:00–7:00 | The student changes the agent's code by hand and updates the test; runs `npm test` | Modify |
| 7:00–8:30 | Read a failing test output: the student's own, or the sample below | Debug |
| 8:30–9:30 | `AGENTS.md` and the commits around agent tasks | Process |
| 9:30–10:00 | Closing script | — |

### Question bank

**Explain.** Rule for picking: start with the diff of the agent's first feature commit; if it's large, pick the main function it added in `public/lib/` or `lib/`.

| Question | A good answer includes |
|---|---|
| "Show me the commit where the agent built your first feature. What did it change in each file?" | Opens the diff in Source Control or on GitHub; names each file and the purpose of each change; separates tested logic (`public/lib/`), page behavior (`public/app.js`) and server code (`api/`, `lib/`) |
| "Why is this logic in `public/lib/` (or `lib/`) and not in `app.js`?" | So the tests can import and check it in Node without a browser; `lib/` holds code that must only run on the server |
| "Which test was written first? Did you see it fail before the feature existed? Why does that matter?" | Red, then green: a test that never failed may not be testing anything |
| "Did the agent change anything you didn't ask for? How would you know?" | Reads the whole diff, not just the summary; checks the list of changed files |
| "Explain this function the agent wrote, line by line." | As in walkthrough 1, for code they didn't type |

**Modify** (pick one sized for three minutes):

- "Change one rule this feature enforces (a limit, a default or a message) and update the test to match. Run `npm test`."
- "Add a check for one more edge case, such as empty input. First say the acceptance criterion in WHEN … THE APP SHALL … form, then write the test, then make it pass." (This covers skill 3.)
- "Rename this confusing variable everywhere it's used, then run the tests."

A good answer: types the change by hand, runs `npm test`, reads the output and fixes anything that broke.

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

**Process**

| Question | A good answer includes |
|---|---|
| "What's in your `AGENTS.md`, and why? Point to one line you added and what it prevents." | A specific line, such as "never read `.env`", "ask before adding a dependency" or "paste the `npm test` output as evidence", and the problem it prevents |
| "Show me the commits before and after your last agent task." | A save-point commit before the task, and a commit after it that they reviewed |
| "Did the agent ever say something was done, or that tests passed, when it wasn't true? How did you check?" | Ran `npm test` themselves; read the diff; tried it in the browser |
| "If the agent had deleted a file, how would you get it back?" | Discard the change in Source Control, or `git restore <file>`, or revert the agent's commit |

---

## Walkthrough 3 (week 8)

**Project:** the final capstone. **Focus:** where authorization is enforced, find a planted bug, spot a committed secret in a sample diff, explain a test.

### Run sheet

| Minute | Part | Scores |
|---|---|---|
| 0:00–1:00 | Opening script. In person: the student looks away while the examiner plants the bug. Online: see [online variant](#online-variant) | — |
| 1:00–2:30 | "Where is authorization enforced in your app? Show me." | Explain |
| 2:30–5:30 | Find the planted bug from the app's behavior, the Console, the Network tab or the tests; then fix it by hand | Debug, Modify |
| 5:30–7:00 | Spot the secret in a sample diff, and say what to do about it | Process |
| 7:00–9:30 | "Explain this test." | Explain |
| 9:30–10:00 | Closing script; discard the planted change together | — |

If the student scores differently on the two Explain questions, record the average (rounded down).

### Question bank

**Explain**

| Question | A good answer includes |
|---|---|
| "Where is authorization enforced in your app? Show me." | The exact place: a row-level security policy on a named table (shown in the SQL or dashboard), or a check in a server route. Why it can't be in the browser: anyone can change browser code. **No database or accounts?** A good answer says what anyone may do (for example, call the AI route), what protects it (input limits, the key on the server), and where authorization would go if accounts were added |
| "What stops a stranger with your publishable key from reading everyone's rows?" | Row-level security policies, and the attack they tried in week 7 that failed |
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

### Sample diffs: spot the secret

Show the student one of these (on paper or on your screen). Ask: "This is a commit from a classmate's project. Is anything wrong? If this were your repo, what would you do?" It's fine that students can read these in advance: recognizing the pattern is the skill. You can make fresh ones by changing names and values.

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
diff --git a/public/db.js b/public/db.js
--- a/public/db.js
+++ b/public/db.js
@@ -1,6 +1,7 @@
 const SUPABASE_URL = "https://demo-project.supabase.co";
-const SUPABASE_KEY = "demo-publishable-key-4d2f8a";
+// The insert kept failing, so use the service role key instead
+const SUPABASE_KEY = "demo-service-role-key-7c1e9a3b5d";
```

<details>
<summary><strong>Answer key for examiners</strong></summary>

- **Diff A: a secret in browser code.** The key is committed **and** shipped to every visitor in `public/app.js`, where anyone can read it with DevTools. What to do: revoke the key at the provider now, go back to calling your own `/api/ask` route, and keep the key only in environment variables on the server.
- **Diff B: `.env` committed.** `.env` was removed from `.gitignore`, then committed with the real key. Deleting it in a later commit isn't enough, because it stays in the history. What to do: revoke the key and create a new one, put `.env` back in `.gitignore`, stop tracking it (`git rm --cached .env`), and store the new key only in `.env` and the host's settings.
- **Diff C: no secret. This one is safe.** The key is read from the environment on the server, and `.env.example` holds only a placeholder. Credit students who also notice the friendly error for missing configuration.
- **Diff D: the wrong key in the browser.** A publishable key is designed to be public, and is safe only with row-level security switched on. A service-role key **skips** row-level security, so putting it in `public/` gives every visitor full read and write access to every table. The comment reveals the real bug: the insert failed because no policy allowed it. What to do: revoke the service-role key, switch back to the publishable key, and write the missing insert policy.

A score of 4 names the problem, where it is and who can now see it, and says **revoke first**, then fix the code.

</details>

---

## Fairness

- **Same questions, same rules.** Every student in a round gets the same run sheet and picks from the same question bank, and the examiner chooses functions, bugs and diffs by the rules on this page.
- **Calibrate before each round.** All examiners score the same practice walkthrough (a volunteer's recording, or the instructor playing a student) and compare scores until they agree on what a 2, 3 and 4 look like.
- **Evidence for every score.** One line per area on the record sheet: what the student said or did.
- **Spot checks.** The instructor sits in on a few walkthroughs by each examiner.
- **Second opinion.** A student who thinks a walkthrough went unfairly can ask for another with a different examiner (for walkthroughs 1 and 2, this is their retake).
- **No conflicts of interest.** Examiners don't assess friends, partners or housemates.
- **Recording** is optional and needs the student's consent. It is only for resolving disputes and is deleted once grades are final.

## Reducing anxiety

Oral checks can be stressful, especially for beginners. These practices help, and they don't make the check any less valid.

- **Publish everything.** This page is the question bank. Students know what's coming.
- **Practice first.** The peer explanation swaps in weeks 2–4 are practice rounds. Encourage a practice walkthrough with a classmate using this page.
- **Start with their choice.** Walkthrough 1 opens with the feature the student is proudest of.
- **The examiner keeps time.** If a task runs long, the examiner moves on; the student never has to watch the clock.
- **Partial credit is real.** "I don't know, but I'd look here" earns points, and so does an approach that's right even if it doesn't finish.
- **Low stakes and second chances.** Each walkthrough is 5%, and walkthroughs 1 and 2 can be retaken once.
- **Think aloud; silence is fine.** Students can ask for a question to be repeated or put differently.
- **End with a strength.** The closing always names one thing that went well.

## Accommodations

Follow the student's accommodation letter, and agree the details before the walkthrough.

- **Extra time:** 15–20 minutes instead of 10, or as the letter says.
- **Written first:** 10 minutes before the slot, give the student the function to explain and the sample diff. They write notes, then discuss.
- **Typed answers:** the student types their answers in a chat or document while the examiner watches. Useful for students who are Deaf or hard of hearing, have a speech disability, or experience severe anxiety.
- **Interpreters and captions:** book a sign-language interpreter if needed; turn on live captions in video calls.
- **Breaks, a quiet room, camera off:** all fine.
- **Assistive technology:** screen-reader users use their own setup, with extra time to navigate; the examiner can read code aloud if helpful.
- **Motor impairments:** use "the student directs, the examiner types" from the online variant.

## Online variant

- **Video call with screen share.** Ask the student to close other apps and notifications, then share their whole screen, so the examiner can see that AI tools are off. Camera on for the first minute to confirm identity, then optional.
- **Walkthroughs 1 and 2:** the student works in their own Codespace while sharing their screen.
- **Planted bugs and examiner's breaks:** before the slot, open the student's public repo in **your own** Codespace, start the app and make your change. During the slot, share your screen. **The student directs, the examiner types:** the student says what to open, where to look and what to change. This tests the same skill: reading the error and finding the line.
- **If the connection drops:** continue by phone while the examiner looks at the repo and live URL, or reschedule without penalty.
- **Last resort (time zones, no stable connection):** a recorded 5-minute video answering questions from this bank, with at least 3 minutes explaining one function (the CS1-LLM format, [Vadaparty et al.](https://arxiv.org/pdf/2406.15379)), followed by a short live follow-up when possible.

## Staffing and scheduling

- **Time per student:** 10–15 minutes including scoring and changeover, based on UCSD CS1-LLM's reported 10–15 minutes to grade each project walkthrough ([Vadaparty et al.](https://arxiv.org/pdf/2406.15379)).
- **For 30 students:** about **5–8 TA-hours per round**, or 15–23 hours for all three ([landscape report](../research/landscape-report-2026-09.md)).
- **In the studio:** each examiner can run about 6–8 walkthroughs in the 100-minute lab block. With three examiners, that covers most of a 30-student cohort; put the rest in office hours that week. Students keep working on the lab while they wait.
- **Timing:** walkthrough 1 during the week 4 lab; walkthrough 2 in the second half of the week 6 lab or before the week 7 studio; walkthrough 3 during the week 8 polish sprint or in slots that week, before the Project Fair.
- **Sign-up:** a sign-up sheet with 12–15 minute slots, posted a week ahead.
- **One instructor, no TAs:** spread each round over the studio and two office-hour blocks, and shorten the Process part to one question.
- **Non-credit and self-paced:** a mentor or experienced peer can run the walkthrough with this page; self-paced learners can record themselves answering the question bank.

## Record sheet

Copy one per student per walkthrough.

| Field | Entry |
|---|---|
| Walkthrough (1, 2, 3) · date | |
| Student · examiner | |
| Setup: AI off / app running / everything committed | ☐ / ☐ / ☐ |
| Accommodations used | |
| **Explain** (0–4) and evidence | |
| **Modify** (0–4) and evidence | |
| **Debug** (0–4) and evidence | |
| **Process** (0–4) and evidence | |
| Hints given (which task, which hint level) | |
| **Total** (out of 16) | |
| One strength | |
| One thing to practice | |
| Planted change discarded and `git status` clean | ☐ |
