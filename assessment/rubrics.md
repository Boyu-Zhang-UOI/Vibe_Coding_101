# Rubrics

> Scoring guides for every graded component. Each row is something a grader can see in your repo, on your live site or in your writing.

**How to read these tables.** Each rubric has criteria (rows) and four levels (columns). The number in bold is the points for that level.

| Level | Means |
|---|---|
| **Exemplary** | Everything asked for, done carefully, with clear evidence. Beyond what most students do |
| **Proficient** | Everything asked for, done well. **This is a good result** |
| **Developing** | Started, but important parts are missing or unclear |
| **Missing** | Not there, or not your own work where it had to be |

Graders pick the level that best fits each row. If a row falls between two levels, they use the lower one and say what would lift it. Weights and how points turn into your course grade are in the [assessment README](README.md#how-grades-are-calculated).

The six skills you must show without AI ([syllabus](../SYLLABUS.md#six-skills-you-must-be-able-to-show-without-ai)) are assessed in the [oral walkthroughs](oral-walkthroughs.md) and [exit tickets](exit-tickets.md), not in these rubrics.

---

## Weekly labs and homework

**20% of the course.** Graded on **effort and completion of the core tier**, not on polish. The core items for each week are the deliverables checklist in that week's `homework.md` ([week 1](../weeks/01-hello-vibe-coding/homework.md), [2](../weeks/02-prompting-and-save-points/homework.md), [3](../weeks/03-spec-first/homework.md), [4](../weeks/04-read-debug-own-it/homework.md), [6](../weeks/06-agents/homework.md), [7](../weeks/07-security-and-review/homework.md)). Weeks 1, 2, 3, 4, 6 and 7 are each scored out of 10, and the lowest is dropped. Week 5 is the [AI micro-app](#ai-micro-app), scored out of 20. Week 8's work is graded in the [capstone](#capstone).

Some weekly deliverables are also parts of a project (for example, the week 1 page is the start of your home page). That's deliberate: the weekly score rewards doing the step on time, and the project rubric judges the finished result.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Core tasks** | **4** · Every core item on the checklist is done | **3** · All but one core item done | **1** · About half the core items done | **0** · Not submitted |
| **Save points and log** | **3** · Several small commits with messages that say what changed; `PROMPTS.md` updated with what you changed or checked yourself | **2** · Commits with clear messages; `PROMPTS.md` updated | **1** · One large commit, or `PROMPTS.md` not updated | **0** · No commits this week |
| **Checked it, or documented the blocker** | **3** · Tested the normal case and at least one edge case, and says what happened. If something didn't work: the exact error, what you tried, and what you'll try next | **2** · Tested the normal case, or described the blocker with the error message | **1** · "It doesn't work", with no detail | **0** · Nothing |

A lab that didn't work, with a clear record of the error and what you tried, can still earn full marks. That's the point of effort grading.

**Stretch tier:** optional, and it never changes your score.

---

## In-class work and participation

**15% of the course** (the syllabus calls this "In-class builds, exit tickets and participation"). Each of the eight studios is scored out of 10, and the lowest is dropped. Timed builds such as **Game in an Hour** are graded on effort, not on whether you finish.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Lab work** | **4** · Works through the lab, reaches the checkpoints or asks for help early, and helps a neighbor at least once | **3** · Works through the lab and reaches most checkpoints | **1** · Present but mostly off-task, or leaves early without arrangement | **0** · Absent without arrangement |
| **Peer explanation and share-out** | **3** · Explains their own work to a peer **and** asks a genuine question about the peer's | **2** · Takes part in the swap or share-out | **1** · Minimal part (listens only) | **0** · Doesn't take part |
| **Exit ticket** (🔴 AI-free) | **3** · All three questions answered in your own words. Correctness does **not** affect this score | **2** · Two answered | **1** · One answered | **0** · None |

**Missed a studio with a good reason?** Do the lab on your own and submit the exit ticket within 48 hours for up to 7 of the 10 points. Online cohorts: "present" means camera or chat participation in the session, and the peer swap happens in breakout rooms.

---

## Project 1

**10% of the course, 40 points.** For the [Project 1 brief](../projects/project-1-useful-tool.md). Whether the tool works is one row out of six. Most points are for the spec, the tests and your process.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Spec** (`SPEC.md`) | **10** · Specific problem and user; at least 5 acceptance criteria in WHEN … THE APP SHALL … form, every one checkable by using the tool; at least 2 edge cases; out-of-scope list; wireframe; updated to match the final tool | **8** · At least 5 criteria, nearly all checkable; at least 2 edge cases; out-of-scope list; wireframe | **4** · Fewer than 5 criteria, or several can't be checked ("easy to use"), or fewer than 2 edge cases | **0** · No spec, the unfilled template, or written by AI (🟡 critique only) |
| **Tests** (`TESTS.md`) | **8** · A manual test for every criterion; at least 3 edge-case tests; every test has a dated result; at least one bug found by testing and fixed (logged with its commit) | **6** · Tests for most criteria; at least 3 edge-case tests, with dated results | **3** · Fewer than 3 edge-case tests, or no results recorded | **0** · No `TESTS.md` |
| **Works as specified** | **6** · Live on GitHub Pages; every MUST criterion passes; data survives a reload; usable on a phone-width screen | **5** · Live; most MUST criteria pass, and the README says which don't | **2** · Live, but a core feature or the reload is broken and the README doesn't say so | **0** · No live URL |
| **Plain code you own** | **6** · Plain HTML, CSS and JavaScript; clear names; no dead code or placeholder comments ("rest of code here"); your hand-written week 4 feature is named in `PROMPTS.md` and you can point to it | **5** · Plain files; minor leftovers; your own feature named | **2** · Large unused chunks, confusing names, or your own feature not identified | **0** · Framework or build output instead of plain files, or code missing from the repo |
| **Process** (`PROMPTS.md` and commits) | **6** · Key prompts in Goal · Context · Constraints · Done when form; what the AI got wrong and how you noticed; what you wrote or decided yourself; at least 6 commits with clear messages | **5** · Several honest entries with what you changed; at least 6 commits | **2** · Prompts only, with no notes on what happened; or one or two giant commits | **0** · No `PROMPTS.md` |
| **README** | **4** · From the template: live URL, how to use, how it works, "Authorization is enforced in: n/a…", an acceptance table that matches the tool, credits | **3** · Live URL, how to use, and an acceptance table | **1** · A few lines; no acceptance table | **0** · No README, or GitHub's default |

---

## AI micro-app

**20 points, counted inside the Weekly labs and homework component** as your week 5 score (double a normal week), unless your instructor chooses to grade it separately. For the [AI micro-app brief](../projects/ai-micro-app.md).

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Key stays on the server** | **6** · Key only in `.env` (ignored by git) and Vercel settings; only server code (`api/`, `lib/`) reads it; `npm run check:secrets` output shown; DevTools check on the live site described | **5** · Key only on the server and not in git; checks done, evidence brief | **2** · Key safe, but no checks done or no evidence | **0** · A real key appears in the repo, its history, `public/` or the live site. Revoke it, fix it and resubmit within a week for up to Proficient |
| **Input limit and friendly errors** | **4** · Own `MAX_INPUT_LENGTH` with a reason; any new input also checked on the server; own friendly rate-limit message; empty, too-long and missing-key cases each tried | **3** · Own limit and own rate-limit message; server check still works | **1** · Starter limits removed or bypassed, or raw errors shown to users | **0** · No limits and no friendly errors |
| **Provider swap** | **3** · Ran with two providers by changing only the three environment variables; `PROMPTS.md` names both, the models (from `npm run models`) and how the answers differed | **2** · Ran with two providers; logged in `PROMPTS.md` | **1** · Tried a second provider; the blocker is documented | **0** · Not attempted |
| **Made it your own, and deployed** | **3** · A new job (system prompt), new page text and styling; live on Vercel and tried in a private window | **2** · New job; live on Vercel | **1** · Starter barely changed, or runs only in the Codespace | **0** · Not submitted |
| **Documentation and tests** | **4** · "Where the key lives and who can read it" (🔴 own words) answers all seven questions accurately; `PROMPTS.md`; `npm test` passes including your own validation test | **3** · Section present and mostly accurate; `npm test` passes with your test | **1** · Section vague or missing; or no test of your own; or tests failing | **0** · None of these |

---

## Capstone

**30% of the course, 100 points.** For the [capstone brief](../projects/capstone.md).

> [!IMPORTANT]
> **A working demo is required but not sufficient.** Without a live URL where the main user story works, the capstone is capped at **50/100** until it runs (agree a fix date with your instructor). A working demo on its own earns only the "Deployment" row and part of the "Feature types" row. Most points are for the spec, tests, security, process, documentation and code you can explain.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Spec** (`SPEC.md`) | **15** · Specific problem and user; at least 6 checkable WHEN … THE APP SHALL … criteria, including at least 2 edge cases and at least one per feature type; out-of-scope list; wireframe; updated to match the final app | **11** · At least 5 checkable criteria, including 2 edge cases; out-of-scope list; wireframe | **6** · Fewer than 5 criteria, several not checkable, or no edge cases | **0** · Missing, the unfilled template, or AI-written |
| **Tests** (`TESTS.md`, `tests/`) | **15** · At least 3 automated tests passing (output shown), at least one of them an edge case; at least 3 manual edge-case tests with dated results; every MUST criterion has a test; a test recorded failing before it passed, or a bug found by testing | **11** · At least 3 automated tests passing; at least 3 manual edge-case tests with results | **6** · Fewer than 3 of either, results not recorded, or tests failing | **0** · No tests, or tests deleted or switched off to make them pass |
| **Security checklist with evidence** | **15** · Every applicable item ticked, each with real evidence (command output, file name, screenshot link); if there's a database, RLS on every table and your own attack with the public key failed; the "where authorization is enforced" sentence is accurate; the found-and-fixed table is filled in | **11** · Every applicable item ticked with evidence; minor gaps | **6** · Items ticked without evidence, or a key item untested (such as the RLS attack) | **0** · Missing. Also 0 if the grader finds a live secret or a table anyone can read or change; fix it (revoke the key, add RLS) and resubmit within a week for up to Proficient |
| **Deployment and working demo** | **10** · Live URL works in a private window on phone and laptop; environment variables set on the host, none in code; GitHub release `v1.0` | **8** · Live URL works; the main story works; one feature partly works and the README says so | **4** · Live, but the main story is broken; or it runs only in the Codespace | **0** · No live URL (see the cap above) |
| **Feature types** | **10** · At least two feature types (pairs: three), each done the safe way (keys on the server, RLS on, chart from the app's real data, external API errors handled) and part of the main story | **8** · At least two (pairs: three) working; one is bolted on or lacks error handling | **4** · Only one feature type works | **0** · None |
| **Process** (`PROMPTS.md`, `AGENTS.md`, git) | **10** · `PROMPTS.md` shows plan-first prompts, what the agent got wrong and how you caught it, and what you wrote or decided yourself; `AGENTS.md` tailored to this project; history shows commits before and after agent tasks; work merged through pull requests with at least one review | **8** · Honest `PROMPTS.md` with several entries; `AGENTS.md` edited; regular commits | **4** · Thin or generic `PROMPTS.md`; `AGENTS.md` unchanged; a few giant commits. Pairs: no contribution statement | **0** · No `PROMPTS.md` |
| **README and demo video** | **10** · A classmate could run the app from the README alone; how-it-works table; where authorization is enforced; where each key lives; status table matches reality; known issues; credits; 2–3 minute video shows the problem, main story and one edge case, with captions or transcript | **8** · README mostly complete; 2–3 minute video shows the main story | **4** · README missing how to run it or the status table; or the video is over 4 minutes or doesn't show the app working | **0** · Default README, or no video |
| **Code you can explain** | **15** · Logic in `public/lib/` (or `lib/` for server-only code) with tests; clear names and small functions; no dead code, placeholders or disabled tests; every dependency intentional and named in the README; user text shown with `textContent`; walkthrough 3 confirmed you could explain the parts you were asked about | **11** · Readable and organized as in the starter; minor leftovers; walkthrough 3 went mostly well | **6** · Large unexplained or unused chunks; unexplained dependencies; or walkthrough 3 showed you couldn't explain a core part (a follow-up conversation can lift this row) | **0** · Code you can't explain at all, or not your team's work |

**Pairs:** the same rubric, with the pair rules from the brief: at least three feature types for Proficient or Exemplary in "Feature types", and a signed contribution statement (without it, "Process" is at most Developing).

---

## Reflections and peer reviews

**10% of the course.** All of this is 🔴 AI-free writing. It's graded on specifics and honesty, not polish or grammar. The component is made of:

| Part | Share of the component | Scored |
|---|---|---|
| Weekly reflections ([template](../templates/REFLECTION.md), 150–300 words, usually weeks 1–7) | 40% | Out of 10 each; lowest dropped |
| Two peer reviews: the week 3 spec review and the week 7 code review ([template](../templates/CODE_REVIEW.md)) | 30% | Out of 10 each |
| Final capstone reflection ([prompts](../projects/capstone.md#final-reflection)) | 30% | Out of 20 |

A reflection or review written with AI scores 0 and leads to a conversation ([academic integrity](README.md#academic-integrity)).

### Weekly reflection (10 points)

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Specific moments** | **4** · Anchored in at least two concrete moments: a quoted prompt, an error message, a line of code, a decision | **3** · One concrete moment, described clearly | **1** · General statements only ("AI is helpful") | **0** · Not submitted |
| **An idea in your own words** | **3** · Explains one idea from the week correctly, as if to a friend, with an example | **2** · Explains an idea; mostly correct | **1** · Names an idea without explaining it | **0** · Nothing |
| **Honesty about gaps** | **3** · Names something still unclear, completes the confidence check, and compares the rating with the two-sentence explanation | **2** · Names something unclear and gives a rating | **1** · "Nothing is unclear", with no confidence check | **0** · Nothing |

### Peer review (10 points)

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Specific and located** | **4** · Every point names where: an acceptance criterion ID, a file and line, a step on the live site | **3** · Most points are located | **1** · Mostly general comments ("looks good") | **0** · Not submitted |
| **Accurate** | **3** · Claims checked against the real spec or live app; any disagreement is phrased as a question | **2** · Mostly accurate | **1** · At least one claim that's clearly wrong (a problem that isn't there) | **0** · Largely made-up findings |
| **Useful and kind** | **3** · One real strength, the most important fix with a suggestion, and one question for the author | **2** · A strength and a fix | **1** · Only praise, or only criticism | **0** · Unkind or unusable |

Made-up problems cost points, as they do in UCSD's AI course, which penalizes reviews with invented errors ([UCSD](https://ucsd-cse-115-215.github.io/sp26/index.html)).

### Final capstone reflection (20 points)

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Specific moments** | **6** · Several concrete moments across the course (a prompt, a commit, an error, a walkthrough question, an agent claim you checked) | **5** · Two or more concrete moments | **2** · Mostly general | **0** · Not submitted |
| **Felt versus actual understanding** | **6** · Compares what you felt you understood with what you could explain, in both directions (a time you couldn't explain something, and a time you could when you doubted it); refers to walkthrough 3 or your pre-course self-assessment | **5** · Compares felt and actual understanding, with one example | **2** · Mentions understanding without comparing | **0** · Missing |
| **A habit that changed** | **4** · Names one Safe Loop habit that changed how you work, with a moment that shows it, plus advice for a friend starting the course | **3** · A habit and advice, without a concrete moment | **1** · Vague ("I learned a lot") | **0** · Missing |
| **Honest about AI use** | **4** · Matches `PROMPTS.md`; clear about what the agent did and what you did | **3** · Mostly consistent with `PROMPTS.md` | **1** · Contradicts `PROMPTS.md` or the history | **0** · Missing |
