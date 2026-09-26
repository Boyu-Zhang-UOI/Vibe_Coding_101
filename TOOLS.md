# Tool Handout

> **Last verified: 25 September 2026.** Free tiers change monthly. Instructors re-check every tool the week before each cohort and again at mid-course ([instructor/pre-cohort-checklist.md](instructor/pre-cohort-checklist.md)). Found something out of date? [Open a "tool change" issue](.github/ISSUE_TEMPLATE/tool-change.yml).

This is the **only** file in the course that names model versions, credit amounts or prices. Everything else teaches ideas that outlast any product.

## The stack at a glance

Every layer has a primary free tool and two fallbacks. When you run out of credits or a tool breaks, switch to the next one in the row. That is a planned drill, not an emergency.

| Layer | Used in | Primary ($0) | Fallback 1 | Fallback 2 | Optional paid step |
|---|---|---|---|---|---|
| **Chat assistant with live preview** | Weeks 1–3 | Google Gemini (Canvas) | ChatGPT Free | Claude Free (Artifacts, 18+) | Not needed |
| **Browser app builder** | Week 3 | Google AI Studio *Build* (18+) | Bolt Free | Lovable, v0 or Replit (one session each) | Only if a capstone outgrows free credits ($16–25/mo) |
| **Code editor + AI assistant** | Weeks 4–8 | VS Code + GitHub Copilot Free/Student, in GitHub Codespaces | Google Antigravity (18+) | Cline or Kilo Code + a free LLM API or local Ollama | Copilot Pro ($10/mo) |
| **Terminal agent** | Weeks 6–8 | GitHub Copilot CLI (in a Codespace) | Antigravity CLI (18+) | OpenCode or Aider + free models | Claude Code (Claude Pro, $20/mo) or Codex CLI (ChatGPT Plus, $20/mo) for weeks 6–8 |
| **LLM API inside your app** | Weeks 5–8 | Gemini API free tier, Flash-Lite model (18+, not for apps serving EEA/UK/Swiss users) | Groq free plan | OpenRouter free models · Cloudflare Workers AI · local Ollama | Pay per token |
| **Hosting** | Weeks 1–8 | GitHub Pages (static sites) | Vercel Hobby (personal repos) | Cloudflare Workers | — |
| **Database and auth** | Week 7–8 | Supabase Free | Neon or Turso (database only) | — | — |
| **Save everything** | Always | GitHub | — | — | — |

**Under 18, or in the EEA/UK?** Use the variant stack in [instructor/variants.md](instructor/variants.md).

## Layer details

### Chat assistants (weeks 1–3)

| Tool | Free tier (as of 2026-09-25) | Cheapest paid | Coding features | Age | Training on your data by default? |
|---|---|---|---|---|---|
| **Gemini** | Fast Flash model, some access to the Pro model; limits not published | Google AI Plus $4.99 · AI Pro $19.99 | **Canvas** runs HTML/JS previews in the chat; Gems (custom assistants) | 13+ | Yes if "Keep Activity" is on; samples may be read by human reviewers |
| **ChatGPT** | Unlimited text chat on the small default model, with ads | Go $8 · Plus $20 | In-chat code blocks; basic Codex access for quick tasks. The side-panel *canvas* was reportedly removed in May 2026 | 13+ with parental consent | Yes, opt out under Data Controls |
| **Claude** | Mid-size and small models; limits not published | Pro $20 ($17/mo annual) — includes Claude Code | **Artifacts** run HTML/JS/React previews in the chat | **18+** | Yes (since Sept 2025), opt out in Privacy settings |

### Browser app builders (week 3)

| Tool | What you get free | Notes |
|---|---|---|
| **Google AI Studio — Build** | Full-stack React + Node apps with a database and auth, two-way GitHub sync, no card to prototype | 18+. Free-tier inputs may be used for training and read by human reviewers (except in the EEA, UK and Switzerland). Deploying to Cloud Run needs a billing account — we export to GitHub instead |
| **Bolt** | About 1M tokens/month (300K/day), hosting, private projects | Good fallback |
| **Lovable** | 5 credits/day, capped at 30/month | Pricing changes 31 Oct 2026 |
| **v0** | About $5 of credits, 7 messages/day | — |
| **Replit (Starter)** | "Lite" builds; one published app that goes down after 30 days | Keep your code in GitHub, not only in Replit |

### Editor and agents (weeks 4–8)

| Tool | Free tier | Cheapest paid | Notes |
|---|---|---|---|
| **GitHub Copilot Free** (in VS Code / Codespaces) | 2,000 completions/month; an unpublished monthly allowance of AI Credits; automatic model choice only; **agent mode, MCP and Copilot CLI included** | Pro $10 (model choice, larger credit pool) | Since 1 June 2026, running out of credits **stops** chat/agent work until the month resets — there is no cheaper fallback model. Plan your credits |
| **GitHub Copilot Student** | Free for verified students: unlimited completions, 200 AI Credits/month, cloud agent | — | Apply in week 0 through GitHub Education; verification can take days |
| **GitHub Codespaces** | 120 core-hours/month on GitHub Free (about 60 hours on the default 2-core machine), 15 GB storage | — | Usage is **blocked, not billed**, when the quota runs out if you have no payment method. Stop your codespace when you finish |
| **Google Antigravity** (IDE + `agy` CLI) | Frontier models with weekly limits (numbers not published) | Google AI Pro $19.99 | 18+. Good second opinion and fallback |
| **Claude Code** | Not free | Claude Pro $20 | Excellent agent; optional for weeks 6–8 |
| **OpenAI Codex CLI** | Basic access on Free (quick tasks only) | ChatGPT Plus $20 | Optional for weeks 6–8 |
| **OpenCode / Aider / Cline / Kilo Code** | Free, open source | Pay for the model you connect | Connect to Groq, OpenRouter free models or Ollama |

### LLM APIs for your own apps (weeks 5–8)

All of these accept requests in the OpenAI "chat completions" format, so the starter code switches between them by changing three environment variables (`LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`).

| Provider | `LLM_BASE_URL` | Free limits (as of 2026-09-25) | Notes |
|---|---|---|---|
| **Gemini API** (key from Google AI Studio) | `https://generativelanguage.googleapis.com/v1beta/openai/` | Not published. Third parties report about 500 requests/day on Flash-Lite and about 20/day on Flash | 18+. Free-tier data may be used for training and read by reviewers. Free tier may not serve users in the EEA, UK or Switzerland |
| **Groq** | `https://api.groq.com/openai/v1` | 30 requests/minute, 1,000/day on open models such as gpt-oss | No card. Does not retain inference data by default |
| **OpenRouter** | `https://openrouter.ai/api/v1` | 50 requests/day on `:free` models (more after a one-time $10 top-up) | Free-model providers may log prompts |
| **Cloudflare Workers AI** | `https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/ai/v1` | 10,000 "Neurons"/day | Needs a Cloudflare account ID |
| **Ollama (local)** | `http://localhost:11434/v1` | Unlimited, runs on your machine | Useful models need about 16 GB RAM; not available inside a Codespace without extra setup |

Model names change often. Run `npm run models` in the week 5 starter to list the exact model IDs your key can use.

### Hosting and data

| Service | Free tier | Watch out for |
|---|---|---|
| **GitHub Pages** | Static sites from public repos | Non-commercial; public repos only on free accounts |
| **Vercel Hobby** | Static sites + serverless functions from a personal repo | Non-commercial. **Cannot deploy repos owned by a GitHub organization** (fork to your personal account) |
| **Cloudflare Workers** | Static assets + functions | Slightly more setup |
| **Supabase Free** | 2 projects, Postgres database, auth | **Pauses after 1 week of inactivity** — restore it from the dashboard |
| **Neon / Turso** | Postgres / SQLite databases | Database only, no auth |

## Student offers (check eligibility)

| Offer | Who | Deadline / terms |
|---|---|---|
| GitHub Education → Copilot Student + Codespaces benefits | Verified students worldwide | Apply in week 0 |
| Google AI Pro free for 12 months | US college students 18+ (AI Plus in 140+ other markets) | Redeem by 31 Dec 2026. Needs a payment method and **auto-renews** — set a reminder to cancel |
| ChatGPT Plus free for 4 months | US college students | Claim by 31 Oct 2026. Set a reminder to cancel |
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
| ChatGPT side-panel canvas | Reportedly removed May 2026 |
| DeepSeek (as a required tool) | Stores data in China; banned on some government and school devices |
| Trae | Reported to keep sending usage data after telemetry was disabled |

## Known upcoming changes

| Date | Change |
|---|---|
| 14 Oct 2026 | GPT-5.5 retires from ChatGPT and Codex |
| 31 Oct 2026 | Lovable's current pricing expires; ChatGPT Plus student offer closes |
| 31 Dec 2026 | Google AI Pro student offer closes |
| 22 Mar 2027 | Firebase Studio shuts down |

## Privacy settings to change on day one

Step-by-step instructions: [setup/privacy-settings.md](setup/privacy-settings.md).

| Tool | Setting |
|---|---|
| ChatGPT | Settings → Data Controls → "Improve the model for everyone" → off |
| Claude | Settings → Privacy → "Help improve Claude" → off |
| Gemini | Gemini Apps Activity / "Keep Activity" → off (or use temporary chats) |
| GitHub Copilot | github.com → Settings → Copilot → turn off use of your data for training |
| Google AI Studio / Gemini API | No opt-out on the free tier. Never paste personal or secret data |

Sources for every row: [research/landscape-report-2026-09.md](research/landscape-report-2026-09.md) and the notes in [research/notes/](research/notes/).
