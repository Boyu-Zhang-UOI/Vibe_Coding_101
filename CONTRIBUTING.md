# Contributing and Style Guide

Thanks for helping keep Vibe Coding 101 accurate. AI tools change monthly, so this course stays useful only if people report and fix what breaks.

## Ways to help

- **A tool changed** (a free tier, a menu, a limit): open a [tool change issue](.github/ISSUE_TEMPLATE/tool-change.yml). Most fixes belong in [TOOLS.md](TOOLS.md) only.
- **A mistake or confusing step:** open an [erratum issue](.github/ISSUE_TEMPLATE/erratum.yml), or send a pull request.
- **You taught it:** tell us what worked and what didn't in a discussion or issue. Adaptations are welcome under the license.

Before opening a pull request, run:

```bash
npm run check
```

This checks internal links, runs the starter-code tests and builds the slides.

## The two-layer rule

The course has two layers, and keeping them apart is what stops it going stale.

| Layer | Where | What it may contain |
|---|---|---|
| **Concept layer** | Everything except TOOLS.md | Ideas, workflows, the Safe Loop, specs, git, testing, security. Product names are fine ("Copilot", "Gemini", "Supabase") when a step needs them. |
| **Tool layer** | [TOOLS.md](TOOLS.md) only | Model versions, prices, credit counts, rate limits, dates of changes, student offers. |

So: write "use your chat assistant's live preview (Gemini Canvas, or a fallback from TOOLS.md)", never "use Gemini 3.6 Flash, which gives you 50 messages a day". Click-paths ("Settings → Privacy") are allowed where students need them, but add a line such as "Menus move. If you can't find it, ask the assistant where the setting is."

## Voice and writing

- **Audience:** adults who may never have written code. Assume they are smart and busy, not technical.
- Use **plain English** and the second person ("you"). Keep sentences short.
- **Define every technical term** the first time it appears in a file, in a few words, and link it to [resources/glossary.md](resources/glossary.md) when the glossary has it.
- Explain **why** before **how**. One sentence of motivation per step is enough.
- Prefer concrete examples over abstractions.
- Avoid hype. Do not promise that AI will do things; show what it did and what the student must check.
- When citing research or incidents, link the source (see [research/landscape-report-2026-09.md](research/landscape-report-2026-09.md) for sourced facts).
- Use US spelling.

## Formatting conventions

- **Prompts** students type go in fenced blocks tagged `text`, written in the four-part structure where it makes sense:

  ```text
  Goal: ...
  Context: ...
  Constraints: ...
  Done when: ...
  ```

- **Terminal commands** go in fenced blocks tagged `bash`, one command per line, with no `$` prompt.
- **Checkpoints** in labs start with `✅ **Checkpoint:**` and say what the student should see.
- **Callouts** use GitHub alert syntax: `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]`. Use `[!WARNING]` for safety issues.
- **Time estimates** appear on every lab part, for example `## Part 2 — Build the game (40 min)`.
- **Links** are relative (`../../templates/SPEC.md`), and must point to files that exist. `npm run check:links` verifies them.
- Keep emoji to ✅ checkpoints and the 🟢🟡🔴 AI-use traffic lights.

## File patterns

### A week folder: `weeks/NN-slug/`

| File | Purpose | Length guide |
|---|---|---|
| `README.md` | The week at a glance: objectives, prep, 3-hour agenda, key ideas for self-paced learners, understanding check, fallbacks | 800–1,500 words |
| `slides.md` | [Marp](https://marp.app/) deck for the 20-minute concept talk. Speaker notes go in HTML comments | 12–20 slides |
| `lab.md` | Step-by-step studio lab, about 100 minutes, with timed parts, checkpoints, stretch goals and troubleshooting | 1,500–3,000 words |
| `homework.md` | Core tier (about 3 hours, required) and stretch tier (optional), with a deliverables checklist | 500–1,200 words |
| `instructor-notes.md` | Prep checklist, minute-by-minute run sheet, live-demo script, common pitfalls, differentiation, fallback plans | 800–2,000 words |
| other files | Starters, kits, examples | as needed |

Every week `README.md` uses these headings, in this order:

```markdown
# Week N — Title
> One-sentence big idea.
(At-a-glance table: time, tools, what you'll build, what's due)
## Learning objectives
## Before class
## Studio agenda
## Materials
## Key ideas
## Understanding check
## Homework
## If a tool is down
## Going further
```

### Slides

Every deck starts with this front matter:

```markdown
---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week N"
footer: "CC BY 4.0"
---
```

One idea per slide, large text, no more than about 30 words on a slide. Put what the instructor says in `<!-- speaker notes -->`. End the deck with a "Today's lab" slide and a "Homework" slide.

### Starter code

- Plain HTML, CSS and JavaScript (ES modules). No front-end framework and no build step, so beginners can read every file.
- Node.js 20 or newer. No runtime dependencies unless a lesson needs one, so `npm install` is never a blocker.
- Tests use Node's built-in runner (`node --test`).
- Every starter has a `README.md` saying how to run it, and a `.gitignore` that excludes `.env` and `node_modules/`.
- Starters must pass `npm test` in CI, except kits that contain planted bugs on purpose. Those say so at the top of their README.

## Course-wide names (use exactly these)

| Thing | Name |
|---|---|
| The six-step workflow | **the Safe Loop**: Describe → Plan → Step → Test → Read → Commit ([resources/safe-loop.md](resources/safe-loop.md)) |
| The recovery rule | **the two-strikes rule** |
| The four prompt parts | **Goal · Context · Constraints · Done when** |
| Acceptance-criteria format | **WHEN … THE APP SHALL …** |
| AI-use levels | 🟢 Expected · 🟡 Limited · 🔴 Not allowed |
| Prompt log file | `PROMPTS.md` |
| Agent instructions file | `AGENTS.md` |
| Spec file | `SPEC.md` |
| Week 2 activity | **Game in an Hour** |
| Week 4 activity | **Debug Clinic** |
| Week 6 activity | **Be the Agent** |
| Week 7 activity | **RLS Attack Lab** |
| Week 8 event | **Project Fair** |
| Oral checks | **oral walkthroughs** (weeks 4, 6, 8) |

## Forking for your own course

1. Fork or copy the repository.
2. Search and replace `Boyu-Zhang-UOI/Vibe_Coding_101` with your repository path.
3. Publish the starter kits as template repositories: `scripts/publish-starters.sh <your-github-user-or-org>`.
4. Update TOOLS.md for your cohort's date, age range and region, and work through [instructor/pre-cohort-checklist.md](instructor/pre-cohort-checklist.md).

## License

By contributing, you agree that your contributions are licensed under the repository's licenses: written materials under [CC BY 4.0](LICENSE) and code under the [MIT License](LICENSE-CODE).
