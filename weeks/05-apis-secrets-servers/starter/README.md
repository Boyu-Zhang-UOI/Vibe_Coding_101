# AI micro-app starter

> A small web app that sends a question to an AI model through **your own server route**, so your API key never reaches the browser. Starter kit for [Vibe Coding 101](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101), week 5.

**Live site:** [your Vercel production URL] · **Author:** [your name]

<!-- Homework: replace this section with 2–3 sentences about YOUR version of the app. -->
## About this app

Right now it is "Plain English": type a question and get a short, plain-English answer. In week 5 you change the system prompt and the page to turn it into your own app.

## Where the key lives and who can read it

<!-- Homework (write this yourself, no AI): where is the API key stored on your
     computer/Codespace, where is it stored for the live site, which files and people
     can read it, and what a visitor to the live site can and cannot see. -->

## What's inside

| Path | Runs in | What it does |
|---|---|---|
| `public/index.html`, `public/style.css` | Browser | The page and its look |
| `public/app.js` | Browser | Sends your question to `/api/ask` and shows the reply. **No key here:** everything in `public/` is public |
| `public/lib/input.js` | Browser **and** server | The input rules (not empty, not too long) |
| `api/ask.js` | Server | The route behind `POST /api/ask`: checks the input, calls the AI, returns `{ "reply": "..." }` |
| `lib/llm.js` | Server | Calls any OpenAI-compatible AI provider using `LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL` |
| `lib/prompt.js` | Server | The **system prompt**: your app's instructions to the AI |
| `lib/validate.js` | Server | Checks each request before any AI quota is spent |
| `dev-server.mjs` | Your Codespace | A local server for development (`npm run dev`) |
| `scripts/list-models.mjs` | Your Codespace | Lists the model IDs your key can use (`npm run models`) |
| `scripts/check-secrets.mjs` | Your Codespace | Looks for keys in your files **and in every old commit** (`npm run check:secrets`) |
| `tests/` | Your Codespace | Automated tests (`npm test`). They use a fake AI, so they need no key and no internet |
| `package.json`, `package-lock.json` | — | The project's name and commands. The lock file lists the installed packages (none yet), so `npm audit` can check them |
| `.env.example` | — | A template for your settings. Placeholders only |
| `.env` | Your Codespace only | Your real settings, including the key. **Never committed** (it's in `.gitignore`) |
| `vercel.json` | Vercel | Tells Vercel to serve `public/` and run `api/` as serverless functions |

## Run it in a Codespace

You need a GitHub account and a free LLM API key. A Codespace already has Node.js installed: the course uses Node.js 22 LTS (minimum 20.12). Check with `node --version`.

1. **Make your own repository from this starter.** Follow [Start a project from a starter](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/setup/codespaces.md#start-a-project-from-a-starter) with the path `weeks/05-apis-secrets-servers/starter`, then open the repository in a Codespace.
2. **Create your settings file.** In the Codespace terminal:

   ```bash
   cp .env.example .env
   ```

3. **Get a free API key** from Google AI Studio (Gemini; you must be 18+) or, as the fallback, from the Groq console. [TOOLS.md](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/TOOLS.md) lists the current options.

   > [!WARNING]
   > Paste the key **only** into `.env` in the Codespace editor. Never paste it into an AI chat, a Copilot prompt, an issue, a commit, or a file under `public/`. If it ever ends up anywhere else, delete the key on the provider's website and make a new one.

4. Open `.env`, replace `paste-your-key-here` with your key and save.
5. **Find a model ID** your key can use:

   ```bash
   npm run models
   ```

   Copy one ID into the `LLM_MODEL=` line of `.env` and save.
6. **Start the app:**

   ```bash
   npm run dev
   ```

   Click **Open in Browser** in the pop-up (or open the **Ports** tab and click the globe icon next to port 3000). Keep the port **Private**. Ask a question.

   The server only accepts connections from the computer it runs on (in a Codespace, that's the Codespace, which forwards the port to you). To try the app from your phone on the same Wi-Fi when you work on your own laptop, start it with `HOST=0.0.0.0 npm run dev`, and stop it when you're done.
7. **Run the tests** (in a second terminal, or after stopping the server with `Ctrl+C`):

   ```bash
   npm test
   ```

After any change to `.env`, `api/` or `lib/`, stop the server with `Ctrl+C` and run `npm run dev` again.

> [!TIP]
> Instead of a `.env` file you can store the three settings as **Codespaces secrets** (github.com → your profile picture → Settings → Codespaces → Secrets → New secret, and give it access to this repository). They then arrive as environment variables in every new or restarted Codespace. If a setting exists both as a Codespaces secret and in `.env`, the Codespaces secret wins. Menus move; if you can't find it, search GitHub Docs for "Codespaces secrets".

## Deploy to Vercel

Vercel's free Hobby plan hosts `public/` as a website and runs each file in `api/` as a serverless function. It can't deploy a **private** repository owned by a GitHub organization, so keep this repository in your **personal** account.

1. Commit and push your work (Source Control panel → **Commit**, then **Sync Changes**). Check on github.com that `.env` is **not** in the repository.
2. Sign in at [vercel.com](https://vercel.com) with GitHub. Choose **Add New… → Project** and **Import** your repository. If it is not listed, use the link to adjust Vercel's GitHub permissions and give it access to this repository.
3. Leave the framework preset as **Other** and the build settings empty (`vercel.json` handles them).
4. Open **Environment Variables** and add `LLM_BASE_URL`, `LLM_API_KEY` and `LLM_MODEL` with the same values as in your `.env`.
5. Click **Deploy**. When it finishes, open the **production URL** (your project's main address, listed under **Domains**) and ask a question. Hand in that address, not the long address of a single deployment: Vercel deletes old deployments, so those links stop working.

> [!IMPORTANT]
> Environment variables only reach **new** deployments. If you add or change one later (Settings → Environment Variables), go to **Deployments**, open the ⋯ menu on the latest one and choose **Redeploy**. Every push to your main branch also redeploys automatically.

## Check that no key leaked

Run this before every push, and paste the result as evidence when a checklist asks for it:

```bash
npm run check:secrets
```

It looks for API keys, tokens and private keys in your files **and in every old commit on every branch**, because deleting a key from a file does not delete it from git history. It skips files that git ignores, such as `.env`, which is where your key belongs. The output never shows a whole key, only its first few characters and a *fingerprint* (a short code that identifies the key without revealing it).

If it finds a key:

1. **Revoke it** on the provider's website and make a new one. Assume it has leaked: bots search GitHub for keys.
2. Put the new key only in `.env` and in Vercel's environment variables.
3. Remove the old key from your files and commit.
4. If the old key is still in an **old commit**, add its fingerprint and a note to a file called `revoked-keys.txt` (for example `1a2b3c4d5e6f Gemini key, revoked 21 Oct`). The scan then reports it as handled. Only do this after revoking the key.

The scan knows the common key formats, not every one, so a clean result is good evidence, not proof. Keep reading your diffs before you commit.

To check the packages your project uses for known security problems, run `npm audit`. This starter has no packages yet, so it reports `found 0 vulnerabilities`; it matters once you add some.

## The provider-swap drill

Every provider in [TOOLS.md](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/TOOLS.md) accepts the same "OpenAI-compatible" request, so switching is a configuration change, not a code change:

1. Get a key from a second provider (for example Groq).
2. In `.env`, change all three lines: `LLM_BASE_URL` (see the commented examples in `.env.example`), `LLM_API_KEY`, and `LLM_MODEL` (run `npm run models` to pick one).
3. Stop and restart `npm run dev`, ask the same question as before and compare the answers.
4. Log the swap in `PROMPTS.md`: which provider, what you changed, what differed.

To swap the live site, change the same three variables in Vercel and redeploy.

## Troubleshooting

| You see | What it means | What to do |
|---|---|---|
| "The server is not set up yet: LLM_API_KEY … missing" | The server can't find a setting | Check `.env` exists (not just `.env.example`), the line has no spaces around `=`, and you restarted `npm run dev`. On Vercel: add the variable, then **Redeploy** |
| "rejected the server's API key" | Wrong, incomplete or deleted key, or a key for a different provider than `LLM_BASE_URL` | Copy the key again, or make a new one. Check the three lines belong to the same provider |
| "could not find that model" | `LLM_MODEL` is not an ID this provider knows | Run `npm run models` and copy an ID exactly |
| "The free AI quota is used up for now" | You hit the provider's rate limit (status 429) | Wait (per-minute limits reset quickly, daily ones overnight) or do the provider-swap drill |
| "Send the question as JSON, with the header Content-Type: application/json" (status 415) | Something called `/api/ask` without saying it was sending JSON, for example `curl` without `-H "Content-Type: application/json"`. The route refuses other kinds of requests, so other websites can't use your quota | Add the header. The page in `public/app.js` already sends it |
| "Port 3000 is already in use" | The server is already running in another terminal | Stop it there with `Ctrl+C`, or run `PORT=3001 npm run dev` |
| The live site works but the AI part fails | Usually a missing environment variable on Vercel | Check Vercel → Settings → Environment Variables, then **Redeploy**. Vercel → your project → **Logs** shows the server's error messages |

More help: [resources/troubleshooting.md](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/resources/troubleshooting.md).

## Cloudflare Workers fallback (optional)

If Vercel is not available to you, Cloudflare Workers can host the same app, because `api/ask.js` uses only web-standard code. This takes more setup and is not required.

1. In the project folder, create `worker.js`:

   ```js
   import ask from './api/ask.js';

   export default {
     async fetch(request) {
       if (new URL(request.url).pathname === '/api/ask') return ask.fetch(request);
       return new Response('Not found', { status: 404 });
     },
   };
   ```

2. Create `wrangler.jsonc`. Files in `public/` are served first; other requests go to `worker.js`. The `nodejs_compat` flag makes `process.env` work:

   ```jsonc
   {
     "name": "my-ai-micro-app",
     "main": "worker.js",
     "compatibility_date": "2026-09-01",
     "compatibility_flags": ["nodejs_compat"],
     "assets": { "directory": "./public" },
     "vars": {
       "LLM_BASE_URL": "https://generativelanguage.googleapis.com/v1beta/openai/",
       "LLM_MODEL": "paste-a-model-id-from-npm-run-models"
     }
   }
   ```

3. Log in, deploy, then store the key as a Cloudflare **secret** (the last command asks you to paste the key into the terminal, not into a file, and updates the live Worker):

   ```bash
   npx wrangler login
   npx wrangler deploy
   npx wrangler secret put LLM_API_KEY
   ```

   If `wrangler login` can't finish inside a Codespace, create a Cloudflare API token with the "Edit Cloudflare Workers" template and save it as a Codespaces secret named `CLOUDFLARE_API_TOKEN` instead.

See the Cloudflare docs on [Workers static assets](https://developers.cloudflare.com/workers/static-assets/) for details.

## How I built it

Started from the Vibe Coding 101 week 5 starter. See [PROMPTS.md](PROMPTS.md) for how I used AI.
