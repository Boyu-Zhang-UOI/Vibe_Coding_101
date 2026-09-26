# Capstone (weeks 6–8)

> Build, secure and ship a full-stack web app of your choice. An AI agent does much of the typing. You do the directing, the checking and the explaining.

| | |
|---|---|
| **Weeks** | 6–8 (pitch due end of week 5) |
| **Solo or pair** | Either. Pairs take on a bigger scope and are examined individually ([details](#working-solo-or-in-a-pair)) |
| **Starter** | [`projects/capstone-starter/`](capstone-starter/) · [how to start from a starter](../setup/codespaces.md#start-a-project-from-a-starter) |
| **Repo** | Its own repo on your **personal** GitHub account, named after what it does, for example `study-buddy` |
| **Hosting** | Vercel, plus Supabase if your app stores data that more than one person shares. Current tools and fallbacks: [TOOLS.md](../TOOLS.md) |
| **Due** | Pitch: end of week 5 · Milestone 1: end of week 6 · Milestone 2: end of week 7 · Final: end of week 8 |
| **Graded as** | [Capstone rubric](../assessment/rubrics.md#capstone) (30% of the course); also [walkthrough 2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6), [walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8) and your final reflection |
| **Step-by-step labs** | [Week 6](../weeks/06-agents/lab.md) · [Week 7](../weeks/07-security-and-review/lab.md) · [Week 8](../weeks/08-ship-it/lab.md) |

## What you'll build

A web app with a live URL that solves a real (small) problem for a real (possibly imaginary) user, built from your own spec with an [AI agent](../resources/glossary.md#agent): an AI that edits files and runs commands in your repo while you supervise. It follows the [Safe Loop](../resources/safe-loop.md) the whole way: describe, plan, one small step, test, read the diff, commit.

The capstone is graded mostly on **how well you specified, tested, secured and documented** your app, and whether you can **explain** it. A working demo is required, but it isn't enough on its own. That's deliberate: AI makes it easy to build a demo that works once, and much harder to build something that handles the edge cases ([Utah CS 3960](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)).

Stuck for an idea? See [capstone-ideas.md](capstone-ideas.md).

## Requirements

### Feature types: include at least two

Your app must include **at least two** of these four (pairs: see [below](#working-solo-or-in-a-pair)):

| | Feature type | What it means | Example |
|---|---|---|---|
| **(a)** | **Server-side API call with a hidden key** | A route in `api/` calls a service that needs a key. The key lives in environment variables, never in `public/` | An LLM feature: summarize, classify, suggest, quiz |
| **(b)** | **Database with access rules and/or sign-in** | Data saved in a database, protected by [row-level security](../resources/glossary.md#row-level-security-rls) (RLS: database rules that decide who can read or change each row), and/or user accounts ([authentication](../resources/glossary.md#authentication): proving who you are) | Each user sees only their own entries; anyone can add to a guestbook, but only the owner can delete |
| **(c)** | **Data visualization** | A chart or diagram drawn from your app's own data | A bar chart of study minutes per week |
| **(d)** | **External public API** | Your app fetches live data from someone else's public service | Weather, books, public holidays, open city data |

**One piece of work counts once.** If a weather service needs a key and you call it through your server, count it as (a) **or** (d), not both. Check a public API's terms and whether it needs a key before you pitch it.

**Charts and other libraries:** plain SVG or `<canvas>` drawing works without adding anything. If you want a library, check it like any new package ([safety contract](../setup/safety-contract.md) rule 6) and ask your instructor first.

### Deliverables

All of these, in one repo (the starter already contains adapted templates for the documents):

| Deliverable | What it must contain |
|---|---|
| **Live URL** | The deployed app. It works in a private window, on a phone and a laptop |
| **Repo** | All code and documents, with a history of small commits, including commits before and after agent tasks |
| **`README.md`** | From the [template](../templates/PROJECT_README.md): live URL, demo video link, screenshot, how to use it, how it works, **where authorization is enforced**, **where each key lives**, status against the spec, known issues, credits |
| **`SPEC.md`** | Your spec (🟡 you write it; the AI may critique it), with testable WHEN … THE APP SHALL … criteria, including edge cases, and at least one criterion for each feature type you chose |
| **`AGENTS.md`** | Instructions for your agent, edited for this project (not the unchanged template). [Template](../templates/AGENTS.md) |
| **`PROMPTS.md`** | Your key prompts and agent sessions, what the agent got wrong, how you caught it, and what you wrote or decided yourself. [Template](../templates/PROMPTS.md) |
| **`TESTS.md`** | **At least 3 automated tests** that pass with `npm test`, **and at least 3 manual edge-case tests** with dated results. [Template](../templates/TESTS.md) |
| **`SECURITY_CHECKLIST.md`** | Every applicable item ticked, each with one line of evidence. [Template](../templates/SECURITY_CHECKLIST.md) |
| **Demo video** | 2–3 minutes, linked from the README ([what to show](#demo-video)) |
| **Final reflection** | AI-free (🔴), submitted on the course site ([prompts](#final-reflection)) |

**Automated tests** are code that checks your code (`tests/*.test.js`, run by `npm test`). Keep testable logic in `public/lib/` (or `lib/` for server-only code), as in the starter, so tests can import it. Tests must not need the internet or a real key. **Manual tests** are steps a person follows in the browser.

```bash
npm test
npm run check:secrets
```

### Demo video

Two to three minutes, recorded in the [week 8 lab](../weeks/08-ship-it/lab.md), which lists free built-in screen recorders. Tell it as a story:

| About | Show |
|---|---|
| 15 seconds | **Problem:** who it's for and what it solves |
| 60–90 seconds | **Demo:** the main task, live, including your feature types and **one edge case** handled well (empty input, an error) |
| 20 seconds | **How:** one line on how it's built, and where the data and secrets live |
| 20 seconds | **What broke and what you learned:** one honest moment |

- Upload it as an unlisted video, or wherever your instructor says, and link it in the README.
- Speak over it or add captions. Automatic captions are fine if you fix the mistakes.
- Use made-up data only. **Never show** `.env`, your hosting or database dashboards, API keys or real people's information.
- Pairs: both partners speak.

### Final reflection

🔴 Write it yourself, without AI: 400–600 words, submitted on the course site. Use the [reflection template](../templates/REFLECTION.md) as a starting shape. This one has a specific job: **compare how much you *felt* you understood while building with what you could *actually* explain afterward.** Anchor it in concrete moments (a prompt, a commit, an error, a walkthrough question):

1. A time you felt you understood something but couldn't explain it later (in a walkthrough, or while fixing a bug).
2. A time it went the other way: you doubted yourself, but could explain it fine.
3. One habit from the Safe Loop that changed how you work.
4. What you'd tell a friend starting this course.

Before you write, look back at your answers to the [pre-course self-assessment](../assessment/self-assessment.md), and take the post-course one. The full instructions are in the [week 8 homework](../weeks/08-ship-it/homework.md).

## The pitch

**Due end of week 5**, before the week 6 studio, on the course site. It takes about 30 minutes, and it saves you from spending three weeks on an idea that can't be finished.

Copy this template, fill it in and submit it:

```markdown
# Capstone pitch: <working title>

**Name(s):** … · **Solo or pair:** …

## Problem and user
One paragraph (4–6 sentences): who has what problem, why it matters to them,
and how your app will help.

## Sketch
A photo of a paper sketch of the main screen, or a text sketch.

## Feature types (at least two; pairs at least three)
- [ ] (a) Server-side API call with a hidden key: what for?
- [ ] (b) Database with access rules and/or sign-in: what data, and who may see or change it?
- [ ] (c) Data visualization: what chart, of what data?
- [ ] (d) External public API: which one, and what for?

## Out of scope
At least three things you will NOT build.

## Biggest risk
The one thing most likely to go wrong, and your plan B.
```

Your instructor replies before the week 6 studio with one of: **Go**, **Go if you shrink it** (with a suggestion), or **Rethink** (let's talk). Most pitches need some shrinking. See [how to shrink an idea](capstone-ideas.md#how-to-shrink-an-idea).

## Milestones

The milestones count as your week 6 and week 7 homework, checked for completion ([weekly rubric](../assessment/rubrics.md#weekly-labs-and-homework)). They exist so you get feedback while there's still time to act on it.

| When | Milestone | You should have |
|---|---|---|
| End of week 5 | **Pitch** | Pitch submitted |
| Week 6 studio | Kickoff | Repo created from the starter; `SPEC.md` draft; `AGENTS.md` edited; first feature built with an agent, test first (a test that fails, then passes); **oral walkthrough 2** |
| **End of week 6** | **Milestone 1: walking skeleton** | A live URL on Vercel, even if bare. Complete `SPEC.md`. One working feature with at least one passing automated test. `PROMPTS.md` entries for each agent session. Commits before and after every agent task |
| Week 7 studio | Security and review | Row-level security lab applied to your own database (if you chose (b)); a security sweep; a human code review of a partner's repo ([CODE_REVIEW template](../templates/CODE_REVIEW.md)); a project handoff |
| **End of week 7** | **Milestone 2: feature complete** | Every chosen feature type working, at least roughly. At least 3 automated tests passing. Manual edge-case tests drafted in `TESTS.md`. A first pass of `SECURITY_CHECKLIST.md` with evidence. Recommended (required for pairs): changes merged through [pull requests](../resources/glossary.md#pull-request) (proposed changes on a branch, reviewed before they join the main code) |
| Week 8 studio | Ship | [Polish checklist](../weeks/08-ship-it/polish-checklist.md); demo rehearsal; [Project Fair](../weeks/08-ship-it/project-fair.md); **oral walkthrough 3** |
| **End of week 8** | **Final** | Everything in [What "done" means](#what-done-means) |

Deploy on day one, even if the app is just the starter. Deployment problems are much easier to fix early; students in other courses reported that deployment took more time than coding ([CMU 15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)).

## Working solo or in a pair

**Solo** is the default. **Pairs** are welcome, with these rules:

- **Bigger scope.** Pairs include **at least three** of the four feature types, or two plus a scope increase your instructor approves at the pitch.
- **Both partners build.** Each partner commits their own work under their own GitHub account. Work on branches, and merge through pull requests reviewed by the other partner.
- **Contribution statement.** Add a `## Contributions` section to the README, agreed and signed by both:

  ```markdown
  ## Contributions

  | Area | Mainly built by | Key commits / pull requests |
  |---|---|---|
  | Sign-in and RLS policies | Sam | #4, #7 |
  | LLM summary route | Alex | #5 |
  | Chart | Both (pair-programmed) | #9 |

  We both reviewed every pull request. Signed: Sam, Alex
  ```

- **Individual parts.** Each partner does their own **oral walkthroughs**, their own **final reflection** and their own **peer reviews**. In walkthroughs you can be asked about any part of the app, but detailed questions focus on the parts your contribution statement says you built.
- **Same score for shared work.** Both partners normally get the same capstone score. If the history and the contribution statement show a big imbalance, your instructor will talk with both of you and may adjust individual scores.
- **Grace tokens:** using one on the capstone costs each partner one token.
- **If a pair splits up,** tell your instructor early. Each partner keeps a copy of the repo and reduces the scope.

Tip: pair-program for the hard parts, taking turns as "driver" (typing) and "navigator" (reading and checking), and swap every 20–30 minutes.

## What "done" means

Your capstone is done when all of these are true:

- [ ] The live URL works in a private window, on a phone and a laptop.
- [ ] Every MUST acceptance criterion passes, or the README's status table honestly says which don't and why.
- [ ] `npm test` passes with at least 3 automated tests, and no test was deleted or switched off to make that happen.
- [ ] `TESTS.md` has at least 3 manual edge-case tests with dated results.
- [ ] `SECURITY_CHECKLIST.md` is complete, with evidence on every ticked item, and `npm run check:secrets` finds nothing.
- [ ] You can say in one sentence **where authorization is enforced** ([authorization](../resources/glossary.md#authorization): the rules for what each user is allowed to do), and the README says it too.
- [ ] `SPEC.md` and `AGENTS.md` describe the app you actually built.
- [ ] `PROMPTS.md` is honest and up to date.
- [ ] The README is complete and links the 2–3 minute demo video.
- [ ] The [polish checklist](../weeks/08-ship-it/polish-checklist.md) is done.
- [ ] Your final commit has a GitHub release tagged `v1.0`. (On your repo page: **Releases → Create a new release**, type `v1.0` as the tag, add a one-line summary, **Publish**. Menus move; if you can't find it, ask your assistant how to create a GitHub release.)
- [ ] Your final reflection is submitted.
- [ ] You can explain any part of it with the AI off.

## Rules and safety

- The [three project rules](README.md#the-three-project-rules): no real payments, no real personal data about other people, nothing you'd miss if an agent deleted it.
- **Test accounts only.** If your app has sign-in, create test users with made-up details. At the Project Fair, ask classmates to use fake data too.
- **Contain the agent.** Work in a Codespace, commit before and after every agent task, approve any command that deletes or moves files, and never give the agent a production key or a real password. See the [safety contract](../setup/safety-contract.md).
- **Keep keys on the server** (as in the [AI micro-app](ai-micro-app.md)), and use the database's publishable key in the browser only with row-level security switched on for every table.
- **Free services can pause or run out.** Free databases may pause when idle, and AI credits may run out mid-week. Check [TOOLS.md](../TOOLS.md), and open your app a day before the Fair to make sure it wakes up.

## AI use on the capstone

| | On the capstone |
|---|---|
| 🟢 **Expected** | Agent-built features, plans, tests, explanations, reviewing your diffs, a comparison AI code review (after you've written yours) |
| 🟡 **Limited** | `SPEC.md`: the AI may critique it, not write it |
| 🔴 **Not allowed** | Your peer code review, weekly and final reflections, exit tickets, oral walkthroughs 2 and 3 |

## How it's graded

The [capstone rubric](../assessment/rubrics.md#capstone) scores the spec, tests, security checklist, deployment, feature types, process (`PROMPTS.md`, `AGENTS.md`, git), README and video, and code you can explain. A working demo is required but not sufficient: without a working live URL the capstone is capped at half marks, and a working demo alone earns only a small part of the points.

## Submit

Follow [How to submit](README.md#how-to-submit): repo URL, live URL, the link to your final commit (the one tagged `v1.0`), your demo video link and your final reflection.

## If you get stuck

- **The agent keeps breaking things:** stop after two failed attempts (the [two-strikes rule](../resources/safe-loop.md#the-two-strikes-rule)), go back to your last good commit, and give it a smaller task with a clearer "Done when".
- **Your feature is too big:** move it to "Out of scope" in `SPEC.md`, and tell your instructor. A smaller finished app beats a bigger broken one.
- **Out of credits:** [I ran out of free credits](../resources/troubleshooting.md#i-ran-out-of-free-credits).
- **Database questions:** redo the [RLS lab](../weeks/07-security-and-review/rls-lab/README.md) steps on your own table.
- More help: [troubleshooting](../resources/troubleshooting.md), office hours, and the course tutor ([hint-only mode](../instructor/course-tutor.md)).
