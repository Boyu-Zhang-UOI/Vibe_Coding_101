# The Safe Loop

> Print this page. Keep it next to your keyboard. Use it in every lab from week 2 onward.

Vibe coding in its original form means accepting whatever the AI writes without reading it. That is fine for a throwaway toy. For anything you want to keep, share or trust, professional developers who work with AI converge on the same short loop. This course calls it **the Safe Loop**.

```
        ┌──────────────────────────────────────────────┐
        │                                              │
        ▼                                              │
  1 DESCRIBE ──► 2 PLAN ──► 3 STEP ──► 4 TEST ──► 5 READ ──► 6 COMMIT
  goal, context,  ask for a   one small   run it;     read the    save point
  constraints,    plan; edit  change      normal +    diff; keep  with a clear
  done when       it first                edge case   what you    message
                                                      can explain
```

| # | Step | What you do | Why |
|---|---|---|---|
| 1 | **Describe** | Write the prompt in four parts: **Goal · Context · Constraints · Done when**. | The AI can only use what you tell it. "Done when" gives it (and you) a way to check. |
| 2 | **Plan** | Ask for a plan *before* any code: "Don't write code yet. Propose a plan in 3–6 steps." Edit the plan. | Fixing a plan costs seconds. Fixing code built on a bad plan costs hours. |
| 3 | **Step** | Ask for **one** step of the plan. | Small changes are easy to test, read and undo. One giant prompt produces code you cannot change later. |
| 4 | **Test** | Run it. Check the normal case **and** at least one edge case (empty, very long, reload, small screen). With an agent, make it run the tests and show you the output. | AI output is often "almost right". Agents have claimed success while tests were failing. |
| 5 | **Read** | Read the diff (what changed). Ask the AI to explain anything you don't understand. Keep only what you can explain. | "If you can't explain it, you didn't build it." You will be asked to explain it. |
| 6 | **Commit** | Make a git commit with a message that says what changed, e.g. `Add high score saved in localStorage`. | A commit is a save point. If the next step goes wrong, you can go back. |

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

## Using the loop with an agent (weeks 6–8)

The loop is the same. What changes is who types:

| Step | With a chat assistant | With an agent |
|---|---|---|
| Describe | You write the prompt | You write the prompt; SPEC.md and AGENTS.md add standing context |
| Plan | Ask for a plan | Use plan mode, or say "plan first and wait for my approval" |
| Step | Copy one step's code into your file | Approve one task |
| Test | You run it | The agent runs `npm test` and shows the output; **you** still try it by hand |
| Read | Read the code before pasting | Read the diff in Source Control before committing |
| Commit | You commit | You commit (commit before *and* after every agent task) |
