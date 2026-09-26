# Week 3 — Spec First

> A spec is the prompt for the whole project.

| | |
|---|---|
| **Studio** | 3 hours: 20-minute talk, 10-minute demo, about 2-hour lab |
| **Tools** | Your chat assistant (Gemini Canvas; fallbacks in [TOOLS.md](../../TOOLS.md)) · Google AI Studio **Build** and Bolt (fallbacks: Lovable, v0, Replit) · GitHub, github.dev, GitHub Pages |
| **You'll build** | The spec for Project 1, two builder-made versions scored against it, and the start of the version you keep: plain HTML, CSS and JavaScript in your own repository |
| **Due this week** | Project 1 version 1 live on GitHub Pages, with a README acceptance table, PROMPTS.md and an AI-free bake-off reflection ([homework](homework.md)) |

## Learning objectives

By the end of this week you can:

1. Write a one-page spec (`SPEC.md`) with a problem, a user, prioritized user stories, constraints and an out-of-scope list.
2. Write acceptance criteria in the form **WHEN … THE APP SHALL …** that anyone can check by using the app, including edge cases.
3. Explain what a browser app builder generates behind the scenes (a framework, a build step, sometimes a server, a database and a login), and how to export your work so you are not locked in.
4. Read a tool's usage dashboard and stay inside a credit budget.
5. Judge an app against written criteria instead of by how it looks.
6. Start Project 1 in its own public repository as three plain files, live on GitHub Pages.

## Before class

- [ ] Finish the week 2 homework.
- [ ] Choose two or three ideas for **Project 1: A Tool I'd Actually Use** (single user, data saved in the browser, no login, no real data about other people). There's an idea list in [lab Part 1](lab.md#part-1--choose-your-project-1-idea-10-min) and more in the [project brief](../../projects/project-1-useful-tool.md).
- [ ] Sketch the main screen of your favorite idea on paper: five minutes, boxes and labels only. Bring the paper or a photo.
- [ ] Read [example-spec.md](example-spec.md) (10 minutes).
- [ ] Check that you can sign in to Google AI Studio (18+) and Bolt. Under 18, or in the EEA, UK or Switzerland? Your instructor will use [instructor/variants.md](../../instructor/variants.md).

## Studio agenda

| Time | Block |
|---|---|
| 0:00–0:10 | Show and tell: two week-2 games |
| 0:10–0:30 | Concept talk ([slides](slides.md)): specs, acceptance criteria, app builders, the 70% problem |
| 0:30–0:40 | Live demo: the example spec goes through an AI critique, then into a builder, and is scored against its criteria |
| 0:40–2:40 | [Lab](lab.md): choose an idea, write your spec, peer and AI review, builder bake-off, start your own repository (with a 10-minute break) |
| 2:40–2:50 | Debrief: the class bake-off results board |
| 2:50–3:00 | Exit ticket (AI-free) and homework preview |

## Materials

| File | What it's for |
|---|---|
| [slides.md](slides.md) | The 20-minute concept talk |
| [lab.md](lab.md) | Step-by-step studio lab |
| [homework.md](homework.md) | Core and stretch homework, with a deliverables checklist |
| [example-spec.md](example-spec.md) | A complete model spec, with notes on why it works |
| [bake-off-scorecard.md](bake-off-scorecard.md) | The table you fill in while testing the builders |
| [instructor-notes.md](instructor-notes.md) | Run sheet, demo script, pitfalls |
| [templates/SPEC.md](../../templates/SPEC.md) · [PROJECT_README.md](../../templates/PROJECT_README.md) · [PROMPTS.md](../../templates/PROMPTS.md) · [REFLECTION.md](../../templates/REFLECTION.md) | Templates you'll copy into your Project 1 repository |
| [projects/project-1-useful-tool.md](../../projects/project-1-useful-tool.md) | The full Project 1 brief |

## Key ideas

**A spec is the prompt for the whole project.** In week 2 you learned that one giant prompt produces code you can't change later. A spec solves the same problem one level up: before any prompt, you write one page that says who the tool is for, what it must do, and what it won't do. Everything that reads it later (a classmate, an app builder, a chat assistant and, in week 6, an agent) builds from the same page. Use [templates/SPEC.md](../../templates/SPEC.md).

**[User stories](../../resources/glossary.md#user-story) and priorities.** Each feature is written from the user's side: *As a student, I want to …, so that …*. Mark each one **MUST** (useless without it), **SHOULD** or **COULD**. The MUSTs make your MVP, the *minimum viable product*: the smallest version that is actually useful. Three to five MUSTs is plenty for Project 1.

**[Acceptance criteria](../../resources/glossary.md#acceptance-criterion) you can check by using the app.** A criterion says exactly what happens in one situation: **WHEN** I press Add with an empty box, **THE APP SHALL** add nothing and show "Please type a name". This format comes from [EARS](../../resources/glossary.md#ears), which AWS's Kiro tool uses to turn requirements into specs for AI ([Kiro](https://kiro.dev/blog/introducing-kiro/); [EARS](https://en.wikipedia.org/wiki/Easy_Approach_to_Requirements_Syntax)). "Easy to use" is not a criterion, because nobody can check it. Include **[edge cases](../../resources/glossary.md#edge-case)**, the unusual situations where bugs live: empty input, very long input, duplicates, reloading the page, a small phone screen.

**Out of scope is a feature.** The out-of-scope list names what you are *not* building: login, sync, charts, dark mode. It stops you, and the AI, from wandering. A **[wireframe](../../resources/glossary.md#wireframe)** (a rough sketch of the screen) does the same for layout. Multimodal AIs can read a photo of a paper sketch.

**What [app builders](../../resources/glossary.md#app-builder) are.** Browser app builders such as Google AI Studio's Build mode, Bolt, Lovable, v0 and Replit take a description and produce a whole running app. Behind the preview is a real project: often a JavaScript framework such as React (a large library that shapes how the app is written), a build step, and sometimes a server, a database and a login. Google documents that AI Studio Build creates React and Node apps and can set up a Firestore database and Firebase login automatically ([Google AI Studio docs](https://ai.google.dev/gemini-api/docs/aistudio-build-mode)).

**Lock-in and credits.** If a builder shuts down or changes its free tier, an app that lives only there goes with it. Some builders the course used to recommend have already closed ([TOOLS.md](../../TOOLS.md#do-not-use-in-this-course)). So export to GitHub. Builders also run on credits. Read the usage dashboard before and after you work, and set a budget. Students in CMU's AI coding course ran out of free credits in the middle of assignments ([CMU 15-113](https://www.cs.cmu.edu/~113/bestPractices.html)).

**The 70% problem.** Addy Osmani describes non-engineers who get about 70% of the way very fast, then stall on the last 30% (edge cases, fixes that break something else) because they have no mental model of the code ([Osmani](https://addyo.substack.com/p/the-70-problem-hard-truths-about)). Your acceptance criteria are how you find that 30%. **Judge by criteria, not vibes.** A polished app that fails AC3 fails AC3.

**Why you keep a plain version.** Your Project 1 stays as three plain files (`index.html`, `style.css`, `app.js`) with no framework and no build step. You can read every line, next week you'll debug them with the AI switched off, and GitHub Pages hosts them free.

## Understanding check

The [week 3 exit ticket](../../assessment/exit-tickets.md#week-3) is AI-free. Its central question: *given a spec and what an app actually does, which acceptance criteria fail, and why?* To check yourself first:

- Point to one of your own criteria and explain how a stranger would test it.
- Name two edge cases in your spec and say why each one could break.
- Explain one thing a builder generated that you did *not* ask for, and why that matters.

## Homework

Core (about 3 hours): Project 1 **version 1** live on GitHub Pages, passing at least half of your MUST criteria; a README with an acceptance table; PROMPTS.md; an AI-free reflection on the bake-off. Stretch: export a builder's version to GitHub, deploy it, and compare it with your plain version. Details: [homework.md](homework.md). Project 1 is graded at the end of week 4 ([rubric](../../assessment/rubrics.md#project-1)).

## If a tool is down

| If this fails | Do this |
|---|---|
| Google AI Studio (down, age-restricted, or out of quota) | Use Bolt as builder A and Lovable, v0 or Replit as builder B |
| Every builder is unavailable | Run the bake-off with two chat assistants instead (for example Gemini Canvas and ChatGPT), with the same prompt and scorecard |
| Your chat assistant (Part 5) | Switch to a fallback in [TOOLS.md](../../TOOLS.md) and paste your SPEC.md into a fresh chat |
| GitHub Pages is slow to update | Wait up to 10 minutes and check the **Actions** tab. Keep testing in the chat assistant's preview meanwhile |
| Out of credits anywhere | [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |

## Going further

- Kiro's guide to feature specs, with more EARS examples: <https://kiro.dev/docs/specs/feature-specs/>
- GitHub's Spec Kit, a spec → plan → tasks → implement workflow for AI agents: [GitHub blog](https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/)
- Addy Osmani, "The 70% problem": <https://addyo.substack.com/p/the-70-problem-hard-truths-about>
- The course [reading list](../../resources/reading-list.md) and [prompt patterns](../../resources/prompt-patterns.md)
