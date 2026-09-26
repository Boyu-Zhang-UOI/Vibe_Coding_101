# Week 2 — Instructor notes

**What success looks like tonight:** every student has a game at `/game/` with at least three commits for working steps, **one restore commit**, and has explained a function in someone else's code without AI. A finished game is nice; the rollback is the lesson. If time runs short, protect the break-and-restore (lab stage 1c) and the peer swap.

## Prep checklist

### The week before

- [ ] Open every week 1 URL. Message anyone whose site isn't live; they must fix it before this studio (office hours, or the week 1 [troubleshooting table](../01-hello-vibe-coding/lab.md#troubleshooting)).
- [ ] Print the [Safe Loop](../../resources/safe-loop.md) card, one per student.
- [ ] Prepare a **visible 60-minute countdown** (a full-screen timer on the projector).
- [ ] Plan pairs for the peer swap: mix experience levels, and avoid pairing students who sat together in week 1.
- [ ] Check ages: students under 18 can't use Claude, so they need a different second assistant ([instructor/variants.md](../../instructor/variants.md#under-18-cohorts)).
- [ ] Prepare the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2).

### The morning of class (30 minutes)

GitHub's buttons move more often than the ideas behind them, so walk through the exact clicks yourself.

- [ ] With a demo account and a copy of a user-site repository: press **.** to open github.dev, create `game/index.html`, and commit it. Note today's button names (the lab says **Commit & Push**).
- [ ] On github.com, walk the full restore path from lab stage 1c: file → **History** → **<>** (browse at this commit) → **Copy raw file** → back to `main` → pencil → paste → commit. If any button has moved or been renamed, write the new names on the board.
- [ ] Run the demo prompts below in Gemini Canvas and in your planned fallback. Check each assistant still returns a complete file when asked.
- [ ] Time a Pages deploy for a file in `game/`.
- [ ] Check [githubstatus.com](https://www.githubstatus.com).

## Run sheet

| Time | Block | What you do |
|---|---|---|
| 0:00–0:10 | Show and tell | Two students show their home pages and one prompt that surprised them |
| 0:10–0:30 | Concept talk | [slides.md](slides.md), 18 slides. Demo github.dev live on slide 15 (press **.** on your repo) |
| 0:30–0:40 | Live demo | Script below |
| 0:40–0:50 | Lab Part 0 | Everyone opens github.dev and commits the placeholder. Walk the room: this is where "I can't find the button" happens |
| 0:50–1:50 | **Game in an Hour** | Start the big timer at 0:50. Announcements below |
| 1:50–2:00 | Break | |
| 2:00–2:12 | Peer swap | Announce pairs. Keep time: 1 minute to play, 4 to write alone, 2 to explain, then swap. Enforce 🔴: laptops show only github.com |
| 2:12–2:20 | Lab Part 3 | Link the game; log prompts |
| 2:20–2:45 | Debrief | Play three games on the projector. Ask: "Who lost work today? Who got it back?", "Which model won the comparison, and by what measure?", "What did your plan get wrong?" |
| 2:45–3:00 | Exit ticket + homework | 10 minutes, 🔴 no AI. Then preview [homework.md](homework.md); show one prompt-makeover example |

### Timer announcements

| Timer shows | Say |
|---|---|
| 60:00 (start) | "Pick a game, ask for a plan, and edit it. No code for 8 minutes." |
| 52:00 | "You should have a plan. Send step 1." |
| 35:00 | "You should have two commits. Whatever step you're on: if it works, commit it now." |
| 30:00 | **Stop the room for 3 minutes.** Do the restore live on the projector (script below). "Everyone does this in the next 10 minutes, whatever step you're on." |
| 20:00 | "Step 4: send the same prompt to both assistants and fill in the comparison table." |
| 8:00 | "Last step. Only commit what works." |
| 2:00 | "If your last change is broken, don't commit it. Restore instead." |
| 0:00 | "Stop. Hands off keyboards." |

## Live demo script (10 minutes)

Build **only step 1** of a Reaction timer, to model the loop without taking students' game choices. Narrate your thinking.

1. **(1 min)** Open [game-menu.md](game-menu.md), choose the Reaction timer, and say why: "Easiest one. I want to show the process, not a cool game."
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
5. **(1 min)** Open the file's **History** on github.com: "One save point, with a name. By the end of the hour you'll have five, and you'll have used one to undo a disaster."

### The restore demo (at timer 30:00, 3 minutes)

This is the key learning moment of the week, so do it live even if most students are fine.

1. In your demo repo, paste a deliberately broken version of the reaction timer (delete a `}` from the script), commit it as `Experiment: unreviewed change`, and show that the live page is broken.
2. Walk the restore path slowly: **History** → copy the good commit's hash → **<>** → `game/index.html` → **Copy raw file** → back to `main` → pencil → paste → commit `Restore working version from <hash>`.
3. Show **History** again: "The broken commit is still there. Nothing was deleted. We added a new save point on top. That's what `git revert` means, and you'll type the real command in week 4."
4. "Now close and reopen github.dev, or you'll be editing the old copy."

## Common pitfalls

| Pitfall | What to do |
|---|---|
| **The AI gives snippets** ("add this to your update function") and students paste them in the wrong place | Every step prompt says "complete updated file in one code block". If they get a snippet anyway, re-ask; don't hand-merge |
| **Chat formatting pasted in** (` ```html ` at the top) | Delete the fence lines; use the copy button |
| **Editing a stale github.dev tab after the restore**, then a conflict or the broken version coming back | Close github.dev and press **.** again after any commit made on github.com |
| **Commit messages like `update`** | Point at the History page: "Which one is step 3?" Let them feel it |
| **Committing broken code as `Step 3`** | Test before commit. If it happened, that's their restore exercise |
| **Skipping Test and Read** because the timer is running | Remind them that the fastest path is the one without a lost 20 minutes. Ask to see their diff before they commit |
| **The AI adds a library from the internet** (a `<script src="https://…">` tag) | Constraint: "No libraries, no external files." Ask for a rewrite without it |
| **Arrow keys or Space scroll the page** | Common in Snake, Pong and Flappy-style. The lab's troubleshooting prompt fixes it |
| **"Canvas" confusion** | Gemini's Canvas is the preview panel; HTML's `<canvas>` is a drawing area inside a page. Say so once, early |
| **Can't find the <> button in History** | Alternative: click the commit message, then find `game/index.html` in the diff and use its **…** menu → **View file** |
| **Under-18 students with only one allowed assistant**, or ChatGPT without a preview | Two fresh chats in the same assistant, or the `game/compare.html` route in the lab |

## Differentiation

- **Students who finish in 20 minutes:** they still do the break-and-restore and the model comparison; those are the point. Then: a step 6 they plan first; the homework stretch (a localStorage high score, touch controls); or a second game from the ★★★ list. For a real challenge: write step 6 **by hand**, then ask the AI only to review it ("Review my change; don't rewrite it"). Ask them not to type on other students' laptops; pointing is fine.
- **Students stuck at step 1 after 15 minutes:** check three things. Are they using an assistant with a preview? Did they paste the complete file? Is the game too ambitious? Move them to the Reaction timer or Whack-a-mole and let them use the game menu's sample plan as their plan. Anyone with nothing working at minute 25 still does the break-and-restore, on the placeholder file from Part 0 if necessary; the restore is the lesson, not the game.
- **Anxious students:** reassure them that breaking the game is the assignment for stage 1c. Nothing they do in a repository can't be undone.
- **Students who've coded before:** encourage 2048 or Breakout, and ask them to explain every diff line before committing.

## The peer swap

Listen for explanations that restate the code ("it sets x to x plus one") versus ones that say what it means in the game ("it moves the ball one step right each frame"). Coach toward the second. If the **owner** can't explain their own function, don't penalize it tonight; ask them to log it in `PROMPTS.md` and ask the AI to explain it after class. Note who struggled: they need extra support before the week 4 oral walkthrough.

## Fallback plans

| If… | Then… |
|---|---|
| Gemini is down for everyone | Use Claude Artifacts (adults) as the main assistant, and ChatGPT or a second Claude chat for the comparison |
| github.dev fails to load or commit | Students edit and commit on github.com with the pencil icon; creating `game/index.html` works through **Add file → Create new file** |
| GitHub is down | Build in the chat preview only, with a written plan and a text file of the code after each step; commit each step at home with the step's message. Do the restore demo on the projector later, from your own repo |
| The timer overruns by more than 10 minutes | Cut the debrief to 10 minutes; never cut the peer swap or the exit ticket |

## Exit ticket

Ten minutes, 🔴 no AI, using the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2). Skim them the same evening for two misconceptions: "restoring deletes the bad commit" and "the AI can see my repository". Address both in the first five minutes of week 3.

## After class

- [ ] Open every `/game/` URL and check each repository's History for a restore commit.
- [ ] Record any renamed buttons or changed paths, and fix the lab text or open an issue.
- [ ] Pick two students for week 3's show-and-tell: ideally one whose restore saved them real trouble.
