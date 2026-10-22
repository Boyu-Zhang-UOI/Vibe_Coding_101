# Safety Contract

> Skim it before Studio 1. Sign it on Canvas, the course's learning management system, during week 1. Don't commit it to a repository: your signed contract is personal and stays private.

You don't need to understand every word yet. Each rule has a one-line version in plain English and the week where the course teaches it. You're agreeing to follow each rule from the week it's taught, and to ask whenever you're unsure. New terms are explained in the [glossary](../resources/glossary.md).

Every rule exists because something went wrong for real people in 2025–26. The stories are in [resources/case-studies.md](../resources/case-studies.md).

**How the course protects you.** You don't carry these rules alone. The course sets up the rails: you run code and agents in a Codespace (a sandbox in the cloud), not on your own computer; the starters keep secret keys out of the browser and include a secret scanner; labs use made-up data; and your instructor checks your setup in the security weeks. If you break a rule by accident, such as pasting a key into a chat, tell your instructor straight away. The fix is usually quick, and reporting it early is always the right call.

## The nine rules

### 1. Privacy settings first

**In plain words:** switch off "train on my chats" before you type anything. *Taught in week 0 (setup) and week 1.*

On every AI tool I use, I turn off "use my data to train models" where the option exists, and I use a temporary or incognito chat for anything sensitive. ([How](privacy-settings.md))

*Why: most free tiers train on your conversations by default, and some let human reviewers read samples.*

### 2. I never paste secrets or other people's data into an AI tool

**In plain words:** keys and passwords never go in a chat, and neither does anyone else's personal information. *Taught in week 1; keys in week 5.*

No API keys, passwords, tokens, `.env` files, or personal information about other people.

*Why: pasted text can be stored, reviewed and used for training. AI-assisted commits leak secrets about twice as often as ordinary ones.*

### 3. I commit before and after every agent task

**In plain words:** make a save point before you let an AI change your project, and another one after. *Taught in week 2 (save points); used with agents from week 6.*

*Why: an agent's own "undo" is not a backup. Git is.*

### 4. I keep agents contained

**In plain words:** agents work in a sandbox, with the smallest keys possible; they can't spend unlimited money or reach your backups. *Taught in week 5 (keys) and week 6 (agents).*

I run agents in a Codespace (or another sandbox), approve every command that deletes or moves files, and never give an agent production passwords or keys. My practice data is separate from anything real. Every key that can spend money has a hard spending cap. Agents get only narrowly scoped tokens, kept outside the project folder. Backups live where the agent can't reach them.

- A **hard spending cap** cuts the service off when the limit is reached; a warning email is not a cap. On the course's free tiers, the simplest cap is having no payment method on the account.
- A **narrowly scoped token** is a key that can do only the one job it was made for, in one project.

*Why: in July 2025 an AI agent deleted a company's production database during a code freeze. In April 2026 another agent deleted a production storage volume, and the backups stored on it, in about nine seconds, using a token it found in an unrelated file ([Information Age](https://ia.acs.org.au/article/2026/gone-in-9-seconds--ai-agent-deletes-company-database.html)). Stolen AI keys have run up charges of more than $1,000 ([TechCrunch](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/)).*

### 5. I verify, I don't trust

**In plain words:** check what the AI says against what actually happens, and test your app's security yourself. *Taught in weeks 2 and 4; security testing in week 7 (RLS Attack Lab).*

I check an AI's claims against real output: the running app, the test results, the diff. Passing tests is not a security check. I test who can read and change my data myself.

*Why: agents have reported that tests passed when they had not, and have invented data to cover mistakes. In a 2026 benchmark, AI code that worked was also secure only 54.8% of the time ([Semgrep](https://semgrep.dev/blog/2026/claude-opus-5-5-susvibes-benchmark)), and 91% of 200 audited AI-built apps had at least one vulnerability ([Deng et al.](https://arxiv.org/abs/2606.23130)).*

### 6. I check packages before I install them

**In plain words:** installing a package runs someone else's code, so install only what you planned, check it first, and fix its version. *Taught in week 5 (npm); checked again in week 7.*

Every new package must exist, be the one I meant, and look legitimate (real downloads, real repository). Installing runs code. Real, popular packages get hijacked too, so I install only what the plan named, and I pin the version.

- To **pin the version** means to install one exact version (for example `npm install some-package@1.2.3`), so a newer, possibly hijacked release can't slip in.

*Why: AI models invent plausible package names, and attackers register those names with malware ("slopsquatting"). In October 2026 a hijacked release of a real package ran its malware the moment it was installed ([Socket](https://socket.dev/blog/tensorlake-compromise)), and a trojanized release of a popular AI library stole AI keys ([Wiz](https://www.wiz.io/blog/litellm-compromised-steals-credentials)).*

### 7. I read before I adopt

**In plain words:** instruction files, add-ons and project folders from other people can hide instructions or code, so read them first, and get projects from their web address. *Taught in week 6.*

I never use an AGENTS.md file, rules file, skill, plugin, hook, MCP server or script from the internet without reading it first. I never open a project folder someone sent me with an agent. I clone it from its URL into a Codespace instead.

*Why: rules files can hide instructions in invisible characters, and MCP servers can run any code on your machine. A project folder received as a zip or a shared folder can carry git settings that run an attacker's code before any approval prompt appears ([Manifold Security](https://www.manifold.security/blog/ai-coding-agents-git-hijack)). Attackers register the skill and repository names that AIs tend to invent ([The Hacker News](https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html)), and one study found hidden prompt-injection flaws in more than 17% of popular skills on one registry ([arXiv 2609.14079](https://arxiv.org/abs/2609.14079)).*

### 8. I keep a record of what I wrote myself

**In plain words:** log how you used AI in PROMPTS.md, and label commits the AI helped with. *Taught in week 1 (PROMPTS.md) and week 2 (the `Assisted-by:` line); the line is required from week 6.*

My PROMPTS.md log shows how I used AI and what I decided or wrote. AI-assisted commits carry an `Assisted-by:` line naming the tool (see [the template](../templates/PROMPTS.md)).

*Why: it is how you show your process, and purely AI-generated work may not be protected by copyright. Nearly half of the open-source projects with an AI policy (48.8% of 281) require contributors to disclose AI help ([Hora et al.](https://arxiv.org/abs/2609.07542)).*

### 9. Agents don't publish, and untrusted content never shares a session with my secrets

**In plain words:** an agent never makes anything public on its own, and an agent that reads text from strangers never has your keys within reach. *Taught in week 6 (agents) and week 7 (prompt injection).*

No agent creates a public repository, gist, release, deployment or post without my approval. When an agent reads web pages, issues or other people's files, approvals stay on and no secrets are within its reach. I never use autopilot or skip-permissions modes.

- **Untrusted content** is any text you didn't write: web pages, GitHub issues and comments, other people's files. It can contain hidden instructions for the agent (a **prompt injection**).
- **Autopilot or skip-permissions modes** are settings that let an agent run commands or publish without asking you first.

*Why: agents asked to attach screenshots to code reviews created public repositories to host them, exposing more than 13,000 internal screenshots from over 300 organizations, with no attacker involved ([The Hacker News](https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html)). In autopilot mode, a hidden instruction on a web page led an agent to send a project's secrets to an attacker in about 28 seconds, and the vendor said the user was responsible because they had chosen full autonomy ([Adversa AI](https://adversa.ai/blog/cryptographic-context-injection-github-copilot/)).*

## And three project rules

- **No real payments.** Free hosting tiers forbid commercial use, and payment code is high-stakes.
- **No real personal data about other people.** Use made-up data.
- **Nothing I'd miss if an agent deleted it.** Keep real documents out of project folders.

## Signature

Sign on Canvas during week 1: open the safety contract assignment, and type the statement below with your name and the date.

> I have read these rules and will follow them in this course. If I'm unsure whether something is safe, I will ask before I do it.

Back to [Week 0 pre-work](README.md#during-week-1)
