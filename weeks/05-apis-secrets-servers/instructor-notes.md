# Week 5 — Instructor notes

> Big idea: **the browser is public; secrets live on the server.** Everything this week serves that sentence. If students leave able to describe the trust boundary and say where their key lives, the week worked, even if a deployment is still pending.

**Why two studios and this split.** The old single-studio lab put Node, npm, a server, `.env`, two providers, Vercel and `curl` into one 100-minute block, with no tour of the starter; realistic time for a first-time learner was 115–150 minutes. Studio A now does only the local loop (repository, tour, key, run, make it yours). Studio B does everything that touches the outside world (deploy, swap, prove, a public API). The "what can the browser see?" exercise is folded into your live demo, and the 429-message rewrite is a homework stretch.

**Why the homework says 9 hours.** CMU 15-113 re-estimated its API and frontend-backend homeworks from 2–3 hours to "up to about six", added a "testing locally" section, and deployment complaints then fell ([CMU Fall 2026 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)). Students there also reported that deployment took more time than coding ([Spring report](https://www.cs.cmu.edu/~113/bestPractices.html)). Expect the first deploy to be the slowest step of the week.

## Prep checklist

### A week before

- [ ] Re-check the "LLM APIs" and "Hosting" rows of the [Tool Handout](../../TOOLS.md) by actually doing them: create a Gemini key in Google AI Studio and a Groq key, run `npm run models` with each, and deploy the starter to Vercel. Free tiers change without notice.
- [ ] Run `npm run check:secrets` in a fresh copy of the starter, then commit a fake Groq-style key on a scratch branch and confirm the scanner reports it (file and commit). Delete the scratch repository afterwards.
- [ ] Check the Open-Meteo call in the Studio B mini-lesson still works: `curl -s "https://api.open-meteo.com/v1/forecast?latitude=46.73&longitude=-117.00&current=temperature_2m,wind_speed_10m"`. If it doesn't, pick another no-key public API and adapt the route before class.
- [ ] Decide each student's primary provider. Under-18 students, and cohorts in the EEA, UK or Switzerland, should not use Gemini's free tier: use the stack in [Course variants](../../instructor/variants.md#eea-uk-and-swiss-cohorts) (usually Groq).
- [ ] If student repositories would live in a GitHub organization (for example GitHub Classroom), remember that Vercel Hobby cannot deploy **private** organization repositories. Tell students to create the micro-app in their personal account, or plan for the Cloudflare Workers fallback in the [starter README](starter/README.md#cloudflare-workers-fallback-optional).
- [ ] If you published starter templates (`scripts/publish-starters.sh`), check that the micro-app template link works. Otherwise make sure the `degit` fallback in [Start a project from a starter](../../setup/codespaces.md#start-a-project-from-a-starter) works for `weeks/05-apis-secrets-servers/starter`.
- [ ] Post the capstone pitch deadline on Canvas: **72 hours before week 6 Studio A**. Block time in your calendar to reply to every pitch (Go / Go if you shrink it / Rethink) before week 6 Studio A.
- [ ] Remind students to create Groq and Vercel accounts before Studio A, and to bring a personal (not school) Google account.

### The day before Studio A: build the two demo sites

1. Create your own repository from the starter and deploy it to Vercel with **a key made just for this class** (Groq is a good choice: its free limits are published and it keeps no inference data by default). This is the **safe** site. A class asking a few questions each stays well inside free limits, but check the [Tool Handout](../../TOOLS.md).
2. Add a **leaky** page to the same repository as `public/leaky.html`, with an obviously fake key:

   ```html
   <!doctype html>
   <title>Leaky demo</title>
   <h1>Leaky demo</h1>
   <p>This page calls the AI straight from the browser. Never do this.</p>
   <script>
     // DEMO ONLY: a fake key, to show that anything in browser code is public.
     const API_KEY = "DEMO-not-a-real-key-5f2c9a71";
     fetch("https://api.groq.com/openai/v1/models", { headers: { Authorization: "Bearer " + API_KEY } });
   </script>
   ```

   The request will fail (the key is fake), but the key is visible in **Sources** and in the request's `Authorization` header in **Network**. Never put a real key in this page, even briefly: bots scan new deployments and public repositories.
3. Keep both URLs ready to paste into the class chat (self-paced students do the same check on their own app in Studio A Part 6).
4. After the course, delete the class key on the provider's site.

## Studio A run sheet — Run it and make it yours

| Time | Block | Notes |
|---|---|---|
| 0:00–0:05 | Recap | The most-missed question from the week 4 exit ticket. Two minutes of explanation, then one student answers a variant |
| 0:05–0:25 | Concept talk | [slides.md](slides.md), 17 slides, about 19 minutes. Slow down on "The trust boundary"; draw it on the board and leave it up for both studios |
| 0:25–0:35 | Live demo | Script below. This replaces the old lab Part 1: students watch and answer the three questions in the lab |
| 0:35–0:50 | Part 1: make your repository | Watch for repositories created in an organization, or private. `npm test` must end with `fail 0` before anyone moves on |
| 0:50–1:05 | Part 2: tour the starter | Walk the room asking "which file reads the key?". Ask mode explaining a file is fine; nobody needs to edit anything yet |
| 1:05–1:25 | Part 3: a free key in `.env` | The bottleneck. Getting a key and a model ID takes 5–10 minutes. Check nobody pastes a key into Copilot, and that `.env` tabs get closed |
| 1:25–1:45 | Part 4: run it locally | Most problems: no restart after editing `.env`, a placeholder still in it, or the port set to Public |
| 1:45–1:55 | Break | |
| 1:55–2:40 | Part 5: make it yours | Idea table on screen. Check that students wrote their three checks in `PROMPTS.md` **before** prompting, and push for a real system-prompt rewrite, not just a heading change |
| 2:40–2:50 | Part 6 (If time) | Fast students look at their own app in DevTools. Everyone else keeps going on Part 5 |
| 2:50–3:00 | Checkpoint share | Each student shares their app answering a question in their new voice, or the exact error they're stuck on. Remind them: the pitch is due 72 hours before week 6 Studio A |

## Studio B run sheet — Ship it, prove it, call a public API

| Time | Block | Notes |
|---|---|---|
| 0:00–0:10 | Show and tell | Two micro-apps, in their new voice. Ask each presenter: "Where does your key live?" |
| 0:10–0:40 | Part 1: deploy to Vercel | Most problems: org-owned private repos, missing env vars, forgetting to redeploy. Check everyone takes the screenshot of the **production** URL |
| 0:40–0:55 | Part 2: provider swap | Celebrate the moment the terminal names the new provider. `git status` should show only `PROMPTS.md` changed |
| 0:55–1:15 | Part 3: prove the key is secret | Anyone whose key shows up anywhere: revoke first, then clean up ([I committed a secret](../../resources/troubleshooting.md#i-committed-a-secret)). Point out that the scanner reads history |
| 1:15–1:40 | Part 4: mini-lesson, a route that calls a public API | Five minutes at the projector: paste the route, run both `curl` calls, read the four numbered comments aloud. Then students do it and answer the four questions. Mention that the capstone starter has a tested version (`api/weather.js`, "Feature patterns" in its README) |
| 1:40–2:30 | Part 5: project time | Circulate. Priorities: (1) anyone not yet deployed; (2) pitch drafts: ask "what's out of scope?" and "what's your plan B?"; (3) students starting the test skeleton. No walkthroughs this week |
| 2:30–2:45 | Debrief | Live URLs on screen. "Which provider answered better?" "Where does your key live?" "What surprised you in DevTools?" "Why does the weather route exist if there's no key?" |
| 2:45–3:00 | Exit ticket | [Week 5 exit ticket](../../assessment/exit-tickets.md#week-5) (🔴 AI off), including the delayed-recall question about Project 1. Say aloud: graded on completion, not correctness |

## Live-demo script (Studio A, 10 minutes)

1. **The leak (3 min).** Open the leaky URL on the projector. "Somebody hid their key in the JavaScript. Let's see how hidden it is." `F12` → **Sources** → `leaky.html` → there it is. Then **Network** → the failed request → **Headers** → `Authorization: Bearer DEMO-…`. Ask: "How long did that take? Who could do this?" (Anyone, in seconds.)
2. **The safe version (3 min).** Open the safe URL. Ask a question. **Network** → `ask` → Payload shows only the question; Response shows only the reply. **Sources** → search all files for `key`: nothing useful. "Where did the key go?" Open `api/ask.js` and `lib/llm.js` in the repository and point to `LLM_API_KEY`: "This code runs on Vercel's computer, never in your browser." Ask the three lab questions and take answers.
3. **Where it's stored (2 min).** In a Codespace, show `.env.example` (placeholders), then show that `.env` is grey in the Explorer and absent from `git status`. **Don't open your real `.env` on the projector.** Show Vercel → **Settings** → **Environment Variables** with the value hidden.
4. **The swap (2 min).** Say what you would change to switch provider (three lines), restart, and show the terminal naming the new provider. Keep the key off screen.

## Mini-lesson notes (Studio B Part 4)

- The goal is recognition, not authorship: students paste a worked example, run it, break it and explain it. Writing their own route comes in the week 6 feature clinic and the capstone.
- The four questions have short answers: the checks run before any call and protect against nonsense input and wasted calls; the page gets three numbers instead of the full response (less to leak, less to parse, the page doesn't depend on the service's format); `AbortSignal.timeout(5000)` decides "too slow"; two reasons for the route are error handling and timeouts in one place, a smaller and stable response for the page, caching later, and a ready place for a key if the service changes.
- Open-Meteo is free for non-commercial use without a key. Remind students to read any API's terms before they pitch it, and to use a city or coordinates, never a home address.

## Common pitfalls

| Pitfall | What to do |
|---|---|
| A student pastes their key into Copilot Chat, another chat, or the class chat | Calmly: revoke it on the provider's site now, make a new one. No blame; it's the most common mistake, and the reason for rule 2 of the [Safety Contract](../../setup/safety-contract.md) |
| `.env` open in an editor tab while Copilot is on | Editor assistants can read open files, and completions send the open file as context. Close the tab. The lab marks those steps 🔴 AI off, but watch for it |
| "Missing LLM_API_KEY" after editing `.env` | The server wasn't restarted, the file is `.env.example` not `.env`, or the `paste-…` placeholder is still there |
| Live site: AI part fails, local works | Env vars not added on Vercel, or added after the deploy without a **Redeploy** |
| Model not found | Typing a model name from memory or an old tutorial. Always copy from `npm run models` |
| Gemini: "API key not valid" (the provider answers `400`; the browser sees the starter's friendly `500`) | Key copied incompletely, or created in a different Google account or project. Make a new one |
| Gemini key page unavailable | School or work Google account, under 18, or an unsupported region. Switch to Groq |
| Vercel can't see the repo | A private organization repo, or Vercel's GitHub app lacks access to it. Personal account; adjust permissions |
| Student sets the forwarded port to **Public** | Change it back to Private. A public port lets anyone spend their quota through the dev server |
| `.env` committed | Revoke first. Then `git rm --cached .env` and commit; history still holds the old key, which is why revoking comes first. Check `.gitignore` wasn't edited |
| "The scanner found nothing, so it's safe" | It's strong evidence, not proof: it knows only the patterns it was given. That's why Part 3 also checks the live site in DevTools |
| Test skeleton: students change the starter's tests instead of adding their own file | Point them to `tests/my-limit.test.js`. The starter's tests stay as they are |
| Test skeleton: `'a'.repeat(1000)` typed as a number instead of using `MAX_INPUT_LENGTH` | It works until they change the limit. Ask: "what happens to this test if you change your limit to 400?" |

## Differentiation

- **Needs more support:** pair students for Studio A Parts 1–4 (one drives, both learn). Offer a pre-written system prompt for Part 5 and focus their time on testing it with their checks. In Studio B, the provider swap can move to project time or homework.
- **Ready for more:** the lab's stretch goals (per-visitor limit, showing the model name), showing the weather on the page, and the homework stretch tier (own 429 message, streaming, Cloudflare Workers, Ollama, conversation memory). Ask them to explain *why* a per-visitor limit kept in memory is unreliable on serverless.
- **Already a developer:** ask them to write a test for `api/weather.js` with a stubbed `fetch` (the starter's `tests/ask.test.js` shows how), and to read `lib/llm.js` and explain its error mapping aloud.

## Fallback plans

| If… | Then… |
|---|---|
| Gemini is down or its key page is blocked on the network | Everyone uses Groq as primary today; do the drill in reverse at home |
| Every LLM provider is failing | Run the tests (they use a fake AI), deploy anyway (the page and error messages still work), and do Studio A Part 5 against the error path. Finish the AI part at home |
| Vercel is down or unusable (org repos) | Deploy with the Cloudflare Workers fallback in the [starter README](starter/README.md#cloudflare-workers-fallback-optional), or leave deployment to homework and do Studio B Part 3 against the local server |
| Open-Meteo is down | Students read the route against the sample response in the lab and break it on purpose (the `forecastXX` step works either way). Try the real call at home |
| Codespaces quota is exhausted | [Optional: set up your own computer](../../setup/local-setup.md), or pair with a classmate for the day |
| Wi-Fi is overloaded | Studio A Parts 2 and 5 can be done in pairs on one machine. Deploys can wait for Studio B |

## Exit ticket: what good answers look like

The [week 5 exit ticket](../../assessment/exit-tickets.md#week-5) asks students to show where the key lives and who can read it. A strong answer:

- names `.env` (or a Codespaces secret) in their Codespace, not committed thanks to `.gitignore`, and Vercel's environment variables for the live site;
- describes browser → `/api/ask` → provider, with the key added on the server step;
- says a visitor can see the page's code and the question and reply in DevTools, but not the key or the system prompt;
- says the first thing to do after a leak is to revoke the key.

Watch for: "the key is safe because the repo is private", "I hid it in a separate JS file", "`.gitignore` encrypts it", and "every key goes in `.env`" (week 7 will need "not every key is a secret"). Revisit the most-missed one in week 6's recap.

## Capstone pitch

Pitches are due **72 hours before week 6 Studio A**, on Canvas. Reply to each before the studio with **Go**, **Go if you shrink it** (name what to cut) or **Rethink** (offer a short call). Skim for:

- scope: finishable in three weeks with the capstone starter;
- at least two of the four feature types (pairs: three, or two plus an approved scope increase), each named concretely;
- no real personal data, no payments, a public API whose terms allow the use;
- a plan B for the biggest risk.

Confirm pairs now; pairs take on a bigger scope but are examined individually. Tell every student to **create their capstone repository from the starter before week 6 Studio A**: it's in the week 6 "Before Studio A" list, and it saves 15 minutes of the studio. A student with a late pitch still starts week 6: they write a five-line pitch with you in the first minutes of Studio A Part 3.
