# Reading List

> Optional reading, organized by week. Nothing here is required for the course; the week pages cover what you need.
> Each item is marked **5 min** (a quick read), **20 min** (a proper sitting) or **deep dive** (a paper, a long guide, a book or a course).

Everything listed was checked in the course's [research report](../research/landscape-report-2026-09.md) (September 2026). Web pages move. If a link breaks, search for the title, and [tell us](../CONTRIBUTING.md) so we can fix it.

> [!TIP]
> Reading a research paper for the first time? Read the abstract (the summary at the top), then the conclusion, then the figures. Only then decide whether the middle is worth your time.

**Jump to:** [Week 1](#week-1--hello-vibe-coding) · [Week 2](#week-2--prompting--save-points) · [Week 3](#week-3--spec-first) · [Week 4](#week-4--read-it-debug-it-own-it) · [Week 5](#week-5--apis-secrets--servers) · [Week 6](#week-6--how-agents-work) · [Week 7](#week-7--security-data--review) · [Week 8](#week-8--ship-it) · [Books](#books) · [Free courses](#free-courses)

---

## Week 1 — Hello, Vibe Coding

Where the term came from, and why the field moved past it.

| Read | Why | Time |
|---|---|---|
| Andrej Karpathy's original "vibe coding" post, February 2025 ([on X](https://x.com/karpathy/status/1886192184808149383); reproduced in full in [Geng et al.](https://arxiv.org/pdf/2507.22614) if X asks you to log in) | The source. Notice he describes a style for throwaway weekend projects, not for software people rely on. | 5 min |
| Simon Willison, ["Not all AI-assisted programming is vibe coding (but vibe coding rocks)"](https://simonwillison.net/2025/Mar/19/vibe-coding/) | Separates vibe coding from responsible AI-assisted programming, with the golden rule: don't commit code you couldn't explain to someone else. | 20 min |
| Andrej Karpathy, ["Sequoia Ascent 2026"](https://karpathy.bearblog.dev/sequoia-ascent-2026/) | A year later, the same person on vibe coding versus *agentic engineering*, and why understanding can't be handed to the AI. | 20 min |
| METR, [early-2025 AI and experienced developers](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/) and the [2026 update](https://metr.org/blog/2026-02-24-uplift-update/) | Developers felt faster with AI while measured slower; the follow-up explains why that is hard to measure. Read both together. Discussed in [case study 11](case-studies.md#11-metr-feeling-faster-vs-being-faster). | 20 min |
| Stack Overflow Developer Survey 2025, [AI section](https://survey.stackoverflow.co/2025/ai) | What professionals actually do: most say vibe coding isn't part of their work, and their top frustration is AI code that's "almost right". | 5 min |

## Week 2 — Prompting & Save Points

How professionals structure prompts, and why small steps and commits matter more with AI, not less.

| Read | Why | Time |
|---|---|---|
| OpenAI, [Codex best practices](https://learn.chatgpt.com/guides/best-practices) | The source of the four-part prompt: goal, context, constraints, done when. | 20 min |
| Addy Osmani, ["My LLM coding workflow going into 2026"](https://addyosmani.com/blog/ai-coding-workflow/) | Plan first, small chunks, commits as save points, tests as feedback. A practitioner's version of the Safe Loop. | 20 min |
| Google Cloud, [DORA 2025 report announcement](https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report) | AI as an "amplifier" of a team's existing strengths and weaknesses. | 5 min |
| DORA, [AI Capabilities Model](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf) | The seven conditions under which AI helps teams; two of them are strong version control and small batches. | deep dive |

## Week 3 — Spec First

Writing down what you want before you prompt.

| Read | Why | Time |
|---|---|---|
| GitHub, [Spec Kit announcement](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/) | Spec-driven development in four gated stages: specify, plan, tasks, implement. | 20 min |
| AWS, [Introducing Kiro](https://kiro.dev/blog/introducing-kiro/) | A tool built to get vibe-coded prototypes to production through specs. | 5 min |
| Kiro, [feature specs documentation](https://kiro.dev/docs/specs/feature-specs/) | Acceptance criteria in EARS form (WHEN … THE SYSTEM SHALL …), the model for your `SPEC.md`. | 20 min |
| Addy Osmani, ["The 70% problem"](https://addyo.substack.com/p/the-70-problem-hard-truths-about) | Why non-engineers get most of the way fast and then stall on edge cases, and what helps. | 20 min |
| Harper Reed, ["My LLM codegen workflow atm"](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/) | Have an LLM interview you one question at a time to build a spec, then plan, then build step by step. | 20 min |

## Week 4 — Read It, Debug It, Own It

What the research says about learning with AI, and why this week switches it off.

| Read | Why | Time |
|---|---|---|
| Anthropic, [study of AI assistance and coding skills](https://www.anthropic.com/research/AI-assistance-coding-skills) (January 2026) | A randomized trial: people learning with AI scored lower on a follow-up quiz, especially on debugging. It also describes which ways of using AI didn't hurt learning. | 20 min |
| Prather et al., ["The Widening Gap"](https://dl.acm.org/doi/10.1145/3632620.3671116) (ICER 2024) | Students who struggled while using AI ended up thinking they'd done better than they had. | deep dive |
| Bastani et al., [randomized trial of AI tutors in high-school math](https://www.pnas.org/doi/10.1073/pnas.2422633122) (PNAS 2025) | Unrestricted AI raised practice scores and lowered exam scores; a hint-only tutor didn't. The reason for the course's [tutor mode](prompt-patterns.md#14-tutor-mode). | deep dive |
| Kazemitabaar et al., [how novices use AI code generators](https://arxiv.org/abs/2309.14049) (Koli Calling 2023) | One-prompt solutions gave the best first try and the worst results when learners later had to change the code. | deep dive |

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

## Week 7 — Security, Data & Review

| Read | Why | Time |
|---|---|---|
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
| US Copyright Office, [Copyright and AI, Part 2: Copyrightability](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf) | Purely AI-generated material can't be copyrighted in the US; your own contributions can. The reason for [safety contract rule 8](../setup/safety-contract.md). | deep dive |

---

## Books

| Book | Why | Time |
|---|---|---|
| Addy Osmani, [*Beyond Vibe Coding: From Coder to AI-Era Developer*](https://www.oreilly.com/library/view/beyond-vibe-coding/9798341634749/) (O'Reilly, 2025) | Vibe coding plus engineering rigor: specs, context, agents and production readiness. Osmani uses "vibe coding" in the narrow sense, as this course does. A free, continuously updated web version is at [beyond.addy.ie](https://beyond.addy.ie/). | deep dive |
| Gene Kim and Steve Yegge, [*Vibe Coding: Building Production-Grade Software With GenAI, Chat, Agents, and Beyond*](https://itrevolution.com/product/vibe-coding-book/) (IT Revolution, 2025) | Small tasks, guardrails and testing, with warnings about agents that delete tests or "cheat". Note that Kim and Yegge use "vibe coding" to mean *disciplined* AI-assisted work, the opposite of Karpathy's original sense. | deep dive |

## Free courses

Good for extra practice or a different explanation. All three can be done without paying.

| Course | Why | Time |
|---|---|---|
| DeepLearning.AI, [Build with Andrew](https://www.deeplearning.ai/courses/build-with-andrew) | A short course for people who have never coded. It works with any chatbot and is free to audit (the certificate costs extra). A good warm-up for week 1. | deep dive |
| Microsoft, [GitHub Copilot CLI for Beginners](https://developer.microsoft.com/blog/get-started-with-github-copilot-cli-a-free-hands-on-course/) | A hands-on course that runs in GitHub Codespaces on Copilot Free, the same setup as weeks 6–8. Good preparation for the agent weeks. | deep dive |
| Google and Kaggle, [5-Day AI Agents Intensive (vibe coding edition)](https://www.kaggle.com/learn-guide/5-day-agents-vibecoding) | Now a self-paced guide covering agents, tools, context, security and deployment. Uses free Kaggle and Google AI Studio accounts; AI Studio is 18+ ([TOOLS.md](../TOOLS.md)). | deep dive |

---

Want the evidence behind the course design? See [research/design-rationale.md](../research/design-rationale.md).
