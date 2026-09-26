# Week 3 Lab — Spec First

**Time:** about 110 minutes of work plus a 10-minute break · **Work:** alone, with a partner for Part 3 · **AI use:** 🔴 none in Part 2 · 🟡 critique only in Part 3 · 🟢 Parts 4–5

Today you write the spec for **Project 1: A Tool I'd Actually Use**, watch two AI app builders build it, and judge them by your acceptance criteria. Then you start the version you keep: plain HTML, CSS and JavaScript in your own repository.

**You need:** your paper wireframe sketch (or paper and a pen), a Google account, a GitHub account, and sign-ins for Google AI Studio and Bolt. Open these in tabs:

- [templates/SPEC.md](../../templates/SPEC.md) (the template you'll fill in)
- [example-spec.md](example-spec.md) (a finished example)
- [bake-off-scorecard.md](bake-off-scorecard.md)
- [resources/safe-loop.md](../../resources/safe-loop.md)

> [!WARNING]
> Nothing you paste today should contain personal data: not yours, and not anyone else's. On some free tiers, including Google AI Studio's, human reviewers may read what you type ([TOOLS.md](../../TOOLS.md)). Your spec describes a tool, not a person.

---

## Part 1 — Choose your Project 1 idea (10 min)

**Why:** a tool you would really use gives you a real user to design for (you) and a reason to finish.

Project 1 has four fixed rules:

1. **Single user.** Only you use it. No sharing, no other people's accounts.
2. **Data saved in the browser** with [localStorage](../../resources/glossary.md#localstorage) (the browser's small built-in storage for one website). Nothing goes to a server.
3. **No login.**
4. **No real personal data about other people.** Use made-up names if you need any.

Pick one idea from this list, or bring your own that follows the rules.

| Idea | What it does | Good edge cases to think about |
|---|---|---|
| Habit tracker | Tick off daily habits; show a streak | Missing a day; a new day starting at midnight |
| Plant watering tracker | List plants and how often they need water; show "water today" | A plant added today; changing the schedule |
| Workout log | Record exercises, sets and reps; show personal bests | A zero or negative weight; two bests on one day |
| Flashcards | Make cards for a subject; sort into "know" and "still learning" | An empty deck; a very long answer |
| Recipe box and weekly meal plan | Save recipes; drag or pick them into days | A recipe used twice; deleting a recipe that's planned |
| Packing list | Reusable lists for trips; tick items off | Resetting ticks for the next trip; duplicate items |
| Watch list | Films and series to watch; mark watched; rate | Duplicate titles; rating out of range |
| Vocabulary builder | Words and translations; a quick self-quiz | Accents and special characters; an empty list |
| Spending diary | Your own spending (or made-up numbers) by category, per month | Decimals like 0.10 + 0.20; a new month |
| Mood or energy journal | Rate 1–5 with a short note, just for you | Two entries on one day; a very long note |

> [!TIP]
> **Size check.** A good Project 1 has **one main screen** and **3–5 MUST stories**, and you could explain the whole idea in one breath. Save these for later projects: logins, sharing, anything that calls the internet (week 5), AI features (week 5), payments (never), photo uploads (the browser's storage is too small).

✅ **Checkpoint:** you can finish this sentence out loud: "It's a tool that helps me ___ so that ___."

---

## Part 2 — Write SPEC.md yourself (35 min)

🔴 **No AI in this part.** The spec is your thinking. You'll get an AI's critique in Part 3.

**Why:** a spec is the prompt for the whole project. Everyone and everything that reads it next can only build what it says.

1. Open [templates/SPEC.md](../../templates/SPEC.md), click **Raw**, select all, and copy it.
2. Paste it into a plain-text place where you can keep it: a notes app, a Google Doc, or a text editor. (You'll commit it to GitHub in Part 5.)
3. Fill in the sections in this order. Use the times as a guide.

| Section | Time | Tips |
|---|---|---|
| **1. Problem** and **2. User** | 5 min | Be specific: when, where, how often, what annoys you now. The user can be you |
| **3. User stories** | 7 min | *As a …, I want to …, so that …* Mark each **MUST** (useless without it), **SHOULD** (want it soon) or **COULD** (nice later). Aim for 3–5 MUSTs |
| **4. Acceptance criteria** | 12 min | At least one per MUST story, plus at least **two edge cases**. Format below |
| **5. Out of scope** and **6. Constraints** | 5 min | Name what an AI is likely to add on its own: login, sync, charts, dark mode. Keep the Constraints for Project 1: plain HTML, CSS and JavaScript in `index.html`, `style.css` and `app.js`, localStorage, no frameworks, no build step |
| **7. Wireframe** | 3 min | Copy your paper sketch as a rough text sketch. Keep the paper for Part 5 |
| **8. Open questions** | 3 min | Anything you haven't decided. Write your current best guess next to each one |

### How to write an acceptance criterion

An **[acceptance criterion](../../resources/glossary.md#acceptance-criterion)** is a sentence that says exactly what the app must do in one situation, so anyone can check it by using the app. This course writes them as:

**WHEN** *a situation or action*, **THE APP SHALL** *an observable result*.

The format comes from EARS, a way of writing requirements that AWS's Kiro tool uses for AI specs ([Kiro](https://kiro.dev/docs/specs/feature-specs/)).

| Untestable (a vibe) | Testable (a criterion) |
|---|---|
| The app should be easy to use. | WHEN I open the app for the first time, THE APP SHALL show "No plants yet. Add your first plant above." |
| Watering works properly. | WHEN I press **Watered** on a plant, THE APP SHALL move its next watering date forward by its schedule (for example, 3 days) and remove it from the "Water today" list. |
| It saves stuff. | WHEN I reload the page, THE APP SHALL show the same plants and dates as before. |
| It handles bad input. | WHEN I press **Add** with an empty name, THE APP SHALL add nothing and SHALL show "Give your plant a name." |

Check every criterion against these four questions:

- [ ] Could a stranger check it in under a minute, by using the app, without asking me anything?
- [ ] Does it say what they would **see** (exact text in quotes where it matters)?
- [ ] Does it describe **one** behavior? (Split "and also" into two criteria.)
- [ ] Across the whole table, have I covered at least two edge cases? Try: empty input · very long input · duplicates · reloading the page · a small phone screen · zero or negative numbers · midnight or a new week · deleting the last item.

Compare your draft with [example-spec.md](example-spec.md) and its "Why this spec works" table.

✅ **Checkpoint:** your spec has every section filled in, 3–5 MUST stories, at least 5 acceptance criteria (at least two of them edge cases), and at least 3 out-of-scope items.

> [!NOTE]
> Finding this hard is normal. In CMU's AI coding course, students rated writing the spec as harder than managing AI agents ([CMU 15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). It gets easier with every project.

---

## Part 3 — Peer review, then AI critique (15 min)

### 3a. Can your partner predict the app? (8 min, 🔴 no AI)

Swap specs with your partner. Read theirs silently for 3 minutes, then take turns:

1. **Predict:** without looking at the wireframe, describe the app you would build from this spec. The author stays silent and notes every surprise.
2. **Find the untestable:** point at any criterion you couldn't check by using the app, and say why.
3. **Find the missing edge:** name one situation the spec doesn't cover.

Authors: write the three answers under "Open questions" or fix the spec now. Keep a note of what changed for PROMPTS.md.

### 3b. AI critique, not AI rewrite (7 min, 🟡 limited)

Open a **new** chat in your chat assistant (Gemini, or a fallback from [TOOLS.md](../../TOOLS.md)). Paste this prompt, then your whole spec below it.

```text
Goal: Critique my one-page spec. Do NOT rewrite it and do NOT write any code.
Context: I am a beginner building a small single-user web app in plain HTML, CSS and JavaScript that saves data in the browser with localStorage. My spec is pasted below.
Constraints: Reply with at most 8 bullet points under three headings: "Ambiguous" (quote the exact words two people could read differently), "Untestable criteria" (give the criterion ID and say why it can't be checked by using the app), and "Missing edge cases" (describe the situation, not the fix). Do not suggest new features. Do not write criteria for me.
Done when: Every bullet points to a specific part of my spec, and I could fix each one myself in a sentence.

<paste your SPEC.md here>
```

Decide for yourself which points to accept, and make the changes in your own words.

> [!IMPORTANT]
> If the AI rewrites your spec anyway, don't paste its version. Reply "Please only list problems; don't rewrite." The course's AI policy lets the AI critique your spec, not write it.

✅ **Checkpoint:** your spec has changed in at least two places because of feedback, and you can say which feedback came from your partner and which from the AI.

**Take your 10-minute break now.**

---

## Part 4 — Builder bake-off (40 min)

🟢 **AI expected.**

**Why:** a browser app builder turns a description into a whole running app in minutes. You'll see what that buys you and what it costs (credits, code you can't read, lock-in) by feeding the **same spec** to two builders and scoring both against **your** criteria.

Open [bake-off-scorecard.md](bake-off-scorecard.md) and keep it next to you. The rules: **20 minutes per builder, at most 3 prompts each** (the spec, then up to 2 fixes).

| | Primary | Fallbacks (if blocked, down, under 18, or out of credits) |
|---|---|---|
| Builder A | Google AI Studio, **Build** mode (18+) | Bolt |
| Builder B | Bolt | Lovable, v0 or Replit (one session each) |

Limits and age rules change; the current ones are in [TOOLS.md](../../TOOLS.md). Under-18 and EEA/UK cohorts: follow [instructor/variants.md](../../instructor/variants.md).

### Step 1 — Note your usage before you start (2 min)

In each builder, find where it shows your usage or remaining credits (usually under your account, settings or plan menu). Write the number in section 3 of the scorecard.

> [!NOTE]
> Menus move. If you can't find the usage page in two minutes, ask the builder "Where can I see my usage or remaining credits?" and move on.

### Step 2 — Paste the same prompt into both builders (3 min)

Use this framing prompt, followed by your full SPEC.md:

```text
Goal: Build the app described in the spec below.
Context: This is a one-page spec for a single-user tool. Its acceptance criteria (WHEN … THE APP SHALL …) are how I will judge your result.
Constraints: Follow the spec's Constraints and Out of scope sections. No login, no accounts, no cloud database: save data in the browser only.
Done when: Every MUST criterion passes when I try it in the preview.

<paste your SPEC.md here>
```

- In **Google AI Studio**, open **Build** from the left-hand menu, paste the prompt into the box that asks what you want to build, and run it.
- While it works, open **Bolt** in a second tab and paste exactly the same text. Both builders take a few minutes, so running them side by side saves time.

Optional: attach your wireframe too. These are *multimodal* models: they read images as well as text. Upload a screenshot of your photo, not the original, so it carries no location data.

> [!TIP]
> If a builder asks to connect to your GitHub or Google account, read what access it asks for. You don't need to connect anything today. Export is a homework stretch goal.

### Step 3 — Test against your criteria, not your eyes (15 min, both builders)

For each builder, go down your acceptance criteria **in order** and try each one in the preview. Mark ✅, **X**, **~** or **n/t** on the scorecard, and write what actually happened in Notes. Then try one edge case that isn't in your spec.

If a MUST criterion fails, you may spend a fix prompt on it. Name the criterion:

```text
AC4 fails. Steps: I pressed Stop after 1 minute 10 seconds. Expected: a new session at the top of the log saying "1 min". Actual: nothing was added. Fix only this. Don't change anything else.
```

After two fix prompts, stop, even if something still fails. That's data for your scorecard, not your failure.

### Step 4 — Look under the hood (8 min, both builders)

Open each builder's code or files view and fill in section 2 of the scorecard:

- What files did it create? Is there a `package.json`? What libraries does it list?
- Files ending `.tsx` or `.jsx` usually mean **React**, a popular JavaScript framework (a big library that shapes how the whole app is written). A `"build"` script means the code has to be converted before a browser can run it.
- Search the code for `localStorage`. Did it follow your data constraint, or did it add a database or a login?
- Find the **export** options: to GitHub, or as a ZIP download. Write down what each is called. Don't export yet.

### Step 5 — Note your usage after (2 min)

Check each dashboard again and fill in the rest of section 3.

✅ **Checkpoint:** sections 1–4 of your scorecard are filled in for two builders, and you've added your line to the class results board.

> [!WARNING]
> **Out of credits?** Stop. Don't create a second account to get more. Switch to the next fallback in the table above, or pair with a neighbor and score their builder's result using your own criteria. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits).

---

## Part 5 — Own it: your repo and the plain version (10 min in class, finish at home)

🟢 **AI expected.**

**Why:** a builder's app lives on someone else's platform, in code you can't read yet. The version you **keep** is three plain files in your own repository that you can read, debug next week with the AI off, and host free on GitHub Pages.

### In class (10 min)

1. **Create the repository.** On GitHub, click **+** → **New repository**. Name it after your tool, in lowercase with hyphens (for example `plant-tracker`). Choose **Public** and tick **Add a README file**. Click **Create repository**.
2. **Add your spec.** Click **Add file** → **Create new file**. Name it `SPEC.md`, paste your spec, and commit with the message `Add spec`.
3. **Add your wireframe** (optional). Take a screenshot of your sketch photo and name the file `wireframe.png` on your computer. Click **Add file** → **Upload files**, drop it in, and commit. Then edit SPEC.md and put `![Wireframe](wireframe.png)` in section 7.
4. **Turn on GitHub Pages now,** so it's ready later. Go to **Settings** → **Pages**. Under "Build and deployment", choose **Deploy from a branch**, then branch **main** and folder **/ (root)**, and click **Save**.

✅ **Checkpoint:** your new repository shows `README.md` and `SPEC.md`, and **Settings → Pages** shows your site address (it will show your README until you add `index.html`).

### At home: build version 1 with the Safe Loop

You'll finish this for homework ([homework.md](homework.md)). Here is the start, so you leave class knowing how.

**Describe and Plan.** Open a **fresh** chat in your chat assistant. Paste this prompt, then your SPEC.md. Attach your wireframe screenshot if you have one.

```text
Goal: Help me build version 1 of the app in my spec below, one small step at a time.
Context: I'm a beginner. The app must be exactly three files, index.html, style.css and app.js, published as a static site on GitHub Pages. Data is saved in the browser with localStorage. My spec is below, and my wireframe is attached.
Constraints: Plain HTML, CSS and JavaScript only: no frameworks, no libraries, no build step, no login, no database, no requests to other websites. Use textContent, not innerHTML, for anything the user typed. Keep app.js readable, with short comments. Don't write any code yet.
Done when: You have proposed a plan of 4–6 small steps. Each step names the acceptance criteria it covers (by ID) and ends with something I can test in the browser.

<paste your SPEC.md here>
```

Read the plan. Edit it: reorder steps, merge or split them, and remove anything out of scope. Then ask for one step at a time:

```text
Let's do step 1 only. Give me the complete contents of index.html, style.css and app.js for this step, each in its own code block with the file name above it. After the code, list which acceptance criteria I can test now, and how.
```

**Step, Test, Read, Commit.** For each step:

1. On your repository page, press the `.` key to open **github.dev** (the browser editor from week 2).
2. Create or open `index.html`, `style.css` and `app.js`, and paste in the new versions.
3. In the **Source Control** view, write a message such as `Add plant list with localStorage (AC1, AC3)` and click **Commit & Push**.
4. After about a minute, open your Pages address and test the criteria for this step. If you still see the old version, hard-refresh with Ctrl+Shift+R (Cmd+Shift+R on a Mac).
5. Read what changed. Ask the assistant to explain any line you can't explain yourself.
6. Note which criteria now pass. They go into your README's acceptance table for homework ([templates/PROJECT_README.md](../../templates/PROJECT_README.md)).

Remember **the two-strikes rule**: if two attempts to fix the same problem fail, stop, start a fresh chat, and rewrite your prompt with what you learned ([Safe Loop](../../resources/safe-loop.md)).

---

## Stretch goals

- **A third builder.** Try Lovable, v0 or Replit for one session with the same prompt and add a column to your scorecard.
- **Spec diff.** After the bake-off, make one change to your spec that would have prevented a failure you saw. Commit it separately with a message that says why.

## Troubleshooting

| Problem | Try this |
|---|---|
| A builder won't let me in (age, region, sign-up) | Use the fallback in the Part 4 table. Under-18 and EEA/UK cohorts: [instructor/variants.md](../../instructor/variants.md) |
| The builder added a login, a database or features I didn't ask for | That's a finding. Record it in section 2 of the scorecard. Don't spend prompts removing it |
| The preview is blank or shows an error | Wait 30 seconds and refresh the preview. If it's still broken, use one fix prompt and paste the exact error text |
| I ran out of credits mid-build | Stop, record usage, switch to the fallback ([troubleshooting](../../resources/troubleshooting.md#i-ran-out-of-free-credits)) |
| The chat assistant keeps giving me React or asks me to run `npm` | Start a fresh chat. Put "Plain HTML, CSS and JavaScript only, three files, no build step" at the top of the Constraints |
| The code stops halfway through | Ask for one file at a time: "Now give me only the full app.js" |
| My Pages site shows a 404 page | Check that `index.html` is in the top folder of the repository (not inside a folder) and is spelled in lowercase. Wait two minutes. The **Actions** tab shows whether the site is still deploying |

## Before you leave

- [ ] Your scorecard sections 1–4 are filled in (copy the text somewhere safe).
- [ ] Your Project 1 repository exists, with `SPEC.md` committed and Pages switched on.
- [ ] Start `PROMPTS.md` from [templates/PROMPTS.md](../../templates/PROMPTS.md) in your repository, and log two prompts: the AI critique (and what you changed because of it) and the builder prompt.
- [ ] Commit with the message `Start prompt log`.
- [ ] Homework includes an AI-free bake-off reflection ([homework.md](homework.md)).
