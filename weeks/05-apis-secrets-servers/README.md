# Week 5 — APIs, Secrets & Servers

> The browser is public; secrets live on the server.

| | |
|---|---|
| **Time** | One 3-hour studio + about 3 hours of homework |
| **Tools** | GitHub Codespaces · a free LLM API key (Gemini API; Groq as fallback; details in [TOOLS.md](../../TOOLS.md)) · Vercel Hobby · GitHub Copilot (Ask/chat) |
| **You'll build** | **An AI micro-app**: a small web page that asks an AI model a question through your own server route, live on Vercel with the key hidden |
| **Due before week 6** | Micro-app live on Vercel · README section "Where the key lives and who can read it" · an input limit and a friendly rate-limit error, with a test · `PROMPTS.md` updated · AI-free reflection · **capstone pitch** |

## Learning objectives

By the end of this week you can:

1. Describe an HTTP request and response (method, address, headers, body, status code) and read one in your browser's DevTools.
2. Explain what an API, an endpoint and JSON are, using an everyday analogy.
3. Say why an API key is "a password with a bill attached", and why it must never be sent to the browser, committed to git or pasted into an AI chat.
4. Keep a key in an environment variable: `.env` locally, listed in `.gitignore`, with a safe `.env.example`; and in Vercel's settings for the live site.
5. Explain what a serverless function is, and trace a request from the page through `/api/ask` to the AI provider and back.
6. Switch AI providers by changing configuration only, and explain why that works.
7. Protect a public endpoint that spends your quota: check input length on the server and show a friendly message when the free quota runs out.
8. Prove your key is not in the browser or in your git history.

## Before class

- [ ] Your Project 1 is finished and your week 4 reflection is submitted.
- [ ] You can open a Codespace and use its terminal (week 4). If not, work through [setup/codespaces.md](../../setup/codespaces.md).
- [ ] You are signed in to Google with a **personal** account (for a Gemini API key; you must be 18+). If you are under 18 or in the EEA, UK or Switzerland, your instructor will give you a different provider: see [instructor/variants.md](../../instructor/variants.md#under-18-cohorts).
- [ ] Create a free **Groq** account too (console.groq.com), so you have a fallback provider ready. No card is needed.
- [ ] Create a free **Vercel** account by signing in with GitHub at vercel.com (Hobby plan).
- [ ] Skim [projects/capstone-ideas.md](../../projects/capstone-ideas.md). Your capstone pitch is due before week 6.

> [!WARNING]
> This week you handle your first real secret. Rule 2 of the [safety contract](../../setup/safety-contract.md) applies from now on: **never paste an API key into an AI tool**, a chat, an issue or a commit. Keys go in `.env` and nowhere else.

## Studio agenda

| Time | Block | What happens |
|---|---|---|
| 0:00–0:10 | Show and tell | Two students demo their finished Project 1 |
| 0:10–0:30 | Concept talk | [slides.md](slides.md): requests and responses, keys, the browser/server boundary, environment variables, serverless functions, swapping providers, rate limits |
| 0:30–0:40 | Live demo | The instructor opens DevTools on a "leaky" page and finds its key in 60 seconds, then shows the safe version: the key stays on the server |
| 0:40–2:20 | Lab | [lab.md](lab.md): explore with DevTools, run the starter with your own key, make it yours, swap providers, deploy to Vercel, prove the key is hidden (includes a 10-minute break) |
| 2:20–2:45 | Debrief | Show your live app. Which provider answered better? Where does your key live? |
| 2:45–3:00 | Exit ticket and homework | [Week 5 exit ticket](../../assessment/exit-tickets.md#week-5) (🔴 no AI), then a homework and capstone-pitch preview |

## Materials

| File | What it is |
|---|---|
| [slides.md](slides.md) | The 20-minute concept talk (Marp slides with speaker notes) |
| [lab.md](lab.md) | The studio lab, step by step, with checkpoints and troubleshooting |
| [starter/](starter/) | The AI micro-app starter kit: page, server route, tests, deploy settings ([starter README](starter/README.md)) |
| [homework.md](homework.md) | Core and stretch homework, with a checklist |
| [instructor-notes.md](instructor-notes.md) | Run sheet, demo script, pitfalls and fallback plans |

Shared course files you will use this week:

- [projects/ai-micro-app.md](../../projects/ai-micro-app.md): the project brief
- [projects/capstone.md](../../projects/capstone.md) and [projects/capstone-ideas.md](../../projects/capstone-ideas.md): for your capstone pitch
- [templates/PROMPTS.md](../../templates/PROMPTS.md) and [templates/REFLECTION.md](../../templates/REFLECTION.md)
- [resources/safe-loop.md](../../resources/safe-loop.md): the six-step loop
- [resources/glossary.md](../../resources/glossary.md): [API](../../resources/glossary.md#api), [API key](../../resources/glossary.md#api-key), [environment variable](../../resources/glossary.md#environment-variable), [serverless function](../../resources/glossary.md#serverless-function), [rate limit](../../resources/glossary.md#rate-limit)

## Key ideas

If you are working through this week on your own, read this section, then do the [lab](lab.md).

### Requests, responses and APIs

The browser asks another computer for something with an **HTTP request**: a method (`GET` to fetch, `POST` to send), an address, headers and sometimes a body. It gets back a **response** with a **status code** (`200` OK, `400` bad request, `401` not allowed, `429` too many requests, `500` server error) and a body, usually **JSON** such as `{"reply": "Hello"}`. An **API** is the set of requests a service accepts; each address that does one job is an **endpoint**. *The menu is the API, your order is the request, the kitchen you never see is the server.* More in [resources/web-basics.md](../../resources/web-basics.md).

### An API key is a password with a bill attached

Anyone who has your **API key** can use your quota or run up your bill. Leaks are common: AI-assisted commits leak secrets about twice as often as other commits, about 3.2% versus 1.6% ([GitGuardian 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)).

### The browser is public

Everything sent to the browser (HTML, CSS, JavaScript, every request and response) can be read by anyone with DevTools. A key "hidden" in JavaScript is a published key. So the key stays on a **server**, and the browser talks only to your server. Week 7 applies the same idea to databases.

### Where secrets live

In your Codespace the key lives in **`.env`**, which the server reads into **environment variables** at start-up. `.env` is listed in **`.gitignore`**, so git never commits it; the committed **`.env.example`** holds placeholders only. For the live site, the same settings go into Vercel's Environment Variables page.

### Serverless functions

On Vercel, each file in `api/` becomes a **serverless function**: code that runs on Vercel's computers only when someone calls it. `api/ask.js` checks the question, adds your **system prompt**, calls the AI with your key, and returns only the reply. Locally, `npm run dev` plays Vercel's role.

### One format, many providers

Gemini, Groq, OpenRouter, Cloudflare and Ollama all accept the "OpenAI-compatible" request format, so the starter switches provider when you change three settings (`LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`). That is your insurance when a free tier changes.

### Free tiers have limits, and your endpoint is public

Free tiers cap your requests; past the cap you get status `429`. Your `/api/ask` route is public, so **anyone** can call it and spend your quota. Check input length on the server (not only in the browser), and show a friendly message when the quota runs out.

### The system prompt is product design

The same model becomes a recipe helper or a polite-email rewriter depending on its **system prompt**: the hidden instructions your server sends with every question. Writing it is designing your product.

## Understanding check

At the end of the studio you complete the [Week 5 exit ticket](../../assessment/exit-tickets.md#week-5) with **no AI** (🔴). You will be asked to **show where your key lives and who can read it**: draw or describe the path from the page to the AI provider, mark where the key is stored (locally and on Vercel), and say what a visitor with DevTools can and cannot see.

## Homework

About 3 hours. Full details in [homework.md](homework.md).

- **Core (required):** your micro-app live on Vercel; a README section "Where the key lives and who can read it" (🔴 written by you); your own input limit and friendly rate-limit message, with a test for the validation function; `PROMPTS.md` with the provider-swap entry; an AI-free reflection; and your **capstone pitch** ([brief](../../projects/capstone.md), [ideas](../../projects/capstone-ideas.md)).
- **Stretch (optional):** streaming replies; deploy to Cloudflare Workers; a local model with Ollama; conversation memory.

Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)); the micro-app has its own rubric ([AI micro-app](../../assessment/rubrics.md#ai-micro-app)).

## If a tool is down

| Problem | What to do |
|---|---|
| Can't get a Gemini key (under 18, region, school account) | Use Groq as your primary provider. See [TOOLS.md](../../TOOLS.md) and [instructor/variants.md](../../instructor/variants.md#eea-uk-and-swiss-cohorts) |
| Your provider returns 429 or is down | Do the provider-swap drill now: change the three `LLM_` settings to Groq or OpenRouter and restart |
| Vercel won't import your repo | Make sure the repo is owned by your **personal** account, not an organization. Otherwise use the Cloudflare Workers fallback in the [starter README](starter/README.md#cloudflare-workers-fallback-optional) |
| Codespaces quota used up | Stop old codespaces at github.com/codespaces. Otherwise use the optional [local setup](../../setup/local-setup.md) |
| Copilot credits ran out | Keep going without it: this week's code is small, and the lab's steps don't need AI. See [resources/troubleshooting.md](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |

## Going further

- MDN, [An overview of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Overview): requests, responses and status codes.
- GitGuardian, [The State of Secrets Sprawl 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/): how and where secrets leak.
- Vercel Docs, [Functions API reference](https://vercel.com/docs/functions/functions-api-reference): the `fetch` handler your `api/ask.js` uses.
- GitHub Docs, [About push protection](https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection): how GitHub can block a pushed secret.
- More readings: [resources/reading-list.md](../../resources/reading-list.md).
