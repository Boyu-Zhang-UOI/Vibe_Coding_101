---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 8"
footer: "CC BY 4.0"
---

# Ship It

### Done means deployed, documented, explainable, and honest about its limits

<!--
Last concept talk of the course. Tone: proud and practical. 20 minutes maximum (about 14 slides).
The lab is the polish sprint, so keep this tight and get them building. Walkthrough 3 slots start
during the lab. No model versions or prices here; those live in TOOLS.md.
-->

---

## A demo is not "done"

A **demo** proves the idea works once, with you driving.

**Done** means a stranger can use it and trust it:

deployed · documented · tested · secure · explainable by you.

<!--
Ask: "If I gave your production URL to your aunt and walked away, could she use it?" That's the
bar this week.
-->

---

## The last 30% is the hard part

You got to a working demo fast. Finishing is slower.

Osmani's **"70% problem":** non-engineers get most of the way, then stall on edge cases and production readiness.

Polish is that last stretch.

<!--
Source: the September report / Osmani. Normalize it: the wall is expected, not a personal
failing. The habits this course taught (small steps, tests, reading the diff) are exactly what
gets you over it.
-->

---

## The empty, loading, error trio

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
- **Captions or a transcript** for your video

Not extra credit: a baseline.

<!--
Quick live check: tab through your own app with no mouse. Can you reach and use everything? Can you
see where you are? If not, that's today's polish work. The video needs captions or a transcript;
writing a script first gives you the transcript.
-->

---

## Known issues are a strength

Every real app ships with limits.

Say **what doesn't work**, **when**, and **what you'd do next**.

Naming a real limitation **never costs points**. Hiding one does.

<!--
Michigan's EECS 498 judged its hackathon on evidence, not feature count, and told students that
being clear about what's broken beats hoping no one notices
(https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L08/slides.md).
In our rubric, an honest Known issues section is part of the README row, and the Project Fair has a
voting category and a feedback-card question for it.
-->

---

## Tell the story of your project

1. **Problem:** who has it, why it matters
2. **Demo:** show it working, live
3. **How:** how you built it
4. **What broke:** and how you recovered
5. **What you learned**

<!--
"What broke" is the most convincing part, not the weakest. Recovery stories show judgment.
This is the shape of the demo video and the Fair pitch (which ends with one known issue).
-->

---

## Where the field is going

**Vibe coding** (anyone prototypes) → **agentic engineering** (the professional discipline).

Karpathy, 2026: responsibility for **security** and **understanding** stays with the human.

<!--
Source: Karpathy, Sequoia Ascent 2026 (https://karpathy.bearblog.dev/sequoia-ascent-2026/).
You are now on the first rung of agentic engineering: spec, plan, small tasks, tests first, review.
-->

---

## Rules and rails

**Rules:** what you write for the agent (`AGENTS.md`). It may ignore them.

**Rails:** what holds anyway. The Codespace, approval prompts, scoped tokens, spending caps, RLS.

Can you say which rail protects each key, table and folder in your app?

<!--
From the October research update (research/landscape-update-2026-10.md, conclusion). Anthropic's
own docs call instruction files "context, not enforced configuration". This is the idea most
likely to outlast every tool in TOOLS.md. Good walkthrough-3 practice question.
-->

---

## Tools change. The loop lasts.

In one year, free tiers shrank or vanished across chat assistants, app builders and agents.

What spread instead: **AGENTS.md · MCP · git**.

Learn the **process** and the **open standards**, not any one product.

<!--
Keep this general (names and dates live in TOOLS.md). The Safe Loop and the trust boundary
outlast every tool we named. Switching to a fallback is a routine skill, not an emergency.
-->

---

## Ethics and law, in brief

- **Copyright:** purely **AI-generated** output is **not copyrightable** (US Copyright Office).
- **Doe v. GitHub:** on **16 Sep 2026** the Ninth Circuit upheld dismissal of the DMCA claim; license claims continue.
- **Disclose:** honest `PROMPTS.md`, `Assisted-by:` lines, credits.

<!--
Sources: USCO Part 2 report; Heather Meeker on Doe v. GitHub; CourtListener docket. As of 21 Oct
2026 no petition for rehearing had been reported, and the license claims remain before the district
court. Re-check before teaching. About half of 281 open-source projects' AI policies now require
disclosure (Hora et al., arXiv 2609.07542), and several use the same Assisted-by line you've used
since week 2.
-->

---

## Today: Studio A

1. **Polish sprint** (60 min) with the checklist, ending with your **known issues**
2. **Final security pass** (20 min)
3. **Record your demo video** (30 min), with captions or a transcript
4. *If time:* rehearse your Fair pitch

**Oral walkthrough 3** slots run alongside.

<!--
Walkthrough 3 is in Studio A, or by appointment during week 8 before the Project Fair: one rule
everywhere. When a student is called, they commit, close AI panels and come to the table.
-->

---

## Studio B and the final submission

**Studio B:** Project Fair · revise your AI-use rules · retrospective · post-course self-assessment.

**Final submission:** production URL + screenshot · `v1.0` release · demo video · **final reflection** (AI off, on Canvas).

The reflection compares what you **felt** you understood with what you could **actually explain**.

<!--
Congratulate them in advance: they built and shipped real software by directing AI, and can
explain it. That's the whole course.
-->
