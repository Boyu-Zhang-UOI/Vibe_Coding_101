# Week 3 Instructor Notes — Spec First

This is the tightest studio in the course: students write, review, compare and publish in one sitting. Your job is to protect the 35 minutes of spec writing, keep the builders on a strict time box, and make sure everyone leaves with a repository.

## Prep checklist

**One week before**

- [ ] Run [example-spec.md](example-spec.md) through Google AI Studio Build and Bolt yourself, using the framing prompt from [lab Part 4](lab.md#part-4--builder-bake-off-40-min). Time it, note what each generated (framework, files, database, login), how much usage it consumed, and where the export and usage pages are today. Update [TOOLS.md](../../TOOLS.md) if anything changed, and tell students about any new menu names.
- [ ] Check the age and region rules for your cohort. AI Studio is 18+. For under-18 or EEA/UK/Swiss cohorts, use [instructor/variants.md](../../instructor/variants.md) and swap the builders before class.
- [ ] Remind students (by message) to bring a paper sketch and two or three ideas, and to test their AI Studio and Bolt sign-ins.

**The day before**

- [ ] Prepare a shared **results board**: a shared spreadsheet, a whiteboard or a pinned chat thread with the columns *builder · MUST passed · framework · added login/database? · GitHub export?*
- [ ] Print (or have on screen) [templates/SPEC.md](../../templates/SPEC.md), [example-spec.md](example-spec.md) and the [scorecard](bake-off-scorecard.md).
- [ ] Sign in to AI Studio, Bolt and your chat assistant on the demo machine. Have the example spec copied and ready to paste.
- [ ] Read the [week 3 exit ticket](../../assessment/exit-tickets.md#week-3) and prepare the handout or form.

## Run sheet

| Time | What happens | Your notes |
|---|---|---|
| 0:00–0:10 | Show and tell: two week-2 games | Choose presenters in advance: one polished game, one with an interesting failure |
| 0:10–0:30 | [Slides](slides.md) (19 slides) | Hard stop at 0:30. If you're behind, skip slide 2 and shorten the builder slides; the lab covers them again |
| 0:30–0:40 | Live demo (script below) | Keep it to three criteria. The point is the method, not the app |
| 0:40–0:50 | Lab Part 1: choose an idea | Walk the room. Kill oversized ideas now (see pitfalls) |
| 0:50–1:25 | Lab Part 2: write SPEC.md, AI off | Announce the time at 1:00 (should be on user stories) and 1:10 (should be on criteria). Quiet room |
| 1:25–1:40 | Lab Part 3: peer review, then AI critique | Pair students with someone who doesn't know their idea |
| 1:40–1:50 | Break | Remind them to have the builder tabs open when they come back |
| 1:50–2:30 | Lab Part 4: bake-off | Call time at 2:10 ("switch to the second builder if you haven't") and 2:25 ("scorecards and results board") |
| 2:30–2:40 | Lab Part 5: new repository, SPEC.md, Pages on | Everyone must reach the checkpoint before leaving. Help anyone stuck on GitHub first |
| 2:40–2:50 | Debrief with the results board | Questions below |
| 2:50–3:00 | Exit ticket (AI-free), homework preview | Collect tickets before anyone opens a laptop again |

**Debrief questions:** Which builder passed more MUSTs across the class? Did anyone's builder add a login or database they didn't ask for? Who had a criterion fail in *both* builders, and was the spec ambiguous? Who could read the generated code?

## Live demo script (10 minutes)

Goal: model "criteria, not vibes" and show what's under the hood.

1. **(1 min)** Show [example-spec.md](example-spec.md) and point to AC5 (Stop before 1 minute) and AC6 (reload): "These are the edge cases. Watch whether the builder gets them."
2. **(2 min)** In a fresh chat, paste the AI critique prompt from lab Part 3b with the example spec. Read two bullets aloud and say which you would accept and why. Point out that it didn't rewrite the spec, and that it wasn't allowed to.
3. **(1 min)** Open AI Studio **Build**. Paste the Part 4 framing prompt and the example spec. While it builds, open the usage page and read the number aloud.
4. **(3 min)** Test AC3 (Start), AC5 (Stop at 20 seconds) and AC6 (reload) live, narrating: "I'm not asking whether it looks good. I'm asking whether AC5 passes." Mark pass or fail on a projected scorecard. If something fails, great. That's the 70% problem live.
5. **(2 min)** Open the code view. Show the file list and `package.json`. Ask: "Hands up if you could debug this with the AI switched off." Search for `localStorage`. Point out any database or login code.
6. **(1 min)** Show where the GitHub export is, then check the usage page again. Close with: "Builders are for exploring. The version you keep is three files in your repo."

If the builder is slow or down, switch to Bolt, or show screenshots from your prep run.

## Common pitfalls

| Pitfall | What you'll see | What to do |
|---|---|---|
| **Specs too big** | Ten or more MUST stories, "users can share", login, "like Notion but for…" | Apply the size check: one main screen, three to five MUSTs, explainable in one breath. Move the rest to COULD or Out of scope. Ask: "What's the smallest version you'd use tomorrow?" |
| **Untestable criteria** | "fast", "intuitive", "works properly", "looks nice" | Ask the stranger question: "How would a stranger check that in one minute?" Have them rewrite it with an exact visible result |
| **No edge cases** | Every criterion is a normal case | Point to the edge-case list in Part 2. Require two before Part 3 |
| **AI writing the spec** | Polished generic prose, headings in a different order, words the student can't explain | The policy is 🟡: critique, not writing. Ask them to explain a sentence. Have them rewrite the section by hand; no drama |
| **Builders burning credits** | "Make it better" prompts, redesign loops, a second account | Enforce three prompts per builder. Fix prompts must name a criterion. No second accounts. When credits run out, switch to the fallback and record it |
| **Falling for the prettier app** | "Bolt won" with fewer MUSTs passing | Send them back to the scorecard totals. This is the lesson of the day |
| **Wanting to keep the builder's version** | "Why can't I just use this?" | They can explore it in the stretch goal. Project 1 must be plain files because next week they debug it without AI, and they need to read every line |
| **Personal data in specs** | Real names of housemates, a real address, health details | Stop before they paste. AI Studio's free tier allows human review. Swap in made-up data |
| **OAuth prompts** | A builder asks for GitHub or Google access | Students choose. Nothing needs connecting today. Explain what the requested permissions mean if asked |
| **Pages confusion** | A 404, an old version, `index.html` inside a folder | Covered in the lab troubleshooting table. The **Actions** tab shows deploy status |

## Differentiation

- **Students who have never written anything like this:** give them a sentence frame for each section and let them build their spec around one of the lab's example ideas. Three MUSTs and five criteria is a full pass. In Part 4 they can run one builder well rather than two badly.
- **Students who finish early:** stretch goals in the lab (third builder, wireframe duel, spec diff). Or ask them to write two criteria for a classmate's COULD story and have the classmate judge whether they're testable.
- **Experienced programmers:** ask them to predict what each builder will generate before they look, and to write criteria with exact boundary values (for example "exactly 600 minutes is accepted; 601 is rejected").
- **English as an additional language:** WHEN … THE APP SHALL … is a fixed frame that helps. Allow a first draft in any language, translated by the student (not the AI) afterwards.

## Fallback plans

| Problem | Plan |
|---|---|
| AI Studio down or blocked | Builder A = Bolt, builder B = Lovable, v0 or Replit |
| All builders down | Run the bake-off with two chat assistants (Gemini Canvas and ChatGPT), with the same prompt and scorecard. The "under the hood" questions become "which files and libraries did it propose?" |
| Wi-Fi is poor | Parts 1–3 work on paper. Pair students on one laptop for Part 4 (score both specs on one builder). Part 5 can move to homework |
| Running late | Cut Part 4 to one builder (20 min) and have students read a neighbor's second-builder scorecard. Never cut Part 2 |
| A student can't create a GitHub repository (account problems) | Pair them for Part 5 and fix the account in office hours ([setup/github-basics.md](../../setup/github-basics.md)) |

## After class

- Skim the results board and post a summary (MUSTs passed per builder, how many added a login or database). It makes a good opener for week 4.
- Before week 4, check that every student has a repository with SPEC.md. Students without one can't do the week 4 lab, which starts by opening that repository in a Codespace.
- Read a sample of exit tickets. If many students couldn't say *why* a criterion failed, spend three minutes on it at the start of week 4.
