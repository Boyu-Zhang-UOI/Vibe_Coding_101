# Week 8 instructor notes — Ship It

> The last studio. Two jobs: get every student to a shippable, explainable capstone, and end the
> course on pride, not panic. Read [lab.md](lab.md), [project-fair.md](project-fair.md) and
> [polish-checklist.md](polish-checklist.md) first.

## Prep checklist (do the week before)

- [ ] **Run the whole lab on a sample capstone** yourself: polish a couple of items, do the security
      pass, and record a 2-3 minute demo with your OS's built-in recorder, so you can screen-share the
      exact steps.
- [ ] **Confirm the built-in recorders** on the OSes your students use (macOS Shift-Cmd-5; Windows
      Snipping Tool / Game Bar; ChromeOS screen capture). Note where "stop recording" is on each.
- [ ] **Decide the Project Fair logistics:** room layout, how you'll split groups, whether you need
      three rotations for a big class, and the [online/hybrid](project-fair.md#onlinehybrid-variant)
      version if anyone is remote.
- [ ] **Print** feedback cards and voting slips (or set up digital versions).
- [ ] **Schedule oral walkthrough 3** slots across the week (about 5-8 TA-hours per 30 students).
- [ ] **Triage capstones:** who is shippable, who is behind. Line up office hours for the behind group.
- [ ] **Re-check the Doe v. GitHub status** and the copyright framing before you present the ethics
      slide — the ruling is from 16 Sep 2026 and may have moved.
- [ ] Remind students two days out to **restore any paused Supabase project** so live demos work.

## Minute-by-minute run sheet

| Time | Block | Notes |
|---|---|---|
| 0:00-0:10 | Show and tell | Two capstones; ask each "what does done mean for your app?" |
| 0:10-0:30 | Concept talk | [slides.md](slides.md). Land: done = deployed + documented + explainable. |
| 0:30-1:20 | Part 1 polish sprint | Circulate; push the empty/loading/error trio and the keyboard test. |
| 1:20-1:30 | Break | |
| 1:30-1:45 | Part 2 security pass | Quick; catch regressions from polishing. |
| 1:45-2:05 | Part 3 record demo | Demo your OS recorder live first. Watch for on-screen secrets. |
| 2:05-2:20 | Part 4 rehearse | Pairs; feedback cards. |
| 2:20-2:55 | Project Fair | Run the [run sheet](project-fair.md#run-sheet). |
| 2:55-3:00 | Close | Final submission preview; congratulate them. |

## Live-demo script (record a demo, 5 min)

1. Share your screen. Open your sample capstone's live URL.
2. Press your OS record shortcut; show the recording controls. "This is free and already on your
   machine."
3. Talk through the story shape as you record: problem (1 line), do the main task, trigger one edge
   case, one line on how it's built, one honest "what broke".
4. Stop, show the file, note the length (aim 2-3 min). "Upload it unlisted, put the link in your
   README."
5. Point out: no real personal data, no secret keys visible on screen.

## Common pitfalls

- **Polishing forever, shipping never.** Some students rabbit-hole on CSS. Redirect them to the
  checklist order: three states → phone → title/favicon → accessibility. "Shippable, then pretty."
- **Regressions from polish.** A CSS or refactor change breaks a feature or reintroduces `innerHTML`.
  That's why Part 2 re-runs the security checks and tests. Commit small.
- **Demo video shows a secret.** Watch for `.env` open in the editor, or a secret key on screen.
  Catch it before they upload.
- **"It works on localhost."** Grading is on the **live** URL. Make them test the deployed site in a
  private window. Vercel Hobby can't deploy org repos — deploy from the personal fork
  ([TOOLS.md](../../TOOLS.md)).
- **Paused Supabase at the Fair.** Free projects pause after ~1 week idle; a live demo then fails.
  Restore beforehand, and keep the demo video as a backup.
- **Accessibility treated as optional.** Frame it as part of "done", not extra credit. The keyboard
  test makes it concrete and fast.
- **AI in the reflection.** The final reflection is 🔴 AI-free. Remind them; it's graded on specifics,
  not polish.

## Differentiation

- **Ahead / already shipped:** ask for one accessibility win beyond the checklist, a "what I'd build
  next" note, and to volunteer for a spotlight demo. Have them buddy a behind student during the
  polish sprint.
- **On track:** the lab and checklist are sized for them.
- **Behind (capstone not shippable):** the goal shifts to "ship the smallest honest version": one
  working feature, deployed, documented, with a candid scope note in the talk and video. A working
  small thing beats a broken big one and can still earn well on the rubric's non-demo criteria. Give
  them a focused office-hours slot; don't let them skip the Fair — presenting a small honest project
  is valuable.
- **Anxious presenters:** the gallery format is lower-pressure than a stage. Offer the video-plus-
  questions option ([project-fair.md](project-fair.md#accessibility-considerations)).

## Fallback plans

- **Screen recorder fails:** every OS has one (script above); a phone camera on the screen is an
  acceptable last resort for grading.
- **Deploy platform down:** Vercel → Cloudflare Workers → (static) GitHub Pages. Deploy from a
  personal repo.
- **Supabase paused/down:** restore from the dashboard; if it's a platform outage, the demo video and
  a `localStorage`/Neon fallback carry the demo. The rubric doesn't grade the vendor.
- **Project Fair can't be in person:** run the [online/hybrid variant](project-fair.md#onlinehybrid-variant).
- **Class widely behind:** shrink the Fair to spotlights + video swap, spend more of the block on the
  polish sprint and a group security pass, and move final submission fully to homework with extra
  office hours. Still do oral walkthrough 3 — it's the course's main understanding check.

## Ending the course well

- Announce Fair category winners; make sure many students win something (that's why there are several
  categories).
- Name the arc: from a chat window in week 1 to an agent in their repo and a secured, deployed app in
  week 8 — built by directing AI, and explainable by them.
- Point forward: the [Keep going roadmap](homework.md#keep-going-roadmap-after-the-course),
  [reading-list.md](../../resources/reading-list.md), and keeping repos public as a portfolio.
- Collect the post-course [self-assessment](../../assessment/self-assessment.md) to close the
  understanding-measurement loop the course was designed around.
