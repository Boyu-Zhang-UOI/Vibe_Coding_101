# Week 2 Lab — Game in an Hour

> **Goal:** in Studio A, build a small browser game in one timed hour, one step at a time, with a git save point after every working step. In Studio B, break it on purpose and go back, label AI-helped commits, compare two AI models, explain a classmate's code and make over a weak prompt.
> **Time:** Studio A lab about 135 minutes, Studio B lab about 140 minutes, each with a 10-minute break.
> **You need:** your `[your-username].github.io` repository from week 1, two chat assistants (see the [Tool Handout](../../TOOLS.md)), and the [game menu](game-menu.md).

**AI-use key:** 🟢 AI on: use AI freely · 🟡 AI limited: the AI may comment or hint, but the work is yours · 🔴 AI off: close the AI tabs and work alone.

Studios are graded on effort, not polish ([rubric](../../assessment/rubrics.md#in-class-work-and-participation)): a part that didn't work, with the exact error and what you tried, still counts.

This week you use the full [Safe Loop](../../resources/safe-loop.md) for the first time: **Describe → Plan → Step → Test → Read → Commit**.

Stuck for more than 5 minutes? Check [Troubleshooting](#troubleshooting), ask a neighbor, then raise your hand. Using a screen reader or only a keyboard? The [Screen reader and keyboard guide](../../resources/accessibility.md) covers github.dev and the GitHub website.

## Words you'll use this week

| Word | Meaning |
|---|---|
| **Repository** (repo) | A project folder that git tracks. Yours is `[your-username].github.io` |
| **Commit** | A save point: a snapshot of your files, with a message saying what changed |
| **Commit message** | The description of a commit, e.g. `Step 2: snake moves with arrow keys` |
| **History** | The list of all commits, newest first |
| **Diff** | What changed between two versions: removed lines in red, added lines in green |
| **Hash** | A commit's ID, such as `4f2a9c1` (the short version is 7 characters) |
| **github.dev** | A code editor (VS Code) that runs in your browser and edits your repository directly |
| **`Assisted-by:` line** | A last line in a commit message naming the AI tool that helped, e.g. `Assisted-by: Gemini` |

More in the [Git Cheat Sheet](../../resources/git-cheatsheet.md) and the [Glossary](../../resources/glossary.md).

---

## Studio A — Game in an Hour

| Part | What you do | Time | Core or If time | AI use |
|---|---|---|---|---|
| A1 | Open github.dev and create your game file | 15 min | Core | Not needed |
| A2 | **Game in an Hour** (timed) | 60 min | Core | 🟢 AI on |
| Break | Stand up, stretch | 10 min | | |
| A3 | Play-test and fix one thing | 20 min | Core | 🟢 AI on |
| A4 | Link your game and log your prompts | 15 min | Core | 🟢 AI on for the log entries · 🔴 AI off for "What I wrote or decided myself" |
| A5 | Keep building | 15 min | If time | 🟢 AI on |

The studio ends with a **checkpoint share**: your game's live URL and how many save points it has.

### Part A1 — Open github.dev and create your game file (15 min)

**Why:** chat assistants forget and previews disappear. Your repository keeps every version you commit.

1. Open your repository on github.com: `https://github.com/[your-username]/[your-username].github.io`.
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
8. Wait a minute, then visit `https://[your-username].github.io/game/`.

> [!NOTE]
> Menus move. If a button has a different name, look for the same idea (a message box and a commit button), or ask your assistant where it is in github.dev today.

✅ **Checkpoint:** `https://[your-username].github.io/game/` shows "Game coming soon", and the **Projects** link on your home page now leads there instead of a 404.

### Part A2 — Game in an Hour (60 min, timed)

🟢 AI on.

Your instructor starts a visible 60-minute timer. Working alone? Set one on your phone. Rather work without the clock (for example with a screen reader)? Anyone may do it untimed; see [Timed builds](../../resources/accessibility.md#timed-builds) for tips and game choices.

**The goal is a working game built in small steps, not a perfect game.** Game in an Hour is graded on effort, not on whether you finish ([rubric](../../assessment/rubrics.md#in-class-work-and-participation)). A game that stops at step 3 with clean save points beats a broken five-step game, and it's a full-credit hour.

| Minutes | Stage |
|---|---|
| 0–8 | Pick a game and plan it |
| 8–25 | Steps 1 and 2 |
| 25–40 | Step 3 |
| 40–52 | Step 4 |
| 52–60 | Step 5, or polish |

#### Pick a game and plan it (minutes 0–8)

1. Choose a game from the [game menu](game-menu.md). First time coding? Pick a ★ Easy game.
2. In an assistant with a live preview (Gemini with Canvas, or Claude with Artifacts), start a **new chat**.
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

#### The loop for every step (minutes 8–60)

Repeat this for steps 1 to 5.

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

After a minute, `https://[your-username].github.io/game/` shows the new version. You don't need to wait for it; keep going.

✅ **Checkpoint (by minute 25):** github.dev's Source Control shows no pending changes, and you've made two commits, `Step 1: …` and `Step 2: …`.

✅ **Checkpoint (at the buzzer):** your last commit is a **working** version. If your current step is half-done and broken, don't commit it. Your game at `/game/` works up to at least step 2 or 3, with one commit per working step.

### Break (10 min)

### Part A3 — Play-test and fix one thing (20 min)

🟢 AI on.

1. Swap laptops with a neighbor (or just links). Play each other's game for **two minutes without help**. Watch them play yours. Write down the first thing that confused them.
2. Try two more edge cases yourself: restart twice in a row; lose on purpose in the first second; press keys that aren't controls.
3. Pick **one** problem and fix it with a step prompt (Goal: fix [problem]; Context: the complete file; Constraints: change only that; Done when: the problem no longer happens and everything else still works). Test, read the diff, and commit as `Fix: [what you fixed]`.

**Working alone?** Play your own game with the edge cases above, then ask someone at home to try it for two minutes later this week.

✅ **Checkpoint:** one fix is committed, and your scratch note lists the other problems you found.

### Part A4 — Link your game and log your prompts (15 min)

1. In github.dev, open your home page's `index.html`. Find the Projects link to `game/`. **By hand** (🔴 AI off), change its text from `My first game (coming in week 2)` to your game's name, for example `Snake, built in one hour`. Save, then commit: `Link game from home page`.
2. Open `PROMPTS.md` and add a **Week 2** heading with entries (🟢 AI on for formatting; the content is yours):
   - your **plan prompt** and how you edited the plan;
   - one **step prompt** that worked and one that didn't, and what you did next;
   - the **play-test**: what confused your tester, and your fix.

   Update **What I wrote or decided myself** (🔴 AI off) with the link text you changed by hand. Commit: `Log Game in an Hour prompts`.

✅ **Checkpoint:** clicking the Projects link on your live home page opens your game.

### Part A5 — Keep building (15 min, if time)

- Do your next plan step with the same loop.
- Or open your game's **History** on github.com, click any commit message, and read the red and green lines. Can you match every change to what you asked for?

### Checkpoint share (end of Studio A)

Post your game's live URL where your instructor asks, with the number of working-step commits in its History (for example "Snake, 4 save points"). Stuck? Post the exact blocker instead: that counts too.

**Working alone?** Write the URL and the count in your scratch note.

---

## Studio B — Rewind, compare, explain

| Part | What you do | Time | Core or If time | AI use |
|---|---|---|---|---|
| B1 | Break it on purpose, then go back | 25 min | Core | 🟢 AI on for the break · the restore needs no AI |
| B2 | The `Assisted-by:` line | 10 min | Core | 🟢 AI on |
| B3 | Two models, one prompt | 25 min | Core | 🟢 AI on |
| Break | Stand up, stretch | 10 min | | |
| B4 | Peer explanation swap | 15 min | Core | 🔴 AI off |
| B5 | Prompt makeover workshop | 15 min | Core | 🔴 AI off for the rewrite |
| B6 | Project time | 30 min | Core | 🟢 AI on |
| B7 | Plan your homework feature | 10 min | If time | 🟢 AI on |

The studio ends with a debrief and the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2) (🔴 AI off).

Need the AI today? Start a new chat and paste in your current `game/index.html` from GitHub first: the AI doesn't remember Studio A.

### Part B1 — Break it on purpose, then go back (25 min)

**Why:** this is the most important part of the week. You'll see that a commit really is a save point, and that you can undo a disaster calmly.

Before you start, make sure your **last commit is a working version** of your game. (If it isn't, fix it or finish the step first, and commit.)

**Break it on purpose.** Pick one (more ideas at the end of the [game menu](game-menu.md#ways-to-break-it-on-purpose)):

- Ask for a vague change, and paste the result **without testing it**:

  ```text
  Make the game much more exciting. Change whatever you like.
  ```

- Or delete one line containing `}` from the `<script>` section by hand.

Commit the broken version with the message `Experiment: unreviewed change`. Check the live game a minute later: it's broken, or at least different in ways you didn't choose. (If it somehow still works, delete a line by hand and commit again.)

**Go back to the last working version.** Do this on github.com, in a new tab:

1. Open your repository, then the `game` folder, then `index.html`.
2. Click **History** (top right of the file, with a clock icon). You'll see every commit that changed this file, newest first. Your messages make this list readable.
3. Find your last working commit (for example `Step 3: …`). Next to it is a short hash like `4f2a9c1`. Copy it (there's a copy button) and paste it into your scratch note.
4. On the same row, click the **<>** button (**Browse repository at this point**). You're now looking at your repository as it was then: the branch button near the top shows the hash instead of `main`.
5. Open `game/index.html` and click **Copy raw file** (two overlapping squares, top right of the code).
6. Go back to the present: click the branch button and choose `main` (or click your repository's name at the top). Open `game/index.html` again.
7. Click the **pencil** icon (**Edit this file**). Select all the code, paste, and click **Commit changes…**. Use the message `Restore working version from 4f2a9c1` (with your hash), and commit.
8. Wait a minute and check your live game. It's back.

Open **History** again. **Every** commit is still there, including the broken one. You didn't erase anything; you added a new save point that puts the file back the way it was. That's exactly what the git command `git revert` does: it makes a new commit that undoes an earlier one. You'll use the real command in week 4.

> [!IMPORTANT]
> Your github.dev tab doesn't know about the commit you just made on github.com. Before you continue, check that github.dev's Source Control shows no pending changes (if it does, discard them: they're the broken version). Then **close the github.dev tab and reopen it** by pressing **.** on your repository page. Otherwise you'll be editing an old copy.

✅ **Checkpoint:** your file's **History** shows your step commits, `Experiment: unreviewed change` and `Restore working version from …`, and your live game works again.

### Part B2 — The `Assisted-by:` line (10 min)

🟢 AI on.

**Why:** many open-source projects, including LLVM and Fedora, ask contributors to say in the commit message when an AI tool helped write a change ([All Things Open](https://allthingsopen.org/articles/open-source-ai-contributions-assisted-by-git-trailer-standard)). Anyone reading your history can then tell which changes to read most carefully, including you, in week 4. You practice it from today; it's required from week 6.

**The format.** The first line says what changed, as always. Then a blank line. Then the tool:

```text
Step 4: snake speeds up every 5 foods

Assisted-by: Gemini
```

Use it when an AI wrote or shaped the change; if you used two tools, add one line for each. Leave it off for changes you made entirely by hand, and for restores like the one in B1. More in the Safe Loop's [Assisted-by section](../../resources/safe-loop.md#the-assisted-by-line).

**Where to type it:**

- **github.dev:** in the **Message** box, type the first line, press **Enter** twice to add a blank line, then type `Assisted-by: [tool]`. (**Ctrl+Enter** / **Cmd+Enter** commits; plain **Enter** adds a new line.)
- **github.com** (pencil icon): put the first line in **Commit message** and `Assisted-by: [tool]` in **Extended description**.

**Try it now.** Ask your assistant for one tiny change, such as a one-line "How to play" under your game's title. Test it, read the diff, and commit it with an `Assisted-by:` line. Then open the commit on github.com and check the line is there.

✅ **Checkpoint:** one commit in your History ends with `Assisted-by: [tool]`.

### Part B3 — Two models, one prompt (25 min)

🟢 AI on.

Different models give different answers to the same prompt. Here you see how different, and judge them against your own "Done when".

1. Copy your current `game/index.html` from github.com (**Copy raw file**).
2. Write the prompt for your **next step**: step 4 or 5 of your plan, or one small new feature. Paste the complete file into **Context**. Send the **exact same prompt** to both assistants, each in a new chat.
3. Test both results against your "Done when":
   - In an assistant with a live preview, test it there.
   - In an assistant without one, copy its file into a new file `game/compare.html` in github.dev, commit it as `Compare: next step from [assistant]` (with an `Assisted-by:` line), and open `https://[your-username].github.io/game/compare.html` a minute later.
4. Fill in this table in your scratch note:

   | Question | Assistant A | Assistant B |
   |---|---|---|
   | Meets the "Done when"? (test it; don't take its word) | | |
   | Kept everything that already worked? | | |
   | Followed the constraints (one file, no libraries, complete file)? | | |
   | Added anything you didn't ask for? | | |
   | Which one could you explain to a classmate? | | |

5. Keep the better version: paste it into `game/index.html`, test, read the diff, and commit it as `Step [N]: … (version from [assistant])`, ending with `Assisted-by: [assistant]`.

**Only one assistant works?** Send the same prompt to two fresh chats in the same assistant. You'll still see how much answers vary.

✅ **Checkpoint:** the winning version is committed with an `Assisted-by:` line, and your table says which assistant won and why.

### Break (10 min)

### Part B4 — Peer explanation swap (15 min)

🔴 AI off. Explaining code in your own words is how you show you understand it, and it's one of the [six skills you must show without AI](../../resources/without-ai-skills.md).

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

**Working alone?** Pick a function in your own game, write the four answers without AI, and explain it out loud to a friend or record yourself on your phone. Only afterwards, check your explanation with the AI.

✅ **Checkpoint:** you explained one function in someone else's game, and they confirmed or corrected it.

### Part B5 — Prompt makeover workshop (15 min)

🔴 AI off for the rewrite. Writing a good prompt is the skill, so you write these yourself.

**Worked example** (your instructor walks through it, 3 min).

- **Weak prompt:** `make my website better`
- **Situation:** your home page's text is hard to read on a phone and the sections run into each other.
- **Rewrite:**

  ```text
  Goal: Make my home page easier to read on a phone.
  Context: Here is my current index.html: [complete file]. On my phone the text is tiny and the sections run together.
  Constraints: Don't change any text or colors. CSS changes only. Give me the complete file.
  Done when: On a 375-pixel-wide screen, body text is at least 16 pixels, each section has clear space around it, and nothing scrolls sideways.
  ```

**The four weak prompts.** In the studio you rewrite **A**. You finish **B, C and D** for homework.

| # | Weak prompt | Situation |
|---|---|---|
| A | `fix it` | In your Whack-a-mole game, the score goes up when you click an empty hole, not only when you hit a mole. You're starting a new chat. |
| B | `add a leaderboard` | You want your Pong game to show the top 5 scores. The game is one HTML file on GitHub Pages, with no server. (Hint: a leaderboard shared by everyone needs a server, which comes in week 5. What could work in this browser only?) |
| C | `make a to-do app with login, reminders, dark mode, drag and drop, sharing with friends and AI suggestions` | You want to start a project next week. (Hint: this is at least five projects. Rewrite it as a plan prompt for a first version, and say what's out of scope.) |
| D | `make it look more professional` | Your home page uses five colors and three fonts, and you'd like a calmer, cleaner look. |

**Check a rewrite** against these four questions:

- [ ] It has one goal, not several.
- [ ] **Context** includes the facts the AI can't see (the current code, what happened).
- [ ] **Constraints** protect what already works.
- [ ] **Done when** could be checked by someone else in under a minute.

**In the studio:**

1. Rewrite prompt A alone, on paper or in a note (6 min). You may invent reasonable details.
2. Swap with a neighbor. Check each other's rewrite against the four questions and suggest one improvement (4 min).
3. Two or three people read theirs out (2 min).

**Working alone?** Check your rewrite against the four questions yourself, then put it away for ten minutes and read it again as if you were the AI.

✅ **Checkpoint:** you have a four-part rewrite of prompt A that passes all four checks.

### Part B6 — Project time (30 min)

🟢 AI on.

Keep building your game with the Safe Loop: your next plan step, or a fix from your play-test list. Every AI-helped commit ends with an `Assisted-by:` line. Behind? Use this time to finish Studio A's parts first, and ask for help.

### Part B7 — Plan your homework feature (10 min, if time)

🟢 AI on for the plan.

Your homework adds **one more feature** in at least three save points ([homework task 2](homework.md#2-one-more-feature-in-three-save-points-2-h-30-min)). Start it now:

1. **Check first:** write the feature's "Done when" **yourself**, in your scratch note, before you ask the AI anything.
2. Then ask for a plan: `Don't write code yet. Propose 3 small steps to add [feature] to my game, each with a "Done when" line. Here is my current game/index.html: [complete file].` Compare its plan with your "Done when".

### Before you leave Studio B

- [ ] Your game works at `https://[your-username].github.io/game/`, and your home page links to it.
- [ ] Your game's **History** shows one commit per working step, the experiment and the restore.
- [ ] At least one commit ends with an `Assisted-by:` line.
- [ ] You did the [Week 2 exit ticket](../../assessment/exit-tickets.md#week-2) (🔴 AI off). It's scored for completion, not correctness.

---

## Troubleshooting

| Problem | Fix |
|---|---|
| Pressing **.** does nothing | Click an empty part of the page first (not a text box), or change `github.com` to `github.dev` in the address bar |
| **Commit & Push** is greyed out | Type a commit message, and save the file first (**Ctrl+S** / **Cmd+S**) |
| The `Assisted-by:` line doesn't show in the commit on github.com | It must be part of the commit message: in github.dev, on its own line after a blank line; on github.com, in **Extended description**. Add it to your next AI-helped commit; don't redo old ones |
| The game is blank after pasting | You pasted only part of the code, or chat formatting (` ``` ` lines). Ask for "the complete file in one code block" and use the copy button |
| The AI gives snippets ("add this inside your update function") | Reply: `Give me the complete updated file in one code block.` |
| Arrow keys or Space scroll the page | Ask: `Stop the game's keys from scrolling the page. Complete file, please.` |
| Works in the preview, not on the live site | Wait a minute and hard-refresh (**Ctrl+Shift+R** / **Cmd+Shift+R**). Check the path is exactly `game/index.html`, lowercase, and the address ends in `/game/` |
| Can't find **History** | Open the file itself first (not the folder), then look at the top right of the code |
| Can't find the **<>** button in History | Click the commit message instead, find `game/index.html` in the diff, and use its **…** menu → **View file** |
| You restored the wrong version | No harm done. Everything is still in **History**; restore again from the right hash |
| github.dev shows old code after the restore | Close the github.dev tab and press **.** on your repository page again |
| github.dev says it can't push or there's a conflict | Copy your current code into a note, close github.dev, reopen it, and paste your change again |
| You hit an assistant's usage limit | Switch to the other assistant and paste your current file from GitHub. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| You're stuck on step 1 after 15 minutes | Switch to a ★ Easy game from the menu and use its sample plan as your plan. Tell your instructor |

## If a tool is down

- **Main assistant down:** use a fallback from the [Tool Handout](../../TOOLS.md). Paste your current `game/index.html` from GitHub into the new chat first, because the new tool starts with an empty context window.
- **Only one assistant works:** do the comparison in Part B3 by sending the same prompt twice to the same assistant in two fresh chats.
- **github.dev won't open:** edit on github.com instead. Open the file, click the **pencil** icon, paste, then **Commit changes…** (the `Assisted-by:` line goes in **Extended description**). To create `game/index.html`, use **Add file → Create new file** and type `game/index.html` as the name.
