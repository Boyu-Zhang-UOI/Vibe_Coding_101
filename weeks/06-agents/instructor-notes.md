# Week 6 — Instructor notes

> Big idea: **an agent is an LLM in a loop with tools.** Students first *are* the loop (Be the Agent), then direct a real one on their own capstone. The week's hidden goal is to keep understanding up exactly when the tool starts doing the typing.

**Why the extra checks now.** In CMU 15-113, students' self-rated understanding and code reading dropped to their lowest point of the year once agents took over the assignments ([Spring report](https://www.cs.cmu.edu/~113/bestPractices.html)), and in fall 2026 satisfaction rose while self-rated understanding fell on all four beginner assignments ([Fall report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)). So this week adds friction, each piece backed by a 2026 result: the test is written first in a separate prompt ([Konstantinou et al.](https://arxiv.org/abs/2607.05139)); a teach-back comes before every agent commit ([Sankaranarayanan](https://arxiv.org/abs/2602.20206)); students fix a bug planted in agent-written code by hand ([Pădurean et al.](https://arxiv.org/pdf/2607.05068)); and the AGENTS.md trial tests the instructions empirically, as Stanford's CS146S week 4 does ([assignment](https://github.com/mihail911/modern-software-dev-assignments/blob/a6dcbf2090/week4/assignment.md)). Be the Agent follows the University of Utah's exercise in which students changed a calculator using only an agent's tools ([utah-cs3960-sp26/calculator](https://github.com/utah-cs3960-sp26/calculator)).

**Why two studios and this split.** The old single lab gave 20 minutes to a new repository plus a full `SPEC.md` (which took 35 minutes alone in week 3) and taught branches inside the first agent run; realistic time was 130–165 minutes. Now the repository is created before class, Studio A writes the spec only for today's criterion, the first agent feature gets 55 minutes, and branches and pull requests get their own mini-lesson in Studio B.

## Prep checklist

### A week before

- [ ] Re-check the "Editor and agents" rows of the [Tool Handout](../../TOOLS.md#editor-and-agents-weeks-48) by using them: in a fresh Codespace, confirm Copilot Chat offers **Agent** (and **Plan**, if available), that an approval prompt appears before a terminal command, that the "Use AGENTS.md file" setting exists, and that `copilot` (the CLI) starts or installs. Note where the usage display currently lives, so you can show students.
- [ ] Confirm students' Copilot Student applications have gone through; chase anyone still pending. Students without Copilot need the fallback agent ready **before** Studio A.
- [ ] **Reply to every capstone pitch before Studio A** (pitches are due 72 hours before it): Go, Go if you shrink it (say what to cut), or Rethink (offer a short call). Check scope (three weeks), at least two of the four feature types, no real personal data. Confirm pairs.
- [ ] Remind students to **create their capstone repository before Studio A** ([lab: before Studio A](lab.md#before-studio-a-create-your-capstone-repository)).
- [ ] Work through the Be the Agent kit yourself with a colleague, once as each role. Read the [answer key](../../instructor/answer-keys/week-06-be-the-agent.md).
- [ ] Check that the starter paths `weeks/06-agents/be-the-agent` and `projects/capstone-starter` work with your chosen method from [Start a project from a starter](../../setup/codespaces.md#start-a-project-from-a-starter) (template repos or `degit`).
- [ ] Read the capstone starter's [feature patterns](../../projects/capstone-starter/README.md#feature-patterns) and run `npm test` in a fresh copy, so you can help at both clinic stations (the chart helper and the external-API route).
- [ ] Plan [oral walkthrough 2](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6). It examines each student's first agent-built feature. Hold slots in Studio B project time **only if a TA or second examiner is present**; a lone instructor is needed on the floor during the planted-bug hunt and the clinic. Otherwise open appointment slots (10–15 minutes) before week 7 Studio A, and post the sign-up sheet in Studio A.
- [ ] Prepare the mid-course survey (three questions, anonymous; see the end of this page).

### The day before Studio A

- [ ] Share the [tool cards](be-the-agent/tool-cards.md) and [task cards](be-the-agent/task-card.md) on screen, or print one set per pair.
- [ ] Prepare the live demo in a Codespace of your own capstone-starter copy: a `SPEC.md` with one tiny criterion that adds a rule to the example list, for example "WHEN the list already has 10 items, THE APP SHALL not add another and SHALL show 'The list is full'" (a new check in `addItem()` in `public/lib/items.js`, plus a new test), committed and clean, with an `AGENTS.md` that has a Scope section.
- [ ] Prepare one planted-bug demo for Studio B: on a scratch branch of the same copy, flip one comparison in `public/lib/items.js` so one test fails.

## Studio A run sheet — Be the Agent, then direct one

| Time | Block | Notes |
|---|---|---|
| 0:00–0:05 | Recap | The most-missed question from the week 5 exit ticket (often "every key goes in `.env`" or "the repo is private, so the key is safe") |
| 0:05–0:25 | Concept talk | [slides.md](slides.md), 19 slides, about 19 minutes. Linger on "An agent = model + tools + loop" and "AGENTS.md is advice, not enforcement"; draw the rules/rails table on the board |
| 0:25–0:35 | Live demo | Script below |
| 0:35–1:05 | Part 1: Be the Agent | Form pairs fast (neighbors). Setup 3 min, Task A 20 min, debrief 7 min. Enforce the rules: no editor for the Model, no hints from the Harness. Students who prefer not to read aloud can share the screen instead |
| 1:05–1:10 | Part 2: open the capstone | Anyone without a repository creates it now; send them straight into Part 3 afterwards |
| 1:10–1:35 | Part 3: today's criterion and `AGENTS.md` | Watch for students letting AI write the spec (🟡 AI limited: critique only). Check every `AGENTS.md` has a Scope section with "Anything not listed here is out of scope". Walk the room asking: "What actually stops the agent if it ignores this line?" |
| 1:35–1:45 | Break | |
| 1:45–2:40 | Part 4: first agent feature | Circulate. Check every student (1) wrote the test in its **own** chat, (2) saw it **red** in their own terminal and committed it, (3) ran `git status --short` after the agent and saw no `tests/` change, (4) wrote a teach-back before the commit |
| 2:40–2:50 | Part 5 (If time) | Copilot CLI for fast students. Everyone else keeps going on Part 4 |
| 2:50–3:00 | Checkpoint share | Each student shows the red-then-green output, or the exact blocker. Remind: branches stay unmerged until Studio B |

## Studio B run sheet — Pull requests, a planted bug, a feature clinic

| Time | Block | Notes |
|---|---|---|
| 0:00–0:10 | Show and tell | Two students show their agent's diff and read their teach-back aloud. Ask the class: "Is the teach-back accurate?" |
| 0:10–0:45 | Part 1: branches and pull requests | Five minutes at the projector first: open a pull request from your demo branch, show **Files changed**, the checks, one line comment, **Merge** and **Delete branch**, then `git pull` on `main`. Then students do it. The hand-written test in step 2 is 🔴 AI off: check completions are off |
| 0:45–1:10 | Part 2: planted bug | Demo the rules in one minute with your scratch branch. Watch for Fixers reaching for `git diff` or the AI; and for anyone "fixing" by changing the test's expected value. Say the 200→500 anecdote aloud |
| 1:10–1:40 | Part 3: feature clinic | Two stations (chart, external API), by corners of the room if you can. Students pick by their pitch's feature types. Check each has a criterion in `SPEC.md` and a failing test before they start the agent |
| 1:40–2:30 | Part 4: project time, walkthrough 2 | With a TA or second examiner: walkthrough slots now, for students whose first feature is merged and tests pass. Without one: circulate, and confirm everyone has booked an appointment slot |
| 2:30–2:45 | Debrief | "What did the agent do that your `AGENTS.md` didn't allow?" "Did your tests catch the planted bug?" "What did the pull request show you that the editor didn't?" Put one merged diff on screen and ask the class to explain a line |
| 2:45–3:00 | Exit ticket | [Week 6 exit ticket](../../assessment/exit-tickets.md#week-6) (🔴 AI off), including the delayed-recall question about the week 5 micro-app. Say aloud: graded on completion, not correctness. Preview the homework: Goldfish test, AGENTS.md trial, the second pull request, deploy, survey |

## Live-demo script (Studio A, 10 minutes)

1. **Save point and branch (1 min).** Terminal: `git status` (clean), `git switch -c feature/list-limit`. "Commit before and after every agent task. A branch keeps `main` safe; more on that in Studio B."
2. **Check first (3 min).** New Copilot Chat session → **Agent**. Ask for *only* the test for the 10-item criterion, from the spec. When it asks to run `npm test`, pause: "Read the command. Is it safe? Allow once." Run `npm test` yourself: red. Commit the failing test.
3. **Plan, then build (3 min).** **Another new session** → "plan first and wait for my approval; don't change tests/". Read the plan aloud. Deliberately edit one step ("no, don't touch `style.css`"). Approve.
4. **Green and check (1 min).** Run `npm test` yourself: "I don't take the agent's word for it." Then `git status --short`: "Nothing in `tests/` changed."
5. **Teach back and commit (2 min).** **Source Control** → click the changed files → explain one line aloud. Write a two-sentence teach-back in `PROMPTS.md` in front of the class. Commit with `Assisted-by: GitHub Copilot (agent mode)`.

If the agent does something unexpected on stage, great: narrate how you notice and recover. That's the real lesson.

## Common pitfalls

| Pitfall | What to do |
|---|---|
| Be the Agent: the Harness "helps" (hints, fixes typos, runs extra commands) | Remind: a harness is literal. The whole point is feeling what the model can't see |
| Be the Agent: the Model reads every file at random | Let it happen, then debrief: "Which calls were wasted? What would have told you where to look?" (The first `run`) |
| Be the Agent: quoting problems in the terminal (`!`, `$`, backticks, `"`) | The kit's code avoids them. If a pair hits one, have them quote a different part of the line |
| Be the Agent: a pair edits the test to match the wrong value | Stop them and ask what the bug report asked for. Name the pattern: a green run with the bug still there is fake success |
| Students let the AI write `SPEC.md` | It's 🟡 AI limited: critique only. Ask them to explain the criterion in their own words |
| `AGENTS.md` grows to 200 lines, or has no Scope | Every line costs context in every session. Keep it under about 60 lines; details go in `SPEC.md` and `README.md`. Scope is required |
| "My `AGENTS.md` says never delete files, so it can't" | The teachable moment of the week: it's advice. Ask what would actually stop it (the approval prompt, the Codespace, pushed save points) |
| The check-first test and the code come from the same chat | Send them back: new session for the code. The test must not see the implementation |
| The agent changes the test to make it pass | `git status --short` shows it. Discard the change and re-prompt: "Don't change tests/" |
| Agent claims "all tests pass" but they don't | Students must run `npm test` themselves and log the real output |
| Students approve everything without reading, or look for auto-approve | Pause the room for 30 seconds: show an approval prompt, read the command aloud, and explain what `rm -rf` would do in their Codespace. Autopilot and skip-permissions modes are not allowed |
| Huge first feature ("build the dashboard") | Send them back to one acceptance criterion with testable logic in `public/lib/` |
| Out of credits mid-task | Normal, and planned for: switch to the fallback in the [Tool Handout](../../TOOLS.md#credits-budget-for-the-course) or finish with Ask mode. Tell students to check usage **before** starting homework |
| Pull request: the student committed on `main` instead of the branch | Help by hand: `git switch -c feature/ac1` keeps the commits on a new branch; then reset `main` only with your help. Don't let the agent do it |
| Merge conflicts | Rare with one branch at a time. Help by hand; don't let the agent resolve conflicts blindly |

## Differentiation

- **Needs more support:** in Be the Agent, pair them as the Harness first, so they see a Model's reasoning before trying it. In Part 4, give them a pre-chosen criterion from their spec and the example prompts nearly as written. It's fine if the first feature is tiny. In Studio B, let them do the planted-bug hunt as the Fixer only.
- **Ready for more:** Task B in Be the Agent; the Copilot CLI (Part 5); a second clinic station; the homework's MCP and second-agent stretch items. Ask them to write an `AGENTS.md` rule that would have prevented one mistake their agent made, then test it in the trial.
- **Already a developer:** ask them to review a peer's pull request in GitHub (ordinary code review comments) and to compare agent mode with the CLI on the same task, reporting step count and plan quality.

## Oral walkthrough 2

Follow the [protocol](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6): the student explains the diff of their first agent-built feature (the merged pull request's **Files changed** tab works well), writes a new acceptance criterion and its test by hand with the AI off, reads a failing test output, and talks through `AGENTS.md` (including what its Scope does and doesn't enforce) and their before/after commits. In the studio, call only students whose feature is merged and whose tests pass, and only with a second examiner on the floor; everyone else books a slot before week 7 Studio A. Note who struggles to explain their own agent's code: they need a check-in, and a smaller next task, before week 7.

## Fallback plans

| If… | Then… |
|---|---|
| Copilot agent mode is down or unavailable to many students | Run Part 4 with the fallback agent from the [Tool Handout](../../TOOLS.md#editor-and-agents-weeks-48), or in "the AI plans, you write" style with Ask mode (as in week 4). The check-first discipline is the same |
| Codespaces is down | Be the Agent works on one working machine per group of four (one Harness terminal, others as Models on paper). Capstone work moves to homework; Studio B's pull-request lesson can run on github.dev |
| Not enough time for Be the Agent | Do Task A only, 15 minutes, with you as the Harness on the projector and the class as the Model, voting on each tool call |
| A student has no capstone pitch | They write a five-line pitch with you in the first minutes of Part 3, picking from [Capstone Ideas](../../projects/capstone-ideas.md) |
| A student is alone (odd numbers, online, self-paced) | Each pair activity has a "Working alone?" option in the lab: an AI plays the Model in Be the Agent, and an AI plants the bug in Studio B |

## Exit ticket: what good answers look like

The [week 6 exit ticket](../../assessment/exit-tickets.md#week-6) checks the agent loop and safe supervision. Strong answers describe the loop as "decide on a tool call → run it → read the result → repeat", with context as the only thing the model knows; name a concrete safeguard (commit before and after, approve destructive commands, run the tests yourself, check `tests/` didn't change); and explain why a test must fail before it passes. Watch for "the agent can see my screen", "if the agent says tests pass, they pass" and "`AGENTS.md` stops the agent": revisit them in week 7's recap.

## Mid-course survey

Share a short anonymous survey before week 7 Studio A. Suggested questions: What is working? What isn't? On a scale of 1–5, how confident are you that you could explain every line of your capstone so far? Which tool gave you the most trouble? Read the results before week 7, and tell students one change you made because of them. With fewer than five students, report nothing from the form and hold a 10-minute conversation with each student instead ([Course variants](../../instructor/variants.md)).
