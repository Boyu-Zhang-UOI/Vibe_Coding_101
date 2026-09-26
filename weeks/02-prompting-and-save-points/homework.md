# Week 2 Homework

> **Due:** before the week 3 studio. **Core:** about 3 hours, required. **Stretch:** optional.
> Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)).

Use the [Safe Loop](../../resources/safe-loop.md) for every change: Describe → Plan → Step → Test → Read → Commit.

## Core (about 3 hours)

### 1. Finish your game (90 min) 🟢

1. Pick up where you stopped in the lab. For each remaining step of your plan: send one step prompt with your **current** file pasted in, test it against its "Done when", read the diff in github.dev, and commit with a clear message.
2. Finished all five steps? Plan one more feature (ask for a plan first) or polish what you have.
3. Test **three edge cases** and fix what breaks. Ideas: restart twice in a row; press keys that aren't controls; make the window very narrow; click very fast; lose on purpose in the first second.
4. Ask someone else to play it for two minutes without help. Write down the first thing that confused them, and fix it.
5. Check that the **Projects** link on your home page shows your game's name and opens it.

✅ **Checkpoint:** `https://<your-username>.github.io/game/` works, your home page links to it, and the file's **History** has one clear commit per working step.

### 2. `PROMPTS.md` (20 min) 🟢

Add entries for this week, with the prompts written in four-part form (**Goal · Context · Constraints · Done when**):

- your plan prompt, and how you changed the plan;
- at least three step prompts, including one that failed and what you did next;
- the break and restore from the lab, with the hash you restored from;
- your model comparison: which assistant won and why.

Update **What I wrote or decided myself** and **What I'd prompt differently next time**. Commit with a clear message.

### 3. Prompt makeover (40 min) 🔴 for the rewrites

Writing a good prompt is the skill, so **write these yourself, without AI**. Put your answers in a new file, `prompt-makeover.md`, in your home-page repository (or submit them where your instructor asks).

For each weak prompt below, read the situation, then rewrite the prompt in four parts. You may invent reasonable details.

**Worked example.**

- **Weak prompt:** `make my website better`
- **Situation:** your home page's text is hard to read on a phone and the sections run into each other.
- **Rewrite:**

  ```text
  Goal: Make my home page easier to read on a phone.
  Context: Here is my current index.html: [complete file]. On my phone the text is tiny and the sections run together.
  Constraints: Don't change any text or colors. CSS changes only. Give me the complete file.
  Done when: On a 375-pixel-wide screen, body text is at least 16 pixels, each section has clear space around it, and nothing scrolls sideways.
  ```

**Now you.**

| # | Weak prompt | Situation |
|---|---|---|
| A | `fix it` | In your Whack-a-mole game, the score goes up when you click an empty hole, not only when you hit a mole. You're starting a new chat. |
| B | `add a leaderboard` | You want your Pong game to show the top 5 scores. The game is one HTML file on GitHub Pages, with no server. (Hint: a leaderboard shared by everyone needs a server, which comes in week 5. What could work in this browser only?) |
| C | `make a to-do app with login, reminders, dark mode, drag and drop, sharing with friends and AI suggestions` | You want to start a project next week. (Hint: this is at least five projects. Rewrite it as a plan prompt for a first version, and say what's out of scope.) |
| D | `make it look more professional` | Your home page uses five colors and three fonts, and you'd like a calmer, cleaner look. |

**Check your rewrites.** For each one:

- [ ] It has one goal, not several.
- [ ] **Context** includes the facts the AI can't see (the current code, what happened).
- [ ] **Constraints** protect what already works.
- [ ] **Done when** could be checked by someone else in under a minute.

**Then test one** (🟢): send one of your rewrites to an assistant. In two sentences under that rewrite, say whether the result met your "Done when", and what you'd change in the prompt next time.

### 4. Weekly reflection (30 min) 🔴

Copy [templates/REFLECTION.md](../../templates/REFLECTION.md) and answer the four questions in 150–300 words, **without AI**. Good moments to write about: the second you broke your game on purpose, the restore, or a difference between the two models' answers.

Submit it the same way as last week (by default, `reflections/week-2.md` in your home-page repository).

## Stretch (optional)

Each of these is a small Safe Loop of its own. Commit before you start and after each working step. Log your prompts in `PROMPTS.md`.

### High score that survives a reload

**localStorage** is a small storage space the browser keeps for your site on this device. It survives reloads, but other people and other devices can't see it.

```text
Goal: Save the best score so it's still there after I reload the page.
Context: Here is my current game/index.html: [complete file].
Constraints: Use localStorage only. Don't change how the game plays. If nothing is saved yet, the best score is 0. Complete file, one code block.
Done when: The best score shows on screen, updates only when beaten, and is still there after a reload; in a private browser window it starts at 0.
```

### Sound

```text
Goal: Add short sound effects for scoring and for game over.
Context: Here is my current game/index.html: [complete file].
Constraints: Generate the sounds in code with the Web Audio API; no sound files. No sound plays until the player has clicked or pressed a key. Add a mute button. Complete file.
Done when: I hear a short sound when I score and a different one at game over, and the mute button silences both.
```

### Touch controls for phones

Plan first: `Don't write code yet. Propose 3 small steps to make my game playable on a phone with touch.` Edit the plan, then build it step by step. **Done when** it's playable on your own phone, and dragging during play doesn't scroll the page.

### A second level

Plan first, as in the lab: ask for a 3-step plan for a level 2 that starts when level 1 is won (faster, more obstacles, or a new layout). Build and commit each step.

## Deliverables checklist

- [ ] My game works at `https://<your-username>.github.io/game/`, and my home page links to it by name.
- [ ] The game's **History** shows one clear commit per working step, including the lab's break and restore.
- [ ] `PROMPTS.md` has this week's entries in four-part form, including the model comparison.
- [ ] `prompt-makeover.md` has my four rewrites (🔴 my own work) and the result of testing one.
- [ ] My reflection is written (🔴 no AI) and submitted.
