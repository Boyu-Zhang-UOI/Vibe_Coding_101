# Week 6 Lab — Be the Agent, then direct one

> Two studios. In **Studio A** you play an agent by hand, set up your capstone's `SPEC.md` and `AGENTS.md`, and build its first feature with a real agent, test first. In **Studio B** you merge that feature through a pull request, hunt a bug planted in agent-written code, and start a second feature at the feature clinic.

**AI-use key:** 🟢 AI on: use AI, following the [Safe Loop](../../resources/safe-loop.md) · 🟡 AI limited: only in the way the step says · 🔴 AI off: close AI chat and [turn off completions](../../setup/codespaces.md#turn-copilot-off-for-ai-off-activities).

**This week's rules for agents:** approvals stay on (never autopilot or skip-permissions modes); commit before and after every agent task; read every command before you allow it; the agent never gets your keys. Stuck at any point? See [Troubleshooting](#troubleshooting) at the bottom of this page.

**Oral walkthrough 2** is about the first feature you build with an agent in Studio A ([what to expect](../../assessment/oral-walkthroughs.md#what-to-expect), [protocol](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6)). It happens in Studio B project time, or by appointment before week 7 Studio A.

## Studio A — Be the Agent, then direct one

| Time | Block | Core or If time |
|---|---|---|
| 0:00–0:05 | Recap: last week's most-missed exit-ticket question | — |
| 0:05–0:25 | Concept talk ([slides](slides.md)) | — |
| 0:25–0:35 | Live demo: one small agent task, test first | — |
| 0:35–1:05 | [Part 1 — Be the Agent](#part-1--be-the-agent-30-min) (30 min) | Core |
| 1:05–1:10 | [Part 2 — Open your capstone](#part-2--open-your-capstone-5-min) (5 min) | Core |
| 1:10–1:35 | [Part 3 — Today's criterion and an AGENTS.md with a Scope](#part-3--todays-criterion-and-an-agentsmd-with-a-scope-25-min) (25 min) | Core |
| 1:35–1:45 | Break | — |
| 1:45–2:40 | [Part 4 — Your first agent-built feature](#part-4--your-first-agent-built-feature-55-min) (55 min) | Core |
| 2:40–2:50 | [Part 5 — Try the Copilot CLI](#part-5--try-the-copilot-cli-10-min) (10 min) | If time |
| 2:50–3:00 | Checkpoint share: your test going from red to green, or your exact blocker | — |

### Before Studio A: create your capstone repository

About 15 minutes, before class (it's part of the [pitch milestone](../../projects/capstone.md#milestones)):

1. Create your capstone repository from the starter by following [Start a project from a starter](../../setup/codespaces.md#start-a-project-from-a-starter), with the path `projects/capstone-starter`. Give it your project's name, make it **public**, and keep it in your **personal** account (so Vercel can deploy it). Pairs: one person creates it and adds the other as a collaborator (**Settings** → **Collaborators**).
2. Open it in a Codespace and run the tests:

   ```bash
   npm test
   ```

3. Check that Copilot Chat's mode picker offers **Agent**, and look at your credit usage (the Copilot icon in the status bar).
4. Stop the Codespace (github.com/codespaces → ⋯ → **Stop codespace**).

✅ **Checkpoint:** `npm test` ends with `fail 0`, and your repository is on github.com under your own username.

### The live demo: one small agent task, test first

Your instructor builds one tiny feature with Copilot agent mode while you watch for five things: the test is written first, in its **own** chat; the agent **plans** and waits for approval; every command needs an **approval** click; the instructor runs `npm test` **themselves**; and a **teach-back** goes into `PROMPTS.md` before the commit. You'll do exactly this in Part 4.

### Part 1 — Be the Agent (30 min)

**Core · 🔴 AI off (unless you choose the "Working alone?" option with an AI as the Model)**

**Why:** an agent only knows what its tools return. Playing both halves of the loop shows you what an agent needs, and where it goes wrong.

Work in pairs. One of you is the **Model**, the other is the **Harness** (the program that runs the model's tool calls). Everything you need is in the kit: the [Be the Agent README](be-the-agent/README.md) (roles and rules), the [tool cards](be-the-agent/tool-cards.md) (the five tools and their exact commands) and the [task cards](be-the-agent/task-card.md) (the bug report and a call log).

> [!NOTE]
> The kit contains a **planted bug on purpose**. One test fails until you fix it.

1. **Setup (Harness, 3 min).** Create a repository from the kit by following [Start a project from a starter](../../setup/codespaces.md#start-a-project-from-a-starter), with the path `weeks/06-agents/be-the-agent`, and open it in a Codespace. Open a terminal, close all editor tabs and collapse the Explorer. Don't run anything yet.
2. **Task A (20 min).** The Model reads Task A on the task card and writes one tool call at a time, for example:

   ```text
   CALL 1: run
   ```

   The Harness types the matching command from the tool card, for example:

   ```bash
   npm test
   ```

   and reads the output aloud, word for word (or shares the screen, if reading aloud doesn't suit you). The Model logs each call and what it learned. Keep going until the Model writes a **Finish** report with test output as evidence.
3. **Fast pairs:** swap roles and do **Task B**, the feature request, red then green.
4. **Rules to remember:** the Model never looks at the editor; the Harness never hints or fixes the Model's typos; nobody edits the tests to make them pass.

> [!TIP]
> **Working alone?** Choose one:
>
> - **With your instructor** (🔴 AI off). In a small class, your instructor plays the Model and you play the Harness for Task A; then swap for Task B.
> - **Play both roles** (🔴 AI off). Keep the editor closed. Before each call, write it in the call log and say what you expect it to show; then run it and write what you actually learned. You may only use what the terminal has printed.
> - **An AI plays the Model** (🟢 AI on). This is the one time an AI may work on the kit, and only through tool calls that you run. Open a fresh chat with any chat assistant. Paste the kit's "Roles" and "Rules" sections, the whole tool card page and Task A, then say: "You are the Model. Write exactly one tool call at a time, then wait for me to paste its output." You are the Harness: run each call exactly as written, typos included, and paste back the full output. Don't hint. Afterwards, answer the debrief questions about the AI's calls.

✅ **Checkpoint:** the Harness runs `npm test` one last time and it ends with `fail 0`. The Model's call log shows every call, and the Finish report quotes the test summary.

#### Debrief (last 7 minutes)

Discuss in your pair, then share one answer with the class:

1. What **context** did the Model need before it could fix anything? Which single call told you the most?
2. How many tool calls did you make? Which were wasted?
3. Did an `edit` fail? What did that teach you about how agents must quote code?
4. How did you know you were done? What if you'd skipped the last `run`?
5. What would have helped? Write the three-line `AGENTS.md` you wish the kit had.

Afterwards, the Harness can commit the fix with a message that says what changed and why. You won't use this repository again; stop its Codespace.

### Part 2 — Open your capstone (5 min)

**Core · 🟢 AI on (not needed)**

Open the capstone repository you created before class in a Codespace and check the shell works:

```bash
npm test
npm run dev
```

Open the forwarded port 3000. The list example works straight away; the "ask the AI" example needs a key, exactly as in week 5 (optional today). Stop the server with `Ctrl`+`C`.

Didn't create the repository before class? Do the [four steps above](#before-studio-a-create-your-capstone-repository) now (about 10 minutes), and take the time from Part 3's AI critique.

✅ **Checkpoint:** `npm test` ends with `fail 0` and the page loads.

### Part 3 — Today's criterion and an AGENTS.md with a Scope (25 min)

**Core · 🟡 AI limited: you write both files; Copilot in Ask mode may critique them**

**Why:** an agent works best with good standing context. `SPEC.md` says *what* to build; `AGENTS.md` says *how to work* here, and what is out of bounds. Today you write only what your first feature needs; the rest of the spec is homework.

#### 3a. `SPEC.md`: the problem, the user and today's criterion (12 min)

1. Open `SPEC.md`. Fill in sections 1 (Problem) and 2 (User) from your pitch: a few sentences each.
2. In section 4, replace the example criteria with **one** acceptance criterion for today's feature, in **WHEN … THE APP SHALL …** form, plus one edge case of it. Pick a MUST criterion whose logic fits in a small, testable function in `public/lib/`. Good first features: "reject an empty or duplicate entry", "calculate the total, streak or average", "sort items by date", "format a date for display". Avoid anything that needs a database or a new API today.

   ```text
   AC1 | WHEN I add a habit with an empty or duplicate name, THE APP SHALL not add it and SHALL show "Please enter a new habit name". | MUST
   ```

3. Optional (🟡 AI limited): ask Copilot in **Ask** mode, "Is AC1 in SPEC.md specific enough to write a test for? List at most 3 problems. Don't rewrite it." Decide yourself what to change.

#### 3b. `AGENTS.md` with a Scope section (10 min)

The starter's `AGENTS.md` already describes the layout and the safety rules. Make it yours, **keeping it short**:

1. Replace the **Project** line with one sentence about your app.
2. Find the **Scope** section (if your copy has none, copy it from the [AGENTS.md template](../../templates/AGENTS.md)). List only the folders an agent may edit for **your** project, for example `public/`, `tests/`, and `api/` only if you'll have a server route. Keep the sentence "Anything not listed here is out of scope", and the lines about asking before deleting, installing, publishing or making network requests, and never creating repositories, gists, releases or deployments.
3. Add at most two conventions that matter for your project (for example "All dates are shown as YYYY-MM-DD" or "Keep the page usable on a phone").
4. Read the whole file once, line by line. You're responsible for every instruction an agent follows.

> [!IMPORTANT]
> **`AGENTS.md` is advice, not enforcement.** An agent reads it and usually follows it, but nothing stops it from ignoring a line. What actually holds: the **Codespace** (the agent can only reach this project), the **approval prompts** you answer, **no keys within its reach** (keep `.env` closed and out of the conversation), and **save points pushed to GitHub**, which an agent in your Codespace can't delete without a command you'd have to approve. Week 7 adds database rules.

In VS Code, check two settings (`Ctrl`+`,`, Mac `Cmd`+`,`; names move, so search):

- Search `AGENTS.md`: **Use AGENTS.md file** is ticked, so Copilot reads your file.
- Search `auto approve`: nothing that approves all tools or all commands automatically is switched on. VS Code warns you before turning such a setting on; in this course, the answer is always no.

#### 3c. Commit (3 min)

**Source Control** → message `Start capstone: SPEC with AC1, AGENTS with scope` → **Commit** → **Sync Changes**. (If Copilot critiqued your spec, add an `Assisted-by: GitHub Copilot` line.)

✅ **Checkpoint:** on github.com, your repository shows your `SPEC.md` with AC1 and your `AGENTS.md` with a Scope section, and the **Actions** tab shows a green check from the test workflow.

### Break (10 min)

### Part 4 — Your first agent-built feature (55 min)

**Core · 🟢 AI on: Copilot agent mode, approvals on · 🔴 AI off for the teach-back**

**Why:** this is the Safe Loop with an agent doing the typing. Your job is the part the agent can't do: choosing the task, writing the check, approving the plan, checking the evidence and reading the diff.

#### 4a. Save point and a branch (3 min)

In the terminal:

```bash
git status
git switch -c feature/ac1
```

`git status` should say "nothing to commit, working tree clean": that's your "before" save point. (If it isn't clean, commit first.) The second command starts a **branch**, a separate line of work: if this feature goes wrong, `main` is untouched. You'll learn the rest of the branch story, and merge this one, in Studio B.

#### 4b. Check first: the test, in its own chat (12 min)

The test comes **before** the code, and from a **separate prompt** that never sees the code, so it checks what your spec says rather than what the code happens to do.

Open Copilot Chat, start a **new chat session**, choose **Agent** in the mode picker, and adapt this prompt:

```text
Goal: Write ONE test file for AC1 in SPEC.md, before the feature exists.
Context: Read AGENTS.md and SPEC.md. The logic will be a function addHabit(habits, name) in public/lib/habits.js that returns { habits, error }. Tests are tests/*.test.js and run with npm test (Node's built-in test runner; see tests/items.test.js for the style).
Constraints: Create only tests/habits.test.js. Do not create or change any other file, and do not write the function. Cover the normal case and the edge case in AC1.
Done when: the test file exists, you have run npm test, and you have pasted the output showing the new tests failing.
```

When Copilot asks to run a command, **read the command** before you allow it. Allow `npm test` once.

Then check the red step yourself, in your own terminal:

```bash
npm test
```

The new tests should fail **because the feature doesn't exist yet**: an error such as "does not provide an export named …" or "Cannot find module", or a failed assertion. They should not fail because of a typo in the test. Read the test file: does it check what AC1 says? Then commit the failing test, so you'll be able to see if anything changes it later:

```bash
git add tests/
git commit -m "Add failing test for AC1" -m "Assisted-by: GitHub Copilot (agent mode)"
```

✅ **Checkpoint:** you've seen the new test **fail**, for the right reason, in your own terminal, and it's committed.

#### 4c. Plan first, then build, in a new chat (15 min)

Start **another new chat session** (Agent mode, or **Plan** if your picker offers it). Adapt this prompt:

```text
Goal: Make the failing tests in tests/habits.test.js pass by implementing AC1 from SPEC.md.
Context: Read AGENTS.md and SPEC.md first. Pure logic goes in public/lib/ and is wired into the page in public/app.js.
Constraints: Plan first and wait for my approval before editing anything. Do not change any file in tests/. This one criterion only. No new dependencies. Stay inside the Scope in AGENTS.md. Don't touch .env or api/.
Done when: npm test passes, you have pasted the output, and I can see the message in the browser when I try an empty or duplicate name.
```

Read the plan like a manager. Is it the right criterion? Does it touch only the files you expect? Does it leave `tests/` alone? Reply with your edits ("Skip step 4", "Put the function in public/lib/habits.js"), then approve.

> [!WARNING]
> Keep the default approval setting, where the agent asks before running commands, and allow each command **once**. If the agent proposes `rm -rf`, `git reset --hard`, `git push --force`, installing a package, or deleting or changing a test, click **Skip** and ask it why. If it reads a web page or someone else's file and then wants to do something you didn't ask for, stop the session ([Safety Contract, rule 9](../../setup/safety-contract.md#9-agents-dont-publish-and-untrusted-content-never-shares-a-session-with-my-secrets)).

#### 4d. Green, in your own terminal (3 min)

When the agent says it's done, don't take its word for it:

```bash
npm test
git status --short
```

Every test should pass (`fail 0`). The second command lists every file changed or added since your test commit (`M` means modified, `??` means new): nothing in `tests/` should be on the list. If the agent changed or added a test, it may have made the tests agree with the code instead of the spec. Discard that change (right-click the file in Source Control → **Discard Changes**) and ask the agent to fix the code instead.

✅ **Checkpoint:** `fail 0`, and no file in `tests/` changed after your test commit.

#### 4e. Read it and try it (10 min)

1. **Read the diff.** Open **Source Control** and click each changed file. For every line, ask yourself: can I explain this? For anything you can't, ask Copilot in **Ask** mode: "Explain lines 12–20 of public/lib/habits.js in plain English." Remove or simplify anything you don't need.
2. **Try it by hand.** Run `npm run dev`, open the page, and test the normal case and the edge cases from your criterion. Reload the page. Try it on a narrow window.

#### 4f. Teach back (5 min)

🔴 **AI off.** In `PROMPTS.md`, add an entry for this agent task: the two prompts, the plan and what you changed in it, the red and green test output, and what you checked or fixed yourself. Then write the **teach-back**: 2–3 sentences, in your own words, on what changed and why it works ([example](../../resources/safe-loop.md#teach-back)). If you can't write it, read the diff again or ask Ask mode to explain it, then write it yourself.

#### 4g. Commit and push (5 min)

Commit everything with a clear message and the `Assisted-by:` line:

```bash
git add -A
git status
git commit -m "Reject empty and duplicate habit names (AC1)" -m "Assisted-by: GitHub Copilot (agent mode)"
```

Read the `git status` list before you commit: no `.env`, nothing you didn't expect. Then publish the branch to GitHub: **Source Control** → **Publish Branch** (or `git push -u origin feature/ac1`). Don't merge it yet; that's Studio B.

✅ **Checkpoint:** `git log --oneline` shows your test commit and your feature commit on `feature/ac1`; the branch is on GitHub; `PROMPTS.md` has your entry with red and green evidence and a teach-back. You can explain every line the agent wrote: in oral walkthrough 2 you may be asked to change this code live.

### Part 5 — Try the Copilot CLI (10 min)

**If time · 🟢 AI on, approvals on**

The same agent loop runs in the terminal. Try it on a **tiny** task, for example "add a test for the edge case I forgot":

1. Commit first. Then start it:

   ```bash
   copilot
   ```

   If the command isn't found, install it with `npm install -g @github/copilot` (check the [Tool Handout](../../TOOLS.md#editor-and-agents-weeks-48) and the [GitHub Docs](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli) first; installing runs code). If it asks you to log in, type `/login` and follow the steps. Don't start it with any option that allows all tools.
2. It asks whether you trust the files in this folder: yes, it's your own capstone Codespace, cloned from GitHub.
3. Press `Shift`+`Tab` to switch to plan mode, then paste a four-part prompt.
4. When it asks to run a tool, choose "yes" **once**. Don't approve a tool "for the rest of the session".
5. Check with `npm test` yourself, read the diff, write a teach-back, commit with `Assisted-by: GitHub Copilot CLI`.

Note in `PROMPTS.md` how the CLI compared with agent mode in the editor.

### Wrap up Studio A

- [ ] Be the Agent: debrief answers noted; the kit's Codespace stopped.
- [ ] Capstone `SPEC.md` (with AC1) and `AGENTS.md` (with Scope) committed on `main`.
- [ ] First feature on the `feature/ac1` branch, published to GitHub, with a test that failed first and passes now.
- [ ] `PROMPTS.md` has an agent entry with evidence and a teach-back.
- [ ] Stop your Codespace to save your free hours.

## Studio B — Pull requests, a planted bug, a feature clinic

| Time | Block | Core or If time |
|---|---|---|
| 0:00–0:10 | Show and tell: two students show their first agent feature's diff and read their teach-back | — |
| 0:10–0:45 | [Part 1 — Branches and pull requests](#part-1--branches-and-pull-requests-35-min) (35 min) | Core |
| 0:45–1:10 | [Part 2 — Find the bug planted in agent-written code](#part-2--find-the-bug-planted-in-agent-written-code-25-min) (25 min) | Core |
| 1:10–1:40 | [Part 3 — Feature clinic](#part-3--feature-clinic-30-min) (30 min) | Core |
| 1:40–2:30 | [Part 4 — Project time and oral walkthrough 2](#part-4--project-time-and-oral-walkthrough-2-50-min) (50 min) | Core; one If time task |
| 2:30–2:45 | Debrief: what did the agent do that your `AGENTS.md` didn't allow? What did the pull request show you that the editor didn't? | — |
| 2:45–3:00 | [Week 6 exit ticket](../../assessment/exit-tickets.md#week-6) (🔴 AI off; graded on completion, not correctness) | — |

### Part 1 — Branches and pull requests (35 min)

**Core · 🔴 AI off for the test you write in step 2; otherwise no AI needed**

**Why:** `main` is the version that's deployed, so it should always work. A **pull request** (PR) proposes merging a branch into `main` and shows the whole change as one diff, with the automated tests run on it, before it joins. From now on every capstone feature joins `main` through a pull request; in week 7 a classmate reviews one of yours.

1. **Where you are (2 min).** In your capstone Codespace:

   ```bash
   git branch
   ```

   It lists your branches; `*` marks the one you're on. You should be on `feature/ac1`. If not: `git switch feature/ac1`.
2. **Add one test by hand (12 min).** Practice for walkthrough 2, which asks for exactly this. Think of one more edge case for AC1 (a name with spaces around it, the same name in different capitals, a name just over a length limit). Add it to `SPEC.md` as a new criterion (AC2) in WHEN … THE APP SHALL … form. Then type a test for it **by hand** in your test file, copying the shape of the tests already there, and run `npm test`.
   - If it **fails**, fix the code by hand until it passes.
   - If it **passes** straight away, say why (the code already handles it), and prove the test can fail: change its expected value for a moment, see it fail, change it back.

   Commit (no `Assisted-by:` line: you wrote it) and sync: `git commit -am "Add test for AC2 (names in different capitals)"`, then **Sync Changes**.
3. **Open the pull request (6 min).** On github.com, open your repository. A banner says your branch had recent pushes: click **Compare & pull request**. (No banner? **Pull requests** → **New pull request**, base `main`, compare `feature/ac1`.) Give it a title that says what it does, and a description in three lines:

   ```markdown
   **What:** Reject empty and duplicate habit names (AC1, AC2).
   **Why:** SPEC.md AC1; duplicates made the streak count wrong.
   **How I tested it:** npm test (tests 14, pass 14); tried empty, duplicate and different-capitals names in the browser.
   ```

   Click **Create pull request**.
4. **Checks (2 min).** Your test workflow runs on the pull request. Wait for the green check. A red ✗? Click **Details** and read which test failed.
5. **Review your own pull request (8 min).** Click **Files changed** and read it as a reviewer would:
   - [ ] Only the files I meant to change. No `.env`, no stray files.
   - [ ] Every line is one I can explain.
   - [ ] No secrets, no leftover `console.log` lines or commented-out code.
   - [ ] The tests in `tests/` changed only where I added one.
   - [ ] The description matches what the diff actually does.

   Leave at least one comment on a line (hover over the line → **+**), for example why a check is written the way it is. That's ordinary code review: keep comments about the code.
6. **Merge (3 min).** Click **Merge pull request** → **Confirm merge** → **Delete branch**.
7. **Update your Codespace (2 min).**

   ```bash
   git switch main
   git pull
   git log --oneline -5
   ```

   The log now shows your commits on `main`.

**Pairs:** your partner reviews instead (**Files changed** → **Review changes** → **Approve**), then you merge. **Working alone?** Self-review is exactly right; in week 7 a classmate or your instructor reviews a later pull request.

✅ **Checkpoint:** your first pull request is merged, the branch is deleted, and `git log` on `main` shows the feature. More detail: [branches and pull requests in the Git Cheat Sheet](../../resources/git-cheatsheet.md#branches-and-pull-requests).

### Part 2 — Find the bug planted in agent-written code (25 min)

**Core · 🔴 AI off for the Fixer**

**Why:** the agent will write code that is almost right. In one study of 917 students, bugs planted in otherwise-correct AI code led students to fix the code themselves instead of asking the AI again, and those students did better on their next attempt ([Pădurean et al.](https://arxiv.org/pdf/2607.05068)). Walkthrough 3 puts a planted bug in your capstone; this is your practice.

Work in pairs at one computer: the **Fixer**'s capstone Codespace, and a **Planter**.

1. **Fixer (2 min).** On `main`, with `git status` clean, start a practice branch: `git switch -c practice/bug-hunt`. Turn the AI off (close Copilot Chat; turn off completions). Turn away from the screen.
2. **Planter (3 min).** Open the file in `public/lib/` that the agent wrote in Studio A. Change **one** small thing that a test or the browser would catch: flip `>` to `>=`, change a number, remove a `!` or a `.trim()`, or swap two variables. Don't touch the tests. Save, then commit it so the change doesn't show as unsaved: `git commit -am "Practice"`. Say "ready".
3. **Fixer (12 min).** Find it and fix it by hand. No AI, and no `git diff`, `git log -p` or `git show` (they'd show you the answer). Run `npm test` and read the failure from the top: which test, which file and line, what it expected and what it got. Open the function, reason about it, fix it, and run `npm test` until it shows `fail 0`. If **no** test fails, the bug escaped your tests: find it in the browser, and note in `TESTS.md` the test that would have caught it.
4. **Check (3 min).** Now you may look: `git diff main` shows how your version differs from the original. Nothing, or an equivalent fix you can explain, means you found it.
5. **Clean up (2 min).**

   ```bash
   git restore .
   git switch main
   git branch -D practice/bug-hunt
   ```

6. **Talk (3 min).** Which clue found it fastest? Did you want to ask the AI? Swap roles in project time if you both want a turn.

**Working alone or online?** Let an AI plant the bug (🟢 AI on for planting only). Paste the function into a chat with: "Change exactly one small thing in this function so it has a subtle bug that a test could catch. Don't tell me what you changed. Reply only with the full changed function." Paste the reply over the function on your practice branch, commit it, close the chat, and do step 3 with the AI off.

> [!CAUTION]
> Never "fix" a failing test by changing what it expects, unless `SPEC.md` says the test is wrong. One developer's "fix it" prompt changed a test's expected status from 200 to 500 so the test would pass, and the bug stayed ([HN discussion](https://news.ycombinator.com/item?id=48662310)).

✅ **Checkpoint:** the Fixer found and fixed the planted bug by hand, or knows which test was missing; the practice branch is deleted.

### Part 3 — Feature clinic (30 min)

**Core · 🟢 AI on: agent mode with approvals on · 🟡 AI limited for the criterion you write · 🔴 AI off for the teach-back**

**Why:** two of the four capstone feature types, (c) a data visualization and (d) an external public API, need a pattern you haven't used yet. The capstone starter includes tested examples of both ([feature patterns](../../projects/capstone-starter/README.md#feature-patterns)). Pick the station your pitch needs; the feature you start here is your homework feature.

**Every station uses the same loop** as Studio A Part 4:

1. Write the criterion in `SPEC.md` (🟡 AI limited: you write it).
2. Start a branch from an up-to-date `main`: `git switch main`, `git pull`, `git switch -c feature/[short-name]`.
3. **Check first:** the test, in its own chat or by hand; see it fail; commit it.
4. **New chat:** plan first, approve, build; approvals on.
5. Green in your own terminal; `tests/` unchanged; read the diff; try it by hand.
6. Teach-back (🔴 AI off), commit with an `Assisted-by:` line, publish the branch, open a pull request, review it, merge it. (Whatever you don't finish here continues in project time and homework.)

#### Station C — A simple chart

For capstones that draw a chart from their own data. Read [A chart with no libraries](../../projects/capstone-starter/README.md#a-chart-with-no-libraries) in the starter README, then `public/lib/chart.js` and `tests/chart.test.js`. The helper draws a bar chart as SVG from rows of `{ label, value }`, and `countBy` can count things in your data for you. Most chart bugs are data bugs, so your job is the **data preparation**: the pure function that turns your app's records into those rows, which is the part you test first.

- Decide what to chart: which numbers, grouped how (per day, per week, per category)? Keep it to one chart.
- Example criterion: "WHEN I have logged sessions on three different days, THE APP SHALL show one bar per day, labeled with the day and its total minutes."
- The helper adds a text description for screen readers. If the numbers matter, also show them as text (a list or a small table) next to the chart, so anyone who can't tell the bars apart gets the same information.

#### Station D — An external API route

For capstones that fetch live data from a public service. Read [Data from a public API](../../projects/capstone-starter/README.md#data-from-a-public-api) in the starter README, then `api/weather.js`, `lib/weather.js` and `tests/weather.test.js`. It's the pattern from the week 5 mini-lesson, with tests that replace `fetch` with a fake, so they run offline. To use a different API, the README says to copy `lib/weather.js` and change the address and the step that simplifies the reply.

- Pick your API. Read its terms: whether it needs a key, how many requests it allows, and whether you must credit it. (If it needs a key, the key goes in environment variables, and the feature counts as type (a) instead.)
- Write the check-first tests with a fake `fetch`: a good answer, a service error or timeout, and bad input.
- Example criterion: "WHEN the weather service doesn't answer within 10 seconds, THE APP SHALL show 'Weather is unavailable right now', and the rest of the page SHALL keep working."

#### Neither station fits?

If your capstone uses (a) an AI feature or (b) a database: for (a), adapt `api/ask.js` the way you did in week 5, and test the validation of any new input first. For (b), week 7 Studio A connects Supabase safely; today, build and test the pure logic for your data (for example, checking a new entry) in `public/lib/`. Either way, use the same loop.

✅ **Checkpoint:** your criterion is in `SPEC.md`, you're on a feature branch, and your check-first test fails for the right reason.

### Part 4 — Project time and oral walkthrough 2 (50 min)

**Core · AI use as each task says**

- **Keep going** on your clinic feature, through the same loop, to a reviewed and merged pull request.
- **Deploy**, if your capstone isn't on Vercel yet: [homework task 4](homework.md#4-deploy-on-day-one-about-30-min). Production URL and a screenshot.
- **If time:** the Goldfish test of your `SPEC.md` ([homework task 1](homework.md#1-complete-specmd-and-run-a-goldfish-test-about-2-h)).

**Oral walkthrough 2.** If your instructor has a teaching assistant or second examiner today, they call students one at a time now. Otherwise, book a slot before week 7 Studio A. When it's your turn:

1. Have `npm run dev` running, `npm test` passing and everything committed.
2. Close Copilot Chat and turn off completions (🔴 AI off).
3. Open the diff of your first agent-built feature (the merged pull request's **Files changed** tab works well), plus `AGENTS.md` and `PROMPTS.md`.

You'll walk through what the agent changed, write a new criterion and its test by hand, read a failing test output, and talk through your `AGENTS.md`.

✅ **Checkpoint:** you've done your walkthrough or booked a slot, and your clinic feature is at least at the green step.

### Wrap up Studio B

- [ ] First pull request merged; `main` up to date in your Codespace.
- [ ] Planted-bug hunt done; practice branch deleted.
- [ ] Clinic feature on its own branch, with a check-first test.
- [ ] Walkthrough 2 done or booked.
- [ ] Everything committed and synced; Codespaces stopped.

## Stretch goals

- **Second feature, fresh session.** Start a new chat session and do another criterion. Did the agent use fewer steps now that `AGENTS.md` and the first feature give it patterns to follow?
- **Deploy previews.** Once your capstone is on Vercel, every pull request gets its own preview link. Open one from the pull request page and try the feature before you merge.

## Troubleshooting

| Problem | What to do |
|---|---|
| Be the Agent: `edit` says the old text "appears 3 times" | The text isn't unique. Quote more of the line, for example the whole expression |
| Be the Agent: `edit` says "not found" | The text doesn't match exactly: check spaces and quotes, and don't include line numbers from `read_file` |
| Be the Agent: `bash: !…: event not found` | The text contains `!`. Pick a different piece of text to quote |
| No **Agent** option in Copilot Chat | Check you're signed in to GitHub and Copilot is enabled; update the Copilot Chat extension; reload the window (`F1` → "Reload Window") |
| Copilot says you're out of credits | Agent work stops until the monthly reset. Switch to a fallback agent from the [Tool Handout](../../TOOLS.md#editor-and-agents-weeks-48), or finish the feature yourself using Ask mode for advice. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| The agent ignores `AGENTS.md` | Check **Use AGENTS.md file** is on and the file is in the top folder. Or start your prompt with "Read AGENTS.md first". Remember it's advice: approvals are what actually stop it |
| The check-first test passes before any code exists | It isn't testing the new behavior. Read it: does it call the new function and check the result AC1 describes? Ask for a stricter test, or write it yourself |
| The agent says tests pass, but `npm test` shows failures | Believe your terminal, not the agent. Paste the real output back to it; if it fails twice, apply the two-strikes rule: new session, better prompt |
| The agent changed a test | Discard that change (Source Control → right-click → **Discard Changes**) and tell it: "Don't change tests/. Fix the code so the existing test passes." |
| The agent changed files you didn't ask about | Look at the diff. Revert unwanted files with **Discard Changes**, or go back to your "before" commit. Then check your Scope section |
| The agent wants to install a package | Stop. Check the package exists and is the one you meant on npmjs.com ([Safety Contract, rule 6](../../setup/safety-contract.md#6-i-check-packages-before-i-install-them)), and ask whether you really need it. The starter needs none |
| `git switch` says you have uncommitted changes | Commit (or discard) them first, so every branch starts from a clean save point |
| No **Compare & pull request** banner | Use **Pull requests** → **New pull request**, base `main`, compare your branch. Check the branch was published (`git push -u origin [branch]`) |
| The pull request's check is red | Click **Details** to see which test failed, fix it on the same branch, commit and push: the pull request updates itself |
| The pull request says "This branch has conflicts" | Stop and ask for help; don't let the agent "resolve" it blindly. See [I have a merge conflict](../../resources/troubleshooting.md#i-have-a-merge-conflict) |
| `git pull` on `main` says "diverged" | You committed on `main` in the Codespace while the pull request merged on GitHub. Ask for help before you force anything |
