# Week 3 — Spec First

> A spec is the prompt for the whole project.

## This week at a glance

| Item | Details |
|---|---|
| **Before Studio A** (≤1 h) | Read this page and the [example spec](example-spec.md) (10 min). Choose two or three ideas for Project 1 and sketch the main screen of your favorite on paper (5 min, boxes and labels only). Check that you can sign in to Google AI Studio (18+) or Bolt |
| **Studio A** | Write your spec (`SPEC.md`) by hand, swap specs for a peer review, and run the **Goldfish test**: does a fresh AI chat understand your spec without asking you? Leave with the spec in its own repository |
| **Studio B** | The **builder bake-off** as a jigsaw: you test one app builder against your spec, then compare scorecards with a partner who tested the other. Then start Project 1 in a Codespace, previewing every step before you commit |
| **Due before next week's Studio A** (default 11:59 pm the night before) | Project 1 **version 1** live on GitHub Pages, passing at least half your MUST criteria · `README.md` with an acceptance table · `PROMPTS.md` with your Goldfish test and a check and teach-back for each step · `docs/bake-off-scorecard.md` · on Canvas: your written spec review and your bake-off Verdict (this week's reflection). Details: [homework](homework.md) |
| **AI use this week** | 🟢 AI on: the app builders, building Project 1 in a chat · 🟡 AI limited: the Goldfish test (the AI reads your spec and asks questions; it never rewrites it) · 🔴 AI off: writing `SPEC.md`, the peer review, the Verdict, the exit ticket |
| **Must read** | This page, the [lab](lab.md), the [homework](homework.md) |
| **Look up when needed** | [Example spec](example-spec.md) · [Bake-off scorecard](bake-off-scorecard.md) · [SPEC template](../../templates/SPEC.md) · [The Safe Loop](../../resources/safe-loop.md) · [Project 1 brief](../../projects/project-1-useful-tool.md) · [Troubleshooting](../../resources/troubleshooting.md) · [Screen reader and keyboard guide](../../resources/accessibility.md) |
| **Minimum to keep up** | A public Project 1 repository with `SPEC.md` and an `index.html` that opens at your GitHub Pages address, even if only one criterion passes. Week 4 opens this repository in a Codespace |
| **Time** | Studios 6 h · outside about 11 h (prep up to 1 h, homework core about 9½ h); stretch is optional |

## Learning objectives

By the end of this week you can:

1. Write a one-page spec (`SPEC.md`) with a problem, a user, prioritized user stories, constraints and an out-of-scope list.
2. Write acceptance criteria in the form **WHEN … THE APP SHALL …** that anyone can check by using the app, including edge cases.
3. Test a spec on an AI with no memory of you (the Goldfish test), and revise it from what the AI asked or got wrong.
4. Explain what a browser app builder generates behind the scenes (a framework, a build step, sometimes a server, a database and a login), and how to export your work so you are not locked in.
5. Judge an app against written criteria instead of by how it looks, and read a tool's usage dashboard.
6. Start Project 1 in its own repository as three plain files, testing each step in a Codespace preview **before** you commit it.

## Before class

- [ ] Finish the week 2 homework.
- [ ] Choose two or three ideas for **Project 1: A Tool I'd Actually Use** (single user, data saved in the browser, no login, no real data about other people). There's an idea list in [lab Part 1](lab.md#part-1--choose-your-project-1-idea-10-min) and more in the [Project 1 brief](../../projects/project-1-useful-tool.md).
- [ ] Sketch the main screen of your favorite idea on paper. Bring the paper or a photo.
- [ ] Read the [example spec](example-spec.md).
- [ ] Check your sign-ins for Google AI Studio and Bolt. You'll use one of them in Studio B. Under 18, or in the EEA, UK or Switzerland? Your instructor will tell you which builder to use ([course variants](../../instructor/variants.md)).

## Studio agenda

| Studio | What happens |
|---|---|
| **Studio A — Learn & build** | Recap, concept talk ([slides](slides.md)) and a live demo of the Goldfish test. Lab: choose your idea, write `SPEC.md` with the AI off, peer review, the Goldfish test, then put the spec in a new repository. Checkpoint share: one question the Goldfish asked you |
| **Studio B — Workshop** | Show and tell. Lab: the builder bake-off jigsaw, then start Project 1 in a Codespace with the Safe Loop. Project work time, debrief on the class results board, exit ticket (🔴 AI off) |

## Materials

| File | What it's for |
|---|---|
| [Lab](lab.md) | Step-by-step, both studios (must read) |
| [Homework](homework.md) | Core and stretch, with the deliverables checklist (must read) |
| [Example spec](example-spec.md) | A complete model spec, with notes on why it works |
| [Bake-off scorecard](bake-off-scorecard.md) | The table you fill in while testing a builder |
| [Slides](slides.md) | The 20-minute concept talk |
| Templates: [SPEC](../../templates/SPEC.md) · [PROMPTS](../../templates/PROMPTS.md) · [Project README](../../templates/PROJECT_README.md) | Copied into your Project 1 repository |

## Key ideas

If you're working through this week on your own, read this section, then do the [lab](lab.md). The [self-paced path](../../resources/self-paced.md) says what to do instead of the pair activities.

**A spec is the prompt for the whole project.** In week 2 you learned that one giant prompt produces code you can't change later. A spec solves the same problem one level up: before any prompt, you write one page that says who the tool is for, what it must do, and what it won't do. Everything that reads it later (a classmate, an app builder, a chat assistant and, in week 6, an agent) builds from the same page. Writing well turns out to matter: in a 2026 study of 100 students, both writing skill and computing grades predicted how well students vibe-coded ([Thorgeirsson et al.](https://arxiv.org/abs/2603.14133)).

**[User stories](../../resources/glossary.md#user-story) and priorities.** Each feature is written from the user's side: *As a student, I want to …, so that …*. Mark each one **MUST** (useless without it), **SHOULD** or **COULD**. The MUSTs make your MVP, the *minimum viable product*: the smallest version that is actually useful. Three to five MUSTs is plenty for Project 1.

**[Acceptance criteria](../../resources/glossary.md#acceptance-criterion) you can check by using the app.** A criterion says exactly what happens in one situation: **WHEN** I press Add with an empty box, **THE APP SHALL** add nothing and show "Please type a name". This format comes from [EARS](../../resources/glossary.md#ears), which AWS's Kiro tool uses to turn requirements into specs for AI ([Kiro](https://kiro.dev/blog/introducing-kiro/)). "Easy to use" is not a criterion, because nobody can check it. Include **[edge cases](../../resources/glossary.md#edge-case)**, the unusual situations where bugs live: empty input, very long input, duplicates, reloading the page, a small phone screen.

**Out of scope is a feature.** The out-of-scope list names what you are *not* building: login, sync, charts, dark mode. It stops you, and the AI, from wandering. A **[wireframe](../../resources/glossary.md#wireframe)** (a rough sketch of the screen) does the same for layout.

**The Goldfish test.** A fresh chat knows nothing about you, your idea or this class, like a goldfish that remembers nothing. Paste only your spec into a new chat and ask what it would build and what it would have to ask you. Every question it asks is a gap in your spec, and every builder and agent that reads the spec later will fall into the same gap. Fix the spec, not the chat. Michigan's AI software engineering course uses the same fresh-session test for its design documents ([EGM](https://github.com/eecs498-aase/materials/blob/HEAD/egm/README.md)).

**What [app builders](../../resources/glossary.md#app-builder) are.** Browser app builders such as Google AI Studio's Build mode, Bolt, Lovable and v0 take a description and produce a whole running app. Behind the preview is a real project: often a JavaScript framework such as React (a large library that shapes how the app is written), a build step, and sometimes a server, a database and a login. Google documents that AI Studio Build creates React and Node apps and can set up a database and login automatically ([Google AI Studio docs](https://ai.google.dev/gemini-api/docs/aistudio-build-mode)).

**Lock-in and credits.** If a builder shuts down or changes its free tier, an app that lives only there goes with it. Some builders the course used to recommend have already closed ([Tool Handout](../../TOOLS.md#do-not-use-in-this-course)), so anything you keep lives in GitHub. Builders also run on credits: read the usage dashboard before and after you work. Students in CMU's AI coding course ran out of free credits in the middle of assignments ([CMU 15-113](https://www.cs.cmu.edu/~113/bestPractices.html)).

**The 70% problem.** Addy Osmani describes non-engineers who get about 70% of the way very fast, then stall on the last 30% (edge cases, fixes that break something else) because they have no mental model of the code ([Osmani](https://addyo.substack.com/p/the-70-problem-hard-truths-about)). Your acceptance criteria are how you find that 30%. **Judge by criteria, not vibes.** A polished app that fails AC3 fails AC3.

**Test before you commit.** From this week you build in a **[Codespace](../../resources/glossary.md#codespace)**, where a small web server shows your page before anything is saved to GitHub. That puts the Safe Loop in the right order: **check first** (write down what you'll try before you ask for the code), then step, test in the preview, read, write a short **teach-back** in `PROMPTS.md`, and only then commit ([The Safe Loop](../../resources/safe-loop.md#check-first)). Your acceptance criteria already are your checks.

**Why you keep a plain version.** Your Project 1 stays as three plain files (`index.html`, `style.css`, `app.js`) with no framework and no build step. You can read every line, next week you'll debug them with the AI switched off, and GitHub Pages hosts them free.

## Understanding check

The [week 3 exit ticket](../../assessment/exit-tickets.md#week-3) is 🔴 AI off and graded on completion, not correctness. Its central question: *given a spec and what an app actually does, which acceptance criteria fail, and why?* To check yourself first:

- Point to one of your own criteria and explain how a stranger would test it.
- Name two edge cases in your spec and say why each one could break.
- Name one question the Goldfish test asked, and the line of your spec you changed because of it.
- Explain one thing a builder generated that you did *not* ask for, and why that matters.

## Homework

Core (about 9½ hours): Project 1 **version 1** live on GitHub Pages, passing at least half of your MUST criteria, built step by step in a Codespace; a README with an acceptance table; `PROMPTS.md`; your scorecard. On Canvas: your written spec review and the bake-off Verdict, which is this week's reflection. Stretch: run the other builder, or export a builder's version and compare it with yours. Details: [homework](homework.md). Project 1 is graded at the end of week 4 ([Project 1 rubric](../../assessment/rubrics.md#project-1)).

## If a tool is down

| If this fails | Do this |
|---|---|
| Google AI Studio (down, age-restricted, or out of quota) | Use Bolt as builder A, and Lovable or v0 as builder B ([Tool Handout](../../TOOLS.md)) |
| Every builder is unavailable | Run the bake-off with two chat assistants instead (for example Gemini Canvas and ChatGPT), with the same prompt and scorecard |
| Your chat assistant (Goldfish test or building) | Switch to a fallback in the [Tool Handout](../../TOOLS.md) and paste your `SPEC.md` into a fresh chat |
| Codespaces won't start, or you're out of hours | Edit in github.dev (press `.` on your repository page) and test on GitHub Pages after each commit. Slower, but it works ([troubleshooting](../../resources/troubleshooting.md#my-codespace-wont-start-or-im-out-of-hours)) |
| GitHub Pages is slow to update | Wait up to 10 minutes and check the **Actions** tab. Keep testing in your Codespace preview meanwhile |
| Out of credits anywhere | [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |

## Going further

- Kiro's guide to feature specs, with more EARS examples: <https://kiro.dev/docs/specs/feature-specs/>
- GitHub's Spec Kit, a spec → plan → tasks → implement workflow for AI agents: [GitHub blog](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)
- Addy Osmani, "The 70% problem": <https://addyo.substack.com/p/the-70-problem-hard-truths-about>
- The course [reading list](../../resources/reading-list.md) and [prompt patterns](../../resources/prompt-patterns.md)
