# Projects

> Five things you build and ship, in four repositories. Each one is live on the public web, and each one adds a habit the next one needs.

You will build a personal page, a game, a tool you actually use, a small AI-powered app and a capstone of your choice. Each project lives in its own GitHub **repository** (repo: a project folder that git tracks, stored on GitHub), and each is **deployed** (published so anyone with the link can use it). New words are explained in the [glossary](../resources/glossary.md).

## Overview

| Project | Weeks | What you build | Where it lives | Starter | Due |
|---|---|---|---|---|---|
| [Home page](home-page.md) | 1–2 | A personal page (week 1), plus a browser game in `/game/` (week 2) | Repo named `[username].github.io`, on GitHub Pages | None. You start in a chat assistant | Page: end of week 1 · Game: end of week 2 |
| [Project 1: A Tool I'd Actually Use](project-1-useful-tool.md) | 3–4 | A single-user web tool built from your own spec, saving its data in the browser | Its own repo, on GitHub Pages | None. You build from your own `SPEC.md` | v1: end of week 3 · Final: end of week 4 |
| [AI micro-app](ai-micro-app.md) | 5 | A small app that asks an LLM for help from a server route, with the key kept secret | Its own repo, on Vercel | `weeks/05-apis-secrets-servers/starter/` | End of week 5 |
| [Capstone pitch](capstone.md#the-pitch) | 5 | One paragraph, a sketch, your feature choices and your biggest risk | Canvas | None | **72 hours before week 6 Studio A** |
| [Capstone](capstone.md) | 6–8 | A deployed full-stack web app of your choice, built with an AI agent | Its own repo, on Vercel (plus Supabase if it stores shared data) | `projects/capstone-starter/` | [Milestones](capstone.md#milestones): end of weeks 6 and 7 · Final: end of week 8 |

**"End of week N"** means **before week N+1's Studio A (default 11:59 pm the night before)**, unless Canvas, the course's learning management system, says otherwise. The final capstone deadline is posted on Canvas: a few days after the [Project Fair](../weeks/08-ship-it/project-fair.md), and before the University's grade deadline.

Need an idea for the capstone? See [capstone-ideas.md](capstone-ideas.md).

### How each project is graded

| Project | Counts toward | Rubric |
|---|---|---|
| Home page | Weekly labs and homework (weeks 1 and 2) | [Weekly labs rubric](../assessment/rubrics.md#weekly-labs-and-homework) |
| Project 1 | Project 1 (10%) | [Project 1 rubric](../assessment/rubrics.md#project-1) |
| AI micro-app and capstone pitch | Weekly labs and homework (your week 5 score) | [AI micro-app rubric](../assessment/rubrics.md#ai-micro-app) |
| Capstone | Capstone (30%); Milestones 1 and 2 are your week 6 and 7 homework | [Capstone rubric](../assessment/rubrics.md#capstone) |

The [oral walkthroughs](../assessment/oral-walkthroughs.md) in weeks 4, 6 and 8 use your Project 1 and capstone. Full details: [assessment/README.md](../assessment/README.md).

## The three project rules

These apply to every project, including stretch work. They come from the [safety contract](../setup/safety-contract.md).

1. **No real payments.** Free hosting tiers forbid commercial use ([Vercel Hobby](https://vercel.com/docs/plans/hobby); [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)), and payment code is high-stakes. A "Buy" button that does nothing real is fine for a demo.
2. **No real personal data about other people.** Use made-up names, emails and entries. Free AI tiers may train on what you type, and a single missing database rule can make everything public.
3. **Nothing you would miss if an AI agent deleted it.** Keep real documents, photos and work files out of your project folders. AI agents have deleted files and databases they were not supposed to touch ([case studies](../resources/case-studies.md)).

If you are not sure whether an idea breaks a rule, ask before you build it.

## What goes in a repo, and what goes on Canvas

Your project repos are public: they become your portfolio. Your grades and personal writing stay private, on Canvas.

- **In your repos:** code, `SPEC.md`, `TESTS.md`, `PROMPTS.md`, `AGENTS.md`, `SECURITY_CHECKLIST.md`, `README.md`, and screenshots of your app with made-up data.
- **On Canvas only:** reflections, exit tickets, your personal AI-use rules, the signed safety contract, self-assessments, written peer reviews, a pair's signed contribution statement, the capstone pitch, and your project submissions.
- **Never commit** grades, feedback, reflections, classmates' real names (use GitHub usernames), your student ID or anyone's real personal data.

The reasons, and the University policies behind them, are in [Privacy of your work](../assessment/README.md#privacy-of-your-work).

## Naming conventions

Consistent names make your work easy to find, grade and show off.

| Thing | Convention | Example |
|---|---|---|
| Home page repo | Exactly `[username].github.io` (GitHub requires this) | `adalovelace.github.io` |
| Project 1, AI micro-app and capstone repos | Named after what the app does | `plant-tracker`, `fridge-chef`, `study-buddy` |
| Course documents | Exactly these names, at the top level of the repo: `README.md`, `SPEC.md`, `TESTS.md`, `PROMPTS.md`, `AGENTS.md`, `SECURITY_CHECKLIST.md` | `SPEC.md`, not `spec-final-v2.md` |
| Images and other supporting files | In a `docs/` folder | `docs/wireframe.jpg`, `docs/screenshot.png` |
| Commit messages | Start with a verb and say what changed. If AI helped, end with an `Assisted-by: [tool]` line (taught in week 2, required from week 6) | `Add delete button to each task` |
| Branches (week 6 on) | `feature/[short-name]` or `fix/[short-name]` | `feature/weekly-chart` |
| Final release (week 8) | A GitHub release tagged `v1.0` | `v1.0` |

Repo names use lowercase letters, numbers and hyphens only. No spaces, and nothing personal such as your birth year or student ID. If you like, add a prefix such as `capstone-` to keep your list of repos tidy.

## Templates and starters

- **Document templates:** [SPEC](../templates/SPEC.md) · [TESTS](../templates/TESTS.md) · [PROMPTS](../templates/PROMPTS.md) · [PROJECT_README](../templates/PROJECT_README.md) · [AGENTS](../templates/AGENTS.md) · [SECURITY_CHECKLIST](../templates/SECURITY_CHECKLIST.md) · [CODE_REVIEW](../templates/CODE_REVIEW.md) · [REFLECTION](../templates/REFLECTION.md). Copy a template into your repo and fill it in. (The reflection template is a shape for writing you submit on Canvas, not a file for your repo.)
- **Starter kits:** the AI micro-app starts from [`weeks/05-apis-secrets-servers/starter/`](../weeks/05-apis-secrets-servers/starter/), and the capstone from [`projects/capstone-starter/`](capstone-starter/). The capstone starter already contains the document templates, adapted for the capstone, and tested [feature patterns](capstone-starter/README.md#feature-patterns) for a database, a chart and a public API. How to copy a starter into your own repo: [Start a project from a starter](../setup/codespaces.md#start-a-project-from-a-starter).
- **Fallen behind on Project 1?** The [rescue starter](rescue-starters/study-timer/) is a working study timer in plain HTML, CSS and JavaScript, built from the [week 3 example spec](../weeks/03-spec-first/example-spec.md). If your own v1 doesn't work by week 4, talk to your instructor: you can continue from the rescue starter so you can still take part in week 4 (your own feature, tests and walkthrough 1). Credit it in your README and `PROMPTS.md`; your own additions and documents are what's graded.

## How to submit

Do this for every project deadline.

1. **Save everything to GitHub.** Commit your work, then open your repo on github.com and check that your latest commit is there.
2. **Test the live site as a stranger would.** Open the live URL in a private (incognito) window. If it only works on your computer, it isn't done.
3. **From week 5 (Vercel): use the production URL and take a screenshot.** The production URL is your app's main, permanent address (for example `https://fridge-chef.vercel.app`), not a long preview link: Vercel deletes old preview deployments. Take a screenshot of the production site working.
4. **Copy the link to your final commit.** On your repo page on GitHub, open the commit history (the clock icon or "N commits"), click the top commit, and copy the address from the browser bar. Menus move; if you can't find it, ask your chat assistant "How do I get the link to a specific commit on GitHub?"
5. **Submit on Canvas:**
   - the repo URL;
   - the live URL (from week 5, the production URL **and the screenshot**);
   - the link to your final commit;
   - for the capstone final: the link to the `v1.0` release and the demo video link.

   Reflections, peer reviews and other personal writing are separate Canvas assignments. They never go in the repo.

We grade the commit you submitted. You can keep working afterwards, but later commits only count if you resubmit before the deadline (or before your extended deadline if you use a [grace token](../assessment/README.md#late-work-and-grace-tokens)).

> [!IMPORTANT]
> Keep project repos **public** unless you have a reason not to. GitHub Pages on a free account needs a public repo. A private repo is fine for the micro-app and capstone if it's on your **personal** account (Vercel's free plan can't deploy private repos owned by an organization) and you add your instructor as a collaborator. Public means **anyone** can read every file and every old commit, which is one more reason never to commit a secret.

**Learning on your own?** Add a link to each finished project on your home page. That list becomes your portfolio.
