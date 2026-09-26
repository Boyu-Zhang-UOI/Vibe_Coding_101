# Accounts

> Which accounts you need, when you need them, and how to keep them safe.

You don't need every account on day one. In week 0 you create a **Google** account and a **GitHub** account (plus, optionally, a second chat assistant). The rest you create in the week that uses them. Every account in this course is free. None of them needs a credit card to earn full marks.

## Which accounts, and when

| Account | Needed? | Create it in | Used in | Notes |
|---|---|---|---|---|
| **Personal Google account** | Required | Week 0 | Weeks 1–3: Gemini with Canvas. Week 3: Google AI Studio *Build*. Weeks 5–8: a Gemini API key | Personal, not school or work (see [below](#keep-course-accounts-separate-from-work-and-school)) |
| **GitHub** | Required | Week 0 | Every week: repositories, GitHub Pages, github.dev, Codespaces, GitHub Copilot | Your username is part of your portfolio address |
| **GitHub Education** | Recommended for students | Week 0 (verification can take days) | Weeks 4–8: GitHub Copilot Student | Apply at [education.github.com](https://education.github.com/) |
| **ChatGPT** | Recommended | Week 0 or 1 | Weeks 1–3: fallback chat assistant; week 2: your second assistant for the two-model comparison | Free plan |
| **Claude** | Optional | Week 0 or 1 | Weeks 1–3: fallback chat assistant with Artifacts (live previews) | **18+ only** |
| **Bolt** | Recommended | Week 3 | Week 3: the fallback app builder in the bake-off | Free plan |
| **Lovable, v0, Replit** | Optional | Week 3 | Week 3: one short session each, to see what free credits buy | Free plans |
| **Google Antigravity** | Optional | Week 4 or later | Weeks 4–8: fallback editor and agent | **18+ only**; uses your personal Google account |
| **Vercel** (Hobby plan) | Required | Week 5 | Weeks 5–8: hosting apps that have a server part | Sign up **with GitHub**, on your personal account |
| **Groq** | Required for week 5's provider-swap drill | Week 5 | Weeks 5–8: fallback LLM API (the primary one for EEA, UK and Swiss cohorts) | No card needed |
| **OpenRouter**, **Cloudflare** | Optional | Week 5 or later | More fallback LLM APIs; Cloudflare is also fallback hosting | See [TOOLS.md](../TOOLS.md) |
| **Supabase** | Required for the week 7 lab | Week 7 | Weeks 7–8: database and sign-in for your capstone, if it stores shared data | Sign up **with GitHub** |

The current primary and fallback tools, their free limits and their age rules are in [TOOLS.md](../TOOLS.md). If a tool changes, TOOLS.md changes; this table only says *when* you need each kind of account.

> [!TIP]
> When a site offers **"Sign in with GitHub"** or **"Sign in with Google"**, it's usually the easiest choice: one less password to manage. When it then asks for access to your repositories, choose **Only select repositories** where you can, rather than all of them.

## Age and region rules

AI tools have different minimum ages, and some can't be used in some regions. As of the last check:

- **18+ only:** Claude, Google AI Studio and the Gemini API, and Google Antigravity.
- **13+ (with parental consent for ChatGPT):** the Gemini app and ChatGPT.
- **Regions:** the Gemini API's free tier must not be used for apps that serve people in the European Economic Area (EEA), the UK or Switzerland. Several student offers are for one country only.

[TOOLS.md](../TOOLS.md) has the current rules for every tool. If you're under 18, or you live in the EEA, UK or Switzerland, tell your instructor in week 1. The course has an adjusted tool list for both cases: [instructor/variants.md](../instructor/variants.md).

> [!WARNING]
> Don't give a false age to get into a tool. Terms of service are a contract, and the course works without the adult-only tools.

## Security hygiene

Your GitHub account will hold your portfolio, and later in the course some accounts will hold API keys (secret passwords that let a program use a paid service). A stolen account can cost you your work or someone else's money. Four habits prevent almost all of it.

### 1. Use a password manager

A **password manager** is an app that creates and remembers a different strong password for every site. You remember one master password.

- Good free options: the one built into your browser or phone (Google Password Manager, iCloud Keychain, Microsoft Edge's), or a separate app such as Bitwarden.
- Give every course account its **own** password. If one site leaks, the others stay safe.
- Store API keys in the password manager too (most have a "secure note" type). Never in a document, a chat or an email to yourself.

### 2. Turn on two-factor authentication

**Two-factor authentication (2FA)** means signing in needs your password *and* a second thing you have, usually your phone. A stolen password alone is then not enough.

- Turn it on for **GitHub** and **Google** now, and for Vercel, Supabase and any account that holds an API key when you create it.
- Best: a **passkey** (your phone or laptop confirms it's you with a fingerprint, face or PIN) or an **authenticator app** (such as Google Authenticator, Microsoft Authenticator or the one in your password manager). Text-message codes are better than nothing.
- On GitHub: profile photo → **Settings** → **Password and authentication**. GitHub requires 2FA for accounts that contribute code, so you'll be asked sooner or later anyway.
- **Save your recovery codes** in your password manager. If you lose your phone, they're the only way back into your account.

### 3. Watch out for fake sign-in pages

Phishing means a fake email or page that tries to get your password.

- Only type your GitHub password at `github.com`, and your Google password at `accounts.google.com`. Check the address bar.
- Be suspicious of emails about "suspended accounts" or "unpaid invoices" for tools you use for free. Open the site yourself instead of clicking the link.

### 4. Clean up access you no longer need

- **GitHub:** Settings → **Applications** lists every app you've given access to. Revoke the ones you don't use.
- **API keys:** delete keys you've stopped using, and all course keys when the course ends. If a key was ever pasted into a chat or committed to a repository, **revoke it and make a new one** (safety contract rule 2).

Also on GitHub, under Settings → **Emails**, tick **Keep my email addresses private**. Commits (save points) record an email address, and in a public repository anyone can read it. With this setting on, GitHub uses a private "noreply" address instead.

## Student offers

Some companies offer students a paid plan free for a while. The current offers, who qualifies and their deadlines are in [TOOLS.md](../TOOLS.md#student-offers-check-eligibility).

- **None of them is needed** for this course or for full marks.
- **Read the terms before you claim.** Several offers need a payment method and **renew automatically** at the full price when the free period ends.
- **If you claim one, set a calendar reminder** a week before it renews. Cancel then if you don't want to pay, and screenshot the cancellation confirmation.
- Don't claim offers you won't use. A free period usually starts when you claim it, so if the deadline allows, time it to the weeks it would help most (the agent weeks, 6–8).

The one offer most useful for this course is **GitHub Education** (Copilot Student), which doesn't auto-renew into a paid plan. Apply in week 0.

## Keep course accounts separate from work and school

Keep the course, and the AI tools in it, away from anything that belongs to your employer or school.

- **Use personal accounts.** School and work Google or Microsoft accounts are controlled by an administrator. AI features may be switched off, your activity may be visible to the organization, and different terms apply.
- **Never paste or upload work or school data** into an AI tool: documents, code, customer lists, emails. In 2023, engineers at Samsung pasted internal code into ChatGPT, and the company then banned generative AI on company devices for a time ([TechCrunch](https://techcrunch.com/2023/05/02/samsung-bans-use-of-generative-ai-tools-like-chatgpt-after-april-internal-data-leak/)).
- **Don't open work repositories** in your course codespaces, and don't connect AI tools to your work email, calendar or drive.
- **Use a separate browser profile** for the course, if you share a computer with work. Chrome, Edge and Firefox all support profiles. It keeps course sign-ins apart from work sign-ins, and it's easy to see which one you're in.
- **Check your employer's AI policy** if you plan to use course skills at work. Many organizations limit which AI tools may see company data.

## Checklist

- [ ] Personal Google account (not school or work)
- [ ] GitHub account with a professional username
- [ ] Two-factor authentication on Google and GitHub, with recovery codes saved in a password manager
- [ ] "Keep my email addresses private" turned on in GitHub
- [ ] (Students) GitHub Education application submitted
- [ ] A second chat assistant (ChatGPT, or Claude if you're 18+) before week 2
- [ ] Privacy settings changed: [privacy-settings.md](privacy-settings.md)

Back to [Week 0 pre-work](README.md).
