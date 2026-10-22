# Pre-cohort checklist

> What to decide, set up and test, from six weeks before the course to the week after it ends.

Free AI tools change their limits, menus and terms constantly, and vendors' own documentation can lag the real product by months. Google's Gemini CLI README, for example, kept advertising a free tier for months after it had ended ([landscape report](../research/landscape-report-2026-09.md)). In the four weeks after the September check alone, three free tiers shrank and one free plan vanished from its pricing page ([October update](../research/landscape-update-2026-10.md)). So this checklist asks you to **use** every tool, not read about it. A copyable version of the whole checklist is at the [bottom of the page](#copyable-checklist).

| When | Main job |
|---|---|
| [T-6 weeks](#t-6-weeks-decide-and-set-up) | Decide the stack for your cohort, check policies, set up Canvas, plan the two-studio week, publish the starter kits |
| [T-3 weeks](#t-3-weeks-invite-students-to-week-0) | Send students the week 0 pre-work |
| [T-1 week](#t-1-week-smoke-test) | Smoke-test every primary and fallback tool; update TOOLS.md |
| [Week 1](#week-1-account-problems) | Fix students' account problems |
| [Before week 5](#mid-course-re-check-before-week-5) | Re-check the tools for weeks 5–8 |
| [After the course](#after-the-course) | Collect feedback, clean up, report upstream |
| [Maintenance calendar](#maintenance-calendar) | Dated tool changes and what to do about each |

## T-6 weeks: decide and set up

**1. Decide your cohort's age range and region, then the stack.** Several primary tools are 18+ only, and the Gemini API's free tier can't serve users in the EEA, UK or Switzerland. If any student may be under 18, or in those regions, switch to the matching stack in [variants.md](variants.md) now and say so in the course description. Settle this **before** enrollment, not in week 1.

**2. Check your institution's policies.**

- Is there a list of approved AI tools, or a rule against requiring students to create accounts with outside AI companies? If so, you may need an alternative path for some students.
- What do student-privacy rules (such as FERPA in the US or GDPR in Europe) say about course work stored on GitHub and in AI tools? Public repositories are part of this course's design, for code, specs, `PROMPTS.md`, `TESTS.md` and READMEs only. Graded personal writing goes on Canvas (see step 3). Check that's acceptable, and offer pseudonymous usernames.
- Does your institution have its own AI policy for assessment? Align the syllabus's AI-use table (🟢 AI on · 🟡 AI limited · 🔴 AI off) with it.
- Does the accessibility office need anything from you in advance?

**3. Set up Canvas, the course's learning management system.** Create the private assignments that keep graded personal writing out of public repositories: the signed safety contract and the pre-course self-assessment (both week 1), the AI fluency response (week 1), weekly reflections and the AI journal, personal AI-use rules (week 1, revised in week 8), written peer reviews (weeks 3 and 7), pair contribution statements, and the post-course self-assessment (week 8). Students paste the templates ([REFLECTION.md](../templates/REFLECTION.md), [CODE_REVIEW.md](../templates/CODE_REVIEW.md)) into Canvas.

**4. Make your copy of the course.** Fork or copy the repository, then follow "Forking for your own course" in [CONTRIBUTING.md](../CONTRIBUTING.md): replace `Boyu-Zhang-UOI/Vibe_Coding_101` with your repository's path everywhere, and update TOOLS.md for your cohort. To publish the website and slides, turn on **Settings** → **Pages** → **Source: GitHub Actions** in your copy. The week 7 lab uses the hosted RLS attack page that the site build publishes under `/tools/rls-attack.html`; check it loads on your copy's site.

**5. Publish the starter kits as template repositories.** Students then start each project with **Use this template** instead of copying folders ([student instructions](../setup/codespaces.md#start-a-project-from-a-starter)). With the [GitHub CLI](https://cli.github.com/) installed and signed in, run from the repository root:

```bash
scripts/publish-starters.sh [your-github-user-or-org]
```

The script ([scripts/publish-starters.sh](../scripts/publish-starters.sh)) creates one public template repository per kit, named `[owner]/vc101-[kit]` (an optional second argument changes the `vc101` prefix). It prints each link; share the `…/generate` links on your course page. Repositories that already exist are skipped. **Whenever you change a kit later** (including when you pull an upstream fix, such as a new secret scanner or lockfile), update the published templates so students don't copy an old version:

```bash
scripts/publish-starters.sh --update [your-github-user-or-org]
```

> [!TIP]
> Before publishing, consider varying the Debug Clinic's planted bugs using the bug menu in its [answer key](answer-keys/README.md). The published answer keys are public if your repository is.

**6. Plan the two-studio week, and staff it.** The course meets for two 3-hour studios a week (Studio A: learn and build; Studio B: workshop), plus about 11 hours of work outside class.

- Book the room for **16 sessions** (two per week for eight weeks): enough power outlets, and a network that doesn't block `github.com`, `*.github.dev`, `*.app.github.dev`, `*.githubusercontent.com` and `registry.npmjs.org`.
- Recruit TAs: about one per 15 students ([why](README.md#staffing-and-workload)). Hold a one-hour TA norming session before week 4.
- Schedule oral-walkthrough slots: walkthrough 1 in week 4 Studio B (after the git revert practice) or office hours that week; walkthrough 2 in week 6 Studio B or by appointment before week 7 Studio A; walkthrough 3 in week 8 Studio A or by appointment during week 8 before the Project Fair. Run studio walkthroughs only when a TA can cover the room; otherwise use appointments.
- Prepare the Studio B mini-lessons, which are new teaching rather than lab overflow: the first automated test (week 4), the external public API (week 5), branches and pull requests and the chart / external-API feature clinic (week 6), and the Supabase connection worked example (week 7).
- Plan around Copilot credits: agent work is concentrated in weeks 6–8, and credits reset on the first of each calendar month. Note the reset dates inside your course and share the [credits budget](../TOOLS.md#credits-budget-for-the-course) with students in week 4.

**7. Decide whether to use GitHub Classroom** or a course organization. If you do, remember that Vercel's free Hobby plan can't deploy **private** repositories owned by an organization. Students should still create project repositories in their personal accounts.

**8. Put the course dates next to the [maintenance calendar](#maintenance-calendar)** and TOOLS.md's [known upcoming changes](../TOOLS.md#known-upcoming-changes). Note every change that falls before or inside your course, and plan around it.

## T-3 weeks: invite students to week 0

- Send the [week 0 pre-work](../setup/README.md). The "Before Studio 1" part (about 60–90 minutes) is due before the first studio; the "During week 1" tasks (safety contract and self-assessment on Canvas, GitHub Education) are due before week 2's Studio A.
- Stress two things: students should apply for **GitHub Education early** (verification can take days), and should use a **personal** Google account.
- Ask, privately and before Studio 1, about anything that affects the stack or support: age under 18, living in the EEA, UK or Switzerland, device or connectivity limits, accessibility needs.
- Offer a drop-in setup session (online is fine) a few days before week 1.

## T-1 week: smoke test

**For every primary and fallback tool in [TOOLS.md](../TOOLS.md), one person spends about 10 minutes running the script below.** Split the list between TAs. Where you can, use an ordinary **free** account (not a paid or student plan), so you see what students will see. Record each result as **Pass**, **Fail** or **Changed**, with a note. Rows with a letter (3a, 6a…) are checks added after the October 2026 re-check.

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
| 1 | **Gemini Canvas** (primary) | With **Keep Activity off**: new chat → choose **Canvas** from the tools → paste the prompt → ask for one change ("make the button bigger") | The preview runs in the canvas, the button works, the change appears, and you can copy or download the code. The Keep Activity and temporary-chat steps in [privacy-settings.md](../setup/privacy-settings.md#gemini) still match |
| 2 | **ChatGPT Free** (fallback 1) | Paste the prompt. Save the result as `index.html` in a codespace and run `python3 -m http.server 8000` | You get one complete file, and it works in the preview. The Data controls path still matches |
| 3 | **Claude Free** (fallback 2, 18+) | Paste the prompt | The Artifact preview runs and the button works. The Privacy path still matches |
| 3a | **Week 1 tool decision: Gemini Canvas vs Claude Artifacts** | On free accounts, build the **week 1 home page** (the week 1 lab's prompt) and a **week 2 game** from the [game menu](../weeks/02-prompting-and-save-points/game-menu.md) in Gemini Canvas, which now runs on Gemini's smallest model by default, and in Claude Artifacts. Note where each stalls, truncates or loses track of a long build | You've decided which tool leads week 1 for this cohort (Claude only if every student is 18+), and TOOLS.md's stack table and week 1 materials say so |

### App builders (week 3)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 4 | **Google AI Studio Build** (primary, 18+) | Build mode → paste the prompt, then "Add a counter showing how many times the color changed" → export to GitHub (or download a ZIP) | The app previews, the follow-up change works, and the export works **without** a billing account |
| 5 | **Bolt** (fallback 1) | Same prompts → export or download | Same as above. Note what the free-usage meter shows |
| 6 | **Lovable, v0, Replit** (fallback 2, one session each) | Sign in, send the first prompt, look for GitHub export | A free plan still exists, one prompt works, and export to GitHub is available (note if not). Check for announced pricing changes |
| 6a | **Replit, brand-new account** | Sign up with an address that has never used Replit | The new account still gets the free Starter plan and its free agent mode. If not, drop Replit from the fallback list in TOOLS.md |
| 6b | **Lovable pricing** (after 31 Oct 2026) | Read Lovable's plans page | You've recorded the free plan's new terms in TOOLS.md, or confirmed nothing changed |

### Git, Codespaces and GitHub Pages (weeks 1–4)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 7 | **GitHub web + Pages** (primary hosting, weeks 1–4) | New public repository → upload the `index.html` from test 1 → add `game/index.html` → **Settings** → **Pages** → Deploy from a branch → `main` / root | Both `https://[user].github.io/[repo]/` and `…/game/` load within a few minutes |
| 8 | **github.dev** | On that repository press `.` → edit a file → **Commit & Push** | The commit appears on github.com |
| 9 | **Codespaces** | Create a repository from the week 5 template → create a codespace → `node --version` → `python3 -m http.server 8000` → open the port → stop, then delete, the codespace | Node is 22 or newer (at least 20.12); the preview opens; stopping and deleting work. The free quota in TOOLS.md is still accurate |

### Editor and agents (weeks 4–8)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 10 | **Copilot Free in a Codespace** (primary) | In the week 5 starter's codespace: (a) **Ask** mode: "Explain what dev-server.mjs does." (b) **Agent** mode: "Add a one-line comment at the top of public/app.js that says what the file does, then run npm test and show me the output." (c) Type in a file and watch for completions. (d) Tick **Chat: Disable AI Features**, then untick it | (a) answers; (b) **edits the file, asks permission before running `npm test`, and shows real test output**, and the diff appears in Source Control; (c) grey suggestions appear; (d) chat disappears and comes back. The training setting is where [privacy-settings.md](../setup/privacy-settings.md#github-copilot) says |
| 11 | **Copilot Student** (if a TA has it) | Repeat test 10 | Same, and note any differences from Free |
| 12 | **Copilot CLI** (primary terminal agent) | Install it as the week 6 lab describes. In the week 5 starter: "Summarize this project in three bullet points. Don't change any files." | It answers, and asks permission before running any command. Note the name of any autopilot or allow-all option, so the week 6 materials can tell students never to use it |
| 13 | **Google Antigravity** (fallback 1, 18+) | Install. Set it to ask before terminal commands. Open the Be the Agent kit's folder: "Run the tests and explain which one fails and why. Don't fix it." | It runs the tests (after asking) and explains the failure. The data-collection opt-out is where [privacy-settings.md](../setup/privacy-settings.md#google-antigravity) says |
| 13a | **Antigravity's free model list** (after 2 Nov 2026) | Open the model picker on a free account | TOOLS.md lists exactly the models a free account sees, and test 13 still passes with them |
| 14 | **Antigravity CLI** (terminal fallback 1, 18+) | Same question from the terminal | It answers and asks before running commands |
| 15 | **Cline or Kilo Code + a free API** (fallback 2) | Install the extension in a codespace. Add an OpenAI-compatible provider with Groq's base URL and a key. Ask a question about the repository | A response arrives. Note the setup steps if they differ from the week 4–6 notes |
| 16 | **OpenCode + free models** (terminal fallback 2) | Install following the tool's docs; connect a free model with the key in an environment variable (not a hosted console); ask the question from test 12 | A response arrives, and it asks before editing |
| 16a | **Codex student credits** | With a test account that is eligible (a verified US or Canadian university student, on ChatGPT Free), claim the credits, install Codex CLI in a codespace, and ask the question from test 12 | The claim works without a card, and the flagship model is usable on a Free account. Only then remove "not yet tested" from TOOLS.md and mention it to students as an optional step for weeks 6–8 |

### LLM APIs (weeks 5–8)

For each provider, in a codespace of the week 5 starter: copy `.env.example` to `.env`, set `LLM_BASE_URL` and `LLM_API_KEY` for that provider, then run `npm run models`, set `LLM_MODEL` to one of the listed IDs, run `npm run dev`, and use the app.

| # | Tool (role) | Pass when |
|---|---|---|
| 17 | **Gemini API** (primary, 18+, not for EEA/UK/CH apps) | `npm run models` lists the model ID that TOOLS.md suggests, and the app returns a response with it. If `.env.example` or TOOLS.md names an older model, update them |
| 18 | **Groq** (fallback 1) | Same. This is the provider-swap drill: nothing but `.env` changed |
| 19 | **OpenRouter** (fallback 2) | Same, with a `:free` model. Note which privacy settings a free model needs ([privacy-settings.md](../setup/privacy-settings.md#groq-and-openrouter)) |
| 20 | **Cloudflare Workers AI** (fallback 2) | The app returns a response. `npm run models` may not work with every provider; if it fails, use a model ID from Cloudflare's docs and note it |
| 21 | **Ollama** (local fallback, optional) | On a laptop with enough memory, pull a small model and run the starter locally against `http://localhost:11434/v1`. The app returns a response |

### Hosting, database and security kits (weeks 5–8)

| # | Tool (role) | Script | Pass when |
|---|---|---|---|
| 22 | **Vercel Hobby** (primary for apps with a server) | Import a **personal** repository made from the week 5 template → set the three environment variables → deploy → change one variable and redeploy | The **production** URL loads and the AI feature responds; the key is nowhere in DevTools **Sources** or **Network**; the changed variable takes effect after redeploying. TOOLS.md's deployment-storage and retention limits still match |
| 23 | **Cloudflare Workers** (hosting fallback) | Deploy the page from test 1. If you'll use Cloudflare as the week 5 fallback, deploy the week 5 starter too and write down the steps | The URL loads |
| 24 | **Supabase** (primary database) | Run the [RLS Attack Lab](../weeks/07-security-and-review/rls-lab/README.md) end to end as its README describes, on an **existing** project and using the hosted attack page: `setup.sql`, then the attack page reads and writes using only the publishable key, then `fix.sql`, then the same attack fails. After 30 Oct 2026, also create a new table **without** grants and confirm the API answers "permission denied" | All three stages behave as the README says, with the grants in `setup.sql` doing what the lab expects. Note how to restore a paused project |
| 25 | **Neon or Turso** (database fallback) | Create a database and run one query in its web console | The query returns a result |
| 26 | **Secret scan and audit** | In a throwaway repository made from the capstone starter: `npm run check:secrets`. Add a scratch file containing a fake GitHub-style token (`ghp_` followed by 36 random letters and digits), commit it, delete the file in a second commit, and run the scan again. Then run `npm audit` | The first scan is clean; the second still flags the fake token **from the git history** and names the commit. `npm audit` runs (the starter's lockfile is present) |
| 27 | **Prompt-injection demo** | Follow the [injection demo README](../weeks/07-security-and-review/injection-demo/README.md) | The demo behaves as its README describes, and fits the 7-minute in-class slot |
| 28 | **Starter templates and the degit fallback** | For each template: **Use this template** into a personal account, open a codespace, run `npm test` (Node kits). Then, in a new, empty repository's codespace, run one degit command from [codespaces.md](../setup/codespaces.md#start-a-project-from-a-starter) | Tests pass, except in kits with planted bugs, which fail exactly as their READMEs say. degit copies the files. The templates match the current kits (re-run `--update` if not) |
| 29 | **Privacy click-paths** | Walk through every section of [privacy-settings.md](../setup/privacy-settings.md) | Every setting is where the page says. Fix what moved, and update the "checked" date at the top |
| 30 | **Tutor Gem** | Build the Gem ([course-tutor.md](course-tutor.md#build-it-as-a-shared-gemini-gem)). Open the Debug Clinic, pick the first bug, and ask the Gem "Just give me the fixed code" | It refuses politely, gives a first-level hint, and never shows more than a couple of lines of code |

### After the smoke test

- **Update [TOOLS.md](../TOOLS.md):** change the **Last verified** date, and fix every row that changed. Open a [tool-change issue](../.github/ISSUE_TEMPLATE/tool-change.yml) upstream so other instructors benefit.
- **If a primary tool failed,** promote fallback 1 to primary for your cohort in TOOLS.md and on your course page, and tell the TAs.
- **If you changed any kit,** run `scripts/publish-starters.sh --update [owner]` so the templates match.
- **Check the [maintenance calendar](#maintenance-calendar)** again and tell students about any date that affects them, such as a student-offer deadline.

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
- **Check Canvas** for signed safety contracts and pre-course self-assessments, and collect every student's GitHub username. Nobody should have committed a contract to a repository; if someone did, ask them to delete the repository file and submit on Canvas instead.
- **Show the usage dashboards** (Copilot and Codespaces), so students can see their allowances before they run out.

## Mid-course re-check (before week 5)

The second half of the course depends on more tools, and a lot can change in a month.

- Re-run smoke tests 10–30 above (at least the primaries: 10, 12, 17, 18, 22, 24, 26).
- Check the [maintenance calendar](#maintenance-calendar) and TOOLS.md's known upcoming changes for weeks 5–8.
- Update TOOLS.md and tell the class what changed, if anything.
- Remind students: stop unused codespaces; check their Copilot usage against the [credits budget](../TOOLS.md#credits-budget-for-the-course) before the agent weeks; a Supabase project on the free plan pauses after a period of inactivity and can be restored from its dashboard.
- If you changed a starter kit, update the templates with `scripts/publish-starters.sh --update [owner]` (see [T-6 weeks](#t-6-weeks-decide-and-set-up), step 5).

## After the course

- **Measure.** Have students retake the [self-assessment](../assessment/self-assessment.md) on Canvas and fill in a short course survey. Compare with week 0 and with walkthrough scores ([how](README.md#measuring-outcomes)).
- **Help students clean up.** Remind them to cancel student offers before they auto-renew, delete unused codespaces, revoke the API keys they made for the course, and delete Supabase projects they no longer need. Their portfolio repositories stay.
- **Clean up your own.** Revoke demo keys; delete test accounts' data and test projects.
- **Handle data properly.** Keep or delete exit tickets, surveys and grades according to your institution's retention rules.
- **Run a TA retrospective:** what to keep, cut and change.
- **Report upstream.** Open [tool-change](../.github/ISSUE_TEMPLATE/tool-change.yml) and [erratum](../.github/ISSUE_TEMPLATE/erratum.yml) issues, and share adaptations that worked ([CONTRIBUTING.md](../CONTRIBUTING.md)).
- **Prepare the next cohort:** vary the planted bugs ([answer keys](answer-keys/README.md)) and note which smoke tests failed this time.

## Maintenance calendar

Dated changes found in the October 2026 re-check ([report, Priority 5](../research/landscape-update-2026-10.md)). TOOLS.md's [known upcoming changes](../TOOLS.md#known-upcoming-changes) says *what* changes; this table says what to *do*.

| Date | Change | Action |
|---|---|---|
| 30 Oct 2026 | Supabase stops giving new tables automatic API grants in every project | Re-run the RLS lab's `setup.sql` and `fix.sql` on an existing project after this date (smoke test 24); update the week 7 notes. Teach: grant **and** enable RLS with policies together, never a bare grant to `anon` |
| 31 Oct 2026 | Lovable's current pricing ends; the ChatGPT Plus student offer closes | Move the offer to "ended" in TOOLS.md; check Lovable's new pricing in the first week of November (smoke test 6b) |
| 2 Nov 2026 | Antigravity's Free and Plus plans lose their non-Google models | Re-run smoke tests 13, 13a and 14 |
| 16 Nov 2026 | Copilot deprecates several models on Pro and higher plans | Low impact: Free and Student plans pick models automatically |
| 31 Dec 2026 | Last day to redeem Google's AI Pro/Plus student offer | Tell enrolled US students in December if it is useful to them, with the auto-renewal warning; otherwise remove it from TOOLS.md |
| End of 2026 | Supabase deprecates the legacy `anon` / `service_role` keys | Teach only publishable and secret keys; check that the week 7 lab, the attack page and the capstone starter don't present the legacy keys as normal |
| 17–20 Feb 2027 | SIGCSE TS 2027: abstracts for new papers on novices verifying AI code become public ([SIGCSE](https://2027.sigcse-ts.acm.org/track/sigcse-ts-2027-Papers-1)) | Re-read them for evidence on novice verification before the next design pass |
| 22 Mar 2027 | Firebase Studio shuts down and deletes data | Already under "Do not use" in TOOLS.md |
| 7 May 2027 | Earliest shutdown of the older Gemini Flash-Lite model | Make sure TOOLS.md and the starters' `.env.example` point to the model ID TOOLS.md suggests (smoke test 17) |
| One week before each cohort, and mid-course | Anything | Full smoke test ([T-1 week](#t-1-week-smoke-test), [mid-course re-check](#mid-course-re-check-before-week-5)) |
| Ongoing | Stack Overflow's full 2026 dataset; the rest of CMU's fall report; Stanford's open-source-contribution rubric; Michigan's post-pivot project spec | Check before the next design pass |

## Copyable checklist

Copy this table into an issue, a document or a spreadsheet, and tick items off as you go.

| When | Task | Owner | Done |
|---|---|---|---|
| T-6 weeks | Decide age range and region; choose the stack ([variants.md](variants.md)) | | ☐ |
| T-6 weeks | Check institutional AI, privacy and accessibility policies | | ☐ |
| T-6 weeks | Set up Canvas assignments for all graded personal writing (contract, self-assessments, reflections, AI journal, AI-use rules, peer reviews, pair statements) | | ☐ |
| T-6 weeks | Fork or copy the repository; replace the repository path; update TOOLS.md for the cohort; check the hosted RLS attack page loads | | ☐ |
| T-6 weeks | Vary Debug Clinic bugs (optional); run `scripts/publish-starters.sh [owner]`; list template links on the course page | | ☐ |
| T-6 weeks | Book 16 studio sessions; recruit TAs; check the network; schedule walkthrough slots and TA norming; prepare Studio B mini-lessons; note Copilot credit reset dates | | ☐ |
| T-6 weeks | Decide on GitHub Classroom or an organization (students' project repositories stay personal) | | ☐ |
| T-6 weeks | Compare course dates with the maintenance calendar and TOOLS.md's known upcoming changes | | ☐ |
| T-3 weeks | Send week 0 pre-work; stress GitHub Education and personal Google accounts; ask about age, region, devices, accessibility | | ☐ |
| T-3 weeks | Schedule a drop-in setup session | | ☐ |
| T-1 week | Smoke tests 1–3a: chat assistants; decide which tool leads week 1 | | ☐ |
| T-1 week | Smoke tests 4–6b: app builders, including a brand-new Replit account and Lovable's post-31-Oct pricing | | ☐ |
| T-1 week | Smoke tests 7–9: GitHub, Pages, github.dev, Codespaces | | ☐ |
| T-1 week | Smoke tests 10–16a: Copilot, Copilot CLI, fallback editors and agents, Antigravity's model list, Codex student credits | | ☐ |
| T-1 week | Smoke tests 17–21: LLM APIs | | ☐ |
| T-1 week | Smoke tests 22–28: hosting, databases (RLS lab re-run after 30 Oct), history-aware secret scan, audit, starters | | ☐ |
| T-1 week | Smoke tests 29–30: privacy click-paths; tutor Gem | | ☐ |
| T-1 week | Update TOOLS.md "Last verified" and changed rows; update templates with `--update` if kits changed; open upstream issues | | ☐ |
| Week 1 | Tool medic assigned; account problems fixed | | ☐ |
| Week 1 | Privacy settings pair check; safety contracts and self-assessments on Canvas; usernames collected; usage dashboards shown | | ☐ |
| Before week 5 | Mid-course re-check; TOOLS.md updated; students reminded about codespaces, the credits budget and Supabase pausing | | ☐ |
| After | Post-course self-assessment and survey; compare with week 0 | | ☐ |
| After | Students reminded to cancel offers, delete codespaces, revoke keys | | ☐ |
| After | Own keys revoked; test data deleted; records handled per retention rules | | ☐ |
| After | TA retrospective; upstream issues opened; bugs varied for next cohort | | ☐ |
