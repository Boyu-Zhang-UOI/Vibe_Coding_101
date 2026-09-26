# Troubleshooting

> Something broke. That's normal, and fixing it is part of the course. Find your problem below, work through the steps in order, and stop when it's fixed.
> Limits, prices and which tool is the fallback for which live in [TOOLS.md](../TOOLS.md). This page tells you what to *do*.

**Jump to:**
[Credits](#i-ran-out-of-free-credits) ·
[Same mistake again](#the-ai-keeps-making-the-same-mistake) ·
[Blank page](#my-page-is-blank) ·
[Pages 404](#github-pages-shows-404) ·
[Change doesn't show](#my-change-doesnt-show-up) ·
[Codespace](#my-codespace-wont-start-or-im-out-of-hours) ·
[Copilot](#copilot-isnt-responding) ·
[npm / Node](#npm-command-not-found-or-the-wrong-node-version) ·
[Port](#my-port-isnt-forwarding) ·
[API errors](#my-api-call-returns-an-error) ·
[Vercel](#my-vercel-deploy-fails-or-my-environment-variables-are-missing) ·
[Supabase](#my-supabase-project-is-paused) ·
[Committed a secret](#i-committed-a-secret) ·
[Agent damage](#the-agent-broke-or-deleted-things) ·
[Merge conflict](#i-have-a-merge-conflict) ·
[School account](#my-school-account-blocks-ai-tools) ·
[Missing package](#the-ai-suggested-a-package-i-cant-find) ·
[Still stuck](#still-stuck)

> [!TIP]
> **Before anything else, answer three questions.** What did I expect? What happened instead (the **exact** error text)? What changed since it last worked? Those three answers solve many problems on their own, and they're the start of [a good bug report](prompt-patterns.md#6-the-good-bug-report) if you need help.

---

## I ran out of free credits

This will happen, probably more than once. Free tiers are capped, and in other courses built on free tools, credits ran out mid-assignment for students on several different tools ([CMU 15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). The course plans for it: **switching to a fallback is a drill, not an emergency.**

**Right now:**

1. **Save your work.** Commit and push, so nothing is stuck inside the tool that ran out.
2. **Switch to the fallback.** Open [TOOLS.md](../TOOLS.md), find your layer (chat assistant, app builder, editor assistant, terminal agent or LLM API), and move to the next tool in that row.
3. **Bring the new tool up to speed.** Ask the old tool for a [handoff summary](prompt-patterns.md#12-fresh-chat-handoff-summary) if it still answers, or write one yourself. Paste it with your current code.
4. **Note it in `PROMPTS.md`:** which tool you switched to, and when.

**Or wait for the reset.** Most limits reset daily, weekly or monthly. Check your tool's usage or account page to see when. In VS Code, click the Copilot icon in the status bar at the bottom. Menus move; if you can't find it, search the tool's help for "usage". Copilot Free *stops* chat and agent work when its credits run out, instead of slowing down, until the month resets ([TOOLS.md](../TOOLS.md)). Plan agent-heavy work with that in mind.

**Spend fewer credits next time:**

- **Plan first.** One planning message is cheap. A wrong build followed by five rounds of fixes is expensive. See [plan first](prompt-patterns.md#2-plan-first).
- **Use small, focused prompts.** One step, one file. Say exactly what you want back ("show only the changed function").
- **Start fresh chats.** In many tools, long chats use up limits faster, because the whole conversation is processed again with every message.
- **Don't paste whole projects.** Paste the one function or file that matters.
- **Do small edits by hand.** Changing a color or a word doesn't need AI. You can do it, and it's good practice.

**Don't** create extra accounts to get around limits (it usually breaks the tool's terms), paste your code into unknown AI websites, or pay for anything you haven't decided to buy. No paid tier is needed for full marks. If every fallback in your row is used up, tell your instructor.

## The AI keeps making the same mistake

Use [the two-strikes rule](safe-loop.md#the-two-strikes-rule). If two attempts to fix the same problem have failed:

1. **Stop.** Don't paste the error a third time.
2. **Go back** to your last good commit if things got worse ([how](git-cheatsheet.md#i-want-to-throw-away-changes-i-havent-committed)).
3. **Start a fresh chat.** Carry over a short [handoff summary](prompt-patterns.md#12-fresh-chat-handoff-summary), not the whole muddle.
4. **Rewrite the prompt** with what you learned: the exact error, what you tried, and a constraint that rules out the repeated mistake ("Don't change the header section").
5. **Make the step smaller.** If one step keeps failing, it's probably two steps.
6. **Check your own understanding.** Could you explain what the code *should* do? If not, use [explain this code](prompt-patterns.md#5-explain-this-code) or [tutor mode](prompt-patterns.md#14-tutor-mode) first. Sometimes the request itself is unclear or impossible.
7. **Get a second opinion.** Paste the same fresh prompt into your other assistant.

## My page is blank

1. **Open DevTools → Console** (F12, or Ctrl+Shift+I / Cmd+Option+I). Red text is an error. Read it, and click the file name and line number on the right to jump to the line. [DevTools tour](web-basics.md#a-short-devtools-tour).
2. **Match the error to a cause:**

   | You see | Likely cause |
   |---|---|
   | `Cannot read properties of null` | JavaScript is looking for an element that doesn't exist: a wrong `id`, or the script runs before the HTML has loaded. |
   | `... is not defined` | A typo in a name, or a function the AI mentioned but never wrote. |
   | `Unexpected token` or `Unexpected end of input` | Broken syntax, often a missing `}` or `)`, or code the AI cut short. |
   | `blocked by CORS policy` with `file:///` in the message | You opened the file directly, and the page uses `<script type="module">`, which needs a server. Preview it with `python3 -m http.server 8000` instead. |
   | No red errors at all | Check DevTools → Network for red `404` rows (a wrong file name or path), and check your CSS isn't hiding things (`display: none`, or white text on white). |

3. **Look for placeholder code.** AI sometimes writes `// ...rest of your code here` instead of the actual code. Search your files for `...` and "rest of".
4. **Check file names and paths match exactly**, including capital letters: `App.js` is not `app.js` on a web server.
5. **Did you save the file?** An unsaved file shows a dot on its tab in VS Code.

## GitHub Pages shows 404

Work down this list:

1. **Is Pages turned on?** Repo → **Settings → Pages**. Under "Build and deployment", Source should be **Deploy from a branch**, branch **main**, folder **/ (root)**. Press **Save**.
2. **Has it finished publishing?** Open the repo's **Actions** tab. Wait until the "pages build and deployment" run has a green check. The first publish can take a few minutes.
3. **Is there an `index.html`** (all lowercase) in the top folder of the repo, or in the folder named in the URL? A game at `/game/` needs the file `game/index.html`.
4. **Is the address right?**
   - Your home page repo must be named exactly `<username>.github.io`, and its address is `https://<username>.github.io/`.
   - Any other repo is at `https://<username>.github.io/<repo-name>/`.
5. **Do capital letters match?** GitHub Pages is case-sensitive: `/Game/` and `/game/` are different.
6. **Is the repo public?** On free accounts, Pages publishes public repos only ([TOOLS.md](../TOOLS.md)).
7. **Is it only some links that 404?** In a project repo, a link starting with `/` (like `/style.css`) points to the root of `<username>.github.io`, not your repo. Use relative links without the leading slash: `style.css`.

## My change doesn't show up

Go through the chain from your file to the screen:

1. **Saved?** Look for the unsaved dot on the file's tab.
2. **Committed and pushed?** In a Codespace, a commit stays in the Codespace until you press **Sync Changes** or run `git push`. Check the repo on github.com: is your latest commit there?
3. **Right branch?** GitHub Pages publishes `main`. If you're on another branch (see the bottom-left corner in VS Code), merge it or switch back.
4. **Finished deploying?** GitHub Pages: wait for the green check in the **Actions** tab. Vercel: open the project's **Deployments** list and check the newest one shows your latest commit and says Ready.
5. **Old copy in your browser?** Do a hard reload: **Ctrl+Shift+R** (Windows, Linux, ChromeOS) or **Cmd+Shift+R** (Mac). Or tick **Disable cache** in DevTools → Network and reload.
6. **Right URL?** On Vercel, make sure you're opening the production address, not an old preview link.
7. **Right file?** Search the project for a word you just added. You might have edited a copy.
8. **Local server?** If you changed `.env` or anything in `api/`, stop the server with **Ctrl+C** and start it again with `npm run dev`.

## My Codespace won't start, or I'm out of hours

**Out of hours.** Codespaces has a free monthly allowance ([TOOLS.md](../TOOLS.md)). If you have no payment method on your account, it is blocked when you run out, not billed, until the allowance resets. To check your usage, look under your GitHub account's billing settings (menus move; search GitHub's docs for "Codespaces usage" if you can't find it).

- **Stop your codespace whenever you finish.** Go to [github.com/codespaces](https://github.com/codespaces), click **···** next to it, and choose **Stop codespace**. An idle codespace stops on its own eventually, but uses your hours until it does.
- **Delete codespaces you no longer need**, but **only after you've committed and pushed**. Deleting a codespace throws away anything that wasn't pushed. Details: [stop and delete codespaces](../setup/codespaces.md#stop-and-delete-codespaces).
- **Edit without a Codespace** when you don't need a terminal: press `.` on your repo page to open github.dev.
- **Verified students** may get a bigger allowance through GitHub Education ([TOOLS.md](../TOOLS.md)).
- **Work locally** instead: [setup/local-setup.md](../setup/local-setup.md).

**Won't start, or stuck loading:**

1. Reload the browser tab.
2. Check [githubstatus.com](https://www.githubstatus.com/) for an outage.
3. Open it from [github.com/codespaces](https://github.com/codespaces) instead of an old link.
4. Try another browser, or turn off extensions that block scripts.
5. Stop the codespace and start it again.
6. Last resort: create a **new** codespace from your repo. Everything you pushed will be there. Don't delete the stuck one yet; unpushed work may still be recoverable when it starts again.

## Copilot isn't responding

1. **Are you signed in?** Click the **Accounts** icon at the bottom of VS Code's left bar and sign in with GitHub.
2. **Is Copilot set up for your account?** Check github.com → **Settings → Copilot**. If your student plan is still being verified (it can take days), use Copilot Free in the meantime.
3. **Are you out of credits?** Click the Copilot icon in the status bar to see usage. If you're out, chat and agent mode stop until the monthly reset: see [I ran out of free credits](#i-ran-out-of-free-credits).
4. **Is GitHub having problems?** Check [githubstatus.com](https://www.githubstatus.com/).
5. **Reload VS Code:** open the Command Palette (**Ctrl+Shift+P** / **Cmd+Shift+P**), type `Reload Window`, press Enter.
6. **Start a new chat.** Very long chats get slow or fail.
7. **Using a school-managed GitHub account?** Your school may have turned Copilot off. Use your personal account ([below](#my-school-account-blocks-ai-tools)).
8. **Still nothing?** Switch to the editor-assistant fallback in [TOOLS.md](../TOOLS.md) and tell your instructor.

## `npm: command not found`, or the wrong Node version

First, check what you have:

```bash
node --version
npm --version
```

- **In a Codespace**, Node and npm come preinstalled. If the commands aren't found, make sure you're in a real Codespace terminal, not github.dev (which has no terminal), and that you opened the Codespace from your repo on github.com.
- **On your own computer**, install Node following [setup/local-setup.md](../setup/local-setup.md). Then close the terminal and open a new one, so it finds the new install.
- **Too old?** The course needs Node 20 or newer, and the starters use recent features. A symptom of an old version is an error such as `process.loadEnvFile is not a function`. In a Codespace, switch to the current long-term-support version:

  ```bash
  nvm install --lts
  nvm use --lts
  ```

- **An error mentioning `ENOENT` and `package.json`** means you're in the wrong folder. Run `ls`: you should see `package.json`. If not, `cd` into the folder that has it.
- **`Cannot find module`** usually means the same thing, or that you need `npm install` (the course starters have no dependencies, so this is rare).

## My port isn't forwarding

You started a server (`python3 -m http.server 8000` or `npm run dev`) but can't open the page.

1. **Is the server still running?** The terminal should say it's serving or listening, and should *not* be back at a prompt. If it stopped, read the error above the prompt.
2. **`Address already in use`?** Another server is already on that port. Find the other terminal tab and press **Ctrl+C** there, then start again.
3. **Open it the Codespaces way.** Open the **Ports** tab next to Terminal, find your port (8000 or 3000), and click the globe icon (**Open in Browser**). If nothing opens, your browser may have blocked the pop-up; allow pop-ups for the site.
4. **Don't type `localhost` in your own browser.** `localhost` inside a Codespace means the cloud computer, not your laptop. Use the forwarded address, which ends in `.app.github.dev`.
5. **Classmates can't open your link?** That's expected. Forwarded ports are private by default: only you, signed in, can open them. Share your deployed site instead.
6. **The page says 502 or won't load?** The server crashed or isn't running. Check the terminal.
7. **Right port?** Static sites in this course use 8000; the Node starters use 3000.

## My API call returns an error

**First, find the real error message.** Your page may only show "Something went wrong."

- In the browser: **DevTools → Network**, click the red request, open **Response**.
- Locally: read the terminal where `npm run dev` is running.
- On Vercel: open your project's logs for that deployment.

Then use the status code ([what status codes mean](web-basics.md#status-codes-you-will-meet)):

### 400 Bad Request

What you sent is malformed. Check that the body is valid JSON and has the fields the API expects (for chat completions: `model` and a `messages` list). A very long input can also be rejected. Log what your server sends, **never the key**, and compare it with the starter's working version.

### 401 Unauthorized

The key is missing or wrong.

- `.env` must be in the project's top folder (next to `package.json`), with the exact name `LLM_API_KEY`, no quotes and no spaces.
- After editing `.env`, **restart the server**: Ctrl+C, then `npm run dev`. The file is read only at startup.
- Using [Codespaces secrets](../setup/codespaces.md#keep-secrets-in-codespaces-secrets) instead of `.env`? Restart the codespace after adding or changing one.
- On Vercel, `.env` is not uploaded (it's in `.gitignore`, on purpose). Add the variables in the dashboard and redeploy ([Vercel section](#my-vercel-deploy-fails-or-my-environment-variables-are-missing)).
- Key from one provider, `LLM_BASE_URL` from another? They must match.
- Did you revoke the key? Make a new one.

### 403 Forbidden

The key works, but the provider says no. Common reasons: the free tier isn't available in your region or for your age, or that model isn't on your plan. Switch to another provider in [TOOLS.md](../TOOLS.md) by changing the three `LLM_` variables, and check [instructor/variants.md](../instructor/variants.md) if you're under 18 or in the EEA, UK or Switzerland.

### 404 Not Found, or "model not found"

- **Model name wrong or retired.** Model names change often. Run `npm run models` in the week 5 starter and copy an ID exactly into `LLM_MODEL`.
- **`LLM_BASE_URL` wrong.** Copy it exactly from `.env.example` or [TOOLS.md](../TOOLS.md). A missing or extra part of the path gives a 404.
- **A 404 from your own `/api/...` route** means the file name doesn't match the route, or the `api/` folder isn't at the top of the project.

### 429 Too Many Requests

You hit a [rate limit](glossary.md#rate-limit) or used up today's free quota. Wait a minute and try once. Don't retry in a loop, which makes it worse. Make your page harder to spam: disable the button while a request is running. If the daily quota is gone, switch providers for today ([I ran out of free credits](#i-ran-out-of-free-credits)).

### 500 Internal Server Error

Your server code crashed. Read the error in the server terminal or the Vercel logs: it names the file and line in `api/`. A common cause is an environment variable that is `undefined` because it was never set.

### 502 Bad Gateway

Something behind the address isn't answering. In a Codespace, the server on that port isn't running. On Vercel, your function crashed or took too long; read the logs. The provider may also be having an outage; try again later or switch providers.

> [!WARNING]
> If the Console shows a CORS error and your code calls the LLM provider's address directly from the browser, stop. That would put your key in public code. Browser code must call your own `/api/...` route, and only the server talks to the provider ([why](web-basics.md#the-trust-boundary)).

## My Vercel deploy fails, or my environment variables are missing

**The build fails.** Open the failed deployment and read the build log from the top; the first error is the one that matters. Check the project's framework preset is **Other**, and that Vercel serves the `public` folder (the starter's README and its settings files handle this; don't move `public/` or `api/`).

**The site works but API calls fail (401, 500).** Your environment variables probably aren't set on Vercel. Your `.env` file never leaves your Codespace, which is the point.

1. Open the project → **Settings → Environment Variables**.
2. Add each variable from `.env.example` with its real value: `LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`, plus any others your app uses. Names must match exactly.
3. **Redeploy.** Changes to environment variables apply only to new deployments. Open **Deployments**, click **···** on the latest one, and choose **Redeploy**.

**Vercel can't see or import your repo.** Vercel's free plan cannot deploy repos owned by a GitHub organization, such as a class organization ([TOOLS.md](../TOOLS.md)). Put the project in a repo on your **personal** account (fork it, or create it from the template under your own name) and import that.

**Works locally, fails on Vercel.** Check capital letters in file names and imports. Vercel's servers treat `App.js` and `app.js` as different files, even if your laptop doesn't.

## My Supabase project is paused

Free Supabase projects pause after a period with no activity ([TOOLS.md](../TOOLS.md)), and Supabase emails you a warning first.

1. Open the Supabase dashboard and select the project.
2. Choose **Restore** (or **Resume**) and wait a few minutes.
3. Reload your app and test that it can read data again.

To avoid surprises, open your project the day before class and the morning of any demo. If it won't restore, tell your instructor and use the database fallback in [TOOLS.md](../TOOLS.md).

## I committed a secret

> [!WARNING]
> **Revoke the key FIRST, then clean up.** Removing it from your code does not remove it from git history, and bots scan public GitHub for keys continuously. A revoked key is harmless wherever it appears.

1. **Revoke the key** on the provider's website where you created it (the same page where you'd make a new one). Delete or disable it.
2. **Create a new key.** Put it in `.env`, and in your host's environment variables, then redeploy.
3. **Remove the old key from your code.** It should only ever be read from `process.env`, on the server.
4. **Check `.gitignore` lists `.env`**, then check it isn't tracked:

   ```bash
   git ls-files .env
   ```

   No output means good. If it prints `.env`, stop tracking it (this keeps your local file):

   ```bash
   git rm --cached .env
   ```

5. **Commit and push**, then scan:

   ```bash
   npm run check:secrets
   ```

6. **Leave history alone.** The old key is still in past commits, but it no longer works. Don't try to rewrite history with `git push --force`; ask your instructor if you think you need to.
7. **If it was a shared or course key, tell your instructor now.**

The same applies if you pasted a key into an AI chat: revoke it and make a new one. If GitHub blocks your push because it recognized a secret, that's GitHub protecting you. Don't bypass the warning; follow the steps above.

This is common: AI-assisted commits leak secrets about twice as often as ordinary ones ([GitGuardian 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)). Spotting one is one of the [six skills you must show without AI](without-ai-skills.md#5-spot-a-committed-secret).

## The agent broke or deleted things

1. **Stop the agent.** Press its stop button, or **Esc** in a terminal agent. Don't approve anything else.
2. **Don't ask it to repair its own damage yet.** An agent in a bad state can make things worse. In one well-known case, an agent also wrongly said a rollback was impossible ([case study](case-studies.md#4-replit-the-deleted-production-database)).
3. **Look at what changed:**

   ```bash
   git status
   git diff --stat
   git log --oneline
   ```

4. **Undo it with git**, which is why you committed before the task ([safety contract rule 3](../setup/safety-contract.md)):
   - Nothing committed yet: `git restore .` brings back every tracked file, including deleted ones, as of your last commit.
   - The agent committed: revert its commits ([recipes](git-cheatsheet.md#i-want-yesterdays-version-back)).
   - New files it created appear as untracked in `git status`. Delete the ones you don't want by hand.
5. **Run the app and the tests** to check you're back to a working state.
6. **Did it touch anything outside your project?** In a Codespace, damage stays inside that Codespace; that's why we run agents there. If you ran an agent on your own computer and it touched files outside the project, stop and tell your instructor.
7. **Learn from it.** Log what happened in `PROMPTS.md`. Then make the next task smaller, tighten your `AGENTS.md`, and approve every command that deletes or moves files.

## I have a merge conflict

A conflict means the same lines changed in two places, such as on github.com and in your Codespace, or on two branches, and git won't guess which to keep. Nothing is lost.

1. `git status` lists the conflicted files as "both modified".
2. Open each file. You'll see markers:

   ```text
   <<<<<<< HEAD
   <h1>My version from the Codespace</h1>
   =======
   <h1>The version from GitHub</h1>
   >>>>>>> 52840e4
   ```

3. Choose. VS Code shows buttons above the block: **Accept Current Change**, **Accept Incoming Change**, **Accept Both Changes**. Or edit the text by hand to what you want, and delete all three marker lines.
4. Save, test, then finish the merge:

   ```bash
   git add index.html
   git commit -m "Merge changes from GitHub"
   git push
   ```

**Want to back out?** `git merge --abort` returns you to how things were before the merge started.

**Git says "Need to specify how to reconcile divergent branches"?** Your copy and GitHub's both have new commits. Run `git pull --no-rebase` to merge them. You may then get a conflict, handled as above.

**Prevent it:** run `git pull` (or **Sync Changes**) before you start working, edit in one place at a time, and push often.

## My school account blocks AI tools

- **Use a personal account.** The course asks for a personal email address ([syllabus](../SYLLABUS.md#2-who-this-course-is-for)). School- and work-managed accounts often have AI features switched off by an administrator, and different data rules.
- **The school's device or network blocks a site?** Don't try to get around your school's restrictions. Use a personal device, or talk to your instructor about alternatives.
- **Under 18, or in the EEA, UK or Switzerland?** Some tools won't let you sign up, and that's expected. Your instructor has an adjusted stack: [instructor/variants.md](../instructor/variants.md).
- **Tell your instructor in week 1** so you can plan together.

## The AI suggested a package I can't find

**Stop. Don't install it.** AI models invent package names, and attackers register those invented names with malware, a trick called *slopsquatting* ([case study](case-studies.md#10-slopsquatting-the-packages-that-dont-exist); [safety contract rule 6](../setup/safety-contract.md)).

1. **Search for it on [npmjs.com](https://www.npmjs.com/).** Copy the name exactly; one letter matters.
2. **It doesn't exist?** The AI made it up. Tell it so, and ask for a way to do this with built-in browser or Node features. The course starters have no dependencies on purpose.
3. **It exists? Check it looks real:** plenty of weekly downloads, a linked source repository, recent updates, and a description that matches what the AI said it does. Brand-new, barely downloaded, or no repository: treat it as dangerous.
4. **Still want it?** Ask your instructor first, and log the decision in `PROMPTS.md`.

**Already installed something suspicious?** Tell your instructor. Remove it with `npm uninstall <name>`, and as a precaution revoke any keys that were in that Codespace or on that computer: malicious packages can run code as soon as they install, and one real attack used exactly that to hunt for secrets ([Nx case study](case-studies.md#7-nx-s1ngularity-malware-that-used-your-ai-tools)).

## Still stuck?

- Write [a good bug report](prompt-patterns.md#6-the-good-bug-report): what you did, what you expected, what happened (exact text), and what you tried. Writing it often reveals the answer.
- Bring it to office hours, or post it in the course forum with the exact error text and **no keys or personal data**.
- Found a mistake in the course, or a tool that has changed? [Open an issue](../CONTRIBUTING.md).
