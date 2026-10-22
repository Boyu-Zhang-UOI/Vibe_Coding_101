# Capstone (weeks 6–8)

> Build, secure and ship a full-stack web app of your choice. An AI agent does much of the typing. You do the directing, the checking and the explaining.

| Item | Details |
|---|---|
| **Weeks** | 6–8. The pitch is due 72 hours before week 6 Studio A |
| **Solo or pair** | Either. Pairs take on a bigger scope and are examined individually ([details](#working-solo-or-in-a-pair)) |
| **Starter** | [`projects/capstone-starter/`](capstone-starter/) · [how to start from a starter](../setup/codespaces.md#start-a-project-from-a-starter) · [feature patterns](capstone-starter/README.md#feature-patterns) |
| **Repo** | Its own repo on your **personal** GitHub account, named after what it does, for example `study-buddy`. Create it **before week 6 Studio A** |
| **Hosting** | Vercel, plus Supabase if your app stores data that more than one person shares. Current tools and fallbacks: [TOOLS.md](../TOOLS.md) |
| **Due** | Pitch, Milestone 1 (end of week 6), Milestone 2 (end of week 7) and Final (end of week 8): see [Milestones](#milestones) |
| **Graded as** | [Capstone rubric](../assessment/rubrics.md#capstone) (30% of the course). Milestones 1 and 2 are your week 6 and week 7 homework. Also [walkthrough 2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6), [walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8) and your [final reflection](#final-reflection) |
| **Step-by-step labs** | [Week 6](../weeks/06-agents/lab.md) · [Week 7](../weeks/07-security-and-review/lab.md) · [Week 8](../weeks/08-ship-it/lab.md) |

## What you'll build

A web app at a **production URL** (the main, permanent web address of your deployed app) that solves a real (small) problem for a real (possibly imaginary) user, built from your own spec with an [AI agent](../resources/glossary.md#agent): an AI that edits files and runs commands in your repo while you supervise. It follows the [Safe Loop](../resources/safe-loop.md) the whole way: describe, plan, one small step, test, read the diff, commit. Two habits make the loop safer: **check first** (write the test before you ask for the code, in a separate prompt) and **teach back** (before you commit AI-written code, write 2–3 sentences in `PROMPTS.md` saying what changed and why).

The capstone is graded mostly on **how well you specified, tested, secured and documented** your app, and whether you can **explain** it. A working demo is required, but it isn't enough on its own. That's deliberate: AI makes it easy to build a demo that works once, and much harder to build something that handles the edge cases ([Utah CS 3960](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)).

Stuck for an idea? See [capstone-ideas.md](capstone-ideas.md).

## Milestones

Every capstone deadline and deliverable is defined here, once. Week READMEs and homework pages copy these rows word for word. Unless Canvas (the course's learning management system) says otherwise, each is **due before the next week's Studio A (default 11:59 pm the night before)**.

| Milestone | Due | Deliverables | Graded as |
|---|---|---|---|
| **Pitch** | **72 hours before week 6 Studio A.** Your instructor replies **Go**, **Shrink** or **Rethink** before Studio A | • The [pitch](#the-pitch), on Canvas (🟡 AI limited: the AI may critique it, not write it)<br>• Before Studio A: your capstone repo created from the starter on your personal account, opened in a Codespace, with `npm test` passing | Part of your week 5 score ([AI micro-app rubric](../assessment/rubrics.md#ai-micro-app), pitch row) |
| **Milestone 1: walking skeleton** (end of week 6) | Before week 7 Studio A | • `SPEC.md` complete, with a **Goldfish test** logged in `PROMPTS.md` and the revision it led to<br>• `AGENTS.md` edited for this project, with a **Scope** section, and **trial notes** in `PROMPTS.md` (two small tasks, whether the agent followed the file, one change you made to it)<br>• **At least two features** merged through pull requests, each with an automated test written before the code<br>• Deployed: a working **production URL** on Vercel, plus a screenshot of it, on Canvas<br>• `PROMPTS.md` with an entry for each agent session and a **teach-back** before each agent commit | Week 6 homework ([weekly rubric](../assessment/rubrics.md#weekly-labs-and-homework)) |
| **Milestone 2: feature complete** (end of week 7) | Before week 8 Studio A | • Your **second feature type** working, for example Supabase with row-level security, its grants and policies saved in `supabase/policies.sql`<br>• `SECURITY_CHECKLIST.md` with evidence for every ticked item<br>• **Peer review given:** your written review of a classmate's capstone, on Canvas<br>• **Response to the review you received:** what you changed (link the commits or pull request) and what you decided not to change, and why, on Canvas<br>• **Handoff test:** a classmate tried one small change using only your README and `AGENTS.md`; you fixed what confused them and noted it in `PROMPTS.md` | Week 7 homework ([weekly rubric](../assessment/rubrics.md#weekly-labs-and-homework)); the peer review in [Reflections and peer reviews](../assessment/rubrics.md#reflections-and-peer-reviews) |
| **Final** (end of week 8) | Posted on Canvas: a few days after the Project Fair, and before the University's grade deadline | • Everything in [What done means](#what-done-means)<br>• A GitHub release **`v1.0`** on your final commit<br>• On Canvas: the **production URL and a screenshot** of it working, the repo URL and the link to the `v1.0` release<br>• A 2–3 minute [demo video](#demo-video), linked from the README or submitted on Canvas<br>• Your [final reflection](#final-reflection) on Canvas (🔴 AI off), with your revised personal AI-use rules | [Capstone rubric](../assessment/rubrics.md#capstone); the final reflection in [Reflections and peer reviews](../assessment/rubrics.md#reflections-and-peer-reviews) |

The milestones exist so you get feedback while there's still time to act on it. Milestones 1 and 2 are checked for completion; the capstone rubric judges the finished app.

**Along the way** (graded elsewhere): [oral walkthrough 2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6) in week 6 and [walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8) in week 8; your weekly reflections and exit tickets; the 🔴 AI-off maintenance task on your own capstone in week 7 Studio B; the [Project Fair](../weeks/08-ship-it/project-fair.md) in week 8 Studio B.

**Handoff test access:** your classmate opens your public repo in their own Codespace and tries the change there. They can't push to your repo, and they don't need to. If your repo is private, add them as a collaborator for the week, then remove them.

**Deploy on day one,** even if the app is just the starter. Deployment problems are much easier to fix early; students in other courses reported that deployment took more time than coding ([CMU 15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). Submit the **production URL**, not a preview link: Vercel deletes old preview deployments ([TOOLS.md](../TOOLS.md)).

## The pitch

**Due 72 hours before week 6 Studio A**, on Canvas (Canvas shows the exact time). It takes about 30 minutes, and it saves you from spending three weeks on an idea that can't be finished. 🟡 **AI limited:** you write it; an AI may critique it ("What's the riskiest part? What's missing from my out-of-scope list?").

Copy this template, fill it in and submit it on Canvas:

```markdown
# Capstone pitch: [working title]

**Name(s):** [your name, and your partner's if you're a pair] · **Solo or pair:** [solo / pair]

## Problem and user
One paragraph (4–6 sentences): who has what problem, why it matters to them,
and how your app will help.

## Sketch
A photo of a paper sketch of the main screen, or a text sketch.

## Feature types (at least two; pairs at least three)
- [ ] (a) Server-side API call with a hidden key: what for?
- [ ] (b) Database with access rules and/or sign-in: what data, and who may see or change it?
- [ ] (c) Data visualization: what chart, of what data?
- [ ] (d) External public API: which one, does it need a key, and what for?

Which starter feature patterns will you use? [db.js and policies.sql / chart.js / weather.js / the AI route]

## Out of scope
At least three things you will NOT build.

## Biggest risk
The one thing most likely to go wrong, and your plan B.
```

Your instructor replies before week 6 Studio A with one of:

- **Go:** build it as pitched.
- **Shrink:** go, with a smaller scope (your instructor suggests what to cut). Most pitches need some shrinking. See [how to shrink an idea](capstone-ideas.md#how-to-shrink-an-idea).
- **Rethink:** let's talk before you start.

Pairs who want two feature types plus a scope increase (instead of three feature types) ask for it in the pitch; the reply says whether it's approved. If you use a grace token on the pitch, the reply may come at the start of week 6 Studio A.

## Requirements

### Feature types: include at least two

Your app must include **at least two** of these four (pairs: see [below](#working-solo-or-in-a-pair)). Each one has a tested pattern in the starter that you can copy and adapt; the [starter README](capstone-starter/README.md#feature-patterns) explains each one.

| | Feature type | What it means | Example | Pattern in the starter |
|---|---|---|---|---|
| **(a)** | **Server-side API call with a hidden key** | A route in `api/` calls a service that needs a key. The key lives in environment variables, never in `public/` | An LLM feature: summarize, classify, suggest, quiz | `api/ask.js` with `lib/llm.js` (the same route as week 5) |
| **(b)** | **Database with access rules and/or sign-in** | Data saved in a database, protected by [row-level security](../resources/glossary.md#row-level-security-rls) (RLS: database rules that decide who can read or change each row), and/or user accounts ([authentication](../resources/glossary.md#authentication): proving who you are) | Each user sees only their own entries; anyone can add to a guestbook, but only the owner can delete | `public/config.js` (copied from `public/config.example.js`), `public/lib/db.js` and `supabase/policies.sql` (week 7 Studio A worked example) |
| **(c)** | **Data visualization** | A chart or diagram drawn from your app's own data | A bar chart of study minutes per week | `public/lib/chart.js`: an SVG bar chart with no dependencies, and a tested function that prepares the data (week 6 feature clinic) |
| **(d)** | **External public API** | Your app fetches live data from someone else's public service | Weather, books, public holidays, open city data | `api/weather.js`: a server route that calls a public API with no key, tested with a fake (mocked) response (week 5 mini-lesson, week 6 feature clinic) |

**One piece of work counts once.** If a weather service needs a key and you call it through your server, count it as (a) **or** (d), not both. Check a public API's terms and whether it needs a key before you pitch it.

**Charts and other libraries:** the starter's `chart.js` draws with plain SVG and adds nothing to install. If you want a library instead, check it like any new package ([safety contract](../setup/safety-contract.md), rule 6) and ask your instructor first.

> [!IMPORTANT]
> **Not every key is a secret.** Your Supabase project URL and **publishable** key go in `public/config.js`, where every visitor can read them. That's by design, and it's safe **only** with row-level security switched on for every table, with policies that say who may do what. **Secret** keys (an LLM key, a Supabase secret key) live only in server environment variables: `.env` in your Codespace and the project settings on Vercel, never in `public/`. Use publishable and secret keys; the older `anon` and `service_role` keys are being retired ([TOOLS.md](../TOOLS.md)).

> [!WARNING]
> **Grants and row-level security go together.** New Supabase tables need an explicit grant before the API can see them ([TOOLS.md](../TOOLS.md)). If you hit "permission denied", don't fix it with a bare grant to `anon` (an agent's favorite shortcut): that makes the table public. Add the grant, switch on RLS and write the policies in the same change, and keep all three in `supabase/policies.sql`.

### Deliverables

All of these, in one repo (the starter already contains adapted templates for the documents), except the items marked Canvas:

| Deliverable | What it must contain |
|---|---|
| **Production URL** | The deployed app. It works in a private window, on a phone and a laptop. Submit it on Canvas with a screenshot of it working |
| **Repo** | All code and documents, with a history of small commits, including commits before and after agent tasks. Commits made with AI help end with an `Assisted-by: [tool]` line. Features merged through [pull requests](../resources/glossary.md#pull-request) |
| **`README.md`** | From the [template](../templates/PROJECT_README.md): production URL, screenshot, demo video link, how to use it, how it works, **where authorization is enforced**, **where each key lives**, status against the spec, an honest **Known issues** section, the tools you used and any fallback you switched to, credits. Pairs: a Contributions table |
| **`SPEC.md`** | Your spec (🟡 AI limited: you write it; the AI may critique it), with testable WHEN … THE APP SHALL … criteria, including edge cases, and at least one criterion for each feature type you chose. Revised after a Goldfish test: paste only `SPEC.md` into a fresh chat, and if it can't understand what to build without asking you, improve the spec |
| **`AGENTS.md`** | Instructions for your agent, edited for this project (not the unchanged template), with a **Scope** section that says which folders and tasks the agent may touch. [Template](../templates/AGENTS.md). Remember that `AGENTS.md` is advice, not enforcement: the agent can ignore it |
| **`PROMPTS.md`** | Your key prompts and agent sessions; a **teach-back** before each agent commit; your Goldfish test and `AGENTS.md` trial notes; what the agent got wrong and how you caught it; and the **ownership statement** under "What I wrote or decided myself" (specific code, decisions and changes). [Template](../templates/PROMPTS.md) |
| **`TESTS.md`** | **At least 3 automated tests** that pass with `npm test`, written before the code they check, **and at least 3 manual edge-case tests** with dated results. [Template](../templates/TESTS.md) |
| **`SECURITY_CHECKLIST.md`** | Every applicable item ticked, each with one line of evidence. [Template](../templates/SECURITY_CHECKLIST.md) |
| **`supabase/policies.sql`** | If you chose (b): the grants, `enable row level security` and policies for every table |
| **Demo video** | 2–3 minutes ([what to show](#demo-video)) |
| **Final reflection** | 🔴 AI off, on **Canvas** ([prompts](#final-reflection)) |

**Automated tests** are code that checks your code (`tests/*.test.js`, run by `npm test`). Keep testable logic in `public/lib/` (or `lib/` for server-only code), as in the starter, so tests can import it. Tests must not need the internet or a real key. **Manual tests** are steps a person follows in the browser.

```bash
npm test
npm run check:secrets
npm audit
```

`npm run check:secrets` scans your files **and your git history** for keys. `npm audit` checks your dependencies for known problems.

### Demo video

Two to three minutes, recorded in [week 8 Studio A](../weeks/08-ship-it/lab.md), which lists free built-in screen recorders. Tell it as a story:

| About | Show |
|---|---|
| 15 seconds | **Problem:** who it's for and what it solves |
| 60–90 seconds | **Demo:** the main task, live, including your feature types and **one edge case** handled well (empty input, an error) |
| 20 seconds | **How:** one line on how it's built, and where the data and secrets live |
| 20 seconds | **What broke and what you learned:** one honest moment |

- Upload it as an unlisted video and link it in the README, or submit it on Canvas only and write "Demo video: submitted on Canvas" in the README. A link in a public README can be found by anyone.
- Speak over it or add captions. Automatic captions are fine if you fix the mistakes.
- If recording or speaking is a barrier, a written script with screenshots is accepted instead ([accommodations](../assessment/README.md#accommodations)).
- Use made-up data only. **Never show** `.env`, your hosting or database dashboards, API keys or real people's information.
- Pairs: both partners speak (or both write part of the script).

### Final reflection

🔴 **AI off.** Write it yourself, 400–600 words, and submit it **on Canvas**, not in your repo. Use the [reflection template](../templates/REFLECTION.md) as a starting shape. This one has a specific job: **compare how much you *felt* you understood while building with what you could *actually* explain afterward.** Anchor it in concrete moments (a prompt, a commit, an error, a walkthrough question, an agent claim you checked):

1. A time you felt you understood something but couldn't explain it later (in a walkthrough, or while fixing a bug).
2. A time it went the other way: you doubted yourself, but could explain it fine.
3. One habit from the Safe Loop that changed how you work.
4. **Your revised personal AI-use rules.** Paste the rules you wrote in week 1, then your revised version from week 8 Studio B, and explain one rule you changed and why.
5. What you'd tell a friend starting this course.

Before you write, look back at your answers to the [pre-course self-assessment](../assessment/self-assessment.md) on Canvas, and take the post-course one in week 8 Studio B. The full instructions are in the [week 8 homework](../weeks/08-ship-it/homework.md).

## Working solo or in a pair

**Solo** is the default. **Pairs** are welcome, with these rules:

- **Bigger scope.** Pairs include **at least three** of the four feature types, or two plus a scope increase your instructor approves at the pitch.
- **Both partners build.** Each partner commits their own work under their own GitHub account. Work on branches, and merge through pull requests reviewed by the other partner.
- **Contributions table in the README**, using GitHub usernames, not real names:

  ```markdown
  ## Contributions

  | Area | Mainly built by | Key pull requests |
  |---|---|---|
  | Sign-in and RLS policies | @[username-1] | #4, #7 |
  | LLM summary route | @[username-2] | #5 |
  | Chart | Both (pair-programmed) | #9 |

  We both reviewed every pull request.
  ```

- **Signed contribution statement on Canvas.** Each partner submits the same short statement, agreeing who built what. It stays on Canvas, not in the repo. Without it, the capstone's Process row is at most Developing.
- **Individual parts.** Each partner does their own **oral walkthroughs**, **final reflection**, **peer review**, **exit tickets** and **self-assessment**. In walkthroughs you can be asked about any part of the app, but detailed questions focus on the parts your contribution statement says you built.
- **Same score for shared work.** Both partners normally get the same capstone score. If the history and the contribution statement show a big imbalance, your instructor will talk with both of you and may adjust individual scores.
- **Grace tokens:** a pair can use one on the capstone only if both partners have one left, and it costs each partner one.
- **If a pair splits up,** tell your instructor early. Each partner keeps a copy of the repo and reduces the scope.

Tip: pair-program for the hard parts, taking turns as "driver" (typing) and "navigator" (reading and checking), and swap every 20–30 minutes.

## What done means

Your capstone is done when all of these are true:

- [ ] The production URL works in a private window, on a phone and a laptop, and you've submitted it on Canvas with a screenshot.
- [ ] Every MUST acceptance criterion passes, or the README's status table honestly says which don't and why.
- [ ] `npm test` passes with at least 3 automated tests, written before the code they check, and no test was deleted or switched off to make that happen.
- [ ] `TESTS.md` has at least 3 manual edge-case tests with dated results.
- [ ] `SECURITY_CHECKLIST.md` is complete, with evidence on every ticked item; `npm run check:secrets` finds nothing in your files or history; you've read the `npm audit` output.
- [ ] If you have a database: RLS is on for every table, and the grants and policies are in `supabase/policies.sql`.
- [ ] You can say in one sentence **where authorization is enforced** ([authorization](../resources/glossary.md#authorization): the rules for what each user is allowed to do), and the README says it too.
- [ ] `SPEC.md` and `AGENTS.md` (with its Scope section) describe the app you actually built.
- [ ] `PROMPTS.md` is honest and up to date, with teach-backs on agent commits and your ownership statement.
- [ ] The README is complete, including **Known issues**, and links the 2–3 minute demo video (or says it's on Canvas).
- [ ] The [polish checklist](../weeks/08-ship-it/polish-checklist.md) is done.
- [ ] Your final commit has a GitHub release tagged `v1.0`. (On your repo page: **Releases → Create a new release**, type `v1.0` as the tag, add a one-line summary, **Publish**. Menus move; if you can't find it, ask your assistant how to create a GitHub release.)
- [ ] Your final reflection, with your revised personal AI-use rules, is submitted on Canvas.
- [ ] You can explain any part of it with the AI off.

Naming a real limitation in **Known issues** never costs points. An honest list is worth more than a README that claims everything works.

## Rules and safety

- The [three project rules](README.md#the-three-project-rules): no real payments, no real personal data about other people, nothing you'd miss if an agent deleted it.
- **Test accounts only.** If your app has sign-in, create test users with made-up details. At the Project Fair, ask classmates to use fake data too.
- **Contain the agent.** Work in a Codespace, keep approvals on (never an autopilot or "skip permissions" mode), commit before and after every agent task, and never give the agent a production key or a real password. The [safety contract](../setup/safety-contract.md) has the full rules, including rule 9: agents don't publish, and untrusted content never shares a session with your secrets.
- **`AGENTS.md` is advice, not a lock.** What actually limits an agent is the Codespace, the approval prompts, narrowly scoped tokens, spending caps and, for your data, row-level security.
- **Keep secret keys on the server** (as in the [AI micro-app](ai-micro-app.md)). Only the publishable key goes in the browser, and only with row-level security on for every table (see [Not every key is a secret](#feature-types-include-at-least-two)).
- **Personal account.** Keep the repo on your personal GitHub account. Vercel's free plan can't deploy private repos owned by an organization ([TOOLS.md](../TOOLS.md)).
- **Free services can pause or run out.** Free databases may pause when idle, and AI credits may run out mid-week. Check [TOOLS.md](../TOOLS.md), and open your app a day before the Fair to make sure it wakes up.

## AI use on the capstone

| Label | On the capstone |
|---|---|
| 🟢 **AI on** | Agent-built features, plans, tests, explanations, reviewing your diffs, a comparison AI code review (after you've written yours) |
| 🟡 **AI limited** | `SPEC.md` and the pitch: the AI may critique them, not write them |
| 🔴 **AI off** | Your written peer review; your teach-back notes and the "What I wrote or decided myself" section of `PROMPTS.md`; a pair's contribution statement; weekly and final reflections; your personal AI-use rules; exit tickets; the week 7 maintenance task; oral walkthroughs 2 and 3 |

The complete list of 🔴 AI off and 🟡 AI limited work is in [section 8 of the syllabus](../SYLLABUS.md#8-ai-use-policy).

## How it's graded

The [capstone rubric](../assessment/rubrics.md#capstone) scores the spec (including your Goldfish test), tests (including check first), the security checklist, deployment (production URL, screenshot, `v1.0`), feature types, process (teach-backs, ownership statement, `AGENTS.md` with Scope and trial notes, pull requests), README and video (including Known issues), and code you can explain. A working demo is required but not sufficient: without a working production URL the capstone is capped at half marks, and a working demo alone earns only a small part of the points.

## Submit

Follow [How to submit](README.md#how-to-submit). For the final: on Canvas, the repo URL, the production URL with a screenshot of it working, the link to your `v1.0` release, and your demo video link (or the video itself). The final reflection is its own Canvas assignment.

## If you get stuck

- **The agent keeps breaking things:** stop after two failed attempts (the [two-strikes rule](../resources/safe-loop.md#the-two-strikes-rule)), go back to your last good commit, and give it a smaller task with a clearer "Done when".
- **Your feature is too big:** move it to "Out of scope" in `SPEC.md`, and tell your instructor. A smaller finished app beats a bigger broken one.
- **Out of credits:** [I ran out of free credits](../resources/troubleshooting.md#i-ran-out-of-free-credits).
- **Database problems** ("permission denied", empty results, policies): [Supabase troubleshooting](../resources/troubleshooting.md#supabase), then redo the [RLS lab](../weeks/07-security-and-review/rls-lab/README.md) steps on your own table.
- **Deploy problems:** [Deploying to Vercel](../resources/troubleshooting.md#deploying-to-vercel).
- More help: [troubleshooting](../resources/troubleshooting.md), office hours, and the course tutor ([hint-only mode](../instructor/course-tutor.md)).
