# Week 6 Homework — Grow the capstone with an agent

> **Core:** about 3 hours, required. **Stretch:** optional.
> Due before the week 7 studio. The capstone brief is [projects/capstone.md](../../projects/capstone.md).

## Core (required)

### 1. Deploy on day one (about 20 min)

Deploy your capstone to Vercel **now**, even though it's mostly the starter shell. Every later push then redeploys it, and you'll find deployment problems in week 6, not the night before the Project Fair.

1. Push your commits (**Source Control** → **Sync Changes**).
2. On [vercel.com](https://vercel.com): **Add New…** → **Project** → **Import** your capstone repository. Leave the preset as **Other**.
3. If you use the AI example or any other key, add the environment variables before you click **Deploy** (and **Redeploy** after any later change). Details: the starter's `README.md`, "Deploy on day one".
4. Put the live URL at the top of your `README.md`, commit and sync.

### 2. Two more features, each with a test (about 90 min)

Build two more acceptance criteria from your `SPEC.md` with an agent, using the Safe Loop exactly as in [lab Part 3](lab.md#part-3--your-first-agent-built-feature-40-min). For **each** feature:

- [ ] Start a **fresh** agent session.
- [ ] Commit (or check `git status` is clean) **before** you start, and create a branch.
- [ ] Ask for a plan first; edit it; approve.
- [ ] **Red:** a new test that you have seen fail in your own terminal.
- [ ] **Green:** `npm test` passes in your own terminal.
- [ ] Read the whole diff. Remove or simplify what you can't explain.
- [ ] Try it by hand in the browser, including an edge case.
- [ ] Commit **after**, merge into `main`, push (Vercel redeploys).
- [ ] Update `TESTS.md`: add the automated test, and at least one manual edge-case test.

Keep each feature small enough to finish in one session. If the agent fails twice at the same problem, apply the two-strikes rule: stop, go back to your last good commit if needed, and start a fresh session with a better prompt.

> [!TIP]
> Watch your credits (github.com → Settings → Copilot). A precise prompt that names the criterion, the files and the test costs far less than "add the stats page". If you run out, switch to a fallback agent from [TOOLS.md](../../TOOLS.md) or build the feature yourself with Ask mode's advice; both count.

### 3. Agent log in `PROMPTS.md` (about 20 min)

One entry per agent task (the capstone's `PROMPTS.md` has fields for this): the prompt, the plan and what you changed in it, what happened, the red and green test evidence, what you checked or fixed yourself, and the "before" and "after" commit hashes. Include at least one moment where the agent got something wrong and how you noticed. Never paste keys or `.env` contents into a prompt or into this log.

### 4. AI-free reflection: "a moment the agent surprised me" (about 30 min) 🔴

Use [templates/REFLECTION.md](../../templates/REFLECTION.md) and write it **without AI**. For section 1, describe one specific moment from this week when an agent (or you, as the Model in Be the Agent) did something you didn't expect: what exactly happened, what you saw in the output or the diff, and what you did next. Concrete beats general: quote the command, the error, or the line of code.

### 5. Mid-course feedback survey (about 10 min)

Fill in the anonymous mid-course survey your instructor shares. It asks what's working, what isn't, and how confident you feel explaining your own code. Self-paced learners: answer the same three questions in your reflection. Honest answers change the second half of the course.

## Deliverables checklist

- [ ] Capstone live on Vercel; URL at the top of `README.md`
- [ ] `SPEC.md` complete, and `AGENTS.md` adapted and short
- [ ] Three features merged into `main` in total (one from the lab plus two), each with a test you saw fail first
- [ ] `npm test` shows `fail 0`, and the **Actions** tab on GitHub shows a green check
- [ ] `TESTS.md` updated with automated and manual tests
- [ ] `PROMPTS.md`: one agent entry per task, with evidence and commit hashes
- [ ] AI-free reflection (🔴)
- [ ] Mid-course survey submitted
- [ ] Codespaces stopped

Graded on effort and completion ([weekly rubric](../../assessment/rubrics.md#weekly-labs-and-homework)). This work also counts toward the [capstone rubric](../../assessment/rubrics.md#capstone).

## Stretch (optional)

### Give the agent eyes on your page with an MCP server

**MCP** (Model Context Protocol) is an open standard for plugging extra tools into an agent. A browser-automation MCP server, for example, lets the agent open your page, click, and read what's on screen, so it can check the UI itself instead of only running tests. Copilot's agent mode supports MCP on the free plan ([VS Code docs](https://code.visualstudio.com/docs/copilot/customization/mcp-servers)).

Before you add one, apply the safety contract (rule 7):

- **Read it first.** An MCP server is a program that can run any code in your Codespace. Use only well-known servers from their official repository, read the configuration you are adding, and check any package it installs exists and is the one you meant.
- **Mind the lethal trifecta.** An agent that has private data, reads untrusted content (such as web pages) and can send data out can be tricked into leaking it ([Willison](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/)). A browser tool reads untrusted content, so keep secrets out of the Codespace it runs in, and point it only at your own app.
- **Keep approvals on.** Approve each MCP tool call; don't auto-approve.
- **Commit first**, and log in `PROMPTS.md` which server you added, why, and what it did.

Week 7 goes deeper into prompt injection and the lethal trifecta.

### Compare a second agent

Give the **same** small task (same prompt, same starting commit, on a separate branch) to a second agent: Antigravity (18+), OpenCode with a free model, or Claude Code or Codex if you pay for one (see [TOOLS.md](../../TOOLS.md); not required). Compare in `PROMPTS.md`: how many steps each took, whether each planned first, whether each ran the tests, how the diffs differed, and which one you'd trust with the next task. Keep the better branch, delete the other.
