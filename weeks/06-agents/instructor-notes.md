# Week 6 — Instructor notes

> Big idea: **an agent is an LLM in a loop with tools.** Students first *are* the loop (Be the Agent), then direct a real one on their own capstone. The week's hidden goal is to keep understanding up exactly when the tool starts doing the typing.

Why the extra checks now: in CMU 15-113, students' self-rated understanding and code reading dropped to their lowest point of the year once agents took over the assignments ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). Be the Agent follows the University of Utah's exercise in which students changed a calculator using only an agent's tools, with the editor off limits ([utah-cs3960-sp26/calculator](https://github.com/utah-cs3960-sp26/calculator)).

## Prep checklist

### A week before

- [ ] Re-check the "Editor and agents" rows of [TOOLS.md](../../TOOLS.md) by using them: in a fresh Codespace, confirm Copilot Chat offers **Agent** (and **Plan**, if available), that an approval prompt appears before a terminal command, and that `copilot` (the CLI) starts or installs. Note where the usage/credits display currently lives, so you can show students.
- [ ] Confirm students' Copilot Student applications have gone through; chase anyone still pending. Students without Copilot need the fallback in [TOOLS.md](../../TOOLS.md) ready **before** class.
- [ ] Collect and skim the **capstone pitches**: scope (three weeks), at least two of the four required parts, no real personal data. Send quick "cut this" notes to over-ambitious pitches. Confirm pairs.
- [ ] Work through the Be the Agent kit yourself with a colleague, once as each role. Read the [answer key](../../instructor/answer-keys/week-06-be-the-agent.md).
- [ ] Check that the starter paths `weeks/06-agents/be-the-agent` and `projects/capstone-starter` work with your chosen method from [setup/codespaces.md](../../setup/codespaces.md#start-a-project-from-a-starter) (template repos or `degit`).
- [ ] Plan [oral walkthrough 2](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6) slots. It examines each student's first agent-built capstone feature, so only students who finish it early can go during the studio (a few per examiner in the last part of the lab). Schedule everyone else before the week 7 studio, at 10–15 minutes per slot; a TA or volunteer examiner helps a lot.

### The day before

- [ ] Print the [tool cards](be-the-agent/tool-cards.md) and [task cards](be-the-agent/task-card.md), one set per pair (or share them on screen).
- [ ] Prepare the live demo in a Codespace of your own capstone-starter copy: `SPEC.md` with one tiny criterion that adds a new rule to the example list, e.g. "WHEN the list already has 10 items, THE APP SHALL not add another and SHALL show 'The list is full'" (a new check in `addItem()` in `public/lib/items.js`, plus a new test), committed and clean.

## Run sheet

| Time | Block | Notes |
|---|---|---|
| 0:00–0:10 | Show and tell | Two live micro-apps. Ask each presenter: "Where does your key live?" (reinforces week 5) |
| 0:10–0:30 | Concept talk | [slides.md](slides.md), 18 slides. Linger on "An agent = model + tools + loop" and the incident slides |
| 0:30–0:40 | Live demo | Script below |
| 0:40–1:10 | Lab Part 1: Be the Agent | Form pairs fast (neighbors). Setup 3 min, Task A 20 min, debrief 7 min. Enforce the rules: no editor for the Model, no hints from the Harness |
| 1:10–1:30 | Lab Part 2: capstone setup | Watch for students letting AI write the spec (🟡: critique only). Post the sign-up sheet for oral walkthrough slots before week 7 |
| 1:30–1:40 | Break | |
| 1:40–2:20 | Lab Part 3: first feature | Circulate. Check every student saw a **red** test in their own terminal before green. From about 2:00, call students whose first feature is merged for oral walkthroughs |
| 2:20–2:45 | Debrief | "How many steps did the agent take? Did it claim anything that wasn't true? What did you have to fix?" Put two diffs on screen and ask the class to explain a line |
| 2:45–3:00 | Exit ticket + preview | [Week 6 exit ticket](../../assessment/exit-tickets.md#week-6) (🔴). Preview homework: deploy now, two features, the survey |

## Live-demo script (10 minutes)

1. **Save point (1 min).** Terminal: `git status` (clean), `git switch -c feature/list-limit`. "Commit before and after every agent task."
2. **Plan first (3 min).** Copilot Chat → **Agent** (or **Plan**) → new session → a four-part prompt with "plan first and wait for my approval; test first". Read the plan aloud. Deliberately edit one step ("no, don't touch `style.css`"). Approve.
3. **Approval prompt (1 min).** When it asks to run `npm test`, pause: "Read the command. Is it safe? Allow once." Mention you'd never allow `rm -rf` without asking why.
4. **Red, then green (3 min).** Show the failing test output, then the passing output. Then run `npm test` yourself: "I don't take the agent's word for it."
5. **Read and commit (2 min).** **Source Control** → click the changed files → explain one line aloud. Commit, merge, push.

If the agent does something unexpected on stage, great: narrate how you notice and recover. That's the real lesson.

## Common pitfalls

| Pitfall | What to do |
|---|---|
| Be the Agent: the Harness "helps" (hints, fixes typos, runs extra commands) | Remind: a harness is literal. The whole point is feeling what the model can't see |
| Be the Agent: the Model reads every file at random | Let it happen, then debrief: "Which calls were wasted? What would have told you where to look?" (The first `run`) |
| Be the Agent: quoting problems in the terminal (`!`, `$`, backticks, `"`) | The kit's code avoids them. If a pair hits one, have them quote a different part of the line |
| Be the Agent: a pair edits the test to expect 38.33 | Stop them and ask what Priya asked for. Name the pattern: a green run with the bug still there is fake success |
| Students let the AI write `SPEC.md` | It's 🟡 Limited: critique only. Ask them to explain one acceptance criterion in their own words |
| `AGENTS.md` grows to 200 lines | Every line costs context in every session. Keep it under about 60 lines; details go in `SPEC.md` and `README.md` |
| Agent claims "all tests pass" but they don't | The teachable moment of the day. Students must run `npm test` themselves and log the real output |
| Students approve everything without reading, or switch on auto-approve | Pause the room for 30 seconds: show an approval prompt, read the command aloud, and explain what `rm -rf` would do in their Codespace |
| Huge first feature ("build the dashboard") | Send them back to one acceptance criterion with testable logic in `public/lib/` |
| Out of credits mid-task | Normal, and planned for: switch to the fallback in [TOOLS.md](../../TOOLS.md) or finish with Ask mode. Tell students to check usage **before** starting homework |
| Merge conflicts | Rare with one branch at a time. Help by hand; don't let the agent resolve conflicts blindly. Pull requests come in week 7 |

## Differentiation

- **Needs more support:** in Be the Agent, pair them as the Harness first, so they see a Model's reasoning before trying it. In Part 3, give them a pre-chosen criterion from their spec and the example prompt nearly as written. It's fine if the first feature is tiny.
- **Ready for more:** Task B in Be the Agent; the lab's stretch goals; the Copilot CLI (Part 3g); the homework's MCP and second-agent stretch items. Ask them to write an `AGENTS.md` rule that would have prevented one mistake their agent made.
- **Already a developer:** ask them to review a peer's agent diff and log what they'd change, or to compare agent mode with the CLI on the same task and report the differences in step count and plan quality.

## Oral walkthrough 2

Follow the [protocol](../../assessment/oral-walkthroughs.md#walkthrough-2-week-6): the student explains the diff of their first agent-built feature, changes it by hand with the AI off, reads a failing test output, and talks through `AGENTS.md` and their before/after commits. In the studio, call only students whose feature is merged and whose tests pass; everyone else books a slot before the week 7 studio. Note who struggles to explain their own agent's code: they need a check-in, and a smaller next task, before week 7.

## Fallback plans

| If… | Then… |
|---|---|
| Copilot agent mode is down or unavailable to many students | Run Part 3 with the fallback agent from [TOOLS.md](../../TOOLS.md), or in "the AI plans, you write" style with Ask mode (as in week 4). The red/green discipline is the same |
| Codespaces is down | Be the Agent works on one working machine per group of four (one Harness terminal, others as Models on paper). Capstone setup moves to homework |
| Not enough time for Be the Agent | Do Task A only, 15 minutes, with you as the Harness on the projector and the class as the Model, voting on each tool call |
| A student has no capstone pitch | They write a five-line pitch in the first 10 minutes of Part 2 with you, picking from [projects/capstone-ideas.md](../../projects/capstone-ideas.md) |

## Exit ticket: what good answers look like

The [week 6 exit ticket](../../assessment/exit-tickets.md#week-6) checks the agent loop and safe supervision. Strong answers describe the loop as "decide on a tool call → run it → read the result → repeat" with context as the only thing the model knows; name a concrete safeguard (commit before and after, approve destructive commands, run the tests yourself); and explain why a test must fail before it passes. Watch for "the agent can see my screen" and "if the agent says tests pass, they pass": revisit both at the start of week 7.

## Mid-course survey

Share a short anonymous survey before week 7. Suggested questions: What is working? What isn't? On a scale of 1–5, how confident are you that you could explain every line of your capstone so far? Which tool gave you the most trouble? Read the results before planning week 7, and tell students one change you made because of them.
