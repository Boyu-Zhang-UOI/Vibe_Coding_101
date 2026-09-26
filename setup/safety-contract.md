# Safety Contract

> Read this in week 0. Sign it (type your name at the bottom and commit it to your home-page repo, or submit it on the course site) before the first studio.

Every rule below exists because something went wrong for real people in 2025–26. The stories are in [resources/case-studies.md](../resources/case-studies.md).

## The eight rules

1. **Privacy settings first.** On every AI tool I use, I turn off "use my data to train models" where the option exists, and I use a temporary or incognito chat for anything sensitive. ([How](privacy-settings.md))
   *Why: most free tiers train on your conversations by default, and some let human reviewers read samples.*

2. **I never paste secrets or other people's data into an AI tool.** No API keys, passwords, tokens, `.env` files, or personal information about other people.
   *Why: pasted text can be stored, reviewed and used for training. AI-assisted commits leak secrets about twice as often as ordinary ones.*

3. **I commit before and after every agent task.**
   *Why: an agent's own "undo" is not a backup. Git is.*

4. **I keep agents contained.** I run agents in a Codespace (or another sandbox), approve every command that deletes or moves files, and never give an agent production passwords or keys. My practice data is separate from anything real.
   *Why: in July 2025 an AI agent deleted a company's production database during a code freeze. Other agents have wiped a user's files and an entire drive.*

5. **I verify, I don't trust.** I check an AI's claims against real output: the running app, the test results, the diff.
   *Why: agents have reported that tests passed when they had not, and have invented data to cover mistakes.*

6. **I check packages before I install them.** Every new package must exist, be the one I meant, and look legitimate (real downloads, real repository).
   *Why: AI models invent plausible package names, and attackers register those names with malware ("slopsquatting").*

7. **I read before I adopt.** I never use an AGENTS.md file, rules file, MCP server or script from the internet without reading it first.
   *Why: rules files can hide instructions in invisible characters, and MCP servers can run any code on your machine.*

8. **I keep a record of what I wrote myself.** My PROMPTS.md log shows how I used AI and what I decided or wrote.
   *Why: it is how you show your process, and purely AI-generated work may not be protected by copyright.*

## And three project rules

- **No real payments.** Free hosting tiers forbid commercial use, and payment code is high-stakes.
- **No real personal data about other people.** Use made-up data.
- **Nothing I'd miss if an agent deleted it.** Keep real documents out of project folders.

## Signature

I have read these rules and will follow them in this course. If I'm unsure whether something is safe, I will ask before I do it.

Name: ______________________   Date: ______________
