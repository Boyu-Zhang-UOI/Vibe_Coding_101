# Free and cheap tools for "Vibe Coding 101": AI IDEs, CLI agents, free LLM APIs, and free hosting/backends (verified 2026-09-25)

**How to read these notes**
- Unless marked otherwise, every fact comes from a page fetched on **2026-09-25**. When a page showed its own date, it appears in parentheses.
- **[2ndary]**: third-party source only.
- **[snippet]**: seen only in a search-result summary; the page was not opened.
- **[possibly stale]**: the newest information is more than about 3 months old, or the page contradicts newer official information.
- Model names are written exactly as vendor pages show them in Sept 2026, for example "GPT-6 Luna", "Gemini 3.8 Flash" and "Claude Fable".
- Pricing pages were summarized by a fetch model, so re-check exact numbers by hand before printing them in course materials.

**Six changes that most affect a course designed from 2025 information:**
1. Gemini CLI's free Google-login tier ended on 2026-06-18. Google points those users to Antigravity.
2. GitHub Copilot moved from premium requests to dollar-denominated "AI Credits" on 2026-06-01. A separate free Copilot Student plan exists.
3. GitHub Models was retired on 2026-07-30.
4. Windsurf is now "Devin Desktop" (2026-06-02).
5. Roo Code shut down on 2026-05-15, and Continue was acquired by Cursor and is no longer maintained.
6. Qwen Code's free OAuth tier ended on 2026-04-15.

---

## 1. AI IDEs and editor extensions: what is free, what is ~$10–$20/month, and how suitable for absolute beginners

### Takeaway
GitHub Copilot inside VS Code is still the lowest-friction default, but its limits changed:
- **Copilot Free** includes agent mode, MCP and the Copilot CLI. It is capped at 2,000 completions a month plus an unpublished AI-credit allowance, and only the Auto model is available.
- **Copilot Student** is free and adds unlimited completions, 200 AI credits a month and the cloud agent.
- **Google Antigravity** has the most generous free access to frontier agent models (Gemini 3.x, Claude Sonnet/Opus 4.6, gpt-oss-120b). It requires users to be 18+ and publishes no quota numbers.
- **Cursor Hobby** is only a trial: its agent requests are limited, and MCP needs the $20 plan.
- **Remove from course materials:** Roo Code (shut down) and Continue (unmaintained).
- **Treat with caution:** Trae (privacy) and Devin Desktop, formerly Windsurf (the brand keeps changing).

### Cited Findings

#### Comparison table: AI IDEs and extensions (all verified 2026-09-25 unless noted)

| Tool | $0 tier | Cheapest paid | Agent / MCP on the cheapest tiers | Install and OS | Privacy default | Main sources |
|---|---|---|---|---|---|---|
| **GitHub Copilot (VS Code, JetBrains, etc.)** | **Free:** 2,000 completions/mo, "limited access", unpublished AI-credit allowance, Auto model only. **Student (free, verified):** unlimited completions, 200 AI credits/mo, Auto only | **Pro $10:** 1,500 credits (1,000 base + 500 flex = $15 of usage), choice of models. **Pro+ $39:** 7,000 credits. **Max $100:** 20,000 credits | Agent mode ✓ and MCP ✓ on all plans incl. Free. Copilot CLI on all plans. Cloud agent ✗ on Free, ✓ on Student and above. Code review on Free: "selection only" | Built into VS Code on Win/macOS/Linux; needs a GitHub account | Since Apr 24, 2026, interaction data from Free, Pro and Pro+ is used for training by default (opt-out). Business/Enterprise excluded | [GitHub Docs plans](https://docs.github.com/en/copilot/get-started/plans); [billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing); [data policy blog, 2026-03-25](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/) |
| **Cursor** | **Hobby:** "No credit card required", "Limited Agent requests", "Access to Composer" | **Individual/Pro $20:** extended Agent limits, frontier models, "MCPs, skills, and hooks", cloud agents. **Pro Plus $60, Ultra $200.** **Start (India only):** ₹649 | **MCP, skills, hooks and cloud agents require Individual or above**, so Hobby has no MCP | VS Code fork; OS list not captured | Privacy Mode "available to anyone (free or Pro)". With it off, Cursor "may use and store codebase data, prompts… to… train" (data-use page updated 2026-09-03). Default for individuals not confirmed | [cursor.com/pricing](https://cursor.com/pricing); [docs pricing](https://cursor.com/docs/account/pricing); [data-use](https://cursor.com/data-use); [security](https://cursor.com/security) |
| **Devin Desktop (formerly Windsurf, Cognition)** | **Free:** "Light quota", "Limited model availability", unlimited Tab | **Pro $20; Max $200** | Up to 10 concurrent sessions on Free and Pro. Daily/weekly token quotas since March 2026. "Free models don't count against your quota" | Download page showed only a macOS button (OS support is a gap) | Not captured | [devin.ai/pricing](https://devin.ai/pricing); [quota docs](https://docs.devin.ai/desktop/accounts/quota); [rebrand FAQ](https://docs.devin.ai/desktop/devin-desktop-faq) |
| **Kiro (AWS)** | **Free:** 50 credits/mo; "open weight models and Claude Sonnet 4.5, with limits" | **Pro $20:** 1,000 credits. **Pro+ $40:** 2,000. Add-ons $0.04/credit, no rollover | Vibe and spec modes both use credits; simple prompts cost under 1 credit. Model multipliers, e.g. Auto 1.0x, Sonnet 5 1.3x, Opus 5 2.2x, Haiku 4.5 0.4x, Qwen3 Coder Next 0.05x | Code OSS-based (Open VSX). macOS Intel and Apple Silicon, Windows 10/11 x64/ARM64, Linux (Ubuntu 24+, Debian 13+, Fedora 40+…). Sign in with GitHub, Google, AWS Builder ID or IAM IC | Free and individual content may be used "for model training" unless you opt out. Telemetry on by default. Data stored in US East | [kiro.dev/pricing](https://kiro.dev/pricing); [models](https://kiro.dev/docs/models/); [install](https://kiro.dev/docs/getting-started/installation/); [data protection](https://kiro.dev/docs/privacy-and-security/data-protection/) |
| **Google Antigravity** | **Individual $0:** Gemini 3.8/3.7/3.6 Flash, Gemini 3.1 Pro, Claude Sonnet & Opus 4.6, gpt-oss-120b; "Unlimited Tab completions", "Unlimited Command requests", "Basic weekly rate limits" | **Google AI Pro** (sold as a Google subscription; $20 per the Antigravity blog): quota "refreshed every five hours until weekly limit reached". **Ultra** $100 (5x) / $200 (20x) since 2026-05-19 | Agent manager, IDE, CLI (`agy`), SDK. Extensions for VS Code, Visual Studio 2026, JetBrains, Zed, Xcode | macOS 12+, Windows 10 64-bit+ (x64/ARM64), Linux glibc ≥2.28. **Personal Google account in an approved country; "Unavailable to under-18 users"** | Users can "opt out of data collection… from the Settings panel". Whether free-tier data trains models is not stated | [antigravity.google/pricing](https://antigravity.google/pricing); [plans doc](https://antigravity.google/docs/plans); [plan changes blog](https://antigravity.google/blog/changes-to-antigravity-plans); [download](https://antigravity.google/download); [FAQ](https://antigravity.google/docs/faq) |
| **Trae (ByteDance)** | Official pricing page is JavaScript-rendered and could not be extracted. **[2ndary]** Free: 5,000 autocompletions/mo, limited SOLO | **[2ndary]** Lite $3, Pro $10 ($20 of usage), Pro+ $30 | Not verified | Not verified | The Register (2025-07-28) reported about 500 telemetry calls in about 7 minutes "continuing even when telemetry was disabled" | [aiidelist 2026-06-25, 2ndary](https://aiidelist.com/blog/trae-ai-ide-pricing-2026); [The Register](https://www.theregister.com/2025/07/28/bytedance_trae_telemetry/) |
| **Zed** | **Personal $0:** 2,000 accepted edit predictions, plus "unlimited use with your API keys or external agents" | **Pro $10:** unlimited edit predictions, $5 of tokens, then list price +10%, with an adjustable spend cap (can be $0). **Student:** free for 1 year with $10/mo token credits (top models excluded) | Agent Panel, Zed Agent with MCP and skills, external agents via ACP | macOS, Linux, Windows (stable since 2025-10-15) | Hosted-model providers are barred from training. Edit-prediction data collection is opt-in | [zed.dev/pricing](https://zed.dev/pricing); [plans docs](https://zed.dev/docs/ai/plans-and-usage); [privacy](https://zed.dev/docs/ai/privacy-and-security); [Windows blog](https://zed.dev/blog/zed-for-windows-is-here) |
| **JetBrains AI (AI Assistant and Junie)** | **AI Free:** 3 AI credits per 30 days (1 credit = $1), unlimited Mellum completion, unlimited local models. Available on educational and classroom licenses. Not in Community editions or Android Studio | **AI Pro $10:** 10 credits. **AI Ultimate $30:** 35 credits | Junie agent in the IDEs, a CLI, and GitHub/GitLab CI. Chat also hosts Claude Agent, Codex and Gemini CLI. BYOK needs no subscription | JetBrains IDE 2025.1+ | Code not used for training "unless you explicitly allow it". **Detailed data collection is on by default for non-commercial licenses** (opt-out) | [licensing docs (22 Jul 2026)](https://www.jetbrains.com/help/ai-assistant/licensing-and-subscriptions.html); [FAQ](https://lp.jetbrains.com/ai-ides-faq/); [Junie](https://junie.jetbrains.com/) |
| **Cline** | Extension is free and open source; BYOK or Cline credits; rotating FREE promo models | **ClinePass $9.99/mo:** 12 open-weight models with 5-hour, weekly and monthly limits | File edits, terminal commands and browser use; "Every action requires your explicit approval"; MCP Marketplace | VS Code, Cursor, Windsurf, JetBrains, Antigravity, Zed; CLI via `npm i -g cline` (Node) | Free-model usage "may be used to help improve model performance". Telemetry is anonymous and can be turned off | [pricing](https://cline.bot/pricing); [models](https://docs.cline.bot/getting-started/selecting-your-model); [ClinePass](https://docs.cline.bot/getting-started/clinepass); [free models](https://docs.cline.bot/getting-started/free-models) |
| **Kilo Code** | Extension is free and MIT-licensed; "Auto Free" free models | Pay-as-you-go through Kilo Gateway at provider rates (5% payment fee). Optional Kilo Pass $19+ | Agent modes; MCP supported | VS Code, JetBrains, CLI (`npm i -g @kilocode/cli`). Account sign-in required | Free-model providers "may log prompts and outputs": "Do not submit personal or confidential data" | [kilo.ai/pricing](https://kilo.ai/pricing); [free use](https://kilo.ai/docs/getting-started/using-kilo-for-free); [Anaconda acquisition 2026-07-15](https://www.anaconda.com/blog/kilo-code-joins-anaconda-what-builders-should-know) |
| **Roo Code** | **Shut down:** "The Roo Code Extension was shut down on May 15th". The listing points to the ZooCode fork or Cline | n/a | n/a | n/a | n/a | [VS Marketplace listing](https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline) |
| **Continue** | "Continue was acquired by Cursor"; the open-source code "remains freely available". The repo is read-only and "no longer actively maintained" | n/a (hosted service shut down; data deleted after 2026-07-15 **[2ndary]**) | n/a | Marketplace still lists v2.1.0 | n/a | [continue.dev](https://continue.dev); [GitHub](https://github.com/continuedev/continue); [dev.to 2026-06-24, 2ndary](https://dev.to/leobaniak/cursor-acquires-continue-and-gives-its-users-a-july-15-export-deadline-5dkn) |
| **VS Code built-in chat** | Copilot is "built into VS Code". "Use AI Features" plus a GitHub sign-in enrolls you in Copilot Free. **BYOK models work without a GitHub account or Copilot plan**, for chat only; inline completions still need a GitHub account | via Copilot plans | Can choose Copilot, Anthropic Claude or OpenAI Codex as the agent; MCP | Windows, macOS, Linux | Free-tier telemetry is on by default. `chat.disableAIFeatures` turns AI off | [setup (9/16/2026)](https://code.visualstudio.com/docs/copilot/setup); [language models/BYOK](https://code.visualstudio.com/docs/copilot/customization/language-models); [overview](https://code.visualstudio.com/docs/copilot/overview) |

#### Additional details per product
**GitHub Copilot**
- **Credit value and reset:** 1 AI Credit = $0.01. Credits reset at 00:00 UTC on the 1st of each month. Completions and Next Edit Suggestions do not use credits. Paid plans get a 10% discount on model costs when using Auto. [GitHub Docs billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing)
- **Token billing and no fallback:** usage is billed per input, output and cached token at each model's API rate (announced 2026-04-27, effective 2026-06-01). The old fallback to a cheaper model when you run out was removed; users are blocked unless they set a budget. Annual subscribers stay on request billing until renewal. [GitHub blog](https://github.blog/news-insights/company-news/github-copilot-is-moving-to-usage-based-billing/)
- **Legacy annual premium requests:** Pro gets 300 and Pro+ gets 1,500, with extras at $0.04 each. [GitHub Docs: requests](https://docs.github.com/en/copilot/concepts/billing/copilot-requests)
- **Student plan history:**
  - Created 2026-03-12/13. Students lost manual selection of "GPT-5.3-Codex, GPT-5.4, and Claude Opus and Sonnet models". [Changelog 2026-03-13](https://github.blog/changelog/2026-03-13-updates-to-github-copilot-for-students/); [community #189268](https://github.com/orgs/community/discussions/189268)
  - From 2026-06-24, Auto is the "default and only model selection experience" on Free and Student. [Changelog 2026-06-24](https://github.blog/changelog/2026-06-24-changes-to-model-selection-for-free-and-student-plans/)
- **Teachers and maintainers:** "Verified teachers, and maintainers of popular open source projects may be eligible for free access to Copilot Pro." [GitHub Docs individual plans](https://docs.github.com/en/copilot/concepts/billing/individual-plans)
- **Conflict:** the marketing page [github.com/features/copilot/plans](https://github.com/features/copilot/plans) still showed "50 chat requests" for Free. The docs say only "limited access" and an unpublished credit allowance. The 50-request figure is probably legacy text.
- **Supported models** (no per-plan table on the page): GPT-5 mini through GPT-6 Sol; Claude Haiku 4.5, Sonnet 4.6–5, Opus 4.7–5.5, Fable 5; Gemini 3.5–3.8 Flash; Grok 4.5–4.7; Kimi K2.7/K3; MAI-Code-1.1-Flash. [GitHub Docs supported models](https://docs.github.com/en/copilot/reference/ai-models/supported-models)

**Cursor**
- **Usage pools:** a "Cursor Models" pool (Grok 4.5–4.7, Composer 2.5) with "significantly more included usage", and an "Other Models" pool charged at API prices. Auto bills "at the list price of the model each request is routed to". [Cursor docs pricing](https://cursor.com/docs/account/pricing)
- **Students:** "Cursor discontinued new sign-ups for the legacy student discount on June 25, 2026". The student page now says "look out for promotions at our on-campus and online events starting this fall". [Cursor help](https://cursor.com/help/account-and-billing/student-discount); [cursor.com/students](https://cursor.com/students)
- **Ownership:** SpaceX acquisition of Cursor closed 2026-08-14 **[snippet]**. [9to5mac](https://9to5mac.com/2026/08/14/spacex-lands-deal-to-likely-purchase-claude-code-and-openai-codex-competitor/); [CNBC 2026-06-16](https://www.cnbc.com/2026/06/16/spacex-spcx-cursor-acquisition-ipo.html)

**Devin Desktop (formerly Windsurf)**
- Renamed 2026-06-02 through an over-the-air update; "Your plan, pricing, extensions… remain the same".
- The Cascade agent was replaced by "Devin Local", with Cascade available until July 1. [Devin Desktop FAQ](https://docs.devin.ai/desktop/devin-desktop-faq); [Devin blog](https://devin.ai/blog/windsurf-is-now-devin-desktop)
- Pro includes free SWE-2 "through October 10, 2026".
- **Conflict:** devin.ai/desktop says Free has "Unlimited access to SWE-2". [devin.ai/pricing](https://devin.ai/pricing); [devin.ai/desktop](https://devin.ai/desktop)

**Kiro**
- **Conflict:** the models page implies most models (including Opus) are available on Free, while the pricing page says open-weight models plus Sonnet 4.5 only. [kiro.dev/docs/models](https://kiro.dev/docs/models/)

**Other VS Code agent extensions**
- **OpenAI Codex IDE extension:** included with Plus ($20), Pro, Business, Enterprise/Edu, or an API key. Not listed for Free or Go. Works in VS Code, Cursor and Windsurf. [learn.chatgpt.com IDE](https://learn.chatgpt.com/docs/codex/ide); [pricing](https://learn.chatgpt.com/docs/pricing)
- **Claude Code VS Code extension:** requires VS Code 1.94.0+ and "any paid Claude subscription (Pro, Max, Team, or Enterprise) or a Claude Console account". [Claude Code docs: VS Code](https://code.claude.com/docs/en/vs-code)

**Copilot Chat open source**
- Copilot Chat was open-sourced under MIT on 2025-06-30, after the 2025-05-19 announcement. [VS Code blog](https://code.visualstudio.com/blogs/2025/06/30/openSourceAIEditorFirstMilestone)
- The built-in Ollama provider is deprecated; use the Ollama Marketplace extension. [VS Code docs](https://code.visualstudio.com/docs/copilot/customization/language-models)

#### Education and student offers (relevant to tool choice)
- **GitHub:** Copilot Student, free for verified students (details above). [GitHub Docs](https://docs.github.com/en/copilot/get-started/plans)
- **Google:**
  - US college students get Google AI Pro free for 12 months ($19.99/mo value) if they sign up by **Dec 31, 2026**. Students in 140+ other markets get Google AI Plus instead (excluding the US, Canada, Hong Kong, Macau, Bolivia, Albania and Tunisia).
  - A payment method is needed at signup, and the plan auto-renews.
  - The announcement does not mention Antigravity or Jules. [Google blog, 2026-08-19](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/)
- **OpenAI:** a 2026 "Back to School" offer gives US college students 4 free months of ChatGPT Plus (claim by Oct 31, 2026) **[snippet]**. The official help article returned 403. [OpenAI Help Center](https://help.openai.com/en/articles/20001493-chatgpt-back-to-school-offer-for-students)
- **Zed:** Student plan, free for 1 year with $10/mo of token credits. [Zed docs](https://zed.dev/docs/ai/plans-and-usage)
- **Cursor:** free student Pro closed to new sign-ups 2026-06-25. [Cursor help](https://cursor.com/help/account-and-billing/student-discount)

### Inferences
- **Default stack:** VS Code with Copilot is the safest default for absolute beginners. There is nothing extra to install, it runs on all three OSes, Free includes agent mode and MCP, and verified students get more at $0.
  - The main beginner risk is running out of credits and being blocked, since the fallback was removed.
  - The main teaching point is the privacy toggle: training on Free/Pro/Pro+ data is on by default since Apr 24, 2026.
- **Best "second tool":** Antigravity, which gives free access to frontier agent models on Win/macOS/Linux. But:
  - It excludes under-18 students and Google Workspace accounts may have trouble.
  - It publishes no quota numbers.
  - US college students on the free AI Pro offer should get much higher Antigravity limits (plans doc: Pro refreshes every 5 hours). That link is inferred; the student-offer post does not say it.
- **Cursor Hobby** is suitable only as a demo. MCP and cloud agents are gated to $20, and the free student year is gone.
- **Budget BYOK fallback:** Cline or Kilo Code plus a free API (OpenRouter `:free`, Groq, Gemini) or a local Ollama model. This teaches provider/API-key concepts but adds setup friction. Warn students that free-model providers may log or train on prompts.
- **Remove from course materials:** Roo Code, Continue and GitHub Models. Avoid Trae for privacy reasons. Mention Devin Desktop only as an alternative, because its name, agent (Cascade → Devin Local) and quota system all changed within 6 months.

### Gaps
- **Copilot:** exact Free AI-credit allowance, what Free/Student users see when credits run out, and whether the students/teachers training exemption exists (secondary sources claim it; the official post doesn't say).
- **Cursor:** numeric Hobby limits, the Privacy Mode default for individuals, the OS list, and whether the Cursor CLI works on Hobby.
- **Devin Desktop:** OS support, privacy/training defaults, student offer, and the Free-plan SWE-2 conflict.
- **Antigravity:** numeric free weekly limits and whether free-tier data trains models.
- **Trae:** no official data could be extracted (pricing, models, current privacy policy).
- **JetBrains:** whether the Student Pack includes AI Pro, and Junie's quota on AI Free (5 vs 3 credits: junie.jetbrains.com vs docs).
- **All IDEs:** download sizes were not captured.

---

## 2. Terminal/CLI and async coding agents: free access, cheapest plan, limits, install requirements

### Takeaway
In Sept 2026 the free CLI agent landscape is much thinner than in 2025:
- **Gone:** Gemini CLI's free Google-login tier (2026-06-18) and Qwen Code's free OAuth tier (2026-04-15). Amp's ad-supported free tier is paused or unclear.
- **What remains free:**
  - GitHub Copilot CLI on Copilot Free/Student.
  - Antigravity CLI (`agy`) on Google's free Individual plan, with unpublished weekly limits.
  - OpenCode with time-limited free Zen models.
  - Aider, Cline CLI or Kilo CLI with free or local models.
  - Kiro CLI on its 50-credit free tier.
  - Jules (async, web): 15 tasks/day.
- **Cheapest mainstream paid options:** Claude Code needs Claude Pro ($20). Codex CLI realistically needs ChatGPT Plus ($20); the official table does not list the CLI for Free or Go.

### Cited Findings

#### Comparison table: CLI and async agents (verified 2026-09-25 unless noted)

| Tool | Free access? | Cheapest paid | Limits (quantified where published) | Install / OS / runtime | Config and MCP | Privacy | Sources |
|---|---|---|---|---|---|---|---|
| **Gemini CLI** | **Consumer Google login ended:** on June 18, 2026 Code Assist "stopped serving requests for the Gemini Code Assist for individuals, Google AI Pro, and Google AI Ultra tiers". Users are told to "migrate to the Antigravity family". **Unpaid Gemini API key:** "250 maximum model requests / user / day", Flash only | Code Assist Standard/Enterprise (1,500 / 2,000 requests/day), or a paid API key | See left. Per-minute limits exist but are unpublished | Node `>=20`. `npx @google/gemini-cli`, `npm i -g`, `brew`. Apache-2.0 | GEMINI.md (AGENTS.md via `context.fileName`); MCP via settings.json / `gemini mcp add` | Unpaid API: Google uses content "to provide, improve, and develop" products; human review | [deprecation notice (2026-09-02)](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals); [quota page (2026-06-18)](https://geminicli.com/docs/resources/quota-and-pricing); [Cloud quotas (2026-09-24)](https://docs.cloud.google.com/gemini/docs/quotas); [discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274); [package.json](https://raw.githubusercontent.com/google-gemini/gemini-cli/main/package.json) |
| **Antigravity CLI (`agy`)** | Free Individual plan: "Meaningful quota, refreshed weekly" | Google AI Pro: refreshed "every five hours until weekly limit reached" | No request numbers published. **[2ndary]** Free users report hitting 429 errors quickly | macOS/Linux: `curl … install.sh \| bash`. **Native Windows:** `irm … install.ps1 \| iex` | Reads AGENTS.md/GEMINI.md rules (see §5) | Opt-out of data collection in Settings | [getting started](https://antigravity.google/docs/getting-started?tab=cli); [plans](https://antigravity.google/docs/plans/); [forum, 2ndary](https://discuss.ai.google.dev/t/feature-request-add-gemini-3-5-flash-minimal-lite-for-free-tier-antigravity-cli-and-app-workflows/168437) |
| **OpenAI Codex (CLI, IDE, cloud, app)** | **Free:** "Explore Codex capabilities on quick coding tasks". **Go ($8):** "Use Codex for lightweight coding tasks". The feature table lists CLI, IDE and web/cloud only for Plus and above or an API key | **Plus $20:** web, CLI, IDE extension, iOS | **Plus, local messages per 5 h:** GPT-6 Luna 350–3,000; GPT-6 Sol 15–150; GPT-5.4 mini 60–350. "Weekly limits may also apply". Pro ($100+) gives 5x or 20x | `npm i -g @openai/codex`, `brew install --cask codex`, curl, or a PowerShell installer. Native Windows sandbox; WSL1 unsupported since v0.115 | AGENTS.md (`/init`), `codex mcp` | Not retrievable (help.openai.com returned 403) | [learn.chatgpt.com pricing](https://learn.chatgpt.com/docs/pricing); [CLI doc](https://learn.chatgpt.com/docs/codex/cli.md); [Windows](https://learn.chatgpt.com/docs/windows/windows-app.md); [GitHub](https://github.com/openai/codex) |
| **Claude Code** | **No:** "The free claude.ai plan does not include Claude Code access" | **Pro $20** ($17/mo annual). Max "from $100" (5x/20x) | Usage is shared with Claude chat. A 5-hour session limit plus a weekly limit; numbers not published | **Native installer recommended:** `curl -fsSL https://claude.ai/install.sh \| bash`, `irm https://claude.ai/install.ps1 \| iex`, brew, winget. npm needs **Node 22+**. macOS 13+, **Windows 10 1809+ native**, WSL, Ubuntu 20.04+; 4 GB RAM | CLAUDE.md; AGENTS.md from v2.1.277; `.mcp.json` / `claude mcp add` | Free, Pro and Max users choose whether data trains models. 5-year retention if they opt in, 30 days if not | [setup](https://code.claude.com/docs/en/setup); [claude.com/pricing](https://claude.com/pricing); [usage limits](https://support.claude.com/en/articles/11647753-how-do-usage-and-length-limits-work); [Pro/Max article (2026-08-19)](https://support.claude.com/en/articles/11145838-use-claude-code-with-your-pro-or-max-plan); [data usage](https://code.claude.com/docs/en/data-usage) |
| **GitHub Copilot CLI** | **Yes:** "All plans include Copilot CLI", including Free (Auto model, limited credits) | Pro $10 | Shares the plan's AI Credits (see §1) | `npm i -g @github/copilot` (Node 22+), `brew install --cask copilot-cli`, `winget install GitHub.Copilot`, curl. macOS, Linux, Windows PowerShell, WSL | Reads `.github/copilot-instructions.md`, AGENTS.md, CLAUDE.md, GEMINI.md; MCP | Same Copilot training default (opt-out) | [plans](https://docs.github.com/en/copilot/get-started/plans); [about CLI](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli); [install](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli) |
| **Cursor CLI** | Hobby CLI availability undocumented | Individual $20 (MCP, skills and hooks are gated here) | n/a | `curl https://cursor.com/install -fsS \| bash`; Windows PowerShell `irm 'https://cursor.com/install?win32=true' \| iex` | AGENTS.md / `.cursor/rules` | As Cursor | [CLI docs](https://cursor.com/docs/cli/overview); [pricing](https://cursor.com/pricing) |
| **Qwen Code** | **No longer free:** "The Qwen OAuth free tier was discontinued on 2026-04-15" | Alibaba Cloud Coding Plan (price not stated) or Token Plan; BYOK incl. OpenRouter and Ollama | n/a | Node **22+**; curl, PowerShell, npm or brew | MCP ✓ | n/a | [auth docs](https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/); [GitHub](https://github.com/QwenLM/qwen-code) |
| **OpenCode** | Free tool; BYOK. Time-limited **free Zen models** (e.g., Big Pickle, MiMo-V2.6-Flash Free, Nemotron 3 Ultra Free…) | Zen pay-as-you-go at no markup (card fee 4.4% + $0.30) | Not stated | curl script, `npm i -g opencode-ai`, brew, Scoop/Choco. **WSL "recommended" on Windows**; needs a modern terminal | AGENTS.md (`/init`); local and remote MCP | Most free Zen models "may use your data to improve the model". Space Bunny has zero retention | [docs](https://opencode.ai/docs); [Zen](https://opencode.ai/docs/zen/); [MCP](https://opencode.ai/docs/mcp-servers/) |
| **Aider** | Free, open source, BYOK (incl. local) | n/a | n/a | Python 3.8–3.13 (aider-install/uv) or 3.9–3.12 (pip) | Can read AGENTS.md via `.aider.conf.yml`; git auto-commits | BYOK | [install](https://aider.chat/docs/install.html); [history](https://aider.chat/HISTORY.html) **[possibly stale: homepage cites Claude 3.7/o3-mini]** |
| **Amp** | Hobby (free) = pay-as-you-go or bring your own tokens/subscriptions. The status of the ad-supported "Amp Free" is not stated on the pricing page | Individual $20 (45,000 "orb-minutes") | n/a | Web, macOS, iOS, CLI | AGENTS.md, MCP, Agent Skills | n/a | [pricing](https://ampcode.com/docs/pricing); [manual](https://ampcode.com/manual) |
| **Jules (Google, async web agent)** | **Free:** 15 tasks per 24 h, 3 concurrent | Pro (via Google AI Pro): 100 tasks, 15 concurrent. Ultra: 300 tasks, 60 concurrent | Free model listed as "Gemini 2.5 Pro" **[possibly stale]** | Web; GitHub repos only. **18+; @gmail.com accounts only** | AGENTS.md; MCP added 2026-02-02 | Does "not train on private repository content" | [usage limits](https://jules.google/docs/usage-limits); [FAQ](https://jules.google/docs/faq); [changelog](https://jules.google/docs/changelog/) |
| **Kiro CLI** | Included on all tiers incl. Free (50 credits) | Pro $20 | Shares credits | Part of Kiro install | Steering + AGENTS.md | As Kiro | [kiro.dev/pricing](https://kiro.dev/pricing/) |
| **Warp** | Free with limited AI credits, incl. "Warp Agent CLI access" | Build $20 (1,500 credits) | n/a | n/a | n/a | BYOK only on Business/Enterprise | [warp.dev/pricing](https://www.warp.dev/pricing) |
| **Factory (Droid)** | No free tier found | Pro $20 | n/a | n/a | n/a | n/a | [factory.com/pricing](https://factory.com/pricing) |

#### Notes and conflicts
**Gemini CLI**
- The GitHub README still advertises "60 requests/min and 1,000 requests/day" with Google sign-in, which is **stale**. The quota page also still lists 1,000/1,500/2,000 per day next to the deprecation banner. [README](https://github.com/google-gemini/gemini-cli); [quota page](https://geminicli.com/docs/resources/quota-and-pricing)
- Antigravity CLI is written in Go and "no commitment" was made to open-source it. [discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274)

**Codex**
- Third-party posts claim Free includes local CLI tasks, but the official feature table and the README list the CLI for Plus and above only. [eesel 2ndary](https://www.eesel.ai/blog/openai-codex-free-access-explained); [GitHub README](https://github.com/openai/codex)
- Codex docs moved: developers.openai.com/codex/* now 308-redirects to learn.chatgpt.com/docs/*.

**Claude Code limit changes**
- **2026-05-06:** 5-hour limits doubled for Pro, Max, Team and seat-based Enterprise, and the peak-hour reduction was removed. [Anthropic news](https://www.anthropic.com/news/higher-limits-spacex)
- **2026-09-14:** a temporary +50% weekly boost ended. Weekly limits became permanently +25% over the original baseline ("a 17% reduction" versus the boosted level). [BleepingComputer 2026-08-29](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-is-cutting-claude-codes-current-weekly-limits-by-17-percent/)
- The separate Opus weekly cap was reportedly removed the same day **[2ndary]**. [implicator.ai](https://www.implicator.ai/anthropic-claude-code-weekly-limits-september-14/)
- Anthropic's Help Center says Sonnet is "the right choice for the large majority of coding work". [support.claude.com](https://support.claude.com/en/articles/14552983-models-usage-and-limits-in-claude-code)

**Amp Free timeline [snippet/2ndary]**
- Oct 2025: ad-supported launch. Feb 2026: closed to new users. Mar 2026: ads dropped in favour of a daily grant. Mid-2026: paused.
- The official posts could not be fetched. [bitdoze 2ndary](https://www.bitdoze.com/amp-code-free-ai-coding-agent/)

### Inferences
- **For an 8-week course where every student needs $0:**
  - Primary terminal agent: **GitHub Copilot CLI** (Copilot Free/Student). It installs via npm/brew/winget and runs natively on Windows.
  - Free alternative: **Antigravity CLI**, for students 18+ with a personal Google account.
  - Fully free and open fallback: **OpenCode or Aider with free or local models**, noting that OpenCode recommends WSL on Windows.
- **If the course can require ~$20/month for part of the term,** Claude Code (Pro) or Codex (Plus) give the most capable agents. Both publish only vague limits (5-hour and weekly windows) that have changed several times in 2026.
- **Node version:** Claude Code (npm), Qwen Code and Copilot CLI (npm) all need Node 22+, and Gemini CLI needs Node 20+. A course install guide should standardize on Node 22 LTS, or prefer native installers that avoid Node.
- **Age limits:** Jules and Antigravity require users to be 18+. A course open to high-school students needs a Copilot-based path.

### Gaps
- Codex: exact Free/Go limits, whether Free/Go can use the CLI in practice, the Node requirement, and the training default.
- Claude: numeric Pro limits (not published), the exact Max 20x price, and official confirmation of the Aug 2025 weekly-limit introduction (not re-verified; the search budget ran out).
- Antigravity: numeric quotas and official pricing for the CLI.
- Jules: whether the free tier changed after Google's June 2026 consumer consolidation. The last changelog entry is from March 2026.
- Qwen Code: context filename and Coding Plan price.
- Amp: official status of Amp Free.
- Cursor: CLI on Hobby.

---

## 3. Free LLM APIs for building AI features into student apps (plus local models)

### Takeaway
The best $0 API options in Sept 2026 are:
- **Gemini API free tier:** Gemini 3.x Flash and Flash-Lite. Google no longer publishes the numbers, and third parties report about 20 requests/day for the 3.x Flash models versus about 500/day for Flash-Lite.
- **Groq free plan:** gpt-oss-20b/120b and Qwen3.8-27b at 30 requests/min and 1,000 requests/day.
- **OpenRouter `:free` models:** 50 requests/day, or 1,000/day after a one-time $10 purchase.
- **Cloudflare Workers AI:** 10,000 Neurons/day.

**Gone:** GitHub Models (retired 2026-07-30) and Cerebras's permanent free tier. Remove both from course materials.

**Watch-outs:**
- The Gemini free tier requires age 18+.
- Gemini's free tier trains on your data, with human review.
- Apps serving EEA, UK or Swiss users must use Gemini's paid tier.

Local models (Ollama or LM Studio) are the only truly unlimited and private option, but they need about 16 GB of RAM for useful coding-size models.

### Cited Findings

#### Comparison table: free LLM APIs (verified 2026-09-25)

| Provider | Free models | Free limits | Sign-up requirements | Data use on free tier | OpenAI-compatible? | Sources |
|---|---|---|---|---|---|---|
| **Google Gemini API (AI Studio key)** | "Free of charge": Gemini 3.8/3.7/3.6/3.5 Flash, 3.5 & 3.1 Flash-Lite, 3 Flash Preview, 2.5 Pro/Flash/Flash-Lite (2.5 limited to prior users since 2026-09-18), Gemma 4, Embedding 2, some Live/TTS. **Not free:** 3.1 Pro Preview, image, Veo, Lyria | **Not published**: "can be viewed in Google AI Studio". Limits are per project; RPD resets at midnight Pacific. **[2ndary, Sep 2026]:** 3.5–3.8 Flash about 20 RPD; Flash-Lite about 500 RPD. Search grounding free only on 2.5 Flash/Flash-Lite (500 RPD) | Google account + project; no billing. **"You must be 18 years of age or older"** | "Used to improve our products: Yes". "Human reviewers may read… your API input and output". **Only Paid Services may serve users in the EEA, Switzerland or UK** | Yes: `https://generativelanguage.googleapis.com/v1beta/openai/` | [pricing (2026-09-24)](https://ai.google.dev/gemini-api/docs/pricing); [rate limits (2026-09-02)](https://ai.google.dev/gemini-api/docs/rate-limits); [terms](https://ai.google.dev/gemini-api/terms); [changelog](https://ai.google.dev/gemini-api/docs/changelog); [scriptbyai 2ndary](https://www.scriptbyai.com/gemini-api-free-tier-limits/) |
| **Groq** | gpt-oss-120b, gpt-oss-20b, gpt-oss-safeguard-20b, qwen3.8-27b, Whisper, Orpheus TTS | **LLMs:** 30 RPM, 1K RPD, 8K TPM, 200K TPD. **Whisper:** 20 RPM, 2K RPD, 7.2K audio-sec/hour. Limits are per organization | Card only needed to upgrade to Developer | "By default, Groq does not retain customer data for inference requests" | Yes: `https://api.groq.com/openai/v1` | [rate limits](https://console.groq.com/docs/rate-limits); [deprecations](https://console.groq.com/docs/deprecations); [your data](https://console.groq.com/docs/your-data) |
| **OpenRouter** | 21 `:free` models, e.g. `qwen/qwen3.8-27b:free`, `google/gemma-4-31b-it:free`, `nvidia/nemotron-3-super-120b-a12b:free`, `openrouter/free` router | 20 RPM. **50 req/day** if under $10 of credits ever purchased, **1,000/day** at $10 or more. A negative balance can cause 402 errors | Account; card only for credits (5.5% fee) | OpenRouter doesn't log by default, but provider training policies differ for free models ("there are exceptions") | Yes | [limits](https://openrouter.ai/docs/api-reference/limits); [models API](https://openrouter.ai/api/v1/models); [provider logging](https://openrouter.ai/docs/guides/privacy/provider-logging); [FAQ](https://openrouter.ai/docs/faq) |
| **GitHub Models** | **Retired 2026-07-30**: "The playground, model catalog, inference API, and bring your own key (BYOK) are no longer available to any customer" | n/a | n/a | n/a | n/a | [GitHub changelog](https://github.blog/changelog/2026-07-30-github-models-is-now-retired/); [docs](https://docs.github.com/en/github-models) |
| **Mistral (Studio)** | Free mode: "API access is enabled by default with no credit card required" | "Lowest limits"; numbers visible only in the console. The pricing page mentions "$10/mo in API credits" on Free (relationship unclear) | Account; **13+ with parental permission** | Inputs and outputs "may be included in Mistral's model training programs"; opt out in the Admin panel | Mistral API (not verified as OpenAI-compatible) | [quickstart](https://docs.mistral.ai/getting-started/quickstarts/studio/activate-and-generate-api-key); [rate-limit help (2026-08-12)](https://help.mistral.ai/en/articles/698531-why-am-i-hitting-api-rate-limits-and-how-do-i-increase-them); [training opt-out](https://help.mistral.ai/en/articles/455207-can-i-opt-out-of-my-input-or-output-data-being-used-for-training); [pricing](https://mistral.ai/pricing) |
| **Cloudflare Workers AI** | gpt-oss-120b/20b, Llama 3.3 70B, Llama 4 Scout, Qwen3.8-27b, Qwen2.5-Coder-32B… | **10,000 Neurons/day** free on both the Free and Paid plans; on Free, requests fail after that. Rough arithmetic: about 367K gpt-oss-20b output tokens/day | Cloudflare account | Not captured | Yes: `…/accounts/{id}/ai/v1` | [pricing (2026-09-17)](https://developers.cloudflare.com/workers-ai/platform/pricing/); [OpenAI compatibility](https://developers.cloudflare.com/workers-ai/configuration/open-ai-compatibility/) |
| **Hugging Face Inference Providers** | Many providers | **$0.10/month** free credits ("subject to change"); PRO $2 | HF account | Provider-dependent | Yes: `https://router.huggingface.co/v1` | [pricing](https://huggingface.co/docs/inference-providers/pricing) |
| **Cerebras** | n/a | **No permanent free tier.** $5 of credits that expire in 30 days, **after adding a verified payment method** | Card | n/a | n/a | [rate limits/FAQ](https://inference-docs.cerebras.ai/support/rate-limits) |
| **NVIDIA NIM (build.nvidia.com)** | Hosted NIM endpoints | "Free access… for unlimited prototyping"; no numbers published | NVIDIA Developer Program | Dev/test use | Yes (NIM) | [developer.nvidia.com/nim](https://developer.nvidia.com/nim) |
| **Cohere** | Trial key | 1,000 API calls/month; Chat 20 RPM | Account | n/a | n/a | [rate limits](https://docs.cohere.com/docs/rate-limits) |
| **Anthropic / OpenAI / DeepSeek** | Anthropic: no free tier (Start/Build/Scale tiers). OpenAI: a "Free" usage tier exists, but it is unclear whether it includes usable free credits. DeepSeek: cheap, not free (deepseek-flash about $0.15–0.30 per M input tokens) | n/a | Card | n/a | DeepSeek: yes | [Claude rate limits](https://platform.claude.com/docs/en/api/rate-limits); [OpenAI rate limits](https://developers.openai.com/api/docs/guides/rate-limits); [DeepSeek pricing](https://api-docs.deepseek.com/quick_start/pricing) |

#### Local models
- **Ollama v0.34.4** (2026-09-23), MIT license.
  - **OS:** macOS 14+ (Apple Silicon gets GPU; Intel Macs are CPU-only); Windows 10 22H2+ (NVIDIA driver 551.61+, AMD via ROCm v7 or Vulkan); Linux; Docker.
  - OpenAI-compatible endpoint at `http://localhost:11434/v1/`.
  - [GitHub release](https://api.github.com/repos/ollama/ollama/releases/latest); [macOS](https://docs.ollama.com/macos); [Windows](https://docs.ollama.com/windows); [OpenAI compat](https://docs.ollama.com/api/openai-compatibility)
- **Model download sizes:**
  - qwen2.5-coder: 3b 1.9 GB, 7b 4.7 GB, 14b 9.0 GB, 32b 20 GB.
  - qwen3-coder:30b (3.3B active): 19 GB, 256K context.
  - gpt-oss:20b: 14 GB, "can run on systems with as little as 16GB memory".
  - gpt-oss:120b: 65 GB, needs an 80 GB GPU.
  - [qwen2.5-coder tags](https://ollama.com/library/qwen2.5-coder/tags); [qwen3-coder](https://ollama.com/library/qwen3-coder); [gpt-oss](https://ollama.com/library/gpt-oss)
- **Ollama Cloud:**
  - Free $0: a "starter amount" of credits and 1 concurrent request.
  - Pro $20/mo: $60 of credits.
  - "Prompt or response data is never logged or trained on".
  - [ollama.com/pricing](https://ollama.com/pricing)
- **LM Studio:**
  - **OS:** macOS 14+ on **Apple Silicon only**; Windows x64 (AVX2) or ARM; Linux x64/ARM64 (Ubuntu 20.04+).
  - **RAM:** 16 GB recommended (8 GB possible with small models); Windows also recommends 4 GB+ of VRAM.
  - OpenAI-compatible server at `http://localhost:1234/v1`.
  - Free for work use since 2025-07-08.
  - [system requirements](https://lmstudio.ai/docs/app/system-requirements); [OpenAI compat](https://lmstudio.ai/docs/developer/openai-compat); [free for work](https://lmstudio.ai/blog/free-for-work)

#### Changes to free API tiers
- **Groq deprecations:** Aug 16, 2026: llama-3.1-8b-instant → gpt-oss-20b, llama-3.3-70b → gpt-oss-120b. Sep 14, 2026: qwen3.6-27b → qwen3.8-27b. Sep 21, 2026: groq/compound discontinued. Llama models are now Enterprise-only. [Groq deprecations](https://console.groq.com/docs/deprecations)
- **Gemini free tier:**
  - Reported Dec 6–7, 2025 cuts: 2.5 Pro dropped from free, and 2.5 Flash reportedly went from about 250 to about 20 RPD **[2ndary]**. [CometAPI](https://www.cometapi.com/is-free-gemini-2-5-pro-api-fried-changes-to-the-free-quota-in-2025/)
  - **Conflict:** the official pricing page today still marks 2.5 Pro "Free of charge", but 2.5 access is restricted to prior users since 2026-09-18.
  - Gemini 2.0 Flash shut down 2026-06-01. [changelog](https://ai.google.dev/gemini-api/docs/changelog)

### Inferences
- **Default "AI feature" API: Gemini 3.x Flash-Lite.** Third parties report the highest free daily cap, it is OpenAI-compatible, and it needs no card. Pair it with **Groq** (fast, no data retention by default, 1K RPD) as the fallback.
  - Teach students to put the base URL and key in environment variables, so switching providers is a one-line change.
- **Europe or minors:** if the course has students under 18, or students in the EEA/UK/Switzerland who deploy apps publicly, Gemini's free tier is legally unsuitable. Use Groq, OpenRouter free models or Cloudflare Workers AI instead.
- **Rate limits in class:** OpenRouter's 50 requests/day without a $10 top-up is tight for a classroom demo. Gemini 3.x Flash's reported ~20 requests/day is also tight; Flash-Lite is more practical.
- **Local models:** a beginner course should treat them as an optional enrichment track. Many student laptops have 8 GB of RAM, and Intel Macs are unsupported by LM Studio and CPU-only in Ollama.

### Gaps
- **Gemini:** official per-model free rate limits (only visible when logged into AI Studio) and official confirmation of the Dec 2025 cuts.
- **Mistral:** free-mode numbers, phone verification and commercial-use limits.
- **Commercial-use terms on free tiers:** Groq, OpenRouter and Cloudflare not confirmed.
- **Ollama Cloud:** free credit amount.
- **OpenAI:** whether the "Free" API usage tier grants any usable credits.

---

## 4. Free hosting and backends for student projects: key limits, pausing and sleep, commercial-use restrictions

### Takeaway
**Hosting:**
- **Static sites:** GitHub Pages (public repos, non-commercial) and Cloudflare Workers static assets (free, unlimited static requests) are the most reliable, with no sleep and no credit traps.
- **Vercel Hobby:** generous but non-commercial only, and it **cannot connect to repos owned by a GitHub organization**. That matters if the course uses GitHub Classroom or an org.
- **Netlify Free:** a hard cap of 300 credits/month (about 20 production deploys). When it runs out, *all* the team's sites pause.
- **Render free:** web services sleep after 15 minutes, and **free Postgres expires after 30 days**, which is shorter than an 8-week course.

**Backends:**
- **Supabase Free:** 2 active projects; projects pause after 1 week of inactivity.
- **Firebase Spark:** no Cloud Functions and, since Feb 3, 2026, no Cloud Storage; both need the Blaze billing plan.
- **Neon and Turso:** no card, generous, and they don't expire.
- **Most platforms now ship official MCP servers**, which fits a vibe-coding workflow.

### Cited Findings

#### Comparison table: hosting (verified 2026-09-25)

| Service | Free limits | Sleep, pause and overage behaviour | Commercial use | Card? | Agent/MCP | Sources |
|---|---|---|---|---|---|---|
| **GitHub Pages** | Site ≤1 GB; soft 100 GB/mo bandwidth; soft 10 builds/hr; 10-minute deploy timeout; static only | No sleep; heavy traffic can get HTTP 429 | **Not allowed** for commercial business, e-commerce or SaaS | No | n/a | [Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits); [what is Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages) (Free accounts: public repos only **[snippet]**) |
| **Netlify Free** | **300 credits/mo, hard limit.** Costs: production deploy 15 credits; bandwidth 20/GB; web requests 2 per 10k; compute 10/GB-hr. Deploy previews and forms are free. Custom domains with SSL included | Out of credits → **all team projects pause** ("Site not available") until next cycle or upgrade | Not confirmed | Not confirmed | Remote MCP (`netlify-mcp.netlify.app/mcp`), `@netlify/mcp`, agent skills | [credit plans (2026-09-01)](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/); [how credits work (2026-08-12)](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/how-credits-work/); [paused projects (2026-09-03)](https://docs.netlify.com/manage/accounts-and-billing/billing/resume-paused-projects/); [pricing](https://www.netlify.com/pricing/); [MCP](https://docs.netlify.com/build/build-with-ai/netlify-mcp-server/) |
| **Vercel Hobby** | 1M function invocations; 4 h Active CPU; 100 GB Fast Data Transfer; 1M edge requests; 5K image transforms; 100 deployments/day; 1 concurrent build; 50 domains/project | Over a limit: you can't buy more, and "in most cases" must wait 30 days | **Non-commercial only** (payments, ads, being paid to build it, etc.); donations allowed | Not confirmed | Remote MCP `https://mcp.vercel.com` (Beta, OAuth, approved clients incl. Claude Code, Cursor, VS Code, Codex, Gemini CLI) | [Hobby (2026-09-14)](https://vercel.com/docs/plans/hobby); [limits (2026-09-16)](https://vercel.com/docs/limits); [fair use](https://vercel.com/docs/limits/fair-use-guidelines); [MCP](https://vercel.com/docs/mcp/vercel-mcp) |
| **Cloudflare Workers / Pages** | **Workers:** 100,000 requests/day, 10 ms CPU per request, 100 Workers; static-asset requests "free and unlimited"; Builds 3,000 min/mo. **Pages:** 500 builds/mo, 100 custom domains per project | Over 100k/day → Error 1027 | Not confirmed | Not confirmed | Cloudflare API MCP (`mcp.cloudflare.com/mcp`) plus product servers (OAuth) | [Workers limits (2026-09-05)](https://developers.cloudflare.com/workers/platform/limits/); [static assets billing](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/); [Pages limits](https://developers.cloudflare.com/pages/platform/limits/); [MCP servers](https://developers.cloudflare.com/agents/model-context-protocol/mcp-servers-for-cloudflare/) |
| **Render (free instances)** | 750 instance-hours/mo per workspace; custom domains and TLS; **free Postgres 1 GB** | Web services **spin down after 15 minutes idle** (about 1 minute to wake). **Free Postgres expires 30 days after creation**, then a 14-day grace period. Filesystem is ephemeral | Not confirmed | **No** payment method needed | n/a | [render.com/docs/free](https://render.com/docs/free) |
| **Railway** | $5 one-time trial credit for 30 days, then $1/month of credit | Usage-based | n/a | No card for the trial | n/a | [railway.com/pricing](https://railway.com/pricing) |
| **Fly.io** | Trial: 2 machine-hours or 7 days | Apps stop without a card | n/a | **Card required** | n/a | [pricing](https://docs.fly.io/about/pricing/); [free trial](https://docs.fly.io/about/free-trial/) |

#### Comparison table: backends and databases (verified 2026-09-25)

| Service | Free limits | Pause and expiry | Card? | Agent/MCP | Sources |
|---|---|---|---|---|---|
| **Supabase Free** | **2 active projects** (across orgs you own/admin); 500 MB DB; 50K MAU; 5 GB egress; 1 GB storage; 500K Edge Function invocations; no backups | **Pauses after 1 week of low activity** (warning email). Restorable for 1 year per current docs (a 2024 changelog said 90 days) | Not confirmed | Hosted MCP with OAuth (32 tools) **[snippet]** | [pricing](https://supabase.com/pricing); [pausing](https://supabase.com/docs/guides/platform/free-project-pausing); [billing FAQ](https://supabase.com/docs/guides/platform/billing-faq); [MCP](https://supabase.com/docs/guides/getting-started/mcp) |
| **Firebase Spark** | Firestore 1 GiB with 50K reads, 20K writes and 20K deletes per day; Hosting 10 GB storage and 360 MB/day transfer, custom domain + SSL; Auth 50K MAU; Firebase Studio 3 workspaces | **Cloud Functions, App Hosting and AI Logic require Blaze.** **Cloud Storage requires Blaze since Feb 3, 2026** (Spark gets 402/403 errors) | Blaze requires billing | Local MCP `npx firebase-tools@latest mcp` (80+ tools) | [pricing](https://firebase.google.com/pricing); [Functions](https://firebase.google.com/docs/functions/get-started); [Storage changes](https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024); [MCP (2026-09-24)](https://firebase.google.com/docs/ai-assistance/mcp-server) |
| **Neon Free** | 100 projects; 100 CU-hours per project per month; 0.5 GB storage per project; 5 GB egress; 10 branches | Scale-to-zero after 5 minutes (always on). Hitting CU-hours or egress limits suspends compute until the next period; over 0.5 GB blocks writes | **No card** | Remote MCP `mcp.neon.tech/mcp` (dev/test use only) | [pricing](https://neon.com/pricing); [plans](https://neon.com/docs/introduction/plans); [MCP](https://neon.com/docs/ai/neon-mcp-server) |
| **Turso Free** | 100 databases; 5 GB; 500M rows read and 10M rows written per month | Free databases no longer go idle (since Mar 31, 2025 **[snippet]**) | **No card**; commercial use permitted | n/a | [pricing](https://turso.tech/pricing); [blog](https://turso.tech/blog/turso-cloud-debuts-the-new-developer-plan) |
| **PocketBase** | Open-source single binary (SQLite, auth, file storage, realtime, admin UI); v0.40.4 (pre-1.0) | Needs a host with a persistent disk | n/a | n/a | [pocketbase.io](https://pocketbase.io/) |
| **Convex Free** | 1M function calls/mo; 0.5 GB DB; 1 GB files | At the limit, writes "may fail" | n/a | n/a | [limits](https://docs.convex.dev/production/state/limits) |
| **Appwrite Cloud Free** | 2 projects; limits are hard caps | **Paused after 7 days without development activity** (since Feb 20, 2026); **paused projects deleted after 90 days** (since Jun 29, 2026) | n/a | n/a | [free plan](https://appwrite.io/docs/advanced/billing/free); [changelog 2026-02-20](https://appwrite.io/changelog/entry/2026-02-20-1); [changelog 2026-06-29](https://appwrite.io/changelog/entry/2026-06-29) |

- **v0 (Vercel's app builder):** Free gets $5 of monthly credits and 7 messages/day. **Conflict:** vercel.com/pricing lists v0 as a paid add-on. [v0 pricing](https://v0.app/docs/pricing)
- **Netlify credit bug:** in July–August 2026, Free teams reported "production deploys… paused" while showing 30/30 credits. Staff gave no explanation. [Netlify forum, 2026-08-30](https://answers.netlify.com/t/free-plan-stuck-on-operational-credits-production-deploys-paused-with-30-30-credits/167847)
- **Neon changelog:** Free compute doubled from 50 to 100 CU-hours per project on 2025-09-19 **[snippet]**, and Free projects rose from 80 to 100 on 2025-12-19. [Neon changelog](https://neon.com/docs/changelog/2025-12-19)

### Inferences
- **Suggested course default:**
  - GitHub Pages for weeks 1–3 (static sites; everyone already has GitHub).
  - Vercel Hobby or Cloudflare Workers for full-stack deploys.
  - Supabase (auth + Postgres) or Neon/Turso (database only) as the backend.
- **Pausing risks:**
  - A Supabase project left idle over a week-long break will pause, so teach students how to restore it.
  - Render's 30-day Postgres expiry falls inside an 8-week course, so avoid Render Postgres or plan a re-creation.
- **Vercel and GitHub orgs:** if students' repos live in a GitHub Classroom org, Vercel Hobby cannot connect them. Use Cloudflare or Netlify for org repos, or have students fork to their personal account.
- **Firebase Spark** is now a poor fit for beginners who need file uploads or server functions, since both need a billing-linked Blaze plan.
- **Commercial use:** Vercel Hobby and GitHub Pages prohibit it. Remind students that a "real business" project must move to a paid plan or another host.

### Gaps
- Card requirements for Netlify, Vercel, Cloudflare, Supabase, Convex and Appwrite free tiers.
- Commercial-use terms for Netlify, Cloudflare, Render, Supabase, Neon, Convex and Appwrite.
- Render free instance RAM/CPU and bandwidth.
- Confirmation of custom-domain/HTTPS on GitHub Pages (the docs URL returned 404).
- The official date Cloudflare began steering new projects from Pages to Workers.
- PocketBase license.

---

## 5. MCP and agent configuration files (AGENTS.md, CLAUDE.md, GEMINI.md, .cursor/rules, copilot-instructions.md): which tools support what, as of 2026

### Takeaway
By September 2026 the ecosystem has converged on three cross-tool standards:
- **MCP** (for tools and servers) and **AGENTS.md** (for project instructions) are both Linux Foundation / Agentic AI Foundation projects, and almost every tool on the shortlist supports them.
- **Agent Skills** (`SKILL.md` folders), originally from Anthropic, is the third.

A course can teach one portable pattern: a root `AGENTS.md` plus MCP configuration. Small tool-specific caveats:
- Gemini CLI needs a `context.fileName` setting.
- VS Code's local agent needs `chat.useAgentsMdFile`.
- Claude Code needs v2.1.277+ and reads AGENTS.md only when there is no CLAUDE.md.
- Copilot's JetBrains, Visual Studio and github.com chat surfaces ignore AGENTS.md.

Free-tier MCP availability differs: Copilot Free includes MCP, but Cursor Hobby does not.

### Cited Findings

**Governance and standards**
- **Agentic AI Foundation:** the Linux Foundation announced it on **Dec 9, 2025**, with founding contributions of Anthropic's MCP, Block's goose and OpenAI's AGENTS.md. Platinum members include AWS, Anthropic, Block, Bloomberg, Cloudflare, Google, Microsoft and OpenAI. [Linux Foundation press release](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation); [MCP blog, 2025-12-09](https://blog.modelcontextprotocol.io/posts/2025-12-09-mcp-joins-agentic-ai-foundation/)
- **AGENTS.md:** described as "a README for agents", stewarded by the Agentic AI Foundation, and "used by over 60k open-source projects". The nearest AGENTS.md in the directory tree takes precedence.
  - Listed supporters include Codex, Jules, Gemini CLI, the GitHub Copilot coding agent, Aider, Cursor, VS Code, Zed, Warp, Devin, Windsurf, Junie, Amp, RooCode, Factory, goose, opencode and Kilo Code. [agents.md](https://agents.md/)
- **MCP spec version 2026-07-28** (released July 28, 2026):
  - Stateless core: the initialize handshake and `Mcp-Session-Id` are removed.
  - Multi Round-Trip Requests, header-based routing and cacheable list results.
  - Authorization hardening: Client ID Metadata Documents replace Dynamic Client Registration.
  - MCP Apps and Tasks become official extensions.
  - Deprecated, with at least 12 months before removal: Roots, Sampling, Logging and legacy HTTP+SSE.
  - Tier-1 SDKs (TypeScript, Python, Go, C#) were updated on release day.
  - [MCP blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/); [changelog](https://modelcontextprotocol.io/specification/2026-07-28/changelog)
- **Agent Skills:** a folder with `SKILL.md` plus optional scripts, references and assets, loaded by progressive disclosure. "Originally developed by Anthropic, released as an open standard."
  - Listed clients include Claude Code, ChatGPT & Codex, GitHub Copilot, VS Code, Cursor, Gemini CLI, OpenCode, Amp, Goose, Junie, Kiro, Roo Code, TRAE, Factory and Mistral Vibe. [agentskills.io](https://agentskills.io/home)

#### Instruction-file support matrix (verified 2026-09-25)

| Tool | Native file(s) | Reads AGENTS.md? | Notes | Source |
|---|---|---|---|---|
| **GitHub Copilot (cloud agent, Copilot CLI)** | `.github/copilot-instructions.md`, `.github/instructions/*.instructions.md` | ✓, and also CLAUDE.md and GEMINI.md | "Coding agent" is now called "Copilot cloud agent" in the docs | [support matrix](https://docs.github.com/en/copilot/reference/custom-instructions-support); [repo instructions](https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions) |
| **Copilot in VS Code (chat/local agent)** | Same as above, plus `CLAUDE.md` (setting `chat.useClaudeMdFile`) | ✓ via `chat.useAgentsMdFile`; nested AGENTS.md is experimental (`chat.useNestedAgentsMdFiles`, off by default) | Copilot code review in VS Code does not read AGENTS.md | [VS Code custom instructions (9/16/2026)](https://code.visualstudio.com/docs/copilot/customization/custom-instructions); [matrix](https://docs.github.com/en/copilot/reference/custom-instructions-support) |
| **Copilot in JetBrains, Visual Studio, Eclipse, Xcode chat, and github.com chat** | copilot-instructions.md | ✗ for chat (✓ only for the cloud agent) | Path-specific instructions are not supported in Visual Studio | [matrix](https://docs.github.com/en/copilot/reference/custom-instructions-support) |
| **Cursor** | `.cursor/rules/*.mdc`; User Rules; Team Rules | ✓, root and nested (combined; more specific wins) | Plain `.md` in `.cursor/rules` is ignored. User Rules don't apply to Cmd/Ctrl+K | [Cursor rules](https://cursor.com/docs/context/rules) |
| **Claude Code** | `CLAUDE.md`, `.claude/CLAUDE.md`, `CLAUDE.local.md`, `~/.claude/CLAUDE.md`, `.claude/rules/` | ✓ **from v2.1.277** (shipped 2026-09-18), **only when there's no CLAUDE.md/CLAUDE.local.md**; configurable to read both. Depends on feature flags; the fallback is `@AGENTS.md` import | Does not read `AGENTS.local.md`, `AGENTS.override.md` or `.agents/` | [Claude Code memory docs](https://code.claude.com/docs/en/memory); [InfoWorld](https://www.infoworld.com/article/4224410/claude-code-now-also-accepts-instructions-in-openais-agents-md-format.html) |
| **OpenAI Codex** | `AGENTS.md` (native); `~/.codex/AGENTS.md`; `AGENTS.override.md` | ✓ native | Walks from the Git root to cwd; one file per directory; 32 KiB combined default (`project_doc_max_bytes`); `project_doc_fallback_filenames` | [Codex AGENTS.md docs](https://learn.chatgpt.com/docs/agent-configuration/agents-md) |
| **Gemini CLI** | `GEMINI.md` (global `~/.gemini/GEMINI.md`, workspace, just-in-time); `@file` imports; `/memory show\|reload` | ✓ via `"context": {"fileName": ["AGENTS.md","GEMINI.md"]}` | Page last updated 2026-06-18 | [GEMINI.md docs](https://geminicli.com/docs/cli/gemini-md/) |
| **Google Antigravity** | `AGENTS.md` or `GEMINI.md` (directory-scoped), `.agents/rules/*.md`; global `~/.gemini/AGENTS.md`, `~/.gemini/GEMINI.md`, `~/.gemini/config/rules/*.md` | ✓ (no frontmatter; always on for its directory) | 24 KB per file; always-on and global rules share a 20,000-token budget. Native AGENTS.md support dated to v1.20.3 (Mar 5, 2026) **[2ndary]** | [Antigravity rules](https://antigravity.google/docs/rules); [Prompt Shelf, 2ndary](https://thepromptshelf.dev/blog/google-antigravity-agents-md-rules-guide-2026/) |
| **Kiro** | `.kiro/steering/*.md` (inclusion modes: Always, fileMatch, Manual, Auto); `~/.kiro/steering/` | ✓: "AGENTS.md files… do not support inclusion modes and are always included" | Page dated 2026-09-25 | [Kiro steering](https://kiro.dev/docs/steering/) |
| **Devin Desktop (formerly Windsurf)** | `.devin/rules/` (legacy `.windsurf/rules/`) | ✓: root = always-on rule; subdirectory = auto glob rule | docs.windsurf.com redirects to docs.devin.ai | [Devin Docs AGENTS.md](https://docs.devin.ai/desktop/cascade/agents-md) |
| **OpenCode, Amp, Aider, Zed, Junie, Kilo** | various | ✓ (OpenCode `/init` writes AGENTS.md; Aider via `read: AGENTS.md` in `.aider.conf.yml`) | | [agents.md](https://agents.md/); [OpenCode docs](https://opencode.ai/docs); [Amp manual](https://ampcode.com/manual) |

#### MCP configuration per tool, and availability on free tiers
- **VS Code / Copilot:**
  - **Config:** `.vscode/mcp.json` or the user profile; also reads a portable `.mcp.json`. `@mcp` gallery in the Extensions view; `code --add-mcp`.
  - **Transports:** stdio and HTTP.
  - **Safety:** a trust prompt before starting local servers ("Local MCP servers can run arbitrary code"); optional sandboxing on macOS/Linux.
  - **Plans:** MCP ✓ on Copilot Free, Student, Pro, Pro+ and Max. [VS Code MCP docs (9/16/2026)](https://code.visualstudio.com/docs/copilot/customization/mcp-servers); [Copilot plans](https://docs.github.com/en/copilot/get-started/plans)
- **Cursor:**
  - **Config:** `.cursor/mcp.json` (project) or `~/.cursor/mcp.json` (global).
  - **Transports:** stdio, SSE and Streamable HTTP. One-click Marketplace install.
  - **Plans:** "MCPs, skills, and hooks" are listed only for Individual ($20) and above, not Hobby. [Cursor MCP docs](https://cursor.com/docs/context/mcp); [pricing](https://cursor.com/pricing)
- **Claude Code:**
  - **Command:** `claude mcp add --transport http|sse|ws|stdio`.
  - **Scopes:** local (default), project (`.mcp.json`, committed) and user. SSE is marked deprecated. OAuth via `/mcp`.
  - **Warning:** "Servers that fetch external content can expose you to prompt injection risk". [Claude Code MCP docs](https://code.claude.com/docs/en/mcp)
- **Gemini CLI:** `mcpServers` in settings.json or `gemini mcp add/list/remove`; stdio, SSE and HTTP; OAuth 2.0 (needs a local browser). [Gemini CLI MCP docs (2026-09-02)](https://geminicli.com/docs/tools/mcp-server/)
- **Other tools with MCP support:**
  - Codex: `codex mcp`. [CLI doc](https://learn.chatgpt.com/docs/codex/cli.md)
  - OpenCode: local and remote. [docs](https://opencode.ai/docs/mcp-servers/)
  - Copilot CLI. [docs](https://docs.github.com/en/copilot/concepts/agents/about-copilot-cli)
  - Cline: MCP Marketplace. [docs](https://docs.cline.bot/introduction/overview)
  - Kilo Code. [docs](https://kilo.ai/docs)
  - Zed: Zed Agent plus ACP external agents. [docs](https://zed.dev/docs/ai/overview)
  - Jules: added 2026-02-02. [changelog](https://jules.google/docs/changelog/)
  - Qwen Code. [GitHub](https://github.com/QwenLM/qwen-code)
- **Official MCP servers from hosting/backend vendors** (see §4 for links): Supabase (hosted, OAuth), Vercel (Beta), Netlify, Cloudflare, Neon (dev/test only) and Firebase (local, 80+ tools).

### Inferences
- **Recommended teaching pattern:**
  - One root `AGENTS.md`, plus a one-line `CLAUDE.md` containing `@AGENTS.md` for Claude Code sessions where AGENTS.md support is unavailable.
  - For Gemini CLI, set `context.fileName`.
  - For VS Code chat, enable `chat.useAgentsMdFile`.
- **Shared folder:** Antigravity and Gemini CLI both use `~/.gemini/`, so a global GEMINI.md could affect both tools. This is inferred from the two docs pages and not tested.
- **MCP as a hands-on week:** teach it with Copilot Free in VS Code (MCP included at $0) and an official hosting/backend MCP server such as Supabase, Neon or Vercel. Cursor Hobby users cannot follow along without paying.
- **MCP safety** is a teachable moment: both the VS Code and Claude Code docs warn about arbitrary code execution and prompt injection from MCP servers.

### Gaps
- Official Antigravity doc date for AGENTS.md support.
- Whether Devin Desktop Free, Kiro Free and Antigravity Free restrict MCP (not stated on the pricing pages fetched).
- Qwen Code's context filename (QWEN.md vs AGENTS.md).
- Full per-client MCP feature matrices (the MCP clients page no longer lists per-client feature support).

---

## 6. Pricing and limit changes in 2025–2026: evidence of volatility and implications for fallback plans

### Takeaway
Nearly every tool on the list changed its free tier, pricing model, name or ownership in the past 15 months. Many changes had one to six weeks' notice, and several were removals with no replacement. The course needs a primary stack plus at least one tested fallback per layer (editor agent, CLI agent, LLM API, host), and it should re-verify all limits the week before launch and mid-course.

### Cited Findings

#### Timeline (dates as reported by sources)

**2025**

| Date | Change | Source |
|---|---|---|
| 2025-06-16 → 07-04 | Cursor pricing backlash; apology and refunds on 07-04 **[snippet]** | [finout, 2ndary](https://www.finout.io/blog/what-happened-to-cursor-pricing-2026-guide-5-cost-cutting-tips) |
| 2025-06-18 | Copilot premium-request billing enforced | [GitHub Docs](https://docs.github.com/en/copilot/concepts/billing/copilot-requests) |
| 2025-06-30 | Copilot Chat open-sourced (MIT) | [VS Code blog](https://code.visualstudio.com/blogs/2025/06/30/openSourceAIEditorFirstMilestone) |
| 2025-07-08 | LM Studio becomes free for work | [LM Studio blog](https://lmstudio.ai/blog/free-for-work) |
| 2025-07-28 | Trae telemetry report | [The Register](https://www.theregister.com/2025/07/28/bytedance_trae_telemetry/) |
| 2025-09-04 | Netlify moves new accounts to credits (Free: 300 credits, hard cap) | [Netlify docs](https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/credit-based-pricing-plans/) |
| 2025-10-08 | Deadline for Anthropic consumer data-training choice (5-year retention if opted in) | [Anthropic](https://www.anthropic.com/news/updates-to-our-consumer-terms) |
| 2025-10 | Amp Free (ad-supported) launches; later closed and paused **[2ndary]** | [bitdoze](https://www.bitdoze.com/amp-code-free-ai-coding-agent/) |
| 2025-10-15 | Zed on Windows stable | [Zed blog](https://zed.dev/blog/zed-for-windows-is-here) |
| 2025-11 | Google Antigravity launches | [TechCrunch](https://techcrunch.com/2026/05/19/google-launches-antigravity-2-0-with-an-updated-desktop-app-and-cli-tool/) |
| 2025-12-06/07 | Reported Gemini API free-tier cuts **[2ndary]** | [CometAPI](https://www.cometapi.com/is-free-gemini-2-5-pro-api-fried-changes-to-the-free-quota-in-2025/) |
| 2025-12-09 | Agentic AI Foundation formed (MCP, AGENTS.md, goose) | [Linux Foundation](https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation) |

**2026**

| Date | Change | Source |
|---|---|---|
| 2026-02-03 | Firebase Cloud Storage becomes Blaze-only | [Firebase](https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024) |
| 2026-02-20 | Appwrite pauses inactive Free projects after 7 days | [Appwrite](https://appwrite.io/changelog/entry/2026-02-20-1) |
| 2026-03 | Devin Desktop/Windsurf moves from credits to daily and weekly quotas | [Devin docs](https://docs.devin.ai/desktop/accounts/quota) |
| 2026-03-12/13 | Copilot Student plan created; premium model self-selection removed for students | [GitHub changelog](https://github.blog/changelog/2026-03-13-updates-to-github-copilot-for-students/) |
| 2026-04-15 | Qwen Code free OAuth tier discontinued | [Qwen Code docs](https://qwenlm.github.io/qwen-code-docs/en/users/configuration/auth/) |
| 2026-04-24 | Copilot starts training on Free, Pro and Pro+ interaction data by default (opt-out) | [GitHub blog](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/) |
| 2026-05-06 | Claude Code 5-hour limits doubled | [Anthropic](https://www.anthropic.com/news/higher-limits-spacex) |
| 2026-05-15 | Roo Code shut down | [VS Marketplace](https://marketplace.visualstudio.com/items?itemName=RooVeterinaryInc.roo-cline) |
| 2026-05-19 | Antigravity 2.0 with new Ultra tiers; Gemini CLI transition announced | [Antigravity blog](https://antigravity.google/blog/changes-to-antigravity-plans); [discussion #27274](https://github.com/google-gemini/gemini-cli/discussions/27274) |
| 2026-06-01 | Copilot switches to AI Credits (premium requests retired; fallback model removed); Gemini 2.0 Flash shut down | [GitHub changelog](https://github.blog/changelog/2026-06-01-updates-to-github-copilot-billing-and-plans/); [Gemini changelog](https://ai.google.dev/gemini-api/docs/changelog) |
| 2026-06-02 | Windsurf renamed Devin Desktop | [Devin FAQ](https://docs.devin.ai/desktop/devin-desktop-faq) |
| 2026-06 (mid) | Cursor acquires Continue; Continue data deleted after 2026-07-15 **[2ndary]** | [continue.dev](https://continue.dev); [dev.to](https://dev.to/leobaniak/cursor-acquires-continue-and-gives-its-users-a-july-15-export-deadline-5dkn) |
| 2026-06-18 | Gemini CLI and Code Assist stop serving the free, AI Pro and AI Ultra consumer tiers | [Google deprecation](https://developers.google.com/gemini-code-assist/docs/deprecations/code-assist-individuals) |
| 2026-06-24 | Copilot Free and Student become Auto-model only | [GitHub changelog](https://github.blog/changelog/2026-06-24-changes-to-model-selection-for-free-and-student-plans/) |
| 2026-06-25 | Cursor closes free student Pro to new sign-ups | [Cursor help](https://cursor.com/help/account-and-billing/student-discount) |
| 2026-06-29 | Appwrite deletes paused Free projects after 90 days | [Appwrite](https://appwrite.io/changelog/entry/2026-06-29) |
| 2026-07-15 | Anaconda acquires Kilo Code (stays free and MIT) | [Anaconda](https://www.anaconda.com/blog/kilo-code-joins-anaconda-what-builders-should-know) |
| 2026-07-28 | MCP spec 2026-07-28 released (stateless; deprecations) | [MCP blog](https://blog.modelcontextprotocol.io/posts/2026-07-28/) |
| 2026-07-30 | GitHub Models retired | [GitHub changelog](https://github.blog/changelog/2026-07-30-github-models-is-now-retired/) |
| 2026-08-14 | SpaceX completes Cursor acquisition **[snippet]** | [9to5mac](https://9to5mac.com/2026/08/14/spacex-lands-deal-to-likely-purchase-claude-code-and-openai-codex-competitor/) |
| 2026-08-16 → 09-21 | Groq drops Llama from free/dev plans and runs further model swaps | [Groq](https://console.groq.com/docs/deprecations) |
| 2026-08-19 | Google AI Pro free for 12 months for US college students (sign up by Dec 31, 2026) | [Google blog](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/) |
| 2026-09-14 | Claude weekly limits reset to +25% over the original baseline (net −17% versus the temporary boost) | [BleepingComputer](https://www.bleepingcomputer.com/news/artificial-intelligence/anthropic-is-cutting-claude-codes-current-weekly-limits-by-17-percent/) |
| 2026-09-18 | Gemini 2.5 API access limited to prior users; Claude Code v2.1.277 adds AGENTS.md | [Gemini changelog](https://ai.google.dev/gemini-api/docs/changelog); [Claude Code memory docs](https://code.claude.com/docs/en/memory) |

**Upcoming**

| Date | Change | Source |
|---|---|---|
| 2026-10-10 | Devin Pro free SWE-2 perk ends | [devin.ai/pricing](https://devin.ai/pricing) |
| 2026-10-14 | GPT-5.5 retires from Codex | [learn.chatgpt.com pricing](https://learn.chatgpt.com/docs/pricing) |
| 2026-10-31 | Deadline to claim the ChatGPT Plus student offer **[snippet]** | [OpenAI Help](https://help.openai.com/en/articles/20001493-chatgpt-back-to-school-offer-for-students) |
| 2026-12-31 | Deadline to sign up for Google's student AI Pro offer | [Google blog](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/) |

- **Stale official pages:** Google's own Gemini CLI README and quota page still showed the old free quotas months after the June 18 cutoff. [README](https://github.com/google-gemini/gemini-cli); [quota page](https://geminicli.com/docs/resources/quota-and-pricing)
- **Unpublished Gemini limits:** Google stopped publishing Gemini API free-tier numbers on its rate-limits page ("view in AI Studio"). [rate limits](https://ai.google.dev/gemini-api/docs/rate-limits)

### Inferences
- **Volatility pattern:** "free" is becoming "credits with a hard cap" (Copilot AI Credits, Netlify credits, Kiro credits, JetBrains credits, Devin quotas), and fallback-to-cheaper-model behaviour is disappearing (Copilot removed it on 2026-06-01). Students will hit walls mid-exercise, so teach them how to read their usage dashboards in week 1.
- **Suggested layered fallback plan** (inferred from the findings above):
  - **Editor agent:** primary VS Code + Copilot Free/Student. Fallbacks: Antigravity (18+), then Cline or Kilo Code with a free API or Ollama.
  - **CLI agent:** primary Copilot CLI (included in Copilot Free). Fallbacks: Antigravity CLI, then OpenCode (free Zen models) or Aider with a free API. Paid optional: Claude Code (Pro $20) or Codex (Plus $20).
  - **LLM API for app features:** primary Gemini 3.x Flash-Lite (adults outside the EEA/UK/CH). Fallbacks: Groq, then OpenRouter `:free`, then Cloudflare Workers AI, then local Ollama. Design every lesson around an OpenAI-compatible base URL, so swapping providers is a config change.
  - **Hosting/backend:** primary GitHub Pages, then Vercel Hobby (personal repos) or Cloudflare Workers. Backend: Supabase, falling back to Neon or Turso. Avoid Render Postgres (30-day expiry) and Firebase for Functions or Storage.
- **Pre-course checklist:** re-verify one week before launch and at the midpoint:
  - Copilot Free/Student credit allowances.
  - Antigravity free limits.
  - Gemini API free RPD (in AI Studio).
  - Groq and OpenRouter free model lists.
  - Netlify, Vercel and Supabase free-plan terms.
- **Deadline-driven offers:** the Google student AI Pro offer (sign up by Dec 31, 2026) and the ChatGPT Plus student offer (claim by Oct 31, 2026 [snippet]) could be timed to the course. Both auto-renew at about $20/mo, so remind students to cancel.

### Gaps
- An official source for the Aug 2025 Claude weekly-limit introduction (not re-verified; the search budget was exhausted).
- The exact dates Amp Free was closed and paused.
- Official Google confirmation of the Dec 2025 Gemini API free-tier cuts.
- Cloudflare's "start with Workers" guidance date.
- Whether Jules's free tier survives Google's consumer consolidation into Antigravity.
