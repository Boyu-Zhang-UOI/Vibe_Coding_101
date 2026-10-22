# Rubrics

> Scoring guides for every graded component. Each row is something a grader can see in your repo, on your live site or in your writing.

**How to read these tables.** Each rubric has criteria (rows) and four levels (columns). The number in bold is the points for that level.

| Level | Means |
|---|---|
| **Exemplary** | Everything asked for, done carefully, with clear evidence. Beyond what most students do |
| **Proficient** | Everything asked for, done well. **This is a good result** |
| **Developing** | Started, but important parts are missing or unclear |
| **Missing** | Not there |

Graders pick the level that best fits each row. If a row falls between two levels, they use the lower one and say what would lift it. Weights and how points turn into your course grade are in the [assessment README](README.md#how-grades-are-calculated).

**Rubric levels describe the work, not misconduct.** If a piece of work seems to break the AI-use rules (for example, an AI-written `SPEC.md` or reflection) or seems fabricated, it is handled under [Academic integrity](README.md#academic-integrity), and no score is changed until the University process is complete.

**The six skills you must show without AI** ([syllabus](../SYLLABUS.md#six-skills-you-must-be-able-to-show-without-ai)) aren't scored in these rubrics. They are a requirement of their own: each skill must be shown at least once in an [oral walkthrough](oral-walkthroughs.md#the-six-skills-you-must-show-without-ai), a retake or a short follow-up, and showing all six is needed for a C or higher ([letter grades](README.md#letter-grades)). The weekly exit tickets are where you practice them.

---

## Weekly labs and homework

**20% of the course.** Graded on **effort and completion of the core tier**, not on polish. The core items for each week are the deliverables checklist in that week's `homework.md` ([week 1](../weeks/01-hello-vibe-coding/homework.md), [2](../weeks/02-prompting-and-save-points/homework.md), [3](../weeks/03-spec-first/homework.md), [4](../weeks/04-read-debug-own-it/homework.md), [6](../weeks/06-agents/homework.md), [7](../weeks/07-security-and-review/homework.md)). For weeks 6 and 7, the core items are the capstone's [Milestone 1 and Milestone 2](../projects/capstone.md#milestones) rows, copied word for word.

Weeks 1, 2, 3, 4, 6 and 7 are each scored out of 10, and the lowest is dropped. **Week 5 is scored once, with the [AI micro-app](#ai-micro-app) rubric** (20 points, which include the capstone pitch); it gets no separate weekly score. Week 8's work is graded in the [capstone](#capstone).

Some weekly deliverables are also parts of a project (for example, the week 1 page is the start of your home page). That's deliberate: the weekly score rewards doing the step on time, and the project rubric judges the finished result.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Core tasks** | **4** · Every core item on the checklist is done | **3** · All but one core item done | **2** · All but two done; **1** · about half done | **0** · Not submitted |
| **Save points and log** | **3** · Several small commits with messages that say what changed; `PROMPTS.md` updated with what you changed or checked yourself; AI-assisted commits carry an `Assisted-by:` line (from week 2) | **2** · Commits with clear messages; `PROMPTS.md` updated; from week 6, `Assisted-by:` lines on AI-assisted commits | **1** · One large commit, or `PROMPTS.md` not updated | **0** · No commits this week |
| **Checked it, or documented the blocker** | **3** · Wrote the "done when" check before asking for the code (from week 4, an automated test), tested the normal case and at least one edge case, and says what happened. If something didn't work: the exact error, what you tried, and what you'll try next | **2** · Tested the normal case, or described the blocker with the error message | **1** · "It doesn't work", with no detail | **0** · Nothing |

A lab that didn't work, with a clear record of the error and what you tried, can still earn full marks. That's the point of effort grading.

**Stretch tier:** optional, and it never changes your score.

---

## In-class work and participation

**15% of the course** (the syllabus calls this "In-class builds, exit tickets and participation"). There are **16 studios**, two a week: **Studio A — Learn & build** and **Studio B — Workshop**. Each is scored out of 10, and your **lowest two are dropped**, so 140 points count. Timed builds such as **Game in an Hour** are graded on effort, not on whether you finish.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Lab work** | **4** · Works through the core parts, reaches the checkpoints or asks for help early, and helps a neighbor at least once | **3** · Works through the core parts and reaches most checkpoints | **1** · Present but mostly off-task, or leaves early without arrangement | **0** · Absent without arrangement |
| **Peer explanation and share-out** | **3** · Explains their own work to a peer (in a swap, show and tell or debrief) **and** asks a genuine question about the peer's | **2** · Takes part in the swap or share-out | **1** · Minimal part (listens only) | **0** · Doesn't take part |
| **Checkpoint** (Studio A) **or exit ticket** (Studio B, 🔴 AI off) | **3** · Studio A: shares the end-of-studio checkpoint (a live URL, screenshot or commit), or the exact blocker. Studio B: every exit-ticket question answered in your own words. Correctness does **not** affect this score | **2** · Shares where they got to, without the evidence; or all but one exit-ticket question answered | **1** · Present at the checkpoint but shares nothing; or only one or two exit-ticket questions answered | **0** · Absent; or no exit ticket |

**Missed a studio?** The [make-up rules](README.md#absences-and-make-up-work) follow U of I Regulations M-1 and M-3. For a recognized absence (official university activities, your own illness, family illness or care, other compelling circumstances, or religious observance), do the lab's core parts and, for a Studio B, the exit ticket on Canvas within one week, for **full credit**. Other absences: within 48 hours, for up to 7 of the 10 points.

**No partner?** With an odd number of students, or when your partner is away, explain your work to the instructor or a TA instead; that counts as the peer explanation. Online cohorts: "present" means camera or chat participation in the session, and swaps happen in breakout rooms.

---

## Project 1

**10% of the course, 40 points.** For the [Project 1 brief](../projects/project-1-useful-tool.md). Whether the tool works is one row out of six. Most points are for the spec, the tests and your process.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Spec** (`SPEC.md`, 🟡 AI limited) | **10** · Specific problem and user; at least 5 acceptance criteria in WHEN … THE APP SHALL … form, every one checkable by using the tool; at least 2 edge cases; out-of-scope list; wireframe; a **Goldfish test** logged in `PROMPTS.md` (what a fresh chat, given only `SPEC.md`, asked or got wrong) and the revision it led to; updated to match the final tool | **8** · At least 5 criteria, nearly all checkable; at least 2 edge cases; out-of-scope list; wireframe; Goldfish test logged | **4** · Fewer than 5 criteria, or several can't be checked ("easy to use"), or fewer than 2 edge cases | **0** · No spec, or the unfilled template |
| **Tests** (`TESTS.md`, `tests/`) | **8** · A manual test for every criterion; at least 3 edge-case tests; every test has a dated result; at least one automated test (as in the week 4 worked example) passing with `node --test`, output pasted in `TESTS.md`; at least one bug found by testing and fixed (logged with its commit) | **6** · Tests for most criteria; at least 3 edge-case tests, with dated results; one automated test passing | **3** · Fewer than 3 edge-case tests, no results recorded, or no automated test | **0** · No `TESTS.md` |
| **Works as specified** | **6** · Live on GitHub Pages; every MUST criterion passes; data survives a reload; usable on a phone-width screen | **5** · Live; most MUST criteria pass, and the README says which don't | **2** · Live, but a core feature or the reload is broken and the README doesn't say so | **0** · No live URL |
| **Plain code you own** | **6** · Plain HTML, CSS and JavaScript; clear names; no dead code or placeholder comments ("rest of code here"); your hand-written week 4 feature is named in `PROMPTS.md` and you can point to it | **5** · Plain files; minor leftovers; your own feature named | **2** · Large unused chunks, confusing names, or your own feature not identified | **0** · Framework or build output instead of plain files, or code missing from the repo |
| **Process** (`PROMPTS.md` and commits) | **6** · Key prompts in Goal · Context · Constraints · Done when form; what the AI got wrong and how you noticed; teach-back notes on AI-written changes; what you wrote or decided yourself; at least 6 commits with clear messages | **5** · Several honest entries with what you changed; at least 6 commits | **2** · Prompts only, with no notes on what happened; or one or two giant commits | **0** · No `PROMPTS.md` |
| **README** | **4** · From the template: live URL, how to use, how it works, "Authorization is enforced in: n/a…", an acceptance table that matches the tool, an honest known-issues list, credits | **3** · Live URL, how to use, and an acceptance table | **1** · A few lines; no acceptance table | **0** · No README, or GitHub's default |

---

## AI micro-app

**20 points: this is your week 5 score** in the Weekly labs and homework component (double a normal week). Week 5 gets no other weekly score. For the [AI micro-app brief](../projects/ai-micro-app.md); the last row covers the [capstone pitch](../projects/capstone.md#the-pitch), week 5's other deliverable.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Key stays on the server** | **6** · Key only in `.env` (ignored by git) and Vercel settings; only server code (`api/`, `lib/`) reads it; `npm run check:secrets` output shown (it checks your files and your git history); DevTools check on the production site described; the hidden-costs checklist done | **5** · Key only on the server and not in git; checks done, evidence brief | **2** · Key safe, but no checks done or no evidence | **0** · A real key appears in the repo, its history, `public/` or the live site. Revoke it, fix it and resubmit within a week (and before the grade deadline) for up to Proficient |
| **Input limit and friendly errors** | **3** · Own `MAX_INPUT_LENGTH` with a reason in `PROMPTS.md`; any new input also checked on the server; empty, too-long and missing-key cases each tried and showing a friendly message | **2** · Own limit; the server check still works; empty and too-long cases tried | **1** · Starter limits removed or bypassed, or raw errors shown to users | **0** · No limits and no friendly errors |
| **Provider swap** | **3** · Ran with two providers by changing only the three environment variables; `PROMPTS.md` names both, the models (from `npm run models`) and how the answers differed | **2** · Ran with two providers; logged in `PROMPTS.md` | **1** · Tried a second provider; the blocker is documented | **0** · Not attempted |
| **Made it your own, and deployed** | **3** · A new job (system prompt), new page text and styling; production URL and a screenshot of it working submitted; tried in a private window | **2** · New job; production URL and screenshot submitted | **1** · Starter barely changed, or runs only in the Codespace | **0** · Not submitted |
| **Documentation and tests** | **3** · "Where the key lives and who can read it" (🔴 AI off, your own words) answers all seven questions accurately; `PROMPTS.md`; `npm test` passes, including the validation test you completed from the fill-in skeleton | **2** · Section present and mostly accurate; `npm test` passes with your validation test | **1** · Section vague or missing; or no test of your own; or tests failing | **0** · None of these |
| **Capstone pitch** (🟡 AI limited) | **2** · On time on Canvas; every section of the [pitch template](../projects/capstone.md#the-pitch) specific, including a named user and a real plan B | **2** · On time; every section filled in | **1** · Late, or a section missing or vague | **0** · No pitch |

The own friendly rate-limit (429) message is a stretch task this week, so it isn't scored here.

---

## Capstone

**30% of the course, 100 points.** For the [capstone brief](../projects/capstone.md).

> [!IMPORTANT]
> **A working demo is required but not sufficient.** Without a production URL where the main user story works, the capstone is capped at **50/100** until it runs. Agree a fix date with your instructor; it must fall before the University grade deadline (otherwise an Incomplete may be agreed under Regulation F). A working demo on its own earns only the "Deployment" row and part of the "Feature types" row. Most points are for the spec, tests, security, process, documentation and code you can explain.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Spec** (`SPEC.md`, 🟡 AI limited) | **15** · Specific problem and user; at least 6 checkable WHEN … THE APP SHALL … criteria, including at least 2 edge cases and at least one per feature type; out-of-scope list; wireframe; a Goldfish test logged in `PROMPTS.md` and the revision it led to; updated to match the final app | **11** · At least 5 checkable criteria, including 2 edge cases; out-of-scope list; wireframe; Goldfish test logged | **6** · Fewer than 5 criteria, several not checkable, or no edge cases | **0** · Missing, or the unfilled template |
| **Tests** (`TESTS.md`, `tests/`) | **15** · At least 3 automated tests passing (output shown), at least one of them an edge case; at least 3 manual edge-case tests with dated results; every MUST criterion has a test; tests written **before** the code they check, in a separate prompt (check first), with at least one recorded failing before it passed | **11** · At least 3 automated tests passing; at least 3 manual edge-case tests with results | **6** · Fewer than 3 of either, results not recorded, or tests failing | **0** · No tests, or tests deleted or switched off to make them pass |
| **Security checklist with evidence** | **15** · Every applicable item ticked, each with real evidence (command output, file name, screenshot link); if there's a database, RLS on every table with explicit grants and policies kept in `supabase/policies.sql`, and your own attack with the publishable key failed; the "where authorization is enforced" sentence is accurate; the found-and-fixed table is filled in | **11** · Every applicable item ticked with evidence; minor gaps | **6** · Items ticked without evidence, or a key item untested (such as the RLS attack) | **0** · Missing. Also 0 if the grader finds a live secret, or a table that anyone can read or write **beyond what `SPEC.md` and your README's "Authorization is enforced in" sentence say is intended** (for example RLS off, or update or delete open to everyone). Fix it (revoke the key, add RLS and policies) and resubmit within a week, before the grade deadline, for up to Proficient |
| **Deployment and working demo** | **10** · Production URL works in a private window on phone and laptop, with a screenshot submitted; environment variables set on the host, none in code; GitHub release `v1.0`; passes the polish checklist's accessibility items (labels, alt text, keyboard use, contrast) | **8** · Production URL works and screenshot submitted; the main story works; one feature partly works and the README says so; release `v1.0` | **4** · Live, but the main story is broken; or it runs only in the Codespace | **0** · No production URL (see the cap above) |
| **Feature types** | **10** · At least two feature types (pairs: three, or two plus the approved scope increase), each done the safe way (keys on the server; RLS on with policies; a chart drawn from the app's real data, with its data-prep function tested; external API errors and timeouts handled) and part of the main story | **8** · At least two (pairs: three, or two plus the approved increase) working; one is bolted on or lacks error handling | **4** · Only one feature type works | **0** · None |
| **Process** (`PROMPTS.md`, `AGENTS.md`, git) | **10** · A **teach-back** (2–3 sentences: what changed and why) in `PROMPTS.md` before every agent commit; an **ownership statement** ("What I wrote or decided myself") naming specific code, decisions and changes; plan-first prompts; what the agent got wrong and how you caught it; `AGENTS.md` tailored to this project, with a **Scope** section, and **trial notes** in `PROMPTS.md` (two tasks, whether the agent followed the file, one change you made); commits before and after agent tasks, with `Assisted-by:` lines; features merged through pull requests, each reviewed (by a partner, the instructor or a classmate, or a self-review against [CODE_REVIEW.md](../templates/CODE_REVIEW.md) before merging) | **8** · Teach-backs on most agent commits; an ownership statement; `AGENTS.md` with Scope and trial notes; regular commits with `Assisted-by:` lines; features merged through pull requests | **4** · Few or no teach-backs, or a generic ownership statement; `AGENTS.md` unchanged or without Scope; a few giant commits. Pairs: no contribution statement on Canvas | **0** · No `PROMPTS.md` |
| **README and demo video** | **10** · A classmate could run the app from the README alone; production URL and screenshot; how-it-works table; where authorization is enforced; where each key lives; status table matches reality; an honest **Known issues** section (naming a real limitation never costs points); the tools you used and any fallback you switched to; credits; a 2–3 minute video showing the problem, the main story and one edge case, with captions or a transcript | **8** · README mostly complete, including Known issues; a video of about 2–3 minutes (up to 4 is fine) showing the main story | **4** · README missing how to run it or the status table; or the video is over 4 minutes or doesn't show the app working | **0** · Default README, or no video |
| **Code you can explain** | **15** · Logic in `public/lib/` (or `lib/` for server-only code) with tests; clear names and small functions; no dead code, placeholders or disabled tests; every dependency intentional and named in the README; user text shown with `textContent`; walkthrough 3 confirmed you could explain the parts you were asked about | **11** · Readable and organized as in the starter; minor leftovers; walkthrough 3 went mostly well | **6** · Large unexplained or unused chunks; unexplained dependencies; or walkthrough 3 showed you couldn't explain a core part (an "explain it or redo it" follow-up can lift this row) | **0** · Code you can't explain at all |

**Pairs:** the same rubric, with the pair rules from the brief. In "Feature types", Proficient and Exemplary need three feature types, or two plus the scope increase approved at the pitch. Without a signed contribution statement on Canvas, "Process" is at most Developing.

---

## Reflections and peer reviews

**10% of the course.** All of this is 🔴 AI off writing, submitted **on Canvas** (never in a repository). It's graded on specifics and honesty, not polish or grammar. The component is made of:

| Part | Points | Share of the component |
|---|---|---|
| Weekly reflections ([template](../templates/REFLECTION.md), 150–300 words) for weeks 1, 2, 3, 4, 6 and 7, out of 10 each, lowest dropped. Week 3's is the AI-free **Verdict** on your bake-off scorecard. Week 5 has none: the micro-app's "Where the key lives" section takes its place and is graded in the [micro-app rubric](#ai-micro-app) | 50 | 40% |
| Two written peer reviews, out of 10 each: the **week 3 spec review** and the **week 7 code review** | 20 | 30% |
| Final capstone reflection ([prompts](../projects/capstone.md#final-reflection)), with your revised personal AI-use rules | 20 | 30% |

**Component score** = 10% × (0.4 × reflections ÷ 50 + 0.3 × peer reviews ÷ 20 + 0.3 × final ÷ 20).

Writing that appears to be AI-generated is handled under [Academic integrity](README.md#academic-integrity); no score is changed until the University process is complete.

### Weekly reflection (10 points)

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Specific moments** | **4** · Anchored in at least two concrete moments: a quoted prompt, an error message, a line of code, a decision (week 3: criterion IDs and what each builder did) | **3** · One concrete moment, described clearly | **1** · General statements only ("AI is helpful") | **0** · Not submitted |
| **An idea in your own words** | **3** · Explains one idea from the week correctly, as if to a friend, with an example | **2** · Explains an idea; mostly correct | **1** · Names an idea without explaining it | **0** · Nothing |
| **Honesty about gaps** | **3** · Names something still unclear, completes the confidence check, and compares the rating with the two-sentence explanation | **2** · Names something unclear and gives a rating | **1** · "Nothing is unclear", with no confidence check | **0** · Nothing |

### Peer review (10 points)

Both reviews are written on Canvas. Share yours with the author privately (a Canvas comment or email), never as an issue, pull-request comment or file in either repository, and refer to people by GitHub username.

- **Week 3 spec review:** after the studio swap, write up your review of a classmate's `SPEC.md`: your prediction of what the app will do; every criterion that can't be tested (by ID) and why; one missing edge case; one strength; one question for the author.
- **Week 7 code review:** use the headings of the [CODE_REVIEW template](../templates/CODE_REVIEW.md). You may also leave ordinary comments on the author's pull request on GitHub; the graded review is the Canvas one.
- **No classmate available?** Your instructor assigns a review of a practice spec or repo instead.

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Specific and located** | **4** · Every point names where: an acceptance criterion ID, a file and line, a step on the live site | **3** · Most points are located | **1** · Mostly general comments ("looks good") | **0** · Not submitted |
| **Accurate** | **3** · Claims checked against the real spec or live app; any disagreement is phrased as a question | **2** · Mostly accurate | **1** · At least one claim that's clearly wrong (a problem that isn't there) | **0** · Largely wrong findings |
| **Useful and kind** | **3** · One real strength, the most important fix with a suggestion, and one question for the author | **2** · A strength and a fix | **1** · Only praise, or only criticism | **0** · Unkind or unusable |

Invented problems cost points, as they do in UCSD's AI course, which penalizes reviews with made-up errors ([UCSD](https://ucsd-cse-115-215.github.io/sp26/index.html)).

### Final capstone reflection (20 points)

| Criterion | Exemplary | Proficient | Developing | Missing |
|---|---|---|---|---|
| **Specific moments** | **6** · Several concrete moments across the course (a prompt, a commit, an error, a walkthrough question, an agent claim you checked) | **5** · Two or more concrete moments | **2** · Mostly general | **0** · Not submitted |
| **Felt versus actual understanding** | **6** · Compares what you felt you understood with what you could explain, in both directions (a time you couldn't explain something, and a time you could when you doubted it); refers to walkthrough 3 or your pre-course self-assessment | **5** · Compares felt and actual understanding, with one example | **2** · Mentions understanding without comparing | **0** · Missing |
| **A habit that changed** | **4** · Names one Safe Loop habit that changed how you work, with a moment that shows it; includes your revised personal AI-use rules with one rule you changed and why; advice for a friend starting the course | **3** · A habit, the revised rules and advice, without a concrete moment | **1** · Vague ("I learned a lot"), or no revised rules | **0** · Missing |
| **Honest about AI use** | **4** · Matches `PROMPTS.md`; clear about what the agent did and what you did | **3** · Mostly consistent with `PROMPTS.md` | **1** · Contradicts `PROMPTS.md` or the history | **0** · Missing |
