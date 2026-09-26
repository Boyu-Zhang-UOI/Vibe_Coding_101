# Privacy settings

> Change these **before** you type anything into an AI tool. Click-paths checked 25 Sep 2026.

Most free AI tools keep what you type. Many use it to **train** future models (the model learns from your conversation), and some let **human reviewers** read samples. That's the price of a free tier. You can't always avoid it, but you can limit it.

Three rules cover every tool, including ones that aren't on this page:

1. **Opt out of training** wherever there's a setting for it.
2. **Use a temporary chat** for anything you'd rather not have stored.
3. **Never paste secrets or other people's data**, into any tool, whatever its settings say. That means no API keys, passwords, tokens, `.env` files, or personal information about other people (safety contract [rule 2](safety-contract.md)).

> [!NOTE]
> **Menus move.** AI companies redesign their settings pages often. If you can't find a setting named here, ask the assistant itself ("Where is the setting that stops my chats being used for training?") or search the company's help pages. If a click-path here is wrong, please tell your instructor so it can be fixed.

## At a glance

| Tool | Used for training by default? | What to change | Temporary chats |
|---|---|---|---|
| [ChatGPT](#chatgpt) | Yes | Turn off "Improve the model for everyone" | Yes |
| [Claude](#claude) | Yes, unless you opt out | Turn off "Help improve Claude" | Yes (incognito) |
| [Gemini](#gemini) | Yes, while Keep Activity is on, with human review of samples | Turn off Keep Activity | Yes |
| [GitHub Copilot](#github-copilot) | Yes, on the Free plan | Turn off use of your data for training | No |
| [Google AI Studio and the Gemini API](#google-ai-studio-and-the-gemini-api) | Yes, with human review (except in the EEA, UK and Switzerland) | **No opt-out on the free tier** | No |
| [Browser app builders](#browser-app-builders-bolt-lovable-v0-replit) | Assume yes | No opt-out we could confirm | No |
| [Google Antigravity](#google-antigravity) | Not stated | Turn off data collection in Settings | No |
| [Groq and OpenRouter](#groq-and-openrouter) | Groq: no. OpenRouter: depends on the model's provider | Review OpenRouter's privacy settings | Not applicable |

> [!WARNING]
> **Shared chat links are public.** In this course you often paste a share link to a chat into `PROMPTS.md`. Anyone with that link can read the whole conversation. Before you share, scroll through and check it contains nothing personal and no keys.

## ChatGPT

**What's collected by default.** Your conversations can be used to train OpenAI's models ([OpenAI Help: how your data is used](https://help.openai.com/en/articles/5722486-how-your-data-is-used-to-improve-model-performance)).

**Change this setting.** Click your profile icon → **Settings** → **Data controls** → turn **Improve the model for everyone** off.

**Temporary chats.** Start a new chat and click **Temporary** (at the top of the chat). A temporary chat isn't saved in your history and isn't used for training ([OpenAI Help: data controls](https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt)).

**Also check.** ChatGPT can remember facts about you across chats (**Settings** → **Personalization** → **Memory**). Review what it has saved, or turn memory off if you'd rather it didn't. If you're under 18, ChatGPT needs a parent's consent and gives you a separate teen experience.

## Claude

**What's collected by default.** On the Free, Pro and Max plans, chats and coding sessions are used to train Anthropic's models unless you opt out. If you allow training, Anthropic keeps your data for much longer ([Anthropic: updates to consumer terms](https://www.anthropic.com/news/updates-to-our-consumer-terms)). Claude is for adults only (18+).

**Change this setting.** Click your name or initials (bottom left) → **Settings** → **Privacy** → turn **Help improve Claude** off.

**Temporary chats.** Start a new chat and turn on **incognito** (the ghost icon near the top of the chat). Incognito chats aren't saved to your history and aren't used for training.

**Also check.** Third-party reports say that chats flagged by Anthropic's safety systems may still be used even when the setting is off. Another reason to keep personal data out of every chat.

## Gemini

**What's collected by default.** While **Keep Activity** is on, Google saves your chats. A sample of chats **and uploaded files** may be read by human reviewers and used to improve Google's products. Chats that a person has already reviewed are kept separately, even if you later delete your activity ([Gemini Apps Privacy Hub](https://support.google.com/gemini/answer/13594961?hl=en)).

**Change this setting.** On [gemini.google.com](https://gemini.google.com/), open **Settings & help** (bottom left) → **Activity** → **Keep activity** → **Turn off**. You can also choose to delete your past activity at the same time.

> [!NOTE]
> **The trade-off.** With Keep Activity off, Gemini doesn't keep your chat history, so you can't reopen yesterday's chat or share a link to it. Copy the prompts you want to keep into your `PROMPTS.md` as you go. If you'd rather keep your history, leave Keep Activity on, keep everything you type course-only and impersonal, and use **temporary chats** for anything else. Either choice meets the safety contract.

**Temporary chats.** Click the **Temporary chat** icon next to **New chat**. Temporary chats don't appear in your history and aren't used to train Google's models. Google still keeps them for a short time to run the service.

**Also check.** Use your **personal** Google account. School and work accounts follow the organization's rules, and an administrator may have switched Gemini off.

## GitHub Copilot

**What's collected by default.** GitHub uses "interaction data" from Copilot Free, Pro and Pro+ to train AI models by default. That means your prompts, Copilot's suggestions, and the code around your cursor ([GitHub blog: Copilot interaction data policy](https://github.blog/news-insights/company-news/updates-to-github-copilot-interaction-data-usage-policy/)). GitHub's FAQ suggests that students who get Copilot through GitHub Education are excluded, but the policy doesn't say so clearly, so turn the setting off anyway if you see it.

**Change this setting.** On github.com: profile photo → **Settings** → **Copilot** (left sidebar) → find the setting that allows GitHub to use your data for AI model training → **Disabled**. This one setting covers Copilot everywhere you use it: Codespaces, VS Code on your laptop, and Copilot CLI in the terminal.

While you're on that page, you can also set **Suggestions matching public code** to **Block**. Copilot will then avoid suggesting code that copies public code word for word.

**Temporary chats.** None. The training setting applies to all your Copilot use.

**Also check.**

- Copilot reads the files in the folder you have open. Keep `.env` files and real documents out of your project folders (safety contract rule 4).
- VS Code sends usage statistics (telemetry) by default. To turn that off: in VS Code, open **Settings**, search for `telemetry`, and set **Telemetry Level** to **off**.

## Google AI Studio and the Gemini API

**What's collected by default.** On the free (unpaid) tier, Google uses what you submit to improve its products, and **human reviewers may read, annotate and process your input and output** ([Gemini API Additional Terms](https://ai.google.dev/gemini-api/terms)). This covers everything you type into AI Studio, including *Build* mode in week 3. It also covers every request your app sends with a free Gemini API key in weeks 5–8, so it includes **whatever your app's users type**.

In the **EEA, the UK and Switzerland**, Google applies its paid-service data terms even to free use. That exemption is set out in the same terms.

**Change this setting.** There is **no opt-out on the free tier**. **Never paste personal or secret data** into AI Studio, and never send real people's personal data through an app that uses a free key. Use made-up test data.

**Temporary chats.** They don't change these terms. Treat everything you type as something a person might read.

**Also check.**

- AI Studio is for adults only (18+).
- Your **API key is a password.** Keep it in a `.env` file or a Codespaces secret ([how](codespaces.md#keep-secrets-in-codespaces-secrets)). Never commit it, paste it into a chat, or put it in front-end code. Delete keys you no longer use from AI Studio's API keys page.

## Browser app builders (Bolt, Lovable, v0, Replit)

**What's collected by default.** The research behind this course couldn't confirm each builder's training settings for free accounts. v0 lists "training opt-out by default" as a feature of its paid Business plan, which suggests that free-plan data may be used for training ([v0 pricing](https://v0.app/pricing)). Assume the same of every builder unless its settings say otherwise. Some builders also make free projects **public**, or show them in a community gallery.

**Change this setting.** No opt-out on the free tiers that we could confirm, so **never paste personal or secret data**. Two things you can do:

- **Check each project's visibility** (public or private) in the builder's project settings. Make practice projects private if the free plan allows it.
- If the builder offers to connect a database, a payment service or another account, **don't connect real accounts**. The week 3 bake-off doesn't need any.

**Temporary chats.** None.

**Also check.** When a builder asks for access to your GitHub account, choose **Only select repositories**. Export your project to GitHub at the end of every session: builders change their free plans often, and some delete free projects after a while.

## Google Antigravity

**What's collected by default.** Google says you can opt out of data collection from Antigravity's Settings panel. Whether the free plan uses your data to train models isn't stated ([Antigravity FAQ](https://antigravity.google/docs/faq)). Antigravity is for adults only (18+) and needs a personal Google account.

**Change this setting.** Open Antigravity's **Settings** panel and turn off the data-collection option.

**Temporary chats.** None.

**Also check.** Antigravity is an **agent**: it can read and change files and run commands on your own computer. In one reported case, an agent asked to clear a cache wiped a user's entire drive ([Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/googles-agentic-ai-wipes-users-entire-hard-drive-without-permission-after-misinterpreting-instructions-to-clear-a-cache-i-am-deeply-deeply-sorry-this-is-a-critical-failure-on-my-part)).

- In Settings, find the options that control whether the agent runs terminal commands automatically, and choose the ones that **ask you first**.
- Open only a single project folder, never your home folder or a whole drive.
- Commit before and after every agent task (safety contract rule 3).

## Groq and OpenRouter

These are **LLM APIs**: services your app calls from its server code in weeks 5–8. There's no chat window and no history for you to manage. What matters is what your app sends them.

**What's collected by default.**

- **Groq** doesn't keep the content of your requests by default ([Groq: your data](https://console.groq.com/docs/your-data)).
- **OpenRouter** doesn't log your prompts by default. But OpenRouter passes each request on to another company that runs the model, and some of those companies, especially for **free** models, may log your prompts or train on them ([OpenRouter: provider logging](https://openrouter.ai/docs/guides/privacy/provider-logging)).

**Change this setting.**

- **Groq:** nothing to change.
- **OpenRouter:** open your account's **Settings** → **Privacy** and read the options. They control whether your requests may go to providers that log or train on prompts. Some free models only work if you allow that, which is exactly why you never send personal data through them.

**Temporary chats.** Not applicable.

**Also check.** Everything your app's users type is sent to the provider, so the app must never ask for real personal data. Keep keys in `.env` or a Codespaces secret, never in front-end code.

## Cloudflare Workers AI and Ollama

- **Cloudflare Workers AI** (a fallback LLM API): the course's research didn't confirm how Cloudflare uses request data. Follow the three rules at the top of this page.
- **Ollama** (a fallback that runs models on your own computer): when the model runs locally, your prompts never leave your machine. That makes it the most private option, if your computer is powerful enough (see [TOOLS.md](../TOOLS.md)). Ollama's cloud service is different: read its terms before you use it.

## Your GitHub account and commits

GitHub isn't an AI tool, but it's public by default, and everything you commit to a public repository stays visible in its history.

- **Your email address.** Every commit records an email address. Go to **Settings** → **Emails** and tick **Keep my email addresses private** and **Block command line pushes that expose my email**.
- **Your profile.** Your username, profile photo and anything in your bio are public. Share only what you're happy for employers and strangers to see.
- **Deleting isn't erasing.** If you commit a secret and delete it in the next commit, it's still in the history. Revoke the secret and make a new one. See [github-basics.md](github-basics.md#public-or-private).

## Any other AI tool

Before you use a tool that isn't on this page, spend two minutes answering:

- [ ] Does it train on what I type by default? Where is the opt-out?
- [ ] Can people (reviewers, or the public) see my chats or projects?
- [ ] Does it have a temporary or incognito mode?
- [ ] What is its minimum age, and is it available where I live?
- [ ] Where is the data stored? (For example, the course doesn't require DeepSeek, which stores data in China and is banned on government devices in several countries: [TechCrunch](https://techcrunch.com/2025/02/03/deepseek-the-countries-and-agencies-that-have-banned-the-ai-companys-tech).)

If you can't find the answers, treat the tool as public: nothing personal, nothing secret.

Back to [Week 0 pre-work](README.md) · Current tools and limits: [TOOLS.md](../TOOLS.md)
