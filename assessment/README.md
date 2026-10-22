# Assessment

> How your work is graded, and why. The question is never "did it run?" on its own. It is "did you specify it, check it, secure it, and can you explain it?"

This page covers grading for *Directed Study: Vibe Coding — Building Software with AI* ([subject] 2990, University of Idaho): **3 credits in 8 accelerated weeks**. A credit means about 45 hours of work (catalog Regulation D-1), so plan on about **135 hours**, or about **17 hours a week**: two 3-hour studios (**Studio A — Learn & build** and **Studio B — Workshop**) plus about 11 hours outside class.

It is for students and instructors. The detailed scoring guides are in [rubrics.md](rubrics.md), the oral check protocol in [oral-walkthroughs.md](oral-walkthroughs.md), the weekly AI-free questions in [exit-tickets.md](exit-tickets.md), and the before-and-after course survey in [self-assessment.md](self-assessment.md). Assignments are submitted on **Canvas, the course's learning management system** (LMS).

## Weights

These match [section 7 of the syllabus](../SYLLABUS.md#7-assessment).

| Component | Weight | How it is graded |
|---|---|---|
| Weekly labs and homework | 20% | Effort and completion of the core tier ([rubric](rubrics.md#weekly-labs-and-homework)). Weeks 6 and 7 are the capstone's [Milestones 1 and 2](../projects/capstone.md#milestones) |
| In-class builds, exit tickets and participation | 15% | 16 studios (two a week): lab work, peer explanation, checkpoints and the weekly exit ticket ([rubric](rubrics.md#in-class-work-and-participation)) |
| Project 1 | 10% | [Project 1 rubric](rubrics.md#project-1) |
| Capstone | 30% | Spec quality, tests including edge cases, security, deployment and prompt log. A working demo is required but not sufficient ([capstone rubric](rubrics.md#capstone)) |
| Oral walkthroughs (weeks 4, 6, 8) | 15% | 10-minute conversations with the AI off: explain your code, change it live, find a planted bug ([protocol](oral-walkthroughs.md)) |
| AI-free reflections and peer reviews | 10% | Your own writing, anchored in specific moments ([rubric](rubrics.md#reflections-and-peer-reviews)) |

**Where the smaller projects fit.** The [home page](../projects/home-page.md) (weeks 1–2) and the [AI micro-app](../projects/ai-micro-app.md) (week 5) count inside **Weekly labs and homework**. Week 5 is scored once, with the [AI micro-app rubric](rubrics.md#ai-micro-app) (20 points, double a normal week), and that rubric includes the capstone pitch.

## Grading philosophy

**Process and explanation, not just a running program.** AI makes running code cheap. It doesn't make understanding cheap: in Anthropic's randomized trial, junior engineers who learned a new library with AI help scored 50% on a follow-up quiz, against 67% for those without it, and fell furthest behind on debugging ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). Students who struggled with AI tools finished believing they had done better than they had ([Prather et al.](https://dl.acm.org/doi/10.1145/3632620.3671116)). Newer studies point the same way. Students who had to explain AI-written code before adding it failed an AI-off maintenance task far less often than students who didn't (39% versus 77%; [Sankaranarayanan](https://arxiv.org/abs/2602.20206)), and AI users remembered less of their own work two days later ([Bergh et al.](https://arxiv.org/abs/2609.21194)). So most of your grade rests on things that show understanding and good habits:

- **Evidence of process:** your spec, tests, security checklist with evidence, `PROMPTS.md` (including short "teach-back" notes that explain each AI-written change) and git history.
- **Explanation with the AI off:** oral walkthroughs, where each of the [six skills you must show without AI](../SYLLABUS.md#six-skills-you-must-be-able-to-show-without-ai) has to be shown at least once ([more](../resources/without-ai-skills.md)). Exit tickets let you practice them.
- **Your own writing:** reflections and peer reviews.

**This is where the field has gone.** A 2026 study of 23 US courses that require AI in graded software work found that all 14 conventionally graded courses counted participation (median weight 17.5%), projects had a median weight of 50%, and only three had any proctored assessment ([Geng et al., arXiv 2608.05898](https://arxiv.org/abs/2608.05898)). The ACM Task Force on generative AI and programming assessment surveyed about 500 educators in 2026: 68% had already changed their assessment, most often toward in-person checks, oral defenses and grading process over product ([ACM Task Force report](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf)).

**No arms race.** AI is required for most of the work in this course, so we don't try to make assignments AI-proof, and we don't use AI-detection software. Instead:

1. **Weekly labs are graded on effort and completion.** It's safe to experiment, fail and document what went wrong.
2. **Quality is judged at project milestones,** against rubrics that reward specs, edge cases, security evidence and honest documentation.
3. **Understanding is checked in conversation,** in 10-minute oral walkthroughs in weeks 4, 6 and 8. These cluster in the agent weeks because that's when understanding drops: in CMU 15-113's survey data, students' self-rated understanding fell to its lowest point of the year once agents took over ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)).

**A working demo is required but not sufficient.** AI makes brittle prototypes easy. Courses like Utah's CS 3960 give credit only for edge cases, how features interact and taste ([syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)), and Michigan's build rubric is half spec and design, half implementation and tests ([EECS 498](https://eecs498-aase.github.io/syllabus.html)). Our capstone rubric works the same way.

## How grades are calculated

Each component is scored in points, then scaled to its weight: `points earned ÷ points possible × weight`.

| Component | What is scored | Points possible | Drops and retakes |
|---|---|---|---|
| Weekly labs and homework (20%) | Weeks 1, 2, 3, 4, 6 and 7 at 10 points each (weekly rubric), plus week 5 at 20 points (AI micro-app rubric, including the pitch) | 70 (after the drop) | Your lowest of the six 10-point weeks is dropped (never week 5) |
| In-class work and participation (15%) | 16 studios at 10 points each | 140 (after the drops) | Your lowest **two** studios are dropped |
| Project 1 (10%) | Project 1 rubric | 40 | — |
| Capstone (30%) | Capstone rubric | 100 | — |
| Oral walkthroughs (15%) | Three walkthroughs, 16 points each, 5% each | 48 | Walkthroughs 1 and 2 may **each** be retaken once within 7 days; the better score counts. Walkthrough 3 has no score retake, but has a skill follow-up ([details](oral-walkthroughs.md#the-six-skills-you-must-show-without-ai)) |
| Reflections and peer reviews (10%) | Weekly reflections (weeks 1, 2, 3, 4, 6 and 7; lowest dropped: 50 points, 40% of this component), two peer reviews (20 points, 30%), final reflection (20 points, 30%) | Formula in the [rubric](rubrics.md#reflections-and-peer-reviews) | Your lowest weekly reflection is dropped |

**Example:** 60 of 70 weekly points is 60 ÷ 70 × 20 = 17.1% of the course.

The stretch tier of homework is optional and never affects your grade.

### Letter grades

The University of Idaho uses letter grades without plus or minus.

| Grade | Course percentage |
|---|---|
| **A** | 90–100 |
| **B** | 80–89 |
| **C** | 70–79 |
| **D** | 60–69 |
| **F** | below 60 |

Your course percentage is rounded to the nearest whole number before the letter is assigned (89.5 becomes 90).

**To earn a C or higher, you must also have:**

- a capstone that works at its production URL (the main, permanent web address of your deployed app);
- taken all three oral walkthroughs;
- shown each of the six without-AI skills at least once, in a walkthrough, a retake or a skill follow-up ([how](oral-walkthroughs.md#the-six-skills-you-must-show-without-ai)).

These conditions apply to everyone, so they also work with the pass/fail option below. If one of them is at risk late in the course, talk to your instructor early: there are several chances to show each skill, and an Incomplete is possible when extenuating circumstances apply (catalog Regulation F).

## How to submit

- **Projects:** on Canvas, submit the repo URL, the live URL (from week 5 on, the **production URL plus a screenshot** of it working, because the host deletes old preview links), and the link to your final commit. The capstone adds the link to its `v1.0` release and the demo video. Step by step: [projects/README.md](../projects/README.md#how-to-submit).
- **Weekly homework:** commit to the relevant repo, tick the deliverables checklist in that week's `homework.md`, and submit the links on Canvas.
- **Reflections, peer reviews and other personal writing:** on Canvas only, never in a repository ([Privacy of your work](#privacy-of-your-work)).
- **Exit tickets:** at the end of each week's Studio B, on Canvas with AI tools closed (or on paper).

**Due dates.** Unless Canvas says otherwise, everything is **due before next week's Studio A (default 11:59 pm the night before)**. The capstone pitch is due **72 hours before week 6 Studio A**. The final capstone deadline is posted on Canvas and always falls before the University's grade deadline.

We grade the commit you submitted, as it was at the deadline.

## Privacy of your work

Your projects are public on purpose: they become your portfolio. Your grades and your personal writing are not. U of I policy treats grades and graded work as private (FSH 4700 F-6, and FSH 2600, which applies FERPA, the US federal student-records law), so the course keeps the two apart.

| In your public repos (under your GitHub username) | On Canvas only |
|---|---|
| Code; `SPEC.md`, `TESTS.md`, `PROMPTS.md`, `AGENTS.md`, `SECURITY_CHECKLIST.md`, `README.md`; `supabase/policies.sql`; screenshots of your app with made-up data | Weekly and final reflections (including the week 3 bake-off verdict); exit tickets; your personal AI-use rules; the signed safety contract; self-assessments; written peer reviews; a pair's signed contribution statement; the capstone pitch; your project submissions (links and screenshots) |

- **Never commit** grades, feedback, reflections, the safety contract, classmates' real names (refer to people by GitHub username), your student ID, or real personal data about anyone ([project rules](../projects/README.md#the-three-project-rules)).
- **You don't need your real name** anywhere public. A GitHub username that doesn't reveal your name is fine, and so is leaving out a photo.
- **Code review on GitHub is fine.** Pull-request comments about code are ordinary code review. Keep them about the code. The graded peer review is the written one on Canvas.
- **Private repos are allowed.** Add your instructor as a collaborator. Check [TOOLS.md](../TOOLS.md) first, because some free hosting needs a public repo.
- **Grades and feedback come back on Canvas only.** Staff never post feedback as GitHub issues, pull-request comments or commits on your repos.
- **Recordings** of walkthroughs happen only with your consent, are kept where only staff can see them, and are deleted once grades are final. You may record a studio only with the instructor's consent or as a CDAR accommodation (FSH 4700 F-8).
- **Class results** (for example from the self-assessment) are shared only as summaries in which no one can be identified.
- **After the course** your repos are yours: you can keep them public, make them private or delete them.

## Late work and grace tokens

- **Two grace tokens.** Each token extends one deadline by **48 hours**, no reason needed. Write "grace token" in your Canvas submission comment. You don't need to ask first. (A token on the pitch is allowed, but the instructor's reply may then come at the start of week 6 Studio A.)
- **Tokens can't be used for live events:** studios, exit tickets, oral walkthroughs and the Project Fair. Those have make-up rules instead (below).
- **Pairs:** a pair can use a token on the capstone only if both partners have one left, and it costs each partner one.
- **After your tokens run out:** late work loses 10% of that item's points per day, for up to 3 days. After that it scores zero unless you've agreed an extension.
- **Tool trouble is not by itself a reason to be late**, because switching to a fallback is part of the course ([I ran out of free credits](../resources/troubleshooting.md#i-ran-out-of-free-credits)). If every fallback fails, take screenshots of the errors and contact your instructor before the deadline; you won't be penalized.

### Absences and make-up work

Attendance isn't scored on its own. It affects your grade through the in-class component (15%): each studio is scored out of 10 for the work you do in it, and a studio missed without arrangement or make-up scores 0. Your lowest two studios are dropped, which covers an ordinary missed day.

- **Absences the University recognizes** (Regulation M-1): official university activities, your own illness, family illness or care, or other compelling circumstances. Tell your instructor as soon as you can (before the absence, for official activities). You can make up the studio for **full credit within one week**: do the lab's core parts and, for a Studio B, the exit ticket on Canvas. Deadlines move without using a token, and missed walkthroughs are rescheduled without penalty.
- **Religious observance** (Regulation M-3): walkthroughs, exit tickets and the Project Fair are rescheduled. Tell your instructor as early as you can.
- **Other absences:** do the lab and (for Studio B) the exit ticket within 48 hours for up to 7 of the 10 points.
- **The grade deadline is firm.** Fix dates, retakes, follow-ups and resubmissions must all fall before the University's final-grade deadline. If extenuating circumstances make that impossible, an Incomplete may be agreed (Regulation F).

## Working in pairs

Pairs are allowed on the **capstone only**. The full rules are in [capstone.md](../projects/capstone.md#working-solo-or-in-a-pair). In short:

- Pairs take on a bigger scope: **at least three** of the four feature types, or two plus a scope increase the instructor approves at the pitch.
- Each partner commits their own work under their own GitHub account, and work is merged through pull requests reviewed by the other partner.
- The README has a **Contributions** table that uses GitHub usernames. The signed **contribution statement** goes on Canvas.
- Oral walkthroughs, reflections, peer reviews, exit tickets and the self-assessment are always **individual**.
- Both partners normally get the same capstone score. If the history and the contribution statement show a big imbalance, the instructor talks with both partners and may adjust individual scores.

## Pass/fail and non-credit versions

**This course is letter-graded (A–F)** for everyone, unless the department decides to grade this Directed Study pass/fail. Under catalog Regulation E-1-b that choice would be announced at the start of the course and apply to the whole class, and a P would need the same as a C or higher.

**The student pass/fail option** (Regulation B-10). You may be able to take the course under the University's pass/fail option. Eligibility and limits are set by the regulation, so check with your advisor. Instructors aren't told who chose it: the instructor reports a letter grade, and the Registrar records a C or higher as P. For undergraduates, a D stays on the record as a D. The conditions for a C or higher are [above](#letter-grades).

**Not applicable to U of I credit:** the two versions below are for people using the course materials elsewhere.

- **Non-credit** (workshops, bootcamps, community classes). No grades. A participant **completes** the course with a live home page, Project 1 and capstone, each with its documents; all three oral walkthroughs taken, for feedback only (a mentor or experienced peer can run them with the [protocol](oral-walkthroughs.md)); and at least half the studios attended, or the labs done self-paced.
- **Self-paced learners.** Follow the [self-paced path](../resources/self-paced.md). Use the rubrics as checklists. Answer the [exit tickets](exit-tickets.md) before reading the "good answer" notes. Record yourself doing each walkthrough with the question bank, explaining at least one function for three minutes (the format UCSD's CS1-LLM used for its project videos, [Vadaparty et al.](https://arxiv.org/pdf/2406.15379)). Take the [self-assessment](self-assessment.md) at the start and the end.

## AI use policy

The full policy, including the **complete list** of 🔴 AI off and 🟡 AI limited work, is in [section 8 of the syllabus](../SYLLABUS.md#8-ai-use-policy). That list is the one that counts. The rule is not "how much AI did you use" but "can you explain what you shipped".

In short: **🟢 AI on** for building, explaining, planning and reviewing; **🟡 AI limited** where the goal is your own thinking (the AI may critique your `SPEC.md` or capstone pitch but not write it; Debug Clinic tutor mode gives hints only); **🔴 AI off** for checks of your understanding and for writing addressed to people (reflections, peer reviews, exit tickets, oral walkthroughs, the self-assessment, your personal AI-use rules, and any task a brief marks AI off). If a brief and the syllabus ever seem to disagree, ask, and treat the stricter label as the rule until you have an answer.

- **Disclose:** every project has a `PROMPTS.md` with your key prompts, links to exported chats where possible, and notes on what you changed. Commits made with AI help end with an `Assisted-by: [tool]` line (taught in week 2, required from week 6).
- **Own it:** "If you can't explain it, you didn't build it." You may be asked to explain any line you submit.
- **Credit others:** if you use code, images or text from a person or website, credit it in your README. Using prompts you found online is fine; say where they came from.

## Academic integrity

**Disclosure is the rule.** Your `PROMPTS.md` is where you show how you used AI. Honest disclosure is never penalized, even when the AI did most of the typing.

**What counts as academic dishonesty here.** The U of I Student Code of Conduct (FSH 2300, section E-1) covers it. In this course that includes:

- using AI on 🔴 AI-off work, or beyond what a 🟡 AI-limited label allows ("reliance on prohibited technological assistance/artificial intelligence tools", FSH 2300 E-1.c);
- **fabricating evidence**: test results you didn't run, security evidence you didn't collect, or `PROMPTS.md` entries that didn't happen (AI agents have faked test results; we hold ourselves to a higher standard);
- submitting someone else's code, prompts or writing as your own, including a past student's project or prompts without credit;
- submitting a project made for another course without the prior approval of both instructors;
- having someone else take your oral walkthrough or exit ticket.

There are two separate processes, and they never mix.

**1. "Explain it or redo it": a learning conversation, not a sanction.** Sometimes you can't yet explain part of your own work, or `PROMPTS.md` doesn't seem to match what's in the repo. Then your instructor asks for a short conversation, about 10 minutes, like a walkthrough. Nobody is alleging misconduct. Usually you can explain it and that's the end of it. If you can't yet, you redo that part within 7 days: study or rebuild it, update `PROMPTS.md`, and explain it in a short follow-up. The part is then graded on the normal rubric, with no cap and no penalty for needing the follow-up. If, during a conversation, your instructor comes to suspect misconduct, they will stop, tell you so, and use the University process below instead.

**2. Suspected academic dishonesty: the University's process.** If your instructor suspects academic dishonesty, they will tell you and notify the Dean of Students, as FSH 2300 F-9.b.1 requires. **No grade consequence is applied until that process has finished** and its decision has been communicated to you (F-9.b.10). If grades are due before then, an Incomplete is entered until it's resolved (F-9.b.11). The Dean of Students explains your options and rights, including an informal resolution if everyone agrees to one.

**We don't use AI detectors.** Their verdicts can't be checked or explained. A conversation about your work tells us what we actually need to know: whether you understand it.

## Accommodations

If you believe you need disability-related academic adjustments, contact the **Center for Disability Access and Resources (CDAR)**. We follow CDAR accommodation letters. Also tell your instructor in week 1 if a health condition, time zone, device or connectivity issue could affect your work, so you can plan together. Many adjustments are open to everyone, with or without a letter:

- **Oral walkthroughs:** extra time, a written-first version, typed instead of spoken answers, breaks, a quiet room, camera off, your own assistive technology. See [oral-walkthroughs.md](oral-walkthroughs.md#accommodations).
- **Exit tickets:** extra time, typed answers, large print or screen-reader-friendly forms.
- **Timed builds:** may be untimed; they're graded on effort and save points, not speed.
- **Demo video:** a written script with screenshots, if recording or speaking is a barrier.
- **Deadlines:** extensions as set out in your accommodation letter, on top of your grace tokens.
- **Tools:** a [guide to the course's tools with a screen reader or keyboard](../resources/accessibility.md). Codespaces runs in a browser on modest laptops and Chromebooks. If your connection is unreliable, talk to your instructor about campus machines or offline alternatives.

## Feedback and regrades

- Grades and written feedback come back **on Canvas**, aiming for within a week and before the next related deadline.
- **Regrade requests:** within 7 days of getting a grade, in writing on Canvas, naming the rubric row and your reason. The whole item may be regraded, so the score can go up or down.

## Staff workload (for instructors)

Planning numbers for the standard cohort of **5 or more students** with two studios a week. Only the oral-walkthrough estimate comes from published data (UCSD's CS1-LLM reported 10–15 minutes per project to grade its video walkthroughs, [Vadaparty et al.](https://arxiv.org/pdf/2406.15379)). The others are suggested time boxes; keep grading within them by marking against the rubric rather than writing long comments.

| Task | Time per student | 5 students | 10 students | 20 students |
|---|---|---|---|---|
| Studios (16 × 3 h) | — | 48 h | 48 h | 48 h |
| Preparation (2–3 h a week) | — | 16–24 h | 16–24 h | 16–24 h |
| Oral walkthroughs (3 × 15 min, including scoring) | 45 min | 3.8 h | 7.5 h | 15 h |
| Weekly labs (6 × about 3 min) | 18 min | 1.5 h | 3 h | 6 h |
| Micro-app and pitch reply (10 + 10 min) | 20 min | 1.7 h | 3.3 h | 6.7 h |
| Project 1 | 15 min | 1.3 h | 2.5 h | 5 h |
| Capstone (plus the walkthrough 3 notes) | 25 min | 2.1 h | 4.2 h | 8.3 h |
| Reflections (6 × 3 min), peer reviews (2 × 5 min), final reflection (10 min) | 38 min | 3.2 h | 6.3 h | 12.7 h |
| Exit tickets ([1-minute scan](exit-tickets.md#use-the-results), 8 weeks) | — | 1.3 h | 2 h | 2.7 h |
| **Total over 8 weeks** | | **about 79–87 h** | **about 93–101 h** | **about 120–128 h** |

- Walkthroughs held in a studio work block overlap with studio time, so the totals are an upper bound. One examiner can run about three walkthroughs in a 50-minute block; the rest go in office hours or booked slots that week ([scheduling](oral-walkthroughs.md#staffing-and-scheduling)).
- **Slots outside studio time.** Regulation O-9-c treats required meetings outside the class schedule as needing provost approval, at least two weeks' notice and an alternative for students with conflicts. Keep out-of-studio walkthrough slots a choice among several times (including online), post all three windows in week 1, and ask your department whether your booked slots need approval. A TA, who can examine during the studio, avoids most of this.
- From about 15 students, plan for a TA. Without one, a department colleague can review a recorded walkthrough when a student asks for a second opinion.
- You can change the numbers on this page (tokens, late penalty, make-up window), as long as the M-1 make-up rule and the FSH 2300 process stay. Publish the final policy on Canvas in week 1, and post all three walkthrough windows then too.
- A one-student or very small Directed Study needs a different shape: see [instructor/variants.md](../instructor/variants.md).
