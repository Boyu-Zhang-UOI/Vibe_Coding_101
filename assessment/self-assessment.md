# Self-Assessment: Before and After

> A 15-minute survey you take at the start of the course and again at the end. It shows how your confidence and your understanding changed, and whether they match.

🔴 **AI off, and not graded.** Answer on your own, without AI or search. There's no penalty for wrong answers or low ratings. The only way to get this wrong is to guess what you think we want to hear.

## Why we do this

Two things can grow in a course like this: how confident you feel, and what you can actually do. They don't always grow together. In one study, students who struggled with AI tools finished believing they had done better than they had ([Prather et al.](https://dl.acm.org/doi/10.1145/3632620.3671116)). Experienced developers in another study were 19% slower with AI but believed they were about 20% faster ([METR 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)).

No controlled study yet shows how much programming knowledge non-programmers need to vibe-code safely, so this course measures its own students' understanding before and after ([landscape report](../research/landscape-report-2026-09.md)). Your answers help you see your own progress, and help us improve the course.

## When and how

| | Pre-course | Post-course |
|---|---|---|
| **When** | Week 0 (with setup) or week 1 (the week 1 homework includes it) | Week 8, with your final submission |
| **Time** | About 15 minutes | About 15 minutes |
| **Format** | Paper, or a form set up by your instructor | The same questions |
| **Graded?** | No. Completion is noted | No. Completion is noted |

Keep a copy of your answers. Your final capstone reflection asks you to compare them.

---

## Part A: Confidence

For each statement, circle how confident you are **right now**.

**Scale:** **1** I wouldn't know where to start · **2** Only with a lot of help · **3** With some help · **4** On my own, slowly · **5** On my own, and I could explain it to someone else

| # | I could… | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|---|
| C1 | explain in plain words what an AI model is doing when it writes code | ☐ | ☐ | ☐ | ☐ | ☐ |
| C2 | write a prompt that gets an AI to build a small feature I can check | ☐ | ☐ | ☐ | ☐ | ☐ |
| C3 | write a one-page plan (spec) for an app, with requirements someone else could test | ☐ | ☐ | ☐ | ☐ | ☐ |
| C4 | publish a web page so that anyone with the link can see it | ☐ | ☐ | ☐ | ☐ | ☐ |
| C5 | save versions of my work and go back to an earlier one if something breaks | ☐ | ☐ | ☐ | ☐ | ☐ |
| C6 | read an error message and find the line of code that caused it | ☐ | ☐ | ☐ | ☐ | ☐ |
| C7 | explain, line by line, a short piece of code that I didn't write | ☐ | ☐ | ☐ | ☐ | ☐ |
| C8 | test an app with unusual inputs, not just the normal case | ☐ | ☐ | ☐ | ☐ | ☐ |
| C9 | keep a secret key safe when building an app that needs one | ☐ | ☐ | ☐ | ☐ | ☐ |
| C10 | say who can read and change the data in an app I built | ☐ | ☐ | ☐ | ☐ | ☐ |
| C11 | let an AI agent change my project safely, and check what it did | ☐ | ☐ | ☐ | ☐ | ☐ |
| C12 | switch to a different AI tool when my usual one stops working | ☐ | ☐ | ☐ | ☐ | ☐ |

## Part B: Concept checks

Answer each question. In the pre-course survey it's fine to write "I don't know"; that's useful information too.

**Q1.** Your app is published on the web. Its code is stored in a **private** repository. The project contains these files:

- `public/index.html` (the page)
- `public/app.js` (the page's JavaScript)
- `api/ask.js` (code that runs on the server)
- `.env` (settings, including a secret key, on your computer only)
- `README.md` (notes about the project)

**Which of these files can a visitor to your website see or download? Tick all that apply.**

☐ `public/index.html` ☐ `public/app.js` ☐ `api/ask.js` ☐ `.env` ☐ `README.md` ☐ I don't know

**Q2.** Your app uses a paid AI service that needs a secret key. **Where should the key live?**

- ☐ (a) At the top of `app.js`, so the page can use it
- ☐ (b) In a hidden field in `index.html`
- ☐ (c) In an environment variable that only the server code reads
- ☐ (d) In a code comment, so you remember it
- ☐ I don't know

**Q3.** **Which of these requirements could someone test by using the app?**

- ☐ (a) "The app should be fast and easy to use."
- ☐ (b) "WHEN I press Add with an empty box, THE APP SHALL add nothing and SHALL show 'Please type something'."
- ☐ (c) "The app handles errors well."
- ☐ (d) "The app should look modern."
- ☐ I don't know

**Q4.** Your browser shows this error:

```
Uncaught ReferenceError: scroe is not defined
    at app.js:22
```

**Which file and line would you look at, and what's most likely wrong?** (One or two sentences.)

Answer: ____________________________________________________________

**Q5.** You saved a change to your project that broke it, and you want to undo that change **while keeping a record of what happened**. **What's the best option?**

- ☐ (a) Delete the project and start again
- ☐ (b) Use git to "revert" the bad change
- ☐ (c) Keep editing files until it works again
- ☐ (d) Ask the AI to undo everything it did today
- ☐ I don't know

**Q6.** Your web page talks directly to a database using a key that anyone can see in the browser. **What stops a stranger from reading everyone's data?**

- ☐ (a) Nothing needs to: the key is long, so nobody can guess it
- ☐ (b) Access rules in the database that decide who can read or change each row
- ☐ (c) Hiding the key in a file with a confusing name
- ☐ (d) The padlock (HTTPS) in the address bar
- ☐ I don't know

## Part C: Two open questions

**Pre-course:** What do you most want to be able to build or do by the end of this course?

**Post-course:** What can you do now that you couldn't do in week 1? What do you still want to learn?

---

## For instructors: answer key and scoring

> [!NOTE]
> Students: the key is here because this repository is public. The survey only helps you if you answer before you look.

<details>
<summary><strong>Answer key (open after the survey)</strong></summary>

Part B is scored out of **8**: Q1 and Q4 are worth 0–2, the others 0–1.

| Q | Answer | Points | Why |
|---|---|---|---|
| **Q1** | `public/index.html` and `public/app.js` only | **2** for exactly those two · **1** for both plus one wrong file, or only one of the two · **0** otherwise | Everything in `public/` is sent to the visitor's browser, where anyone can read it. `api/ask.js` runs on the server and is never sent. `.env` is never committed or deployed. `README.md` isn't served, and the repo is private. (If the repo were public, anyone could read `api/ask.js` and `README.md` on GitHub, which is fine, because neither holds the key.) |
| **Q2** | (c) | **1** | Only the server reads environment variables. Anything in `app.js` or `index.html` is public. |
| **Q3** | (b) | **1** | It names a situation and an observable result. The others can't be checked. |
| **Q4** | `app.js`, line 22: a misspelled or undefined variable (`scroe` should probably be `score`) | **2** for the file and line **and** the misspelling · **1** for one of the two · **0** otherwise | Reading an error message is one of the six skills you must show without AI. |
| **Q5** | (b) | **1** | A revert adds a new commit that undoes the bad one, so the history is kept. |
| **Q6** | (b) | **1** | Row-level security. A public key plus missing access rules means a public database (the Lovable and Moltbook breaches, see [case studies](../resources/case-studies.md)). |

**Matching confidence items to concept checks** (for the calibration step below):

| Confidence item | Concept check |
|---|---|
| C3 (write a spec) | Q3 |
| C5 (go back to an earlier version) | Q5 |
| C6 (read an error message) | Q4 |
| C9 (keep a key safe) | Q1, Q2 |
| C10 (who can read and change data) | Q6 |

</details>

## For instructors: comparing pre and post

The goal is a simple, honest picture of what your cohort learned. It isn't a research study unless you set it up as one.

### Collect

- Give the same survey in week 0 or 1 and in week 8. Don't hand back the answer key after the pre-course survey.
- To compare, you need to match each student's two surveys. Use names, or let students choose a code word they write down and reuse. Store results where only staff can see them.

### Analyze (a spreadsheet is enough)

One row per student; columns for each item, pre and post.

1. **Concept score.** Pre total and post total (out of 8). Gain = post − pre. If you want a gain that accounts for where students started, use (post − pre) ÷ (8 − pre), skipping students who scored 8 before.
2. **Per question.** The percentage of students who got each concept check right, pre versus post. Which ideas moved? Which didn't? The ones that didn't move point to the weeks to revise.
3. **Confidence.** The average rating for each confidence item, pre versus post.
4. **Calibration.** Using the matching table in the key, count students who rated themselves 4 or 5 on a confidence item but scored 0 on the matching concept check. This is "confident but wrong". The count should fall between pre and post. If it rises, the course may be building confidence faster than understanding.
5. **Cross-check with walkthrough 3.** Do students' post-course confidence ratings for C6 and C7 match their Debug and Explain scores in [walkthrough 3](oral-walkthroughs.md#walkthrough-3-week-8)?

### Use the results

- **Share an anonymous summary with the class in week 8.** Students find it motivating to see how much the group moved, and it supports the "felt versus actual" part of their final reflection.
- **Revise the course.** Feed the questions that didn't move into your instructor notes for next time.
- **Tell the maintainers.** If your institution allows it, share anonymous class-level results in an issue on the course repository. Every cohort's data helps fill the gap the research has left.

### Limits to keep in mind

- **Small numbers and no comparison group.** A gain shows that your students changed, not that this course caused it.
- **Same questions twice.** Some gain comes from having seen the questions before. If that worries you, write a parallel version for the post-course survey: change the file names, the error message and the scenario, but keep the structure.
- **Self-report.** Confidence ratings are opinions, which is exactly why Part B exists.
- **Don't grade it.** As soon as it's graded, students answer to score, not to be honest.
- **Publishing?** If you plan to publish results, get ethics approval (for example from an institutional review board) **before** the course starts.
