# The Safe Loop

> Print this page. Keep it next to your keyboard. Use it in every lab from week 2 onward.

Vibe coding in its original form means accepting whatever the AI writes without reading it. That is fine for a throwaway toy. For anything you want to keep, share or trust, professional developers who work with AI converge on the same short loop. This course calls it **the Safe Loop**.

## The six steps

The Safe Loop is six steps done in order. After step 6 you go back to step 1 for the next small change, so the steps form a circle: **Describe → Plan → Step → Test → Read → Commit**, then Describe again. Two habits sit inside the loop: **check first** (end of step 1) and **teach back** (end of step 5).

1. **Describe.** Say what you want: goal, context, constraints, and how you'll know it's done. Then **check first**: write down the check that proves it works (from week 4, an automated test), in a separate prompt, before you ask for the code.
2. **Plan.** Ask for a plan before any code, and edit it.
3. **Step.** Ask for **one** small change.
4. **Test.** Run it: your check, the normal case and at least one edge case.
5. **Read.** Read the diff and keep only what you can explain. Then **teach back**: write 2–3 sentences in `PROMPTS.md` saying what changed and why.
6. **Commit.** Make a save point with a message that says what changed, plus an `Assisted-by:` line if AI helped. Then go back to step 1.

| # | Step | What you do | Why |
|---|---|---|---|
| 1 | **Describe** | Write the prompt in four parts: **Goal · Context · Constraints · Done when**. Then [check first](#check-first): turn "Done when" into a check you can run, in a separate prompt, before asking for code. | The AI can only use what you tell it. "Done when" gives it (and you) a way to check, and a check written before the code isn't bent to fit the code. |
| 2 | **Plan** | Ask for a plan *before* any code: "Don't write code yet. Propose a plan in 3–6 steps." Edit the plan. | Fixing a plan costs seconds. Fixing code built on a bad plan costs hours. |
| 3 | **Step** | Ask for **one** step of the plan. | Small changes are easy to test, read and undo. One giant prompt produces code you can't change later. |
| 4 | **Test** | Run it. Run your check, then try the normal case **and** at least one edge case (empty, very long, reload, small screen). With an agent, make it run the tests and show you the output. | AI output is often "almost right". Agents have claimed success while tests were failing. |
| 5 | **Read** | Read the diff (what changed). Ask the AI to explain anything you don't understand. Keep only what you can explain. Then write a [teach-back](#teach-back). | "If you can't explain it, you didn't build it." You will be asked to explain it. |
| 6 | **Commit** | Make a git commit with a message that says what changed, e.g. `Add high score saved in localStorage`. If AI helped, add an [`Assisted-by:` line](#the-assisted-by-line). | A commit is a save point. If the next step goes wrong, you can go back. |

## Check first

**What:** write the check for a step *before* you ask the AI to build it, in a **separate prompt** (or a separate chat) from the one that writes the code.

- **Weeks 1–3:** the check is the "Done when" line, written as things you will try by hand: "Clicking Clear, then OK, empties the list. Reloading keeps it empty. Clicking Cancel changes nothing." Write it in your prompt or in your README's acceptance table before you ask for code.
- **From week 4:** the check is an **automated test**, a small file in `tests/` that `npm test` (or `node --test`) runs. Write it yourself, or ask the AI for it in its own prompt that contains only the "Done when" line and the name of the function, not the code. Use the [check-first test prompt](prompt-patterns.md#16-check-first-test-prompt).
- **Run the test before the code exists.** It should fail (red). After the step, it should pass (green). This is [red/green testing](glossary.md#redgreen-testing).
- **Never let the AI change a test to make it pass.** One developer reported a "fix it" prompt that changed a test's expected status code from 200 (success) to 500 (server error), so the broken code "passed" ([Hacker News](https://news.ycombinator.com/item?id=48662310)). If a test seems wrong, decide yourself, and say why in `PROMPTS.md`.

**Why:** when an AI writes tests *after* it has written faulty code, the tests tend to agree with the faults. In one 2026 study, tests generated after buggy code caught 14% of the faults, against 25% for tests written independently ([Konstantinou et al.](https://arxiv.org/abs/2607.05139)). A check you write first, apart from the code, is a real check.

## Teach back

**What:** before you commit AI-written code, write **2–3 sentences** in `PROMPTS.md`, in your own words: what changed, why it works, and what you'd look at first if it broke. 🔴 AI off: write it yourself. A teach-back the AI wrote for you doesn't count ([AI use policy](../SYLLABUS.md#8-ai-use-policy)).

```markdown
**Teach-back:** The agent added a `clearAll()` function in app.js. It calls `confirm()` first,
then empties the `todos` array and saves it to localStorage, and the list is redrawn from that
array, so an empty array means an empty list. If it broke, I'd check the localStorage key is still "todos".
```

If you can't write the teach-back, you're not ready to commit: ask the AI to explain the diff ([explain this code](prompt-patterns.md#5-explain-this-code)), read it again, and then write it.

**When:** for every AI-written change you keep. From week 6, a teach-back before **every agent commit** is part of the capstone **Process** grade ([rubric](../assessment/rubrics.md#capstone)). The [teach-back prompt](prompt-patterns.md#17-teach-back-check) can check your sentences against the diff *after* you've written them.

**Why:** in a 2026 study of 78 learners, 77% of those who had used AI without restrictions failed a 30-minute maintenance task once the AI was switched off, against 39% of those whose tool had required a short explanation before generated code could be added ([Sankaranarayanan](https://arxiv.org/abs/2602.20206)). The teach-back is that explanation step.

## The Assisted-by line

**What:** a commit made with AI help ends with a line naming the tool, separated from the message by a blank line:

```text
Add clear-all button with confirmation

Assisted-by: GitHub Copilot
```

- **In the Source Control box** (github.dev or a Codespace): type the message, press **Enter** twice to start a new paragraph, then type `Assisted-by: [tool]`. Commit as usual (the commit button, or **Ctrl+Enter** / **Cmd+Enter**).
- **In the terminal**, a second `-m` adds the line as its own paragraph:

  ```bash
  git commit -m "Add clear-all button with confirmation" -m "Assisted-by: GitHub Copilot"
  ```

- **Check it:** `git log -1` shows the last commit with its full message.

**When:** taught in week 2; required on AI-assisted commits from week 6. Name the tool you used (`Gemini`, `GitHub Copilot`, `Copilot CLI`). One line per tool if you used more than one.

**Why:** it's how professionals disclose AI help. Open-source projects including LLVM, OpenStack, OpenTelemetry and Fedora use an `Assisted-by:` line, and about half of 281 open-source AI policies studied in 2026 require disclosure ([All Things Open](https://allthingsopen.org/articles/open-source-ai-contributions-assisted-by-git-trailer-standard); [Hora et al.](https://arxiv.org/abs/2609.07542)). It also makes your own history searchable: `git log --grep "Assisted-by"`.

## The two-strikes rule

If **two** attempts to fix the same problem fail:

1. **Stop.** Don't paste the error a third time.
2. Go back to your last good commit if things got worse.
3. Start a **fresh chat** (long, muddled conversations make the AI worse).
4. Rewrite the prompt with what you learned: what you tried, the exact error, what you expected.

## A Describe-step example

```text
Goal: Add a "clear all" button to my to-do list.
Context: It's a single-page app in index.html, style.css and app.js. Items are saved in localStorage under the key "todos".
Constraints: Plain JavaScript, no libraries. Ask me to confirm before clearing. Don't change any other feature.
Done when: Clicking the button, then confirming, empties the list; reloading the page shows it's still empty; cancelling leaves the list unchanged.
```

## A Plan-step example

```text
Don't write any code yet. Propose a plan in 3–5 small steps for the goal above.
For each step, say which file changes and how I can check it worked.
```

## How the loop looks from chat to agent

The loop is the same all course. What changes is who types and where the check lives.

| Step | Weeks 1–3: chat assistant | Weeks 4–5: editor assistant (Copilot in a Codespace) | Weeks 6–8: agent |
|---|---|---|---|
| **Describe** | You write the four-part prompt in the chat | Same, in Copilot Chat; attach the files the change touches | You write the prompt; `SPEC.md` and `AGENTS.md` add standing context. Both pass the [Goldfish test](prompt-patterns.md#18-the-goldfish-test) |
| **Check first** | Write "Done when" as checks you'll try by hand | From week 4: one automated test in `tests/`, written in a separate prompt; run it and see it fail | The test is written first, in its own prompt or session. `AGENTS.md` says never to weaken or delete a test |
| **Plan** | "Don't write code yet. Propose a plan." | Same, in Copilot Chat's Ask mode | Plan mode, or "plan first and wait for my approval" |
| **Step** | Copy one step's code into your file | Accept one suggested edit | Approve one task. Approvals stay on; never autopilot or skip-permissions modes |
| **Test** | Open the preview; try the normal case and an edge case | Run `npm test` or open the preview; try it by hand | The agent runs `npm test` and shows the output; **you** still try it by hand |
| **Read** | Read the code before pasting; ask "explain this" | Read the diff in Source Control | Read the diff in Source Control, or the pull request's **Files changed** tab |
| **Teach back** | 2–3 sentences in `PROMPTS.md` | 2–3 sentences in `PROMPTS.md` | 2–3 sentences in `PROMPTS.md` before **every** agent commit (graded) |
| **Commit** | Commit in github.dev (weeks 1–2) or a Codespace (week 3); add `Assisted-by:` from week 2 | Commit in Source Control or the terminal | Commit before *and* after every agent task; build each feature on a branch and merge it through a pull request ([how](git-cheatsheet.md#branches-and-pull-requests)) |
