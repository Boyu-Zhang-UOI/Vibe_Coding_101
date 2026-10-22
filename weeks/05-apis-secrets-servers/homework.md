# Week 5 Homework — Ship the micro-app, pitch the capstone

> **Core:** about 9 hours, required. **Stretch:** optional.
> **Due before next week's Studio A** (default 11:59 pm the night before). **The capstone pitch is due earlier: 72 hours before week 6 Studio A**, so your instructor can reply before the studio.
> The project brief is the [AI Micro-app brief](../../projects/ai-micro-app.md). Week 5 is graded once, with the [AI micro-app rubric](../../assessment/rubrics.md#ai-micro-app), which includes the pitch.

**AI-use key:** 🟢 AI on: use AI, following the [Safe Loop](../../resources/safe-loop.md) · 🟡 AI limited: only in the way the task says · 🔴 AI off: close AI chat and turn off completions. **Never** paste a key or the contents of `.env` into any AI tool.

## Deliverables checklist

Submit on Canvas, the course's learning management system: your repository URL, your **production URL** and a **screenshot** of it working. The pitch is a separate Canvas assignment.

- [ ] **Capstone pitch** submitted on Canvas, 72 hours before week 6 Studio A ([task 1](#1-capstone-pitch-about-15-h))
- [ ] The app does its own job; production URL at the top of `README.md`; URL and screenshot on Canvas ([task 2](#2-finish-and-ship-the-micro-app-about-3-h))
- [ ] Your own `MAX_INPUT_LENGTH`, with one sentence in `PROMPTS.md` explaining it ([task 3](#3-put-limits-on-your-public-endpoint-about-2-h))
- [ ] Two tests of your own in `tests/my-limit.test.js`, from the skeleton; `npm test` shows `fail 0`
- [ ] Empty input, too-long input and a missing key each tried on purpose, with what you saw noted in `PROMPTS.md`
- [ ] README section "Where the key lives and who can read it" (🔴 AI off, your own words) ([task 4](#4-where-the-key-lives-and-who-can-read-it-about-1-h))
- [ ] README section "Hidden costs", every item answered ([task 5](#5-the-hidden-costs-checklist-about-30-min))
- [ ] `PROMPTS.md`: three or more entries with teach-backs, including the provider-swap row ([task 6](#6-promptsmd-about-1-h))
- [ ] `npm run check:secrets` comes back clean; everything committed and synced; Codespace stopped

| # | Task | AI use | About |
|---|---|---|---|
| 1 | Capstone pitch (do this first) | 🟡 AI limited | 1.5 h |
| 2 | Finish and ship the micro-app | 🟢 AI on | 3 h |
| 3 | Put limits on your public endpoint, with your first tests | 🟡 AI limited | 2 h |
| 4 | Where the key lives and who can read it | 🔴 AI off | 1 h |
| 5 | The hidden-costs checklist | 🟢 AI on | 30 min |
| 6 | `PROMPTS.md` | 🔴 AI off for teach-backs | 1 h |
| | **Total** | | **about 9 h** |

These times assume things go wrong once or twice. Deployment and first tests usually take longer than you expect; if a task runs far over, stop, write down the exact error, and ask in office hours.

## Core (required)

### 1. Capstone pitch (about 1.5 h)

🟡 **AI limited:** you may ask an AI to *critique* your pitch ("What's unclear? What's too big for three weeks?"), but you write it.

Your capstone starts in week 6, with an AI agent, from this pitch. **Do it first:** it's due 72 hours before week 6 Studio A, so your instructor can reply with **Go**, **Go if you shrink it** or **Rethink** before the studio.

1. Read the [Capstone brief](../../projects/capstone.md) and browse [Capstone Ideas](../../projects/capstone-ideas.md) (30 min).
2. Fill in the [pitch template](../../projects/capstone.md#the-pitch) (45 min): the problem and the user, a sketch of the main screen, which **two or more** feature types you'll include (pairs: three or more) from a server-side API call with a hidden key, a database with access rules, a data visualization and an external public API, what's out of scope, and your biggest risk with a plan B.
3. Ask for a critique, decide what to change, and submit it on Canvas (15 min). Pitches go on Canvas, not in a repository.

Keep it small: a capstone that works and that you can explain beats a big one that half-works. Working in a pair? Agree on that now, and submit one pitch with both names on Canvas.

### 2. Finish and ship the micro-app (about 3 h)

🟢 **AI on:** Copilot Chat in Ask mode, through the Safe Loop. Keep `.env` closed while Copilot is on.

1. **Make it fully yours.** Improve the system prompt in `lib/prompt.js` until your three checks from the lab pass, then the page text and styling. Optionally add an input, such as a dropdown for tone or difficulty; if you do, the server must check it too, because anyone can call `/api/ask` directly.
2. **Test locally before you deploy.** Before every push: run `npm test`, start `npm run dev`, and try your three checks in the browser. A problem you find in your Codespace takes minutes to fix; the same problem on the live site takes much longer to find.
3. **Describe your version.** Replace the "About this app" section of `README.md` with two or three sentences about what your app does and who it's for.
4. **Ship it.** Commit (with an `Assisted-by:` line if AI helped) and sync; Vercel redeploys. Open your production URL in a **private window** and try one normal request and one edge case.
5. **Evidence.** Take a screenshot of the production URL answering a question, with the address bar visible. Submit the repository URL, the production URL and the screenshot on Canvas. (Vercel's free plan deletes old deployments, so the production URL plus a screenshot is what counts.)

### 3. Put limits on your public endpoint (about 2 h)

🟡 **AI limited:** you fill in the test skeleton yourself. You may ask an AI to explain an error message or a line of the worked example, but not to write the tests.

Anyone can call your `/api/ask`, skipping your page. The server check in `lib/validate.js` is what protects your quota, and this week you prove it works with **automated tests**: small pieces of code that check your code every time you run `npm test`.

**Step 1. Choose your input limit (15 min).** Open `public/lib/input.js` and set `MAX_INPUT_LENGTH` to a number that suits your app: a flashcard maker needs room for notes; an "explain like I'm five" box doesn't. Because the browser and the server both use this file, one change updates both the counter and the server check. Add one sentence to `PROMPTS.md`: what you chose and why.

**Step 2. Read a worked example (15 min).** Open `tests/validate.test.js` and find this test. It's already in the starter:

```js
test('an empty question is rejected', () => {
  assert.deepEqual(validateAskBody({ question: '   ' }), { ok: false, error: 'Please type a question first.' });
});
```

Read it piece by piece:

- `test('…', () => { … })` names the test and holds the code it runs. The name says, in plain words, what should be true.
- `validateAskBody({ question: '   ' })` calls the function being tested, with an input you choose: here, a question that is only spaces.
- `assert.deepEqual(actual, expected)` compares what the function returned with what it should return. If they differ, the test fails and prints both.
- So the whole test says: "a question that is only spaces is rejected with this exact message".

The imports at the top of the file (`test`, `assert`, `validateAskBody`, `MAX_INPUT_LENGTH`) make those names available. You'll copy them.

**Step 3. Fill in the skeleton (45 min).** Create a new file, `tests/my-limit.test.js`, and paste this skeleton. Replace each `____` (there are five) with the right value. The comments are hints.

```js
// tests/my-limit.test.js: my own tests for the input limit.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validateAskBody } from '../lib/validate.js';
import { MAX_INPUT_LENGTH } from '../public/lib/input.js';

test('a question exactly at my limit is accepted', () => {
  const question = 'a'.repeat(____);   // 1. How many characters is "exactly at the limit"?
  const result = validateAskBody({ question });
  assert.equal(result.ok, ____);       // 2. Should this question pass? true or false?
});

test('a question one character over my limit is rejected', () => {
  const question = 'a'.repeat(____);   // 3. One character more than the limit.
  const result = validateAskBody({ question });
  assert.equal(result.ok, ____);       // 4. true or false?
  assert.match(result.error, /____/);  // 5. Two words from the error message in public/lib/input.js.
});
```

`'a'.repeat(5)` makes the text `aaaaa`, so you can build a question of any length. Then run:

```bash
npm test
```

Your two new tests appear in the list with the starter's tests. The summary must end with `fail 0`. If a test fails, read the output from the top: it names the test, the file and line, and shows the value it got next to the value it expected.

**Step 4. Prove your tests can fail (15 min).** A test that has never failed might not test anything. In `public/lib/input.js`, change `trimmed.length > MAX_INPUT_LENGTH` to `trimmed.length >= MAX_INPUT_LENGTH` (so a question exactly at the limit is wrongly rejected), save, and run `npm test`. Your "exactly at my limit" test should now fail (a few starter tests may fail too). Change it back, run `npm test` again, and see `fail 0`. Note in `PROMPTS.md` what you changed and which tests failed.

**Step 5. Try each error on purpose (30 min).** With `npm run dev` running, try each of these and note in `PROMPTS.md` what the page (or terminal) showed:

- **Empty input:** press the button with an empty box.
- **Too long:** the page's box stops you typing past the limit, so send a long question straight to the server, as a stranger's script would. In a second terminal:

  ```bash
  node -e "fetch('http://localhost:3000/api/ask',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({question:'a'.repeat(5000)})}).then(r=>r.text()).then(console.log)"
  ```

- **Missing key** (🔴 AI off while `.env` is open): put a `#` in front of the `LLM_API_KEY` line in `.env`, save, restart the server and ask a question. The page shows a friendly "not set up" message, and the technical detail stays in the terminal. Remove the `#`, save, close `.env` and restart. (If you keep your key in Codespaces secrets instead, skip this one and say so in `PROMPTS.md`.)

Commit: for example `Set my input limit and add limit tests`.

### 4. "Where the key lives and who can read it" (about 1 h)

🔴 **AI off.** Write it yourself, without AI. It's your explanation of this week's big idea, close to what the exit ticket and your week 6 oral walkthrough will ask, and it takes the place of a separate reflection this week.

Fill in this section of your `README.md`, in about 150–300 words. Answer the seven questions in the [project brief](../../projects/ai-micro-app.md#where-the-key-lives-and-who-can-read-it). In short:

- where the key is stored while you develop (`.env` in your Codespace, or a Codespaces secret) and why git never sees it;
- where it is stored for the live site (Vercel's environment variables);
- which file reads it, from which environment variable, and at which step of a request the key is added;
- who can read the key, and what a visitor with DevTools **can** and **cannot** see;
- how you checked (paste your `npm run check:secrets` result, and describe your DevTools check of the production URL);
- what you would do in the first five minutes if the key leaked.

You can describe the path of one request as a numbered list, for example:

1. The browser sends `POST /api/ask` with the question.
2. `api/ask.js` checks it, then `lib/llm.js` adds the key from the environment.
3. The AI provider answers the server.
4. The server sends only the reply back to the browser.

### 5. The hidden-costs checklist (about 30 min)

🟢 **AI on** (you may ask an AI what a term means; never paste account details).

"Free" tools still cost something: money if a card is on file, quota, your users' data, time. Add a section called **Hidden costs** to your `README.md`, copy this checklist into it, and answer each item in one line. Numbers change, so look them up in the [Tool Handout](../../TOOLS.md) rather than copying them from anywhere else.

```markdown
## Hidden costs

- [ ] **Money:** Is a payment method on any account this app uses (AI provider, Vercel, GitHub)? If not, that is my hard spending cap. If so, the hard cap I set: …
- [ ] **Quota:** Which free limits does my app use (my AI provider's requests per minute and per day; Vercel; Codespaces hours)? What does a user see when the AI quota runs out?
- [ ] **Who can spend it:** Who can call my `/api/ask`? What stops a script from using up my quota?
- [ ] **Data:** What happens to what users type? Does my provider's free tier use it for training? Where does my page tell users not to type personal information?
- [ ] **Keys:** What can my key do, and where would I revoke it? How long would that take?
- [ ] **Time:** Did I stop my codespaces? Which URL stays working when Vercel deletes old deployments?
- [ ] **Plan rules:** Is my app non-commercial, as the free plans require?
- [ ] **Plan B:** If my provider's free tier changes tomorrow, which provider do I switch to (from my swap drill)?
```

### 6. `PROMPTS.md` (about 1 h)

At least three entries this week: your Studio A system-prompt work (your checks, the prompt, what you changed), the provider-swap row, and your input limit and tests. For every AI-written change you kept, add a **teach-back** (🔴 AI off: your own words, 2–3 sentences: what changed and why it works; [how](../../resources/safe-loop.md#teach-back)). Commits where AI helped carry an `Assisted-by:` line ([how](../../resources/safe-loop.md#the-assisted-by-line)). Never paste a key or `.env` contents into `PROMPTS.md`: it's public.

## Stretch (optional)

Pick one. Commit before you start, so you can always go back.

- **Your own rate-limit message.** When the provider answers `429`, the starter shows "The free AI quota is used up for now…". Rewrite that text (in `lib/llm.js`, the `429` branch of `errorForStatus`) in your app's voice, keeping it friendly and saying what to do next. Run `npm test`: the tests that check the old wording now fail. Update them **on purpose**, so they check your new message. You can't easily make a real provider return `429`, which is exactly why the tests use a fake one.
- **Streaming replies.** Make the answer appear word by word. Send `"stream": true` to the provider, return the provider's stream from `api/ask.js`, and read it in the browser with `response.body.getReader()`, adding text with `textContent +=`. The dev server already passes streamed responses through. Plan it with Copilot first; streaming formats differ slightly between providers.
- **Deploy to Cloudflare Workers.** Follow the [Cloudflare Workers fallback](starter/README.md#cloudflare-workers-fallback-optional) in your starter README. Note what was easier or harder than Vercel.
- **A local model with Ollama.** On your own computer (not in a Codespace), install Ollama, pull a small model, run the starter locally ([Optional: set up your own computer](../../setup/local-setup.md)) and set `LLM_BASE_URL=http://localhost:11434/v1`. Useful models need a lot of memory; see the [Tool Handout](../../TOOLS.md). Nothing leaves your machine, and there's no quota. What's the catch?
- **Conversation memory.** Let the user ask follow-up questions. Keep the conversation in the browser, send the last few messages with each request, and have the server check the **total** length, not just the latest message. Think about what happens to your quota and to privacy as conversations grow.

> [!IMPORTANT]
> **Minimum to keep up.** Your **capstone pitch** is on Canvas, 72 hours before week 6 Studio A. Week 6 starts from it: you'll turn it into your `SPEC.md` and build the first feature with an agent. If your micro-app isn't live yet, tell your instructor and keep going; it can catch up, but the pitch can't wait.
