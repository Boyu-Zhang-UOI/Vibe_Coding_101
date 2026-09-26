# Week 4 Lab — Read It, Debug It, Own It

**Time:** about 90 minutes of work plus a 10-minute break · **Work:** pairs for Part 2, alone for Parts 1, 3 and 4 · **AI use:** 🔴 off in Part 2 (🟡 tutor mode after 10 minutes stuck) · 🟢 Copilot **Ask mode only** in Parts 3–4

Today you move Project 1 into a real code editor, find and fix five planted bugs with the AI switched off, write a small feature yourself with Copilot as planner and reviewer, and practice undoing a bad commit.

**You need:** your Project 1 repository from week 3, a partner for Part 2, and a GitHub account with Copilot enabled ([setup/accounts.md](../../setup/accounts.md)).

> [!NOTE]
> **Oral walkthrough 1** happens during this lab and in office hours: a 10-minute conversation, AI off, about your Project 1 code ([how it works](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4)). If your name is called, go, then come back to where you were.

---

## Part 1 — Move Project 1 into a Codespace (10 min)

**Why:** github.dev can edit files, but it can't *run* anything. A **[Codespace](../../resources/glossary.md#codespace)** is a full version of VS Code running on a computer in the cloud: it has a terminal, can run a web server, and includes Copilot. Nothing to install. More detail: [setup/codespaces.md](../../setup/codespaces.md).

1. Open your Project 1 repository on GitHub. Click the green **Code** button → **Codespaces** tab → **Create codespace on main**. It takes a minute or two the first time.
2. Take the tour. Find each of these:

| Part | Where | What it's for |
|---|---|---|
| **Explorer** | Top icon on the left bar (Ctrl+Shift+E, or Cmd+Shift+E on a Mac) | Your files |
| **Editor** | The big area in the middle | Reading and changing code. Line numbers are on the left |
| **Terminal** | The panel at the bottom. If it's hidden: menu (☰) → **Terminal** → **New Terminal** | Typing commands |
| **Source Control** | The branch-shaped icon on the left bar (Ctrl+Shift+G) | Seeing what changed, committing and pushing |
| **Copilot Chat** | The chat icon at the top of the window, or the Copilot icon in the status bar at the bottom | Asking questions (Part 3) |

   Menus move between versions. If you can't find something, hover over the icons: each one shows its name.

3. **Run your app.** Click in the terminal and type:

   ```bash
   python3 -m http.server 8000
   ```

   This starts a small web server that serves the files in your repository. A pop-up says your application is running on port 8000: click **Open in Browser**. No pop-up? Open the **Ports** tab next to the terminal and click the globe icon next to port 8000.

4. In the new tab, open **[DevTools](../../resources/glossary.md#devtools)**: F12, or Ctrl+Shift+I (Cmd+Option+I on a Mac). Click the **Console** tab. Reload the page and read anything red or yellow.

✅ **Checkpoint:** your Project 1 runs in a browser tab whose address ends in `.app.github.dev`, and you have the Console open. Any red errors you see are debugging material for later: note them in your Project 1 notes.

> [!TIP]
> The forwarded address is private to you. Classmates will see a sign-in page if you send it to them. Share your GitHub Pages link instead.

---

## Part 2 — Debug Clinic (45 min, AI off)

🔴 **AI off.** 🟡 Tutor mode only after 10 minutes stuck on one bug.

**Why:** in Anthropic's study, debugging was where people who learned with AI fell furthest behind ([Anthropic, 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)). The only way to build the skill is to practice without the AI doing it for you.

The kit is a small **Reading Log** app with **five planted bugs** that reveal themselves one after another. Each can be fixed by changing one or two lines.

### Set up (5 min)

1. **Pair up.** The **driver** types. The **navigator** reads the code, asks "why?", and keeps the notes. Swap after every bug.
2. The driver makes a copy of the kit by following [Start a project from a starter](../../setup/codespaces.md#start-a-project-from-a-starter). The starter is the **Debug Clinic**, at `weeks/04-read-debug-own-it/debug-clinic/` in the course repository (your instructor's template may be called `vc101-debug-clinic`).

   Name the new repository `debug-clinic`, then open it in a **new** Codespace. (You now have two codespaces. That's fine; you'll stop both at the end.)

3. **Check that the AI is off.** The kit includes a settings file (`.vscode/settings.json`) that switches off Copilot's suggestions and chat in this workspace. To check, open `app.js`, go to an empty line, and type `function`. No grey "ghost text" should appear after it.

   If suggestions still appear:
   - Click the **Copilot icon** in the status bar at the bottom and choose the option to disable or snooze completions, **or**
   - Open the Command Palette (Ctrl+Shift+P, or Cmd+Shift+P on a Mac), run **Preferences: Open Workspace Settings**, search for `inline suggest`, and untick **Editor › Inline Suggest: Enabled**.

   Don't open the Chat view. Menus move: if these steps don't match what you see, ask your instructor.

4. Run the app exactly as in Part 1 (`python3 -m http.server 8000` → **Open in Browser**) and open the Console.
5. Open the kit's `README.md` from the Explorer (right-click it → **Open Preview** for a formatted view) and read the rules, the scoring and the **five bug reports**.

✅ **Checkpoint:** the Reading Log is open in a browser tab and says "Loading your books…", the Console shows a red error, and no AI suggestions appear in the editor.

### Hunt (40 min)

Work through the bug reports **in order**, using the debugging method for every bug:

| Step | Ask yourselves |
|---|---|
| **Reproduce** | Can we make it happen on purpose, following the report's steps? |
| **Isolate** | What does the Console say? Which file, which line, which function? |
| **Hypothesize** | "We think ___ is wrong, because ___." Say it out loud before touching the code |
| **Test** | Can we check that idea first? Type a variable name in the Console, or add a temporary `console.log(...)` |
| **Fix** | What's the smallest change that fixes the *cause*? |
| **Verify** | Repeat the report's steps. Are the earlier bugs still fixed? |

After each fix:

1. Write the claim in `BUGS.md` (the format is in the kit's README).
2. **Commit your fix.** In **Source Control**, you'll see the changed files. Type a message such as `Fix bug 2: wrong id for the book list`, click **Commit** (choose **Yes** if it asks to stage all changes), then click **Sync Changes** to push it to GitHub.

**Stuck?** Follow the **10-minute rule**:

1. Ten minutes on the same bug with no progress → read **one** hint from the kit's `hint-cards.md` (or ask your instructor for the printed card).
2. Still stuck after hint 3 → 🟡 **tutor mode**. Open your chat assistant in a new browser tab, paste the prompt from [instructor/course-tutor.md](../../instructor/course-tutor.md), then describe the bug report, what you've tried, the exact error message, and the function you're looking at. The tutor gives hints, not fixes. Log it in `BUGS.md`.

> [!IMPORTANT]
> Don't paste the whole app into a normal AI chat and ask it to fix it. That skips exactly the practice this lab exists for, and the bounty only counts if you can explain the cause in your own words.

✅ **Checkpoint:** at least bugs 1–3 are fixed, claimed in `BUGS.md` and committed. Bugs 4 and 5 are great if you get there. Your instructor will go through all five in the debrief.

When time is called, finish your current sentence in `BUGS.md`, commit, and click **Sync Changes**.

**Take your 10-minute break now.**

---

## Part 3 — The AI plans, you write, the AI reviews (20 min)

🟢 Copilot, **Ask mode only**, in your **Project 1** Codespace. Suggestions stay **off** while you write.

**Why:** in CMU's AI coding course, understanding peaked on the assignment where students read and partly wrote the code, using this exact workflow ([CMU 15-113](https://www.cs.cmu.edu/~113/bestPractices.html)). The AI plans and reviews; you do the writing and deciding.

1. **Pick one small feature** for Project 1: something you could write in about 15 lines. Ideas:
   - a count at the top ("3 plants");
   - a friendly empty-state message when the list is empty;
   - a **Clear all** button that asks for confirmation;
   - a character limit with a message;
   - sorting the list (newest first, or A–Z);
   - a SHOULD story from your spec, or a MUST that's still failing.

   First, add its acceptance criterion to your `SPEC.md` (**WHEN … THE APP SHALL …**). Save it.

2. **Switch suggestions off in this workspace** (chat stays on): Command Palette → **Preferences: Open Workspace Settings** → search `inline suggest` → untick **Editor › Inline Suggest: Enabled**.

3. **Ask for a plan.** Open Copilot Chat and choose **Ask** in the mode picker at the bottom of the chat box. Type `#` to attach your files (choose `index.html` and `app.js`), or drag them into the chat. Then:

   ```text
   Goal: Plan how I can add this feature myself: <describe the feature>. The acceptance criterion is: <paste your WHEN … THE APP SHALL … sentence>.
   Context: This is my Project 1, a plain HTML, CSS and JavaScript app (files attached) that saves data in localStorage. I'm a beginner and I want to write the code myself.
   Constraints: Do NOT write the code. Give me a plan of 3–5 steps in plain English. For each step, say which file and which function or element to change, and which JavaScript feature I'll need (for example addEventListener, textContent or filter). Point me to existing lines in my code whose pattern I can copy.
   Done when: I could write the code from your plan without asking you for code.
   ```

   If it writes code anyway, don't copy it. Reply: "Please remove the code and describe the steps only."

4. **Write it yourself.** Follow the plan one step at a time. Copy patterns from your own code. Save, reload the app tab, test. If something breaks, read the Console first, and use `console.log(...)` to test your ideas: the same method as the clinic.

5. **Ask for a review.** In **Source Control**, click your changed file to see the **[diff](../../resources/glossary.md#diff)** (red lines removed, green lines added). Then, in Copilot Chat (still **Ask**):

   ```text
   Goal: Review the change I just wrote by hand, before I commit it.
   Context: #changes. I added <feature>. The acceptance criterion is: <paste it>.
   Constraints: Don't rewrite my code. List up to 5 issues, most important first: bugs, edge cases I missed (empty input, reload, very long text), and anything confusing. For each, point to the line and explain why in one sentence. If nothing important is wrong, say "looks good".
   Done when: I know what to fix and why.
   ```

   If `#changes` isn't offered in your version, select the lines you changed in the editor and ask about "the selected code" instead.

6. **Fix what you agree with, yourself.** You may disagree with the review; write down why. Test the criterion and one edge case.
7. **Commit and push.** Use a message such as `Add clear-all button with confirm (AC9), written by hand`, then click **Sync Changes**.
8. **Log it** in `PROMPTS.md`: the plan prompt, the review prompt, what you wrote yourself, and which review points you accepted or rejected.

✅ **Checkpoint:** the new criterion passes in your running app, the commit is on GitHub, and your PROMPTS.md entry says which lines you wrote.

---

## Part 4 — Edge-case tests and git practice (15 min)

### 4a. TESTS.md (8 min)

1. In your Project 1 Codespace, create `TESTS.md` by copying [templates/TESTS.md](../../templates/TESTS.md).
2. Write **three edge-case manual tests** for your own acceptance criteria. Pick from the template's edge-case list: empty input, very long input (paste 500 characters), duplicates, special characters such as `<b>hi</b>` and emoji, reloading, and a small phone screen (in DevTools, click the phone-and-tablet icon to switch on device mode).
3. **Run them** in your app and record each result with today's date.
4. If one fails, log it under "Bugs found by testing". Fix it now with the Safe Loop if you have time (Copilot in Ask mode may explain; you or the chat assistant may write the fix), or fix it in the homework.

### 4b. Undo a bad commit (7 min)

The terminal gives you the same git powers as the Source Control panel. Stop the web server first (click in the terminal and press Ctrl+C), then:

1. See your history, newest first. Each line starts with a short commit id:

   ```bash
   git log --oneline
   ```

2. See exactly what your latest commit changed (press `q` to get back to the prompt):

   ```bash
   git show HEAD
   ```

3. **Make a bad commit on purpose.** Add this line at the very end of `style.css` and save:

   ```css
   body { display: none; }
   ```

   Then commit it:

   ```bash
   git add style.css
   git commit -m "Hide everything (bad commit on purpose)"
   ```

4. Restart the server with `python3 -m http.server 8000` and reload your app. The page is blank. Stop the server again with Ctrl+C.
5. **Undo it with a [revert](../../resources/glossary.md#revert).** A revert makes a *new* commit that undoes an old one, so your history stays honest:

   ```bash
   git revert HEAD --no-edit
   ```

   (`--no-edit` accepts git's ready-made message, "Revert …". Without it, git opens an editor so you can change the message.)

6. Check your history, and see that both commits are there:

   ```bash
   git log --oneline
   ```

7. Start the server again and reload: the page is back. Then push everything to GitHub:

   ```bash
   git push
   ```

> [!WARNING]
> In this course, never use `git reset --hard` or `git push --force` to undo work. They delete history, and they're the commands agents have used to destroy work. `git revert` is always safe.

✅ **Checkpoint:** `git log --oneline` shows your bad commit followed by a "Revert …" commit, your app looks normal, and `git push` has finished.

---

## Stretch goals

- **Bonus bug.** Ask your instructor for an extra planted bug for the clinic app.
- **Breakpoints.** In DevTools → **Sources**, open `app.js`, click a line number to set a breakpoint, and use the app. Step through with the arrow buttons and hover over variables.
- **Explain a function.** With the AI off, explain one function of your Project 1 to your partner, line by line. Anything you can't explain goes on your homework list.

## Troubleshooting

| Problem | Try this |
|---|---|
| The codespace won't start, or says you're out of hours | Stop any other codespaces at [github.com/codespaces](https://github.com/codespaces). Then see [setup/codespaces.md](../../setup/codespaces.md). Meanwhile, pair with your partner in their codespace |
| `Address already in use` when starting the server | A server is already running. Find the terminal running it and press Ctrl+C, or use another port: `python3 -m http.server 8001` |
| "Open in Browser" shows an old version | Save the file (a dot on the tab means unsaved), then hard-reload with Ctrl+Shift+R (Cmd+Shift+R) |
| The forwarded page says "404" or "Directory listing" | You started the server in the wrong folder. The server shows the folder it was started in, and `index.html` must be in that folder |
| Copilot Chat has no Ask mode, or has run out of credits | Menus change: look for a mode picker at the bottom of the chat box. Out of credits: use your chat assistant in a browser tab with the same prompts, pasting your code ([TOOLS.md](../../TOOLS.md)) |
| `git push` is rejected | Someone (maybe you, on github.com) changed the repository. Run `git pull`, then `git push` again. Ask for help if you see "conflict" |
| `git show` or `git log` fills the screen and won't go away | Press `q` |
| The Reading Log appeared inside my Project 1 | You ran the copy command in the wrong codespace, and it overwrote your files. If you haven't committed, run `git restore .` in the Project 1 terminal to get your files back, then delete the extra kit files (`hint-cards.md`, `.vscode`) by hand. If you already committed, run `git revert HEAD --no-edit` |

## Before you leave

- [ ] Both the `debug-clinic` and Project 1 repositories are committed and pushed (**Sync Changes** or `git push`).
- [ ] `PROMPTS.md` has entries for Part 3 (plan and review), with what you wrote yourself.
- [ ] `TESTS.md` has three edge-case tests with results.
- [ ] **Stop both codespaces:** [github.com/codespaces](https://github.com/codespaces) → **…** next to each one → **Stop codespace**. Stopped codespaces don't use your free hours.
- [ ] Homework: [homework.md](homework.md). Project 1 is due, and the reflection is AI-free.
