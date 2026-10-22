# Week 2 — Instructor notes

**What success looks like this week.** After **Studio A**, every student has a game at `/game/` with at least two or three commits for working steps and a link from their home page. After **Studio B**, every student has **one restore commit**, at least one commit with an `Assisted-by:` line, a model-comparison table, and has explained a function in someone else's code without AI. A finished game is nice; the rollback is the lesson. If Studio B runs short, protect the break-and-restore (Part B1) and the peer swap (Part B4); the makeover workshop can shrink to the worked example.

## Prep checklist

### The week before

- [ ] Open every week 1 URL. Message anyone whose site isn't live; they must fix it before Studio A (office hours, or the week 1 [troubleshooting table](../01-hello-vibe-coding/lab.md#troubleshooting)).
- [ ] From the week 1 exit tickets, pick the **most-missed question** for the 5-minute recap that opens Studio A.
- [ ] Print the [Safe Loop](../../resources/safe-loop.md) card, one per student.
- [ ] Prepare a **visible 60-minute countdown** (a full-screen timer on the projector).
- [ ] Plan pairs for the play-test (Studio A) and the peer swap (Studio B): mix experience levels, and avoid pairing students who sat together in week 1.
- [ ] Check ages: students under 18 can't use Claude, so they need a different second assistant ([course variants](../../instructor/variants.md#under-18-cohorts)).
- [ ] Prepare the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2) on Canvas or paper. It includes one question about the student's week 1 page.

### Before Studio A (30 minutes)

GitHub's buttons move more often than the ideas behind them, so walk through the exact clicks yourself.

- [ ] With a demo account and a copy of a user-site repository: press **.** to open github.dev, create `game/index.html`, and commit it. Note today's button names (the lab says **Commit & Push**).
- [ ] Run the demo prompts below in Gemini Canvas and in your planned fallback. Check each assistant still returns a complete file when asked.
- [ ] Time a Pages deploy for a file in `game/`.
- [ ] Check [githubstatus.com](https://www.githubstatus.com).

### Before Studio B (20 minutes)

- [ ] On github.com, walk the full restore path from lab Part B1: file → **History** → **<>** (browse at this commit) → **Copy raw file** → back to `main` → pencil → paste → commit. If any button has moved or been renamed, write the new names on the board.
- [ ] In github.dev, type a two-line commit message (first line, blank line, `Assisted-by: …`) and check that plain **Enter** still adds a new line and **Ctrl+Enter** / **Cmd+Enter** commits. On github.com, check the **Extended description** box is still there.
- [ ] Prepare a broken version of your demo game for the restore demo (delete a `}` from the script).
- [ ] Skim the Studio A checkpoint shares. Anyone with no working commit yet does Part B1 on the placeholder file from Part A1.

## Studio A run sheet

| Time | Block | What you do |
|---|---|---|
| 0:00–0:05 | Recap | The most-missed week 1 exit-ticket question: ask it again, take two answers, give the short correct version |
| 0:05–0:25 | Concept talk | [The slides](slides.md), Studio A section (15 slides). Demo github.dev live on the "press ." slide |
| 0:25–0:35 | Live demo | Script below |
| 0:35–0:50 | Part A1 | Everyone opens github.dev and commits the placeholder. Walk the room: this is where "I can't find the button" happens |
| 0:50–1:50 | **Game in an Hour** | Start the big timer at 0:50. Say once, clearly: "This is graded on effort, not on finishing." Announcements below |
| 1:50–2:00 | Break | |
| 2:00–2:20 | Part A3 | Announce play-test pairs. Two minutes each to play without help |
| 2:20–2:35 | Part A4 | Link the game by hand (🔴 AI off); log prompts |
| 2:35–2:50 | Part A5 (if time) and catch-up | Go first to anyone whose live game shows nothing |
| 2:50–3:00 | Checkpoint share | Students post URL + save-point count. Play one or two games on the projector. Preview Studio B: "Next time you break it on purpose" |

### Timer announcements

| Timer shows | Say |
|---|---|
| 60:00 (start) | "Pick a game, ask for a plan, and edit it. No code for 8 minutes. Remember: graded on effort, not on finishing." |
| 52:00 | "You should have a plan. Send step 1." |
| 35:00 | "You should have two commits. Whatever step you're on: if it works, commit it now." |
| 20:00 | "Step 3 should be committed or nearly there. Small steps beat big ones." |
| 8:00 | "Last step. Only commit what works." |
| 2:00 | "If your last change is broken, don't commit it." |
| 0:00 | "Stop. Hands off keyboards. A working step 2 or 3 is a good hour." |

### Studio A live demo script (10 minutes)

Build **only step 1** of a Reaction timer, to model the loop without taking students' game choices. Narrate your thinking.

1. **(1 min)** Open the [game menu](game-menu.md), choose the Reaction timer, and say why: "Easiest one. I want to show the process, not a cool game."
2. **(3 min) Describe and Plan.** In Gemini with Canvas, send:

   ```text
   Goal: Build a reaction timer game that runs in the browser: wait for the screen to turn green, then click as fast as you can.
   Context: I'm a beginner. I'll build it in small steps and save a working version after each step. It will live at game/index.html on my GitHub Pages site.
   Constraints: One HTML file with the CSS and JavaScript inside it. No libraries, no external images, sounds or fonts. Playable with a mouse on a laptop. Don't write any code yet.
   Done when: You have proposed a plan of exactly 5 small steps. Each step adds one visible feature, can be tested in under a minute, and ends with a "Done when" line I can check. Step 1 is only the layout, with nothing moving yet.
   ```

   Read the plan aloud and **edit something**, even if it's fine. For example: `Make step 5 "best of five with average" and drop any sound. Show me the final plan. Still no code.`
3. **(2 min) Step 1.** Send the lab's step prompt for step 1. In the preview, check the "Done when" out loud, and click the panel to confirm nothing happens yet.
4. **(3 min) Read and Commit.** Copy the complete file. In github.dev, paste it into `game/index.html`, save, and open Source Control. Click the file to show the diff: "Green is new. Does the amount match what I asked for? Yes: layout only." Type `Step 1: reaction timer layout` and click **Commit & Push**.
5. **(1 min)** Open the file's **History** on github.com: "One save point, with a name. By the end of the hour you'll have several. Next studio, you'll use one to undo a disaster."

## Studio B run sheet

| Time | Block | What you do |
|---|---|---|
| 0:00–0:10 | Show and tell | Two students play their game on the projector and show its History |
| 0:10–0:35 | Part B1 | 3-minute restore demo (script below) on the "Going back" slide, then everyone breaks and restores. Circulate: the stale github.dev tab is the usual trap |
| 0:35–0:45 | Part B2 | 3-minute mini-lesson on the "Assisted-by" slide (script below), then everyone makes one tiny AI-helped commit with the line |
| 0:45–1:10 | Part B3 | Model comparison. Remind: "Test both. Don't take either one's word that it's done" |
| 1:10–1:20 | Break | |
| 1:20–1:35 | Part B4 | Announce pairs. Keep time: 1 minute to play, 4 to write alone, 2 to explain, then swap. Enforce 🔴 AI off: screens show only github.com |
| 1:35–1:50 | Part B5 | Walk through the worked example (3 min), then rewrite A alone (6), swap and check (4), two read-outs (2). 🔴 AI off |
| 1:50–2:20 | Part B6 | Project time. Circulate to anyone behind; check one commit per student for an `Assisted-by:` line |
| 2:20–2:30 | Part B7 (if time) | Point early finishers at "check first": they write the feature's "Done when" before asking the AI |
| 2:30–2:45 | Debrief | Ask: "Who lost work this week? Who got it back?", "Which model won the comparison, and by what measure?", "What did your plan get wrong?" |
| 2:45–3:00 | Exit ticket + homework | 10 minutes, 🔴 AI off; say it's scored for completion, not correctness. Then preview [the homework](homework.md): the new feature with check-first and teach-back, the restore drill, the reading |

### The restore demo (start of Part B1, 3 minutes)

This is the key learning moment of the week, so do it live even if most students are confident.

1. In your demo repo, paste the deliberately broken version of the reaction timer, commit it as `Experiment: unreviewed change`, and show that the live page is broken.
2. Walk the restore path slowly: **History** → copy the good commit's hash → **<>** → `game/index.html` → **Copy raw file** → back to `main` → pencil → paste → commit `Restore working version from [hash]`.
3. Show **History** again: "The broken commit is still there. Nothing was deleted. We added a new save point on top. That's what `git revert` means, and you'll type the real command in week 4."
4. "Now close and reopen github.dev, or you'll be editing the old copy."

### The `Assisted-by:` mini-lesson (3 minutes)

Open-source projects including LLVM, OpenStack, OpenTelemetry and Fedora have adopted an `Assisted-by:` line in commit messages, and about half of the open-source AI policies studied in 2026 require some disclosure ([October research update](../../research/landscape-update-2026-10.md#open-source-projects-now-require-disclosure-while-the-law-stands-still)). Frame it as a professional habit, not a confession: "It tells a reviewer, including future you, which changes to read most carefully." Show the two-line message in github.dev and the **Extended description** box on github.com. The weekly rubric's top band for "Save points and log" mentions it from week 2; it's required from week 6. Don't penalize a missing line this week; point it out.

## Common pitfalls

| Pitfall | What to do |
|---|---|
| **The AI gives snippets** ("add this to your update function") and students paste them in the wrong place | Every step prompt says "complete updated file in one code block". If they get a snippet anyway, re-ask; don't hand-merge |
| **Chat formatting pasted in** (` ```html ` at the top) | Delete the fence lines; use the copy button |
| **Editing a stale github.dev tab after the restore**, then a conflict or the broken version coming back | Close github.dev and press **.** again after any commit made on github.com |
| **Commit messages like `update`** | Point at the History page: "Which one is step 3?" Let them feel it |
| **Committing broken code as `Step 3`** | Test before commit. If it happened, that's their restore exercise in Studio B |
| **Skipping Test and Read** because the timer is running | Remind them that the fastest path is the one without a lost 20 minutes. Ask to see their diff before they commit |
| **The AI adds a library from the internet** (a `<script src="https://…">` tag) | Constraint: "No libraries, no external files." Ask for a rewrite without it |
| **Arrow keys or Space scroll the page** | Common in Snake, Pong and Flappy-style. The lab's troubleshooting prompt fixes it |
| **"Canvas" confusion** | Gemini's Canvas is the preview panel; HTML's `<canvas>` is a drawing area inside a page. Say so once, early |
| **`Assisted-by:` typed on the first line** of the message | Fine for this week. Show them the blank-line format for next time |
| **Can't find the <> button in History** | Alternative: click the commit message, then find `game/index.html` in the diff and use its **…** menu → **View file** |
| **Under-18 students with only one allowed assistant**, or ChatGPT without a preview | Two fresh chats in the same assistant, or the `game/compare.html` route in the lab |
| **Students anxious about the timer** | Repeat that Game in an Hour is graded on effort ([rubric](../../assessment/rubrics.md#in-class-work-and-participation)). Anyone may do it untimed, with or without a CDAR letter ([accommodations](../../assessment/README.md#accommodations)); the timer is a pacing aid, not a test |

## Differentiation

- **Students who finish in 20 minutes:** a step 6 they plan first; a second game from the ★★★ Hard list; or write step 6 **by hand**, then ask the AI only to review it ("Review my change; don't rewrite it"). In Studio B they still do the break-and-restore and the model comparison; those are the point. Ask them not to type on other students' laptops; pointing is fine.
- **Students stuck at step 1 after 15 minutes:** check three things. Are they using an assistant with a preview? Did they paste the complete file? Is the game too ambitious? Move them to the Reaction timer or Whack-a-mole and let them use the game menu's sample plan as their plan. Anyone with nothing working by Studio B still does the break-and-restore, on the placeholder file from Part A1 if necessary; the restore is the lesson, not the game.
- **Anxious students:** reassure them that breaking the game is the assignment for Part B1. Nothing they do in a repository can't be undone.
- **Students who've coded before:** encourage 2048 or Breakout, and ask them to explain every diff line before committing.

## The peer swap

Listen for explanations that restate the code ("it sets x to x plus one") versus ones that say what it means in the game ("it moves the ball one step right each frame"). Coach toward the second. If the **owner** can't explain their own function, don't penalize it today; ask them to log it in `PROMPTS.md` and ask the AI to explain it after class. Note who struggled: they need extra support before the week 4 oral walkthrough. With an odd number, one group of three rotates, or a student explains to you ([rubric: no partner](../../assessment/rubrics.md#in-class-work-and-participation)).

## Fallback plans

| If… | Then… |
|---|---|
| Gemini is down for everyone | Use Claude Artifacts (adults) as the main assistant, and ChatGPT or a second Claude chat for the comparison |
| github.dev fails to load or commit | Students edit and commit on github.com with the pencil icon; creating `game/index.html` works through **Add file → Create new file**; the `Assisted-by:` line goes in **Extended description** |
| GitHub is down in Studio A | Build in the chat preview only, with a written plan and a text file of the code after each step; commit each step later with the step's message. Studio B's restore needs those commits, so check at the start of Studio B |
| GitHub is down in Studio B | Swap the order: peer swap and makeover workshop first (they need only the code on screen), restore and comparison later or at home with the lab steps |
| The timer overruns by more than 10 minutes | Shorten Part A5 and the play-test; never cut the checkpoint share |

## Exit ticket

End of Studio B, ten minutes, 🔴 AI off, using the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2). Skim them the same evening for two misconceptions: "restoring deletes the bad commit" and "the AI can see my repository". The most-missed question opens week 3's Studio A.

## After each studio

**After Studio A**

- [ ] Open every `/game/` URL. Message anyone whose game shows nothing: they need at least one working commit before Studio B.
- [ ] Record any renamed buttons or changed paths, and fix the lab text or open an issue.

**After Studio B**

- [ ] Check each repository's History for a restore commit and one `Assisted-by:` line.
- [ ] Note students who couldn't explain a function in the swap, for extra support before week 4.
- [ ] Pick two students for week 3's show and tell: ideally one whose restore saved them real trouble.
