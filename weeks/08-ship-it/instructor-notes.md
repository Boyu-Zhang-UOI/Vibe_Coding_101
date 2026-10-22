# Week 8 instructor notes — Ship It

> The last week. Two jobs: get every student to a shippable, explainable capstone, and end the
> course on pride, not panic. Studio A polishes, secures and records while oral walkthrough 3 runs
> alongside; Studio B is the Project Fair, the revised AI-use rules, a retrospective and the
> post-course self-assessment. Read [lab.md](lab.md), [project-fair.md](project-fair.md) and
> [polish-checklist.md](polish-checklist.md) first.

## Prep checklist (do the week before)

- [ ] **Schedule oral walkthrough 3** using the one timing rule: **week 8 Studio A, or by appointment
      during week 8 before the Project Fair**. Post the slots on Canvas a week ahead. Each slot takes
      15 minutes including scoring. Pick each student's planted bug and a sample diff they haven't
      seen ([protocol](../../assessment/oral-walkthroughs.md#walkthrough-3-week-8)), and check whose
      six-skill record still has a "not yet" (book 5-minute skill follow-ups in week 8).
- [ ] **Decide who covers the room during Studio A walkthroughs.** With a TA, the TA helps with the
      polish sprint while you examine (or the reverse). Without one, run walkthroughs during Parts 1
      and 3 (independent work) and move the rest to appointments; don't examine during the security
      pass, when students most need help.
- [ ] **Run the whole Studio A lab on a sample capstone** yourself: polish a couple of items, write a
      known-issues section, do the security pass, and record a 2–3 minute demo with your operating
      system's built-in recorder, with captions, so you can screen-share the exact steps.
- [ ] **Confirm the built-in recorders** on the operating systems your students use (macOS
      Shift-Cmd-5; Windows Snipping Tool or Game Bar; ChromeOS screen capture), and where "stop
      recording" is on each. Know the accessible alternatives in lab Part 3 and who has a CDAR letter.
- [ ] **Decide the Project Fair logistics:** room layout, the two groups (or three for a big class),
      the 4–5 voting categories (always including **Clearest known issues**), spotlight picks, and the
      [online/hybrid](project-fair.md#onlinehybrid-variant) version if anyone is remote. With fewer
      than 5 students, arrange the [small-class version](project-fair.md#small-classes).
- [ ] **Print** feedback cards and voting slips, and set up the digital feedback form.
- [ ] **Set up the retrospective:** sticky notes, or an anonymous form with three fields (keep,
      change, drop) and one for "advice to the next cohort".
- [ ] Check every student's **week 1 personal AI-use rules** are reachable on Canvas for Part 6, and
      open the **post-course self-assessment** on Canvas.
- [ ] **Re-check the Doe v. GitHub status** and the copyright framing before you present the ethics
      slide (the Ninth Circuit ruling is from 16 Sep 2026; as of 21 Oct 2026 no rehearing petition
      had been reported).
- [ ] Remind students two days before each studio to **restore any paused Supabase project**.
- [ ] **Triage capstones:** who is shippable, who is behind. Line up office hours for the behind group.
- [ ] Find last week's most-missed exit-ticket question for the Studio A recap.

## Studio A run sheet — Polish, secure, record

| Time | Block | Notes |
|---|---|---|
| 0:00–0:05 | Recap | The most-missed question from the week 7 exit ticket |
| 0:05–0:25 | Concept talk | [slides.md](slides.md), 20 minutes maximum. Land: done = deployed + documented + explainable + honest about limits |
| 0:25–0:35 | Live demo | Record a short demo with captions ([script](#live-demo-script-studio-a-10-min)) |
| 0:35–1:35 | Part 1 Polish sprint (Core) | Circulate; push the empty/loading/error trio, the keyboard test and the known-issues section. Walkthrough slots start |
| 1:35–1:45 | Break | |
| 1:45–2:05 | Part 2 Final security pass (Core) | Quick; catch regressions from polishing. Pause walkthroughs if you're alone |
| 2:05–2:35 | Part 3 Record demo video (Core) | Watch for on-screen secrets and dashboards. Send students to quiet corners to record. Walkthroughs resume |
| 2:35–2:50 | Part 4 Rehearse pitch (If time) | Pairs, feedback cards |
| 2:50–3:00 | Checkpoint share | One polish fix and one known issue from two or three students |

## Studio B run sheet — Fair, rules, retrospective

| Time | Block | Notes |
|---|---|---|
| 0:00–0:10 | Fair set-up | Replaces show and tell. Collect every URL/QR code in one shared list |
| 0:10–1:40 | Part 5 Project Fair (Core) | Run the [run sheet](project-fair.md#run-sheet). Walk the room; make sure every station gets visitors |
| 1:40–1:55 | Part 6 Revise personal AI-use rules (Core, 🔴 AI off) | On Canvas. Remind: keep/change/drop with evidence, seven rules or fewer |
| 1:55–2:10 | Part 7 Post-course self-assessment (Core, 🔴 AI off) | On Canvas. Say it isn't graded on the answers |
| 2:10–2:30 | Part 8 Course retrospective (Core) | Anonymous. Step back during the writing; facilitate the sorting |
| 2:30–2:45 | Debrief: awards and closing | Announce the categories; [end the course well](#ending-the-course-well) |
| 2:45–3:00 | Exit ticket (🔴 AI off) | [exit-tickets.md#week-8](../../assessment/exit-tickets.md#week-8), with its look-back question on the week 7 maintenance task. If time runs short, let the self-assessment stand in for it |

The studio agenda in the README is the two-row summary of these sheets.

## Live-demo script (Studio A, 10 min)

1. Share your screen. Open your sample capstone's production URL, and its README's known-issues section. "This is the part most people hide. Don't."
2. Press your operating system's record shortcut; show the recording controls. "This is free and already on your machine."
3. Talk through the story shape as you record: problem (one line), the main task, one edge case, one line on how it's built, one honest "what broke".
4. Stop, show the file and its length (aim for 2–3 minutes). Show how to turn on automatic captions where you upload, and how to fix a wrong word. "Or write your script first: that's your transcript."
5. Point out: no real personal data, no keys or dashboards on screen, upload unlisted (or to Canvas only).

## Common pitfalls

- **Polishing forever, shipping never.** Redirect to the checklist order: three states → phone → title/favicon → accessibility → README. "Shippable, then pretty."
- **Regressions from polish.** A CSS or refactor change breaks a feature or reintroduces `innerHTML`. That's why Part 2 re-runs the tests and checks. Commit small.
- **Hiding known issues.** Students fear that naming a bug costs points. Say it plainly: naming a real limitation never costs points; a grader finding a hidden one does. The Fair's "Clearest known issues" category makes it concrete.
- **Demo video shows a secret.** Watch for `.env` open in the editor, a Supabase or Vercel dashboard, or a key on screen. Catch it before they upload. If one was shown, the key must be revoked and replaced.
- **"It works on localhost."** Grading is on the **production URL**. Make them test it in a private window. A preview URL in a submission will stop working when Vercel deletes old deployments; insist on the production URL plus a screenshot. Vercel's free plan can't deploy private organization repos: deploy from a repo on the student's personal account ([TOOLS.md](../../TOOLS.md)).
- **Paused Supabase at the Fair.** A live demo then fails. Restore beforehand, and keep the demo video as a backup.
- **Accessibility treated as optional.** Frame it as part of "done", not extra credit. The keyboard test makes it concrete and fast; captions or a transcript are part of the README row.
- **Walkthrough timing confusion.** There is one rule: Studio A, or by appointment during week 8 before the Fair. Students who missed theirs for an M-1 or M-3 reason are rescheduled without penalty, and that still has to fall before the grade deadline.
- **AI in the reflection or the rules.** The final reflection, the revised AI-use rules, the feedback cards and the self-assessment are all 🔴 AI off. Remind them; the reflection is graded on specifics, not polish.
- **Personal writing in the repo.** Reflections, rules, self-assessments and feedback cards go on Canvas or stay with the student, never in a commit.

## Differentiation

- **Ahead / already shipped:** one accessibility win beyond the checklist, a "what I'd build next" note, and a spotlight demo if they want one. Have them buddy a behind student during the polish sprint.
- **On track:** the lab and checklist are sized for them.
- **Behind (capstone not shippable):** the goal becomes "ship the smallest honest version": one working feature, deployed, documented, with a candid known-issues section. A working small thing beats a broken big one and can still earn well on the rubric's other rows. Give them a focused office-hours slot; don't let them skip the Fair: presenting a small honest project is valuable.
- **Anxious presenters:** the gallery format is lower-pressure than a stage. Offer the video-plus-questions option ([accessibility considerations](project-fair.md#accessibility-considerations)).
- **Working alone (N = 1):** walkthrough 3 by appointment; the Fair becomes a public demo slot plus three outside testers; the retrospective becomes a 15-minute conversation; compare the self-assessment with the student only ([course variants](../../instructor/variants.md)).

## Fallback plans

- **Screen recorder fails:** every operating system has one (above); a phone camera on the screen is an acceptable last resort for grading, and lab Part 3 lists the alternatives.
- **Deploy platform down:** Vercel → Cloudflare Workers → (static) GitHub Pages, from a personal repo. Accept a screenshot plus the demo video until it's back, and agree a fix date before the grade deadline.
- **Supabase paused or down:** restore from the dashboard; in a platform outage, the demo video carries the Fair, and the rubric doesn't grade the vendor.
- **Project Fair can't be in person:** run the [online/hybrid variant](project-fair.md#onlinehybrid-variant).
- **Walkthrough slots overrun in Studio A:** move the rest to appointments before the Fair; never run a walkthrough after the Fair.
- **Class widely behind:** shrink the Fair to spotlights plus a video swap, spend more of Studio A on the polish sprint and a group security pass, and add office hours before the final deadline. Still do walkthrough 3: it's the course's main understanding check.

## Retrospective and self-assessment: privacy

- The retrospective is anonymous. Summarize it by theme, never by person. With fewer than 5 students, report nothing outside the class; hold a conversation instead.
- "Advice to the next cohort" is shared only with each writer's consent, without names.
- Share class-level self-assessment results only as summaries in which no one can be identified, and only if N ≥ 10. With smaller classes, compare pre and post with each student individually.

## Ending the course well

- Announce Fair category winners; make sure many students win something (that's why there are several categories, including **Clearest known issues**).
- Name the arc: from a chat window in week 1 to an agent in their repo and a secured, deployed app in week 8, built by directing AI, and explainable by them. Say which rails they learned to put in place: the Codespace, approvals, scoped keys, grants and RLS.
- Point forward: the [Keep going roadmap](homework.md#keep-going-roadmap-after-the-course), the [Reading List](../../resources/reading-list.md), and keeping repos public as a portfolio if they're comfortable.
- Remind them the final submission is still due, with the date on Canvas.
