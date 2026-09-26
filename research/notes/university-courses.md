# University and College Courses on AI-Assisted Programming, "Vibe Coding", and Agentic Software Development (2024 to Sept 2026)

Research notes compiled 2026-09-25. All sources were accessed on 2026-09-25 unless noted. Most material comes from primary sources: official course sites, syllabi, and assignment repos. For Stanford CS146S, the week-by-week Fall 2025 and Fall 2026 schedules were pulled from the data embedded in the official site's JavaScript bundle, because the syllabus tab is rendered client-side. Assignment texts come from the course's GitHub repo at specific commits. Secondary sources are marked as such. Course pages for Fall 2026 are "live" and may still change. Note: the shared web-search budget ran out partway through this task, so international and community-college coverage is thin (see Gaps).

---

## 1. Stanford CS146S "The Modern Software Developer" (Mihail Eric): Fall 2025 and Fall 2026

### Takeaway
CS146S is a 3-unit, 10-week, upper-level course for students with CS111/CS161-level programming (CS221/229 recommended). Fall 2025 ran as a tour of the software lifecycle with one tool per week: local LLM prompting (Ollama), then MCP, the AI IDE (Cursor), Claude Code, Warp multi-agent, Semgrep security, Graphite AI code review, bolt.new app generation, SRE/incident response, and "the future". Each week paired an instructor lecture with an industry guest, and grading was 80% final project, 15% weekly assignments, 5% participation. Fall 2026 is a largely rewritten "operator's manual" for coding agents: agent internals, context engineering/RePPIT/spec-driven development, skills, CLAUDE.md/AGENTS.md/hooks, agent-ready repos, agentic code review, security, background agents, AI-native teams, and the software factory. It adds 30% for open-source contributions.

### Cited Findings
**Logistics and framing (official site, live Fall 2026 page, which also links the Fall 2025 archive)**
- 3 units. Tue/Thu 5:30–6:20 PM, room 370-370. Prerequisite: "CS111/CS161 equivalent programming experience. CS221/229 recommended." Format: "Weekly lectures, hands-on coding sessions, and guest speakers from industry. Final project showcasing modern development practices." — [CS146S site](https://themodernsoftware.dev/); [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
  - The Fall 2025 dates embedded in the site are Mondays and Fridays (e.g., Mon 9/22, Fri 9/26). A secondary blog says the schedule "shifted from Monday/Friday to Tuesday/Thursday" for 2026 — [heyuan110 blog, 2026-09-11](https://www.heyuan110.com/posts/ai/2026-09-11-cs146s-fall-2026-follow-along/). The same blog gives Room 420-041 for Fall 2026, which conflicts with the official site's "370-370". Treat the room as unverified.
- Course description (current): the course "examines the emerging practices and technologies behind AI-native software development, including MCP, agent skills, spec-driven development, loop engineering, and the software factory." — [CS146S site](https://themodernsoftware.dev/)
- Staff: Fall 2025 was Mihail Eric (instructor) with TAs Febie Lin and Brent Ju. Fall 2026 is Mihail Eric with TA Isaac Kan and a second TA position listed as TBD. — [Fall 2025 archive](https://themodernsoftware.dev/fall2025); [CS146S site](https://themodernsoftware.dev/)
- FAQ (from site data): the course is "language-agnostic", with examples "primarily" in Python and JavaScript. No prior Claude Code experience is required, but "strong programming fundamentals (CS111 and above) are essential." Expected workload is "approximately 10-12 hours per week." "Some cloud-based services may require subscriptions (Claude Code, etc.), but the course will provide access or alternatives where possible." Audits are allowed for Stanford students and staff, but audited homework is not graded. — [CS146S site](https://themodernsoftware.dev/)
- Grading from site data. Fall 2025: Final Project 80%, Weekly Assignments 15%, Class Participation 5%. Fall 2026: Final Project 50%, Weekly Assignments 15%, **Open Source Contributions 30%**, Class Participation 5%. — [CS146S site](https://themodernsoftware.dev/)
- Fifteen "open source partners" are listed on the site: OpenHands, marimo, CrewAI, Semgrep, Milvus, Unsloth, cmux, pi.dev, Arize Phoenix, Browserbase, CopilotKit, HeyGen, Vercel, Warp, Anyscale. — [CS146S site](https://themodernsoftware.dev/)

**Fall 2025 week-by-week schedule (from official site data; "Assignment" is the link label on the site)**
- **Wk 1 – Introduction to Coding LLMs and AI Development.** Topics: what an LLM is and how to prompt effectively. Mon 9/22 "Introduction and how an LLM is made"; Fri 9/26 "Power prompting for LLMs". Readings include Karpathy's "Deep Dive into LLMs", the promptingguide.ai techniques page, and OpenAI's "How OpenAI Uses Codex" PDF. Assignment: "LLM Prompting Playground". — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 2 – The Anatomy of Coding Agents.** Agent architecture, tool use and function calling, MCP. Mon 9/29 "Building a coding agent from scratch"; Fri 10/3 "Building a custom MCP server". Readings: MCP intro (Stytch), MCP servers repo, Cloudflare remote-MCP auth, MCP TypeScript SDK, MCP Registry, "APIs don't make good MCP tools". Assignment: "First Steps in the AI IDE". — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 3 – The AI IDE.** Context management, PRDs for agents, IDE integrations. Mon 10/6 "From first prompt to optimal IDE setup" (includes a Design Doc Template); Fri 10/10 guest **Silas Alberti** (Head of Research, Cognition). Readings: "Specs Are the New Source Code", "How Long Contexts Fail", "Devin: Coding Agents 101", HumanLayer's "Getting AI to Work in Complex Codebases", Anthropic's "Writing Effective Tools for Agents". Assignment: "Build a Custom MCP Server". — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 4 – Coding Agent Patterns.** Managing agent autonomy levels, human–agent collaboration patterns. Mon 10/13 "How to be an agent manager"; Fri 10/17 guest **Boris Cherny** (creator of Claude Code, Anthropic). Readings: "How Anthropic Uses Claude Code", Claude Code best practices, awesome-claude-agents, SuperClaude. Assignment: "Coding with Claude Code". — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 5 – The Modern Terminal.** AI-enhanced CLIs and terminal automation. Mon 10/20 "How to Build a Breakout AI Developer Product"; Fri 10/24 guest **Zach Lloyd** (CEO, Warp). Readings: Warp University, "Warp vs Claude Code", "How Warp uses Warp to build Warp". Assignment: "Agentic Development with Warp". — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 6 – AI Testing and Security.** Secure vibe coding, history of vulnerability detection, AI-generated test suites. Mon 10/27 "AI QA, SAST, DAST, and Beyond"; Fri 10/31 guest **Isaac Evans** (CEO, Semgrep). Readings: SAST vs DAST, Copilot RCE via prompt injection, Semgrep on finding vulnerabilities with Claude Code/Codex, Unit42 on agentic AI threats, OWASP Top Ten, Chroma "Context Rot". Assignment: "Writing Secure AI Code". — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 7 – Modern Software Support.** Which AI code systems can be trusted, debugging and diagnostics, intelligent documentation. Mon 11/3 "AI code review"; Fri 11/7 guest **Tomas Reimers** (CPO, Graphite). Readings: "Code Reviews: Just Do It", GitHub's guide to reviewing code effectively, an arXiv paper on AI-assisted code review, Graphite's AI code review best practices. Assignment: "Code Review Reps". — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 8 – Automated UI and App Building.** Design and frontend for everyone, rapid UI/UX prototyping. Mon 11/10 "End-to-end apps with a single prompt"; Fri 11/14 guest **Gaspar Garcia** (Head of AI Research, Vercel). Assignment: "Multi-stack Web App Builds". — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 9 – Agents Post-Deployment.** Monitoring and observability, automated incident response, triage. Mon 11/17 "Incident response and DevOps"; Fri 11/21 guests **Mayank Agarwal** (CTO, Resolve) and **Milind Ganjoo** (Resolve). Readings: Google SRE book intro, observability basics, Resolve.ai blogs. No weekly assignment listed. — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- **Wk 10 – What's Next for AI Software Engineering.** Mon 12/1 "Software development in 10 years"; Fri 12/5 guest **Martin Casado** (GP, a16z). — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
- Fall 2025 slides (Google Slides) are public from the archive, and several lectures include "Completed Exercise" code (e.g., the coding agent built from scratch and the custom MCP server). — [Fall 2025 archive](https://themodernsoftware.dev/fall2025). A secondary source says Fall 2025 lectures were not recorded and counts 17 slide decks — [heyuan110 blog, 2026-09-11](https://www.heyuan110.com/posts/ai/2026-09-11-cs146s-fall-2026-follow-along/)

**Fall 2025 assignment specs (repo at the last Fall 2025 commit, 2025-11-10)**
- The repo setup uses Python 3.12, Anaconda (`conda create -n cs146s python=3.12`) and Poetry. Submission is by pushing to the student's GitHub repo, adding the TAs as collaborators, and submitting via Gradescope. — [repo README @ Fall 2025 commit](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/README.md); [Week 4 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week4/assignment.md)
- **W1 "Prompting Techniques"**: students write prompts (only the `TODO`s, without changing the model) for six techniques: K-shot, chain-of-thought, tool calling, self-consistency, RAG, and Reflexion. Each is iterated "until the test script passes". Models run locally via **Ollama** (`mistral-nemo:12b`, `llama3.1:8b`). Rubric: 60 pts, 10 per technique. — [W1 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week1/assignment.md)
- **W2 "Action Item Extractor"** (site label "First Steps in the AI IDE"): extend a minimal FastAPI + SQLite app using **Cursor**. Setup step 1: "Redeem your free year of Cursor Pro: https://cursor.com/students". There are five TODOs: (1) scaffold an LLM-powered `extract_action_items_llm()` via Ollama structured outputs, (2) unit tests, (3) backend refactor, (4) use agentic mode to add endpoints/buttons, (5) generate a README from the codebase. Students must document prompts in `writeup.md`, and grading is "based on the contents of the write-up". Rubric: 100 pts, 20 per part (10 for generated code, 10 for the prompt). — [W2 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week2/assignment.md); the writeup template asks for the prompt, the generated snippets with file/line numbers, and hours spent — [W2 writeup template](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week2/writeup.md)
- **W3 "Build a Custom MCP Server"**: wrap a real external API with at least 2 tools. Local STDIO (e.g., Claude Desktop/Cursor) or remote HTTP for extra credit; optional auth. Rubric out of 90: functionality 35, reliability 20, developer experience 20, code quality 15, plus up to +10 extra credit (remote +5, auth +5). The spec suggests Vercel's free tier for remote deployment. — [W3 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week3/assignment.md)
- **W4 "The Autonomous Coding Agent IRL"**: build at least 2 **Claude Code** automations (custom slash commands in `.claude/commands/*.md`, `CLAUDE.md`, subagents such as TestAgent+CodeAgent, MCP servers), then use them to extend a FastAPI "developer's command center" starter app (pytest, black/ruff pre-commit). The writeup covers design inspiration, inputs/outputs, how to run, "rollback/safety notes", and before-vs-after. — [W4 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week4/assignment.md)
- **W5 "Agentic Development with Warp"**: use Warp Drive (saved prompts, rules, MCP servers) and run **multi-agent workflows in separate Warp tabs** ("Challenge: how many agents can you have working simultaneously?"), with a tip to use `git worktree`. The writeup must report the "Autonomy levels used for each completed task (which code permissions, why, and how you supervised)". — [W5 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week5/assignment.md)
- **W6 "Scan and Fix Vulnerabilities with Semgrep"**: run `semgrep ci` (SAST, secrets, SCA) over a provided app, then fix at least 3 findings "using an AI coding tool of your choice". Each fix is documented before → after, with the rule, risk, diff, and why it mitigates. The app and tests must still pass. — [W6 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week6/assignment.md)
- **W7 "Exploring AI Code Review Using Graphite"**: for each of 4 tasks, create a branch, implement "using a 1-shot prompt", manually review line-by-line (or pair-review with a classmate), open a PR with description, testing and tradeoffs, and run Graphite Diamond AI review. The reflection compares the student's comments with the AI's. Graphite: 30-day trial, then course code "CS146S" for free education access. Rubric: 100 pts (20 per task, 20 for reflection). — [W7 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week7/assignment.md)
- **W8 "Multi-Stack AI-Accelerated Web App Build"**: build the same CRUD app in **3 different stacks**, at least one with **bolt.new** and at least one using a non-JS language (Django, Rails, etc.). Lovable and Figma Make are suggested for the others. Bolt promo: "3 months of Bolt Pro for free. A credit card is required to activate the trial." The rubric is 100 pts. This week also collects "Demo Day" confirmations. — [W8 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week8/assignment.md)

**Fall 2026 schedule (official site data; course began Tue 9/22/2026)**
- **Wk 1 – The Internals of Coding Agents**: Tue 9/22 "Course intro + build Claude Code in 200 lines"; Thu 9/24 "How state-of-the-art coding agents are designed: deep dive into the system prompts". Topics: the core tool set (read, write, edit, bash) and system prompt/tool definitions. — [CS146S site](https://themodernsoftware.dev/)
- **Wk 2 – Advanced Context Engineering**: Tue 9/29 "Advanced prompting + agentic dev frameworks (RePPIT, spec-driven development)". RePPIT stands for "Research, Propose, Plan, Implement, Test". Thu 10/1 is an MCP and tool-calling introduction, plus "Designing tools for agent ergonomics". — [CS146S site](https://themodernsoftware.dev/)
- **Wk 3 – Agent Skills and CLI**: Tue 10/6 "All about agent skills (including web skills)", covering SKILL.md plus scripts. Thu 10/8 guest **Lee Robinson** (VP DevRel, Cursor). — [CS146S site](https://themodernsoftware.dev/)
- **Wk 4 – Customizing Your Agent and Repository**: CLAUDE.md vs AGENTS.md, hooks for lint/test gates, and subagent patterns (planner / implementer / reviewer). Thu 10/15 guest **Boris Cherny** (Anthropic). — [CS146S site](https://themodernsoftware.dev/)
- **Wk 5 – Agent-Ready Codebases**: structure, docs, tests, checks, and readiness scoring. Thu 10/22 guest **Eno Reyes** (CTO, Factory). — [CS146S site](https://themodernsoftware.dev/)
- **Wk 6 – Agentic Code Review**: what AI review catches and misses, custom rules, and PR workflow. Thu 10/29 guest **Silas Alberti** (SVP Research, Cognition). — [CS146S site](https://themodernsoftware.dev/)
- **Wk 7 – Security**: SAST/SCA, dependency and secret leaks, prompt injection and agent-specific attack surfaces. Thu 11/5 guest **Isaac Evans** (Semgrep). — [CS146S site](https://themodernsoftware.dev/)
- **Wk 8 – Background Agents**: async, cloud-delegated agents, fleets of parallel agents, and issue-to-PR pipelines triggered from Slack/Linear/GitHub. Thu 11/12 guest **Rajesh Bhatia** (Senior Director, Cloudflare). — [CS146S site](https://themodernsoftware.dev/)
- **Wk 9 – Building an AI-Native Team**: MCP portals, LLM gateways, model routing, cost optimization. Guests **Elad Gil** (Tue 11/17) and **Amjad Masad** (CEO, Replit; Thu 11/19). — [CS146S site](https://themodernsoftware.dev/)
- **Wk 10 – The Software Factory + The Future**: Tue 12/1 "Coding agents in big teams"; Thu 12/3 "The Software Factory: self-running, self-improving software systems". — [CS146S site](https://themodernsoftware.dev/)
- A secondary blog's week-to-guest table differs from the official data in places (e.g., it lists Eno Reyes in Week 4 and Silas Alberti in Week 5). Prefer the official site. The same blog says "Six of ten weeks feature entirely new topics" and quotes the instructor that "the Fall 2026 syllabus is a different course." — [heyuan110 blog, 2026-09-11](https://www.heyuan110.com/posts/ai/2026-09-11-cs146s-fall-2026-follow-along/)
- **Fall 2026 W1 assignment "Trace Dissection of a Real Claude Code Session"** (posted 2026-09-23): students put Claude Code behind a **mitmproxy** reverse proxy (`ANTHROPIC_BASE_URL` set in project-level `.claude/settings.json`), capture one real session, and dissect it. The session must be multi-file, must fail at least once, must show an explicit plan, and must use the student's own repo. Parts and points: capture/reproducibility 15; system-prompt annotation 25 ("what behavior is this buying, and what failure mode is it defending against?"); tool inventory and design 25 ("numbers, not prose"); behavioral analysis 25, where every answer must be labeled `[OBSERVED]` or `[INFERRED]` and "unlabeled answers earn no credit"; reflection 10. Deductions apply for unsanitized credentials. Access: "Stanford provides access to Claude Code via your SUNet ID." — [F26 W1 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/90a2fbb8b1fe98674dbba6719724c373fb27734f/week1/assignment.md)
- Grading rationale for the new 30% open-source component, as quoted by a secondary blog: "agent-built code that never leaves your laptop isn't the skill being taught anymore." I could not verify this quote on the official site. — [heyuan110 blog, 2026-09-11](https://www.heyuan110.com/posts/ai/2026-09-11-cs146s-fall-2026-follow-along/)
- The public assignment repo is widely followed: about 5.0k stars and 1.1k forks at time of access. — [GitHub repo](https://github.com/mihail911/modern-software-dev-assignments)

### Inferences
- Fall 2025's design is essentially "one sponsored/partner tool per week + one guest from that company". That gives students breadth and free or discounted access (Cursor Pro student year, Graphite education code, Bolt Pro promo), but it ties the syllabus to vendors. Fall 2026 moves to vendor-neutral agent concepts (skills, hooks, AGENTS.md, readiness, background agents), which ages better. For an 8-week free-tier course, the Fall 2025 *assignment shapes* are the reusable part: prompt-technique drills against a local model, extending a starter app with an AI IDE, an MCP server, repo automations, security scan-and-fix, AI-vs-human PR review, and the same app in 3 stacks. The specific paid tools are not.
- The Week 1 Ollama prompting lab and the Fall 2026 mitmproxy trace lab both let students look *inside* the agent (prompts, tools, the loop) at near-zero cost. This is a good pattern for a "how agents work" week.
- Heavy weight on the final project (80% in 2025) with only light weekly-assignment weight (15%) suggests that weekly labs work as practice and the capstone/demo day is the real assessment.

### Gaps
- No published enrollment or waitlist numbers, final-project spec, list of student projects, or instructor retrospective for Fall 2025 were found. The only final-project evidence is the "Demo Day" form link in the Week 8 spec. Web search budget was exhausted before Stanford Daily or other coverage could be checked.
- The Fall 2025 AI-use policy was not found on the public site. Assignments implicitly require AI use.
- It is unclear whether Stanford paid for Claude Code in Fall 2025. The FAQ says only "the course will provide access or alternatives where possible". Stanford-provided Claude Code via SUNet is confirmed only for Fall 2026.
- Fall 2026 assignments beyond Week 1, and the open-source-contribution rubric, were not yet published at time of access.

---

## 2. Other named courses (2024 to Sept 2026): level, audience, length, topics, hands-on work, tools, assessment

### Takeaway
By 2026, credit-bearing "AI-assisted / agentic SE / vibe coding" courses exist at many US universities. At least three carry "Vibe Coding" in the title: Utah CS 3960, Northeastern CS 7180, and St. Thomas SEIS 606 (plus a Harvard HGSE module). A UCSD-led syllabus study found 23 qualifying US upper-division courses. Almost all are upper-division or graduate and assume programming experience. The notable intro-level exceptions are UCSD's CS1-LLM (since Fall 2023) and CMU 15-113 (Fall 2026 split so that 15-110 students can take the 7-week first mini). CMU 15-113 and UChicago's 9-week "Design, Build, Ship" are the closest analogues to an 8-week hands-on "Vibe Coding 101".

### Cited Findings
**Landscape study**
- Geng, Shah, Chen, Denny, Leinonen, Griswold, Soosai Raj, Porter (UCSD/Auckland/Aalto), *Mapping the Emerging Curriculum for AI-Assisted Software Engineering via Syllabus Analysis*, arXiv 2608.05898 (6 Aug 2026). They screened 32 US, credit-bearing, upper-division candidates found via searches on Mar 10–30, 2026, and kept **23 courses**. Each course had to meet three criteria: explicit GenAI framing, at least 2 SDLC domains, and required GenAI use in graded SE tasks. — [arXiv 2608.05898](https://arxiv.org/abs/2608.05898)
- Table 1 of that paper (course title, term, institution, public URL where available):
  1 AI-Assisted Software Development, F23, Kalamazoo College ([site](https://www.cs.kzoo.edu/cs488/syllabus.html)) · 2 AI-Assisted Software Engineering, Sp24, Purdue ([syllabus PDF](http://tianyi-zhang.github.io/files/CS59200_AI_Assisted_Software_Engineering_Syllabus.pdf)) · 3 AI Tools for Software Delivery, Sp24, Virginia Tech ([site](https://hosting.cs.vt.edu/specialtopics/graduate/spring24/5914-atkinson.html)) · 4 Software Quality Assurance with GenAI, Sp25, UIUC ([site](https://lingming.cs.illinois.edu/courses/cs598lmz-s25.html)) · 5 Applied AI for Software Development, Sp25, Northwestern ([site](https://www.mccormick.northwestern.edu/computer-science/academics/courses/descriptions/397-6.html)) · 6 AI Tools for Software Development, F25, CMU ([site](https://ai-developer-tools.github.io/)) · 7 Software Engineering with Generative AI, F25, Harvard (site no longer public) · 8 Generative AI for Software Engineering, F25, NC State ([GitHub](https://github.com/gai4se/GAI4SE-Course?tab=readme-ov-file)) · 9 The Modern Software Developer, F25, Stanford · 10 Effective Use of AI Coding Assistants and Agents, F25, UMD ([site](https://www.cs.umd.edu/class/fall2025/cmsc398z/)) · 11 GenAI-Powered Software Engineering, F25, CU Boulder ([site](https://danny.cs.colorado.edu/courses/csci7000-011_F25/index.html)) · 12 AI-Assisted Software Development, F25, UW ([site](https://courses.cs.washington.edu/courses/cse490a2/25au/)) · 13 Software Engineering and LLMs, F25, UVA ([site](https://www.cs.virginia.edu/~se4ja/files/seLLMs.html)) · 14 Effective Coding with AI, Sp26, CMU ([site](https://www.cs.cmu.edu/~113/)) · 15 AI-Assisted Software Engineering, Sp26, NJIT ([site](https://kelloggm.github.io/martinjkellogg.com/teaching/cs485-sp26/)) · 16 Design, Build, Ship, Sp26, UChicago ([site](https://mpcs-courses.cs.uchicago.edu/2025-26/spring/courses/mpcs-51238-1)) · 17 Software Engineering with LLM Agents, Sp26, UIUC ([GitHub](https://github.com/lingming/software-agents)) · 18 AI Tools for Software Development, Sp26, Univ. of Memphis ([site](https://ai4sd-s26-memphis.github.io/)) · 19 **Vibe Coding**, Sp26, Univ. of Utah ([syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)) · 20 Generative AI and Programming, Sp26, UCSD ([site](https://ucsd-cse-115-215.github.io/sp26/index.html)) · 21 GenAI Software Development Lifecycles, Sp26, Florida Atlantic ([syllabus](https://fau.simplesyllabus.com/en-US/doc/w803j6asg/Spring-2026-1-Full-Term-COT-6930-001-Topics-in-Computer-Science?mode=view)) · 22 AI-Assisted Software Engineering, Sp26, Northeastern ([site](https://johnguerra.co/classes/aiCoding_spring_2026/)) · 23 Applied Agentic Software Engineering, F26, Univ. of Michigan ([site](https://eecs498-aase.github.io/index.html)). — [arXiv 2608.05898](https://arxiv.org/abs/2608.05898)

**Intro / broad-audience courses (most relevant to a "101")**
- **CMU 15-113 "Effective Coding with AI"** (Mike Taylor).
  - Spring 2026 was a full-semester pilot that required 15-112 with a C or better. — [The Tartan, 2026-02-09](https://the-tartan.org/2026/02/09/ais-impact-on-education-at-cmu-and-beyond/)
  - For Fall 2026 it is split into two minis. **15-113 (mini 1, weeks 1–7, prereq 15-110 Principles of Computing)** and **15-114 (mini 2, weeks 8–14, prereq 15-113 + 15-112)**. Load is 6 hrs/week (3 in class, 3 outside).
  - Fall 2026 weekly schedule:
    - W1 Intro to GenAI (course ethos, useful tools; Project 1 portfolio; "HTML crash course")
    - W2 AI intro continued (early data; AI-augmented IDEs; VS Code and Copilot; prompting strategies)
    - W3 Core prompting strategies (first project reflection; Kiro; HW2 Crossy Road)
    - W4 Getting started with APIs (guest from Google, "The modern software engineer"; HW3)
    - W5 Server-side development (HW4)
    - W6 AI, Labor, and Learning (HW5; start Project 2)
    - W7 Broader Issues (Project 2 due). 15-113 ends here.
    - 15-114: W8 Databases, W9 Case Studies, W10 The Cutting Edge, W11 Phone apps, W12 RAG, W13–14 Final topics and Project 3.
  - Grading: Homework 20% ("Grading based on evidence of effort"), Participation 20%, Big Projects 30% (2 in 15-113, 1 in 15-114), TA meetings 10%, **Oral project evaluations + quizzes 20%**.
  - — [CMU 15-113 site (Fall 2026)](https://www.cs.cmu.edu/~113/)
- **CMU 15-113 projects.**
  - **Project 1: Personal Portfolio Website** (weeks 1–2, ~6 hrs outside class). Must be responsive, deployed on GitHub Pages, with an informal reflection ("don't use AI to write this part").
  - **Project 2: Capstone 1** (weeks 6–7, ~9 hrs): a deployed web app including 1–2 of the following: frontend–backend, API with authorization, database, data viz, rich interactivity, CV/ML. Deliverables: live URL, repo, demo video, README and **prompt log**, plus a midpoint check-in and final presentation.
  - **Project 3** (15-114 only) is similar but must include at least two of the above.
  - — [CMU 15-113 site](https://www.cs.cmu.edu/~113/)
- **UCSD CS1-LLM** (Porter, Zingaro, Alvarado et al.).
  - A true CS1 for students with no prior programming, redesigned in **Fall 2023** around GitHub Copilot. It runs 10 weeks: 3 hrs lecture, 1 hr discussion, and 1 hr closed pair-programming lab weekly. 552 students were enrolled and 315 answered the survey. The textbook is Porter & Zingaro's *Learn AI-Assisted Python Programming with GitHub Copilot and ChatGPT*.
  - Weekly topics:
    1. Functions and Working with Copilot
    2. Variables, Conditionals, Memory Models
    3. Loops, Strings, Testing, VSCode Debugger
    4. Loops, Lists, Files, Problem Decomposition
    5. Intro to Data Science, Dictionaries
    6. Revisit Problem Decomposition and Testing
    7. Images/PIL/filters
    8. Copying Images, Intro to Games and Randomness
    9. Large Game Example
    10. Python Modules and Automating Tedious Tasks
  - There are three open-ended projects: a Kaggle data question, an image collage, and a text-based game or game simulation.
  - — [Vadaparty et al., CS1-LLM, ITiCSE 2024 / arXiv 2406.15379](https://arxiv.org/pdf/2406.15379)
- UCSD leads a **GenAI in CS Education Consortium** ($1.8M from Google.org). It offers "six turnkey courses that integrate generative AI into the curriculum", three of them developed by UCSD faculty, for adoption and adaptation elsewhere. — [UC San Diego Today, 2025-10-28](https://today.ucsd.edu/story/transforming-computer-science-education-in-the-age-of-ai)
- **Harvard CS50** (CS1 for majors and non-majors). It does not teach vibe coding; instead it confines AI to a course-built tutor, CS50.ai / the "CS50 Duck" (see Q5). The Fall 2025 syllabus lists an "Artificial Intelligence" lecture between Week 7 (SQL) and Week 8 (HTML, CSS, JavaScript). — [CS50 Fall 2025 syllabus](https://cs50.harvard.edu/college/2025/fall/syllabus/)
- **Harvard Graduate School of Education T564A "Vibe Coding"**, Fall 2025, instructor Karen Brennan. A module whose syllabus opens "How can we use the creative potential of AI to…". The syllabus PDF is published on the instructor's site but returned HTTP 403 to automated fetches, so only the search-result snippet was seen. — [T564A syllabus PDF (403 to fetch)](https://kbrennan.scholars.harvard.edu/sites/g/files/omnuum5186/files/2026-02/T564A_2025_Syllabus.pdf)

**Courses titled "Vibe Coding"**
- **University of Utah CS 3960 "Vibe Coding"** (Spring 2026; John Regehr, Pavel Panchekha, TA Yumeng He; Mon/Wed 3:00–4:20).
  - Stated goals: understand how AI coding agents work, how to establish effective context, an "AI-focused testing approach", and "modularity to scale AI coding", and develop workflows that use the strengths of both AI and human coders.
  - Students "are expected to be experienced programmers", and should expect "roughly 5 hours per week coding outside of class".
  - Planned topics: AI basics (tokens, models, training, agents); context (prompts, tool use, thinking, compaction, sub-agents); testing (unit, integration, coverage, fuzzing, properties); modularity (interfaces, refactoring, equivalence, migration); workflows (debugging, refactoring, research). "No schedule is planned up front."
  - Grading: **60% assignments, 30% in-class group activities (largely pass/fail on effort), 10% readings.** — [Utah CS 3960 syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)
  - Assignment repos in the course org show the arc: `textedit-*` (build a text editor; the syllabus says "the first assignment will build a text editor"), then `simulate-*` (a 2D physics simulator; one student describes it as "built using autonomous agentic programming (prompt loop)"), then `final-project-*`. — [utah-cs3960-sp26 GitHub org](https://github.com/utah-cs3960-sp26)
  - One student's text-editor README records weekly releases (R1 week 1, R2 week 2 adding dark mode, file explorer, split view), consistent with "Assignments will build project week over week". — [student textedit repo](https://github.com/utah-cs3960-sp26/textedit-u1244391)
  - In-class activities use an Amp-generated calculator (prompt: "Make a calculator app, include the scientific functions"). In **Week 4** students refactor the `Calculator` class to be testable. In **Week 5** they modify the calculator "using only tools available to an AI agent": a `python agent_repl.py` with `view`, `edit <file> <A> <B>` (find-replace-all), `bash`, `undo`, and `reset`, while being forbidden to open files in VS Code. — [calculator repo README](https://github.com/utah-cs3960-sp26/calculator)
  - One final project proposal plans a multiplayer party game with socket.io, driven by a full `SPEC.md` and an `AGENTS.md` of dos and don'ts. — [student final-project repo](https://github.com/utah-cs3960-sp26/final-project-u1244391)
  - Enrollment of 60 students for 3 credit hours comes from a search-result summary of the Utah class schedule and was not verified on the page. — [Utah class schedule](https://class-schedule.app.utah.edu/main/1264/class_list.html?subject=CS)
- **Northeastern University (Oakland) CS 7180 "Vibe Coding – AI-Assisted Software Engineering"** (Spring 2026; John Alexis Guerra Gómez; master's level; hybrid in-person/Zoom; Tue/Thu 3:00–4:40).
  - "Three AI modalities": Claude Web (Projects, Artifacts), Antigravity (IDE: autocomplete, rules, "YOLO mode"), and Claude Code (terminal, multi-file, DevOps).
  - 15-week schedule:
    1. Intro
    2. LLM architecture and tokenization
    3. Prompt engineering basics
    4. Claude Web and Artifacts
    5. Claude Web deep dive
    6. Project 1 due; IDE-centric AI coding
    7. Agile/Scrum and pair workflow
    8. Advanced IDE AI features (MCP)
    9. Spring break
    10. Project 2 due; Claude Code foundations
    11. Claude Code workflows and TDD
    12. Claude Code extensibility (skills, hooks, MCP)
    13. Agent architectures and SDK
    14. AI security and code quality (OWASP, OpenSSF, evals)
    15. Production and synthesis
    16. Finals: Project 3 due
  - Projects:
    - **P1 Personal Utility App** (13%): validated by "Mom Test" interviews, 5+ user stories with CRUD, ≥50% test coverage, GitHub Actions CI, deployed.
    - **P2 Full-Stack App** (18%): auth, TDD with ≥80% coverage, eval suite, 2 documented Agile sprints.
    - **P3 Production App with Claude Code Mastery** (19%, pairs): CLAUDE.md, skills, hooks, MCP, agents; TDD+CI/CD with AI PR review; Vercel + Sentry; blog post, screencast, live demo.
  - Grading: participation 15%, weekly quizzes 10%, 5 homeworks 25%, 3 projects 50%.
  - Required books: *The Mom Test*, *Scrum*.
  - — [NEU CS 7180 site](https://johnguerra.co/classes/aiCoding_spring_2026/)
- **University of St. Thomas SEIS 606 "Vibe Coding"** (Fall 2026, graduate SEIS program). A search-result summary describes the course as human–AI pair programming covering requirements elicitation, design, testing, documentation, deployment, and ethics/legal issues, and names the instructor as Paul Kaefer. It also summarizes weeks 1–5 as follows:
  1. Syllabus/vibe-coding overview, git/GitHub crash course, app idea generation
  2. Software design and AI-assisted design, test cases and UI mockups, spec-driven development
  3. Agile development, coding stack, initial development
  4. Interactive app development session; forms of testing including penetration testing
  5. AI-assisted debugging, code review of AI-generated code, logging

  This schedule was *not* visible in the student repo I could open. The public student coursework repo shows "Homework 1 — App ideas", "Homework 2 — v1 scope note" and "session handoff". — [SEIS 606 student repo](https://github.com/Matt-Baxter/seis-606-vibe-coding)
- Other "vibe coding" offerings seen only as search-result titles or snippets (not credit-verified): ASU W. P. Carey "Vibe Coding Foundations" ([ASU](https://wpcarey.asu.edu/aznext/programs/vibe-coding-course)); University of Utah Professional Education "5-Week Online Vibe Coding Certificate", described in the snippet as needing no coding experience ([U of U ProEd](https://upskill.utah.edu/vibe-coding)); NYU Wasserman career workshop "Learn to Vibe Code in 10 Minutes" ([NYU](https://wasserman.nyu.edu/classes/learn-to-vibe-code-in-10-minutes/)); Campus.edu "Vibe Coding 101" ([Campus](https://campus.edu/vibe-coding)).
- Non-university but same name: DeepLearning.AI "**Vibe Coding 101 with Replit**" (Michele Catasta, Matt Palmer). Beginner level, 1h34m, 7 video lessons, free to enroll. Students build a website performance analyzer and a national-parks head-to-head voting app with persistent storage. It teaches a "five-skill framework" (thinking, frameworks, checkpoints, debugging, providing context) and uses a PRD plus wireframe before prompting. — [DeepLearning.AI](https://www.deeplearning.ai/short-courses/vibe-coding-101-with-replit/)

**Upper-level / graduate courses with concrete structures**
- **CMU 17-316/616 "AI Tools for Software Development"** (Fall 2025; Austin Henley and Andrew Begel; 12 units, ~4 hrs class + 8 hrs outside).
  - Weekly flow:
    1. "Introduction to Vibe Coding", "Vibe Coding on an Existing Codebase", then vibe coding discussion
    2. User discovery lab, then effective user stories (P1 Requirements)
    3. Dev specs (P2)
    4. Front-end dev: UI code and UI behaviors (P3)
    5. Backend coding lab (notifications), then understanding backends (P4)
    6. "Making an LLM Obey", then software testing, then TDD and CI (P5)
    7. Deployment, backend deployment, continuous deployment (P6)
    8. Monitoring, then final demo and postmortem (P7)
  - Six individual reflection essays accompany the team project stages.
  - Grading: **46% in-class activities, 42% course project, 12% homework essays.** Teams are 2–3 students assigned by instructors.
  - — [CMU 17-316 site](https://ai-developer-tools.github.io/); [syllabus](https://ai-developer-tools.github.io/syllabus/)
  - The course is MIT-licensed and was reused at the **Univ. of Memphis** (Scott Fleming, Spring 2026; H1 Vibe Coding through H6 Deployment reflections; P1–P5 projects) — [Memphis site](https://ai4sd-s26-memphis.github.io/) — and at **NJIT CS 485/698** (Martin Kellogg, Sp26; reflection essays A1–A7, project P0–P7 incl. "Final Demo & Postmortem"; tutorial "How to Save Logs From Your LLM") — [NJIT site](https://kelloggm.github.io/martinjkellogg.com/teaching/cs485-sp26/).
- **UChicago MPCS 51238 "Design, Build, Ship"** (Spring 2026; Andre Fiuza Marques; master's program, one 3-hr evening block per week).
  - It is "an agentic coding course" in three arcs over 9 weeks:
    - **Design (W1–3):**
      - W1 design process + Claude Code, context engineering, git, HTML/CSS, deployment
      - W2 UI/UX (hierarchy, typography, accessibility, Figma)
      - W3 application design (user flows, IA, specifications, Figma-to-code)
    - **Build (W4–5):**
      - W4 full-stack (frameworks, APIs, MCP servers, env vars, agent-driven browser testing, deployment)
      - W5 users and data (auth, DBs, permissions, testing, security)
    - **Ship (W6–9):**
      - W6 project kickoff (planning with agents, parallel agents)
      - W7 Project v1 (agent loops, background processes, model APIs)
      - W8 Launch (security, CI, monitoring, multi-agent workflows, evals)
      - W9 **Project Fair**, where the class tries each other's work and votes
  - Each week pairs a 2-hr in-person class (discussion, workshop, progress share-outs) with about 1 hr of async videos and readings.
  - Recommended stack: Claude Code (primary), Figma, Next.js/Astro, Supabase, Clerk, Vercel.
  - "No prior design or AI experience is required", but a core programming course, git, and Unix are required.
  - — [UChicago MPCS 51238](https://mpcs-courses.cs.uchicago.edu/2025-26/spring/courses/mpcs-51238-1)
- **University of Michigan EECS 498-016 "Applied Agentic Software Engineering (AASE)"** (Fall 2026, Aug 31–Dec 11; Marcus Darden; 4 credits; 28 lectures, 13 two-hour labs, 3 evening hackathons; **no exams**).
  - **Apply (wks 1–3, build into wk 6):** 16 guided **Aider** lessons on a local small model, then spec, design, and build a "pair-programmer" (7 features plus YAML config). The build rubric is 50% spec/design and 50% implementation/tests.
  - **Analyze (wks 4–7):** students write their own agent against a raw LLM API, including tools, an approval layer, six stop conditions, an eval suite (at least 8 tasks × 3 runs, reported as pass rates), and a teardown report.
  - **Create (wks 8–15):** an LLM-maintained wiki as memory, design skills, hardening (permission policy, a repo "that tries to prompt-inject your agent", context management), then a webserver plus channel and a showcase.
  - Weights: Administrative 10%, Apply 18%, Analyze 22.5%, Create 49.5%.
  - — [UMich AASE overview](https://eecs498-aase.github.io/index.html); [syllabus](https://eecs498-aase.github.io/syllabus.html)
- **UCSD CSE 190/291P "Generative AI and Programming"** (Spring 2026; Nadia Polikarpova, Joe Gibbs Politz). The syllabus paper lists it under the course site "ucsd-cse-115-215".
  - Lectures:
    - Semantic text processing
    - "Planning and Coding Applications with an Agent"
    - Mixed-media extraction
    - User-in-the-loop prompts
    - Agents and agent APIs
    - Evaluating agents
    - Making agents safe
    - Tool design for agents
    - "Code Confidence (Allocators)"
    - "Concurrent, Fast, and Trusted?"
    - Local models and agents
    - Confidence in LLM outputs
    - Demo day
  - Assignments: A1 Social Media Monitor, A2 Document Scanner, A3 Agents, A4 Student Choice. Each has an initial deadline, an in-person "review day", and a post-review deadline.
  - — [UCSD GenAI & Programming SP26](https://ucsd-cse-115-215.github.io/sp26/index.html)
- **UMD CMSC 398Z "Effective use of AI coding assistants and agents"** (Fall 2025; Bill Pugh and Derek Willis; Fridays 2–4 pm; prereq CMSC320 or CMSC330).
  - Format: "The first class will be the only class that is primarily lecture"; later classes are "more like a discussion section or hackathon" with pair coding. Students complete weekly readings, a survey, and a "learning log".
  - Topics:
    - Python, VS Code, CSV/dataframes, JSON, markdown, git
    - Copilot in VS Code
    - Building on LLMs with Simon Willison's LLM tool
    - Structured output
    - Security and prompt injection
    - "When AI generated code passes all test cases, what else matters?" (maintainability, architecture, efficiency, security, solving the right problem)
    - Claude Code and Gemini
    - AI with CI, commit hooks, and code reviews
    - Vibe coding and deploy environments
    - Asynchronous coding agents and AI code reviews
  - Grading: "there are no graded assignments or exams"; participation is significant.
  - — [UMD CMSC 398Z](https://www.cs.umd.edu/class/fall2025/cmsc398z/)
- **UW CSE 490A2 "AI-Assisted Software Development"** (Autumn 2025; Michael Ernst; one 90-min meeting Wed 3:30–5:00). "This course explores one way to introduce students to AI-assisted software development." Students are encouraged to try more than one tool: Cursor, GitHub Copilot, Claude Code, Codex, Gemini Code Assist. — [UW CSE 490A2](https://courses.cs.washington.edu/courses/cse490a2/25au/)
- **UVA CS 4501 "Software Engineering and LLMs"** (Fall 2025; Sebastian Elbaum; prereq DS2).
  - Weeks:
    1. Intro to LLMs for SE
    2. Under the hood / enhanced coding
    3. Tooling and discovering customers
    4. Requirements, user stories, specs
    5. Architectures and design analysis
    6. Robustness
    7. Debugging/maintenance
    8. Project discussion
    9. Front ends, agentic development
    10. MVP
    11. Project update
    12. Project demo
    13. Invited speakers
    14. Future of LLMs and SE
    15. Wrap-up and presentations
  - Grading: attendance 20%, 5–6 assignments 50%, team project 30%. Workload 3–6 hrs/week.
  - — [UVA CS 4501](https://www.cs.virginia.edu/~se4ja/files/seLLMs.html)
- Research-seminar variants are less relevant to a 101: CU Boulder CSCI 7000-011 "GenAI-powered Software Engineering" (Fall 2025, Danny Dig; paper critiques, presentations, research project; announced Spring 2026 follow-ons "Building Software with Agentic Components" and "AI-Driven Leadership") — [CU Boulder](https://danny.cs.colorado.edu/courses/csci7000-011_F25/index.html); UIUC "Software Engineering with LLM Agents" (Spring 2026, Lingming Zhang; "research-driven course"; modules on SWE-agent, OpenHands, Agentless, etc.) — [UIUC GitHub](https://github.com/lingming/software-agents).
- **Kalamazoo College COMP 488/490 "Advanced Software Development"** (the syllabus-study row dates it Fall 2023). A senior seminar that includes "Impact of Tools like ChatGPT, GitHub CoPilot, etc." and "Experiment with AI-assisted software development", assessed via presentations, projects, and weekly reflections. — [Kalamazoo syllabus](https://www.cs.kzoo.edu/cs488/syllabus.html)

### Inferences
- Course *length* varies widely: 7-week minis (CMU 15-113), 9-week quarters (UChicago), 10-week quarters (Stanford, UCSD CS1-LLM), and 15-week semesters (Utah, NEU, UMich, CMU 17-316). An 8-week "Vibe Coding 101" fits most closely with CMU 15-113 mini 1 (7 weeks, 6 hrs/week, intro prereq) and the Design/Build/Ship phases of UChicago (9 weeks). Both use a 2-project arc: a quick deployed personal site or prototype early, then a deployed capstone at the end.
- "Vibe coding" in a title does *not* imply non-majors. Utah and NEU both require experienced programmers or master's standing. The genuinely beginner-facing options are CS1-LLM (with explicit no-AI fundamentals), CMU 15-113 mini 1, HGSE's module, and non-credit certificates.
- CMU 17-316 has become a reusable open template, adapted at Memphis and NJIT. An open, license-friendly syllabus spreads quickly, which suggests publishing the Vibe Coding 101 materials openly.

### Gaps
- **International courses** (Imperial, NUS, Tsinghua, ETH, Toronto, etc.) could not be researched: the session's web-search budget was exhausted. The syllabus study deliberately covers only US courses.
- **MIT, Berkeley, Georgia Tech, NYU (credit-bearing), community colleges**: no verified credit course found before the search budget ran out. Campus.edu, ASU, and Utah ProEd appear only as search-result titles.
- Harvard HGSE T564A full schedule and assessment were not accessible (HTTP 403). The Harvard SEAS "Software Engineering with Generative AI" (Fall 2025) site is no longer public, per [arXiv 2608.05898](https://arxiv.org/abs/2608.05898).
- The UW CSE 490A2 weekly calendar was not found (calendar/syllabus URLs returned 404).
- The Porter/Zingaro Coursera offerings were not verified. Only an instructor page surfaced in search: [Coursera instructor page](https://www.coursera.org/instructor/~12264824).

---

## 3. How courses sequence skills (chat → IDE assistant → autonomous agents; specs, testing, review, security, deployment)

### Takeaway
There are two dominant sequencing patterns. **(A) Tool-autonomy ladder:** browser chat, then IDE assistant (autocomplete/chat/agent mode), then CLI agent (Claude Code, Codex, Aider, Amp), then extensibility (rules files, skills, hooks, MCP, subagents), then parallel/background agents. **(B) SDLC walk:** vibe-code a prototype, then requirements/user stories, specs, frontend, backend, testing/TDD/CI, deployment, monitoring. Many courses interleave both. Almost every course puts "specs before code" early and "security + review + deployment" late. A recurring 2026 move is to show students the agent's internals early (build an agent in 200 lines, the trace-dissection lab, the "be the agent" REPL).

### Cited Findings
- **CMU 15-113** runs pattern A explicitly. Project 1 steered students "toward browser-based chat tools (ChatGPT, Claude, Gemini) rather than IDE integrations, specifically so they would notice the limitations of that workflow". Week 2 introduces VS Code and Copilot. HW8 moves to agents from a written `SPEC.md` ("instead of live conversational prompting, students wrote a SPEC.md document… and then handed that spec to one or more agents"). HW9 applies the same approach to phone apps (Expo/React Native). — [15-113 Student Wisdom report, Spring 2026](https://www.cs.cmu.edu/~113/bestPractices.html); [15-113 site](https://www.cs.cmu.edu/~113/)
- **NEU CS 7180** is explicitly chat → IDE → CLI agent: Claude Web/Artifacts (wks 4–5), IDE AI with Antigravity/Copilot/Cursor (wks 6–8), Claude Code foundations, workflows+TDD, and extensibility (wks 10–12), agent SDK (13), security (14), production (15). — [NEU CS 7180](https://johnguerra.co/classes/aiCoding_spring_2026/)
- **Stanford CS146S Fall 2025** goes local-LLM prompting → build an agent and MCP → AI IDE (Cursor) → Claude Code automations → Warp multi-agent → security → code review → app generators → post-deployment SRE. **Fall 2026** goes agent internals → context engineering/spec-driven (RePPIT) and MCP → skills/CLI → CLAUDE.md/AGENTS.md/hooks/subagents → agent-ready repos → agentic review → security → background agents → team-scale (gateways, routing) → software factory. — [Fall 2025 archive](https://themodernsoftware.dev/fall2025); [CS146S site](https://themodernsoftware.dev/)
- **CMU 17-316** (pattern B) starts with unstructured vibe coding (greenfield, then brownfield) and then imposes discipline stage by stage: user discovery, user stories, dev specs, front end, backend, "Making an LLM Obey", testing, TDD and CI, deployment, continuous deployment, monitoring, postmortem. — [CMU 17-316 site](https://ai-developer-tools.github.io/)
- **UChicago** runs Design → Build → Ship. Parallel agents, agent loops, and "increasingly autonomous development workflows" are held back until weeks 6–8, after UI/UX and full-stack fundamentals. — [UChicago MPCS 51238](https://mpcs-courses.cs.uchicago.edu/2025-26/spring/courses/mpcs-51238-1)
- **UMich AASE** runs Apply → Analyze → Create: drive an agent (Aider), then remove the human from the loop and build your own agent loop with an approval layer, stop conditions, and evals, then grow it into a persistent assistant. The model is kept deliberately small, because "A small model punishes sloppy engineering visibly; that is the point, not a budget compromise." — [UMich AASE syllabus](https://eecs498-aase.github.io/syllabus.html)
- **Utah CS 3960** sequences by *engineering concern* rather than by tool: AI basics, context, testing, modularity, workflows. One project grows week over week, because "Maintaining large software projects over time, without the AI breaking older features or making the code impossible to work with, is a major theme." — [Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)
- **UCSD CS1-LLM** (intro) spends weeks 1–4 on reading, tracing, and explaining code, plus Copilot explaining code and the VS Code debugger. Weeks 5–10 cover "the software engineering process when working with Copilot": problem decomposition, testing, and debugging across three domains. — [CS1-LLM paper](https://arxiv.org/pdf/2406.15379)
- **DeepLearning.AI Vibe Coding 101** goes PRD + wireframe → agent-built prototype → "switch to assistant mode" for customization with screenshots → deploy → second app with persistent data. — [DeepLearning.AI](https://www.deeplearning.ai/short-courses/vibe-coding-101-with-replit/)
- Across the 18 syllabus-study courses with public topics, the most common topic labels were: AI/ML fundamentals (12 courses), testing (10), agentic development (10), prompting (9), AI development environments (8), debugging (7), AI evaluation (7). Spec-based development (3), TDD (3), documentation (3), and brownfield development (3) were less visible. — [arXiv 2608.05898](https://arxiv.org/abs/2608.05898)
- Early "under the hood" labs:
  - CS146S F25 W2: build a coding agent from scratch — [Fall 2025 archive](https://themodernsoftware.dev/fall2025)
  - CS146S F26 W1: build Claude Code in 200 lines, then mitmproxy trace dissection — [CS146S site](https://themodernsoftware.dev/); [F26 W1 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/90a2fbb8b1fe98674dbba6719724c373fb27734f/week1/assignment.md)
  - Utah W5: act as the agent using only view/edit/bash tools — [calculator README](https://github.com/utah-cs3960-sp26/calculator)
  - UMich L02: "How LLMs Code (Under the Hood)" — [UMich syllabus](https://eecs498-aase.github.io/syllabus.html)

### Inferences
- A defensible 8-week sequence consistent with these courses:
  1. Chat-based prototype, deployed (portfolio or static site)
  2. Prompting strategies under time pressure (a one-hour game build) plus plan-first
  3. IDE assistant (VS Code + free Copilot/Gemini/Cursor tier) on a starter app, with tests
  4. APIs and secrets, plus a backend
  5. Specs (SPEC.md/PRD) and a CLI or agent mode driving from the spec, plus rules files (AGENTS.md/CLAUDE.md)
  6. Review and security (AI-vs-human PR review; free Semgrep scan-and-fix)
  7. Code handoff or brownfield work (inherit a classmate's AI-built code)
  8. Capstone demo day

  This mirrors CMU 15-113 mini 1 plus pieces of CS146S F25 W2/W6/W7 and 15-113 HW7/HW8.
- The CMU 15-113 data (below) suggests agentic tools should come *after* students have had at least one "read-the-code" win (the DB assignment). Introducing agents too early is associated with the lowest code-reading and understanding scores.

### Gaps
- No controlled comparison of sequencing orders (e.g., agents-first vs chat-first) was found. The evidence is design rationale and student surveys, not experiments.

---

## 4. Assessment design when AI writes most of the code

### Takeaway
Courses shift credit from "does the code work" to **(1) process evidence** (prompt logs, AI logs, writeups with prompts and generated snippets, full agent-interaction logs), **(2) human verification of understanding** (oral interviews and mock job interviews, check-in interviews, video walkthroughs, in-person hackathons and lab checkoffs, proctored parts with and without AI), **(3) AI-free human writing** (reflections and peer reviews explicitly banned from AI), **(4) peer review cycles and demos**, and **(5) specification/test/design quality** alongside functionality. Proctored exams are rare in the advanced courses but kept in the intro course.

### Cited Findings
- In the syllabus study, all 14 conventional percentage-graded courses included participation (median weight 17.5%). Other components (courses containing each, median weight, range):

  | Component | Courses | Median | Range |
  |---|---|---|---|
  | Participation/engagement | 14 | 17.5% | 5–46% |
  | Project/capstone | 12 | 50% | 30–85% |
  | Coding assignments | 9 | 20% | 10–60% |
  | Review/reflection | 6 | 19% | 10–40% |
  | Paper presentation | 4 | 20% | 10–20% |
  | Quiz/exam | 4 | 15% | 10–30% |
  | *Feature:* AI-required work | 14 | 70% | 20–100% |
  | *Feature:* Programming work | 14 | 70% | 20–95% |
  | *Feature:* In-class work | 14 | 31% | 5–80% |
  | *Feature:* Group work | 12 | 55% | 5–90% |
  | *Feature:* Proctored assessment | 3 | 20% | 10–30% |

  "Features" overlap with the categories and should not be summed.

  The authors conclude that courses "assessed AI-assisted software engineering through ongoing practice rather than primarily through exams". They suggest "Process logs, code reviews, demonstrations or oral defenses, individual reflections, and in-class checkpoints". — [arXiv 2608.05898](https://arxiv.org/abs/2608.05898)
- **ACM Task Force on GenAI and Programming Assessment** (final report, Feb 2026; 763 survey respondents, about 500 usable). 68% of 459 respondents had changed assessment. Coded changes: more in-person/proctored exams (56 responses), reduced take-home weight (38), oral assessment/defense (36), paper-based (35), project-based (34), process over product (19), required AI disclosure with prompts and transcripts (16), code review/explanation requirements (15), debugging/comprehension focus (12), more frequent low-stakes assessment (11). One reported pattern is a "+X report": 20% of the grade for a report on "what else" students did with AI. The report notes "a distinct shift away from attempting to make 'AI-proof' assignments." — [ACM Task Force report](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf)
- **Oral / interview assessment**:
  - CMU 15-113: "After each project, you will complete an interview with a TA in the style of a mock job interview. You will be evaluated primarily on your process, transparency, and overall ownership of your work" (20% with quizzes). Separately, TA planning/review meetings are worth 10%. — [15-113 site](https://www.cs.cmu.edu/~113/)
  - UCSD CSE 190/291P: staff may grade an assignment "pending" and require a check-in interview to "walk through your code and explain your design decisions, how things were generated, what your contributions were". — [UCSD SP26](https://ucsd-cse-115-215.github.io/sp26/index.html)
  - UCSD CS1-LLM projects required a 5-minute video "with at least 3 minutes explaining how one of their functions worked", plus a function-decomposition diagram. Grading took 10–15 min per project. — [CS1-LLM paper](https://arxiv.org/pdf/2406.15379)
- **Split proctored exam (intro course)**: the CS1-LLM final had three parts. (1) 90 minutes, 70% of the exam: tracing, explaining, testing, debugging, Parsons problems, without AI. (2) 45 minutes, 15%: four code-writing tasks without Copilot. (3) 45 minutes, 15%: one large new problem *with* Copilot (e.g., a restricted spell-checker). Quizzes were "mostly without access to Copilot". Overall weights: formative 35% (PI 5%, reading quizzes 5%, homework 15%, labs 10%) and summative 65% (projects 10%, quizzes 30%, final 25%). — [CS1-LLM paper](https://arxiv.org/pdf/2406.15379)
- **In-person verification without exams**: UMich AASE has no exams. "Lab checkoffs and the three hackathons are where we verify understanding, in person." Hackathons run in the room on a course-provided endpoint. Hackathon 1 is 50% of the Apply phase grade. Attendance is checked via Poll Everywhere "from the room". — [UMich AASE syllabus](https://eecs498-aase.github.io/syllabus.html)
- **Process logs / AI logs**:
  - Utah: "Amp records and makes available to instructors complete logs of all AI interactions… Absence of logged work will be grounds for failing the assignment." — [Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)
  - UMich requires `AI_LOG.md`, sessions, a model disclosure, and an evidence index ("they are what makes the rest of the rubric checkable"). — [UMich syllabus](https://eecs498-aase.github.io/syllabus.html)
  - CMU 15-113 capstones require a "README and prompt log". — [15-113 site](https://www.cs.cmu.edu/~113/)
  - CS146S W2 grades half the points on the prompts recorded in `writeup.md`. — [W2 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week2/assignment.md)
  - NJIT provides a tutorial "How to Save Logs From Your LLM". — [NJIT site](https://kelloggm.github.io/martinjkellogg.com/teaching/cs485-sp26/)
- **AI-free reflections**:
  - CMU 17-316 HW1 "Vibe Coding Reflection Essay": 500–550 words on a chosen question, with "concrete examples, e.g., it did x but I expected y in the context of z". "You should not use any AI… to write this essay". Rubric: 65 of 100 points for "meaningful reflections that derive from your personal experience". Students must defend their opinions in class. — [CMU 17-316 HW1](https://ai-developer-tools.github.io/assignments/HW1/)
  - The course policy bans AI for all reflections. — [CMU 17-316 syllabus](https://ai-developer-tools.github.io/syllabus/)
- **Peer-review cycles**: UCSD uses three deadlines per assignment (initial demoable version, in-person review day, post-review revision). Reviews may not be AI-generated ("we will deduct substantial credit, including giving 0s, if we find obvious factual errors in reviews (AI hallucinated or otherwise)"). Reviewees rate the usefulness of reviews. Grading uses thresholds: an A needs ≥85% of *both* assignment points and review points. — [UCSD SP26](https://ucsd-cse-115-215.github.io/sp26/index.html)
- **Human-vs-AI code review**: CS146S W7 grades four PRs plus a reflection comparing the student's review comments with Graphite's AI comments ("When the AI reviews were better/worse than yours"). — [W7 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week7/assignment.md)
- **Evidence labeling**: CS146S F26 W1 requires `[OBSERVED]` / `[INFERRED]` tags. "Mislabeling is not [acceptable], and unlabeled answers earn no credit." — [F26 W1 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/90a2fbb8b1fe98674dbba6719724c373fb27734f/week1/assignment.md)
- **Design/spec/test weight**: the UMich build rubric is 50% "specification and design" (requirements, architecture, Aider increments, diagrams, "specs before code", "what changed and why") and 50% implementation and tests (including custom and failure-path tests). "Tests earn credit for detecting plausible defects." — [UMich syllabus](https://eecs498-aase.github.io/syllabus.html)
- **Grading on robustness, not demos**: Utah says "AI tools make it easy to build brittle prototypes very quickly. What's hard is handling edge cases, dealing with interaction between features, and applying some taste… Students will only get credit for the latter!" Later assignments may be graded on test coverage. — [Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)
- **Effort-based grading**:
  - Utah: "If you put effort into the class, you will get an A." In-class activities are "largely pass/fail on effort." — [Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)
  - CMU 15-113 homework is graded on "evidence of effort". Its grading philosophy: "Code doesn't need to be production-perfect, but you must understand it and be able to explain your choices." — [15-113 site](https://www.cs.cmu.edu/~113/)
- **Code handoff as assessment**: in CMU 15-113 HW7, students start a game, then swap code with a classmate and "fix, finish, or extend what they received". The survey asks what made inherited code easier or harder to work with. — [15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)
- **CS50** uses the AI tutor itself for assessment: Fall 2025 "Quizzes are 20-minute interactive conversations with the CS50 Duck… graded based on completion". Problem-set "forms" forbid cs50.ai and the web. — [CS50 Fall 2025 syllabus](https://cs50.harvard.edu/college/2025/fall/syllabus/)
- **NEU CS 7180** keeps weekly quizzes (10%) to "test conceptual understanding", and markets the course as "Learn AI-assisted coding AND prove you can code without AI". — [NEU CS 7180](https://johnguerra.co/classes/aiCoding_spring_2026/)

### Inferences
- For an 8-week free-tier course, the cheapest robust combination drawn from these courses is:
  - a required prompt/AI log per project
  - a short AI-free reflection per project
  - a 10-minute TA/peer "mock interview" or recorded walkthrough per project
  - an in-class timed build (1-hour Crossy Road style) as a low-stakes in-person check
  - a peer-review day with written human reviews
  - grading weighted toward specs/tests/edge cases rather than "it runs"
- Effort- or completion-based grading for weekly labs, with understanding checked orally at project milestones, appears to be the prevailing way to avoid an arms race over AI use.

### Gaps
- No published data were found comparing the *reliability or fairness* of oral/mock-interview grading at scale in these courses, or the TA time it costs. The one exception is CS1-LLM's reported 10–15 minutes per project.

---

## 5. AI-use policies and tool-access arrangements (free tiers, education licenses, institution accounts)

### Takeaway
Policies range from "AI mandatory, logged" (Utah, UMich, CMU 17-316, UCSD 190) to "AI only via our own tutor" (CS50). The dominant modern stance is "required for code; banned for human-to-human prose (reflections, reviews); you must be able to explain everything". Tool access falls into five models:
- **(i) all-free**: local models via Ollama+Aider (UMich), vendor free tiers plus university-provided Gemini/Kiro (CMU 15-113)
- **(ii) vendor sponsorship or student promos**: Amp credits at Utah; Cursor Pro student year, Graphite code, and Bolt Pro promo at Stanford
- **(iii) institution-provided enterprise accounts**: Stanford Claude Code via SUNet; UChicago Claude Enterprise, which was insufficient
- **(iv) student-paid subscriptions**: UChicago Claude Max about $240 total; NEU recommends Claude Pro at $20/mo; UMD suggests paying $20/mo for some months
- **(v) course-built rate-limited tutor**: CS50 Duck

### Cited Findings
- **Mandatory AI + logs**: Utah: "AI use is allowed and, in fact, mandatory." Cheating includes "using another student's prompt", while "using prompts found online is fine". — [Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)
- **Utah tool access**: "We will use the Amp AI coding agent… Amp, Inc. has generously sponsored the class with a substantial number of credits, and if those run out, Amp has a free mode that students can use." — [Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)
- **UMich, $0 by design**: "Everything runs on a normal laptop, and the course costs nothing beyond it. No textbook, no API bill, no subscription. You serve a small model yourself with Ollama." Stage 1 uses Aider with `qwen3.5:4b` or `qwen3.5:9b`, and other models need "a published policy amendment". CAEN lab machines can run the models for students whose laptops can't. Hackathons use a course-provided endpoint. Policy: "AI use is required… You must understand every line you submit… You must document your AI usage… tools, models, prompts… You may not copy another student's code, prompts, or reports." — [UMich syllabus](https://eecs498-aase.github.io/syllabus.html)
- **CMU 15-113, all free**: "Required Tools (All Free for Students)": Python, Git/GitHub, VS Code (or Kiro/Cursor). Google Gemini/Antigravity is "Free in the browser with your andrewID"; Amazon Kiro is "Free for CMU student use after authentication with your andrewID"; Claude and ChatGPT/Codex are used on free tiers. — [15-113 site](https://www.cs.cmu.edu/~113/)
- **CMU 15-113 policy**: "Transparency and learning over restriction." Required: document all significant AI use in comments and writeups, explain AI code in your own words, modify and test, cite tools. Encouraged: share prompts, push AI to its limits. Not allowed: "Submitting AI code you can't explain reasonably well", claiming AI work as wholly original, improper attribution, AI on written quizzes. "We care more about transparency than exactly how much AI you relied on." — [15-113 site](https://www.cs.cmu.edu/~113/)
- **Stanford CS146S**:
  - Cursor: "Redeem your free year of Cursor Pro: https://cursor.com/students" — [W2 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week2/assignment.md)
  - Graphite: 30-day trial, then code "CS146S" for education access — [W7 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week7/assignment.md)
  - Bolt: 3 months of Bolt Pro via emailed promo code, with a credit card required and a reminder to cancel — [W8 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week8/assignment.md)
  - Local Ollama models (free) — [W1 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/ca2df55b78d6194612b65ae3fbfaa55a4678a683/week1/assignment.md)
  - Fall 2026: "Stanford provides access to Claude Code via your SUNet ID" — [F26 W1 spec](https://github.com/mihail911/modern-software-dev-assignments/blob/90a2fbb8b1fe98674dbba6719724c373fb27734f/week1/assignment.md)
- **UChicago, student-paid**: "All students will need two months of the Claude Max 5x plan ($100/month + tax; approximately $240 total for the quarter)… The University of Chicago provides students with access to Claude Enterprise at no cost, but that plan does not provide sufficient usage to complete the coursework beginning in Week 2." App-store registration fees may also apply. — [UChicago MPCS 51238](https://mpcs-courses.cs.uchicago.edu/2025-26/spring/courses/mpcs-51238-1)
- **NEU CS 7180**: Antigravity (free) and a Claude.ai account ("Pro recommended, $20/month") are required. The policy: "document all AI usage, understand all code submitted, never commit code you cannot explain." — [NEU CS 7180](https://johnguerra.co/classes/aiCoding_spring_2026/)
- **UMD CMSC 398Z**: "Students will sign up for services such as Copilot Pro, Open AI, Gemini, Claude and Cursor. Many of these are free for students, or have a free trial period. Students might find it useful to plan to pay for several months of service at $20/month." It warns that free Gemini Code Assist allows Google to use data for product and ML development, but advises not to worry for class work. — [UMD CMSC 398Z](https://www.cs.umd.edu/class/fall2025/cmsc398z/)
- **UW CSE 490A2**: "Many AI programming [tools] are free for students, or they have a free tier." It also notes that "Pasting your code and questions into ChatGPT has some value, but using a tool designed for programming will far outperform a general tool," and that Perplexity "is free for one year for CSE 490 A2 students." — [UW CSE 490A2](https://courses.cs.washington.edu/courses/cse490a2/25au/)
- **UCSD CSE 190/291P**: "highly encouraged to use agentic coding" and "Use tools that credit the AI systems you use in commit messages (Claude Code does a good job of this by default)". It bans AI for "messages you send as part of reviews, as part of Piazza posts, in reflections like your DESIGN documents", quoting Alex Hillman: "don't ask the recipients of your work to try harder than you did." The instructors disclose their own AI use for the website. — [UCSD SP26](https://ucsd-cse-115-215.github.io/sp26/index.html)
- **CMU 17-316**: "it is expected that much of the artifacts you produce will come in part from AI… We do not allow AI to be used for the writing of the reflection assignments." — [CMU 17-316 syllabus](https://ai-developer-tools.github.io/syllabus/). **UVA CS 4501**: "Use of AI is generally encouraged! Exception: some assignments will have explicit requirements about not using AI." — [UVA](https://www.cs.virginia.edu/~se4ja/files/seLLMs.html)
- **CS50 (restrictive, course-built tutor)**:
  - "Reasonable": "Using CS50's own AI-based software, including the CS50 Duck (ddb) in cs50.ai and cs50.dev." "Not reasonable": "Using AI-based software other than CS50's own (e.g., ChatGPT, Claude, Copilot, Gemini, et al.) that suggests or completes answers to questions or lines of code." — [CS50x 2026 Academic Honesty](https://cs50.harvard.edu/x/2026/honesty/)
  - Throttling: each student starts with 10 "hearts" and regains 1 every 3 minutes, to limit GPT-4 cost. The tutor is designed "to guide students toward solutions rather than offer them outright". — [Liu et al., "Teaching CS50 with AI", SIGCSE 2024](https://cs.harvard.edu/malan/publications/V1fp0567-liu.pdf)
- **UCSD CS1-LLM**: Copilot is used throughout, including on "some supervised quizzes and tests", and a mandatory VS Code + Copilot setup assignment is due in week 2. Homework was "designed to be completed without using an LLM but students were told they could use an LLM if stuck." — [CS1-LLM paper](https://arxiv.org/pdf/2406.15379)
- Only 9 of the 23 syllabus-study courses publicly named tools. Among them: Claude Code (6 courses), Cursor (3), GitHub Copilot (3), Claude Web (2), OpenAI Codex (2). Named once each: Aider, Amp, Anthropic API, ChatGPT, Gemini Code Assist, Google Antigravity, Ollama, OpenAI API, Replit, Willison's LLM CLI, Warp. — [arXiv 2608.05898](https://arxiv.org/abs/2608.05898)
- Free-tier friction appears in student data: "GitHub Copilot is very convenient but the credits are gobbled up really quick." The report adds that "Free-tier credits on Copilot, Claude, Gemini, and Render all ran out mid-assignment for someone in the class." — [15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)

### Inferences
- A "free or basic-paid-tier" 8-week course has two proven templates. **CMU 15-113** uses university-provided Gemini/Kiro plus vendor free tiers and multi-tool rotation to survive rate limits. **UMich** uses local Ollama models with Aider or another open-source agent, at $0, with lab machines as the fallback. The UMich approach avoids rate limits and data-sharing concerns but requires capable laptops and tolerance for weaker models.
- Stanford's promos are useful but carry risk for a free-tier course: Bolt's requires a credit card, and several expire after a trial. A 101 course should prefer tools with permanent free tiers or education programs, and should teach "rotate models when credits run out" explicitly.
- Every course that bans AI for something bans it for *reflections and reviews*, not for code. The policy line students actually respect is apparently "your prose and your understanding must be yours".

### Gaps
- Verified current (Sept 2026) terms of vendor education programs (GitHub Student Developer Pack/Copilot, Cursor for students, Gemini for students, Claude for Education) were not checked here. They are presumably covered by the parallel "free tools" research, and should be verified there.
- No course reported the actual per-student spend or how often free credits ran out, beyond anecdotes.

---

## 6. Published retrospectives, papers, and lessons learned (what worked, what failed)

### Takeaway
The strongest evidence comes from UCSD's CS1-LLM papers (exam outcomes similar to historical cohorts, projects valued, over-reliance concerns), the CMU 15-113 Spring 2026 student-survey report (plan-first/spec-first, incremental builds, multi-model use, and a measurable drop in code-reading and understanding once agentic tools arrive), CS50's AI-tutor paper, and two 2026 meta-studies: the ACM Task Force and UCSD's syllabus analysis. Few instructor retrospectives exist yet for the 2025–26 advanced courses (Stanford, Utah, CMU 17-316).

### Cited Findings
- **UCSD CS1-LLM, experience report** (ITiCSE 2024, arXiv 2406.15379, Apr 2024):
  - 79% of students were comfortable programming with GenAI, and 59% said Copilot helped their learning of fundamentals.
  - Most students reported reading Copilot's code at least 80% of the time and testing/modifying it at least 60% of the time. However, 44% were confused by Copilot's responses at least 50% of the time.
  - 31.1% were not confident they could identify which problems they should be able to solve without Copilot.
  - Students called it "a little unfair" to lose Copilot on quizzes. The authors: "we could have offered more guidance about what we expect students should be able to code with and without Copilot."
  - Open-ended projects were rated helpful.
  - — [CS1-LLM paper](https://arxiv.org/pdf/2406.15379)
- **UCSD CS1-LLM, outcomes paper** (arXiv 2510.18806, 21 Oct 2025): "student exam performance outcomes, including differences among demographic groups, are largely similar to historical outcomes for courses without integration of LLM tools". "Large, open-ended projects may be particularly valuable in an LLM context". Students "predominantly found the LLM tools helpful, although some had concerns regarding over-reliance". CS1-LLM students scored about 11% above the international average on an "Explain in Plain English" question. — [Vadaparty et al. 2025](https://arxiv.org/pdf/2510.18806)
- **CMU 15-113 "Student Wisdom: Best Practices and Lessons Learned"** (Spring 2026). About 320 free-response comments across 9 post-assignment surveys, with 30–42 responses each. Caveat from the instructor: the report is "mostly generated with Claude Opus 4.7, with subsequent manual revisions", with a validated instructor summary promised later.
  - **Measured arc**: satisfaction, understanding, and code-reading all rose through the first five assignments and peaked on HW6 (databases/SQL: satisfaction 5.3, understanding 4.8, code-reading 5.0 on 1–7). They then fell together over the three agentic assignments. HW9 (phone apps) understanding was 3.03/7, the lowest of the year.
  - HW8 (SPEC.md → agents): read code 3.2/7, understood 3.6/7. Students rated spec-writing harder than agent-wrangling (3.3/5 vs 2.5/5).
  - HW2 (a one-hour Crossy Road build) had the lowest no-bugs confidence (2.2/5).
  - **Tool adoption shift**: Cursor rose from 5% (P1) to 37% (P2) and 40% (HW9). Copilot jumped to 52% on HW8. Browser chatbots peaked on P2/HW6 and "only collapse[d] during the agentic arc".
  - **Twelve practices** the report distills:
    1. Write a SPEC.md before code, matching spec detail to how much you want the AI to decide
    2. Use multiple models deliberately
    3. Move to IDE-integrated agents by mid-semester ("Plan Mode first, then Agent Mode")
    4. One chat or agent per module
    5. Build incrementally, MVP first
    6. Keep reading the code
    7. Document for the next person (README, to-do list, prompt log)
    8. Feed concrete references (screenshots, sketches, doc links)
    9. Start a new chat when context "sours"
    10. Spend 20 seconds reading an error before pasting it
    11. Understand the platforms (Render/Vercel/Supabase/Expo), where "Deployment ate more time than coding"
    12. Guard secrets and rate limits ("API keys don't end up in .gitignore unless you tell the AI explicitly to put them there")
  - A highlighted "DHH sandwich" workflow: AI plans, the student writes, AI reviews. It is credited with HW6's high understanding scores.
  - — [15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)
- **CMU context** (The Tartan, 2026-02-09): Taylor on the rationale: "Tell us how you use AI effectively" is now an interview question. He described students in 15-112 who called their AI use "an addiction". A 15-122 co-instructor reported that students likely using AI "received on average two letter grades lower" (from a probabilistic detector, so treat with caution). Taylor's advice is to build "piece by piece with AI" rather than generating whole programs. — [The Tartan](https://the-tartan.org/2026/02/09/ais-impact-on-education-at-cmu-and-beyond/)
- **CS50 AI tools** (SIGCSE 2024): tools were piloted with about 70 summer students in 2023, then offered to thousands online and several hundred on campus in Fall 2023. Students described it as "felt like having a personal tutor". Mid-semester usage: 17% used the tools more than 10 times/week and 32% 5–10 times/week. The design uses GPT-4 with RAG and "guide rather than give" system prompts, plus heart-based throttling. — [Liu et al. 2024](https://cs.harvard.edu/malan/publications/V1fp0567-liu.pdf)
- **ACM Task Force** (Feb 2026):
  - Educators' top concerns: "Increased dependency on technology" (87%), cheating/plagiarism (72%), misinformation (53%).
  - "Less-skilled students tend to use AI more but benefit less, which amplifies the 'skills gap'."
  - Innovations include "Requiring students to compare AI-generated solutions with their own" and "Using AI-generated code as material for debugging and improvement exercises".
  - — [ACM Task Force report](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf)
- **Syllabus-analysis lessons** (Aug 2026): AI-assisted SE "remains a design space rather than a standardized curriculum". Documentation, brownfield development, responsible AI, and user-centered design are under-represented. Courses layer AI practices (prompting, agentic development, context management, AI evaluation) onto classic SE foundations. — [arXiv 2608.05898](https://arxiv.org/abs/2608.05898)
- **Conceptual framework**: Alenezi's ACCEL framework (arXiv 2607.29610, 31 Jul 2026) proposes five competency pillars: intent specification, orchestration/delegation, verification/validation, ethical governance, and adaptive self-directed learning. It also proposes a "delegation–verification pedagogical loop" and names risks: "automation bias, deskilling, superficial engagement, and diffuse accountability". This is a synthesis, not an empirical course report. — [arXiv 2607.29610](https://arxiv.org/abs/2607.29610)
- **Instructor-stated design lessons embedded in syllabi**:
  - Utah: "With AI tools it's really easy to fool yourself into thinking you're almost done when you've just started." "No one has more than a year's experience with AI coding, so workflows and knowledge evolve and learning from others is key." — [Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)
  - CMU 15-113 Project 2: "be careful not to just vibe-code until it's too complicated for you to grasp." — quoted in the [15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)
  - UMich: "Understanding is what gets graded here, not generation. If you can't explain it, you didn't build it." — [UMich syllabus](https://eecs498-aase.github.io/syllabus.html)
- CMU 15-113 has itself been restructured. Demand from students with only 15-110 led to the Fall 2026 split into two 7-week minis, so a first half with an intro-level prerequisite now exists. — [15-113 site](https://www.cs.cmu.edu/~113/)
- CMU 17-316 assigns a research reading on vibe coding: *"Good Vibrations? A Qualitative Study of Co-Creation, Communication, Flow, and Trust in Vibe Coding"*. — [CMU 17-316 schedule](https://ai-developer-tools.github.io/)

### Inferences
- The most actionable empirical lesson for an 8-week course is from CMU 15-113. Students *understand* the most when they read and partly write the code (the DB assignment), and understand the least when agents build from specs. The course should therefore keep a "read the code / explain it" requirement *specifically attached to agentic weeks*, not just early weeks. Candidate mechanisms: the DHH sandwich, mandatory walkthroughs, and an "explain three functions" oral check.
- Deployment and platform issues (free-tier hosting spin-down, serverless constraints, env vars and secrets) consumed more time than coding for novices. An 8-week course should budget a dedicated deployment and secrets lab early.
- The CS1-LLM results suggest that integrating AI from day one does not by itself hurt exam outcomes *when* no-AI fundamentals are still explicitly taught and assessed. The results also suggest that students need an explicit list of "what you must be able to do without AI".

### Gaps
- No published instructor retrospective (blog or paper) was found for Stanford CS146S Fall 2025, Utah CS 3960, CMU 17-316, UChicago Design/Build/Ship, or UMich AASE. The 15-113 instructor's own validated summary was "promised" but not located. The web-search budget ran out before more instructor blogs, Substack/LinkedIn posts, or SIGCSE/ITiCSE/Koli 2026 experience reports specific to these courses could be searched.
- The syllabus-analysis paper's Table 1 was located, but its per-course grade weights were not listed individually.
