# Vibe Coding 101

**Build real software with AI, on a $0 budget.**
An eight-week, hands-on course that takes people who have never coded to shipping a deployed full-stack web app, by directing AI tools, and teaches the habits that make that software trustworthy.

[![Check course materials](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/actions/workflows/ci.yml/badge.svg)](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/actions/workflows/ci.yml)
[![License: CC BY 4.0](https://img.shields.io/badge/content-CC%20BY%204.0-lightgrey.svg)](LICENSE)
[![Code: MIT](https://img.shields.io/badge/code-MIT-blue.svg)](LICENSE-CODE)

> **Tools last verified: 25 September 2026.** See [TOOLS.md](TOOLS.md).

---

## What makes this course different

- **Very hands-on.** Each week is one 3-hour studio: at most 20 minutes of talk, then about 100 minutes of building. Students ship five projects.
- **Free tools only.** Every required tool has a free tier, and every layer has **two tested fallbacks** for when free limits run out or a product disappears.
- **Teaches the loop, not the tool.** One six-step workflow, the [Safe Loop](resources/safe-loop.md), works in a chat window in week 1 and with an autonomous agent in week 8.
- **Graded on understanding.** Students must explain what they ship. Oral walkthroughs, AI-free reflections and a published list of [six skills you must show without AI](resources/without-ai-skills.md).
- **Safety built in.** A [safety contract](setup/safety-contract.md) from day one and a week-7 lab where students attack, then fix, their own database, modeled on real breaches of vibe-coded apps.
- **Evidence-based.** Designed from a review of 2025–26 university and industry courses, education research and security incidents ([why the course looks like this](research/design-rationale.md)).

## The eight weeks

| Week | Title | You build | Main tools |
|---|---|---|---|
| 0 | [Pre-work](setup/README.md) | Accounts, privacy settings, safety contract | GitHub · Google account |
| 1 | [Hello, Vibe Coding](weeks/01-hello-vibe-coding/) | A personal home page, live on the web | Chat assistant with live preview · GitHub Pages |
| 2 | [Prompting & Save Points](weeks/02-prompting-and-save-points/) | A browser game in one hour, with git save points | Two chat assistants · github.dev |
| 3 | [Spec First](weeks/03-spec-first/) | Project 1 from your own one-page spec; an app-builder bake-off | Browser app builders · chat assistant |
| 4 | [Read It, Debug It, Own It](weeks/04-read-debug-own-it/) | The Debug Clinic (AI off); Project 1 final | Codespaces · VS Code · Copilot |
| 5 | [APIs, Secrets & Servers](weeks/05-apis-secrets-servers/) | An AI-powered micro-app with a hidden API key, deployed | Free LLM API · Vercel |
| 6 | [How Agents Work](weeks/06-agents/) | "Be the Agent"; capstone kickoff with an agent, test first | Copilot agent mode and CLI |
| 7 | [Security, Data & Review](weeks/07-security-and-review/) | The RLS Attack Lab; a database for your capstone; peer review | Supabase · security scanners |
| 8 | [Ship It](weeks/08-ship-it/) | Capstone polish and the Project Fair | Everything |

Full details: **[SYLLABUS.md](SYLLABUS.md)**.

## The Safe Loop

```
DESCRIBE ──► PLAN ──► STEP ──► TEST ──► READ ──► COMMIT
goal, context,  ask for a   one small   normal +    read the    save point
constraints,    plan; edit  change      edge case   diff        in git
done when       it first
```

If two fixes in a row fail, stop, start a fresh chat and rewrite the prompt (the **two-strikes rule**). [Printable card](resources/safe-loop.md).

## How to use this repository

### Students

1. Do the [week 0 pre-work](setup/README.md) (about 2 hours): accounts, privacy settings, the safety contract.
2. Each week, open the week's folder: read the `README.md` before class, follow `lab.md` in class, and do `homework.md` after.
3. Keep [the Safe Loop](resources/safe-loop.md), [prompt patterns](resources/prompt-patterns.md), [troubleshooting](resources/troubleshooting.md) and the [glossary](resources/glossary.md) open.

### Self-paced learners

Everything works without an instructor. Follow the weeks in order, skip the pair activities or do them with a friend, and use the [tutor-mode prompt](instructor/course-tutor.md) when you are stuck. Budget about six hours a week.

### Instructors

1. Read the [instructor guide](instructor/README.md) and the [design rationale](research/design-rationale.md).
2. Work through the [pre-cohort checklist](instructor/pre-cohort-checklist.md): smoke-test every tool and update [TOOLS.md](TOOLS.md).
3. Pick the right [variant](instructor/variants.md) for your cohort's age, region and schedule.
4. Publish the starter kits as template repositories: `scripts/publish-starters.sh <your-github-user-or-org>`.
5. Each week's `instructor-notes.md` has a run sheet, a live-demo script, common pitfalls and fallback plans. Answer keys are in [instructor/answer-keys/](instructor/answer-keys/).

Slides are plain Markdown ([Marp](https://marp.app/)). Build them all with `npm install && npm run slides`, or preview one in VS Code with the Marp extension.

## Repository map

```
├── SYLLABUS.md          Course design, schedule, assessment, AI policy
├── TOOLS.md             The dated tool handout: the only file with prices and limits
├── setup/               Week 0: accounts, privacy, GitHub, Codespaces, safety contract
├── weeks/               One folder per week: README, slides, lab, homework, instructor notes, kits
├── projects/            Project briefs, capstone ideas, capstone starter kit
├── templates/           SPEC, AGENTS, PROMPTS, TESTS, SECURITY_CHECKLIST, CODE_REVIEW, REFLECTION, README
├── assessment/          Weights, rubrics, oral walkthroughs, exit tickets, self-assessment
├── resources/           Safe Loop, prompt patterns, glossary, case studies, troubleshooting, git, web basics
├── instructor/          Instructor guide, pre-cohort checklist, variants, tutor prompt, answer keys
├── research/            Design rationale, the full research report and notes
└── scripts/             Link checker, slide builder, starter tests, starter publisher
```

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
