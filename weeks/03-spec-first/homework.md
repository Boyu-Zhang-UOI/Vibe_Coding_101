# Week 3 Homework — Project 1, version 1

**Due before next week's Studio A** (week 4; default 11:59 pm the night before) · **Core:** about 9½ hours, required · **Stretch:** optional

## Deliverables checklist

In your **public Project 1 repository**:

- [ ] `SPEC.md`, revised after the peer review, the Goldfish test and the bake-off
- [ ] `index.html`, `style.css` and `app.js` in the top folder, with no frameworks and no build step
- [ ] GitHub Pages site live, passing **at least half of your MUST criteria**
- [ ] `README.md` with a live link, a "How it works" table and an acceptance table covering every criterion
- [ ] `PROMPTS.md`: the Goldfish test and what it changed, the builder prompt, the plan prompt, a check and a teach-back for each step, and "What I wrote or decided myself"
- [ ] `docs/bake-off-scorecard.md`: sections 1–5 (your builder, your partner's builder, your plain version)
- [ ] Small commits with clear messages (at least 4 so far; the final version needs at least 6)

On **Canvas** (private: never in your repository):

- [ ] Your written review of a classmate's spec (the **Week 3 spec review** assignment)
- [ ] Your **bake-off Verdict**, written without AI. This is your week 3 reflection

Submit your repository link and your GitHub Pages link on Canvas.

## Time plan

| Task | Kind | Time |
|---|---|---|
| 1. Build version 1 with the Safe Loop | Project time | about 6 h |
| 2. Revise your spec and run the Goldfish test again | Homework | 45 min |
| 3. Write your README | Homework | 45 min |
| 4. Complete `PROMPTS.md` | Journal | 30 min |
| 5. Finish the scorecard and write the Verdict | Journal | 1 h |
| 6. Finish your spec review | Homework | 30 min |
| **Total** | | **about 9½ h** |

Before next week's Studio A, also do the "Before Studio A" list on the [week 4 page](../04-read-debug-own-it/README.md) (up to 1 hour).

This version doesn't have to be finished: **version 1 must pass at least half of your MUST criteria**, and your README must say honestly which ones pass. Project 1 is final at the end of week 4 ([Project 1 brief](../../projects/project-1-useful-tool.md), [Project 1 rubric](../../assessment/rubrics.md#project-1)).

---

## Core

### 1. Build version 1 with the Safe Loop (about 6 hours)

Continue from Studio B ([lab Part 8](lab.md#part-8--start-project-1-in-a-codespace-35-min)) in your Codespace: reopen it from [github.com/codespaces](https://github.com/codespaces), start the preview with `python3 -m http.server 8000`, and keep going **one step at a time**. 🟢 AI on: your chat assistant writes the code; you check it.

For every step:

1. **Check first:** in `PROMPTS.md`, write which criteria the step covers and exactly what you'll try. Do this before you ask for the code.
2. **Step:** ask for one step of your plan.
3. **Test:** paste and save, reload the preview, run your check and one edge case. Blank page? Console first.
4. **Read and teach back:** read what changed, ask "Explain these lines to a beginner" about anything you can't explain, then write your two- or three-sentence teach-back in `PROMPTS.md`.
5. **Commit:** one commit per working step, with a message that says what changed and an `Assisted-by:` line, for example `Add delete with confirm (AC8)`. Push with **Sync Changes**.

Stay inside your constraints: three files, no frameworks, no libraries, no build step, data in localStorage. If two attempts to fix the same problem fail, use **the two-strikes rule**: stop, start a fresh chat with your spec and your current `app.js`, and describe what you tried, the exact error and what you expected ([The Safe Loop](../../resources/safe-loop.md#the-two-strikes-rule)). Stop your Codespace when you finish each session.

✅ **Checkpoint:** your Pages site (`https://[your-username].github.io/[repo-name]/`) opens on your phone and your laptop, and at least half of your MUST criteria pass **there**, not only in the preview.

### 2. Revise your spec and run the Goldfish test again (45 min)

1. Update `SPEC.md` with what the bake-off and building taught you: a criterion that two builders read differently, an edge case you found, something you moved to Out of scope. Update its "Last updated" date.
2. Run the [Goldfish test](lab.md#part-4--the-goldfish-test-20-min) again in a **brand-new** chat, with the same prompt and only your revised spec. Log the result in `PROMPTS.md` next to the first run: did it ask fewer questions? What's still unclear?
3. Fix what's still unclear, and commit `SPEC.md` with a message that says why it changed.

🟡 AI limited: you write the spec. The AI may only question it.

### 3. Write your README (45 min)

Replace the README GitHub created with one based on the [Project README template](../../templates/PROJECT_README.md). For a static site like this one:

- Put your **live site** link at the top.
- In **How it works**, fill the table with `index.html` (page structure), `style.css` (appearance), `app.js` (behavior) and "localStorage in your browser" (data). For authorization, write "n/a: single-user app; data stays in your browser".
- Replace **Run it yourself** with: "Open the live site, or in a Codespace run `python3 -m http.server 8000` and open the forwarded port."
- In **Status against the spec**, list **every** criterion from `SPEC.md`, marked ✅ passes, ⚠️ partly (say what fails) or ☐ not yet.
- Delete template sections that don't apply yet (demo video, security checklist).

### 4. Complete PROMPTS.md (30 min)

Your `PROMPTS.md` ([PROMPTS template](../../templates/PROMPTS.md)) should now hold at least:

- both Goldfish test runs, and what you changed because of them;
- what changed after the peer review (write "my review partner", not a name);
- the builder prompt, and one thing your builder got wrong;
- the Describe/Plan prompt for your plain version, and how you edited the plan;
- for each step: the check you wrote first, the teach-back, and anything you fixed or checked yourself;
- **What I wrote or decided myself.** Your spec counts.

### 5. Finish the scorecard and write the Verdict (1 hour)

1. Copy your completed [bake-off scorecard](bake-off-scorecard.md), sections 1–5, into your repository as `docs/bake-off-scorecard.md`, and fill in the "My plain version" column on your live site.
2. On Canvas, answer the four **Verdict** questions in section 6 of the scorecard. This is your week 3 reflection: 150–300 words, graded on specifics ([reflection rubric](../../assessment/rubrics.md#reflections-and-peer-reviews)). Quote a criterion, a builder's file name, a number from a usage dashboard, the moment something surprised you.

> 🔴 **AI off.** Write the Verdict yourself. It goes on Canvas, not in your repository.

### 6. Finish your spec review (30 min)

If you didn't finish it in Studio A, complete your written review on Canvas under its five headings: your prediction; every untestable criterion (by ID) and why; one missing edge case; one strength; one question for the author. Share it with the author privately. Then read the review you received and note in `PROMPTS.md` what you changed because of it. 🔴 AI off.

---

> [!IMPORTANT]
> **Minimum to keep up:** a public Project 1 repository with `SPEC.md` and an `index.html` that opens at your GitHub Pages address, even if only one criterion passes. Week 4 Studio A opens this repository in a Codespace.
>
> **Fallen behind?** Tell your instructor early. To take part in week 4 meanwhile, you can copy the [rescue starter](../../projects/rescue-starters/study-timer/), a working study timer built from the example spec, into a spare repository. Your own Project 1 can catch up, and a [grace token](../../assessment/README.md#late-work-and-grace-tokens) can buy you time.

---

## Stretch (optional)

### A. Run the other builder

Feed your spec to the builder you didn't use in the studio, with the same prompt and the same three-prompt limit, and add a column to your scorecard.

### B. Deploy a builder's version and compare it with yours (about 1 hour)

1. In the builder you used, export the project to GitHub (AI Studio, Lovable and v0 offer GitHub sync; check what Bolt offers). Let it create a **new** repository in your **personal** account.
2. Before you make that repository public, look through its files. If you see a `.env` file or anything that looks like a key, keep the repository private and ask your instructor.
3. Go to [vercel.com](https://vercel.com), sign in with GitHub, choose **Add New → Project**, import the repository and click **Deploy**. (Vercel's free Hobby plan can't deploy repositories owned by a GitHub organization, so use your personal account. See the [Tool Handout](../../TOOLS.md).)
4. Compare it with your plain version, and add your answers to the bottom of `docs/bake-off-scorecard.md`:

| Question | Builder version | My plain version |
|---|---|---|
| Number of files (ignore images) | | |
| Number of libraries in `package.json` | | 0 |
| Lines in the main logic file | | |
| Can you find where data is saved in under 2 minutes? | | |
| Pick one function. Can you explain it line by line? | | |
| Which acceptance criteria pass on the live site? | | |

### C. Get ahead on week 4

Read [How the Web Works](../../resources/web-basics.md) and find three things in your own `app.js`: a variable, a function, and an event listener (`addEventListener`).
