# Week 3 Instructor Notes — Spec First

Studio A is about thinking on paper: protect the 35 minutes of AI-off spec writing, and make sure every student leaves with `SPEC.md` in a repository. Studio B is about judging and building: keep the builders on a strict time box, run the bake-off as a jigsaw so it fits, and get every student through one full Safe Loop step in a Codespace before they leave.

## What changed from the one-studio version

- **The bake-off is a jigsaw** (review finding H1). Each student tests one builder on their own spec, then compares scorecards with a partner who tested the other. This halves the builder time and restores the debrief.
- **Project 1 starts in a Codespace with a preview** (H2). Students test each step in `python3 -m http.server` before committing, instead of committing through github.dev and waiting for Pages. Setup step 4 already rehearsed opening a Codespace.
- **The AI critique became the Goldfish test** (October research report, Priority 3): a fresh chat given only `SPEC.md` says what it would build and what it would have to ask. The [Project 1 rubric](../../assessment/rubrics.md#project-1) Spec row looks for the logged test and the revision.
- **The peer review is a written, graded review on Canvas** (assessment finding: it was graded but never assigned). The bake-off **Verdict** is the week 3 reflection, also on Canvas.

## Prep checklist

**One week before**

- [ ] Run the [example spec](example-spec.md) through Google AI Studio Build and Bolt yourself, with the framing prompt from [lab Part 7](lab.md#part-7--builder-bake-off-jigsaw-45-min). Time it, note what each generated (framework, files, database, login), how much usage it consumed, and where the export and usage pages are today. Keep screenshots for the Studio B fallback. Update the [Tool Handout](../../TOOLS.md) if anything changed.
- [ ] Run the Goldfish test prompt from [lab Part 4](lab.md#part-4--the-goldfish-test-20-min) on the example spec and on its weak version (bottom of the example spec) in your chat assistant. Check that it lists questions without rewriting the spec. You'll repeat this live in the demo.
- [ ] Check the age and region rules for your cohort. AI Studio is 18+. For under-18 or EEA/UK/Swiss cohorts, use the [course variants](../../instructor/variants.md) and swap the builders before class.
- [ ] Set up two Canvas assignments: **Week 3 spec review** (text entry, due with the homework; reviewers share their review with the author as a Canvas comment) and **Week 3 Verdict** (text entry, the reflection). Neither belongs in a repository.
- [ ] Prepare a **practice spec** with known, keyed issues (two untestable criteria, a missing edge case) for any student without a partner. The weak spec at the bottom of the example spec is a starting point.
- [ ] Remind students (by message) to bring a paper sketch and two or three ideas, and to test their AI Studio or Bolt sign-in.

**The day before Studio B**

- [ ] Assign builders: alternate **A** and **B** down the class list, and pair each A with a B. With an odd number, make one trio (A, B, and a second A).
- [ ] Prepare a shared **results board** (a spreadsheet, a whiteboard or a pinned chat thread) with the columns *builder · MUST passed · framework · added login/database? · GitHub export?*
- [ ] Check that every student has a repository with `SPEC.md` from Studio A. Message anyone who doesn't.
- [ ] Read the [week 3 exit ticket](../../assessment/exit-tickets.md#week-3) and prepare the form. It includes one question about last week's own game.

## Studio A run sheet (moved agenda)

| Time | What happens | Your notes |
|---|---|---|
| 0:00–0:05 | Recap: the most-missed week 2 exit-ticket question | One question, one worked answer, no slides |
| 0:05–0:25 | [Slides](slides.md) (talk portion, 16 slides) | Hard stop at 0:25. If behind, shorten the builder slides; Studio B covers them again |
| 0:25–0:35 | Live demo: the Goldfish test (script below) | The point is the method, not the app |
| 0:35–0:45 | Lab Part 1: choose an idea | Walk the room. Kill oversized ideas now (see pitfalls) |
| 0:45–1:20 | Lab Part 2: write `SPEC.md`, 🔴 AI off | Quiet room. Announce the time at 0:55 (should be on user stories) and 1:05 (should be on criteria) |
| 1:20–1:45 | Lab Part 3: peer spec review, then write it on Canvas | Pair students with someone who doesn't know their idea. Call "switch" at 1:30 and "write it up" at 1:35 |
| 1:45–1:55 | Break | |
| 1:55–2:15 | Lab Part 4: the Goldfish test, 🟡 AI limited | Watch for students pasting the AI's rewrite into their spec |
| 2:15–2:35 | Lab Part 5: repository with `SPEC.md`, `PROMPTS.md`, Pages on | Everyone must reach this checkpoint. Help anyone stuck on GitHub first |
| 2:35–2:50 | Part 6 (if time), or catch-up | Buffer: most classes need it |
| 2:50–3:00 | Checkpoint share: one Goldfish question and the change it caused | Three or four students. Choose one with a surprising question |

## Studio B run sheet

| Time | What happens | Your notes |
|---|---|---|
| 0:00–0:10 | Show and tell: two students show one criterion before and after review | Pick one improved by the peer, one by the Goldfish |
| 0:10–0:55 | Lab Part 7: bake-off jigsaw | Call time at 0:30 ("stop fixing, start under the hood"), 0:40 ("usage, then compare with your partner") and 0:52 ("results board") |
| 0:55–1:05 | Break | |
| 1:05–1:40 | Lab Part 8: start Project 1 in a Codespace | Most problems are pop-up blockers and the **Ports** tab. Check that students write the check **before** asking for code, and commit **after** testing |
| 1:40–2:30 | Lab Part 9: keep building; catch-up help | Circulate. Anyone without step 1 committed gets help first |
| 2:30–2:45 | Debrief with the results board | Questions below |
| 2:45–3:00 | Exit ticket (🔴 AI off) | Collect before laptops reopen. Remind students to stop their Codespace |

**Debrief questions:** Which builder passed a bigger share of MUSTs across the class? Did anyone's builder add a login or database they didn't ask for? Whose criterion failed in *both* builders across a pair, and was the spec ambiguous? Who could read the generated code? Who caught a bug in the preview *before* committing it?

## Live demo script (Studio A, 10 minutes)

Goal: show that a fresh AI exposes gaps in a spec, and that the fix goes into the spec.

1. **(1 min)** Show the weak spec at the bottom of the [example spec](example-spec.md): "A study timer app. Users can time their study sessions and see stats…"
2. **(3 min)** Open a brand-new chat. Paste the Goldfish prompt from lab Part 4 and the weak spec. Read the questions aloud and count them. Ask: "Would a builder ask you these, or just guess?"
3. **(3 min)** Another brand-new chat, the same prompt, the full example spec. Count again. Point to a question it still asks and show where the example's Open questions already answer it, or where it found a real gap. Say what you'd change in the spec, and change it.
4. **(3 min)** The stranger test, live: take "It saves stuff" from the class and rewrite it together into WHEN … THE APP SHALL …

If the chat assistant is slow or down, show screenshots from your prep run.

**Studio B builder demo (2 minutes, at step 4 of the bake-off):** show your prep-run screenshots of a builder's files view: `package.json`, files ending `.tsx`, a database or login file. Ask: "Hands up if you could debug this with the AI switched off."

## Common pitfalls

| Pitfall | What you'll see | What to do |
|---|---|---|
| **Specs too big** | Ten or more MUST stories, "users can share", login, "like Notion but for…" | Apply the size check: one main screen, three to five MUSTs, explainable in one breath. Ask: "What's the smallest version you'd use tomorrow?" |
| **Untestable criteria** | "fast", "intuitive", "works properly", "looks nice" | Ask the stranger question: "How would a stranger check that in one minute?" Have them rewrite it with an exact visible result |
| **No edge cases** | Every criterion is a normal case | Point to the edge-case list in Part 2. Require two before Part 3 |
| **AI writing the spec** | Polished generic prose, headings in a different order, words the student can't explain; the Goldfish's "rewrite" pasted in | The policy is 🟡 AI limited: questions, not writing. Ask them to explain a sentence. Have them rewrite the section by hand; no drama. Repeated or deliberate cases follow the [academic integrity process](../../assessment/README.md#academic-integrity) |
| **Goldfish answered in the chat** | The student replies to the chat's questions instead of fixing the spec | "The next builder won't see this chat. Put the answer in `SPEC.md`" |
| **Names in the repo** | "Peer review from [classmate]" in `PROMPTS.md`; a review file in a repo | Reviews and names stay on Canvas. `PROMPTS.md` says "my review partner" |
| **Builders burning credits** | "Make it better" prompts, redesign loops, a second account | Enforce three prompts. Fix prompts must name a criterion. No second accounts. When credits run out, switch to the fallback and record it |
| **Falling for the prettier app** | "Bolt won" with fewer MUSTs passing | Send them back to the scorecard totals. This is the lesson of the day |
| **Absent jigsaw partner** | A student with no one to compare with | Join them to another pair as a trio, or let them compare with the results board |
| **Committing before testing** | Pasting into files, then Sync Changes, then opening Pages | "Preview first. Commit only what passed its check." The preview tab is the test |
| **Blank page, no idea why** | A white preview after pasting step 1 | Console first (the lab tip). Usually a half-copied `app.js` or a mismatched id. Next week teaches this properly; today, read the red line together |
| **Personal data in specs** | Real names of housemates, a real address, health details | Stop before they paste. AI Studio's free tier allows human review. Swap in made-up data |
| **Pages confusion** | A 404, an old version, `index.html` inside a folder | The lab troubleshooting table covers it. The **Actions** tab shows deploy status |

## Differentiation

- **Students who have never written anything like this:** give them a sentence frame for each section and let them build their spec around one of the lab's example ideas. Three MUSTs and five criteria is a full pass.
- **Students who finish early:** Part 6, a second Goldfish run, or two criteria for a classmate's COULD story that the classmate judges for testability.
- **Experienced programmers:** ask them to predict what their builder will generate before they look, and to write criteria with exact boundary values ("exactly 600 minutes is accepted; 601 is rejected").
- **English as an additional language:** WHEN … THE APP SHALL … is a fixed frame that helps. Allow a first draft in any language, translated by the student (not the AI) afterwards.
- **Small cohorts and solo students:** the review uses your keyed practice spec; one student can run both builders in sequence. See [course variants](../../instructor/variants.md).

## Fallback plans

| Problem | Plan |
|---|---|
| AI Studio down or blocked | Builder A = Bolt, builder B = Lovable or v0 |
| All builders down | Run the bake-off with two chat assistants (Gemini Canvas and ChatGPT), with the same prompt and scorecard. "Under the hood" becomes "which files and libraries did it propose?" |
| Wi-Fi is poor | Studio A works on paper until Part 4. In Studio B, pair students on one laptop for Part 7 (score both specs on one builder) |
| Codespaces down or out of hours | Part 8 in github.dev, testing on Pages after each commit (slower; say why it's the wrong order) |
| Running late in Studio A | Shorten Part 3's talk to 3 minutes per spec and move the Canvas write-up to homework. Never cut Part 2 |
| Running late in Studio B | Cut the under-the-hood step to the `package.json` and `localStorage` questions. Never skip Part 8's first committed step |
| A student can't create a GitHub repository | Fix the account in office hours ([GitHub basics](../../setup/github-basics.md)); meanwhile they keep their spec in a document |

## After class

- Skim the results board and post a summary (share of MUSTs passed per builder, how many added a login or database). It makes a good opener for week 4.
- Before week 4, check that every student has a repository with `SPEC.md` and an `index.html` on Pages. Students without one can't do week 4's Studio A, which opens that repository in a Codespace. Point them to the [rescue starter](../../projects/rescue-starters/study-timer/) as a stopgap.
- Read a sample of exit tickets. Pick the most-missed question for the week 4 recap.
