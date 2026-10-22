---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 4"
footer: "CC BY 4.0"
---

# Week 4 — Read It, Debug It, Own It

You must be able to read and fix what the AI wrote.

<!--
Today is the most important week for your independence. Up to now the AI wrote and you checked by using the app. This week you read the code, debug it with the AI switched off, write a feature yourself, and write your first automated test.
Reassure them early: nobody expects them to write apps from scratch. Reading and fixing is a different, learnable skill.
Slides 1–15 are the Studio A talk. Slides 17–18 are two short Studio B mini-lessons.
-->

---

## Why this week exists

AI helped people finish tasks.
It didn't help them learn to debug.

<!--
Anthropic's randomized trial (January 2026): 52 mostly junior engineers learned a new programming library, with or without an AI assistant. The AI group scored 50% on the follow-up quiz versus 67% for the group without AI, was not significantly faster, and fell furthest behind on debugging questions. https://www.anthropic.com/research/AI-assistance-coding-skills
The AI users who scored well asked for explanations, asked conceptual questions, or fixed errors themselves. Low scorers handed everything over.
-->

---

## Beginners rarely look

**7.4%** of actions looked at code or logs.
**0** students wrote a unit test.

<!--
Geng et al. watched 19 students build a web app with an AI agent while thinking aloud. Only 7.4% of their actions involved looking at the code or the logs. Only 2.2% of their checks tried edge cases, no student wrote or ran a unit test, and 61% of their prompts asked the AI to debug for them. https://arxiv.org/pdf/2507.22614
This week you do the opposite: look at the code, the Console and the edges, and write a test.
-->

---

## Explain it before you keep it

AI off, 30 minutes, fix your own code:

**77%** failed after unrestricted AI use.
**39%** failed when they'd had to explain first.

<!--
Sankaranarayanan (2026), 78 learners who grew up with AI tools: on a 30-minute maintenance task with the AI blacked out, 77% of those who had used AI without restrictions failed, versus 39% of those whose tool had required a short explanation before generated code could be added. https://arxiv.org/abs/2602.20206
That's why the course has teach-backs in PROMPTS.md, and why you'll write code yourself in Studio B.
CMU's course found the same pattern from the other side: understanding peaked on the assignment where students read and partly wrote the code (self-reported; a signal, not proof). https://www.cs.cmu.edu/~113/bestPractices.html
-->

---

## Anatomy of a web app

| Part | Where |
|---|---|
| Structure | HTML |
| Style | CSS |
| Behavior | JavaScript |
| State | variables in JavaScript |
| Storage | localStorage |

<!--
Every static app in this course has these five parts. When something breaks, first ask: which part?
CSS rarely crashes; it just looks wrong. If your app looks broken but the Console is clean, suspect CSS. If it behaves wrongly, suspect JavaScript.
In the lab's Part 1 you find all five in your own Project 1.
-->

---

## HTML: elements and ids

```html
<input id="title-input" type="text">
<ul id="book-list"></ul>
```

An **id** is a name tag JavaScript uses to find an element.

<!--
An element is one piece of the page: a heading, a button, an input box.
The id must be unique on the page, and JavaScript must spell it exactly the same way. Keep that in mind for the Debug Clinic.
-->

---

## JavaScript: variables, functions, events

```js
let books = [];

function addBook(title) {
  books.push({ title: title });
}

button.addEventListener("click", () => {
  addBook(input.value);
});
```

<!--
A variable is a labeled box that holds a value: here, a list (an array) of books.
A function is a named recipe. addBook(...) runs it: we say we "call" it.
{ title: title } is an object: a bundle of name: value pairs, separated by commas.
An event is something the user does: click, type, submit. addEventListener says "when this happens, run this code".
The DOM (Document Object Model) is the live version of your HTML that JavaScript can read and change.
Important detail for later: input.value is always text, even in a number box.
-->

---

## State and storage

```js
localStorage.setItem("books", JSON.stringify(books));
books = JSON.parse(localStorage.getItem("books"));
```

localStorage stores **text only**.

<!--
State is the data your app is keeping track of right now, in variables. It disappears when you reload.
localStorage keeps text in the browser across reloads.
JSON.stringify turns your data into text. JSON.parse turns the text back into data. Always use them as a pair.
You can see what's saved: DevTools → Application → Local Storage.
-->

---

## Read the error

```text
Uncaught TypeError: Cannot read properties of null
(reading 'addEventListener')              app.js:42
```

**What** went wrong · **Where** · **Which line**

<!--
Open DevTools with F12 (or Ctrl+Shift+I, Cmd+Option+I on a Mac) and click Console.
Red lines are errors, yellow lines are warnings.
The first word is the type of error. SyntaxError: the file couldn't be read at all. TypeError: a value wasn't what the code expected. ReferenceError: a name doesn't exist.
Click app.js:42 to jump to the line.
CMU students' own advice: spend 20 seconds reading an error before pasting it anywhere.
-->

---

## The stack trace

```text
    at render (app.js:113)
    at saveAndRender (app.js:98)
    at addSampleBooks (app.js:73)
```

Top: where it broke. Below: who called it.

<!--
Read from the top down. render broke on line 113. It was called by saveAndRender, which was called by addSampleBooks, which ran when someone clicked a button.
The bug is often not on the top line. The top line is where the problem showed up.
-->

---

## The debugging method

**Reproduce** → **Isolate** → **Hypothesize** → **Test** → **Fix** → **Verify**

<!--
Reproduce: make it happen on purpose, with exact steps.
Isolate: narrow it down to a file, a function, a line.
Hypothesize: say out loud what you think is wrong and why.
Test: check the idea before changing code: type a variable in the Console, or add console.log.
Fix: the smallest change that fixes the cause.
Verify: repeat the steps, and check you didn't break anything else.
Most beginners jump from Reproduce to Fix. Don't. I'll demo it now.
-->

---

## Edge cases

Empty · huge · duplicate · reload · tiny screen · zero · first visit

Bugs live at the edges.

<!--
The normal case usually works, because it's the case the AI was thinking about.
After the clinic you'll check your own Project 1 for the same five kinds of bug, and in the homework you'll write three edge-case tests in TESTS.md.
-->

---

## Debug Clinic rules

🔴 AI off · pairs · five bug reports, in order

Stuck 10 minutes → hint card → 🟡 tutor mode

Feeling stuck is normal. Bugs 1–3 is a good result.

<!--
The clinic is practice. Points are for fun, not your grade; taking part is.
Driver types, navigator reads and asks questions, swap every bug.
Tutor mode = a chat assistant with the course's hint-only prompt. It gives hints, not fixes. AI limited.
Feeling uncomfortable without the AI is normal and expected. That discomfort is the skill being built.
-->

---

## Studio B: you write it, the AI reviews

Copilot: **inline suggestions** · **Ask** · **Agent**

This week: **Ask only**, suggestions off.

A feature card gives the plan. **You** fill the blanks.

<!--
Inline suggestions: grey "ghost text" that appears as you type. Switch them off while you write, so the thinking is yours.
Ask: a chat that answers questions and doesn't change your files. It reviews your diff.
Agent: edits files and runs commands by itself. That needs the habits you're building now, so it waits until week 6.
Ask mode uses your monthly Copilot allowance too (numbers in TOOLS.md). Check the Copilot icon in the status bar.
Each card has a criterion, a plan and a skeleton with blanks. You find your own names (your list, your draw function, your storage key) and fill them in. That's the feature you wrote yourself for Project 1.
-->

---

## Check first, with code

Write the **test** before the function.

Run it: **red**. Write the function: **green**.

<!--
Last week your checks were things you tried by hand. From this week, a check can be code: an automated test.
You'll take one pure function out of your app (the "is this input OK?" check), write five tests for it first, see them fail because the function doesn't exist yet, then write it and see them pass.
Why first? When an AI writes tests after faulty code, the tests tend to agree with the faults: in a 2026 study they caught 14% of faults, against 25% for tests written independently (Konstantinou et al., https://arxiv.org/abs/2607.05139).
Week 5's starter has tests like this, and in week 6 you'll use them to check an agent's work.
-->

---

## Studio A lab

1. Map your own app (15 min)
2. Debug Clinic, 🔴 AI off (60 min)
3. Debrief (25 min)
4. The five bugs in your own code (15 min)

<!--
Open the lab. Two codespaces today: your Project 1 and the clinic. Stop both at the end; free hours are limited (TOOLS.md).
Never copy the kit into your Project 1 codespace.
-->

---

## Mini-lesson: your history

`git log --oneline` · what happened
`git diff` · what changed since your last commit
`git revert HEAD` · undo, with a new commit

<!--
Studio B, before Part 6. Demo in the demo repository.
git log: one line per save point, newest first. q gets you out of the pager.
git diff: red removed, green added. In walkthrough 1, it's a second way to find the line the examiner changed.
git restore [file]: throw away uncommitted changes. No undo.
git revert: a new commit that undoes an old one. History stays honest. Never git reset --hard or git push --force.
Walkthroughs start after this part, once everyone has practiced.
-->

---

## Mini-lesson: red, then green

`npm test` before the function exists: **red** ("cannot find module", `fail 1`)

`npm test` after you write it: **green** (`pass 5`, `fail 0`)

<!--
Studio B, before Part 8. Demo red: the tests exist, the function doesn't. Read the message aloud.
Then green after creating lib/validate.js.
Then break it on purpose (<= to <) and read which test failed, what it expected and what came back: a boundary bug, like the clinic's, caught in a second.
Three small files: package.json, tests/validate.test.js, lib/validate.js. Using it in your app (type="module") comes after.
-->

---

## Studio B lab

6. Git log, diff and revert (20 min)
7. You write it: a feature card (30 min)
8. Your first automated test (30 min)
9. Project work time + oral walkthrough 1 (50 min)

<!--
Walkthrough slots start after Part 6. If you're called, commit first, close AI chat panels, and come back to where you were afterwards.
Exit ticket at the end: AI off, graded on completion, not correctness.
-->

---

## Homework: Project 1 final

- All MUST criteria pass on Pages
- TESTS.md: every criterion, 3+ edge cases, dated
- One automated test passing, used in your app
- README, SPEC.md, PROMPTS.md (with teach-backs)
- Reflection on Canvas (🔴 AI off)

<!--
The homework page has the checklist and a time plan (about 9½ hours). This is the first graded project.
Minimum to keep up: npm test runs at least one passing test. Week 5 starts from a Node project with tests.
-->
