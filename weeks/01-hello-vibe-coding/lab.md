# Week 1 Lab — Hello, Web

> **Goal:** build a one-file personal home page with an AI, look inside it, change it by hand, and publish it at `https://<your-username>.github.io`.
> **Time:** about 100 minutes, including a 10-minute break.
> **You need:** a laptop, your GitHub account, a personal Google account, and the privacy settings from week 0.

In this lab you use the simplest version of the course workflow: **describe → generate → run → customize**. You describe the page, the AI generates the code, you run it in the live preview, and then you customize it one change at a time.

| Part | What you do | Time | AI use |
|---|---|---|---|
| 0 | Accounts and privacy check | 10 min | — |
| 1 | Build "Hello, Web" | 30 min | 🟢 Expected |
| — | Break | 10 min | — |
| 2 | Look inside, then three changes by hand | 20 min | 🟢 for the tour, 🔴 for the hand changes |
| 3 | Publish on GitHub Pages | 20 min | 🟢 if you get stuck |
| 4 | Start `PROMPTS.md` | 10 min | 🟢 for the log entries, 🔴 for "what I wrote myself" |

Stuck for more than 5 minutes? Check [Troubleshooting](#troubleshooting), ask a neighbor, then raise your hand.

---

## Part 0 — Accounts and privacy check (10 min)

**Why:** free AI tools may store your chats, train on them and let human reviewers read samples. You set the privacy settings in week 0; now check they stuck.

1. Open [setup/privacy-settings.md](../../setup/privacy-settings.md) in one browser tab.
2. In another tab, sign in to **Gemini** at `gemini.google.com` with your **personal** Google account. A school or work account may block Gemini or hide Canvas.
3. Check the Gemini setting listed in [setup/privacy-settings.md](../../setup/privacy-settings.md). If you plan to use a fallback (ChatGPT or Claude), check its setting too.
4. Sign in to **github.com**. Note your exact username: click your profile picture (top right) and read the name in bold.
5. Write your username here or on paper: `https://________________.github.io`. That will be your site's address.

> [!WARNING]
> Your page will be **public**. Use your first name or a nickname. Do not put your surname, email, phone number, address, student ID or anything about other people into the page, and do not paste any of it into the AI.

✅ **Checkpoint:** you are signed in to Gemini (personal account) and GitHub, your privacy settings are set, and you know your GitHub username.

---

## Part 1 — Build "Hello, Web" (30 min)

🟢 AI expected.

### 1.1 Open the live preview

1. In Gemini, start a **new chat**.
2. Turn on **Canvas**: look for it under **Tools** (or a **+** menu) in the prompt box.

> [!NOTE]
> Menus move. If you can't find Canvas, start your prompt with "Use Canvas to…", or ask Gemini where Canvas is. Using a fallback? Claude shows a live preview called an **Artifact**; with ChatGPT, see [No preview? Run it yourself](#no-preview-run-it-yourself).

### 1.2 Your first prompt

A good prompt has four parts: **Goal · Context · Constraints · Done when**. You'll study them properly next week; for now, fill in the blanks. Replace everything in `[square brackets]`. More starters: [prompt-starters.md](prompt-starters.md).

```text
Goal: Make a one-page personal home page about me that I can publish on the web.
Context: I'm a beginner in a course called Vibe Coding 101 and I have never coded. The page is for classmates and friends. About me: my name is [first name or nickname]. I'm interested in [interest 1], [interest 2] and [interest 3]. Right now I'm learning [something]. I like the colors [color 1] and [color 2].
Constraints: One single HTML file with the CSS and JavaScript inside it. No frameworks, no libraries, no external images or fonts. It must look good on a phone and on a laptop. Do not add an email address, phone number, surname or social-media links.
Done when: The preview shows my name as a big heading, a short "About me" paragraph, a list of my interests, and one button that does something fun when I click it.
```

Send it. Gemini writes the code and shows it in the Canvas panel. Look for a **Preview** view (the page) and a **Code** view (the text that makes it).

✅ **Checkpoint:** the preview shows a page with your name as a heading, an "About me" section, your interests and a button. Click the button. Something happens.

> [!TIP]
> Your page looks different from your neighbor's even with the same prompt. That's normal: the model picks among likely answers, so each run differs.

### 1.3 Customize: at least 5 iterations

Now improve the page **one change per prompt**. Small, specific requests beat "make it better", and when something breaks you know which change did it. Keep a scratch note (paper or a notes app) of each prompt and what happened; you'll need it in Part 4.

Use these, the ones in [prompt-starters.md](prompt-starters.md#customization-prompts), or your own. Each is in the four-part form, kept short:

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

More ready-made customization prompts (phone layout, footer, fonts, animation) are in [prompt-starters.md](prompt-starters.md#customization-prompts).

Before each prompt, **predict** what will change; afterwards, check the preview against your "Done when". If a change makes things worse, say so: "That broke the layout on narrow screens. Undo that change."

> [!TIP]
> If the AI keeps failing at the same thing after **two** attempts, stop. Start a fresh chat, paste your current code, and describe the problem more precisely. That's the **two-strikes rule**, and you'll use it all course.

✅ **Checkpoint:** you have sent at least 5 customization prompts, the preview shows your improved page, and your scratch note lists what each prompt did.

### No preview? Run it yourself

If your assistant shows code but no live preview (ChatGPT may not have one; see [TOOLS.md](../../TOOLS.md)), you can run the code yourself. Use the **copy** button on the code block so you get exactly the code, without extra lines such as ` ```html `.

- **Quickest:** do [Part 3](#part-3--publish-on-github-pages-20-min) now and use your live site as the preview. Edit the file on GitHub (pencil icon), commit, wait a minute, refresh.
- **On your computer:** open a plain-text editor: **Notepad** on Windows, **TextEdit** on a Mac (then choose **Format → Make Plain Text**), or the **Text** app on a Chromebook. Paste the code and save it as `index.html` (on Windows, set "Save as type" to **All files**). Double-click the file to open it in your browser. After each change, paste the new code, save, and refresh the browser.

---

## Break (10 min)

Stand up. Before you go, make sure your chat is saved in your assistant's history. Don't close the tab.

---

## Part 2 — Look inside (20 min)

**Why:** right now the page works and you don't know why. "If you can't explain it, you didn't build it." This part is where you start to own it.

### 2.1 Get a guided tour (10 min)

🟢 AI expected. In the same chat, send:

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

### 2.2 Three changes by hand (10 min)

🔴 **No AI for this step.** You will change the code yourself.

Where to type:

- **Gemini Canvas:** switch to the **Code** view, click into the code and type. Switch back to **Preview** to see the result.
- **A preview that won't let you type** (such as Claude Artifacts): do this step right after Part 3, by editing `index.html` on GitHub (open the file, click the **pencil** icon, change it, **Commit changes**, wait a minute, refresh your site). Or use the local-file method from [No preview? Run it yourself](#no-preview-run-it-yourself).

Make these three changes. **Predict** what you'll see before you look.

| # | Change | How to find it | Example |
|---|---|---|---|
| 1 | **A text** | Look for the words you see on the page, e.g. your heading inside `<h1>…</h1>` | `<h1>Hi, I'm Sam</h1>` → `<h1>Welcome to Sam's corner</h1>` |
| 2 | **A color** | In the `<style>` section, find a color: a word (`teal`), a code starting with `#` (`#3b82f6`), or `rgb(…)` | `background: #f5f5f5;` → `background: lavender;` |
| 3 | **A number** | In the `<style>` section, find a size such as `font-size`, `padding` or `border-radius`; or a number in the `<script>` section | `font-size: 2.5rem;` → `font-size: 4rem;` |

Colors to try: `tomato`, `gold`, `seagreen`, `rebeccapurple`, `lavender`, `navy`.

> [!NOTE]
> If something breaks, undo with **Ctrl+Z** (Windows, ChromeOS) or **Cmd+Z** (Mac). A missing `;`, `}` or `>` is the usual cause.

Write down each change in your scratch note: what you changed, from what to what, and what happened. These go into `PROMPTS.md` under "What I wrote or decided myself".

> [!IMPORTANT]
> The AI can't see edits you make outside its chat. If you edited the code somewhere else (on GitHub, or in a file on your computer) and then want the AI to make another change, paste your current code back into the chat first. That's the **context window** from today's talk. (Edits typed into Gemini's Canvas are usually visible to Gemini; if it seems to ignore them, paste the code back in.)

✅ **Checkpoint:** the preview shows your three hand-made changes, and you can say which line you changed for each.

---

## Part 3 — Publish on GitHub Pages (20 min)

**Why:** a page in a chat window only exists for you. On GitHub Pages it has a real address anyone can visit. GitHub stores your file in a **repository** (a project folder GitHub keeps track of), and **GitHub Pages** serves it as a website.

New to the GitHub website? Keep [setup/github-basics.md](../../setup/github-basics.md) open alongside.

### 3.1 Get your code (2 min)

You need either the file or the code:

- **If your tool has a Download button:** download the file and check its name. It must be exactly `index.html` (all lowercase). Rename it if it's `index (1).html`, `Untitled.html` or `index.html.txt`.
- **If there's no download:** open the **Code** view, use the copy button (or click in the code, then Ctrl+A / Cmd+A and copy). You'll paste it in step 3.3.

### 3.2 Create the repository (5 min)

1. On github.com, click **+** (top right) → **New repository**.
2. **Owner:** your username. **Repository name:** your username followed by `.github.io`. Example: if your username is `sam-rivera`, type `sam-rivera.github.io`. It must match exactly.
3. Choose **Public**.
4. Turn on **Add a README file** (sometimes shown as "Add README").
5. Click **Create repository**.

✅ **Checkpoint:** you see your new repository with a `README.md` file, and the name at the top is `<your-username>/<your-username>.github.io`.

### 3.3 Add `index.html` (5 min)

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

### 3.4 Check the Pages settings (3 min)

For a repository named `<username>.github.io`, GitHub usually switches Pages on for you. Check anyway:

1. Click the **Settings** tab of your repository (top row, right).
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**, **Source** should say **Deploy from a branch**, and **Branch** should be `main` with the folder `/ (root)`. If not, set them and click **Save**.

> [!NOTE]
> Menus move. If you can't find these settings, ask your assistant: "Where are the GitHub Pages settings for a repository, as of today?" and compare its answer with what you see.

### 3.5 Visit your live site (5 min)

1. Wait one or two minutes. To watch progress, open the **Actions** tab: a run called **pages build and deployment** shows a yellow dot while it works and a green check when it's done.
2. Back in **Settings → Pages**, a message appears at the top: **Your site is live at…** with a **Visit site** button.
3. Open `https://<your-username>.github.io`. The address is all lowercase, even if your username has capitals.
4. Open the same address on your phone.
5. Post your URL where your instructor asks (for example the class chat) for the gallery walk.

✅ **Checkpoint:** your page loads at `https://<your-username>.github.io` on your laptop and your phone. (If your preview didn't let you type, make your three hand changes from Part 2.2 now, on GitHub.)

---

## Part 4 — Start `PROMPTS.md` (10 min)

**Why:** every project in this course keeps a log of how you used AI. It shows your process, and it's part of your grade. It's written in **Markdown**, a simple text format where `#` makes a heading and `-` makes a bullet point.

1. In a new tab, open the course template [templates/PROMPTS.md](../../templates/PROMPTS.md). Click the **Raw** button (or the copy icon) and copy all of it.
2. In your home-page repository, click **Add file** → **Create new file**. Name it `PROMPTS.md`.
3. Paste the template.
4. Fill in:
   - **Tools used:** for example `Gemini (Canvas), GitHub web interface`.
   - **Two log entries:** your first prompt from 1.2, and the customization prompt that worked best (or went most wrong). Add today's date, what happened, and what you checked yourself. For **Commit**, write `Add home page`.
   - **What I wrote or decided myself** (🔴 your own words): your three hand-made changes from Part 2.2.
5. Commit with the message `Start PROMPTS.md`.
6. Click the file to see it formatted.

> [!TIP]
> Many assistants can make a **share link** to a chat. You may paste it into a log entry, but only share chats with nothing personal in them: anyone with the link can read the chat.

> [!WARNING]
> Your repository is public, so `PROMPTS.md` is public too. Never paste passwords, keys or personal information into it.

✅ **Checkpoint:** `PROMPTS.md` is in your repository with a "Tools used" line, at least two log entries, and your three hand changes.

---

## Before you leave

- [ ] Your live URL works and is posted for the gallery walk.
- [ ] `index.html` and `PROMPTS.md` are in your `<username>.github.io` repository.
- [ ] You did the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1) (🔴 no AI).
- [ ] You know what's in [homework.md](homework.md).

## Stretch goals (if you finish early)

- **Break it on purpose.** Delete one `}` in the `<style>` section and look at the page. Undo. Delete one `>` from an HTML tag. Browsers try hard to show *something*, which is why broken code can look almost right.
- **Start the homework:** add a **Projects** section (see [homework.md](homework.md)).

## Troubleshooting

| Problem | Likely cause | Fix |
|---|---|---|
| Gemini says Canvas or Gemini isn't available | School or work Google account | Sign out and use a personal Google account |
| No Canvas option anywhere | Menu moved, or the feature is rolling out differently | Start the prompt with "Use Canvas to…"; otherwise use a fallback (see below) |
| The preview is blank | An error in the code, or it used an outside file | Ask: "The preview is blank. Check the code for errors and make sure it's one file with no external files." |
| The preview works, but there's no Download button | Not every tool has one | Use Option B in step 3.3 (copy and paste) |
| `404 — There isn't a GitHub Pages site here` | Not deployed yet | Wait 2 minutes, then refresh. Check the **Actions** tab for a green check |
| Still 404 after 5 minutes | Repository name wrong | Settings → General → **Repository name** must be exactly `<your-username>.github.io`. Rename it, then wait again |
| Still 404, name is right | File name, location or settings | The file must be `index.html`, lowercase, at the top level (not in a folder). Check **Settings → Pages** (step 3.4) and that the repository is **Public** |
| The site shows your README text instead of your page | `index.html` is missing or misnamed | Check the file list; rename the file if needed (open it, pencil icon, edit the name) |
| The site shows raw code as text | Wrong file name, or chat formatting pasted in | Make sure the name ends in `.html`; delete any ` ``` ` lines at the top and bottom |
| The live site looks different from the preview | The preview loaded something your file doesn't include | Ask the AI to "put everything in one file with no external files or images", then update `index.html` |
| Your change doesn't show on the live site | Not deployed yet, or the browser remembers the old page | Wait a minute, then hard-refresh: **Ctrl+Shift+R** (Windows, ChromeOS) or **Cmd+Shift+R** (Mac) |
| You hit a usage limit in the assistant | Free tiers have limits ([TOOLS.md](../../TOOLS.md)) | Switch to a fallback and paste in your current code. See [resources/troubleshooting.md](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |

More fixes: [resources/troubleshooting.md](../../resources/troubleshooting.md).

## If your tool is down

Switch to a fallback for the chat-assistant layer in [TOOLS.md](../../TOOLS.md): **Claude (Artifacts)** has a live preview (18+ only); **ChatGPT** gives code you run yourself ([No preview? Run it yourself](#no-preview-run-it-yourself)). The prompts in this lab work unchanged. If you switch partway, paste your current code into the new chat first: the new tool starts with an empty context window.
