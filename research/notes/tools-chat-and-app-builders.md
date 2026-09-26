# Free and Low-Cost AI Chat Assistants, Browser App Builders, and Student Programs for a "Vibe Coding 101" Course (as of 25 September 2026)

How to read these notes:
- Every fact was checked on **2026-09-25** unless a row says otherwise. "Official" means the vendor's own pricing, docs, help, blog or changelog page. "3rd-party" means press, review or aggregator sites. Treat 3rd-party-only facts as **lower confidence**.
- ⚠️ marks facts that are likely to change soon, or that sources disagree on.
- These products changed very often in 2025–2026: model names, limits and whole products turned over within months. Anything here may be stale within weeks.
- Several official pages refused automated fetches (HTTP 403): chatgpt.com/pricing, openai.com/chatgpt/pricing, help.openai.com, chatgpt.com/codex/pricing. For OpenAI I used learn.chatgpt.com (official), TechCrunch/Engadget, and help-center URLs seen in search snippets.

---

## Q1. Chat assistants: what a student gets for $0 vs the cheapest paid tier (models, limits, coding features)

### Takeaway
All major assistants have a usable $0 tier.
- **ChatGPT Free/Go:** unlimited text chat on a small model (GPT-5.6 Luna, moving to GPT-6 Luna), plus limited Codex.
- **Claude Free:** Sonnet/Haiku with Artifacts, but no Claude Code and an 18+ age rule.
- **Gemini Free:** Gemini 3.6 Flash, Canvas, and some access to 3.1 Pro.
- **Cheapest paid tier that adds real coding-agent access:** ChatGPT Plus $20 (Codex on GPT-6 Sol), Claude Pro $20 (Claude Code), or Google AI Pro $19.99 (Jules and Antigravity).
- **Cheap paid tiers:** ChatGPT Go ($8) and Google AI Plus ($4.99) mostly raise chat and media limits. They add little for coding agents.
- ChatGPT's side-panel "canvas" was removed from current models in May 2026. Code now appears in inline code blocks.

### Cited Findings

#### Comparison table: major assistants (verified 2026-09-25)

| Service | $0 tier: models and limits | Cheapest paid tier (~$5–25) | Coding-relevant features | Sources |
|---|---|---|---|---|
| **ChatGPT** | **Free:** GPT-5.6 Luna default since Aug 2026. GPT-6 Luna rolling out to Free/Go from 22 Sep 2026 ("desktop app, subject to rollout"). **Unlimited text chats** from week of 10 Aug 2026. Separate limits on files, images, voice and image gen. Ads shown. | **Go $8/mo (US):** same Luna model as Free, ads, "lightweight coding tasks"/"limited Codex access". **Plus $20/mo:** GPT-6 Sol + Luna, no ads. | **Codex:** Free = "basic access to quick coding tasks". Go = "lightweight coding tasks". Plus = web/CLI/IDE + cloud integrations, **15–150 Sol or 350–3,000 Luna messages per 5 h**. Canvas removed 28 May 2026 (see below). | [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing) (official); [TechCrunch 2026-08-06](https://techcrunch.com/2026/08/06/openai-brings-unlimited-chatgpt-text-chats-to-free-users/); [TechCrunch 2026-09-22](https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/); [Engadget 2026-08-12](https://www.engadget.com/2234173/chatgpt-free-features-2026/) |
| **Claude** | **Free:** "Sonnet, Haiku". Web search, file creation, **Artifacts**, voice, memory, skills, connectors. **Claude Code NOT included.** Usage-based limits that reset on a 5-hour session. | **Pro $20/mo ($17/mo annual):** Opus, Sonnet, Haiku, Fable ("50% of weekly limits"). **Claude Code included.** Projects, research, Claude in Chrome. "At least 5x" Free usage per 5-hour session. | Artifacts on Free. Claude Code (terminal/IDE agent) on Pro+. Code execution and file creation on Free. | [claude.com/pricing](https://claude.com/pricing) (official) |
| **Google Gemini app** | **Free:** Gemini 3.6 Flash, "varying access to 3.1 Pro". **Canvas**, Deep Research, Gems, Gemini Live, image gen, 15 GB storage. | **AI Plus $4.99/mo:** 2x Free limits, video gen, 400 GB (160+ countries). **AI Pro $19.99/mo:** 4x Free limits, Gemini 3.1 Pro, **Jules** (async coding agent) with higher limits, **entry-level Google Antigravity**, 5 TB (150+ countries). | Canvas on Free. Jules and Antigravity are the coding-agent upsell on Pro. | [gemini.google/subscriptions](https://gemini.google/subscriptions/) (official) |
| **Microsoft Copilot (consumer)** | Free: chat, web-grounded answers, Edge page summaries, image creation and chat history (with sign-in), voice. Windows/macOS/iOS/Android/Edge. | Microsoft 365 Personal/Family/Premium add Copilot in Word/Excel/PowerPoint/Outlook/OneNote. Premium adds Analyst/Researcher agents. | No code-specific features documented on the official comparison page. | [Microsoft Support](https://support.microsoft.com/en-us/microsoft-365-copilot/what-s-the-difference-between-microsoft-copilot-free-and-copilot-in-microsoft-365) (official) |
| **DeepSeek** | Free web and app at chat.deepseek.com on V4-Pro / V4-Flash (1M-token context). V4 released 24 Apr 2026. V4.1-Flash GA 9 Sep 2026. Described as free with no fixed query cap. | No consumer subscription found. API is pay-per-token. | Strong coding models. No first-party app-builder features found. | [Wikipedia: DeepSeek (chatbot)](https://en.wikipedia.org/wiki/DeepSeek_(chatbot)); [deepseek-online.org](https://deepseek-online.org/) (3rd-party, low confidence) |
| **Qwen Chat (Alibaba)** | Free at chat.qwen.ai with "no usage caps" (3rd-party claim). Flagship Qwen3.8-Max (stable 3 Aug 2026). Multimodal. | No consumer subscription. | Web, desktop and mobile apps. | [felloai Qwen pricing](https://felloai.com/qwen-pricing/) (3rd-party); [qwen.ai/qwenchat](https://qwen.ai/qwenchat) (official landing) |
| **Mistral Le Chat** | Free: ~25 messages/day on mid-tier models (3rd-party). | **Pro $14.99/mo** (~6x Free, soft cap ~150/day, "No Telemetry Mode"). **Student plan $5.99/mo.** Team $24.99. | Not verified on official page. | [costbench](https://costbench.com/software/ai-chatbots/mistral/) (3rd-party); [grizzlypeaksoftware](https://www.grizzlypeaksoftware.com/articles/p/mistral-ai-pricing-in-2026-pro-costs-free-tier-limits-and-api-rates-lx4o2n2v) (3rd-party) ⚠️ |
| **Meta AI** | Free in WhatsApp/Instagram/Messenger/meta.ai. ⚠️ On 10 Jun 2026 daily prompt limits reportedly fell from 200 to **50 (logged-in)** and 100 to 25 (logged-out). | "Meta One" subscription (announced 27 May 2026): Plus $7.99/mo. | Not a coding tool. | [freeainews](https://freeainews.com/news/meta-ai-subscription-meta-one-plus-2026/) (3rd-party, low confidence) |
| **Grok (xAI)** | Free: ~10 prompts per 2 h, limited Grok 4.3. Free image gen removed Mar 2026. | SuperGrok Lite $10/mo, SuperGrok $30/mo (per grok.com/plans, Sep 2026, via 3rd-party). | Not verified. | [ai-toolbox Grok pricing](https://www.ai-toolbox.co/grok-models/grok-pricing-plans-api-2026); [suprmind](https://suprmind.ai/hub/grok/pricing/) (3rd-party) ⚠️ |

#### ChatGPT details
- **Free/Go chat limits:** "Unlimited" text chat on Free and Go started the week of 10 Aug 2026. There are "still…separate limits for files, images, voice, and image generation." — [TechCrunch 2026-08-06](https://techcrunch.com/2026/08/06/openai-brings-unlimited-chatgpt-text-chats-to-free-users/)
- **Free tier today:**
  - Model: Free is limited to GPT-5.6 Luna ("the smallest model") with a single reasoning option.
  - Files: 500 MB Library limit.
  - Ads: shown in "sponsored" sections on Free and Go, not on $20+ plans.
  - Rate limits: OpenAI doesn't publish exact limits; users check Settings > Usage.
  - Source: [Engadget 2026-08-12](https://www.engadget.com/2234173/chatgpt-free-features-2026/)
- ⚠️ A 3rd-party roundup claims Free file/image uploads are capped at 3/day and image gen at ~2–3/day. This is not confirmed officially. — [search summary citing ai-toolbox / theaicareerlab](https://theaicareerlab.com/blog/chatgpt-pricing-plans-explained)
- **GPT-6 (22 Sep 2026):** Sol and Luna are in "ChatGPT Work and Codex for most paid accounts". "Luna will be available in the desktop app and for Free and Go users", rolled out gradually. — [TechCrunch 2026-09-22](https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/)
- **Codex by plan (official, learn.chatgpt.com):**

  | Plan | Price | Codex model | Codex limit |
  |---|---|---|---|
  | Free | $0 | GPT-6 Luna | "Basic access to quick coding tasks" |
  | Go | $8 | GPT-6 Luna | "Lightweight coding tasks" / "Limited Codex access" |
  | Plus | $20 | Sol + Luna | 350–3,000 Luna or 15–150 Sol messages per 5 hours |
  | Pro | from $100 | Sol + Luna | 5x or 20x Plus |
  | Business | $20/user/mo annual ($25 monthly), 2+ users | Sol + Luna | Same as Plus |

  - Plus also includes web/CLI/IDE access, cloud integrations, and a browser with computer use (regional limits).
  - Business adds no default training and GitHub integration.
  - "GPT-5.5 retires from ChatGPT, ChatGPT Work, and Codex on all plans on October 14, 2026."
  - Source: [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing)
- **Go availability:** launched in India Aug 2025 and went global 15 Jan 2026 at $8/mo, now ~98 countries with local pricing (e.g., INR 399 in India). Go reportedly adds more uploads, image gen, memory, projects and custom GPTs over Free. — [felloai / techjacksolutions via search](https://techjacksolutions.com/ai-tools/chatgpt/chatgpt-pricing/) (3rd-party) ⚠️
- **Canvas removed:**
  - On 28 May 2026 OpenAI reportedly removed Canvas from GPT-5.5 Instant/Thinking and replaced it with in-chat "writing blocks" and "code blocks", available on every plan.
  - Legacy access continued briefly on older models (GPT-4.5 until 27 Jun 2026).
  - Sources: [Krasa.ai](https://www.krasa.ai/news/openai-gpt-5-5-instant-writing-coding-blocks-canvas-removed-may-2026); [ai-toolbox](https://www.ai-toolbox.co/chatgpt-management-and-productivity/how-to-use-chatgpt-canvas-guide-2026) (3rd-party). The official [Model Release Notes](https://help.openai.com/en/articles/9624314-model-release-notes) returned 403, so this is not confirmed on an OpenAI page. ⚠️
  - History: Canvas with Python execution reached all Free users on 10 Dec 2024. — [VentureBeat](https://venturebeat.com/ai/openai-expands-chatgpt-canvas-to-all-users)

#### Claude details
- **Free plan (official pricing page):** $0; models "Sonnet, Haiku"; web search, file creation, **Artifacts**, voice mode, memory, skills, connectors; **Claude Code not included**. — [claude.com/pricing](https://claude.com/pricing)
- **Pro plan:**
  - Price: "$20 if billed monthly" / "$17 per month with annual subscription".
  - Models: Opus, Sonnet, Haiku, and Fable. The page says Fable is limited to "50% of weekly limits".
  - Adds Claude Code, Claude Design/Slides/Docs, Projects, research, Claude in Chrome.
  - Usage: "at least 5x" Free per 5-hour session.
  - Max starts at $100/mo.
  - Source: [claude.com/pricing](https://claude.com/pricing)
- ⚠️ **Free model version:** the official page lists only "Sonnet, Haiku". A 3rd-party source says Free has run **Claude Sonnet 5** since 1 Jul 2026. — [datastudios / felloai via search](https://www.datastudios.org/post/claude-free-limits-updated-usage-restrictions-message-caps-and-file-upload-rules)
- **Free message counts:** 3rd-party estimates are "roughly 15 to 40 messages every 5 hours". Anthropic publishes no fixed number. — [freeacademy.ai](https://freeacademy.ai/blog/claude-free-plan-limits-2026) (3rd-party)
- **Current Anthropic lineup:**
  - Fable 5 released June 2026; Fable 5.1 / Mythos 5.1 in Sep 2026.
  - Opus 5 on 24 Jul 2026; **Opus 5.5 on 22 Sep 2026**.
  - Sonnet 5.5 and Haiku 5.5 due "in the coming weeks".
  - Sources: [TechCrunch 2026-09-22](https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/); [Anthropic: Claude Sonnet 5](https://www.anthropic.com/news/claude-sonnet-5); [Anthropic: Fable 5.1](https://www.anthropic.com/claude-fable-and-mythos-5-1)

#### Gemini details (official)
- **Free:** Gemini 3.6 Flash; "Varying access to 3.1 Pro"; image gen/editing; Deep Research; Gemini Live; **Canvas**; Gems; Gemini Notebook; 15 GB storage.
- **AI Plus ($4.99/mo):** "2x higher usage limits than Free"; over 160 countries.
- **AI Pro ($19.99/mo):** "4x higher usage limits than Free"; "Jules with higher limits for asynchronous coding"; "Entry-level Google Antigravity access"; over 150 countries.
- The page gives **no daily prompt counts**.
- Source: [gemini.google/subscriptions](https://gemini.google/subscriptions/)

### Inferences
- **Zero-cost baseline for the whole course:** ChatGPT Free, Claude Free and Gemini Free all offer unlimited or generous chat plus in-chat code generation and preview:
  - Claude Artifacts and Gemini Canvas render runnable HTML/JS apps in the browser for free.
  - ChatGPT Free no longer has the side-panel canvas.
  - For "see your app run instantly in chat", Claude Artifacts (18+ only) and Gemini Canvas are the strongest free options.
- **Agentic coding tools** (Codex beyond "basic", Claude Code, Jules/Antigravity) need about $20/mo. The exception is ChatGPT Free/Go's limited Codex, so a course could require Codex-Free for one or two lessons and treat $20 tiers as optional.
- **ChatGPT Go ($8) and Google AI Plus ($4.99)** are cheap but mainly raise chat limits. Neither is worth requiring for coding.
- **Model names churned monthly in 2026** (GPT-5.5 → 5.6 → 6, Sonnet 4.5 → 5, Opus 5 → 5.5). Course materials should say "the default free model" rather than naming versions.

### Gaps
- Could not fetch official OpenAI pricing or help pages (403). Exact Free/Go caps on uploads, image gen and Codex tasks are not published or not verified.
- No official numeric limits for Claude Free or Gemini Free (both are dynamic).
- Mistral, Grok, Meta AI, Qwen and DeepSeek figures come only from 3rd-party sources. Official pricing pages were not fetched.
- Microsoft Copilot's free model name and numeric limits are not officially documented on the page I checked.

---

## Q2. Browser "vibe coding" app builders: free credits and what can realistically be built

### Takeaway
- **Google AI Studio Build mode** is the most generous $0 builder:
  - full-stack React + Node, Firestore/Auth, GitHub two-way sync, Cloud Run deploy, no card needed;
  - but it is 18+ and free-tier data may be used for training.
- **Free tiers too thin to finish a project:** Lovable (5 credits/day, max 30/month), Base44 (25 message credits/month), v0 ($5/month, 7 messages/day) and Replit Starter (Lite build, 1 published app that expires after 30 days). Each is fine for a demo, not for 8 weeks of iteration.
- **Bolt Free** (1M tokens/month, 300K/day, hosting, private projects) sits in the middle.
- **Retired:** GitHub Spark (shut 31 Aug 2026) and Firebase Studio (sign-ups closed 22 Jun 2026) must **not** be used.
- **Cheapest paid tiers:** mostly $16–$25/mo.

### Cited Findings

#### App-builder comparison (verified 2026-09-25)

| Builder | Free plan | Cheapest paid | Deploy / GitHub / notable | Status | Sources |
|---|---|---|---|---|---|
| **Google AI Studio (Build mode)** | Free, no credit card. Compute-based limits that "refresh every five hours" (3rd-party). ⚠️ Since 1 Apr 2026 Pro models reportedly not on the free API tier (Flash/Flash-Lite only). | Google AI subscriptions / paid API billing | Full-stack: React frontend + "Node.js runtime… database connections, and npm". Auto-provisioned Firestore and Firebase Auth. Native Android (Kotlin/Compose) with browser emulator. **Two-way GitHub sync.** Deploy to **Cloud Run**. ZIP export. `GEMINI_API_KEY` kept server-side. | Active; recommended successor to Firebase Studio | [ai.google.dev Build mode](https://ai.google.dev/gemini-api/docs/aistudio-build-mode) (official); [getaiperks](https://www.getaiperks.com/en/ai/google-ai-studio-vibe-coding-free), [datastudios](https://www.datastudios.org/post/google-ai-studio-free-plans-trials-and-subscriptions-access-tiers-limits-and-upgrade-paths) (3rd-party) |
| **Firebase Studio** | n/a | n/a | Migrate to Google AI Studio or Antigravity | ❌ **Sunset.** Announced 19 Mar 2026. "New workspace creation and user signup are disabled" 22 Jun 2026. Shut down and data deleted 22 Mar 2027. | [Firebase docs](https://firebase.google.com/docs/studio/migrating-project) (official) |
| **Replit** | **Starter ($0):** daily Agent credits with a monthly cap. **Lite build only.** "1 free published app" that "automatically go[es] down after 30 days" with a "Made with Replit" badge. 2 GB storage. No full build, Plan Mode, connectors or AI Integrations. | **Core $20/mo** ($18 annual): up to 30 h/month Free-Mode chat, up to 60 Free-Mode projects, plan mode, AI integrations. Pro $100/mo. | **Free Mode** (18 Aug 2026) runs on GPT-5.6 Luna and lets Starter/Core/Pro use Agent without spending credits. Starter keeps "its existing limits". Paid escalations need confirmation. | Active; pricing reworked Aug 2026 | [Starter docs](https://docs.replit.com/billing/plans/starter-plan), [Free Mode blog](https://replit.com/blog/replit-introduces-free-mode), [Free Agent Mode docs](https://docs.replit.com/help/free-agent-mode), [replit.com/pricing](https://replit.com/pricing) (official); ⚠️ one 3rd-party source says Core is $25 ([costbench](https://costbench.com/software/developer-tools/replit/)) |
| **Lovable** | **Free:** "5 per day, up to 30 per month" build credits, 20 Cloud credits/mo, 4 AI credits/mo. Public/private projects. **GitHub sync.** No code download, no custom domain, badge stays. | **Pro from $25/mo** (100 credits). Rollover and top-ups ($0.30/credit). | GitHub sync on Free. Lovable Cloud hosting. ⚠️ Current chat pricing "applies through October 31, 2026", so a change is coming. | Active | [Lovable plans](https://docs.lovable.dev/introduction/subscription-plans), [plans & credits](https://docs.lovable.dev/introduction/plans-and-credits), [lovable.dev/pricing](https://lovable.dev/pricing) (official) |
| **Bolt.new** | **Free:** "300K tokens daily limit", "1M tokens per month". Hosting included. Public and private projects. Bolt branding on sites. No custom domain. | **Pro $25/mo:** starts at 10M tokens/mo, custom domain, no branding, token rollover. | Hosting included on Free | Active | [bolt.new/pricing](https://bolt.new/pricing) (official) |
| **v0 (Vercel)** | **Free:** "$5 of included monthly credits", "7 message/day limit", Design Mode, **GitHub sync, Vercel deployment**. | Next tier shown as "Plus", "$30 of included monthly credits per user" + "$2 of free daily credits on login". ⚠️ Price text rendered garbled ("$30$90/user/month"). Business $100/user/mo adds "Training opt-out by default". | GitHub + Vercel deploy on Free | Active | [v0.app/pricing](https://v0.app/pricing) (official) |
| **Base44** | **Free:** 25 message credits/mo, 100 integration credits/mo, "Up to 5 apps". ⚠️ 3rd-party sources also cite a 5-credit daily cap and 500 integration credits; the official page shows 100 and no daily cap. | **Starter $16/mo** ($192/yr): 100 message / 2,000 integration credits, in-app code editing, custom domain. GitHub only on Pro ($80) and above. | Built-in auth, DB, hosting | Active | [base44.com/pricing](https://base44.com/pricing) (official); [jetadmin](https://www.jetadmin.io/blog/base44-pricing-2026-guide-to-plans-credits-and-real-total-cost/) (3rd-party) |
| **Anything (formerly Create.xyz)** | Free plan: "limited credits" per official page. ⚠️ 3rd-party figures conflict: 3,000 credits/mo vs "no free tier". | **Pro $19/mo annual** ($24 monthly per 3rd-party), 20K credits/mo, private projects, custom domains, remove branding. | Code export, "Submit to App Store" | Active | [create.xyz/pricing](https://www.create.xyz/pricing) (official); [vibecoding.app](https://vibecoding.app/blog/anything-com-review) (3rd-party) |
| **Same (same.new)** | Not verified: pricing page returned HTTP 429 and search found nothing. | — | — | Unknown | — |
| **GitHub Spark** | n/a | Was in Copilot Pro+ ($39) | "Apps you've already deployed will continue to work" | ❌ **Retired.** From 4 Aug 2026 no new users or apps. Export access ended **31 Aug 2026**. GitHub Models retired 30 Jul 2026. | [GitHub changelog 2026-08-04](https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/) (official) |
| **Claude Artifacts** | Included on Claude Free | Pro $20 | In-chat runnable apps | Active (18+) | [claude.com/pricing](https://claude.com/pricing) (official) |
| **Gemini Canvas** | Included on Gemini Free | AI Plus $4.99 / Pro $19.99 | In-chat app/document canvas | Active | [gemini.google/subscriptions](https://gemini.google/subscriptions/) (official) |
| **ChatGPT canvas** | ⚠️ Removed from current models 28 May 2026; replaced by inline writing/code blocks | — | — | Retired (reported) | [Krasa.ai](https://www.krasa.ai/news/openai-gpt-5-5-instant-writing-coding-blocks-canvas-removed-may-2026) (3rd-party) |

#### Supporting notes
- **AI Studio sharing costs:** "When sharing your apps with others, API calls count toward your usage limits. If you use paid models, costs may apply." — [ai.google.dev](https://ai.google.dev/gemini-api/docs/aistudio-build-mode)
- **Replit Free Mode limits:** "The word free describes the mode's credit treatment, not unlimited use." Replit does not disclose exact Starter daily credits. — [therundown.ai / nocode.mba via search](https://www.therundown.ai/tools/replit-free-mode) (3rd-party)
- **Replit Free Mode (official):** "Starter includes Free Mode with its existing limits. Core and Pro include a Free Mode allowance", which "resets every five hours and has a weekly limit". — [docs.replit.com](https://docs.replit.com/help/free-agent-mode)

### Inferences
- **Realistic free builds:**
  - Google AI Studio Build (18+) or Bolt Free can support a whole small project: a to-do app, quiz, or portfolio with a Firestore backend.
  - Lovable Free (≤30 credits/month) or Base44 Free (25/month) runs out after roughly one or two sessions of iteration. v0 Free (7 messages/day) is similar.
  - Replit Starter's single published app disappears after 30 days, so it can't host a final showcase.
- **Course design:** plan one "primary" builder the whole cohort can use for free, plus alternates:
  - Primary: Google AI Studio for adults, or Bolt / Gemini Canvas where under-18s are enrolled.
  - Alternates: Lovable, v0 and Replit as "sampler" lessons so students hit credit limits on purpose and learn what paid tiers buy.
  - Require exporting to GitHub (available free on AI Studio, Lovable, v0) so work survives product changes.
- Do not build curriculum around GitHub Spark, Firebase Studio, or ChatGPT canvas.

### Gaps
- Official numeric free limits for AI Studio Build are not published (only "usage limits").
- Replit Starter's daily Agent credit amount is not disclosed.
- Same.new pricing is unverified.
- v0 paid-tier price was rendered ambiguously.
- Anything free credit amount is unverified.
- No official data on age minimums for Lovable, Bolt, v0, Base44 or Replit (not checked in this pass).

---

## Q3. Student / education programs (as of Sep 2026): eligibility and duration

### Takeaway
- **Best free options for US college students:**
  - Google AI Pro free for 12 months (redeem by 31 Dec 2026).
  - ChatGPT Plus free for 4 months (claim by 31 Oct 2026).
  - GitHub Copilot Student (free, ongoing, but cut down in 2026).
  - Azure for Students ($100 credit, no card).
- **Outside the US:** Google offers AI Plus (not Pro) free for 12 months.
- **Ended:** Cursor's and Perplexity's free-for-students programs ended in 2026.
- **Claude for Education** is institution-only.
- Most offers are **US-, college- and 18+-oriented**, and several need a payment card with auto-renewal.

### Cited Findings

| Program | Offer | Eligibility | Duration / deadline | Catch | Source |
|---|---|---|---|---|---|
| **Google AI Pro (US)** | Free Google AI Pro (normally $19.99/mo): 4x limits, Gemini Spark, Gmail/Docs, 5 TB | US college students, **18+**, verified via SheerID | 12 months; **redeem by 31 Dec 2026**; re-verify yearly | "Valid payment method required"; auto-renews at standard price | [blog.google 2026-08-19](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/) (official); [Google One Help](https://support.google.com/googleone/answer/17422238?hl=en) |
| **Google AI Plus (non-US)** | Free AI Plus (normally $4.99/mo): "2x usage limits", 400 GB | Students in 140+ markets **except US, Bolivia, Albania, Canada, Macau, Hong Kong, Tunisia** | 12 months | ⚠️ Official blog says "2x"; MacRumors/3rd-party say "4x" | [blog.google](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/); [MacRumors](https://www.macrumors.com/2026/08/19/students-free-year-google-ai-pro/) |
| **ChatGPT Plus – Back to School 2026** | 4 free monthly billing periods of Plus (~$80 value), incl. ChatGPT Work | Full- or part-time students at eligible **US** degree-granting institutions; SheerID | **Claim by 31 Oct 2026** | Payment method required; renews at $20/mo | [OpenAI Help Center](https://help.openai.com/en/articles/20001493-chatgpt-back-to-school-offer-for-students) (official, read via search snippet; direct fetch 403) |
| **GitHub Copilot Student** (in GitHub Student Developer Pack) | Free Copilot "Student" plan: "full feature set including agents (except third-party ones)", unlimited completions, **auto model selection only** | Verified GitHub Education students | Ongoing while verified | Separate plan since **13 Mar 2026**; premium models (Claude Opus/Sonnet, GPT-5.4 etc.) no longer self-selectable. From 1 Jun 2026, reportedly **200 AI Credits/mo**. Auto-only model selection since 24 Jun 2026. | [GitHub Docs](https://docs.github.com/en/copilot/concepts/billing/individual-plans), [Changelog 2026-03-13](https://github.blog/changelog/2026-03-13-updates-to-github-copilot-for-students/), [Changelog 2026-06-24](https://github.blog/changelog/2026-06-24-changes-to-model-selection-for-free-and-student-plans/) (official); 200-credit figure via [rottenwifi](https://rottenwifi.com/updates-to-github-copilot-for-students-in-2026-what-changed-and-how-to-get-it/) (3rd-party) ⚠️ |
| **Azure for Students** | $100 Azure credit for 12 months, 20+ free-for-12-months services, 65+ always-free services, Azure OpenAI / Microsoft Foundry access | "Full-time university students" | 12 months; renews annually while a student | "No credit card required" | [azure.microsoft.com/free/students](https://azure.microsoft.com/en-us/free/students) (official) |
| **Claude for Education** | Institution-wide access with Learning Mode (Socratic) | Only via the university; no individual application | Per institution | Partner list (3rd-party): Northeastern, Syracuse, Champlain, Dartmouth, UVA, Pitt, USF, Columbia, Stanford, LSE, Northumbria | [claude.com/pricing](https://claude.com/pricing) (official, Education plan listed); [Stanford UIT](https://uit.stanford.edu/service/claude); [aistudentdiscount](https://aistudentdiscount.com/claude-university-education/) (3rd-party) |
| **Cursor** | ❌ Legacy student discount (free Pro year) closed to new sign-ups **25 Jun 2026** | Now: undergrad credits at campus/online events; request form for grad students, researchers, educators | — | Existing redeemers keep their rate until expiry, then $20/mo | [cursor.com help](https://cursor.com/help/account-and-billing/student-discount) (official) |
| **Perplexity** | ❌ Free year ended (Back to School campaign expired Jan 2026). Now "Education Pro" at ~$10/mo (50% off) + 1 free month. | .edu email verification | — | 3rd-party only | [perplexity.ai/students](https://www.perplexity.ai/students) (official page exists, not fetched); [lightnode](https://go.lightnode.com/tech/perplexity-pro-for-students-free) (3rd-party) ⚠️ |
| **JetBrains** | Free educational IDE licenses include **AI Free**: unlimited local completion (Mellum), ~3 AI credits per 30 days of cloud AI; AI Assistant and Junie usable | Verified students | Annual edu license | Tiny cloud quota | [JetBrains KB](https://youtrack.jetbrains.com/articles/SUPPORT-A-2862/Are-the-AI-Assistant-and-Junie-plugins-available-for-students-educational-subscriptions) (official); quota figure from [altaitools](https://altaitools.com/jetbrains-ai-tools/) (3rd-party) |
| **Lovable** | 50% off Pro for up to 12 months (100 credits/mo, billed monthly) | Students and teachers with academic email | Up to 12 months | Paid | [docs.lovable.dev](https://docs.lovable.dev/introduction/subscription-plans) (official) |
| **Mistral Le Chat** | Student plan $5.99/mo | Students | — | 3rd-party only | [costbench](https://costbench.com/software/ai-chatbots/mistral/) ⚠️ |

- **Copilot conflict:** GitHub's marketing plans page still says students "can access Copilot Pro at no cost". The docs and changelog say students are on the separate, more limited **Copilot Student** plan. Treat the docs and changelog as authoritative. — [github.com/features/copilot/plans](https://github.com/features/copilot/plans) vs [GitHub Docs](https://docs.github.com/en/copilot/concepts/billing/individual-plans)

### Inferences
- An 8-week course with international or under-18 learners **can't depend on** student offers. Most are US-only, college-only, 18+, and/or need a card with auto-renewal.
- **For US college students:** suggest claiming Google AI Pro (by 31 Dec 2026) and ChatGPT Plus (by 31 Oct 2026) in week 1, timed so they cover the course. Also teach students to cancel before renewal.
- **Copilot Student** is the most durable free coding-agent option for verified students, but its model access was cut twice in 2026.

### Gaps
- Could not directly verify the OpenAI student offer page (403) or the Perplexity student page.
- No info on OpenAI "ChatGPT Edu" pricing for individuals (contact sales only).
- Did not check Claude student-ambassador or API-credit programs, or any Google AI Pro offer for under-18 or K-12 students.

---

## Q4. Privacy/training defaults, age requirements and regional availability

### Takeaway
- **Free/consumer tiers of ChatGPT, Claude, Gemini, Google AI Studio and GitHub Copilot may all use student inputs for training by default**, with opt-outs.
- **Google AI Studio's free tier also allows human review.** EEA/UK/Swiss users get paid-tier protections.
- **Age rules differ sharply:**
  - Claude: 18+ everywhere.
  - Google AI Studio / Gemini API: 18+.
  - ChatGPT: 13+ with parental consent.
  - Gemini app: 13+ (under-13 via Family Link, not in EEA/UK/CH).
- **DeepSeek** stores data in China and is banned on government devices in several countries.
- **Course rule:** never paste secrets or API keys. Turn off training toggles in lesson 1.

### Cited Findings

#### Training defaults and opt-outs

| Service | Default on free/consumer tier | How to opt out | Notes | Sources |
|---|---|---|---|---|
| ChatGPT (Free/Go/Plus) | Chats **used for training by default** | Settings → Data Controls → "Improve the model for everyone" → off. **Temporary Chat** is not used for training and not saved. | Business: "no default data training" | [OpenAI Help: Data controls](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt), [How your data is used](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance) (official, via search); [learn.chatgpt.com](https://learn.chatgpt.com/docs/pricing) |
| Claude (Free/Pro/Max) | Since consumer-terms change of **28 Aug 2025**, chats and coding sessions are used for training unless opted out | claude.ai → Settings → Privacy → model-improvement toggle off | Retention: 30 days if opted out vs up to 5 years if opted in. ⚠️ Policy published 8 Jun 2026 (effective 7 Jul) says safety-flagged chats may still be used. Team/Edu/API: no training by default. | [Anthropic: Updates to Consumer Terms](https://www.anthropic.com/news/updates-to-our-consumer-terms) (official); [strac.io](https://www.strac.io/blog/does-claude-train-on-your-data), [techcoffeehouse 2026-06-09](https://techcoffeehouse.com/2026/06/09/claude-training-data-opt-out-carve-out/) (3rd-party); [claude.com/pricing](https://claude.com/pricing) |
| Gemini app | "Keep Activity" (renamed from Gemini Apps Activity, Aug 2025) on: a sample of chats **and uploaded files** (from 2 Sep 2025) may go to **human reviewers** and be used for training | Turn Keep Activity off | Chats still kept up to 72 h. Human-reviewed chats kept up to 3 years even if deleted. | [Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961?hl=en) (official); [TechRadar](https://www.techradar.com/ai-platforms-assistants/gemini/gemini-warned-me-humans-might-review-my-chats-but-turning-it-off-comes-with-a-surprising-downside), [redact.dev](https://redact.dev/blog/turn-off-gemini-apps-activity) (3rd-party) |
| Google AI Studio / Gemini API (unpaid) | "Google uses the content you submit… to provide, improve, and develop Google products"; "human reviewers may read, annotate, and process your API input and output" | Use paid services | In **EEA, Switzerland, UK** the paid-service data terms apply "even though they are offered free of charge" | [Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms) (official) |
| GitHub Copilot Free/Pro/Pro+ (and Student) | From 24 Apr (2026), GitHub "may use interaction data" for training | Account settings opt-out | — | [github.com/features/copilot/plans](https://github.com/features/copilot/plans) (official) |
| v0 | Implied training on unless Business/Enterprise ("Training opt-out by default" is a Business feature) | — | Inference from pricing page | [v0.app/pricing](https://v0.app/pricing) (official) |
| Mistral Le Chat | Pro offers "No Telemetry Mode" | Upgrade | 3rd-party only | [grizzlypeaksoftware](https://www.grizzlypeaksoftware.com/articles/p/mistral-ai-pricing-in-2026-pro-costs-free-tier-limits-and-api-rates-lx4o2n2v) ⚠️ |
| DeepSeek | Data stored in China and reachable under the 2017 National Intelligence Law | — | Government-sector bans/restrictions in Italy, Australia, Taiwan (incl. **public schools**), South Korea and others | [TechCrunch 2025-02-03](https://techcrunch.com/2025/02/03/deepseek-the-countries-and-agencies-that-have-banned-the-ai-companys-tech); [Anonyome](https://anonyome.com/knowledge-center/ai-privacy/deepseek-privacy/); [stateofsurveillance](https://stateofsurveillance.org/news/deepseek-china-ai-global-bans-privacy-2026/) (3rd-party) |

#### Age requirements

| Service | Minimum age | Source |
|---|---|---|
| Claude | **18+ globally.** No under-18 version. App-store age signals enforced in some US states. | [Claude Help Center](https://support.claude.com/en/articles/13117299-minimum-age-requirement-access-restriction) (official) |
| Google AI Studio / Gemini API | **18+** ("You must be 18 years of age or older to use the APIs") | [Gemini API Terms](https://ai.google.dev/gemini-api/terms) (official) |
| ChatGPT | **13+.** Ages 13–17 need parental consent. As of Aug 2026, users estimated to be under 18 are auto-placed in "ChatGPT for Teens". | [OpenAI Help: Is ChatGPT safe for all ages?](https://help.openai.com/en/articles/8313401-is-chatgpt-safe-for-all-ages) (official, via search); [banthebots](https://www.banthebots.org/explainers/ai-chatbot-age-requirements) (3rd-party) |
| Gemini app | **13+** on personal/school accounts. Under-13 via parent-enabled Family Link supervised accounts. Supervised accounts not available in EEA/CH/UK. Teens 13–17 get a separate "teen experience". | [Google Families Help](https://support.google.com/families/answer/16109150?hl=en) (official); [Qustodio](https://www.qustodio.com/en/blog/is-google-gemini-safe/) (3rd-party) |
| GitHub (Copilot Student) | GitHub accounts 13+ (general GitHub policy; not re-verified this pass) | — (gap) |
| Google student offer | US AI Pro offer is **18+** | [blog.google](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/) |

#### Regional availability
- **Google AI Plus:** "Over 160 countries". **AI Pro / Ultra:** "Over 150 countries". — [gemini.google/subscriptions](https://gemini.google/subscriptions/)
- **ChatGPT Go:** global since 15 Jan 2026, ~98 countries with local pricing. — [techjacksolutions / aisubscriptioncomparison via search](https://aisubscriptioncomparison.com/pricing/global-price-map/) (3rd-party) ⚠️
- **ChatGPT Plus browser with computer use:** "regional limits". — [learn.chatgpt.com](https://learn.chatgpt.com/docs/pricing)
- **Gemini API / AI Studio:** apps offered to users in EEA/CH/UK must use Paid Services. — [Gemini API Terms](https://ai.google.dev/gemini-api/terms)
- **Student offers:** OpenAI's is US-only. Google's is US (Pro) / 140+ markets (Plus) with exclusions. — see Q3 sources

### Inferences
- **Under-18 or mixed-age cohorts:**
  - Claude (incl. Artifacts and Claude Code) and Google AI Studio can't be required.
  - ChatGPT (13+ with consent) and the Gemini app (13+) are the only major options.
  - Among builders, Bolt/Lovable/v0 age terms need checking before requiring them.
- **Lesson-1 privacy checklist:**
  1. Turn off ChatGPT "Improve the model", Claude model improvement, and Gemini Keep Activity.
  2. Use Temporary Chat for sensitive material.
  3. Never paste API keys, passwords or personal data (AI Studio free-tier inputs can be read by human reviewers).
  4. Use server-side env vars; AI Studio keeps `GEMINI_API_KEY` server-side.
- DeepSeek and Qwen are free and capable, but data-residency concerns and school/government bans make them unsuitable as *required* tools. Offer them as optional only.

### Gaps
- Did not verify age minimums for Lovable, Bolt, v0, Base44, Replit, Microsoft Copilot, Meta AI, Grok, Mistral, DeepSeek or Qwen.
- Could not fetch Anthropic's supported-countries list or OpenAI's supported-countries list.
- Exact default state of Claude's training toggle for *new* sign-ups in 2026 comes from 3rd-party sources. Anthropic's 2025 announcement described a user choice.

---

## Q5. Pricing and product volatility in 2025–2026 (for fallback planning)

### Takeaway
Volatility is extreme. In the ~9 months before Sep 2026:
- **Two app builders were shut down:** GitHub Spark and Firebase Studio.
- **One side-panel feature was removed:** ChatGPT canvas.
- **Two student freebies ended:** Cursor and Perplexity.
- **GitHub Copilot's student plan was cut twice.**
- **Replit and Lovable reworked or announced changes to credit models.**
- **Flagship models turned over roughly monthly.**

The course should name a primary tool and a ready fallback for every lesson, and re-verify tools the week before each cohort.

### Cited Findings

| Date | Change | Source |
|---|---|---|
| 28 Aug 2025 | Anthropic consumer terms: training on consumer chats unless opted out; 5-year retention if opted in | [Anthropic](https://www.anthropic.com/news/updates-to-our-consumer-terms) |
| Aug–Sep 2025 | Gemini Apps Activity renamed "Keep Activity"; uploaded files sampled for training from 2 Sep 2025 | [TechRadar](https://www.techradar.com/ai-platforms-assistants/gemini/gemini-warned-me-humans-might-review-my-chats-but-turning-it-off-comes-with-a-surprising-downside) (3rd-party) |
| Jan 2026 | Perplexity's free-year student campaign expired | [lightnode](https://go.lightnode.com/tech/perplexity-pro-for-students-free) (3rd-party) |
| 15 Jan 2026 | ChatGPT Go goes global at $8/mo | [techjacksolutions](https://techjacksolutions.com/ai-tools/chatgpt/chatgpt-pricing/) (3rd-party) |
| Mar 2026 | Grok Imagine free image generation removed | [ai-toolbox](https://www.ai-toolbox.co/grok-models/grok-pricing-plans-api-2026) (3rd-party) |
| 13 Mar 2026 | GitHub Copilot Student plan split from Copilot Pro; premium models removed for students | [GitHub Changelog](https://github.blog/changelog/2026-03-13-updates-to-github-copilot-for-students/) |
| 19 Mar 2026 | Firebase Studio sunset announced (sign-ups off 22 Jun 2026; shutdown 22 Mar 2027) | [Firebase docs](https://firebase.google.com/docs/studio/migrating-project) |
| 1 Apr 2026 | ⚠️ Gemini API/AI Studio free tier reportedly drops Pro models (Flash/Flash-Lite only) | [datastudios / nocode.mba via search](https://www.nocode.mba/articles/google-ai-studio-pricing) (3rd-party) |
| 15 Apr 2026 | Copilot removed from Word/Excel/PowerPoint/OneNote for free Copilot Chat users | [zevonix / datastudios via search](https://zevonix.com/microsoft-copilot-free-changes-in-2026-what-businesses-need-to-know/) (3rd-party) ⚠️ |
| 24 Apr 2026 | GitHub may use Copilot Free/Pro/Pro+ interaction data for training (opt-out) | [github.com/features/copilot/plans](https://github.com/features/copilot/plans) |
| 28 May 2026 | ChatGPT canvas removed from GPT-5.5 models, replaced by writing/code blocks | [Krasa.ai](https://www.krasa.ai/news/openai-gpt-5-5-instant-writing-coding-blocks-canvas-removed-may-2026) (3rd-party) |
| 1 Jun 2026 | GitHub Copilot moves all plans to usage-based "AI Credits". Individual sign-ups paused, then reopened 17 Jun 2026. | [GitHub Docs](https://docs.github.com/en/copilot/concepts/billing/individual-plans); [Changelog 2026-06-17](https://github.blog/changelog/2026-06-17-copilot-individual-plan-sign-ups-are-reopening/) |
| 10 Jun 2026 | Meta AI daily prompt limits reportedly cut (200 → 50 logged-in) | [freeainews](https://freeainews.com/news/meta-ai-subscription-meta-one-plus-2026/) (3rd-party) ⚠️ |
| 24 Jun 2026 | Copilot Free/Student limited to Auto model selection | [GitHub Changelog](https://github.blog/changelog/2026-06-24-changes-to-model-selection-for-free-and-student-plans/) |
| 25 Jun 2026 | Cursor closes student discount to new sign-ups | [Cursor help](https://cursor.com/help/account-and-billing/student-discount) |
| 30 Jul 2026 | GitHub Models retired | [GitHub Changelog](https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/) |
| 4–31 Aug 2026 | GitHub Spark closed to new users, then retired | [GitHub Changelog](https://github.blog/changelog/2026-08-04-upcoming-deprecation-of-github-spark-on-github-com/) |
| Week of 10 Aug 2026 | ChatGPT Free/Go get unlimited text chats on GPT-5.6 Luna | [TechCrunch](https://techcrunch.com/2026/08/06/openai-brings-unlimited-chatgpt-text-chats-to-free-users/) |
| 18 Aug 2026 | Replit launches "Free Mode" (GPT-5.6 Luna) and reworks Core/Pro allowances | [Replit blog](https://replit.com/blog/replit-introduces-free-mode) |
| 19 Aug 2026 | Google student offer: AI Pro (US) / AI Plus (intl) free for 12 months | [blog.google](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/) |
| 22 Sep 2026 | OpenAI GPT-6 Sol/Luna. Anthropic Opus 5.5. | [TechCrunch OpenAI](https://techcrunch.com/2026/09/22/openai-launches-gpt-6-sol-and-luna/); [TechCrunch Anthropic](https://techcrunch.com/2026/09/22/anthropic-releases-opus-5-5-with-lower-prices-and-fable-level-performance/) |
| **Upcoming:** 14 Oct 2026 | GPT-5.5 retires from ChatGPT and Codex on all plans | [learn.chatgpt.com](https://learn.chatgpt.com/docs/pricing) |
| **Upcoming:** 31 Oct 2026 | Lovable's current chat-pricing model "applies through October 31, 2026". ChatGPT student offer claim deadline. | [Lovable docs](https://docs.lovable.dev/introduction/plans-and-credits); [OpenAI Help](https://help.openai.com/en/articles/20001493-chatgpt-back-to-school-offer-for-students) |
| **Upcoming:** 31 Dec 2026 | Google student offer redeem deadline | [blog.google](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/) |
| **Upcoming:** 22 Mar 2027 | Firebase Studio fully shut down; data deleted | [Firebase docs](https://firebase.google.com/docs/studio/migrating-project) |

### Inferences
- **Suggested fallback pairs for the syllabus:**
  - Chat assistant: ChatGPT Free ↔ Gemini Free.
  - In-chat app preview: Gemini Canvas ↔ Claude Artifacts (18+).
  - Browser builder: Google AI Studio Build (18+) ↔ Bolt Free, with Lovable/v0 as samplers.
  - Coding agent: ChatGPT Codex (Free/Plus) ↔ GitHub Copilot Student ↔ Claude Code (Pro).
- **Protect student work:** require a GitHub export at the end of each week, so a builder's shutdown or credit change doesn't lose it.
- **Keep materials durable:** avoid model version names and exact credit numbers in slides. Keep a one-page "current limits" handout that is re-verified before each cohort.

### Gaps
- No single official changelog aggregates consumer-tier limit changes. Several dates above come only from 3rd-party sources (marked ⚠️).
- Couldn't confirm details of Lovable's post-31-Oct-2026 pricing (not yet announced in the docs I read).
