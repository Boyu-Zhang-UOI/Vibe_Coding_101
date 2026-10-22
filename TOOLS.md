# Tool Handout

> **Last verified: 21 October 2026**, including the "as of" dates in the table headers. Free tiers change monthly. Instructors re-check every tool the week before each cohort and again at mid-course ([instructor/pre-cohort-checklist.md](instructor/pre-cohort-checklist.md)). Found something out of date? [Open a "tool change" issue](.github/ISSUE_TEMPLATE/tool-change.yml).

This is the **only** file in the course that names model versions, credit amounts or prices. Everything else teaches ideas that outlast any product.

## The stack at a glance

Every layer has a primary free tool and two fallbacks. When you run out of credits or a tool breaks, switch to the next one in the row. That is a planned drill, not an emergency.

| Layer | Used in | Primary ($0) | Fallback 1 | Fallback 2 | Optional paid step |
|---|---|---|---|---|---|
| **Chat assistant with live preview** | Weeks 1–3 | Google Gemini (Canvas) | ChatGPT Free | Claude Free (Artifacts, 18+) | Not needed |
| **Browser app builder** | Week 3 | Google AI Studio *Build* (18+) | Bolt Free | Lovable, v0 or Replit (one session each) | Only if a capstone outgrows free credits ($16–25/mo) |
| **Code editor + AI assistant** | Weeks 4–8 | VS Code + GitHub Copilot Free/Student, in GitHub Codespaces | Google Antigravity (18+) | Cline or Kilo Code + a free LLM API or local Ollama | Copilot Pro ($10/mo) |
| **Terminal agent** | Weeks 6–8 | GitHub Copilot CLI (in a Codespace) | Antigravity CLI (18+) | OpenCode + free models (Aider has had no release since Aug 2025) | Claude Code (Claude Pro, $20/mo) or Codex CLI (ChatGPT Plus, $20/mo) for weeks 6–8 |
| **LLM API inside your app** | Weeks 5–8 | Gemini API free tier, Flash-Lite model `gemini-3.5-flash-lite` (18+, not for apps serving EEA/UK/Swiss users) | Groq free plan | OpenRouter free models · Cloudflare Workers AI · local Ollama | Pay per token |
| **Hosting** | Weeks 1–8 | GitHub Pages (static sites) | Vercel Hobby (personal repos; not private repos owned by an organization) | Cloudflare Workers | — |
| **Database and auth** | Week 7–8 | Supabase Free | Neon or Turso (database only) | — | — |
| **Save everything** | Always | GitHub | — | — | — |

**Under 18, or in the EEA/UK?** Use the variant stack in [instructor/variants.md](instructor/variants.md).

## Credits budget for the course

The course is 3 credits with two 3-hour studios a week, so you spend more hours with AI than in a one-studio course. Plan your GitHub Copilot credits across weeks 4–8 instead of hoping they last.

- **Credits reset on the first of each calendar month**, not when the course starts. An 8-week course covers parts of two or three months, so note which reset dates fall inside it.
- **Weeks 1–3** use chat assistants and builders, not Copilot. **Weeks 4–5** mostly use completions and Ask mode, which are light. **Weeks 6–8** use agent mode, which uses far more credits per request. Save most of your allowance for those weeks.
- **Spend less per task:** one task per chat, a fresh chat when a conversation gets long, small steps (the [Safe Loop](resources/safe-loop.md)), and Ask mode when you only need an explanation. Check the usage meter (the Copilot icon in the status bar) at the start of each week.
- **When credits stop,** chat and agent mode stop until the month resets. Copilot has no cheaper fallback model. Switch to the fallback in the stack table straight away: Antigravity (18+), or Cline or Kilo Code with a free Groq or OpenRouter key, in the editor; OpenCode with free models in the terminal. Tell your instructor, and see [troubleshooting](resources/troubleshooting.md#i-ran-out-of-free-credits).
- **Students:** apply for GitHub Education early. Copilot Student adds unlimited completions and its own monthly credit allowance.

## Layer details

### Chat assistants (weeks 1–3)

| Tool | Free tier (as of 2026-10-21) | Cheapest paid | Coding features | Age | Training on your data by default? |
|---|---|---|---|---|---|
| **Gemini** | Flash-Lite model by default since 9 Oct 2026 (the Auto setting may send some prompts to Flash or Pro); limits refresh every 5 hours up to a weekly cap; numbers not published | Google AI Plus $4.99 (adds Flash) · AI Pro $19.99 (adds Pro and Gemini 4 Argon) | **Canvas** runs HTML/JS previews in the chat; Gems (custom assistants). Google hasn't said which model runs Canvas on the free plan | 13+ | Yes if "Keep Activity" is on; samples may be read by human reviewers |
| **ChatGPT** | Unlimited text chat on the small default model (reported to be GPT-6 Luna since 8 Oct 2026), with ads | Go $8 · Plus $20 | In-chat code blocks; basic Codex access for quick tasks. The side-panel *canvas* was reportedly removed in May 2026. Since Oct 2026 "Intelligent UI" can show small interactive widgets (charts, forms, calculators), but it does not run your own code | 13+ with parental consent | Yes, opt out under Data Controls |
| **Claude** | Mid-size and small models (Sonnet 5.5 since 28 Sep 2026); limits reset every 5 hours, numbers not published | Pro $20 ($17/mo annual) — includes Claude Code | **Artifacts** run HTML/JS/React previews in the chat | **18+** | Yes (since Sept 2025), opt out in Privacy settings |

**Which tool leads week 1?** Gemini's free plan now runs its smallest model by default, and a third party reports a 32K-token context window on the free tier, so long one-shot builds may fail sooner than before. Start a fresh chat for each build. For an adult cohort, Claude Artifacts may now give the stronger free preview; the instructor's pre-cohort smoke test decides which tool leads week 1. ChatGPT is still not a live-preview tool.

### Browser app builders (week 3)

| Tool | What you get free | Notes |
|---|---|---|
| **Google AI Studio — Build** | Full-stack React + Node apps with a database and auth, two-way GitHub sync, no card to prototype | 18+. Free-tier inputs may be used for training and read by human reviewers (except in the EEA, UK and Switzerland). Deploying to Cloud Run needs a billing account — we export to GitHub instead |
| **Bolt** | About 1M tokens/month (300K/day), hosting, private projects | Good fallback |
| **Lovable** | 5 credits/day, capped at 30/month | Current chat pricing ends 31 Oct 2026; no replacement announced as of 21 Oct. Re-check in November |
| **v0** | New accounts: $5 of credits **once** (no monthly refill since Oct 2026); 7 messages/day | Older free accounts keep $5/month. Cheapest paid plan for new users is $30/mo |
| **Replit (Starter)** | Agent in "Free Mode" (replaced "Lite") with daily credits up to a monthly cap; one published app that goes down after 30 days | Starter no longer appears on replit.com/pricing (since Sep 2026); check that a new sign-up still gets it. Keep your code in GitHub, not only in Replit |

v0 and Replit are one-session samplers at best.

### Editor and agents (weeks 4–8)

| Tool | Free tier | Cheapest paid | Notes |
|---|---|---|---|
| **GitHub Copilot Free** (in VS Code / Codespaces) | 2,000 completions/month; an unpublished monthly allowance of AI Credits; automatic model choice only; **agent mode, MCP and Copilot CLI included** | Pro $10 (model choice, larger credit pool) | Since 1 June 2026, running out of credits **stops** chat/agent work until the month resets — there is no cheaper fallback model. Plan your credits ([budget](#credits-budget-for-the-course)) |
| **GitHub Copilot Student** | Free for verified students: unlimited completions, a monthly AI Credits allowance (GitHub doesn't publish the number; third parties report 200), cloud agent, code review | — | Apply in week 0 or 1 through GitHub Education; verification can take days |
| **GitHub Codespaces** | 120 core-hours/month on GitHub Free (about 60 hours on the default 2-core machine), 15 GB storage | — | Usage is **blocked, not billed**, when the quota runs out if you have no payment method. Stop your codespace when you finish |
| **Google Antigravity** (IDE + `agy` CLI) | Gemini 3.8 Flash with a weekly limit (numbers not published). Claude 4.6 and gpt-oss-120b leave the free plan on 2 Nov 2026 | Google AI Pro $19.99 (Gemini 4 Argon and Claude 5.5 need a paid plan that is not a trial) | 18+. Still a good second opinion and fallback, but no longer a frontier-model tool on the free plan |
| **Claude Code** | Not free | Claude Pro $20 | Excellent agent; optional for weeks 6–8. Reads the course's `AGENTS.md` when a project has no `CLAUDE.md` (from v2.1.277) |
| **OpenAI Codex CLI** | Basic access on Free (quick tasks only) | ChatGPT Plus $20 | Optional for weeks 6–8. University students in the US and Canada can claim $100 of Codex credits that work with ChatGPT Free ([student offers](#student-offers-check-eligibility)); not yet tested by the course |
| **OpenCode / Cline / Kilo Code** | Free, open source | Pay for the model you connect | Connect to Groq, OpenRouter free models or Ollama. OpenCode, Cline and Kilo Code all shipped releases in Oct 2026. OpenCode's repository moved to `anomalyco/opencode`. Keep your keys in your own environment variables, not in a hosted console: OpenCode's hosted Console was breached in Oct 2026 (the open-source tool was not affected) |

### LLM APIs for your own apps (weeks 5–8)

All of these accept requests in the OpenAI "chat completions" format, so the starter code switches between them by changing three environment variables (`LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`).

| Provider | `LLM_BASE_URL` | Free limits (as of 2026-10-21) | Notes |
|---|---|---|---|
| **Gemini API** (key from Google AI Studio) | `https://generativelanguage.googleapis.com/v1beta/openai/` | Not published (see AI Studio). Earlier third-party reports: about 500/day on Flash-Lite and about 20/day on Flash (not re-confirmed in Oct 2026). Use `gemini-3.5-flash-lite`; `gemini-3.1-flash-lite` may shut down from 7 May 2027 | 18+. Free-tier data may be used for training and read by reviewers. Free tier may not serve users in the EEA, UK or Switzerland. AI Studio advertises Gemini 4 Argon, but it isn't on the free tier |
| **Groq** | `https://api.groq.com/openai/v1` | 30 requests/minute, 1,000/day on open models such as gpt-oss | No card. Does not retain inference data by default |
| **OpenRouter** | `https://openrouter.ai/api/v1` | 50 requests/day on `:free` models (more after a one-time $10 top-up) | Free-model providers may log prompts |
| **Cloudflare Workers AI** | `https://api.cloudflare.com/client/v4/accounts/[ACCOUNT_ID]/ai/v1` | 10,000 "Neurons"/day | Needs a Cloudflare account ID. Some newer models need a paid plan |
| **Ollama (local)** | `http://localhost:11434/v1` | Unlimited, runs on your machine | Useful models need about 16 GB RAM; not available inside a Codespace without extra setup |

Model names change often. The suggested Gemini model ID is `gemini-3.5-flash-lite`. Run `npm run models` in the week 5 starter to list the exact model IDs your key can use.

### Hosting and data

| Service | Free tier | Watch out for |
|---|---|---|
| **GitHub Pages** | Static sites from public repos | Non-commercial; public repos only on free accounts |
| **Vercel Hobby** | Static sites + serverless functions from a personal repo | Non-commercial. **Cannot deploy private repos owned by a GitHub organization** (make the repo public or fork it to your personal account). 10 GB deployment storage (since 16 Sep 2026); each project keeps only its 3 latest production deployments plus its 3 latest of any kind, and older ones are deleted when you go over. Submit your **production URL plus a screenshot**, not a preview URL |
| **Cloudflare Workers** | Static assets + functions | Slightly more setup |
| **Supabase Free** | 2 projects, Postgres database, auth | **Pauses after 1 week of inactivity** — restore it from the dashboard. From 30 Oct 2026, new tables need explicit `grant`s before the API can see them; grant **and** turn on row-level security (RLS) with policies together. Use the publishable/secret keys; the legacy anon/service_role keys are deprecated by the end of 2026 |
| **Neon / Turso** | Postgres (1 GB per project on Neon Free) / SQLite databases | Database only, no auth |

## Student offers (check eligibility)

| Offer | Who | Deadline / terms |
|---|---|---|
| GitHub Education → Copilot Student + Codespaces benefits | Verified students worldwide | Apply in week 0 or 1 (verification can take days) |
| Google AI Pro free for 12 months | US college students 18+ (AI Plus, which includes Flash but not Pro, in 140+ other markets) | Redeem by 31 Dec 2026, before any 2027 cohort begins. Needs a payment method and **auto-renews** — set a reminder to cancel |
| ChatGPT Plus free for 4 months | US college students | Claim by 31 Oct 2026; ended after that date. Set a reminder to cancel |
| Codex credits for students | Verified university students in the US and Canada | $100 of Codex credits (2,500 credits); works with ChatGPT Free; one per student; no card reported. **Not yet tested by the course: instructors test it on an account before recommending it.** One community report says the flagship Codex model is blocked on Free accounts |
| Azure for Students | Students | $100 credit, no card |

Offers that have **ended**: Cursor's free student year (closed 25 Jun 2026), Perplexity's free year.

## Do not use in this course

| Tool | Why |
|---|---|
| GitHub Spark | Retired 31 Aug 2026 |
| Firebase Studio | New sign-ups closed 22 Jun 2026; shuts down 22 Mar 2027 |
| Gemini CLI with a free Google login | Free login access ended 18 Jun 2026 (an API key still works, with low limits) |
| GitHub Models | Retired 30 Jul 2026 |
| Roo Code, Continue | Shut down / no longer maintained |
| Aider | No release since Aug 2025 and no commits since May 2026; treat it as unmaintained. Use OpenCode instead |
| Cursor | Since 12 Oct 2026 the free plan is part of the X/Grok "X Subscription" bundle, which includes social-network features; the $8 plan is Grok-only; no student offer |
| ChatGPT side-panel canvas | Reportedly removed May 2026 |
| DeepSeek (as a required tool) | Stores data in China; banned on some government and school devices |
| Trae | Reported to keep sending usage data after telemetry was disabled |

## Known upcoming changes

| Date | Change |
|---|---|
| 30 Oct 2026 | Supabase stops giving new tables automatic API grants in every project (existing tables keep theirs) |
| 31 Oct 2026 | Lovable's current pricing ends; ChatGPT Plus student offer closes |
| 2 Nov 2026 | Antigravity's Free and Plus plans lose Claude 4.6 and gpt-oss-120b, leaving Gemini 3.8 Flash |
| 16 Nov 2026 | Copilot deprecates several models on Pro and higher plans (Free and Student pick models automatically) |
| 31 Dec 2026 | Last day to redeem Google's AI Pro/Plus student offer |
| End of 2026 | Supabase deprecates the legacy `anon` and `service_role` keys (use publishable and secret keys) |
| 22 Mar 2027 | Firebase Studio shuts down and deletes data |
| 7 May 2027 | Earliest shutdown of `gemini-3.1-flash-lite` (use `gemini-3.5-flash-lite`) |

Instructors: what to do on each date is in the [pre-cohort checklist](instructor/pre-cohort-checklist.md#maintenance-calendar).

## Privacy settings to change on day one

Step-by-step instructions: [setup/privacy-settings.md](setup/privacy-settings.md).

| Tool | Setting |
|---|---|
| ChatGPT | Settings → Data Controls → "Improve the model for everyone" → off |
| Claude | Settings → Privacy → "Help improve Claude" → off |
| Gemini | Gemini Apps Activity / "Keep Activity" → off (or use temporary chats) |
| GitHub Copilot | github.com → Settings → Copilot → Features (github.com/settings/copilot/features) → turn off use of your data for training |
| Google AI Studio / Gemini API | No opt-out on the free tier. Never paste personal or secret data |

Sources for every row: [research/landscape-report-2026-09.md](research/landscape-report-2026-09.md) and the notes in [research/notes/](research/notes/). October 2026 re-check: [research/landscape-update-2026-10.md](research/landscape-update-2026-10.md) and [research/notes/2026-10/tool-changes-since-september.md](research/notes/2026-10/tool-changes-since-september.md).
