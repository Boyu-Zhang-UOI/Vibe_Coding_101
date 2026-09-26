# Week 2 Lab — Game in an Hour

> **Goal:** build a small browser game in one timed hour, one step at a time, with a git save point after every working step. Break it on purpose, go back, compare two AI models, and explain a classmate's code.
> **Time:** about 100 minutes, including a 10-minute break.
> **You need:** your `<username>.github.io` repository from week 1, two chat assistants (see [TOOLS.md](../../TOOLS.md)), and the [game menu](game-menu.md).

This week you use the full [Safe Loop](../../resources/safe-loop.md) for the first time: **Describe → Plan → Step → Test → Read → Commit**.

| Part | What you do | Time | AI use |
|---|---|---|---|
| 0 | Open github.dev and create your game file | 10 min | — |
| 1 | **Game in an Hour** (timed) | 60 min | 🟢 Expected |
| — | Break | 10 min | — |
| 2 | Peer explanation swap | 12 min | 🔴 Not allowed |
| 3 | Link your game and update `PROMPTS.md` | 8 min | 🟢 for the log entries |

### Words you'll use today

| Word | Meaning |
|---|---|
| **Repository** (repo) | A project folder that git tracks. Yours is `<username>.github.io` |
| **Commit** | A save point: a snapshot of your files, with a message saying what changed |
| **Commit message** | The one-line description of a commit, e.g. `Step 2: snake moves with arrow keys` |
| **History** | The list of all commits, newest first |
| **Diff** | What changed between two versions: removed lines in red, added lines in green |
| **Hash** | A commit's ID, such as `4f2a9c1` (the short version is 7 characters) |
| **github.dev** | A code editor (VS Code) that runs in your browser and edits your repository directly |

More in [resources/git-cheatsheet.md](../../resources/git-cheatsheet.md) and [resources/glossary.md](../../resources/glossary.md).

---

## Part 0 — Open github.dev and create your game file (10 min)

**Why:** chat assistants forget and previews disappear. Your repository keeps every version you commit.

1. Open your repository on github.com: `https://github.com/<username>/<username>.github.io`.
2. Press the **.** (period) key, with the cursor not in a text box. **github.dev** opens: a code editor in your browser. (Or change `github.com` to `github.dev` in the address bar.) Sign in if asked.
3. In the **Explorer** panel on the left, hover over your repository's name and click the **New File** icon. Type `game/index.html` and press Enter. The `/` creates a folder called `game`.
4. Type this placeholder **by hand**:

   ```html
   <!DOCTYPE html>
   <title>My game</title>
   <h1>Game coming soon</h1>
   ```

5. Save with **Ctrl+S** (Windows, ChromeOS) or **Cmd+S** (Mac).
6. Open **Source Control**: the icon of three connected dots in the left bar, or **Ctrl+Shift+G** (on a Mac, **Control+Shift+G**). Your file appears under **Changes**. Click it to see the **diff**: every line is green because it's new.
7. In the **Message** box, type `Add game placeholder`. Click **Commit & Push**. If github.dev asks whether to stage all changes and commit them directly, choose **Yes**.
8. Wait a minute, then visit `https://<username>.github.io/game/`.

> [!NOTE]
> Menus move. If a button has a different name, look for the same idea (a message box and a commit button), or ask your assistant where it is in github.dev today.

✅ **Checkpoint:** `https://<username>.github.io/game/` shows "Game coming soon", and the **Projects** link on your home page now leads there instead of a 404.

---

## Part 1 — Game in an Hour (60 min, timed)

Your instructor starts a visible 60-minute timer. Working alone? Set one on your phone.

**The goal is a working game built in small steps, not a perfect game.** A game that stops at step 3 with clean save points beats a broken five-step game.

| Minutes | Stage |
|---|---|
| 0–8 | 1a. Pick a game and plan it |
| 8–25 | 1b. Steps 1 and 2 |
| 25–40 | 1c. Step 3, then break it and go back |
| 40–52 | 1d. Step 4, with a second AI's opinion |
| 52–60 | 1e. Step 5, or polish |

### 1a. Pick a game and plan it (minutes 0–8)

1. Choose a game from the [game menu](game-menu.md). First time coding? Pick a ★ game.
2. In your main assistant (Gemini with Canvas, or Claude with Artifacts), start a **new chat**. Pick one with a live preview; you'll use the other assistant in stage 1d.
3. **Describe and Plan.** Send this, filling in the brackets:

   ```text
   Goal: Build a [game name] game that runs in the browser: [one-sentence description from the game menu].
   Context: I'm a beginner. I'll build it in small steps and save a working version after each step. It will live at game/index.html on my GitHub Pages site.
   Constraints: One HTML file with the CSS and JavaScript inside it. No libraries, no external images, sounds or fonts. Playable with a keyboard or mouse on a laptop. Don't write any code yet.
   Done when: You have proposed a plan of exactly 5 small steps. Each step adds one visible feature, can be tested in under a minute, and ends with a "Done when" line I can check. Step 1 is only the layout, with nothing moving yet.
   ```

4. **Edit the plan.** Compare it with the sample plan in the game menu. Is step 1 small? Can you test every step in a minute? Is anything too big (online leaderboards, multiplayer, accounts)? Tell the AI what to change, for example: `Split step 2 into two steps and drop the sound effects. Show me the final plan. Still no code.`
5. Copy the final plan into a scratch note. You'll paste each step into the prompts below, and the plan into `PROMPTS.md` later.

✅ **Checkpoint:** you have a 5-step plan, with a "Done when" for every step, that you changed at least once.

### 1b. Steps 1 and 2 (minutes 8–25)

Repeat this loop for every step.

**Step.** Send one step:

```text
Goal: Do step [N] of the plan: [paste the step].
Context: [For step 1: "We're starting from an empty file." Later: "Here is my current game/index.html:" then paste the complete file.]
Constraints: Change only what this step needs and keep everything that already works. Give me the complete updated file in one code block, not just the changed part.
Done when: [paste the step's "Done when" line].
```

> [!TIP]
> Why paste the file each time? The AI only knows what is in its context window. It can't see your repository, and it doesn't know about changes you made elsewhere. If you're in the same chat and haven't changed anything, "Context: the file from your last answer" is fine.

**Test.** In the preview, check the "Done when" line. Then try one **edge case**, a less common situation: click twice quickly, press a key that isn't a control, make the window narrow.

- **It works:** go on to Read.
- **It doesn't:** say exactly what happened: `After this step, [what I did]. I expected [X]. Instead [Y]. Fix only that, and give me the complete file.`
- **Two failed fixes?** That's the **two-strikes rule**: stop, start a fresh chat, paste your last working file from GitHub, and describe the problem more precisely.

**Read.** Copy the complete file. In github.dev, click into `game/index.html`, select everything (**Ctrl+A** / **Cmd+A**), paste, and save. Open **Source Control** and click the file to see the **diff**. Skim the red and green lines. Does the size of the change match the size of the step? If the AI changed something you didn't ask for, ask it why before you commit.

**Commit.** Type a message that says what changed, then **Commit & Push**:

| Good messages | Bad messages |
|---|---|
| `Step 1: draw the board, snake and food` | `update` |
| `Step 2: snake moves with arrow keys` | `stuff` |
| `Fix: arrow keys no longer scroll the page` | `fixed it!!!` |

After a minute, `https://<username>.github.io/game/` shows the new version. You don't need to wait for it; keep going.

✅ **Checkpoint (by minute 25):** github.dev's Source Control shows no pending changes, and you've made two commits, `Step 1: …` and `Step 2: …`.

### 1c. Step 3, then break it and go back (minutes 25–40)

This is the most important part of the lab. You'll see that a commit really is a save point.

**Build step 3** with the same loop, and commit it as `Step 3: …` once it works.

**Break it on purpose.** Pick one (more ideas at the end of the [game menu](game-menu.md#ways-to-break-it-at-step-3)):

- Ask for a vague change, and paste the result **without testing it**:

  ```text
  Make the game much more exciting. Change whatever you like.
  ```

- Or delete one line containing `}` from the `<script>` section by hand.

Commit the broken version with the message `Experiment: unreviewed change`. Check the preview or live game: it's broken, or at least different in ways you didn't choose. (If it somehow still works, delete a line by hand and commit again.)

**Go back to the last working version.** Do this on github.com, in a new tab:

1. Open your repository, then the `game` folder, then `index.html`.
2. Click **History** (top right of the file, with a clock icon). You'll see every commit that changed this file, newest first. Your messages make this list readable.
3. Find your `Step 3: …` commit. Next to it is a short hash like `4f2a9c1`. Copy it (there's a copy button) and paste it into your scratch note.
4. On the same row, click the **<>** button ("Browse repository at this point"). You're now looking at your repository as it was then: the branch button near the top shows the hash instead of `main`.
5. Open `game/index.html` and click the **Copy raw file** button (two overlapping squares above the code).
6. Go back to the present: click the branch button and choose `main` (or click your repository's name at the top). Open `game/index.html` again.
7. Click the **pencil** icon (Edit this file). Select all the code, paste, and click **Commit changes…**. Use the message `Restore working version from 4f2a9c1` (with your hash), and commit.
8. Wait a minute and check your live game. It's back to step 3.

Open **History** again. **Every** commit is still there, including the broken one. You didn't erase anything; you added a new save point that puts the file back the way it was. That's exactly what the git command `git revert` does: it makes a new commit that undoes an earlier one. You'll use the real command in week 4.

> [!IMPORTANT]
> Your github.dev tab doesn't know about the commit you just made on github.com. Before you continue, check that github.dev's Source Control shows no pending changes (if it does, discard them: they're the broken version). Then **close the github.dev tab and reopen it** by pressing **.** on your repository page. Otherwise you'll be editing an old copy.

✅ **Checkpoint:** your file's **History** shows `Step 1`, `Step 2`, `Step 3`, `Experiment: unreviewed change` and `Restore working version from …`, and your live game works like step 3 again.

### 1d. Step 4, with a second AI's opinion (minutes 40–52)

Different models give different answers to the same prompt. Here you see how different, and judge them against your own "Done when".

1. Copy your current `game/index.html` (from github.com, with the **Copy raw file** button).
2. Write your step 4 prompt, with the complete file pasted into **Context**. Send the **exact same prompt** to both assistants.
3. Test both results against your "Done when":
   - In an assistant with a live preview, test it there.
   - In an assistant without one, copy its file into a new file `game/compare.html` in github.dev, commit it as `Compare: step 4 from [assistant]`, and open `https://<username>.github.io/game/compare.html` a minute later.
4. Fill in this table in your scratch note:

   | Question | Assistant A | Assistant B |
   |---|---|---|
   | Meets the "Done when"? (test it; don't take its word) | | |
   | Kept everything that already worked? | | |
   | Followed the constraints (one file, no libraries, complete file)? | | |
   | Added anything you didn't ask for? | | |
   | Which one could you explain to a classmate? | | |

5. Keep the better version: paste it into `game/index.html`, test, read the diff, and commit it as `Step 4: … (version from [assistant])`.

✅ **Checkpoint:** step 4 is committed, and your table says which assistant won and why.

### 1e. Step 5, or polish (minutes 52–60)

Same loop. When the timer ends, **stop**. Your last commit must be a working version. If step 5 is half-done and broken, don't commit it; if you already did, restore the last working version as in 1c.

✅ **Checkpoint (at the buzzer):** your game at `https://<username>.github.io/game/` works up to at least step 3, and its **History** has one commit per working step plus your restore commit.

---

## Break (10 min)

---

## Part 2 — Peer explanation swap (12 min)

🔴 **No AI for this part.** Explaining code in your own words is how you show you understand it, and it's one of the [skills you must be able to show without AI](../../resources/without-ai-skills.md).

A **function** is a named block of code that does one job. It runs when something *calls* it: a click, a key press, a timer or another function. In JavaScript it often starts with `function moveSnake(` or `const moveSnake = (`.

1. Pair up and swap two links: your live game and your repository.
2. Play your partner's game for a minute.
3. On github.com, open their `game/index.html` and pick **one function** from the `<script>` section: not the longest, not a one-liner.
4. Take **4 minutes** to write down, alone:
   - **Name:** the function's name.
   - **When it runs:** what calls it?
   - **What it does:** at most three plain-English sentences.
   - **If you deleted it:** what would break in the game?
5. Explain it to your partner in 2 minutes. They confirm or correct you. If they aren't sure either, you've both found something worth learning: the game's author asks the AI about it after class and logs what they learned in `PROMPTS.md`.
6. Swap roles.

**Working alone?** Pick a function in your own game, write the four answers without AI, and then explain it out loud to a friend or record yourself. Only afterwards, check your explanation with the AI.

✅ **Checkpoint:** you explained one function in someone else's game, and they confirmed or corrected it.

---

## Part 3 — Link your game and update `PROMPTS.md` (8 min)

1. In github.dev (reopened after 1c), open your home page's `index.html`. Find the Projects link to `game/`. By hand, change its text from `My first game (coming in week 2)` to your game's name, for example `Snake, built in one hour`. Save, then commit: `Link game from home page`.
2. Open `PROMPTS.md` and add entries (🟢 you may ask the AI to help format them; the content is yours):
   - your **plan prompt** and how you edited the plan;
   - one **step prompt** that worked and one that didn't;
   - the **break and restore**: what you broke, and the hash you restored from;
   - the **model comparison**: which assistant won and why.

   Commit: `Log Game in an Hour prompts`.

✅ **Checkpoint:** clicking the Projects link on your live home page opens your game.

---

## Before you leave

- [ ] Your game works at `https://<username>.github.io/game/`, and your home page links to it.
- [ ] The game's **History** shows one commit per working step, the experiment and the restore.
- [ ] `PROMPTS.md` has entries for today.
- [ ] You did the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2) (🔴 no AI).

## Stretch goals (if you finish early)

- **Finish all five steps**, then add a step 6 of your own: plan it with the AI first.
- **Look at a diff on github.com:** open **History**, click any commit message, and read the red and green lines. Can you match every change to what you asked for?
- **Start the homework stretch:** a high score that survives a reload, or touch controls ([homework.md](homework.md#stretch-optional)).

## Troubleshooting

| Problem | Fix |
|---|---|
| Pressing **.** does nothing | Click an empty part of the page first (not a text box), or change `github.com` to `github.dev` in the address bar |
| **Commit & Push** is greyed out | Type a commit message, and save the file first (**Ctrl+S** / **Cmd+S**) |
| The game is blank after pasting | You pasted only part of the code, or chat formatting (` ``` ` lines). Ask for "the complete file in one code block" and use the copy button |
| The AI gives snippets ("add this inside your update function") | Reply: `Give me the complete updated file in one code block.` |
| Arrow keys or Space scroll the page | Ask: `Stop the game's keys from scrolling the page. Complete file, please.` |
| Works in the preview, not on the live site | Wait a minute and hard-refresh (**Ctrl+Shift+R** / **Cmd+Shift+R**). Check the path is exactly `game/index.html`, lowercase, and the address ends in `/game/` |
| Can't find **History** | Open the file itself first (not the folder), then look at the top right of the code |
| You restored the wrong version | No harm done. Everything is still in **History**; restore again from the right hash |
| github.dev shows old code after the restore | Close the github.dev tab and press **.** on your repository page again |
| github.dev says it can't push or there's a conflict | Copy your current code into a note, close github.dev, reopen it, and paste your change again |
| You hit an assistant's usage limit | Switch to the other assistant and paste your current file from GitHub. See [resources/troubleshooting.md](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| You're stuck on step 1 after 15 minutes | Switch to a ★ game from the menu and use its sample plan as your plan. Tell your instructor |

## If a tool is down

- **Main assistant down:** use a fallback from [TOOLS.md](../../TOOLS.md). Paste your current `game/index.html` from GitHub into the new chat first, because the new tool starts with an empty context window.
- **Only one assistant works:** do the comparison in stage 1d by sending the same prompt twice to the same assistant in two fresh chats. You'll still see how much answers vary.
- **github.dev won't open:** edit on github.com instead. Open the file, click the **pencil** icon, paste, then **Commit changes…**. To create `game/index.html`, use **Add file → Create new file** and type `game/index.html` as the name.
