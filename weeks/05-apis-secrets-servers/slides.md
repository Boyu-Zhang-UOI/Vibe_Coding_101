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
Speaker notes (0:00, about 1 minute).
Until now everything we built ran entirely in the browser. Today your app gets a server: a small piece of code that runs somewhere else and can keep a secret. By the end of the studio you'll have an AI-powered app live on the web, and you'll be able to prove that its key is hidden.
The big idea fits on one line, and it's the most important security idea in the course: the browser is public; secrets live on the server.
-->

---

## A request and a response

```text
REQUEST                         RESPONSE
POST /api/ask                   200 OK
Content-Type: application/json  Content-Type: application/json

{"question": "What is JSON?"}   {"reply": "JSON is a way to…"}
```

<!--
Speaker notes (about 1.5 minutes).
Every time your page needs something from another computer, the browser sends a request and gets a response. That's HTTP.
A request has a method (GET to fetch something, POST to send something), an address, some headers (labels like "this is JSON"), and sometimes a body.
The response has a status code and a body. You'll see these codes today: 200 OK; 400 you sent something bad; 401 or 403 you're not allowed (wrong key); 404 not found; 429 too many requests; 500 the server broke.
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
Speaker notes (about 1.5 minutes).
An API, an application programming interface, is the menu of requests a service will accept. Each item on the menu is an endpoint: an address that does one job, such as /chat/completions for "answer this conversation".
Your app today uses two APIs: your own tiny one (/api/ask, which you'll own) and the AI provider's (which you'll call from your server).
-->

---

## An API key is a password with a bill attached

- Proves to the provider **who you are**
- Anyone who has it can **spend your quota** or **your money**
- Leaked keys get found and used, fast

**Never** in browser code · git · an AI chat

<!--
Speaker notes (about 1.5 minutes).
Providers need to know whom to bill and whom to limit, so every request carries your key. That makes the key a password with a bill attached. On a free tier the worst case is that someone burns your quota and your app stops; on a paid tier it's your money.
Three places a key must never go: into browser code, into git, and into an AI chat. The third one is new for many people: a chat is stored, may be used for training, and may be read by reviewers. Rule 2 of your safety contract.
-->

---

## The trust boundary

```text
 PUBLIC: anyone can read      │ PRIVATE: only you and your host
                              │
 Browser                      │ Your server route (api/ask.js)
 question ──POST /api/ask─────┼──► checks the input
                              │    adds the API key ──► AI provider
 reply ◄───{"reply": …}───────┼─── sends back only the reply
```

<!--
Speaker notes (about 2 minutes). This is the slide to slow down on.
Draw the line down the middle of the whiteboard. Left: the browser. Everything on the left is public: the HTML, the CSS, every JavaScript file, every request and every response. Right: your server. Code there runs on a computer the visitor never touches.
The key lives on the right, only. The browser talks to your server; your server talks to the AI. The browser never sees the key and never talks to the AI directly.
Week 7 uses exactly the same line for databases: Lovable and Moltbook apps leaked data because they trusted the left side.
-->

---

## DevTools shows everything

- **Sources**: every file the page loaded
- **Network**: every request, header and response
- A key "hidden" in JavaScript is a **published** key

<!--
Speaker notes (about 1 minute).
Anyone can press F12. Sources shows the files; Network shows every request, including headers like Authorization. There is no way to hide a secret inside the browser: obfuscation, odd file names and "it's minified" all fail.
In the live demo I'll find a key on a leaky page in under a minute. In the lab, you'll check that nobody can do that to yours.
-->

---

## Where secrets live

| File | Holds | Committed? |
|---|---|---|
| `.env` | Your real key | **Never** (listed in `.gitignore`) |
| `.env.example` | Placeholders: `LLM_API_KEY=paste-your-key-here` | Yes |
| Vercel → Environment Variables | The key for the live site | Not in git |

<!--
Speaker notes (about 1.5 minutes).
An environment variable is a setting the server reads when it starts, instead of having it written into the code. Locally they come from a file called .env. .gitignore tells git to pretend .env doesn't exist, so it never gets committed. .env.example is the safe twin: it lists the names with fake values, so the next person knows what to set.
For the live site you type the same values into Vercel's settings. Codespaces secrets are another safe option.
Two gotchas: restart the server after changing .env, and redeploy on Vercel after changing variables there.
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
"Serverless" doesn't mean there's no server; it means you don't manage one. You write a function in the api folder; Vercel runs it whenever a request arrives and bills nothing on the free tier for small use.
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
This is your insurance policy. Free tiers change monthly; when one runs out or disappears, you switch in two minutes. In the lab you'll do this on purpose: the provider-swap drill.
Model names change constantly, so we never hard-code them: npm run models asks the provider for its current list. Current options are in TOOLS.md.
-->

---

## Free tiers have rate limits

- A cap per minute **and** per day
- Over the cap: status **429 Too Many Requests**
- Your app should say so **kindly**, not crash

<!--
Speaker notes (about 1 minute).
Every free tier has limits, and some providers don't even publish them. When you hit one, the provider answers 429. The starter turns that into a friendly message: "The free AI quota is used up for now. Try again later."
Per-minute limits reset quickly; daily ones reset overnight. If it keeps happening, swap provider. Numbers live in TOOLS.md, because they change.
-->

---

## A public endpoint spends your quota

Anyone can call `/api/ask`, with or without your page.

- Check input **on the server** (the browser check is only a convenience)
- Limit input length
- Friendly errors, no secrets in them

<!--
Speaker notes (about 1 minute).
Once your app is live, /api/ask is on the public internet. Someone can skip your page and call it with a script, a thousand times, with a novel pasted in. Every call spends your quota.
The browser check (the character counter) is for the honest user's convenience. The server check is the one that protects you, because the server is the only part you control. That's why input.js runs in both places.
Stretch idea for keen students: a simple per-visitor limit.
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
Speaker notes (about 1.5 minutes).
The system prompt is the hidden instruction your server sends with every question. It decides who the AI is in your app, how long its answers are, what style, and what it refuses.
Change this and the same model becomes a recipe helper, a flashcard maker or an email rewriter. In the lab, this is the main way you make the app yours.
It lives on the server, so visitors can't read it. Test it with weird inputs, too: empty, huge, rude, or "ignore your instructions".
-->

---

## Leaks happen more with AI

AI-assisted commits leaked secrets **about twice as often** as the baseline (≈3.2% vs 1.6%).

*Source: GitGuardian, [State of Secrets Sprawl 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)*

<!--
Speaker notes (about 1 minute).
GitGuardian scans public GitHub. In their 2026 report, commits made with AI assistance leaked secrets about 3.2% of the time, versus about 1.6% for commits in general. Source: https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/
Why? AI tools happily write a key straight into a file if you paste it into the prompt, and people commit more, faster, without reading. It's a vendor report, but the direction matches everything else we know.
-->

---

## If a key leaks

1. **Revoke** it on the provider's site (delete the key)
2. **Make** a new one; put it in `.env` and Vercel
3. **Redeploy**

Deleting the file isn't enough: **git history remembers.**

<!--
Speaker notes (about 1 minute).
If a key ever lands in a commit, a chat or a screenshot, assume it's compromised. Revoke first; that's the only thing that actually stops misuse. Then make a new one and update both places.
Removing the key in a new commit doesn't help: the old commit still contains it, and anyone can browse history. GitHub may also block the push or email you (secret scanning and push protection), but don't count on it: not every key format is recognized.
-->

---

## Today's lab

1. What can the browser see? (DevTools)
2. Run the starter with **your** key in `.env`
3. Make it yours: system prompt + page
4. Provider-swap drill
5. Deploy to Vercel
6. Prove the key is hidden

<!--
Speaker notes (about 30 seconds).
Everything is in lab.md. The starter is in weeks/05-apis-secrets-servers/starter. Get your Gemini key (or Groq, if Gemini isn't available to you) during Part 2, and put it only in .env.
-->

---

## Homework

- Micro-app **live** on Vercel
- README: "Where the key lives and who can read it" (🔴 no AI)
- Your own input limit + friendly rate-limit message + a test
- Reflection (🔴) · `PROMPTS.md`
- **Capstone pitch** due before week 6

<!--
Speaker notes (about 30 seconds).
Full details in homework.md. The capstone pitch matters: next week you start the capstone with an agent, and the pitch becomes your SPEC.md. Look at projects/capstone-ideas.md tonight so you have time to think.
-->
