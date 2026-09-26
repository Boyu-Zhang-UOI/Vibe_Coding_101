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
Today is the most important week for your independence. Up to now the AI wrote and you checked by using the app. Today you read the code, debug it with the AI switched off, and write a feature yourself.
Reassure them early: nobody expects them to write apps from scratch. Reading and fixing is a different, learnable skill.
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
Today you do the opposite: look at the code, the console, and the edges.
-->

---

## Reading builds understanding

Understanding peaked when students **read and partly wrote** the code.

<!--
CMU's 15-113 course surveyed students after every assignment. Understanding and code-reading scores peaked on the assignment where students read and partly wrote the code, using a workflow where the AI plans, the student writes and the AI reviews. Scores then fell during the assignments where agents wrote the code. https://www.cs.cmu.edu/~113/bestPractices.html
Caveat: these are self-reported scores from one course, so treat them as a signal, not proof. That workflow is Part 3 of today's lab.
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
Show your own Project 1 files, or the Debug Clinic app: index.html, style.css, app.js.
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

## CSS: how it looks

```css
.book {
  padding: 14px 0;
}
```

CSS rarely crashes. It just looks wrong.

<!--
A selector (.book) picks elements; properties (padding) style them.
If your app looks broken but the Console is clean, suspect CSS. If it behaves wrongly, suspect JavaScript.
-->

---

## JavaScript: variables and functions

```js
let books = [];

function addBook(title) {
  books.push({ title: title });
}
```

<!--
A variable is a labeled box that holds a value: here, a list (an array) of books.
A function is a named recipe. addBook(...) runs it: we say we "call" it.
{ title: title } is an object: a bundle of name: value pairs, separated by commas.
-->

---

## Events and the DOM

```js
button.addEventListener("click", () => {
  addBook(input.value);
});
```

The **DOM** is the page as JavaScript sees it.

<!--
The DOM (Document Object Model) is the live version of your HTML that JavaScript can read and change.
An event is something the user does: click, type, submit. addEventListener says "when this happens, run this code".
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
Most beginners jump from Reproduce to Fix. Don't.
-->

---

## Edge cases

Empty · huge · duplicate · reload · tiny screen · zero · first visit

Bugs live at the edges.

<!--
The normal case usually works, because it's the case the AI was thinking about.
Today you'll write three edge-case tests for your Project 1 in TESTS.md and run them.
-->

---

## Copilot has three modes

**Inline suggestions** · **Ask** (chat) · **Agent**

This week: **Ask only.**
Agents arrive in week 6.

<!--
Inline suggestions: grey "ghost text" that appears as you type. Today you switch them off while you write code, so the thinking is yours.
Ask: a chat that answers questions and doesn't change your files.
Agent: edits files and runs commands by itself. That needs the habits you're building now, so it waits until week 6.
Copilot usage limits are in TOOLS.md. Ask mode uses your allowance too, so ask good questions.
-->

---

## The AI plans, you write, the AI reviews

1. Copilot (Ask) proposes a plan, no code
2. **You** write the code
3. Copilot reviews your diff
4. You fix, test, commit

<!--
This is the workflow credited with the highest understanding scores in CMU's course.
The AI does what it's good at (planning, spotting problems). You keep the part that builds your skill: writing and deciding.
-->

---

## Debug Clinic rules

🔴 AI off · pairs · five bug reports, in order

Stuck 10 minutes → hint card → 🟡 tutor mode

<!--
The clinic is practice. Points are for fun, not your grade.
Driver types, navigator reads and asks questions, swap every bug.
Tutor mode = a chat assistant with the course's hint-only prompt (instructor/course-tutor.md). It gives hints, not fixes.
Feeling uncomfortable without the AI is normal and expected. That discomfort is the skill being built.
-->

---

## Today's lab

1. Project 1 in a Codespace (10 min)
2. Debug Clinic, AI off (45 min)
3. AI plans, you write, AI reviews (20 min)
4. TESTS.md + `git revert` (15 min)

Oral walkthrough 1 runs alongside.

<!--
Open lab.md. Walkthrough slots start during Part 3; if your name is called, go, then come back to where you were.
Remind everyone to stop their codespaces at the end. Free hours are limited (TOOLS.md).
-->

---

## Homework: Project 1 final

- All MUST criteria pass
- TESTS.md, run and dated
- PROMPTS.md
- README: acceptance table + "How it works"
- Reflection (🔴 AI-free)

Stretch: an automated test with `node --test`.

<!--
homework.md has the checklist and the rubric link. This is the first graded project.
The stretch goal is a preview of weeks 6-8: code that checks code.
-->
