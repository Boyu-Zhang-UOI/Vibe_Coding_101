# Week 8 — Ship It
> Done means deployed, documented and explainable.

| | |
|---|---|
| **Time** | 3-hour studio + final homework |
| **Tools** | Everything you've used; a free screen recorder ([TOOLS.md](../../TOOLS.md)) |
| **You'll build** | A polished, accessible, deployed capstone; a 2-3 minute demo video; a Project Fair presentation |
| **Due** | Capstone final submission, demo video, final reflection; [Project Fair](project-fair.md); [oral walkthrough 3](../../assessment/oral-walkthroughs.md#walkthrough-3-week-8) |

## Learning objectives

By the end of this week you can:

1. Say what **"done"** means for a web app, and take a working demo the last stretch to a shippable product.
2. **Polish** an app: handle empty, loading and error states; work on a phone; set a favicon and page title; write a README a stranger can follow.
3. Apply **accessibility basics**: alt text, form labels, color contrast, keyboard use and visible focus.
4. **Tell the story** of a project in a few minutes: problem, demo, how you built it, what broke, what you learned.
5. Explain **where the field is going** (vibe coding to agentic engineering) and what to learn next without chasing every tool.
6. State the **ethics and law** basics: purely AI-generated output isn't copyrightable; disclose how you used AI.

## Before class

- [ ] Bring a capstone that runs end to end with its data feature working (from week 7).
- [ ] Run your capstone's tests (`npm test`) and confirm they pass.
- [ ] Skim [polish-checklist.md](polish-checklist.md) and [project-fair.md](project-fair.md) so you know what today builds toward.
- [ ] Make sure your `SECURITY_CHECKLIST.md` from week 7 is up to date; you'll do a final pass.

## Studio agenda

| Time | Block |
|---|---|
| 0:00-0:10 | Show and tell: two capstones |
| 0:10-0:30 | Concept talk: done, polish, accessibility, storytelling, where the field is going ([slides.md](slides.md)) |
| 0:30-1:20 | **Part 1 — Polish sprint** with [polish-checklist.md](polish-checklist.md) ([lab.md](lab.md#part-1--polish-sprint-50-min)) |
| 1:20-1:30 | Break |
| 1:30-1:45 | **Part 2 — Final security pass** ([lab.md](lab.md#part-2--final-security-pass-15-min)) |
| 1:45-2:05 | **Part 3 — Record your demo video** ([lab.md](lab.md#part-3--record-your-demo-video-20-min)) |
| 2:05-2:20 | **Part 4 — Demo rehearsal in pairs** ([lab.md](lab.md#part-4--demo-rehearsal-in-pairs-15-min)) |
| 2:20-2:55 | **Project Fair** ([project-fair.md](project-fair.md)) |
| 2:55-3:00 | Wrap, final submission preview |

> [!NOTE]
> **Oral walkthrough 3** (10 minutes, AI off) is scheduled individually during the week, not in the
> studio block. See [assessment/oral-walkthroughs.md](../../assessment/oral-walkthroughs.md#walkthrough-3-week-8).

## Materials

- [slides.md](slides.md) — the 20-minute concept talk
- [lab.md](lab.md) — the polish sprint, demo recording and rehearsal
- [homework.md](homework.md) — the final submission checklist and a "keep going" roadmap
- [polish-checklist.md](polish-checklist.md) — a practical, tickable checklist
- [project-fair.md](project-fair.md) — format, run sheet, peer voting, feedback cards
- Templates: [PROJECT_README.md](../../templates/PROJECT_README.md), [REFLECTION.md](../../templates/REFLECTION.md), and your capstone's SPEC/AGENTS/PROMPTS/TESTS/SECURITY_CHECKLIST

## Key ideas

**Definition of done.** A demo proves an idea; done means someone else can *use* it and *trust* it.
For this course, done = deployed at a live URL, documented so a stranger can run and understand it,
tested (including edge cases), secure (the week-7 checklist), and explainable by you.

**Polish is finishing the last 30%.** Non-engineers get most of the way fast, then stall on edge
cases and production readiness — Osmani's "70% problem" ([report](../../research/landscape-report-2026-09.md)).
Polish is that last stretch: what does the app show when there's no data, while it's loading, or when
something fails? Does it work on a phone? Does it have a title and a favicon so it isn't "Untitled"?

**Accessibility is part of done.** Images need alt text; inputs need labels; text needs enough color
contrast; everything clickable must work with the keyboard and show a visible focus outline. This is
both an ethical baseline and good engineering. [polish-checklist.md](polish-checklist.md) lists the
concrete checks.

**Tell the story.** A good project talk is short and has a shape: the **problem**, a live **demo**,
**how** you built it, **what broke** and how you recovered, and **what you learned**. "What broke" is
not a weakness to hide; it's the most convincing part.

**Where the field is going.** Karpathy's framing: vibe coding lets anyone prototype; the professional
version is *agentic engineering*, and responsibility for security and understanding stays with the
human ([Karpathy, 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/)). Tools churn — within a
year, several this course could have used disappeared. What lasts is the **loop** and a few open
standards: **AGENTS.md**, **MCP** and **git**. Learn the process, keep up without chasing every tool,
and switch fallbacks as a routine skill.

**Ethics and law, in brief.** The US Copyright Office holds that **purely AI-generated output is not
copyrightable**, and detailed prompts alone don't change that ([USCO](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf)).
On **16 September 2026** the Ninth Circuit upheld dismissal of the DMCA claim in **Doe v. GitHub**,
while the open-source license claims remain pending ([Heather Meeker](https://heathermeeker.com/2026/09/17/landmark-decision-in-doe-v-github-ai-court-battle/)).

> [!NOTE]
> That ruling is very recent (this course dates from September 2026). Re-check the current status
> before you teach or rely on it.

**Disclose.** Keep your `PROMPTS.md` honest, credit any code, images or text you reused, and keep a
record of what you wrote yourself.

## Understanding check

**Oral walkthrough 3** (10 minutes, AI off): explain your code, make a small change live, and find a
planted bug ([protocol](../../assessment/oral-walkthroughs.md#walkthrough-3-week-8)). Plus the final
reflection, which asks you to compare how much you *felt* you understood with what you could actually
explain.

## Homework

[homework.md](homework.md): the final submission checklist (live URL, repo, README, SPEC.md,
AGENTS.md, PROMPTS.md, TESTS.md, SECURITY_CHECKLIST.md, demo video, final AI-free reflection), the
[post-course self-assessment](../../assessment/self-assessment.md), and a "Keep going" roadmap.

## If a tool is down

- **Screen recorder won't work:** every OS has a built-in one (macOS Shift-Cmd-5; Windows Snipping
  Tool or Game Bar; ChromeOS screen record). If all else fails, a phone camera pointed at the screen
  is an acceptable demo video for grading.
- **Vercel deploy fails:** fall back to Cloudflare Workers, or (for a static build) GitHub Pages.
  Remember Vercel Hobby can't deploy org-owned repos — deploy from your **personal** fork
  ([TOOLS.md](../../TOOLS.md)).
- **Supabase project paused:** restore it from the dashboard before the Fair; free projects pause
  after about a week idle.
- **Project Fair can't be in person:** use the online/hybrid variant in [project-fair.md](project-fair.md#onlinehybrid-variant).
- **Capstone still behind:** ship the smallest honest version — one working feature, deployed,
  documented — and be candid about scope in your talk. A working small thing beats a broken big one.

## Going further

- Add one accessibility win beyond the checklist (a skip link, a reduced-motion option).
- Write a short "what I'd build next" note in your README.
- Follow the [Keep going roadmap](homework.md#keep-going-roadmap-after-the-course).
