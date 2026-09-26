# Answer key — Week 6: Be the Agent (Tip Splitter)

> **Instructors only.** Don't publish this file in a student-facing template repository.
> Kit: [weeks/06-agents/be-the-agent/](../../weeks/06-agents/be-the-agent/) · Lab: [weeks/06-agents/lab.md](../../weeks/06-agents/lab.md) · Tools: [tool-cards.md](../../weeks/06-agents/be-the-agent/tool-cards.md)

## The bug

`perPerson` in `lib/bill.js` rounds each share to the **nearest** cent, but the comment above it (and bug report #12) say each share must be rounded **up**, so the group always covers the total.

- $100 + 15% = $115.00 = 11,500 cents. 11,500 / 3 = 3,833.33 cents.
- `Math.round` gives 3,833 cents = **$38.33** (3 × $38.33 = $114.99, one cent short).
- `Math.ceil` gives 3,834 cents = **$38.34** (3 × $38.34 = $115.02, the group covers the bill).

Before the fix, `npm test` shows **9 tests, 8 pass, 1 fail**. The failing test is `perPerson: rounds each share UP so the group covers the bill (bug report #12)` with `38.33 !== 38.34`.

## The fix (one line)

`lib/bill.js`, line 26:

```diff
-  return Math.round(totalCents / people) / 100;
+  return Math.ceil(totalCents / people) / 100;
```

The `edit` call that does it:

```bash
node scripts/replace.mjs lib/bill.js "Math.round(totalCents / people)" "Math.ceil(totalCents / people)"
```

After the fix: **9 tests, 9 pass, 0 fail**. The even-split test (`perPerson(120, 0, 4)` is 30) still passes, because `Math.ceil` leaves whole numbers alone.

## An ideal tool-call sequence (6 calls)

| # | Call | What the Model learns |
|---|---|---|
| 1 | `run` | One failing test, in `tests/bill.test.js`, about `perPerson`: expected 38.34, got 38.33. Starting with the tests is the fastest way to find out what "broken" means |
| 2 | `search "perPerson"` | It is defined in `lib/bill.js` at line 21, used in `app.js` and the tests |
| 3 | `read_file lib/bill.js` | Line 19's comment says "rounded UP"; line 26 uses `Math.round`. The mismatch is the bug |
| 4 | `edit` `lib/bill.js`, old `Math.round(totalCents / people)`, new `Math.ceil(totalCents / people)` | The tool prints lines 25–27 with the change |
| 5 | `run` | 9 tests, 9 pass, 0 fail |
| 6 | Finish | "Changed line 26 of `lib/bill.js` from `Math.round` to `Math.ceil` so each share rounds up to the next cent. Evidence: tests 9, pass 9, fail 0." |

Starting with `list_files` (7 calls) is also good practice. Most pairs take 8–12 calls. More than 15 usually means the Model read files at random instead of following the test output.

## Common wrong turns (and what to say)

| What happens | Why it's instructive | Nudge (only if a pair is stuck for 5+ minutes) |
|---|---|---|
| `edit` with old text `Math.round` fails: "appears 3 times (lines 5, 25, 26)" | Real edit tools need a **unique** match. The model must quote enough context | "What text is on line 26 only?" |
| `edit` fails with "not found" because the Model copied `26` and a tab from `read_file` | Line numbers are part of the tool's display, not of the file | "Is the number really in the file?" |
| The Model changes line 25 (`totalCents`) or line 5 (`roundToCents`) to `Math.ceil` | Neither fixes the failing test (still 8 pass, 1 fail), and the line 5 change would silently round every tip up. Guessing at the right `Math.round` instead of reading the code costs calls | "Run the tests. What changed?" |
| The Model edits the test to expect 38.33 | The test run turns green but the bug stays: the fake-success pattern from the Replit incident. This breaks the rules | "What did Priya actually ask for?" |
| The Model writes Finish without a final `run` | Claims without evidence | "What's your evidence?" |
| `Math.round(totalCents / people + 0.5)` | Passes the 38.34 test but makes the even split 30.01. The existing test catches it | Let the test run speak |
| The Harness "helpfully" fixes a typo in the Model's edit | Real harnesses are literal. Remind the Harness of the rule | — |

## Task B (feature, red/green)

**Red:** add a test above the anchor line.

```bash
node scripts/replace.mjs tests/bill.test.js "// Add new tests above this line." "test('tipAmount: rejects a negative tip', () => {\n  assert.throws(() => tipAmount(50, -10), /Tip percent must be/);\n});\n\n// Add new tests above this line."
```

`npm test`: 10 tests, 9 pass, 1 fail, with `Missing expected exception.` That failure is the point: it proves the test can fail.

**Green:** reuse the existing `checkAmount` helper.

```bash
node scripts/replace.mjs lib/bill.js "checkAmount(bill, 'Bill');" "checkAmount(bill, 'Bill');\n  checkAmount(tipPercent, 'Tip percent');"
```

`npm test`: 10 tests, 10 pass. (Verified on a scratch copy of the kit, together with the Task A fix.)

Good pairs notice that `checkAmount` already produces the exact message the task asks for, so the fix is one line. Some write a new `if` instead; that also works if the message matches.

## Debrief: model answers

1. **What context did the Model need?** Where the failing behavior is (the test output), where the code lives (search), and the rule it should follow (the comment and the bug report). The most useful single call is usually the first `run`: it names the function, the file and the exact wrong value.
2. **How many calls, and which were wasted?** Typical wasted calls: reading files unrelated to the failure (`format.js`, `index.html`), `list_files` repeated, edits that failed because the old text wasn't unique or exact. Link this to **context windows**: every call's output fills the agent's working memory, so wasted reads crowd out useful information.
3. **What did failed edits teach?** An agent can only change code by quoting it exactly. When an agent's edit fails, it retries, which costs time and credits. Precise, small edits are cheaper.
4. **How did you know you were done?** Only the final `run` proves it. Without it, "done" is a guess. This is why the course requires test output as evidence, and why a test is the agent's eyes.
5. **What would have helped?** An `AGENTS.md` such as: "Run `npm test` first. Logic is in `lib/`, tests in `tests/`. Never edit tests to make them pass." A clear bug report with numbers (Priya's) also helps; a vague one ("the math is wrong") would have cost many more calls.
6. **What does it mean for supervising a real agent?** The agent does this loop in seconds, so you won't watch every call. Your job moves to the edges: a clear task (spec), standing rules (`AGENTS.md`), a way for it to check itself (tests), and checking its evidence and diff before you commit.

## Variations (to reuse the kit)

- **Easier:** tell the Model the file name in the task card.
- **Harder:** remove the comment on lines 19–20, so the only statement of the rule is the test and the bug report.
- **Different bug:** change line 11 to `roundToCents(bill * tipPercent)` (percent math off by 100×). Four tests fail at once, which teaches "find the common cause". Write a matching bug report ("a 15% tip on $100 came out as $1,500").
- **Context pressure:** limit the Model to 8 calls. Pairs must plan before calling.
