---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 3"
footer: "CC BY 4.0"
---

# Week 3 — Spec First

A spec is the prompt for the whole project.

<!--
Welcome back. Today's arc in one sentence: you write one page describing a tool you'd actually use, two AI app builders try to build it, you judge them against your page, and then you start the version you'll keep.
Timing: this talk is 20 minutes. Keep moving; the lab is long today.
-->

---

## Last week: one step at a time

## This week: one page before the first step

<!--
In week 2 your five-step plan for the game was a tiny spec. It told the AI what to build next and told you when a step was done.
Project 1 is bigger: several features, data that must survive a reload, a real user (you). So we write the plan for the whole project down first.
-->

---

## Why write a spec?

The AI can only build what you describe.

One page, read by: you · a classmate · an app builder · a chat assistant · (week 6) an agent.

<!--
A spec is the prompt for the whole project. Every tool you'll use from now on reads it.
Be honest with students: it's hard. In CMU's AI coding course, students rated writing the spec as harder than managing AI agents (CMU 15-113 Student Wisdom report, https://www.cs.cmu.edu/~113/bestPractices.html). Hard is normal. It gets faster.
-->

---

## The one-page spec

1. Problem
2. User
3. User stories
4. Acceptance criteria
5. Out of scope
6. Constraints
7. Wireframe
8. Open questions

<!--
This is templates/SPEC.md. Show it briefly on screen.
AI policy: this is 🟡 Limited. The AI may critique your spec but not write it. The spec is your thinking.
Point them at example-spec.md: a study timer for a made-up student, Sam.
-->

---

## User stories

*As a* student, *I want to* start and stop a timer for a subject, *so that* my study time is recorded.

**MUST** · **SHOULD** · **COULD**

<!--
The "so that" part matters: it's the reason, and it helps the AI make sensible choices you didn't specify.
MUST = the tool is useless without it. SHOULD = you want it soon. COULD = nice later.
Project 1 needs only three to five MUSTs. The MUSTs are your MVP, your minimum viable product: the smallest version that is actually useful.
-->

---

## Acceptance criteria

**WHEN** I press Add with an empty box,
**THE APP SHALL** add nothing
**AND SHALL** show "Please type a name".

<!--
This is the course's criteria format. It comes from EARS (Easy Approach to Requirements Syntax), which AWS's Kiro tool uses to write specs for AI agents: https://kiro.dev/blog/introducing-kiro/
WHEN = the situation or action. SHALL = a promise you can check.
Non-programmers can learn this in minutes. You'll write five or more today.
-->

---

## Testable by using the app

Untestable: "The app should be easy to use."

Testable: "WHEN I open the app for the first time, THE APP SHALL show 'No plants yet'."

<!--
The stranger test: could a stranger check this in under a minute, by using the app, without asking you anything?
Put exact text in quotes when it matters, so two testers agree.
One behavior per criterion. If you write "and also", split it.
Ask the room: "It saves stuff." Testable? How would you rewrite it? (WHEN I reload the page, THE APP SHALL show the same items as before.)
-->

---

## Edge cases belong in the spec

Empty · very long · duplicates · reload · tiny screen · zero or negative · midnight · deleting the last one

<!--
Edge cases are the unusual situations where bugs live.
In a study of 19 students building apps with an AI agent, only 2.2% of their tests tried edge cases (Geng et al., https://arxiv.org/pdf/2507.22614). AI-built apps usually get the normal case right and the edges wrong.
Rule for today: at least two edge-case criteria in every spec.
-->

---

## MVP + out of scope

Build the smallest useful version.

Write down what you **won't** build.

<!--
AI tools love to add things: login, dark mode, charts, sharing. Your out-of-scope list says no in writing, before they start.
It also protects you: "sync between my phone and laptop" is out of scope, so a separate log per device is a known limit, not a bug.
Examples from the example spec: accounts, editing past sessions, charts, notifications, exporting.
-->

---

## Wireframes: sketch → photo → prompt

Five minutes on paper. Boxes and labels.

Multimodal AIs can read the photo.

<!--
Multimodal means the model reads images as well as text.
Show a quick paper sketch if you have one.
Privacy tip: take a screenshot of the photo before uploading. Phone photos can carry your location.
A text sketch in SPEC.md works too.
-->

---

## Browser app builders

Paste a spec → a whole running app, in minutes.

Google AI Studio *Build* · Bolt · Lovable · v0 · Replit

<!--
This is the week-3 rung of the ladder of tools: the AI builds the whole app from your spec.
Names, limits and age rules are in TOOLS.md; they change monthly. AI Studio is 18+.
Today you'll use two of them on the same spec.
-->

---

## What's under the hood?

A framework (often React) · a build step · maybe a server, a database and a login you didn't ask for

<!--
The preview hides a real software project.
Google documents that AI Studio Build creates React and Node apps and can set up a Firestore database and Firebase login automatically: https://ai.google.dev/gemini-api/docs/aistudio-build-mode
In the lab you'll open the files view: package.json, files ending .tsx. Ask yourself: could I read this? Could I debug it with the AI switched off?
More moving parts means more to understand and more to secure. In week 7 you'll see what happens when a builder's database has no access rules.
-->

---

## Lock-in

If the builder disappears, does your app go with it?

**Export to GitHub.**

<!--
Some builders this course would have used a year ago have closed or stopped taking new users (TOOLS.md, "Do not use in this course").
AI Studio documents two-way GitHub sync. Lovable and v0 also offer GitHub sync. Check Bolt's options yourself in the lab.
Habit: anything you care about lives in your GitHub account, not only on someone's platform.
-->

---

## Credit budgets

Free tiers run on credits.

Check the usage dashboard **before** and **after**.

Budget today: 1 spec + 2 fixes per builder.

<!--
Students in CMU's course ran out of free credits in the middle of assignments (https://www.cs.cmu.edu/~113/bestPractices.html).
Prompts like "make it better" or "fix everything" burn credits and teach you nothing. A fix prompt names a failing criterion.
Out of credits: switch to the fallback. That's a planned drill, not a failure. resources/troubleshooting.md has the steps.
-->

---

## The 70% problem

AI gets you 70% of the way, fast.

The last 30% (edge cases, fixes that break other things) is where beginners stall.

<!--
Addy Osmani's term: https://addyo.substack.com/p/the-70-problem-hard-truths-about
His "two steps back" pattern: you fix one bug, the AI breaks something else, because you have no mental model of the code.
Developers feel it too: in Stack Overflow's 2025 survey, 66% said their top frustration was AI code that is almost right but still wrong (https://survey.stackoverflow.co/2025/ai).
Your acceptance criteria are how you find the missing 30%. Week 4 is how you fix it.
-->

---

## Judge by criteria, not vibes

A beautiful app that fails AC3 fails AC3.

<!--
The bake-off rule. Test criteria in order, mark pass or fail, write what actually happened.
Watch yourself: the first builder that looks polished will feel like the winner. Check the scorecard before you decide.
And if both builders fail the same criterion, suspect your spec first: maybe it's ambiguous.
-->

---

## The version you keep

Plain HTML, CSS and JavaScript.
Three files. Your repo. GitHub Pages.

<!--
Why not keep the builder's version? You can't read it yet, it needs a build step, and it lives on their platform.
Three plain files: you can read every line, next week you'll debug them with the AI switched off, and GitHub Pages hosts them for free.
Builders are for exploring and comparing. Your repo is for owning.
-->

---

## Today's lab

1. Pick your idea (10 min)
2. Write SPEC.md, no AI (35 min)
3. Peer review + AI critique (15 min)
4. Builder bake-off (40 min)
5. Own it: new repo + Pages (10 min)

<!--
Open lab.md. Part 2 is AI-off (🔴). Part 3's AI step is critique only (🟡). Parts 4 and 5 are 🟢.
Remind them: no personal data in anything they paste into a builder.
-->

---

## Homework

- Project 1 v1 live, passing at least half your MUSTs
- README with an acceptance table
- PROMPTS.md
- Bake-off reflection (🔴 AI-free)

Stretch: deploy a builder's version and compare.

<!--
homework.md has the checklist. Project 1 final is due at the end of week 4, so version 1 just has to be live and honest about what passes.
Next week: you open this same repo in a Codespace, and debug code with the AI switched off.
-->
