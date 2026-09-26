# Week 1 Homework

> **Due:** before the week 2 studio. **Core:** about 3 hours, required. **Stretch:** optional.
> Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)).

## Core (about 3 hours)

### 1. Improve your page and add a Projects section (75 min) 🟢

Next week you'll build a game that lives at `https://<your-username>.github.io/game/`. Your home page needs somewhere to link to it.

1. Get your **current** code: on GitHub, open `index.html` in your repository and click the **copy** icon (Copy raw file). This version includes your hand-made changes; the chat may not.
2. In your assistant, start a new chat (or continue the old one) and send:

   ```text
   Goal: Add a "Projects" section to my home page.
   Context: Here is my current page: [paste the complete code]. Next week I'll build a small browser game that will live in a folder called game/ on my site.
   Constraints: Match the existing style. Don't change the other sections. The link must be a normal link to "game/" with no JavaScript.
   Done when: A "Projects" section shows one item titled "My first game (coming in week 2)" that links to game/.
   ```

3. Check the preview. Then publish it: on GitHub, open `index.html`, click the **pencil** icon (Edit this file), select all the old code (Ctrl+A / Cmd+A), paste the new code, click **Commit changes…**, write the message `Add Projects section`, and commit.
4. Make **at least three more improvements** of your choice (ideas: [prompt-starters.md](prompt-starters.md#customization-prompts)). Publish each one the same way, with **one commit per improvement** and a message that says what changed, such as `Make layout one column on phones`.
5. Make at least **one more change by hand** (🔴 no AI), directly in GitHub's editor, and commit it.

> [!NOTE]
> The Projects link shows a 404 page until next week. That's expected.

✅ **Checkpoint:** your live site shows a Projects section, and the repository's commit history (click the clock icon with the word **Commits** on the repository page) shows at least five commits with clear messages.

### 2. Grow `PROMPTS.md` to at least 5 entries (20 min) 🟢

Add entries for the prompts that mattered: the Projects prompt, your best and worst customization prompts, and any time you had to fix something. For each, say what happened and what you checked yourself. Update **What I wrote or decided myself** with your hand-made changes, and fill in **What I'd prompt differently next time**. Commit with the message `Update PROMPTS.md`.

### 3. Weekly reflection (30 min) 🔴

Copy [templates/REFLECTION.md](../../templates/REFLECTION.md) and answer the four questions in 150–300 words. **Write it yourself, without AI.** Name specific moments: a prompt, a surprise in the preview, a line you changed.

Submit it where your instructor asks. If you have no other instructions, add it to your repository as `reflections/week-1.md` (type `reflections/week-1.md` as the file name in **Add file → Create new file**; the `/` creates the folder). Remember the repository is public.

### 4. Pre-course self-assessment (15 min) 🔴

Complete the [self-assessment](../../assessment/self-assessment.md) honestly and without AI. There are no wrong answers. You'll take it again at the end of the course to see how far you came.

### 5. Sign the safety contract (10 min)

1. Open the [safety contract](../../setup/safety-contract.md), click **Raw**, and copy all of it.
2. In your repository, click **Add file → Create new file**, name it `SAFETY_CONTRACT.md`, and paste.
3. At the bottom, fill in the name and date. Your repository is public, so a first name or your GitHub username is fine. (Or submit it privately where your instructor asks.)
4. Commit with the message `Sign safety contract`.

### 6. Get ready for week 2 (5 min)

Skim the [week 2 game menu](../02-prompting-and-save-points/game-menu.md) and pick two games you'd like to build.

## Stretch (optional)

### Same prompt, second assistant

Send your first prompt from the lab, unchanged, to a second assistant from [TOOLS.md](../../TOOLS.md). Compare the two results:

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
Context: Here is my current page: [paste the complete code].
Constraints: Plain CSS and JavaScript, no libraries. Start in whatever mode the visitor's device prefers. Keep text readable in both modes.
Done when: A clearly labeled button switches between light and dark; every section looks right in both; the button can be used with the keyboard (Tab to it, then Enter).
```

### Accessibility check

Accessibility means people using screen readers, keyboards or zoom can use your page too.

1. **Keyboard:** click in the address bar, then press **Tab** repeatedly. Can you reach and use your button? Can you see where you are?
2. **Zoom:** press Ctrl/Cmd and **+** until the page is at 200%. Does anything overlap or disappear?
3. **Ask for a review:**

   ```text
   Goal: Review my page for accessibility problems.
   Context: Here is my page: [paste the complete code]. I'm a beginner.
   Constraints: Don't rewrite the page. List at most five problems, most important first, each with the line it's on and a one-sentence fix.
   Done when: I have a short list I can check and fix one at a time.
   ```

4. Fix at least one problem, commit it, and log it in `PROMPTS.md`.

## Deliverables checklist

- [ ] My live site at `https://<your-username>.github.io` has a **Projects** section linking to `game/`.
- [ ] My repository shows at least **five commits** with clear messages, including at least one hand-made change.
- [ ] `PROMPTS.md` has **5+ entries**, plus "What I wrote or decided myself" and "What I'd prompt differently next time".
- [ ] My reflection is written (🔴 no AI) and submitted.
- [ ] My self-assessment is complete.
- [ ] `SAFETY_CONTRACT.md` is signed and committed (or submitted privately).
- [ ] I've picked two candidate games for week 2.
