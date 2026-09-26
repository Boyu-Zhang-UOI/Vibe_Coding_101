---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 6"
footer: "CC BY 4.0"
---

# How Agents Work

Week 6: an LLM in a loop with tools

<!--
Speaker notes (0:00, about 1 minute).
Today the AI stops being a chat window and starts working inside your repository: reading files, editing them, running commands. That's powerful and it's where things go wrong, so we'll open the box first. By the end of today you'll have played the agent yourself, set up your capstone, and shipped a first feature built by a real agent, test first.
-->

---

## Who types?

| Weeks | Tool | Who edits the files? |
|---|---|---|
| 1–3 | Chat, app builders | You copy and paste |
| 4–5 | Editor + Ask mode | You, with advice |
| **6–8** | **Agent** | **The AI**, while you supervise |

<!--
Speaker notes (about 1 minute).
We've climbed the ladder on purpose. You learned to read, debug and commit before we handed over the keyboard. From today the agent types; your job becomes deciding what to build, checking what it did, and keeping it safe.
-->

---

## An agent = model + tools + loop

```text
        ┌──────────── context: prompt, AGENTS.md, results so far ───────────┐
        ▼                                                                    │
   MODEL decides ──► TOOL CALL (read / search / edit / run) ──► RESULT ──────┘
        │
        └──► "done" (with evidence, we hope)
```

<!--
Speaker notes (about 2 minutes). The key slide.
The model is the same kind of LLM you've used since week 1. What makes it an agent is the loop. It reads everything in its context, decides on one tool call, the harness (the program around the model) runs that call, and the result goes back into the context. Repeat until the model decides it's done.
The model never sees your screen. It only knows what the tools returned. Hold that thought for Be the Agent in the lab: you will be the model, and your partner will be the harness.
-->

---

## The tools

| Tool | Like… |
|---|---|
| **list / search** | Looking around the room |
| **read** a file | Picking up a document |
| **edit** a file | Changing exact words in it |
| **run** a command | Pressing a button and watching what happens |

<!--
Speaker notes (about 1 minute).
Real agents have a few more (a browser, web search, MCP servers that plug in extra tools), but these four do most of the work. Note: edit tools replace exact text. The model must quote the code it wants to change, character for character. You'll feel why that matters in the lab.
"Run" is the dangerous one: a command can do anything you could do in the terminal, including deleting things.
-->

---

## The loop in action

```text
1 run tests      → "1 failing: perPerson expected 38.34, got 38.33"
2 search         → "perPerson is in lib/bill.js line 21"
3 read the file  → "line 26 rounds to nearest, comment says round UP"
4 edit           → Math.round → Math.ceil
5 run tests      → "9 pass, 0 fail"   → DONE, with evidence
```

<!--
Speaker notes (about 1.5 minutes).
Here's an ideal trace for the bug you'll fix in the lab. Don't memorize it; notice the shape. Look around, read, make one small change, check. Five calls.
Real agents do this in seconds. Bad traces look like: read ten files at random, edit the wrong thing, never re-run the tests, announce success.
-->

---

## Context = working memory

- Everything read goes **into** the context window
- It **fills up**; old details get squeezed out
- So: **one task per session**, fresh session for the next

<!--
Speaker notes (about 1 minute).
The context window is the agent's working memory: your prompt, standing instructions, every file it read and every test output. It's big but not infinite, and quality drops as it fills with noise. A long session that wandered through three features is the agent equivalent of a muddled chat.
Habits: one task per session. Start fresh for the next feature. Keep standing instructions short. The two-strikes rule still applies.
-->

---

## AGENTS.md: standing instructions

```text
## Commands
- npm test: run all tests
## Never
- Read or print .env
- Delete files without asking
```

- An open format many agents read (agents.md)
- **Short**: every line costs context, every session
- **Read** any AGENTS.md from the internet before using it

<!--
Speaker notes (about 1 minute).
AGENTS.md is a README for agents: what the project is, which commands to run, what never to do. It's an open format, now looked after by the Linux Foundation's Agentic AI Foundation, and read by nearly every major agent (https://agents.md/). In VS Code, check the setting chat.useAgentsMdFile is on.
Keep it short: details go in SPEC.md and README.md. And read before you adopt: researchers showed that rules files can hide instructions in invisible characters (Pillar Security). Your capstone starter has one ready for you to adapt.
-->

---

## SPEC.md + plan first

1. `SPEC.md` says **what** to build and when it's done
2. Ask for a **plan**, not code: "Plan first and wait for my approval"
3. **Edit** the plan, then approve **one** step

<!--
Speaker notes (about 1 minute).
Your spec from week 3 comes back: it's the best context you can give an agent. Acceptance criteria in WHEN/SHALL form are exactly what an agent needs to know when it's done.
Plan first. VS Code has a Plan option in the agent picker where available; the Copilot CLI has a plan mode (Shift+Tab). Or just say "plan first and wait for my approval". Read the plan like a manager: is it the right feature, the right files, too big? Cross things out. Then approve one step.
-->

---

## Approvals: read before you click

- Agents **ask** before running commands and editing
- You can switch that off. **Don't.**
- Always read commands that **delete, move or push**

<!--
Speaker notes (about 1 minute).
Copilot shows an approval prompt before running terminal commands: allow once, allow for the session, or skip. VS Code's docs say read-only commands can run automatically while risky ones like rm need approval by default (https://code.visualstudio.com/docs/agents/run/approvals). There are modes that approve everything automatically; they come with a warning dialog for a reason. Not in this course.
Read the actual command. "rm -rf" anything, "git reset --hard", "git push --force", anything that drops a database table: stop and ask why.
-->

---

## Sandboxes and save points

- Work in a **Codespace**: a cloud computer with only this project
- **Commit before** the task, **commit after** it
- No real secrets, no real data, nothing you'd miss

<!--
Speaker notes (about 1 minute).
A Codespace is a sandbox: if the agent does something terrible, it does it to a throwaway cloud machine holding one repository, not your laptop with your photos. Simon Willison recommends exactly this kind of remote environment for running agents (https://simonwillison.net/2025/Sep/30/designing-agentic-loops/).
Commit before and after every agent task. The agent's own undo is not a backup; git is. And our project rule: nothing you'd miss if an agent deleted it.
-->

---

## How agents fail (1): Replit, July 2025

- Ignored a **code freeze**
- **Deleted** a production database
- Created **fake data** and false test results
- Said rollback was **impossible** (it wasn't)

*Source: [Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/)*

<!--
Speaker notes (about 1 minute).
Jason Lemkin was building an app with Replit's agent. During an explicit code freeze, the agent deleted the production database, generated fake records and false test results to cover it, and said rollback was impossible when it wasn't. Replit's CEO called it unacceptable and announced automatic separation of development and production databases.
Lessons: never give an agent production data or credentials; don't trust its report, check the evidence.
-->

---

## How agents fail (2): files and drives

- **Gemini CLI:** a folder wasn't created; the agent carried on and **overwrote** the user's files one by one
- **Antigravity:** asked to clear a cache, it **wiped a whole drive**

*Sources: [AI Incident Database #1178](https://incidentdatabase.ai/cite/1178/) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/googles-agentic-ai-wipes-users-entire-hard-drive-without-permission-after-misinterpreting-instructions-to-clear-a-cache-i-am-deeply-deeply-sorry-this-is-a-critical-failure-on-my-part)*

<!--
Speaker notes (about 1 minute).
Gemini CLI, July 2025: asked to move files into a new folder, the mkdir failed silently, the agent assumed it had worked, and its move commands renamed every file onto the same name, overwriting each one. It then reported its own catastrophic failure.
Antigravity, December 2025: a user asked the agent to clear a project cache; it ran a delete command against the whole D: drive, and most files could not be recovered.
Common thread: the agent didn't check a result before the next step, and nobody reviewed the destructive command. Sandbox, approvals, commits.
-->

---

## Tests are the agent's eyes

- The agent **can't see** your app
- A test tells it, and you, whether it worked
- "Done" means: **test output as evidence**

<!--
Speaker notes (about 1 minute).
Vendor guides agree: give the agent a way to check its own work and ask for evidence, not claims (Anthropic's Claude Code best practices say this directly). For us that's npm test. The AGENTS.md in your capstone tells the agent to run the tests and paste the output.
And then you run them yourself. Remember Replit's false test results.
-->

---

## Red, then green

1. **Red:** write a test for the new behavior; run it; it **fails**
2. **Green:** write code until it **passes**
3. Run **all** the tests again

*Willison, [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/)*

<!--
Speaker notes (about 1 minute).
Simon Willison recommends red/green test-driven development with agents. Why insist on seeing red first? A test that has never failed might not test anything: it could pass whether or not the feature works. Watching it fail proves it can catch the problem.
In the lab your prompt will say: write the test first, run it, show me it failing, then implement. You check both outputs.
-->

---

## Credits are a budget

- Agent sessions can burn credits **fast**
- On Copilot's free plans: credits run out → **work stops** until the reset
- Small, clear tasks cost less · know your fallback

*Current limits: TOOLS.md*

<!--
Speaker notes (about 1 minute).
Every step of the loop is a model call. A vague task that wanders costs far more than a small, well-specified one. On Copilot Free and Student there's no longer an automatic cheaper fallback: when the credits are gone, agent and chat stop until the monthly reset. Check your usage today, plan your capstone work in small tasks, and know your fallback from TOOLS.md.
-->

---

## Why we add checks now

At CMU, students' understanding hit its **lowest point of the year** once agents took over.

→ Read every diff · keep only what you can explain · oral walkthrough 2

*Source: [CMU 15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)*

<!--
Speaker notes (about 1 minute).
CMU's 15-113 surveyed students after every assignment. Understanding, satisfaction and code-reading scores rose through the early assignments, peaked when students read and partly wrote the code, then fell together across the agent assignments; the lowest understanding score of the year came on an agent-built app. Self-reported survey data, so a signal rather than proof.
That's why this course adds checks exactly now instead of relaxing: read the diff, keep only what you can explain, and oral walkthrough 2 asks you to change agent-written code live, with the AI off.
-->

---

## Today's lab

1. **Be the Agent** (pairs, 30 min): you are the model, your partner is the harness
2. Capstone setup: `SPEC.md` + `AGENTS.md`
3. First feature with an agent: plan → red → green → read → commit

Oral walkthrough 2: on your Part 3 feature, today or before week 7.

<!--
Speaker notes (about 30 seconds).
Everything is in lab.md. Be the Agent first: no editor allowed. Then the real thing. Oral walkthrough 2 is about the feature you build in Part 3: if you finish early I may call you today; everyone else gets a slot before next week's studio.
-->

---

## Homework

- Two more capstone features, each with a **test**
- **Deploy** the capstone now
- Agent log in `PROMPTS.md`
- Reflection (🔴): "a moment the agent surprised me"
- Mid-course feedback survey

<!--
Speaker notes (about 30 seconds).
Details in homework.md. Deploy on day one: a capstone that has been live since week 6 doesn't have deployment surprises in week 8. And fill in the survey honestly; it changes the second half of the course.
-->
