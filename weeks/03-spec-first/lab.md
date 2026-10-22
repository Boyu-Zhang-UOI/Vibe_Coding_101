# Week 3 Lab — Spec First

**AI-use key:** 🟢 AI on: use AI freely · 🟡 AI limited: the AI may comment or hint, but the work is yours · 🔴 AI off: close the AI tabs and work alone.

This lab runs across both studios. In **Studio A** you write the spec for **Project 1: A Tool I'd Actually Use** by hand, get a classmate's review, and test the spec on an AI that has never heard of you (the Goldfish test). In **Studio B** you watch an app builder build from your spec, compare notes with a partner who used a different builder, and start the version you keep, in a Codespace.

**You need:** your paper sketch (or paper and a pen), a laptop, your Google and GitHub accounts, a sign-in for Google AI Studio or Bolt (your instructor tells you which), and Canvas, the course's learning management system.

> [!WARNING]
> Nothing you paste today should contain personal data: not yours, and not anyone else's. On some free tiers, including Google AI Studio's, human reviewers may read what you type ([Tool Handout](../../TOOLS.md)). Your spec describes a tool, not a person.

Using a screen reader or only a keyboard? See the [screen reader and keyboard guide](../../resources/accessibility.md). Working alone? Each pair activity has a **Working alone?** line.

---

## Studio A — Write and test your spec

| Time | Part | AI use | Core or if time |
|---|---|---|---|
| 0:00–0:35 | Recap, concept talk and live demo | — | |
| 0:35–0:45 | [Part 1 — Choose your idea](#part-1--choose-your-project-1-idea-10-min) | 🔴 AI off | Core |
| 0:45–1:20 | [Part 2 — Write SPEC.md](#part-2--write-specmd-yourself-35-min) | 🔴 AI off | Core |
| 1:20–1:45 | [Part 3 — Peer spec review](#part-3--peer-spec-review-25-min) | 🔴 AI off | Core |
| 1:45–1:55 | Break | | |
| 1:55–2:15 | [Part 4 — The Goldfish test](#part-4--the-goldfish-test-20-min) | 🟡 AI limited | Core |
| 2:15–2:35 | [Part 5 — Give your spec a home](#part-5--give-your-spec-a-home-20-min) | none needed | Core |
| 2:35–2:50 | [Part 6 — Polish the spec](#part-6--polish-the-spec-15-min) | 🔴 AI off | If time |
| 2:50–3:00 | Checkpoint share | | |

### Part 1 — Choose your Project 1 idea (10 min)

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
| Recipe box and weekly meal plan | Save recipes; pick them into days | A recipe used twice; deleting a recipe that's planned |
| Packing list | Reusable lists for trips; tick items off | Resetting ticks for the next trip; duplicate items |
| Watch list | Films and series to watch; mark watched; rate | Duplicate titles; rating out of range |
| Vocabulary builder | Words and translations; a quick self-quiz | Accents and special characters; an empty list |
| Spending diary | Your own spending (or made-up numbers) by category, per month | Decimals like 0.10 + 0.20; a new month |
| Mood or energy journal | Rate 1–5 with a short note, just for you | Two entries on one day; a very long note |

> [!TIP]
> **Size check.** A good Project 1 has **one main screen** and **3–5 MUST stories**, and you could explain the whole idea in one breath. Save these for later projects: logins, sharing, anything that calls the internet (week 5), AI features (week 5), payments (never), photo uploads (the browser's storage is too small).

✅ **Checkpoint:** you can finish this sentence out loud: "It's a tool that helps me [do what] so that [why it matters]."

### Part 2 — Write SPEC.md yourself (35 min)

🔴 **AI off.** The spec is your thinking. The AI gets to question it in Part 4, but not to write it.

**Why:** everyone and everything that reads your spec next can only build what it says.

1. Open the [SPEC template](../../templates/SPEC.md) and copy all of its text. On GitHub, use the **Copy raw file** button at the top right of the file; on the course website, use the template's copy button.
2. Paste it somewhere you can keep it for an hour: a notes app, a Google Doc or a text editor. (It goes into your repository in Part 5.)
3. Fill in the sections in this order. Use the times as a guide.

| Section | Time | Tips |
|---|---|---|
| **1. Problem** and **2. User** | 5 min | Be specific: when, where, how often, what annoys you now. The user can be you |
| **3. User stories** | 7 min | *As a …, I want to …, so that …* Mark each **MUST** (useless without it), **SHOULD** (want it soon) or **COULD** (nice later). Aim for 3–5 MUSTs |
| **4. Acceptance criteria** | 12 min | At least one per MUST story, plus at least **two edge cases**. How to write them is below |
| **5. Out of scope** and **6. Constraints** | 5 min | Name what an AI is likely to add on its own: login, sync, charts, dark mode. Keep the Project 1 constraints: plain HTML, CSS and JavaScript in `index.html`, `style.css` and `app.js`, localStorage, no frameworks, no build step |
| **7. Wireframe** | 3 min | Describe your paper sketch from top to bottom in a short list (for example "title; input box with Add button; the list, newest first"). A list is easier for screen readers and for AIs than a text drawing |
| **8. Open questions** | 3 min | Anything you haven't decided. Write your current best guess next to each one |

#### How to write an acceptance criterion

An **[acceptance criterion](../../resources/glossary.md#acceptance-criterion)** says exactly what the app must do in one situation, so anyone can check it by using the app. This course writes them as:

**WHEN** *a situation or action*, **THE APP SHALL** *an observable result*.

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

Compare your draft with the [example spec](example-spec.md) and its "Why this spec works" table.

✅ **Checkpoint:** every section is filled in, with 3–5 MUST stories, at least 5 acceptance criteria (at least two of them edge cases), and at least 3 out-of-scope items.

> [!NOTE]
> Finding this hard is normal. In CMU's AI coding course, students rated writing the spec as harder than managing AI agents ([CMU 15-113](https://www.cs.cmu.edu/~113/bestPractices.html)). It gets easier with every project.

### Part 3 — Peer spec review (25 min)

🔴 **AI off.** This review is graded ([peer review rubric](../../assessment/rubrics.md#reflections-and-peer-reviews)): it's specific, accurate and kind.

**Why:** a classmate reads your spec the way a builder will, without the picture in your head.

1. **Swap (5 min).** Swap laptops with your partner, or share a view-only link. Read their spec silently.
2. **Talk (10 min, 5 per spec).** The reviewer does three things while the author stays silent and notes every surprise:
   - **Predict:** without looking at the wireframe, describe the app you would build from this spec.
   - **Find the untestable:** point at any criterion (by ID) you couldn't check by using the app, and say why.
   - **Find the missing edge:** name one situation the spec doesn't cover.
3. **Write it up on Canvas (10 min).** Open the **Week 3 spec review** assignment and write your review of your partner's spec under five headings: your prediction; every untestable criterion (by ID) and why; one missing edge case; one strength; one question for the author. Refer to your partner by GitHub username. Share it with them privately (a Canvas comment), never as a file, issue or comment in their repository. Not finished? Finish it by the homework deadline.

Authors: fix what you agree with now, or add it to "Open questions". Note what changed for your `PROMPTS.md` (write "my review partner", not a name).

✅ **Checkpoint:** you've given a review and received one, and your spec has changed in at least one place.

**Working alone?** Ask your instructor for the practice spec; your written review of it is the graded one. Then read your own spec aloud as if you were a stranger, or ask a friend to predict the app from it.

**Take your 10-minute break now.**

### Part 4 — The Goldfish test (20 min)

🟡 **AI limited.** The AI reads your spec and asks questions. It doesn't rewrite your spec, and you don't paste back anything it writes.

**Why:** a fresh chat knows nothing about you, your idea or this class, like a goldfish that remembers nothing. Every app builder, chat assistant and agent that reads your spec starts that way. If a fresh chat can't understand your spec without asking you, neither can they.

1. **Open a brand-new chat** in your chat assistant (Gemini, or a fallback from the [Tool Handout](../../TOOLS.md)): no earlier messages, and no explanation of your idea. A temporary chat is fine.
2. **Paste this prompt, then your spec, and nothing else:**

   ```text
   Goal: Tell me what is unclear in the spec below. Do NOT rewrite it and do NOT write any code.
   Context: The spec below is all you know. Later you will have to build the app from it, with no chance to ask me anything.
   Constraints: Reply with three short lists. "What I would build": the app in 5 bullet points, as you understand it. "Questions I'd have to ask": up to 6 questions the spec doesn't answer. "Guesses I'd make": up to 4 assumptions you would have to make, each with the criterion ID or section it affects. Don't suggest new features and don't write criteria for me.
   Done when: I can compare your picture of the app with mine, and every question points to a part of my spec.

   [paste your whole SPEC.md here]
   ```

3. **Compare (4 min).** Read "What I would build". Mark every place it differs from the app in your head. Each question and each guess is a gap in your spec.
4. **Log it (4 min).** In your notes, write this entry. It becomes your first `PROMPTS.md` entry in Part 5, and the [Project 1 rubric](../../assessment/rubrics.md#project-1) looks for it.

   ```markdown
   ### [date] — Goldfish test of SPEC.md
   - **Tool:** [chat assistant], fresh chat, spec only
   - **What it asked or got wrong:** [for example: "Does the week start on Monday?" (AC7)]
   - **What I changed in SPEC.md:** [for example: AC7 now says Monday to Sunday]
   ```

5. **Revise (8 min).** Answer each question **in the spec**, in your own words, not in the chat. A feature you decide not to build goes into Out of scope.

> [!IMPORTANT]
> If the AI rewrites your spec anyway, don't use its version. Reply "Please only list questions; don't rewrite." The course's AI policy lets an AI critique your spec, not write it.

✅ **Checkpoint:** your Goldfish log names at least two questions or wrong guesses, and your spec has changed in at least two places since Part 2 (from the peer review and the Goldfish test).

### Part 5 — Give your spec a home (20 min)

**Why:** from now on your spec lives in the same repository as your code, so every tool you use can read it and your changes have a history.

1. **Create the repository.** On GitHub, click **+** → **New repository**. Name it after your tool, in lowercase with hyphens (for example `plant-tracker`). Choose **Public** and tick **Add a README file**. Click **Create repository**.
2. **Add your spec.** Click **Add file** → **Create new file**. Name it `SPEC.md`, paste your spec, and commit with the message `Add spec`.
3. **Start your prompt log.** Copy the [PROMPTS template](../../templates/PROMPTS.md) the same way you copied the SPEC template, and create a file called `PROMPTS.md`. Paste in your Goldfish log from Part 4, and one line saying what changed after the peer review. Commit with the message `Start prompt log`.
4. **Turn on GitHub Pages now,** so it's ready for Studio B. Go to **Settings** → **Pages**. Under "Build and deployment", choose **Deploy from a branch**, then branch **main** and folder **/ (root)**, and click **Save**.

Your repository is public, so it holds only your project work: no classmates' names, no grades, no reflections. Those go on Canvas.

✅ **Checkpoint:** your repository shows `README.md`, `SPEC.md` and `PROMPTS.md`, and **Settings → Pages** shows your site address (it shows your README until you add `index.html`).

### Part 6 — Polish the spec (15 min)

**If time.** Pick one:

- **Add your wireframe image.** Take a screenshot of your sketch photo (a screenshot carries no location data) and save it as `wireframe.png`. On your repository page, click **Add file** → **Upload files**, drop it in, and commit. Then edit `SPEC.md` and add `![Wireframe: (one-line description)](wireframe.png)` to section 7, keeping your top-to-bottom list.
- **Goldfish, round 2.** Run Part 4 again in another brand-new chat with your revised spec. Does it ask fewer questions? Log the count.
- **Read ahead.** Skim the [bake-off scorecard](bake-off-scorecard.md) so Studio B starts fast.

### Checkpoint share (10 min)

Read out one question the Goldfish asked you and the line of your spec you changed because of it.

**Before you leave Studio A:**

- [ ] `SPEC.md` and `PROMPTS.md` are committed in your new public repository, and Pages is switched on.
- [ ] Your written spec review is on Canvas, or you know you'll finish it for homework.

---

## Studio B — Bake-off and build

| Time | Part | AI use | Core or if time |
|---|---|---|---|
| 0:00–0:10 | Show and tell: one spec criterion, before and after review | — | |
| 0:10–0:55 | [Part 7 — Builder bake-off jigsaw](#part-7--builder-bake-off-jigsaw-45-min) | 🟢 AI on | Core |
| 0:55–1:05 | Break | | |
| 1:05–1:40 | [Part 8 — Start Project 1 in a Codespace](#part-8--start-project-1-in-a-codespace-35-min) | 🟢 AI on | Core |
| 1:40–2:30 | [Part 9 — Keep building](#part-9--keep-building-50-min) | 🟢 AI on | Core |
| 2:30–2:45 | Debrief: the class results board | — | |
| 2:45–3:00 | Exit ticket ([week 3](../../assessment/exit-tickets.md#week-3)), graded on completion, not correctness | 🔴 AI off | |

### Part 7 — Builder bake-off jigsaw (45 min)

🟢 **AI on.**

**Why:** a browser app builder turns a description into a whole running app in minutes. You'll see what that buys you and what it costs (credits, code you can't read, lock-in) by feeding it **your** spec and scoring it against **your** criteria. In a jigsaw, each of you tests one builder, then you put the pieces together.

**How it works:** your instructor gives you **builder A** or **builder B** and pairs you with someone who has the other one. You test only your builder, on your own spec. Then you compare scorecards. The class results board puts everyone's results side by side.

| Builder | Primary | Fallback (if blocked, down, under 18, or out of credits) |
|---|---|---|
| A | Google AI Studio, **Build** mode (18+) | Bolt |
| B | Bolt | Lovable or v0 (check the [Tool Handout](../../TOOLS.md) for the current list) |

Open the [bake-off scorecard](bake-off-scorecard.md) and copy it into your notes. The rules: **20 minutes, at most 3 prompts** (the spec, then up to 2 fixes).

**Step 1 — Note your usage (2 min).** Find where the builder shows your usage or remaining credits (usually under your account, settings or plan menu). Write the number in section 3 of the scorecard. Menus move: if you can't find it in two minutes, ask the builder "Where can I see my usage or remaining credits?" and move on.

**Step 2 — Paste the prompt (3 min).** Use this framing prompt, followed by your full `SPEC.md` (copy it from your repository):

```text
Goal: Build the app described in the spec below.
Context: This is a one-page spec for a single-user tool. Its acceptance criteria (WHEN … THE APP SHALL …) are how I will judge your result.
Constraints: Follow the spec's Constraints and Out of scope sections. No login, no accounts, no cloud database: save data in the browser only.
Done when: Every MUST criterion passes when I try it in the preview.

[paste your SPEC.md here]
```

In Google AI Studio, open **Build** from the left-hand menu and paste into the box that asks what you want to build. In Bolt, paste into the main prompt box. Building takes a few minutes: meanwhile, copy your criteria into section 1 of the scorecard.

> [!TIP]
> If a builder asks to connect to your GitHub or Google account, read what access it wants. You don't need to connect anything today.

**Step 3 — Test against your criteria, not your eyes (15 min).** Go down your acceptance criteria **in order** and try each one in the preview. Mark ✅ passes, **X** fails, **~** partly or **n/t** not tested, and write what actually happened in Notes. Then try one edge case that isn't in your spec.

If a MUST criterion fails, you may spend a fix prompt on it. Say what works first, then name the failing criterion:

```text
AC1–AC3 pass. AC4 fails. Steps: I pressed Stop after 1 minute 10 seconds. Expected: a new session at the top of the log saying "1 min". Actual: nothing was added. Fix only this. Don't change anything else.
```

After two fix prompts, stop, even if something still fails. That's data for your scorecard, not your failure.

**Step 4 — Look under the hood (8 min).** Open the builder's code or files view and fill in section 2 of the scorecard:

- What files did it create? Is there a `package.json`? What libraries does it list?
- Files ending `.tsx` or `.jsx` usually mean **React**, a popular JavaScript framework. A `"build"` script means the code has to be converted before a browser can run it.
- Search the code for `localStorage`. Did it follow your data constraint, or did it add a database or a login?
- Find the **export** options (to GitHub, or a ZIP download). Write down what they're called. Don't export yet.

**Step 5 — Note your usage again (2 min)** and finish section 3.

**Step 6 — Compare with your partner (10 min).** Show each other your scorecards. Copy your partner's totals into section 5 ("My partner's builder"). Then talk:

1. Which builder passed a bigger share of its MUST criteria? Was it the one that *looked* better?
2. Did either builder add a login, a database or a feature from the Out of scope list?
3. Which code could either of you explain line by line?

Add your line to the class results board (the format is in section 5 of the scorecard).

✅ **Checkpoint:** sections 1–5 of your scorecard are filled in, and your line is on the class results board.

> [!WARNING]
> **Out of credits?** Stop. Don't create a second account to get more. Switch to the fallback builder, or score your partner's builder with your own criteria. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits).

**Working alone?** Run both builders if your credits allow (allow 40 minutes), or compare your result with the class results board your instructor posts.

**Take your 10-minute break now.**

### Part 8 — Start Project 1 in a Codespace (35 min)

🟢 **AI on**, in a chat assistant. You paste its code into your files yourself.

**Why:** the builder's app lives on someone else's platform, in code you can't read yet. The version you **keep** is three plain files in your own repository. A **[Codespace](../../resources/glossary.md#codespace)** lets you see each change running *before* you commit it, which is the Safe Loop's order: test, read, then save. You opened a test Codespace in week 0, so this should feel familiar ([GitHub Codespaces](../../setup/codespaces.md)).

1. **Open a Codespace (5 min).** On your Project 1 repository, click the green **Code** button → **Codespaces** tab → **Create codespace on main**. It takes a minute or two.
2. **Start the preview (3 min).** Click in the terminal at the bottom and type:

   ```bash
   python3 -m http.server 8000
   ```

   A pop-up says your application is running on port 8000: click **Open in Browser**. (No pop-up? Open the **Ports** tab next to the terminal and click the globe icon next to port 8000.) For now you'll see a list of files (`README.md`, `SPEC.md`…). That's normal until `index.html` exists. Keep this tab open: it's your preview.

3. **Describe and Plan (10 min).** Open a **fresh** chat. Paste this prompt, then your `SPEC.md`:

   ```text
   Goal: Help me build version 1 of the app in my spec below, one small step at a time.
   Context: I'm a beginner. The app must be exactly three files, index.html, style.css and app.js, published as a static site on GitHub Pages. Data is saved in the browser with localStorage. My spec is below.
   Constraints: Plain HTML, CSS and JavaScript only: no frameworks, no libraries, no build step, no login, no database, no requests to other websites. Use textContent, not innerHTML, for anything the user typed. Keep app.js readable, with short comments. Don't write any code yet.
   Done when: You have proposed a plan of 4–6 small steps. Each step names the acceptance criteria it covers (by ID) and ends with something I can test in the browser.

   [paste your SPEC.md here]
   ```

   If you have a wireframe image, attach it too: showing beats describing (one of the [three habits](../01-hello-vibe-coding/README.md#three-habits-that-make-prompts-work) from week 1). Read the plan. Edit it: reorder steps, merge or split them, and remove anything out of scope. Tell the chat your edited plan.

4. **Check first (3 min).** Before you ask for step 1, open `PROMPTS.md` in the Codespace and start an entry for it. Write the step's **check**: which criteria it covers, what you'll click or type, and what you expect to see. Your acceptance criteria are most of the work already. Writing the check before you see the code keeps it honest ([check first](../../resources/safe-loop.md#check-first)).
5. **Step (5 min).** Ask for step 1 only:

   ```text
   Let's do step 1 only. Give me the complete contents of index.html, style.css and app.js for this step, each in its own code block with the file name above it.
   ```

   In the Explorer (the file list on the left), click the **New File** icon to create each file the first time, paste in its code, and save (Ctrl+S, or Cmd+S on a Mac).

6. **Test (5 min).** Reload the preview tab. Run the check you wrote, then try one edge case.

   > [!TIP]
   > **Blank page, or nothing happens when you click?** Open DevTools (F12, or Ctrl+Shift+I; Cmd+Option+I on a Mac) and click the **Console** tab. Read the red line before you do anything else. Paste that exact error into the chat, with what you did and what you expected. Next week you'll learn to read these yourself. More: [My page is blank](../../resources/troubleshooting.md#my-page-is-blank).

7. **Read and teach back (3 min).** Read the new code. Ask the chat to explain any line you can't explain ("Explain these lines to a beginner"). Then write a **teach-back** under the step in `PROMPTS.md`: two or three sentences, in your own words, saying what changed and why it works ([teach back](../../resources/safe-loop.md#teach-back)).
8. **Commit (2 min).** Click the **Source Control** icon on the left. Type a message that says what changed, such as `Add plant list (AC1, AC3)`, press Enter twice, and add the line `Assisted-by: Gemini` (or the tool you used). Click **Commit** (choose **Yes** if it asks to stage all changes), then **Sync Changes** to push it to GitHub.

✅ **Checkpoint:** step 1 runs in your preview and passes its check; it's committed and pushed; and `PROMPTS.md` has the step's check and teach-back.

> [!NOTE]
> The preview address (ending in `.app.github.dev`) is private to you. To show someone your app, share your GitHub Pages address instead.

### Part 9 — Keep building (50 min)

🟢 **AI on.**

Repeat the loop for steps 2, 3 and onward: **check first → ask for one step → paste and save → test in the preview → read and teach back → commit**. Start with the criteria that make the app usable at all (adding and showing items, then saving across a reload), and leave the polish until later.

- **The two-strikes rule:** if two attempts to fix the same problem fail, stop, start a fresh chat, paste your spec and your current `app.js`, and describe what you tried, the exact error and what you expected ([The Safe Loop](../../resources/safe-loop.md#the-two-strikes-rule)).
- **At about 2:20,** open your GitHub Pages address (**Settings** → **Pages**) and check that the committed version works there too. Pages takes a minute or two to update after you push.
- **Before you leave,** commit, push, and stop your Codespace ([stop and delete codespaces](../../setup/codespaces.md#stop-and-delete-codespaces)).

✅ **Checkpoint:** at least one step is live on your GitHub Pages site.

### Debrief and exit ticket

The debrief uses the class results board: which builder passed more MUSTs across the class, who got a login or database they didn't ask for, and which criteria failed in *both* builders (often a sign the spec was unclear). Then the [week 3 exit ticket](../../assessment/exit-tickets.md#week-3): 🔴 AI off, graded on completion, not correctness.

---

## Stretch goals

- **The other builder.** At home, run the builder you didn't use with the same prompt and add it to your scorecard.
- **Spec diff.** Make one change to your spec that would have prevented a failure you saw in the bake-off. Commit it on its own, with a message that says why.

## Troubleshooting

| Problem | Try this |
|---|---|
| A builder won't let me in (age, region, sign-up) | Use the fallback in the Part 7 table. Under-18 and EEA/UK cohorts: your instructor follows the [course variants](../../instructor/variants.md) |
| The builder added a login, a database or features I didn't ask for | That's a finding. Record it in section 2 of the scorecard. Don't spend prompts removing it |
| The builder's preview is blank or shows an error | Wait 30 seconds and refresh it. If it's still broken, use one fix prompt and paste the exact error text |
| The chat keeps giving me React, or asks me to run `npm` | Start a fresh chat. Put "Plain HTML, CSS and JavaScript only, three files, no build step" at the top of the Constraints |
| The code stops halfway through | Ask for one file at a time: "Now give me only the full app.js" |
| The preview shows a list of files, not my app | There's no `index.html` yet, or it's misspelled (it must be lowercase, in the top folder). The server shows the folder it was started in |
| The preview shows an old version | Save the file (a dot on its tab means unsaved), then hard-reload with Ctrl+Shift+R (Cmd+Shift+R on a Mac) |
| `Address already in use` when starting the server | A server is already running. Find its terminal and press Ctrl+C, or use another port: `python3 -m http.server 8001` |
| My Pages site shows a 404 page | Check that `index.html` is in the top folder and that you pushed (**Sync Changes**). Wait two minutes; the **Actions** tab shows whether it's still deploying ([GitHub Pages shows 404](../../resources/troubleshooting.md#github-pages-shows-404)) |
| The Codespace won't start, or I'm out of hours | Stop other codespaces at [github.com/codespaces](https://github.com/codespaces). Meanwhile, edit in github.dev (press `.` on your repository page) and test on Pages after each commit |

## Before you leave Studio B

- [ ] Your scorecard, sections 1–5, is saved somewhere safe (it goes into `docs/` for homework).
- [ ] At least one step of Project 1 is committed, pushed and live on GitHub Pages.
- [ ] `PROMPTS.md` has your Goldfish test, the builder prompt, the plan prompt, and a check and teach-back for each step so far.
- [ ] Your Codespace is stopped.
- [ ] Homework: [homework](homework.md). The Verdict and your spec review go on Canvas, written without AI.
