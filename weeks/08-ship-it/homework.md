# Week 8 homework — Final submission

> **Due at the final deadline posted on Canvas:** a few days after the Project Fair, and before the University's grade deadline. Before **Studio B**, your app must be live for the Project Fair and your oral walkthrough 3 done. About **9.5 hours** of core work. Deploying and polishing always take longer than coding, so start early. Work in the [Safe Loop](../../resources/safe-loop.md); commit as you go.

## Deliverables checklist

Your capstone is done when every box is ticked. The [Polish checklist](polish-checklist.md) gets you there.

- [ ] **Production URL** works in a fresh browser (a private window), on a phone and a laptop. Submit it on Canvas, the course's learning management system, **with a screenshot** of the app working there. Vercel deletes old preview deployments, so only the production URL counts.
- [ ] **Repo:** public on your GitHub account, with a history of small commits, including before and after agent tasks, with `Assisted-by:` lines.
- [ ] **README.md** from the [README template](../../templates/PROJECT_README.md): what it does, production URL, demo video link, a screenshot, how to run it, how it works, the "Authorization is enforced in: …" line, where each key lives, status against the spec, an honest **Known issues and next steps** section, the tools you used and any fallback you switched to, and credits. Pairs: a Contributions table, plus the signed contribution statement on Canvas.
- [ ] **SPEC.md** with the acceptance-criteria table marked pass, partial or fail.
- [ ] **AGENTS.md** current with how the project actually works, including its Scope section and trial notes.
- [ ] **PROMPTS.md:** an honest log, with a teach-back before every agent commit and your ownership statement ("what I wrote or decided myself").
- [ ] **TESTS.md:** at least 3 automated tests (`npm test` passes) and at least 3 manual edge-case tests with dated results.
- [ ] **SECURITY_CHECKLIST.md:** complete, with evidence, dated this week.
- [ ] **At least two** feature types working: a server-side API call with a hidden key; a database with access rules and/or sign-in; a data visualization; an external public API ([capstone brief](../../projects/capstone.md#feature-types-include-at-least-two)). Pairs: three, or two plus the approved scope increase.
- [ ] **Demo video:** 2–3 minutes, with captions or a transcript, linked in the README (or submitted on Canvas).
- [ ] **Release `v1.0`:** your final commit tagged as a GitHub release, so graders see exactly what you submitted ([Part 6](#6-submit-it-about-2-h)).
- [ ] **Oral walkthrough 3** done (🔴 AI off), in Studio A or by appointment before the Project Fair.
- [ ] **Final reflection** on Canvas (🔴 AI off, 400–600 words), with your revised personal AI-use rules ([Part 7](#7-final-reflection-about-15-h)).
- [ ] **In Studio B:** your revised personal AI-use rules, the post-course self-assessment and the exit ticket, all on Canvas (🔴 AI off).

| Part | When | Time |
|---|---|---|
| 1. Finish the polish checklist | Before Studio B | about 2.5 h |
| 2. Prepare for walkthrough 3 | Before your slot | about 1 h |
| 3. Finish the demo video | Before Studio B | about 1 h |
| 4. Get ready for the Fair | Before Studio B | about 0.5 h |
| 5. Act on Fair feedback | After Studio B | about 1 h |
| 6. Submit it | After Studio B | about 2 h |
| 7. Final reflection | After Studio B | about 1.5 h |
| **Total** | | **about 9.5 h** |

## The final milestone

The row below is copied word for word from the [capstone milestones](../../projects/capstone.md#milestones):

| Milestone | Due | Deliverables | Graded as |
|---|---|---|---|
| **Final** (end of week 8) | Posted on Canvas: a few days after the Project Fair, and before the University's grade deadline | • Everything in [What done means](../../projects/capstone.md#what-done-means)<br>• A GitHub release **`v1.0`** on your final commit<br>• On Canvas: the **production URL and a screenshot** of it working, the repo URL and the link to the `v1.0` release<br>• A 2–3 minute [demo video](../../projects/capstone.md#demo-video), linked from the README or submitted on Canvas<br>• Your [final reflection](../../projects/capstone.md#final-reflection) on Canvas (🔴 AI off), with your revised personal AI-use rules | [Capstone rubric](../../assessment/rubrics.md#capstone); the final reflection in [Reflections and peer reviews](../../assessment/rubrics.md#reflections-and-peer-reviews) |

## Core tier (required)

### 1. Finish the polish checklist (about 2.5 h)

🟢 AI on for fixes, in the Safe Loop. Finish sections 1–7 of the [Polish checklist](polish-checklist.md) on your **live** site: the three states, phone, title and favicon, accessibility (including the keyboard test), copy, the README with known issues, and the final technical pass. Commit after each fix and check the production URL after each push.

✅ **Done when:** sections 1–7 are ticked, or each unticked item says why it doesn't apply.

### 2. Prepare for walkthrough 3 (about 1 h)

Read [What to expect](../../assessment/oral-walkthroughs.md#what-to-expect) and the [walkthrough 3 questions](../../assessment/oral-walkthroughs.md#walkthrough-3-week-8). Practice with a classmate, taking turns as examiner, AI off. Make sure you can say, without notes, **where authorization is enforced** in your app, and explain one of your tests. If your slot is by appointment, it's about 15 minutes and must be during week 8, before the Project Fair.

### 3. Finish the demo video (about 1 h)

Finish what you recorded in [Studio A Part 3](lab.md#part-3--record-your-demo-video-core-30-min): check it's 2–3 minutes, add or correct captions (or write the transcript), check no secret or real personal data appears, upload it unlisted, and link it in your README, or submit it on Canvas only and write "Demo video: submitted on Canvas" in the README. A link in a public README can be found by anyone. If recording or speaking is a barrier, a written script with screenshots is accepted instead ([accommodations](../../assessment/README.md#accommodations)).

### 4. Get ready for the Fair (about 0.5 h)

Make a sign or sticky note with your app's name and production URL or QR code, practice your 60–90 second pitch (problem → quick demo → one thing you're proud of → one known issue), and open your Supabase project the day before so it isn't paused.

### 5. Act on Fair feedback (about 1 h)

Read the feedback cards you received. Fix the most useful small thing a visitor found, in the Safe Loop, **or** add it to your known-issues section with what you'd do about it. Both count.

### 6. Submit it (about 2 h)

1. **Bring the documents up to date** (about 1 h): every deliverable in the checklist above matches the app as it is now. Run `npm test` and `npm run check:secrets` one last time and date the evidence in `SECURITY_CHECKLIST.md`.
2. **Make the `v1.0` release** (10 min). On your repo's GitHub page: **Releases → Draft a new release** (or **Create a new release**) → **Choose a tag**, type `v1.0` and choose to create it on publish, target `main` → title it `v1.0` → **Publish release**. Menus move; [What "done" means](../../projects/capstone.md#what-done-means) has more detail.
3. **Submit on Canvas** (10 min): repo link, production URL, a screenshot of the app working there, the `v1.0` release link, and the demo video link.

✅ **Done when:** every box in the deliverables checklist is ticked, and a classmate could use your app from the URL and run it from the README.

### 7. Final reflection (about 1.5 h)

🔴 **AI off.** Write it yourself, 400–600 words, and submit it on Canvas, never in your repo. Use [REFLECTION.md](../../templates/REFLECTION.md) as a starting shape, but this one has a specific job:

**Compare how much you *felt* you understood while building with what you could *actually explain* afterward.**

Before you write, look back at your pre-course self-assessment on Canvas. Anchor the reflection in concrete moments across the course (a prompt, a commit, an error, a walkthrough question, an agent claim you checked, the AI-off maintenance task):

1. A time you felt you understood something but couldn't explain it later (in a walkthrough, or while fixing a bug).
2. A time it went the other way: you doubted yourself, but could explain it fine.
3. One habit from the Safe Loop that changed how you work.
4. **Your revised personal AI-use rules.** Paste the rules you wrote in week 1, then your revised version from Studio B, and explain one rule you changed and why.
5. What you'd tell a friend starting this course.

Grading: the [final reflection rubric](../../assessment/rubrics.md#reflections-and-peer-reviews).

## Deliverables summary

| Item | Where |
|---|---|
| Production URL and a screenshot | Canvas (and the URL in your README) |
| Repo, with the `v1.0` release | GitHub, public; links on Canvas |
| README, SPEC, AGENTS, PROMPTS, TESTS, SECURITY_CHECKLIST | In the repo |
| Demo video (2–3 min, captions or transcript) | Linked in the README, or on Canvas |
| Oral walkthrough 3 | Week 8 Studio A, or by appointment before the Project Fair |
| Final reflection (400–600 words, 🔴 AI off) | Canvas |
| Revised AI-use rules, post-course [self-assessment](../../assessment/self-assessment.md) and exit ticket | Canvas, in Studio B (the rules also go in your final reflection) |

Grading: the [capstone rubric](../../assessment/rubrics.md#capstone). A working demo is required but not sufficient: spec, tests, security, process, documentation and the code you can explain all count.

> [!NOTE]
> Supabase free projects pause after about a week without activity. Restore yours before you submit and check the production URL still works ([Troubleshooting: Supabase](../../resources/troubleshooting.md#supabase)).

## Keep going roadmap (after the course)

You now have the loop and the trust boundary. Tools will change; those won't. Where to go next, roughly in order:

1. **Ship one more thing you'll use.** The fastest way to keep the skill is to build something small and real, start to finish, on your own.
2. **Deepen the fundamentals** the oral walkthroughs stretched: reading errors, explaining functions, writing tests, git branches and reverts. These are what let you go faster with AI, not slower ([September report](../../research/landscape-report-2026-09.md)).
3. **Learn the next rung when you need it**, not before. A background or cloud agent, MCP servers, GitHub Actions, a framework: pick these up on a project that needs them.
4. **Keep up without chasing every tool.** Follow a few signal sources; when a free tier changes, switch to a fallback (you've practiced this). The open standards, **AGENTS.md, MCP and git**, are the safe bet.
5. **Stay safe by habit:** privacy settings on new tools, secrets on the server, grants and RLS together on every table, read the diff, approvals on, check packages. The week 7 checklist works on any project.
6. **Keep a portfolio.** Leave your repos public with good READMEs and demo videos, if you're comfortable. That's your proof that you can direct AI to build real, explainable software.

More: [Reading List](../../resources/reading-list.md).

Congratulations: you built, secured, shipped and can explain real software. That's the whole course.

> [!IMPORTANT]
> **Minimum to finish:** a production URL where your main user story works, a `v1.0` release, and walkthrough 3 done. Without a working production URL the capstone is capped until it runs, so if you're behind, ship the smallest honest version (one working feature, deployed, documented, with known issues named) and tell your instructor before the deadline.
