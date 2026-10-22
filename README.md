# Directed Study: Vibe Coding — Building Software with AI

**Vibe Coding 101 · Build real software with AI, on a $0 budget.**
A hands-on University of Idaho course that takes people who have never coded to shipping a deployed full-stack web app, by directing AI tools, and teaches the habits that make that software trustworthy. **3 credits · eight accelerated weeks · two 3-hour studios a week** plus about 11 hours outside class.

[![Check course materials](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/actions/workflows/ci.yml/badge.svg)](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/actions/workflows/ci.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-lightgrey.svg)](LICENSE)
[![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE-CODE)

> **Course website: [boyu-zhang-uoi.github.io/Vibe_Coding_101](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/)** · Tools last verified: 21 October 2026 ([TOOLS.md](TOOLS.md))
>
> **New here?** Start with the [first-hour quick start](setup/README.md#before-studio-1) (about 60–90 minutes, before Studio 1).

---

## What makes this course different

- **Very hands-on.** Each week has two 3-hour studios: **Studio A — Learn & build** opens with at most 20 minutes of talk, then a lab; **Studio B — Workshop** adds practice, project time and help. Students ship five projects.
- **Free tools only.** Every required tool has a free tier, and every layer has **two tested fallbacks** for when free limits run out or a product disappears.
- **Teaches the loop, not the tool.** One six-step workflow, the [Safe Loop](resources/safe-loop.md), works in a chat window in week 1 and with an autonomous agent in week 8. Students write the check before the code and explain AI-written changes before they commit them.
- **Graded on understanding, with plenty of support.** Labs and timed builds are graded on effort, not polish or speed, and exit tickets on completion, not correctness. Three short oral walkthroughs, with the questions [published in advance](assessment/oral-walkthroughs.md#what-to-expect), let students show they understand what they shipped, and walkthroughs 1 and 2 can be retaken.
- **Safety built in.** A nine-rule [safety contract](setup/safety-contract.md) taught a rule at a time, and a week-7 lab where students test their own database the way an attacker would, then lock it down, modeled on real 2025–26 incidents.
- **Evidence-based.** Designed from a review of 2025–26 university and industry courses, education research and security incidents, updated in October 2026 ([why the course looks like this](research/design-rationale.md)).

## The eight weeks

| Week | Title | You build | Main tools |
|---|---|---|---|
| 0 | [Pre-work](setup/README.md) | Accounts, privacy settings and a first AI-built page, before Studio 1 | GitHub · Google account |
| 1 | [Hello, Vibe Coding](weeks/01-hello-vibe-coding/) | A personal home page, live on the web, and your own AI-use rules | Chat assistant with live preview · GitHub Pages |
| 2 | [Prompting & Save Points](weeks/02-prompting-and-save-points/) | A browser game in one hour, with git save points and a prompt makeover | Two chat assistants · github.dev |
| 3 | [Spec First](weeks/03-spec-first/) | Project 1 from your own one-page spec, after a jigsaw app-builder bake-off | Browser app builders · Codespaces |
| 4 | [Read It, Debug It, Own It](weeks/04-read-debug-own-it/) | The Debug Clinic (AI off), your first automated test, Project 1 final | Codespaces · VS Code · Copilot |
| 5 | [APIs, Secrets & Servers](weeks/05-apis-secrets-servers/) | An AI-powered micro-app with a hidden API key, deployed | Free LLM API · Vercel |
| 6 | [How Agents Work](weeks/06-agents/) | "Be the Agent", then your capstone's first agent-built feature and pull request | Copilot agent mode and CLI |
| 7 | [Security, Data & Review](weeks/07-security-and-review/) | The RLS Attack Lab, a database for your capstone, a pull-request review | Supabase · security scanners |
| 8 | [Ship It](weeks/08-ship-it/) | Capstone polish and the Project Fair | Everything |

Full details: **[SYLLABUS.md](SYLLABUS.md)**.

## The Safe Loop

| # | Step | What you do |
|---|---|---|
| 1 | **Describe** | Goal, context, constraints, "done when". Write the check first |
| 2 | **Plan** | Ask for a plan, and edit it before any code is written |
| 3 | **Step** | One small change at a time |
| 4 | **Test** | Run your check, the normal case and an edge case |
| 5 | **Read** | Read the diff, and write a short teach-back of what changed and why |
| 6 | **Commit** | A git save point with a clear message |

If two fixes in a row fail, stop, start a fresh chat and rewrite the prompt (the **two-strikes rule**). [Printable card](resources/safe-loop.md).

## How to use this repository

### Students

1. Do the [first-hour quick start](setup/README.md#before-studio-1) before Studio 1, and the [rest of week 0](setup/README.md#during-week-1) during week 1.
2. Each week, open the week's folder and start with **This week at a glance** at the top of its `README.md`. Read the README before Studio A, follow `lab.md` in both studios, and do `homework.md` before next week's Studio A.
3. Keep [the Safe Loop](resources/safe-loop.md), [prompt patterns](resources/prompt-patterns.md), [troubleshooting](resources/troubleshooting.md) and the [glossary](resources/glossary.md) open.

### Self-paced learners

Everything works without an instructor. Follow the [self-paced path](resources/self-paced.md): it explains what replaces each studio activity, what to do instead of pair work when you're working alone, and how to use the [tutor-mode prompt](instructor/course-tutor.md) when you're stuck.

### Instructors

1. Read the [instructor guide](instructor/README.md) and the [design rationale](research/design-rationale.md).
2. Work through the [pre-cohort checklist](instructor/pre-cohort-checklist.md): smoke-test every tool and update [TOOLS.md](TOOLS.md).
3. Pick the right [variant](instructor/variants.md) for your cohort: small cohorts and one-student Directed Study, 1- or 2-credit versions, a 16-week semester, under-18 or European cohorts, online delivery.
4. Publish the starter kits as template repositories: `scripts/publish-starters.sh [your-github-user-or-org]`.
5. Each week's `instructor-notes.md` has run sheets for Studio A and Studio B, a live-demo script, common pitfalls and fallback plans. Answer keys are in [instructor/answer-keys/](instructor/answer-keys/).

The [course website](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/) is built from this repository and republished on every push to `main`. It leaves out instructor material (instructor notes, answer keys, exit tickets and the instructor guide), which stays here on GitHub. Slides are plain Markdown ([Marp](https://marp.app/)) and are published on the website under [/slides/](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/slides/). To preview locally: `npm install`, then `npm run site:dev` for the website or `npm run slides` for the decks.

## Repository map

| Folder or file | What's in it |
|---|---|
| `SYLLABUS.md` | Course design, schedule, assessment, AI policy and University policies |
| `TOOLS.md` | The dated tool handout: the only file with prices and limits |
| `setup/` | Week 0: the first-hour quick start, accounts, privacy, GitHub, Codespaces, safety contract |
| `weeks/` | One folder per week: README, slides, lab, homework, instructor notes, kits |
| `projects/` | Project briefs, capstone ideas, the capstone starter kit and rescue starters |
| `templates/` | SPEC, AGENTS, PROMPTS, TESTS, SECURITY_CHECKLIST, CODE_REVIEW, REFLECTION, README |
| `assessment/` | Weights, rubrics, oral walkthroughs, exit tickets, self-assessment |
| `resources/` | Safe Loop, prompt patterns, glossary, case studies, troubleshooting, git, web basics, accessibility, the self-paced path |
| `instructor/` | Instructor guide, pre-cohort checklist, variants, tutor prompt, answer keys |
| `research/` | Design rationale, the research reports and notes |
| `site/` | Course website (VitePress): home page and configuration |
| `scripts/` | Link checker, secret scanner, website and slide builders, starter tests, starter publisher |

## Cost

Required: **$0**. Optional: a paid editor-assistant plan, or one month of a frontier coding agent timed to weeks 6–8. Neither is needed for full marks. Details and student offers: [TOOLS.md](TOOLS.md).

## Contributing

AI tools change monthly, so this course relies on reports from people who teach and take it. See [CONTRIBUTING.md](CONTRIBUTING.md), and use the **Tool change** issue form when a free tier, menu or product changes.

## License

- Course materials (text, slides, images): [Creative Commons Attribution 4.0](LICENSE). Adapt and reuse them with attribution.
- Code (starter kits and scripts): [MIT](LICENSE-CODE).

Suggested attribution: *"Vibe Coding 101" by Boyu Zhang and contributors, CC BY 4.0, https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101*

## Acknowledgments

This course stands on the shoulders of openly published courses and writing, including Stanford CS146S, CMU 15-113 and 17-316, UCSD CS1-LLM, Michigan EECS 498, Utah CS 3960, UChicago's Design, Build, Ship, DeepLearning.AI's short courses, and the writing of Simon Willison, Andrej Karpathy and Addy Osmani. Sources are cited in [research/](research/).
