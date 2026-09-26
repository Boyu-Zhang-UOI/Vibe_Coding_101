# Course variants

> How to adapt Vibe Coding 101 for younger or European cohorts, other schedules, online delivery, self-paced learners, a budget, or experienced programmers.

The standard course assumes adult beginners (18+), in person, eight weekly 3-hour studios, at $0. Each section below changes one of those assumptions. The **Safe Loop, the AI policy, the six skills without AI and the oral walkthroughs stay the same in every variant.** They are the course; the tools and schedule are adjustable.

Tool rules (ages, regions, limits) are in [TOOLS.md](../TOOLS.md). Re-check them for your cohort using the [pre-cohort checklist](pre-cohort-checklist.md).

## Under-18 cohorts

Several tools in the primary stack are **18+ only**: Claude, Google AI Studio and the Gemini API, and Google Antigravity (see the age column in [TOOLS.md](../TOOLS.md)). With any student under 18 in the class, replace them for **everyone**, so the class can work, help each other and be taught as one group.

| Layer | Standard stack | Under-18 stack |
|---|---|---|
| Chat assistant with preview (weeks 1–3) | Gemini Canvas; ChatGPT; Claude | **Gemini** (13+) and **ChatGPT** (13+ with parental consent). No Claude. Both give under-18 users a separate teen experience |
| App builder (week 3) | Google AI Studio *Build*; Bolt; Lovable, v0 or Replit | No AI Studio. **Check each builder's age terms before you use it:** the course's research did not verify them. If none is suitable, run the bake-off as Gemini Canvas versus ChatGPT on the same spec |
| Editor and agent (weeks 4–8) | Copilot; Antigravity; Cline or Kilo Code | **Copilot only** (Copilot Free, or Copilot Student for verified students), in Codespaces. GitHub accounts are generally 13+; confirm the current terms |
| Terminal agent (weeks 6–8) | Copilot CLI; Antigravity CLI; OpenCode or Aider | **Copilot CLI only** |
| LLM API in apps (weeks 5–8) | Gemini API free tier; Groq; OpenRouter | **No Gemini API free tier.** Use an instructor-managed key behind your own proxy, or a non-LLM public API (below) |
| Hosting and database | GitHub Pages; Vercel; Supabase | GitHub Pages unchanged. **Check Vercel's and Supabase's minimum-age terms** (not verified in the research) |

### Week 5 without a student-held LLM key

**Option A (preferred): an instructor-managed key behind your own proxy.** You, an adult, hold the provider account and key. You deploy a small server (a "proxy") that:

- accepts the same OpenAI-style requests the starter sends (`POST /chat/completions`, and `GET /models` if you want `npm run models` to work);
- checks the `Authorization` header against a list of per-student **class tokens** that you hand out;
- limits input length and requests per token per day;
- forwards allowed requests to the provider, using the real key stored in the proxy's environment variables.

Students set `LLM_BASE_URL` to your proxy's address and `LLM_API_KEY` to their class token. The week's lesson survives intact: the class token is still a secret that must live on the server, never in the browser or in git. Choose a provider whose terms allow this use, keep logs minimal, and revoke all tokens when the course ends.

**Option B: skip the LLM and use a non-LLM public API.** Replace the LLM call with a public data API (weather, public transport, a museum collection, and so on), called from the starter's server route. Requests, responses, JSON, environment variables and deployment are all still taught. If the API needs a free key (check its age terms), the secrets lesson is unchanged. If it needs no key, keep a practice value in `.env` so students still learn the pattern. The provider-swap drill becomes "switch between two APIs that return similar data", or is skipped.

For the capstone's feature list, "a server-side API call with a hidden key" can use either option.

### Consent, devices and safeguarding

- **Parental consent.** Before week 0, send parents a letter listing each tool and account students will create, what data those tools collect, the privacy settings students will change ([privacy-settings.md](../setup/privacy-settings.md)), that project repositories are public, and the course's rules against personal data. ChatGPT requires parental consent for ages 13–17.
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

Split each 3-hour studio into two 90-minute sessions a few days apart. The gap is useful: students start the homework core in between.

| Session A (90 min) | Session B (90 min) |
|---|---|
| Show and tell (10) | Recap and "commit check": everyone shows their last commit (5) |
| Concept talk, 20 minutes maximum (20) | Lab, second half (55) |
| Live demo (10) | Debrief and share-out (15) |
| Lab, first half (50) | Exit ticket and homework preview (15) |

- Homework is due before session A.
- **Keep timed activities whole:** run the **Game in an Hour** (week 2) and the **Debug Clinic** (week 4) entirely inside one session, even if that means moving other lab parts.
- Run **oral walkthroughs** during session B's lab time in weeks 4, 6 and 8.
- Give the exit ticket at the end of session B, so it covers the whole week.

## Online and hybrid delivery

Codespaces makes online teaching easier than usual: everyone's environment is identical, and a TA can look at any student's screen and see exactly what they'd see.

**Online studio:**

- **Concept talk and live demo** by screen share, with the editor zoomed in. Record the concept talk if you like; don't rely on recordings of tool steps, which go stale within months.
- **Lab** in breakout rooms of three to five students. TAs rotate between rooms.
- **Checkpoints:** students post a screenshot or their preview or live URL in the chat. You can see progress at a glance.
- **Stuck queue:** a dedicated chat channel. Students post their room and one line about the problem; TAs take them in order.
- **Pair work:** the driver shares their screen; swap every 20 minutes.
- **Exit tickets:** a timed form at the end of the session, AI-free on trust.

**Oral walkthroughs over video:** camera on; the student shares their whole screen with **Chat: Disable AI Features** ticked ([how](../setup/codespaces.md#turn-copilot-off-for-ai-off-activities)); the student drives. Record only with the student's consent.

**Hybrid:** assign one TA to the online students for the whole session. Use a room microphone, repeat in-room questions aloud, and give online students show-and-tell slots too.

**Across time zones:** record the concept talk, hold office hours at two different times, and give a 24-hour window for exit tickets.

## Self-paced learners

Everything in this course is written to work without an instructor. Plan on about six hours a week for eight weeks (or three hours a week for sixteen).

1. Do the [week 0 pre-work](../setup/README.md).
2. Each week: read the week's `README.md` (especially **Key ideas**), go through `slides.md`, do `lab.md` (about two hours), then the core tier of `homework.md` (about three hours), and finish with the AI-free [reflection](../templates/REFLECTION.md).

| In class | On your own |
|---|---|
| Show and tell | Post your project in the course repository's Discussions, or show a friend and explain one thing the AI got wrong |
| Concept talk | `slides.md` and the README's Key ideas |
| Live demo | Do the lab's first part slowly, with the [Safe Loop](../resources/safe-loop.md) card in front of you |
| A TA when you're stuck | [Troubleshooting](../resources/troubleshooting.md), the two-strikes rule, then tutor mode ([course-tutor.md](course-tutor.md)) |
| Peer review | Find a study buddy, or review someone's public project with the [review checklist](../templates/CODE_REVIEW.md) and compare with an AI review |
| Exit tickets | Answer the week's questions in [exit-tickets.md](../assessment/exit-tickets.md) with the AI off, **before** looking anything up |
| Oral walkthroughs | Record a 3–5 minute video: explain one function, change something live, and explain an error. Or use the "quiz me" prompt in [course-tutor.md](course-tutor.md#a-second-prompt-quiz-me) |
| Debug Clinic | AI off for 10 minutes per bug, then the hint cards, then tutor mode, and the answer key last |
| Grades | Score yourself with the [rubrics](../assessment/rubrics.md) |

The answer keys are public. Opening them early turns an exercise into reading. Try first.

## Shorter or longer versions

Cut breadth, not the loop: keep the Safe Loop in every lab, keep the AI-free exit tickets, and keep all three oral walkthroughs.

### Six weeks

| Week | Covers | What to cut or merge |
|---|---|---|
| 1 | Weeks 1 and 2: home page, prompting, commits | The **Game in an Hour** becomes homework; teach prompts and commits in one talk |
| 2 | Week 3: spec first; Project 1 v1 | One app builder plus a chat assistant instead of a full bake-off |
| 3 | Week 4: Debug Clinic; Project 1 final | Walkthrough 1 |
| 4 | Week 5: APIs, secrets, deployment | Capstone pitch due at the end of the week |
| 5 | Weeks 6 and 7: agents and security | A shortened **Be the Agent**; capstone kickoff; the **RLS Attack Lab**. The injection demo becomes an instructor demo; the code handoff is dropped. Walkthrough 2 |
| 6 | Week 8: ship it | **Project Fair**; walkthrough 3. Consider a smaller capstone scope |

### Ten to twelve weeks

Add **practice time**, not more tools. Beginners gain most from repeating the loop on their own projects.

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

- **TA hours.** Our judgment: if you must choose between subscriptions and staff, fund staff. The oral walkthroughs and lab support are what the course relies on for learning.
- **A paid LLM API budget** for the class, especially for EEA, UK and Swiss cohorts who want Gemini, with a spending cap set on the account.
- **Loaner laptops or hotspots** for students who need them.
- **Institutional AI plans** (education versions of Claude, ChatGPT or Gemini), if your institution offers them. Check that the allowance really covers a whole course: UChicago's free institutional plan ran short from week 2, and students had to buy their own ([UChicago](https://mpcs-courses.cs.uchicago.edu/2025-26/spring/courses/mpcs-51238-1)).

**Don't buy:** app-builder subscriptions for the whole class (one week uses them), or anything on TOOLS.md's [do-not-use list](../TOOLS.md#do-not-use-in-this-course). Organization-paid Codespaces put repositories in an organization, which Vercel's free plan can't deploy.

## Experienced programmers

For students who already program (computer science students, working developers), the tools are easy, and the risks are overconfidence and skipped checking. In METR's trial, experienced developers were 19% slower with AI while believing they were faster ([METR](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/)). Veracode found that newer models haven't improved the security of generated code ([Veracode Spring 2026](https://www.veracode.com/blog/spring-2026-genai-code-security/)). Experience doesn't exempt anyone from the Safe Loop.

- **Compress weeks 1–3 into one studio:** home page, game and spec together. Keep the spec work: CMU students rated writing a spec harder than managing the agents ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)).
- **Move terminal agents to week 4** and spend the saved time on weeks 6–8.
- **Harder Debug Clinic:** pick the hardest variants from the bug menu ([answer keys](answer-keys/README.md)), and time-box them.
- **Be the Agent, then build the agent:** after the exercise, students write a minimal agent loop against a raw API. Stanford's CS146S opens with a roughly 200-line agent ([CS146S](https://themodernsoftware.dev/)); Michigan uses a deliberately small local model so sloppy engineering shows ([UMich EECS 498](https://eecs498-aase.github.io/syllabus.html)).
- **More agent engineering:** write an MCP server; spec-driven work split across several agents; continuous integration running the tests on every push.
- **Review:** compare their own pull-request review with an AI reviewer's (a Stanford assignment type); threat-model the capstone in week 7.
- **Grade robustness over demos,** as Utah does: credit edge cases, how features interact, and taste ([Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)).
- **Keep** `PROMPTS.md`, the AI-free work and the oral walkthroughs, with harder questions: modify unfamiliar code, find a planted bug.

In a mixed class, give experienced students the stretch tier and reviewer roles instead of a separate track ([README.md](README.md#stretching-advanced-students)).
