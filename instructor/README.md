# Instructor Guide

> For anyone teaching Vibe Coding 101 (official title: *Directed Study: Vibe Coding — Building Software with AI*), including instructors and teaching assistants (TAs) who didn't design it.

This folder is the instructor's side of the course. The standard format is **3 credits in eight accelerated weeks, with two 3-hour studios a week** (Studio A — Learn & build, Studio B — Workshop) for a cohort of **5 or more students**. Each week's `instructor-notes.md` has **two run sheets, one per studio**, a live-demo script, common pitfalls and fallback plans.

| File | Use it for |
|---|---|
| **This page** | How the course thinks, running the two studios, staffing and workload, grading, integrity and privacy, supporting students, the University of Idaho checklist, the dated calendar, FAQ |
| [pre-cohort-checklist.md](pre-cohort-checklist.md) | What to do, and test, from six weeks before the course to the end, including the maintenance calendar |
| [variants.md](variants.md) | Small cohorts and one-student Directed Study, 1- and 2-credit versions, a 16-week semester, under-18 and European cohorts, online delivery, budgets, experienced programmers |
| [course-tutor.md](course-tutor.md) | The hint-only "tutor mode" prompt used in the Debug Clinic |
| [answer-keys/](answer-keys/README.md) | Answer keys for the Debug Clinic, Be the Agent and the RLS Attack Lab |

Weekly instructor notes: [week 1](../weeks/01-hello-vibe-coding/instructor-notes.md) · [week 2](../weeks/02-prompting-and-save-points/instructor-notes.md) · [week 3](../weeks/03-spec-first/instructor-notes.md) · [week 4](../weeks/04-read-debug-own-it/instructor-notes.md) · [week 5](../weeks/05-apis-secrets-servers/instructor-notes.md) · [week 6](../weeks/06-agents/instructor-notes.md) · [week 7](../weeks/07-security-and-review/instructor-notes.md) · [week 8](../weeks/08-ship-it/instructor-notes.md)

## Philosophy: teach the loop, not the tool

The course teaches one workflow, the [Safe Loop](../resources/safe-loop.md) (Describe → Plan → Step → Test → Read → Commit), and uses whichever tools currently support it for free. Five findings shaped that choice. The full argument is in [research/design-rationale.md](../research/design-rationale.md), and the sources are in the [landscape report](../research/landscape-report-2026-09.md) and its [October 2026 update](../research/landscape-update-2026-10.md).

1. **AI raises output but can lower understanding.** In Anthropic's randomized trial, engineers learning a new library with AI scored 50% on a follow-up quiz versus 67% without it, and fell furthest behind on debugging ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). In a 2026 experiment, students using ChatGPT scored higher on the task (89% versus 69%) but recalled less of it two days later (39% versus 52%) and claimed less of their code as their own ([Bergh et al.](https://arxiv.org/abs/2609.21194)). **Structure changes the outcome**, so the course adds it: the Safe Loop, [six skills students must show without AI](../resources/without-ai-skills.md), oral walkthroughs, and exit tickets with a delayed-recall question.
2. **Explaining before accepting protects understanding.** On a 30-minute maintenance task with the AI blacked out, 77% of students who had used AI without restrictions failed, against 39% of those whose tool required a short explanation before code could be added ([Sankaranarayanan](https://arxiv.org/abs/2602.20206)). Hence the Safe Loop's **teach-back** before every AI-written commit and **check first** (the test before the code: tests written after faulty code tend to agree with it, [Konstantinou et al.](https://arxiv.org/abs/2607.05139)).
3. **Understanding falls when agents take over.** In CMU 15-113's surveys, students' self-rated understanding fell to the year's lowest point during the agent assignments ([CMU Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)), and in fall 2026 satisfaction rose while understanding fell again ([CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)). So this course holds agents back until week 6 and puts two of its three oral walkthroughs, and an AI-off maintenance task, in the agent weeks.
4. **Beginner apps break where browser meets server, and agents leak data on their own.** UpGuard found 16,326 Supabase databases with publicly readable tables, and noted that tables created through the API, the way agents create them, start without row-level security ([UpGuard](https://www.upguard.com/blog/everything-everywhere-systemic-data-exposure-in-supabase-apps)). Hence week 5 (secrets live on the server), week 7 (the RLS Attack Lab) and the difference between *rules* students write for an agent and the *rails* that hold regardless: the Codespace, approval prompts, scoped tokens, spending caps and RLS.
5. **Tools change monthly.** Several tools a 2025 syllabus would have relied on have since been retired or lost their free tier (see [TOOLS.md](../TOOLS.md#do-not-use-in-this-course)). So every tool detail lives in TOOLS.md, every layer has two fallbacks, and every cohort starts with a smoke test.

Vendor guides and practitioners describe nearly the same loop: a spec, a plan you edit, one small task, tests, reading the diff, a commit ([Claude Code best practices](https://code.claude.com/docs/en/best-practices); [Codex best practices](https://learn.chatgpt.com/guides/best-practices); [Osmani](https://addyosmani.com/blog/ai-coding-workflow/); [Willison](https://simonwillison.net/guides/agentic-engineering-patterns/)). Products come and go; the loop has lasted.

**What this means for you:**

- **Model the loop every week,** live, including the checking (see [the live-demo principle](#the-live-demo-principle)).
- **When a tool changes, change TOOLS.md, not the lesson.** Click-paths in other files carry a "menus move" note for this reason.
- **Grade understanding and process, not polish.** A working demo is required but not sufficient.

## The course at a glance

Deliverables and capstone dates are defined once, in the [capstone milestones](../projects/capstone.md#milestones) and each week's `homework.md`; this table is a summary.

| Week | Studio A — Learn & build | Studio B — Workshop | Due before next week's Studio A | Walkthrough |
|---|---|---|---|---|
| 0 | — | — | Before Studio 1: the [first-hour quick start](../setup/README.md#before-studio-1). During week 1: safety contract and [self-assessment](../assessment/self-assessment.md) on Canvas | — |
| 1 | [Hello, Vibe Coding](../weeks/01-hello-vibe-coding/README.md): home page in a chat preview; three hand changes | GitHub Pages; three habits; accessibility check; personal AI-use rules v1 | Home page live; `PROMPTS.md`; AI fluency pre-work and response; reflection | — |
| 2 | [Prompting & Save Points](../weeks/02-prompting-and-save-points/README.md): **Game in an Hour** | Rollback; two-model comparison; peer explanation swap; prompt makeover | Game plus one feature in at least three save points; prompt makeover; reflection | — |
| 3 | [Spec First](../weeks/03-spec-first/README.md): `SPEC.md`; peer spec review; Goldfish test | Jigsaw builder bake-off; Project 1 started in a Codespace | Project 1 v1 live; bake-off Verdict | — |
| 4 | [Read It, Debug It, Own It](../weeks/04-read-debug-own-it/README.md): **Debug Clinic** (AI off) | git practice, then walkthroughs; "You write it"; first automated test | Project 1 final; `TESTS.md`; one automated test | [Walkthrough 1](../assessment/oral-walkthroughs.md#walkthrough-1-week-4) |
| 5 | [APIs, Secrets & Servers](../weeks/05-apis-secrets-servers/README.md): starter tour; key in `.env`; make it yours | Vercel; provider swap; prove the key is secret; external API mini-lesson | AI micro-app deployed; capstone pitch 72 hours before week 6 Studio A | — |
| 6 | [How Agents Work](../weeks/06-agents/README.md): **Be the Agent**; capstone kickoff; first agent feature | Branches and pull requests; planted bug in agent code; feature clinic | Milestone 1; `AGENTS.md` trial; mid-course survey | [Walkthrough 2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6) |
| 7 | [Security, Data & Review](../weeks/07-security-and-review/README.md): **RLS Attack Lab**; connecting Supabase | AI-off maintenance task; security sweep; pull-request review; injection demo | Milestone 2; handoff test | — |
| 8 | [Ship It](../weeks/08-ship-it/README.md): polish sprint; demo video | **Project Fair**; AI-use rules revised; retrospective; post-course self-assessment | Final capstone, demo video, final reflection | [Walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8) |

Project briefs are in [projects/](../projects/README.md). Grading weights and policies are in the [syllabus](../SYLLABUS.md) and [assessment/](../assessment/README.md).

## Staffing and workload

**One instructor can run a cohort of 5–14 students** in both studios. **From about 15 students, add one TA per 15 students**, in both studios. Labs are long blocks of hands-on work for beginners, and the most common blocker (an account, a menu, a port) takes a person 30 seconds to fix and a stuck student 20 minutes.

**Oral walkthroughs are the biggest single cost.** Each is 10 minutes with the AI off, plus about 5 minutes to change over and score: 45 minutes per student for three rounds, based on UCSD CS1-LLM's reported 10–15 minutes to grade each project walkthrough ([Vadaparty et al.](https://arxiv.org/pdf/2406.15379)). Hold them in Studio B's project-work block (weeks 4 and 6) and Studio A's polish sprint (week 8), where one examiner fits about three slots, and put the rest in office hours or booked slots inside the [timing rule](../assessment/oral-walkthroughs.md#at-a-glance). **A lone instructor examines only while students do project work,** never during a first agent run or the first hand-written code; with a TA, one person examines while the other circulates.

**Estimated staff hours over 8 weeks, no TA.** The grading lines match the [assessment guide's workload table](../assessment/README.md#staff-workload-for-instructors), which breaks them down. These are planning numbers; office hours are not included.

| Task | 5 students | 10 students | 20 students |
|---|---|---|---|
| Studios (16 × 3 h) | 48 h | 48 h | 48 h |
| Preparation (2–3 h a week) | 16–24 h | 16–24 h | 16–24 h |
| Grading and walkthroughs (walkthroughs, labs, projects, reflections, reviews, exit tickets) | about 15 h | about 29 h | about 56 h |
| Per-studio surveys and the student-wisdom page | about 3 h | about 3 h | about 3 h |
| **Total** | **about 82–90 h** | **about 96–104 h** | **about 123–131 h** |
| **Per week** | about 10–11 h | about 12–13 h | about 15–16 h |

For comparison, the earlier one-studio design took about 58–66 hours for 10 students; the second studio adds 24 hours of contact time. A TA who attends both studios needs about 48 hours plus their own lab run-throughs.

**Useful roles in the studio:**

- **Lead:** gives the concept talk and the live demo, and keeps time.
- **Floaters:** work the "stuck" queue during the lab.
- **Tool medic:** in weeks 0–1 and 5, one person owns account and tool problems, so the others can teach.

**What a TA needs:** they don't need to be a professional developer. They do need to have **done every lab themselves with the current tools**, to read HTML, CSS and JavaScript comfortably, and to know the AI policy and the privacy rules below. Run a one-hour norming session before walkthrough 1: everyone scores the same two mock walkthroughs with the [protocol](../assessment/oral-walkthroughs.md) and [rubrics](../assessment/rubrics.md), then compares.

Fewer than 5 students, or a one-student Directed Study? Use the scaling table in [variants.md](variants.md#small-cohorts-and-one-student-directed-study).

## Weekly prep rhythm

| When | What | Time |
|---|---|---|
| **A week before** | Read the week's `README.md`, `lab.md` (both studios), `homework.md` and `instructor-notes.md`. **Do the lab yourself, end to end, as a student would, with this week's tools.** Note anything that has changed. Check [TOOLS.md](../TOOLS.md) and its [upcoming changes](../TOOLS.md#known-upcoming-changes) | 1–2 h |
| **Three days before Studio A** | Smoke-test this week's primary and fallback tools (10 minutes each; scripts in the [pre-cohort checklist](pre-cohort-checklist.md#t-1-week-smoke-test)). Check the starter or template links. Set up the live-demo repository at its "before" state and commit it | 1 h |
| **The day before each studio** | Brief the TAs (15 minutes): the checkpoints, the known pitfalls, the fallback plan, who presents at show and tell | 15 min |
| **On the day** | Arrive early. Open the demo codespace. Zoom the editor so the back row can read it. Have the timer, printed Safe Loop cards and (Studio B) the exit ticket ready | 20 min |
| **After Studio A** | Read the [two-question survey](#listening-to-students). Adjust Studio B: who needs catch-up help, which lab parts to finish first | 10 min |
| **After Studio B** | Read the exit tickets and the survey. Pick the most-missed question for next week's Studio A recap. Log tool problems ([open a tool-change issue](../.github/ISSUE_TEMPLATE/tool-change.yml)). Ask two students to show and tell next week | 30–60 min |

## Running the two studios

Both studios follow the same templates every week (from the [syllabus](../SYLLABUS.md#two-studios-a-week)). The minute-by-minute run sheets are in each week's `instructor-notes.md`. Lab parts are marked **Core** or **If time**: protect the core parts, and let "If time" parts go when a block runs long.

### Studio A — Learn & build

| Time | Block | Tips |
|---|---|---|
| 0:00–0:05 | **Recap:** last week's most-missed exit-ticket question | Answer it, then ask one student to say it back. Five minutes, no more |
| 0:05–0:25 | **Concept talk**, 20 minutes maximum | Use the week's `slides.md`. Stop at 20 minutes even if you haven't finished; the rest is in the week's README. Learners punish lecture-heavy courses ([Coursera reviews](https://www.coursera.org/learn/claude-code/reviews)) |
| 0:25–0:35 | **Live demo** of the Safe Loop on this week's skill | See [below](#the-live-demo-principle) |
| 0:35–2:50 | **Lab**, core parts, with a 10-minute break | Put checkpoint times on the board. Use a visible timer. Break at about 1:30 |
| 2:50–3:00 | **Checkpoint share** | Everyone posts a live URL, screenshot, commit or the exact blocker. This is the Studio A participation checkpoint |

### Studio B — Workshop

| Time | Block | Tips |
|---|---|---|
| 0:00–0:10 | **Show and tell:** two students demo | Ask presenters to show one thing the AI got wrong, not only the result. Rotate presenters across the course |
| 0:10–1:40 | **Lab continued, or a mini-lesson and practice** on the week's second skill (pull requests, charts, external APIs, a first automated test, connecting Supabase) | Mini-lessons follow the Studio A pattern in small: 10 minutes of demo, then guided practice |
| 1:40–2:30 | **Project work time**, oral walkthroughs (weeks 4, 6, 8), catch-up help | The safest time for walkthroughs: students are on their own projects. Floaters prioritize students who missed Studio A's checkpoint |
| 2:30–2:45 | **Debrief** | Ask "What did the AI get wrong? How did you find out?" more than "What did you build?" |
| 2:45–3:00 | **Exit ticket** (🔴 AI off, three questions, one about last week's own project) | Laptops closed or AI off. Questions are in [assessment/exit-tickets.md](../assessment/exit-tickets.md). Graded on completion, not correctness: say so every week |

**A "stuck" protocol for labs.** Teach it in week 1 and put it on the board:

1. **Read the error for 20 seconds** before pasting it anywhere. CMU students listed this among their own best practices ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)).
2. **Two strikes:** after two failed fixes, stop, go back to the last good commit if needed, and start a fresh chat with a better prompt.
3. **Ask a neighbor.**
4. **Join the queue:** a raised hand, a card on the laptop, or a chat channel. Floaters take the queue in order.

**Early finishers** do the lab's stretch goals, or become "explainers" who help classmates by asking questions, not by typing for them.

## The live-demo principle

**Run the Safe Loop live, every week, with the real tool, including the mistakes.**

Students copy what they see. A polished recording shows the result and hides the checking, which is the part they most need. Recorded step-by-step screen demos also go out of date within months ([VibeGym](https://vibegym.space/blog/best-vibe-coding-courses-for-beginners)). A live demo in which the AI gets something wrong, and you catch it, teaches more than one where everything works.

How to run it (10 minutes):

1. Start from a committed "before" state, so you can reset.
2. Type the **Describe** prompt live, in four parts: Goal · Context · Constraints · Done when. **Write the check first** (from week 4, a test) in a separate prompt.
3. Ask for a **plan**. Edit it out loud: "I don't want step 3; it touches the storage code."
4. Take **one step**. Run it. Run your check, then test the normal case **and** an edge case (empty input, reload, a narrow window).
5. **Read the diff** aloud. Point at one line you had to ask about. Say your **teach-back** out loud: what changed and why.
6. **Commit** with a clear message and, from week 2, an `Assisted-by:` line.

When the AI makes a mistake, slow down and narrate: "This is where I'd have shipped a bug." If nothing goes wrong, break something on purpose and roll back with git. If the tool is down, demo the fallback: that *is* the lesson.

> [!WARNING]
> Before you share your screen: close `.env` files and any tab showing a key, use a demo account with no personal data, and turn off notifications. Keep your own API keys in [Codespaces secrets](../setup/codespaces.md#keep-secrets-in-codespaces-secrets), so they never appear in the editor. Keep agent approvals on in every demo; never demo autopilot or skip-permissions modes.

## Handling tool outages

Expect them. At CMU, free-tier credits on Copilot, Claude, Gemini and a hosting service each ran out mid-assignment for at least one student ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). Services go down, and menus move overnight.

**The fallback drill.** [TOOLS.md](../TOOLS.md) gives every layer a primary tool and two fallbacks. When a tool fails, say calmly: *"This is the drill. Switch to the fallback."* Students lose nothing, because their work is in GitHub. Practice it once on purpose early (week 2's two-model comparison and week 5's provider swap are designed for this), so it's routine when it happens for real.

| What's down | What students do |
|---|---|
| A chat assistant | Move to the next assistant in TOOLS.md. Paste in the spec and the current code from GitHub |
| An app builder | Use the fallback builder, or build in a chat assistant with live preview. Export to GitHub often |
| Copilot credits have run out | Use a chat assistant in another tab, or a fallback editor from TOOLS.md. Or pair with a classmate who has credits, taking turns at the keyboard. See [troubleshooting](../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| An LLM API is rate-limited | Switch provider by changing the three environment variables (the week 5 drill) |
| Codespaces is down or out of hours | Edit in github.dev (press `.`); use [local setup](../setup/local-setup.md) if installed; pair up |
| GitHub is down | Work offline on specs, test plans and paper wireframes; commit later |
| Hosting or database | Use the fallback in TOOLS.md, or demo locally and deploy later |

**Plan Copilot credits across weeks 4–8.** Allowances reset on the first of each calendar month, not when the course starts, and agent mode in weeks 6–8 uses far more per request than completions and Ask mode in weeks 4–5. Before the course, note which reset dates fall inside it, and tell students in week 4 to save most of their allowance for the agent weeks. The student-facing plan is in [TOOLS.md](../TOOLS.md#credits-budget-for-the-course).

Keep one **unplugged activity** ready for every week: writing acceptance criteria, reading a printed diff, a peer explanation swap. Check the status pages before class ([githubstatus.com](https://www.githubstatus.com/)). After an outage, log it, update TOOLS.md if the change is lasting, and tell the class what changed.

## Grading workflow

The weights, and the rubrics behind them:

| Component | Weight | Rubric |
|---|---|---|
| Weekly labs and homework | 20% | [Effort and completion](../assessment/rubrics.md#weekly-labs-and-homework); week 5 uses the [AI micro-app rubric](../assessment/rubrics.md#ai-micro-app) |
| In-class builds, exit tickets and participation | 15% | [In-class work](../assessment/rubrics.md#in-class-work-and-participation) (16 studios, lowest two dropped) |
| Project 1 | 10% | [Project 1](../assessment/rubrics.md#project-1) |
| Capstone | 30% | [Capstone](../assessment/rubrics.md#capstone) |
| Oral walkthroughs | 15% | [Protocol](../assessment/oral-walkthroughs.md) |
| AI-free reflections and peer reviews | 10% | [Reflections and peer reviews](../assessment/rubrics.md#reflections-and-peer-reviews) |

Letter grades (A–F, no plus or minus), drops, retakes, late work, pairs and pass/fail: [assessment/README.md](../assessment/README.md). **Explain the grading system in the first or second studio** (FSH 4700 B); week 1 Studio A is the natural place.

**Collecting work, on Canvas.** For each project, ask for the **repository** link, the **live URL** (from week 5, the **production URL plus a screenshot**, because the host deletes old preview deployments), and the link to the **commit** to be graded. The commit link fixes the version, so later pushes don't change what you grade. All personal writing (reflections, peer reviews, AI-use rules, contribution statements, the safety contract) is submitted on Canvas, never in a repository.

**Reviewing a project, in this order** (about 10–15 minutes):

1. **The live site.** Does it load in a private window? Try two acceptance criteria from `SPEC.md`, including one edge case.
2. **README and SPEC.md.** Can you understand what it is and how to run it? Is there an honest **Known issues** section?
3. **Commit history.** Small steps with clear messages and `Assisted-by:` lines, or one giant commit?
4. **PROMPTS.md.** Is it honest and specific? Are there **teach-backs** before AI-written commits, and a specific "What I wrote or decided myself"?
5. **TESTS.md** and, from week 4, `npm test` or `node --test`. Were tests written before the code they check?
6. **SECURITY_CHECKLIST.md** (weeks 7–8): is there real evidence, not just ticks?
7. **Read one function.** Write down a question about it for the next oral walkthrough.

**Keep it cheap and consistent.** Weekly labs are graded on effort and completion, not polish. Before grading each project, examiners grade the same three submissions and compare, to agree on the standard. Return lab feedback within a week, and project feedback before the next project starts, always on Canvas.

## Listening to students

**A two-question survey after every studio.** One minute, anonymous, on Canvas, at the end of the studio or the same evening:

1. *How well do you understand the code you worked on today?* (1 = not at all, 7 = I could explain every line)
2. *What one thing slowed you down or confused you most?*

Ask about understanding, not satisfaction: in CMU 15-113's fall 2026 data, satisfaction rose on three of four assignments while self-rated understanding fell on all four ([CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)). Read the answers before the next studio and say what you changed. Watch for the understanding dip in weeks 6–8.

**A mid-course "student wisdom" page.** The week 6 homework includes a longer mid-course survey (rate satisfaction, understanding and how much of the code you read, each 1–7; hours spent; the tool problem you hit; and "one tip you'd give a friend starting this week"). Turn the answers into a one-page summary on Canvas before week 7 Studio A: the most useful tips in students' own words, the three most common problems, and **what you're changing in response**. CMU publishes a report like this ([CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)), and Michigan's instructor revised his course mid-way after a student feedback session ([L10 slides](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L10/slides.md)).

- **Small numbers aren't anonymous.** Report nothing from a question with fewer than 5 answers, and tell students that in a small class you may be able to guess who wrote what. With fewer than 5 students, replace the surveys with a 10-minute one-to-one conversation.
- **Quote only with permission,** and never with names or details that identify someone.
- **If an AI helps you summarize,** remove names first and check every quote and number by hand. CMU's report was drafted by an AI from anonymized answers, and its theme counts are an AI's reading.

## The course tutor: keep tutor mode narrow

In the Debug Clinic (week 4), students work with the AI off. After 10 minutes on one bug they may switch on **tutor mode**: a chat assistant set up with a prompt that makes it give hints only, never the fix. The prompt, how to share it as a Gemini Gem, the evidence behind it and its limitations are in [course-tutor.md](course-tutor.md). Students can also use it for homework whenever they want to learn rather than just get unstuck.

**Keep it narrow.** Don't add a course-wide AI tutor or AI teaching assistant. In a randomized trial with 2,379 undergraduates, access to a course-integrated AI tutor lowered final grades by 0.37 standard deviations and participation in the course's learning activities by 0.90, with larger losses among first-generation students ([EdWorkingPapers 26-1598](https://edworkingpapers.com/ai26-1598)). If you ever do add one, watch whether lab participation drops.

## AI policy, academic integrity and privacy

### Transparency over detection

The course **requires** AI. The rule is not "how much AI did you use" but "can you explain what you shipped". Every task carries a label in words: 🟢 **AI on**, 🟡 **AI limited** or 🔴 **AI off**. The complete list of 🟡 and 🔴 work is in [section 8 of the syllabus](../SYLLABUS.md#8-ai-use-policy); that list is the one that counts.

**Transparency is required and never penalized.** Every project has a `PROMPTS.md` log. A log that says "the AI wrote most of this, and I found and fixed two bugs" is a good log. Hiding AI use is the problem, not using it. CMU 15-113 takes the same view: it cares more about transparency than about how much students relied on AI ([CMU 15-113](https://www.cs.cmu.edu/~113/)).

**Don't use AI detectors.** For code they're meaningless here, because the course requires AI. For writing, they give a probability, not evidence, and a false accusation damages trust more than a missed case. Educators are already moving away from trying to make assignments AI-proof ([ACM Task Force](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf)). This course verifies understanding directly instead: effort-graded labs, AI-free exit tickets, teach-backs and oral walkthroughs.

**Make the 🔴 work easy to do honestly.** Reflections are short, anchored in specific moments ("an error message that surprised you"), and graded on specifics, which are easy to write from experience and hard to fake. Give class time for them where you can.

### Academic integrity: follow FSH 2300

The University of Idaho Student Code of Conduct (FSH 2300, revised 1 April 2025) names "reliance on prohibited technological assistance/artificial intelligence tools" as academic dishonesty (E-1.c). The course's two processes, written for students in [assessment/README.md](../assessment/README.md#academic-integrity), never mix:

1. **"Explain it or redo it" is a learning conversation.** When a student can't explain part of their own work, or `PROMPTS.md` doesn't match the repo, treat it as a learning problem first: they haven't met the outcome yet. A 10-minute conversation, then a redo within 7 days, graded on the normal rubric with no cap or penalty. If, during the conversation, you come to suspect misconduct, stop, tell the student so, and switch to process 2.
2. **Suspected academic dishonesty goes to the University.** You **notify the student and the Dean of Students** (FSH 2300 F-9). You **may not apply any grade outcome until the resolution process has concluded**; if grades are due first, enter an Incomplete (F-9). Don't apply the course's own penalties, caps or zeros in the meantime. Keep your notes factual (what you saw, in which commit or submission), and don't discuss the case with other students.

### Privacy rules for staff

Grades and graded work are private (FSH 4700 F-6; FSH 2600, which applies FERPA). Student repositories are public portfolios, so:

- **Grades and feedback go on Canvas only.** Never post them as GitHub issues, pull-request comments or commits on a student's repo.
- **Personal writing goes on Canvas only:** reflections, exit tickets, personal AI-use rules, the safety contract, self-assessments, written peer reviews, pair contribution statements and pitches. If a student commits one by mistake, ask them to remove it.
- **No classmates' names in repos.** Students refer to each other by GitHub username. Pull-request comments about code are ordinary code review; the graded review is the Canvas one.
- **Pseudonyms are fine.** Students don't need real names or photos anywhere public. Keep the username-to-student mapping in Canvas or a private spreadsheet.
- **Recordings** happen only with consent (walkthroughs) or as a CDAR accommodation (studios), are kept where only staff can see them, and are deleted once grades are final (FSH 4700 F-8). Concept talks you record go on Canvas only.
- **Class-level data:** share self-assessment summaries with the class only when at least 10 students took it; with fewer, compare pre and post with each student individually. Report nothing below 5 answers from any survey.

## Supporting weaker students

The research is blunt: AI tends to widen gaps between students.

- In Prather et al.'s "The Widening Gap", students who were already doing well used AI to speed up code they had already planned. Struggling students developed new problems: constant suggestions broke their concentration, the tool led them down wrong paths, and they fell behind without realizing it. They finished believing they had done better than they had ([Prather et al., ICER 2024](https://dl.acm.org/doi/10.1145/3632620.3671116)).
- The ACM Task Force reports that less-skilled students use AI more but benefit less ([ACM](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf)).
- In a survey of vibe coders, non-developers knew AI code has weaknesses as well as professionals did, yet none of them always checked it. Practice, not awareness, predicted who checked ([Fawzy et al.](https://arxiv.org/html/2605.24521v1)).

**Warning signs** to watch for from week 1:

- Can't say what their last commit changed, or can't answer the exit ticket's question about last week's project.
- Very long chats, or the same error pasted three or more times (the two-strikes rule is being skipped).
- Huge commits: "add everything". No teach-backs in `PROMPTS.md`.
- Tests only ever try the happy path.
- A reflection that rates confidence 5/5 but can't explain the least-sure part in two sentences.
- Missed the Studio A checkpoint two weeks running.

**What helps:**

- **Act early.** Use the [self-assessment](../assessment/self-assessment.md), the first two weeks' exit tickets and the per-studio survey to find students who need support. Don't wait for walkthrough 1.
- **Point to the minimum.** Every homework ends with a **Minimum to keep up** box. A student who is behind does that first, and the core tier next.
- **Use the rescue starters.** A student whose Project 1 isn't working by week 4 can continue from a working rescue starter ([projects/rescue-starters/](../projects/rescue-starters/)) and still do every later activity.
- **Offer catch-up office hours** after weeks 4 and 7, the two weeks that most often leave students behind.
- **Make them narrate.** "Before you commit, tell me (or your partner) in one sentence what this diff does." That's the teach-back, out loud.
- **Teach the patterns that worked** in Anthropic's trial: ask for an explanation along with the code, ask conceptual questions, and fix errors yourself. The patterns that failed were handing everything over, and using AI to debug instead of to understand ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)).
- **Turn down the noise.** For students distracted by constant suggestions, suggest switching off inline completions (from the Copilot icon in the status bar) and keeping chat in Ask mode.
- **Shrink the steps and the scope.** Core tier only; one acceptance criterion at a time; tutor mode when stuck.
- **Pair them well.** With a partner who explains rather than types, swapping roles every 20 minutes.
- **Invite them to office hours by name.** "I don't understand what the AI did" is exactly what office hours are for.

## Stretching advanced students

- **The stretch tier** of every homework is theirs.
- **Add constraints:** build a feature without an agent; switch to a small local model, which makes sloppy engineering visible (Michigan's reason for using one: [UMich EECS 498](https://eecs498-aase.github.io/syllabus.html)).
- **Go deeper:** build a tiny agent of their own (Stanford's CS146S opens with a roughly 200-line one: [CS146S](https://themodernsoftware.dev/)); write an MCP server; build the same app in two stacks and compare; make a small open-source contribution.
- **Give them roles:** lead reviewer for pull requests in week 7; presenter of "what went wrong" in debriefs. The rule when helping others: **explain, don't type**.
- **Capstone in a pair,** with a bigger scope and individual orals.

For whole cohorts of experienced programmers, see [variants.md](variants.md#experienced-programmers).

## Inclusive practices

- **Cost.** Every required tool is free. Never give credit for a paid tool, and never let a paid tool be necessary for full marks. Codespaces runs on Chromebooks and loaner laptops.
- **Accessibility.** Slides are plain Markdown and work with screen readers; labs are step-by-step text; the [accessibility guide](../resources/accessibility.md) covers the tools with a screen reader or keyboard. In live demos, zoom the editor, use a high-contrast theme and say what you click. Caption any video. Ask in week 1 who needs adjustments, and follow CDAR letters (syllabus section 12).
- **Language and jargon.** Define every term the first time (the [glossary](../resources/glossary.md) helps). Non-programmers in online courses complain about jargon that's never explained ([Coursera reviews](https://www.coursera.org/learn/vibe-coding-fundamentals/reviews)). Students may use AI to explain instructions in their own language; that's 🟢 AI on.
- **Backgrounds.** Don't assume a gaming, math or technology background. Let projects come from students' own lives and interests (with made-up data about other people).
- **Safety to be wrong.** Make your own mistakes visible in demos. Praise bugs found, not only features shipped. Offer an anonymous question channel.
- **Time.** This is an accelerated course at about 17 hours a week. Hold the line on the core tier, protect the "Minimum to keep up", and use the late-work policy in [assessment/README.md](../assessment/README.md) when life happens.
- **Privacy and identity.** Students may use a pseudonymous GitHub username, and don't need real names or photos in public repositories.
- **Age and region.** Settle the tool stack before enrollment: [variants.md](variants.md).
- **Syllabus statements.** The syllabus deliberately has no inclusivity statement. **Check CETL's current guidance before adding one:** Idaho's SB 1198 took effect on 1 July 2025, and an office named in older syllabus templates may no longer exist.

## Measuring outcomes

No controlled study yet shows how much programming knowledge non-programmers need in order to vibe-code safely ([October 2026 update](../research/landscape-update-2026-10.md)). So measure your own students.

| Measure | When | What to look for |
|---|---|---|
| **Self-assessment** ([assessment/self-assessment.md](../assessment/self-assessment.md)) | Week 1 and week 8 | Growth per item. Compare week 8 self-ratings with walkthrough 3 scores: over-confidence is the "illusion of competence" the research warns about |
| **Exit tickets** ([assessment/exit-tickets.md](../assessment/exit-tickets.md)) | Every Studio B | The share of the class getting each question right, and especially the delayed-recall question about last week's project. Reteach the weakest question in next Studio A's recap |
| **Two-question survey** | After every studio | Understanding (1–7) over time; the most common blocker |
| **Mid-course survey** | Week 6 | Satisfaction, understanding and code reading, 1–7, plus hours spent. Feeds the student-wisdom page |
| **AI-off maintenance task** | Week 7 | How many students can change their own capstone with the AI off: the retention data no published study has for non-programmers |
| **Oral walkthrough scores** | Weeks 4, 6, 8 | Scores should hold or rise in the agent weeks. If they fall, add more code reading |
| **Tool incident log** | Continuously | Credits running out, outages, changed menus. Feeds TOOLS.md |

Share what you learn (aggregated, with no student data) by opening an issue or discussion on the course repository. If you plan to publish results, get your institution's research-ethics approval first.

## University of Idaho checklist

Before the course starts and in week 1:

- [ ] **Fill in the syllabus placeholders:** the subject prefix for [subject] 2990, your title, email and phone, response time, office, office hours, dates, meeting rooms and the Canvas link.
- [ ] **Confirm the credit load with your department.** Three credits means about 135 hours of student work (catalog Regulation D-1); the syllabus explains the accelerated pace. For 1 or 2 credits, see [variants.md](variants.md#1-credit-and-2-credit-versions).
- [ ] **Decide the grading basis.** Letter grades A–F by default. A department may grade a directed study pass/fail for everyone (Regulation E-1-b); announce it in the first studio. Students may still choose the pass/fail option (Regulation B-10), which the Registrar applies.
- [ ] **Check the statement texts against CETL's current syllabus guidance** before you publish: learning civility, CDAR, firearms (the syllabus text is based on [APM 95.12](https://www.uidaho.edu/policies/apm/95/12)), the student-resource list and its phone numbers, and the links the syllabus leaves "on Canvas" (SI-PASS, Tutoring, Writing Center, Green Dot). Add an inclusivity statement only after checking CETL's guidance (see [Inclusive practices](#inclusive-practices)).
- [ ] **Send the final syllabus to students and to the department office** at the start of the course (FSH 4700 F-4).
- [ ] **Explain the grading system** in the first or second studio (FSH 4700 B), including how attendance affects the grade (Regulation M-1).
- [ ] **Post all three walkthrough windows on Canvas in week 1** (meetings outside scheduled class time need notice and alternatives, Regulation O-9).
- [ ] **Confirm age (18+) and region before enrollment,** so the right tool stack is in place on day one ([variants.md](variants.md#under-18-cohorts)).

## Dated calendar

Tool changes that fall before or during the next cohorts. [TOOLS.md](../TOOLS.md#known-upcoming-changes) is the source of truth for what changes; the step-by-step actions are in the [pre-cohort checklist](pre-cohort-checklist.md#maintenance-calendar).

| Date | Change | What to do |
|---|---|---|
| 30 Oct 2026 | Supabase stops giving new tables automatic API permissions ("grants") in every project | Re-run the RLS lab's `setup.sql` and `fix.sql` on an existing project; check the week 7 notes. Teach grants and RLS together, and never answer "permission denied" with a bare grant |
| 31 Oct 2026 | Lovable's current pricing ends; a ChatGPT student offer closes | Update TOOLS.md; check Lovable's new pricing in early November |
| 2 Nov 2026 | Antigravity's free plan narrows to a single model | Re-run the editor and agent rows of the smoke test |
| 16 Nov 2026 | Copilot retires some models on paid plans | Low impact: Free and Student plans pick models automatically |
| 31 Dec 2026 | Last day to redeem Google's student offer | Tell enrolled US students in December if it's useful, with the auto-renewal warning; otherwise remove it |
| End of 2026 | Supabase retires its legacy keys | Teach only publishable and secret keys |
| 17–20 Feb 2027 | SIGCSE 2027 abstracts on novice verification become public | Re-read them before the next design pass |
| 22 Mar 2027 | Firebase Studio shuts down and deletes data | Already on TOOLS.md's do-not-use list |
| 7 May 2027 | An older Gemini API model may shut down | Check that TOOLS.md and the starters' `.env.example` name the current model |
| One week before each cohort, and before week 5 | Full smoke test | The [smoke test](pre-cohort-checklist.md#t-1-week-smoke-test) and the [mid-course re-check](pre-cohort-checklist.md#mid-course-re-check-before-week-5) |

## Answer keys

Keys for the Debug Clinic, Be the Agent and the RLS Attack Lab are indexed in [answer-keys/README.md](answer-keys/README.md). If your copy of the course repository is public, **so are the keys**. Vary the planted bugs each cohort using the bug menu.

## FAQ

**What if a student already codes?**
Welcome them, and hold them to the same bar. The Safe Loop, `PROMPTS.md` and the oral walkthroughs still apply, and experienced programmers are often *more* over-confident with AI: in METR's trial, experienced developers were 19% slower with AI while believing they were faster ([METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)). Point them to the stretch tier, make them reviewers, and don't let them carry a pair. See [variants.md](variants.md#experienced-programmers).

**What if only one or a few students enroll?**
The course still works, with substitutes for the peer activities: the instructor's practice repo for reviews, the instructor as the second player in Be the Agent, an outside demo slot instead of the Project Fair. See [variants.md](variants.md#small-cohorts-and-one-student-directed-study).

**Can I offer it for fewer credits, or over a full semester?**
Yes: [1- and 2-credit versions](variants.md#1-credit-and-2-credit-versions) and a [16-week semester version](variants.md#16-week-semester-version).

**What if a student pays for a better tool?**
Allowed, with the same rules: disclose it in `PROMPTS.md`, set its privacy settings, and be able to explain everything. It earns no extra credit; grading is on process and understanding, not polish. Never require it, and make sure the free path still works.

**What if students under 18 enroll?**
Several tools in the primary stack are 18+ only. Switch the cohort to the variant stack in [variants.md](variants.md#under-18-cohorts), ideally **before** enrollment, and get parental consent.

**What if students are in the EEA, the UK or Switzerland?**
The Gemini API's free tier can't be used for apps serving users there. Use Groq or another fallback for week 5 onward: [variants.md](variants.md#eea-uk-and-swiss-cohorts).

**Can I use GitHub Classroom or a course organization?**
Yes, for collecting work, but Vercel's free Hobby plan can't deploy **private** repositories owned by an organization. Have students create their project repositories in their **personal** accounts from your template repositories ([how](../setup/codespaces.md#start-a-project-from-a-starter)) and submit the links on Canvas, keep organization repos public, or plan to use the Cloudflare fallback for hosting.

**What if a tool changes in the middle of the course?**
Switch the class to the fallback, update TOOLS.md, and tell students what changed. Then [open a tool-change issue](../.github/ISSUE_TEMPLATE/tool-change.yml) so other instructors benefit. The mid-course re-check in the [pre-cohort checklist](pre-cohort-checklist.md#mid-course-re-check-before-week-5) catches most changes before they bite.

**What if the whole class runs out of credits at once?**
Students use credits at different rates, so it's rarely everyone at once. Run the fallback drill, pair students across tools, and plan around the monthly reset (see [Handling tool outages](#handling-tool-outages)). Teach students to check their usage meters in week 4.

**A student won't use AI tools, for privacy or ethical reasons. What now?**
Take it seriously; the concern is reasonable. Offer the most private options: temporary chats, Groq (which doesn't retain request data by default), or a local model through Ollama if their computer can run one. For activities that need a cloud agent, pairing with a classmate is an option. The course's outcomes, including explaining code and building safely, don't depend on any one vendor.

**Do I need to be an expert programmer to teach this?**
No. You need to be comfortable with HTML, CSS, JavaScript and git, and to have done every lab yourself with the current tools. Being willing to debug in front of the class matters more than knowing every answer.

**A student's app works, but they can't explain it. Pass or fail?**
It doesn't meet the outcome yet. "If you can't explain it, you didn't build it" ([UMich EECS 498](https://eecs498-aase.github.io/syllabus.html)). Use "explain it or redo it" ([above](#academic-integrity-follow-fsh-2300)): the student studies their code, with the tutor if they like, and explains it again. That is a learning conversation, not a misconduct case.

**Can students use tools that aren't in TOOLS.md?**
Yes, if they check its privacy terms, age rules and data location first ([privacy-settings.md](../setup/privacy-settings.md#any-other-ai-tool)) and disclose it in `PROMPTS.md`. The tools under "Do not use" in TOOLS.md stay off-limits.

## Contributing back

Found a mistake, taught an adaptation, or noticed a tool change? See [CONTRIBUTING.md](../CONTRIBUTING.md). Tool changes almost always mean editing [TOOLS.md](../TOOLS.md) and nothing else.
