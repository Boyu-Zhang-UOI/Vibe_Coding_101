# Be the Agent: Tip Splitter

> [!WARNING]
> **This kit contains a planted bug on purpose.** One test fails until you fix it. Finding and fixing it, using only an agent's tools, is the exercise. Don't let an AI fix it for you.

Tip Splitter is a tiny web app: enter a bill, a tip percentage and a number of people, and it tells you what each person pays. A user has reported a bug. Your pair will fix it the way an AI coding agent would, **without opening the editor**.

This exercise is part of [Vibe Coding 101, week 6](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/tree/main/weeks/06-agents). It is adapted from a University of Utah exercise in which students changed a calculator using only an agent's tools ([utah-cs3960-sp26/calculator](https://github.com/utah-cs3960-sp26/calculator)).

## Why do this?

An AI coding agent is a language model in a loop. It can't see your screen. It can only ask for **tools** (list files, read a file, search, edit, run the tests) and read what comes back. Playing both halves of that loop by hand shows you what an agent needs to do a good job, and where it goes wrong.

## Roles

| Role | Who | Does | Must not |
|---|---|---|---|
| **Model** | One person | Reads the task card, decides the next step, and **writes** one tool call at a time (on paper or in a chat message to the Harness) | Look at the editor, the file tree or the browser. The Model only knows what the tools have returned |
| **Harness** | The other person | Types the exact command for each call into the Codespace terminal and reads the output back **word for word** | Hint, explain, fix typos in the Model's text, or run anything the Model didn't ask for |

Swap roles for Task B.

## Setup (Harness, 3 minutes)

1. Create a repository from this kit and open it in a Codespace, following [Start a project from a starter](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/setup/codespaces.md#start-a-project-from-a-starter) with the path `weeks/06-agents/be-the-agent`.
2. Open a terminal (menu → Terminal → New Terminal). Close every editor tab and collapse the file Explorer, so the Model can't see any code.
3. Keep [tool-cards.md](tool-cards.md) open where you can both see it, or print it.
4. Don't run anything yet. The Model decides what happens first.

## How a turn works

1. The **Model** writes one call, for example `CALL 1: list_files`, and logs it in the table on the [task card](task-card.md).
2. The **Harness** types the matching command from the tool card, presses Enter, and reads the output aloud exactly as shown.
3. The **Model** notes what it learned, then writes the next call.
4. When the Model thinks the task is done, it writes a **Finish** report with evidence (tool card 6).

## Rules

- One tool call per turn. No talking about the code except through tool calls and their output.
- The Harness copies the Model's text **exactly**, typos included. Real harnesses don't fix the model's mistakes.
- Don't change the tests to make them pass. That would turn the test run green while the bug stays, which is the kind of fake success real agents have reported.
- If a tool returns an error, that's normal: read it, think, and try a better call.

## Time (30 minutes)

| Minutes | What |
|---|---|
| 0–3 | Setup; the Model reads Task A |
| 3–23 | Task A (fast pairs: swap roles and do Task B) |
| 23–30 | Debrief with the class |

## Debrief questions

Answer these together, then share one answer with the class.

1. What **context** did the Model need before it could fix anything? Which single tool call gave the most useful information?
2. How many tool calls did you make? Which ones were wasted, and why?
3. Did any `edit` fail? What did the error teach you about how agents must quote code exactly?
4. How did you know you were done? What would have happened if you had skipped the last `run`?
5. What would have helped the Model start faster? Write the three-line `AGENTS.md` you wish this project had.
6. A real agent does this loop in seconds, with no one reading the output aloud. What does that mean for **your** job when you supervise one?

## After the exercise

- Open the editor and read `lib/bill.js` and `tests/bill.test.js` with your own eyes. Was your mental picture right?
- See the app itself: run the command below, then open port 8000 from the pop-up or the **Ports** tab.

  ```bash
  python3 -m http.server 8000
  ```

- Commit your fix with a clear message, for example `Round each share up so the group covers the bill (fixes #12)`.

## Files

| Path | What it is |
|---|---|
| `index.html`, `app.js` | The Tip Splitter page |
| `lib/bill.js`, `lib/format.js` | The app's logic |
| `tests/` | Automated tests (`npm test`) |
| `scripts/replace.mjs` | The `edit` tool: exact, single-match text replacement |
| [task-card.md](task-card.md) | The bug report, a bonus feature request, and the call log |
| [tool-cards.md](tool-cards.md) | The five tools and the exact command for each |
