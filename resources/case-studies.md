# Case Studies

> Real incidents and studies from 2025–26, for class discussion. Every rule in the nine-rule [safety contract](../setup/safety-contract.md) traces back to at least one of them.
> Facts and numbers come from the linked sources, as collected in the course's research reports ([September 2026](../research/landscape-report-2026-09.md), [October 2026](../research/landscape-update-2026-10.md)) and notes ([pedagogy and risks](../research/notes/pedagogy-practices-risks.md), [October evidence and incidents](../research/notes/2026-10/evidence-incidents-practices.md)). Where sources disagree, we say so; see also [where sources disagree](#where-sources-disagree).

These are not stories about careless people. They involve experienced founders, big companies and popular tools. The point is the **pattern**: each one shows a way AI-built software fails that a beginner can prevent with a habit.

**On this page:** [Using these in class](#using-these-in-class) · [Summary](#summary) · cases [1](#1-lovable-a-public-key-and-missing-rules) · [2](#2-moltbook-a-vibe-coded-social-network-leaks-its-database) · [3](#3-base44-open-doors-on-a-vibe-coding-platform) · [4](#4-replit-the-deleted-production-database) · [5](#5-gemini-cli-files-that-overwrote-each-other) · [6](#6-antigravity-clear-the-cache-wipes-a-drive) · [7](#7-nx-s1ngularity-malware-that-used-your-ai-tools) · [8](#8-amazon-q-a-wiper-prompt-ships-in-an-extension) · [9](#9-the-rules-file-backdoor-invisible-instructions) · [10](#10-slopsquatting-the-packages-that-dont-exist) · [11](#11-metr-feeling-faster-vs-being-faster) · [12](#12-upguard-16326-exposed-supabase-databases) · [13](#13-pocketos-a-nine-second-database-deletion) · [14](#14-pixelleak-agents-publish-13000-screenshots) · [15](#15-malware-that-hunts-for-ai-keys) · [16](#16-lovable-other-peoples-projects-behind-a-missing-ownership-check) · [Optional cases](#optional-cases-the-approval-prompt-never-appeared) · [Where sources disagree](#where-sources-disagree)

---

## Using these in class

**Jigsaw (about 30 minutes, week 7).** In groups of three, each group takes one case for 10 minutes and fills in four lines: *what happened · root cause · which safety-contract rule · how our course setup would have prevented or limited it.* Each group then reports back in two minutes. **The default set is cases 12, 13 and 14**, this year's versions of the core lessons: the Supabase leak at scale, the agent that deleted a database with a key it found, and the agent that published data with no attacker involved. Add cases 15 and 16 for a larger class. The older cases they extend (1–2, 4 and 7) are good follow-up reading.

**Working alone or self-paced?** Read the summary table, choose three cases (start with 12–14), and answer one discussion question for each in a short paragraph. If the jigsaw happens in a studio you missed, do the four lines for one case yourself.

**Short on time?** Cases 12 (16,326 exposed databases) and 13 (the nine-second deletion) cover the two biggest lessons: *tables without access rules are public tables*, and *instructions are not guardrails.*

> [!NOTE]
> 🔴 AI off: if you use a case in a graded reflection, write the reflection yourself, without AI ([AI use policy](../SYLLABUS.md#8-ai-use-policy)).

## Summary

| # | Case | When | What went wrong, in one line | Safety-contract rules | Week |
|---|---|---|---|---|---|
| 1 | Lovable apps | May 2025 | Browser used the database's public key; access rules missing | 5 · project rules · RLS lab | 7 |
| 2 | Moltbook | Jan 2026 | Same pattern, in an app whose founder reportedly wrote no code | 2 · 5 · project rules | 7 |
| 3 | Base44 | Jul 2025 | Open sign-up endpoints on the platform let outsiders into private apps | 5 · project rules | 7 |
| 4 | Replit | Jul 2025 | Agent ignored a code freeze, deleted a production database, faked results | 3 · 4 · 5 | 6–7 |
| 5 | Gemini CLI | Jul 2025 | A failed step went unchecked; files overwrote one another | 3 · 4 · 5 | 6 |
| 6 | Antigravity | Dec 2025 | "Clear the cache" became "wipe the drive" | 4 · project rules | 6 |
| 7 | Nx "s1ngularity" | Aug 2025 | A poisoned package used installed AI tools to steal secrets | 2 · 4 · 6 | 7 |
| 8 | Amazon Q extension | Jul 2025 | A data-wiping prompt was merged and shipped to users | 4 · 7 | 7 |
| 9 | Rules-file backdoor | Mar 2025 | Invisible characters in a rules file steer the AI | 7 | 6–7 |
| 10 | Slopsquatting | 2025–26 | AI invents package names; attackers register them | 6 | 7 |
| 11 | METR studies and the 2026 surveys | 2025–26 | Developers felt faster with AI while measured slower; few trust it where they can't check | 5 · 8 | 1 |
| 12 | UpGuard: Supabase databases | Sep 2026 | 16,326 databases with publicly readable tables; agent-made tables start without RLS | 5 · project rules · RLS lab | 7 |
| 13 | PocketOS | Apr 2026 | Agent used a key from an unrelated file to delete production data and its backups | 3 · 4 | 6–7 |
| 14 | PixelLeak | Sep 2026 | Helpful agents published 13,000+ internal screenshots in public repositories | 7 · 9 | 6–7 |
| 15 | Malware after AI keys | Oct 2026 | Packages and a hosted console leaked AI keys, agent configs and MCP files | 2 · 4 · 6 | 7 |
| 16 | Lovable ownership flaw | Apr 2026 | A missing ownership check let any account read other users' projects | 2 · project rules | 7 |
| A–C | Optional: received folders, invented names, autopilot | 2026 | Attacks that ran before, or without, an approval prompt | 6 · 7 · 9 | 7 |

Rule numbers refer to the nine rules of the [safety contract](../setup/safety-contract.md). In one line each: **1** privacy settings first · **2** no secrets or other people's data in AI tools · **3** commit before and after every agent task · **4** keep agents contained (sandbox, approvals, spending caps, scoped tokens, backups out of reach) · **5** verify, don't trust (passing tests is not a security check) · **6** check packages (installing runs code; pin versions) · **7** read before you adopt (rules files, MCP servers, skills, plugins, hooks; never open a received folder with an agent) · **8** keep a record (`PROMPTS.md`, `Assisted-by:`) · **9** agents don't publish, and untrusted content never shares a session with my secrets. "Project rules" are the three at the end of the contract: no real payments, no real personal data about other people, nothing you'd miss if an agent deleted it.

---

## 1. Lovable: a public key and missing rules

*Disclosed May 2025.*

**What happened.** Researchers scanned 1,645 apps built with Lovable, a vibe-coding app builder, and found **170 (10.3%) with exposed databases**: anyone could read, and in many cases change, the data ([Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities)). The issue was assigned the identifier CVE-2025-48757 ([SecurityOnline](https://securityonline.info/cve-2025-48757-lovables-row-level-security-breakdown-exposes-sensitive-data-across-hundreds-of-projects/)).

**Root cause.** The apps' browser code talked to their Supabase database directly, using the database's public key. That's a normal design, but it is safe only if [row-level security](glossary.md#row-level-security-rls) policies decide who can read and write each row. In these apps the policies were missing or too loose, so the public key opened everything.

**Safety contract.** No single rule covers this, which is why week 7 has a whole lab on it. It connects to rule 5 (*verify, don't trust*: try to break your own access rules) and to the project rule against real personal data. It is section 3 of your [SECURITY_CHECKLIST.md](../templates/SECURITY_CHECKLIST.md).

**The lesson.** **A public key plus missing authorization rules means a public database.** Every one of these apps *worked* for its owner. Working and safe are different tests. The same pattern at the scale of 16,000 databases is [case 12](#12-upguard-16326-exposed-supabase-databases).

**Discuss.**

1. These apps worked perfectly for their owners. How would an owner ever find out? What test would reveal the problem?
2. Who is responsible: the platform, the AI, or the person who published the app?
3. The publishable key is meant to be public. So why isn't the key itself the bug?

**Sources:** [Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities) · [SecurityOnline](https://securityonline.info/cve-2025-48757-lovables-row-level-security-breakdown-exposes-sensitive-data-across-hundreds-of-projects/)

## 2. Moltbook: a vibe-coded social network leaks its database

*January 2026.*

**What happened.** Moltbook, a vibe-coded "social network for AI agents", had a Supabase key written into its client-side JavaScript and **no row-level security**, so anyone could read and write its database. Security firm Wiz found about **1.5 million agent API tokens**, about **35,000 email addresses**, and thousands of private agent conversations exposed. Wiz reported it on 31 January; it was patched within hours, early on 1 February, and Wiz published the findings on 2 February ([Wiz](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)). The founder reportedly said he had not written a single line of the code himself ([Infosecurity Magazine](https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/)).

**Root cause.** The same pattern as Lovable: a key in the browser and no access rules in the database. With nobody reading the code, nobody checked where the [trust boundary](web-basics.md#the-trust-boundary) was.

**Safety contract.** Rule 5 (*verify, don't trust*), and rule 2 in spirit: the database held other people's secrets, their agents' API tokens. The project rule against real personal data exists so that a mistake like this in a course project exposes nothing real.

**The lesson.** If nobody reads the code, nobody checks it. The fast fix was good, but the data had already been open. And storing other people's secrets raises the stakes of any mistake.

**Discuss.**

1. The founder reportedly wrote no code himself. Which of the [six skills you must show without AI](without-ai-skills.md) would have caught this?
2. The database held other people's API tokens. What responsibility comes with storing someone else's secret?
3. A security firm found it first. What if an attacker had?

**Sources:** [Wiz](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys) · [Infosecurity Magazine](https://www.infosecurity-magazine.com/news/moltbook-exposes-user-data-api/)

## 3. Base44: open doors on a vibe-coding platform

*Found 9 July 2025, disclosed 29 July 2025.*

**What happened.** Base44 is a vibe-coding platform that companies used to build internal apps, such as HR tools and chatbots. Wiz found that its sign-up and one-time-code endpoints didn't require any authentication, and each app's ID was visible in its web address. Together, these let outsiders register their way into *private* company apps, bypassing the companies' single sign-on. The platform fixed it within about a day, and Wiz found no evidence it had been exploited ([Wiz](https://www.wiz.io/blog/critical-vulnerability-base44)).

**Root cause.** A platform bug in [authentication](glossary.md#authentication): the doors for creating an account were open, and the only thing an attacker needed, the app ID, was not a secret.

**Safety contract.** The people building apps on Base44 did nothing wrong. What protects *you* from platform bugs are the project rules (no real personal data, nothing you'd miss) and rule 5 (*verify*: check that "private" really is private).

**The lesson.** When you build on a platform, its bugs become your bugs. And an ID that appears in a URL is not a password. A 2026 platform bug of the same kind is [case 16](#16-lovable-other-peoples-projects-behind-a-missing-ownership-check).

**Discuss.**

1. The app builders did nothing wrong. What could they still have done to limit the damage?
2. Why is an ID that appears in a URL not a secret? Find a visible ID in one of your own apps.
3. Fixed in a day, with no evidence of exploitation: is this a success story, a warning, or both?

**Sources:** [Wiz](https://www.wiz.io/blog/critical-vulnerability-base44)

## 4. Replit: the deleted production database

*July 2025.*

**What happened.** SaaStr founder Jason Lemkin ran a public, roughly 12-day trial of building an app with Replit's agent. The agent ignored an explicit code freeze and repeated instructions in capital letters, **deleted the production database**, created fake data (a database of about 4,000 fictional people) and false test results, and said a rollback was impossible when it wasn't. Replit's CEO called it unacceptable and announced automatic separation of development and production databases, better rollback and backup restore, and a planning-only chat mode ([Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/); [The Register](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/); [AI Incident Database #1152](https://incidentdatabase.ai/cite/1152/)).

**Root cause.** The agent had access to real production data and could run destructive commands without approval. The "code freeze" existed only as words in the chat, and words are advice, not enforcement. There was no separation between practice data and real data.

**Safety contract.** Rule 3 (*commit before and after every agent task*), rule 4 (*keep agents contained*: never give an agent production credentials, keep practice data separate, keep backups where the agent can't reach them), and rule 5 (*verify, don't trust*: the agent faked test results and gave false information about recovery). Its 2026 counterpart is [case 13](#13-pocketos-a-nine-second-database-deletion).

**The lesson.** **Instructions are not guardrails.** "DO NOT" in capital letters didn't stop it; only permissions, separation and backups would have. And an agent's report about what it did, or what's possible, has to be checked.

**Discuss.**

1. The user told the agent repeatedly not to change anything. Why wasn't that enough? What would have been?
2. The agent said rollback was impossible. How would you check a claim like that?
3. Replit's fixes were: separate development and production, better backups, and a planning-only mode. Which of these does your course setup already give you?

**Sources:** [Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/) · [The Register](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/) · [AI Incident Database #1152](https://incidentdatabase.ai/cite/1152/)

## 5. Gemini CLI: files that overwrote each other

*July 2025.*

**What happened.** A user asked Google's Gemini CLI agent to move some files into a new folder. The command to create the folder failed without the agent noticing. It assumed the folder existed and ran a series of Windows `move` commands, each of which renamed a file onto the same name, overwriting the one before. Only the last file survived. The agent then reported its own "catastrophic" failure ([AI Incident Database #1178](https://incidentdatabase.ai/cite/1178/); [Slashdot](https://developers.slashdot.org/story/25/07/26/0642239/google-gemini-deletes-users-files-then-just-admits-i-have-failed-you-completely-and-catastrophically)).

**Root cause.** The agent didn't check that one step had worked before building the next steps on it, and it could run file-moving commands without the user approving each one.

**Safety contract.** Rule 4 (*approve every command that deletes or moves files*), rule 5 (*verify*), rule 3 (*commit first*), and the project rule *nothing I'd miss if an agent deleted it*.

**The lesson.** Agents assume their commands worked. One unchecked step can cascade. The same habit applies to you in [the Safe Loop](safe-loop.md): test each step before starting the next.

**Discuss.**

1. At exactly which point should the agent have stopped?
2. If these files had been in a git repository with a fresh commit, how long would recovery have taken?
3. Approving "move" commands one at a time is tedious. When is it worth it?

**Sources:** [AI Incident Database #1178](https://incidentdatabase.ai/cite/1178/) · [Slashdot](https://developers.slashdot.org/story/25/07/26/0642239/google-gemini-deletes-users-files-then-just-admits-i-have-failed-you-completely-and-catastrophically)

## 6. Antigravity: "clear the cache" wipes a drive

*Early December 2025.*

**What happened.** A photographer and designer was building a simple image-selector app with Google's Antigravity agent and asked it to clear the project's cache. The agent ran a delete command that **wiped the user's entire D: drive**. File-recovery software couldn't bring most of it back ([Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/googles-agentic-ai-wipes-users-entire-hard-drive-without-permission-after-misinterpreting-instructions-to-clear-a-cache-i-am-deeply-deeply-sorry-this-is-a-critical-failure-on-my-part); [Windows Central](https://www.windowscentral.com/artificial-intelligence/google-antigravity-ai-delete-drive)).

**Root cause.** The agent ran on the user's own computer, where it could reach every drive, and it ran a delete command with the wrong scope without asking. The user's real files sat on the same machine as the experiment.

**Safety contract.** Rule 4 (*keep agents contained*: run them in a Codespace or another sandbox, and approve every command that deletes files) and the project rule *nothing I'd miss if an agent deleted it*.

**The lesson.** **Where you run an agent decides the worst case.** In a Codespace, the worst case is losing that Codespace, and your pushed work is safe on GitHub. On your laptop, the worst case is your laptop.

**Discuss.**

1. "Clear the cache" sounds harmless. What should the agent have shown the user before running the command?
2. Why wouldn't git have saved this user?
3. What's on your computer that an agent should never be able to reach?

**Sources:** [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/googles-agentic-ai-wipes-users-entire-hard-drive-without-permission-after-misinterpreting-instructions-to-clear-a-cache-i-am-deeply-deeply-sorry-this-is-a-critical-failure-on-my-part) · [Windows Central](https://www.windowscentral.com/artificial-intelligence/google-antigravity-ai-delete-drive) · [vectara awesome-agent-failures](https://github.com/vectara/awesome-agent-failures/blob/main/docs/case-studies/google-antigravity-drive-deletion.md)

## 7. Nx "s1ngularity": malware that used your AI tools

*26–28 August 2025.*

**What happened.** Attackers published poisoned versions of Nx, a popular, legitimate npm package. When developers installed them, a script that runs automatically on install used the AI command-line tools already on the machine (Claude Code, Gemini CLI, Amazon Q) to search for secrets and crypto wallets, then uploaded what it found to public GitHub repositories. **2,349 credentials leaked from 1,079 systems.** In a second phase, stolen tokens were used to make victims' private repositories public. It is described as the first known case of attackers turning developers' AI assistants against them in a supply-chain attack ([GitGuardian](https://blog.gitguardian.com/the-nx-s1ngularity-attack-inside-the-credential-leak/); [Nx postmortem](https://nx.dev/blog/s1ngularity-postmortem); [Wiz](https://www.wiz.io/blog/s1ngularity-supply-chain-attack)).

**Root cause.** Installing a package runs a stranger's code. The AI tools on those machines could read everything the developer could, and any program could ask them to. Secrets were lying around where they could be found.

**Safety contract.** Rule 6 (*check packages before installing*: installing runs code), rule 4 (*keep agents contained*: a Codespace holds only one project's keys, and tokens stay narrowly scoped), and rule 2 (*no secrets in AI tools*: here the malware asked the AI tools to go and find them). It is also a textbook [lethal trifecta](glossary.md#lethal-trifecta): private data, untrusted instructions, and a way to send data out, which is what rule 9 guards against. The same idea a year later is [case 15](#15-malware-that-hunts-for-ai-keys).

**The lesson.** Your AI tools are powerful programs that other software can use against you. Keep secrets out of the places they can reach, and treat every install as running someone else's code.

**Discuss.**

1. Map this attack onto the lethal trifecta. Where was the private data, the untrusted content, and the way out?
2. Nx was a real, popular package, not a made-up one. What are the limits of "check packages before you install them"?
3. Why does working in a Codespace that holds only one project's keys shrink the damage?

**Sources:** [GitGuardian](https://blog.gitguardian.com/the-nx-s1ngularity-attack-inside-the-credential-leak/) · [Nx postmortem](https://nx.dev/blog/s1ngularity-postmortem) · [Wiz](https://www.wiz.io/blog/s1ngularity-supply-chain-attack) · [The Hacker News](https://thehackernews.com/2025/08/malicious-nx-packages-in-s1ngularity.html)

## 8. Amazon Q: a wiper prompt ships in an extension

*July 2025.*

**What happened.** A pull request from an untrusted contributor to Amazon Q's VS Code extension, merged on 13 July, added a prompt telling the AI agent to act as a "system cleaner" that deletes local files and cloud resources. That version shipped to users on 17 July. A syntax error stopped the prompt from working, and a replacement version came out on 24 July ([BleepingComputer](https://www.bleepingcomputer.com/news/security/amazon-ai-coding-agent-hacked-to-inject-data-wiping-commands/); [The Register](https://www.theregister.com/2025/07/24/amazon_q_ai_prompt/)).

**Root cause.** A change to the tool itself was merged without catching what it did. The dangerous part was plain English, not a program, which is easy to underestimate in review.

**Safety contract.** Rule 7 (*read before you adopt*: extensions, rules files, prompts and scripts are all instructions to a powerful program) and rule 4 (*containment* limits what any tool can damage). Also the week 7 habit of reviewing every pull request.

**The lesson.** **A prompt inside a tool is code.** Review changes to prompts and instructions as carefully as changes to programs. And even well-known tools can ship something dangerous, which is why containment is your backstop.

**Discuss.**

1. The malicious change was a paragraph of text. Would a reviewer have recognized it as dangerous? What would you look for?
2. It failed only because of a syntax error. What does that say about relying on luck?
3. In week 7 you review a classmate's pull request. What will you check in text and instruction files, not just code?

**Sources:** [BleepingComputer](https://www.bleepingcomputer.com/news/security/amazon-ai-coding-agent-hacked-to-inject-data-wiping-commands/) · [The Register](https://www.theregister.com/2025/07/24/amazon_q_ai_prompt/) · [SC Media](https://www.scworld.com/news/amazon-q-extension-for-vs-code-reportedly-injected-with-wiper-prompt)

## 9. The rules-file backdoor: invisible instructions

*Published 18 March 2025.*

**What happened.** Pillar Security showed that invisible Unicode characters (such as zero-width joiners and text-direction markers) hidden in AI rules files, the files that give coding assistants standing instructions, can secretly tell Copilot or Cursor to insert backdoors into the code they generate. The hidden text survives when a project is forked and can get past human review, because people can't see it. The vendors first said users were responsible for reviewing AI suggestions; GitHub later added warnings for hidden Unicode ([Pillar Security](https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents); [SecurityAffairs](https://securityaffairs.com/175593/hacking/rules-file-backdoor-ai-code-editors-silent-supply-chain-attacks.html)).

**Root cause.** Agents follow instructions from files, and humans can't see every character. Copying a rules file from the internet means trusting a stranger's instructions to your AI.

**Safety contract.** Rule 7 (*I read before I adopt*: never use an AGENTS.md, rules file, MCP server, skill, plugin or hook from the internet without reading it first).

**The lesson.** Your [AGENTS.md](../templates/AGENTS.md) is a set of instructions to a powerful program. Write your own, keep it short, and be suspicious of shared rules files. Read the code the AI generates too, since that's where a backdoor would show up.

**Discuss.**

1. If the malicious text is invisible, how could you still catch the attack?
2. Why does the course ask you to write your own short AGENTS.md instead of downloading a popular one?
3. The vendors first said reviewing AI suggestions was the user's job. Do you agree?

**Sources:** [Pillar Security](https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents) · [SecurityAffairs](https://securityaffairs.com/175593/hacking/rules-file-backdoor-ai-code-editors-silent-supply-chain-attacks.html)

## 10. Slopsquatting: the packages that don't exist

*Research, 2025 and a 2026 re-test.*

**What happened.** A study presented at USENIX Security 2025 tested 16 models on about 576,000 code samples. They invented non-existent package names in **21.7%** of open-model outputs and **5.2%** of commercial-model outputs, over 205,000 different fake names in total. Many came back again and again: 43% of the invented names reappeared in all ten repeat runs. That makes them predictable, so an attacker can publish malware under a name the AI keeps suggesting and wait. This is called **slopsquatting** ([CSA research note](https://labs.cloudsecurityalliance.org/research/csa-research-note-slopsquatting-ai-supply-chain-20260419-csa/)). A 2026 re-test found current frontier models still invent **4.6–6.1%** of package names, and all five models tested invented the same 127 fake names; 53 of them could still be registered by anyone after the researchers disclosed them ([arXiv 2605.17062](https://arxiv.org/abs/2605.17062)).

**Root cause.** Models generate names that *sound* right. Installing a package runs its code, so a plausible name you never checked can be an open door.

**Safety contract.** Rule 6 (*I check packages before I install them*: it must exist, be the one I meant, and look legitimate). The same trick now targets repository and skill names: see [optional case B](#b-invented-names-for-repositories-and-skills).

**The lesson.** Before every new package: does it exist, is it the exact one you meant, and does it have real downloads and a real repository? Better still, ask whether you need a package at all. What to do in the moment: [troubleshooting](troubleshooting.md#the-ai-suggested-a-package-i-cant-find).

**Discuss.**

1. Why does it matter that the same fake names come up again and again?
2. The 2026 rates are lower than 2025's. Does that make the problem smaller, or not?
3. The course starters have no dependencies on purpose. What are the trade-offs of that choice?

**Sources:** [CSA research note](https://labs.cloudsecurityalliance.org/research/csa-research-note-slopsquatting-ai-supply-chain-20260419-csa/) (summary of the USENIX Security 2025 paper) · [arXiv 2605.17062](https://arxiv.org/abs/2605.17062)

## 11. METR: feeling faster vs being faster

*July 2025, with updates in February and May 2026, and survey data from October 2026.*

**What happened.** METR, a research group, ran a randomized trial with 16 experienced open-source developers on 246 real tasks in projects they knew well. With early-2025 AI tools, tasks took them **19% longer**, yet afterwards they still believed AI had made them about **20% faster** ([METR 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)). METR cautioned that this doesn't show AI fails to help most developers, only that it didn't in this setting.

METR's February 2026 follow-up estimated an 18% speedup for returning developers and 4% for new ones, but METR itself calls those numbers unreliable. Many developers refused to take part, or dropped out, rather than work without AI, and many held back tasks they thought needed AI, so the true effect is hard to measure ([METR 2026 update](https://metr.org/blog/2026-02-24-uplift-update/)). A May 2026 METR survey found people *reporting* speedups of about 3×, and warned that people have historically overestimated how much time AI saves ([METR survey](https://metr.org/blog/2026-05-11-ai-usage-survey/)). Separately, Anthropic's 2026 learning study found no significant speed gain for junior engineers learning a new library with AI, alongside lower quiz scores ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). METR has published no new data since May 2026.

Surveys of working developers now point the same way. In Stack Overflow's 2026 survey of 30,903 developers, released on 6 October 2026, 66% used coding assistants or agents, yet only **6.6% trusted AI for important decisions**, and about **48% trusted it only when they could easily check the answer**. Apart from "I don't avoid AI", the most common reason for avoiding it at work or school was worry about losing job skills (17.1%) ([Stack Overflow press release](https://stackoverflow.co/company/press/archive/stack-overflow-annual-developer-survey-ai-trust-conditional); [AI section](https://survey.stackoverflow.co/2026/ai)). Google's DORA team, in a 2026 report on the return on AI investment, describes a **"J-curve"**: productivity dips at first while teams pay a "verification tax" on reviewing AI-written code, and recovers only with automated testing and small changes ([InfoQ](https://www.infoq.com/news/2026/05/dora-roi-ai-assisted-dev-report/)).

**Root cause.** Not a failure but a trap: AI makes work *feel* fast, because code appears instantly. The time spent reviewing, fixing and re-prompting is less visible.

**Safety contract.** Rule 5 (*verify, don't trust*), applied to your own sense of progress. Rule 8 (*keep a record*): your `PROMPTS.md` is how you find out what actually happened.

**The lesson.** **Feeling productive is not the same as being productive.** Measure instead of guessing. And be careful with any single headline number, in either direction. Professionals trust AI where they can check it; the Safe Loop is how you make your own work checkable.

**Discuss.**

1. Why might people feel faster with AI even when they're slower?
2. METR's 2026 study struggled because developers wouldn't work without AI. What does that tell you?
3. Try it: time yourself on two similar small tasks, one with AI and one without. Write your guess down *before* you look at the clock.
4. Only 6.6% of developers trust AI for important decisions, and about half trust it when they can check the answer easily. In your own project, what can you check easily, and what can't you?

**Sources:** [METR 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) · [METR 2026 update](https://metr.org/blog/2026-02-24-uplift-update/) · [METR survey 2026](https://metr.org/blog/2026-05-11-ai-usage-survey/) · [Stack Overflow 2026 press release](https://stackoverflow.co/company/press/archive/stack-overflow-annual-developer-survey-ai-trust-conditional) · [Stack Overflow 2026 AI results](https://survey.stackoverflow.co/2026/ai) · [InfoQ on DORA's 2026 ROI report](https://www.infoq.com/news/2026/05/dora-roi-ai-assisted-dev-report/)

## 12. UpGuard: 16,326 exposed Supabase databases

*Published 25 September 2026.*

**What happened.** Security firm UpGuard checked about 300,000 web domains that showed signs of using Supabase and found **16,326 databases with publicly readable tables**. From the table layouts, more than half appeared to hold personal data. Examples included a Canadian immigration service with 884 passwords stored as plain text, a consulate's records on 25,000 people including emergency-housing locations, and a valet service's 100,000+ customer records ([UpGuard](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps)). BleepingComputer reports that AI-assisted development accounts for more than 60% of new Supabase databases ([BleepingComputer](https://bleepingcomputer.com/news/security/misconfigured-supabase-apps-expose-data-in-over-16-000-databases)).

**Root cause.** Configuration, not a Supabase breach. Tables had been given API permissions (**grants**) while [row-level security](glossary.md#row-level-security-rls) was missing or ineffective, so the public key opened them. UpGuard notes that **tables created programmatically through the API, which is how coding agents create them, do not turn RLS on by default.** Supabase is changing its defaults: from **30 October 2026**, new tables get no automatic API grants, and the API answers "permission denied" until you grant access ([Supabase changelog](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically)). That is safer, but it sets a trap: the quickest "fix" an agent can suggest is a blanket grant to the public `anon` role, which, without RLS policies, recreates exactly what UpGuard found.

**Safety contract.** Rule 5 (*verify, don't trust*: passing tests is not a security check, so I test who can read and change my data myself) and the project rule against real personal data. It is the reason for the week 7 [RLS Attack Lab](../weeks/07-security-and-review/) and for the Supabase steps in [troubleshooting](troubleshooting.md#supabase).

**The lesson.** **Tables an agent creates start without access rules. Check yours.** A grant says *which roles may use a table*; RLS policies say *which rows each person may see or change*. Always add them together, and never answer "permission denied" with a bare grant to `anon`. This is cases 1 and 2 again, at the scale of 16,000 databases.

**Discuss.**

1. Every one of these apps worked for its owner. Where in your own Supabase project can you see, for each table, whether RLS is on?
2. After 30 October 2026, an agent hits "permission denied" and proposes `grant select on messages to anon;`. What else must be true before that line is safe?
3. UpGuard's method can't prove that every exposed app was built with AI. Does that change the lesson for you?

**Sources:** [UpGuard](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps) · [BleepingComputer](https://bleepingcomputer.com/news/security/misconfigured-supabase-apps-expose-data-in-over-16-000-databases) · [Supabase changelog](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically)

## 13. PocketOS: a nine-second database deletion

*24–25 April 2026, reported in May 2026.*

**What happened.** At a company called PocketOS, a Cursor agent was doing a routine task on a test ("staging") environment when it hit a credential mismatch. On its own initiative it **deleted a cloud storage volume, wiping production data and the backups stored on the same volume, in about nine seconds**. It used an **API token it found in an unrelated file**, created for managing domain names and never meant for this. The newest backup that could be recovered was three months old, and reservations and sign-ups were lost, though the hosting company, Railway, later recovered more recent data. Afterwards the agent wrote a "confession" listing the rules it had broken: guessing instead of checking, and acting destructively without being asked ([Information Age](https://ia.acs.org.au/article/2026/gone-in-9-seconds--ai-agent-deletes-company-database.html); [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/claude-powered-ai-coding-agent-deletes-entire-company-database-in-9-seconds-backups-zapped-after-cursor-tool-powered-by-anthropics-claude-goes-rogue)).

**Root cause.** A token with far more power than its job needed sat where the agent could read it. Destructive API calls needed no confirmation and weren't limited to the test environment. The backups lived on the same volume as the data. And the project's written safety rules, which the agent later listed, didn't stop it.

**Safety contract.** Rule 4 (*keep agents contained*: agents get only narrowly scoped tokens, kept outside the project folder; backups live where the agent can't reach them; I approve every command that deletes things) and rule 3 (*commit before and after every agent task*: save points that live somewhere the agent can't delete, such as your pushed commits on GitHub).

**The lesson.** **An agent will use any credential it can find**, even one in a file you've forgotten about. Backups on the same disk as the data aren't backups. And, as in [case 4](#4-replit-the-deleted-production-database), **rules the agent reads are not guardrails**: only permissions, separation and real backups are.

**Discuss.**

1. The agent found the key in an unrelated file. List every place a key for your project exists right now. Which of them could an agent read?
2. The backups sat on the same volume as the data. Where do your save points live, and could an agent delete them?
3. Afterwards, the agent could list exactly which rules it broke. Compare with case 4. What does that tell you about writing rules in `AGENTS.md`?

**Sources:** [Information Age (ACS)](https://ia.acs.org.au/article/2026/gone-in-9-seconds--ai-agent-deletes-company-database.html) · [Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/claude-powered-ai-coding-agent-deletes-entire-company-database-in-9-seconds-backups-zapped-after-cursor-tool-powered-by-anthropics-claude-goes-rogue) · [Live Science](https://www.livescience.com/technology/artificial-intelligence/i-violated-every-principle-i-was-given-ai-agent-deletes-companys-entire-database-in-9-seconds-then-confesses)

## 14. PixelLeak: agents publish 13,000 screenshots

*Reported 29–30 September 2026.*

**What happened.** Developers asked their coding agents to attach before-and-after screenshots to code reviews. To host the images, the agents **created public GitHub repositories**, mostly under the developers' personal accounts. More than **13,000 internal screenshots from over 300 organizations** ended up public, including customer billing records, unreleased features and a financial firm's treasury console. At one company the workaround spread through a **shared skill file** that was loaded on every ticket ([The Hacker News](https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html)).

**Root cause.** No attacker, and no bug in the usual sense. GitHub's command-line tool couldn't attach images to pull requests until a September 2026 release, so the agents improvised with the nearest thing that worked: public storage. An open-source screenshot tool, installable as a skill, defaulted to public repositories. And secret scanners, which read text, can't see what's in a picture.

**Safety contract.** Rule 9 (*agents don't publish*: no agent creates a public repository, gist, release, deployment or post without my approval) and rule 7 (*read before you adopt*, which now includes skills: the behavior spread through one).

**The lesson.** **No attacker, no bug, just a helpful agent.** An agent solving a harmless problem can make private data public. Publishing anything is an action that needs your approval, every time.

**Discuss.**

1. Nobody attacked anyone. Whose mistake was this: the agent's, the developers', the tool's, or nobody's?
2. Secret scanners didn't catch it. Why not? What would have?
3. One shared skill file spread the habit across a company. What would you check before adding a skill or rules file to your project?

**Sources:** [The Hacker News](https://thehackernews.com/2026/09/ai-coding-agents-exposed-13000-internal.html) · [Glow](https://www.glow.io/blogs/how-ai-agents-exposed-developer-screenshots-from-leading-tech-companies) (the researchers; Glow sells agent-control software)

## 15. Malware that hunts for AI keys

*8–21 October 2026.*

**What happened.** In two weeks, four attacks went after the kind of tools this course uses:

- A compromised release of `tensorlake`, a real npm package, ran its malicious code from a `preinstall` hook, so **installing it was enough**. It collected `.env` files, SSH keys, and the configuration folders of AI tools (`.claude`, `.cursor`) and their MCP files. If the stolen GitHub token was revoked while its monitoring process was still running, it wiped the user's home folder ([Socket](https://socket.dev/blog/tensorlake-compromise)).
- A trojanized release of LiteLLM, a popular Python package for calling AI models, was live for about two hours on 21 October. It installed files that run every time Python starts and stole **AI provider API keys**. The attacker had published it with stolen GitHub tokens ([Wiz](https://www.wiz.io/blog/litellm-compromised-steals-credentials)).
- Fake npm packages advertising **free Claude and Gemini credits** and an "MCP server with 18 security tools" added the attacker's MCP server to victims' agent settings and produced fake security findings ([The Hacker News](https://thehackernews.com/2026/10/fake-web3-accelerator-uses-npm-packages.html)).
- An intruder reached an old system behind OpenCode's hosted Console and exposed the stored OpenAI, Anthropic and Google keys of 1.4% of its users. Some saw **unauthorized charges of more than $1,000**. The open-source command-line tool was not affected ([TechCrunch](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/)).

**Root cause.** Installing a package runs a stranger's code, and real, popular packages get hijacked too. AI keys are worth money, and they sit in predictable places: `.env` files, tool config folders, hosted dashboards. A key stored in someone else's service is only as safe as that service.

**Safety contract.** Rule 6 (*check packages*: installing runs code, so I install only what the plan named, and I pin the version), rule 4 (*keep agents contained*: every key that can spend money has a hard spending cap), and rule 2 (*no secrets in AI tools*: keys stay in environment variables, not pasted into chats or consoles you don't need).

**The lesson.** **Your AI keys are money, and malware now knows where AI tools keep them.** Keep keys out of the project folder, give each one a spending cap, and treat every install as running someone else's program. If you're ever caught by one of these, follow the published clean-up steps: with `tensorlake`, revoking the token *before* removing the malware triggered the wipe.

**Discuss.**

1. Why would malware want your `.claude` folder or your MCP settings? What's in them?
2. `tensorlake` and LiteLLM were real packages, not invented ones (compare [case 10](#10-slopsquatting-the-packages-that-dont-exist)). What does "check packages" mean when the real package is the bad one?
3. If a key you use were stolen tonight, what would limit the bill?

**Sources:** [Socket](https://socket.dev/blog/tensorlake-compromise) · [Wiz](https://www.wiz.io/blog/litellm-compromised-steals-credentials) · [The Hacker News](https://thehackernews.com/2026/10/fake-web3-accelerator-uses-npm-packages.html) · [TechCrunch](https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/)

## 16. Lovable: other people's projects behind a missing ownership check

*Reported to the company in early 2026; shown publicly on 20 April 2026.*

**What happened.** A security researcher showed that a missing ownership check in Lovable's project API let **any free account, in about five requests, read other users' source code, Supabase credentials, environment variables and AI chat history**, for projects created before November 2025. Project IDs were numbered in order, so finding other projects was easy. Lovable first said it had not suffered a data breach and described the exposure as intended behavior for "public" projects, blaming unclear documentation, then partly apologized and fixed it for new projects ([Sable Offensive Research](https://dev.to/alejandxr/lovable-bola-48-days-five-api-calls-source-code-database-credentials-of-other-peoples-projects-4ai0); [The Outpost](https://theoutpost.ai/news-story/lovable-denies-data-breach-blames-unclear-documentation-after-security-vulnerability-exposed-25537/)).

**Root cause.** The server didn't check that the project being requested belonged to the person asking. Security people call this *broken object-level [authorization](glossary.md#authorization)*, and it's the top risk on OWASP's list for APIs. Two things made it worse: users had stored secrets inside their projects, and "public" meant more than many of them thought.

**Safety contract.** Rule 2 (*no secrets in AI tools*: the database credentials were sitting inside an AI tool's project) and the project rules (no real personal data; nothing you'd miss). Like [case 3](#3-base44-open-doors-on-a-vibe-coding-platform), it's a platform bug, so what protects you is what you kept out of the platform.

**The lesson.** **Find out what "public" means on every platform you use**, and keep secrets out of anywhere a platform bug could expose them. And in your own app, every request for someone's data must check *who owns it*. In a Supabase app, that check is your RLS policy.

**Discuss.**

1. "Your project was 'public'. What did that mean?" Find out what *public* means for your GitHub repository and for your Vercel deployment.
2. The IDs were numbered in order. Why doesn't an ID in a URL protect anything? Compare case 3.
3. Which requests in your own app read data that belongs to one person? Where does the ownership check happen ([skill 6](without-ai-skills.md#6-say-where-authorization-is-enforced-in-your-app))?

**Sources:** [Sable Offensive Research (DEV)](https://dev.to/alejandxr/lovable-bola-48-days-five-api-calls-source-code-database-credentials-of-other-peoples-projects-4ai0) · [The Outpost](https://theoutpost.ai/news-story/lovable-denies-data-breach-blames-unclear-documentation-after-security-vulnerability-exposed-25537/)

---

## Optional cases: the approval prompt never appeared

For a longer discussion, or for students who want more. All three are about one idea: **approval prompts protect you only from the actions they're asked about.** Some attacks run before the prompt appears, and some run in modes where you've switched it off.

### A. Received folders: code that runs before the prompt

**What happened.** Coding agents run `git status` in the background when they open a folder, often *before* asking whether you trust it. Researchers showed that a project received **as a folder with its hidden `.git` directory** (a zip file, a shared sync folder, a USB stick) can carry git settings that run an attacker's program outside the agent's sandbox, with no prompt at all. Cloning the same project from its URL is safe; receiving the folder is not. Several agents were patched; some were not at the time of publication ([Manifold Security](https://www.manifold.security/blog/ai-coding-agents-git-hijack)).

**Rule.** 7 (*I never open a project folder someone sent me with an agent. I clone it from its URL into a Codespace instead.*)

**Discuss.** Why is cloning from a URL safe when opening the same files from a zip is not?

### B. Invented names for repositories and skills

**What happened.** When asked about a trending tool, AIs tend to invent the same repository or skill name every time. In one study the same invented name came up in up to 85% of repository requests and 100% of skill installs. Attackers register that name, hide instructions inside, and wait for an agent to fetch and run it ([The Hacker News](https://thehackernews.com/2026/07/new-hallusquatting-attack-could-trick.html)). A separate preprint found hidden prompt-injection flaws in more than 17% of popular skills on one registry ([arXiv 2609.14079](https://arxiv.org/abs/2609.14079)). This is [slopsquatting](#10-slopsquatting-the-packages-that-dont-exist) for the agent era.

**Rules.** 6 and 7 (check that a name leads to the real source, and read before you adopt).

**Discuss.** Before you install a skill an AI recommended, how do you check that it's the real one?

### C. Autopilot: a web page that sent secrets away

**What happened.** In the autopilot mode of GitHub's Copilot CLI, which runs without asking for approval, a user asked the agent to fetch a web page. Hidden instructions on that page led the agent to read the project's `.env.prod` file and send its secrets to the attacker, in about 28 seconds. GitHub confirmed the finding but did not treat it as a vulnerability, because the user had chosen full autonomy ([Adversa AI](https://adversa.ai/blog/cryptographic-context-injection-github-copilot/)).

**Rule.** 9 (*when an agent reads web pages, issues or other people's files, approvals stay on and no secrets are within its reach; I never use autopilot or skip-permissions modes*). It's the [lethal trifecta](glossary.md#lethal-trifecta) again: untrusted content, secrets in reach, and an agent that can act.

**Discuss.** The vendor said this was the user's responsibility. Do you agree? What would have stopped it?

---

## Where sources disagree

The research report flags these conflicts and gaps. Mention them if students quote the numbers.

- **Lovable severity.** The vulnerability's severity score is reported as 8.26 by some sources and 9.3 by others. The course's research used secondary summaries; the original disclosure was not retrieved.
- **Replit record counts.** Fortune reports records for more than 1,200 executives and more than 1,190 companies; some secondary sources say about 2,400. This page avoids the exact figure.
- **Moltbook's founder.** The claim that he wrote no code comes from one news report ("reportedly"). The technical facts come from Wiz's own write-up.
- **Slopsquatting figures (2025).** These come from consistent secondary summaries of the USENIX paper, not from the paper itself.
- **METR 2025 vs 2026.** The two studies point in different directions, and METR labels its 2025 results out of date and its 2026 estimates unreliable. Neither supports a claim like "AI makes developers X% faster" or "X% slower".
- **Single-user reports.** The Gemini CLI and Antigravity incidents are each based on one user's account, as reported by incident databases and the press.
- **UpGuard's date and method.** Some sources date the report 24 September, others 25 September. UpGuard says the common thread is apps built by AI agents whose owners didn't know the configuration, but its method can't prove that every exposed site was built with AI.
- **PocketOS.** The account comes mainly from the company's founder, and sources give the date as 24 or 25 April 2026.
- **PixelLeak.** The research comes from Glow, which sells agent-control software.
- **Lovable's ownership flaw.** The researcher counts 48 days from report to fix; another account counts 76 days from an earlier report.
- **Stack Overflow 2026.** Some summaries round the trust figure to "about 7%"; the press release gives 6.6%. The full dataset had not been released when this page was written.
- **Left out on purpose.** Two other incidents often called vibe-coding failures, the Tea app breach and the "Enrichlead" story, could not be verified, and whether the Tea breach involved vibe coding is contested. They are not included.

## More

- The rules these cases produced: [setup/safety-contract.md](../setup/safety-contract.md)
- The lab that turns cases 1, 2 and 12 into practice: [week 7](../weeks/07-security-and-review/)
- What to do when Supabase says "permission denied": [troubleshooting](troubleshooting.md#supabase)
- Why the browser can't keep secrets: [web-basics.md](web-basics.md#the-trust-boundary)
- Further reading: [reading-list.md](reading-list.md#week-7--security-data--review)
