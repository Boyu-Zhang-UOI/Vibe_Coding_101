# Week 5 — Instructor notes

> Big idea: **the browser is public; secrets live on the server.** Everything today serves that sentence. If students leave able to draw the trust boundary and say where their key lives, the week worked, even if a deployment is still pending.

Why deployment gets a whole lab: in CMU 15-113, students reported that deployment took more time than coding ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). Budget for it, and expect the first deploy to be the slowest step of the day.

## Prep checklist

### A week before

- [ ] Re-check the "LLM APIs" and "Hosting" rows of [TOOLS.md](../../TOOLS.md) by actually doing them: create a Gemini key in Google AI Studio and a Groq key, run `npm run models` with each, and deploy the starter to Vercel. Free tiers change without notice.
- [ ] Decide each student's primary provider. Under-18 students, and cohorts in the EEA, UK or Switzerland, should not use Gemini's free tier: use the stack in [instructor/variants.md](../../instructor/variants.md#eea-uk-and-swiss-cohorts) (usually Groq).
- [ ] If student repositories live in a GitHub organization (for example GitHub Classroom), Vercel Hobby **cannot** import them. Tell students to create the micro-app in their personal account, or plan for the Cloudflare Workers fallback in the [starter README](starter/README.md#cloudflare-workers-fallback-optional).
- [ ] If you published starter templates (`scripts/publish-starters.sh`), check that the micro-app template link works. Otherwise make sure the `degit` fallback in [setup/codespaces.md](../../setup/codespaces.md#start-a-project-from-a-starter) works for `weeks/05-apis-secrets-servers/starter`.
- [ ] Remind students to create Groq and Vercel accounts before class, and to bring a personal (not school) Google account.

### The day before: build the two demo sites

1. Create your own repository from the starter and deploy it to Vercel with **a key made just for this class** (Groq is a good choice: its free limits are published and it keeps no inference data by default). This is the **safe** site. Thirty students asking a few questions each stays well inside free limits, but check [TOOLS.md](../../TOOLS.md).
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
3. Write both URLs somewhere you can paste them into the class chat.
4. After the course, delete the class key on the provider's site.

## Run sheet

| Time | Block | Notes |
|---|---|---|
| 0:00–0:10 | Show and tell | Two finished Project 1s. Ask each: "What did you have to fix by hand?" |
| 0:10–0:30 | Concept talk | [slides.md](slides.md), 17 slides. Slow down on "The trust boundary"; draw it on the board and leave it up all session |
| 0:30–0:40 | Live demo | Script below |
| 0:40–0:50 | Lab Part 1 | Post both demo URLs. Walk the room: is everyone in DevTools' **Network** tab? |
| 0:50–1:10 | Lab Part 2 | The bottleneck. Getting a key and a model ID takes 5–10 minutes. Circulate; check nobody pastes a key into Copilot |
| 1:10–1:30 | Lab Part 3 | Idea table on screen. Push for a real system-prompt rewrite, not just a heading change |
| 1:30–1:40 | Lab Part 4 | Provider swap. Celebrate the moment the terminal names the new provider |
| 1:40–1:50 | Break | |
| 1:50–2:10 | Lab Part 5 | Vercel import. Most problems: org-owned repos, missing env vars, forgetting to redeploy |
| 2:10–2:20 | Lab Part 6 | Evidence. Anyone whose key shows up: revoke first, then clean up |
| 2:20–2:45 | Debrief | Live URLs on screen. Ask: "Which provider answered better?" "Where does your key live?" "What surprised you in DevTools?" |
| 2:45–3:00 | Exit ticket + preview | [Week 5 exit ticket](../../assessment/exit-tickets.md#week-5) (🔴). Preview the homework and the **capstone pitch** |

## Live-demo script (10 minutes)

1. **The leak (3 min).** Open the leaky URL on the projector. "Somebody hid their key in the JavaScript. Let's see how hidden it is." `F12` → **Sources** → `leaky.html` → there it is. Then **Network** → the failed request → **Headers** → `Authorization: Bearer DEMO-…`. Ask: "How long did that take? Who could do this?" (Anyone, in seconds.)
2. **The safe version (3 min).** Open the safe URL. Ask a question. **Network** → `ask` → Payload shows only the question; Response shows only the reply. **Sources** → search all files for `key`: nothing useful. "Where did the key go?" Open `api/ask.js` and `lib/llm.js` in the repo and point to `process.env.LLM_API_KEY`: "This code runs on Vercel's computer, never in your browser."
3. **Where it's stored (2 min).** In a Codespace, show `.env.example` (placeholders), then show that `.env` is grey in the Explorer and absent from `git status`. **Don't open your real `.env` on the projector.** Show Vercel → **Settings** → **Environment Variables** with the value hidden.
4. **The swap (2 min).** Say what you would change to switch provider (three lines), restart, and show the terminal naming the new provider. Keep the key off screen.

## Common pitfalls

| Pitfall | What to do |
|---|---|
| A student pastes their key into Copilot Chat, another chat, or the class chat | Calmly: revoke it on the provider's site now, make a new one. No blame; it's the most common mistake, and the reason for rule 2 of the [safety contract](../../setup/safety-contract.md) |
| `.env` open in an editor tab while using Copilot Chat | Editor assistants can read open files. Close the tab. The lab says so, but watch for it |
| "Missing LLM_API_KEY" after editing `.env` | The server wasn't restarted, the file is `.env.example` not `.env`, or the `paste-…` placeholder is still there |
| Live site: AI part fails, local works | Env vars not added on Vercel, or added after the deploy without a **Redeploy** |
| Model not found | Typing a model name from memory or an old tutorial. Always copy from `npm run models` |
| Gemini: "API key not valid" (the provider answers `400`) | Key copied incompletely, or created in a different Google account/project. Make a new one |
| Gemini key page unavailable | School/work Google account, under 18, or an unsupported region. Switch to Groq |
| Vercel can't see the repo | Org-owned repo, or Vercel's GitHub app lacks access to it. Personal account; adjust permissions |
| Student sets the forwarded port to **Public** | Change it back to Private. A public port lets anyone spend their quota through the dev server |
| `.env` committed | Revoke first. Then `git rm --cached .env` and commit; history still holds the old key, which is why revoking comes first. Check `.gitignore` wasn't edited |
| Scanner finds nothing, so "it's safe" | `npm run check:secrets` doesn't know every key format. That's why Part 6 also searches git history |

## Differentiation

- **Needs more support:** pair students for Parts 1–2 (one drives, both learn). Let them skip Part 4 in class and do it at home. Offer a pre-written system prompt for Part 3 and focus their time on testing it with edge cases.
- **Ready for more:** point them to the lab's stretch goals (per-visitor limit, showing the model name) and the homework stretch tier (streaming, Cloudflare Workers, Ollama, conversation memory). Ask them to explain *why* a per-visitor limit kept in memory is unreliable on serverless.
- **Already a developer:** ask them to review a neighbor's `api/ask.js` changes against the Safe Loop, and to read `lib/llm.js` and explain its error mapping aloud.

## Fallback plans

| If… | Then… |
|---|---|
| Gemini is down or its key page is blocked on the network | Everyone uses Groq as primary today; do the drill in reverse at home |
| Every LLM provider is failing | Run the tests (they use a fake AI), deploy anyway (the page and error messages still work), and do Parts 3 and 6 against the error path. Finish the AI part at home |
| Vercel is down or unusable (org repos) | Deploy with the Cloudflare Workers fallback in the [starter README](starter/README.md#cloudflare-workers-fallback-optional), or leave deployment to homework and extend Part 6 using the local server |
| Codespaces quota is exhausted | [setup/local-setup.md](../../setup/local-setup.md), or pair with a classmate for the day |
| Wi-Fi is overloaded | Parts 1 and 3 can be done in pairs on one machine. Deploys can wait |

## Exit ticket: what good answers look like

The [week 5 exit ticket](../../assessment/exit-tickets.md#week-5) asks students to show where the key lives and who can read it. A strong answer:

- names `.env` (or a Codespaces secret) in their Codespace, not committed thanks to `.gitignore`, and Vercel's environment variables for the live site;
- draws browser → `/api/ask` → provider, with the key added on the server step;
- says a visitor can see the page's code and the question and reply in DevTools, but not the key or the system prompt;
- says the first thing to do after a leak is to revoke the key.

Watch for: "the key is safe because the repo is private", "I hid it in a separate JS file", "`.gitignore` encrypts it". Revisit these at the start of week 6.

## Capstone pitch

Collect pitches before week 6 and skim them for scope: each should be finishable in three weeks with the capstone starter, include at least two of the four required parts, and use no real personal data. Confirm pairs now; pairs take on a bigger scope but still do individual oral walkthroughs. Week 6 opens the capstone repository from the pitch ([projects/capstone.md](../../projects/capstone.md)).
