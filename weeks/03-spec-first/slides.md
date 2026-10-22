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
Welcome back. This week's arc: in Studio A you write one page describing a tool you'd actually use, a classmate reviews it, and a fresh AI tells you what it doesn't understand. In Studio B an app builder tries to build it, you judge the result against your page, and you start the version you'll keep.
Timing: this talk is 20 minutes. Slides 1–16 are the talk; the last three are for the lab and homework.
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
Writing matters: in a 2026 study of 100 students, both writing skill and computing grades predicted how well students vibe-coded (Thorgeirsson et al., https://arxiv.org/abs/2603.14133).
Be honest with students: it's hard. In CMU's AI coding course, students rated writing the spec as harder than managing AI agents (https://www.cs.cmu.edu/~113/bestPractices.html). Hard is normal. It gets faster.
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
This is the SPEC template. Show it briefly on screen.
AI policy: 🟡 AI limited. The AI may question your spec but not write it. The spec is your thinking. Today's writing time is 🔴 AI off.
Point them at the example spec: a study timer for a made-up student, Sam.
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
Non-programmers learn this in minutes. You'll write five or more today.
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
These criteria are also your checks. In Studio B you'll write the check for each step before you ask for its code.
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

## Small, and say what you won't build

**MVP:** the smallest useful version.

**Out of scope:** what you **won't** build.

**Wireframe:** the screen, top to bottom.

<!--
AI tools love to add things: login, dark mode, charts, sharing. Your out-of-scope list says no in writing, before they start.
It also protects you: "sync between my phone and laptop" is out of scope, so a separate log per device is a known limit, not a bug.
Wireframe: five minutes on paper, boxes and labels. In the spec, describe it from top to bottom in a short list: a screen reader, a classmate and an AI can all follow it. If you upload a photo, screenshot it first: phone photos can carry your location.
-->

---

## The Goldfish test

A fresh chat remembers nothing about you.

Paste **only** your spec. What would it build? What would it have to ask?

Every question is a gap. **Fix the spec, not the chat.**

<!--
A goldfish (so the story goes) remembers nothing. Neither does a new chat, an app builder or, in week 6, an agent starting a new session.
Michigan's AI software engineering course uses the same test on its design documents: if a fresh session can't understand your document on its own, the document depends on context that vanishes when the chat closes (EGM, https://github.com/eecs498-aase/materials/blob/HEAD/egm/README.md).
The AI is only allowed to ask and guess. It doesn't rewrite your spec, and you answer its questions in SPEC.md, where the next reader will see them.
You log it in PROMPTS.md: what it asked, what you changed. The Project 1 rubric looks for that.
I'll demo it now on the example spec and its weak version.
-->

---

## Browser app builders

Paste a spec → a whole running app, in minutes.

Google AI Studio *Build* · Bolt · Lovable · v0

<!--
This is the week-3 rung of the ladder of tools: the AI builds the whole app from your spec.
Names, limits and age rules are in TOOLS.md; they change monthly. AI Studio is 18+.
In Studio B each of you tests one builder, and you compare with a partner who tested the other: a jigsaw.
-->

---

## What's under the hood?

A framework (often React) · a build step · maybe a server, a database and a login you didn't ask for

<!--
The preview hides a real software project.
Google documents that AI Studio Build creates React and Node apps and can set up a database and login automatically: https://ai.google.dev/gemini-api/docs/aistudio-build-mode
In the lab you'll open the files view: package.json, files ending .tsx. Ask yourself: could I read this? Could I debug it with the AI switched off?
More moving parts means more to understand and more to secure. In week 7 you'll see what happens when a builder's database has no access rules.
-->

---

## Lock-in and credits

If the builder disappears, does your app go with it? **Keep it in GitHub.**

Check the usage dashboard **before** and **after**. Budget: the spec + 2 fixes.

<!--
Some builders this course would have used a year ago have closed or stopped taking new users (TOOLS.md, "Do not use in this course"). Free tiers keep shrinking.
Habit: anything you care about lives in your GitHub account, not only on someone's platform.
Students in CMU's course ran out of free credits in the middle of assignments (https://www.cs.cmu.edu/~113/bestPractices.html).
"Make it better" or "fix everything" burns credits and teaches you nothing. A fix prompt names a failing criterion. Out of credits: switch to the fallback. That's a planned drill, not a failure.
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
When you compare with your partner, compare the share of MUSTs passed: your specs are different.
If a criterion fails in both builders across the class, suspect the spec first: maybe it's ambiguous.
-->

---

## The version you keep

Three plain files. Your repo. GitHub Pages.

Check first → step → **test in the preview** → read and teach back → commit.

<!--
Why not keep the builder's version? You can't read it yet, it needs a build step, and it lives on their platform.
Three plain files: you can read every line, next week you'll debug them with the AI switched off, and GitHub Pages hosts them for free.
New this week: you build in a Codespace. A small web server (python3 -m http.server 8000) shows each step before you commit it. That's the Safe Loop in the right order.
Check first: before you ask for a step, write down what you'll try and what you expect. Your criteria are most of that already.
Teach back: before you commit, two or three sentences in PROMPTS.md saying what changed and why. In a 2026 study, learners whose tool required a short explanation before AI code was added did much better on a later AI-off task (Sankaranarayanan, https://arxiv.org/abs/2602.20206).
Blank page? Open the Console and read the red line first.
-->

---

## Studio A lab

1. Pick your idea (10 min)
2. Write SPEC.md, 🔴 AI off (35 min)
3. Peer spec review, written on Canvas (25 min)
4. The Goldfish test, 🟡 AI limited (20 min)
5. Give your spec a home: repo + Pages (20 min)

<!--
Open the lab. Remind them: no personal data in anything they paste into an AI.
The written review is graded and lives on Canvas, never in a classmate's repository. Refer to people by GitHub username.
-->

---

## Studio B lab

7. Builder bake-off jigsaw: one builder each, then compare (45 min)
8. Start Project 1 in a Codespace (35 min)
9. Keep building (50 min)

Then the results board and the exit ticket (🔴 AI off).

<!--
Builders are assigned A/B; your partner has the other one.
Everyone leaves Studio B with at least one step tested in the preview, committed and live on Pages.
The exit ticket is graded on completion, not correctness.
-->

---

## Homework

- Project 1 v1 live, passing at least half your MUSTs
- README with an acceptance table · PROMPTS.md · scorecard in `docs/`
- On Canvas: your spec review and the bake-off **Verdict** (🔴 AI off)

Stretch: run the other builder, or deploy a builder's version and compare.

<!--
The homework page has the checklist and a time plan (about 9½ hours, mostly building).
Project 1 final is due at the end of week 4, so version 1 just has to be live and honest about what passes.
Minimum to keep up: SPEC.md and an index.html that opens on Pages. Next week opens this repo in a Codespace and debugs code with the AI switched off.
-->
