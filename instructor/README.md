# Instructor Guide

> For anyone teaching Vibe Coding 101, including instructors and teaching assistants (TAs) who didn't design it.

This folder is the instructor's side of the course. Each week also has its own `instructor-notes.md` with a run sheet, a live-demo script, common pitfalls and fallback plans.

| File | Use it for |
|---|---|
| **This page** | How the course thinks, how to run a studio, grading, supporting students, FAQ |
| [pre-cohort-checklist.md](pre-cohort-checklist.md) | What to do, and test, from six weeks before the course to the end |
| [variants.md](variants.md) | Under-18 and European cohorts, other schedules, online delivery, budgets, experienced programmers |
| [course-tutor.md](course-tutor.md) | The hint-only "tutor mode" prompt used in the Debug Clinic |
| [answer-keys/](answer-keys/README.md) | Answer keys for the Debug Clinic, Be the Agent and the RLS Attack Lab |

Weekly instructor notes: [week 1](../weeks/01-hello-vibe-coding/instructor-notes.md) · [week 2](../weeks/02-prompting-and-save-points/instructor-notes.md) · [week 3](../weeks/03-spec-first/instructor-notes.md) · [week 4](../weeks/04-read-debug-own-it/instructor-notes.md) · [week 5](../weeks/05-apis-secrets-servers/instructor-notes.md) · [week 6](../weeks/06-agents/instructor-notes.md) · [week 7](../weeks/07-security-and-review/instructor-notes.md) · [week 8](../weeks/08-ship-it/instructor-notes.md)

## Philosophy: teach the loop, not the tool

The course teaches one workflow, the [Safe Loop](../resources/safe-loop.md) (Describe → Plan → Step → Test → Read → Commit), and uses whichever tools currently support it for free. Four findings shaped that choice. The full argument is in [research/design-rationale.md](../research/design-rationale.md), and the sources are in the [landscape report](../research/landscape-report-2026-09.md).

1. **AI raises output but can lower understanding.** In Anthropic's randomized trial, engineers learning a new library with AI scored 50% on a follow-up quiz versus 67% without it, and fell furthest behind on debugging ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). In a trial with about 1,000 high-school math students, unrestricted chatbot help raised practice scores 48% but cut unaided exam scores 17%. A hint-only tutor raised practice scores 127% with no significant exam harm ([Bastani et al., PNAS 2025](https://www.pnas.org/doi/10.1073/pnas.2422633122)). **Structure changes the outcome**, so the course adds it: the Safe Loop, [six skills students must show without AI](../resources/without-ai-skills.md), oral walkthroughs, and a hint-only tutor.
2. **Understanding falls when agents take over.** In CMU 15-113's surveys, students' self-rated understanding peaked on an assignment where they read and partly wrote the code, then fell to the year's lowest point during the agent assignments ([CMU Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). So this course holds agents back until week 6 and puts two of its three oral walkthroughs in the agent weeks.
3. **Beginner apps break where browser meets server.** A scan of 1,645 apps built with Lovable found 170 with exposed databases: a public key and missing row-level security ([Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities)). Moltbook repeated the pattern ([Wiz](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)). Hence week 5 (secrets live on the server) and week 7 (the RLS Attack Lab).
4. **Tools change monthly.** Several tools a 2025 syllabus would have relied on have since been retired or lost their free tier (see [TOOLS.md](../TOOLS.md#do-not-use-in-this-course)). So every tool detail lives in TOOLS.md, every layer has two fallbacks, and every cohort starts with a smoke test.

Vendor guides and practitioners describe nearly the same loop: a spec, a plan you edit, one small task, tests, reading the diff, a commit ([Claude Code best practices](https://code.claude.com/docs/en/best-practices); [Codex best practices](https://learn.chatgpt.com/guides/best-practices); [Osmani](https://addyosmani.com/blog/ai-coding-workflow/); [Willison](https://simonwillison.net/guides/agentic-engineering-patterns/)). Products come and go; the loop has lasted.

**What this means for you:**

- **Model the loop every week,** live, including the checking (see [the live-demo principle](#the-live-demo-principle)).
- **When a tool changes, change TOOLS.md, not the lesson.** Click-paths in other files carry a "menus move" note for this reason.
- **Grade understanding and process, not polish.** A working demo is required but not sufficient.

## The course at a glance

| Week | Studio | Named activity | Due by the end of the week | Oral walkthrough |
|---|---|---|---|---|
| 0 | [Pre-work](../setup/README.md) | — | Accounts, privacy settings, safety contract, [self-assessment](../assessment/self-assessment.md) | — |
| 1 | [Hello, Vibe Coding](../weeks/01-hello-vibe-coding/README.md) | Home page in a chat assistant | Home page live on GitHub Pages | — |
| 2 | [Prompting & Save Points](../weeks/02-prompting-and-save-points/README.md) | **Game in an Hour** | Game in `/game/` with one commit per working step | — |
| 3 | [Spec First](../weeks/03-spec-first/README.md) | Builder bake-off | `SPEC.md`; Project 1 v1 | — |
| 4 | [Read It, Debug It, Own It](../weeks/04-read-debug-own-it/README.md) | **Debug Clinic** (AI off) | Project 1 final | [Walkthrough 1](../assessment/oral-walkthroughs.md#walkthrough-1-week-4) |
| 5 | [APIs, Secrets & Servers](../weeks/05-apis-secrets-servers/README.md) | Provider-swap drill | AI micro-app deployed; capstone pitch before week 6 | — |
| 6 | [How Agents Work](../weeks/06-agents/README.md) | **Be the Agent** | Capstone kickoff: first tested feature | [Walkthrough 2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6) |
| 7 | [Security, Data & Review](../weeks/07-security-and-review/README.md) | **RLS Attack Lab** | Security checklist; peer code review | — |
| 8 | [Ship It](../weeks/08-ship-it/README.md) | **Project Fair** | Capstone, demo video, final reflection | [Walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8) |

Project briefs are in [projects/](../projects/README.md). Grading weights and policies are in the [syllabus](../SYLLABUS.md) and [assessment/](../assessment/README.md).

## Staffing

**Ratio: about one TA per 15 students** in the studio, plus the instructor. Labs are 100 minutes of hands-on work for beginners, and the most common blocker (an account, a menu, a port) takes a person 30 seconds to fix and a stuck student 20 minutes.

**Oral walkthroughs are the biggest staffing cost.** Each is 10 minutes with the AI off, plus a few minutes to change over and write notes. CS1-LLM's video explanations took 10–15 minutes each to grade ([CS1-LLM](https://arxiv.org/pdf/2406.15379)). On that basis the landscape report estimates **5–8 TA-hours per round for 30 students, or 15–23 hours for all three rounds**. Plan the slots before the course starts: during lab time in weeks 4, 6 and 8 (TAs take students out one at a time) plus extra office-hour slots.

**Useful roles in the studio:**

- **Lead:** gives the concept talk and the live demo, and keeps time.
- **Floaters:** work the "stuck" queue during the lab.
- **Tool medic:** in weeks 0–1 and 5, one TA owns account and tool problems, so the others can teach.

**What a TA needs:** they don't need to be a professional developer. They do need to have **done every lab themselves with the current tools**, to read HTML, CSS and JavaScript comfortably, and to know the AI policy. Run a one-hour norming session before walkthrough 1: everyone scores the same two mock walkthroughs with the [protocol](../assessment/oral-walkthroughs.md) and [rubrics](../assessment/rubrics.md), then compares.

## Weekly prep rhythm

| When | What | Time |
|---|---|---|
| **A week before** | Read the week's `README.md`, `lab.md` and `instructor-notes.md`. **Do the lab yourself, end to end, as a student would, with this week's tools.** Note anything that has changed. Check [TOOLS.md](../TOOLS.md) and its [upcoming changes](../TOOLS.md#known-upcoming-changes) | 1–2 h |
| **Three days before** | Smoke-test this week's primary and fallback tools (10 minutes each; scripts in the [pre-cohort checklist](pre-cohort-checklist.md#t-1-week-smoke-test)). Check the starter or template links. Set up the live-demo repository at its "before" state and commit it | 1 h |
| **The day before** | Brief the TAs (15 minutes): the lab's checkpoints, the known pitfalls, the fallback plan, who is presenting at show and tell | 15 min |
| **On the day** | Arrive early. Open the demo codespace. Zoom the editor so the back row can read it. Have the timer, printed Safe Loop cards and the exit ticket ready | 20 min |
| **Within two days after** | Read the exit tickets. Note what to reteach at the start of next week. Log tool problems ([open a tool-change issue](../.github/ISSUE_TEMPLATE/tool-change.yml)). Ask two students to present next week | 30–60 min |

## Running a 3-hour studio

Every studio uses the same template (from the [syllabus](../SYLLABUS.md)). The week's `instructor-notes.md` has a minute-by-minute version.

| Time | Block | Tips |
|---|---|---|
| 0:00–0:10 | **Show and tell:** two students demo their homework | Ask presenters to show one thing the AI got wrong, not only the result. Rotate presenters across the term |
| 0:10–0:30 | **Concept mini-lecture**, 20 minutes maximum | Use the week's `slides.md`. Stop at 20 minutes even if you haven't finished; the rest is in the week's README. Learners punish lecture-heavy courses ([Coursera reviews](https://www.coursera.org/learn/claude-code/reviews)) |
| 0:30–0:40 | **Live demo** of the Safe Loop on this week's skill | See [below](#the-live-demo-principle) |
| 0:40–2:20 | **Lab**, with checkpoints and a 10-minute break | Put checkpoint times on the board. Use a visible timer. Break at about 1:30 |
| 2:20–2:45 | **Debrief and share-out** | Ask "What did the AI get wrong? How did you find out?" more than "What did you build?" |
| 2:45–3:00 | **Exit ticket** (AI-free, three questions) and homework preview | Laptops closed or AI off. Questions are in [assessment/exit-tickets.md](../assessment/exit-tickets.md) |

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
2. Type the **Describe** prompt live, in four parts: Goal · Context · Constraints · Done when.
3. Ask for a **plan**. Edit it out loud: "I don't want step 3; it touches the storage code."
4. Take **one step**. Run it. Test the normal case **and** an edge case (empty input, reload, a narrow window).
5. **Read the diff** aloud. Point at one line you had to ask about.
6. **Commit** with a clear message.

When the AI makes a mistake, slow down and narrate: "This is where I'd have shipped a bug." If nothing goes wrong, break something on purpose and roll back with git. If the tool is down, demo the fallback: that *is* the lesson.

> [!WARNING]
> Before you share your screen: close `.env` files and any tab showing a key, use a demo account with no personal data, and turn off notifications. Keep your own API keys in [Codespaces secrets](../setup/codespaces.md#keep-secrets-in-codespaces-secrets), so they never appear in the editor.

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

Keep one **unplugged activity** ready for every week: writing acceptance criteria, reading a printed diff, a peer explanation swap. Check the status pages before class ([githubstatus.com](https://www.githubstatus.com/)). After an outage, log it, update TOOLS.md if the change is lasting, and tell the class what changed.

## Grading workflow

The weights, and the rubrics behind them:

| Component | Weight | Rubric |
|---|---|---|
| Weekly labs and homework | 20% | [Effort and completion](../assessment/rubrics.md#weekly-labs-and-homework) |
| In-class builds, exit tickets and participation | 15% | [In-class work](../assessment/rubrics.md#in-class-work-and-participation) |
| Project 1 | 10% | [Project 1](../assessment/rubrics.md#project-1) |
| Capstone | 30% | [Capstone](../assessment/rubrics.md#capstone) |
| Oral walkthroughs | 15% | [Protocol](../assessment/oral-walkthroughs.md) |
| AI-free reflections and peer reviews | 10% | [Reflections and peer reviews](../assessment/rubrics.md#reflections-and-peer-reviews) |

The AI micro-app has its own [rubric](../assessment/rubrics.md#ai-micro-app). Late work, pairs and pass/fail options: [assessment/README.md](../assessment/README.md).

**Collecting work.** Keep one spreadsheet (or your learning platform) with each student's GitHub username and repository links. For each project, ask for three links: the **repository**, the **live site**, and the **commit** to be graded. The commit link fixes the version, so later pushes don't change what you grade.

**Reviewing a project, in this order** (about 10 minutes):

1. **The live site.** Does it load? Try two acceptance criteria from `SPEC.md`, including one edge case.
2. **README and SPEC.md.** Can you understand what it is and how to run it?
3. **Commit history.** Small steps with clear messages, or one giant commit?
4. **PROMPTS.md.** Is it honest and specific? What did the student check or change themselves?
5. **TESTS.md** and, from week 5, `npm test`.
6. **SECURITY_CHECKLIST.md** (weeks 7–8): is there real evidence, not just ticks?
7. **Read one function.** Write down a question about it for the next oral walkthrough.

**Keep it cheap and consistent.** Weekly labs are graded on effort and completion, not polish. Before grading each project, TAs grade the same three submissions and compare, to agree on the standard. Aim to return lab feedback within a week, and project feedback before the next project starts.

## The course tutor

In the Debug Clinic (week 4), students work with the AI off. After 10 minutes on one bug they may switch on **tutor mode**: a chat assistant set up with a prompt that makes it give hints only, never the fix. The prompt, how to share it as a Gemini Gem, the evidence behind it and its limitations are in [course-tutor.md](course-tutor.md). Students can also use it for homework whenever they want to learn rather than just get unstuck.

## AI policy: transparency over detection

The course **requires** AI. The rule is not "how much AI did you use" but "can you explain what you shipped". Use levels are 🟢 Expected, 🟡 Limited and 🔴 Not allowed (see the [syllabus](../SYLLABUS.md), section 8).

**Transparency is required and never penalized.** Every project has a `PROMPTS.md` log. A log that says "the AI wrote most of this, and I found and fixed two bugs" is a good log. Hiding AI use is the problem, not using it. CMU 15-113 takes the same view: it cares more about transparency than about how much students relied on AI ([CMU 15-113](https://www.cs.cmu.edu/~113/)).

**Don't use AI detectors.** For code they're meaningless here, because the course requires AI. For writing, they give a probability, not evidence, and a false accusation damages trust more than a missed case. Educators are already moving away from trying to make assignments AI-proof ([ACM Task Force](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf)). This course verifies understanding directly instead: effort-graded labs, AI-free exit tickets, and oral walkthroughs.

**Make the 🔴 work easy to do honestly.** Reflections are short, anchored in specific moments ("an error message that surprised you"), and graded on specifics, which are easy to write from experience and hard to fake. Give class time for them where you can.

**When a student can't explain their code,** treat it as a learning problem first: they haven't met the outcome yet. Follow the re-do rules in [assessment/README.md](../assessment/README.md). Misconduct is misrepresentation: claiming work as your own that isn't, or using AI on 🔴 work. Handle it through your institution's normal process, starting with a conversation.

## Supporting weaker students

The research is blunt: AI tends to widen gaps between students.

- In Prather et al.'s "The Widening Gap", students who were already doing well used AI to speed up code they had already planned. Struggling students developed new problems: constant suggestions broke their concentration, the tool led them down wrong paths, and they fell behind without realizing it. They finished believing they had done better than they had ([Prather et al., ICER 2024](https://dl.acm.org/doi/10.1145/3632620.3671116)).
- The ACM Task Force reports that less-skilled students use AI more but benefit less ([ACM](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf)).
- In a survey of vibe coders, non-developers knew AI code has weaknesses as well as professionals did, yet none of them always checked it. Practice, not awareness, predicted who checked ([Fawzy et al.](https://arxiv.org/html/2605.24521v1)).

**Warning signs** to watch for from week 1:

- Can't say what their last commit changed.
- Very long chats, or the same error pasted three or more times (the two-strikes rule is being skipped).
- Huge commits: "add everything".
- Tests only ever try the happy path.
- A reflection that rates confidence 5/5 but can't explain the least-sure part in two sentences.

**What helps:**

- **Act early.** Use the [self-assessment](../assessment/self-assessment.md) and the first two weeks' exit tickets to find students who need support. Don't wait for walkthrough 1.
- **Make them narrate.** "Before you commit, tell me (or your partner) in one sentence what this diff does."
- **Teach the patterns that worked** in Anthropic's trial: ask for an explanation along with the code, ask conceptual questions, and fix errors yourself. The patterns that failed were handing everything over, and using AI to debug instead of to understand ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)).
- **Turn down the noise.** For students distracted by constant suggestions, suggest switching off inline completions (from the Copilot icon in the status bar) and keeping chat in Ask mode.
- **Shrink the steps and the scope.** Core tier only; one acceptance criterion at a time; tutor mode when stuck.
- **Pair them well.** With a partner who explains rather than types, swapping roles every 20 minutes.
- **Invite them to office hours by name.** "I don't understand what the AI did" is exactly what office hours are for.

## Stretching advanced students

- **The stretch tier** of every homework is theirs.
- **Add constraints:** write the test first; build the feature without an agent; switch to a small local model, which makes sloppy engineering visible (Michigan's reason for using one: [UMich EECS 498](https://eecs498-aase.github.io/syllabus.html)).
- **Go deeper:** build a tiny agent of their own (Stanford's CS146S opens with a roughly 200-line one: [CS146S](https://themodernsoftware.dev/)); write an MCP server; build the same app in two stacks and compare; make a small open-source contribution.
- **Give them roles:** lead reviewer for pull requests in week 7; presenter of "what went wrong" in debriefs. The rule when helping others: **explain, don't type**.
- **Capstone in a pair,** with a bigger scope and individual orals.

For whole cohorts of experienced programmers, see [variants.md](variants.md#experienced-programmers).

## Inclusive practices

- **Cost.** Every required tool is free. Never give credit for a paid tool, and never let a paid tool be necessary for full marks. Codespaces runs on Chromebooks and loaner laptops.
- **Accessibility.** Slides are plain Markdown and work with screen readers; labs are step-by-step text. In live demos, zoom the editor, use a high-contrast theme and say what you click. Caption any video. Ask in week 1 who needs adjustments (syllabus section 11).
- **Language and jargon.** Define every term the first time (the [glossary](../resources/glossary.md) helps). Non-programmers in online courses complain about jargon that's never explained ([Coursera reviews](https://www.coursera.org/learn/vibe-coding-fundamentals/reviews)). Students may use AI to explain instructions in their own language; that's 🟢.
- **Backgrounds.** Don't assume a gaming, math or technology background. Let projects come from students' own lives and interests (with made-up data about other people).
- **Safety to be wrong.** Make your own mistakes visible in demos. Praise bugs found, not only features shipped. Offer an anonymous question channel.
- **Time.** The core tier is sized at about three hours. Life happens; the late-work policy is in [assessment/README.md](../assessment/README.md).
- **Privacy and identity.** Students may use a pseudonymous GitHub username, and don't need real names or photos in public repositories.
- **Age and region.** Settle the tool stack before enrollment: [variants.md](variants.md).

## Measuring outcomes

No controlled study yet shows how much programming knowledge non-programmers need in order to vibe-code safely ([landscape report](../research/landscape-report-2026-09.md)). So measure your own students.

| Measure | When | What to look for |
|---|---|---|
| **Self-assessment** ([assessment/self-assessment.md](../assessment/self-assessment.md)) | Week 0 and week 8 | Growth per item. Compare week 8 self-ratings with walkthrough 3 scores: over-confidence is the "illusion of competence" the research warns about |
| **Exit tickets** ([assessment/exit-tickets.md](../assessment/exit-tickets.md)) | Every week | The share of the class getting each question right. Reteach the weakest question at the start of next week |
| **Post-assignment survey** | After each project and in weeks 6–8 | Borrow CMU 15-113's design: rate **satisfaction**, **understanding** of the submitted code, and **how much of the code you read**, each 1–7, plus "What tool problem did you hit?" and hours spent ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). Watch for the understanding dip in the agent weeks |
| **Oral walkthrough scores** | Weeks 4, 6, 8 | Scores should hold or rise in the agent weeks. If they fall, add more code reading |
| **Tool incident log** | Continuously | Credits running out, outages, changed menus. Feeds TOOLS.md |

Share what you learn (aggregated, with no student data) by opening an issue or discussion on the course repository. If you plan to publish results, get your institution's research-ethics approval first.

## Answer keys

Keys for the Debug Clinic, Be the Agent and the RLS Attack Lab are indexed in [answer-keys/README.md](answer-keys/README.md). If your copy of the course repository is public, **so are the keys**. Vary the planted bugs each cohort using the bug menu.

## FAQ

**What if a student already codes?**
Welcome them, and hold them to the same bar. The Safe Loop, `PROMPTS.md` and the oral walkthroughs still apply, and experienced programmers are often *more* over-confident with AI: in METR's trial, experienced developers were 19% slower with AI while believing they were faster ([METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)). Point them to the stretch tier, make them reviewers, and don't let them carry a pair. See [variants.md](variants.md#experienced-programmers).

**What if a student pays for a better tool?**
Allowed, with the same rules: disclose it in `PROMPTS.md`, set its privacy settings, and be able to explain everything. It earns no extra credit; grading is on process and understanding, not polish. Never require it, and make sure the free path still works.

**What if students under 18 enroll?**
Several tools in the primary stack are 18+ only. Switch the cohort to the variant stack in [variants.md](variants.md#under-18-cohorts), ideally **before** enrollment, and get parental consent.

**What if students are in the EEA, the UK or Switzerland?**
The Gemini API's free tier can't be used for apps serving users there. Use Groq or another fallback for week 5 onward: [variants.md](variants.md#eea-uk-and-swiss-cohorts).

**Can I use GitHub Classroom or a course organization?**
Yes, for collecting work, but Vercel's free Hobby plan can't deploy repositories owned by an organization. Have students create their project repositories in their **personal** accounts from your template repositories ([how](../setup/codespaces.md#start-a-project-from-a-starter)) and submit the links, or plan to use the Cloudflare fallback for hosting.

**What if a tool changes in the middle of the course?**
Switch the class to the fallback, update TOOLS.md, and tell students what changed. Then [open a tool-change issue](../.github/ISSUE_TEMPLATE/tool-change.yml) so other instructors benefit. The mid-course re-check in the [pre-cohort checklist](pre-cohort-checklist.md#mid-course-re-check-before-week-5) catches most changes before they bite.

**What if the whole class runs out of credits at once?**
Students use credits at different rates, so it's rarely everyone at once. Run the fallback drill, pair students across tools, and move agent-heavy work to the start of a new month if you can. Teach students to check their usage dashboards in week 1.

**A student won't use AI tools, for privacy or ethical reasons. What now?**
Take it seriously; the concern is reasonable. Offer the most private options: temporary chats, Groq (which doesn't retain request data by default), or a local model through Ollama if their computer can run one. For activities that need a cloud agent, pairing with a classmate is an option. The course's outcomes, including explaining code and building safely, don't depend on any one vendor.

**Do I need to be an expert programmer to teach this?**
No. You need to be comfortable with HTML, CSS, JavaScript and git, and to have done every lab yourself with the current tools. Being willing to debug in front of the class matters more than knowing every answer.

**A student's app works, but they can't explain it. Pass or fail?**
It doesn't meet the outcome yet. "If you can't explain it, you didn't build it" ([UMich EECS 498](https://eecs498-aase.github.io/syllabus.html)). Follow the re-do policy in [assessment/README.md](../assessment/README.md): the student studies their code, with the tutor if they like, and repeats the walkthrough.

**Can students use tools that aren't in TOOLS.md?**
Yes, if they check its privacy terms, age rules and data location first ([privacy-settings.md](../setup/privacy-settings.md#any-other-ai-tool)) and disclose it in `PROMPTS.md`. The tools under "Do not use" in TOOLS.md stay off-limits.

## Contributing back

Found a mistake, taught an adaptation, or noticed a tool change? See [CONTRIBUTING.md](../CONTRIBUTING.md). Tool changes almost always mean editing [TOOLS.md](../TOOLS.md) and nothing else.
