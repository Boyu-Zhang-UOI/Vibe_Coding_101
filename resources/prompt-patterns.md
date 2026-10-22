# Prompt Patterns

> A library of prompts that work, for any chat assistant or agent. Each pattern says when to use it, gives a prompt you can copy, and names the mistake people usually make with it.
> Copy them, change the details in `[brackets]`, and log the ones that worked in your `PROMPTS.md` ([template](../templates/PROMPTS.md)).

The patterns are not magic words. They work because they make you do the thinking that good results depend on: saying what "done" means, keeping changes small, and checking the AI's work. One study found that learners who asked the AI for explanations, or asked only conceptual questions and fixed errors themselves, learned far more than learners who handed everything over ([Anthropic, 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)).

**On this page:** [The three habits](#the-three-habits) · [Quick index](#quick-index) · [The patterns](#the-patterns) · [Anti-patterns](#anti-patterns) · [Where these come from](#where-these-come-from)

---

## The three habits

Use these three from week 1, with any assistant. They come from what students in a large 2026 beginner course said helped them most ([CMU 15-113 "Student Wisdom, Fall 2026"](https://www.cs.cmu.edu/~113/bestPracticesF26.html)), and experienced developers describe the same habits ([Hacker News discussion](https://news.ycombinator.com/item?id=49934037)).

1. **Ask me questions first.** Before the AI builds anything, ask it to ask you clarifying questions, one at a time. Its guesses become your decisions. ([Pattern 4](#4-ask-me-questions-first))
2. **Show, don't describe.** Give it a picture or a reference: a photo of your sketch, a screenshot of a page you like, an example of the output you want. It was the most-cited practice on every CMU assignment. ([Pattern 13](#13-screenshot-and-wireframe-prompts))
3. **Say what works before asking for a change.** List what already works and must keep working, so the AI doesn't break it while fixing something else. ([Pattern 15](#15-say-what-works-first))

---

## Quick index

| # | Pattern | Use it when | First used |
|---|---|---|---|
| 1 | [The four-part prompt](#1-the-four-part-prompt) | You ask for anything non-trivial | Week 2 |
| 2 | [Plan first](#2-plan-first) | A change touches more than one thing | Week 2 |
| 3 | [One step at a time](#3-one-step-at-a-time) | You're working through a plan | Week 2 |
| 4 | [Ask me questions first](#4-ask-me-questions-first) | Your idea is still fuzzy | Week 1 |
| 5 | [Explain this code](#5-explain-this-code) | You can't explain a line you're about to keep | Week 1 |
| 6 | [The good bug report](#6-the-good-bug-report) | Something is broken | Week 2 |
| 7 | [Review my diff](#7-review-my-diff) | Before you commit a change you didn't write | Week 4 |
| 8 | [Write a failing test first](#8-write-a-failing-test-first-redgreen) | You're adding a feature or fixing a bug with an agent | Week 6 |
| 9 | [What could go wrong?](#9-what-could-go-wrong-edge-cases) | A feature works on the normal case | Week 3 |
| 10 | [Compare two approaches](#10-compare-two-approaches) | There's more than one way to do it | Week 2 |
| 11 | [Rubber duck](#11-rubber-duck) | You want to find the bug yourself | Week 4 |
| 12 | [Fresh-chat handoff summary](#12-fresh-chat-handoff-summary) | A chat has become long or confused | Week 2 |
| 13 | [Screenshot and wireframe prompts](#13-screenshot-and-wireframe-prompts) | Layout matters more than words | Week 1 |
| 14 | [Tutor mode](#14-tutor-mode) | You want to learn, not just get an answer | Week 4 |
| 15 | [Say what works first](#15-say-what-works-first) | You're asking for a change to something that mostly works | Week 1 |
| 16 | [Check-first test prompt](#16-check-first-test-prompt) | You need a test before the code exists | Week 4 |
| 17 | [Teach-back check](#17-teach-back-check) | You've written your teach-back and want it checked | Week 4 |
| 18 | [The Goldfish test](#18-the-goldfish-test) | You think your SPEC.md or AGENTS.md is finished | Week 3 |

---

## The patterns

### 1. The four-part prompt

**Use it when:** you ask for anything bigger than a one-line change. This is the Describe step of [the Safe Loop](safe-loop.md).

**Why it works:** the AI only knows what you tell it. The four parts, **Goal · Context · Constraints · Done when**, cover what it most often has to guess. OpenAI's guide for its coding agent recommends the same structure for every non-trivial prompt ([Codex best practices](https://learn.chatgpt.com/guides/best-practices)).

```text
Goal: Add a dark mode toggle to my home page.
Context: My site is a single index.html file with the CSS in a <style> tag and no JavaScript yet. It's hosted on GitHub Pages.
Constraints: Plain HTML, CSS and JavaScript, no libraries. Keep the current colors as the light theme. Don't change any text or layout.
Done when: A button in the top-right corner switches between light and dark; the choice is still there after I reload the page; the button is readable in both modes.
```

**Common mistake:** a "Done when" you can't check, such as "looks modern" or "works well". Write something you could test by using the app: what you click, and what you see.

### 2. Plan first

**Use it when:** the change touches more than one thing, or you're not sure how it should work. This is the Plan step of the Safe Loop. Agents have a *plan mode* that does the same.

**Why it works:** fixing a plan takes seconds; fixing code built on a bad plan takes hours. Anthropic's guide for its coding agent says to plan before implementing, and to skip planning only when you could describe the change in one sentence ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)). Observed professionals do the same ([Huang et al.](https://arxiv.org/pdf/2512.14012)).

```text
Don't write any code yet.
Propose a plan in 3–6 small steps for the goal above.
For each step, say which file changes, what I'll see when it works, and how I can test it.
At the end, list anything you're unsure about as questions for me.
```

Then edit the plan before approving it:

```text
Change the plan: drop step 4 (I don't need animations), and split step 2 into "save" and "load".
Show me the revised plan. Still no code.
```

**Common mistake:** approving a plan without reading it. Look for steps that change files you didn't mention, add features you didn't ask for, or install packages. Ask why, or cut them.

### 3. One step at a time

**Use it when:** you have a plan. This is the Step part of the Safe Loop.

**Why it works:** small changes are easy to test, read and undo. In one study, beginners who generated a whole solution from a single prompt got the best first result but did worst when they later had to change the code ([Kazemitabaar et al.](https://arxiv.org/abs/2309.14049)). Students who restarted a failing vibe-coded project often chose to go one task at a time ([Geng et al.](https://arxiv.org/pdf/2507.22614)).

```text
Do step 2 of the plan only: "Save the list in localStorage".
Show me only the code that changes, and say which file and where it goes.
Then stop. Don't start step 3 until I tell you the tests pass.
```

**Common mistake:** letting the AI run ahead and do steps 2 to 5 at once, or skipping your own test and commit between steps. If it runs ahead, don't keep the extra code. Ask again for the one step.

### 4. Ask me questions first

**Use it when:** your idea is still fuzzy, you're starting a spec, or you're about to ask for a first version of anything. This is [habit 1](#the-three-habits).

**Why it works:** the AI fills gaps with guesses. Letting it interview you surfaces those gaps before they become code. Practitioners use exactly this: an LLM asking one question at a time to hone an idea ([Harper Reed](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)), or letting the agent interview you before writing a spec ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)).

```text
Goal: I want a small web tool to track which houseplants I've watered this week.
Before you suggest anything, ask me questions to understand what I need.
Ask one question at a time and wait for my answer. Stop after at most 6 questions.
Then summarize what you understood in 5 bullet points so I can correct it.
```

> [!NOTE]
> 🟡 AI limited: in week 3 the AI may interview you and critique your spec, but you write `SPEC.md` yourself ([AI use policy](../SYLLABUS.md#8-ai-use-policy)).

**Common mistake:** answering "whatever you think is best". Each answer is a decision about *your* project. If you don't know, say so, and ask the AI for two options with trade-offs ([pattern 10](#10-compare-two-approaches)).

### 5. Explain this code

**Use it when:** you're about to keep code you can't explain, or you're preparing for an [oral walkthrough](../assessment/oral-walkthroughs.md).

**Why it works:** "If you can't explain it, you didn't build it." Asking for explanations alongside code was one of the habits of the learners who scored well in Anthropic's study ([Anthropic, 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)).

```text
Explain this code to me as if I'm new to programming.
First, say what the whole thing does in 2 sentences.
Then go line by line: what each line does and why it's needed, one sentence each.
Then name the 3 most important lines, and what would break if I deleted each one.
Finally, ask me 2 questions to check I understood. Don't give the answers until I reply.

[paste one function, or up to about 30 lines]
```

**Common mistake:** reading the explanation, nodding, and moving on. Understanding means you can say it without the chat open. Close the chat, explain the code out loud or in writing, then change one thing, predict what will happen, and run it. Explanations can be wrong too; running the code is the real check.

### 6. The good bug report

**Use it when:** something is broken. Use it instead of "fix it".

**Why it works:** the AI can't see your screen. Exact error text, what you did, what you expected and what you've already tried let it reason about the cause instead of guessing, and stop it from suggesting things you've already ruled out.

```text
Goal: Fix a bug in my to-do app.
What I did: Typed "Buy milk", pressed Enter, then reloaded the page.
What I expected: "Buy milk" is still in the list after reloading.
What happened: The list is empty after reload. There are no red errors in the Console.
What I tried: In DevTools → Application → Local Storage, the key "todos" exists, but its value is "[object Object]".
Relevant code: the saveTodos function in app.js, pasted below.
Constraints: Explain the cause in plain English first, then suggest a fix. Change only this function.

[paste saveTodos]
```

**Common mistake:** paraphrasing the error ("it says something about null"). Copy the exact text from the Console or terminal, including the file name and line number. And look before you ask: reading the error yourself is one of the [six skills you must show without AI](without-ai-skills.md#1-read-an-error-message-and-find-the-failing-line).

### 7. Review my diff

**Use it when:** before you commit a change the AI wrote, especially an agent's. It adds a second pair of eyes to the Read step; it doesn't replace your own reading.

**Why it works:** AI code is often "almost right", the top frustration of developers in Stack Overflow's 2025 survey ([Stack Overflow 2025](https://survey.stackoverflow.co/2025/ai)). In the 2026 survey, only 6.6% of developers trusted AI for important decisions, and about 48% trusted it only when they could easily check the answer ([Stack Overflow 2026](https://stackoverflow.co/company/press/archive/stack-overflow-annual-developer-survey-ai-trust-conditional)). A reviewer that didn't write the code is less likely to defend it, so Anthropic's guide suggests reviewing in a fresh session ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)).

Get the diff with `git diff` (before you commit) or `git show` (your last commit). Then, in a **fresh chat** or a different assistant:

```text
Review this diff as a careful senior developer reviewing a beginner's code.
Context: It should add a delete button to each item. My acceptance criterion is: WHEN I click delete on an item, THE APP SHALL remove it from the list and from localStorage.
List, most important first:
1. Bugs, or ways it doesn't meet the criterion
2. Security problems (for example innerHTML used with user text, or secrets)
3. Changes that weren't needed for this criterion
4. Anything a beginner would find hard to explain
Don't rewrite the code. Point to specific lines.

[paste the diff]
```

**Common mistake:** asking "Is this OK?" The answer will almost always be yes. Ask for specific kinds of problems. And don't paste a diff that includes `.env` or any key.

### 8. Write a failing test first (red/green)

**Use it when:** you're adding a feature or fixing a bug, especially with an agent (week 6 onward). This is the agent version of [check first](safe-loop.md#check-first): the test comes before the implementation, in its own prompt. In weeks 4–5, or when you want the test written by something that has never seen the code, use the [check-first test prompt](#16-check-first-test-prompt).

**Why it works:** a test that fails first (red) and then passes (green) proves the test checks something real and that the change fixed it. Simon Willison recommends red/green test-driven development with agents ([Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)), and Anthropic's guide says to give the agent a way to verify its own work and to ask for evidence rather than claims ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)). An agent has produced false test results before ([Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/)).

Red:

```text
Goal: Add a test for acceptance criterion AC2: WHEN I press Add with an empty box, THE APP SHALL add nothing.
Context: The list logic is in public/lib/list.js (addItem(list, text) returns a new list). Tests use Node's built-in runner and live in tests/*.test.js.
Constraints: Write the test only. Don't change any app code. Run npm test and paste the output.
Done when: The new test runs and FAILS, and you tell me in one sentence why it fails.
```

Green:

```text
Now make the smallest change to public/lib/list.js so that all tests pass.
Don't edit, skip or delete any test. Run npm test and paste the full output.
```

**Common mistake:** skipping the red step, or letting the agent change the test until it matches buggy code. A test that has never failed might not test anything. Your [AGENTS.md](../templates/AGENTS.md) says never to disable or delete tests; check the diff to be sure.

### 9. What could go wrong? (edge cases)

**Use it when:** a feature works on the normal case and you're about to call it done.

**Why it works:** beginners test the happy path. In one study of students vibe coding, 91.7% of their tests tried common cases, 2.2% tried edge cases, and none wrote a unit test ([Geng et al.](https://arxiv.org/pdf/2507.22614)). Edge cases are where "almost right" code breaks.

```text
Here is my acceptance criterion and the code that implements it.
List the 8 most likely edge cases a real user could hit (for example empty input, very long text, duplicates, special characters like <b> or emoji, reloading, a small screen, no internet).
For each one, say what you think my code does now, and whether that's a problem.
Format them as rows for the manual tests table in my TESTS.md: ID | Checks | Steps | Expected result.
Don't change the code.

[paste criterion and code]
```

**Common mistake:** trying to handle all of them. Pick the two or three that matter for your users, add them to [TESTS.md](../templates/TESTS.md), and put the rest under "Out of scope" in your spec. And don't trust "what your code does now": run each test yourself.

### 10. Compare two approaches

**Use it when:** there's more than one reasonable way to build something, or you're choosing between tools or libraries.

**Why it works:** the first answer an AI gives is one option, not the best one. Asking for two, with trade-offs, puts the decision back with you. In week 2 you'll also paste the *same* prompt into two different assistants and compare.

```text
Goal: Keep my notes so they're still there tomorrow.
Context: A single-user tool in plain HTML, CSS and JavaScript, hosted on GitHub Pages.
Give me two different ways to do this. For each: how it works in 2 sentences, what could go wrong, and how hard it would be for a beginner to explain.
Recommend one for a beginner and say why. Don't write any code yet.
```

**Common mistake:** picking the more impressive option that you can't explain. Choose the one you could defend in an oral walkthrough.

### 11. Rubber duck

**Use it when:** you want to find a bug or understand your code *yourself*, with the AI only asking questions.

**Why it works:** programmers have long explained their code, line by line, to a rubber duck on the desk; saying it out loud reveals the step where your idea and the code disagree. Here the AI plays the duck, so the thinking stays yours.

```text
I'm going to explain how my code works, step by step, to find a bug myself.
Act as a rubber duck: don't explain, don't fix and don't hint at the answer.
After each thing I say, ask me ONE short question that makes me check an assumption, such as "How do you know that variable has a value at that point?"
If I ask you for the answer, remind me that I'm the one explaining.
```

**Common mistake:** the AI slides back into giving answers after a few turns. Paste the rules again, or start fresh. In the Debug Clinic, use only the [course tutor](#14-tutor-mode).

### 12. Fresh-chat handoff summary

**Use it when:** a chat has become long, repetitive or confused, or the [two-strikes rule](safe-loop.md#the-two-strikes-rule) says stop.

**Why it works:** a model only sees a limited amount of text at once (its [context window](glossary.md#context-window)), and quality drops as a conversation fills up ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)). A fresh chat starts clean. A short summary carries over what matters and leaves the confusion behind.

In the old chat:

```text
This chat is getting long and we're going in circles, so I'm starting a fresh chat.
Write a handoff summary I can paste into the new chat, under 200 words:
- The goal, and the acceptance criterion we're working on
- The files involved and what each one does (one line each)
- What works now
- What's broken, with the exact error text
- What we tried that did NOT work, and why
- Decisions I made that must be kept
Don't include any code, keys or personal data.
```

In the new chat, paste the summary, then the **current** version of the file that matters, then a four-part prompt for the next step.

**Common mistake:** carrying the old chat's wrong theory into the new one. Read the summary before pasting it. Delete any guess that's written as if it were a fact ("the problem is the CSS") unless you've confirmed it.

### 13. Screenshot and wireframe prompts

**Use it when:** layout matters more than words: building a screen from your [wireframe](glossary.md#wireframe), matching a style you like, or showing a visual bug. Most chat assistants accept images; check that yours does. This is [habit 2](#the-three-habits): show, don't describe.

**From a wireframe:**

```text
Goal: Build the layout of my main screen from the attached photo of my wireframe.
Context: This is the wireframe from my SPEC.md. The labels on the sketch are the real button texts.
Constraints: HTML and CSS only, no JavaScript yet. Use simple class names I can read. It must work on a phone screen.
Done when: Every box on the sketch is on the page in the same arrangement, and nothing extra has been added.
```

**From a reference** (a screenshot of a page whose look you like):

```text
Goal: Restyle my home page using the attached screenshot as a reference for layout and spacing.
Context: My page is a single index.html with the CSS in a <style> tag. The screenshot is someone else's site.
Constraints: Borrow the layout ideas only: a wide header, a two-column projects grid, lots of white space. Don't copy their text, images, logo or colors. Keep my content.
Done when: My page has the same overall arrangement as the reference, with my own words and colors, and still works at phone width.
```

**For a visual bug:**

```text
The attached screenshot shows my page at phone size (DevTools device toolbar).
Expected: the Add button sits to the right of the input box.
What happens: the button drops below the box and sticks out past the right edge of the screen.
Here is the CSS for that section: [paste]
Explain the cause first, then suggest the smallest fix.
```

**Common mistake:** a screenshot of an error message. Copy error *text* instead; the AI can misread images, and you can't search a picture. And crop every screenshot first. Anything visible, such as your email, other tabs or a key, is being sent to the AI company ([safety contract rule 2](../setup/safety-contract.md)).

### 14. Tutor mode

**Use it when:** you want to learn something, not just get it done. For example, you're stuck on a Debug Clinic bug after ten minutes of trying (🟡 AI limited: tutor mode is the only AI allowed there), or practicing for an oral walkthrough.

**Why it works:** in a large trial, students with an unrestricted chatbot did better in practice but worse on the exam, without noticing. A tutor that only gave hints avoided that harm ([Bastani et al., PNAS](https://www.pnas.org/doi/10.1073/pnas.2422633122)). Harvard's CS50 uses a hint-giving tutor for the same reason ([Liu et al.](https://cs.harvard.edu/malan/publications/V1fp0567-liu.pdf)).

**How:** open a new chat and paste the course tutor prompt from [instructor/course-tutor.md](../instructor/course-tutor.md#the-tutor-prompt). Then describe your problem:

```text
I'm working on bug 2 in the Debug Clinic. When I click "Add", nothing happens.
The Console shows: Uncaught TypeError: Cannot read properties of null (reading 'value') at app.js:14
I think the input box isn't being found, but I don't know why.
Give me a hint, not the answer.
```

**Common mistake:** "just tell me the answer", or quietly switching to a normal chat. That turns the tutor back into the thing the research warns about. If a hint doesn't help, ask for a smaller one, or ask the instructor.

### 15. Say what works first

**Use it when:** you're asking for a change to something that mostly works: a new feature, a style change, or a fix for one bug. This is [habit 3](#the-three-habits).

**Why it works:** when an AI changes code, it can quietly rewrite parts you didn't mention. Telling it what already works tells it what to protect, and gives you a list to re-test afterwards. Students in a 2026 beginner course named this as one of their most useful practices ([CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)).

```text
What works now and must keep working: adding an item, the delete button on each item, and the list surviving a reload.
Change I want: a "clear all" button above the list that asks me to confirm first.
Constraints: Don't change how adding or deleting works. Change as few lines as you can.
Before you write any code, tell me which of the working features your change could affect, and how.
```

**Common mistake:** listing what works but not checking it afterwards. After the change, test every item on your "works now" list again, not only the new feature. If one broke, that's a bug report ([pattern 6](#6-the-good-bug-report)), not a reason to start over.

### 16. Check-first test prompt

**Use it when:** you're about to ask for a feature or a fix and need its check first, from week 4 onward. This is the [check first](safe-loop.md#check-first) habit of the Safe Loop.

**Why it works:** tests written by an AI that has already seen faulty code tend to agree with the faults. In one 2026 study, tests written after buggy code caught 14% of the faults, against 25% for tests written independently ([Konstantinou et al.](https://arxiv.org/abs/2607.05139)). So the test-writer gets the criterion and the function's name, **not** the code. Use a **separate prompt**: a fresh chat, or a new Copilot Chat session, before you ask for the implementation.

```text
Goal: Write ONE automated test for this acceptance criterion, before the code exists.
Criterion: WHEN I add an item whose text is only spaces, THE APP SHALL leave the list unchanged.
Context: The function will be addItem(list, text) in public/lib/list.js. It takes an array of strings and returns a new array. Tests use Node's built-in runner (node --test) and live in tests/list.test.js.
Constraints: You haven't seen the code and shouldn't ask for it. Test only this criterion. Use plain assert, no libraries. Add a one-line comment saying what the test checks.
Done when: The test file runs with node --test, and it would fail if addItem added the item.
```

Then run the test **before** you ask for the code. It should fail (red), or report that `addItem` doesn't exist yet. Only then write the implementation prompt ([pattern 8](#8-write-a-failing-test-first-redgreen) shows the agent version).

**Common mistake:** pasting the test prompt into the same chat that will write (or already wrote) the code. The point is that the test doesn't know the code. Second mistake: accepting a test you can't read. Before you keep it, say in one sentence what input it uses and what result it expects.

### 17. Teach-back check

**Use it when:** you've written your [teach-back](safe-loop.md#teach-back) for a change and want to know whether it matches what the code actually does. Write the teach-back **first**, yourself; this prompt only checks it.

**Why it works:** explaining code in your own words before you accept it is what protected learners when the AI was taken away: 39% failed a no-AI maintenance task with an explanation step, against 77% without one ([Sankaranarayanan](https://arxiv.org/abs/2602.20206)). A check against the diff catches the parts you explained wrongly or skipped.

```text
I'm about to commit the change in this diff. Below the diff is my own explanation of it.
Check my explanation against the diff. Don't rewrite my explanation and don't change the code.
Tell me:
1. Anything I said that the diff doesn't actually do
2. Any change in the diff that I didn't mention
3. One question an examiner could ask me about this change that my explanation doesn't answer
Then stop. I'll fix my explanation myself.

Diff:
[paste the output of git diff]

My explanation:
[paste your 2–3 sentences]
```

**Common mistake:** asking the AI to "improve" your teach-back and pasting its version into `PROMPTS.md`. The teach-back is graded because it's yours. Fix your own sentences, and if point 3 stumps you, find the answer in the code before you commit.

### 18. The Goldfish test

**Use it when:** you think your `SPEC.md` (week 3) or `AGENTS.md` (week 6) is finished.

**Why it works:** a goldfish, the story goes, forgets everything in seconds. A fresh chat is the same: it knows nothing about your project except what you paste. If it can't understand and build from your document alone, the document is leaning on things that live only in your head or in an old chat. The test comes from a 2026 University of Michigan course ([EGM README](https://github.com/eecs498-aase/materials/blob/HEAD/egm/README.md)), and writing skill turns out to predict how well students vibe code ([Thorgeirsson et al.](https://arxiv.org/abs/2603.14133)).

**How:** open a **fresh chat** (a temporary chat if your assistant remembers past conversations). Paste **only** the document, then:

```text
The document above is everything you know about this project. Don't build anything yet.
1. In 5 bullets, say what you would build from it.
2. List every question you'd need answered before you could build it without guessing.
3. Point out anything vague, missing or contradictory, quoting the line.
4. Name the 3 things you would most likely get wrong if you started now.
```

Write down what it asked or got wrong (in `PROMPTS.md`, or the place your lab says), then revise the document so a fresh chat wouldn't need to ask. Run the test again on the revised version if you have time.

**Common mistake:** answering the chat's questions in the chat. That fixes the chat, not the document. Every answer belongs in `SPEC.md` or `AGENTS.md`. For `AGENTS.md`, add one more question: "Which folders may you change, and what must you ask me before doing?" If it can't answer from the Scope section, revise Scope.

---

## Anti-patterns

These feel natural and waste time, credits, or both.

### Vague prompts

```text
Make my website better.
```

The AI has to guess what "better" means, so it guesses big: new colors, new sections, rewritten text, and a diff you can't review. **Instead:** use [the four-part prompt](#1-the-four-part-prompt) with one goal and a "Done when" you can check.

### Mega-prompts

```text
Build me a full app with login, a database, payments, a chat, dark mode, an admin panel and an AI assistant.
```

You'll get a lot of code at once that you can't test, can't explain and can't change later. Whole-solution prompts give the best first try and the worst later changes ([Kazemitabaar et al.](https://arxiv.org/abs/2309.14049)), and they burn through free credits. This is how people hit the "70% wall": most of the way there fast, then every fix breaks something else ([Osmani](https://addyo.substack.com/p/the-70-problem-hard-truths-about)). **Instead:** write a [spec](../templates/SPEC.md), then [plan first](#2-plan-first), then go [one step at a time](#3-one-step-at-a-time).

### "Fix it"

```text
It doesn't work. Fix it.
```

The AI will change *something*, often not the right thing, and you learn nothing. In one study, 61% of students' prompts were debugging requests like this ([Geng et al.](https://arxiv.org/pdf/2507.22614)). Non-programmers tend to re-prompt instead of debugging ([Fawzy et al.](https://arxiv.org/html/2605.24521v1)), and learners who used AI to debug instead of to understand scored lowest ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). **Instead:** read the error yourself, then write [a good bug report](#6-the-good-bug-report).

### Pasting secrets

```text
Here's my .env file, why doesn't my key work?
LLM_API_KEY=...
```

Anything you paste can be stored, read by reviewers and used for training ([safety contract rule 2](../setup/safety-contract.md)). **Instead:** describe it without the value: "My `.env` has `LLM_API_KEY` set, with no quotes or spaces, and I restarted the server after editing it." Replace real values with placeholders such as `[MY_KEY]`. If you've already pasted a key: [revoke it now](troubleshooting.md#i-committed-a-secret).

### Arguing with a confused chat

```text
NO. For the third time, do NOT change the header!!
```

Once a conversation has gone wrong, the mistakes stay in its context and keep pulling it back. More capital letters won't help. Anthropic's guide says that after two failed corrections, you should clear the conversation and write a better prompt ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)). **Instead:** follow [the two-strikes rule](safe-loop.md#the-two-strikes-rule): go back to your last good commit if things got worse, write a [handoff summary](#12-fresh-chat-handoff-summary), and start a fresh chat with a sharper prompt.

---

## Where these come from

These patterns combine vendor guides, practitioners and education research. The evidence behind them is mostly practitioner experience, not controlled trials; see [research/design-rationale.md](../research/design-rationale.md) for how the course uses it.

- Goal · Context · Constraints · Done when: [OpenAI Codex best practices](https://learn.chatgpt.com/guides/best-practices)
- Plan first, verify with evidence, fresh sessions, two failed corrections: [Claude Code best practices](https://code.claude.com/docs/en/best-practices)
- Red/green testing: [Willison, Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)
- Interview-style spec building: [Harper Reed](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/)
- The three habits (ask questions first, show a reference, say what works): [CMU 15-113 Fall 2026 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- Writing the test independently of the code: [Konstantinou et al.](https://arxiv.org/abs/2607.05139)
- Explaining before accepting (teach-back): [Sankaranarayanan](https://arxiv.org/abs/2602.20206)
- The Goldfish test: [Michigan EECS 498 EGM](https://github.com/eecs498-aase/materials/blob/HEAD/egm/README.md)
- Learning-friendly habits (ask for explanations, fix errors yourself): [Anthropic, 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)
- Hint-only tutors: [Bastani et al., PNAS](https://www.pnas.org/doi/10.1073/pnas.2422633122)
- What novices actually do when vibe coding: [Geng et al.](https://arxiv.org/pdf/2507.22614)

More reading: [reading-list.md](reading-list.md).
