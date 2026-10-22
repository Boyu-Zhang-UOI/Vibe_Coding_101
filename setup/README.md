# Week 0 — Pre-work

> Get your accounts, privacy settings and browser-based coding environment ready before Studio 1, so that week 1 is about building, not signing up.

| Item | Details |
|---|---|
| **Before Studio 1** | About 60–90 minutes: two accounts, privacy settings, your first AI-built page, a test Codespace, and GitHub Copilot switched on |
| **During week 1** | About 40 minutes of short tasks: sign the safety contract and take the self-assessment, both on Canvas (the course's learning management system), and apply for GitHub Education. The AI fluency pre-work (about 3 hours) is part of [week 1 homework](../weeks/01-hello-vibe-coding/homework.md) |
| **You need** | A laptop with a modern browser, a personal email address, your phone (for two-factor authentication) |
| **AI use** | 🟢 AI on: your first page, and asking a tool where a setting is · 🔴 AI off: the self-assessment |

**Canvas** is the course's learning management system: the website where you submit private work and see your grades. Your instructor will send you the link.

> [!NOTE]
> **Two things called "Canvas".** Gemini also has a tool called **Canvas**, which shows a live preview of the code it writes, right in the chat. You'll use it in step 3 and in weeks 1–3. This page says "Gemini's Canvas tool" for that one, and plain "Canvas" for the course website.

Work through the steps **in order**. The times are for a first try; a new tool often takes longer the first time, and that's normal. If a step fails, keep going with the others and ask for help (see [If you get stuck](#if-you-get-stuck) at the bottom).

## Before Studio 1

### Your first hour: the quick start

| # | Do this | About |
|---|---|---|
| 1 | Create or confirm a **personal** Google account and a GitHub account, with two-factor authentication on | 15–20 min |
| 2 | Turn off the "train on my chats" settings | 10 min |
| 3 | **Your first win:** ask a chat assistant for a small web page and watch it run in the preview | 15 min |
| 4 | Open a test Codespace and see a test page load from it | 15–20 min |
| 5 | Turn on GitHub Copilot and ask it one question | 10 min |
| 6 | Skim the safety contract and note your questions for Studio 1 | 10 min |

The steps below give the details for each one.

**Check your device first (2 min).** You don't need a powerful computer. All the coding in this course runs in your browser through **GitHub Codespaces**, a code editor that runs on a computer in the cloud, so you install nothing.

- **Any laptop works:** Windows, macOS, Linux or a Chromebook, with an up-to-date browser. Chrome, Edge and Firefox work best with Codespaces.
- **A phone or tablet is not enough** for the labs. You need a keyboard and a screen wide enough for an editor and a preview side by side.
- **Browser extensions:** strict ad blockers and privacy extensions sometimes break Codespaces. If step 4 fails, try a private window or pause the extension for `github.com` and `github.dev`.
- If your internet connection is unreliable, or you use a screen reader or keyboard only, tell your instructor before Studio 1. The [accessibility guide](../resources/accessibility.md) covers the tools used in this course.

Installing tools on your own laptop is optional and not needed for any week: [local-setup.md](local-setup.md).

### Step 1 — Create or confirm your accounts (15–20 min)

Full details, including which accounts you'll need later in the course: [accounts.md](accounts.md).

**1a. A personal Google account.** You'll use it for Gemini (weeks 1–3), Google AI Studio (week 3) and a Gemini API key (week 5).

- Use a **personal** account (for example, a Gmail address), not a school or work account. School and work Google accounts often have Gemini or Google AI Studio switched off by an administrator, and your school or employer may be able to see what you do in them.
- If you don't have one, create one at [accounts.google.com](https://accounts.google.com/signup).

**1b. A GitHub account.** GitHub is where every project in this course is saved and published. Sign up at [github.com/signup](https://github.com/signup) and choose the Free plan.

- **Pick your username carefully.** It becomes part of your portfolio address: `https://[username].github.io`. Use something you'd be happy to put on a CV, such as `alexkim` or `alex-kim-dev`. Avoid jokes, birth years and your school's name.
- Turn on **two-factor authentication** (a second check, such as a code from an app on your phone, when you sign in). GitHub requires it for accounts that contribute code. Save the recovery codes in a password manager. [How and why](accounts.md#security-hygiene)
- Already have an account from work? If your employer manages it (you sign in through your company), create a separate personal account for this course.

**1c. A second chat assistant (recommended, by week 2).** In week 2 you compare two AI assistants. Create a free [ChatGPT](https://chatgpt.com/) account, or a [Claude](https://claude.ai/) account if you're 18 or older. You can do this now or during week 1.

> [!TIP]
> **Students:** if you have your student email or ID to hand, apply for GitHub Education now too ([details](#apply-for-github-education-students-10-min-plus-waiting)). It's the one week-1 task that benefits from an early start, because verification can take days.

✅ **Checkpoint:** you can sign in to your personal Google account and to GitHub, and GitHub asks for your second factor when you sign in on a new browser.

> [!NOTE]
> Some tools in this course are for adults only (18+), and some can't be used to serve people in the EEA, UK or Switzerland. [TOOLS.md](../TOOLS.md) lists the age rules. If either applies to you, tell your instructor **before Studio 1**; the adjusted tool list is in [instructor/variants.md](../instructor/variants.md).

### Step 2 — Change your privacy settings (10 min)

Most free AI tools use your conversations to train their models unless you switch that off, and some let human reviewers read samples. Change the settings **before** you type anything into them.

Follow [privacy-settings.md](privacy-settings.md) for every tool you signed up for in step 1. At a minimum:

- **Gemini:** turn off *Keep Activity*. That's the course setting. Gemini then won't keep your chat history, so from week 1 you copy the prompts that matter into your `PROMPTS.md` log as you go ([why](privacy-settings.md#gemini)).
- **ChatGPT / Claude** (if you created them): turn off the "improve the model" setting.
- **GitHub Copilot:** turn off use of your data for training (you'll do this in step 5).

✅ **Checkpoint:** for each tool you use, you can point to the setting you changed, or you know that the tool has no opt-out and you must never paste personal or secret data into it.

### Step 3 — Your first win: a page in a chat preview (15 min)

🟢 **AI on.** This is a taste of week 1: you describe a page, and the AI builds it in front of you.

1. Open [gemini.google.com](https://gemini.google.com/) with your personal Google account.
2. Start a new chat and choose Gemini's **Canvas** tool (look under **Tools** or the **+** button; menus move).
3. Paste this prompt and send it:

   ```text
   Goal: A one-file web page that says "Hello from Vibe Coding 101" in big letters, with a button that changes the background to a random color.
   Context: I'm a complete beginner. I'll look at the page in the preview.
   Constraints: One HTML file with the CSS and JavaScript inside it. No libraries.
   Done when: The preview shows the heading and the button, and each click changes the background color.
   ```

4. Wait for the preview to appear next to the chat, then click the button a few times.
5. Ask for one change, for example `Make the button bigger and give it rounded corners.`, and watch the preview update.

✅ **Checkpoint:** the page appears in the preview, and the button changes the background color. You've just built a working web page with AI.

There's nothing to save today. With Keep Activity off, the chat won't stay in your history, and that's fine.

**No Canvas tool in Gemini, or no preview?** Use another chat assistant with a live preview from [TOOLS.md](../TOOLS.md) (Claude's Artifacts, if you're 18 or older). ChatGPT shows the code but doesn't run it.

### Step 4 — Open a test Codespace (15–20 min)

This is a dress rehearsal for the weeks when you work in Codespaces. Doing it now means any problem shows up early.

1. On GitHub, create a new **private** repository called `vc101-practice`, and tick **Add a README file**. ([Step-by-step instructions](github-basics.md#create-a-repository))
2. On the repository page, click the green **Code** button → **Codespaces** tab → **Create codespace on main**. A new tab opens. The first start takes a minute or two.
3. When you see the editor, open the terminal (the panel at the bottom; if it's hidden, press `` Ctrl+` ``). Type these two commands, pressing Enter after each:

   ```bash
   echo "<h1>Hello from my Codespace</h1>" > index.html
   python3 -m http.server 8000
   ```

4. A message appears saying your application on port 8000 is available. Click **Open in Browser**.

   ✅ **Checkpoint:** a new tab shows "Hello from my Codespace" in large text.

5. Go back to the Codespace tab. Click in the terminal and press `Ctrl+C` to stop the server.
6. Leave the codespace open for step 5.

More on what you just did, and what to do when something goes wrong: [codespaces.md](codespaces.md).

### Step 5 — Turn on GitHub Copilot (10 min)

GitHub Copilot is the AI assistant built into the editor. You'll use it from week 4.

1. Go to GitHub's Copilot settings page: [github.com/settings/copilot](https://github.com/settings/copilot). If you're offered **Copilot Free**, turn it on. If your GitHub Education application has been approved, you may see **Copilot Student** instead; use that.
2. On the same page (or its **Features** tab), turn off the setting that lets GitHub use your data for AI model training. ([Details](privacy-settings.md#github-copilot))
3. Back in your `vc101-practice` codespace (reopen it from [github.com/codespaces](https://github.com/codespaces) if you closed it), open the Chat view (the chat icon at the top of the window) and, in **Ask** mode, type:

   ```text
   In one short paragraph, explain what the command "python3 -m http.server 8000" does.
   ```

   ✅ **Checkpoint:** Copilot answers in the chat panel.

4. **Stop the codespace** so it doesn't use up your free monthly hours: open [github.com/codespaces](https://github.com/codespaces), click the **…** next to your codespace, and choose **Stop codespace**.

> [!NOTE]
> Menus move. If you can't find a button or setting named here, ask the assistant where it is, or check [codespaces.md](codespaces.md#turn-on-github-copilot-free).

Copilot Free has a monthly allowance. You don't need to worry about it yet; [TOOLS.md](../TOOLS.md#credits-budget-for-the-course) explains how to plan it for weeks 4–8.

### Step 6 — Skim the safety contract (10 min)

Skim the [safety contract](safety-contract.md). It has nine rules and three project rules, and each rule starts with a one-line version in plain English and the week it's taught. Don't worry about the technical words yet; Studio 1 introduces the contract, and you sign it on Canvas during week 1. Write down anything that worries you or doesn't make sense, and bring it to Studio 1.

✅ **Checkpoint:** you can say, in your own words, why you should never paste an API key into a chat assistant.

### You're ready for Studio 1 when

- [ ] I can sign in to my **personal** Google account and open Gemini.
- [ ] I have a GitHub account with a professional username, two-factor authentication is on, and my recovery codes are saved.
- [ ] I changed the privacy settings in every AI tool I signed up for, and Gemini's Keep Activity is off.
- [ ] I built a small page in a chat preview and changed it once.
- [ ] I opened a Codespace, ran a command in its terminal, saw my page in the browser, and **stopped** the codespace.
- [ ] GitHub Copilot answers me in the Codespace chat, and its training setting is off.
- [ ] I skimmed the safety contract and wrote down my questions.
- [ ] I know where to find [TOOLS.md](../TOOLS.md) (current tools and limits) and [troubleshooting](../resources/troubleshooting.md).

## During week 1

About 40 minutes, plus waiting time for GitHub Education. Unless your instructor sets another date on Canvas, these are due before week 2's Studio A (default 11:59 pm the night before).

### Sign the safety contract on Canvas (15 min)

Read the full [safety contract](safety-contract.md) now that Studio 1 has introduced it. Then open the safety contract assignment on Canvas and type the statement, your name and the date. Ask your instructor about anything that worries you.

Your signed contract is personal, so it goes on Canvas only. **Don't commit it to a repository.**

### Take the pre-course self-assessment on Canvas (15 min)

🔴 **AI off.** Read the [self-assessment](../assessment/self-assessment.md) and submit your answers on Canvas. It is **not graded**. It tells your instructor where the class is starting from, and at the end of week 8 you'll take it again and see how far you've come. Take it early in the week, before the course has taught you much. Answer honestly: "I don't know what that means" is a useful answer.

### Apply for GitHub Education (students, 10 min plus waiting)

Apply at [education.github.com](https://education.github.com/) for the student benefits, which include **GitHub Copilot Student**. You'll be asked for proof that you're a student, such as your school email address or a photo of your student ID. Approval can take days, so apply as early in the week as you can. While you wait, use Copilot Free. You'll want Copilot Student from week 4.

### AI fluency pre-work (week 1 homework, about 3 hours)

This is part of your week 1 homework, not week 0: a free online course on working with AI that doesn't depend on any one tool (Anthropic's "AI Fluency: Framework & Foundations", or an equivalent your instructor names), followed by a short AI-free response on Canvas. The link and the questions are in the [week 1 homework](../weeks/01-hello-vibe-coding/homework.md).

### Optional: warm up (about 1 hour)

If you've never built anything with AI, try DeepLearning.AI's free [Build with Andrew](https://www.deeplearning.ai/courses/build-with-andrew). It takes about an hour, assumes no coding or AI background, and works with any chat assistant. Already comfortable? Skim the [glossary](../resources/glossary.md) and the [Safe Loop](../resources/safe-loop.md) instead.

### Done with week 0 when

- [ ] My signed safety contract is on Canvas, and not in any repository.
- [ ] My pre-course self-assessment is on Canvas.
- [ ] (Students) I have applied for GitHub Education.
- [ ] I have a second chat assistant (ChatGPT, or Claude if I'm 18+) ready for week 2.

## If you get stuck

1. Check [resources/troubleshooting.md](../resources/troubleshooting.md) and the troubleshooting section of [codespaces.md](codespaces.md#troubleshooting).
2. Ask the tool's own assistant ("Where is the setting that…?"). Never paste a password or recovery code into it.
3. Contact your instructor **before** Studio 1 with what you tried and a screenshot of the problem. Account problems are much easier to solve before the first studio than during it.

Next: [Week 1 — Hello, Vibe Coding](../weeks/01-hello-vibe-coding/README.md).
