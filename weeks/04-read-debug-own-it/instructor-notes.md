# Week 4 Instructor Notes — Read It, Debug It, Own It

This week gives students their first success at reading and fixing code before agents arrive. Studio A is the **Debug Clinic**: protect its 60 minutes, keep it AI-off, and answer questions with questions ("What does the Console say? Which line?"). Studio B is about ownership: the git commands the walkthrough needs, the first code students write themselves, and their first automated test. Oral walkthrough 1 starts in Studio B, **after** the git practice.

The answer key, with every fix, the teaching points, the debrief plan and a menu of alternative bugs, is in [the Debug Clinic answer key](../../instructor/answer-keys/week-04-debug-clinic.md). It is public if your copy of the course is public.

## What changed from the one-studio version

- **The clinic has 60 minutes and its own debrief inside Studio A**, plus 15 minutes for students to look for the same five bugs in their own Project 1.
- **`git revert` practice comes before any walkthrough** (review finding H11). The walkthrough asks students to commit and revert from the terminal, so nobody is examined on it before they've practiced it.
- **"You write it" uses three feature cards** with a plan and a code skeleton with blanks, and gets 30 minutes (M1). This is the first code most students have ever written; the old 20-minute open-ended version was too much at once. The open-ended "AI plans, you write" version is the If-time option.
- **The first automated test is core** and taught as a worked example, test first (October research report, Priority 3: check first). Week 5's starter and the [Project 1 rubric](../../assessment/rubrics.md#project-1) Tests row both build on it.
- **`TESTS.md` moved to homework** (M1).
- **Reading load:** students read only "What to expect" on the walkthrough page, not the whole page (about 300 words instead of over 5,000).

## Prep checklist

**One week before**

- [ ] Publish the kit as a template repository (`scripts/publish-starters.sh`, see [CONTRIBUTING](../../CONTRIBUTING.md#forking-for-your-own-course)), or test the fallback in [Start a project from a starter](../../setup/codespaces.md#start-a-project-from-a-starter) in a fresh, empty repository.
- [ ] Do the clinic yourself in a fresh Codespace with the answer key (15 minutes). Check that the kit's `.vscode/settings.json` really switches off Copilot (type `function` in `app.js`: no grey text), that [Turn Copilot off for AI-off activities](../../setup/codespaces.md#turn-copilot-off-for-ai-off-activities) still matches the menus, and that the error messages match the answer key.
- [ ] Decide whether to swap one or two bugs from the [bug menu](../../instructor/answer-keys/week-04-debug-clinic.md#bug-menu-vary-the-clinic-between-cohorts) (always do this for repeat cohorts). Update the kit's bug reports and hint cards to match.
- [ ] Check that the [tutor mode prompt](../../instructor/course-tutor.md) still behaves in the current chat assistant: give it bug 3 and confirm it gives hints, not the fix.
- [ ] Check that Copilot Chat still has an **Ask** mode and that `#changes` works (lab Part 7). Update the lab if the names changed.
- [ ] Try all three feature cards on a typical Project 1 (the [rescue starter](../../projects/rescue-starters/study-timer/) works) and check that the blanks make sense. About 10 minutes.
- [ ] Run the test worked example (lab Part 8) in a fresh Codespace: `node --version` (Node.js 22 LTS; minimum 20.12), then red, green and the deliberate boundary failure. About 5 minutes.
- [ ] Schedule [oral walkthrough 1](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4): about 10 minutes per student plus changeover. Decide now whether you have a TA for Studio B (see the walkthrough logistics below), and open sign-up slots in office hours this week for everyone who won't fit.
- [ ] Set up the Canvas assignment for the week 4 reflection.

**The day before Studio A**

- [ ] Build the **demo app**: a repository with the kit's `index.html` and `style.css` and the **reference** `app.js` from the answer key, with bugs **M3** (`booklist` typo) and **M6** (percentage parentheses) planted. These aren't in the clinic, so the demo spoils nothing.
- [ ] Print the [hint cards](debug-clinic/hint-cards.md), cut into strips, one set per table, face down. Optional: a bounty board (a whiteboard with pair names × bugs 1–5).
- [ ] Message students: "Stop your week 3 codespaces; you'll need your free hours. Read only 'What to expect' on the walkthrough page, and book your slot." ([Tool Handout](../../TOOLS.md) has the current Codespaces quota.)
- [ ] Prepare the [week 4 exit ticket](../../assessment/exit-tickets.md#week-4) form for Studio B. It includes one question about last week's own project.

## Studio A run sheet (moved agenda)

| Time | What happens | Your notes |
|---|---|---|
| 0:00–0:05 | Recap: the most-missed week 3 exit-ticket question | One question, one worked answer |
| 0:05–0:25 | [Slides](slides.md), talk portion (slides 1–15) | The research slides take 3 minutes and are worth it: they explain *why* the AI is off |
| 0:25–0:35 | Live demo: debugging with the method (script below) | |
| 0:35–0:50 | Lab Part 1: map your own app | Most problems are pop-up blockers and ports. Point students to the **Ports** tab |
| 0:50–1:50 | Lab Part 2: **Debug Clinic**, 🔴 AI off | Set-up takes the first 10 minutes. Announce the time at 1:15 and 1:35. Circulate, asking questions only. Log which bug each pair is on |
| 1:50–2:00 | Break | |
| 2:00–2:25 | Lab Part 3: debrief | Follow "Running the debrief" in the answer key: 5 minutes per bug, students narrate the method |
| 2:25–2:40 | Lab Part 4: the five bugs in their own code | Walk the room; ask "Where does your app read a number?" |
| 2:40–2:50 | Part 5 (if time), or catch-up | |
| 2:50–3:00 | Checkpoint share: pairs read one claim aloud | Remind everyone to stop both codespaces |

## Studio B run sheet

| Time | What happens | Your notes |
|---|---|---|
| 0:00–0:10 | Show and tell: two Project 1s | Pick one that passes its criteria and one with an honest failing criterion |
| 0:10–0:30 | Lab Part 6: git log, diff, revert | 3-minute mini-lesson first (script below). Watch for students stuck in the pager (`q`) |
| 0:30–1:00 | Lab Part 7: feature cards | 2-minute intro (script below). Check that Ask mode is selected, not Agent, and that students type rather than paste. **Walkthroughs start now if you have a TA** |
| 1:00–1:10 | Break | |
| 1:10–1:40 | Lab Part 8: first automated test | 3-minute mini-lesson first. Expect a wave of "it failed!" at step 3: that's the point |
| 1:40–2:30 | Lab Part 9: project work time; **walkthrough 1 slots** | Instructor alone: walkthroughs run only in this block (about four slots); book the rest into office hours this week |
| 2:30–2:45 | Debrief | Questions below |
| 2:45–3:00 | Exit ticket (🔴 AI off) | Collect before laptops reopen. Remind everyone to stop their codespaces |

**Debrief questions:** What did your test say when you broke it on purpose? Which card did you choose, and what did the review find (or miss)? Who used `git diff` to find something? What would you check first now if a page went blank?

## Live demo script (Studio A, 10 minutes)

On the demo app (reference + M3 + M6):

1. **(1 min)** Open the app. The list is empty, and "Add 3 sample books" shows nothing in the list. Say: "**Reproduce**: I can make it happen every time."
2. **(2 min)** Open DevTools → Console. Read the whole error aloud: `ReferenceError: booklist is not defined`. Point to the type, the message and `app.js:125`. Read the stack trace from top to bottom. "**Isolate**: line 125, inside `render`."
3. **(2 min)** "**Hypothesize**: I think `booklist` is misspelled, because the variable at the top is `bookList`." "**Test**: I'll type `booklist` in the Console. ReferenceError. `bookList`? That's the list." Fix the capital L. "**Verify**": reload and add the samples.
4. **(4 min)** Now there's no error, but *The Time Machine* shows 0% at 40/118. "No red text. Now what?" Add `console.log(book.pagesRead / book.totalPages)` above the percentage line, reload: 0.339. Hypothesize about `Math.round` and the brackets. Fix it, verify, **remove the console.log**, commit with a clear message.
5. **(1 min)** "Feeling stuck in the clinic is normal. Use the method, then the hint cards."

## Studio B mini-lessons

**Git (3 minutes, before Part 6):** in the demo repository, run `git log --oneline` and read one line aloud (id, message). Change the page title, save, run `git diff`, and point at the red and green lines: "This is how you find what changed since your last save point." Run `git restore index.html` and say that it can't be undone.

**Feature cards (2 minutes, before Part 7):** fill in card C live on the demo app, typing with suggestions off. Forget the draw-function call on purpose: after you confirm, the books stay on screen until you reload. Run the review prompt with `#changes` and see whether it spots the missing call (or catch it yourself by testing). Fix it and commit with "written by hand".

**First test (3 minutes, before Part 8):** in the demo repository, create the test file, run `npm test`, and read the "cannot find module" message aloud: "Red, because the function doesn't exist yet. That's what a check written first looks like." Create the function, run again: green. Change `<=` to `<` and show the failing boundary test.

## Common pitfalls

| Pitfall | What you'll see | What to do |
|---|---|---|
| **"I can't read code"** | A frozen student staring at `app.js` | Make them the **driver** with a confident navigator who must explain, not type. Start them on the Console: "Read me the red line." Bug 1 is a win anyone can get. Point to [How the Web Works](../../resources/web-basics.md) and the [glossary](../../resources/glossary.md) |
| **Anxiety about AI-off time** | "I'm not a programmer, I can't do this without AI" | Say it out loud: discomfort is expected and is the point. The points aren't graded. The 10-minute rule means nobody is stuck for long. Praise good hypotheses, even wrong ones |
| **Codespace quota** | "You've used your free hours" or codespaces that won't start | Two codespaces per student in Studio A. Stop both at the end ([github.com/codespaces](https://github.com/codespaces)) |
| **Kit copied into Project 1 by mistake** | Project 1's `index.html` is suddenly the Reading Log | The fallback copy command overwrites files where it runs. If not committed, `git restore .` brings back the tracked Project 1 files; delete the kit's extra files by hand. If committed, `git revert HEAD` |
| **Pasting into a normal AI chat** | A perfect fix with no explanation | A claim only counts with the cause explained in their own words. Ask them to explain; if they can't, no points, and restart that bug |
| **Rewriting instead of fixing** | Whole functions replaced; features gone (for example, `.reverse()` deleted for bug 4) | "Smallest change that fixes the cause." For bug 4, have them test the **Finished** filter: removing `.reverse()` only hides the bug |
| **Bug 5 "still broken" after a correct fix** | The warning appears once more after the fix | Old broken data is still stored. Add a book, or run `localStorage.clear()`, then reload |
| **Copilot still suggesting in the clinic** | Grey ghost text in `app.js` | The workspace settings didn't apply. Use the steps in [Turn Copilot off for AI-off activities](../../setup/codespaces.md#turn-copilot-off-for-ai-off-activities) |
| **AI still off in Studio B** | No Copilot Chat in Part 7 | They ticked "Chat: Disable AI Features" for the clinic. Untick it |
| **Pasting into the feature card** | A finished feature in seconds, names that aren't theirs | The card is written by hand. Ask them to explain one blank; have them retype it. Their `PROMPTS.md` must say which lines they wrote |
| **`const` list in card C** | `TypeError: Assignment to constant variable` | A good find. `const` → `let`, and say why in the commit message (it's bug-menu item M5 in the wild) |
| **Agent mode in Part 7** | Files changing by themselves | Switch the chat to **Ask**. Agents arrive in week 6. Discard in Source Control, or `git revert` if committed |
| **Panic at the red test** | "It failed!" at step 3 of Part 8 | It's supposed to. Read the message together: it can't find a file that doesn't exist yet |
| **Module conversion breaks the app** | Buttons dead after step 6; `someFunction is not defined` | `onclick="…"` attributes need module functions to be global. Switch to `addEventListener`. Typing variables into the Console also stops working: use `console.log` |
| **`git restore` on wanted work** | Lost changes | Teach "`git diff` first, then decide". `git restore` can't be undone |
| **Stuck in a terminal editor** | A `git revert` without `--no-edit` opened an editor | If it's a VS Code tab, close it. If it's Vim in the terminal, type `:wq` and press Enter |
| **Copilot credits run out** | Chat stops with a usage message | Use the chat assistant in a browser tab with the same prompts. Note it in `PROMPTS.md` |
| **Looking up the answer key** | Instant fixes, no process | It's public; don't make the clinic high-stakes. Ask for the method narration. For repeat cohorts, swap bugs from the menu |

## Differentiation

- **Struggling pairs:** aim for bugs 1–3. Hand out hint cards without the point penalty. Bugs 1 and 2 teach the most important without-AI skill: read an error and find the line. In Studio B, card B is the gentlest.
- **Fast pairs:** give them a bonus bug from the menu (M4 "script in the head" and M12 "key mismatch" are the hardest), or ask them to set a breakpoint and step through `render`. Or make them "Socratic TAs" who may only ask questions of other pairs.
- **Experienced programmers:** ask them to explain *why* `"40" <= 0` works but `40 + "5"` doesn't, and to write a test that would have caught clinic bug 3 (it needs a pure function, which is now the Part 8 pattern). In Studio B, the "make your own card" option.
- **Students without a partner:** join a pair as a second navigator, or work alone with the hint cards, narrating the method aloud; the bounty still applies.
- **Small cohorts:** see [course variants](../../instructor/variants.md). With one student, you can be the navigator in the clinic (questions only), and walkthrough 1 happens by appointment.

## Fallback plans

| Problem | Plan |
|---|---|
| Codespaces is down or quotas are exhausted | Clinic: students download the kit as a ZIP and open `index.html` directly in their browser (the classic script and localStorage work without a server). Studio B Parts 6 and 8 need a terminal and Node: use [local setup](../../setup/local-setup.md) for anyone who has it, demo the rest, and move the practice to the catch-up office-hour lab. Postpone walkthroughs until students have practiced `git revert` |
| Copilot is unavailable | Part 7's review uses the chat assistant in a browser tab; students paste their diff |
| Tutor mode is unavailable | Hint cards plus you and your TAs |
| Running late in Studio A | Move Part 4 to homework. Never cut the clinic below 45 minutes or skip the debrief |
| Running late in Studio B | Protect Part 6 and the card. Demo Part 8 steps 1–5 and let students do them in project time. Never start walkthroughs before Part 6 |
| The projector fails during the demo | Narrate the demo from the error messages printed in the answer key |

## Oral walkthrough 1 logistics

- **When:** week 4 Studio B, after the git practice, or office hours that week ([Walkthrough 1](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4)). One rule everywhere.
- **Who examines in the studio:** only hold walkthroughs during Parts 7–8 if a TA runs them. Those parts are students' first hand-written code and first test, and a lone instructor shouldn't be pulled away from them. Without a TA, use the 50 minutes of Part 9 (about four slots) and book the rest into office hours this week.
- **How:** AI off, 10 minutes, on the student's **own** Project 1, running in their Codespace. For the **examiner's break**, use the protocol's list of one-line breaks. The bug menu's M3 (a name typo), M1/M2 (a missing bracket or quote), M7 (a boundary) and M12 (a storage key) are the same kinds of change, adapted to any app. Never reuse one of the five clinic bugs exactly.
- Keep notes against the rubric while you talk. Students who can't explain part of their code get a follow-up in office hours, not a surprise at the deadline. Walkthrough 1 can be retaken once within 7 days.

## After class

- Check the bounty board or `BUGS.md` files: which bug stopped most pairs? Use it, or the most-missed exit-ticket question, for the week 5 recap.
- Hold the **catch-up office-hour lab** this week for anyone behind on Project 1, the git practice or the first test.
- Remind students on the course channel to stop their codespaces.
- Scan the exit tickets for anyone who couldn't find the failing line from an error message. That's the first of the [six without-AI skills](../../resources/without-ai-skills.md); offer them office-hours practice with a bug from the menu.
- Check that every Project 1 repository has `package.json` and a passing `npm test`. Week 5 assumes students have run `npm test` once.
