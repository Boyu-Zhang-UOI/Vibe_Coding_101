# AI Micro-app (week 5)

> A small web app that asks an AI model for help, where the secret key lives only on the server. Small app, big lesson: the browser is public.

| Item | Details |
|---|---|
| **Week** | 5 |
| **Repo** | Its own repo on your **personal** GitHub account (not an organization's), named after what it does, for example `fridge-chef` |
| **Starter** | [`weeks/05-apis-secrets-servers/starter/`](../weeks/05-apis-secrets-servers/starter/) · [how to start from a starter](../setup/codespaces.md#start-a-project-from-a-starter) |
| **Live at** | Your app's **production URL** on Vercel, for example `https://fridge-chef.vercel.app` |
| **Tools** | GitHub Codespaces; a free LLM API key; Vercel. Current providers and fallbacks: [TOOLS.md](../TOOLS.md) |
| **Due** | End of week 5: before week 6 Studio A (default 11:59 pm the night before). Your [capstone pitch](capstone.md#the-pitch) is due earlier: **72 hours before week 6 Studio A** |
| **Graded as** | [AI micro-app rubric](../assessment/rubrics.md#ai-micro-app): your week 5 score in **Weekly labs and homework** (20 points, double a normal week), including the pitch. Week 5 has no other weekly score and no separate reflection |
| **Step-by-step lab** | [Week 5 lab](../weeks/05-apis-secrets-servers/lab.md) |

## What you'll build

A one-screen app: the user types something, your server asks an [LLM](../resources/glossary.md#llm) (large language model, the kind of AI behind chat assistants) to do one job with it, and the page shows the answer. The starter already works as a "Plain English" explainer; you turn it into your own app.

**How one request travels** (left to right, and back):

| Step | Where | Files | Who can read it |
|---|---|---|---|
| 1. The user types and clicks | **Browser** (public) | `public/index.html`, `public/app.js`, and the input rules in `public/lib/input.js` | Anyone: every visitor can read these files with DevTools |
| 2. The page sends the text to `/api/ask` | **Your server** (private) | `api/ask.js` checks the input again; `lib/` adds the system prompt and the key | Only you and your host |
| 3. Your server asks the model, with the key | **LLM provider** | — | The provider sees the text and your key |
| 4. The answer comes back | Server, then browser, as JSON | — | The visitor sees the answer, never the key |

An [API key](../resources/glossary.md#api-key) is a password that lets a program use a paid or rate-limited service: "a password with a bill attached". It lives in an [environment variable](../resources/glossary.md#environment-variable) (a setting the server reads when it starts, stored outside your code): in a `.env` file in your Codespace, and in Vercel's settings when deployed. The three settings are `LLM_BASE_URL`, `LLM_API_KEY` and `LLM_MODEL`. The [starter README](../weeks/05-apis-secrets-servers/starter/README.md) explains every file.

## Why this project

- **Anything sent to the browser is public.** Visitors can read every file in `public/` with their browser's DevTools. A secret key placed there is a key given away.
- **This is how real apps leak.** In 2025–26, many vibe-coded apps exposed their databases and keys because the browser was trusted with things only a server should hold. In one scan of apps built with Lovable, 170 of 1,645 had exposed databases ([Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities)). AI-assisted commits leak secrets about twice as often as ordinary ones ([GitGuardian 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)).
- **Tools change, so switching is a skill.** Free AI providers change their limits often. Because the starter speaks one common request format, you can switch providers by changing settings, not code.

## Requirements

These match the core tier of the [week 5 homework](../weeks/05-apis-secrets-servers/homework.md).

### 1. Start from the starter and make it your own

- [ ] Create your repo from the [starter](../weeks/05-apis-secrets-servers/starter/) on your **personal** account. (Vercel's free plan can't deploy private repos owned by an organization; see [TOOLS.md](../TOOLS.md).)
- [ ] Give the app **one new job**: change the **system prompt** in `lib/prompt.js` (your app's standing instructions to the model), the page text and the styling. Optionally add an input, such as a dropdown for tone or difficulty.
- [ ] Optional, and good practice for the capstone: a half-page `SPEC.md` with the problem, the user and three acceptance criteria, one of them an edge case.

### 2. Keep the key on the server

- [ ] Your key is in `.env` (in your Codespace) and in Vercel's environment variables (in production). **Nowhere else.**
- [ ] `.env` is listed in `.gitignore`, and `.env.example` holds only placeholders.
- [ ] Nothing under `public/` mentions the key. Only server code (`api/` and `lib/`) reads `process.env`.
- [ ] You checked: `npm run check:secrets` finds nothing (it scans your files **and your git history**), and on the **production** site, DevTools → Sources and Network show no key.
- [ ] You did the **hidden-costs checklist** in the [week 5 homework](../weeks/05-apis-secrets-servers/homework.md), including a hard spending cap (on a free tier, the simplest cap is having no payment method on the account; see [safety contract](../setup/safety-contract.md) rule 4).

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
- [ ] **Tried each error on purpose:** empty input, input that's too long, and a missing or wrong key (rename `LLM_API_KEY` in `.env` for a minute). Each shows a friendly message, and the technical details stay in the server log.

### 5. Test it

- [ ] `npm test` passes, including the starter's tests.
- [ ] **A validation test of your own**, completed from the **fill-in test skeleton** in the [week 5 homework](../weeks/05-apis-secrets-servers/homework.md): for example, "a question one character over my limit is rejected". Tests must not call the real API or need a key.

```bash
npm test
```

### 6. Deploy on Vercel

- [ ] **Test locally first:** the app works in your Codespace (`npm run dev`) with `npm test` passing, before you deploy.
- [ ] The app is live on Vercel, with the three environment variables set in the Vercel project's settings.
- [ ] You tried the **production URL** in a private window: one normal request and one edge case (empty or too long).
- [ ] You took a **screenshot** of the production site working. Submit the production URL, not a preview link: Vercel deletes old preview deployments.

### 7. Document it

- [ ] `README.md` with the production URL, a description of **your** app, and the section **"Where the key lives and who can read it"** (below). 🔴 **AI off:** you write that section yourself. It takes the place of a week 5 reflection.
- [ ] `PROMPTS.md` with your key prompts, the provider-swap entry, and what you checked yourself.

## "Where the key lives and who can read it"

This README section is the week 5 understanding check in writing. The starter's README has an empty section with this name. 🔴 **AI off:** write it yourself, in your own words. It must answer:

1. Where is the key stored in your Codespace, and why doesn't git save it?
2. Where is it stored for the live site?
3. Which file reads it, and how? (Name the file and the environment variable.)
4. Who can read the key? Who can't?
5. What can a visitor with DevTools see, and what can't they see?
6. How did you check that the key isn't in the browser or in your git history? (Paste the `npm run check:secrets` result.)
7. What would you do if the key leaked?

## Studio B: calling someone else's API

In week 5 Studio B you also add a second kind of server route: one that fetches live data from a **public API** that needs no key (weather, public holidays, books). It isn't part of the micro-app's grade, but it's the pattern behind capstone feature type (d), and the capstone starter has a tested example, `api/weather.js` ([feature patterns](capstone-starter/README.md#feature-patterns)). Things to handle: the other service may be slow, down or rate-limited, so check the response status, give up after a timeout, and show a friendly message.

## Stretch (optional, not graded)

- **Your own friendly rate-limit message.** When the provider says "too many requests" (status 429, a [rate limit](../resources/glossary.md#rate-limit)), rewrite the page's message so it says what happened and what to do next, in your app's voice.
- **Keep the public-API route** from Studio B in your micro-app, with a test that uses a fake (mocked) response.

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

## AI use on this project

| Label | On the micro-app |
|---|---|
| 🟢 **AI on** | Building, explaining, planning, reviewing your diffs, suggesting test cases |
| 🟡 **AI limited** | Your capstone pitch: the AI may critique it, not write it |
| 🔴 **AI off** | The README section "Where the key lives and who can read it"; the "What I wrote or decided myself" section of `PROMPTS.md`; the exit ticket |

## Privacy

- Free LLM tiers may use what users type for training, and humans may review it ([TOOLS.md](../TOOLS.md) lists which). Add a line to your page such as "Don't type personal information", and use made-up examples in your demo and screenshot.
- Some free tiers may not serve users in certain regions or under 18. If that applies to your cohort, use the stack in [instructor/variants.md](../instructor/variants.md).

## After the course

Your live app keeps spending your key for as long as it's up. When you no longer need it, remove the key from Vercel's settings or revoke it.

## How it's graded

The [AI micro-app rubric](../assessment/rubrics.md#ai-micro-app) weighs, in order: keeping the key on the server, your input limit and friendly errors, the provider swap, making it your own and deploying it (production URL and screenshot), your documentation and tests, and your capstone pitch. It is your whole week 5 score in the **Weekly labs and homework** component.

## Submit

Follow [How to submit](README.md#how-to-submit): on Canvas, the repo URL, the **production URL and a screenshot** of it working, and the link to your final commit. Submit your [capstone pitch](capstone.md#the-pitch) separately on Canvas, 72 hours before week 6 Studio A.

## If you get stuck

- **Error messages from the app** ("not set up yet", "rejected the server's API key", "could not find that model", "quota is used up"): the [starter README's troubleshooting table](../weeks/05-apis-secrets-servers/starter/README.md#troubleshooting) says what each means and what to do.
- **Works in the Codespace, fails on Vercel:** usually a missing environment variable on Vercel. Add it, then redeploy. More: [Deploying to Vercel](../resources/troubleshooting.md#deploying-to-vercel).
- **Rate limit (429):** wait, or switch provider; that's the drill. See [I ran out of free credits](../resources/troubleshooting.md#i-ran-out-of-free-credits).
- **Never** paste your key into a chat or an issue to ask for help. Describe the error message instead.
- More help: [troubleshooting](../resources/troubleshooting.md).
