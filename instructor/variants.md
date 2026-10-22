# Course variants

> How to adapt Vibe Coding 101 for small cohorts and one-student Directed Study, fewer credits, a 16-week semester, younger or European cohorts, other schedules, online delivery, a budget, or experienced programmers.

The standard course is **3 credits in eight accelerated weeks**: adult beginners (18+), in person, a cohort of 5 or more, **two 3-hour studios a week** (Studio A — Learn & build, Studio B — Workshop) plus about 11 hours outside class, at $0. Each section below changes one of those assumptions. The **Safe Loop, the AI policy, the six skills without AI and the oral walkthroughs stay the same in every variant.** They are the course; the tools and schedule are adjustable.

Tool rules (ages, regions, limits) are in [TOOLS.md](../TOOLS.md). Re-check them for your cohort using the [pre-cohort checklist](pre-cohort-checklist.md).

## Small cohorts and one-student Directed Study

The standard course assumes at least five students, because several activities need a partner, an audience or a second examiner. With fewer, keep every graded component and its weight, and substitute as below. Settle the substitutions in week 1 and post them on Canvas, so the student knows exactly how each rubric row will be met.

| Activity | 1 student | 2–4 students | 5–10 students |
|---|---|---|---|
| Studio format | A 1–1.5 hour meeting for each studio (or one longer weekly meeting); the student does the rest of each lab on their own from `lab.md`, with a short check-in halfway | Standard 3-hour studios, or 2 × 90 minutes per studio | Standard |
| Show and tell | The student demos to the instructor every week | Rotate | Standard |
| Peer explanation swap (weeks 2 and 4) | Explain one function to the instructor, or record a 2-minute screen video | Rotate partners | Standard |
| Week 3 spec review and week 7 code review | Review the instructor's practice spec or repo, which has known, keyed issues; the "Accurate" row is graded against the key | Review each other, plus the practice repo for one of the two reviews | Standard |
| Be the Agent | The instructor plays the Model, the student the Harness; then swap | Pairs; with three, one Harness and one call-log keeper | Standard |
| Handoff test (week 7) | The instructor, or an outside volunteer with a fresh GitHub account | Standard | Standard |
| Capstone pull-request review (for the top band of the Process row) | Instructor review, or a documented self-review against [CODE_REVIEW.md](../templates/CODE_REVIEW.md) | A classmate | Standard |
| Pairs | Not available | Only if neither partner has to review the other's graded work alone | Standard |
| Project Fair | A public demo slot (a department seminar, a lab meeting, invited staff) plus three outside testers using the feedback card on made-up data; no voting | A combined fair with another course's or department's demo hour; voting optional | Standard |
| Exit tickets | Keep; the 1-minute scan becomes a 5-minute conversation | Keep | Keep |
| Two-question and mid-course surveys | A 10-minute one-to-one conversation instead | A form, but report nothing below 5 answers | Standard |
| Self-assessment summary | Compare pre and post with the student only | Don't share class-level results | Share only if at least 10 students took it |
| Walkthrough second opinion | Record with consent; a department colleague reviews disputed scores | Same | A TA does one calibration on a recording |

**Worth adding for a small cohort:** short weekly code-review conversations alongside the three walkthroughs ([optional variant](../assessment/oral-walkthroughs.md#optional-variant-short-weekly-code-reviews)). With one to four students they cost little, and a CS1 course that held weekly oral reviews kept exam scores steady while AI pasting rose ([Fowles et al.](https://arxiv.org/abs/2605.21374)).

**Hours still count.** A one-student Directed Study at 3 credits is still about 135 hours of student work. The shorter meetings move studio time to supervised independent work, not out of the course: the student still does both studios' labs each week.

## 1-credit and 2-credit versions

A credit is about 45 hours of student work (catalog Regulation D-1). Cut breadth and practice time, never the loop: keep the Safe Loop in every lab, the AI-free exit tickets, all three oral walkthroughs, the Debug Clinic, the RLS Attack Lab and the Project Fair.

| | 1 credit | 2 credits | 3 credits (standard) |
|---|---|---|---|
| Hours in all | about 45 | about 90 | about 135 |
| Each week, over 8 weeks | one 3-hour studio + about 3 hours outside (about 6 h) | Studio A (3 h) + a 90-minute Studio B + about 6–7 hours outside (about 11 h) | two 3-hour studios + about 11 hours outside (about 17 h) |

### 1 credit: one studio a week

This is the course's **original design**. Each week is one 3-hour studio: show and tell (10 min), concept talk (20), live demo (10), lab (100, with a break), debrief (25), exit ticket (15). Homework is the core tier only, about 3 hours.

**What to cut** (or move to optional stretch):

- **Studio B as a block.** Keep its exit ticket, at the end of the single studio, and one show-and-tell slot.
- **Pre-work and practice extras:** the AI fluency pre-work, the prompt makeover, the two-model comparison and the hidden-costs checklist become optional.
- **Week 3:** run the bake-off as one builder plus a chat assistant, as an instructor demo or homework.
- **Week 4:** "You write it" shrinks to one feature card (20 minutes); the first automated test becomes a worked example to read.
- **Weeks 5–7 mini-lessons:** the external API mini-lesson, the feature clinics and the Supabase connection worked example aren't taught. Students who want charts, external APIs or a database follow the capstone starter's documented patterns on their own.
- **Week 6:** the branches and pull-requests mini-lesson and the `AGENTS.md` trial become stretch. Without pull requests, **pairs aren't available**.
- **Week 7:** keep the AI-off maintenance task (20 minutes) and drop the handoff test and the injection demo.
- **Capstone:** smaller scope. At least two feature types, built from the starter's patterns, one feature at a time.

**Grading:** the same components and weights. The in-class component has 8 studios, with the lowest one dropped. Staff time is about 58–66 hours for 10 students over 8 weeks, without a TA ([staffing](README.md#staffing-and-workload)).

### 2 credits: a shorter Studio B

Keep Studio A as it is. Studio B becomes **90 minutes**: show and tell (10), the week's mini-lesson and guided practice (50), exit ticket (15), plus 15 minutes of catch-up help. Oral walkthroughs move to office hours or booked slots in weeks 4, 6 and 8.

**What to cut:** the AI fluency pre-work and the prompt makeover become optional; Studio B's "lab continued" parts move into homework; the feature clinic becomes one 20-minute demo of the starter's chart and external-API patterns; every "If time" lab part is dropped. Keep the branches and pull-requests mini-lesson, the AGENTS.md trial, the Supabase worked example and the capstone scope, so pairs remain possible.

**Grading:** the same components and weights, with 16 studio scores (lowest two dropped).

## 16-week semester version

The same 3-credit content at about **8.5 hours a week** for a full semester: **one 3-hour studio a week** plus about 5.5 hours outside class. Each course week takes two semester weeks: its Studio A in the first, its Studio B in the second.

| Semester weeks | Course content | Walkthrough and milestones |
|---|---|---|
| Before week 1 | Week 0 pre-work ([first-hour quick start](../setup/README.md#before-studio-1)) | — |
| 1–2 | Week 1: Studio A, then Studio B | — |
| 3–4 | Week 2 | — |
| 5–6 | Week 3 | — |
| 7–8 | Week 4 | Walkthrough 1 in week 8 |
| 9–10 | Week 5 | Capstone pitch due 72 hours before the week 11 studio |
| 11–12 | Week 6 | Walkthrough 2 in week 12; Milestone 1 at the end of week 12 |
| 13–14 | Week 7 | Milestone 2 at the end of week 14 |
| 15–16 | Week 8 | Walkthrough 3 in week 15; Project Fair and final submission in week 16 |

- **Homework** for a course week is split across its two semester weeks: the parts that need Studio A's skills are due before the Studio B week, the rest before the next Studio A week.
- **Exit tickets** run at the end of every studio (16 in all). The delayed-recall question asks about the project from the previous course week, which is now two semester weeks back: an advantage, because recall after a longer gap is the better check.
- **Grading** is unchanged: 16 studios, lowest two dropped.
- **Tools drift over four months.** Run the [mid-course re-check](pre-cohort-checklist.md#mid-course-re-check-before-week-5) around semester week 8. Copilot allowances reset monthly, so the agent weeks may span two resets. Free databases pause when unused (see TOOLS.md), so students should open their capstone database at least weekly in weeks 13–16.

## Under-18 cohorts

Several tools in the primary stack are **18+ only**: Claude, Google AI Studio and the Gemini API, and Google Antigravity (see the age column in [TOOLS.md](../TOOLS.md)). With any student under 18 in the class, replace them for **everyone**, so the class can work, help each other and be taught as one group.

| Layer | Standard stack | Under-18 stack |
|---|---|---|
| Chat assistant with preview (weeks 1–3) | Gemini Canvas; ChatGPT; Claude | **Gemini** (13+) and **ChatGPT** (13+ with parental consent). No Claude. Both give under-18 users a separate teen experience |
| App builder (week 3) | Google AI Studio *Build*; Bolt; Lovable, v0 or Replit | No AI Studio. **Check each builder's age terms before you use it:** the course's research did not verify them. If none is suitable, run the bake-off as Gemini Canvas versus ChatGPT on the same spec |
| Editor and agent (weeks 4–8) | Copilot; Antigravity; Cline or Kilo Code | **Copilot only** (Copilot Free, or Copilot Student for verified students), in Codespaces. GitHub accounts are generally 13+; confirm the current terms |
| Terminal agent (weeks 6–8) | Copilot CLI; Antigravity CLI; OpenCode | **Copilot CLI only** |
| LLM API in apps (weeks 5–8) | Gemini API free tier; Groq; OpenRouter | **No Gemini API free tier.** Use an instructor-managed key behind your own proxy, or a non-LLM public API (below) |
| Hosting and database | GitHub Pages; Vercel; Supabase | GitHub Pages unchanged. **Check Vercel's and Supabase's minimum-age terms** (not verified in the research) |

### Week 5 without a student-held LLM key

**Option A (preferred): an instructor-managed key behind your own proxy.** You, an adult, hold the provider account and key. You deploy a small server (a "proxy") that:

- accepts the same OpenAI-style requests the starter sends (`POST /chat/completions`, and `GET /models` if you want `npm run models` to work);
- checks the `Authorization` header against a list of per-student **class tokens** that you hand out;
- limits input length and requests per token per day;
- forwards allowed requests to the provider, using the real key stored in the proxy's environment variables.

Students set `LLM_BASE_URL` to your proxy's address and `LLM_API_KEY` to their class token. The week's lesson survives intact: the class token is still a secret that must live on the server, never in the browser or in git. Choose a provider whose terms allow this use, set a hard spending cap on the provider account, keep logs minimal, and revoke all tokens when the course ends.

**Option B: skip the LLM and use a non-LLM public API.** Replace the LLM call with a public data API (weather, public transport, a museum collection, and so on), called from the starter's server route. Requests, responses, JSON, environment variables and deployment are all still taught. If the API needs a free key (check its age terms), the secrets lesson is unchanged. If it needs no key, keep a practice value in `.env` so students still learn the pattern. The provider-swap drill becomes "switch between two APIs that return similar data", or is skipped.

For the capstone's feature list, "a server-side API call with a hidden key" can use either option.

### Consent, devices and safeguarding

- **Parental consent.** Before week 0, send parents a letter listing each tool and account students will create, what data those tools collect, the privacy settings students will change ([privacy-settings.md](../setup/privacy-settings.md)), that project repositories are public (while grades and personal writing stay on the course's learning platform), and the course's rules against personal data. ChatGPT requires parental consent for ages 13–17.
- **School devices and networks.** Content filters often block Codespaces or AI sites. Test on an actual student device on the school network during the [smoke test](pre-cohort-checklist.md#t-1-week-smoke-test), and ask IT in advance to allow `github.com`, `*.github.dev`, `*.app.github.dev`, `*.githubusercontent.com`, `registry.npmjs.org` and the chat assistant you'll use.
- **School accounts.** If your school provides Google accounts with Gemini enabled by the school, ask your IT administrator which terms apply; a school-managed account may be preferable to personal accounts for minors.
- **Identity and privacy.** Students use **pseudonymous** GitHub usernames, with no real names, photos or school name in public profiles or repositories. The week 1 "home page" becomes a portfolio of projects, not a biography.
- **Projects.** No sign-up forms, chat features or data collection aimed at other minors. Capstones that use sign-in use test accounts only.
- **Agents.** Agent work happens only in Codespaces, with every command approved by the student.

## EEA, UK and Swiss cohorts

**The Gemini API's free tier.** Google's terms say that apps offered to users in the European Economic Area (EEA), Switzerland or the UK must use its **paid** services ([Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms)). A student's public app, running on a free Gemini key and used by classmates in those regions, doesn't fit that rule. So from week 5:

- Make **Groq** the primary LLM API, with **OpenRouter** free models or **Cloudflare Workers AI** as fallbacks. The starter switches providers by changing three environment variables, so no code changes.
- In your copy of TOOLS.md, reorder the LLM API row for your cohort, and list Groq first in the starter's `.env.example`.
- Model names change often: students run `npm run models` to get current IDs.

**Google AI Studio is still usable** (for adults) in week 3 and for experimenting. In these regions, Google applies its paid-service data terms even to free use, so the terms exempt your inputs from being used to improve Google's products. That's a privacy advantage, but the no-personal-data rule still applies.

**Other differences:** most student offers in TOOLS.md are for other countries, and some features of US tools arrive later or not at all in Europe. Check during the smoke test.

### GDPR basics for student projects

The GDPR (and the UK GDPR, and Switzerland's similar data-protection law) applies whenever an app handles **personal data**: any information about an identifiable person, such as a name, an email address, or a photo. A class project isn't exempt just because it's small. Teach these basics in weeks 5 and 7:

- **The best personal data is none.** The course already bans real personal data about other people. Most projects can avoid it completely.
- **If your capstone has sign-in** (for example, with Supabase), you're storing email addresses. Collect only what the app needs. Add a short privacy note to the README and the app (what you store, why, where, and how to get it deleted). Choose an **EU region** when you create the Supabase project. Test with your own addresses, not classmates'.
- **No tracking.** Storage the app needs to work (such as saving a to-do list in `localStorage`) is generally fine. Analytics, trackers and embedded third-party content that set cookies need consent, so leave them out.
- **LLM features send what users type to another company.** Tell users in the interface not to enter personal information.
- **Delete test data** when the course ends.

This is teaching guidance, not legal advice. For anything beyond a class project, students should talk to a data-protection professional, and you can ask your institution's data-protection officer.

## Two sessions per week

Two sessions a week is now the **standard format**: Studio A — Learn & build and Studio B — Workshop, 3 hours each, a few days apart (for example, Tuesday and Thursday). The run sheets for both are in each week's `instructor-notes.md`, and the templates are in the [instructor guide](README.md#running-the-two-studios).

- **Homework is due before Studio A** (default 11:59 pm the night before), so the gap between Studio B and the next Studio A is the main homework time.
- **Keep timed and AI-off activities whole** inside one studio: the **Game in an Hour** (week 2), the **Debug Clinic** (week 4), **Be the Agent** (week 6), the **RLS Attack Lab** and the AI-off maintenance task (week 7).
- **Run oral walkthroughs** in Studio B's project-work block in weeks 4 and 6, and in Studio A's polish sprint in week 8.
- **Give the exit ticket at the end of Studio B,** so it covers the whole week, and open the next Studio A with a recap of its most-missed question.

**Other timetables:**

- **Four 90-minute sessions a week:** split each studio at its break. Studio A's lab continues into the second session; Studio B's exit ticket goes at the end of its second session. Keep the activities above whole within one session.
- **One long session a week:** that's the [1-credit version](#1-credit-and-2-credit-versions), or the [16-week semester version](#16-week-semester-version) if the course keeps 3 credits.

## Online and hybrid delivery

Codespaces makes online teaching easier than usual: everyone's environment is identical, and a TA can look at any student's screen and see exactly what they'd see.

**Online studio:**

- **Concept talk and live demo** by screen share, with the editor zoomed in. Record the concept talk if you like and post it on Canvas only (students may record studios only with your consent or as a CDAR accommodation, FSH 4700 F-8). Don't rely on recordings of tool steps, which go stale within months.
- **Lab** in breakout rooms of three to five students. TAs rotate between rooms.
- **Checkpoints:** students post a screenshot or their preview or live URL in the chat. You can see progress at a glance.
- **Stuck queue:** a dedicated chat channel. Students post their room and one line about the problem; TAs take them in order.
- **Pair work:** the driver shares their screen; swap every 20 minutes.
- **Exit tickets:** a timed form at the end of Studio B, AI-free on trust.

**Oral walkthroughs over video:** camera on; the student shares their whole screen with **Chat: Disable AI Features** ticked ([how](../setup/codespaces.md#turn-copilot-off-for-ai-off-activities)); the student drives. Record only with the student's consent. Details: [online variant](../assessment/oral-walkthroughs.md#online-variant).

**Hybrid:** assign one TA to the online students for the whole session. Use a room microphone, repeat in-room questions aloud, and give online students show-and-tell slots too.

**Across time zones:** record the concept talk, hold office hours at two different times, and give a 24-hour window for exit tickets.

## Self-paced learners

Everything in the course is written to work without an instructor. The published [self-paced path](../resources/self-paced.md) tells learners what replaces each studio activity (show and tell, the live demo, TA help, peer review, exit tickets, oral walkthroughs), what to do instead of each pair activity when working alone, and how to grade themselves with the rubrics. Point self-paced learners there rather than to this page.

The answer keys are public. Opening them early turns an exercise into reading; the self-paced path says to try first.

## Shorter or longer versions

Cut breadth, not the loop: keep the Safe Loop in every lab, keep the AI-free exit tickets, and keep all three oral walkthroughs. For University of Idaho credit, check the hours first: 3 credits is about 135 hours whatever the length, so a shorter course means more hours a week.

### Six weeks

For non-credit workshops, or a 1- or 2-credit course. (Three credits in six weeks would be about 22 hours a week, too much for beginners.)

| Week | Covers | What to cut or merge |
|---|---|---|
| 1 | Weeks 1 and 2: home page, prompting, commits | The **Game in an Hour** becomes homework; teach prompts and commits in one talk |
| 2 | Week 3: spec first; Project 1 v1 | One app builder plus a chat assistant instead of a full bake-off |
| 3 | Week 4: Debug Clinic; Project 1 final | Walkthrough 1 |
| 4 | Week 5: APIs, secrets, deployment | Capstone pitch due at the end of the week |
| 5 | Weeks 6 and 7: agents and security | A shortened **Be the Agent**; capstone kickoff; the **RLS Attack Lab**. The injection demo stays an instructor demo; the handoff test is dropped. Walkthrough 2 |
| 6 | Week 8: ship it | **Project Fair**; walkthrough 3. Consider a smaller capstone scope |

### Ten to twelve weeks

Add **practice time**, not more tools. Beginners gain most from repeating the loop on their own projects. At 3 credits, ten weeks is about 13.5 hours a week and twelve weeks about 11, so run one studio a week plus a shorter workshop session, as in the [2-credit version](#2-credits-a-shorter-studio-b).

| 10-week | 12-week | Covers |
|---|---|---|
| 1 | 1 | Week 1 |
| 2 | 2 | Week 2 |
| 3 | 3 | Week 3 |
| 4 | 4 | Week 4 (Debug Clinic, walkthrough 1) |
| 5 | 5 | **Project 1 studio:** polish, peer code review, first pull requests |
| 6 | 6 | Week 5 |
| — | 7 | **Data and APIs:** a public API, a data visualization; optional local models |
| 7 | 8 | Week 6 (Be the Agent, walkthrough 2) |
| — | 9 | **Agents in depth:** `AGENTS.md`, context, MCP; stretch: build a tiny agent |
| 8 | 10 | Week 7 (RLS Attack Lab) |
| 9 | 11 | **Capstone sprint:** testing, accessibility, handoff to a partner |
| 10 | 12 | Week 8 (Project Fair, walkthrough 3) |

## Classes with a budget

**Principles:**

- The course must still work at $0. Anything you buy is an upgrade, not a requirement.
- **Buy for everyone or no one.** Never let a paid tool give some students a grading advantage.
- Avoid vendor promotions that need a student's credit card or might end mid-course. A Stanford week built on a free student offer can no longer be reproduced because the offer closed ([landscape report](../research/landscape-report-2026-09.md)).

**What to buy first** (prices are in [TOOLS.md](../TOOLS.md)):

1. **GitHub Copilot Pro for every student.** It gives model choice and a bigger monthly allowance for weeks 4–8, which removes the "out of credits" stoppages. Best if your smoke test or last cohort hit Copilot limits.
2. **Or one month of a frontier coding agent** (Claude Pro for Claude Code, or ChatGPT Plus for Codex), timed to weeks 6–8, exactly when agent work begins. Claude is 18+.

The cheaper chat-only upgrades mostly raise chat limits and add little for coding ([landscape report](../research/landscape-report-2026-09.md)).

**Other good uses of money:**

- **TA hours.** Our judgment: if you must choose between subscriptions and staff, fund staff. The oral walkthroughs and lab support are what the course relies on for learning, and the two-studio format doubles studio hours.
- **A paid LLM API budget** for the class, especially for EEA, UK and Swiss cohorts who want Gemini, with a hard spending cap set on the account.
- **Loaner laptops or hotspots** for students who need them.
- **Institutional AI plans** (education versions of Claude, ChatGPT or Gemini), if your institution offers them. Check that the allowance really covers a whole course: UChicago's free institutional plan ran short from week 2, and students had to buy their own ([UChicago](https://mpcs-courses.cs.uchicago.edu/2025-26/spring/courses/mpcs-51238-1)).

**Don't buy:** app-builder subscriptions for the whole class (one week uses them), or anything on TOOLS.md's [do-not-use list](../TOOLS.md#do-not-use-in-this-course). Organization-paid Codespaces put repositories in an organization, and Vercel's free plan can't deploy **private** organization repositories.

## Experienced programmers

For students who already program (computer science students, working developers), the tools are easy, and the risks are overconfidence and skipped checking. In METR's trial, experienced developers were 19% slower with AI while believing they were faster ([METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)). Veracode found that newer models haven't improved the security of generated code ([Veracode Spring 2026](https://www.veracode.com/blog/spring-2026-genai-code-security/)). Experience doesn't exempt anyone from the Safe Loop.

- **Compress weeks 1–3 into one week:** home page, game and spec together. Keep the spec work and its Goldfish test: CMU students rated writing a spec harder than managing the agents ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)).
- **Move terminal agents to week 4** and spend the saved time on weeks 6–8.
- **Harder Debug Clinic:** pick the hardest variants from the bug menu ([answer keys](answer-keys/README.md)), and time-box them.
- **Be the Agent, then build the agent:** after the exercise, students write a minimal agent loop against a raw API. Stanford's CS146S opens with a roughly 200-line agent ([CS146S](https://themodernsoftware.dev/)); Michigan uses a deliberately small local model so sloppy engineering shows ([UMich EECS 498](https://eecs498-aase.github.io/syllabus.html)).
- **More agent engineering:** write an MCP server; write an `AGENTS.md` for a messy repository they didn't write and test whether the agent follows it ([Stanford CS146S, week 4](https://github.com/mihail911/modern-software-dev-assignments/blob/a6dcbf2090/week4/assignment.md)); spec-driven work split across several agents; continuous integration running the tests on every push.
- **Review:** compare their own pull-request review with an AI reviewer's (a Stanford assignment type); threat-model the capstone in week 7.
- **Grade robustness over demos,** as Utah does: credit edge cases, how features interact, and taste ([Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)).
- **Keep** `PROMPTS.md`, the AI-free work and the oral walkthroughs, with harder questions: modify unfamiliar code, find a planted bug.

In a mixed class, give experienced students the stretch tier and reviewer roles instead of a separate track ([README.md](README.md#stretching-advanced-students)).
