# Week 8 — Ship It
> Done means deployed, documented and explainable, including honest about what doesn't work yet.

## This week at a glance

| Item | Details |
|---|---|
| **Before Studio A** (≤1 h) | Read this page and skim the [Polish checklist](polish-checklist.md). Open your Supabase project (restore it if paused) and check your production URL works in a private window. Book your **oral walkthrough 3** slot on Canvas: in Studio A, or by appointment during week 8 before the Project Fair |
| **Studio A** | Talk: done, polish, accessibility, known issues, where the field is going · polish sprint · final security pass · record a 2–3 minute demo video · oral walkthrough 3 slots |
| **Studio B** | [Project Fair](project-fair.md) · revise your personal AI-use rules (🔴 AI off, Canvas) · course retrospective · post-course self-assessment (🔴 AI off, Canvas) |
| **Due: the final submission** (posted on Canvas, a few days after the Project Fair) | On Canvas: the **production URL plus a screenshot**, the repo URL, the link to the `v1.0` release, the demo video (linked from your README or submitted on Canvas), and your final reflection with your revised AI-use rules (🔴 AI off). Before the Fair: walkthrough 3 done |
| **AI use this week** | 🟢 AI on: polish fixes, finding accessibility problems, drafting README sections you then check against the real app · 🟡 AI limited: your README's known-issues section and your demo script (you decide what's true; the AI may critique) · 🔴 AI off: oral walkthrough 3, personal AI-use rules, the final reflection, the self-assessment, Fair feedback cards |
| **Must read** | README (this page), [lab.md](lab.md), [homework.md](homework.md). The studios use the [Polish checklist](polish-checklist.md) and the [Project Fair guide](project-fair.md) |
| **Look up when needed** | [Oral walkthroughs: what to expect](../../assessment/oral-walkthroughs.md#what-to-expect) · [Troubleshooting: Deploying to Vercel](../../resources/troubleshooting.md#deploying-to-vercel) · [Troubleshooting: Supabase](../../resources/troubleshooting.md#supabase) · [Accessibility guide](../../resources/accessibility.md) · [README template](../../templates/PROJECT_README.md) · [What "done" means](../../projects/capstone.md#what-done-means) |
| **Minimum to finish** | A production URL where your main user story works, a `v1.0` release, and walkthrough 3 done. Everything else adds points; these three are what the course can't grade without |
| **Time** | Studios 6 h · outside about 11 h |

Canvas is the course's learning management system. Your final reflection, AI-use rules and self-assessment go there, never in a repo.

## Learning objectives

By the end of this week you can:

1. Say what **"done"** means for a web app, and take a working demo the last stretch to a shippable product.
2. **Polish** an app: handle empty, loading and error states; work on a phone; set a page title and favicon; write a README a stranger can follow, with an honest **known issues** section.
3. Apply **accessibility basics**: alt text, form labels, color contrast, keyboard use and visible focus, plus captions or a transcript for your video.
4. **Tell the story** of a project in a few minutes: problem, demo, how you built it, what broke, what you learned.
5. Explain **where the field is going** (vibe coding to agentic engineering) and what to learn next without chasing every tool.
6. State the **ethics and law** basics: purely AI-generated output isn't copyrightable; disclose how you used AI.

## Before class

Before Studio A (about 1 hour):

- [ ] Read this page and skim the [Polish checklist](polish-checklist.md) and the [Project Fair guide](project-fair.md).
- [ ] Open your Supabase project, if you have one, and restore it if it's paused. Free projects pause after about a week without activity.
- [ ] Open your **production URL** in a private window and check the main user story works. Run `npm test`.
- [ ] Make sure `SECURITY_CHECKLIST.md` from week 7 is up to date; you'll do a final pass.
- [ ] Book your **oral walkthrough 3** slot: in Studio A, or by appointment during week 8 before the Project Fair ([what to expect](../../assessment/oral-walkthroughs.md#what-to-expect)).

## Studio agenda

| Studio | What happens |
|---|---|
| **Studio A — Learn & build** | Recap · talk ([slides](slides.md)) · live demo of recording a video · [polish sprint, final security pass, demo video](lab.md#studio-a--polish-secure-record) · walkthrough 3 slots run alongside · checkpoint share |
| **Studio B — Workshop** | [Project Fair](lab.md#studio-b--fair-rules-retrospective) · revise your AI-use rules · course retrospective · post-course self-assessment |

## Materials

- [Slides](slides.md): the 20-minute concept talk
- [Lab](lab.md): Studio A and Studio B, with Core and If time parts
- [Homework](homework.md): the final submission and a "keep going" roadmap
- [Polish checklist](polish-checklist.md): a practical, tickable checklist
- [Project Fair guide](project-fair.md): format, run sheet, peer voting, feedback cards
- Templates: [README template](../../templates/PROJECT_README.md), [REFLECTION.md](../../templates/REFLECTION.md), and your capstone's `SPEC.md`, `AGENTS.md`, `PROMPTS.md`, `TESTS.md`, `SECURITY_CHECKLIST.md`

## Key ideas

**Definition of done.** A demo proves an idea; done means someone else can *use* it and *trust* it. For this course, done = deployed at a production URL, documented so a stranger can run and understand it, tested (including edge cases), secure (the week 7 checklist), honest about its limits, and explainable by you.

**Polish is finishing the last 30%.** Non-engineers get most of the way fast, then stall on edge cases and production readiness: Osmani's "70% problem" ([September report](../../research/landscape-report-2026-09.md)). Polish is that last stretch. What does the app show when there's no data, while it's loading, or when something fails? Does it work on a phone? Does the browser tab say something better than "Untitled"?

**Accessibility is part of done.** Images need alt text; inputs need labels; text needs enough color contrast; everything clickable must work with the keyboard and show a visible focus outline. Your demo video needs captions or a transcript. This is both an ethical baseline and good engineering. The [Polish checklist](polish-checklist.md) lists the checks.

**Known issues are a strength.** Every real app ships with limits. Saying clearly what doesn't work, and what you'd do about it, shows judgment. Michigan's agentic-engineering course judges its hackathon "on evidence, not feature count" ([EECS 498 slides](https://github.com/eecs498-aase/materials/blob/HEAD/lectures/L08/slides.md)). In this course, naming a real limitation in your README's known-issues section **never costs points**, and the Project Fair gives credit for it.

**Tell the story.** A good project talk is short and has a shape: the **problem**, a live **demo**, **how** you built it, **what broke** and how you recovered, and **what you learned**. "What broke" isn't a weakness to hide; it's the most convincing part.

**Where the field is going.** Karpathy's framing: vibe coding lets anyone prototype; the professional version is *agentic engineering*, and responsibility for security and understanding stays with the human ([Karpathy, 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/)). Tools churn: within a year, several this course could have used disappeared or shrank their free tiers. What lasts is the **loop**, a few open standards (**AGENTS.md**, **MCP**, **git**), and knowing the difference between *rules* and *rails*. Rules are what you write for the agent, which it may ignore. Rails hold anyway: the Codespace, approval prompts, scoped tokens, spending caps and RLS ([October update](../../research/landscape-update-2026-10.md)). If you can say which rail protects each key, table and folder in your project, you've learned something that outlasts every tool.

**Ethics and law, in brief.** The US Copyright Office holds that **purely AI-generated output is not copyrightable**, and detailed prompts alone don't change that ([USCO](https://www.copyright.gov/ai/Copyright-and-Artificial-Intelligence-Part-2-Copyrightability-Report.pdf)). On **16 September 2026** the Ninth Circuit upheld dismissal of the DMCA claim in **Doe v. GitHub**; the open-source license claims remain before the district court ([Heather Meeker](https://heathermeeker.com/2026/09/17/landmark-decision-in-doe-v-github-ai-court-battle/); [docket](https://www.courtlistener.com/docket/69495342/doe-et-al-v-github-inc-et-al/)).

> [!NOTE]
> Court cases move. As of 21 October 2026 no petition for rehearing had been reported. Re-check the status before you rely on it.

**Disclose.** Keep your `PROMPTS.md` honest, keep your `Assisted-by:` lines, credit any code, images or text you reused, and keep a record of what you wrote yourself. Open-source projects increasingly expect this: about half of 281 projects' AI policies require disclosure ([Hora et al.](https://arxiv.org/abs/2609.07542)).

## Understanding check

**Oral walkthrough 3** (10 minutes, 🔴 AI off), in week 8 Studio A or by appointment during week 8 before the Project Fair: explain where authorization is enforced, find and fix a planted bug, spot a committed secret, and explain a test ([protocol](../../assessment/oral-walkthroughs.md#walkthrough-3-week-8)). Then the final reflection, which asks you to compare how much you *felt* you understood with what you could actually explain.

## Homework

[Homework](homework.md): the final submission (production URL plus a screenshot, repo, README with known issues, `SPEC.md`, `AGENTS.md`, `PROMPTS.md`, `TESTS.md`, `SECURITY_CHECKLIST.md`, the `v1.0` release, the demo video, and the final reflection with your revised AI-use rules on Canvas), plus a "Keep going" roadmap. Due at the final deadline on Canvas, a few days after the Project Fair. About 9.5 hours.

## If a tool is down

- **Screen recorder won't work:** every operating system has a built-in one (macOS Shift-Cmd-5; Windows Snipping Tool or Game Bar; ChromeOS screen capture). If all else fails, a phone camera pointed at the screen is an acceptable demo video for grading. Can't record at all? See the alternatives in the [lab](lab.md#part-3--record-your-demo-video-core-30-min).
- **Vercel deploy fails:** see [Troubleshooting: Deploying to Vercel](../../resources/troubleshooting.md#deploying-to-vercel). Vercel's free plan can't deploy **private** repos owned by a GitHub organization: use a repo on your personal account. Fallbacks: Cloudflare Workers, or GitHub Pages for a static build ([TOOLS.md](../../TOOLS.md)).
- **Supabase project paused:** restore it from the dashboard the day before the Fair ([Troubleshooting: Supabase](../../resources/troubleshooting.md#supabase)).
- **Project Fair can't be in person:** use the [online and hybrid variant](project-fair.md#onlinehybrid-variant).
- **Capstone still behind:** ship the smallest honest version: one working feature, deployed, documented, with a known-issues section that says what's missing. A working small thing beats a broken big one.

## Going further

- Add one accessibility win beyond the checklist (a skip link, a reduced-motion option).
- Write a short "what I'd build next" note in your README.
- Follow the [Keep going roadmap](homework.md#keep-going-roadmap-after-the-course).
