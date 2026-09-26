# Week 6 Lab — Be the Agent, then direct one

> About 100 minutes, including a 10-minute break. You'll play an agent by hand, set up your capstone, and ship its first feature with a real agent, test first.

**Before you start:**

- [ ] Your capstone pitch is written (you'll turn it into `SPEC.md` in Part 2).
- [ ] Copilot Chat in a Codespace offers **Agent** in its mode picker.
- [ ] You've re-read rules 3–5 of the [safety contract](../../setup/safety-contract.md).

**Oral walkthrough 2** is about the first feature you build with an agent in Part 3 ([protocol](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6)). Once your feature is merged, your instructor may call you for ten minutes during the lab; everyone else gets a slot before the week 7 studio. Be ready: app running, everything committed, AI tools closed, `PROMPTS.md` and `AGENTS.md` open.

## Part 1 — Be the Agent (30 min, pairs)

**Why:** an agent only knows what its tools return. Playing both halves of the loop shows you what an agent needs, and where it goes wrong.

Work in pairs. One of you is the **Model**, the other is the **Harness**. Everything you need is in the kit: [be-the-agent/README.md](be-the-agent/README.md) (roles and rules), [be-the-agent/tool-cards.md](be-the-agent/tool-cards.md) (the five tools and their exact commands) and [be-the-agent/task-card.md](be-the-agent/task-card.md) (the bug report and a call log).

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

   and reads the output aloud, word for word. The Model logs each call and what it learned. Keep going until the Model writes a **Finish** report with test output as evidence.
3. **Fast pairs:** swap roles and do **Task B**, the feature request, red then green.
4. **Rules to remember:** the Model never looks at the editor; the Harness never hints or fixes the Model's typos; nobody edits the tests to make them pass.

✅ **Checkpoint:** the Harness runs `npm test` one last time and it ends with `fail 0`. The Model's call log shows every call and the Finish report quotes the test summary.

### Debrief (last 7 minutes)

Discuss in your pair, then share one answer with the class:

1. What **context** did the Model need before it could fix anything? Which single call told you the most?
2. How many tool calls did you make? Which were wasted?
3. Did an `edit` fail? What did that teach you about how agents must quote code?
4. How did you know you were done? What if you'd skipped the last `run`?
5. What would have helped? Write the three-line `AGENTS.md` you wish the kit had.

Afterwards, the Harness can commit the fix (`Round each share up so the group covers the bill`). You won't use this repository again.

## Part 2 — Set up your capstone (20 min)

**Why:** an agent works best with good standing context. Your spec says *what* to build; `AGENTS.md` says *how to work* in this repository.

### 2a. Create the repository

1. Create your capstone repository from the starter by following [Start a project from a starter](../../setup/codespaces.md#start-a-project-from-a-starter), with the path `projects/capstone-starter`. Give it your project's name, make it **public**, and keep it in your **personal** account (so Vercel can deploy it). Pairs: one person creates it and adds the other as a collaborator (**Settings** → **Collaborators**).
2. Open it in a Codespace and check the shell works:

   ```bash
   npm test
   npm run dev
   ```

   Open the forwarded port 3000. The list example works straight away; the "ask the AI" example needs a key, exactly as in week 5 (optional today). Stop the server with `Ctrl`+`C`.
3. Skim the starter's `README.md` ("What's in the box") so you know which files are yours to change.

✅ **Checkpoint:** `npm test` ends with `fail 0` and the page loads.

### 2b. Write `SPEC.md` from your pitch 🟡

Open `SPEC.md` and fill it in from your pitch: problem, user, user stories (MUST/SHOULD/COULD), at least five acceptance criteria in **WHEN … THE APP SHALL …** form (including two edge cases), out of scope, and section 8, the capstone requirements you'll meet. It's the same format as week 3 ([example](../03-spec-first/example-spec.md)).

🟡 **Limited AI:** write the spec yourself. You may then ask Copilot (Ask mode) to critique it:

```text
Goal: Find problems in my capstone spec before I build anything.
Context: SPEC.md in this repository. I have about three weeks and will build with an AI agent.
Constraints: Don't rewrite the spec. List at most 5 problems: ambiguous criteria, missing edge cases, or features too big for three weeks.
Done when: each problem names the section and suggests one concrete fix.
```

Decide which suggestions to accept. Edit the spec yourself.

### 2c. Adapt `AGENTS.md`

The starter's `AGENTS.md` already describes the layout (`public/` and `public/lib/` for browser code, `api/` for server routes, `lib/` for server-only code) and the safety rules. Make it yours, **keeping it short**:

1. Replace the **Project** line with one sentence about your app.
2. Add at most two conventions that matter for your project (for example "All dates are shown as YYYY-MM-DD" or "Keep the page usable on a phone").
3. Read the whole file once, line by line. You're responsible for every instruction an agent follows.

In VS Code, make sure Copilot reads it: open Settings (`Ctrl`+`,`, Mac `Cmd`+`,`), search for `AGENTS.md`, and check that **Use AGENTS.md file** (`chat.useAgentsMdFile`) is ticked. Menus and setting names move; if you can't find it, ask Copilot Chat "Is AGENTS.md support enabled in this workspace?".

### 2d. Commit

**Source Control** → message `Start capstone: add SPEC and AGENTS` → **Commit** → **Sync Changes**.

✅ **Checkpoint:** on github.com, your repository shows your `SPEC.md` and `AGENTS.md`, and the **Actions** tab shows a green check from the test workflow.

## Break (10 min)

## Part 3 — Your first agent-built feature (40 min)

**Why:** this is the Safe Loop with an agent doing the typing. Your job is the part the agent can't do: choosing the task, approving the plan, checking the evidence and reading the diff.

### 3a. Choose one small feature

Pick **one** MUST acceptance criterion from your `SPEC.md` whose logic can live in a small, testable function in `public/lib/`. Good first features: "reject an empty or duplicate entry", "calculate the total / streak / average", "sort items by date", "format a date for display". Avoid anything needing a database or a new API today.

### 3b. Save point and branch

A **branch** is a separate line of work: if the feature goes wrong, `main` is untouched. In the terminal:

```bash
git status
git switch -c feature/first-feature
```

`git status` should say "nothing to commit, working tree clean". That's your "before" save point. (If it isn't clean, commit first.)

### 3c. Plan first

Open Copilot Chat, choose **Agent** in the mode picker (or **Plan**, if your picker offers it), and start a **new chat session**. Adapt this prompt:

```text
Goal: Implement AC1 from SPEC.md: WHEN I add a habit with an empty or duplicate name, THE APP SHALL not add it and SHALL show "Please enter a new habit name".
Context: Read AGENTS.md and SPEC.md first. Pure logic goes in public/lib/ and is wired into the page in public/app.js. Tests are tests/*.test.js and run with npm test.
Constraints: Plan first and wait for my approval before editing anything. Then write the test first, run it and show me it failing, and only then write the code. This one criterion only. No new dependencies. Don't touch .env or api/.
Done when: npm test passes with the new test included, you have pasted the test output, and I can see the message in the browser when I try an empty or duplicate name.
```

Read the plan like a manager. Is it the right criterion? Does it touch only the files you expect? Is the test described clearly? Reply with your edits ("Skip step 4", "Put the function in public/lib/habits.js"), then approve.

✅ **Checkpoint:** you have a plan of three to six steps that you edited or explicitly accepted, and no files have changed yet (`git status` is still clean).

### 3d. Red: the failing test

Let the agent write the test and run `npm test`. When Copilot asks to run a command, **read the command** before you allow it. Allow commands like `npm test` once. Stop and ask about anything that deletes, moves, installs or pushes.

> [!WARNING]
> Keep the default approval setting, where the agent asks before running commands. Don't switch on options that skip approvals for everything (VS Code shows a warning dialog when you try). If the agent proposes `rm -rf`, `git reset --hard`, `git push --force` or deleting a test, click **Skip** and ask it why.

Then check the red step yourself, in your own terminal:

```bash
npm test
```

✅ **Checkpoint:** you have seen, with your own eyes, the new test **failing** for the right reason (the feature doesn't exist yet), not because of a typo.

### 3e. Green: the code

Tell the agent to continue. When it says it's done, don't take its word for it:

```bash
npm test
```

✅ **Checkpoint:** every test passes (`fail 0`), including the new one.

### 3f. Read, try, commit

1. **Read the diff.** Open **Source Control** and click each changed file. For every line, ask yourself: can I explain this? For anything you can't, ask Copilot in **Ask** mode: "Explain lines 12–20 of public/lib/habits.js in plain English." Remove or simplify anything you don't need.
2. **Try it by hand.** Run `npm run dev`, open the page, and test the normal case and the edge cases from your criterion. Reload the page. Try it on a narrow window.
3. **Commit** (the "after" save point) with a clear message, e.g. `Reject empty and duplicate habit names (AC1)`.
4. **Merge** the branch back into `main` and push, which also redeploys the app if it is already on Vercel:

   ```bash
   git switch main
   git merge feature/first-feature
   git push
   ```

5. **Log it** in `PROMPTS.md`: the prompt, the plan and what you changed in it, the red and green test output, what you fixed or removed yourself, and both commit hashes (`git log --oneline` shows them).

✅ **Checkpoint:** `git log --oneline` shows your feature commit on `main`; `PROMPTS.md` has an agent entry with red and green evidence; you can explain every line the agent wrote. That last one matters: in the oral walkthrough you may be asked to change this code live.

### 3g. Optional: try the Copilot CLI

The same agent loop runs in the terminal. If you have time and credits, try it on a second, **tiny** task (for example, "add a test for the edge case I forgot"):

1. Commit first. Then start it:

   ```bash
   copilot
   ```

   If the command isn't found, install it with `npm install -g @github/copilot` (it needs a recent Node.js; check TOOLS.md and the [GitHub Docs](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)). If it asks you to log in, type `/login` and follow the steps.
2. It asks whether you trust the files in this folder: yes, it's your capstone Codespace.
3. Press `Shift`+`Tab` to switch to plan mode, then paste a four-part prompt.
4. When it asks to run a tool, choose "yes" once. Avoid approving a tool "for the rest of the session" until you trust what it's doing.
5. Check with `npm test` yourself, read the diff, commit.

Note in `PROMPTS.md` how the CLI compared with agent mode in the editor.

## Part 4 — Oral walkthrough 2 (10 min each, in parallel)

**Why:** understanding tends to drop when agents take over, so this is where you show you own what the agent wrote.

Your instructor calls students one at a time once their first feature is merged; the rest book a slot before the week 7 studio. The [protocol](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6) publishes the questions, so practice with it. When it's your turn:

1. Have `npm run dev` running, `npm test` passing and everything committed.
2. Close Copilot Chat and turn off code completions (🔴 AI off).
3. Open the diff of your first agent-built feature, plus `AGENTS.md` and `PROMPTS.md`.

You'll walk through what the agent changed, change it by hand, read a failing test output and explain your before/after commits.

✅ **Checkpoint:** you have either done your walkthrough or booked a slot.

## Wrap up

- [ ] Be the Agent: debrief answers noted; fix committed.
- [ ] Capstone repository created, with `SPEC.md` and `AGENTS.md` committed.
- [ ] First feature merged into `main`, with a test that failed first and passes now.
- [ ] `PROMPTS.md` has an agent entry with evidence.
- [ ] Your AI-free reflection ("a moment the agent surprised me") is homework: [templates/REFLECTION.md](../../templates/REFLECTION.md).
- [ ] Stop your Codespaces (github.com/codespaces) to save your free hours.

## Stretch goals

- **Second feature, fresh session.** Start a new chat session and do another criterion. Compare: did the agent use fewer steps now that `AGENTS.md` and the first feature give it patterns to follow?
- **Break the rules on purpose (safely).** Commit, then ask the agent to "make the tests pass" on a test you know is wrong. Does it change the test, the code, or ask you? Revert afterwards (`git restore .`).
- **Deploy now.** Import the capstone into Vercel (homework anyway): see the starter's README, "Deploy on day one".

## Troubleshooting

| Problem | What to do |
|---|---|
| Be the Agent: `edit` says the old text "appears 3 times" | The text isn't unique. Quote more of the line, for example the whole expression |
| Be the Agent: `edit` says "not found" | The text doesn't match exactly: check spaces and quotes, and don't include line numbers from `read_file` |
| Be the Agent: `bash: !…: event not found` | The text contains `!`. Pick a different piece of text to quote |
| No **Agent** option in Copilot Chat | Check you're signed in to GitHub and Copilot is enabled; update the Copilot Chat extension; reload the window (`F1` → "Reload Window") |
| Copilot says you're out of credits | Agent work stops until the monthly reset. Switch to a fallback agent from [TOOLS.md](../../TOOLS.md), or finish the feature yourself using Ask mode for advice. See [resources/troubleshooting.md](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| The agent ignores `AGENTS.md` | Check `chat.useAgentsMdFile` is on and the file is in the top folder. Or start your prompt with "Read AGENTS.md first" |
| The agent says tests pass, but `npm test` shows failures | Believe your terminal, not the agent. Paste the real output back to it; if it fails twice, apply the two-strikes rule: new session, better prompt |
| The agent changed files you didn't ask about | Look at the diff. Revert unwanted files with right-click → **Discard Changes** in Source Control, or go back to your "before" commit |
| The agent wants to install a package | Stop. Check the package exists and is the one you meant on npmjs.com (safety contract rule 6), and ask whether you really need it. The starter needs none |
| `git switch` says you have uncommitted changes | Commit (or discard) them first, so every branch starts from a clean save point |
| `git merge` reports a conflict | Stop and ask for help; don't let the agent "resolve" it blindly. Conflicts come up again in week 7 with pull requests |
