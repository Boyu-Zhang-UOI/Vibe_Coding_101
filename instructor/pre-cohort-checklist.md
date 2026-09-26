# Pre-cohort checklist

> What to decide, set up and test, from six weeks before the course to the week after it ends.

Free AI tools change their limits, menus and terms constantly, and vendors' own documentation can lag the real product by months. Google's Gemini CLI README, for example, kept advertising a free tier for months after it had ended ([landscape report](../research/landscape-report-2026-09.md)). So this checklist asks you to **use** every tool, not read about it. A copyable version of the whole checklist is at the [bottom of the page](#copyable-checklist).

| When | Main job |
|---|---|
| [T-6 weeks](#t-6-weeks-decide-and-set-up) | Decide the stack for your cohort, check policies, publish the starter kits |
| [T-3 weeks](#t-3-weeks-invite-students-to-week-0) | Send students the week 0 pre-work |
| [T-1 week](#t-1-week-smoke-test) | Smoke-test every primary and fallback tool; update TOOLS.md |
| [Week 1](#week-1-account-problems) | Fix students' account problems |
| [Before week 5](#mid-course-re-check-before-week-5) | Re-check the tools for weeks 5–8 |
| [After the course](#after-the-course) | Collect feedback, clean up, report upstream |

## T-6 weeks: decide and set up

**1. Decide your cohort's age range and region, then the stack.** Several primary tools are 18+ only, and the Gemini API's free tier can't serve users in the EEA, UK or Switzerland. If any student may be under 18, or in those regions, switch to the matching stack in [variants.md](variants.md) now and say so in the course description. Settle this **before** enrollment, not in week 1.

**2. Check your institution's policies.**

- Is there a list of approved AI tools, or a rule against requiring students to create accounts with outside AI companies? If so, you may need an alternative path for some students.
- What do student-privacy rules (such as FERPA in the US or GDPR in Europe) say about course work stored on GitHub and in AI tools? Public repositories are part of this course's design; check that's acceptable, and offer pseudonymous usernames.
- Does your institution have its own AI policy for assessment? Align the syllabus's 🟢🟡🔴 table with it.
- Does the accessibility office need anything from you in advance?

**3. Make your copy of the course.** Fork or copy the repository, then follow "Forking for your own course" in [CONTRIBUTING.md](../CONTRIBUTING.md): replace `Boyu-Zhang-UOI/Vibe_Coding_101` with your repository's path everywhere, and update TOOLS.md for your cohort. To publish the slides, turn on **Settings** → **Pages** → **Source: GitHub Actions** in your copy.

**4. Publish the starter kits as template repositories.** Students then start each project with **Use this template** instead of copying folders ([student instructions](../setup/codespaces.md#start-a-project-from-a-starter)). With the [GitHub CLI](https://cli.github.com/) installed and signed in, run from the repository root:

```bash
scripts/publish-starters.sh <your-github-user-or-org>
```

The script ([scripts/publish-starters.sh](../scripts/publish-starters.sh)) creates one public template repository per kit, named `<owner>/vc101-<kit>` (an optional second argument changes the `vc101` prefix). It prints each link; share the `…/generate` links on your course page. It's safe to re-run: repositories that already exist are skipped, so if you change a kit later, delete its old template first or publish with a new prefix.

> [!TIP]
> Before publishing, consider varying the Debug Clinic's planted bugs using the bug menu in its [answer key](answer-keys/README.md). The published answer keys are public if your repository is.

**5. Staff and schedule.**

- Recruit TAs: about one per 15 students ([why](README.md#staffing)).
- Book the room: enough power outlets, and a network that doesn't block `github.com`, `*.github.dev`, `*.app.github.dev`, `*.githubusercontent.com` and `registry.npmjs.org`.
- Schedule oral-walkthrough slots for weeks 4, 6 and 8, and a one-hour TA norming session before week 4.
- Set up where students submit links (a spreadsheet or your learning platform).

**6. Decide whether to use GitHub Classroom** or a course organization. If you do, remember that Vercel's free Hobby plan can't deploy organization-owned repositories. Students should still create project repositories in their personal accounts.

**7. Put the course dates next to TOOLS.md's [known upcoming changes](../TOOLS.md#known-upcoming-changes).** Note every change that falls inside your course, and plan around it.

## T-3 weeks: invite students to week 0

- Send the [week 0 pre-work](../setup/README.md) with a deadline two days before the first studio.
- Stress two things: students should apply for **GitHub Education now** (verification can take days), and should use a **personal** Google account.
- Ask, privately, about anything that affects the stack or support: age under 18, living in the EEA, UK or Switzerland, device or connectivity limits, accessibility needs.
- Offer a drop-in setup session (online is fine) a few days before week 1.

## T-1 week: smoke test

**For every primary and fallback tool in [TOOLS.md](../TOOLS.md), one person spends about 10 minutes running the script below.** Split the list between TAs. Where you can, use an ordinary **free** account (not a paid or student plan), so you see what students will see. Record each result as **Pass**, **Fail** or **Changed**, with a note.

The same prompt works for every chat assistant and builder:

```text
Goal: A one-file web page with a button that changes the background to a random color.
Context: A beginner will open this in a browser.
Constraints: One index.html file with the CSS and JavaScript inside it. No libraries.
Done when: The page shows the button, and each click changes the background color.
```

### Chat assistants (weeks 1–3)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 1 | **Gemini Canvas** (primary) | New chat → choose **Canvas** from the tools → paste the prompt → ask for one change ("make the button bigger") | The preview runs in the canvas, the button works, the change appears, and you can copy or download the code. The Keep Activity and temporary-chat steps in [privacy-settings.md](../setup/privacy-settings.md#gemini) still match |
| 2 | **ChatGPT Free** (fallback 1) | Paste the prompt. Save the result as `index.html` in a codespace and run `python3 -m http.server 8000` | You get one complete file, and it works in the preview. The Data controls path still matches |
| 3 | **Claude Free** (fallback 2, 18+) | Paste the prompt | The Artifact preview runs and the button works. The Privacy path still matches |

### App builders (week 3)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 4 | **Google AI Studio Build** (primary, 18+) | Build mode → paste the prompt, then "Add a counter showing how many times the color changed" → export to GitHub (or download a ZIP) | The app previews, the follow-up change works, and the export works **without** a billing account |
| 5 | **Bolt** (fallback 1) | Same prompts → export or download | Same as above. Note what the free-usage meter shows |
| 6 | **Lovable, v0, Replit** (fallback 2, one session each) | Sign in, send the first prompt, look for GitHub export | A free plan still exists, one prompt works, and export to GitHub is available (note if not). Check for announced pricing changes |

### Git, Codespaces and GitHub Pages (weeks 1–4)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 7 | **GitHub web + Pages** (primary hosting, weeks 1–4) | New public repository → upload the `index.html` from test 1 → add `game/index.html` → **Settings** → **Pages** → Deploy from a branch → `main` / root | Both `https://<user>.github.io/<repo>/` and `…/game/` load within a few minutes |
| 8 | **github.dev** | On that repository press `.` → edit a file → **Commit & Push** | The commit appears on github.com |
| 9 | **Codespaces** | Create a repository from the week 5 template → create a codespace → `node --version` → `python3 -m http.server 8000` → open the port → stop, then delete, the codespace | Node is 20 or newer; the preview opens; stopping and deleting work. The free quota in TOOLS.md is still accurate |

### Editor and agents (weeks 4–8)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 10 | **Copilot Free in a Codespace** (primary) | In the week 5 starter's codespace: (a) **Ask** mode: "Explain what dev-server.mjs does." (b) **Agent** mode: "Add a one-line comment at the top of public/app.js that says what the file does, then run npm test and show me the output." (c) Type in a file and watch for completions. (d) Tick **Chat: Disable AI Features**, then untick it | (a) answers; (b) **edits the file, asks permission before running `npm test`, and shows real test output**, and the diff appears in Source Control; (c) grey suggestions appear; (d) chat disappears and comes back. The training setting is where [privacy-settings.md](../setup/privacy-settings.md#github-copilot) says |
| 11 | **Copilot Student** (if a TA has it) | Repeat test 10 | Same, and note any differences from Free |
| 12 | **Copilot CLI** (primary terminal agent) | Install it as the week 6 lab describes. In the week 5 starter: "Summarize this project in three bullet points. Don't change any files." | It answers, and asks permission before running any command |
| 13 | **Google Antigravity** (fallback 1, 18+) | Install. Set it to ask before terminal commands. Open the Be the Agent kit's folder: "Run the tests and explain which one fails and why. Don't fix it." | It runs the tests (after asking) and explains the failure. The data-collection opt-out is where [privacy-settings.md](../setup/privacy-settings.md#google-antigravity) says |
| 14 | **Antigravity CLI** (terminal fallback 1, 18+) | Same question from the terminal | It answers and asks before running commands |
| 15 | **Cline or Kilo Code + a free API** (fallback 2) | Install the extension in a codespace. Add an OpenAI-compatible provider with Groq's base URL and a key. Ask a question about the repository | A response arrives. Note the setup steps if they differ from the week 4–6 notes |
| 16 | **OpenCode or Aider + free models** (terminal fallback 2) | Install following the tool's docs; connect a free model; ask the question from test 12 | A response arrives, and it asks before editing |

### LLM APIs (weeks 5–8)

For each provider, in a codespace of the week 5 starter: copy `.env.example` to `.env`, set `LLM_BASE_URL` and `LLM_API_KEY` for that provider, then run `npm run models`, set `LLM_MODEL` to one of the listed IDs, run `npm run dev`, and use the app.

| # | Tool (role) | Pass when |
|---|---|---|
| 17 | **Gemini API** (primary, 18+, not for EEA/UK/CH apps) | `npm run models` lists model IDs, including a Flash-Lite model, and the app returns a response. If the example model ID in `.env.example` is out of date, update it and TOOLS.md |
| 18 | **Groq** (fallback 1) | Same. This is the provider-swap drill: nothing but `.env` changed |
| 19 | **OpenRouter** (fallback 2) | Same, with a `:free` model. Note which privacy settings a free model needs ([privacy-settings.md](../setup/privacy-settings.md#groq-and-openrouter)) |
| 20 | **Cloudflare Workers AI** (fallback 2) | The app returns a response. `npm run models` may not work with every provider; if it fails, use a model ID from Cloudflare's docs and note it |
| 21 | **Ollama** (local fallback, optional) | On a laptop with enough memory, pull a small model and run the starter locally against `http://localhost:11434/v1`. The app returns a response |

### Hosting, database and security kits (weeks 5–8)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 22 | **Vercel Hobby** (primary for apps with a server) | Import a **personal** repository made from the week 5 template → set the three environment variables → deploy → change one variable and redeploy | The live URL loads and the AI feature responds; the key is nowhere in DevTools **Sources** or **Network**; the changed variable takes effect after redeploying |
| 23 | **Cloudflare Workers** (hosting fallback) | Deploy the page from test 1. If you'll use Cloudflare as the week 5 fallback, deploy the week 5 starter too and write down the steps | The URL loads |
| 24 | **Supabase** (primary database) | Run the [RLS Attack Lab](../weeks/07-security-and-review/rls-lab/README.md) end to end as its README describes: `setup.sql`, then the attack page reads and writes using only the publishable key, then `fix.sql`, then the same attack fails | All three stages behave as the README says. Note how to restore a paused project |
| 25 | **Neon or Turso** (database fallback) | Create a database and run one query in its web console | The query returns a result |
| 26 | **Secret scan** | In the capstone starter: `npm run check:secrets`. Then add a scratch file containing a fake GitHub-style token (`ghp_` followed by 36 random letters and digits), run it again, and delete the file | The first scan is clean; the second flags the fake token |
| 27 | **Prompt-injection demo** | Follow the [injection demo README](../weeks/07-security-and-review/injection-demo/README.md) | The demo behaves as its README describes |
| 28 | **Starter templates and the degit fallback** | For each template: **Use this template** into a personal account, open a codespace, run `npm test` (Node kits). Then, in an empty repository's codespace, run one degit command from [codespaces.md](../setup/codespaces.md#start-a-project-from-a-starter) | Tests pass, except in kits with planted bugs, which fail exactly as their READMEs say. degit copies the files |
| 29 | **Privacy click-paths** | Walk through every section of [privacy-settings.md](../setup/privacy-settings.md) | Every setting is where the page says. Fix what moved, and update the "checked" date at the top |
| 30 | **Tutor Gem** | Build the Gem ([course-tutor.md](course-tutor.md#build-it-as-a-shared-gemini-gem)). Open the Debug Clinic, pick the first bug, and ask the Gem "Just give me the fixed code" | It refuses politely, gives a first-level hint, and never shows more than a couple of lines of code |

### After the smoke test

- **Update [TOOLS.md](../TOOLS.md):** change the **Last verified** date, and fix every row that changed. Open a [tool-change issue](../.github/ISSUE_TEMPLATE/tool-change.yml) upstream so other instructors benefit.
- **If a primary tool failed,** promote fallback 1 to primary for your cohort in TOOLS.md and on your course page, and tell the TAs.
- **Check the change calendar** again ([known upcoming changes](../TOOLS.md#known-upcoming-changes)) and tell students about any date that affects them, such as a student-offer deadline.

## Week 1: account problems

Most week 1 problems are account problems. Give one TA the job of fixing them (the "tool medic").

| Problem | Fix |
|---|---|
| A school or work Google account has Gemini or AI Studio switched off | Use a personal Google account ([accounts.md](../setup/accounts.md)) |
| GitHub Education verification is still pending, or was rejected | Use Copilot Free meanwhile. Check the application's status page and the reason for rejection; resubmitting with clearer proof often works |
| A student lost their two-factor device | Recovery codes. If those are lost too, GitHub's account-recovery process. Remind everyone to store recovery codes |
| A student regrets their username | Change it now, before their GitHub Pages address is shared anywhere |
| A student turns out to be under 18, or lives in the EEA, UK or Switzerland | Move them to the matching stack in [variants.md](variants.md); for under-18s, get parental consent first |
| ChatGPT or Claude sign-up is blocked (age check, region, phone number) | Use Gemini plus another fallback from TOOLS.md |
| A codespace won't open on a managed laptop or campus network | Try another browser or a phone hotspot to find the cause, then ask IT to allow the domains listed in [T-6 weeks](#t-6-weeks-decide-and-set-up) |

Also in week 1:

- **Privacy settings check:** in pairs, students show each other the settings they changed. No screenshots of accounts need to be handed in.
- **Collect** signed safety contracts, self-assessments, and every student's GitHub username.
- **Show the usage dashboards** (Copilot and Codespaces), so students can see their allowances before they run out.

## Mid-course re-check (before week 5)

The second half of the course depends on more tools, and a lot can change in a month.

- Re-run smoke tests 10–30 above (at least the primaries: 10, 12, 17, 18, 22, 24, 26).
- Check TOOLS.md's known upcoming changes for weeks 5–8.
- Update TOOLS.md and tell the class what changed, if anything.
- Remind students: stop unused codespaces; check their Copilot usage; a Supabase project on the free plan pauses after a period of inactivity and can be restored from its dashboard.
- If you changed a starter kit, re-publish it (see [T-6 weeks](#t-6-weeks-decide-and-set-up), step 4).

## After the course

- **Measure.** Have students retake the [self-assessment](../assessment/self-assessment.md) and fill in a short course survey. Compare with week 0 and with walkthrough scores ([how](README.md#measuring-outcomes)).
- **Help students clean up.** Remind them to cancel student offers before they auto-renew, delete unused codespaces, revoke the API keys they made for the course, and delete Supabase projects they no longer need. Their portfolio repositories stay.
- **Clean up your own.** Revoke demo keys; delete test accounts' data and test projects.
- **Handle data properly.** Keep or delete exit tickets, surveys and grades according to your institution's retention rules.
- **Run a TA retrospective:** what to keep, cut and change.
- **Report upstream.** Open [tool-change](../.github/ISSUE_TEMPLATE/tool-change.yml) and [erratum](../.github/ISSUE_TEMPLATE/erratum.yml) issues, and share adaptations that worked ([CONTRIBUTING.md](../CONTRIBUTING.md)).
- **Prepare the next cohort:** vary the planted bugs ([answer keys](answer-keys/README.md)) and note which smoke tests failed this time.

## Copyable checklist

Copy this table into an issue, a document or a spreadsheet, and tick items off as you go.

| When | Task | Owner | Done |
|---|---|---|---|
| T-6 weeks | Decide age range and region; choose the stack ([variants.md](variants.md)) | | ☐ |
| T-6 weeks | Check institutional AI, privacy and accessibility policies | | ☐ |
| T-6 weeks | Fork or copy the repository; replace the repository path; update TOOLS.md for the cohort | | ☐ |
| T-6 weeks | Vary Debug Clinic bugs (optional); run `scripts/publish-starters.sh <owner>`; list template links on the course page | | ☐ |
| T-6 weeks | Recruit TAs; book the room; check the network; schedule oral-walkthrough slots and TA norming | | ☐ |
| T-6 weeks | Decide on GitHub Classroom or an organization (students' project repositories stay personal) | | ☐ |
| T-6 weeks | Compare course dates with TOOLS.md's known upcoming changes | | ☐ |
| T-3 weeks | Send week 0 pre-work; stress GitHub Education and personal Google accounts; ask about age, region, devices, accessibility | | ☐ |
| T-3 weeks | Schedule a drop-in setup session | | ☐ |
| T-1 week | Smoke tests 1–3: chat assistants | | ☐ |
| T-1 week | Smoke tests 4–6: app builders | | ☐ |
| T-1 week | Smoke tests 7–9: GitHub, Pages, github.dev, Codespaces | | ☐ |
| T-1 week | Smoke tests 10–16: Copilot, Copilot CLI and fallback editors and agents | | ☐ |
| T-1 week | Smoke tests 17–21: LLM APIs | | ☐ |
| T-1 week | Smoke tests 22–28: hosting, databases, security kits, starters | | ☐ |
| T-1 week | Smoke tests 29–30: privacy click-paths; tutor Gem | | ☐ |
| T-1 week | Update TOOLS.md "Last verified" and changed rows; open upstream issues | | ☐ |
| Week 1 | Tool medic assigned; account problems fixed | | ☐ |
| Week 1 | Privacy settings pair check; safety contracts, self-assessments and usernames collected; usage dashboards shown | | ☐ |
| Before week 5 | Mid-course re-check; TOOLS.md updated; students reminded about codespaces, credits and Supabase pausing | | ☐ |
| After | Post-course self-assessment and survey; compare with week 0 | | ☐ |
| After | Students reminded to cancel offers, delete codespaces, revoke keys | | ☐ |
| After | Own keys revoked; test data deleted; records handled per retention rules | | ☐ |
| After | TA retrospective; upstream issues opened; bugs varied for next cohort | | ☐ |
