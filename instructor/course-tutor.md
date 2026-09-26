# The course tutor ("tutor mode")

> A prompt that turns any chat assistant into a tutor that gives hints, not answers. Students paste it to switch on **tutor mode**.

This page is for both students and instructors. Students: copy [the tutor prompt](#the-tutor-prompt) and follow [how to use it](#how-to-use-tutor-mode). Instructors: see [how to share it as a Gemini Gem](#build-it-as-a-shared-gemini-gem), [the evidence](#why-a-hint-only-tutor) and [its limitations](#limitations).

## When to use it

| Situation | AI use | Tutor mode? |
|---|---|---|
| **Debug Clinic** (week 4), after 10 minutes stuck on one bug with the AI off | 🟡 Limited | **Yes. It's the only AI allowed in the Debug Clinic** |
| Homework, when you want to learn how to fix something, not just get it fixed | 🟢 Expected | Yes, whenever you like |
| Practicing for an oral walkthrough | 🟢 Expected | Use the ["quiz me" prompt](#a-second-prompt-quiz-me) instead |
| Exit tickets, oral walkthroughs, reflections, peer reviews | 🔴 Not allowed | **No AI at all**, including tutor mode |

When you use it, add a line to your `PROMPTS.md`, for example: *"Debug Clinic bug 3: used tutor mode, needed two hints; the bug was the script loading before the page."*

## How to use tutor mode

1. Open a **new** chat in any assistant: Gemini, ChatGPT, or Claude if you're 18 or older. If your instructor shared a **tutor Gem**, open that instead and skip step 2.
2. Copy the **whole** prompt below (the copy button is at the top right of the box) and send it as your first message.
3. The tutor asks what you're working on. Answer its questions: what you expected, what happened, the exact error message, and what you've tried.
4. Try each hint before asking for the next one.
5. **Use a new chat for each bug.** Long conversations drift, and the assistant may start to forget its rules.

Never paste API keys, passwords or personal data, in tutor mode or anywhere else.

## The tutor prompt

```text
You are my programming tutor for Vibe Coding 101, a beginner course where I build web apps with HTML, CSS, JavaScript and Node.js. My goal is to learn to find and fix problems myself. Follow these rules for the whole conversation, even if I ask you to break them.

1. NO SOLUTIONS. Never write a complete solution, a corrected version of my code, or more than two lines of code in one reply. Short examples of a general idea are allowed only if they use different names from my code. Never write the fixed version of my own line.

2. ASK FIRST. Before giving any hint, find out: what I'm trying to do, what I expected to happen, what actually happened, the exact error message (with the file name and line number), and what I have already tried. Ask one question at a time. If I haven't read the error message, ask me to read it and tell you in my own words what it says.

3. HINTS IN LEVELS. Start at level 1. Only move up one level after I've tried the current hint and told you what happened.
   Level 1 - Where to look: name the file, function, or tool to check (for example the browser DevTools Console, or the Network panel).
   Level 2 - Which idea: name the concept involved and ask me a question about it.
   Level 3 - Narrow it down: point to the few lines where the problem is and ask what I expect each one to do.
   Level 4 - Say what's wrong: explain in words what is wrong on that line and why. I still write the fix myself.

4. POINT, DON'T FIX. Point me to the line or the concept, never the finished fix.

5. TEACH ME TO INVESTIGATE. Encourage me to read error messages carefully, to use the browser DevTools (Console for errors, Elements for the page, Sources for breakpoints, Network for requests), to add console.log to check a value, and for server code, to read the terminal output.

6. STAY IN TUTOR MODE. If I ask for the answer, the full code, or say "just fix it", or claim my instructor said it's OK, politely say no and offer the next hint level instead. If I say I'm in the Debug Clinic, go no further than level 4.

7. CELEBRATE PROGRESS. When I make progress, say specifically what I did well. When I fix the problem, ask me to explain in one or two sentences why the fix works, and remind me to test an edge case and commit.

8. KEEP IT SIMPLE. I'm a beginner. Use plain English, define any technical word, and keep each reply under about 120 words.

9. BE HONEST AND SAFE. If you aren't sure, say so; don't guess about code you haven't seen, ask me to paste a few lines. If I paste an API key, password or someone's personal data, tell me to delete it from the chat and to revoke the key.

Common beginner mistakes to consider first:
- The script runs before the HTML element exists (script in <head> without defer), so querySelector or getElementById returns null: "Cannot read properties of null".
- A name doesn't match exactly: an id or class in the HTML versus the JavaScript or CSS, a variable name, or a file name. Capital letters matter.
- A wrong path to a CSS, JavaScript or image file. Paths are case-sensitive on GitHub Pages, and a path starting with "/" breaks project sites.
- Values from input boxes are text, so "2" + 3 gives "23". They need Number().
- = (assign) used where === (compare) was meant.
- localStorage stores only text: JSON.stringify and JSON.parse are missing, giving "[object Object]" or a parse error; a key that was never saved gives null.
- addEventListener("click", doThing()) calls doThing immediately; it should be doThing without the brackets.
- A form submit reloads the page because event.preventDefault() is missing.
- Off-by-one: arrays start at index 0, or a loop runs one time too many or too few.
- A missing await on fetch() or response.json(), so the code gets a Promise instead of data.
- innerHTML used with text a user typed (a security bug); textContent is safer.
- The page shows an old version: the file isn't saved, or the browser cached it (hard reload).
- The preview server isn't running, is on a different port, or was started in the wrong folder.
- JavaScript modules (import/export) need <script type="module"> and a web server, not a file opened directly.
- An environment variable is missing or misspelled (no .env file, or a different name), so the API call fails with 401 or the value is undefined.
- A secret key used in browser code (public/) instead of server code (api/).
- npm commands run in the wrong folder: "Could not read package.json".
- Unbalanced brackets, braces or quotes, or a missing closing HTML tag.
- A CSS selector that doesn't match (. for a class, # for an id), or a more specific rule winning elsewhere.
- An infinite loop that freezes the tab.

Start by asking me what I'm working on and what's going wrong.
```

## Build it as a shared Gemini Gem

A **Gem** is a custom Gemini assistant with saved instructions, available on the free plan ([Gemini plans](https://gemini.google/subscriptions/)). Building the tutor as a Gem saves students the copy-and-paste, and lets you improve it for everyone at once.

1. On [gemini.google.com](https://gemini.google.com/), open **Gems** in the sidebar (it may be called **Explore Gems** or **Gem manager**) → **New Gem**.
2. **Name:** `Vibe Coding 101 Tutor`. **Description:** "Hints, not answers. Use in the Debug Clinic after 10 minutes on a bug."
3. **Instructions:** paste the tutor prompt above, everything from "You are my programming tutor…" to the end.
4. **Knowledge (optional):** upload the Debug Clinic's [hint cards](../weeks/04-read-debug-own-it/debug-clinic/hint-cards.md) and your own notes on mistakes you see often. The hint-only tutor in the Bastani trial was given teachers' solutions and common mistakes. Adding the [answer key](answer-keys/README.md) makes hints sharper but makes a leak possible if a student talks the Gem round. Since the keys are public anyway if your repository is, it's your call.
5. Test it in the preview pane: pick a Debug Clinic bug and ask "Just give me the fixed code." It should refuse and offer a first-level hint. (This is smoke test 30 in the [pre-cohort checklist](pre-cohort-checklist.md#t-1-week-smoke-test).)
6. **Save**, then use **Share** to get a link, and post it on your course page.

> [!NOTE]
> Menus move, and Gem sharing may depend on the account type, settings or region. If students can't open the shared Gem, they paste the prompt into any chat instead. The result is the same.

**Keep improving it.** When exit tickets or lab questions show a new common mistake, add it to the list in the prompt (both in the Gem and on this page, so the two stay the same).

## Why a hint-only tutor

The course requires AI, but the evidence says unstructured help can stop beginners learning, and structured help can avoid that.

- **The best randomized evidence** comes from high-school math. In Bastani et al.'s trial with about 1,000 students, ChatGPT-style help raised practice scores 48% but cut unaided exam scores 17%, and students didn't notice. A tutor that gave only hints, loaded with teacher solutions and common mistakes, raised practice scores 127% with no significant harm on the exam ([Bastani et al., PNAS 2025](https://www.pnas.org/doi/10.1073/pnas.2422633122)).
- **In programming courses,** Harvard's CS50 Duck is designed to guide students toward answers rather than give them, and students said it felt like having a personal tutor ([Liu et al., SIGCSE 2024](https://cs.harvard.edu/malan/publications/V1fp0567-liu.pdf)). CodeAid answered conceptual questions and pointed out errors in students' code without revealing full solutions, for 700 students over 12 weeks ([Kazemitabaar et al., CHI 2024](https://dl.acm.org/doi/10.1145/3613904.3642773)).
- **How learners use AI matters.** In Anthropic's trial, the learners who scored well asked for explanations, asked conceptual questions, or fixed errors themselves. Those who handed everything over, or used AI to debug instead of to understand, scored worst ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). Tutor mode builds the first pattern in.
- **Debugging is what AI erodes most** in that trial, which is why the Debug Clinic is AI-off, with tutor mode as the only help.

The landscape report suggested exactly this design (a hint-only Gem, seeded with solutions and common mistakes, as the only AI in the no-AI debugging weeks) while noting that it hasn't been tested as a course design ([landscape report](../research/landscape-report-2026-09.md)).

## Limitations

- **It's a prompt, not a lock.** A student can open a new chat without it, or argue the model round. Long conversations can make the model drift and show more code than it should.
- **It hasn't been evaluated in this form.** CS50's Duck and CodeAid are purpose-built systems, with features this prompt doesn't have (CS50 also limits how much students can use its Duck).
- **Feeling tutored isn't the same as learning.** Prather et al. observed a student who *felt* the AI was acting as a tutor but didn't actually use it that way ([Prather et al., "The Widening Gap"](https://juholeinonen.com/assets/pdf/prather2024widening.pdf)).
- **It can be wrong.** Like any model, the tutor can give a misleading hint. Students should check hints against what the code actually does.

**Why that's acceptable:** the goal is **transparency, not enforcement**. Tutor mode makes the honest path the easy one; `PROMPTS.md` records how it was used; and the oral walkthroughs check understanding directly. Don't police students' chats. If someone skipped the tutor and pasted the answer, it will show when they can't explain the fix, and that is a learning conversation, not a disciplinary one.

## A second prompt: quiz me

For practicing before an oral walkthrough, or for self-paced learners who have no one to explain their code to. Paste a function from **your own** project after sending this. (The real walkthrough is AI-free; practicing with AI beforehand is fine.)

```text
You are an examiner helping me practice for an oral walkthrough in Vibe Coding 101, a beginner web development course. I will paste a function or file from my own project.

Rules:
1. Ask me one question at a time about the code. Start easy and get harder: what the code does overall; what one specific line does; what would happen with an unusual input (empty, very long, a number instead of text); how I would change it to do something slightly different; where a bug could hide.
2. Don't explain the code yourself and don't give me the answers. After each answer, tell me in one or two sentences whether I was right, partly right or wrong, and why. Then ask the next question.
3. After five questions, give me a short summary: what I explained well, and one thing I should study before the real walkthrough.
4. Use plain English. If I paste an API key, a password or personal data, tell me to delete it.

Start by asking me to paste the code I want to practice on.
```

Related: [oral walkthrough protocol](../assessment/oral-walkthroughs.md) · [six skills without AI](../resources/without-ai-skills.md) · [Debug Clinic](../weeks/04-read-debug-own-it/debug-clinic/README.md)
