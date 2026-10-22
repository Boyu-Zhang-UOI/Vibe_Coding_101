# Builder Bake-off Scorecard

> Use this in [lab Part 7](lab.md#part-7--builder-bake-off-jigsaw-45-min). Copy its text into your notes for the studio, then into your Project 1 repository as `docs/bake-off-scorecard.md` (sections 1–5 only) for homework. **Section 6, the Verdict, goes on Canvas**, not in your repository.
>
> **Score by your acceptance criteria, not by how pretty it looks.** A beautiful app that fails AC3 fails AC3.

**GitHub username:** [your username] · **Project:** [project name] · **Date:** [date]
**My builder:** [builder A or B, and its name] · **Spec used:** [for example "SPEC.md after the Goldfish test", or a link to the commit]

## The rules

1. **One builder each.** You test the builder you were given, on your own spec. Your partner tests the other builder on theirs. You compare in step 6.
2. **Same input as everyone:** the lab's framing prompt, then your whole `SPEC.md`.
3. **Time box:** 20 minutes, from pasting the spec to finishing sections 1–4.
4. **Credit budget:** at most **3 prompts**: the spec, then up to 2 fix prompts that each name a failing criterion (for example "AC5 fails: …").
5. **No personal data** in anything you paste. Some free tiers let human reviewers read what you type ([Tool Handout](../../TOOLS.md)).

Key for results: ✅ passes · **X** fails · **~** partly · **n/t** not tested (say why in Notes)

## 1. Acceptance criteria

List every criterion from your `SPEC.md`. Test each one by hand in the builder's preview. Fill in the "My plain version" column for homework, on your live site.

| AC | Priority | My builder | My plain version | Notes (what exactly happened?) |
|---|---|---|---|---|
| AC1 | | | | |
| AC2 | | | | |
| AC3 | | | | |
| AC4 | | | | |
| AC5 | | | | |
| AC6 | | | | |
| AC7 | | | | |
| AC8 | | | | |
| **MUST criteria passed** | | __ / __ | __ / __ | |
| **All criteria passed** | | __ / __ | __ / __ | |

> [!TIP]
> Test the "reload" criterion with care. Some builder previews run inside a frame that may not keep saved data the way a real website does. If reloading behaves oddly, write what you saw in Notes and mark it **n/t**. You'll test it properly on your own site.

## 2. Under the hood

Open the builder's code or files view. You don't need to understand the code. You're looking for clues.

| Question | My builder |
|---|---|
| Language and framework. Clues: files ending `.tsx` or `.jsx` usually mean React; `.ts` means TypeScript; a `package.json` lists the libraries | |
| Is there a build step? (Does `package.json` have a `"build"` script?) | |
| Did it add a server, a database or a login? Which? | |
| Roughly how many files did it create? | |
| Where is your data saved? (Search the code for `localStorage`, `firebase`, `supabase` or `database`) | |
| Did it respect your **Constraints** section? What did it ignore? | |
| Did it build anything from your **Out of scope** list? | |

## 3. Cost and lock-in

| Question | My builder |
|---|---|
| Usage shown on the dashboard **before** you started | |
| Usage **after** you finished | |
| Prompts used (max 3) and minutes spent | |
| Can you export the code to GitHub? What is the button called? | |
| Can you download it as a ZIP file? | |
| To publish it on the web, what would you need (an account, a paid plan, a billing account)? | |
| If this builder shut down tomorrow, what would you lose? | |

> [!NOTE]
> Menus move. If you can't find the usage page or the export button in two minutes, ask the builder itself ("Where can I see my usage? How do I export this project to GitHub?") and note its answer.

## 4. What surprised you?

- 

## 5. My partner's builder, and the class board

Copy your partner's totals from their scorecard. (Their results come from **their** spec, so compare the share of MUSTs passed, not the raw numbers.)

| Question | My builder | My partner's builder |
|---|---|---|
| Builder name | | |
| MUST criteria passed | __ / __ | __ / __ |
| Framework and build step | | |
| Added a login, database or out-of-scope feature? | | |
| Export to GitHub? | | |
| Could either of us explain its code line by line? | | |

Add one line to the class results board (your instructor shares it):

`[builder] · MUST passed __/__ · tech: [framework] · added login/database: yes/no · export to GitHub: yes/no`

## 6. Verdict (on Canvas)

> 🔴 **AI off.** Write your answers on Canvas, not in this file. They are your week 3 reflection (150–300 words), graded on specifics.

1. Which builder passed a bigger share of its MUST criteria, yours or your partner's? Was it the one that looked better at first sight?
2. Pick one criterion that failed. Was the builder wrong, or was your criterion unclear? Quote the words you changed (or will change) in `SPEC.md`.
3. Which version could you explain line by line to a classmate: your builder's, your partner's, or your plain version? Why does that matter for week 4, when you debug with the AI switched off?
4. How much of your free allowance did this use? Would you pay for this tool? For what kind of project?
