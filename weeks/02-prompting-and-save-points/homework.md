# Week 2 Homework

> **Due before next week's Studio A** (default 11:59 pm the night before). **Core:** about 9 hours, required. **Stretch:** optional.
> Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)).
> "On Canvas" means the course's learning management system, not Gemini's Canvas tool.

Use the [Safe Loop](../../resources/safe-loop.md) for every change: Describe → Plan → Step → Test → Read → Commit.

## Deliverables checklist

- [ ] My game works at `https://[your-username].github.io/game/` through every step of my plan (or I've recorded the blocker in `PROMPTS.md`), and my home page links to it by name (task 1).
- [ ] My game has **one more feature**, planned first and built in **at least three commits**; each AI-helped commit ends with an `Assisted-by:` line (task 2).
- [ ] My game's **History** shows the Studio B break and restore, and my **restore drill** (task 3).
- [ ] `prompt-makeover.md` in my home-page repository has my four rewrites (🔴 AI off) and the result of testing one (task 4).
- [ ] `PROMPTS.md` has this week's entries in four-part form, including the model comparison and a teach-back for each feature commit (task 6).
- [ ] On Canvas: my **weekly reflection** (🔴 AI off), including the paragraph on the reading (tasks 5 and 7).

## Time plan

| Task | Kind | Time |
|---|---|---|
| 1. Finish your game and play-test it | Project time | 3 h |
| 2. One more feature in three save points | Project time | 2 h 30 min |
| 3. Restore drill | Homework | 30 min |
| 4. Prompt makeover | Homework | 1 h |
| 5. Reading | Homework | 30 min |
| 6. `PROMPTS.md` | Journal | 45 min |
| 7. Weekly reflection | Journal | 30 min |
| **Total** | | **about 9 h** |

Before next week's Studio A, also do the "Before Studio A" list on the [week 3 page](../03-spec-first/README.md) (up to 1 hour).

## Core

### 1. Finish your game and play-test it (3 h)

🟢 AI on.

1. Pick up where you stopped. For each remaining step of your plan: send one step prompt with your **current** file pasted in, test it against its "Done when", read the diff in github.dev, and commit with a clear message ending in an `Assisted-by:` line.
2. Test **three edge cases** and fix what breaks. Ideas: restart twice in a row; press keys that aren't controls; make the window very narrow; click very fast; lose on purpose in the first second.
3. Ask someone else to play it for two minutes without help. Write down the first thing that confused them, and fix it.
4. Check that the **Projects** link on your home page shows your game's name and opens it.

✅ **Checkpoint:** `https://[your-username].github.io/game/` works, your home page links to it, and the file's **History** has one clear commit per working step.

### 2. One more feature in three save points (2 h 30 min)

🟢 AI on · 🔴 AI off for your "Done when" and your teach-backs.

Add **one** feature your game doesn't have yet. Ideas:

- **A high score that survives a reload.** **localStorage** is a small storage space the browser keeps for your site on this device. It survives reloads, but other people and other devices can't see it.
- **Sound effects**, generated in code (the browser's Web Audio API, no sound files), with a mute button.
- **Touch controls** so the game works on your phone.
- **A second level** that starts when level 1 is won.
- **Pause and resume**, or a **difficulty** setting.

Work in this order:

1. **[Check first](../../resources/safe-loop.md#check-first).** Before you ask the AI anything, write the feature's "Done when" yourself in `PROMPTS.md`, as things you will try by hand: what would someone do, and see, to know it works? (You may have started this in Studio B, Part B7.)
2. **Plan.** Ask for a plan of three small steps, each with its own "Done when". Paste your complete current file. Edit the plan until each step can be tested in a minute and the whole plan meets *your* "Done when".
3. **Build each step** with the Safe Loop: step prompt, test, read the diff.
4. **[Teach back](../../resources/safe-loop.md#teach-back) before each commit.** In `PROMPTS.md`, write 2–3 sentences in your own words (🔴 AI off): what changed in the code, why it works, and what you'd look at first if it broke. If you can't, you're not ready to commit: ask the AI to explain the diff, read it again, then write it yourself.
5. **Commit** each working step, ending the message with `Assisted-by: [tool]`.

✅ **Checkpoint:** the feature meets the "Done when" you wrote first, in at least three commits, each with a teach-back in `PROMPTS.md`.

### 3. Restore drill (30 min)

🔴 AI off.

Going back to a working version is one of the [six skills you must show without AI](../../resources/without-ai-skills.md), and you'll be asked to do it in your first oral walkthrough. Practice it once more, **without the lab open**:

1. Break your game or your home page on purpose (delete a `>` or a `}` by hand) and commit it as `Experiment: restore drill`.
2. Restore the last working version from the file's **History**, as a new commit named `Restore working version from [hash]`.
3. Check the live page, then close and reopen github.dev.

In `PROMPTS.md`, write the hash you restored from and one step you had to look up, if any.

### 4. Prompt makeover (1 h)

🔴 AI off for the rewrites · 🟢 AI on for testing one.

1. Create `prompt-makeover.md` in your home-page repository. Copy in your rewrite of prompt **A** from Studio B ([Part B5](lab.md#part-b5--prompt-makeover-workshop-15-min)), improved with your neighbor's suggestion.
2. Rewrite prompts **B, C and D** from the same table, in four parts, **yourself, without AI**. You may invent reasonable details.
3. Check each rewrite against the four questions in Part B5.
4. **Test one** (🟢 AI on): send one of your rewrites to an assistant. In two sentences under that rewrite, say whether the result met your "Done when", and what you'd change in the prompt next time.
5. Commit with a message such as `Add prompt makeover`.

### 5. Reading (30 min)

Read Simon Willison's ["Not all AI-assisted programming is vibe coding (but vibe coding rocks)"](https://simonwillison.net/2025/Mar/19/vibe-coding/) (about 20 minutes). It's the post behind the course's golden rule. Then add a short paragraph to your reflection (task 7): in your own words, what is his golden rule, and describe one moment this week when you followed it or broke it.

### 6. `PROMPTS.md` (45 min)

🟢 AI on for formatting · 🔴 AI off for "What I wrote or decided myself" and the teach-backs.

Add this week's entries, with the prompts written in four-part form (**Goal · Context · Constraints · Done when**):

- your plan prompt, and how you changed the plan;
- at least three step prompts, including one that failed and what you did next;
- the break and restore from Studio B, with the hash you restored from;
- your model comparison: which assistant won and why (the table from Part B3);
- your feature: the "Done when" you wrote first, the plan, and a teach-back for each commit;
- your restore drill.

Update **What I wrote or decided myself** and **What I'd prompt differently next time**. Commit with a clear message.

### 7. Weekly reflection (30 min)

🔴 AI off.

Answer the four questions in the [reflection template](../../templates/REFLECTION.md) in 150–300 words, plus the reading paragraph from task 5, **without AI**. Good moments to write about: the second you broke your game on purpose, the restore, or a difference between the two models' answers. Submit it on **Canvas**, not in your repository ([Privacy of your work](../../assessment/README.md#privacy-of-your-work)).

## Stretch (optional)

Each of these is a small Safe Loop of its own. Commit before you start and after each working step, with `Assisted-by:` lines, and log your prompts in `PROMPTS.md`.

- **A second feature** from the list in task 2, planned and built the same way.
- **A ★★★ Hard game** from the [game menu](game-menu.md), as a second game in `game2/index.html`, linked from your Projects section.
- **Read the study behind "small steps":** [Kazemitabaar et al. (Koli Calling 2023)](https://arxiv.org/abs/2309.14049). Read the abstract and the conclusion. Does it match what happened to you this week?

---

> [!IMPORTANT]
> **Minimum to keep up:** your game is at `/game/` with at least three working-step commits, and you can restore an earlier version of a file from its History. Week 3 starts a new project in a new repository and uses the same commit habits from the first step. If either isn't working, ask your instructor for help before Studio A.
