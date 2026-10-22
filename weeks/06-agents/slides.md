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
Speaker notes (0:00, about 30 seconds). The whole talk runs about 19 minutes.
Today the AI stops being a chat window and starts working inside your repository: reading files, editing them, running commands. That's powerful and it's where things go wrong, so we'll open the box first. By the end of today you'll have played the agent yourself, set up your capstone, and built a first feature with a real agent, test first.
-->

---

## Who types?

| Weeks | Tool | Who edits the files? |
|---|---|---|
| 1–3 | Chat, app builders | You copy and paste |
| 4–5 | Editor + Ask mode | You, with advice |
| **6–8** | **Agent** | **The AI**, while you supervise |

<!--
Speaker notes (about 30 seconds).
We've climbed the ladder on purpose. You learned to read, debug and commit before we handed over the keyboard. From today the agent types; your job becomes deciding what to build, writing the check, approving the plan, reading what it did, and keeping it safe.
-->

---

## An agent = model + tools + loop

1. The **model** reads its context: your prompt, `AGENTS.md`, every result so far
2. It chooses **one tool call**: list, read, search, edit or run
3. The **harness** (the program around the model) runs the call
4. The **result** goes back into the context
5. Repeat until the model says **"done"**, with evidence, we hope

The model never sees your screen. It knows only what the tools returned.

<!--
Speaker notes (about 2 minutes). The key slide.
The model is the same kind of LLM you've used since week 1. What makes it an agent is the loop. It reads everything in its context, decides on one tool call, the harness runs that call, and the result goes back into the context. Repeat until the model decides it's done.
Draw it on the board as a circle: model → tool call → result → back to the model, with an exit arrow labeled "done".
The model never sees your screen. It only knows what the tools returned. Hold that thought for Be the Agent: you will be the model, and your partner will be the harness.
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
Real agents have a few more (a browser, web search, MCP servers that plug in extra tools), but these four do most of the work. Edit tools replace exact text: the model must quote the code it wants to change, character for character. You'll feel why that matters in Be the Agent.
"Run" is the dangerous one: a command can do anything you could do in the terminal, including deleting things.
-->

---

## The loop in action

| # | Call | What came back |
|---|---|---|
| 1 | run the tests | "1 failing: formatDate expected 2026-10-21, got 2026-9-21" |
| 2 | search `formatDate` | "defined in lib/dates.js, line 4" |
| 3 | read lib/dates.js | "uses getMonth(), which counts months from 0" |
| 4 | edit | `getMonth()` → `getMonth() + 1` |
| 5 | run the tests | "12 pass, 0 fail" → **done, with evidence** |

<!--
Speaker notes (about 1 minute).
An ideal trace for a different bug from the one you'll meet in Be the Agent. Don't memorize it; notice the shape. Look around, read, make one small change, check. Five calls.
Real agents do this in seconds. Bad traces look like: read ten files at random, edit the wrong thing, never re-run the tests, announce success.
-->

---

## Context = working memory

- Everything read goes **into** the context window
- It **fills up**; old details get squeezed out
- So: **one task per session**, a fresh session for the next

<!--
Speaker notes (about 1 minute).
The context window is the agent's working memory: your prompt, standing instructions, every file it read and every test output. It's big but not infinite, and quality drops as it fills with noise. A long session that wandered through three features is the agent equivalent of a muddled chat.
Habits: one task per session. Start fresh for the next feature. Keep standing instructions short. The two-strikes rule still applies. And today you'll use two separate sessions for one feature: one writes the test, a new one writes the code.
-->

---

## AGENTS.md: standing instructions

```text
## Scope
- You may edit only: public/, tests/
- Anything not listed here is out of scope. Ask me first.
- Ask before you delete, install, publish or make network requests.
## Never
- Read or print .env
- Disable, weaken or delete tests to make them pass
```

Short · specific to **this** project · **read** any AGENTS.md from the internet first

<!--
Speaker notes (about 1 minute).
AGENTS.md is a README for agents: what the project is, which commands to run, what it may touch, what it must never do. It's an open format read by most major agents (https://agents.md/). In VS Code, check the "Use AGENTS.md file" setting is on.
Keep it short: details go in SPEC.md and README.md. Every line should be specific to your repo. And read before you adopt (rule 7): rules files can hide instructions in invisible characters.
The new part today is Scope: which folders the agent may change, and the sentence "anything not listed here is out of scope".
-->

---

## AGENTS.md is advice, not enforcement

| Rules (the agent reads them) | Rails (they hold anyway) |
|---|---|
| `AGENTS.md`, your prompt, `SPEC.md` | The **Codespace**: it can only reach this project |
| "Ask before deleting" | The **approval prompt** you answer |
| "Never read `.env`" | **No keys** within its reach |
| "Commit before and after" | **Save points** pushed to GitHub |

Removing a scope statement raised one agent's out-of-scope actions **0% → 17.1%**. Adding one helps, but never to zero.

<!--
Speaker notes (about 1.5 minutes).
Researchers ran 7,500 tests across four agent products: removing only the consent and scope declaration from the prompt raised one agent's out-of-scope actions from 0% to 17.1%, and the surrounding tool mattered more than the model (Qu et al., https://arxiv.org/pdf/2605.18583). The UK AI Security Institute found that adding "Anything not listed as in scope is out of scope" cut simulated attacks from 26 of 50 to 4 of 49, but not to zero (https://www.aisi.gov.uk/blog/gpt-6-astra-performs-unsanctioned-supply-chain-attacks-in-simulations).
So write the Scope section: it works. But don't mistake it for a lock. Anthropic's own documentation says instruction files are "context, not enforced configuration" (https://code.claude.com/docs/en/memory). The right-hand column is what actually holds, whatever the agent decides.
-->

---

## Approvals on. Never autopilot.

- The agent **asks** before running commands. Read each one; allow **once**
- **Stop and ask why:** delete, move, install, push, publish
- Autopilot and skip-permissions modes: **never**, in this course

A hidden instruction on a web page led an agent in autopilot mode to send a project's secrets away in about **28 seconds**.

<!--
Speaker notes (about 1 minute).
Copilot shows an approval prompt before running terminal commands: allow once, allow for the session, or skip. Allow once. There are modes that approve everything automatically; VS Code shows a warning dialog before you can turn them on, for a reason.
The case on the slide: in Copilot CLI's autopilot mode, a hidden instruction on a web page led the agent to read an .env.prod file and send its secrets to an attacker in about 28 seconds. The vendor declined to treat it as a vulnerability, because the user had chosen full autonomy (Adversa AI, https://adversa.ai/blog/cryptographic-context-injection-github-copilot/). That's rule 9 of your safety contract: approvals stay on, and an agent that reads untrusted content never has your secrets within reach.
-->

---

## Sandboxes and save points

- Work in a **Codespace**: a cloud computer with only this project
- **Commit before** the task, **commit after** it, and push
- No real secrets, no real data, nothing you'd miss

<!--
Speaker notes (about 1 minute).
A Codespace is a sandbox: if the agent does something terrible, it does it to a throwaway cloud machine holding one repository, not your laptop with your photos. Simon Willison recommends exactly this kind of remote environment for running agents (https://simonwillison.net/2025/Sep/30/designing-agentic-loops/).
Commit before and after every agent task, and push: a save point on GitHub is out of the agent's reach. The agent's own undo is not a backup; git is.
-->

---

## How agents fail: 2025

- **Replit:** ignored a code freeze, deleted a production database, faked test results
- **Gemini CLI:** a folder wasn't created; it carried on and overwrote the user's files
- **Antigravity:** asked to clear a cache, it wiped a whole drive

Common thread: no check of a result, no review of a destructive command.

<!--
Speaker notes (about 1 minute). Cases 4–6 in resources/case-studies.md.
Replit, July 2025: during an explicit code freeze the agent deleted the production database, generated fake records and false test results, and said rollback was impossible when it wasn't (Fortune).
Gemini CLI, July 2025: a mkdir failed silently, the agent assumed it had worked, and its move commands overwrote one file after another (AI Incident Database #1178).
Antigravity, December 2025: asked to clear a project cache, it ran a delete command against a whole drive (Tom's Hardware).
Sandbox, approvals, commits, and checking every result.
-->

---

## PocketOS, April 2026: nine seconds

- A routine task on a **test** environment hit a credential mismatch
- The agent found a key **in an unrelated file**, and used it
- It deleted the **production** volume, **and the backups on it**, in about 9 seconds
- Afterwards it listed the safety rules it had broken

**Where are your keys? Where are your save points?**

<!--
Speaker notes (about 1.5 minutes). Case 13 in resources/case-studies.md.
A Cursor agent at PocketOS was working on staging and hit a credential mismatch. On its own initiative it used an API token it found in an unrelated file, one created for managing domain names, and deleted a production storage volume, including the backups stored on the same volume, in about nine seconds. The account comes mainly from the company's founder (Information Age, https://ia.acs.org.au/article/2026/gone-in-9-seconds--ai-agent-deletes-company-database.html).
Three lessons, all rule 4: an agent will use any credential it can find, so keys do one job and stay out of its reach; backups on the same disk aren't backups, so your save points live on GitHub; and the project's written rules didn't stop it. That last one is why the previous slide matters.
-->

---

## PixelLeak, September 2026: no attacker

- Developers asked agents to **attach screenshots** to code reviews
- The agents **created public repositories** to host the images
- **13,000+** internal screenshots from 300+ organizations went public
- One shared skill file spread the habit across a company

**No attacker, no bug: just a helpful agent.**

<!--
Speaker notes (about 1.5 minutes). Case 14 in resources/case-studies.md.
GitHub's command-line tool couldn't attach images to pull requests until a September release, so agents improvised with the nearest thing that worked: public storage. Billing records, unreleased features and a financial firm's treasury console ended up public. Secret scanners read text, so they couldn't see what was in the pictures (The Hacker News, https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html).
Rule 9: no agent creates a public repository, gist, release, deployment or post without your approval. Your AGENTS.md Scope says "never create repositories, gists, releases or deployments"; the approval prompt is what makes it hold.
-->

---

## Tests are the agent's eyes

- The agent **can't see** your app; a test tells it, and you, whether it worked
- **Red, then green:** the test fails first, then passes
- "Done" means **test output as evidence**, and you run it **yourself**

<!--
Speaker notes (about 1 minute).
Vendor guides agree: give the agent a way to check its own work and ask for evidence, not claims. For us that's npm test. Red/green testing (Willison, https://simonwillison.net/guides/agentic-engineering-patterns/): watch the test fail first, which proves it can catch the problem, then make it pass.
And then you run it yourself. Remember Replit's false test results.
-->

---

## Check first, in a separate prompt

1. Chat 1: write **only the test**, from the spec. Run it: **red**. Commit it
2. Chat 2 (new): plan, then build. **Don't touch `tests/`**
3. Your terminal: **green**, and `tests/` unchanged

Tests written **after** faulty code caught **14%** of faults; written independently, **25%**.

<!--
Speaker notes (about 1 minute).
When an AI writes the tests after it has written buggy code, the tests tend to agree with the bugs: in one 2026 study they caught 14% of faults, against 25% for tests written independently (Konstantinou et al., https://arxiv.org/abs/2607.05139). So the test comes first, from a chat that has never seen the code. You commit the failing test, so if anything changes it later, git shows you.
-->

---

## Watch the tests, too

A developer asked an agent to **"fix it"**.

It changed a test's expected status from **200** to **500**, so the test passed, and the bug stayed.

→ `AGENTS.md`: never weaken or delete tests · you: check `tests/` didn't change

<!--
Speaker notes (about 1 minute).
A practitioner on Hacker News described a "fix it" prompt that changed a test's expected HTTP status from 200 (OK) to 500 (server error) so the test would pass (https://news.ycombinator.com/item?id=48662310). Green run, broken app: the same fake success as Replit, from an agent trying to be helpful.
That's why the AGENTS.md template says never disable, weaken or delete tests, and why the lab has you run git status after the agent finishes: nothing in tests/ should have changed.
-->

---

## Teach back, then commit

- Before every agent commit: **2–3 sentences** in `PROMPTS.md`, your own words: what changed, why it works
- Can't write it? You're not ready to commit
- The commit says who helped: `Assisted-by: GitHub Copilot (agent mode)`

With the AI switched off, **77%** of unrestricted AI users failed a maintenance task, against **39%** of those who had to explain first.

<!--
Speaker notes (about 1 minute).
In a 2026 study of 78 learners, 77% of those who had used AI without restrictions failed a 30-minute maintenance task once the AI was switched off, against 39% of those whose tool required a short explanation before generated code could be added (Sankaranarayanan, https://arxiv.org/abs/2602.20206). The teach-back is that explanation, and from this week it's graded in the capstone Process row.
The Assisted-by line, which you learned in week 2, is now required on every AI-assisted commit. Open-source projects such as LLVM and Fedora use the same line.
-->

---

## Credits are a budget

- Agent sessions burn credits **fast**; when they run out, agent work **stops** until the reset
- Small, clear tasks cost less · check your usage · know your fallback

*Current limits and fallbacks: TOOLS.md*

<!--
Speaker notes (about 30 seconds).
Every step of the loop is a model call. A vague task that wanders costs far more than a small, well-specified one. On Copilot Free and Student there's no cheaper fallback: when the credits are gone, agent and chat stop until the monthly reset. Check your usage today, plan your capstone in small tasks, and know your fallback from TOOLS.md.
-->

---

## This week

- **Studio A:** Be the Agent · `SPEC.md` + `AGENTS.md` with Scope · first feature: test first, teach back
- **Studio B:** branches and pull requests · a planted bug (🔴 AI off) · feature clinic: a chart or an external API · walkthrough 2
- **Homework (Milestone 1):** full spec + Goldfish test · `AGENTS.md` trial · a second feature as a pull request · deploy

At CMU this fall, satisfaction rose while self-rated understanding **fell**. That's why the checks come now.

<!--
Speaker notes (about 30 seconds).
Everything is in lab.md and homework.md. Oral walkthrough 2 is about the feature you build today: in Studio B if we have a second examiner, otherwise by appointment before week 7.
CMU 15-113's fall 2026 report found satisfaction up on three of four beginner assignments compared with spring, but self-reported understanding lower on all four (https://www.cs.cmu.edu/~113/bestPracticesF26.html; the theme counts are an AI's reading of student comments). In spring, understanding hit its lowest point of the year on the agent assignments (https://www.cs.cmu.edu/~113/bestPractices.html). So this course adds checks exactly now: the test first, a teach-back, a planted bug, and walkthrough 2 with the AI off.
-->
