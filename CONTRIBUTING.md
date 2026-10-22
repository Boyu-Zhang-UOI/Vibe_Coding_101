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

This checks every relative link and heading anchor in the Markdown (`check:links`), tests the course's own scripts (`test:scripts`), runs every starter kit's tests (`test:starters`), builds the course website and slides (`site:build`), and then crawls the built website for dead links and anchors (`check:site`). It runs offline. CI runs the same steps on every push. To preview the website while you edit, run `npm run site:dev`.

The website is assembled from the repository's Markdown by `scripts/build-site.mjs`: a folder's `README.md` becomes its page, instructor-only files and sections are left out, and links to files that aren't pages (starter kits, code) point to GitHub. A section whose heading starts with "For instructors" is automatically cut from the website, so use that wording for teacher-only parts of shared pages. The build also:

- turns link text that is only a file path (`[privacy-settings.md](…)`) into the target page's title, so prefer real words as link text anyway;
- adds a "Copy this template" block, with the raw text and a copy button, to every page in `templates/`;
- gives each text diagram (a fenced `text` block that draws boxes or a file tree) a text alternative for screen readers. The automatic one just lists the diagram's words, so write a better one in a comment on the line before the block: `<!-- alt: The Safe Loop: Describe, Plan, Step, Test, Read, Commit, then back to Describe -->`. Better still, describe the picture in a list or table and keep the drawing as an extra;
- publishes `weeks/07-security-and-review/rls-lab/attack.html` as the hosted RLS attack page at `/tools/rls-attack.html`.

The site's styles are in `site/.vitepress/theme/custom.css`: prompts (fenced `text` blocks) wrap instead of scrolling, and tables scroll inside their own box on phones.

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
- **Links** are relative (`../../templates/SPEC.md`), and must point to files that exist. `npm run check:links` verifies them. Inside a starter kit, a link must stay inside the kit or be absolute (`https://…`), because each kit is published as its own repository; `check:links` enforces this too.
- Keep emoji to ✅ checkpoints and the AI-use labels, which always pair the emoji with words: 🟢 AI on, 🟡 AI limited, 🔴 AI off.

## File patterns

### A week folder: `weeks/NN-slug/`

| File | Purpose | Length guide |
|---|---|---|
| `README.md` | "This week at a glance" table, objectives, prep, a two-row Studio A / Studio B summary, key ideas for self-paced learners, understanding check, fallbacks | 1,000–2,000 words |
| `slides.md` | [Marp](https://marp.app/) deck for the 20-minute concept talk. Speaker notes go in HTML comments | 12–20 slides |
| `lab.md` | Step-by-step lab in two sections, `## Studio A — …` and `## Studio B — …`, each with timed parts marked **Core** or **If time**, checkpoints and troubleshooting | 3,000–5,500 words |
| `homework.md` | Deliverables checklist and due line first; core work (about 9–10 hours with project time and journal) and stretch (optional); ends with a "Minimum to keep up" box | 800–1,800 words |
| `instructor-notes.md` | Prep checklist, two minute-by-minute run sheets (Studio A and Studio B), live-demo script, common pitfalls, differentiation, fallback plans | 1,000–2,500 words |
| other files | Starters, kits, examples | as needed |

Every week `README.md` uses these headings, in this order:

```markdown
# Week N — Title
> One-sentence big idea.
## This week at a glance
(Item | Details table: Before Studio A, Studio A, Studio B, Due before next week's Studio A,
 AI use this week, Must read, Look up when needed, Minimum to keep up, Time)
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
- Node.js 22 LTS (minimum 20.12, which `process.loadEnvFile` needs): set `"engines": { "node": ">=20.12" }`. No runtime dependencies unless a lesson needs one, so `npm install` is never a blocker.
- Every Node starter commits a `package-lock.json` (even with no dependencies), so `npm audit` works and `npm install` doesn't create a stray file. Refresh it with `npm install --package-lock-only` after changing `package.json`.
- Every Node starter has `npm run check:secrets`, which runs `scripts/check-secrets.mjs`: a zero-dependency scan of the working tree **and the whole git history** for the key formats the course uses. Keep the copies identical; the scanner's tests build their fake keys at run time, so no file in the repository contains a real-looking key.
- Tests use Node's built-in runner (`node --test`), need no network and no keys (stub `fetch`), and must pass offline.
- Every kit has a `README.md` saying how to run it, and a `.gitignore` that excludes `.env` and `node_modules/`. Links inside a kit stay inside the kit or are absolute.
- Every kit is listed in `scripts/kits.json`, which drives publishing, link checks and the kit tests. Files that both Node starters share (the dev server, the AI route, the scanner…) are listed there too, and `npm run test:starters` fails if the copies drift apart.
- Starters must pass `npm test`, except kits that contain planted bugs on purpose. Those say so at the top of their README and name the tests that must fail in `package.json`: `"vc101": { "plantedBug": true, "expectFailing": ["exact test name"] }`. `npm run test:starters` checks that exactly those tests fail and every other test passes. The Debug Clinic's planted syntax error is checked by file and line (`plantedSyntaxError` in `kits.json`), because its answer key quotes the line number.

## Course-wide names (use exactly these)

| Thing | Name |
|---|---|
| The six-step workflow | **the Safe Loop**: Describe → Plan → Step → Test → Read → Commit ([resources/safe-loop.md](resources/safe-loop.md)) |
| The recovery rule | **the two-strikes rule** |
| The four prompt parts | **Goal · Context · Constraints · Done when** |
| Acceptance-criteria format | **WHEN … THE APP SHALL …** |
| AI-use levels | 🟢 AI on · 🟡 AI limited · 🔴 AI off (never the emoji alone) |
| The two weekly studios | **Studio A — Learn & build** and **Studio B — Workshop** |
| Due-date wording | "Due before next week's Studio A (default 11:59 pm the night before)" |
| Two Safe Loop habits | **check first** (write the check before the code) and **teach back** (2–3 sentences in `PROMPTS.md` before committing AI-written code) |
| Commit trailer for AI help | `Assisted-by: [tool]` |
| Prompting habits from week 1 | **the three habits**: ask me questions first · show a reference · say what works |
| Fresh-chat spec check | **the Goldfish test** |
| Placeholders | square brackets, e.g. `[your name]` (angle brackets vanish on GitHub) |
| Where graded personal writing goes | **Canvas**, never a public repo |
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
2. Search and replace `Boyu-Zhang-UOI/Vibe_Coding_101` with your repository path, **and** the website address `boyu-zhang-uoi.github.io/Vibe_Coding_101` with yours (`[your-user-or-org].github.io/[your-repo]`, all lowercase before the slash). Starter kits use that address for their absolute links, including the hosted RLS attack page. To build the site for another address without editing files, set `SITE_URL`, for example `SITE_URL=https://example.github.io/my-course npm run site:build`.
3. Publish the starter kits as template repositories: `scripts/publish-starters.sh [your-github-user-or-org]`. Only committed content is published (the script uses `git archive`), so commit first. After you change a kit, push the new version to the existing template repositories with `scripts/publish-starters.sh --update [your-github-user-or-org]`; add `--dry-run` to see what would change first. Repositories that students already created from a template keep the version they started from.
4. Update TOOLS.md for your cohort's date, age range and region, and work through [instructor/pre-cohort-checklist.md](instructor/pre-cohort-checklist.md).

## License

By contributing, you agree that your contributions are licensed under the repository's licenses: written materials under [CC BY 4.0](LICENSE) and code under the [MIT License](LICENSE-CODE).
