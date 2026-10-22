# Reading List

> Optional reading, organized by week. Nothing here is required except the one item marked **Week 1 homework**; the week pages cover what you need.
> Each item is marked **5 min** (a quick read), **20 min** (a proper sitting) or **deep dive** (a paper, a long guide, a book or a course).

Everything listed was checked in the course's research reports ([September 2026](../research/landscape-report-2026-09.md), [October 2026](../research/landscape-update-2026-10.md)). Web pages move. If a link breaks, search for the title, and [tell us](../CONTRIBUTING.md) so we can fix it.

> [!TIP]
> Reading a research paper for the first time? Read the abstract (the summary at the top), then the conclusion, then the figures. Only then decide whether the middle is worth your time.

**Jump to:** [Week 1](#week-1--hello-vibe-coding) · [Week 2](#week-2--prompting--save-points) · [Week 3](#week-3--spec-first) · [Week 4](#week-4--read-it-debug-it-own-it) · [Week 5](#week-5--apis-secrets--servers) · [Week 6](#week-6--how-agents-work) · [Week 7](#week-7--security-data--review) · [Week 8](#week-8--ship-it) · [Books](#books) · [Free courses](#free-courses)

---

## Week 1 — Hello, Vibe Coding

Where the term came from, and why the field moved past it.

| Read | Why | Time |
|---|---|---|
| **Week 1 homework:** Anthropic Academy, [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) (or an equivalent your instructor approves) | A free course on working *with* AI well, whichever tool you use: when to hand a task over, how to describe it, how to judge the result, and how to use AI responsibly. No coding. You can start without an account; signing in saves your progress. You then write a short response on Canvas (🔴 AI off). | deep dive (the academy lists about 4 hours) |
| Andrej Karpathy's original "vibe coding" post, February 2025 ([on X](https://x.com/karpathy/status/1886192184808149383); reproduced in full in [Geng et al.](https://arxiv.org/pdf/2507.22614) if X asks you to log in) | The source. Notice he describes a style for throwaway weekend projects, not for software people rely on. | 5 min |
| Simon Willison, ["Not all AI-assisted programming is vibe coding (but vibe coding rocks)"](https://simonwillison.net/2025/Mar/19/vibe-coding/) | Separates vibe coding from responsible AI-assisted programming, with the golden rule: don't commit code you couldn't explain to someone else. | 20 min |
| Andrej Karpathy, ["Sequoia Ascent 2026"](https://karpathy.bearblog.dev/sequoia-ascent-2026/) | A year later, the same person on vibe coding versus *agentic engineering*, and why understanding can't be handed to the AI. | 20 min |
| METR, [early-2025 AI and experienced developers](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) and the [2026 update](https://metr.org/blog/2026-02-24-uplift-update/) | Developers felt faster with AI while measured slower; the follow-up explains why that is hard to measure. Read both together. Discussed in [case study 11](case-studies.md#11-metr-feeling-faster-vs-being-faster). | 20 min |
| Stack Overflow Developer Survey 2025, [AI section](https://survey.stackoverflow.co/2025/ai) | What professionals actually do: most say vibe coding isn't part of their work, and their top frustration is AI code that's "almost right". | 5 min |
| Stack Overflow Developer Survey 2026, [press release](https://stackoverflow.co/company/press/archive/stack-overflow-annual-developer-survey-ai-trust-conditional) and [AI section](https://survey.stackoverflow.co/2026/ai) | 30,903 developers: only 6.6% trust AI for important decisions, and about half trust it only when they can easily check the answer. | 5 min |
| CMU 15-113, ["Student Wisdom, Fall 2026"](https://www.cs.cmu.edu/~113/bestPracticesF26.html) | What students in a beginner AI-coding course said helped: show the AI a reference, let it ask you questions first, say what already works. The source of the course's three habits ([prompt patterns](prompt-patterns.md#the-three-habits)). An in-progress report, summarized by an AI from survey answers. | 20 min |

## Week 2 — Prompting & Save Points

How professionals structure prompts, and why small steps and commits matter more with AI, not less.

| Read | Why | Time |
|---|---|---|
| OpenAI, [Codex best practices](https://learn.chatgpt.com/guides/best-practices) | The source of the four-part prompt: goal, context, constraints, done when. | 20 min |
| Addy Osmani, ["My LLM coding workflow going into 2026"](https://addyosmani.com/blog/ai-coding-workflow/) | Plan first, small chunks, commits as save points, tests as feedback. A practitioner's version of the Safe Loop. | 20 min |
| Google Cloud, [DORA 2025 report announcement](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) | AI as an "amplifier" of a team's existing strengths and weaknesses. | 5 min |
| DORA, [AI Capabilities Model](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf) | The seven conditions under which AI helps teams; two of them are strong version control and small batches. | deep dive |
| Simon Willison, ["Not all AI-assisted programming is vibe coding"](https://simonwillison.net/2025/Mar/19/vibe-coding/) (listed under week 1) | **This week's assigned reading** in the homework. | 20 min |
| All Things Open, [the `Assisted-by:` commit line](https://allthingsopen.org/articles/open-source-ai-contributions-assisted-by-git-trailer-standard) | How open-source projects ask contributors to disclose AI help in commits, the convention behind the course's [`Assisted-by:` line](safe-loop.md#the-assisted-by-line). | 5 min |

## Week 3 — Spec First

Writing down what you want before you prompt.

| Read | Why | Time |
|---|---|---|
| GitHub, [Spec Kit announcement](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) | Spec-driven development in four gated stages: specify, plan, tasks, implement. | 20 min |
| AWS, [Introducing Kiro](https://kiro.dev/blog/introducing-kiro/) | A tool built to get vibe-coded prototypes to production through specs. | 5 min |
| Kiro, [feature specs documentation](https://kiro.dev/docs/specs/feature-specs/) | Acceptance criteria in EARS form (WHEN … THE SYSTEM SHALL …), the model for your `SPEC.md`. | 20 min |
| Addy Osmani, ["The 70% problem"](https://addyo.substack.com/p/the-70-problem-hard-truths-about) | Why non-engineers get most of the way fast and then stall on edge cases, and what helps. | 20 min |
| Harper Reed, ["My LLM codegen workflow atm"](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/) | Have an LLM interview you one question at a time to build a spec, then plan, then build step by step. | 20 min |
| University of Michigan EECS 498, [the Elephant-Goldfish Model](https://github.com/eecs498-aase/materials/blob/HEAD/egm/README.md) | Where the [Goldfish test](prompt-patterns.md#18-the-goldfish-test) comes from: if a fresh session can't work from your document alone, the document is leaning on context that disappears. | 20 min |
| Thorgeirsson et al., [writing skill predicts vibe-coding proficiency](https://arxiv.org/abs/2603.14133) (CHI 2026) | In a study of 100 students, both writing skill and computing knowledge predicted how well they vibe coded. Why the course treats your spec as a core skill. | deep dive |

## Week 4 — Read It, Debug It, Own It

What the research says about learning with AI, and why this week switches it off.

| Read | Why | Time |
|---|---|---|
| Anthropic, [study of AI assistance and coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills) (January 2026) | A randomized trial: people learning with AI scored lower on a follow-up quiz, especially on debugging. It also describes which ways of using AI didn't hurt learning. | 20 min |
| Prather et al., ["The Widening Gap"](https://dl.acm.org/doi/10.1145/3632620.3671116) (ICER 2024) | Students who struggled while using AI ended up thinking they'd done better than they had. | deep dive |
| Bastani et al., [randomized trial of AI tutors in high-school math](https://www.pnas.org/doi/10.1073/pnas.2422633122) (PNAS 2025) | Unrestricted AI raised practice scores and lowered exam scores; a hint-only tutor didn't. The reason for the course's [tutor mode](prompt-patterns.md#14-tutor-mode). | deep dive |
| Kazemitabaar et al., [how novices use AI code generators](https://arxiv.org/abs/2309.14049) (Koli Calling 2023) | One-prompt solutions gave the best first try and the worst results when learners later had to change the code. | deep dive |
| Bergh et al., ["Higher Performance, Lower Retention, and Reduced Ownership"](https://arxiv.org/abs/2609.21194) (2026 preprint) | Students using ChatGPT scored higher on the task, but two days later remembered less of what they'd done and claimed less of the code as their own. Why each week's exit ticket asks about *last* week's project. | deep dive |
| Sankaranarayanan, ["Mitigating 'Epistemic Debt'"](https://arxiv.org/abs/2602.20206) (2026 preprint) | With the AI switched off, 77% of learners who had used it freely failed a maintenance task, against 39% of those who had to explain the code first. The evidence for the [teach-back](safe-loop.md#teach-back). | deep dive |
| Ahmad, ["Comprehension Debt in GenAI-Assisted Software Engineering Projects"](https://arxiv.org/abs/2604.13277) (EASE 2026), and Mahmoud, [a review of comprehension debt](https://arxiv.org/abs/2609.29473) (2026 preprint) | *Comprehension debt* is the gap between what you know about your code and what you'd need to know to maintain it. The first paper shows how it builds up in student diaries; the second proposes paying it down by explaining, verifying, modifying and accounting for your code, much like the oral walkthroughs' four areas. | deep dive |
| Konstantinou et al., ["On the risk of coding before testing"](https://arxiv.org/abs/2607.05139) (2026 preprint) | Tests an AI writes after faulty code caught 14% of the faults; tests written independently caught 25%. The reason for [check first](safe-loop.md#check-first). | deep dive |
| Liu et al., [a randomized trial of a course-integrated AI tutor](https://edworkingpapers.com/ai26-1598) (EdWorkingPaper, 2026) | Across 2,379 students, access to an AI tutor *lowered* final grades, most for first-generation students. One reason the course keeps tutor mode narrow and hint-only. | 5 min (the abstract) |

## Week 5 — APIs, Secrets & Servers

| Read | Why | Time |
|---|---|---|
| The course's own [How the Web Works](web-basics.md) | Browsers, servers, APIs and the trust boundary, in plain English. | 20 min |
| GitGuardian, [State of Secrets Sprawl 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/) | How often keys leak on public GitHub, and why AI-assisted commits leak about twice as often. | 20 min |
| Simon Willison, ["Not all AI-assisted programming is vibe coding"](https://simonwillison.net/2025/Mar/19/vibe-coding/), again | Re-read his list of vibe-coding risks: leaked keys and runaway API bills come first. | 5 min |

## Week 6 — How Agents Work

| Read | Why | Time |
|---|---|---|
| Anthropic, [Claude Code best practices](https://code.claude.com/docs/en/best-practices) | The clearest vendor guide to working with an agent: give it a way to check its work, plan first, keep the rules file short, and after two failed corrections start fresh. Useful whichever agent you use. | 20 min |
| [agents.md](https://agents.md/) | The open format behind your `AGENTS.md`, used by tens of thousands of projects. | 5 min |
| Simon Willison, ["Designing agentic loops"](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/) | Why agents belong in a sandbox such as a Codespace, and why they should never hold real credentials. | 20 min |
| Simon Willison, [Agentic Engineering Patterns](https://simonwillison.net/guides/agentic-engineering-patterns/) | A growing guide to working with coding agents, including red/green testing. | deep dive |
| Anthropic, ["Effective context engineering for AI agents"](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) | Why long sessions degrade, and how agents manage what they "remember". | deep dive |
| Utah CS 3960, [calculator repository](https://github.com/utah-cs3960-sp26/calculator) | The university exercise that inspired Be the Agent: change code using only an agent's tools. | 5 min |
| Anthropic, [Claude Code memory docs](https://code.claude.com/docs/en/memory) | The vendor's own words: instruction files like `AGENTS.md` are "context, not enforced configuration". Why approvals, the Codespace and scoped tokens do the real enforcing. | 5 min |
| Qu et al., ["Overeager Coding Agents"](https://arxiv.org/pdf/2605.18583) (2026 preprint) | Removing a scope statement from the prompt made one agent overstep from 0% to 17% of runs, and agents that ask before continuing overstepped least. The evidence for your `AGENTS.md` Scope section, and for keeping approvals on. | deep dive |
| Simon Willison, ["Default hard budget caps"](https://simonwillison.net/2026/Oct/3/default-hard-budget-caps/) | Why every key that can spend money should have a cap that cuts off service, not a warning email. | 5 min |
| Pădurean et al., ["When AI Is Wrong on Purpose"](https://arxiv.org/pdf/2607.05068) (ICER 2026) | Bugs planted in AI code got students editing the code themselves, and they did better next time. The idea behind this week's planted bug in agent-written code. | deep dive |

## Week 7 — Security, Data & Review

| Read | Why | Time |
|---|---|---|
| UpGuard, ["Everything Everywhere: Systemic Data Exposure in Supabase Apps"](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps) | 16,326 Supabase databases with publicly readable tables, and why tables an agent creates start without row-level security. [Case study 12](case-studies.md#12-upguard-16326-exposed-supabase-databases). | 20 min |
| Supabase, [changelog: tables no longer exposed automatically](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically) | From 30 October 2026, new tables need explicit grants. Read it with the [troubleshooting steps](troubleshooting.md#permission-denied-for-a-new-table): grant and RLS go together. | 5 min |
| Semgrep, [a frontier model on the SusVibes benchmark](https://semgrep.dev/blog/2026/claude-opus-5-5-susvibes-benchmark) | Code that worked was also secure only about 55% of the time; access control was among the weakest areas. "Passes the tests" is not "is secure". | 20 min |
| Superblocks, [Lovable vulnerabilities](https://www.superblocks.com/blog/lovable-vulnerabilities) | 170 of 1,645 scanned apps had exposed databases. [Case study 1](case-studies.md#1-lovable-a-public-key-and-missing-rules). | 20 min |
| Wiz, [the Moltbook database exposure](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys) | How a security team found and reported an open database, step by step. [Case study 2](case-studies.md#2-moltbook-a-vibe-coded-social-network-leaks-its-database). | 20 min |
| Simon Willison, ["The lethal trifecta"](https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/) | Private data + untrusted content + a way out = an agent that can be tricked into leaking. | 20 min |
| Meta, ["Agents Rule of Two"](https://ai.meta.com/blog/practical-ai-agent-security/) | A practical rule for limiting what an agent can do in one session. | 20 min |
| Veracode, [2025 GenAI code security report](https://www.veracode.com/blog/genai-code-security-report/) and [Spring 2026 update](https://www.veracode.com/blog/spring-2026-genai-code-security/) | Around 45% of AI-generated code samples failed security tests, and newer models didn't improve. A vendor report, but a clear message. | 5 min |
| Cloud Security Alliance, [research note on slopsquatting](https://labs.cloudsecurityalliance.org/research/csa-research-note-slopsquatting-ai-supply-chain-20260419-csa/) | How invented package names become an attack. [Case study 10](case-studies.md#10-slopsquatting-the-packages-that-dont-exist). | 20 min |
| Pillar Security, [the rules-file backdoor](https://www.pillar.security/blog/new-vulnerability-in-github-copilot-and-cursor-how-hackers-can-weaponize-code-agents) | Invisible characters in shared rules files. Why you read every AGENTS.md before using it. | 20 min |

## Week 8 — Ship It

Where the field is going, and who owns what you made.

| Read | Why | Time |
|---|---|---|
| Simon Willison, ["Vibe engineering"](https://simonwillison.net/2025/Oct/7/vibe-engineering/) | The habits that make experienced developers effective with AI: tests, planning, version control, review. Compare it with your own list after eight weeks. | 20 min |
| METR, [2026 AI usage survey](https://metr.org/blog/2026-05-11-ai-usage-survey/) | How much faster people *say* AI makes them, and why METR treats those self-reports with caution. | 5 min |
| Hora et al., ["We Permit the Use of AI, but…"](https://arxiv.org/abs/2609.07542) (2026 preprint) | 281 open-source projects' AI policies: most allow AI with conditions, and about half require disclosure. What open source will expect of you after this course. | deep dive |
| US Copyright Office, [Copyright and AI, Part 2: Copyrightability](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf) | Purely AI-generated material can't be copyrighted in the US; your own contributions can. The reason for [safety contract rule 8](../setup/safety-contract.md). | deep dive |

---

## Books

| Book | Why | Time |
|---|---|---|
| Addy Osmani, [*Beyond Vibe Coding: From Coder to AI-Era Developer*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/) (O'Reilly, 2025) | Vibe coding plus engineering rigor: specs, context, agents and production readiness. Osmani uses "vibe coding" in the narrow sense, as this course does. A free, continuously updated web version is at [beyond.addy.ie](https://beyond.addy.ie/). | deep dive |
| Gene Kim and Steve Yegge, [*Vibe Coding: Building Production-Grade Software With GenAI, Chat, Agents, and Beyond*](https://itrevolution.com/product/vibe-coding-book/) (IT Revolution, 2025) | Small tasks, guardrails and testing, with warnings about agents that delete tests or "cheat". Note that Kim and Yegge use "vibe coding" to mean *disciplined* AI-assisted work, the opposite of Karpathy's original sense. | deep dive |

## Free courses

Good for extra practice or a different explanation. All can be started without paying; some charge for certificates or graded extras.

| Course | Why | Time |
|---|---|---|
| Anthropic Academy, [AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations) | **Week 1 homework** (see [week 1](#week-1--hello-vibe-coding) above). Its companion, [AI capabilities and limitations](https://academy.claude.com/courses/ai-capabilities-and-limitations), is a good optional follow-up on what language models can and can't do. | deep dive |
| DeepLearning.AI, [Build with Andrew](https://www.deeplearning.ai/courses/build-with-andrew) | A short course for people who have never coded. It works with any chatbot and is free to audit (the certificate costs extra). A good warm-up for week 1. | deep dive |
| Microsoft, [GitHub Copilot CLI for Beginners](https://developer.microsoft.com/blog/get-started-with-github-copilot-cli-a-free-hands-on-course/) | A hands-on course that runs in GitHub Codespaces on Copilot Free, the same setup as weeks 6–8. Good preparation for the agent weeks. | deep dive |
| Google and Kaggle, [5-Day AI Agents Intensive (vibe coding edition)](https://www.kaggle.com/learn-guide/5-day-agents-vibecoding) | Now a self-paced guide covering agents, tools, context, security and deployment. Uses free Kaggle and Google AI Studio accounts; AI Studio is 18+ ([TOOLS.md](../TOOLS.md)). Signing up asks for a phone number. | deep dive |
| Microsoft and GitHub, [GitHub Copilot app for Beginners](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/) (28 September 2026) | **Optional.** Seven hands-on chapters around one sample app, each ending with a "trust the evidence" check: read the diff, run the tests, preview the app. It assumes you know Git and npm, and it doesn't say whether Copilot Free is enough, so it suits weeks 6–8 or after the course. | deep dive |
| DeepLearning.AI, [AI Coding Workflows: From Cloud to Local](https://www.deeplearning.ai/courses/ai-coding-workflows-from-cloud-to-local) | **Stretch:** "what if my quota runs out?" It rebuilds the same app with cheaper models, then through OpenRouter, then on a model running on your own computer, which needs a capable machine. Intermediate level; the graded quiz needs a paid plan. | deep dive (about 1.5 hours of video) |

---

Want the evidence behind the course design? See [research/design-rationale.md](../research/design-rationale.md).
