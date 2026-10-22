# University and College Courses on AI-Assisted Programming / Vibe Coding / Agentic SE: What Is New, 25 Sept – 21 Oct 2026

Research notes compiled 2026-10-21. These notes are a delta on the 2026-09-25 baseline at `research/notes/university-courses.md`, which covered Stanford CS146S, CMU 15-113 and 17-316, UChicago MPCS 51238, Utah CS 3960, Michigan EECS 498 AASE, UCSD CS1-LLM and CSE 190, Northeastern CS 7180, Harvard CS50 and HGSE T564A, UMD CMSC 398Z, and arXiv 2608.05898.

**Method.**
- Primary sources were preferred: public GitHub assignment and materials repos read through the GitHub API, with commit dates; official course pages; the arXiv API filtered to submissions from 1 Sept 2026 onward; and the SIGCSE TS 2027 program page.
- Items dated before 25 Sept are included only when the baseline did not cover them, and they are flagged.
- Several pages could not be fetched. Columbia's catalog returned HTTP 403 (Cloudflare), and the Koli Calling site returned no text. Where a claim depends only on a search-result summary, it is labelled as such.

**Explicitly not re-checked this round (no new information claimed):** UChicago MPCS 51238, Northeastern CS 7180, UCSD CSE 190 and CS1-LLM, UMD CMSC 398Z, Harvard CS50, CMU 17-316.

---

## Q1. What have Fall 2026 offerings actually published since late September, and what new assignment formats appear?

### Takeaway
- **Stanford CS146S** has posted Weeks 2–4 assignments, all new. They are an MCP server graded on "agent ergonomics" plus OAuth, a skill with trigger tests that include a near-miss, and an AGENTS.md/CLAUDE.md written for an unfamiliar open-source repo and then tested on two real tasks.
- **CMU 15-113 mini 1** ended on 9 Oct 2026, and the instructor has published an in-progress, AI-generated "Student Wisdom, Fall 2026" survey report with cross-semester numbers.
- **Michigan EECS 498 AASE** has published lecture and lab decks through L14 (Subagents, 15 Oct). It ran an in-person hackathon on a frontier model with a deliberately capped 32K context. After a student feedback session it announced a mid-course "pivot" (1 Oct), and it released a five-skill "Elephant-Goldfish Model" (EGM) design-method kit plus a PR-based student showcase.
- Nothing new was found for Utah, which has no Fall 2026 course org on GitHub.

### Cited Findings

**Stanford CS146S "The Modern Software Developer," Fall 2026 (Mihail Eric)**
- **Commit history.** The public assignment repo now has four Fall 2026 commits:
  - "Week 1 Assignment" (2026-09-23)
  - "Week 2 Assignment" (2026-09-28)
  - "Week 3 Assignment" (2026-10-05)
  - "Week 4 Assignment" (2026-10-19)

  As of 2026-10-21 the repo contains only `week1`–`week4`. No Week 5 assignment and no open-source-contribution rubric are posted yet. — [repo commits](https://github.com/mihail911/modern-software-dev-assignments/commits/master)
- **Week 2 (posted 2026-09-28): "Build an MCP Server for a Third-Party API."**
  - Framing: "The API work is the easy part. What is graded is **agent ergonomics**: whether a model can pick the right tool, call it correctly, and recover when it doesn't." The server must also implement a real OAuth flow.
  - Requirements: an OAuth 2.0 API (GitHub, Google, Notion, Linear, Slack, Spotify, Strava…); at least 3 tools that "**compose**" (one tool's output feeds another); at least one write tool that mutates real state; stdio transport; built with FastMCP.
  - Ergonomics rules:
    - "Constraints in the schema, not the prose" (e.g., `Literal["stars","forks"]`)
    - "Shape your output", not raw API JSON
    - "Errors are data, not tracebacks", distinguishing retry from don't-retry
    - "Docstrings are the contract"
    - "Write tools need a brake": `readOnlyHint` annotations and a `dry_run` option or a preview-then-commit split
  - OAuth: cached tokens, silent refresh, minimal scopes justified in the writeup, "No secrets in the repo… Commit `.mcp.json.example`", and an actionable error (not a browser pop-up) when the token dies mid-session.
  - Integration: one end-to-end chained transcript, one provoked failure, and at least one test "through the MCP protocol."
  - Rubric (100 pts): Server 25, Agent ergonomics 30, OAuth 25, Integration 20. Deductions for committed secrets and for docstrings that contradict schemas.
  - An optional cleanup step asks students to remove the server, delete cached tokens, and revoke the OAuth app.
  - — [W2 spec @ 1f9eedda85](https://github.com/mihail911/modern-software-dev-assignments/blob/1f9eedda85/week2/assignment.md)
- **Week 3 (posted 2026-10-05): "Author a Skill."**
  - Students write a `SKILL.md` to the open Agent Skills standard (agentskills.io), "point it at a real open-source repo, and find out whether it fires when it should and holds up when it runs."
  - Target repos: htmx, dayjs, slidev, pixijs, yt-dlp, stable-diffusion-webui, TheAlgorithms/Python, vue, react, or the student's own.
  - The workflow must be repeatable and contain "at least one real decision point" ("A single fixed command is a shell alias, not a skill"). Students must "Run it manually once first."
  - Grading criteria for the skill:
    - a description that triggers ("Most skills fail by never firing")
    - "Judgment, not just steps"
    - exact commands for the deterministic parts
    - "A lean body", with long reference material pushed into supporting files
  - Testing: "three prompts that should fire it, and one near-miss that should *not*… If the near-miss fired it, your description is too broad", plus one end-to-end run.
  - Rubric: Workflow 15, Skill 60, Testing 25.
  - — [W3 spec @ 475a213c94](https://github.com/mihail911/modern-software-dev-assignments/blob/475a213c94/week3/assignment.md)
- **Week 4 (posted 2026-10-19): "Make a Messy Repo Agent-Ready."**
  - Students fork an unfamiliar OSS repo (same list as Week 3, or any repo they "did **not** write") and write the missing `AGENTS.md` or `CLAUDE.md`.
  - Exploration: exact build/test/lint/run commands; directories and entry points; unstated conventions; what is generated, vendored, or off-limits. "Use an agent to help you explore."
  - The file must cover: what the project is, architecture, exact copy-pasteable commands, conventions, and guardrails ("the wrong-but-plausible command or directory worth warning about").
  - Quality bar: "every line should be **specific to this repo**. Generic advice a competent model already follows is padding… The file loads into every context, so length is a cost. Keep it around a page."
  - Students then run two small tasks with the file in place, report whether the agent used their commands, and name "**one thing you'd change**".
  - Rubric: Exploration 20, File 55, Trying it 25.
  - — [W4 spec @ a6dcbf2090](https://github.com/mihail911/modern-software-dev-assignments/blob/a6dcbf2090/week4/assignment.md)
- **Staff and grading.** Submission instructions now list three GitHub collaborators: `mihail911`, `isaackann`, and `vdaita`. The baseline had a second TA position listed as TBD. — [W2 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/1f9eedda85/week2/assignment.md). The site still lists Fall 2026 grading as Final Project 50%, Weekly Assignments 15%, **Open Source Contributions 30%**, Participation 5%. — [CS146S site (JS bundle data, fetched 2026-10-21)](https://themodernsoftware.dev/)
- **Week 5 schedule on the site.**
  - Tue 10/20: "Agent readiness in your repos (structure, docs, and checks that make repos agent-friendly)".
  - Thu 10/22: guest Eno Reyes (CTO, Factory).
  - Readings: "Making Codebases Agent Ready" (YouTube) and "Making Ergonomic Repositories" (an X post).
  - Week 6, Tue 10/27: "Agentic code review: best practices and architectures".
  - At least one Fall 2026 slide deck is flagged `gated` in the site data, i.e., not public.
  - — [CS146S site](https://themodernsoftware.dev/)

**CMU 15-113 / 15-114 "Effective Coding with AI," Fall 2026 (Mike Taylor)**
- **Mini 1 (15-113) is finished.**
  - Week 6 (9/28–10/2): Project 2 began. Topics were ethics, the history of AI coding tools, and Codex/Skills/MCP. HW5 was to read two assigned texts (due Mon 10/5).
  - Week 7 (10/5–9): reading discussion, subagents, multi-agent games. Project 2 was due Wed 10/7, 11:59pm.
  - Fall break was 10/12–16.
  - 15-114 Week 8 (10/19–23): databases (SQL/SQLite), an intro to vector databases, guests Ben Owad and Justin Yang, and an Eberly Center focus group. "Updated HW6" is due Mon 10/26.
  - Weeks 9–14 are not yet posted.
  - Project 2 was budgeted at ~8 hrs, with deliverables of live URL, repo, demo video, README + prompt log, and portfolio post.
  - Project 3 (15-114) adds Expo/React Native and "third-party APIs with secure keys" as options, and includes an "oral exam/presentation."
  - — [CMU 15-113 site](https://www.cs.cmu.edu/~113/)
- **New report: "15-113 Student Wisdom, Fall 2026: Best Practices for Coding with AI."** The page is labelled "in progress… seven weeks in."
  - Basis: ~630 free-response answers from an intake survey (55 responses), four post-assignment surveys (P1, HW2, HW3, HW4), and four in-class discussion prompts (63 anonymized respondents). The Project 2 survey is not yet included.
  - Provenance: "generated with AI (Claude Opus 5.5) from the anonymized survey responses… only… a light manual review". Every quotation "was checked by script against the survey files, the statistics were computed directly from them", but the theme counts "are an AI's reading and deserve a critical eye."
  - — [F26 Best Practices](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **New assignment format: HW2 "Crossy Road" redesigned.**
  - Spring 2026 was "a single one-hour build in Python with any tool". Fall 2026 "began with a 30-minute in-class sprint in Kiro, an AI IDE everyone had to use for that half hour". Students then had "up to about four hours at home, with any tools, to finish a playable JavaScript game and publish it on their portfolio."
  - A pre-sprint slide warned that a one-shot prompt "may not finish its first prompt in 30 minutes."
  - The required tool drew the most complaints ("Strong · 12 of 39"), e.g., "Kiro uses a lot of credits for very little actual work"; "I restarted with Claude and immediately got better results."
  - Planning in the sprint split students 4 vs 4: some said it cost them the sprint, others said it saved time.
  - — [F26 Best Practices](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **Workload estimates rose.**
  - HW3 "Explore an API" (public API, README + prompt log + demo video, keys out of the repo) went from 2–3 hrs in Spring to "up to about six" this fall.
  - HW4 "Frontend + Backend" (Render backend holding secrets, GitHub Pages frontend) went from ~3 hrs to "up to about six".
  - The HW4 writeup "added a section on testing locally and a caution about scope". Deployment complaints were fewer than in Spring: 3 students said it went smoothly, 2 reported friction.
  - — [F26 Best Practices](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **Course-level change: spec-driven development was moved earlier.** "Spec-driven development and multi-agent review were introduced in lecture in week 5 this fall" (9/23). Spec files and handoff notes appear on HW4, whereas in Spring "SPEC.md first appears on HW 8." — [F26 Best Practices](https://www.cs.cmu.edu/~113/bestPracticesF26.html)

**Michigan EECS 498-016 "Applied Agentic Software Engineering" (AASE), Fall 2026 (Marcus Darden)**
- **Published decks.** The public `materials` repo holds Slidev source, PDF, and PPTX for each deck, plus runnable demo codebases with `./reset` scripts.
  - L05 "Modern agentic CLIs"
  - L06 "From pair-coding to agent orchestration"
  - L07 "Inside the Call: Messages, Streams, and Tool Calls" (published 9/22)
  - L08 "Hackathon 1 Briefing" (9/24)
  - L09 "Stop conditions and the approval layer" (9/29)
  - L10 "Skills and the Elephant-Goldfish Model" (10/1)
  - L11 "Guardrails: Errors, Retries and Approval Gates" (10/6)
  - L13 "Browser Extensions and Assistants You Can Text" (10/13)
  - L14 "Subagents" (10/15)
  - Lab03 "Where we are, and starting on Aider" (10/5)
  - Lab04 "Reaching the Computer: Shell, MCP and the Browser" (10/12)
  - — [eecs498-aase/materials](https://github.com/eecs498-aase/materials) (commit log 2026-09-20 → 2026-10-15)
- **Hackathon 1 (evening of 24 Sept 2026; L08).**
  - Logistics: 7–9 PM, in person, individual, "9% of your grade". The task ("taskr") was revealed only in each student's repository at check-in.
  - "Judged on evidence, not feature count… Saying clearly what does not work is worth more than hoping nobody tries it."
  - The model switched from the local `qwen3.5:9b` to `gpt-5.6-luna` served "through the U-M GPT Toolkit", but the context was kept at "**32K**, by design". "The model call in your repository refuses any request over 32K."
  - Warm-up prompt: name "one habit… that matters *more* with a stronger model", followed by the point "a better model moves the bottleneck to you reading and deciding. It does not remove it."
  - — [L08 slides](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L08/slides.md)
- **Mid-course pivot (announced in L10, 1 Oct 2026).**
  - The instructor showed his own prompt to a coding agent "word for word": "A feedback session from students has us revamping the course. This is an experimental course so that is alright."
  - New plan: "Current plan for P2 is to have students use a stronger model to adapt Aider to become more like Claude Code… The old repo stops at end of P1, Pair Programmer." The prompt asks for advice on "Which model should students be using for maximum learning opportunity" and says "An additional 2-3 weeks of roadmap… needs to be discussed."
  - This changes the baseline's "Analyze" phase, which was to write one's own agent against a raw LLM API.
  - L10 also discloses that the Fall 2026 course design doc "went through six Goldfish rounds. Three reviewers each round, eighteen reports."
  - — [L10 slides](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L10/slides.md)
- **New teaching artifact: the "Elephant-Goldfish Model" (EGM) as five installable Agent Skills** (published 2026-10-01).
  - Source: based on Dave Rensin's April 2026 article, which the course describes as "written from what his team at Google learned building with AI".
  - The skills: `peanuts` (bottom-up README tree for a big codebase), `elephant` (no-code design conversation, then a four-section design doc), `goldfish` (three fresh-context reviewers in parallel, looping "until only nits remain"), `egm-implement` (builds only the files the doc lists and "stops when reality and the doc disagree"), and `mean-review` (harsh diff review with four script-enforced scans).
  - Core rule: "If a fresh session can't understand, critique, and implement from your doc alone, the doc is leaning on context that disappears the moment the chat closes."
  - "Each arrow is a handoff you start yourself… the gaps between them are where a human decides."
  - Each skill ships with `evals/trigger-evals.json`.
  - L10 homework: "write one description… for one method you repeat… Just the description. That is the hard part."
  - — [EGM README](https://github.com/eecs498-aase/materials/blob/HEAD/egm/README.md); [L10 slides](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L10/slides.md)
- **Student showcase (repo created 2026-10-21).** It is a static gallery on GitHub Pages. Students submit "project stories" (JSON plus images) by pull request, staff review and merge, and the current policy is "three distinct projects per student per semester." Students host their own apps. — [eecs498-aase/showcase](https://github.com/eecs498-aase/showcase); [showcase site](https://eecs498-aase.github.io/showcase/)
- **Instructor tooling.** A `lecture-tts` repo converts "Markdown lecture script in, reviewable audio out", using Kokoro locally for drafting and Gemini TTS "for anything students hear". — [eecs498-aase/lecture-tts](https://github.com/eecs498-aase/lecture-tts)

**Other baseline courses**
- **Utah CS 3960 "Vibe Coding."** No Fall 2026 offering was found. GitHub orgs `utah-cs3960-fa26`, `utah-cs3960-f26`, and `utah-cs3960` return 404. The baseline's org is `utah-cs3960-sp26`. — GitHub API check, 2026-10-21 (no URL to cite; nothing found)
- **St. Thomas SEIS 606 "Vibe Coding" (Fall 2026).** The one public student repo has had no commits since 2026-09-23. It holds HW1 "App ideas", HW2 "v1 scope note", and "session handoff". — [student repo](https://github.com/Matt-Baxter/seis-606-vibe-coding)
- **New, outside the window (21 Sept 2026, flagged): FHNW (Switzerland) course "AI-assisted Software Development."** An arXiv paper describes a "lean and spec-driven" lifecycle that combines "specifications, AGENTS.md, and phase-specific agent skill files" so agents "operate with bounded autonomy within an explicit, reviewable, and test-oriented software development lifecycle". It is evaluated by a student survey; results are not given in the abstract. It is accepted at URAI 2026. — [arXiv 2609.24348](https://arxiv.org/abs/2609.24348)

### Inferences
- The 2026 assignment formats have converged on **"configure the agent, then test the configuration empirically"**. Examples: trigger tests with a near-miss (CS146S W3, UMich `trigger-evals.json`), "run two tasks and report whether the agent used your file" (CS146S W4), and the Goldfish fresh-session test (UMich). For beginners this suggests a cheap, gradeable pattern: a student writes a rules file or spec, then shows a fresh chat or session using it.
- CS146S's Weeks 3–4 reuse one list of nine large OSS repos. This plausibly sets students up for the 30% open-source-contribution component. That link is not stated, and the rubric is unpublished.
- UMich's pivot shows that even well-designed courses are rewriting themselves mid-term in response to student feedback and model changes. Its "stronger model, same small context" hackathon keeps the context discipline while removing the weak-model frustration.

### Gaps
- No CS146S Week 5 assignment, open-source-contribution spec, enrollment numbers, or student outcomes were published as of 2026-10-21.
- CMU 15-113 Project 2 results and its survey, final grades, and the Eberly Center analysis are not yet published. The F26 report states they will be added.
- The UMich student feedback content (`instance/f26/feedback`) is not public. The post-pivot P2 spec and the rest of the roadmap were not found. The course site's syllabus page was not re-fetched this round.
- UChicago MPCS 51238 (whether there is an Autumn 2026 section) and Northeastern CS 7180 (whether there is a Fall 2026 section) were not checked.

---

## Q2. Which NEW intro-level or non-major courses on vibe coding / AI-assisted building launched in Fall 2026?

### Takeaway
New Fall 2026 non-major offerings are mostly **short (5–6 sessions), project- and portfolio-based, and outside CS departments**:
- Harvard HGSE T564A Fall 2026: 6 Thursday sessions of 2h45m, full at 120 with a waitlist
- Columbia Business School B8160, an MBA A-term product studio ending in a public demo day
- Stanford Continuing Studies TECH 36 A/B and TECH 42 (5 weeks, $455, both sections closed)
- University continuing-education certificates run by Ziplines (FIU, DU, Utah ProEd; 5 weeks, $1,850)

No new credit-bearing community-college or liberal-arts vibe coding course was found. SIGCSE 2027 titles point to new all-majors and mixed-major courses (Michigan, University of San Diego), but no details are public.

### Cited Findings
- **Harvard Graduate School of Education EDU T564A "Vibe Coding," Fall 2026** (Karen Brennan).
  - Schedule: "Fall 2 session (Oct. 22 – Dec. 3, 2026)", Thursdays 4:30–7:15 pm, in person, 2 credits, Satisfactory/Unsatisfactory.
  - Enrollment: **120/120, waitlist 11**. No prerequisites ("No prior AI or coding experience is required").
  - Description: a six-session module on "an intuitive, tinkering approach where imagination becomes software through AI collaboration". Each week students try new AI tools, make artifacts (web apps, games, interactive art), do hands-on exercises, read critical texts, reflect on their creative process, and build a portfolio. Pedagogy: peer learning and project-based learning.
  - Students must attend the first class.
  - — [my.harvard T564A Fall 2026](https://my.harvard.edu/course/EDUT564A/2026-Fall/1)
- **Columbia Business School B8160 "Vibe Coding"** (MBA, Fall 2026 A-term, 09/08/2026–10/16/2026, Mattan Griffel). Per search-result summaries of the catalog page, which returned 403 to direct fetch:
  - Students "design, build, and deploy lightweight software products" with AI tools such as Cursor, Lovable, and Replit
  - It runs "like a product studio" with structured tool explorations, weekly build sprints, and a public demo day
  - — [CBS catalog B8160](https://courses.business.columbia.edu/B8160) (snippet only); the course listing is confirmed on the [Griffel faculty page](https://business.columbia.edu/faculty/people/mattan-griffel)
- **Stanford Continuing Studies TECH 36 A "Vibe Coding: Using AI for Programming."**
  - Schedule: Sep 24–Oct 22, 2026, Thursdays 5:30–7:00 pm PT, 5 weeks, online with recordings.
  - Instructor Ray Villalobos (LinkedIn Learning). $455, 0 units, NGR only, limit 55, status **Closed**.
  - "designed for beginners and non-programmers". It teaches a "concept-first approach where you create applications and websites by guiding AI tools instead of writing code yourself", with the aim of "staying in control of the creative process."
  - Tools are third-party; "typical costs are $25–$100 per month" for paid upgrades.
  - — [TECH 36 A](https://continuingstudies.stanford.edu/courses/professional-and-personal-development/vibe-coding-using-ai-for-programming/20261_TECH-36-A)
  - A second section, TECH 36 B, is listed. A search summary gives Oct 29–Dec 3, which is unverified. — [TECH 36 B](https://continuingstudies.stanford.edu/courses/professional-and-personal-development/vibe-coding-using-ai-for-programming/20261_TECH-36-B)
- **Stanford Continuing Studies TECH 42 "Vibe Coding: Building Software in Conversation with AI."**
  - Schedule: Oct 6–Nov 3, 2026, Tuesdays 6:00–7:30 pm PT, 5 weeks, online.
  - Instructor Elliott Adams (Lecturer, UC Berkeley School of Information). $455, limit 70, **Closed**, NGR.
  - "No programming experience required". It covers "strategic prompting, breaking problems into parts, and iterative refinement" with "skills that apply across tools".
  - Tools: Cursor, v0, or Replit, with self-paid subscriptions estimated at $25–$100/mo.
  - Assessment: "Weekly case studies done individually, followed by collaborative analysis of different approaches", then a capstone app.
  - — [TECH 42](https://continuingstudies.stanford.edu/courses/professional-and-personal-development/vibe-coding-building-software-in-conversation-with-ai/20261_TECH-42)
- **University continuing-education "5-Week Online Vibe Coding Certificate"** (FIU Continuing Education with Ziplines Education; the same template appears at University of Denver and University of Utah ProEd).
  - Workload and format: 6–8 hrs/week on demand plus optional recorded 2-hr live sessions. "No coding background required."
  - Modules:
    1. Scope before you build
    2. Direct the build
    3. Spot and fix issues ("a repeatable approach for when a build stalls")
    4. Build on real infrastructure (GitHub, Netlify)
    5. Go live or hand off (security review, documentation)
  - Tools: Lovable, Claude Code, GitHub, Supabase, Netlify. "These are not provided by Ziplines."
  - Assessment: five deployed "playbook projects". The certificate requires ≥70% on module assessments.
  - Cost and schedule: $1,850, noncredit. FIU's next cohorts start Nov 2, Dec 7, and Jan 5. Search summaries said DU and FIU cohorts started Oct 5, 2026.
  - — [FIU](https://ziplines.fiu.edu/vibe-coding); [DU](https://industrycerts.du.edu/vibe-coding); [Utah ProEd](https://upskill.utah.edu/vibe-coding)
- **Campus.edu "Vibe Coding 101"** (date of launch not established; cohort "TBA"; included as the closest same-named analogue).
  - Format: 8 weeks, live online once a week. "Two hours of live class each week, plus another couple of hours focused on self-paced work on Replit". $1,500, for college credit, cap 200, beginners and non-technical professionals.
  - Weeks:
    1. Fundamentals and AI-assisted development
    2. Languages
    3. Python constructs
    4. HTML/CSS/JS web apps with AI
    5. Code management tools
    6. Dynamic web apps with frameworks
    7. External APIs and AI services
    8. Deploy and present
  - Outputs: four working apps, a personal landing page, and a "flagship milestone project with clean docs, version history, and prompt notes".
  - Completing 101 and 102 earns a "Certificate in AI Assisted Software Development."
  - — [Campus.edu](https://campus.edu/vibe-coding)
- **SIGCSE TS 2027 accepted papers** describing intro or non-major courses. Titles only; no abstracts on the program page:
  - "A Project-Based Course on Generative AI for All Majors" (Mark Guzdial, Steven Abney, University of Michigan)
  - "Low-Barrier LLM Integration in Mixed-Major CS1" (Olsen et al., University of San Diego)
  - "From 'Forbidden Fruit' to 'Really Good Tool': Shifting Attitudes Toward GenAI Among Non-CS Majors" (Orgill et al., UIUC)
  - "Chatting to Failure: Evaluating GenAI Use in a CS0 Course" (Mihalik et al., U.S. Military Academy)
  - "Can You Teach It? … Teachable LLM Agents Among Non-CS Students" (Baidya, Pandey, UC Merced)
  - — [SIGCSE TS 2027 Papers track](https://2027.sigcse-ts.acm.org/track/sigcse-ts-2027-Papers-1)
- **Workshops, not courses.** A Duke OIT event, "Vibe Coding for Beginners with Codex", appears in search results; its date was not verified. — [Duke OIT](https://oit.duke.edu/event/vibe-coding-beginners-codex/)

### Inferences
- The most comparable *new* non-major designs are Harvard T564A and Columbia B8160. Both are about 6 weeks, studio- and portfolio-based, and assume no prior code. T564A's session length (2h45m) is almost exactly a 3-hour studio, and it filled 120 seats with a waitlist. T564A pairs building with *critical readings and reflection on creative process*, and B8160 ends in a *public demo day*. An 8-week Vibe Coding 101 can borrow both.
- Paid-tool dependence is the norm in continuing-education offerings ("$25–$100 per month" at Stanford CS; self-provided accounts at Ziplines). A free-tools course remains a real differentiator.
- The Ziplines module sequence (scope, then direct, then fix stalls, then real infra, then go live/hand off with a security review) is close to the baseline's recommended arc. It also adds an explicit "when a build stalls" playbook.

### Gaps
- No syllabi were obtained for T564A 2026 (the 2025 PDF had already returned 403 in the baseline), B8160 (page behind Cloudflare), TECH 36, or TECH 42 (syllabi are linked externally and were not fetched).
- No new credit-bearing community-college, liberal-arts, or non-US vibe-coding course was found in this window. The searches were US-biased (the search tool is US-only).
- No details beyond titles were found for the Michigan all-majors and University of San Diego mixed-major CS1 courses.

---

## Q3. New papers and experience reports (Sept–Oct 2026; SIGCSE TS 2027; Koli Calling 2026; ITiCSE; ACM Inroads)

### Takeaway
- The SIGCSE TS 2027 program (17–20 Feb 2027, Sacramento) is public. It contains a large cluster of directly relevant titles: teaching vibe coding through AI-only constraints (Purdue), novice trust in AI code (UCSD), what students actually verify (UTEP), agent skills as authorization decisions (UW Tacoma), the security awareness–behavior gap (UT Knoxville), accountability in agentic coding for early computing (Brown), and industry views on "verification and ownership" (NC State). Abstracts are not yet public.
- On arXiv, the most decision-relevant new evidence is a controlled experiment. ChatGPT raised intro task scores (89% vs 69%) but lowered recall (39% vs 52% at 48 h) and self-attributed ownership (45% vs 81%).
- A pilot found that students' self-governance of AI use mattered more than tool scaffolding.
- New frameworks include "comprehension debt" with explain/verify/modify/account obligations, and a first-year "AI Journal".
- No Koli Calling 2026 accepted-paper list was found.

### Cited Findings

**SIGCSE TS 2027 accepted papers** (program page fetched 2026-10-21; titles and authors only; date of list publication not shown) — [Papers track](https://2027.sigcse-ts.acm.org/track/sigcse-ts-2027-Papers-1); [Program](https://2027.sigcse-ts.acm.org/program/program-sigcse-ts-2027/)
- Conference: 17–20 Feb 2027, Sacramento, CA.
- **Vibe coding and agents:**
  - "An Experience Report on Teaching Vibe Coding Through AI-Only Programming Constraints" (Bejarano Posada et al., Purdue). Thu 18 Feb, in the session "Integrating GenAI across Introductory and Non-major Courses" per a search summary of the program.
  - "An Experience Report on Teaching Students to Evaluate AI Agent Skills as Authorization Decisions" (Wen, Chinn, Bai, UW Tacoma)
  - "Accountability in an Era of Agentic GenAI Coding: Rethinking the Early Computing Experience" (Fisler, Krishnamurthi, Littman, Brown). Sat session "AI-assisted Software Projects: Teamwork and Accountability".
  - "When an AI-Only Challenge Becomes a Solo Task…" (Ho, Orr, Ryoo)
  - "Code, Commits, and Complexity in the Generative AI Era…" (Shakil, Brabrand, Denny)
  - "Does It Matter Who Uses GenAI? Team-Level Patterns, Trust, and Workload Fairness…" (Sarvepalli et al., Albany)
- **Verification, trust, security:**
  - "'As long as it works': Novice Trust and Acceptance of GenAI-Generated Code in Open-Ended Programming Tasks" (Vadaparty et al., UCSD)
  - "What Students Actually Check: Decision-Level Evidence of AI Verification Behavior in an Agile Software Engineering Course" (Martinez et al., UTEP)
  - "Aware but Unprepared: Measuring the Security Awareness–Behavior Gap in Student Use of LLM-Generated Code with Bifröst" (Park et al., UT Knoxville)
  - "Preparing Our Students to Code in the Age of AI: What Industry Engineers Say Matters—Verification and Ownership" (Guth et al., NC State)
- **Intro and non-majors:**
  - "Low-Barrier LLM Integration in Mixed-Major CS1" (U. San Diego)
  - "From 'Forbidden Fruit'…" (UIUC non-CS majors)
  - "A Project-Based Course on Generative AI for All Majors" (Guzdial, Abney, Michigan)
  - "Chatting to Failure: Evaluating GenAI Use in a CS0 Course" (USMA)
  - "Scaffolding Without Dependence: On-Demand LLM Feedback in Introductory Programming" (Pankiewicz, Baker, UPenn)
  - "A Plan-Tracing Interface for AI-Supported Algorithm Planning" (Jain et al.)
  - "Curate, Not Generate: … LLM Lecture Curation … in CS1" (Tang et al., UNSW)
  - "Scaffolding GenAI Use in Ethical Essay Writing: A Three-Year Experience Report in Introductory Computing" (Shakil, Denny et al., Auckland)
- **Programs and outcomes:**
  - "Motivating, Designing, and Securing Approval for an AI-Assisted Software Engineering Degree Program" (Hundhausen, Bakos, Oregon State)
  - "On the Absence of AI-Era Grade Inflation in an Online CS Graduate Program" (Joyner et al., Georgia Tech)
  - "The Great Convergence: A Longitudinal Study of Code Diversity Before and During the Generative AI Era" (KTH)
  - "The Shift of Programming Behaviors in the Age of LLMs" (UNC Charlotte)
  - "CT-as-Direction: A Scoping Review of Computational Thinking in CS Education for AI-Assisted Coding" (UTSA)
  - "An Evidence-Based Critique of GenAI Hype in Computer Science Education Research" (Demirtas, Watkins, UIUC)
- **Reflection and self-regulation:**
  - "Learning Sentinel: A Metacognition-Driven Tool for Self-Regulated AI Use" (UC Irvine)
  - "Let Them Think Out Loud: Designing Voice AI for Reasoning and Reflection in Computing Courses" (Willamette)
  - "Mirror or Window? … LLM-Generated Reflection Questions for Self vs. Peer Code" (Vanderbilt)
- Only one of these has an arXiv preprint found so far: Lepp, below.

**arXiv, in window (25 Sept – 21 Oct 2026)**
- **Lepp, "Understanding Generative AI Use in Programming MOOCs…"** (3 Oct 2026; accepted to SIGCSE TS 2027).
  - Setting: two Estonian programming MOOCs, a 4-week course (26 expected hours, n=187) and an 8-week course (78 hours, n=182).
  - Adoption was "widespread in both", with no significant differences by gender, age, education, or prior programming.
  - The longer course had higher usage frequency and more use for debugging and idea generation.
  - "Limited relationships between GenAI use and learning-related outcomes". "Course context may play a greater role than learner characteristics."
  - — [arXiv 2610.04447](https://arxiv.org/abs/2610.04447)
- **Shakiba & Chaffey, "Making the Invisible Visible: A Framework for Reflective AI Use in Software Engineering Education"** (28 Sept 2026; AAEE 2026).
  - The "AI Journal" for a first-semester SE course combines "execution tracking" (prompts, outputs, intent, interaction context) with "cognitive auditing" (verification strategies, intervention decisions, confidence judgements, critical learning moments, reflections).
  - "Critical learning moments frequently occurred when students evaluated contextual suitability, feasibility, and requirements alignment rather than identifying obvious errors."
  - — [arXiv 2609.34997](https://arxiv.org/abs/2609.34997)
- **Ye, Fan, Zavaleta Bernuy, Karnalim, Denny, "Correctness, Convergence, and AI-Generated Code Detection…"** (1 Oct 2026). It tests "generated-reference matching" detection using 29,970 student submissions from ten Python labs (2021, 2023, 2025) and 90,000 LLM-generated attempts, noting that "similar code can also arise when an assignment admits only a few natural implementations." — [arXiv 2610.00863](https://arxiv.org/abs/2610.00863) (results section not read; see Gaps)
- **Racovan et al., "Argus: Academic Integrity in the Era of Generative AI"** (28 Sept 2026). A behavioral and stylistic detection system, applied over six years of Spring offerings of a large-enrollment CS2 course in C at Purdue. — [arXiv 2609.36073](https://arxiv.org/abs/2609.36073)
- **Kim, "Accessible, but Not Adopted: Increasing LLM Adoption among First-generation, Low-income (FGLI) College Students beyond Expanding Access"** (28 Sept 2026). Based on 61 interviews, it argues "access alone does not equate to meaningful adoption." — [arXiv 2609.36129](https://arxiv.org/abs/2609.36129)
- **Tang et al., "ValiAssist"** (19 Oct 2026). An instructor tool that validates LLM-generated programming feedback by demonstration, tested in a study with 16 instructors. Tangential. — [arXiv 2610.27248](https://arxiv.org/abs/2610.27248)

**arXiv, just before the window (Sept 2026; not in the baseline; flagged)**
- **Bergh, Tag, Vassar, Renzella, "Your Programming Students' Cognition with ChatGPT: Higher Performance, Lower Retention, and Reduced Ownership"** (18 Sept 2026).
  - Design: a controlled between-subjects experiment with 55 undergraduates analyzed, three intro C tasks, ChatGPT-4.5 vs web search.
  - Coding scores: **89% vs 69%**. Recall: **41% vs 53%** immediately and **39% vs 52%** after 48 h. Self-attributed code ownership: **45% vs 81%**.
  - The authors call for "assessment practices and AI learning tools that require students to explain, retrieve, and contribute to the work they submit."
  - — [arXiv 2609.21194](https://arxiv.org/abs/2609.21194)
- **Azimi, "AI literacy over tool design: … scaffolded versus unrestricted generative AI in programming education"** (15 Sept 2026).
  - Design: a 7-week pilot with 33 master's students, randomized to a hint-only, hint-budgeted "AI Study Coach" with end-of-session reflection, or to unrestricted tools.
  - "Assignment performance did not differ."
  - "Students who had formulated their own rules for when to use AI performed better in both conditions". Those with the best understanding of how models work "used the tools most deliberately and achieved the highest scores."
  - The author recommends "assessment that grades the reasoning behind AI-assisted work, and AI literacy taught explicitly."
  - — [arXiv 2609.16784](https://arxiv.org/abs/2609.16784)
- **Mahmoud, "Judgment-Centred Software Engineering Education: A Post-Hype Review and Framework for AI-Augmented Learning"** (24 Sept 2026; review covers 2023 through 23 Sept 2026).
  - Conclusion: GenAI can improve access and short-term task completion, "but learning outcomes depend on prior knowledge, scaffolding, verification, task design, and assessment."
  - It extends "**comprehension debt**: the deferred learning and maintenance cost that arises when AI-assisted production outpaces a learner's or team's ability to explain, test, modify, and justify the resulting software."
  - It proposes four "evidence obligations: explain, verify, modify, and account."
  - — [arXiv 2609.29473](https://arxiv.org/abs/2609.29473)
- **Aribe & Labastida, "The Vibe Shift in Software Engineering…"** (9 Sept 2026). A mixed-methods comparison of vibe coding vs traditional vs AI-assisted coding with 30 professionals and advanced students. — [arXiv 2609.09560](https://arxiv.org/abs/2609.09560) (results not read)

**Instructor-published data (non-peer-reviewed): CMU 15-113 F26 report**
- **Cross-semester ratings on the same assignments** (1–7 scale unless noted; Fall 2026 vs Spring 2026):

  | Assignment | Satisfaction | Understood the code | Read the code | No-bugs confidence (of 5) |
  |---|---|---|---|---|
  | P1 | 5.3 vs 5.3 | 4.2 vs 4.4 | not asked | 3.8 vs 3.8 |
  | HW2 | 5.1 vs 4.4 | 3.3 vs 3.6 | 3.0 vs 2.9 | 3.0 vs 2.2 |
  | HW3 | 5.2 vs 5.1 | 3.6 vs 3.9 | 3.6 vs 3.5 | 3.3 vs 3.0 |
  | HW4 | 5.3 vs 4.8 | 3.4 vs 3.6 | 3.3 vs 3.8 | 3.3 vs 2.8 |

  - A new item, "Understanding sufficient" (of 5), scored 3.2 / 2.9 / 3.3 / 3.2.
  - "Self-reported understanding is lower on all four" assignments.
  - — [F26 Best Practices](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **Cohort and tool shift.**
  - Background: 71% had finished 15-112 or beyond, despite the new 15-110 prerequisite. 9 of 55 reported neither 15-112 nor another rigorous course.
  - Paid plans: 69% "Have a premium AI plan" (22 of 55 Claude).
  - Usual workflow: 19 of 55 already used "an agent in the editor or terminal."
  - Where they worked: 44% mainly in an IDE on P1, rising to 86% outside the browser by HW4, "with the same browser recommendation as Spring."
  - Models: Gemini fell from 31–51% (Spring) to 6–15%. Claude rose to 52–64%.
  - Access caveat: students "did not have access to Claude" through the course; only ChatGPT/Codex Pro trials and CMU Gemini were provided.
  - — [F26 Best Practices](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **Intake attitudes.**
  - "I can build it, but I cannot always follow or verify it" (Strong · 12 of 55).
  - "It makes me lazier" (10 of 55).
  - 28 of 55 rated their own worry about keeping up at 4–5, vs 9 who rated their classmates' worry that high.
  - Confidence in course objectives: "Build ambitious projects faster with AI, and keep code quality" 69% agree, "Critically evaluate AI-generated content" 45%, "Choose the right AI tools" 47%.
  - — [F26 Best Practices](https://www.cs.cmu.edu/~113/bestPracticesF26.html)

**Other venues**
- **Koli Calling 2026** (26th) is 5–8 Nov 2026 in Koli, Finland, with a submission deadline of 19 July 2026. No accepted-paper list was found. — [Koli Calling 2026 CFP](https://easychair.org/cfp/kolicalling26)
- **ITiCSE 2026 working-group reports and ACM Inroads (Sept–Oct 2026)**: not found or not searched. See Gaps.

### Inferences
- Bergh et al. and Azimi give a coherent design argument for a beginner course. AI raises immediate output but erodes recall and ownership, and tool restrictions alone do not fix it. What helps is (a) required explain/retrieve steps and (b) students writing their *own* AI-use rules, plus knowing how models work. Both are cheap to add to a studio course.
- The CMU data shows a familiar pattern: satisfaction rises while understanding slips, even before the agentic weeks. Students arriving already agentic and mostly paid-up makes "free tools" a bigger equity gap within a mixed class. FGLI work (Kim) adds that access does not equal adoption.

### Gaps
- No abstracts or preprints were found for the Purdue AI-only-constraints paper, the Brown accountability paper, UCSD "As long as it works", UW Tacoma's agent-skills paper, or Michigan's all-majors course. arXiv title searches returned nothing.
- Results of Ye et al. (detection), Argus, Aribe & Labastida, and the FHNW survey were not read beyond the abstracts.
- Koli Calling 2026 accepted papers, ITiCSE 2026 WG reports, and ACM Inroads Sept–Oct 2026 issues were not located in this pass.

---

## Q4. New guidance from ACM/IEEE, universities, or the ACM GenAI task force on assessment and AI-use policy since September 2026

### Takeaway
No new ACM, IEEE, or ACM-task-force guidance dated 25 Sept – 21 Oct 2026 was found. The most recent ACM items are the July 2026 press release on the Task Force on GenAI and Programming Assessment and the Feb 2026 ethics (ESI) report, both pre-baseline. New policy-relevant scholarship in or near the window argues for **learning-oriented rather than policing-oriented policies**, and for **"governance by design"** inside tools and courses.

### Cited Findings
- **ACM press release (July 2026)**, per search summary: "Can Students Still Prove They Know How to Code? New ACM Report Examines How Educators Are Responding to AI". It describes a global survey (May–Oct 2025) of more than 750 educators, finding a shift toward oral exams, code reviews, debugging exercises, and project-based assessment, with more than two-thirds having changed assessment. The underlying Feb 2026 report is already in the baseline. — [ACM media center, July 2026](https://www.acm.org/media-center/2026/july/genai-programming-assesment) (snippet; not re-fetched)
- **ACM Education Board ethics report (Feb 2026)**: offers a non-prescriptive "ESI-Framework" for dilemmas such as assessment design and classroom AI tool use (secondary coverage). — [CRA CRN, Feb 2026](https://cra.org/crn/2026/02/acm-education-board-report-examines-the-ethical-and-societal-impacts-of-generative-ai-in-computing-education/)
- **Gu, Santo, Zumel Dumlao, Ericson, "To Police or to Guide"** (arXiv v1 17 Jul 2026; Michigan authors).
  - Basis: 13 interviews with US CS instructors.
  - Finding: AI policies "primarily seek to AI-proof assessments without directly addressing student learning". Paper exams may preserve integrity short-term but instructors report "extra burden of policing" and "worsening relationships with students."
  - The authors recommend learning-oriented policies.
  - — [arXiv 2607.16475](https://arxiv.org/abs/2607.16475)
- **Dickey, "Instructional Governance by Design"** (arXiv listing date 2026-08-05). Governance "should be encoded in a teaching tool's interaction model, constraints, and workflow". Six dimensions: pedagogical grounding; AI instructional authority; human accountability and control; learner agency and cognitive engagement; context specificity and boundary setting; evaluation visibility and revision. — [arXiv 2609.26098](https://arxiv.org/abs/2609.26098)
- **Mahmoud (24 Sept 2026)** proposes the obligations "explain, verify, modify, and account" as cross-cutting evidence requirements, linking "delegation to evidence, governance, and recovery mechanisms appropriate to its consequences." — [arXiv 2609.29473](https://arxiv.org/abs/2609.29473)
- **Course-level policy signals (Fall 2026)**:
  - CMU 15-113 keeps "transparency" policies (document AI use, explain AI code, no AI on quizzes) and adds an Eberly Center research opt-out. — [CMU 15-113](https://www.cs.cmu.edu/~113/)
  - UMich's hackathon policy grades on "evidence… what you can show working, and what you can explain", in person. — [L08](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L08/slides.md)
  - CS146S deducts for committed secrets and asks students to revoke OAuth grants after the assignment. — [W2 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/1f9eedda85/week2/assignment.md)
- SIGCSE TS 2027 publishes an author-facing "Policies on Generative AI, LLMs, and Related Tools" page. Its contents were not fetched. — [SIGCSE TS 2027 AI policy](https://2027.sigcse-ts.acm.org/info/policies-ai)

### Inferences
- The guidance landscape has stabilized since February. The Sept–Oct activity is in research framings (comprehension debt; explain/verify/modify/account; governance by design) rather than new official policy. For a 101 course, "explain / verify / modify / account" is a compact, citable rubric spine.

### Gaps
- No IEEE Computer Society or ACM/IEEE-CS curriculum (CS2023 follow-up) statements in the window were found.
- University-level (registrar or provost) AI policy updates for 2026–27 were not systematically searched.

---

## Q5. Concrete, transferable ideas for a beginner 8-week, 3-hour-studio, free-tools course (with evidence)

### Takeaway
The strongest new transferable ideas:
1. Teach two prompting habits explicitly from Week 1: "**ask me clarifying questions before you build**" and "**show, don't describe**" (screenshots, wireframes).
2. Add a "**protect what works**" ritual (state what's right, then the change, then commit).
3. Run **timed in-class sprints followed by a take-home finish**, but don't force a single free-tier tool.
4. Use **handoff files or a prompt log** as shared memory between chats.
5. Make students **configure, then empirically test** their agent context: a rules file or spec plus a fresh-session "Goldfish test", and a near-miss trigger test.
6. Grade on **evidence and honest known-issues**, with explain/retrieve steps, because AI raises output but lowers recall and ownership.
7. Run **surveys after every assignment** and share the previous cohort's lessons.

### Cited Findings (each idea → evidence)
- **"Ask the AI to ask you questions first."** This is new in Fall 2026 as a top student practice. It was raised by "2 students on Project 1, 6 on HW 2, and 1 on HW 3, and by 8 of 38 describing their ideal workflow". One student: "I tried Claude code and prompted it to ask me any clarifying questions before beginning. In 25 minutes I had a perfectly working game." — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **"Feed the AI concrete references, not descriptions."** The #1 practice ("10 of 48" on P1, and raised on every assignment). "AI's design ability was very poor, but given a clear direction and visual target, it succeeds very well." — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **"Protect what already works."** New this fall, appearing on P1 rather than HW6: "first state what they did right and then ask for changes so they don't accidentally change features already working". Students also complained about unrequested additions (e.g., "a Konami Code Easter Egg"). — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **Timed sprint plus take-home finish.**
  - Evidence for: CMU's 30-min in-class sprint followed by ~4 hrs at home scored satisfaction 5.1 vs 4.4 and no-bugs confidence 3.0 vs 2.2 against Spring's one-hour build. The report notes these are "not like for like".
  - Evidence against forcing one tool: the mandated free-tier tool caused the most complaints (12 of 39), and some students lost the sprint to planning.
  - — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **Handoff files and prompt logs as memory.** "Having agents write detailed handoff files to each other was very useful"; "as long as I kept updating the prompt log I would tell it to read that so it knew where we were." — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html). The St. Thomas SEIS 606 HW2 likewise requires a "session handoff" note. — [SEIS 606 repo](https://github.com/Matt-Baxter/seis-606-vibe-coding)
- **Budget more time for APIs and backends, and teach "test locally" first.** CMU raised the HW3/HW4 estimates from 2–3 hrs to ~6 hrs, added a testing-locally section and a scope caution, and saw fewer deployment complaints. Students still hit hidden costs ("I didn't realize that you had to have credits in your OpenAI account to use the API"). — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **Goldfish test for specs.** "If a fresh session can't understand, critique, and implement from your doc alone, the doc is leaning on context that disappears." It works with any free chat tool: open a new chat, paste only the spec, and see what it asks or builds. — [UMich EGM README](https://github.com/eecs498-aase/materials/blob/HEAD/egm/README.md)
- **Write a trigger, then test it with a near-miss.** CS146S W3 requires "three prompts that should fire it, and one near-miss that should *not*". UMich's L10 homework is to write only the *description* for a repeated instruction ("That is the hard part"). A beginner version: write a reusable "project rules" snippet or skill and show when it applies and when it doesn't. — [CS146S W3](https://github.com/mihail911/modern-software-dev-assignments/blob/475a213c94/week3/assignment.md); [UMich L10](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L10/slides.md)
- **A one-page, repo-specific AGENTS.md, tested on two tasks.** "every line should be specific to this repo… length is a cost." Students run two tasks and name "one thing you'd change." A beginner version: write AGENTS.md for one's own capstone in Week 5–6, or for a classmate's project in a handoff week. — [CS146S W4](https://github.com/mihail911/modern-software-dev-assignments/blob/a6dcbf2090/week4/assignment.md)
- **Safety habits from agent tooling.** "Write tools need a brake" (dry-run or preview-then-commit); "No secrets in the repo… Commit `.mcp.json.example`; gitignore the real one"; revoke tokens after use. — [CS146S W2](https://github.com/mihail911/modern-software-dev-assignments/blob/1f9eedda85/week2/assignment.md). CMU students also report confusion about hiding API keys with GitHub Pages and only moderate trust in backend security (3.1/5). — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **Grade on evidence, and reward honest known-issues.** "Judged on evidence, not feature count… Saying clearly what does not work is worth more than hoping nobody tries it." The task is modular: "do as much as you can do well." — [UMich L08](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L08/slides.md)
- **Explain and retrieve steps to counter ownership and recall loss.** ChatGPT-assisted students had 89% vs 69% task scores but 39% vs 52% 48-hour recall and 45% vs 81% self-attributed ownership. — [arXiv 2609.21194](https://arxiv.org/abs/2609.21194)
- **Have students write their own AI-use rules.** Students "who had formulated their own rules for when to use AI performed better in both conditions." — [arXiv 2609.16784](https://arxiv.org/abs/2609.16784). This matches CMU's course objective "Articulate a personal framework for when to use AI", on which 64% felt confident at intake. — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)
- **A structured "AI Journal".** It combines execution tracking (prompt, output, intent) with cognitive auditing (how I verified, when I intervened, my confidence, critical moments). Critical learning happened when students judged "contextual suitability, feasibility, and requirements alignment". — [arXiv 2609.34997](https://arxiv.org/abs/2609.34997)
- **A rubric spine of "explain, verify, modify, account"**, to manage "comprehension debt." — [arXiv 2609.29473](https://arxiv.org/abs/2609.29473)
- **Stronger model, same small context.** UMich kept a 32K cap even on a frontier model so students keep "only the files you are working on in the chat". "A better model moves the bottleneck to you reading and deciding." — [UMich L08](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L08/slides.md)
- **Feedback loops.** CMU runs a survey after each assignment plus in-class discussion prompts. It shared Spring's report with the Fall class in week 5 and publishes the synthesis. — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html). UMich held a student feedback session and pivoted the course on 1 Oct. — [UMich L10](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L10/slides.md)
- **Public showcase via pull request.** Students submit project stories by PR to a course gallery, three per semester, while hosting their own apps. This also practices GitHub PRs. — [UMich showcase](https://github.com/eecs498-aase/showcase)
- **Studio format analogues for non-programmers.**
  - Harvard T564A: 6 × 2h45m sessions mixing tool exploration, artifact making, critical readings, and creative-process reflection, with a portfolio; full with a waitlist. — [my.harvard](https://my.harvard.edu/course/EDUT564A/2026-Fall/1)
  - Columbia B8160: weekly build sprints plus a public demo day. — [CBS catalog (snippet)](https://courses.business.columbia.edu/B8160)
  - Stanford TECH 42: individual weekly case studies followed by "collaborative analysis of different approaches". — [TECH 42](https://continuingstudies.stanford.edu/courses/professional-and-personal-development/vibe-coding-building-software-in-conversation-with-ai/20261_TECH-42)
  - Ziplines: a dedicated "Spot and fix issues: a repeatable approach for when a build stalls" module. — [FIU](https://ziplines.fiu.edu/vibe-coding)
- **Model and tool diversity as a practice.** "Use multiple models deliberately" was raised on every assignment, most often as "one AI writing the prompts for another". — [CMU F26 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)

### Inferences
Suggested changes for an 8-week Vibe Coding 101 (inferences drawn from the evidence above, not tested):
1. **Week 1 "three habits" card**: (a) ask me questions first, (b) show it a picture or reference, (c) say what's working before asking for a change, then commit. Make them visible in the prompt log rubric.
2. **Sprint + finish format** for one or two studios: a 30–45 min in-class timed build with the student's choice among two or three free tools, then a take-home finish with a short "what I'd plan differently" note. Plan for at least one fallback tool, because free-tier credit exhaustion was the main failure in CMU's version.
3. **"Goldfish test" checkpoint** for every spec or PRD: paste the spec alone into a fresh chat and record what it asks or misunderstands. Graded on the revisions made.
4. **A rules-file week** (AGENTS.md or tool-specific rules), scaled down from CS146S W4: one page about one's own project, with every line project-specific, two tasks run with it, and one improvement noted.
5. **An "AI Journal" or prompt-log template with four prompts**: what I asked and why; how I checked it; where I stepped in; how confident I am. Add a short no-AI "explain one function / retrieve one decision" check at each project milestone to address the recall and ownership gap.
6. **A personal AI-use rules statement** written in Week 1 and revised in Week 8.
7. **Evidence-based demo-day rubric** with a required "known issues" section that earns credit.
8. **Post-studio micro-survey** (2–3 Likert items plus one free-text tip) each week. Share a synthesized "student wisdom" page mid-course.
9. **Double the time estimates** for API and backend weeks, and add a "test locally before deploy" step and a "hidden costs" checklist (API credits, free-tier sleep).

### Gaps
- None of these ideas has controlled evidence in a non-major, free-tools, 8-week setting. The CMU data is self-report from mostly CS-experienced students, the summary is AI-generated and only lightly reviewed, and the class had already seen Spring's report.
- No new data was found on how often free tiers run out for beginners, or on cost and fairness for oral or evidence-based assessment at scale.
