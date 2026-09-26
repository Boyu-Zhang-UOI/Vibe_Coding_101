# Week 8 homework — Final submission

> This is the last homework: finish and submit your capstone. Budget about 3 hours, but start early —
> deploying and polishing always take longer than coding ([research](../../research/landscape-report-2026-09.md)).
> Work in the [Safe Loop](../../resources/safe-loop.md); commit as you go.

## Core tier (required) — the final submission checklist

Your capstone is done when every box below is ticked. Use
[polish-checklist.md](polish-checklist.md) to get there.

### The deliverables

- [ ] **Live URL** — the deployed app works in a fresh browser (try a private window).
- [ ] **Repo** — public, on GitHub, with a sensible history of commits.
- [ ] **README.md** — from [PROJECT_README.md](../../templates/PROJECT_README.md): what it does, live
      URL, demo video link, a screenshot, how to run it, how it works, the "authorization is enforced
      in: …" line, and credits.
- [ ] **SPEC.md** — the spec, with the acceptance-criteria table marked pass/partial.
- [ ] **AGENTS.md** — the rules your agent followed, current with how the project actually works.
- [ ] **PROMPTS.md** — an honest log of the key prompts and what you changed yourself.
- [ ] **TESTS.md** — at least 3 automated tests (`npm test` passes) and at least 3 manual edge-case
      tests, with results.
- [ ] **SECURITY_CHECKLIST.md** — complete, with evidence, dated this week.
- [ ] **Demo video** — 2-3 minutes, linked in the README (recorded in the lab).
- [ ] **Final reflection** — see below (AI-free).
- [ ] The capstone includes **at least two** of: a server-side API call with a hidden key; a database
      with access rules and/or auth; a data visualization; an external public API
      ([SYLLABUS](../../SYLLABUS.md#6-projects)).
- [ ] **Release** — your final commit is tagged `v1.0` as a GitHub release, so graders see exactly
      what you submitted ([how](../../projects/capstone.md#what-done-means)).

✅ **Done when:** every box is ticked and a classmate could use your app from the URL and run it from
the README.

### The final reflection (AI off, 400-600 words)

Write it yourself, with AI off (🔴). Use [REFLECTION.md](../../templates/REFLECTION.md) as a starting
shape, but this one is longer and has a specific job:

**Compare how much you *felt* you understood while building with what you could *actually explain*
afterward.**

Anchor it in concrete moments across the course:

- A time you felt you understood something but couldn't explain it later (an oral walkthrough, a bug).
- A time the reverse happened — you doubted yourself but could explain it fine.
- One habit from the Safe Loop that changed how you work.
- What you'd tell a friend starting this course.

### Post-course self-assessment

Complete the [post-course self-assessment](../../assessment/self-assessment.md). It pairs with the one
you did at the start so you (and your instructor) can see what changed.

### Oral walkthrough 3

If you haven't already, schedule and complete
[oral walkthrough 3](../../assessment/oral-walkthroughs.md#walkthrough-3-week-8) (10 minutes, AI off):
explain your code, make a small change live, and find a planted bug.

## Deliverables summary

| Item | Where |
|---|---|
| Live URL | in README + submission |
| Repo | GitHub, public |
| README, SPEC, AGENTS, PROMPTS, TESTS, SECURITY_CHECKLIST | in the repo |
| Demo video (2-3 min) | linked in README |
| Final reflection (400-600 words, AI-free) | submission |
| Post-course self-assessment | [assessment/self-assessment.md](../../assessment/self-assessment.md) |
| Oral walkthrough 3 | scheduled with instructor |

Grading: [capstone rubric](../../assessment/rubrics.md#capstone). A working demo is required but not
sufficient — spec quality, tests, security, deployment and your prompt log all count.

> [!NOTE]
> Supabase free projects pause after about a week idle. Restore yours from the dashboard before you
> submit, and check the live URL still works ([TOOLS.md](../../TOOLS.md)).

## Keep going roadmap (after the course)

You now have the loop and the trust boundary. Tools will change; those won't. Where to go next,
roughly in order:

1. **Ship one more thing you'll use.** The fastest way to keep the skill is to build something small
   and real, start to finish, on your own.
2. **Deepen the fundamentals** the oral walkthroughs stretched: reading errors, explaining functions,
   writing tests, git branches and reverts. These are what let you go faster with AI, not slower
   ([research](../../research/landscape-report-2026-09.md)).
3. **Learn the next rung when you need it** — not before. A background/cloud agent, MCP servers,
   GitHub Actions, a framework — pick these up on a project that needs them.
4. **Keep up without chasing every tool.** Follow a few signal sources; when a free tier changes,
   switch to a fallback (you've practiced this). The open standards — **AGENTS.md, MCP, git** — are
   the safe bet.
5. **Stay safe by habit:** privacy settings on new tools, secrets on the server, RLS on every table,
   read the diff, sandbox agents, check packages. The week-7 checklist works on any project.
6. **Keep a portfolio.** Leave your repos public with good READMEs and demo videos. That's your proof
   you can direct AI to build real, explainable software.

More: [resources/reading-list.md](../../resources/reading-list.md).

Congratulations — you built, secured, shipped and can explain real software. That's the whole course.
