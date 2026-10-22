# [Project name]

> One sentence: what it does and who it is for.

**Live site (production URL):** [https://…] · **Demo video:** [link] · **Author:** [your GitHub username; your real name is optional]

<!-- Required: a screenshot of the live site. Save it as docs/screenshot.png, describe what it shows
in the alt text, then delete these comment markers.
Link your production URL above, not a preview URL: Vercel deletes old preview deployments.
![Screenshot of the app's main screen](docs/screenshot.png)
-->

## What it does

- [feature 1]
- [feature 2]
- [feature 3]

## How to use it

1. …
2. …

## How it works

<!-- 3–6 sentences a classmate can follow. Which files matter? Where does data go? Where do keys live? -->

| Part | File(s) | What it does |
|---|---|---|
| Page structure | `public/index.html` | |
| Behavior | `public/app.js` | |
| Server route | `api/…` | |
| Data | [localStorage / Supabase table …] | |
| Keys | [for example: `LLM_API_KEY` in Vercel's environment variables; the Supabase publishable key in `public/config.js`] | |

**Authorization is enforced in:** [for example: "row-level security policies on the `notes` table (see `supabase/policies.sql`)", or "n/a — single-user app, data stays in your browser"]

## Run it yourself

```bash
npm install
cp .env.example .env    # then fill in your own values
npm run dev
```

## Status against the spec

| Criterion (from SPEC.md) | Status |
|---|---|
| AC1 … | ✅ passes |
| AC2 … | ⚠️ partly — … |

## Known issues

<!-- Be honest and specific. Saying clearly what doesn't work earns credit; hoping nobody notices doesn't. -->

| Issue | When it happens | Workaround or plan |
|---|---|---|
| [for example: Long names overflow the card] | [names over 40 characters on small phones] | [wrap the text; not fixed yet] |

## Next steps

- [What you'd build or fix next]

## How I built it

Built [during Vibe Coding 101, if you choose to say so] using [tools]. See [PROMPTS.md](PROMPTS.md) for how I used AI, [TESTS.md](TESTS.md) for how I checked it, and [SECURITY_CHECKLIST.md](SECURITY_CHECKLIST.md) for the security review.

## Credits

<!-- Code, images, fonts, APIs or tutorials you used, with links and licenses. -->
