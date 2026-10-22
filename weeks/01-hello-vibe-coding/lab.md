# Week 1 Lab — Hello, Web

> **Goal:** in Studio A, build a one-file personal home page with an AI, look inside it and change it by hand. In Studio B, publish it at `https://[your-username].github.io`, practice three prompting habits, check its accessibility and write your own AI-use rules.
> **Time:** Studio A lab about 130 minutes, Studio B lab about 140 minutes, each with a 10-minute break.
> **You need:** a laptop, your GitHub account, a personal Google account, and the privacy settings from week 0.

**AI-use key:** 🟢 AI on: use AI freely · 🟡 AI limited: the AI may comment or hint, but the work is yours · 🔴 AI off: close the AI tabs and work alone.

Studios are graded on effort, not polish ([rubric](../../assessment/rubrics.md#in-class-work-and-participation)): a part that didn't work, with the exact error and what you tried, still counts.

You use the simplest version of the course workflow: **describe → generate → run → customize**. You describe the page, the AI generates the code, you run it in the live preview, and then you customize it one change at a time.

Stuck for more than 5 minutes? Check [Troubleshooting](#troubleshooting), ask a neighbor, then raise your hand. Using a screen reader or only a keyboard? See the [Screen reader and keyboard guide](../../resources/accessibility.md); if a chat tool's code view is hard to use, the local-file route in [No preview? Run it yourself](#no-preview-run-it-yourself) lets you work in your own editor.

---

## Studio A — Build your page and look inside

| Part | What you do | Time | Core or If time | AI use |
|---|---|---|---|---|
| A1 | Accounts and privacy check | 10 min | Core | Not needed |
| A2 | Build "Hello, Web" | 40 min | Core | 🟢 AI on |
| Break | Stand up, stretch | 10 min | | |
| A3 | Take a guided tour of your code | 20 min | Core | 🟢 AI on |
| A4 | Make three changes by hand | 20 min | Core | 🔴 AI off |
| A5 | Save your work | 10 min | Core | Not needed |
| A6 | Break it on purpose, or keep customizing | 20 min | If time | 🟢 AI on |

The studio ends with a **checkpoint share**: show a neighbor your page and the line you changed by hand.

### Part A1 — Accounts and privacy check (10 min)

**Why:** free AI tools may store your chats, train on them and let human reviewers read samples. You set the privacy settings in week 0; now check they stuck.

1. In one browser tab, open the [Privacy settings](../../setup/privacy-settings.md) page.
2. In another tab, sign in to **Gemini** at `gemini.google.com` with your **personal** Google account. A school or work account may block Gemini or hide Canvas.
3. Check that Gemini's **Keep Activity** is off, as described in the [Gemini section](../../setup/privacy-settings.md#gemini). If you plan to use a fallback (ChatGPT or Claude), check its setting too.
4. Sign in to **github.com**. Note your exact username: click your profile picture (top right) and read the name in bold.
5. Write your site's address on paper: `https://________________.github.io`, with your username in the gap.

> [!NOTE]
> With Keep Activity off, Gemini doesn't keep your chats: when you close the tab, the chat is gone, and you can't reopen it or share a link to it later. That's fine. In Part A5 you save your code and prompts yourself.

> [!WARNING]
> Your page will be **public**. Use your first name or a nickname. Do not put your surname, email, phone number, address, student ID or anything about other people into the page, and do not paste any of it into the AI.

✅ **Checkpoint:** you are signed in to Gemini (personal account, Keep Activity off) and GitHub, and you know your GitHub username.

### Part A2 — Build "Hello, Web" (40 min)

🟢 AI on.

#### Open the live preview

1. In Gemini, start a **new chat**.
2. Turn on **Canvas**: look for it under **Tools** (or a **+** menu) in the prompt box.

> [!NOTE]
> Menus move. If you can't find Canvas, start your prompt with "Use Canvas to…", or ask Gemini where Canvas is. Using a fallback? Claude shows a live preview called an **Artifact** (18+ only); with ChatGPT, see [No preview? Run it yourself](#no-preview-run-it-yourself). Your instructor tells you which tool leads this week.

#### Your first prompt

A good prompt has four parts: **Goal · Context · Constraints · Done when**. You'll study them properly next week; for now, fill in the blanks. Replace everything in `[square brackets]`. More starters: [Prompt starters](prompt-starters.md).

```text
Goal: Make a one-page personal home page about me that I can publish on the web.
Context: I'm a beginner in a course called Vibe Coding 101 and I have never coded. The page is for classmates and friends. About me: my name is [first name or nickname]. I'm interested in [interest 1], [interest 2] and [interest 3]. Right now I'm learning [something]. I like the colors [color 1] and [color 2].
Constraints: One single HTML file with the CSS and JavaScript inside it. No frameworks, no libraries, no external images or fonts. It must look good on a phone and on a laptop. Do not add an email address, phone number, surname or social-media links.
Done when: The preview shows my name as a big heading, a short "About me" paragraph, a list of my interests, and one button that does something fun when I click it.
```

Send it. Gemini writes the code and shows it in the Canvas panel. Look for a **Preview** view (the page) and a **Code** view (the text that makes it). Copy the prompt into a scratch note (paper or a notes app); you'll log it in Studio B.

✅ **Checkpoint:** the preview shows a page with your name as a heading, an "About me" section, your interests and a button. Click the button. Something happens.

> [!TIP]
> Your page looks different from your neighbor's even with the same prompt. That's normal: the model picks among likely answers, so each run differs.

#### Customize: at least 5 iterations

Now improve the page **one change per prompt**. Small, specific requests beat "make it better", and when something breaks you know which change did it. In your scratch note, write down each prompt and what happened.

Use these, the [customization prompts](prompt-starters.md#customization-prompts) in the prompt starters (phone layout, footer, fonts, animation), or your own:

```text
Goal: Change the color scheme.
Context: The page you just made.
Constraints: Keep everything else the same. Make sure text is easy to read against the background.
Done when: The background and headings use [color] and [color], and all text is still readable.
```

```text
Goal: Add a "Things I'm learning" section with three short items.
Context: The page you just made. The items are: [item], [item], [item].
Constraints: Match the style of the existing sections. Don't change other sections.
Done when: The new section appears below "About me" and looks like it belongs.
```

```text
Goal: Make the button do something more fun.
Context: Right now the button [describe what it does now].
Constraints: Plain JavaScript only, no libraries. It should work every time it's clicked, not just once.
Done when: Clicking the button [describe what you want: e.g. shows a random fun fact about me from a list of five].
```

Before each prompt, **predict** what will change; afterwards, check the preview against your "Done when". If a change makes things worse, say so: "That broke the layout on narrow screens. Undo that change."

> [!TIP]
> If the AI keeps failing at the same thing after **two** attempts, stop. Start a fresh chat, paste your current code, and describe the problem more precisely. That's the **two-strikes rule**, and you'll use it all course.

✅ **Checkpoint:** you have sent at least 5 customization prompts, the preview shows your improved page, and your scratch note lists what each prompt did.

### No preview? Run it yourself

If your assistant shows code but no live preview (see the [Tool Handout](../../TOOLS.md)), run the code yourself. Use the **copy** button on the code block so you get exactly the code, without extra lines such as ` ```html `.

1. Open a plain-text editor: **Notepad** on Windows, **TextEdit** on a Mac (then choose **Format → Make Plain Text**), or the **Text** app on a Chromebook.
2. Paste the code and save it as `index.html` (on Windows, set "Save as type" to **All files**).
3. Double-click the file to open it in your browser.
4. After each change, paste the new code, save, and refresh the browser.

Prefer to publish straight away? Do [Part B1](#part-b1--publish-on-github-pages-35-min) now and use your live site as the preview: edit the file on GitHub (pencil icon, **Edit this file**), commit, wait a minute, refresh.

### Break (10 min)

Stand up. **Don't close the chat tab:** with Keep Activity off, a closed tab is a lost chat. (Lost it anyway? Start a fresh chat with the same first prompt. The second build goes faster.)

### Part A3 — Take a guided tour of your code (20 min)

🟢 AI on.

**Why:** right now the page works and you don't know why. "If you can't explain it, you didn't build it." This part is where you start to own it.

In the same chat, send:

```text
Goal: Help me understand the page you just made.
Context: I'm a complete beginner. I have never written HTML, CSS or JavaScript.
Constraints: Don't change the code. Go through it section by section, from top to bottom. For each section, quote its first line, label it HTML (structure), CSS (style) or JavaScript (behavior), and explain in one or two plain-English sentences what it does.
Done when: I could point at any part of the page in the preview and find the code that makes it.
```

Read the answer with the **Code** view open next to it. For each section, find it in the code and on the page.

Then ask at least **one follow-up** about something you don't understand, for example:

```text
What does the line starting with "[paste the line]" do? What would happen if I deleted it?
```

✅ **Checkpoint:** you can point to (1) the HTML for your heading, (2) the CSS rule that sets the background color, and (3) the JavaScript that runs when the button is clicked.

### Part A4 — Make three changes by hand (20 min)

🔴 AI off. You change the code yourself.

Where to type:

- **Gemini Canvas:** switch to the **Code** view, click into the code and type. Switch back to **Preview** to see the result.
- **A preview that won't let you type** (such as Claude Artifacts): use the local-file method in [No preview? Run it yourself](#no-preview-run-it-yourself), or make these changes at the start of Studio B on GitHub, right after you publish.

Make these three changes. **Predict** what you'll see before you look.

| # | Change | How to find it | Example |
|---|---|---|---|
| 1 | **A text** | Look for the words you see on the page, e.g. your heading inside `<h1>…</h1>` | `<h1>Hi, I'm Sam</h1>` → `<h1>Welcome to Sam's corner</h1>` |
| 2 | **A color** | In the `<style>` section, find a color: a word (`teal`), a code starting with `#` (`#3b82f6`), or `rgb(…)` | `background: #f5f5f5;` → `background: lavender;` |
| 3 | **A number** | In the `<style>` section, find a size such as `font-size`, `padding` or `border-radius`; or a number in the `<script>` section | `font-size: 2.5rem;` → `font-size: 4rem;` |

Colors to try: `tomato`, `gold`, `seagreen`, `rebeccapurple`, `lavender`, `navy`.

> [!NOTE]
> If something breaks, undo with **Ctrl+Z** (Windows, ChromeOS) or **Cmd+Z** (Mac). A missing `;`, `}` or `>` is the usual cause.

In your scratch note, write down each change: what you changed, from what to what, and what happened. These go into `PROMPTS.md` under "What I wrote or decided myself".

> [!IMPORTANT]
> The AI can't see edits you make outside its chat. If you edit the code somewhere else (on GitHub, or in a file on your computer) and then want the AI to make another change, paste your current code into the chat first. That's the **context window** from today's talk. (Edits typed into Gemini's Canvas are usually visible to Gemini; if it seems to ignore them, paste the code back in.)

✅ **Checkpoint:** the preview shows your three hand-made changes, and you can say which line you changed for each.

### Part A5 — Save your work (10 min)

**Why:** you publish in Studio B, and the chat won't be there any more. Your code and your notes must be.

1. **Get the file.**
   - If your tool has a **Download** button, download the file. Check its name: it must be exactly `index.html` (all lowercase). Rename it if it's `index (1).html`, `Untitled.html` or `index.html.txt`.
   - If there's no download, open the **Code** view, use its copy button (or click in the code, then **Ctrl+A** / **Cmd+A** and copy), and save the code as `index.html` with the steps in [No preview? Run it yourself](#no-preview-run-it-yourself).
2. **Check it.** Double-click `index.html`. Your page, with your three hand changes, opens in the browser.
3. **Keep it where you'll find it**: the Desktop or Documents folder (on a Chromebook, **My files**). Can't save files on this computer? Paste the code into a private document you can open in Studio B.
4. **Keep your scratch note**: your first prompt, the customization prompt that worked best (or went most wrong), and your three hand changes.

✅ **Checkpoint:** `index.html` opens in your browser from your computer, and your scratch note is safe.

### Part A6 — Break it on purpose, or keep customizing (20 min, if time)

🟢 AI on. Pick one:

- **Break it on purpose.** In the code, delete one `}` in the `<style>` section and look at the page. Undo. Delete one `>` from an HTML tag. Browsers try hard to show *something*, which is why broken code can look almost right.
- **More iterations.** Add a footer, a phone layout or an animation from the [customization prompts](prompt-starters.md#customization-prompts). Save `index.html` again afterwards (Part A5).
- **Same prompt, second assistant.** Send your first prompt, unchanged, to a second assistant from the [Tool Handout](../../TOOLS.md). How different is the result?

### Checkpoint share (end of Studio A)

Show a neighbor your page and point at one line you changed by hand. If your instructor asks, post a screenshot of your page where they say (crop out other tabs and anything personal). Stuck? Share the exact blocker instead: that counts too.

**Working alone?** Write one sentence in your scratch note: which line you changed by hand, and what it does.

---

## Studio B — Publish, polish and set your rules

| Part | What you do | Time | Core or If time | AI use |
|---|---|---|---|---|
| B1 | Publish on GitHub Pages | 35 min | Core | 🟢 AI on if you get stuck |
| B2 | Practice the three habits | 25 min | Core | 🟢 AI on |
| Break | Stand up, stretch | 10 min | | |
| B3 | Check your page's accessibility | 25 min | Core | 🟢 AI on for the review |
| B4 | Start `PROMPTS.md` | 15 min | Core | 🟢 AI on for the log entries · 🔴 AI off for "What I wrote or decided myself" |
| B5 | Write your personal AI-use rules | 20 min | Core | 🔴 AI off |
| B6 | Catch up, or start the homework | 10 min | If time | 🟢 AI on |

The studio ends with a gallery walk of everyone's live page and the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1) (🔴 AI off).

Need the AI today? Start a new chat and paste in your saved `index.html` first: the AI doesn't remember Studio A.

### Part B1 — Publish on GitHub Pages (35 min)

**Why:** a page on your laptop only exists for you. On GitHub Pages it has a real address anyone can visit. GitHub stores your file in a **repository** (a project folder GitHub keeps track of), and **GitHub Pages** serves it as a website.

New to the GitHub website? Keep [GitHub basics](../../setup/github-basics.md) open alongside.

#### Create the repository (5 min)

1. On github.com, click the **+** menu (top right, **Create new…**) → **New repository**.
2. **Owner:** your username. **Repository name:** your username followed by `.github.io`. Example: if your username is `sam-rivera`, type `sam-rivera.github.io`. It must match exactly.
3. Choose **Public**.
4. Turn on **Add a README file** (sometimes shown as "Add README").
5. Click **Create repository**.

✅ **Checkpoint:** you see your new repository with a `README.md` file, and the name at the top is `[your-username]/[your-username].github.io`.

#### Add `index.html` (10 min)

Pick **one** option.

**Option A: upload the file.**

1. Click **Add file** → **Upload files**.
2. Drag `index.html` onto the page, or click **choose your files**.
3. In the **Commit changes** box at the bottom, type the message `Add home page`.
4. Click **Commit changes**.

**Option B: paste the code.**

1. Click **Add file** → **Create new file**.
2. In the name box, type `index.html`.
3. Click in the big editing area and paste your code.
4. Check the first line starts with `<!DOCTYPE html>` or `<html` and not with ` ``` `. Delete any ` ``` ` lines at the top or bottom.
5. Click **Commit changes…**, type the message `Add home page`, and click **Commit changes**.

You have just made your first **commit**: a saved snapshot of your project with a message saying what changed. Next week commits become your save points.

✅ **Checkpoint:** your repository's file list shows `README.md` and `index.html`.

#### Check the Pages settings (5 min)

For a repository named `[your-username].github.io`, GitHub usually switches Pages on for you. Check anyway:

1. Click the **Settings** tab of your repository (top row, right).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, **Source** should say **Deploy from a branch**, and **Branch** should be `main` with the folder `/ (root)`. If not, set them and click **Save**.

> [!NOTE]
> Menus move. If you can't find these settings, ask your assistant: "Where are the GitHub Pages settings for a repository, as of today?" and compare its answer with what you see.

#### Visit your live site (10 min)

1. Wait one or two minutes. To watch progress, open the **Actions** tab: a run called **pages build and deployment** shows a yellow dot while it works and a green check when it's done.
2. Back in **Settings → Pages**, a message appears at the top: **Your site is live at…** with a **Visit site** button.
3. Open `https://[your-username].github.io`. The address is all lowercase, even if your username has capitals.
4. Open the same address on your phone.
5. Post your URL where your instructor asks (for example the class chat) for the gallery walk.

#### Hand changes on GitHub (5 min, only if you couldn't type in your preview)

Open `index.html` in your repository, click the **pencil** icon (**Edit this file**), and make the three changes from [Part A4](#part-a4--make-three-changes-by-hand-20-min) (🔴 AI off). Click **Commit changes…**, write `Make three changes by hand`, commit, wait a minute and refresh your site.

✅ **Checkpoint:** your page, with your three hand changes, loads at `https://[your-username].github.io` on your laptop and your phone.

### Part B2 — Practice the three habits (25 min)

🟢 AI on.

**Why:** students in a Fall 2026 AI-coding course at Carnegie Mellon named three habits as their most useful practices ([CMU 15-113 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)). They work in every tool you'll use in this course.

> **The three habits**
>
> 1. **Ask me questions first.** Before the AI builds, have it ask you what it needs to know. Otherwise it fills the gaps with guesses.
> 2. **Show, don't describe.** A quick sketch, or a screenshot with the problem circled, says more than a paragraph.
> 3. **Say what works before asking for a change.** Name what must stay the same, so the AI doesn't "improve" it away.

More examples are in [Prompt Patterns](../../resources/prompt-patterns.md#the-three-habits). You'll use all three to add **one new section** to your page. Pick an idea with nothing personal in it: "Things I'm learning", "Now" (what you're up to this month), "Favorite places to visit", "Books I liked".

1. **Get your current code.** On GitHub, open `index.html` and click **Copy raw file** (the icon of two overlapping squares, top right of the code). This version has your hand changes.
2. **Ask me questions first.** Start a new chat (with Gemini's Canvas tool on) and send:

   ```text
   Goal: Add a new section to my home page: [section idea].
   Context: Here is my current page: [paste the complete index.html]
   Constraints: Before you write any code, ask me up to 5 questions about what I want in this section. Ask one question at a time and wait for my answer. Then summarize my answers in 3 bullet points and wait for me to say "go".
   Done when: You have asked your questions and I have confirmed your summary.
   ```

   Answer each question yourself. "Whatever you think" is not an answer: each one is a decision about *your* page.
3. **Show, don't describe.** On paper, sketch how the section should look: boxes for each part, with the real headings written in. Take a photo, **crop it** so only the sketch shows, and attach it with:

   ```text
   Here is a sketch of how I want the new section laid out. The words on the sketch are the real headings. Follow the arrangement in the sketch; don't build anything yet.
   ```

   Anything in a picture goes to the AI company, so no faces, names or other tabs. If your tool can't take images, describe the sketch as a list instead ("left: a heading; right: three cards in a row").
4. **Say what works, then ask for the change.**

   ```text
   Before you change anything: the heading, the colors, the button and the three changes I made by hand all work. Keep them exactly as they are.
   Goal: Add the new section we agreed on.
   Constraints: One HTML file. Change only what the new section needs. Give me the complete file in one code block.
   Done when: The new section appears below [an existing section], matches my sketch, and everything else looks and works exactly as before.
   ```

5. **Check it** against the "Done when", including your hand changes. Then publish: on GitHub, open `index.html`, click the **pencil** icon, select all (**Ctrl+A** / **Cmd+A**), paste the new code, click **Commit changes…**, write `Add [section] section`, and commit.
6. In your scratch note, write which habit changed the result most, and how.

✅ **Checkpoint:** your live page has the new section, everything else is unchanged, and your note says which habit helped most.

### Break (10 min)

### Part B3 — Check your page's accessibility (25 min)

🟢 AI on for the review.

**Why:** accessibility means people who use a screen reader, a keyboard instead of a mouse, zoom or high-contrast settings can use your page too. On a one-file page most problems take a minute to fix.

Run these checks on your **live** page and note every problem you find:

1. **Keyboard.** Click in the browser's address bar, then press **Tab** repeatedly. Can you reach your button? Can you always see where you are (a visible outline, called the **focus**)? Does **Enter** or **Space** press the button?
2. **Zoom.** Press **Ctrl** and **+** (Mac: **Cmd** and **+**) until the page is at 200%. Does anything overlap, get cut off or scroll sideways?
3. **Structure.** In the code, check:

   | Check | What good looks like |
   |---|---|
   | Language | The first lines include `<html lang="en">` (or your page's language) |
   | Title | There's a `<title>` that names the page |
   | Headings | Exactly one `<h1>`; sections use `<h2>`, in order |
   | Buttons | Things you click are real `<button>` elements, not clickable `<div>`s |
   | Images | Any `<img>` has an `alt="…"` description (or `alt=""` if it's only decoration) |
   | Motion | Any animation respects "reduce motion" settings |

4. **Ask for a review.**

   ```text
   Goal: Review my page for accessibility problems.
   Context: Here is my page: [paste the complete code]. I'm a beginner.
   Constraints: Don't rewrite the page. List at most five problems, most important first, each with the line it's on and a one-sentence fix. Include color contrast: is all text readable against its background?
   Done when: I have a short list I can check and fix one at a time.
   ```

   Don't take the list on trust: for each problem, find the line it names. For contrast, you can also check two colors with the free [WebAIM contrast checker](https://webaim.org/resources/contrastchecker/).
5. **Fix at least one problem** and commit it as `Fix accessibility: [what you fixed]`. Many fixes are a single attribute or color, so try it by hand first. Keep the rest of the list for homework.
6. **Optional:** try your device's built-in screen reader for two minutes: **VoiceOver** on a Mac (**Cmd+F5**), **Narrator** on Windows (**Ctrl+Windows+Enter**), **ChromeVox** on a Chromebook (**Ctrl+Alt+Z**). Press the same keys to turn it off. The [Screen reader and keyboard guide](../../resources/accessibility.md#making-your-own-pages-accessible) has more checks for your own pages.

✅ **Checkpoint:** you have a written list of problems, and at least one fix is committed.

### Part B4 — Start `PROMPTS.md` (15 min)

**Why:** every project in this course keeps a log of how you used AI. It shows your process, and it's part of your grade. It's written in **Markdown**, a simple text format where `#` makes a heading and `-` makes a bullet point.

1. Open the [PROMPTS.md template](../../templates/PROMPTS.md) in a new tab and copy its text. On the course website, use the copy button on the template's copy block. On GitHub, use **Copy raw file** (two overlapping squares, top right of the file).
2. In your home-page repository, click **Add file** → **Create new file**. Name it `PROMPTS.md`.
3. Paste the template.
4. Fill in (🟢 AI on for formatting the log entries; the content is yours):
   - **Tools used:** for example `Gemini (Canvas), GitHub website`.
   - **Three log entries:** your first prompt from Part A2; the customization prompt that worked best (or went most wrong); your three-habits prompts from Part B2, with which habit helped most. For each: today's date, what happened, and what you checked yourself. For **Commit**, write the commit message, such as `Add home page`.
   - **What I wrote or decided myself** (🔴 AI off, your own words): your three hand changes from Part A4, and your accessibility fix if you made it by hand.
5. Commit with the message `Start PROMPTS.md`.
6. Click the file to see it formatted.

> [!TIP]
> With Gemini's Keep Activity off you can't reopen or share old chats, so copy each prompt that matters into `PROMPTS.md` (or your scratch note) as you go. If you use a tool that can make a **share link** to a chat, you may paste that link into an entry too, but only for chats with nothing personal in them: anyone with the link can read the chat.

> [!WARNING]
> Your repository is public, so `PROMPTS.md` is public too. Never paste passwords, keys or personal information into it.

✅ **Checkpoint:** `PROMPTS.md` is in your repository with a "Tools used" line, at least three log entries, and your three hand changes.

### Part B5 — Write your personal AI-use rules (20 min)

🔴 AI off. Close the AI tabs.

**Why:** the course has rules about AI use (the 🟢 AI on, 🟡 AI limited and 🔴 AI off labels). Inside them, you decide how *you* want to use it. In one study, students who had written their own rules for using AI did better than those who hadn't ([Azimi, 2026](https://arxiv.org/abs/2609.16784)). You'll revise these rules in week 8 and see what changed.

Write **4 to 6 rules**, each one sentence, in the form "When…, I will…" or "I will not…". Cover:

- one thing you're happy to use AI for, and why;
- one thing you'll do yourself even when AI could (and why it matters to you);
- how you'll check AI's work before you trust it;
- what you will never paste into an AI tool;
- what you'll do when you're stuck or frustrated (the two-strikes rule, a break, asking a person);
- optional: a rule about time, or about free-tier limits.

An example of the form, not a rule to copy: *"When the AI writes code I can't explain, I will ask it to walk me through it before I commit."*

Submit your rules on **Canvas**, the course's learning management system (not Gemini's Canvas tool), as the assignment "Personal AI-use rules v1". Not in your repository: they're personal writing. There are no wrong rules; they're scored for completion. Not finished? Submit them before next week's Studio A.

✅ **Checkpoint:** your 4–6 rules are submitted on Canvas.

### Part B6 — Catch up, or start the homework (10 min, if time)

- **Behind?** Finish B1 (a live page) first, then B4 and B5. Ask for help now rather than at home.
- **Done?** Start homework task 1, the Projects section ([homework](homework.md)), or try the same prompt in a second assistant (Part A6).

### Before you leave Studio B

- [ ] Your live URL works and is posted for the gallery walk.
- [ ] `index.html` and `PROMPTS.md` are in your `[your-username].github.io` repository.
- [ ] Your personal AI-use rules are on Canvas.
- [ ] You did the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1) (🔴 AI off). It's scored for completion, not correctness.
- [ ] You know what's in the [homework](homework.md), including the AI Fluency course.

---

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Gemini says Canvas or Gemini isn't available | School or work Google account | Sign out and use a personal Google account |
| No Canvas option anywhere | Menu moved, or the feature is rolling out differently | Start the prompt with "Use Canvas to…"; otherwise use a fallback (see below) |
| You closed the chat tab and the chat is gone | Keep Activity is off, so Gemini doesn't keep chats | Expected. Use your saved `index.html` (Part A5): start a new chat and paste it in |
| The preview is blank | An error in the code, or it used an outside file | Ask: "The preview is blank. Check the code for errors and make sure it's one file with no external files." |
| The preview works, but there's no Download button | Not every tool has one | Copy the code and save it yourself ([No preview? Run it yourself](#no-preview-run-it-yourself)), or use Option B in Part B1 |
| `404 — There isn't a GitHub Pages site here` | Not deployed yet | Wait 2 minutes, then refresh. Check the **Actions** tab for a green check |
| Still 404 after 5 minutes | Repository name wrong | **Settings → General → Repository name** must be exactly `[your-username].github.io`. Rename it, then wait again |
| Still 404, name is right | File name, location or settings | The file must be `index.html`, lowercase, at the top level (not in a folder). Check **Settings → Pages** and that the repository is **Public** |
| The site shows your README text instead of your page | `index.html` is missing or misnamed | Check the file list; rename the file if needed (open it, pencil icon, edit the name) |
| The site shows raw code as text | Wrong file name, or chat formatting pasted in | Make sure the name ends in `.html`; delete any ` ``` ` lines at the top and bottom |
| The live site looks different from the preview | The preview loaded something your file doesn't include | Ask the AI to "put everything in one file with no external files or images", then update `index.html` |
| Your change doesn't show on the live site | Not deployed yet, or the browser remembers the old page | Wait a minute, then hard-refresh: **Ctrl+Shift+R** (Windows, ChromeOS) or **Cmd+Shift+R** (Mac) |
| The AI can't read your sketch | Some tools or free plans don't take images | Describe the sketch as a list ("top: heading; below: three cards in a row") |
| You hit a usage limit in the assistant | Free tiers have limits (see the [Tool Handout](../../TOOLS.md)) | Switch to a fallback and paste in your current code. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |

More fixes: [Troubleshooting](../../resources/troubleshooting.md).

## If your tool is down

Switch to a fallback for the chat-assistant layer in the [Tool Handout](../../TOOLS.md): **Claude (Artifacts)** has a live preview (18+ only); **ChatGPT** gives code you run yourself ([No preview? Run it yourself](#no-preview-run-it-yourself)). The prompts in this lab work unchanged. If you switch partway, paste your current code into the new chat first: the new tool starts with an empty context window.
