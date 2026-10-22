# Week 5 — APIs, Secrets & Servers

> The browser is public; secrets live on the server.

## This week at a glance

| Item | Details |
|---|---|
| **Before Studio A** (≤1 h) | Read this page and the "Requests and responses" part of [How the Web Works](../../resources/web-basics.md#requests-and-responses-http). Create three free accounts: a **personal** Google account for a Gemini API key (18+), a Groq account (your fallback provider) and a Vercel account (sign in with GitHub). No card needed for any of them |
| **Studio A** | Talk: requests, keys and the browser/server boundary · live demo: finding a leaked key in 60 seconds · lab: make your micro-app repository, tour the starter, put a free key in `.env` (never in a chat), run it locally, make it yours · checkpoint share |
| **Studio B** | Show and tell · deploy to Vercel (production URL and a screenshot) · provider-swap drill · prove the key is secret (DevTools and `npm run check:secrets`) · mini-lesson: a server route that calls a public API · project time · debrief · exit ticket |
| **Due before next week's Studio A** | Default 11:59 pm the night before. Micro-app live, with its production URL and a screenshot on Canvas · README section "Where the key lives and who can read it" (🔴 AI off) · your own input limit with two validation tests · hidden-costs checklist · `PROMPTS.md` · **capstone pitch on Canvas, due earlier: 72 hours before week 6 Studio A** |
| **AI use this week** | 🟢 AI on: Copilot Chat in Ask mode for the system prompt, the page and explaining code · 🟡 AI limited: the capstone pitch (AI may critique it; you write it), the test skeleton (AI may explain an error; you fill in the blanks) · 🔴 AI off: "Where the key lives and who can read it", the exit ticket. **Never:** a key in any AI tool |
| **Must read** | README (this page), [lab.md](lab.md), [homework.md](homework.md) |
| **Look up when needed** | [AI micro-app starter](starter/README.md) · [AI Micro-app brief](../../projects/ai-micro-app.md) · [Capstone pitch template](../../projects/capstone.md#the-pitch) · [Troubleshooting: my API call returns an error](../../resources/troubleshooting.md#my-api-call-returns-an-error) · [Tool Handout](../../TOOLS.md) · [Glossary](../../resources/glossary.md) |
| **Minimum to keep up** | Your capstone pitch is submitted on time. Week 6 starts from it. A micro-app that isn't live yet can catch up in office hours; the pitch can't wait |
| **Time** | Studios 6 h · outside about 11 h: prep 1 h, homework about 9 h (including the micro-app and `PROMPTS.md`), and about 1 h for set-up surprises |

Canvas is the course's learning management system. Your pitch and the micro-app submission (links and a screenshot) go there; your code and project documents stay in your public repository.

## Learning objectives

By the end of this week you can:

1. Describe an HTTP request and response (method, address, headers, body, status code) and read one in your browser's DevTools.
2. Explain what an API, an endpoint and JSON are, using an everyday analogy.
3. Say why an API key is "a password with a bill attached", and why a secret key must never be sent to the browser, committed to git or pasted into an AI chat.
4. Keep a secret key in an environment variable: in `.env` locally (listed in `.gitignore`, with a safe `.env.example`) and in Vercel's settings for the live site.
5. Explain what a serverless function is, and trace a request from the page through `/api/ask` to the AI provider and back.
6. Switch AI providers by changing configuration only, and explain why that works.
7. Protect a public endpoint that spends your quota: check input on the server, and prove the check with an automated test.
8. Prove your key is not in the browser or in your git history.
9. Write a server route that calls someone else's public API, with input checks, a time limit and friendly errors.

## Before class

- [ ] Your Project 1 is finished, and you can open a Codespace and use its terminal (week 4). If not, work through [GitHub Codespaces](../../setup/codespaces.md).
- [ ] You have a **personal** Google account (not a school one) for a Gemini API key; you must be 18 or over. Under 18, or in the EEA, UK or Switzerland? Your instructor gives you a different provider ([Course variants: under-18 cohorts](../../instructor/variants.md#under-18-cohorts)).
- [ ] You have a free **Groq** account (console.groq.com) as a fallback, and a free **Vercel** account (vercel.com, Hobby plan, sign in with GitHub).
- [ ] You've skimmed [Capstone Ideas](../../projects/capstone-ideas.md). Your pitch is due 72 hours before week 6 Studio A, so start thinking now.

> [!WARNING]
> This week you handle your first real secret. Rule 2 of the [Safety Contract](../../setup/safety-contract.md#2-i-never-paste-secrets-or-other-peoples-data-into-an-ai-tool) applies from now on: **never paste an API key into an AI tool**, a chat, an issue or a commit. Secret keys go in `.env` (and, for the live site, in Vercel's settings) and nowhere else.

## Studio agenda

| Studio | What happens |
|---|---|
| **Studio A — Learn & build** | Recap · concept talk ([slides](slides.md)) · live demo · [lab](lab.md#studio-a--run-it-and-make-it-yours): make your repository, tour the starter, add your key, run it, make it yours · checkpoint share |
| **Studio B — Workshop** | Show and tell · [lab](lab.md#studio-b--ship-it-prove-it-call-a-public-api): deploy, provider swap, prove the key is secret, a public-API route · project time · debrief · [exit ticket](../../assessment/exit-tickets.md#week-5) |

## Materials

- [Slides](slides.md): the 20-minute concept talk
- [Lab](lab.md): Studio A and Studio B, with Core and If time parts and a troubleshooting table
- [Homework](homework.md): finish and document the micro-app, your first validation tests, the capstone pitch
- [AI micro-app starter](starter/): the page, the server route, tests and deploy settings ([starter README](starter/README.md))
- Shared files: the [AI Micro-app brief](../../projects/ai-micro-app.md), the [Capstone brief](../../projects/capstone.md), the [PROMPTS.md template](../../templates/PROMPTS.md), [The Safe Loop](../../resources/safe-loop.md)
- Glossary: [API](../../resources/glossary.md#api), [API key](../../resources/glossary.md#api-key), [environment variable](../../resources/glossary.md#environment-variable), [serverless function](../../resources/glossary.md#serverless-function), [rate limit](../../resources/glossary.md#rate-limit), [publishable key](../../resources/glossary.md#publishable-key)

## Key ideas

If you are working through this week on your own, read this section, then do the [lab](lab.md).

### Requests, responses and APIs

The browser asks another computer for something with an **HTTP request**: a method (`GET` to fetch, `POST` to send), an address, headers and sometimes a body. It gets back a **response** with a **status code** (`200` OK, `400` bad request, `401` not allowed, `429` too many requests, `500` server error) and a body, usually **JSON** such as `{"reply": "Hello"}`. An **API** is the set of requests a service accepts; each address that does one job is an **endpoint**. *The menu is the API, your order is the request, the kitchen you never see is the server.* More in [How the Web Works](../../resources/web-basics.md).

### An API key is a password with a bill attached

Anyone who has your **API key** can use your quota or run up your bill. Leaks are common: AI-assisted commits leak secrets about twice as often as other commits, about 3.2% versus 1.6% ([GitGuardian 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)). Two habits limit the damage ([Safety Contract, rule 4](../../setup/safety-contract.md#4-i-keep-agents-contained)): a key that can spend money has a **hard spending cap** (on this course's free tiers, the simplest cap is having no payment method on the account), and each key does one job in one project.

### The browser is public

Everything sent to the browser (HTML, CSS, JavaScript, every request and response) can be read by anyone with DevTools. A key "hidden" in JavaScript is a published key. So a secret key stays on a **server**, and the browser talks only to your server.

### Where secrets live

In your Codespace the key lives in **`.env`**, which the server reads into **environment variables** at start-up. `.env` is listed in **`.gitignore`**, so git never commits it; the committed **`.env.example`** holds placeholders only. For the live site, the same settings go into Vercel's Environment Variables page.

> [!NOTE]
> **Not every key is a secret.** Some services issue a key that is *meant* to be public. In week 7 you'll use Supabase's **publishable key**, which goes in `public/config.js` in the browser on purpose, and is safe only because database rules (row-level security) decide what it can do. A **secret** key, like this week's AI key, never goes near the browser. When in doubt, treat a key as secret and ask.

### Serverless functions

On Vercel, each file in `api/` becomes a **serverless function**: code that runs on Vercel's computers only when someone calls it. `api/ask.js` checks the question, adds your **system prompt**, calls the AI with your key, and returns only the reply. Locally, `npm run dev` plays Vercel's role.

### One format, many providers

Gemini, Groq, OpenRouter, Cloudflare and Ollama all accept the "OpenAI-compatible" request format, so the starter switches provider when you change three settings (`LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`). That is your insurance when a free tier changes.

### Your endpoint is public, so the server checks everything

Free tiers cap your requests; past the cap you get status `429`. Your `/api/ask` route is public, so **anyone** can call it, skipping your page, and spend your quota. So the server checks every request (not only the page), and an automated test proves the check works.

### Calling someone else's API

A capstone can fetch live data from a public service: weather, books, public holidays. Even when that service needs no key, call it from a server route: the route checks the input, sets a time limit, turns failures into friendly messages and sends the page only what it needs. If a service later needs a key, the key is already in the right place.

### The system prompt is product design

The same model becomes a recipe helper or a polite-email rewriter depending on its **system prompt**: the hidden instructions your server sends with every question. Writing it is designing your product.

## Understanding check

At the end of Studio B you complete the [Week 5 exit ticket](../../assessment/exit-tickets.md#week-5) with the AI off (🔴 AI off). You'll be asked to **show where your key lives and who can read it**: describe the path from the page to the AI provider, say where the key is stored (locally and on Vercel), and say what a visitor with DevTools can and cannot see. One question asks about a decision in your own Project 1 from week 4. Exit tickets are graded on completion, not correctness.

## Homework

About 9 hours outside class, plus 1 hour of prep. Full details and the checklist are in [homework.md](homework.md).

- **Core (required):** your micro-app live at its production URL, with a screenshot; the README section "Where the key lives and who can read it" (🔴 AI off: written by you); your own input limit, with two validation tests from a fill-in skeleton; a hidden-costs checklist; `PROMPTS.md`; and your **capstone pitch** ([pitch template](../../projects/capstone.md#the-pitch), [ideas](../../projects/capstone-ideas.md)), due 72 hours before week 6 Studio A.
- **Stretch (optional):** your own friendly rate-limit (429) message; streaming replies; deploy to Cloudflare Workers; a local model with Ollama; conversation memory.

Week 5 is graded once, with the [AI micro-app rubric](../../assessment/rubrics.md#ai-micro-app), which includes the pitch.

## If a tool is down

| Problem | What to do |
|---|---|
| Can't get a Gemini key (under 18, region, school account) | Use Groq as your primary provider. See the [Tool Handout](../../TOOLS.md#llm-apis-for-your-own-apps-weeks-58) and [Course variants](../../instructor/variants.md#eea-uk-and-swiss-cohorts) |
| Your provider returns 429 or is down | Do the provider-swap drill now: change the three `LLM_` settings to Groq or OpenRouter and restart |
| Vercel won't import your repo | Vercel's free plan can't deploy **private** repositories owned by an organization. Keep the repo in your **personal** account. Otherwise use the [Cloudflare Workers fallback](starter/README.md#cloudflare-workers-fallback-optional) |
| Codespaces quota used up | Stop old codespaces at github.com/codespaces. Otherwise use the optional [local setup](../../setup/local-setup.md) |
| Copilot credits ran out | Keep going without it: this week's code is small, and no lab step needs AI. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits), and save credits for the agent weeks ([Credits budget for the course](../../TOOLS.md#credits-budget-for-the-course)) |
| The public API in Studio B is down | Use the fake response in the lab to read the route, and try the real one later |

## Going further

- MDN, [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview): requests, responses and status codes.
- GitGuardian, [The State of Secrets Sprawl 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/): how and where secrets leak.
- Vercel Docs, [Functions API reference](https://vercel.com/docs/functions/functions-api-reference): the `fetch` handler your `api/ask.js` uses.
- GitHub Docs, [About push protection](https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection): how GitHub can block a pushed secret.
- More readings: the [Reading List](../../resources/reading-list.md).
