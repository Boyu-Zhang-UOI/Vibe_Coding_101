# Tool changes since 25 September 2026: row-by-row verification of TOOLS.md (checked 21 October 2026)

How to read these notes
- **Scope:** every row of `/Users/boyu/GitHub/Vibe_Coding_101/TOOLS.md` (dated 25 Sep 2026), checked against official pages and the baseline notes in `research/notes/tools-chat-and-app-builders.md` and `research/notes/tools-ide-cli-apis-hosting.md`.
- **Date checked:** every fact was checked on **2026-10-21** unless a row gives another date. A date in brackets after a page, for example (upd. 2026-10-20), is the page's own "last updated" stamp.
- **Source labels:**
  - **[official]:** the vendor's own page, opened in full.
  - **[official, snippet]:** a vendor page seen only in a search summary, usually because it returned 403.
  - **[3rd-party]:** press, a blog or a tracker, opened in full.
  - **[3rd-party, snippet]:** press, a blog or a tracker seen only in a search summary.
  - **[GitHub API]:** read from api.github.com.
  - Pricing pages were read through a summarizing fetch tool. Re-check the exact numbers by hand before printing them.
- **Status codes for each TOOLS.md claim:**
  - **ACCURATE:** still true.
  - **CHANGED:** the claim is now wrong or incomplete. The row says what changed, when, and the source.
  - **PRECISION:** not a change since September, but the current wording is looser than the sources support.
  - **UNVERIFIED:** could not be re-checked on 21 Oct. The last known state is given.

---

## 1. Chat assistants (TOOLS.md "Chat assistants", weeks 1–3): what changed for Gemini, ChatGPT and Claude?

### Takeaway
**The biggest change since September is Gemini Free.** Since **9 Oct 2026** it defaults to the **Flash-Lite** model, where it used to default to Flash with some Pro. AI Plus lost Pro, and Pro access now needs AI Pro ($19.99), which also adds the new Gemini 4 Argon. Canvas and Gems are still listed as free.

**ChatGPT:**
- GPT-5.5 was due to retire from ChatGPT and Codex on 14 Oct 2026 (12:00 PDT). The official pricing page documents the date, but only third-party pieces confirm that it actually happened.
- Free and Go users began getting **GPT-6 Luna** in the Chat tab from **8 Oct**, plus a new "Intelligent UI" that shows interactive components. It is not a code preview.

**Claude:** Claude Free moved to **Sonnet 5.5** (released 28 Sep). Prices, the 18+ rule and the training defaults are unchanged for all three assistants.

### Cited Findings

#### Row-by-row verification (TOOLS.md → status)

| TOOLS.md claim | Status | What the sources say (checked 2026-10-21) | Sources |
|---|---|---|---|
| **Gemini — free tier:** "Fast Flash model, some access to the Pro model; limits not published" | **CHANGED (9 Oct 2026)** | **Google's help page "Changes to Gemini model access and limits":**<br>• "Starting in October 2026, there will be changes to model availability for Gemini Apps when you use a personal account." The change applies on **9 Oct** for users without an AI plan; AI Plus users get an email with their date.<br>• "Auto will be the default setting for users without a Google AI plan." Auto sends most prompts to Flash-Lite and some to Flash or Pro. With smart model selection off, "chats for users without an AI plan will use Flash-Lite for all responses."<br>• Limits are compute-based and "refresh every 5 hours until you reach your weekly limit". Free gets "Standard limits"; Plus 2x; Pro 4x; Ultra 5x or 20x of Pro. No numbers are given.<br>**The subscriptions page** now lists Free as "Access to our Flash-Lite model".<br>**A third-party report** says Free chats are limited to a 32K-token context (128K on Plus, 1M on Pro). | [Gemini Apps Help 17004136](https://support.google.com/gemini/answer/17004136?hl=en) [official]; [gemini.google/subscriptions](https://gemini.google/subscriptions/) [official]; [Creative AI News](https://www.creativeainews.com/articles/gemini-free-tier-flash-lite-only-oct-9-2026/) [3rd-party] |
| **Gemini — cheapest paid:** "Google AI Plus $4.99 · AI Pro $19.99" | **ACCURATE (prices); CHANGED (what they include)** | **AI Plus ($4.99):** "Access to our Flash model". Pro is no longer listed.<br>**AI Pro ($19.99):** "Access to Gemini 4 Argon" plus Pro and Flash, 4x limits, Jules with higher limits, and entry-level Antigravity.<br>**Gemini 4 Argon:** announced 30 Sep. It went GA on **13 Oct 2026** on the paid Gemini API and for AI Pro/Ultra in the Gemini app. | [gemini.google/subscriptions](https://gemini.google/subscriptions/) [official]; [Gemini API changelog](https://ai.google.dev/gemini-api/docs/changelog) [official] (`gemini-4-argon` GA Oct 13); [DEV Community summary](https://dev.to/hassann/gemini-4-argon-is-out-5cpp) [3rd-party, snippet] |
| **Gemini — coding features:** "Canvas runs HTML/JS previews in the chat; Gems" | **ACCURATE (still listed free); UNVERIFIED (which model runs Canvas)** | Canvas and Gems are still under "Free" on the subscriptions page. Google has not said whether Canvas now runs on Flash-Lite. | [gemini.google/subscriptions](https://gemini.google/subscriptions/) [official]; [Creative AI News](https://www.creativeainews.com/articles/gemini-free-tier-flash-lite-only-oct-9-2026/) [3rd-party] |
| **Gemini — age:** "13+" | **ACCURATE (no change found)** | The help page mentions only that the earlier limit changes reached under-18 users on 24 Jul 2026. No new age rule was found. | [Gemini Apps Help 17004136](https://support.google.com/gemini/answer/17004136?hl=en) [official] |
| **Gemini — training:** "Yes if 'Keep Activity' is on; samples may be read by human reviewers" | **ACCURATE (no change found)** | Searches found no Keep Activity change in Sep–Oct 2026. The last tracked notice changes were 30 Apr 2026 (personalization) and 1 Jul 2026 (third-party/MCP connections). | [conductatlas tracker](https://conductatlas.com/platform/google-gemini/gemini-apps-privacy-notice/provision/CA-P-038253/keep-activity-setting-controls-chat-saving-and-ai-training/) [3rd-party, snippet] |
| **ChatGPT — free tier:** "Unlimited text chat on the small default model, with ads" | **ACCURATE; model name updated** | The official pricing page lists Free and Go as "GPT-6 Luna at Standard speed in the desktop app, subject to rollout".<br>OpenAI's release notes (quoted by third parties) say "Free and Go use GPT-6 Luna" in the **Chat** tab from **8 Oct 2026**, rolled out gradually. One OpenAI help article still said GPT-5.6 Luna.<br>Unlimited text chat has been in place since Aug 2026; no reversal was found. | [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing) [official]; [findskill.ai](https://findskill.ai/blog/chatgpt-gpt-6-free-intelligent-ui-what-changed-2026/) [3rd-party, quotes the [OpenAI release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes), which returned 403]; [LetsDataScience](https://letsdatascience.com/news/openai-brings-gpt-6-and-intelligent-ui-to-chatgpt-4f0d797c) [3rd-party] |
| **ChatGPT — cheapest paid:** "Go $8 · Plus $20" | **ACCURATE** | **Go:** $8.<br>**Plus:** $20, with Codex limits per 5 hours of GPT-6 Astra 5–45, GPT-6.1 Sol 15–160, GPT-6 Sol 15–150 and GPT-6 Luna 350–3,000.<br>**Pro:** now $100, $200 or $500.<br>**New model:** GPT-6.1 Sol (DevDay, 29 Sep 2026) is in Work and Codex for Plus and above, not in Chat, and not for Free or Go. | [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing) [official]; [Unite.AI](https://www.unite.ai/openai-unveils-gpt-6.1-sol-at-devday-with-new-codex-and-chatgpt-tools/) [3rd-party, snippet] |
| **ChatGPT — coding features:** "In-chat code blocks; basic Codex access for quick tasks. Side-panel canvas reportedly removed May 2026" | **ACCURATE + NEW feature** | **Codex on Free:** positioned for "quick coding tasks" on the pricing page. OpenAI help says "Codex is included across ChatGPT plans, including Free and Go", but **Codex Cloud** is not on Free or Go.<br>**New, "Intelligent UI":** from 7 Oct (paid) and 8 Oct (Free/Go), ChatGPT can "combine text, visuals, and interactive elements" such as calculators, bill splitters and games, built from OpenAI's component library. Nothing says it runs user HTML/JS, so it is **not** a Canvas/Artifacts equivalent. It has no separate quota; on web it can be turned down under Settings → Personalization → Layout and Visuals → Simple.<br>**Canvas:** no sign that the side-panel canvas came back. | [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing) [official]; [OpenAI Help: Codex](https://help.openai.com/en/articles/11369540-codex) [official, snippet]; [findskill.ai](https://findskill.ai/blog/chatgpt-gpt-6-free-intelligent-ui-what-changed-2026/) [3rd-party] |
| **ChatGPT — age:** "13+ with parental consent" | **UNVERIFIED (403); no change found** | help.openai.com returned 403. The search found only the earlier age-prediction and teen-experience rollout, with no Oct 2026 change. | [OpenAI Help: ChatGPT for teens](https://help.openai.com/en/articles/12652064-chatgpt-for-teens) [official, snippet] |
| **ChatGPT — training:** "Yes, opt out under Data Controls" | **ACCURATE (no change found)** | The latest US privacy-policy revision found was dated 10 Sep 2026 (some copies say 18 May 2026). Training details are in a help article (403). No change to the opt-out was found. | [OpenAI privacy policy](https://openai.com/policies/privacy-policy) [official, snippet] |
| **GPT-5.5 retirement (Known upcoming changes):** "14 Oct 2026: GPT-5.5 retires from ChatGPT and Codex" | **ACCURATE (scheduled); event itself confirmed only by 3rd parties** | The official page says "GPT-5.5 retires from Codex with ChatGPT sign-in on October 14, 2026, at noon PDT (19:00 UTC)". API and API-key Codex sessions are not affected.<br>Third parties add that ChatGPT, ChatGPT Work and Codex on all plans are covered and point Codex users to `gpt-5.6-sol`. A Towards AI post titled "How to Still Use GPT-5.5 After ChatGPT Retired It" implies it happened. No official post-event notice was fetched. | [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing) [official]; [LetsDataScience](https://letsdatascience.com/news/openai-retires-gpt-55-from-chatgpt-and-codex-1a6f69be) [3rd-party]; [Towards AI](https://pub.towardsai.net/how-to-still-use-gpt-5-5-after-chatgpt-retired-it-c2efba309ef3) [3rd-party, snippet] |
| **Claude — free tier:** "Mid-size and small models; limits not published" | **ACCURATE; model updated** | **Pricing page:** Free has "Sonnet and Haiku", with limits on a "rolling five-hour session window".<br>**Sonnet 5.5:** released **28 Sep 2026**. Simon Willison: "now the model used for the free tier on claude.ai". Anthropic's announcement says Haiku 5.5 is coming "in the coming weeks".<br>**Haiku 5.5:** GitHub's changelog of 7 Oct 2026 is titled "Claude Haiku 5.5 in GitHub Copilot", which implies it had shipped by then. | [claude.com/pricing](https://claude.com/pricing) [official]; [Simon Willison 2026-09-28](https://simonwillison.net/2026/Sep/28/claude-sonnet-5-5/) [3rd-party, reputable]; [Anthropic: Claude Sonnet 5.5](https://www.anthropic.com/claude-sonnet-5-5) (linked, not fetched); [GitHub changelog 2026-10-07](https://github.blog/changelog/2026-10-07-claude-haiku-5-5-in-github-copilot) [official, title only] |
| **Claude — cheapest paid:** "Pro $20 ($17/mo annual) — includes Claude Code" | **ACCURATE** | "$17/month on annual billing ($200 up front); $20 if billed monthly"; "Claude Code included".<br>**Minor:** Fable on Pro now shows "Usage credits" (it showed "50% of weekly limits" in Sept); "50% of weekly limits" now appears under Max.<br>**New banner:** "Claude Cowork is now just Claude", rolling out to Pro and Max. | [claude.com/pricing](https://claude.com/pricing) [official]; [ShareDuo](https://www.shareduo.com/blog/what-is-claude-cowork) [3rd-party, snippet] |
| **Claude — coding features:** "Artifacts run HTML/JS/React previews in the chat" | **ACCURATE** | Artifacts are listed on Free. | [claude.com/pricing](https://claude.com/pricing) [official] |
| **Claude — age:** "18+" | **ACCURATE** | "We require all users to be at least 18 years old to create and use a Claude account". App-store age signals are used in some US states (article dated 16 Mar 2026). | [Claude Help Center](https://support.claude.com/en/articles/13117299-minimum-age-requirement-access-restriction) [official] |
| **Claude — training:** "Yes (since Sept 2025), opt out in Privacy settings" | **ACCURATE (no change found)** | No consumer-terms update after Sep 2025 surfaced in searches. | [Anthropic: Updates to Consumer Terms](https://www.anthropic.com/news/updates-to-our-consumer-terms) [official, snippet] |

### Inferences
- **Weeks 1–3 primary:** Gemini Canvas still works for $0, but the model behind it is now the smallest tier (Flash-Lite, a 32K context per a third party). Larger one-shot app builds in Canvas may get worse or hit context limits sooner.
  - Claude Free (Sonnet 5.5, Artifacts) is now plausibly the strongest free in-chat preview tool, but only for students 18+.
  - Consider adding a line to TOOLS.md saying that Gemini Free now uses Flash-Lite. Have instructors re-test the week-1 Canvas demo before the cohort.
- **ChatGPT's "Intelligent UI"** is not a substitute for Canvas or Artifacts in this course. It assembles OpenAI components and does not render student code. The TOOLS.md "Not needed" or fallback position for ChatGPT stays valid.
- **Model names keep moving:** GPT-6 Luna, GPT-6.1 Sol, Sonnet 5.5, Haiku 5.5 and Gemini 4 Argon all appeared within four weeks. This supports the TOOLS.md rule that model names appear only in this file.

### Gaps
- Official OpenAI release-note and help pages (help.openai.com) returned 403. The GPT-6 Luna Free rollout date (8 Oct) and the GPT-5.5 retirement having happened rest on third-party reports that quote OpenAI.
- Anthropic's own Sonnet 5.5 and Haiku 5.5 announcements were not fetched. Haiku 5.5's exact release date is unknown; it is inferred from GitHub's 7 Oct changelog title.
- **Gemini Free:**
  - The 32K context figure comes from a third party only.
  - Which model Canvas uses on Free is not stated by Google.
  - The help page's per-plan model table did not extract cleanly; the subscriptions page was used instead.

---

## 2. Browser app builders (TOOLS.md "Browser app builders", week 3): free-tier changes for AI Studio Build, Bolt, Lovable, v0, Replit and Base44

### Takeaway
**Two builders cut their free tiers:**
- **v0:** new sign-ups now get a **one-time $5**, not $5/month (around 4–5 Oct 2026). Existing Free users keep $5/month. The 7 messages/day cap is unchanged.
- **Replit:** the **free Starter card was removed from replit.com/pricing** around 10–11 Sep 2026. Replit's docs still describe Starter, and its old "Lite" experience is now called "Free Mode".

**No change:**
- **Lovable:** still says its current chat pricing "applies through October 31, 2026". No replacement was published as of 21 Oct.
- **Bolt Free, Base44 Free and Google AI Studio Build:** unchanged. Bolt Pro now shows $18/mo billed annually.

### Cited Findings

| TOOLS.md claim | Status | What the sources say | Sources |
|---|---|---|---|
| **Google AI Studio Build:** "Full-stack React + Node apps with a database and auth, two-way GitHub sync, no card to prototype"; 18+; free-tier training and review except EEA/UK/CH; Cloud Run needs billing | **ACCURATE** | **Build mode doc (upd. 2026-10-20):**<br>• React + Node.js, Firestore and Firebase Auth "provisioned automatically", two-way GitHub sync, Cloud Run deploy or ZIP export.<br>• "When sharing, API calls count toward your usage limits"; "Pricing for Google Cloud Run may apply".<br>• New banner: "Gemini 4 Argon is now available". Argon is **not** on the free API tier (see §4).<br>• Apps built before 14 May 2026 are auto-upgraded to server-side keys when next edited.<br>**Gemini API Terms (upd. 2026-04-28):** still say "You must be 18 years of age or older" and keep the EEA/UK/CH clauses. | [AI Studio Build mode](https://ai.google.dev/gemini-api/docs/aistudio-build-mode) [official]; [Gemini API Terms](https://ai.google.dev/gemini-api/terms) [official] |
| **Bolt:** "About 1M tokens/month (300K/day), hosting, private projects" | **ACCURATE** | **Free:** "Free forever, no card required"; 1M tokens/month, a 300K daily limit, hosting, and public and private projects. It shows Bolt branding and has no custom domain.<br>**Pro:** now shown at **$18/mo billed annually ($216/yr)** with 10M tokens and rollover. | [bolt.new/pricing](https://bolt.new/pricing) [official] |
| **Lovable:** "5 credits/day, capped at 30/month"; "Pricing changes 31 Oct 2026" | **ACCURATE; no replacement announced** | **Free:** "5 per day, up to 30 per month", 20 Cloud credits, 4 AI credits and 1 connector credit a month, plus a small daily chat allowance.<br>The docs still say: "The current chat pricing model, including the per-message price and the daily chat allowance, applies through October 31, 2026." Grants are a "Temporary offering, subject to change".<br>No post-31-Oct pricing has been published. A third-party blog claims credits were unified into one balance in Aug 2026, which is not confirmed. | [docs.lovable.dev plans & credits](https://docs.lovable.dev/introduction/plans-and-credits) [official]; [lovable.dev/pricing](https://lovable.dev/pricing) [official]; [RapidDevelopers](https://www.rapidevelopers.com/md/lovable-issues/lovable-pricing-and-credits-explained) [3rd-party, snippet] |
| **v0:** "About $5 of credits, 7 messages/day" | **CHANGED (around 4–5 Oct 2026)** | **v0 docs (lastUpdated 2026-10-21):**<br>• "New users who sign up under the one-time Free credit offer receive $5 once per user."<br>• "Existing Free users keep their $5 monthly allowance."<br>• Free keeps "7 messages" a day, GitHub sync and Vercel deploy.<br>**Paid:** "Premium" at $20 is being sunset and closed to new users, so the cheapest plan for a new user is **Plus at $30/user/month**.<br>**Trackers:** two third-party captures dated the change to 4–5 Oct 2026. | [v0 docs: pricing](https://v0.app/docs/pricing) [official]; [v0.app/pricing](https://v0.app/pricing) [official]; [UsagePricing capture 2026-10-05](https://www.usagepricing.com/blueprint/activity/v0-2026-10-05-free-credits-one-time) [3rd-party, snippet] |
| **Replit (Starter):** "'Lite' builds; one published app that goes down after 30 days" | **CHANGED / at risk** | **Docs (Starter page):** "daily credits for Agent usage, up to a monthly cap"; Lite build only; one free published app whose link "will automatically go down after 30 days".<br>**Free Mode doc:** "For Starter users, the former Lite experience is now Free Mode." Starter "includes Free Mode with its existing limits". Free Mode does not cover video generation.<br>**Pricing page:** shows only Core ($20, or $18 billed annually: "Up to 30 hours of chat on Free Mode", "Up to 60 projects on Free Mode"), Pro and Enterprise. A third-party tracker logged the **Starter card's removal between 10 and 11 Sep 2026**. It is not confirmed whether new sign-ups still get Starter. | [docs.replit.com Starter](https://docs.replit.com/billing/plans/starter-plan) [official]; [docs.replit.com plans](https://docs.replit.com/billing/plans) [official]; [Free Mode docs](https://docs.replit.com/help/free-agent-mode) [official]; [replit.com/pricing](https://replit.com/pricing) [official]; [PricingSaaS diff 2026-09-11](https://pricingsaas.com/companies/replit/diffs/2026D254) [3rd-party] |
| **Base44** (in the key questions, not in TOOLS.md) | **ACCURATE (vs. baseline)** | **Free:** 25 message credits and 100 integration credits a month, up to 5 apps, no daily cap shown.<br>**Starter:** $16/mo billed annually. | [base44.com/pricing](https://base44.com/pricing) [official] |
| **Stack table:** paid step "Only if a capstone outgrows free credits ($16–25/mo)" | **ACCURATE (roughly)** | Base44 is $16 and Bolt $18 (both annual); Lovable Pro is $25 per the baseline. **But** v0's cheapest plan open to new users is now $30, so v0 falls outside the range. | Sources above |

### Inferences
- v0 is now a **one-session sampler** for new students: $5 once plus 7 messages a day. TOOLS.md's "one session each" framing for Lovable, v0 and Replit still fits, but the v0 row should say "one-time".
- Replit is the weakest fallback. If new accounts no longer get Starter, the "one session" sampler may need a card or may not exist. Instructors should test a fresh sign-up before the cohort.
- Lovable's 31 Oct cliff is still unresolved. Re-check in the first week of November, before the course starts in early 2027.

### Gaps
- Whether new Replit sign-ups still receive the Starter plan; no official Replit statement was found.
- Lovable's post-31-Oct-2026 pricing (not announced as of 21 Oct).
- The exact effective date of v0's one-time-credit change (third-party captures only).

---

## 3. Editor and agents (TOOLS.md "Editor and agents", weeks 4–8): Copilot, Codespaces, Antigravity, Claude Code, Codex CLI, OpenCode, Aider, Cline, Kilo Code, Cursor and Devin

### Takeaway
**GitHub Copilot and Codespaces:** the Free, Student and Pro plan contents and the Codespaces quota are **unchanged**. GitHub's October changelog covers models, CLI features and security, not plan limits.

**Antigravity's free plan shrank:**
- The models page now gives Free and Plus users only **Gemini 3.8 Flash** plus Claude Sonnet/Opus 4.6 and gpt-oss-120b.
- Those three third-party models are marked "**will be removed on November 2, 2026**", which leaves Free on Gemini only.
- Gemini 3.1 Pro is no longer on Free.
- Gemini 4 Argon and Claude 5.5 need **paid, non-trial** AI Pro.

**Other agents:**
- **Claude Code** is still not free, and **Codex** still gives Free users quick tasks.
- **Cursor's** plans were folded into SpaceX/xAI's "X Subscription" on 12 Oct 2026.
- **Aider** has had **no release since 9 Aug 2025** and no commits since 22 May 2026.

### Cited Findings

| TOOLS.md claim | Status | What the sources say | Sources |
|---|---|---|---|
| **Copilot Free:** "2,000 completions/month; unpublished AI Credits; automatic model choice only; agent mode, MCP and Copilot CLI included" | **ACCURATE** | **Plans table:** Free has "Limited to 2,000 per month" completions, an AI-credit "allowance" with no stated amount, "Auto model selection only", and Agent mode, MCP and Copilot CLI included. Cloud agent is not included. Code review is "Review selection" in VS Code only.<br>**Marketing page:** "Free plan supports CLI and agent mode". | [GitHub Docs: plans](https://docs.github.com/en/copilot/get-started/plans) [official]; [github.com/features/copilot/plans](https://github.com/features/copilot/plans) [official] |
| **Copilot Free note:** "running out of credits stops chat/agent work until the month resets — no cheaper fallback model" | **ACCURATE** | Credits reset "00:00:00 UTC on the first day of each calendar month" and don't roll over. When they run out, the options are upgrade, set a US-dollar budget (1 credit = $0.01; you must pay off prior usage) or wait for the reset. No fallback model is mentioned. | [GitHub Docs: individual billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing) [official] |
| **Copilot Pro:** "$10 (model choice, larger credit pool)" | **ACCURATE** | Pro is $10 with 1,500 credits (1,000 base + 500 flex) and "A selection of models".<br>**Note:** Gemini 4 Argon (13 Oct) is for "Copilot Pro+, Max, Business, and Enterprise" only, not Pro. | [GitHub Docs: plans](https://docs.github.com/en/copilot/get-started/plans) [official]; [Changelog 2026-10-13](https://github.blog/changelog/2026-10-13-gemini-4-argon-in-github-copilot) [official] |
| **Copilot Student:** "unlimited completions, 200 AI Credits/month, cloud agent" | **PRECISION (200 not official)** | **Official docs:** Student is free, with an "allowance" of AI credits (number not stated), Auto only, unlimited completions, the cloud agent "excludes third-party agents", and code review included.<br>**200/month figure:** third-party only (Layer3Labs, updated 1 Oct 2026). | [GitHub Docs: plans](https://docs.github.com/en/copilot/get-started/plans) [official]; [GitHub Docs: billing](https://docs.github.com/en/copilot/concepts/billing-and-usage/individuals/billing) [official]; [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts) [3rd-party] |
| **Copilot: new since 25 Sep** (not in TOOLS.md) | **NEW** | **Local Ollama models in Copilot CLI:** `/model` lists models from a running local Ollama instance (CLI **1.0.94-0**, 7 Oct). The model must support tool calling and streaming. Whether this uses AI credits, and which plans get it, is not stated.<br>**Other changelog items:**<br>• Local sandboxing GA (7 Oct).<br>• Computer use in Copilot CLI and app, public preview (1 Oct).<br>• Code review: API support and a new default effort level, "Balanced" (2 Oct).<br>• Secret scanning detectors for Lovable and Supabase keys (5 Oct); Anthropic keys blocked by default (13 Oct).<br>**No October changelog entry mentions** Copilot Free/Student plans, AI Credits, Codespaces, Pages or Education. | [Changelog 2026-10-07 local models](https://github.blog/changelog/2026-10-07-discover-local-models-in-github-copilot-cli) [official]; [Changelog Oct 2026 pages 1–5](https://github.blog/changelog/month/10-2026/) [official]; [secret scanning 2026-10-05](https://github.blog/changelog/2026-10-05-secret-scanning-adds-detectors-for-lovable-supabase-and-more) [official] |
| **Copilot training policy:** opt-out at github.com → Settings → Copilot | **ACCURATE** | "for Individual subscribers only" GitHub may use interaction data to train; opt out at github.com/settings/copilot/features. Business and Enterprise data is not used. **No student exemption** is mentioned. | [github.com/features/copilot/plans](https://github.com/features/copilot/plans) [official] |
| **Codespaces:** "120 core-hours/month on GitHub Free (about 60 h on the 2-core machine), 15 GB storage; blocked, not billed" | **ACCURATE** | GitHub Free gets "120 hours of compute time and 15 GB-month of storage", with an "included usage multiplier" equal to the machine's core count. That is the same as 120 core-hours, or 60 h on a 2-core machine. "usage is blocked once you use up your quota" when no payment method is set. Organizations get no free quota. | [GitHub Docs: Codespaces billing](https://docs.github.com/en/billing/concepts/product-billing/github-codespaces) [official] |
| **Antigravity:** "Frontier models with weekly limits (numbers not published)" | **CHANGED (models page; removal 2 Nov 2026)** | **Models page, "Free & Plus" column:**<br>• Gemini 3.8 Flash ✓<br>• Claude Sonnet 4.6 ✓ and Claude Opus 4.6 ✓ (both \*)<br>• GPT-OSS-120b ✓ (\*)<br>• Gemini 3.7/3.6 Flash and **3.1 Pro** ✗ (Enterprise only)<br>• Gemini 4 Argon ✗; Claude Sonnet/Opus 5.5 ✗<br>(\*) = "Will be removed on November 2, 2026".<br>Gemini 4 Argon and Claude 5.5 are "Available on Google AI Pro for non-trial subscriptions only".<br>**Plans page:** quota "refreshed weekly"; AI Pro "resets every five hours … until the weekly limit is reached"; all plans get "the CLI".<br>**Pricing page:** "basic weekly rate limits"; no numbers. | [Antigravity models](https://antigravity.google/docs/models) [official]; [plans](https://antigravity.google/docs/plans) [official]; [pricing](https://antigravity.google/pricing) [official]; [SmartScope](https://smartscope.blog/en/blog/antigravity-claude-55-pro-trial-model-retirement-2026/) [3rd-party] |
| **Antigravity:** "Google AI Pro $19.99" (cheapest paid); "18+" | **ACCURATE** | **FAQ:** "Currently, Antigravity is unavailable to users under 18"; personal Google accounts in approved countries only. Some models "are not included in free trials".<br>**Pricing page:** shows no Pro price; the Gemini subscriptions page lists AI Pro at $19.99. | [Antigravity FAQ](https://antigravity.google/docs/faq) [official]; [gemini.google/subscriptions](https://gemini.google/subscriptions/) [official] |
| **Claude Code:** "Not free; Claude Pro $20" | **ACCURATE** | Free: "Claude Code: Not included". Pro: "Claude Code included". | [claude.com/pricing](https://claude.com/pricing) [official] |
| **OpenAI Codex CLI:** "Basic access on Free (quick tasks only); ChatGPT Plus $20" | **ACCURATE** | **Pricing page:** Free is "quick coding tasks" with no usage figures.<br>**Help:** Codex is included on Free and Go; Codex Cloud is not.<br>**Community report:** Free accounts get "The 'gpt-5.6-sol' model is not supported when using Codex with a ChatGPT account".<br>**Latest release:** `rust-v0.163.0` (15 Oct 2026). | [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing) [official]; [OpenAI Help: Codex](https://help.openai.com/en/articles/11369540-codex) [official, snippet]; [OpenAI Community](https://community.openai.com/t/free-plan-codex-credits-but-gpt-5-6-sol-is-still-blocked-what-s-the-point-of-the-credits/1393469) [snippet]; [openai/codex releases](https://github.com/openai/codex/releases) [GitHub API] |
| **OpenCode / Aider / Cline / Kilo Code:** "Free, open source; pay for the model you connect" | **ACCURATE, with a maintenance warning for Aider** | **OpenCode:** v1.19.3 (16 Oct 2026). The repo `sst/opencode` now redirects to `anomalyco/opencode`. The official Zen docs list $0 models such as Big Pickle, DeepSeek V4 Flash Free and Nemotron 3 Ultra Free, which "may change over time".<br>**Cline:** release desktop-v0.0.48 (17 Oct 2026).<br>**Kilo Code:** v7.8.15 (19 Oct 2026); "Auto Free" routing still documented.<br>**Aider:** latest release **v0.86.0 on 9 Aug 2025**; last commit **22 May 2026**. Not archived, but inactive for about 5 months. | [anomalyco/opencode releases](https://github.com/anomalyco/opencode/releases), [cline/cline releases](https://github.com/cline/cline/releases), [Kilo-Org/kilocode releases](https://github.com/Kilo-Org/kilocode/releases), [Aider-AI/aider](https://github.com/Aider-AI/aider) [GitHub API]; [OpenCode Zen docs](https://opencode.ai/docs/zen) [official, snippet]; [Kilo: using Kilo for free](https://kilo.ai/docs/getting-started/using-kilo-for-free) [official, snippet] |
| **Cursor** (not in TOOLS.md tables; only "Cursor's free student year closed 25 Jun 2026") | **CHANGED (12 Oct 2026)** | **cursor.com/pricing:**<br>• No longer shows "Hobby". "Free" lists "Limited agent requests", "Limited Chat requests", and "Post, reply, and follow" (X features).<br>• Cheapest paid is **Plus $8/month**, a shared pool across Cursor and Grok, with the footnote "Only Grok models are available on this plan".<br>• Allowances "refresh weekly".<br>**Press:** SpaceX/xAI launched "The X Subscription" bundling Grok, Cursor and X Premium at Plus $8, Premium $30, Super $100 and Ultra $200 on 12 Oct 2026.<br>**Ended offer:** the student free year is still closed. | [cursor.com/pricing](https://cursor.com/pricing) [official]; [FourWeekMBA](https://fourweekmba.com/ai-spacex-bundles-grok-cursor-and-x-premium-from-8-to-200/) [3rd-party, snippet]; [Mezha](https://mezha.ua/en/news/spacexsi-new-subscriptions-316115/) [3rd-party, snippet]; [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts) [3rd-party] |
| **Devin Desktop (formerly Windsurf)** (not in TOOLS.md) | **UNVERIFIED** | devin.ai/pricing returned **404**. Third parties still describe a free tier with unlimited Tab completions. The Pro SWE-2 perk was due to end 10 Oct 2026 (baseline). | [Windows Mode guide](https://www.windowsmode.com/devin-desktop-for-windows/) [3rd-party, snippet] |

### Inferences
- **Copilot (primary for weeks 4–8):** unchanged. The new local-Ollama option in Copilot CLI could become a credit-free fallback inside the same tool, if it really costs no credits. That needs a hands-on test because the docs don't say. It would not work inside a Codespace without extra setup (same caveat as the Ollama row).
- **Antigravity after 2 Nov 2026** is still a free 18+ fallback, but on **Gemini 3.8 Flash only**. "Frontier models" overstates it.
  - Students on Google's free 12-month AI Pro offer may count as "trial" users and be excluded from Argon and Claude 5.5. That is unverified; see Gaps.
- **Aider is a weak fallback:** no release in 14 months. OpenCode (released 16 Oct) is the safer open-source terminal fallback. Kilo and Cline are both active.
- **Cursor:** its Free tier now sits inside an X/Grok consumer bundle that includes social-network features. That is another reason not to use it in a beginner course.

### Gaps
- Exact Copilot Free and Student AI-credit allowances (GitHub does not publish them).
- Whether Copilot CLI with a local Ollama model uses AI credits, and which plans can use it.
- Whether Google's free student AI Pro counts as a "trial" for Antigravity's "non-trial subscriptions only" models.
- Devin Desktop's current free plan (pricing page 404).
- Numeric Cursor Free limits.

---

## 4. LLM APIs for student apps (TOOLS.md "LLM APIs", weeks 5–8): Gemini API, Groq, OpenRouter, Cloudflare Workers AI and Ollama

### Takeaway
**The rows are still accurate:**
- **Gemini API:** the free tier still covers Flash-Lite models, the OpenAI-compatible base URL is unchanged, limits are still unpublished, and the terms are unchanged. But `gemini-3.5-flash` and `gemini-3.7-flash` were deprecated on 8 Oct (auto-routed to newer models). `gemini-3.1-flash-lite` has an earliest shutdown of **7 May 2027**; its replacement is `gemini-3.5-flash-lite`.
- **Groq:** the free tab is still 30 requests/min and 1,000/day on gpt-oss and Qwen3.8-27b.
- **OpenRouter:** still 50/day, or 1,000/day after $10 of credits.
- **Cloudflare:** still 10,000 Neurons/day.
- **Ollama:** shipped v0.40.8 on 21 Oct 2026.

### Cited Findings

| TOOLS.md claim | Status | What the sources say | Sources |
|---|---|---|---|
| **Gemini API base URL:** `https://generativelanguage.googleapis.com/v1beta/openai/` | **ACCURATE** | Same base URL; example model `gemini-3.8-flash`; "Support for the OpenAI libraries is still in beta" (upd. 2026-10-14). | [Gemini OpenAI compatibility](https://ai.google.dev/gemini-api/docs/openai) [official] |
| **Gemini API free limits:** "Not published. Third parties report ~500 requests/day on Flash-Lite and ~20/day on Flash" | **ACCURATE ("not published"); UNVERIFIED (third-party numbers)** | **Rate-limits page (upd. 2026-10-15):** numbers "can be viewed in Google AI Studio"; "Specified rate limits are not guaranteed".<br>**Third parties:** no Oct 2026 source repeated the 500/20 figures. One May 2026 guide gave very different Flash numbers. Treat the figures as stale. | [Gemini rate limits](https://ai.google.dev/gemini-api/docs/rate-limits) [official]; [Apidog](https://apidog.com/blog/what-is-gemini-3-5-flash-lite/) [3rd-party, snippet] |
| **Free models (Flash-Lite recommended)** | **ACCURATE + updates** | **Pricing page (upd. 2026-10-19), "Free of charge":**<br>• Flash-Lite: Gemini **3.5 Flash-Lite**, 3.1 Flash-Lite, 2.5 Flash-Lite<br>• Flash: 3.8 Flash, 3.6 Flash, 3 Flash Preview, 2.5 Flash<br>• Gemini 2.5 Pro and Gemma 4<br>**Not available free:** 3.1 Pro Preview and **Gemini 4 Argon**.<br>**Changelog:**<br>• 8 Oct: `gemini-3.7-flash` deprecated (routed to `gemini-3.8-flash`); `gemini-3.5-flash` deprecated (routed to `gemini-3.6-flash`).<br>• 18 Sep: "For any new projects, use our latest models: 3.5 Flash-Lite or 3.8 Flash" (2.5 limited to prior users).<br>**Deprecations page:** `gemini-3.1-flash-lite` shutdown **7 May 2027** (earliest possible), replaced by `gemini-3.5-flash-lite`. | [Gemini pricing](https://ai.google.dev/gemini-api/docs/pricing) [official]; [changelog](https://ai.google.dev/gemini-api/docs/changelog) [official]; [deprecations](https://ai.google.dev/gemini-api/docs/deprecations) [official] |
| **Gemini API notes:** "18+. Free-tier data may be used for training and read by reviewers. Free tier may not serve EEA/UK/CH users" | **ACCURATE** | **Terms (upd. 2026-04-28):**<br>• "You must be 18 years of age or older to use the APIs".<br>• "human reviewers may read, annotate, and process your API input and output".<br>• "You may use only Paid Services when making API Clients available to users in the European Economic Area" (also Switzerland and UK).<br>**Pricing page:** free tier "Used to improve our products: Yes". | [Gemini API Terms](https://ai.google.dev/gemini-api/terms) [official]; [pricing](https://ai.google.dev/gemini-api/docs/pricing) [official] |
| **Groq:** `https://api.groq.com/openai/v1`; "30 requests/minute, 1,000/day on open models such as gpt-oss"; "No card. Does not retain inference data by default" | **ACCURATE** | **Rate-limits page:** has "Free Plan Limits" and "Developer Plan Limits" tabs. `openai/gpt-oss-120b`, `openai/gpt-oss-20b` and `qwen/qwen3.8-27b` show 30 RPM, 1K RPD, 8K TPM and 200K TPD.<br>**Deprecations:** no entries after 21 Sep 2026.<br>**Data:** "By default, Groq does not retain customer data for inference requests". It may log for reliability or abuse for up to 30 days, with an opt-out in Data Controls. | [Groq rate limits](https://console.groq.com/docs/rate-limits) [official]; [deprecations](https://console.groq.com/docs/deprecations) [official]; [your data](https://console.groq.com/docs/your-data) [official] |
| **OpenRouter:** "50 requests/day on `:free` models (more after a one-time $10 top-up)"; "Free-model providers may log prompts" | **ACCURATE** | 20 RPM. 50/day with less than 10 credits ever purchased, 1,000/day with at least 10. The tier is based on all-time purchases. No dates or changes shown. | [OpenRouter limits](https://openrouter.ai/docs/api-reference/limits) [official] |
| **Cloudflare Workers AI:** "10,000 Neurons/day"; needs an account ID | **ACCURATE + note** | **Pricing (upd. 2026-10-20):** 10,000 Neurons/day on Free and Paid. Free cannot exceed it ("further operations will fail with an error"). Resets at 00:00 UTC.<br>**New:** some models, e.g. `@cf/zai-org/glm-5.2` and `@cf/deepseek-ai/deepseek-v4-pro-0813`, "require a paid billing method". | [Workers AI pricing](https://developers.cloudflare.com/workers-ai/platform/pricing/) [official] |
| **Ollama (local):** `http://localhost:11434/v1`; ~16 GB RAM | **ACCURATE (no change found)** | Latest release **v0.40.8, published 2026-10-21** (baseline: v0.34.4, 23 Sep). The endpoint was not re-checked; no change reported. | [ollama/ollama releases](https://github.com/ollama/ollama/releases) [GitHub API] |

### Inferences
- The week-5 lab tells students to pick a model "with `flash-lite` in its name". The safest current pick is **`gemini-3.5-flash-lite`**:
  - It is Google's own recommendation for new projects.
  - It has no shutdown date.
  - `gemini-3.1-flash-lite` may be retired from 7 May 2027, which is likely during or just after an early-2027 cohort.
- Gemini 4 Argon is paid-only on the API. Students will see it in AI Studio's UI but cannot use it on a free key.
- The fallback chain Gemini → Groq → OpenRouter → Cloudflare → Ollama is unchanged and still valid.

### Gaps
- Current free-tier RPD for Gemini Flash-Lite and Flash. Google publishes them only inside AI Studio, and no fresh third-party measurement was found.
- Whether Groq's "Free Plan Limits" tab differs per model beyond the three LLMs checked.

---

## 5. Hosting and data (TOOLS.md "Hosting and data", weeks 1–8): GitHub Pages, Vercel Hobby, Cloudflare Workers, Supabase, Neon and Turso

### Takeaway
**Vercel Hobby:** plan limits are unchanged, and the `export default { fetch }` function format is still documented.
- **New since 16 Sep 2026** (just before TOOLS.md was verified, but not in it): a **10 GB deployment-storage cap**. Hobby keeps the 3 latest production deployments plus the 3 latest of any kind; over the limit, older ones are deleted immediately and deploys can be blocked.
- **Precision fix:** Vercel staff describe the GitHub-org block as applying to **private** org repos only.

**Supabase:** the **Data API grants change hits all existing projects on 30 Oct 2026**. Existing tables keep their grants; new tables need explicit `grant`s. Legacy `anon`/`service_role` keys are being deprecated "by the end of 2026". Pausing is still 7 days.

**Neon:** Free storage has doubled to **1 GB per project**.

**Cloudflare Workers:** unchanged.

### Cited Findings

| TOOLS.md claim | Status | What the sources say | Sources |
|---|---|---|---|
| **GitHub Pages:** "Static sites from public repos; non-commercial; public repos only on free accounts" | **UNVERIFIED (no change found)** | No Pages entries in GitHub's October 2026 changelog (pages 1–5) or the late-September entries. Docs were not re-fetched. | [GitHub Changelog Oct 2026](https://github.blog/changelog/month/10-2026/) [official] |
| **Vercel Hobby:** "Static sites + serverless functions from a personal repo; non-commercial" | **ACCURATE** | **Hobby doc (upd. 2026-09-14):** "non-commercial, personal use only"; 1M function invocations, 4 CPU-hrs Active CPU, 100 GB Fast Data Transfer, 200 projects, 100 deployments/day; over a limit "you will have to wait until 30 days have passed". | [Vercel Hobby](https://vercel.com/docs/plans/hobby) [official] |
| **Vercel Hobby:** "Cannot deploy repos owned by a GitHub organization (fork to your personal account)" | **PRECISION** | **Official Git docs (upd. 2026-09-17):** don't mention a Hobby rule. For org repos they say you must be an org Owner or a Member with repo access.<br>**Vercel staff on the community forum:** "You cannot deploy to a Hobby team from a **private** repository in a GitHub organization… Consider making the repository public or upgrading to Pro". Another staff reply says public org repos can deploy. | [Vercel for GitHub](https://vercel.com/docs/git/vercel-for-github) [official]; [Vercel Community thread](https://community.vercel.com/t/unable-to-deploy-from-organizational-private-repository/16334) and [thread](https://community.vercel.com/t/why-cant-hobby-accounts-deploy-from-organizations/10015) [vendor forum, snippet] |
| **Vercel: deployment retention** (not in TOOLS.md) | **NEW (16 Sep 2026)** | "Hobby teams get 10GB of Deployment Storage." Each project keeps its 3 most recent production deployments and 3 most recent of any type. The current production deployment and aliased or active-branch deployments are protected. Over the limit, others are "deleted immediately instead of after 30 days", and "going over the limit can block you from deploying". | [Vercel changelog 2026-09-16](https://vercel.com/changelog/hobby-projects-now-retain-fewer-deployments-to-free-up-storage) [official] |
| **Vercel Functions format** `export default { fetch }` (starter code) | **ACCURATE** | **Node.js runtime doc (upd. 2026-08-11):** recommends a "shared API entry point … using the `fetch` Web Standard export" with `export default { fetch(request) {...} }`. Named `GET`/`POST` exports and the `(req, res)` style are also documented. No deprecation is mentioned. | [Vercel Node.js runtime](https://vercel.com/docs/functions/runtimes/node-js) [official] |
| **Cloudflare Workers:** "Static assets + functions; slightly more setup" | **ACCURATE** | **Limits (upd. 2026-10-12):** 100,000 requests/day (Error 1027 after that), 10 ms CPU per request, 100 Workers; static assets up to 20,000 files per version, 25 MiB each. | [Workers limits](https://developers.cloudflare.com/workers/platform/limits/) [official] |
| **Supabase Free:** "2 projects, Postgres, auth; pauses after 1 week of inactivity — restore from the dashboard" | **ACCURATE** | "Supabase pauses Free Plan projects that show low activity over a 7-day period"; resume from the dashboard. The page is inconsistent on the restore window: the body says 1 year, a heading says 90 days. | [Supabase: free project pausing](https://supabase.com/docs/guides/platform/free-project-pausing) [official] |
| **Supabase Data API grants** (course `setup.sql` and instructor notes rely on explicit `grant`s) | **ACCURATE (scheduled); date confirmed** | **Changelog #45329:**<br>• Opt-out from 28 Apr 2026; default for new projects from **30 May 2026**; applied to all existing projects on **30 Oct 2026**.<br>• New `public` tables no longer get implicit `select/insert/update/delete` for `anon`, `authenticated` and `service_role`. Without grants, "PostgREST returns a permission-denied error".<br>• **Unaffected:** "Existing tables, which keep their current grants"; RLS policies; direct Postgres connections.<br>• Reminder emails were scheduled for 23 Sep and 23 Oct 2026. | [Supabase changelog #45329](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically) [official] |
| **Supabase keys:** publishable (`sb_publishable_`) vs legacy `anon` (weeks 7–8 materials) | **ACCURATE + deadline** | "Supabase is deprecating the `anon` and `service_role` keys by the end of 2026." Legacy keys stay valid until disabled under Settings > API Keys. Publishable keys map to `anon`/`authenticated`; secret keys (`sb_secret_`) to `service_role`, which bypasses RLS. No exact day is given. | [Supabase API keys](https://supabase.com/docs/guides/api/api-keys) [official] |
| **Supabase RLS defaults** (week-7 instructor notes: Table Editor on, SQL off) | **ACCURATE (no change found)** | **Security retro (Jan 2026):** "for tables created via the dashboard, RLS is enabled by default".<br>**Docs:** if you create a table in raw SQL or the SQL editor, "remember to enable RLS yourself". | [Supabase security retro 2025](https://supabase.com/blog/supabase-security-2025-retro) [official, snippet]; [Supabase RLS docs](https://www.supabase.com/docs/guides/auth/row-level-security) [official, snippet] |
| **Neon:** "Postgres database only, no auth" | **ACCURATE + limit change** | **Free:** 100 projects; 100 CU-hours per project; **1 GB storage per project (20 GB total)** (baseline: 0.5 GB); 5 GB egress; 10 branches; scale-to-zero after 5 minutes; "The Free plan is permanent (not a trial)"; no card. A third-party tracker dates the storage doubling to week 41 (early Oct 2026). | [neon.com/pricing](https://neon.com/pricing) [official]; [PricingSaaS Neon](https://pricingsaas.com/companies/neon) [3rd-party, snippet] |
| **Turso:** "SQLite database only" | **UNVERIFIED (official page not fetched)** | Third parties still list Free as 100 databases, 5 GB, 500M rows read and 10M written a month, with no recorded change. | [AgentDeals: Turso](https://agentdeals.dev/vendor/turso) [3rd-party, snippet] |

### Inferences
- **Supabase 30 Oct:** for students who reuse an existing project and create **new** tables after 30 Oct, the change matters even outside the RLS lab. Any table their AI agent creates with plain `create table` will return permission-denied until it is granted.
  - The week-7 notes describe this only for "very new projects". After 30 Oct it applies to every project.
  - Legacy `anon` JWTs (`eyJ…`) should not be taught as a working alternative into 2027.
- **Vercel's 10 GB cap and 3+3 retention** affect students who deploy dozens of previews a week. Older preview URLs they linked in homework may disappear. Tell students not to rely on old preview URLs as evidence; use a screenshot or the production URL.

### Gaps
- GitHub Pages docs and Turso's pricing page were not re-fetched.
- No official Vercel docs page states the Hobby rule on private org repos; the evidence is staff replies on Vercel's community forum.
- The exact day in late 2026 when Supabase will disable legacy keys.

---

## 6. Student offers (TOOLS.md "Student offers"): are the deadlines still right, and are there new offers?

### Takeaway
**All four TOOLS.md offers stand as written:**
- Google AI Pro: redeem by 31 Dec 2026, auto-renews.
- ChatGPT Plus 4 months: claim by 31 Oct 2026. Only third parties confirm this; the official page returns 403.
- Azure for Students: $100, no card.
- GitHub Education → Copilot Student.

**One offer TOOLS.md misses:** OpenAI's **$100 of Codex credits for verified university students in the US and Canada** (launched 18 Jul 2026). It works with a ChatGPT **Free** account.

**Side effect of the Gemini change:** after 9 Oct, the international AI Plus student year gives Flash, not Pro.

### Cited Findings

| TOOLS.md claim | Status | What the sources say | Sources |
|---|---|---|---|
| **GitHub Education → Copilot Student + Codespaces benefits;** "Apply in week 0" | **ACCURATE** | No October changelog entries about Education or the Student plan. Student plan contents: see §3. A third party says eligibility is re-checked monthly and requires age 13+. | [GitHub Docs: plans](https://docs.github.com/en/copilot/get-started/plans) [official]; [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts) [3rd-party] |
| **Google AI Pro free for 12 months:** "US college students 18+ (AI Plus in 140+ other markets); redeem by 31 Dec 2026; needs a payment method and auto-renews" | **ACCURATE; one PRECISION note** | **Google's blog (19 Aug 2026):**<br>• "Redeem until December 31, 2026."<br>• US gets AI Pro; 140+ markets get AI Plus. Excluded: US, Bolivia, Albania, Canada, Macau, Hong Kong, Tunisia.<br>• Valid payment required; AI Pro charges $19.99/month after the free year.<br>**18+:** the blog does not itself state 18+; the baseline and a third party do.<br>**Since 9 Oct:** AI Plus gives Flash, not Pro (see §1). | [Google blog](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/) [official]; [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts) [3rd-party]; [gemini.google/subscriptions](https://gemini.google/subscriptions/) [official] |
| **ChatGPT Plus free for 4 months:** "US college students; claim by 31 Oct 2026" | **ACCURATE (3rd-party confirmation; official 403)** | Four free monthly billing periods; current US college students verified via SheerID; claim by 31 Oct 2026; renews at $20/mo. App Store or Google Play subscriptions are excluded, and cancelling forfeits the remaining promo months. | [OpenAI Help 20001493](https://help.openai.com/en/articles/20001493-chatgpt-back-to-school-offer-for-students) [official, snippet, 403]; [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts) [3rd-party] |
| **Azure for Students:** "$100 credit, no card" | **ACCURATE** | "$100 credit" for 12 months, renewable while a student; "No credit card required"; "Available only to full-time university students". | [Azure for Students](https://azure.microsoft.com/en-us/free/students) [official] |
| **NEW offer: Codex credits for students** | **NEW (launched 18 Jul 2026; missing from TOOLS.md)** | **OpenAI help center (snippet):**<br>• Verified university students living in the US or Canada; one per student.<br>• Works on ChatGPT Free, Go, Plus or Pro, including personal accounts, with SheerID school-email verification.<br>• Shows as 2,500 credits (= $100) and extends Codex usage beyond plan limits. Cloud use needs ChatGPT sign-in.<br>**Claim page:** chatgpt.com/codex/students.<br>**Expiry:** a third party says credits expire 12 months after the grant. | [OpenAI Help: Codex for university students](https://help.openai.com/en/articles/20001147-codex-for-university-students) [official, snippet]; [OpenAI Community post 2026-07-18](https://community.openai.com/t/100-free-codex-credits-for-university-students-in-the-us-and-canada/1387399) [official forum]; [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts) [3rd-party] |
| **Ended offers:** "Cursor's free student year (closed 25 Jun 2026), Perplexity's free year" | **ACCURATE** | Cursor: "No active student offer". Perplexity: Education Pro at $10/mo. Claude: no individual student offer; a third party says Claude for Education's campus programme is "closed for Fall 2026". | [Layer3Labs](https://www.layer3labs.io/guides/ai-student-discounts) [3rd-party] |

### Inferences
- For US and Canadian university students, the Codex credits give $100 of real terminal-agent capacity at $0, with no card or auto-renewal reported. It is a better optional step than "ChatGPT Plus $20" in weeks 6–8.
- The ChatGPT Plus student offer closes before an early-2027 cohort starts. Remove it from the cohort-facing list after 31 Oct, or move it to "ended".

### Gaps
- The official OpenAI pages for both student offers returned 403. Terms come from search snippets and a third-party guide.
- Whether the Codex student credits have a claim deadline (none published).
- Whether Google's student AI Pro counts as a "trial" for Antigravity's paid-only models.

---

## 7. "Do not use" and "Privacy settings" sections: still accurate?

### Takeaway
**Every "Do not use" row still holds:**
- Firebase Studio dates were re-confirmed on a page updated 20 Oct 2026.
- GitHub Spark and GitHub Models stay retired.
- ChatGPT's side-panel canvas is still gone; Intelligent UI is a different feature.

**Privacy-setting paths:** no changes were found for ChatGPT, Claude, Gemini, Copilot or AI Studio.

### Cited Findings

| TOOLS.md claim | Status | What the sources say | Sources |
|---|---|---|---|
| **Firebase Studio:** "New sign-ups closed 22 Jun 2026; shuts down 22 Mar 2027" | **ACCURATE** | "New workspace creation and user signup are disabled" (22 Jun 2026). On 22 Mar 2027 "all remaining data is permanently deleted". Recommended targets: Antigravity and AI Studio. Page upd. 2026-10-20. | [Firebase Studio migration](https://firebase.google.com/docs/studio/migrating-project) [official] |
| **GitHub Spark:** retired 31 Aug 2026. **GitHub Models:** retired 30 Jul 2026 | **ACCURATE (no reversal found)** | No October changelog entries mention either product. | [GitHub Changelog Oct 2026](https://github.blog/changelog/month/10-2026/) [official] |
| **Gemini CLI with a free Google login:** "Free login access ended 18 Jun 2026 (an API key still works, with low limits)" | **ACCURATE** | Google's quota page (as indexed) says unpaid-tier and Google One users "had Gemini CLI replaced by Antigravity CLI on June 18th, 2026", while still showing the old 1,000/day line. An unpaid API key gets 250 requests/day, Flash only. | [Gemini CLI quotas](https://geminicli.com/docs/quota-and-pricing) [official, snippet] |
| **Roo Code, Continue; ChatGPT canvas; DeepSeek; Trae** | **ACCURATE (no change found)** | No new information in this pass. ChatGPT "Intelligent UI" (8 Oct) is a different feature and does not restore canvas (see §1). | See §1 |
| **Privacy: ChatGPT** "Settings → Data Controls → Improve the model for everyone → off" | **ACCURATE (no change found)** | The help page was not reachable (403). | — |
| **Privacy: Claude** "Settings → Privacy → Help improve Claude → off" | **ACCURATE (no change found)** | — | [Anthropic consumer terms](https://www.anthropic.com/news/updates-to-our-consumer-terms) [official, snippet] |
| **Privacy: Gemini** "Keep Activity → off (or temporary chats)" | **ACCURATE** | See §1. | — |
| **Privacy: GitHub Copilot** "github.com → Settings → Copilot → turn off training" | **ACCURATE** | The opt-out URL is github.com/settings/copilot/features. | [Copilot plans page](https://github.com/features/copilot/plans) [official] |
| **Privacy: Google AI Studio / Gemini API** "No opt-out on the free tier" | **ACCURATE** | Free tier "Used to improve our products: Yes". | [Gemini pricing](https://ai.google.dev/gemini-api/docs/pricing) [official] |

### Inferences
- Optionally add Cursor to "Do not use" (Free is now inside the X/Grok bundle with social features; see §3). Optionally list Aider as "unmaintained since mid-2026" next to Roo Code and Continue.

### Gaps
- Direct confirmation of ChatGPT's Data Controls wording (403).

---

## 8. Proposed edits to TOOLS.md (exact old → new wording)

### Takeaway
About 20 edits are needed:
- **Date bump:** one.
- **Factual changes:** five (Gemini Free model, v0, Replit, Antigravity, Neon).
- **New rows or notes:** four (Codex student credits, Vercel storage cap, Supabase 30 Oct and legacy keys, Gemini model ID).
- **Precision fixes:** about four (Copilot Student credits, Vercel org repos, Aider, Gemini third-party limits).
- **Updates to the "Known upcoming changes" table.**

### Cited Findings (each edit cites the evidence row above)

1. **Header.**
   - Old: `> **Last verified: 25 September 2026.**`
   - New: `> **Last verified: 21 October 2026.**`

2. **Chat table header** (and the LLM API table header).
   - Old: `Free tier (as of 2026-09-25)` / `Free limits (as of 2026-09-25)`
   - New: `Free tier (as of 2026-10-21)` / `Free limits (as of 2026-10-21)`

3. **Gemini row, "Free tier"** (§1; [Gemini Help 17004136](https://support.google.com/gemini/answer/17004136?hl=en), [subscriptions](https://gemini.google/subscriptions/)).
   - Old: `Fast Flash model, some access to the Pro model; limits not published`
   - New: `Flash-Lite model by default since 9 Oct 2026 (the Auto setting may send some prompts to Flash or Pro); limits refresh every 5 hours up to a weekly cap; numbers not published`

4. **Gemini row, "Cheapest paid"** (§1).
   - Old: `Google AI Plus $4.99 · AI Pro $19.99`
   - New: `Google AI Plus $4.99 (adds Flash) · AI Pro $19.99 (adds Pro and Gemini 4 Argon)`

5. **ChatGPT row, "Coding features"** (§1).
   - Old: `In-chat code blocks; basic Codex access for quick tasks. The side-panel *canvas* was reportedly removed in May 2026`
   - New: `In-chat code blocks; basic Codex access for quick tasks. The side-panel *canvas* was reportedly removed in May 2026. Since Oct 2026 "Intelligent UI" can show small interactive widgets (charts, forms, calculators), but it does not run your own code`

6. **Claude row, "Free tier"** (optional; §1).
   - Old: `Mid-size and small models; limits not published`
   - New: `Mid-size and small models (Sonnet 5.5 since 28 Sep 2026); limits reset every 5 hours, numbers not published`

7. **v0 row** (§2; [v0 docs](https://v0.app/docs/pricing)).
   - Old: `| **v0** | About $5 of credits, 7 messages/day | — |`
   - New: `| **v0** | New accounts: $5 of credits **once** (no monthly refill since Oct 2026); 7 messages/day | Older free accounts keep $5/month. Cheapest paid plan for new users is $30/mo |`

8. **Replit row** (§2).
   - Old: `| **Replit (Starter)** | "Lite" builds; one published app that goes down after 30 days | Keep your code in GitHub, not only in Replit |`
   - New: `| **Replit (Starter)** | Agent in "Free Mode" (replaced "Lite") with daily credits up to a monthly cap; one published app that goes down after 30 days | Starter no longer appears on replit.com/pricing (since Sep 2026); check that a new sign-up still gets it. Keep your code in GitHub, not only in Replit |`

9. **Lovable row, "Notes"** (§2).
   - Old: `Pricing changes 31 Oct 2026`
   - New: `Current chat pricing ends 31 Oct 2026; no replacement announced as of 21 Oct. Re-check in November`

10. **Copilot Student row** (§3).
    - Old: `Free for verified students: unlimited completions, 200 AI Credits/month, cloud agent`
    - New: `Free for verified students: unlimited completions, a monthly AI Credits allowance (GitHub doesn't publish the number; third parties report 200), cloud agent, code review`

11. **Antigravity row** (§3; [models](https://antigravity.google/docs/models)).
    - Old: `| **Google Antigravity** (IDE + `agy` CLI) | Frontier models with weekly limits (numbers not published) | Google AI Pro $19.99 | 18+. Good second opinion and fallback |`
    - New: `| **Google Antigravity** (IDE + `agy` CLI) | Gemini 3.8 Flash with a weekly limit (numbers not published). Claude 4.6 and gpt-oss-120b leave the free plan on 2 Nov 2026 | Google AI Pro $19.99 (Gemini 4 Argon and Claude 5.5 need a paid, non-trial plan) | 18+. Good second opinion and fallback |`

12. **Open-source agents row and stack table** (§3).
    - Stack table, Terminal agent, Fallback 2: `OpenCode or Aider + free models` → `OpenCode + free models (Aider has had no release since Aug 2025)`
    - Editor table notes: `Connect to Groq, OpenRouter free models or Ollama` → `Connect to Groq, OpenRouter free models or Ollama. OpenCode, Cline and Kilo Code all shipped releases in Oct 2026; Aider has not since Aug 2025`

13. **OpenAI Codex CLI row, notes** (§3, §6).
    - Old: `Optional for weeks 6–8`
    - New: `Optional for weeks 6–8. University students in the US and Canada can claim $100 of free Codex credits (works with ChatGPT Free)`

14. **Gemini API row, "Free limits"** (§4).
    - Old: `Not published. Third parties report about 500 requests/day on Flash-Lite and about 20/day on Flash`
    - New: `Not published (see AI Studio). Earlier third-party reports: about 500/day on Flash-Lite and about 20/day on Flash (not re-confirmed in Oct 2026). Use `gemini-3.5-flash-lite`; `gemini-3.1-flash-lite` may shut down from 7 May 2027`

15. **Cloudflare Workers AI row, notes** (optional; §4).
    - Old: `Needs a Cloudflare account ID`
    - New: `Needs a Cloudflare account ID. Some newer models need a paid plan`

16. **Vercel Hobby row** (§5).
    - Old: `Non-commercial. **Cannot deploy repos owned by a GitHub organization** (fork to your personal account)`
    - New: `Non-commercial. **Cannot deploy private repos owned by a GitHub organization** (make the repo public or fork it to your personal account). 10 GB deployment storage; old deployments are deleted when you go over`

17. **Supabase row** (§5).
    - Old: `**Pauses after 1 week of inactivity** — restore it from the dashboard`
    - New: `**Pauses after 1 week of inactivity** — restore it from the dashboard. From 30 Oct 2026, new tables need explicit `grant`s before the API can see them. Use the publishable/secret keys; the legacy anon/service_role keys are deprecated by the end of 2026`

18. **Neon / Turso row** (optional; §5).
    - Old: `| **Neon / Turso** | Postgres / SQLite databases | Database only, no auth |`
    - New: `| **Neon / Turso** | Postgres (1 GB per project on Neon Free) / SQLite databases | Database only, no auth |`

19. **Student offers table, new row** (§6).
    - Add: `| Codex credits for students | Verified university students in the US and Canada | $100 of Codex credits (2,500 credits); works with ChatGPT Free; one per student; no card |`
    - Google row: after 31 Oct, change the ChatGPT Plus row to "ended". Optionally, in the Google row, change `(AI Plus in 140+ other markets)` to `(AI Plus, which includes Flash but not Pro, in 140+ other markets)`.

20. **"Known upcoming changes" table** (§9).
    - Mark `14 Oct 2026 | GPT-5.5 retires from ChatGPT and Codex` as done (or delete it).
    - Add the rows listed in §9 (30 Oct, 2 Nov, 16 Nov, end of 2026, 7 May 2027).

21. **"Do not use" table** (optional; §3, §7).
    - Add: `| Cursor (Free) | Since 12 Oct 2026 bundled into the X/Grok "X Subscription"; the $8 plan is Grok-only; no student offer |`

22. **Footer.**
    - Old: `Sources for every row: [research/landscape-report-2026-09.md](research/landscape-report-2026-09.md) and the notes in [research/notes/](research/notes/).`
    - New: append `October 2026 re-check: research_notes/Vibe coding courses October 2026 update/tool_changes_since_september.md.`

### Inferences
- **Other course files** (not TOOLS.md) may need follow-up:
  - `weeks/07-security-and-review/instructor-notes.md` says the Data API grants issue affects "very new projects". After 30 Oct 2026 it affects every project's new tables.
  - `weeks/05-apis-secrets-servers/lab.md` points at "flash-lite" generically, which still works. TOOLS.md should name `gemini-3.5-flash-lite` as the current suggestion.
- **Instructor pre-cohort checklist** should add three checks:
  - a fresh Replit sign-up;
  - Lovable's post-31-Oct pricing;
  - the Antigravity free model list after 2 Nov.

### Gaps
- Edits 6, 15, 18 and 21 are optional and depend on the course's policy for how much detail TOOLS.md carries.

---

## 9. New and upcoming change dates (Nov 2026 – mid-2027) for a course starting in early 2027

### Takeaway
**Dates to plan around:**
- **Before the cohort:** Supabase existing-project grants (30 Oct), Lovable pricing (31 Oct), ChatGPT Plus student offer (31 Oct), Antigravity free models (2 Nov), Copilot model deprecations (16 Nov), Google student offer (31 Dec), Supabase legacy keys (end of 2026).
- **During or near the cohort:** Firebase Studio shutdown (22 Mar 2027) and the earliest Gemini 3.1 Flash-Lite shutdown (7 May 2027).

### Cited Findings

| Date | Change | Relevance | Source |
|---|---|---|---|
| ~~14 Oct 2026~~ | GPT-5.5 retired from ChatGPT, Work and Codex (ChatGPT sign-in), 12:00 PDT; API unaffected | Done; remove from the table | [learn.chatgpt.com/docs/pricing](https://learn.chatgpt.com/docs/pricing) [official]; [LetsDataScience](https://letsdatascience.com/news/openai-retires-gpt-55-from-chatgpt-and-codex-1a6f69be) [3rd-party] |
| 23 Oct 2026 | Supabase's second reminder email before the grants change | Info | [Supabase changelog #45329](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically) [official] |
| **30 Oct 2026** | Supabase applies "new tables need explicit grants" to **all existing projects** (existing tables keep their grants) | **High:** weeks 7–8 and the capstone | [Supabase changelog #45329](https://supabase.com/changelog/45329-breaking-change-tables-not-exposed-to-data-and-graphql-api-automatically) [official] |
| **31 Oct 2026** | Lovable's current chat pricing ends (no replacement published as of 21 Oct); ChatGPT Plus student offer claim deadline | Medium | [Lovable docs](https://docs.lovable.dev/introduction/plans-and-credits) [official]; [OpenAI Help 20001493](https://help.openai.com/en/articles/20001493-chatgpt-back-to-school-offer-for-students) [official, snippet] |
| **2 Nov 2026** | Antigravity removes Claude Sonnet 4.6, Claude Opus 4.6 and GPT-OSS-120b; Free & Plus are left with Gemini 3.8 Flash | **High:** the editor and terminal fallback layers | [Antigravity models](https://antigravity.google/docs/models) [official] |
| 16 Nov 2026 | GitHub Copilot deprecates Claude Opus 4.8, Claude Opus 5 and GPT-5.6 Terra (replacements: Opus 5.5, GPT-6.1 Sol or GPT-6 Luna) | Low: Free and Student are Auto-only; affects Pro and above | [GitHub Changelog 2026-10-15](https://github.blog/changelog/2026-10-15-upcoming-deprecation-of-selected-github-copilot-models-in-mid-november) [official] |
| 17 Nov 2026 | Gemini API shuts down several TTS and Live preview models (`gemini-3.1-flash-tts-preview`, `gemini-3.1-flash-live-preview`, …) | Low, unless a lab uses voice | [Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations) [official] |
| 30 Nov → Dec 2026 | Gemini 4 Argon API launch pricing ($2/$10 per M tokens) ends; rates double in December (paid tier only) | Low (not on the free tier) | [DEV Community](https://dev.to/hassann/gemini-4-argon-is-out-5cpp) [3rd-party, snippet] |
| **31 Dec 2026** | Google AI Pro (US) and AI Plus (intl) student offer: last day to redeem | Medium: advise eligible students before the cohort starts | [Google blog](https://blog.google/innovation-and-ai/products/gemini-app/student-offer-google-ai/) [official] |
| **"By the end of 2026"** (no exact day) | Supabase deprecates the legacy `anon` / `service_role` keys | **High:** teach only publishable and secret keys | [Supabase API keys](https://supabase.com/docs/guides/api/api-keys) [official] |
| 15 Mar 2027 | `gemini-2.5-flash-image` (Nano Banana) earliest shutdown | Low | [Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations) [official] |
| **22 Mar 2027** | Firebase Studio shuts down; data deleted | Already in "Do not use" | [Firebase Studio migration](https://firebase.google.com/docs/studio/migrating-project) [official] |
| **7 May 2027** | `gemini-3.1-flash-lite` earliest shutdown (replacement `gemini-3.5-flash-lite`) | **Medium:** pick 3.5 Flash-Lite in the week-5 starter | [Gemini deprecations](https://ai.google.dev/gemini-api/docs/deprecations) [official] |

### Inferences
- **Two dates fall before an early-2027 cohort and change what students see on day one:** Antigravity's 2 Nov model removal, and Supabase's 30 Oct grants plus the end-of-2026 legacy keys. Re-verify both in the pre-cohort check.
- **Volatility since 25 Sep:** in four weeks, three free tiers shrank (Gemini app, v0 for new users, Antigravity's models) and one builder dropped its free card from its pricing page (Replit). Only one free tier grew (Neon storage). This is consistent with the baseline finding that free tiers are trending toward smaller defaults and "credits with caps".

### Gaps
- No announcements were found yet for Jan–Mar 2027 plan changes at GitHub Copilot, Vercel, Groq or OpenRouter. Absence of evidence is not evidence of no change.
- Lovable's replacement pricing, and whether it takes effect on 1 Nov 2026, is unknown.
