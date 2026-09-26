# Week 0 — Pre-work

> Get your accounts, privacy settings and browser-based coding environment ready before the first studio, so that week 1 is about building, not signing up.

| | |
|---|---|
| **Time** | About 2 hours, plus an optional 1-hour warm-up |
| **You need** | A laptop with a modern browser, a personal email address, your phone (for two-factor authentication) |
| **You'll finish with** | A Google account, a GitHub account, safe privacy settings, a signed safety contract, and a tested Codespace with GitHub Copilot |
| **Due** | Before the week 1 studio |

Work through the steps **in order**. Each one takes the time shown. If a step fails, keep going with the others and ask for help (see [If you get stuck](#if-you-get-stuck) at the bottom).

> [!IMPORTANT]
> **Are you a student?** Do step 1c (GitHub Education) **today**, even if you do nothing else. Verification can take several days, and it gives you a better free GitHub Copilot plan for weeks 4–8.

## Step 1 — Create or confirm your accounts (30 min)

Full details, including which accounts you'll need later in the course: [accounts.md](accounts.md).

**1a. A personal Google account.** You'll use it for Gemini (weeks 1–3), Google AI Studio (week 3) and a Gemini API key (week 5).

- Use a **personal** account (for example, a Gmail address), not a school or work account. School and work Google accounts often have Gemini or Google AI Studio switched off by an administrator, and your school or employer may be able to see what you do in them.
- If you don't have one, create one at [accounts.google.com](https://accounts.google.com/signup).

**1b. A GitHub account.** GitHub is where every project in this course is saved and published. Sign up at [github.com/signup](https://github.com/signup) and choose the Free plan.

- **Pick your username carefully.** It becomes part of your portfolio address: `https://<username>.github.io`. Use something you'd be happy to put on a CV, such as `alexkim` or `alex-kim-dev`. Avoid jokes, birth years and your school's name.
- Turn on **two-factor authentication** (a second check, such as a code from an app on your phone, when you sign in). GitHub requires it for accounts that contribute code. Save the recovery codes in a password manager. [How and why](accounts.md#security-hygiene)
- Already have an account from work? If your employer manages it (you sign in through your company), create a separate personal account for this course.

**1c. GitHub Education (students only).** Apply at [education.github.com](https://education.github.com/) for the student benefits, which include **GitHub Copilot Student**. You'll be asked for proof that you're a student, such as your school email address or a photo of your student ID. Approval can take days, so apply now. While you wait, use Copilot Free (step 6).

**1d. A second chat assistant (recommended).** In week 2 you compare two AI assistants. Create a free [ChatGPT](https://chatgpt.com/) account now, or a [Claude](https://claude.ai/) account if you're 18 or older. Both are optional today, but you'll need one of them by week 2.

✅ **Checkpoint:** you can sign in to your personal Google account and to GitHub, and GitHub asks for your second factor when you sign in on a new browser.

> [!NOTE]
> Some tools in this course are for adults only (18+), and some can't be used to serve people in the EEA, UK or Switzerland. [TOOLS.md](../TOOLS.md) lists the age rules. If either applies to you, tell your instructor in week 1; the adjusted tool list is in [instructor/variants.md](../instructor/variants.md).

## Step 2 — Change your privacy settings (20 min)

Most free AI tools use your conversations to train their models unless you switch that off, and some let human reviewers read samples. Change the settings **before** you type anything into them.

Follow [privacy-settings.md](privacy-settings.md) for every tool you signed up for in step 1. At a minimum:

- **Gemini:** turn off *Keep Activity*, or use temporary chats.
- **GitHub Copilot:** turn off use of your data for training (you'll do this in step 6).
- **ChatGPT / Claude** (if you created them): turn off the "improve the model" setting.

✅ **Checkpoint:** for each tool you use, you can point to the setting you changed, or you know that the tool has no opt-out and you must never paste personal or secret data into it.

## Step 3 — Read and sign the safety contract (15 min)

Read the [safety contract](safety-contract.md). It has eight rules and three project rules. Each one exists because something went wrong for real people, and you can read those stories in [resources/case-studies.md](../resources/case-studies.md).

Sign it before the first studio: copy it into a document, and type your name and the date at the bottom. If your instructor uses a course site, submit it there. Either way, keep your copy: in week 1's homework you'll commit it to your new home-page repository. If anything in it worries you, ask your instructor before week 1.

✅ **Checkpoint:** you can say, in your own words, why you should never paste an API key into a chat assistant.

## Step 4 — Check your device (5 min)

You don't need a powerful computer. All the coding in this course runs in your browser through **GitHub Codespaces**, a code editor that runs on a computer in the cloud. That means you install nothing.

- **Any laptop works:** Windows, macOS, Linux or a Chromebook, as long as it runs an up-to-date browser. Chrome, Edge and Firefox work best with Codespaces.
- **A phone or tablet is not enough** for the labs. You need a keyboard and a screen wide enough for an editor and a preview side by side.
- **Internet:** a normal home or campus connection is fine. If yours is unreliable, tell your instructor in week 1.
- **Browser extensions:** strict ad blockers and privacy extensions sometimes break Codespaces. If step 5 fails, try a private window or pause the extension for `github.com` and `github.dev`.

Installing tools on your own laptop is optional and not needed for any week: [local-setup.md](local-setup.md).

## Step 5 — Open a test Codespace (20 min)

This is a dress rehearsal for week 4, when you start working in Codespaces every week. Doing it now means any problem shows up early.

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
6. **Stop the codespace** so it doesn't use up your free monthly hours: open [github.com/codespaces](https://github.com/codespaces), click the **…** next to your codespace, and choose **Stop codespace**.

More on what you just did, and what to do when something goes wrong: [codespaces.md](codespaces.md).

## Step 6 — Turn on GitHub Copilot (10 min)

GitHub Copilot is the AI assistant built into the editor. You'll use it from week 4.

1. Go to GitHub's Copilot settings page: [github.com/settings/copilot](https://github.com/settings/copilot). If you're offered **Copilot Free**, turn it on. If your GitHub Education application has been approved, you may see **Copilot Student** instead; use that.
2. On the same page, turn off the setting that lets GitHub use your data for AI model training. ([Details](privacy-settings.md#github-copilot))
3. Reopen your `vc101-practice` codespace from [github.com/codespaces](https://github.com/codespaces). Open the Chat view (the chat icon at the top of the window) and, in **Ask** mode, type:

   ```text
   In one short paragraph, explain what the command "python3 -m http.server 8000" does.
   ```

   ✅ **Checkpoint:** Copilot answers in the chat panel.

4. Stop the codespace again.

> [!NOTE]
> Menus move. If you can't find a button or setting named here, ask the assistant where it is, or check [codespaces.md](codespaces.md#turn-on-github-copilot-free).

Copilot Free has a monthly allowance. The details are in [TOOLS.md](../TOOLS.md); you don't need to worry about it yet.

## Step 7 — Take the pre-course self-assessment (15 min)

Complete the [self-assessment](../assessment/self-assessment.md). It is **not graded**. It tells your instructor where the class is starting from, and at the end of week 8 you'll take it again and see how far you've come. Answer honestly and without AI: "I don't know what that means" is a useful answer.

## Step 8 (optional) — Warm up (about 1 hour)

If you've never built anything with AI, try DeepLearning.AI's free [Build with Andrew](https://www.deeplearning.ai/courses/build-with-andrew). It takes about an hour, assumes no coding or AI background, and works with any chat assistant. You'll build a small app from a description, which is exactly what week 1 does.

Already comfortable? Skim the [glossary](../resources/glossary.md) and the [Safe Loop](../resources/safe-loop.md) instead.

## You're ready when

- [ ] I can sign in to my **personal** Google account and open Gemini.
- [ ] I have a GitHub account with a professional username, two-factor authentication is on, and my recovery codes are saved.
- [ ] (Students) I have applied for GitHub Education.
- [ ] I changed the privacy settings in every AI tool I signed up for.
- [ ] I read and signed the safety contract, and kept a copy to commit in week 1.
- [ ] I opened a Codespace, ran a command in its terminal, saw my page in the browser, and **stopped** the codespace.
- [ ] GitHub Copilot answers me in the Codespace chat, and its training setting is off.
- [ ] I completed the self-assessment.
- [ ] I know where to find [TOOLS.md](../TOOLS.md) (current tools and limits) and [troubleshooting](../resources/troubleshooting.md).

## If you get stuck

1. Check [resources/troubleshooting.md](../resources/troubleshooting.md) and the troubleshooting section of [codespaces.md](codespaces.md#troubleshooting).
2. Ask the tool's own assistant ("Where is the setting that…?"). Never paste a password or recovery code into it.
3. Contact your instructor **before** week 1 with what you tried and a screenshot of the problem. Account problems are much easier to solve before the first studio than during it.

Next: [Week 1 — Hello, Vibe Coding](../weeks/01-hello-vibe-coding/README.md).
