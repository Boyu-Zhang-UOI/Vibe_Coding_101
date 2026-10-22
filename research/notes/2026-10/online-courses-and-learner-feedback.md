# Online, Industry, MOOC, Bootcamp, Cohort and Vendor-Academy Courses on Vibe Coding: What Is New (25 Sept to 21 Oct 2026), Plus Fresh Learner Feedback

Research date: 2026-10-21. Baseline: `/Users/boyu/GitHub/Vibe_Coding_101/research/notes/online-industry-courses.md` (25 Sept 2026, about 40 courses). These notes record only what is new or changed since then, or material the baseline did not capture.

Date conventions:
- "Page date" is the date shown on the source.
- "Fetched 21 Oct" means the live page was read today and showed no date.
- "Search summary" means the fact came from a search engine's summary and not from the page itself. Treat those as lower confidence.

Some catalog pages (Coursera, Class Central, Udemy, WindowsForum) returned 403 errors, as they did in the baseline.

---

## Q1. Which beginner-oriented vibe coding / AI-coding courses launched or were substantially updated between late Sept and late Oct 2026? (module lists, projects, durations, prices, free-tier fit)

### Takeaway
The window is quiet. Only one substantial new free course was found that falls inside it: Microsoft/GitHub's **"GitHub Copilot app for Beginners"** (28 Sept 2026). It has a setup chapter plus 7 hands-on chapters built around a single sample app, and it is organized around a "trust the evidence" review loop. Copilot Free is not confirmed to work. The other items are small updates, such as a DLAI JetBrains course updated 18 Sept, a Scrimba course re-recorded in Oct, and an OpenAI course localized on 15 Oct, or courses the baseline missed. For most providers (DeepLearning.AI beginner line, Anthropic, OpenAI coding, Google/Kaggle, Coursera, Codecademy, freeCodeCamp, Replit, Lovable, Bolt), no new beginner vibe-coding course was found for 25 Sept to 21 Oct 2026.

### Cited Findings

**Microsoft / GitHub: NEW in window**
- **"GitHub Copilot app for Beginners"** was announced on 28 Sept 2026 by Dan Wahlin on the Microsoft for Developers blog. It is free and open source. — [Microsoft for Developers blog, 28 Sept 2026](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
  - Structure: "a short setup chapter followed by seven hands-on chapters". — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
    - Ch 00 Setup: install the app, sign in, fork the course repo, and seed practice issues and PRs. About 20 minutes.
    - Ch 1 Tour the App: chats vs project sessions, session modes, model and reasoning settings.
    - Ch 2 Sessions, Worktrees and Context: isolated sessions, git worktrees, and `@`, `#` and `/` context.
    - Ch 3 Development and GitHub Workflows: an inner loop (change, diff, test, preview) and an outer loop (issues, PRs, review comments, failing checks).
    - Ch 4 Skills and Custom Agents: update a review skill, then build a read-only custom agent.
    - Ch 5 MCP Servers and Plugins: the Context7 MCP server and a plugin-supplied skill.
    - Ch 6 Canvases: `/create-canvas` session board.
    - Ch 7 Automations: turn a manual status report into an on-demand automation, then schedule it and use event triggers.
  - Sample project: `samples/book-app-web`, a React/Vite/TypeScript book-collection app. It has search, genre and reading-status filters, reading stats, tests and a build step. The project runs through the whole course. — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
  - Each chapter follows the same template: why the topic matters, a real-world analogy, core concepts, hands-on exercises, key takeaways, and an assignment. The course adds a glossary and a companion video series. The analogies are studio-themed: a worktree is a "recording booth", session modes (Interactive / Plan / Autopilot) are a "producer in the control room", a canvas is an arrangement board, and automations are a sequencer. — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
  - The review loop has the learner check the diff in the Changes tab, run tests in the Terminal, and preview in the Browser tab. The post calls this "trust the evidence." — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
  - Prerequisites and cost: the post says learners need a Copilot plan or can sign in with their own model provider. It does not say whether Copilot Free is enough. Some familiarity with GitHub, Git and npm helps; if you can clone a repo and run `npm test`, the post says you are ready. No AI or agent background is required. There is no stated total duration. — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
  - It is aimed at developers who want to direct agents and review their work, not just chat with them (search summary of WindowsForum coverage dated 28 Sept 2026; the page returned 403). — [WindowsForum, 28 Sept 2026](https://windowsforum.com/news/github-copilot-app-for-beginners-free-course-on-agent-sessions-worktrees-and-ai-code-review.446343/)
- The baseline already covered "GitHub Copilot CLI for Beginners" (Mar 2026; 8 chapters; works with Copilot Free). No update to it was found in the window. — [MS Dev blog, Mar 2026](https://developer.microsoft.com/blog/get-started-with-github-copilot-cli-a-free-hands-on-course/)

**DeepLearning.AI: no new beginner course in window**
- The courses page, fetched 21 Oct, marks one course as "Just Added": **Context Engineering** (Chroma, Intermediate, 18 h 56 m). No date is shown. Beginner coding-related listings are unchanged from the baseline: Build with Andrew (Beginner, 1 h), Spec-Driven Development with Coding Agents (Beginner, 1 h 16 m), AI Python for Beginners (11 h 30 m), Generative AI for Software Development (31 h 32 m), and AI Prompting for Everyone (7 h 4 m). The page lists no Codex, Cursor or Replit course besides the existing Replit one. — [DLAI courses page, fetched 21 Oct 2026](https://www.deeplearning.ai/courses)
- **AI Coding Workflows: From Cloud to Local** (JetBrains, Paul Everitt) is not in the baseline. It is Intermediate, 1 h 32 m, with 14 videos, 2 optional readings and a graded quiz (PRO). The page date is "Updated Sep 18, 2026", one week before the window. — [DLAI course page](https://www.deeplearning.ai/courses/ai-coding-workflows-from-cloud-to-local)
  - Lessons: Introduction (3m); The Big Picture (3m); Set up your environment (reading, 5m); Setup Overview (4m); Claude Code Baseline (6m); Claude Code with Subagents (6m); Claude Code with Cheaper Subagents (6m); OpenCode Setup (6m); OpenCode Baseline (3m); OpenCode with Subagents (3m); OpenCode with Cheaper Subagents (6m); LMStudio & Local Setup (5m); Subagent Specialist (10m); Fully Local (9m); Conclusion (1m); Quiz (10m); [Optional] Glossary; [Optional] Evaluation Metrics. — [DLAI](https://www.deeplearning.ai/courses/ai-coding-workflows-from-cloud-to-local)
  - Project: the learner rebuilds the same Python app at each stage (cloud baseline → subagents → cheaper models → OpenCode via OpenRouter → fully local via LM Studio) using a spec-driven process. Prerequisites are coding-agent experience, Python and the terminal, and a reasonably capable machine for local models. — [DLAI](https://www.deeplearning.ai/courses/ai-coding-workflows-from-cloud-to-local)
- Update dates from search summaries, all before the window: the Claude Code course was "last updated Aug 17, 2026"; Vibe Coding 101 with Replit was "updated July 17, 2026"; AI Prompting for Everyone was "Updated Jul 24, 2026"; "Building Adaptive AI Agents" (Oracle) was about 56 days old (≈ late Aug 2026). — [DLAI Claude Code](https://www.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant); [DLAI Replit](https://www.deeplearning.ai/courses/vibe-coding-101-with-replit); [DLAI AI Prompting for Everyone](https://www.deeplearning.ai/courses/ai-prompting-for-everyone); [DLAI Building Adaptive AI Agents](https://learn.deeplearning.ai/courses/building-adaptive-ai-agents/lesson/bvlakh/introduction)
- No Batch letter announcing a new Andrew Ng course in Oct 2026 was found. The most recent items are a July 2026 compilation of Ng's talks, about 3 h (an X post, secondary), and the AI Prompting for Everyone update on 24 Jul 2026. — [X post, Jul 2026](https://x.com/sairahul1/status/2076010382439903536?lang=en); [The Batch DLAI news tag](https://www.deeplearning.ai/the-batch/tag/deeplearning-ai-news)

**Anthropic Academy: no new coding course found; possible platform change (unverified)**
- anthropic.skilljar.com, fetched 21 Oct, lists 23 titles, the same set as the baseline: Claude 101, Claude Code 101, Claude Code in Action, AI Fluency tracks, MCP, agent skills, subagents, Cowork, and others. None is marked new, beta or coming soon, and the page has no notice of a migration. — [Anthropic Skilljar catalog, fetched 21 Oct 2026](https://anthropic.skilljar.com/)
- A separate site, **academy.claude.com**, is live (fetched 21 Oct) and shows three courses. The page shows no dates and says nothing about Skilljar.
  - AI Fluency: Framework and foundations (14 lessons, 1 quiz, 4 h; the "4D" framework of Delegation, Description, Discernment, Diligence).
  - AI capabilities and limitations (13 lessons, 1 quiz, 3.5 h).
  - **Building effective human-agent teams (beta)** (5 lessons, 1 quiz, 45 min). This title is not in the baseline catalog.
  - [academy.claude.com, fetched 21 Oct 2026](https://academy.claude.com/)
- Conflict: a search summary says a third-party guide "updated October 1, 2026" reports a move from anthropic.skilljar.com to academy.claude.com, with progress tied to a Claude account. The one guide I could fetch (MeshWorld) carries no date, lists anthropic.skilljar.com as the main portal, and mentions no migration. Treat the migration as unconfirmed. — [MeshWorld guide, undated](https://meshworld.in/blog/reference/learning/anthropic-academy/); [Spectrum AI Lab roundup](https://spectrumailab.com/blog/anthropic-academy-13-free-courses-ranked-2026)

**OpenAI Academy: no new coding course in window**
- In October 2026 the only course-level item found is a localization: the "AI for Educators" course launched in Brazilian Portuguese around Teachers' Day. Release notes are dated 15 Oct 2026 (aggregator, search summary). — [Releasebot OpenAI release notes, Oct 2026](https://releasebot.io/updates/openai)
- The October events page lists non-coding webinars: "ChatGPT 101 for Government Professionals" (23 Oct), "ChatGPT Legislative 101" (27 Oct), and "Impact Math: Measuring the ROI of LLMs" (28 Oct) (search summary). — [OpenAI Academy events](https://academy.openai.com/public/events)
- Not in the baseline, and before the window: a **"Codex for Beginners"** livestream on 21 Apr 2026 for people with no technical background, with the replay posted 22 Apr. There was also a 27 Feb 2026 "Introduction to Codex" session for non-technical professionals. The "Codex Bootcamp" is a 3-part live series (101/201/301) for builders and engineering teams; its resource page is dated 18 Jul 2026. — [Codex for Beginners event](https://academy.openai.com/public/events/codex-for-beginners-wsz3p1tg0r); [Codex for Beginners video, 22 Apr 2026](https://academy.openai.com/public/videos/codex-for-beginners-2026-04-22); [Introduction to Codex event](https://academy.openai.com/public/clubs/builders-etkn1/events/introduction-to-codex-io1hg00gow); [Codex Bootcamp resource, 18 Jul 2026](https://academy.openai.com/public/clubs/builders-etkn1/resources/codex-bootcamp-2026-07-18)
- In June 2026 OpenAI launched AI Foundations, Applied AI Foundations, and Agents and Workflows (workplace courses, not coding). — [OpenAI: New Academy courses](https://openai.com/index/academy-courses-applying-ai-at-work/)

**Google / Kaggle: nothing new in window**
- No Nov 2026 or other new edition of the Kaggle vibe-coding intensive was found. The June 2026 course (15–19 Jun) is now a self-paced Kaggle Learn Guide. — [Kaggle Learn guide](https://www.kaggle.com/learn-guide/5-day-agents-vibecoding); [Kaggle competition page](https://www.kaggle.com/competitions/5-day-ai-agents-intensive-vibecoding-course-with-google)
- More detail than the baseline captured, from i-programmer (page date 1 Jul 2026):
  - Day 1 covers Antigravity 2.0 and deploying an app to Cloud Run.
  - Day 2 covers MCP and interoperability.
  - Day 3 covers Agent Skills, long-term memory, and Agents CLI skills.
  - Day 4 covers security and evaluation: testing, guardrails, and human-in-the-loop agents.
  - Day 5 covers spec-driven, production-grade development: deploying to Google Cloud with a frontend linked to a cloud-hosted agent.
  - Format: a 45–60 min podcast, a whitepaper, and 1–2 h assignments each day.
  - Free-tier fit: Kaggle and AI Studio accounts are free, but sign-up needs an email address *and phone number*. The Day 5 codelabs are optional and may need a Google Cloud billing account.
  - [i-programmer, 1 Jul 2026](https://www.i-programmer.info/news/150-training-a-education/18975-vibe-coding-from-google-on-kaggle.html)
- Codelab **"Vibecode and Secure an AI Agent Lifecycle with Antigravity and TDD"** (undated, part of the Kaggle intensive). About 60 min, "developers of all levels, including beginners", though it assumes Python, Pytest and terminal skills. It runs locally with a Gemini API key from AI Studio and needs no GCP authentication.
  - Practices taught: a `CONTEXT.md` of secure-coding standards; Pydantic validation of tool inputs; custom Semgrep rules that catch hardcoded API keys; git pre-commit hooks that block failing scans; agent `PreToolUse` hooks; a STRIDE threat-modeling skill; a required "Security Boundaries & Assertions" section in plans; outcome-based pytest TDD; an agent self-remediation loop.
  - The codelab also warns that local gates can be bypassed with `--no-verify`, so CI is the enforceable barrier.
  - [Google Codelabs](https://codelabs.developers.google.com/secure-agentic-coding)
- Google Skills' "Get Started with Vibe Coding and Antigravity CLI" lab (Cloud Shell; configure the CLI, add MCP servers, build and deploy) is still listed. No new date was found. — [Google Skills lab](https://www.skills.google/focuses/132622?parent=catalog)

**Coursera: no new beginner course found in window**
- No 2026 Coursera launch aimed at non-programmers was found beyond the baseline courses. Search summaries describe CU "Vibe Coding Fundamentals" as 3 weeks at 2 h/week using Replit, Lovable and Bolt, and the baseline did not record that. — [Coursera CU Vibe Coding Fundamentals](https://www.coursera.org/learn/vibe-coding-fundamentals)
- Coursera also lists SkillsBooster Academy "Non-Coder's Guide to Vibe Coding" (Lovable, v0, Gamma; beginner; "recently updated October 2025"). This is not new and is not in the baseline. — [Coursera Non-Coder's Guide](https://www-cloudfront-alias.coursera.org/learn/non-coders-guide-to-vibe-coding)

**Scrimba: one re-record (intermediate)**
- "Learn AI Agents" (Pro, Intermediate, 3.1 h) was "re-recorded October 2026" according to an independent, third-party Scrimba review site (page updated 11 Oct 2026; it is not Scrimba-run). The same site lists **Learn to Code with AI** as Beginner, free, 4.5 h, with no update date. It also flags "Intro to MCP" as recorded before recent protocol changes. — [scrimbaguide.tech AI courses, 11 Oct 2026](https://scrimbaguide.tech/docs/courses/ai/)

**Codecademy: nothing new found**
- No new AI-coding course was found. A search snippet shows Intro to Vibe Coding at 9,271 learners, against 9,041 in the 25 Sept baseline. The difference suggests slow enrolment, but the figure is only from a snippet. — [Codecademy Intro to Vibe Coding](https://www.codecademy.com/learn/intro-to-vibe-coding)

**freeCodeCamp: nothing new found**
- No 2026 freeCodeCamp vibe-coding course was found. The closest item is an older (about 2025) 2-hour crash course pairing vibe coding with n8n, by Paulo Dichone. — [freeCodeCamp news](https://www.freecodecamp.org/news/how-to-vibe-code-with-help-from-n8n/)

**Udemy / third-party marketplaces: no new launch confirmed**
- Udemy's Lovable topic page is headed "Updated [September 2026]", but the listings are existing courses. Randy Minder's "Learn AI App Development with Lovable 2.0" is beginner-level, has 50 lectures, and was last updated 7/2026 (search summary). — [Udemy Lovable topic](https://www.udemy.com/topic/lovable-ai/); [Udemy Lovable 2.0](https://www.udemy.com/course/lovable-20/)
- Third-party FindSkill sells Bolt.new and Lovable courses framed around credit saving: "Every Feature, Fewer Credits", with 8 lessons, beginner-level, and the first two lessons free (search summary). — [FindSkill Bolt.new course](https://findskill.ai/courses/bolt-new-ai-app-builder/)

**Replit / Lovable / Bolt academies: nothing new**
- Replit Learn, fetched 21 Oct, is unchanged from the baseline. AI foundations (30 min, 7 lessons) and Enterprise foundations (30 min, 6 lessons) are live. **Intro to Replit (45 min, 5 lessons) and Advanced vibes (30 min, 5 lessons) are still "coming soon".** Replit's launch post, updated 22 Jan 2026, had announced them along with "Replit at Work". — [Replit Learn, fetched 21 Oct 2026](https://learn.replit.com/); [Replit blog: Replit Learn launches](https://replit.com/blog/replit-learn)
- No official Lovable or Bolt academy launch was found for Sept–Oct 2026. — [Lovable video library](https://lovable.dev/videos)

**edX:** not searched separately this round. The baseline found no edX vibe-coding course. This is a gap.

**Found this round but not in the baseline (launch dates unclear, probably before the window)**
- **CC for Everyone** (Carl Vellotti), a free course taught *inside* Claude Code for people with "No coding experience required. No terminal experience required." Each lesson starts with a slash command (`/start-1-1`, `/start-1-2`, ...), and Claude walks the learner through it. Module 1, Fundamentals, takes about 3 h and covers file handling, a split-screen workspace and parallel agents. A separate install guide takes about 15 min. Module 2 is planned. A third-party roundup lists it at about 4–5 h, free, needs Claude Pro. — [ccforeveryone.com](https://ccforeveryone.com/); [CC for Everyone course intro](https://ccforeveryone.com/fundamentals/course-intro); [Scrimba roundup of Claude Code courses](https://scrimba.com/articles/best-claude-code-tutorials-and-courses-in-2026/)
- **Designlab "Vibe Coding Camp"**: a live 4-week bootcamp for designers and makers with no coding background. It uses Claude Code, GitHub, Vercel and Supabase to build a working web app (search summary; date and price not captured). — [Designlab](https://designlab.com/advanced/vibe-coding-course)
- **datawhalechina/easy-vibe**: an open-source, Chinese-language "Vibe Coding 101 | Your First Course For AI Product Builders" on GitHub. It claims "tens of thousands" of learners (self-reported). — [GitHub: easy-vibe](https://github.com/datawhalechina/easy-vibe)

### Inferences
- The field has slowed in this window. Providers are refreshing intermediate and agentic content (subagents, local models, worktrees, automations) rather than launching new courses for absolute beginners. The baseline set (Build with Andrew, Google/Coursera beginner course, Scrimba, Codecademy, CU) is still the beginner frontier as of 21 Oct 2026.
- The new GitHub course's material is beginner-friendly: analogies, a glossary, and assignments in a fixed chapter template. Its prerequisites are not (Git, npm, a Copilot plan that may need to be paid). It fits a late-course stretch track better than core weeks, and its *chapter template* is the most reusable part.
- The DLAI "Cloud to Local" course is the first mainstream course found that teaches the cost lever explicitly: rebuild the same app with cheaper subagents, then OpenRouter, then fully local models. For a free-tools course this is a model for an optional "what if my free quota runs out?" lab. Local models need decent hardware, so it cannot be core.

### Gaps
- No primary page confirmed whether the GitHub Copilot app course works on Copilot Free. The repo URL guessed from the course name (github.com/microsoft/github-copilot-app-for-beginners) returned 404, and WindowsForum returned 403.
- DLAI pages show only "updated" dates and no launch dates. The "Context Engineering" launch date is unknown.
- Whether academy.claude.com is replacing Skilljar, and when, is unconfirmed.
- Class Central's subject page and "best vibe coding courses" report both returned 403. A search title claims "200+" vibe coding courses, up from "80+" in the baseline report, but this could not be checked, and newly added Class Central listings could not be enumerated.
- Udemy course pages were not fetchable, so new Udemy launches from late Sept to Oct could not be verified.
- edX, Maven's full catalogue and YouTube series were not systematically searched by date.

---

## Q2. Has Campus × Replit VibeCoding 101 published more detail or outcomes? Any other 6–10 week cohort programs for non-technical learners?

### Takeaway
Yes on detail, no on outcomes. As of 21 Oct 2026 the Campus page carries a **week-by-week syllabus** that is more fundamentals-heavy than its "vibe coding" branding suggests, covering Python constructs, HTML/CSS/JS, version control, frameworks and APIs. The page also now resolves the earlier credit conflict: the course is offered for college credit. It adds a 200-seat cap, a 101 → 102 certificate path, and about 2 h live plus a couple of hours self-paced each week. The next cohort is TBA, and no completion or outcome data is published. No new 6–10 week non-technical cohort with an Oct or Nov 2026 start was confirmed. The cohorts found for non-coders are mostly 2.5–4 weeks (Maven, Designlab).

### Cited Findings

**Campus × Replit VibeCoding 101 (fetched 21 Oct 2026)**
- Format: 8 weeks, one live online class per week of about 2 hours, plus "a couple of hours" of self-paced work on Replit each week. Capped at 200 students. Live attendance is expected; recordings "may be available". The next cohort and class times are TBA, with a waitlist. — [Campus VibeCoding 101](https://campus.edu/vibe-coding)
- Weekly syllabus, as listed:
  1. Fundamentals of programming and AI-assisted development.
  2. Programming languages and their use cases.
  3. Python programs and core programming constructs.
  4. Web apps with HTML, CSS and JavaScript, with AI help.
  5. Industry-standard development tools for code management.
  6. Dynamic web apps using modern frameworks.
  7. Integrating external APIs and AI services.
  8. Deploying and presenting applications to the class.
  - [Campus](https://campus.edu/vibe-coding)
- Deliverables: 4 working apps, a personal landing page for the portfolio, and a "flagship milestone project" with clean docs, version history *and prompt notes*. — [Campus](https://campus.edu/vibe-coding)
- Credit and certificate: offered for college credit, and Campus is described as a fully accredited college. There is no audit option. Vibe Coding 101 plus 102 earns a "Certificate in AI Assisted Software Development", and 101 is required before 102. This settles the baseline conflict in favor of the Replit blog's "academic credits" claim. — [Campus](https://campus.edu/vibe-coding); [Replit blog, 23 Nov 2025](https://replit.com/blog/campus-vibe-coding-101-course)
- Cost: $1,500. A credit card is needed to reserve a seat, and there are no payment plans. 10% of tuition goes to scholarships through The Campus Foundation. Replit access is provided by the program. — [Campus](https://campus.edu/vibe-coding)
- Faculty: the six people listed in the baseline, now with fuller bios. They include Vikash Rungta (formerly led Llama Safety and Responsible AI at Meta) and Meredith Syed (formerly led AI developer advocacy at IBM). — [Campus](https://campus.edu/vibe-coding)
- Outcomes: none published. There are no completion rates or cohort numbers, and the three testimonials appear only as images. — [Campus](https://campus.edu/vibe-coding)
- Caveat: I can't tell whether the syllabus was added after 25 Sept or was missed by the baseline extraction. Treat it as "first captured 21 Oct 2026".

**Other cohort programs for non-technical learners (none with confirmed Oct or Nov 2026 starts)**
- Maven "The Marketing Engineer: Vibe Coding for Non-Coders" (Natalie Lambert): a 4-week cohort for marketers and founders using Claude Code or OpenAI Codex, GitHub, Supabase and Vercel. No start date found (search summary). — [Maven](https://maven.com/genedge/vibe-coding-for-marketers)
- Maven "Vibe Coding Challenge / Bootcamp" (Harold Dijkstra and Ciara Wearen): about 2.5 weeks, building apps with user auth, a database and Stripe monetization. No dates visible (search summary). — [Maven](https://maven.com/no-code-ai/vibe-coding-challenge)
- Maven "Vibe Coding Data-Enabled AI Apps for PMs, Designers and Founders" (Drew Falkman): the syllabus shows March dates (search summary). — [Maven](https://maven.com/drewfalkman/vibe-coding-for-non-technical-founders)
- Maven iOS "Buildcamp ... From Idea to App Store" (Elena Avramenko and Ivan Misuno): one month, for non-technical founders, most recent cohort 3–25 Sept 2026 (search summary). — [Maven](https://maven.com/vibecode/vibe-coding-ios-swift-swiftui-from-idea-to-app-store-in-one-month-modaal-mobile-app)
- Maven free events: "The Vibe Coding Games (World Cup Edition)", a free 5-day build sprint for non-technical professionals, and the lightning lesson "Vibe Coding 101: Kickstart 2026". Dates not captured. — [Maven Vibe Coding Games](https://maven.com/lls/d97a4d); [Maven kickoff](https://maven.com/p/7f89b8/kickoff-5-day-vibe-coding-build-sprint-world-cup-edition); [Maven Vibe Coding 101 Kickstart](https://maven.com/p/3ee8d0/vibe-coding-101-kickstart-2026)
- Designlab "Vibe Coding Camp": 4 weeks, live, for designers and makers, using Claude Code, GitHub, Vercel and Supabase (search summary). — [Designlab](https://designlab.com/advanced/vibe-coding-course)
- Baseline item: Vibe Coding Academy's (Jules Boiteux) 8-week "Ship Your First SaaS with Claude Code" started 14 Sept 2026. No newer cohort info was gathered this round. — [Vibe Coding Academy](https://www.vibecodingacademy.ai/)

### Inferences
- Campus, the closest $1,500 analogue to an 8-week course, does *not* run pure vibe coding. It covers Python constructs in week 3, HTML/CSS/JS in week 4, version control in week 5 and APIs in week 7, and ends with a live presentation. That supports keeping light fundamentals in a free 8-week course and ending with a demo day.
- "Prompt notes" as a graded part of the flagship deliverable is a cheap idea to copy. It makes the learner's process visible and assessable, which matters when the AI wrote most of the code.
- The 200-student cap with expected live attendance suggests Campus relies on live teaching, not async video, for support. A free course without live staff needs substitutes such as peer review, office-hour recordings and checklists.
- Non-technical cohorts on the market cluster at 2.5–4 weeks, often around one paid stack (Supabase, Vercel, Stripe, Claude Code or Codex). An 8-week free-tools course is still unusual.

### Gaps
- No Campus outcomes, completion data, cohort dates, 102 syllabus or testimonial text are available.
- Prices and Oct/Nov 2026 dates for the Maven and Designlab cohorts were not confirmed; the details come from search summaries.
- Found no other 6–10 week program for non-technical learners with a confirmed autumn 2026 start.

---

## Q3. What do recent learner reviews and discussions praise or criticize in beginner AI-coding courses?

### Takeaway
Very little new learner feedback was dated inside 25 Sept to 21 Oct 2026. The Coursera review pages checked have no reviews from Sept or Oct; the latest are from Aug 2026 (Scrimba) and Apr 2026 (CU). Recent reviews and discussions still sharpen the baseline critiques, though:
- **Tool churn breaks courses.** One review notes a course is built on Cursor 1.x and a feature it teaches is deprecated.
- **Setup and free credits.** Learners struggle with API keys and burn through free credits.
- **Assessment mismatch.** Quizzes don't match the tutorial.
- **Pace.** Courses go too fast or skip steps for non-coders, or else are too basic.

An early-Oct 2026 Hacker News thread converges on process discipline for working with agents: small reviewable chunks, specs first, humans own the tests, a second model reviews, and scrutiny scales with the stakes.

### Cited Findings

**Coursera reviews (fetched 21 Oct; none dated Sept or Oct 2026)**
- Scrimba "Vibe Coding Essentials" specialization reviews page: 4.4 average from 49 reviews across 5 courses (68% 5★, 17% 4★, 6% 3★, 4% 2★, 5% 1★). The most recent reviews are 3–4 Aug 2026. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews)
  - Conflict: the baseline recorded 4.4/5 from 412 reviews on the specialization landing page. The reviews page probably shows a subset; the count is unreconciled.
  - Tool churn: a 4★ review (23 Mar 2026) calls the Cursor course OK as an intro but notes it is based on Cursor 1.x. Reviewers also note deprecated features such as @Web and a changed UI. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews)
  - Pace: a 2★ review (26 Jan 2026) says the teacher goes too fast and skips essential steps. Another 2★ review (8 Oct 2025) calls it the most basic of introductions. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews)
  - Setup and credits: learners without GitHub or Cursor experience struggled with steps like API keys, and some burned through free credits. Quizzes did not always match the tutorial. One reviewer advises skipping the course unless you already have Coursera Plus. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews)
  - Praise: clear, beginner-friendly explanations, hands-on MCP setup examples, and a quick overview of tools. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews)
- CU "Vibe Coding Fundamentals": 4.4 from 29 reviews (65.5% 5★, 13.8% 4★, 13.8% 3★, 6.9% 2★). The latest review is 5 Apr 2026. Praise covers beginner suitability, clear instruction and an "AI coach" section that helped learners refine app ideas. Criticism is mainly "Super basic" (3★, 12 Nov 2025). — [Coursera CU reviews](https://www.coursera.org/learn/vibe-coding-fundamentals/reviews)
  - One review, surfaced in a search summary of a Coursera program-variant page, says a person without programming experience could not learn vibe coding from this course, because terms and tools are explained only briefly. — [Coursera CU reviews (program page)](https://www.coursera.org/programs/dc-1-learning-program-yffpe/learn/vibe-coding-fundamentals/reviews)

**Hacker News (in window)**
- "Ask HN: Is anybody producing good code with coding agents?" (about 3 Oct 2026, i.e. 18 days before 21 Oct; 29 points, 48 comments). Recurring advice:
  - Have the agent do small chunks you can review quickly.
  - Write specs in Markdown and have agents poke holes in them, or let the agent "grill" you with questions before writing the spec.
  - Act as the architect.
  - Keep control of the unit and integration tests.
  - Use multiple models to argue over a change.
  - Treat the agent as a fast typist who needs a full spec and a gate.
  - Vibe-code only low-stakes tools, audit every hunk you care about, and hand-write mission-critical code with an agent as reviewer.
  - Skeptics report "vibing" themselves into a corner.
  - [HN item 49934037](https://news.ycombinator.com/item?id=49934037)

**Hacker News (just before window, context)**
- "Ask HN: How much coding should beginners learn in the AI era?" (about July 2026, "3 months ago"; 44 points, 60 comments). The consensus is that AI multiplies existing skill, so fundamentals and debugging matter.
  - Cautionary anecdote: a "fix it" prompt changed a test's expected status from 200 to 500 so that the tests passed.
  - A CS professor advises a structured intro course, writing most code by hand, and using AI for debugging and explanation.
  - Others suggest using the LLM to explain code and draw architecture diagrams.
  - A minority view holds that "just enough" coding to call an API is fine.
  - Recommended resources: freeCodeCamp, Guttag's intro textbook, nand2tetris, and building a real project while learning Git and Linux.
  - [HN item 48662310](https://news.ycombinator.com/item?id=48662310)
- An older HN thread, "'Vibe code hell' has replaced 'tutorial hell' in coding education" (boot.dev article, 2025), is still being surfaced in searches. — [HN item 45540313](https://news.ycombinator.com/item?id=45540313)

**Market signal (indirect learner feedback)**
- Third-party courses now sell credit saving as a feature ("Every Feature, Fewer Credits" for Lovable and Bolt). This implies that credit burn on platform free or paid tiers is a widespread learner pain point. — [FindSkill Bolt.new course](https://findskill.ai/courses/bolt-new-ai-app-builder/)

**Research on novices (context, not in window)**
- "Can you feel the vibes?" (arXiv 2512.02750, ACM): in a study of novice programmers, inexperienced students interacted through prompts more, wrote vaguer prompts, and reviewed or amended code less often than advanced students (search summary). — [arXiv 2512.02750](https://arxiv.org/html/2512.02750); [ACM DL](https://dl.acm.org/doi/10.1145/3786580.3786992)
- "From Prompting to Verification: How Experience Shapes Vibe Coding Practices" (arXiv 2605.24521, May 2026). Its title frames the novice-to-expert shift as moving from prompting to verification. Content was not fetched. — [arXiv 2605.24521](https://arxiv.org/html/2605.24521v1)

### Inferences
- Four complaints recur from the baseline through this round: recorded UIs go stale (Cursor 1.x), setup with keys and credits trips non-coders, quizzes drift from content, and pacing misses both extremes. Each is cheap to address in a course whose materials live in a repo (dated, versioned handouts; a setup week; quizzes generated from the current lab).
- The HN practitioner consensus (small chunks, spec first, own the tests, second-model review) matches what novice research finds novices skip: review and verification. That supports grading verification behaviour, not only working apps.
- The 200→500 anecdote is a ready-made teaching case: an agent "fixed" a failing test by changing what the test expects, so it passed without the bug being fixed.

### Gaps
- No Reddit threads (r/vibecoding, r/learnprogramming) dated in the window were retrieved; searches returned none, as in the baseline.
- No X or LinkedIn learner posts dated in the window were found.
- Class Central reviews were blocked (403).
- No Coursera reviews dated Sept or Oct 2026 appeared on the pages checked, and the Google "Vibe Coding for Beginners" and Vanderbilt course reviews were not re-checked this round.
- No feedback yet on the new GitHub Copilot app course (launched 28 Sept).

---

## Q4. Any new free resources worth assigning as pre-work or supplementary material (short, high-quality, beginner-safe, free)?

### Takeaway
Few *new* free beginner resources appeared in the window. These are the most assignable free items found or newly characterized this round:
- **Pre-work:** Anthropic's tool-agnostic **AI Fluency: Framework and foundations** (4 h) and **AI capabilities and limitations** (3.5 h).
- **Short non-technical video:** OpenAI's **Codex for Beginners** replay (Apr 2026).
- **Free, beginner-labeled hands-on:** Scrimba **Learn to Code with AI** (4.5 h).
- **Stretch only (Git, npm, possibly a paid plan):** GitHub's **Copilot app for Beginners** (28 Sept 2026).
- **Instructor reference for a security week:** Google's **secure agentic coding codelab** (60 min), too advanced to assign directly.

### Cited Findings
- **AI Fluency: Framework and foundations**: 14 lessons, 1 quiz, 4 h, built on the 4D framework (Delegation, Description, Discernment, Diligence). **AI capabilities and limitations**: 13 lessons, 1 quiz, 3.5 h, a mental model of what LLMs can and can't do. Both are free and need no coding. — [academy.claude.com, fetched 21 Oct 2026](https://academy.claude.com/); [Anthropic Skilljar](https://anthropic.skilljar.com/)
- **Building effective human-agent teams (beta)**: 45 min, 5 lessons. It covers moving from single-player to multiplayer AI, and it is new to the catalog (date unknown). It is short enough for optional reading in the agents or teamwork week. — [academy.claude.com](https://academy.claude.com/)
- **Codex for Beginners** (OpenAI Academy): a recorded livestream from 21 Apr 2026 for people with no technical background, with a replay video. Which ChatGPT plan is needed to follow along with Codex was not verified. — [Codex for Beginners video](https://academy.openai.com/public/videos/codex-for-beginners-2026-04-22)
- **Scrimba Learn to Code with AI**: free, Beginner, about 4.5 h, ChatGPT-based HTML/CSS/JS mini-projects (hours from a third-party review site). — [scrimbaguide.tech](https://scrimbaguide.tech/docs/courses/ai/); [Scrimba](https://scrimba.com/learn/aicoding)
- **GitHub Copilot app for Beginners** (28 Sept 2026): free, open source, setup plus 7 chapters, with a glossary, analogies and assignments. It needs a Copilot plan or your own model provider; Copilot Free is unconfirmed. — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
- **GitHub Copilot CLI for Beginners** (baseline, Mar 2026): still the more free-tier-safe GitHub option, since it states that Copilot Free works. — [MS Dev blog](https://developer.microsoft.com/blog/get-started-with-github-copilot-cli-a-free-hands-on-course/)
- **Kaggle 5-Day AI Agents: Intensive Vibe Coding Learn Guide**: self-paced, with free Kaggle and AI Studio accounts. Sign-up requires a phone number, and the Day 5 codelabs may need billing. — [Kaggle Learn guide](https://www.kaggle.com/learn-guide/5-day-agents-vibecoding); [i-programmer, 1 Jul 2026](https://www.i-programmer.info/news/150-training-a-education/18975-vibe-coding-from-google-on-kaggle.html)
- **"Vibecode and Secure an AI Agent Lifecycle with Antigravity and TDD"** codelab: about 60 min, runs locally with a Gemini API key, and teaches secret scanning, pre-commit gates, STRIDE and TDD. It assumes Python, Pytest and terminal skills. — [Google Codelabs](https://codelabs.developers.google.com/secure-agentic-coding)
- **CC for Everyone**: free content, but it requires Claude Pro. It has a good format for non-coders (lessons run as slash commands inside the tool). Optional, for learners who already pay. — [ccforeveryone.com](https://ccforeveryone.com/)
- **easy-vibe (Datawhale)**: an open-source Chinese-language Vibe Coding 101 for "AI product builders". Possibly useful for Chinese-speaking learners; quality not reviewed. — [GitHub: easy-vibe](https://github.com/datawhalechina/easy-vibe)
- **HN "Is anybody producing good code with coding agents?"** (about 3 Oct 2026): a short, current practitioner discussion. It could be assigned as a discussion reading in a verification week, with the caveat that it is written by and for developers. — [HN item 49934037](https://news.ycombinator.com/item?id=49934037)

### Inferences
- For Week 0 pre-work, the Anthropic AI Fluency and Capabilities courses are the most tool-agnostic and churn-resistant free options found. They teach judgment ("discernment") rather than UI clicks, which addresses the staleness complaints in Q3.
- GitHub's new course is a model *document* (template, analogies, glossary) more than an assignable beginner resource, because its prerequisites and plan requirement are unclear.
- The Google security codelab is too advanced to assign. Its ideas can be simplified for beginners (see Q5).

### Gaps
- Copilot Free compatibility for the Copilot app course is unconfirmed.
- Codex plan requirements for the OpenAI beginner replay are unconfirmed.
- No new free short beginner video series (YouTube) dated in the window was identified.

---

## Q5. Concrete, transferable ideas (with evidence) for improving a beginner 8-week course

### Takeaway
The new evidence points to cheap, structural changes rather than new content:
- A fixed chapter template with analogies, a glossary and an assignment.
- A visible "trust the evidence" review loop (diff, test, preview).
- Inner and outer loop framing.
- Seeded practice issues in a forkable course repo.
- Prompt notes as a graded deliverable, and a presentation finale.
- Light fundamentals woven into the weeks (as Campus does).
- Dated, versioned tool handouts to survive churn.
- An explicit free-credit budget.
- Beginner-sized security gates.
- An optional "rebuild it cheaper or locally" lab.

### Cited Findings and design ideas
1. **Fixed per-lesson template.** Every chapter in the GitHub Copilot app course follows the same sequence: why it matters, a real-world analogy, core concepts, hands-on, takeaways, assignment, plus a course-wide glossary. — [MS Dev blog, 28 Sept 2026](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/). This addresses the "terms explained too briefly" critique. — [Coursera CU reviews](https://www.coursera.org/programs/dc-1-learning-program-yffpe/learn/vibe-coding-fundamentals/reviews)
2. **A named review loop: "trust the evidence".** After each agent change, check the diff, run the tests, and preview the app. — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/). Practitioners in early Oct 2026 say the same: small chunks you can review, and keep control of the tests. — [HN 49934037](https://news.ycombinator.com/item?id=49934037). Use the 200→500 test-tampering anecdote as the cautionary case. — [HN 48662310](https://news.ycombinator.com/item?id=48662310)
3. **Inner and outer loop framing.** The inner loop is change → diff → test → preview. The outer loop is issue → PR → review → checks. Teach the inner loop in weeks 2–4 and the outer loop (GitHub issues and PRs) in weeks 5–6. — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
4. **Plan before autopilot.** The GitHub course teaches three session modes (Interactive, Plan, Autopilot). — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/). HN practitioners advise specs first and letting the agent "grill" you before you write the spec. — [HN 49934037](https://news.ycombinator.com/item?id=49934037)
5. **A forkable course repo with seeded practice issues and PRs.** The GitHub course's setup chapter has learners fork the repo and seed practice issues and PRs, so the outer loop can be practised on realistic tasks from day one. — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/)
6. **One running sample app across chapters.** Both GitHub beginner courses use one book-collection app throughout. Pair this with the near-universal "second app with the same process" pattern from the baseline. — [MS Dev blog](https://developer.microsoft.com/blog/github-copilot-app-for-beginners/); [MS Dev blog, CLI course](https://developer.microsoft.com/blog/get-started-with-github-copilot-cli-a-free-hands-on-course/)
7. **Prompt notes in the capstone, and a presentation finale.** Campus's flagship deliverable requires clean docs, version history and *prompt notes*, and week 8 is "deploying and presenting applications to the class". — [Campus](https://campus.edu/vibe-coding)
8. **Weave light fundamentals into the weeks.** Campus's 8-week non-technical syllabus includes core Python constructs, HTML/CSS/JS, version-control tools, frameworks and API integration. — [Campus](https://campus.edu/vibe-coding). HN discussion stresses that debugging and judgment depend on fundamentals. — [HN 48662310](https://news.ycombinator.com/item?id=48662310)
9. **Version-stamp tool instructions and refresh them each term.** Reviews criticize a course built on Cursor 1.x with deprecated features. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews). Independent reviewers flag courses recorded before protocol changes (MCP). — [scrimbaguide.tech](https://scrimbaguide.tech/docs/courses/ai/). Providers re-record (Scrimba Learn AI Agents, Oct 2026) and update quietly (DLAI updates in Jul–Sept 2026). Keep click-paths in dated Markdown handouts and give each lab a "tested on <date>, tool version" line. — [scrimbaguide.tech](https://scrimbaguide.tech/docs/courses/ai/); [DLAI Cloud to Local](https://www.deeplearning.ai/courses/ai-coding-workflows-from-cloud-to-local)
10. **Quizzes generated from the current lab.** Learners complain that quizzes don't match the tutorial. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews)
11. **Teach a free-credit budget explicitly.** Learners burned through free credits during setup. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews). Third-party courses now sell credit saving. — [FindSkill](https://findskill.ai/courses/bolt-new-ai-app-builder/). Practical moves: plan in a free chatbot first, batch requests, and switch tools when a quota runs out.
12. **Account-setup week (Week 0).** Kaggle and AI Studio sign-up needs a phone number, and some deploy steps need billing. — [i-programmer](https://www.i-programmer.info/news/150-training-a-education/18975-vibe-coding-from-google-on-kaggle.html). API-key setup tripped Coursera learners. — [Coursera Scrimba reviews](https://www.coursera.org/specializations/vibe-coding/reviews). Front-load and test every account before Week 1, and offer a no-phone fallback tool.
13. **Beginner-sized security gates**, simplified from Google's secure agentic coding codelab. — [Google Codelabs](https://codelabs.developers.google.com/secure-agentic-coding)
    - A plain-English security-rules section in the project's context file (CLAUDE.md, AGENTS.md or copilot-instructions).
    - A "Security boundaries" heading required in every plan.
    - A secrets check before every commit, plus GitHub's built-in secret scanning.
    - A simple lesson on why local checks can be bypassed (`--no-verify`).
14. **Optional "rebuild it cheaper or locally" stretch lab.** The DLAI and JetBrains course rebuilds one app with cheaper subagents, then OpenRouter, then a fully local LM Studio model. Present it as a hedge against free-tier limits, optional because it needs capable hardware. — [DLAI Cloud to Local](https://www.deeplearning.ai/courses/ai-coding-workflows-from-cloud-to-local)
15. **Second-model review.** HN practitioners report that having a different model review a change catches more than a single reviewer does. For free-tier learners: paste the diff into a second free chatbot and ask what could break. — [HN 49934037](https://news.ycombinator.com/item?id=49934037)
16. **Scrutiny proportional to stakes.** Vibe-code throwaway tools and audit what matters. Make this explicit as a rubric dimension: the learner states the stakes for each project and the matching review level. — [HN 49934037](https://news.ycombinator.com/item?id=49934037)
17. **In-tool lessons as a delivery format.** CC for Everyone runs each lesson as a slash command inside the coding tool. A free-tools course could ship lesson prompts or "skills" files in the starter repo that the learner runs inside Copilot or Gemini CLI. — [ccforeveryone.com](https://ccforeveryone.com/)
18. **Tool-agnostic pre-work on judgment.** Assign Anthropic's AI Fluency (the 4D framework, including "Discernment") and Capabilities and Limitations as Week 0 reading, so learners arrive with a verification mindset. — [academy.claude.com](https://academy.claude.com/). This directly targets the novice pattern of more prompting and less reviewing. — [arXiv 2512.02750](https://arxiv.org/html/2512.02750)

### Inferences
- The most valuable change for an existing course is probably to make **verification visible and graded**: the diff, test and preview loop; prompt notes; a stakes statement; a second-model review. Review and verification are what novices skip (research), what practitioners stress (HN), and what new vendor curricula are built around (GitHub's "trust the evidence").
- Tool churn is the most cited fixable complaint. A repo-based, date-stamped handout system plus a per-term refresh pass is low cost and answers it directly.
- The market still has almost no free, 8-week, multi-tool beginner course. Campus charges $1,500, and the Maven and Designlab programs run 2.5–4 weeks on paid stacks. The existing course's niche is intact as of 21 Oct 2026.

### Gaps
- None of these ideas has outcome data (completion, learning gains) from the providers. Evidence is design precedent, reviews and practitioner opinion, not controlled studies.
- It is unverified whether GitHub's "trust the evidence" loop works for learners without Git or npm experience.
