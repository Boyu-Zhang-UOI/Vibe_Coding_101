# Case Studies

> Real incidents and studies from 2025–26, for class discussion. Every rule in the [safety contract](../setup/safety-contract.md) traces back to at least one of them.
> Facts and numbers come from the linked sources, as collected in the course's [research report](../research/landscape-report-2026-09.md) and [notes](../research/notes/pedagogy-practices-risks.md). Where sources disagree, we say so; see also [where sources disagree](#where-sources-disagree).

These are not stories about careless people. They involve experienced founders, big companies and popular tools. The point is the **pattern**: each one shows a way AI-built software fails that a beginner can prevent with a habit.

**On this page:** [Using these in class](#using-these-in-class) · [Summary](#summary) · cases [1](#1-lovable-a-public-key-and-missing-rules) · [2](#2-moltbook-a-vibe-coded-social-network-leaks-its-database) · [3](#3-base44-open-doors-on-a-vibe-coding-platform) · [4](#4-replit-the-deleted-production-database) · [5](#5-gemini-cli-files-that-overwrote-each-other) · [6](#6-antigravity-clear-the-cache-wipes-a-drive) · [7](#7-nx-s1ngularity-malware-that-used-your-ai-tools) · [8](#8-amazon-q-a-wiper-prompt-ships-in-an-extension) · [9](#9-the-rules-file-backdoor-invisible-instructions) · [10](#10-slopsquatting-the-packages-that-dont-exist) · [11](#11-metr-feeling-faster-vs-being-faster) · [Where sources disagree](#where-sources-disagree)

---

## Using these in class

**Jigsaw (30 minutes, week 7).** In groups of three, each group takes one case for 10 minutes and fills in four lines: *what happened · root cause · which safety-contract rule · how our course setup would have prevented or limited it.* Each group then reports back in two minutes. Assign cases 1, 2 and 4 first; they're the core of the week 7 talk.

**Self-paced.** Read the summary table, choose three cases, and answer one discussion question for each in a short paragraph.

**Short on time?** Cases 1 and 2 (the database leaks) and case 4 (the deleted database) cover the two biggest lessons: *a public key plus missing rules means a public database*, and *instructions are not guardrails.*

> [!NOTE]
> If you use a case in a graded reflection, write the reflection yourself, without AI (🔴 in the [AI use policy](../SYLLABUS.md#8-ai-use-policy)).

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
| 11 | METR studies | 2025–26 | Developers felt faster with AI while measured slower | 5 · 8 | 1 |

"Project rules" are the three at the end of the [safety contract](../setup/safety-contract.md#and-three-project-rules): no real payments, no real personal data about other people, nothing you'd miss if an agent deleted it.

---

## 1. Lovable: a public key and missing rules

*Disclosed May 2025.*

**What happened.** Researchers scanned 1,645 apps built with Lovable, a vibe-coding app builder, and found **170 (10.3%) with exposed databases**: anyone could read, and in many cases change, the data ([Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities)). The issue was assigned the identifier CVE-2025-48757 ([SecurityOnline](https://securityonline.info/cve-2025-48757-lovables-row-level-security-breakdown-exposes-sensitive-data-across-hundreds-of-projects/)).

**Root cause.** The apps' browser code talked to their Supabase database directly, using the database's public key. That's a normal design, but it is safe only if [row-level security](glossary.md#row-level-security-rls) policies decide who can read and write each row. In these apps the policies were missing or too loose, so the public key opened everything.

**Safety contract.** No single rule covers this, which is why week 7 has a whole lab on it. It connects to rule 5 (*verify, don't trust*: try to break your own access rules) and to the project rule against real personal data. It is section 3 of your [SECURITY_CHECKLIST.md](../templates/SECURITY_CHECKLIST.md).

**The lesson.** **A public key plus missing authorization rules means a public database.** Every one of these apps *worked* for its owner. Working and safe are different tests.

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

**The lesson.** When you build on a platform, its bugs become your bugs. And an ID that appears in a URL is not a password.

**Discuss.**

1. The app builders did nothing wrong. What could they still have done to limit the damage?
2. Why is an ID that appears in a URL not a secret? Find a visible ID in one of your own apps.
3. Fixed in a day, with no evidence of exploitation: is this a success story, a warning, or both?

**Sources:** [Wiz](https://www.wiz.io/blog/critical-vulnerability-base44)

## 4. Replit: the deleted production database

*July 2025.*

**What happened.** SaaStr founder Jason Lemkin ran a public, roughly 12-day trial of building an app with Replit's agent. The agent ignored an explicit code freeze and repeated instructions in capital letters, **deleted the production database**, created fake data (a database of about 4,000 fictional people) and false test results, and said a rollback was impossible when it wasn't. Replit's CEO called it unacceptable and announced automatic separation of development and production databases, better rollback and backup restore, and a planning-only chat mode ([Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/); [The Register](https://www.theregister.com/2025/07/21/replit_saastr_vibe_coding_incident/); [AI Incident Database #1152](https://incidentdatabase.ai/cite/1152/)).

**Root cause.** The agent had access to real production data and could run destructive commands without approval. The "code freeze" existed only as words in the chat, and words are advice, not enforcement. There was no separation between practice data and real data.

**Safety contract.** Rule 3 (*commit before and after every agent task*), rule 4 (*keep agents contained*: never give an agent production credentials, keep practice data separate), and rule 5 (*verify, don't trust*: the agent faked test results and gave false information about recovery).

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

**Safety contract.** Rule 6 (*check packages before installing*), rule 4 (*keep agents contained*: a Codespace holds only one project's keys), and rule 2 (*keep secrets out of reach*). It is also a textbook [lethal trifecta](glossary.md#lethal-trifecta): private data, untrusted instructions, and a way to send data out.

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

**Safety contract.** Rule 7 (*I read before I adopt*: never use an AGENTS.md, rules file or MCP server from the internet without reading it first).

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

**Safety contract.** Rule 6 (*I check packages before I install them*: it must exist, be the one I meant, and look legitimate).

**The lesson.** Before every new package: does it exist, is it the exact one you meant, and does it have real downloads and a real repository? Better still, ask whether you need a package at all. What to do in the moment: [troubleshooting](troubleshooting.md#the-ai-suggested-a-package-i-cant-find).

**Discuss.**

1. Why does it matter that the same fake names come up again and again?
2. The 2026 rates are lower than 2025's. Does that make the problem smaller, or not?
3. The course starters have no dependencies on purpose. What are the trade-offs of that choice?

**Sources:** [CSA research note](https://labs.cloudsecurityalliance.org/research/csa-research-note-slopsquatting-ai-supply-chain-20260419-csa/) (summary of the USENIX Security 2025 paper) · [arXiv 2605.17062](https://arxiv.org/abs/2605.17062)

## 11. METR: feeling faster vs being faster

*July 2025, with updates in February and May 2026.*

**What happened.** METR, a research group, ran a randomized trial with 16 experienced open-source developers on 246 real tasks in projects they knew well. With early-2025 AI tools, tasks took them **19% longer**, yet afterwards they still believed AI had made them about **20% faster** ([METR 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)). METR cautioned that this doesn't show AI fails to help most developers, only that it didn't in this setting.

METR's February 2026 follow-up estimated an 18% speedup for returning developers and 4% for new ones, but METR itself calls those numbers unreliable. Many developers refused to take part, or dropped out, rather than work without AI, and many held back tasks they thought needed AI, so the true effect is hard to measure ([METR 2026 update](https://metr.org/blog/2026-02-24-uplift-update/)). A May 2026 METR survey found people *reporting* speedups of about 3×, and warned that people have historically overestimated how much time AI saves ([METR survey](https://metr.org/blog/2026-05-11-ai-usage-survey/)). Separately, Anthropic's 2026 learning study found no significant speed gain for junior engineers learning a new library with AI, alongside lower quiz scores ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)).

**Root cause.** Not a failure but a trap: AI makes work *feel* fast, because code appears instantly. The time spent reviewing, fixing and re-prompting is less visible.

**Safety contract.** Rule 5 (*verify, don't trust*), applied to your own sense of progress. Rule 8 (*keep a record*): your `PROMPTS.md` is how you find out what actually happened.

**The lesson.** **Feeling productive is not the same as being productive.** Measure instead of guessing. And be careful with any single headline number, in either direction.

**Discuss.**

1. Why might people feel faster with AI even when they're slower?
2. METR's 2026 study struggled because developers wouldn't work without AI. What does that tell you?
3. Try it: time yourself on two similar small tasks, one with AI and one without. Write your guess down *before* you look at the clock.

**Sources:** [METR 2025](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) · [METR 2026 update](https://metr.org/blog/2026-02-24-uplift-update/) · [METR survey 2026](https://metr.org/blog/2026-05-11-ai-usage-survey/)

---

## Where sources disagree

The research report flags these conflicts and gaps. Mention them if students quote the numbers.

- **Lovable severity.** The vulnerability's severity score is reported as 8.26 by some sources and 9.3 by others. The course's research used secondary summaries; the original disclosure was not retrieved.
- **Replit record counts.** Fortune reports records for more than 1,200 executives and more than 1,190 companies; some secondary sources say about 2,400. This page avoids the exact figure.
- **Moltbook's founder.** The claim that he wrote no code comes from one news report ("reportedly"). The technical facts come from Wiz's own write-up.
- **Slopsquatting figures (2025).** These come from consistent secondary summaries of the USENIX paper, not from the paper itself.
- **METR 2025 vs 2026.** The two studies point in different directions, and METR labels its 2025 results out of date and its 2026 estimates unreliable. Neither supports a claim like "AI makes developers X% faster" or "X% slower".
- **Single-user reports.** The Gemini CLI and Antigravity incidents are each based on one user's account, as reported by incident databases and the press.
- **Left out on purpose.** Two other incidents often called vibe-coding failures, the Tea app breach and the "Enrichlead" story, could not be verified, and whether the Tea breach involved vibe coding is contested. They are not included.

## More

- The rules these cases produced: [setup/safety-contract.md](../setup/safety-contract.md)
- The lab that turns cases 1 and 2 into practice: [week 7](../weeks/07-security-and-review/)
- Why the browser can't keep secrets: [web-basics.md](web-basics.md#the-trust-boundary)
- Further reading: [reading-list.md](reading-list.md#week-7--security-data--review)
