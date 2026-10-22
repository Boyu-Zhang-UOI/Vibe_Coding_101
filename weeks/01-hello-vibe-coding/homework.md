# Week 1 Homework

> **Due before next week's Studio A** (default 11:59 pm the night before). **Core:** about 9 hours, required. **Stretch:** optional.
> Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)).
> "On Canvas" means the course's learning management system, not Gemini's Canvas tool.

## Deliverables checklist

- [ ] My live site at `https://[your-username].github.io` has a **Projects** section linking to `game/` (task 1).
- [ ] My repository shows at least **five new commits** this week with clear messages, including one change made by hand and one accessibility fix (tasks 1–2).
- [ ] `PROMPTS.md` has **5+ entries**, plus "What I wrote or decided myself" and "What I'd prompt differently next time" (task 3).
- [ ] On Canvas: my **AI Fluency response** (🔴 AI off) (task 4).
- [ ] On Canvas: the signed **safety contract** and my **pre-course self-assessment**; my **GitHub Education** application is sent (task 5).
- [ ] On Canvas: my **personal AI-use rules v1** (🔴 AI off; written in Studio B, Part B5).
- [ ] On Canvas: my **weekly reflection** (🔴 AI off) (task 6).

## Time plan

| Task | Kind | Time |
|---|---|---|
| 1. Improve your page and add a Projects section | Project time | 3 h |
| 2. Fix your accessibility list | Project time | 30 min |
| 3. Grow `PROMPTS.md` to 5+ entries | Journal | 45 min |
| 4. AI fluency pre-work | Homework | 3 h 30 min |
| 5. Week 0 tasks for week 1 | Homework | 40 min |
| 6. Weekly reflection | Journal | 30 min |
| **Total** | | **about 9 h** |

Before next week's Studio A, also do the short "Before Studio A" list on the [week 2 page](../02-prompting-and-save-points/README.md#before-studio-a) (up to 1 hour, including picking two games).

## Core

### 1. Improve your page and add a Projects section (3 h)

🟢 AI on (one change by hand, 🔴 AI off).

Next week you'll build a game that lives at `https://[your-username].github.io/game/`. Your home page needs somewhere to link to it.

1. **Get your current code.** On GitHub, open `index.html` in your repository and click **Copy raw file** (two overlapping squares, top right of the code). This version includes your hand-made changes; a chat may not.
2. Start a new chat in your assistant and send this. It uses the third habit: say what works first.

   ```text
   Goal: Add a "Projects" section to my home page.
   Context: Here is my current page: [paste the complete code]. Next week I'll build a small browser game that will live in a folder called game/ on my site. These parts work and must stay exactly as they are: [list them, e.g. the heading, colors, button, the sections I added].
   Constraints: Match the existing style. Don't change the other sections. The link must be a normal link to "game/" with no JavaScript. Give me the complete file in one code block.
   Done when: A "Projects" section shows one item titled "My first game (coming in week 2)" that links to game/, and everything else looks and works as before.
   ```

3. **Check the preview, then publish.** On GitHub, open `index.html`, click the **pencil** icon (**Edit this file**), select all the old code (**Ctrl+A** / **Cmd+A**), paste the new code, click **Commit changes…**, write the message `Add Projects section`, and commit.
4. Make **at least three more improvements** of your choice (ideas: [customization prompts](prompt-starters.md#customization-prompts)). Publish each one the same way, with **one commit per improvement** and a message that says what changed, such as `Make layout one column on phones`. Use each of the [three habits](lab.md#part-b2--practice-the-three-habits-25-min) at least once this week.
5. Make at least **one more change by hand** (🔴 AI off), directly in GitHub's editor, and commit it.

> [!NOTE]
> The Projects link shows a 404 page until next week. That's expected.

✅ **Checkpoint:** your live site shows a Projects section, and the repository's commit history (click **Commits**, with the clock icon, on the repository page) shows at least five commits from this week with clear messages.

### 2. Fix your accessibility list (30 min)

🟢 AI on.

Go back to the list of problems from Studio B ([Part B3](lab.md#part-b3--check-your-pages-accessibility-25-min)). Fix the rest, one problem per commit, with messages like `Fix accessibility: add lang attribute`. Then repeat the keyboard test and the 200% zoom test on your live page. Note in `PROMPTS.md` anything you decided not to fix, and why.

✅ **Checkpoint:** you can reach and press your button with the keyboard alone, and nothing overlaps at 200% zoom.

### 3. Grow `PROMPTS.md` to at least 5 entries (45 min)

🟢 AI on for formatting · 🔴 AI off for "What I wrote or decided myself".

Add entries for the prompts that mattered: the Projects prompt, your best and worst customization prompts, and any time you had to fix something. For each, say what happened and what you checked yourself. In at least one entry, say which of the three habits you used and what it changed. Update **What I wrote or decided myself** with your hand-made changes, and fill in **What I'd prompt differently next time**. Commit with the message `Update PROMPTS.md`.

### 4. AI fluency pre-work (3 h 30 min)

🟢 AI on for the course's own exercises · 🔴 AI off for your response.

**What:** Anthropic's free online course **[AI Fluency: Framework and foundations](https://academy.claude.com/courses/ai-fluency-framework-foundations)**, or an equivalent your instructor names. It is about working well with *any* AI tool, not only Anthropic's. It names four skills: **Delegation** (deciding what to hand to an AI), **Description** (telling it clearly what you want), **Discernment** (judging what comes back) and **Diligence** (taking responsibility for what you do with it). It's also in the [Reading List](../../resources/reading-list.md).

1. Open the course and click **Start course**. You don't need an account to start; signing in only saves your progress, and you don't need a Claude account at all.
2. Work through the lessons. The academy lists about 4 hours; budget about 3 by skipping the optional "additional activities" at the end. The quiz is optional too.
3. **Your response** (30 min, 🔴 AI off, 150–250 words, on Canvas):
   - Pick **two** of the four skills. For each, describe one moment from building your page this week when you used it, or should have.
   - Name one task in this course you would **not** hand to an AI, and say why.
   - Did the course change any of your personal AI-use rules from Studio B? If so, say which one and how. (You can update the rules on Canvas.)

### 5. Week 0 tasks for week 1 (40 min)

These are listed under [During week 1](../../setup/README.md#during-week-1) in the week 0 pre-work; the details are there. They appear here so they're on your checklist.

- **Sign the [safety contract](../../setup/safety-contract.md) on Canvas** (15 min). Read each rule and its plain-English summary. You sign on Canvas, not in a repository.
- **Take the [pre-course self-assessment](../../assessment/self-assessment.md) on Canvas** (15 min, 🔴 AI off). There are no wrong answers. You'll take it again at the end of the course to see how far you came.
- **Apply for GitHub Education** (10 min). Approval can take a few days, so apply now.

### 6. Weekly reflection (30 min)

🔴 AI off.

Answer the four questions in the [reflection template](../../templates/REFLECTION.md) in 150–300 words, **in your own words, without AI**. Name specific moments: a prompt, a surprise in the preview, a line you changed. Submit it on **Canvas**, not in your repository: reflections are personal writing ([Privacy of your work](../../assessment/README.md#privacy-of-your-work)).

## Stretch (optional)

### Same prompt, second assistant

Send your first prompt from the lab, unchanged, to a second assistant from the [Tool Handout](../../TOOLS.md). Compare the two results:

| Question | Assistant 1 | Assistant 2 |
|---|---|---|
| Did it meet every "Done when" item? | | |
| What did it add that you didn't ask for? | | |
| Roughly how many lines of code? | | |
| Which would you rather change by hand? Why? | | |

Add the comparison to `PROMPTS.md`.

### Dark-mode toggle

```text
Goal: Add a light/dark mode toggle to my page.
Context: Here is my current page: [paste the complete code]. These parts work and must stay the same: [list them].
Constraints: Plain CSS and JavaScript, no libraries. Start in whatever mode the visitor's device prefers. Keep text readable in both modes.
Done when: A clearly labeled button switches between light and dark; every section looks right in both; the button can be used with the keyboard (Tab to it, then Enter).
```

### Two minutes with a screen reader

Turn on your device's screen reader (Studio B, [Part B3](lab.md#part-b3--check-your-pages-accessibility-25-min), step 6) and listen to your page from the top. Does it read your headings and button in a sensible order? Fix one thing that sounded wrong, and log it in `PROMPTS.md`.

---

> [!IMPORTANT]
> **Minimum to keep up:** your page is live at `https://[your-username].github.io` with a Projects section that links to `game/`. Week 2 builds the game in the same repository. If it isn't live yet, ask your instructor for help before Studio A.
