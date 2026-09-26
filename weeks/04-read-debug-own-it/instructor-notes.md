# Week 4 Instructor Notes — Read It, Debug It, Own It

This week gives students their first success at reading and fixing code before agents arrive. The Debug Clinic is the heart of it. Protect its 45 minutes, keep it AI-off, and answer questions with questions ("What does the Console say? Which line?"). Oral walkthrough 1 runs alongside the lab.

The answer key, with every fix, the teaching points and a menu of alternative bugs, is in [instructor/answer-keys/week-04-debug-clinic.md](../../instructor/answer-keys/week-04-debug-clinic.md). It is public if your copy of the course is public.

## Prep checklist

**One week before**

- [ ] Publish the kit as a template repository (`scripts/publish-starters.sh`, see [CONTRIBUTING.md](../../CONTRIBUTING.md#forking-for-your-own-course)), or test the fallback in [setup/codespaces.md](../../setup/codespaces.md#start-a-project-from-a-starter) in a fresh repository.
- [ ] Do the clinic yourself in a fresh Codespace with the answer key (15 minutes). Check that:
  - the kit's `.vscode/settings.json` really switches off Copilot's suggestions (type `function` in `app.js`: no grey text should appear) and that the manual steps in [lab Part 2](lab.md#part-2--debug-clinic-45-min-ai-off) still match the menus;
  - the error messages match the answer key.
- [ ] Decide whether to swap one or two bugs from the [bug menu](../../instructor/answer-keys/week-04-debug-clinic.md#bug-menu-vary-the-clinic-between-cohorts) (always do this for repeat cohorts). Update the kit's bug reports and hint cards to match.
- [ ] Check that the [course tutor prompt](../../instructor/course-tutor.md) still behaves in the current chat assistant: give it bug 3 and confirm it gives hints, not the fix.
- [ ] Check that Copilot Chat still has an **Ask** mode and that `#changes` works (lab Part 3). Update the lab if the names changed.
- [ ] Schedule [oral walkthrough 1](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4): about 10 minutes per student. A TA can do four or five during the lab; book the rest into office hours before the Project 1 deadline.

**The day before**

- [ ] Build the **demo app**: a repository with the kit's `index.html` and `style.css` and the **reference** `app.js` from the answer key, with bugs **M3** (`booklist` typo) and **M6** (percentage parentheses) planted. These aren't in the clinic, so the demo spoils nothing.
- [ ] Print the [hint cards](debug-clinic/hint-cards.md), cut into strips, one set per table, face down. Optional: a bounty board (a whiteboard with pair names × bugs 1–5).
- [ ] Message students: "Stop your week 3 codespaces; you'll need your free hours today" ([TOOLS.md](../../TOOLS.md) has the current quota).

## Run sheet

| Time | What happens | Your notes |
|---|---|---|
| 0:00–0:10 | Show and tell: two Project 1 version 1s | Pick one that passes its criteria and one with an honest failing criterion |
| 0:10–0:30 | [Slides](slides.md) (19 slides) | The research slides (2–4) take 3 minutes and are worth it: they explain *why* the AI is off |
| 0:30–0:40 | Live demo (script below) | |
| 0:40–0:50 | Lab Part 1: Project 1 in a Codespace | Most problems here are pop-up blockers and ports. Point students to the **Ports** tab |
| 0:50–1:35 | Lab Part 2: **Debug Clinic**, AI off | Set-up takes the first 5 minutes. Announce the time at 1:05 and 1:20. Circulate, asking questions only. Log which bug each pair is on |
| 1:35–1:45 | Break | |
| 1:45–2:05 | Lab Part 3: AI plans, you write, AI reviews | Walkthroughs start. Check that Ask mode is selected, not Agent |
| 2:05–2:20 | Lab Part 4: TESTS.md and `git revert` | Watch for students stuck in the terminal pager (`q`) |
| 2:20–2:45 | Debug Clinic debrief | Follow "Running the debrief" in the answer key: 5 minutes per bug, students narrate the method |
| 2:45–3:00 | Exit ticket (AI-free), homework preview | Remind everyone to stop both codespaces before they leave |

## Live demo script (10 minutes)

**A. Debugging with the method (6 min)**, on the demo app (reference + M3 + M6):

1. Open the app. The list is empty, and "Add 3 sample books" shows nothing in the list. Say: "**Reproduce**: I can make it happen every time."
2. Open DevTools → Console. Read the whole error aloud: `ReferenceError: booklist is not defined`. Point to the type, the message and `app.js:125`. Read the stack trace from top to bottom. "**Isolate**: line 125, inside `render`."
3. "**Hypothesize**: I think `booklist` is misspelled, because the variable at the top is `bookList`." "**Test**: I'll type `booklist` in the Console. ReferenceError. `bookList`? That's the list." Fix the capital L. "**Verify**": reload and add the samples.
4. Now there's no error, but *The Time Machine* shows 0% at 40/118. "No red text. Now what?" Add `console.log(book.pagesRead / book.totalPages)` above the percentage line, reload: 0.339. Hypothesize about `Math.round` and the brackets. Fix it, verify, **remove the console.log**, commit with a clear message.

**B. The AI plans, you write, the AI reviews (4 min):**

1. Open Copilot Chat, choose **Ask**, attach `app.js`, and paste the plan prompt from [lab Part 3](lab.md#part-3--the-ai-plans-you-write-the-ai-reviews-20-min) for the feature "a **Clear all** button that asks for confirmation", with the criterion *WHEN I press Clear all and confirm, THE APP SHALL remove every book and show "No books yet"*.
2. Read the plan aloud. Delete or edit one step you disagree with. Say why.
3. Type the code yourself (about six lines: a button in the HTML, a listener, `confirm`, `books = []`, `saveAndRender()`), with suggestions off. Make one small mistake on purpose (for example, forget `saveAndRender()`), so there's something to find.
4. Run the review prompt with `#changes`. Show that it catches the mistake, or catch it yourself by testing a reload. Fix it and commit.

## Common pitfalls

| Pitfall | What you'll see | What to do |
|---|---|---|
| **"I can't read code"** | A frozen student staring at `app.js` | Make them the **driver** with a confident navigator who must explain, not type. Start them on the Console, not the code: "Read me the red line." Bug 1 is a win anyone can get. Point to [web-basics](../../resources/web-basics.md) and the [glossary](../../resources/glossary.md) |
| **Anxiety about AI-off time** | "I'm not a programmer, I can't do this without AI" | Say it out loud: discomfort is expected and is the point. The points aren't graded. The 10-minute rule means nobody is stuck for long. Praise good hypotheses, even wrong ones |
| **Codespace quota** | "You've used your free hours" or codespaces that won't start | Two codespaces per student today. Stop both at the end ([github.com/codespaces](https://github.com/codespaces)). Idle codespaces stop on their own after a timeout, but don't rely on it |
| **Kit copied into Project 1 by mistake** | Project 1's `index.html` is suddenly the Reading Log | The fallback copy command overwrites files in whatever folder it runs in. If the damage isn't committed, `git restore .` brings the Project 1 files back; delete the extra kit files by hand. If it was committed, `git revert HEAD` |
| **Pasting into a normal AI chat** | A perfect fix with no explanation | The bounty only counts with the cause explained in their own words. Ask them to explain; if they can't, no points, and restart that bug |
| **Rewriting instead of fixing** | Whole functions replaced; features gone (for example, `.reverse()` deleted for bug 4) | "Smallest change that fixes the cause." For bug 4, have them test the **Finished** filter: removing `.reverse()` only hides the bug |
| **Bug 5 "still broken" after a correct fix** | The warning appears once more after the fix | Old broken data is still stored. Add a book, or run `localStorage.clear()`, then reload |
| **Copilot still suggesting in the clinic** | Grey ghost text in `app.js` | The workspace settings didn't apply. Use the manual steps in lab Part 2 |
| **Agent mode in Part 3** | Files changing by themselves | Switch the chat to **Ask**. Agents arrive in week 6. Undo with Source Control's discard, or `git revert` if it was committed |
| **Copilot credits run out** | Chat stops responding with a usage message | Use the chat assistant in a browser tab with the same prompts. Note it in PROMPTS.md |
| **Stuck in a terminal editor** | A `git revert` without `--no-edit` opened an editor | If it's a VS Code tab, close it. If it's the Vim editor in the terminal, type `:wq` and press Enter |
| **Looking up the answer key** | Instant fixes, no process | It's public; don't make the clinic high-stakes. Ask for the method narration. For repeat cohorts, swap bugs from the menu |

## Differentiation

- **Struggling pairs:** aim for bugs 1–3. Hand out hint cards without the point penalty. Bugs 1 and 2 teach the most important without-AI skill: read an error and find the line.
- **Fast pairs:** give them a bonus bug from the menu (M4 "script in the head" and M12 "key mismatch" are the hardest), or ask them to set a breakpoint and step through `render`. Or make them "Socratic TAs" who may only ask questions of other pairs.
- **Experienced programmers:** ask them to explain *why* `"40" <= 0` works but `40 + "5"` doesn't, and to write an automated test that would have caught bug 3. That needs a pure function, which is the homework stretch.
- **Students without a partner:** join a pair as a second navigator, or work alone with the hint cards; the bounty still applies.

## Fallback plans

| Problem | Plan |
|---|---|
| Codespaces is down or quotas are exhausted | Clinic: students download the kit as a ZIP (from the course repository or the template) and open `index.html` directly in their browser. The classic script and localStorage work without a server, and DevTools works the same. Part 3: github.dev for editing and GitHub Pages for running (a slower loop). Part 4b moves to week 6 |
| Copilot is unavailable | Part 3 uses the chat assistant in a browser tab with the same prompts; students paste the code to be reviewed |
| Tutor mode is unavailable | Hint cards plus you and your TAs |
| Running late | Cut Part 4 to TESTS.md only and move the `git revert` practice to homework. Never cut the clinic below 35 minutes or skip the debrief |
| The projector fails during the demo | Narrate the demo from the error messages printed in the answer key |

## Oral walkthrough 1 logistics

- Follow [assessment/oral-walkthroughs.md](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4): AI off, 10 minutes, on the student's **own** Project 1, running in their Codespace.
- For the **examiner's break**, use the protocol's list of one-line breaks. The bug menu's M3 (a name typo), M1/M2 (a missing bracket or quote), M7 (a boundary) and M12 (a storage key) are the same kinds of change, adapted to any app. Never re-use one of the five clinic bugs exactly.
- Keep notes against the rubric while you talk. Students who can't explain a part of their code get a follow-up in office hours, not a surprise at the deadline.

## After class

- Check the bounty board or `BUGS.md` files: which bug stopped most pairs? Start week 5 with two minutes on it.
- Remind students on the course channel to stop their codespaces.
- Scan the exit tickets for anyone who couldn't find the failing line from an error message. That's the first of the six without-AI skills ([resources/without-ai-skills.md](../../resources/without-ai-skills.md)); offer them office-hours practice with a bug from the menu.
