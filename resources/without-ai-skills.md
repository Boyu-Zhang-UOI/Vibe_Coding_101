# Six Skills You Must Show Without AI

> This course **requires** AI. It also requires that you can do six things with the AI switched off. This page says exactly what they are, why they matter, when you learn them, how they're checked, and how to practice.

| # | Skill | Taught in | Checked in |
|---|---|---|---|
| 1 | [Read an error message and find the failing line](#1-read-an-error-message-and-find-the-failing-line) | Week 4 (first seen in week 1) | [Week 4 exit ticket](../assessment/exit-tickets.md#week-4) · all three oral walkthroughs |
| 2 | [Explain any function you committed](#2-explain-any-function-you-committed) | Weeks 1–2, then every week | [Week 1 exit ticket](../assessment/exit-tickets.md#week-1) · all three oral walkthroughs |
| 3 | [Write an acceptance criterion and a test for it](#3-write-an-acceptance-criterion-and-a-test-for-it) | Week 3 (criteria), week 4 (manual tests), week 6 (automated tests) | [Week 3 exit ticket](../assessment/exit-tickets.md#week-3) · walkthroughs [2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6) and [3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8) |
| 4 | [Revert a bad commit](#4-revert-a-bad-commit) | Week 2 (web), week 4 (terminal), week 6 (agents) | [Week 2 exit ticket](../assessment/exit-tickets.md#week-2) · walkthroughs [1](../assessment/oral-walkthroughs.md#walkthrough-1-week-4) and [2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6) |
| 5 | [Spot a committed secret](#5-spot-a-committed-secret) | Week 5, again in week 7 | [Week 5 exit ticket](../assessment/exit-tickets.md#week-5) · [walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8) |
| 6 | [Say where authorization is enforced in your app](#6-say-where-authorization-is-enforced-in-your-app) | Week 7 (groundwork in week 5) | [Week 7](../assessment/exit-tickets.md#week-7) and [week 8](../assessment/exit-tickets.md#week-8) exit tickets · [walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8) |

The exact questions and rules are in [assessment/exit-tickets.md](../assessment/exit-tickets.md) and [assessment/oral-walkthroughs.md](../assessment/oral-walkthroughs.md). Grading: [assessment/rubrics.md](../assessment/rubrics.md).

---

## Why this list exists

**Because students asked for it.** UCSD rebuilt its first programming course around an AI assistant. Afterwards, **31.1% of students were not confident which problems they should be able to solve without the AI**, and the instructors said they should have spelled it out ([CS1-LLM](https://arxiv.org/pdf/2406.15379)). This page spells it out.

**Because feeling that you understand is not the same as understanding.** In one study, students who struggled while using AI finished believing they had done better than they had ([Prather et al.](https://dl.acm.org/doi/10.1145/3632620.3671116)). In a large trial, students who used an unrestricted chatbot for practice scored lower on the exam and didn't notice ([Bastani et al., PNAS](https://www.pnas.org/doi/10.1073/pnas.2422633122)). A check with the AI off is the only way you, or anyone, can tell the difference.

**Because understanding drops when agents take over.** In a similar course at Carnegie Mellon, students' self-rated understanding was lowest during the assignments where agents wrote most of the code ([CMU 15-113 Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)). That's why two of the three oral walkthroughs fall in the agent weeks.

### Practice with AI, prove without it

You may use AI to *learn* these skills: ask it to [explain code](prompt-patterns.md#5-explain-this-code), use [tutor mode](prompt-patterns.md#14-tutor-mode), or have it quiz you. The *checks* are AI-free (🔴 in the [AI use policy](../SYLLABUS.md#8-ai-use-policy)). "Without AI" means no chat assistant, no AI completions and no agent. You still have your own code, the browser and DevTools, the terminal, and (in oral walkthroughs) the course [glossary](glossary.md). None of the six skills is about memorizing syntax. They're about reading, reasoning and using those tools.

---

## 1. Read an error message and find the failing line

**Why it matters.** Debugging is the skill AI use erodes most. In Anthropic's trial, the biggest gap between people who learned with AI and people who learned without it was on debugging questions ([Anthropic, 2026](https://www.anthropic.com/research/AI-assistance-coding-skills)). Students vibe coding spent only 7.4% of their actions looking at code or logs, and 61% of their prompts asked the AI to debug ([Geng et al.](https://arxiv.org/pdf/2507.22614)). Non-programmers tend to re-prompt instead of debugging ([Fawzy et al.](https://arxiv.org/html/2605.24521v1)). An error message usually tells you where to look. Reading it takes seconds.

**When you learn it.** You first open the Console in week 1. Week 4 teaches it properly with DevTools, and the [Debug Clinic](../weeks/04-read-debug-own-it/) has you fix planted bugs with the AI switched off.

**How it's checked.** The [week 4 exit ticket](../assessment/exit-tickets.md#week-4), and the "find a planted bug" part of every [oral walkthrough](../assessment/oral-walkthroughs.md).

**Practice (15 minutes).**

**A.** Here is a browser Console error. Answer the questions before opening the answers.

```text
Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at app.js:12:7
```

1. Which file, and which line?
2. What was `null`?
3. What's a likely cause?

<details>
<summary>Answers</summary>

1. `app.js`, line 12 (the `7` is the column, the character position on the line).
2. Whatever comes just before `.addEventListener` on line 12, usually a variable holding the result of `document.querySelector(...)` or `getElementById(...)`. `null` means "nothing was found".
3. The `id` or class in the JavaScript doesn't match the HTML (check spelling and capitals), or the script runs before the HTML element exists.

</details>

**B.** Here is real output from `npm test`. Find the line in *your* code that failed.

```text
✖ AC3 (edge case): missing text counts as zero words
  TypeError [Error]: Cannot read properties of undefined (reading 'trim')
      at countWords (file:///workspaces/word-counter/public/lib/words.js:2:22)
      at TestContext.<anonymous> (file:///workspaces/word-counter/tests/words.test.js:14:16)
      at Test.runInAsyncScope (node:async_hooks:214:14)
      at Test.run (node:internal/test_runner/test:1047:25)
```

<details>
<summary>Answer</summary>

Read from the top. The first line that points at one of **your** files is where it broke: `public/lib/words.js`, line 2, inside `countWords`. The next line says who called it: the test on line 14 of `tests/words.test.js`. Lines starting with `node:` are Node's own machinery; skip them. The message says the code called `.trim()` on something `undefined`: the test passed no text at all, and `countWords` doesn't handle that case.

</details>

**C.** Make an error on purpose. Open any of your pages, open DevTools → Console, type this and press Enter:

```text
document.querySelector('#does-not-exist').textContent = 'hi'
```

Read the error out loud in plain English: "I tried to set the text of something that doesn't exist."

**Self-check.**

- [ ] Given an error, I can name the file and line without help.
- [ ] I can say what the error means in plain words.
- [ ] When something breaks, I look at the Console or terminal *before* I ask the AI.

## 2. Explain any function you committed

**Why it matters.** "If you can't explain it, you didn't build it" ([UMich syllabus](https://eecs498-aase.github.io/syllabus.html)). Simon Willison's rule for responsible AI-assisted programming is never to commit code you couldn't explain to someone else ([Willison](https://simonwillison.net/2025/Mar/19/vibe-coding/)). Learners who generated whole solutions from one prompt did worst when they later had to change that code ([Kazemitabaar et al.](https://arxiv.org/abs/2309.14049)). You can only change what you understand.

**When you learn it.** Week 1: explain three parts of your page. Week 2: explain one function in a classmate's game. Every week after: step 5 of [the Safe Loop](safe-loop.md), "keep only what you can explain."

**How it's checked.** The [week 1 exit ticket](../assessment/exit-tickets.md#week-1), and every [oral walkthrough](../assessment/oral-walkthroughs.md): you explain your code (in walkthrough 2, the code the agent wrote), then change it live.

**Practice (15 minutes): the four-question explanation.** Pick a function from your latest commit. Without AI, write short answers:

1. **What goes in?** Its inputs, and anything it reads (the page, localStorage).
2. **What comes out, or changes?** Its return value, what changes on the page or in storage.
3. **How, step by step?** Three to five plain-English steps.
4. **What would break it?** One input or situation it doesn't handle.

Then **change one line and predict** what will happen. Run it. Were you right?

Here's a function to try it on:

```js
export function countWords(text) {
  const words = text.trim().split(/\s+/);
  return words.filter((w) => w.length > 0).length;
}
```

<details>
<summary>A sample explanation</summary>

1. **In:** a piece of text.
2. **Out:** a number, the count of words. It doesn't change anything else.
3. **How:** it cuts spaces off both ends of the text; splits it wherever there's one or more spaces, tabs or line breaks; throws away any empty pieces; and counts what's left.
4. **Breaks on:** being given no text at all (`undefined`), because you can't `.trim()` nothing. That's the test failure in skill 1.

*Change one line:* remove `.trim()`. Prediction: `"  hi"` would split into `["", "hi"]`, the filter would drop the empty piece, and the count would still be 1. So `.trim()` is doing less work than it looks. Run it to check.

</details>

Afterwards, if you like, use [explain this code](prompt-patterns.md#5-explain-this-code) and compare. Where did you and the AI differ? Who was right?

**Self-check.**

- [ ] I can explain every function in my latest commit with the chat closed.
- [ ] I can predict what changing one line will do, and I'm usually right.
- [ ] I can name at least one input that would break each function.

## 3. Write an acceptance criterion and a test for it

**Why it matters.** Beginners test the happy path. In one study of students vibe coding, 91.7% of their tests tried common cases, only 2.2% tried edge cases, and **no student wrote a unit test** ([Geng et al.](https://arxiv.org/pdf/2507.22614)). Courses that grade robustness give credit only for edge cases and how features interact ([Utah syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)). The WHEN … SHALL format comes from a requirements style people without programming experience can learn in minutes ([Kiro](https://kiro.dev/blog/introducing-kiro/)). With agents, tests are how the AI checks its own work and how you check its claims ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)).

**When you learn it.** Week 3: acceptance criteria in `SPEC.md`. Week 4: manual edge-case tests in `TESTS.md`. Week 6: automated tests, written red first, then green.

**How it's checked.** The [week 3 exit ticket](../assessment/exit-tickets.md#week-3); walkthroughs [2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6) and [3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8), where you may be asked to explain or add a test; and your capstone's `TESTS.md`.

**Practice (20 minutes).** The feature: *a live word count under a text box.*

1. Write one **normal** criterion in the form WHEN … THE APP SHALL ….
2. Write two **edge-case** criteria.
3. Turn one of them into a manual test row: ID · Checks · Steps · Expected result.
4. (Week 6 onward) Write an automated test for it.

<details>
<summary>Sample answers</summary>

1. **AC1:** WHEN I type "hello big world", THE APP SHALL show "3 words".
2. **AC2:** WHEN the box is empty, THE APP SHALL show "0 words".
   **AC3:** WHEN I type only spaces, THE APP SHALL show "0 words".
3. | T2 | AC2 (edge case) | 1. Open the page. 2. Leave the box empty. | The count says "0 words". |
4. Using Node's built-in test runner, in `tests/words.test.js`:

   ```js
   import { test } from 'node:test';
   import assert from 'node:assert/strict';
   import { countWords } from '../public/lib/words.js';

   test('AC1: counts words separated by spaces', () => {
     assert.equal(countWords('hello big world'), 3);
   });

   test('AC2 (edge case): an empty box shows 0 words', () => {
     assert.equal(countWords(''), 0);
   });

   test('AC3 (edge case): only spaces shows 0 words', () => {
     assert.equal(countWords('     '), 0);
   });
   ```

   Run it with `npm test`. Each test's name says which criterion it checks.

</details>

**Self-check.**

- [ ] I can turn a feature into WHEN … THE APP SHALL … sentences that someone else could test.
- [ ] Every feature I build has at least two edge-case criteria.
- [ ] I can point to the test that checks each criterion, and I've watched a new test fail before it passed.

## 4. Revert a bad commit

**Why it matters.** Git is your undo button when an AI goes wrong. In July 2025 an AI agent deleted a company's production database, then wrongly claimed it couldn't be rolled back ([Fortune](https://fortune.com/2025/07/23/ai-coding-tool-replit-wiped-database-called-it-a-catastrophic-failure/)). Anthropic warns that its agent's own checkpoints are "not a replacement for git" ([Claude Code best practices](https://code.claude.com/docs/en/best-practices)). Google's DORA research names strong version control and small batches as two of the conditions under which AI helps teams rather than hurts them ([DORA AI Capabilities Model](https://services.google.com/fh/files/misc/2025_dora_ai_capabilities_model.pdf)).

**When you learn it.** Week 2 on github.com, with a deliberate break-and-rollback in the Game in an Hour. Week 4 in the Codespace terminal. Week 6: commit before and after every agent task.

**How it's checked.** The [week 2 exit ticket](../assessment/exit-tickets.md#week-2), and walkthroughs [1](../assessment/oral-walkthroughs.md#walkthrough-1-week-4) and [2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6); in walkthrough 2 you may be asked to undo an agent's task.

**Practice (10 minutes).** In a practice repo, or on a line of your home page you don't mind breaking:

1. Make a deliberately bad change (change your heading to `BROKEN`), commit it, and push.
2. Find it:

   ```bash
   git log --oneline
   ```

3. Undo it with a new commit, and push:

   ```bash
   git revert --no-edit <hash>
   git push
   ```

4. Check that the page is back to normal, and that `git log --oneline` shows *both* the bad commit and the revert.

Do it once looking at the [git cheat sheet](git-cheatsheet.md#i-want-to-undo-my-last-commit), then once without it, saying out loud what each command does.

**Self-check.**

- [ ] I can find the hash of a bad commit.
- [ ] I can revert it without looking up the command.
- [ ] I can explain why `git revert` is safer than `git reset --hard` ([why](git-cheatsheet.md#revert-vs-reset)).

## 5. Spot a committed secret

**Why it matters.** AI-assisted commits leak secrets about **twice as often** as ordinary ones: 3.2% versus 1.6% ([GitGuardian 2026](https://blog.gitguardian.com/the-state-of-secrets-sprawl-2026/)). Leaked keys cost money and data. Moltbook's database key sat in its public JavaScript ([Wiz](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)), and the Nx attack leaked 2,349 credentials from 1,079 systems ([GitGuardian](https://blog.gitguardian.com/the-nx-s1ngularity-attack-inside-the-credential-leak/)). Stories: [case studies](case-studies.md).

**When you learn it.** Week 5: keys, `.env`, `.gitignore`, and proving your key isn't visible in the browser or in git. Week 7: a security sweep of your capstone.

**How it's checked.** The [week 5 exit ticket](../assessment/exit-tickets.md#week-5) and the week 5 understanding check ("show where the key lives and who can read it"); the secrets section of your [SECURITY_CHECKLIST.md](../templates/SECURITY_CHECKLIST.md); and [walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8), where you may be shown a sample diff and asked to find the secret.

**Practice A (10 minutes).** Which of these is a problem? Decide for each, then check.

1. In `api/ask.js`: `const apiKey = process.env.LLM_API_KEY;`
2. In `.env.example`: `LLM_API_KEY=paste-your-key-here`
3. In `public/app.js`: `const LLM_API_KEY = "xyzFAKEkey0123notReal";`
4. `git ls-files .env` prints `.env`.
5. Your README includes a screenshot of Vercel's environment variables page with the values visible.
6. In `public/app.js`, a Supabase client created with the **publishable** key.
7. In `public/app.js`, a Supabase client created with the **secret** (service-role) key.

<details>
<summary>Answers</summary>

1. **Fine.** It reads the key from an environment variable, on the server.
2. **Fine.** A placeholder, not a real key.
3. **Leak.** A key in front-end code is public, and now it's in git history too. Revoke it.
4. **Leak.** `.env` is tracked by git, so its contents are in the repo. Revoke every key in it.
5. **Leak.** A screenshot is still a copy of the key. Revoke it and replace the image.
6. **Allowed by design**, but safe **only** if row-level security is on for every table (skill 6).
7. **Serious leak.** That key bypasses all access rules. Revoke it immediately.

</details>

**Practice B (10 minutes).** Check your own project:

```bash
git ls-files .env
git log --oneline -S "LLM_API_KEY="
npm run check:secrets
```

The first should print nothing. The second lists every commit that added or removed that text. Open each with `git show <hash>`: you should find only placeholders, as in `.env.example`. The third scans the whole repository. Finally, open your **live** site, and search DevTools → Sources and Network for your key.

If you find a real key: [revoke it first](troubleshooting.md#i-committed-a-secret).

**Self-check.**

- [ ] I can say where my key lives, both locally and on my host, and who can read it.
- [ ] I can prove `.env` was never committed.
- [ ] I know the first thing to do when I find a leaked key: revoke it.

## 6. Say where authorization is enforced in your app

**Why it matters.** This is where real vibe-coded apps failed. A scan of apps built with Lovable found **170 of 1,645** with exposed databases, because the browser used the database's public key and the access rules were missing ([Superblocks](https://www.superblocks.com/blog/lovable-vulnerabilities)). Moltbook had the same pattern and exposed about 1.5 million API tokens ([Wiz](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys)). Karpathy describes agents building his app to match users across services by email address instead of a permanent user ID, a design mistake only someone who understood the code would catch ([Karpathy, 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/)). Newer AI models are not writing more secure code ([Veracode Spring 2026](https://www.veracode.com/blog/spring-2026-genai-code-security/)), so this check stays your job.

**When you learn it.** Week 5 lays the groundwork: the browser is public, the server is not ([trust boundary](web-basics.md#the-trust-boundary)). Week 7 teaches [authentication](glossary.md#authentication) versus [authorization](glossary.md#authorization) and has you attack your own table in the RLS Attack Lab, then fix it with [row-level security](glossary.md#row-level-security-rls).

**How it's checked.** The [week 7](../assessment/exit-tickets.md#week-7) and [week 8](../assessment/exit-tickets.md#week-8) exit tickets; the "Authorization is enforced in:" line of your capstone README ([template](../templates/PROJECT_README.md)); section 3 of your [SECURITY_CHECKLIST.md](../templates/SECURITY_CHECKLIST.md); and [walkthrough 3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8).

**Practice (15 minutes).** For each app, where is authorization enforced? Or is it missing?

1. A to-do list that saves to localStorage.
2. A notes app whose page reads a Supabase table with the publishable key. Row-level security is on, with a policy that returns a row only when its `user_id` matches the logged-in user.
3. The same notes app, but row-level security is **off**. The page hides other people's notes with `notes.filter((n) => n.user_id === me.id)` in `app.js`.
4. An admin page whose "Delete everything" button is hidden with CSS unless you're an admin. The server route that deletes everything has no checks.
5. The week 5 AI micro-app: anyone can use it, and `api/ask.js` rejects messages that are too long before calling the LLM.

<details>
<summary>Answers</summary>

1. **Not needed.** It's a single-user app; data never leaves that browser. (Anyone using that device can still read it.)
2. **In the database**, by the row-level security policy on the notes table. This is the right answer.
3. **Nowhere.** The filter runs in the browser, which the user controls. Anyone with the publishable key can read every note. This is the Lovable and Moltbook pattern.
4. **Nowhere.** Hiding a button isn't authorization. Anyone can call the server route directly.
5. **There are no users to authorize.** The server protects the key and enforces limits on input. Saying so clearly is a correct answer.

</details>

Now write the sentence for your own capstone:

```text
In my app, authorization is enforced in ________ (a file or a database policy),
which checks ________ before ________.
```

**Self-check.**

- [ ] I can finish that sentence for my app, pointing to a real file or policy.
- [ ] I can explain why checks in browser JavaScript don't count.
- [ ] I've tried to read or change data I shouldn't be able to, using only the public key, and watched it fail.

---

## Before each oral walkthrough

- [ ] I can explain every function I committed since the last walkthrough (skill 2).
- [ ] I've practiced finding a bug from an error message with the AI closed (skill 1).
- [ ] I can point to the test for each acceptance criterion (skill 3, from week 6).
- [ ] I've reverted a commit in this project at least once (skill 4).
- [ ] I've run the secret checks on this project (skill 5, from week 5).
- [ ] I can say where authorization is enforced (skill 6, week 8).

Can't do one yet? That's what the practice above and office hours are for. The walkthroughs are there to find gaps while there's still time to close them.
