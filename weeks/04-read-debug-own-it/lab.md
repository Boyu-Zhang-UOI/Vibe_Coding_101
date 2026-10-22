# Week 4 Lab — Read It, Debug It, Own It

**AI-use key:** 🟢 AI on: use AI freely · 🟡 AI limited: the AI may comment or hint, but the work is yours · 🔴 AI off: close the AI tabs and work alone.

In **Studio A** you read your own Project 1 code, then find and fix five planted bugs in someone else's app with the AI switched off: the **Debug Clinic**. In **Studio B** you practice the git commands your oral walkthrough asks for, write a small feature yourself, and write your first automated test.

**You need:** your Project 1 repository from week 3, a partner for the Debug Clinic, and a GitHub account with Copilot switched on ([accounts](../../setup/accounts.md)).

Using a screen reader or only a keyboard? See the [screen reader and keyboard guide](../../resources/accessibility.md). Working alone? The pair activity has a **Working alone?** line.

---

## Studio A — Read and debug

| Time | Part | AI use | Core or if time |
|---|---|---|---|
| 0:00–0:35 | Recap, concept talk and live demo | — | |
| 0:35–0:50 | [Part 1 — Map your own app](#part-1--map-your-own-app-15-min) | 🔴 AI off | Core |
| 0:50–1:50 | [Part 2 — Debug Clinic](#part-2--debug-clinic-60-min) | 🔴 AI off (🟡 tutor mode after 10 minutes stuck) | Core |
| 1:50–2:00 | Break | | |
| 2:00–2:25 | [Part 3 — Debug Clinic debrief](#part-3--debug-clinic-debrief-25-min) | — | Core |
| 2:25–2:40 | [Part 4 — The five bugs in your own code](#part-4--the-five-bugs-in-your-own-code-15-min) | 🔴 AI off | Core |
| 2:40–2:50 | [Part 5 — Bonus bug or breakpoints](#part-5--bonus-bug-or-breakpoints-10-min) | 🔴 AI off | If time |
| 2:50–3:00 | Checkpoint share: one bug claim, read aloud | | |

### Part 1 — Map your own app (15 min)

🔴 **AI off.** This is practice for walkthrough 1, which asks the same questions. It isn't graded.

**Why:** you can't debug what you can't find. Every app in this course has the same five parts; today you find them in your own files.

1. **Open your Project 1 Codespace.** Go to [github.com/codespaces](https://github.com/codespaces) and open the one for your Project 1 repository (or, on the repository page, **Code** → **Codespaces** → **Create codespace on main**).
2. **Start the preview.** In the terminal: `python3 -m http.server 8000`, then **Open in Browser**. In the new tab, open **[DevTools](../../resources/glossary.md#devtools)** (F12, or Ctrl+Shift+I; Cmd+Option+I on a Mac), click **Console**, reload, and note anything red or yellow.
3. **Fill in this map** in your notes. Use **Ctrl+F** (Cmd+F) in the editor to search a file.

| Part | Find it | Write down |
|---|---|---|
| **Structure** | An element in `index.html` with an `id` that `app.js` uses | The id, and the line in each file |
| **Style** | One rule in `style.css` | What it changes on the screen |
| **Behavior** | One `addEventListener` in `app.js` | Which element, which event, and which function runs |
| **State** | The variable that holds your list of items | Its name, and one line that changes it |
| **Storage** | `localStorage.setItem` and `localStorage.getItem` | The key name, the line that saves and the line that loads |

4. **See your saved data.** In DevTools, open **Application** (Chrome, Edge) or **Storage** (Firefox, Safari) → **Local Storage** → your site. Find your key and look at the saved text.

✅ **Checkpoint:** you can point at the line that saves your data and the line that loads it, and explain each in one sentence.

### Part 2 — Debug Clinic (60 min)

🔴 **AI off.** 🟡 Tutor mode only after 10 minutes stuck on one bug and three hint cards.

> [!NOTE]
> **Feeling stuck without the AI is normal, and it's the point.** The bounty points are for fun and don't count toward your grade; taking part does. Fixing bugs 1–3 is a good result, and the 10-minute rule means nobody stays stuck for long.

**Why:** in Anthropic's study, debugging was where people who learned with AI fell furthest behind ([Anthropic, 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)). The only way to build the skill is to practice without the AI doing it for you.

The kit is a small **Reading Log** app with **five planted bugs** that reveal themselves one after another. Each can be fixed by changing one or two lines.

#### Set up (10 min)

1. **Pair up.** The **driver** types. The **navigator** reads the code, asks "why?", and keeps the notes. Swap after every bug.
2. **The driver copies the kit into a new, empty repository** named `debug-clinic`, following [Start a project from a starter](../../setup/codespaces.md#start-a-project-from-a-starter). The starter is the **Debug Clinic** (your instructor's template may be called `vc101-debug-clinic`; the folder in the course repository is `weeks/04-read-debug-own-it/debug-clinic/`). Then open a **new** Codespace on that repository.

   > [!WARNING]
   > Never run the copy command in your Project 1 Codespace. It overwrites files with the same names, such as `index.html` and `app.js`. Check the repository name at the top of the Codespace window first.

3. **Check that the AI is off.** The kit includes a settings file (`.vscode/settings.json`) that switches off Copilot in this workspace. To check, open `app.js`, go to an empty line, and type `function`. No grey "ghost text" should appear. If it does, follow [Turn Copilot off for AI-off activities](../../setup/codespaces.md#turn-copilot-off-for-ai-off-activities). Don't open the Chat view.
4. **Run the app** as in Part 1 (`python3 -m http.server 8000` → **Open in Browser**) and open the Console.
5. **Read the rules.** Open the kit's `README.md` from the Explorer (right-click it → **Open Preview**) and read the rules, the scoring and the **five bug reports**.

✅ **Checkpoint:** the Reading Log is open in a browser tab and says "Loading your books…", the Console shows a red error, and no AI suggestions appear in the editor.

#### Hunt (50 min)

Work through the bug reports **in order**, using the debugging method for every bug:

| Step | Ask yourselves |
|---|---|
| **Reproduce** | Can we make it happen on purpose, following the report's steps? |
| **Isolate** | What does the Console say? Which file, which line, which function? |
| **Hypothesize** | "We think ___ is wrong, because ___." Say it out loud before touching the code |
| **Test** | Can we check that idea first? Type a variable name in the Console, or add a temporary `console.log(...)` |
| **Fix** | What's the smallest change that fixes the *cause*? |
| **Verify** | Repeat the report's steps. Are the earlier bugs still fixed? |

After each fix:

1. Write the claim in `BUGS.md` (the format is in the kit's README).
2. **Commit your fix.** In **Source Control**, type a message such as `Fix bug 2: wrong id for the book list`, click **Commit** (choose **Yes** if it asks to stage all changes), then click **Sync Changes** to push it.

**Stuck? The 10-minute rule:**

1. Ten minutes on the same bug with no progress → read **one** hint from the kit's `hint-cards.md` (or ask your instructor for the printed card).
2. Still stuck after hint 3 → 🟡 **tutor mode**. Open your chat assistant in a new browser tab, paste the prompt from [tutor mode](../../instructor/course-tutor.md), then describe the bug report, what you've tried, the exact error message, and the function you're looking at. The tutor gives hints, not fixes. Note it in `BUGS.md`.

> [!IMPORTANT]
> Don't paste the whole app into a normal AI chat and ask it to fix it. That skips exactly the practice this lab exists for, and a claim only counts if you can explain the cause in your own words.

✅ **Checkpoint:** at least bugs 1–3 are fixed, claimed in `BUGS.md` and committed. Bugs 4 and 5 are great if you get there. The debrief goes through all five.

When time is called, finish your sentence in `BUGS.md`, commit, and click **Sync Changes**.

**Working alone?** Be your own navigator: before you change any code, say each step of the method out loud, or type it into `BUGS.md`. Explaining to a rubber duck works better than it sounds.

**Take your 10-minute break now.**

### Part 3 — Debug Clinic debrief (25 min)

Your instructor goes through the five bugs one by one. For each, a pair narrates **reproduce → isolate → hypothesize → test → fix → verify**, the class sees the one-line fix, and someone shares a wrong fix they tried and why it didn't work.

Your job: compare each cause with yours. Under each claim in `BUGS.md`, add one line: **"Next time I'd check first: …"**. Then commit, **Sync Changes**, and stop the clinic Codespace ([stop and delete codespaces](../../setup/codespaces.md#stop-and-delete-codespaces)). You won't need it again.

### Part 4 — The five bugs in your own code (15 min)

🔴 **AI off** for the checking. Fixing anything you find can wait for Studio B or homework, where AI is allowed.

**Why:** the clinic's bugs are the most common bugs in beginner apps, AI-written or not. Now look for them in your Project 1.

| Clinic bug | Check your Project 1 |
|---|---|
| 1. A missing comma stopped the whole script | Reload with the Console open. Is it free of red errors? |
| 2. An id that didn't match the HTML | For every `getElementById("…")` in `app.js`, search `index.html` for that exact id |
| 3. Text added to a number (`40 + "5"`) | Does your app read a number from an input box? Is it converted with `Number(...)` before any arithmetic? |
| 4. A position on screen used as a position in the data | If your list is ever filtered or sorted, delete the top item in that view. Did the right one go? |
| 5. Saving without `JSON.stringify` | Does every `setItem` save `JSON.stringify(...)`, and every `getItem` go through `JSON.parse(...)`? |

Write down anything you find, with the steps to reproduce it. It goes into `TESTS.md` under "Bugs found by testing" for homework.

✅ **Checkpoint:** you've checked all five, and written down what you found. "Nothing found, here's how I checked" is a good result.

### Part 5 — Bonus bug or breakpoints (10 min)

**If time.** Pick one:

- **Bonus bug.** Ask your instructor for an extra planted bug for the clinic app.
- **Breakpoints.** In DevTools → **Sources**, open your `app.js`, click a line number to set a **[breakpoint](../../resources/glossary.md#breakpoint)** (a place where the code pauses), and use the app. Step through with the arrow buttons and hover over variables.
- **Explain a function.** Explain one function of your Project 1 to your partner, line by line. Anything you can't explain goes on your homework list.

### Checkpoint share (10 min)

Each pair reads one `BUGS.md` claim aloud: the error message, the line, and the cause in one sentence.

**Before you leave Studio A:**

- [ ] The `debug-clinic` repository is pushed, and its Codespace is stopped.
- [ ] Your Project 1 notes have your app map and anything Part 4 found.
- [ ] Your Project 1 Codespace is stopped too ([github.com/codespaces](https://github.com/codespaces)).

---

## Studio B — Own it

| Time | Part | AI use | Core or if time |
|---|---|---|---|
| 0:00–0:10 | Show and tell: two Project 1s | — | |
| 0:10–0:30 | [Part 6 — Git log, diff and revert](#part-6--git-log-diff-and-revert-20-min) | 🔴 AI off | Core |
| 0:30–1:00 | [Part 7 — You write it: feature cards](#part-7--you-write-it-feature-cards-30-min) | 🟡 AI limited | Core |
| 1:00–1:10 | Break | | |
| 1:10–1:40 | [Part 8 — Your first automated test](#part-8--your-first-automated-test-30-min) | 🟡 AI limited | Core |
| 1:40–2:30 | [Part 9 — Project work time and walkthroughs](#part-9--project-work-time-and-walkthroughs-50-min) | 🟢 AI on (Ask mode) · 🔴 AI off in your walkthrough | Core |
| 2:30–2:45 | Debrief | | |
| 2:45–3:00 | Exit ticket ([week 4](../../assessment/exit-tickets.md#week-4)), graded on completion, not correctness | 🔴 AI off | |

> [!NOTE]
> **Oral walkthrough 1** slots start after Part 6, once everyone has practiced `git revert`. If your instructor has a TA, slots run during Parts 7–9: go when you're called, then catch up in project time. Otherwise they run during Part 9, and the rest are by appointment this week. What happens: [What to expect](../../assessment/oral-walkthroughs.md#what-to-expect).

Open your Project 1 Codespace and start the preview (`python3 -m http.server 8000`). If you switched AI features off for the clinic, switch them back on now: untick **Chat: Disable AI Features** in Settings.

### Part 6 — Git log, diff and revert (20 min)

🔴 **AI off.** These are the commands walkthrough 1 asks for.

**Why:** your history is a debugging tool. It tells you what changed, when and why, and it lets you undo a change without losing anything. More: [Git Cheat Sheet](../../resources/git-cheatsheet.md).

Commit anything you want to keep first, so the practice starts clean. Keep the web server running: click the **+** icon in the terminal panel to open a second terminal, and type these there.

1. **See your history,** newest first. Each line starts with a short commit id:

   ```bash
   git log --oneline
   ```

   If the list fills the screen and won't go away, press `q`.

2. **See what your latest commit changed** (red lines removed, green lines added; `q` to get back):

   ```bash
   git show HEAD
   ```

3. **See what you've changed but not committed.** In `index.html`, change the text inside `<title>…</title>` and save. Then:

   ```bash
   git diff
   ```

   That's your change, before any commit. In a walkthrough, `git diff` is a second way to find a line someone changed. Now throw the change away:

   ```bash
   git restore index.html
   ```

   `git restore` discards uncommitted changes to a file git already tracks. There's no undo, so use it only on changes you don't want. Run `git diff` again: nothing.

4. **Make a bad commit on purpose.** Add this line at the very end of `style.css` and save:

   ```css
   body { display: none; }
   ```

   Then commit it:

   ```bash
   git add style.css
   git commit -m "Hide everything (bad commit on purpose)"
   ```

   Reload the preview: the page is blank, and the Console has no error. (Blank page, clean Console? Suspect CSS.)

5. **Undo it with a [revert](../../resources/glossary.md#revert).** A revert makes a *new* commit that undoes an old one, so your history stays honest:

   ```bash
   git revert HEAD --no-edit
   ```

   (`--no-edit` accepts git's ready-made message, "Revert …". Without it, git opens an editor for the message.)

6. **Check and push.** Reload the preview: the page is back. Then:

   ```bash
   git log --oneline
   git push
   ```

> [!WARNING]
> In this course, never use `git reset --hard` or `git push --force` to undo work. They delete history, and they're the commands agents have used to destroy work. `git revert` is always safe.

**Think about it:** to undo a commit further down the list, you'd use `git revert [its commit id]`. That's the answer to "a change two commits ago broke everything".

✅ **Checkpoint:** `git log --oneline` shows your bad commit followed by a "Revert …" commit, your app looks normal, and `git push` has finished.

### Part 7 — You write it: feature cards (30 min)

🟡 **AI limited.** You write every line. Copilot's **Ask** mode may review your change and answer questions; it doesn't write code, and inline suggestions stay off.

**Why:** in CMU's AI coding course, understanding peaked on the assignment where students partly wrote the code themselves ([CMU 15-113](https://www.cs.cmu.edu/~113/bestPractices.html)). Each card below gives you the plan and a skeleton with blanks (`______`). You fill the blanks from your own app. This is the "feature you wrote yourself" that the Project 1 brief asks for.

1. **Switch inline suggestions off** in this workspace (chat stays on): Command Palette (Ctrl+Shift+P, or Cmd+Shift+P) → **Preferences: Open Workspace Settings** → search `inline suggest` → untick **Editor › Inline Suggest: Enabled**. Menus move: if this doesn't match, ask your instructor.
2. **Pick one card** (below). Add its criterion to your `SPEC.md` as your next AC number.
3. **Check first.** In `PROMPTS.md`, start an entry, "Feature I wrote by hand: [card]", and write the check: what you'll do and what you expect to see. Do this before writing code.
4. **Find your three names** in `app.js`, and write them down:
   - your **list variable**: the array your items are kept in (it's what goes inside `JSON.stringify(...)`);
   - your **draw function**: the function that empties the list on the page and adds every item again (look for a loop, `forEach` or `for`, that creates elements);
   - your **storage key**: the first text inside `localStorage.setItem("…", …)`.
5. **Fill in the blanks** (12 min). Type it yourself, don't paste. Save, reload the preview, run your check. If something breaks, read the Console first.
6. **Ask for a review.** In **Source Control**, click your changed file to see the **[diff](../../resources/glossary.md#diff)**. Open Copilot Chat, choose **Ask** in the mode picker at the bottom of the chat box, and send:

   ```text
   Goal: Review the change I just wrote by hand, before I commit it.
   Context: #changes. I added [the feature]. The acceptance criterion is: [paste it].
   Constraints: Don't rewrite my code. List up to 5 issues, most important first: bugs, edge cases I missed (empty list, reload, very long text), and anything confusing. For each, point to the line and explain why in one sentence. If nothing important is wrong, say "looks good".
   Done when: I know what to fix and why.
   ```

   If `#changes` isn't offered, select your new lines in the editor and ask about "the selected code".
7. **Fix what you agree with, yourself.** You may disagree with the review; write down why.
8. **Commit and push.** For example `Add item count (AC9), written by hand`. If you changed something because of Copilot's review, add `Assisted-by: GitHub Copilot` as a second paragraph. In `PROMPTS.md`, finish the entry: the review prompt, which points you accepted or rejected, and which lines you wrote.

✅ **Checkpoint:** the new criterion passes in your preview, the commit is on GitHub, and `PROMPTS.md` says which lines you wrote.

#### Card A — Show a count

**Criterion:** WHEN the list changes, THE APP SHALL show how many items there are above the list, for example "3 plants" (and "1 plant" for one).

**Plan:** (1) add an empty paragraph with an id above the list; (2) write a function that puts the count in it; (3) call that function on the last line of your draw function, so the count changes whenever the list does.

```html
<p id="item-count"></p>
```

```js
function showCount() {
  const countLine = document.getElementById("______"); // the id you gave the <p>
  const n = ______.length;                             // your list variable
  const word = n === 1 ? "______" : "______";          // for example "plant" : "plants"
  countLine.textContent = n + " " + word;
}
```

Then add `showCount();` as the last line inside your draw function.

**Check:** add two items → "2 plants"; delete one → "1 plant"; reload → still "1 plant"; delete the last one → "0 plants".

#### Card B — A friendly empty list

**Criterion:** WHEN there are no items, THE APP SHALL show "Nothing here yet. Add your first one above." and SHALL hide that message once an item is added.

**Plan:** (1) add an empty paragraph with an id near the list; (2) write a function that checks whether your list is empty and sets or clears the message; (3) call it on the last line of your draw function.

```html
<p id="empty-message"></p>
```

```js
function showEmptyMessage() {
  const message = document.getElementById("______");
  if (______.length === ______) {     // your list variable, and the length of an empty list
    message.textContent = "______";   // the text from your criterion
  } else {
    message.textContent = "";
  }
}
```

Then add `showEmptyMessage();` as the last line inside your draw function.

**Check:** clear your saved data (DevTools → **Application** → **Local Storage** → right-click your site → **Clear**) and reload → the message shows; add an item → it disappears; delete the last item → it's back; reload → still right.

#### Card C — Clear all, with a confirm

**Criterion:** WHEN I press **Clear all** and confirm, THE APP SHALL remove every item, and the list SHALL still be empty after a reload; WHEN I press Cancel, THE APP SHALL change nothing.

**Plan:** (1) add a button with an id; (2) find the button in `app.js` and listen for its click; (3) ask for confirmation, and stop if the user cancels; (4) empty your list, save it, and draw it again.

```html
<button id="clear-all" type="button">Clear all</button>
```

```js
const clearButton = document.getElementById("______");
clearButton.addEventListener("______", () => {        // which event?
  if (!confirm("______")) {                            // the question to ask
    return;                                            // Cancel pressed: change nothing
  }
  ______ = [];                                         // empty your list variable
  localStorage.setItem("______", JSON.stringify(______)); // your key, your list
  ______();                                            // your draw function
});
```

Put this near your other `addEventListener` lines.

**Check:** add three items → Clear all → Cancel → all three still there; Clear all → OK → empty; reload → still empty.

> [!TIP]
> `TypeError: Assignment to constant variable`? Your list is declared with `const`. Change that one word to `let`, and say why in your commit message. If your app already has a function that saves, call it instead of writing the `setItem` line.

**If time:** make your own card. Pick another small feature from your spec (a SHOULD story, or a MUST that's still failing). Ask Copilot in **Ask** mode for a plan in 3–5 plain-English steps, **with no code**, then write it yourself the same way.

### Part 8 — Your first automated test (30 min)

🟡 **AI limited.** The code is given below. Copilot's Ask mode may explain the test output; it doesn't write tests or code for you.

**Why:** a manual test is steps a person follows. An **[automated test](../../resources/glossary.md#test-manual-and-automated)** is code that checks your code, in a second, every time you run it. It's how you'll check an agent's work in weeks 6–8, and every project from week 5 has them. You write the test **first**, before the code it checks, so the test can't be bent to fit the code ([check first](../../resources/safe-loop.md#check-first)).

You'll take one check out of your app, the "is this input OK?" check behind your empty-input criterion, and make it a **[pure function](../../resources/glossary.md#pure-function)**: one that uses only its input and returns an answer, with no `document` and no `localStorage`. Node, which is already installed in your Codespace, can then run it without a browser. You'll add three files:

| File | What it holds |
|---|---|
| `package.json` | Tells Node the project uses modules, and what `npm test` should run |
| `tests/validate.test.js` | The tests, written first |
| `lib/validate.js` | The pure function the tests check, in its own file (a **[module](../../resources/glossary.md#module)**) |

**1. Create `package.json`** in the top folder of your repository (Explorer → **New File**). Change `plant-tracker` to your repository's name (lowercase, hyphens):

```json
{
  "name": "plant-tracker",
  "private": true,
  "type": "module",
  "scripts": {
    "test": "node --test"
  }
}
```

**2. Write the tests first.** Create a new file and type `tests/validate.test.js` as its name (that makes the folder too). Copy this in, then read each test: its name says what should be true, and `assert.equal(actual, expected)` checks it.

```js
import { test } from "node:test";
import assert from "node:assert/strict";
import { isValidEntry } from "../lib/validate.js";

test("a normal entry is valid", () => {
  assert.equal(isValidEntry("Basil"), true);
});

test("an empty box is not valid", () => {
  assert.equal(isValidEntry(""), false);
});

test("only spaces is not valid", () => {
  assert.equal(isValidEntry("   "), false);
});

test("exactly 100 characters is allowed", () => {
  assert.equal(isValidEntry("a".repeat(100)), true);
});

test("101 characters is too long", () => {
  assert.equal(isValidEntry("a".repeat(101)), false);
});
```

If your spec has its own length limit, use it in the last two tests (and their names).

**3. Run them and see red.** In your second terminal:

```bash
npm test
```

It fails, with a message that it **cannot find the module** `lib/validate.js`, and `fail 1` at the bottom. That's correct: the check exists and the code doesn't yet.

**4. Write the function and see green.** Find the line in your `app.js` that checks the typed text before adding it (it often uses `.trim()` or `=== ""`). Create `lib/validate.js` with that check as a pure function:

```js
// A pure function: it uses only its input and returns an answer.
// No document, no localStorage, so Node can test it.

export function isValidEntry(text) {
  const trimmed = text.trim();
  return trimmed.length > 0 && trimmed.length <= 100;
}
```

Run `npm test` again. You should see five passing tests (✔), `pass 5` and `fail 0`.

**5. Break it on purpose.** In `lib/validate.js`, change `<= 100` to `< 100` and run `npm test`. Read the output: which test failed, what it expected, and what came back. That's the kind of boundary bug from the clinic, caught in a second. Change it back and run the tests again: green.

✅ **Checkpoint:** `npm test` shows five passing tests, and you've watched one fail on purpose and pass again.

Steps 6 and 7 are the first job in project time (Part 9), or homework.

**6. Use the function in your app.** In `index.html`, change your script tag so `app.js` loads as a module:

```html
<script type="module" src="app.js"></script>
```

Add this as the first line of `app.js`:

```js
import { isValidEntry } from "./lib/validate.js";
```

Then replace your old check with the function, keeping your own message from `SPEC.md`:

```js
if (!isValidEntry(input.value)) {
  message.textContent = "[your empty-input message]";
  return;
}
```

(`input` and `message` stand for your own names.) Reload the preview and try an empty box, a box of spaces and a 101-character entry. Check the Console.

> [!WARNING]
> Three things change when `app.js` becomes a module. (1) `onclick="someFunction()"` in your HTML stops working, because module functions aren't global: switch to `addEventListener`, or ask Copilot (Ask mode) to explain how. (2) You can't type your variable names into the Console any more; use `console.log` instead. (3) Modules only work through a web server (your preview or GitHub Pages), not by opening `index.html` from your computer's files.

**7. Record and commit.** Add the test file to the **Automated tests** table in `TESTS.md` (create it from the [TESTS template](../../templates/TESTS.md) if you haven't yet), paste the last lines of the `npm test` output under it, and commit: `Add isValidEntry with tests (AC2)`.

### Part 9 — Project work time and walkthroughs (50 min)

🟢 **AI on**, with Copilot in **Ask** mode or your chat assistant. No agent mode yet. 🔴 AI off in your walkthrough.

In this order:

1. Finish Part 8 steps 6–7, if you haven't.
2. Fix anything Part 4 found, then the MUST criteria that still fail, with the Safe Loop: check first, one step, test in the preview, read the diff, a teach-back in `PROMPTS.md`, commit.
3. Start `TESTS.md` (homework finishes it).

When you're called for your walkthrough, commit first, close any AI chat panels, and bring your running app. Back afterwards? Carry on where you were.

### Debrief and exit ticket

The debrief asks what your test caught when you broke it, which card you chose and what the review found, and who has used `git diff` to find something. Then the [week 4 exit ticket](../../assessment/exit-tickets.md#week-4): 🔴 AI off, graded on completion, not correctness. Stop your Codespace before you leave.

---

## Troubleshooting

| Problem | Try this |
|---|---|
| The codespace won't start, or says you're out of hours | Stop any other codespaces at [github.com/codespaces](https://github.com/codespaces), then see [GitHub Codespaces](../../setup/codespaces.md). Meanwhile, pair with your partner in their codespace |
| `Address already in use` when starting the server | A server is already running. Find the terminal running it and press Ctrl+C, or use another port: `python3 -m http.server 8001` |
| "Open in Browser" shows an old version | Save the file (a dot on the tab means unsaved), then hard-reload with Ctrl+Shift+R (Cmd+Shift+R) |
| The page shows a list of files, or "404" | The server was started in the wrong folder. It shows the folder it was started in, and `index.html` must be in that folder |
| The Reading Log appeared inside my Project 1 | The copy ran in the wrong Codespace and overwrote your files. If you haven't committed, run `git restore .` in the Project 1 terminal: it brings back the files git already tracks. Then delete the kit's extra files (`hint-cards.md`, `.vscode`) by hand. If you already committed, run `git revert HEAD --no-edit` |
| Copilot Chat has no Ask mode, or is out of credits | Menus change: look for a mode picker at the bottom of the chat box. Out of credits: use your chat assistant in a browser tab with the same prompts, pasting your code ([I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits)) |
| `git show` or `git log` fills the screen and won't go away | Press `q` |
| A git command opened an editor in the terminal | You left out `--no-edit`. If it's a VS Code tab, close it. If it's the Vim editor in the terminal, type `:wq` and press Enter |
| `git push` is rejected | Someone (maybe you, on github.com) changed the repository. Run `git pull`, then `git push` again. Ask for help if you see "conflict" |
| `npm test` says it cannot find `lib/validate.js` after you created it | Check the folder (`lib`, at the top level) and the spelling of both the file name and the `import` line, including `.js` |
| `npm test` shows `tests 0` | Node didn't find your test file. Its name must end in `.test.js` |
| `npm test` complains about JSON | A comma or quote is missing in `package.json`. Compare it with the lab, character by character |
| A warning or error about modules or `import` | Check that `package.json` is in the top folder and has `"type": "module"` |
| After step 6, a button stopped working | Your HTML probably uses `onclick="…"`. See the warning under step 6 |

## Before you leave Studio B

- [ ] Your Project 1 is committed and pushed (**Sync Changes** or `git push`), including the revert, your hand-written feature and your test files.
- [ ] `PROMPTS.md` has the entry for your hand-written feature (check, review prompt, what you wrote).
- [ ] `npm test` passes.
- [ ] You've done walkthrough 1, or you know when your slot is.
- [ ] **Stop your codespaces:** [github.com/codespaces](https://github.com/codespaces) → **…** → **Stop codespace**. Stopped codespaces don't use your free hours.
- [ ] Homework: [homework](homework.md). Project 1 is due, and the reflection on Canvas is written without AI.
