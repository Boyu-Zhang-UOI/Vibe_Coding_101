# Self-Paced Path

> How to do Vibe Coding 101 without a class: on your own from the public materials, as the only student in a Directed Study, or catching up on a studio you missed.
> Everything in the course is written to work without an instructor. This page says what replaces each studio activity, what to do instead of every pair activity, and how to check yourself.

**On this page:** [Who this is for](#who-this-is-for) · [Time](#how-much-time) · [Each week](#each-week-in-order) · [What replaces the studio](#what-replaces-the-studio) · [Working alone?](#working-alone-every-pair-activity) · [Tutor mode](#using-tutor-mode) · [Checking yourself](#checking-yourself-the-six-skills) · [Your private writing](#your-private-writing) · [Falling behind](#if-you-fall-behind)

---

## Who this is for

- **Learning on your own from the public course.** You have no instructor, no Canvas and no grades, but you can do every lab, homework and project. The rules about AI use, safety and privacy still apply, because they protect *you*. Start with the [safety contract](../setup/safety-contract.md) and the [week 0 setup](../setup/README.md), and check the age and region notes in [TOOLS.md](../TOOLS.md): some free tools are 18+ or not available everywhere.
- **Enrolled, but the only student (or one of very few).** Your instructor posts the substitutions for your course on Canvas in week 1, such as a practice spec and a practice pull request with known issues to find. This page tells you what each one replaces. Where a line below says *Enrolled*, follow it; where it says *On your own*, that's for independent learners.
- **Enrolled, and you missed a studio.** Do the lab's **Core** parts on your own using this page, then follow the make-up rules in the [syllabus](../SYLLABUS.md#missed-studios-and-make-up-work). Online or in another time zone for part of the course? Talk to your instructor in week 1 ([syllabus](../SYLLABUS.md#missed-studios-and-make-up-work)).

Using a screen reader or only a keyboard? See the [accessibility guide](accessibility.md) first.

## How much time

The course is built for about **17 hours a week for 8 weeks**: two 3-hour studios plus about 11 hours outside class. On your own, the studio hours become lab hours, so the total is about the same. Two common ways to fit it in:

| Pace | Hours a week | Notes |
|---|---|---|
| **8 weeks** | about 15–17 | The course as designed |
| **16 weeks** | about 8–9 | One course week every two calendar weeks. Do Studio A's lab in the first week and Studio B's in the second |

The first time you use any tool takes longer than the stated times. Going slower is fine. Skipping the AI-off checks is not: they're how you find out what you actually learned.

## Each week, in order

1. **Read the week's `README.md`**, starting with **This week at a glance**. It lists what's due, the AI rules for the week, and the **Minimum to keep up**.
2. **Before Studio A:** the README and one reading (about an hour at most).
3. **Studio A:** go through `slides.md` (the concept talk), then the **Studio A** section of `lab.md`. Do the **Core** parts first; **If time** parts are optional.
4. **Studio B:** the **Studio B** section of `lab.md`.
5. **Instead of the exit ticket:** answer the README's **Understanding check** with the AI off, before looking anything up. Then, from memory, explain one function or decision from *last* week's project in two or three sentences, and check yourself against the code.
6. **Homework:** the core tier of `homework.md`. Do the **Minimum to keep up** box first.
7. **Reflection:** write it with the AI off, using the [reflection template](../templates/REFLECTION.md). Keep it private ([where](#your-private-writing)).

Every lab uses the [Safe Loop](safe-loop.md). Keep it next to your keyboard.

## What replaces the studio

| In a studio | On your own |
|---|---|
| **Recap** of last week's most-missed question | Re-answer the question from last week's Understanding check that you found hardest, from memory |
| **Concept talk** | `slides.md` and the README's **Key ideas** |
| **Live demo** | Do the lab's first part slowly, with the [Safe Loop](safe-loop.md) in front of you |
| **Help from the instructor or a TA** | [Troubleshooting](troubleshooting.md), then the [two-strikes rule](safe-loop.md#the-two-strikes-rule), then [tutor mode](#using-tutor-mode) |
| **Checkpoint share** | Take a screenshot at each ✅ checkpoint and keep it with your notes. If you're stuck, write down the exact blocker: that counts too |
| **Show and tell** | Show a friend and explain one thing the AI got wrong. Or post your project in the course repository's Discussions, if they're open |
| **Debrief** | Three lines in your notes: what worked, what didn't, what you'd do differently |
| **Exit ticket** (🔴 AI off) | The README's Understanding check and the delayed-recall question ([step 5](#each-week-in-order)) |
| **Debug Clinic** (week 4) | 🔴 AI off for 10 minutes per bug, then the kit's [hint cards](../weeks/04-read-debug-own-it/debug-clinic/hint-cards.md) one at a time, then tutor mode (🟡 AI limited). Try every bug yourself before you look anything else up |
| **Oral walkthroughs** (weeks 4, 6, 8) | Record a 5–10 minute screen video with the AI off: explain one function, change something live, and find a bug from an error message, using the questions for [walkthrough 1](../assessment/oral-walkthroughs.md#walkthrough-1-week-4), [2](../assessment/oral-walkthroughs.md#walkthrough-2-week-6) and [3](../assessment/oral-walkthroughs.md#walkthrough-3-week-8). See [checking yourself](#checking-yourself-the-six-skills) |
| **Peer review** | Review a public project with the [review checklist](../templates/CODE_REVIEW.md), then compare your review with an AI review of the same code |
| **Grades** | Score yourself with the [rubrics](../assessment/rubrics.md). Be honest: a score you inflate tells you nothing |
| **Project Fair** (week 8) | See [week 8](#working-alone-every-pair-activity) below |

## Working alone? Every pair activity

Each lab marks its pair activities with a **Working alone?** line. Here they all are in one place.

| Week | Pair or group activity | Working alone |
|---|---|---|
| 1 | **Checkpoint share:** show a neighbor one line you changed by hand | Write one sentence in your notes: which line you changed by hand, and what it does |
| 2 | **Playtest** a classmate's game | Play your own game with the lab's edge cases, then ask someone at home to try it for two minutes later in the week |
| 2 | **Two-model comparison:** share your result with the class | Write the URL and the count in your notes |
| 2 | **Peer explanation swap** (🔴 AI off): explain a function in a classmate's game | Pick a function in your own game, write the four answers from [skill 2](without-ai-skills.md#2-explain-any-function-you-committed) without AI, and explain it out loud to a friend or to your phone's recorder. Only then compare with an AI explanation |
| 2 | **Prompt makeover:** a partner checks your rewrite | Check your rewrite against the four parts yourself, put it away for ten minutes, then read it again as if you were the AI |
| 3 | **Peer spec review** (written) | *Enrolled:* review the instructor's practice spec; that written review is the graded one. *On your own:* read your spec aloud as if you were a stranger, ask a friend to predict what app it describes, and let the [Goldfish test](prompt-patterns.md#18-the-goldfish-test) play the reviewer |
| 3 | **Builder bake-off** jigsaw: compare scorecards with a partner who tested the other builder | Test both builders if your credits allow (allow 40 minutes), or test one and score it against your own spec's criteria. *Enrolled:* compare with the class results board |
| 4 | **Debug Clinic** in pairs (driver and navigator) | Be your own navigator: before you change any code, say each step out loud or type it into `BUGS.md` |
| 4 | **Explain a function** of Project 1 to your partner | Explain it out loud or on a recording, line by line. Anything you can't explain goes on your homework list |
| 6 | **Be the Agent:** one person plays the Model, one the Harness | Play the Harness yourself and let a chat assistant play the Model: in a fresh chat, paste the kit's task card and tool cards and ask it for one tool call at a time. You carry out each call and paste back only the result. *Enrolled:* the instructor may play the Model, then you swap |
| 6 | **Feature clinic** stations | Pick the station your capstone needs (a chart or an external API) and follow its worked example in the lab |
| 7 | **Case-study jigsaw** (groups of three) | Read [cases 12, 13 and 14](case-studies.md#using-these-in-class) and write the four lines for each |
| 7 | **AI-off maintenance task:** a partner picks your change card | *Enrolled:* your instructor sends you a card at the start. *On your own:* number the lab's change cards and pick one at random (roll a die) before you look at your code |
| 7 | **Peer review as a pull-request review** (🔴 AI off) | *Enrolled:* review the practice pull request your instructor assigns; it has known issues to find. *On your own:* a day after opening your week-6 pull request, review it yourself against [CODE_REVIEW.md](../templates/CODE_REVIEW.md) in the **Files changed** tab, then compare with an AI review |
| 7 | **Handoff test:** a partner makes one change using only your `README.md` and `AGENTS.md` | *Enrolled:* your instructor, or a volunteer with a fresh GitHub account, is the tester. *On your own:* ask a friend, or be the goldfish yourself: a week later, fork your repo, open a fresh Codespace and a fresh agent session, and give it only your `README.md`, `AGENTS.md` and one small change request. Note every gap it hits |
| 8 | **Pitch practice:** a partner fills in a feedback card | Record your 60–90 second pitch, watch it back, and fill in the [feedback card](../weeks/08-ship-it/project-fair.md) yourself |
| 8 | **Project Fair** | *Enrolled:* a public demo slot your instructor arranges, plus three outside testers. *On your own:* three testers (friends, family or an online community) each try your app on made-up data and fill in the feedback card, and you record a 2–3 minute demo video |
| 6–8 | **Pair capstones** | Not available when you work alone. A solo capstone needs at least two of the four feature types, where a pair needs three ([projects/capstone.md](../projects/capstone.md)) |

## Using tutor mode

**Tutor mode** is an AI that gives hints and asks questions instead of handing you answers. Working alone, it's the nearest thing to a TA. It's set up by pasting one prompt into a fresh chat.

**When to use it:**

- 🟡 AI limited: in the **Debug Clinic**, after 10 minutes stuck on one bug. It's the only AI allowed there.
- When you want to *learn* something, not just get it done, in any homework.
- To practice for an oral walkthrough: the "quiz me" prompt asks you questions about your own code.

**How:**

1. Open a **new** chat, a temporary one if your assistant offers it.
2. Paste the tutor prompt from the [tutor mode page](../instructor/course-tutor.md#the-tutor-prompt). (Gemini users can save it as a Gem: [how](../instructor/course-tutor.md#build-it-as-a-shared-gemini-gem).)
3. Describe your problem: what you're working on, the exact error text, and what you think is wrong. End with "Give me a hint, not the answer." An example is in [prompt pattern 14](prompt-patterns.md#14-tutor-mode).
4. If it hands you the answer, paste the prompt again or start a fresh chat. If a hint doesn't help, ask for a smaller one.

For walkthrough practice, use the [quiz-me prompt](../instructor/course-tutor.md#a-second-prompt-quiz-me) on a function you committed.

**Keep it narrow.** Use tutor mode for being stuck and for practice, not as a companion for every step. In a 2026 trial with 2,379 students, giving every student a course-wide AI tutor *lowered* final grades, most of all for first-generation students; the authors think it pulled students away from the course's own activities ([EdWorkingPapers](https://edworkingpapers.com/ai26-1598)). Do the lab, then ask for a hint. More on why: [tutor mode](../instructor/course-tutor.md#keep-tutor-mode-narrow).

## Checking yourself: the six skills

The course asks you to show [six skills with the AI off](without-ai-skills.md). Without an examiner, check them this way:

1. **Practice each skill** with the exercises on [without-ai-skills.md](without-ai-skills.md), answers hidden until you've tried.
2. **Record a walkthrough** in weeks 4, 6 and 8: AI off (close the chat and switch off code suggestions: [how](../setup/codespaces.md#turn-copilot-off-for-ai-off-activities)), screen and voice recording on, about 10 minutes. Use the questions for that walkthrough in [oral-walkthroughs.md](../assessment/oral-walkthroughs.md), picking them at random so you can't rehearse the answer. Read [what to expect](../assessment/oral-walkthroughs.md#what-to-expect) first.
3. **Watch it back** and mark each skill on [the list](without-ai-skills.md#how-the-requirement-works) as *shown* (done correctly, with no more than one look at your notes) or *not yet*.
4. **Better still, find a questioner:** a friend reading the questions aloud makes it much closer to the real thing, even if they don't code.

A self-check is weaker than an examiner, so be strict with yourself. Any skill that's still *not yet* is next week's practice.

## Your private writing

Your **code and project documents** (`SPEC.md`, `TESTS.md`, `PROMPTS.md`, `AGENTS.md`, READMEs) belong in public repositories under your GitHub username: they're your portfolio. Your **personal writing** does not: reflections, your [AI journal](glossary.md#ai-journal), your personal AI-use rules, self-assessments and reviews of other people's work.

- *Enrolled:* submit it on [Canvas](glossary.md#canvas-lms), as everyone does ([privacy of your work](../assessment/README.md#privacy-of-your-work)).
- *On your own:* keep it in a private document or notebook. Never commit it to a public repository, and never name other people in your repos.

## If you fall behind

- Do each week's **Minimum to keep up** box first. Every week builds on the one before.
- **Project 1 not working by week 4?** A rescue starter, a small working app built from the course's [example spec](../weeks/03-spec-first/example-spec.md), lets you keep going: [projects/rescue-starters/study-timer/](../projects/rescue-starters/study-timer/).
- **Out of free credits?** Switch to the fallback ([how](troubleshooting.md#i-ran-out-of-free-credits)). That's a planned drill, not a failure.
- **Stuck for real?** Write [a good bug report](prompt-patterns.md#6-the-good-bug-report). Writing it often shows you the answer; if not, it's exactly what to post in the course repository's Discussions or bring to office hours if you're enrolled.
- **Answer keys** for the course's exercises exist for instructors. Looking at them before you've tried turns an exercise into reading. Try first.
