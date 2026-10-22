# Project 1: A Tool I'd Actually Use (weeks 3–4)

> Build a small web tool you will really use, from a spec you wrote yourself, in plain HTML, CSS and JavaScript you can read. Then prove it works.

| Item | Details |
|---|---|
| **Weeks** | 3–4 |
| **Repo** | Its own public repo, named after your tool, for example `plant-tracker` ([naming](README.md#naming-conventions)) |
| **Live at** | `https://[username].github.io/[repo-name]/` on GitHub Pages |
| **Built with** | Plain HTML, CSS and JavaScript. Data saved with `localStorage`. No frameworks, no build step, no server |
| **Tools** | Week 3: app builders (bake-off), a chat assistant and a GitHub Codespace. Week 4: the same Codespace, with VS Code and Copilot. Current tools and fallbacks: [TOOLS.md](../TOOLS.md) |
| **Due** | **v1:** end of week 3 · **Final:** end of week 4 (each before the next week's Studio A, default 11:59 pm the night before) |
| **Graded as** | [Project 1 rubric](../assessment/rubrics.md#project-1) (10% of the course), plus [oral walkthrough 1](../assessment/oral-walkthroughs.md#walkthrough-1-week-4) |
| **Step-by-step labs** | [Week 3 lab](../weeks/03-spec-first/lab.md) · [Week 4 lab](../weeks/04-read-debug-own-it/lab.md) |

## The brief

Pick a small, everyday problem that **you** have. Write a one-page spec for a tool that solves it. Use AI to build it from that spec, then make it yours: read it, test it, fix it and add one feature you write yourself.

The tool must:

- do **at least three different things** for its user (for example add an entry, mark it done, and show a summary);
- be **single-user**: one person, one browser, no accounts;
- **save its data in the browser** with `localStorage`, so it's still there after a reload;
- be written in **plain HTML, CSS and JavaScript** that you can open and read;
- be **live on GitHub Pages**.

## Why this project

- **You are the user.** When you use your own tool, you notice bugs and missing features, and you care about fixing them. Courses that have learners build tools around their own lives use exactly this idea ([Coursera: Build Anything with AI](https://www.coursera.org/learn/build-anything-with-ai)).
- **The spec comes first.** AI builders get you most of the way fast, then stall on edge cases. Addy Osmani calls this the ["70% problem"](https://addyo.substack.com/p/the-70-problem-hard-truths-about). A spec with testable criteria tells you exactly what the last 30% is. In a 2026 study, students' writing skill predicted how well they vibe-coded ([Thorgeirsson et al.](https://arxiv.org/abs/2603.14133)), so the spec is a core skill, not paperwork.
- **Edge cases are where the grade is.** When researchers watched students vibe code, only 2.2% of their tests tried edge cases, and none wrote a unit test ([Geng et al.](https://arxiv.org/pdf/2507.22614)). This project makes you check the unusual cases on purpose, and write your first automated test.
- **Plain files you can read.** In week 4 you will debug this code with the AI switched off. That is only fair if the code is small and readable, so no frameworks.

## What "single-user" and `localStorage` mean

[`localStorage`](../resources/glossary.md#localstorage) is a small storage box that each browser keeps for each website. Your tool can save text there and read it back after a reload.

- The data stays **in that one browser on that one device**. If you open your tool on your phone, it starts empty.
- Other visitors to your live site each get **their own empty box**. They can't see your data, and you can't see theirs.
- Clearing the browser's site data deletes it.

That's why this project is single-user: there is no server and no shared database. Sharing data between people needs a server and access rules, which you will learn in weeks 5–7.

## Requirements

Everything on this list must be in your final submission.

**The tool**

- [ ] At least three distinct features, matching the MUST stories in your spec.
- [ ] Files: `index.html`, `style.css`, `app.js` (you may split JavaScript into more files). No frameworks, no npm packages, no build step.
- [ ] Data is saved in `localStorage` and survives a page reload.
- [ ] Live on GitHub Pages.
- [ ] One feature that **you wrote yourself** in week 4 Studio B ("You write it"): pick a feature card, follow its plan, and fill in the code skeleton by hand. The AI may plan and review, but you write the code. Name the feature in `PROMPTS.md`.

**The documents** (all at the top level of the repo)

- [ ] **`SPEC.md`**, written by you from the [SPEC template](../templates/SPEC.md), with at least **5 acceptance criteria** in the form WHEN … THE APP SHALL …, including **at least 2 edge cases**, revised after your **Goldfish test** (below).
- [ ] **`TESTS.md`**, from the [TESTS template](../templates/TESTS.md), with a manual test for every acceptance criterion, including **at least 3 edge-case tests**, each with a dated result.
- [ ] **One automated test**, as in the week 4 worked example: a test of a **pure function** (one that only takes inputs and returns a result, without touching the page), in a `tests/` folder, passing with `node --test`. Paste the output in `TESTS.md`.
- [ ] **`PROMPTS.md`**, from the [PROMPTS template](../templates/PROMPTS.md): your key prompts, what went wrong, your Goldfish test, short teach-back notes on AI-written changes (2–3 sentences: what changed and why), and what you changed or wrote yourself.
- [ ] **`README.md`**, from the [project README template](../templates/PROJECT_README.md), with the live URL, an **acceptance table** ("Status against the spec") that matches what the tool really does, and an honest **Known issues** list.

**The history**

- [ ] At least 6 commits with messages that say what changed. One giant "upload files" commit doesn't show your process. Commits made with AI help can end with an `Assisted-by: [tool]` line (required from week 6).

## Timeline

| When | What happens | What you should have |
|---|---|---|
| **Week 3 Studio A** | Write your spec (about 35 minutes). Swap specs for a **peer spec review**, then write your review of your classmate's spec on Canvas. Run the **Goldfish test** on your own spec. | A reviewed `SPEC.md` |
| **Week 3 Studio B** | The builder **bake-off**: you run a spec in one app builder while your partner runs it in another, you each score the result against the spec's criteria, and then you compare scorecards ([scorecard](../weeks/03-spec-first/bake-off-scorecard.md)). Then start **your** Project 1 in a Codespace: build in Safe Loop order, preview it before you commit. | A first working version in your own repo |
| **End of week 3: v1** | Submit v1 ([week 3 homework](../weeks/03-spec-first/homework.md)). | v1 live on GitHub Pages and passing **at least half of your MUST criteria**; `SPEC.md` revised after review and the Goldfish test; a `README.md` with the live URL and an acceptance table that says honestly what passes; `PROMPTS.md`. Your scorecard's **Verdict** goes on Canvas as your week 3 reflection |
| **Week 4 Studio A** | **Debug Clinic** with the AI off. | — |
| **Week 4 Studio B** | `git log`, `git diff` and `git revert` practice, then **oral walkthrough 1** slots on this project. **"You write it":** add one feature yourself from a feature card. The **first automated test**, as a worked example. | A feature you wrote; an automated test; a `TESTS.md` in progress |
| **End of week 4: final** | Submit the final version. | Everything on the requirements list |

The app builders in week 3 are for learning what they do well and badly. You keep plain files because you need to be able to read and debug them in week 4. The [week 3 lab](../weeks/03-spec-first/lab.md) shows one way to do this: hand your `SPEC.md` to a chat assistant and ask for exactly three files.

### Preview before you commit

From week 3 you build in a Codespace, and you **look at the result before you commit it**, in Safe Loop order: describe, plan, one small step, test it in the preview, read the diff, then commit. To preview, run this in the Codespace terminal and open the forwarded port:

```bash
python3 -m http.server 8000
```

**Blank page in the preview?** Open DevTools (F12, or right-click → Inspect) and look at the **Console** tab. A red error usually names the file and line that broke.

## Repository layout

```text
plant-tracker/
├── index.html
├── style.css
├── app.js
├── [logic].js          ← pure functions your test imports (week 4), if you split them out
├── SPEC.md
├── TESTS.md
├── PROMPTS.md
├── README.md
├── tests/
│   └── [logic].test.js ← your automated test (week 4)
└── docs/
    ├── wireframe.jpg
    └── screenshot.png
```

Your reflections, your bake-off Verdict and your peer review go on Canvas, not in the repo ([why](../assessment/README.md#privacy-of-your-work)).

## Your SPEC.md

🟡 **AI limited: you write the spec.** Write the first draft with the AI off (week 3 Studio A). After that the AI may ask questions and critique it ("What is ambiguous? Which edge cases am I missing?") but not write it. A good example: [example spec](../weeks/03-spec-first/example-spec.md).

Aim for acceptance criteria that anyone could check by using the tool:

| Weak | Strong |
|---|---|
| The list should handle empty input nicely. | WHEN I press Add with an empty box, THE APP SHALL add nothing and SHALL show "Please type something". |
| It remembers my stuff. | WHEN I reload the page, THE APP SHALL show the same entries in the same order. |
| Works on phones. | WHEN the screen is 375 pixels wide, THE APP SHALL show every button without sideways scrolling. |

**Edge cases** are the unusual-but-possible situations: empty input, very long input, duplicates, special characters, reloading, a small screen, the first visit when nothing is saved yet.

**The Goldfish test.** Paste only your `SPEC.md` into a fresh chat (no other context) and ask what it would build. If it has to ask you questions, or gets something wrong, the spec isn't clear enough yet. Log what it asked or got wrong in `PROMPTS.md`, and revise the spec. The rubric gives credit for the revision.

If your plans change while you build, update the spec and its "Last updated" date. A spec that matches the tool is worth more than a spec that matches your first idea.

## Your TESTS.md

- Write one manual test per acceptance criterion: numbered steps and the expected result.
- At least **three** tests must be edge cases. Mark them "(edge case)".
- Run every test and record the date and the result. A test that failed, and then passed after a fix, is the best evidence you can show. Log it under "Bugs found by testing".
- Try typing `<b>hi</b>` as input. If the text shows up **bold**, your tool is treating typed text as code; ask the AI why, and fix it (the usual fix is `textContent` instead of `innerHTML`).
- Add your **automated test** from week 4: what it checks, and the `node --test` output.

## Your README

Start from the [project README template](../templates/PROJECT_README.md). For this project:

- In **Run it yourself**, replace the npm commands with: open the live site; or, in a Codespace, run `python3 -m http.server 8000` and open the forwarded port. To run the test: `node --test`.
- In **How it works**, the data row is `localStorage`, with the key name you used.
- **Authorization is enforced in:** "n/a: single-user tool, data stays in your own browser."
- The **Status against the spec** table lists every acceptance criterion as passing, partly passing (say what's wrong) or failing. Honest beats perfect.
- **Known issues:** anything that doesn't work yet, or works only partly. Naming a real limitation never costs points.

## Idea list

Choose something you'd use this month. Each idea below lists an edge case worth putting in your spec.

| Area | Idea | Three features | An edge case to specify |
|---|---|---|---|
| Study | Assignment tracker | add a task with a due date; mark done; sort by due date | a task with no due date |
| Study | Flashcards | add a card; flip it; mark "knew it" or "didn't" and see a score | deleting the card you're looking at |
| Study | Study session timer | start and stop a timer; log sessions by subject; total time per subject | reloading while the timer runs |
| Study | Vocabulary list | add word and meaning; quiz yourself; mark words as learned | the same word added twice |
| Home | Grocery list | add items; tick them off; clear ticked items | clearing when nothing is ticked |
| Home | Chore rota | list chores; assign them to "Person A/B/C"; rotate weekly | a week with more chores than people |
| Home | Plant watering log | add plants; log a watering; show which are due | a plant never watered yet |
| Home | Recipe scaler | save a recipe; scale it by servings; convert units | scaling to 0 servings |
| Money | Spending log | add an amount and category; total per category; monthly view | a negative or non-number amount |
| Money | Savings goal | set a goal; log deposits; show progress | deposits that go past the goal |
| Health | Habit tracker | list habits; check off today; show a streak | a missed day in the middle of a streak |
| Health | Water or sleep log | log an entry; daily total; last 7 days | two entries at the same time |
| Health | Workout log | log exercise and reps; list by date; show personal best | a new record equal to the old one |
| Hobbies | Reading log | add a book; mark as reading or finished; count per month | a very long title |
| Hobbies | Watchlist | add a film or show; rate it; filter by rating | a rating outside 1–5 |
| Hobbies | Board-game scorekeeper | add players; add points per round; show the winner | a tie |
| Hobbies | Practice log (music, art, language) | log a session; notes per session; weekly total | an empty note |
| Everyday | Packing list | pick a trip type; generate a checklist; tick items | switching trip type halfway |
| Everyday | Countdown board | add events with dates; show days left; sort by soonest | an event date in the past |
| Everyday | Decision helper | list options; score them on criteria; show the winner | two options with the same score |

**Is it the right size?** Too small: it does one thing, like a calculator with one button. Too big: it needs accounts, sharing between people, a server, an API key or live data from the internet. Those belong in weeks 5–8, and some make great capstone ideas ([capstone ideas](capstone-ideas.md)).

**About personal data:** anything about other people (housemates, friends) goes in as nicknames or "Person A". Your own data stays in your own browser, but the repo is public, so never commit real entries in your code or screenshots.

## AI use on this project

| Label | On Project 1 |
|---|---|
| 🟢 **AI on** | Generating the tool from your spec, asking for explanations, planning, reviewing your diffs, suggesting test cases |
| 🟡 **AI limited** | `SPEC.md`: the AI may ask questions, critique it and run the Goldfish test, but you write it. The Debug Clinic: AI off, then hint-only [tutor mode](../instructor/course-tutor.md) after 10 minutes stuck on one bug. "You write it": the AI may plan and review, but you write the code |
| 🔴 **AI off** | The first draft of your spec (week 3 Studio A); your week 3 and week 4 reflections, including the bake-off Verdict; your peer review of a classmate's spec; your teach-back notes and the "What I wrote or decided myself" section of `PROMPTS.md`; exit tickets; oral walkthrough 1 |

The complete list is in [section 8 of the syllabus](../SYLLABUS.md#8-ai-use-policy). "If you can't explain it, you didn't build it." You may be asked about any line you submit.

## How it's graded

The [Project 1 rubric](../assessment/rubrics.md#project-1) puts most of the points on your spec, your tests and your process. Whether the tool works counts, but it is only one row. [Oral walkthrough 1](../assessment/oral-walkthroughs.md#walkthrough-1-week-4) uses this project: you'll explain a function, find a failing line from an error message, make a small change and revert a commit, with the AI off.

## Submit

Follow [How to submit](README.md#how-to-submit): on Canvas, the repo URL, live URL and the link to your final commit, for v1 and again for the final version.

## If you get stuck

- **The builder's output is React or has many files you don't understand:** don't keep it. Use the bake-off to learn, then ask a chat assistant to build from your `SPEC.md` in plain HTML, CSS and JavaScript only.
- **Blank page:** open the Console in DevTools and read the red error (see [Preview before you commit](#preview-before-you-commit)).
- **Data disappears on reload:** open DevTools → Application → Local Storage and check whether anything is saved. Ask the AI to explain its save and load code line by line. The [web basics](../resources/web-basics.md) page explains DevTools.
- **Two failed fixes in a row:** the [two-strikes rule](../resources/safe-loop.md#the-two-strikes-rule). Go back to your last good commit and start a fresh chat.
- **Your v1 doesn't work by week 4:** talk to your instructor about the [rescue starter](rescue-starters/study-timer/), a working tool you can continue from so you can still take part in week 4.
- **Out of credits:** [I ran out of free credits](../resources/troubleshooting.md#i-ran-out-of-free-credits).
