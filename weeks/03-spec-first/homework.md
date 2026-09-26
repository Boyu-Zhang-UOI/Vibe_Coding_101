# Week 3 Homework — Project 1, version 1

**Core:** about 3 hours, required · **Stretch:** optional · **Due:** before the week 4 studio

This week you turn your spec into a working first version that anyone can open on the web. It doesn't have to be finished: **version 1 must pass at least half of your MUST criteria**, and your README must say honestly which ones pass. Project 1 is final at the end of week 4 ([project brief](../../projects/project-1-useful-tool.md), [rubric](../../assessment/rubrics.md#project-1)).

---

## Core (about 3 hours)

### 1. Build version 1 with the Safe Loop (about 2 hours)

Continue from lab Part 5 ([lab.md](lab.md#at-home-build-version-1-with-the-safe-loop)): a fresh chat, your SPEC.md pasted in, a plan you have edited, then **one step at a time**.

For every step:

1. **Describe/Step:** ask for one step of your plan. Name the criteria it covers.
2. **Test:** commit through github.dev, open your GitHub Pages site, and try the criteria for that step, plus one edge case.
3. **Read:** read what changed. Ask "Explain these lines to a beginner" about anything you can't explain.
4. **Commit:** one commit per working step, with a message that says what changed, for example `Add delete with confirm (AC8)`.

Stay inside your constraints: three files (`index.html`, `style.css`, `app.js`), no frameworks, no libraries, no build step, data in localStorage.

> [!TIP]
> Start with the criteria that make the app usable at all (adding and showing items, then saving across a reload), and leave the polish until later. If two attempts to fix the same problem fail, use **the two-strikes rule**: stop, start a fresh chat, and describe what you tried, the exact error and what you expected ([Safe Loop](../../resources/safe-loop.md)).

✅ **Checkpoint:** your Pages site (`https://<your-username>.github.io/<repo-name>/`) opens on your phone and your laptop, and at least half of your MUST criteria pass there, not just in a chat preview.

### 2. Write your README with an acceptance table (20 min)

Replace the README GitHub created with one based on [templates/PROJECT_README.md](../../templates/PROJECT_README.md). For a static site like this one:

- Put your **live site** link at the top.
- In **How it works**, fill the table with `index.html` (page structure), `style.css` (appearance), `app.js` (behavior) and "localStorage in your browser" (data). Write "n/a, single-user app; data stays in your browser" for authorization.
- Replace **Run it yourself** with: "Open the live site." (From week 4 you can add: in a Codespace, run `python3 -m http.server 8000` and open the forwarded port.)
- In **Status against the spec**, list **every** criterion from SPEC.md, marked ✅ passes, ⚠️ partly (say what fails), or ☐ not yet.
- Delete template sections that don't apply yet (demo video, SECURITY_CHECKLIST link).

### 3. Update PROMPTS.md (15 min)

In the `PROMPTS.md` you started in class ([template](../../templates/PROMPTS.md)), log at least:

- the AI critique of your spec, and what you changed because of it;
- the builder prompt, and one thing each builder got wrong;
- the Describe/Plan prompt for your plain version, and how you edited the plan;
- one step prompt that needed fixing, and what you checked yourself.

Fill in **What I wrote or decided myself**. Your spec counts.

### 4. Finish your scorecard and write the bake-off reflection (30 min)

1. Commit your completed [bake-off scorecard](bake-off-scorecard.md) to your repository as `docs/bake-off-scorecard.md`, including the "My plain version" column.
2. Write your reflection in `reflections/week-3.md` (in github.dev, type the folder name before the file name to create the folder). Use the four headings of [templates/REFLECTION.md](../../templates/REFLECTION.md), and make sure your answers cover the scorecard's **Verdict** questions.

> 🔴 **Write the reflection yourself, without AI.** 150–300 words, graded on specifics: quote a criterion, a builder's file name, a number from a usage dashboard, the moment something surprised you.

---

## Deliverables checklist

Submit your repository link (and your Pages link) the way your instructor asks.

- [ ] A public repository for Project 1 with `SPEC.md` (revised after peer and AI review)
- [ ] `index.html`, `style.css` and `app.js` in the top folder, with no frameworks and no build step
- [ ] GitHub Pages site live, passing at least half of your MUST criteria
- [ ] `README.md` with a live link, a "How it works" table and an acceptance table covering every criterion
- [ ] `PROMPTS.md` with at least four entries and "What I wrote or decided myself"
- [ ] `docs/bake-off-scorecard.md` completed for two builders and your plain version
- [ ] `reflections/week-3.md` written without AI
- [ ] Several small commits with clear messages, not one giant upload (the final version needs at least 6)

---

## Stretch (optional)

### A. Deploy a builder's version and compare it with yours (about 1 hour)

1. In the builder you liked best, export the project to GitHub (AI Studio, Lovable and v0 offer GitHub sync; check what Bolt offers). Let it create a **new** repository in your **personal** account.
2. Before you make that repository public, look through its files. If you see a `.env` file or anything that looks like a key, keep the repository private and ask your instructor.
3. Go to [vercel.com](https://vercel.com), sign in with GitHub, choose **Add New → Project**, import the repository and click **Deploy**. Vercel usually detects the framework on its own. (Vercel's free Hobby plan can't deploy repositories owned by a GitHub organization, so use your personal account. See [TOOLS.md](../../TOOLS.md).)
4. Compare it with your plain version, and add your answers to the bottom of `docs/bake-off-scorecard.md`:

| Question | Builder version | My plain version |
|---|---|---|
| Number of files (ignore images) | | |
| Number of libraries in `package.json` | | 0 |
| Lines in the main logic file | | |
| Can you find where data is saved in under 2 minutes? | | |
| Pick one function. Can you explain it line by line? | | |
| Which acceptance criteria pass on the live site? | | |

Write 5–8 sentences: which version would you rather debug next week with the AI switched off, and why?

### B. Tighten your spec

Add one criterion for each bug you found while building, in **WHEN … THE APP SHALL …** form. Commit the changes to SPEC.md separately, with a message saying why.

### C. Get ahead on week 4

Read [resources/web-basics.md](../../resources/web-basics.md) and find three things in your own `app.js`: a variable, a function, and an event listener (`addEventListener`).
