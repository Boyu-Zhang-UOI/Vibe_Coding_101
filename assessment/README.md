# Assessment

> How your work is graded, and why. The question is never "did it run?" on its own. It is "did you specify it, check it, secure it, and can you explain it?"

This page is for students and instructors. The detailed scoring guides are in [rubrics.md](rubrics.md), the oral check protocol in [oral-walkthroughs.md](oral-walkthroughs.md), the weekly AI-free questions in [exit-tickets.md](exit-tickets.md), and the before-and-after course survey in [self-assessment.md](self-assessment.md).

## Weights

These match [section 7 of the syllabus](../SYLLABUS.md#7-assessment).

| Component | Weight | How it is graded |
|---|---|---|
| Weekly labs and homework | 20% | Effort and completion of the core tier ([rubric](rubrics.md#weekly-labs-and-homework)) |
| In-class builds, exit tickets and participation | 15% | Attendance, timed builds, peer explanation swaps, exit tickets ([rubric](rubrics.md#in-class-work-and-participation)) |
| Project 1 | 10% | [Project 1 rubric](rubrics.md#project-1) |
| Capstone | 30% | Spec quality, tests including edge cases, security, deployment and prompt log. A working demo is required but not sufficient ([capstone rubric](rubrics.md#capstone)) |
| Oral walkthroughs (weeks 4, 6, 8) | 15% | 10-minute conversations with the AI off: explain your code, change it live, find a planted bug ([protocol](oral-walkthroughs.md)) |
| AI-free reflections and peer reviews | 10% | Your own writing, anchored in specific moments ([rubric](rubrics.md#reflections-and-peer-reviews)) |

**Where the smaller projects fit.** The [home page](../projects/home-page.md) (weeks 1–2) and the [AI micro-app](../projects/ai-micro-app.md) (week 5) count inside **Weekly labs and homework**. The micro-app has its own [rubric](rubrics.md#ai-micro-app) and counts double a normal week. An instructor who wants to grade the micro-app as a separate component must take its weight from Weekly labs and homework and update the syllabus table, so the weights still add up to 100%.

## Grading philosophy

**Process and explanation, not just a running program.** AI makes running code cheap. It doesn't make understanding cheap: in Anthropic's randomized trial, junior engineers who learned a new library with AI help scored 50% on a follow-up quiz, against 67% for those without it, and fell furthest behind on debugging ([Anthropic](https://www.anthropic.com/research/AI-assistance-coding-skills)). Students who struggled with AI tools finished believing they had done better than they had ([Prather et al.](https://dl.acm.org/doi/10.1145/3632620.3671116)). So most of your grade rests on things that show understanding and good habits:

- **Evidence of process:** your spec, tests, security checklist with evidence, `PROMPTS.md` and git history.
- **Explanation with the AI off:** oral walkthroughs and exit tickets, built around the [six skills you must show without AI](../SYLLABUS.md#six-skills-you-must-be-able-to-show-without-ai) ([more](../resources/without-ai-skills.md)).
- **Your own writing:** reflections and peer reviews.

**This is where the field has gone.** A 2026 study of 23 US courses that require AI in graded software work found that all 14 conventionally graded courses counted participation (median weight 17.5%), projects had a median weight of 50%, and only three had any proctored assessment. The authors conclude these courses assess AI-assisted engineering through ongoing practice rather than exams ([Geng et al., arXiv 2608.05898](https://arxiv.org/abs/2608.05898)). The ACM Task Force on generative AI and programming assessment surveyed about 500 educators in 2026: 68% had already changed their assessment. The most common changes were more in-person exams, less weight on take-home work, oral defenses and grading process over product, and the report notes a clear move away from trying to make assignments "AI-proof" ([ACM Task Force report](https://acm-education-genai-task-force.github.io/ACM_Taskforce_GenAI_Report_16Feb26.pdf)).

**No arms race.** This course requires AI, so there's nothing to catch. We don't try to make assignments AI-proof, and we don't use AI-detection software. Instead:

1. **Weekly labs are graded on effort and completion.** It's safe to experiment, fail and document what went wrong.
2. **Quality is judged at project milestones,** against rubrics that reward specs, edge cases, security evidence and honest documentation.
3. **Understanding is checked in conversation,** in 10-minute oral walkthroughs at weeks 4, 6 and 8. These cluster in the agent weeks because that's when understanding drops: in CMU 15-113's survey data, students' self-rated understanding fell to its lowest point of the year once agents took over ([Student Wisdom report](https://www.cs.cmu.edu/~113/bestPractices.html)).

**A working demo is required but not sufficient.** AI makes brittle prototypes easy. Courses like Utah's CS 3960 give credit only for edge cases, how features interact and taste ([syllabus](https://github.com/utah-cs3960-sp26/syllabus/blob/main/syllabus.md)), and Michigan's build rubric is half spec and design, half implementation and tests ([EECS 498](https://eecs498-aase.github.io/syllabus.html)). Our capstone rubric works the same way.

## How grades are calculated

Each component is scored in points, then scaled to its weight: `points earned ÷ points possible × weight`.

| Component | What is scored | Points possible | Drops and retakes |
|---|---|---|---|
| Weekly labs and homework (20%) | Weeks 1, 2, 3, 4, 6 and 7 at 10 points each (weekly rubric), plus the AI micro-app at 20 points | 70 (after the drop) | Your lowest weekly score is dropped (not the micro-app) |
| In-class work and participation (15%) | Eight studios at 10 points each | 70 (after the drop) | Your lowest studio is dropped |
| Project 1 (10%) | Project 1 rubric | 40 | — |
| Capstone (30%) | Capstone rubric | 100 | — |
| Oral walkthroughs (15%) | Three walkthroughs, 16 points each, 5% each | 48 | One retake of walkthrough 1 or 2 within 7 days; the better score counts |
| Reflections and peer reviews (10%) | Weekly reflections (40% of this component), two peer reviews (30%), final capstone reflection (30%) | See [rubric](rubrics.md#reflections-and-peer-reviews) | Your lowest weekly reflection is dropped |

**Example:** 60 of 70 weekly points is 60 ÷ 70 × 20 = 17.1% of the course.

Use your institution's letter-grade scale. If you have none, a reasonable default is A 90%, B 80%, C 70%, D 60%.

The stretch tier of homework is optional and never affects your grade.

## How to submit

- **Projects:** on the course site (your learning management system, or LMS), submit the repo URL, the live URL and the link to your final commit. The capstone adds the demo video link. Step by step: [projects/README.md](../projects/README.md#how-to-submit).
- **Weekly homework:** commit to the relevant repo and tick the deliverables checklist in that week's `homework.md`. Submit links on the course site if your instructor asks.
- **Reflections and peer reviews:** where your instructor asks, ideally the course site, where only staff can read them. If there are no other instructions, the labs' default is `reflections/week-N.md` in that week's repo; remember a public repo is readable by anyone.
- **Exit tickets:** on paper or a form, at the end of each studio.

We grade the commit you submitted, as it was at the deadline.

## Late work and grace tokens

- **Two grace tokens.** Each token extends one deadline by **48 hours**, no reason needed. Write "grace token" in your submission comment. You don't need to ask first.
- **Tokens can't be used for live events:** oral walkthroughs, the Project Fair, in-class builds and exit tickets. Those happen in the room (or in a scheduled online slot).
- **Pairs:** using a token on the pair capstone costs each partner one token.
- **After your tokens run out:** late work loses 10% of that item's points per day, for up to 3 days. After that it scores zero unless you've agreed an extension.
- **Real emergencies** (illness, family, caring duties): talk to us. Extensions for these don't use tokens.
- **Tool trouble is not by itself a reason to be late**, because switching to a fallback is part of the course ([I ran out of free credits](../resources/troubleshooting.md#i-ran-out-of-free-credits)). If every fallback fails, take screenshots of the errors and contact us before the deadline; you won't be penalized.

Instructors can change these numbers. Put the final policy on the course site in week 1.

## Working in pairs

Pairs are allowed on the **capstone only**. The full rules are in [capstone.md](../projects/capstone.md#working-solo-or-in-a-pair). In short:

- Pairs take on a bigger scope (at least three of the four feature types, or two plus an approved scope increase).
- Both partners commit their own work, and the README includes a signed **contribution statement**.
- Oral walkthroughs, reflections, peer reviews and exit tickets are always **individual**.
- Both partners normally get the same capstone score. If the history and contribution statement show a big imbalance, the instructor talks with both partners and may adjust.

## Pass/fail and non-credit versions

**Pass/fail.** A student passes with an overall score of at least 70% **and** all of these:

- a capstone with a working live URL;
- all three oral walkthroughs taken, with an average of at least 2 (out of 4) across the four scoring areas;
- a `PROMPTS.md` in every project.

**Non-credit** (workshops, bootcamps, community classes). No grades. A participant **completes** the course with:

- a live home page, Project 1 and capstone, each with its documents;
- all three oral walkthroughs taken, for feedback only (a mentor or experienced peer can run them with the [protocol](oral-walkthroughs.md));
- at least six studios attended, or the labs done self-paced.

**Self-paced learners.** Use the rubrics as checklists. Answer the [exit tickets](exit-tickets.md) before reading the "good answer" notes. Record yourself doing each walkthrough with the question bank, explaining at least one function for three minutes (the format UCSD's CS1-LLM used for its project videos, [Vadaparty et al.](https://arxiv.org/pdf/2406.15379)). Take the [self-assessment](self-assessment.md) at the start and the end.

## AI use policy

The full policy is in [section 8 of the syllabus](../SYLLABUS.md#8-ai-use-policy). The rule is not "how much AI did you use" but "can you explain what you shipped". Here is how it maps to graded work:

| | Level | Graded work |
|---|---|---|
| 🟢 | **Expected** | Project code, labs and homework; explanations; planning; reviewing your diffs; suggesting tests; a comparison AI code review after you've written your own |
| 🟡 | **Limited** | `SPEC.md`: the AI may critique it, not write it. Debug Clinic: tutor mode (hints only) after 10 minutes on a bug ([course tutor](../instructor/course-tutor.md)) |
| 🔴 | **Not allowed** | Reflections, peer reviews, exit tickets, oral walkthroughs, the self-assessment, and any other piece a brief marks 🔴 (for example the week 5 README section "Where the key lives and who can read it", and the week 2 prompt makeover) |

- **Disclose:** every project has a `PROMPTS.md` with your key prompts, links to exported chats where possible, and notes on what you changed.
- **Own it:** "If you can't explain it, you didn't build it." You may be asked to explain any line you submit.
- **Credit others:** if you use code, images or text from a person or website, credit it in your README. Using prompts you found online is fine; say where they came from.

## Academic integrity

**Disclosure is the rule.** Your `PROMPTS.md` is where you show how you used AI. Honest disclosure is never penalized, even when the AI did most of the typing.

**Not allowed:**

- using AI for 🔴 work (reflections, peer reviews, exit tickets, walkthroughs);
- submitting another person's code, prompts or writing as your own;
- **fabricating evidence**: test results you didn't run, security checklist evidence you didn't collect, or `PROMPTS.md` entries that didn't happen. (AI agents have faked test results; we hold ourselves to a higher standard.)
- having someone else take your oral walkthrough.

**What happens when something doesn't add up.** For example, `PROMPTS.md` doesn't match the work, or you couldn't explain a part of your own project.

1. **A conversation.** About 10 minutes, like a walkthrough. It's not an accusation. Most cases end here: either you can explain it, or we both see that you can't yet.
2. **A re-do.** If you can't explain it, you re-do that part within a week: study or rebuild it, update `PROMPTS.md`, and explain it in a short follow-up conversation. The re-done part is graded normally, capped at Proficient.
3. **Formal process.** Deliberate deception (fabricated evidence, someone else's work, or 🔴 AI use repeated after a conversation) goes to your institution's academic integrity process.

**We don't use AI detectors.** Their verdicts can't be checked or explained, and a conversation about your work tells us what we actually need to know: whether you understand it.

## Accommodations

Tell your instructor in week 1 if a disability, health condition, time zone, device or connectivity issue could affect your work, so we can plan together. We follow accommodation letters from your institution's disability services. Common adjustments:

- **Oral walkthroughs:** extra time, a written-first version, typed instead of spoken answers, breaks, a quiet room, camera off, your own assistive technology. See [oral-walkthroughs.md](oral-walkthroughs.md#accommodations).
- **Exit tickets:** extra time, typed answers, large print or screen-reader-friendly forms.
- **Demo video:** a written script with screenshots, if recording or speaking is a barrier.
- **Deadlines:** extensions as set out in your accommodation letter, on top of your grace tokens.
- **Devices and connection:** Codespaces runs in a browser on modest laptops and Chromebooks. If your connection is unreliable, talk to us about campus machines or offline alternatives.

## Feedback and regrades

- Staff aim to return feedback within a week, and before the next related deadline.
- **Regrade requests:** within 7 days of getting a grade, in writing, naming the rubric row and your reason. The whole item may be regraded.

## Staff workload (for instructors)

Planning numbers for a cohort of 30 students. Only the oral-walkthrough estimate comes from published data. The others are suggested time boxes; keep grading within them by marking against the rubric rather than writing long comments.

| Task | Time per student | For 30 students |
|---|---|---|
| **Oral walkthroughs** | 10–15 min per student per round, including scoring (UCSD's CS1-LLM reported 10–15 minutes per project to grade its video walkthroughs, [Vadaparty et al.](https://arxiv.org/pdf/2406.15379)) | **About 5–8 TA-hours per round, or 15–23 hours for all three** ([landscape report](../research/landscape-report-2026-09.md)) |
| Weekly labs (effort and completion) | Time box about 3 min: checklist, live URL, a glance at `PROMPTS.md` | About 1.5 hours per week |
| Exit tickets | The 1-minute scan in [exit-tickets.md](exit-tickets.md#use-the-results) per class, not per student | Under 15 minutes per week |
| Project 1 | Time box about 15 min | About 7.5 hours |
| Capstone | Time box about 25 min, plus the walkthrough 3 notes | About 12.5 hours |
| Reflections and peer reviews | Time box about 3 min each | About 1.5 hours per batch |

With three examiners, most walkthroughs for 30 students fit inside one lab block; schedule the rest in office hours. See [oral-walkthroughs.md](oral-walkthroughs.md#staffing-and-scheduling).
