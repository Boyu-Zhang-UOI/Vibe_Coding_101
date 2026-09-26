---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 8"
footer: "CC BY 4.0"
---

# Ship It

### Done means deployed, documented and explainable

<!--
Last concept talk of the course. Tone: proud and practical. 20 minutes. The lab is the polish
sprint, so keep this tight and get them building. No model versions or prices — those live in TOOLS.md.
-->

---

## A demo is not "done"

A **demo** proves the idea works once, with you driving.

**Done** means a stranger can use it and trust it:

deployed · documented · tested · secure · explainable by you.

<!--
Ask: "If I gave your URL to your aunt and walked away, could she use it?" That's the bar this week.
-->

---

## The last 30% is the hard part

You got to a working demo fast. Finishing is slower.

Osmani's **"70% problem":** non-engineers get most of the way, then stall on edge cases and
production readiness.

Polish is that last stretch.

<!--
Source: report / Osmani. Normalize it: the wall is expected, not a personal failing. The habits
this course taught (small steps, tests, reading the diff) are exactly what gets you over it.
-->

---

## Polish checklist (the empty, loading, error trio)

What does your app show when there's:

- **no data** yet? (not a blank screen)
- **a slow request** in flight? (a spinner or "Loading…")
- **an error**? (a friendly message, not a frozen page)

Plus: works on a **phone**, has a **title** and a **favicon**.

<!--
These three states are where beginner apps look unfinished. The full list is polish-checklist.md.
"Untitled" in the browser tab is the tell that nobody set a <title>.
-->

---

## Accessibility is part of done

- **Alt text** on images
- **Labels** on inputs
- Enough **color contrast**
- Works with the **keyboard**, with a visible **focus** outline

Not extra credit — a baseline. It also makes the app better for everyone.

<!--
Quick live check: tab through your own app with no mouse. Can you reach and use everything? Can you
see where you are? If not, that's today's polish work.
-->

---

## Tell the story of your project

A good talk has a shape:

1. **Problem** — who has it, why it matters
2. **Demo** — show it working, live
3. **How** — how you built it
4. **What broke** — and how you recovered
5. **What you learned**

<!--
"What broke" is the most convincing slide, not the weakest. Recovery stories show judgment.
This is also the shape of the demo video and the Project Fair pitch.
-->

---

## Where the field is going

**Vibe coding** (anyone prototypes) → **agentic engineering** (the professional discipline).

Karpathy, 2026: responsibility for **security** and **understanding** stays with the human.

<!--
Source: Karpathy Sequoia Ascent 2026 (https://karpathy.bearblog.dev/sequoia-ascent-2026/).
You are now on the first rung of agentic engineering: spec, plan, small tasks, tests, review.
-->

---

## Tools change. The loop lasts.

In one year: Cursor's student year, Gemini CLI's free login, GitHub Spark and GitHub Models all
disappeared.

What spread instead: **AGENTS.md · MCP · git**.

Learn the **process** and the **open standards**, not any one product.

<!--
This is the course's thesis in one slide. The safe loop and the trust boundary outlast every tool
we named. Switching to a fallback is a routine skill, not an emergency.
-->

---

## Keeping up without burning out

- Learn the **next** rung when you need it, not before.
- Follow a few signal sources, not every launch.
- When a tool breaks, switch to a **fallback** — you've practiced this.

<!--
Reassure them: you don't have to try every new agent. Depth in the loop beats breadth in tools.
Point to the "Keep going" roadmap in the homework.
-->

---

## Ethics and law, in brief

- **Copyright:** purely **AI-generated** output is **not copyrightable** (US Copyright Office).
  Detailed prompts alone don't change that.
- **Doe v. GitHub:** on **16 Sep 2026** the Ninth Circuit upheld dismissal of the DMCA claim;
  license claims are still pending.
- **Disclose:** keep `PROMPTS.md` honest; credit what you reused.

<!--
Sources: USCO Part 2 report; Heather Meeker on Doe v. GitHub (16 Sep 2026). Say clearly: this ruling
is very recent and should be re-checked before relying on it. Keeping a human-authored record
(PROMPTS.md, what you wrote yourself) matters for both copyright and honesty.
-->

---

## Today's lab & the Fair

1. **Polish sprint** (50 min) with the checklist
2. **Final security pass** (15 min)
3. **Record your demo video** (20 min) — built-in free recorder
4. **Rehearse in pairs** (15 min)
5. **Project Fair** — present at stations, circulate, vote

<!--
Oral walkthrough 3 is scheduled 1:1 during the week, not in the studio. Point to project-fair.md.
-->

---

## Final submission (homework)

Live URL · repo · README · SPEC.md · AGENTS.md · PROMPTS.md · TESTS.md · SECURITY_CHECKLIST.md ·
2-3 min demo video · **final reflection (AI-free)**.

The reflection compares **how much you felt you understood** with **what you could actually explain**.

<!--
Plus the post-course self-assessment. Congratulate them: they built and shipped real software by
directing AI, and can explain it. That's the whole course.
-->
