---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 5"
footer: "CC BY 4.0"
---

# APIs, Secrets & Servers

Week 5: your app talks to an AI, and keeps its key secret

<!--
Speaker notes (0:00, about 30 seconds). The whole talk runs about 19 minutes.
Until now everything we built ran entirely in the browser. This week your app gets a server: a small piece of code that runs somewhere else and can keep a secret. By the end of Studio B you'll have an AI-powered app live on the web, and evidence that its key is hidden.
The big idea fits on one line, and it's the most important security idea in the course: the browser is public; secrets live on the server.
-->

---

## A request and a response

| | Request (browser → server) | Response (server → browser) |
|---|---|---|
| First line | `POST /api/ask` | `200 OK` |
| A header | `Content-Type: application/json` | `Content-Type: application/json` |
| Body | `{"question": "What is JSON?"}` | `{"reply": "JSON is a way to…"}` |

<!--
Speaker notes (about 1.5 minutes).
Every time your page needs something from another computer, the browser sends a request and gets a response. That's HTTP.
A request has a method (GET to fetch something, POST to send something), an address, some headers (labels like "this is JSON"), and sometimes a body.
The response has a status code and a body. You'll see these codes this week: 200 OK; 400 you sent something bad; 401 or 403 you're not allowed (wrong key); 404 not found; 429 too many requests; 500 the server broke.
In the lab you'll see these exact requests in DevTools.
-->

---

## JSON: data as text

```json
{ "question": "What is JSON?", "maxWords": 120, "plain": true }
```

- Curly braces hold **"name": value** pairs
- Text in quotes, numbers and true/false without
- Every API this week speaks JSON

<!--
Speaker notes (about 1 minute).
JSON stands for JavaScript Object Notation. It is just text with a strict shape, so any two programs can exchange data. You already used something like it when you saved data in localStorage in Project 1.
Don't memorize the rules; recognize the shape.
-->

---

## APIs and endpoints

| Restaurant | Web |
|---|---|
| Menu | **API**: the requests a service accepts |
| One dish on the menu | **Endpoint**: one address, one job |
| Your order | Request |
| The kitchen you never see | Server |
| The plate that comes back | Response |

<!--
Speaker notes (about 1 minute).
An API, an application programming interface, is the menu of requests a service will accept. Each item on the menu is an endpoint: an address that does one job, such as /chat/completions for "answer this conversation".
This week your app uses three APIs: your own tiny one (/api/ask, which you own), the AI provider's (which your server calls), and in Studio B a public weather API.
-->

---

## An API key is a password with a bill attached

- Proves to the provider **who you are**
- Anyone who has it can **spend your quota** or **your money**
- **Never** in browser code · git · an AI chat
- Every key that can spend money has a **hard spending cap**

<!--
Speaker notes (about 1.5 minutes).
Providers need to know whom to bill and whom to limit, so every request carries your key. That makes the key a password with a bill attached. On a free tier the worst case is that someone burns your quota and your app stops; on a paid account it's your money. This month, stolen AI keys ran up charges of more than $1,000 for some users of one hosted tool (TechCrunch, 19 Oct 2026: https://techcrunch.com/2026/10/19/hackers-hit-ai-coding-tool-opencode-running-up-charges-on-users-ai-accounts/).
Three places a key must never go: into browser code, into git, and into an AI chat. The third one is new for many people: a chat is stored, may be used for training, and may be read by reviewers. Rule 2 of your safety contract.
Rule 4 adds the spending cap: a cap cuts the service off; a warning email is not a cap. On our free tiers the simplest cap is having no card on the account. Don't add one.
-->

---

## The trust boundary

| Public: anyone can read | Private: only you and your host |
|---|---|
| The page: HTML, CSS, `app.js` | Your server route: `api/ask.js` |
| Every request and response | The key, read from an environment variable |
| What the user typed, the reply | The system prompt |

1. The browser sends the question to **your** server
2. The server checks it, **adds the key**, asks the AI
3. The server sends back **only** the reply

<!--
Speaker notes (about 2 minutes). This is the slide to slow down on.
Draw a line down the middle of the whiteboard and leave it up all week. Left: the browser. Everything on the left is public: the HTML, the CSS, every JavaScript file, every request and every response. Right: your server. Code there runs on a computer the visitor never touches.
The key lives on the right, only. The browser talks to your server; your server talks to the AI. The browser never sees the key and never talks to the AI directly.
Week 7 uses exactly the same line for databases: apps leaked data because they trusted the left side.
-->

---

## DevTools shows everything

- **Sources**: every file the page loaded
- **Network**: every request, header and response
- A key "hidden" in JavaScript is a **published** key

*Live demo next: finding a key in under a minute*

<!--
Speaker notes (about 30 seconds). Then the 10-minute live demo (script in instructor-notes.md).
Anyone can press F12. Sources shows the files; Network shows every request, including headers like Authorization. There is no way to hide a secret inside the browser: obfuscation, odd file names and "it's minified" all fail.
-->

---

## Where secrets live

| Place | Holds | Committed to git? |
|---|---|---|
| `.env` in your Codespace | Your real key | **Never** (listed in `.gitignore`) |
| `.env.example` | Placeholders: `LLM_API_KEY=paste-your-key-here` | Yes |
| Vercel → Environment Variables | The key for the live site | No: it's in Vercel's settings |

<!--
Speaker notes (about 1.5 minutes).
An environment variable is a setting the server reads when it starts, instead of having it written into the code. Locally they come from a file called .env. .gitignore tells git to pretend .env doesn't exist, so it never gets committed. .env.example is the safe twin: it lists the names with fake values, so the next person knows what to set.
For the live site you type the same values into Vercel's settings. Codespaces secrets are another safe option.
Two gotchas: restart the server after changing .env, and redeploy on Vercel after changing variables there.
-->

---

## Not every key is a secret

- **Secret key:** can spend money or change anything → server only
- **Publishable key:** made to be public → can go in the browser, *if* rules protect the data
- Week 7: Supabase's publishable key goes in `public/config.js`, safe **only** with row-level security
- Not sure? Treat it as secret, and ask

<!--
Speaker notes (about 1 minute).
Some services give you two kinds of key. A secret key is today's kind: it goes on the server only. A publishable key is meant to be seen: Supabase's goes in the browser, and the database's own rules (row-level security) decide what it may do. In week 7 you'll see what happens when those rules are missing: a public key plus no rules equals a public database.
So the rule isn't "every key in .env". It's "every secret key on the server only". If you can't tell which kind a key is, treat it as secret.
-->

---

## Serverless functions

`api/ask.js` runs on Vercel's computers **only when someone calls it**.

1. Check the question (empty? too long?)
2. Add the **system prompt**
3. Call the AI **with the key**
4. Send back **only** the reply

<!--
Speaker notes (about 1 minute).
"Serverless" doesn't mean there's no server; it means you don't manage one. You write a function in the api folder; Vercel runs it whenever a request arrives.
Walk through the four steps. Point out that step 1 happens before any AI call, so bad requests never cost quota. Step 4 is what keeps the key and the system prompt private.
Locally, npm run dev plays Vercel's role.
-->

---

## One format, many providers

```text
LLM_BASE_URL = where the provider's API lives
LLM_API_KEY  = your key for that provider
LLM_MODEL    = which model to use
```

Gemini · Groq · OpenRouter · Cloudflare · Ollama: same request, different settings.

<!--
Speaker notes (about 1 minute).
Most providers now accept the same request format, the one OpenAI made popular, so they're called "OpenAI-compatible". That means our code doesn't care which company answers. Change the three settings, restart, done.
This is your insurance policy. Free tiers change monthly; when one runs out or disappears, you switch in two minutes. In Studio B you'll do this on purpose: the provider-swap drill.
Model names change constantly, so we never hard-code them: npm run models asks the provider for its current list. Current options are in TOOLS.md.
-->

---

## A public endpoint spends your quota

- Anyone can call `/api/ask`, **with or without** your page
- Free tiers cap requests: over the cap, status **429**, and the app says so kindly
- So the **server** checks every input, and a **test** proves the check works

<!--
Speaker notes (about 1.5 minutes).
Once your app is live, /api/ask is on the public internet. Someone can skip your page and call it with a script, a thousand times, with a novel pasted in. Every call spends your quota.
Every free tier has limits, and some providers don't publish them. When you hit one, the provider answers 429, and the starter turns that into a friendly message. Numbers live in TOOLS.md, because they change.
The browser check (the character counter) is for the honest user's convenience. The server check is the one that protects you, because the server is the only part you control. In the homework you write your first automated tests, from a fill-in skeleton, to prove the server check works at your own limit.
-->

---

## Prove it, don't assume it

1. **DevTools** on your production URL: no key in Sources or Network
2. `npm run check:secrets`: your files **and every old commit**
3. `git log --all --oneline -- .env`: was `.env` ever committed?

Deleting a file doesn't delete it from history.

<!--
Speaker notes (about 1 minute).
"I think the key is safe" isn't evidence. In Studio B you collect three kinds of proof. The scanner now reads your whole git history, not just today's files, and knows the key formats we use (Gemini, Groq, OpenRouter, Supabase secret keys, GitHub tokens). A clean result means it found none of the patterns it knows: strong evidence, not a guarantee, which is why you also check the live site yourself.
Why history matters: if you commit a key and then delete it in the next commit, the old commit still contains it, and anyone can browse history.
-->

---

## Calling someone else's API

Weather, books, public holidays: live data from a **public** service.

- The page asks **your** route; your route asks the service
- The route checks input, sets a **time limit**, sends back **only what's needed**
- No key today? The route is still the right place, and ready if one appears

<!--
Speaker notes (about 1 minute).
One capstone feature type is an external public API. In the Studio B mini-lesson you'll add api/weather.js, which calls Open-Meteo, a free weather API that needs no key for non-commercial use.
Why a server route when there's no key? The route checks the input before calling anyone, gives up after five seconds instead of hanging, turns failures into friendly messages, and sends the page three numbers instead of the whole response. And if you later switch to a service that needs a key, it's already on the right side of the line. The capstone starter has a tested version of this pattern.
-->

---

## The system prompt is product design

```text
You are "Plain English", a friendly explainer.
Explain in at most 120 words, with one everyday example.
Reply in plain text only. Never ask for personal information.
```

Same model + different system prompt = **different product**

<!--
Speaker notes (about 1 minute).
The system prompt is the hidden instruction your server sends with every question. It decides who the AI is in your app, how long its answers are, what style, and what it refuses.
Change this and the same model becomes a recipe helper, a flashcard maker or an email rewriter. In Studio A, this is the main way you make the app yours.
Write your checks first: three inputs and what a good answer looks like, including one that tries to break it ("ignore your instructions"). Then change the prompt until the checks pass.
-->

---

## Leaks happen more with AI, so plan the response

AI-assisted commits leaked secrets **about twice as often** (≈3.2% vs 1.6%).

If a key leaks: **revoke** it → **make** a new one → put it in `.env` and Vercel → **redeploy**

*Source: GitGuardian, [State of Secrets Sprawl 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)*

<!--
Speaker notes (about 1.5 minutes).
GitGuardian scans public GitHub. In their 2026 report, commits made with AI assistance leaked secrets about 3.2% of the time, versus about 1.6% for commits in general. It's a vendor report, but the direction matches everything else we know. Why? AI tools happily write a key straight into a file if you paste it into the prompt, and people commit more, faster, without reading.
If a key ever lands in a commit, a chat or a screenshot, assume it's compromised. Revoke first; that's the only thing that actually stops misuse. Then make a new one and update both places. GitHub may also block the push (push protection), but don't count on it.
-->

---

## This week

- **Studio A:** tour the starter · key in `.env` · run it · make it yours
- **Studio B:** deploy (production URL + screenshot) · provider swap · prove it · a public-API route
- **Homework:** your own limit + two tests · "Where the key lives" (🔴 AI off) · hidden costs
- **Capstone pitch:** due **72 hours before week 6 Studio A**

<!--
Speaker notes (about 30 seconds).
Everything is in lab.md and homework.md. Get your Gemini key (or Groq, if Gemini isn't available to you) in Part 3 today, and put it only in .env.
The capstone pitch matters: next week you start the capstone with an agent, and the pitch becomes your SPEC.md. It's due 72 hours before next week's first studio so I can reply Go, Shrink or Rethink before we start. Look at the capstone ideas tonight.
-->
