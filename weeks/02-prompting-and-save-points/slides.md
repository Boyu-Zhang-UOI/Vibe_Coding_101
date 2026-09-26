---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 2"
footer: "CC BY 4.0"
---

# Prompting & Save Points

Week 2: prompts are directions; commits are save points

<!--
Speaker notes (about 30 seconds).
Last week you vibe-coded a page and published it. This week you learn the two habits that make everything after it possible: giving the AI clear directions, and saving your work so a bad change can't hurt you.
Then you'll build a game in one hour.
-->

---

## Last week → this week

**Week 1:** describe → generate → run → customize

**Week 2:** the full **Safe Loop**

Describe → Plan → Step → Test → Read → **Commit**

<!--
Speaker notes (about 1 minute).
Hand out or point to the printed Safe Loop card (resources/safe-loop.md). Today every step of it gets used. The two new ones are Plan (ask for a plan before code) and Commit (make a save point).
-->

---

## A prompt is a work order

"make a game"

vs.

a request a stranger could finish **without asking you anything**

<!--
Speaker notes (about 1 minute).
Imagine handing a job to a talented contractor who has never met you and can't ask questions. "Make a game" gets you something. Is it the game you wanted? No way to know, because you never said what "done" looks like.
The AI is in exactly that position every time you send a message.
-->

---

## Four parts

| | Answers |
|---|---|
| **Goal** | What do I want? |
| **Context** | What does it need to know? |
| **Constraints** | What are the rules? |
| **Done when** | How will we both check? |

<!--
Speaker notes (about 1.5 minutes).
These four parts come from how professional AI coding guides structure prompts; OpenAI's Codex guide uses the same goal, context, constraints, done-when structure (https://learn.chatgpt.com/guides/best-practices).
"Done when" is the most important and the most often skipped. It turns "looks fine" into something you can test. It's also what you'll check in the Test step.
-->

---

## Before and after

```text
make my snake game better
```

```text
Goal: Make the snake speed up as it grows.
Context: Here is my current game/index.html: [file]
Constraints: Change only the speed. Complete file, one code block.
Done when: After every 5 foods the snake is visibly faster.
```

<!--
Speaker notes (about 1.5 minutes).
Read both aloud. Ask: what would the AI do with the first one? It might change the colors, add sound, rewrite everything. You'd have no way to tell if it "worked".
The second one is longer to write and faster overall, because you can test it in ten seconds and you know exactly what changed.
-->

---

## It only knows what's in the context

- **Can't see** your screen, files or repo
- **Doesn't know** about edits made elsewhere
- A **new chat starts from zero**

So: **paste the current file.**

<!--
Speaker notes (about 1 minute).
Callback to last week's context window. Most "the AI is being dumb" moments are really missing information: you changed the file by hand, or restored an old version, and the AI is still working from its own memory of the file.
Rule of thumb for today: every step prompt includes the complete current file, unless you're in the same chat and nothing has changed since its last answer.
-->

---

## What to paste when something breaks

1. What you **did**
2. What you **expected**
3. What **actually happened** (exact error text)
4. The **current code**

<!--
Speaker notes (about 1 minute).
"It doesn't work" is the weakest possible bug report. The AI then guesses, often by rewriting large parts of the file, which creates new bugs.
The four items on the slide are what any helper, human or AI, needs.
-->

---

## Small steps beat one giant prompt

Whole program from **one prompt**: best on the first try…

…**worst** when learners later had to **change** it.

<!--
Speaker notes (about 1.5 minutes).
Kazemitabaar et al. (Koli Calling 2023) logged 33 learners using an AI code generator. Those who generated whole solutions from a single prompt got the best first-try correctness, but the lowest correctness on the later tasks where they had to modify code. Source: https://arxiv.org/abs/2309.14049
The same study found learners reached for the AI before writing any code themselves in 92% of 760 tasks.
You will always need to change your code later: fix a bug, add a feature. Small steps keep it changeable, and you understand each piece as it arrives.
-->

---

## Plan first

```text
Don't write any code yet.
Propose a plan of 5 small steps.
Each step: one visible feature, a "Done when" I can check.
```

**Then edit the plan.**

<!--
Speaker notes (about 1 minute).
Fixing a plan costs seconds. Fixing code built on a bad plan costs an hour. In the lab you'll compare the AI's plan with the sample plan in the game menu, and change at least one thing.
Common edits: make step 1 smaller (layout only), drop features you can't test, split big steps.
-->

---

## The two-strikes rule

Two failed fixes for the same problem?

1. **Stop.**
2. Go back to your last good save point
3. **Fresh chat**, better prompt

<!--
Speaker notes (about 1 minute).
Long, muddled conversations make the AI worse, not better: the context fills up with failed attempts. After two misses, a fresh chat with your working code and a precise description almost always beats "still broken, try again" number three.
Vendor guides give the same advice; Anthropic's Claude Code best practices say that after two failed corrections you should clear the context and write a better prompt (https://code.claude.com/docs/en/best-practices).
-->

---

## Git = save points

Like a video game:

- **Save** before the boss fight
- **Reload** when it goes wrong
- Your saves are **named**

<!--
Speaker notes (about 1 minute).
Git is the tool that tracks every version of your project. GitHub stores your git projects online. Every game you've played with save slots works the same way.
The difference from "Undo": undo is one long chain you can lose. Save points are named, permanent, and you can jump back to any of them.
-->

---

## The words

| | |
|---|---|
| **Repository** | Your project folder, tracked |
| **Commit** | One save point |
| **Commit message** | Its name |
| **History** | All save points, newest first |

<!--
Speaker notes (about 1 minute).
You already made commits last week: every time you clicked "Commit changes" on GitHub. Today you'll make one after every working step of your game.
Your commit messages become your history's table of contents. "Step 3: snake grows when it eats" is useful at 11 p.m. "update" is not.
-->

---

## Diff: what changed?

```diff
- let speed = 150;
+ let speed = 150 - score * 5;
```

Red = removed. Green = added.

**Read it before you commit.**

<!--
Speaker notes (about 1 minute).
A diff shows exactly what changed between two versions. In github.dev, click a changed file in Source Control to see it.
This is the Read step. You don't need to understand every line yet. Ask: is the change about the size I expected? Did it touch things I didn't ask about? If yes, ask the AI why before you commit.
-->

---

## Going back

History → the last good version → copy it → commit it again

`Restore working version from 4f2a9c1`

Nothing is erased. That's what **`git revert`** does.

<!--
Speaker notes (about 1.5 minutes).
Walk through the path briefly; the lab has exact clicks. The key idea: you don't delete the bad commit. You add a new commit that puts the file back. History stays honest, and you can still look at the broken version later.
git revert is the real command for this; you'll use it in week 4 in Codespaces. Today we do it by hand on github.com so you see what it means.
This is the moment students remember: you'll break your game on purpose at step 3 and bring it back.
-->

---

## github.dev: press "."

On your repository page, press the **period** key.

VS Code opens **in your browser**, editing your repo.

<!--
Speaker notes (about 1 minute).
Demo it live: open your repo, press ".", show Explorer, a file, the Source Control panel and the Commit & Push button.
github.dev can't run code (no terminal); that's Codespaces, in week 4. It's perfect for editing, reading diffs and committing.
-->

---

## Comparing two models

Same prompt → two assistants → judge against **your** "Done when"

Not "which looks cooler?", but **"which meets the spec, and which can I explain?"**

<!--
Speaker notes (about 1 minute).
At step 4 you'll send one prompt to two assistants. Test both. Don't trust either one's claim that it's done.
The point isn't to crown a winner model; results change monthly. The point is that you are the judge, and "Done when" is your measuring stick.
-->

---

## Today's lab: Game in an Hour

1. Plan 5 steps; **edit the plan**
2. Step → test → read → **commit**
3. Step 3: **break it**, go back
4. Two models, one prompt
5. 🔴 Explain a classmate's function

<!--
Speaker notes (about 30 seconds).
The timer is 60 minutes and it's real. A working three-step game with good commits beats a broken five-step game. Game ideas and sample plans are in game-menu.md.
-->

---

## Homework (about 3 hours)

- **Finish** the game; link it from your home page
- `PROMPTS.md` with four-part prompts
- **Prompt makeover**: rewrite 4 weak prompts
- 🔴 Reflection, written **without AI**

<!--
Speaker notes (about 30 seconds).
Details in homework.md. The prompt makeover is done by you, not the AI: the skill is writing the prompt. Stretch goals include a high score that survives a reload, sound, touch controls and a second level.
-->
