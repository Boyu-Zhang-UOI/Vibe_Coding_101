# Week 5 Homework — Ship the micro-app, pitch the capstone

> **Core:** about 3 hours, required. **Stretch:** optional.
> Due before the week 6 studio. The project brief is [projects/ai-micro-app.md](../../projects/ai-micro-app.md).

## Core (required)

### 1. Your micro-app is live (about 20 min)

Finish anything left from the [lab](lab.md): your app does its own job (not "Plain English" any more), it is deployed on Vercel, and the live URL is at the top of your `README.md`. Replace the "About this app" section with two or three sentences about your version.

### 2. "Where the key lives and who can read it" (about 30 min) 🔴

Fill in this section of your `README.md`. **Write it yourself, without AI.** It's your explanation of this week's big idea, and it's close to what the exit ticket and your week 6 oral walkthrough will ask. Answer the seven questions in the [project brief](../../projects/ai-micro-app.md#where-the-key-lives-and-who-can-read-it), in about 150–300 words. In short:

- where the key is stored while you develop (`.env` in your Codespace, or a Codespaces secret) and why git never sees it;
- where it is stored for the live site (Vercel's environment variables);
- which file reads it, and from which environment variable; and at which step of a request the key is added;
- who can read the key, and what a visitor with DevTools **can** and **cannot** see;
- how you checked (paste your `npm run check:secrets` result and the git-history search from the lab);
- what you would do in the first five minutes if the key leaked.

A small text diagram is welcome:

```text
browser --POST /api/ask--> api/ask.js (+ key from env) --> AI provider
```

### 3. Put limits on your public endpoint (about 60 min)

Anyone can call your `/api/ask`. Make its limits fit **your** app, and prove the main one with a test.

1. **Choose your input limit.** Open `public/lib/input.js` and set `MAX_INPUT_LENGTH` to a number that suits your app: a flashcard maker needs room for notes; an "explain like I'm five" box doesn't. Add one sentence to `PROMPTS.md` saying what you chose and why. Because the browser and the server both import this file, one change updates both the counter and the server check.
2. **Write a test for the validation function.** In `tests/validate.test.js`, add at least **two** tests of your own for `validateAskBody`: one that a question exactly at your limit is accepted, and one that a question one character over is rejected with a friendly message. Use the existing tests as a pattern. Run:

   ```bash
   npm test
   ```

   To check that your test really tests something, temporarily change the limit by one, run the tests, and watch yours fail. Then change it back.
3. **Make the rate-limit message yours.** When the provider answers `429`, the starter shows "The free AI quota is used up for now…". Rewrite that text (in `lib/llm.js`, the `429` branch of `errorForStatus`) in your app's voice, keeping it friendly and telling the user what to do next. Run `npm test`: the tests that expected the old wording will fail. Update them **on purpose** so they check your new message.
4. You can't easily make a real provider return `429` on demand. That's exactly why the tests use a fake provider. Say so in one line of `PROMPTS.md`, and note how you tested it.

If you use Copilot for any of this, use the [Safe Loop](../../resources/safe-loop.md), keep `.env` closed, and log the prompt.

### 4. `PROMPTS.md` (about 15 min)

At least three entries this week, including your Part 3 system-prompt work and the provider-swap row. For each: what you asked, what came back, what **you** changed or checked.

### 5. AI-free reflection (about 30 min) 🔴

Copy [templates/REFLECTION.md](../../templates/REFLECTION.md) into your repository as `reflections/week-05.md` (or submit it where your instructor says) and write it **without AI**. Good moments to write about: finding the leaky page's key; the first time your own key worked; a provider giving a very different answer to the same question; a moment you weren't sure whether something was safe to paste.

### 6. Capstone pitch (about 45 min) 🟡

Your capstone starts next week, with an AI agent, from your pitch. Read [projects/capstone.md](../../projects/capstone.md) and browse [projects/capstone-ideas.md](../../projects/capstone-ideas.md), then fill in the [pitch template](../../projects/capstone.md#the-pitch) and submit it where your instructor says. It covers the problem and the user, a sketch of the main screen, which **two or more** feature types you'll include (pairs: three or more) from a server-side API call with a hidden key, a database with access rules, a data visualization and an external public API, what's out of scope, and your biggest risk.

🟡 **Limited AI:** you may ask an AI to *critique* your pitch ("What's unclear? What's too big for three weeks?"), but write it yourself. Keep it small: a capstone that works and that you can explain beats a big one that half-works.

## Deliverables checklist

- [ ] Live Vercel URL at the top of `README.md`, and the app does your own thing
- [ ] README section "Where the key lives and who can read it" (🔴 your own words)
- [ ] Your own `MAX_INPUT_LENGTH`, with one sentence in `PROMPTS.md` explaining it
- [ ] At least two new tests for `validateAskBody`; `npm test` shows `fail 0`
- [ ] Your own rate-limit message, with the tests updated to match
- [ ] `PROMPTS.md`: three or more entries, including the provider swap
- [ ] `npm run check:secrets` and the git-history search from the lab come back clean
- [ ] AI-free reflection (🔴)
- [ ] Capstone pitch submitted
- [ ] Everything committed and synced; Codespace stopped

Graded on effort and completion ([weekly rubric](../../assessment/rubrics.md#weekly-labs-and-homework)). The micro-app itself is assessed with the [AI micro-app rubric](../../assessment/rubrics.md#ai-micro-app).

## Stretch (optional)

Pick one. Commit before you start, so you can always go back.

- **Streaming replies.** Make the answer appear word by word. Send `"stream": true` to the provider, return the provider's stream from `api/ask.js`, and read it in the browser with `response.body.getReader()`, adding text with `textContent +=`. The dev server already passes streamed responses through. Plan it with Copilot first; streaming formats differ slightly between providers.
- **Deploy to Cloudflare Workers.** Follow the "Cloudflare Workers fallback" section of your starter README ([here in the course repo](starter/README.md#cloudflare-workers-fallback-optional)). Note what was easier or harder than Vercel.
- **A local model with Ollama.** On your own computer (not in a Codespace), install Ollama, pull a small model, run the starter locally ([setup/local-setup.md](../../setup/local-setup.md)) and set `LLM_BASE_URL=http://localhost:11434/v1`. Useful models need a lot of memory; see [TOOLS.md](../../TOOLS.md). Nothing leaves your machine, and there's no quota. What's the catch?
- **Conversation memory.** Let the user ask follow-up questions. Keep the conversation in the browser, send the last few messages with each request, and have the server check the **total** length, not just the latest message. Think about what happens to your quota and to privacy as conversations grow.
