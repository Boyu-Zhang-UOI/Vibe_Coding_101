# AI Micro-app (week 5)

> A small web app that asks an AI model for help, where the secret key lives only on the server. Small app, big lesson: the browser is public.

| | |
|---|---|
| **Week** | 5 |
| **Repo** | Its own repo on your **personal** GitHub account (not an organization's), named after what it does, for example `fridge-chef` |
| **Starter** | [`weeks/05-apis-secrets-servers/starter/`](../weeks/05-apis-secrets-servers/starter/) · [how to start from a starter](../setup/codespaces.md#start-a-project-from-a-starter) |
| **Live at** | A Vercel URL, for example `https://fridge-chef.vercel.app` |
| **Tools** | GitHub Codespaces; a free LLM API key; Vercel. Current providers and fallbacks: [TOOLS.md](../TOOLS.md) |
| **Due** | End of week 5 (your [capstone pitch](capstone.md#the-pitch) is due at the same time) |
| **Graded as** | [AI micro-app rubric](../assessment/rubrics.md#ai-micro-app). It counts inside the **Weekly labs and homework** component as your week 5 score, unless your instructor tells you otherwise |
| **Step-by-step lab** | [Week 5 lab](../weeks/05-apis-secrets-servers/lab.md) |

## What you'll build

A one-screen app: the user types something, your server asks an [LLM](../resources/glossary.md#llm) (large language model, the kind of AI behind chat assistants) to do one job with it, and the page shows the answer. The starter already works as a "Plain English" explainer; you turn it into your own app.

```
  Browser (public)                Your server (private)                LLM provider
 ┌──────────────────┐   POST     ┌─────────────────────────┐   POST    ┌──────────────┐
 │ public/index.html│ ─────────► │ api/ask.js              │ ────────► │  chat model  │
 │ public/app.js    │  /api/ask  │ checks the input again  │ + API key │              │
 │ public/lib/      │ ◄───────── │ lib/: adds the system   │ ◄──────── │              │
 │ input.js (rules) │   JSON     │ prompt and the key      │  answer   │              │
 └──────────────────┘            └─────────────────────────┘           └──────────────┘
   Anyone can read                 Only you (and your host)
   everything here                 can read the key
```

An [API key](../resources/glossary.md#api-key) is a password that lets a program use a paid or rate-limited service: "a password with a bill attached". It lives in an [environment variable](../resources/glossary.md#environment-variable) (a setting the server reads when it starts, stored outside your code): in a `.env` file in your Codespace, and in Vercel's settings when deployed. The three settings are `LLM_BASE_URL`, `LLM_API_KEY` and `LLM_MODEL`. The [starter README](../weeks/05-apis-secrets-servers/starter/README.md) explains every file.

## Why this project

- **Anything sent to the browser is public.** Visitors can read every file in `public/` with their browser's DevTools. A key placed there is a key given away.
- **This is how real apps leak.** In 2025–26, many vibe-coded apps exposed their databases and keys because the browser was trusted with things only a server should hold. In one scan of apps built with Lovable, 170 of 1,645 had exposed databases ([Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities)). AI-assisted commits leak secrets about twice as often as ordinary ones ([GitGuardian 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)).
- **Tools change, so switching is a skill.** Free AI providers change their limits often. Because the starter speaks one common request format, you can switch providers by changing settings, not code.

## Requirements

These match the core tier of the [week 5 homework](../weeks/05-apis-secrets-servers/homework.md).

### 1. Start from the starter and make it your own

- [ ] Create your repo from the [starter](../weeks/05-apis-secrets-servers/starter/) on your **personal** account. (Vercel's free plan can't deploy repos owned by an organization; see [TOOLS.md](../TOOLS.md).)
- [ ] Give the app **one new job**: change the **system prompt** in `lib/prompt.js` (your app's standing instructions to the model), the page text and the styling. Optionally add an input, such as a dropdown for tone or difficulty.
- [ ] Optional, and good practice for the capstone: a half-page `SPEC.md` with the problem, the user and three acceptance criteria, one of them an edge case.

### 2. Keep the key on the server

- [ ] Your key is in `.env` (in your Codespace) and in Vercel's environment variables (in production). **Nowhere else.**
- [ ] `.env` is listed in `.gitignore`, and `.env.example` holds only placeholders.
- [ ] Nothing under `public/` mentions the key. Only server code (`api/` and `lib/`) reads `process.env`.
- [ ] You checked: `npm run check:secrets` finds nothing, and on the **live** site, DevTools → Sources and Network show no key.

```bash
npm run check:secrets
```

> [!WARNING]
> Never paste your key into a chat assistant, a prompt, an issue or a screenshot. If it ever lands in a commit (even one you later deleted) or in a chat, **revoke it** on the provider's dashboard and create a new one. Deleting it from the code isn't enough: old commits stay readable.

### 3. Swap providers by changing configuration only

- [ ] Run your app with **two different LLM providers**, changing only the three environment variables. No code changes.
- [ ] Find valid model names with `npm run models`, not from memory or from an AI's guess.
- [ ] Log the swap in `PROMPTS.md`: which providers, which models, what you changed, and how the answers differed.

```bash
npm run models
```

### 4. Keep the limits, and make them yours

A public page that spends your key is an invitation: anyone who finds the URL can use up your free quota. The starter already protects itself. Its input rules in `public/lib/input.js` run in the browser **and again on the server**, and `api/ask.js` turns provider problems into friendly messages. Your job is to keep that protection working as you change the app, and to make it fit your app.

- [ ] **Your own input limit.** Set `MAX_INPUT_LENGTH` to a length that suits your app's job, and say why in `PROMPTS.md`. If you add an input, the server must check it too: a check in the browser alone doesn't count, because anyone can call `/api/ask` directly.
- [ ] **Your own friendly rate-limit message.** When the provider says "too many requests" (status 429, a [rate limit](../resources/glossary.md#rate-limit)), the page says what happened and what to do next, in your app's voice.
- [ ] **Tried each error on purpose:** empty input, input that's too long, and a missing or wrong key (rename `LLM_API_KEY` in `.env` for a minute). Each shows a friendly message, and the technical details stay in the server log.

### 5. Test it

- [ ] `npm test` passes, including the starter's tests.
- [ ] **A test of your own for the validation function**, for example "a question one character over my limit is rejected". Tests must not call the real API or need a key.

```bash
npm test
```

### 6. Deploy on Vercel

- [ ] The app is live on Vercel, with the three environment variables set in the Vercel project's settings.
- [ ] You tried the live URL in a private window: one normal request and one edge case (empty or too long).

### 7. Document it

- [ ] `README.md` with the live URL, a description of **your** app, and the section **"Where the key lives and who can read it"** (below). 🔴 You write that section yourself.
- [ ] `PROMPTS.md` with your key prompts, the provider-swap entry, and what you checked yourself.
- [ ] Your week 5 AI-free reflection (🔴), from the [reflection template](../templates/REFLECTION.md).

## "Where the key lives and who can read it"

This README section is the week 5 understanding check in writing. The starter's README has an empty section with this name. 🔴 Write it yourself, without AI, in your own words. It must answer:

1. Where is the key stored in your Codespace, and why doesn't git save it?
2. Where is it stored for the live site?
3. Which file reads it, and how? (Name the file and the environment variable.)
4. Who can read the key? Who can't?
5. What can a visitor with DevTools see, and what can't they see?
6. How did you check that the key isn't in the browser or in your git history? (Paste the `npm run check:secrets` result.)
7. What would you do if the key leaked?

## Ideas

One input, one call to the model, one answer. Resist adding a second feature until the first one is safe and tested.

| App | The user types | The app returns |
|---|---|---|
| Fridge chef | what's in the fridge | one simple recipe |
| Plain-English explainer | a term from a class or article | an explanation plus one example |
| Quiz me | a paragraph of their own notes | three multiple-choice questions |
| Kinder words | a blunt message | the same message, politer |
| Commit coach | a description of a code change | a clear commit message |
| Error explainer | an error message (never one containing a key) | what it probably means and where to look |
| Trip packer | a trip description | a packing checklist |
| Name machine | a description of a pet, band or project | five name ideas |
| Study planner | an exam date and topics | a five-day plan |
| Haiku of the day | three words about their day | a haiku |

Label AI answers as AI-generated, and don't build anything that gives medical, legal or financial advice.

## Privacy

- Free LLM tiers may use what users type for training, and humans may review it ([TOOLS.md](../TOOLS.md) lists which). Add a line to your page such as "Don't type personal information", and use made-up examples in your demo.
- Some free tiers may not serve users in certain regions or under 18. If that applies to your cohort, use the stack in [instructor/variants.md](../instructor/variants.md).

## After the course

Your live app keeps spending your key for as long as it's up. When you no longer need it, remove the key from Vercel's settings or revoke it.

## How it's graded

The [AI micro-app rubric](../assessment/rubrics.md#ai-micro-app) weighs, in order: keeping the key on the server, your input limit and friendly errors, the provider swap, making it your own, and your documentation and tests. It is your week 5 score in the **Weekly labs and homework** component.

## Submit

Follow [How to submit](README.md#how-to-submit): repo URL, live URL and the link to your final commit. Then write your [capstone pitch](capstone.md#the-pitch).

## If you get stuck

- **Error messages from the app** ("not set up yet", "rejected the server's API key", "could not find that model", "quota is used up"): the [starter README's troubleshooting table](../weeks/05-apis-secrets-servers/starter/README.md#troubleshooting) says what each means and what to do.
- **Works in the Codespace, fails on Vercel:** usually a missing environment variable on Vercel. Add it, then redeploy.
- **Rate limit (429):** wait, or switch provider; that's the drill. See [I ran out of free credits](../resources/troubleshooting.md#i-ran-out-of-free-credits).
- **Never** paste your key into a chat or an issue to ask for help. Describe the error message instead.
- More help: [troubleshooting](../resources/troubleshooting.md).
