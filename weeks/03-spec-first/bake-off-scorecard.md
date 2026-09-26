# Builder Bake-off Scorecard

> Use this in [lab Part 4](lab.md#part-4--builder-bake-off-40-min). Copy the raw text of this page into your Project 1 repository as `docs/bake-off-scorecard.md` (you'll finish it for homework).
> **Score by your acceptance criteria, not by how pretty it looks.** A beautiful app that fails AC3 fails AC3.

**Name:** <you> · **Project:** <name> · **Date:** <date>
**Spec used:** <"SPEC.md after peer review", or a link to the commit>

## The rules

1. **Same input for every builder:** the same framing prompt and the same SPEC.md, pasted in full.
2. **Time box:** 20 minutes per builder, from pasting the spec to finishing this scorecard.
3. **Credit budget:** at most **3 prompts** per builder: the spec, then up to 2 fix prompts that name a failing criterion (for example "AC5 fails: …").
4. **No personal data** in anything you paste. Some free tiers let human reviewers read what you type (see [TOOLS.md](../../TOOLS.md)).

Legend: ✅ passes · **X** fails · **~** partly · **n/t** not tested (say why in Notes)

## 1. Acceptance criteria

List every criterion from your SPEC.md. Test each one by hand in the builder's preview. The last column is for your own plain HTML/CSS/JS version (homework).

| AC | Priority | Builder A: ________ | Builder B: ________ | My plain version | Notes (what exactly happened?) |
|---|---|---|---|---|---|
| AC1 | | | | | |
| AC2 | | | | | |
| AC3 | | | | | |
| AC4 | | | | | |
| AC5 | | | | | |
| AC6 | | | | | |
| AC7 | | | | | |
| AC8 | | | | | |
| **MUST criteria passed** | | __ / __ | __ / __ | __ / __ | |
| **All criteria passed** | | __ / __ | __ / __ | __ / __ | |

> [!TIP]
> Test the "reload" criterion with care. Some builder previews run inside a frame that may not keep saved data the way a real website does. If reloading behaves oddly, write what you saw in Notes and mark it **n/t**. You'll test it properly on your own site.

## 2. Under the hood

Open each builder's code or files view. You don't need to understand the code. You're looking for clues.

| Question | Builder A | Builder B |
|---|---|---|
| Language and framework. Clues: files ending `.tsx` or `.jsx` usually mean React; `.ts` means TypeScript; a `package.json` lists the libraries | | |
| Is there a build step? (Does `package.json` have a `"build"` script?) | | |
| Did it add a server, a database or a login? Which? | | |
| Roughly how many files did it create? | | |
| Where is your data saved? (Search the code for `localStorage`, `firebase`, `supabase` or `database`) | | |
| Did it respect your **Constraints** section? What did it ignore? | | |
| Did it build anything from your **Out of scope** list? | | |

## 3. Cost and lock-in

| Question | Builder A | Builder B |
|---|---|---|
| Usage shown on the dashboard **before** you started | | |
| Usage **after** you finished | | |
| Prompts used (max 3) and minutes spent | | |
| Can you export the code to GitHub? What is the button called? | | |
| Can you download it as a ZIP file? | | |
| To publish it on the web, what would you need (an account, a paid plan, a billing account)? | | |
| If this builder shut down tomorrow, what would you lose? | | |

> [!NOTE]
> Menus move. If you can't find the usage page or the export button in two minutes, ask the builder itself ("Where can I see my usage? How do I export this project to GitHub?") and note its answer.

## 4. What surprised you?

- **Builder A:**
- **Builder B:**

## 5. Class results board

Add one line to the class board (your instructor will share it):

`<builder> · MUST passed __/__ · tech: <framework> · added login/database: yes/no · export to GitHub: yes/no`

## 6. Verdict

> 🔴 **Write this part yourself, without AI.** It is part of your bake-off reflection for homework.

1. Which builder passed more MUST criteria? Was it the one you liked more at first sight?
2. Pick one criterion that failed. Was the builder wrong, or was your criterion unclear? Quote the words you will change in SPEC.md.
3. Which version could you explain line by line to a classmate: Builder A, Builder B, or your plain version? Why does that matter for week 4, when you debug with the AI switched off?
4. How much of your free allowance did this use? Would you pay for this tool? For what kind of project?
