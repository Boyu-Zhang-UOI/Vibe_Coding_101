# Answer key — Week 6: Be the Agent (Tip Splitter)

> **Instructors only.** Don't publish this file in a student-facing template repository.
> Kit: [Be the Agent: Tip Splitter](../../weeks/06-agents/be-the-agent/README.md) · Lab: [Week 6 Lab](../../weeks/06-agents/lab.md#part-1--be-the-agent-30-min) · Tools: [Tool cards](../../weeks/06-agents/be-the-agent/tool-cards.md)

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

After the fix: **9 tests, 9 pass, 0 fail**. The even-split test (`perPerson(120, 0, 4)` is 30) still passes, because `Math.ceil` leaves whole numbers alone. (Re-verified on a scratch copy of the kit with Node.js 22, October 2026.)

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
| The Model edits the test to expect 38.33 | The test run turns green but the bug stays: the fake-success pattern from the Replit incident, and the same move as the "fix it" prompt that changed a test's expected status from 200 to 500 (week 6 slides). This breaks the rules | "What did Priya actually ask for?" |
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
5. **What would have helped?** An `AGENTS.md` such as: "Run `npm test` first. Logic is in `lib/`, tests in `tests/`. Never edit tests to make them pass." Strong pairs add a Scope line ("You may edit only `lib/`"). A clear bug report with numbers (Priya's) also helps; a vague one ("the math is wrong") would have cost many more calls.
6. **What does it mean for supervising a real agent?** The agent does this loop in seconds, so you won't watch every call. Your job moves to the edges: a clear task (spec), standing rules (`AGENTS.md`), a way for it to check itself (a test written first), and checking its evidence and diff before you commit. And the rules are only advice: in Be the Agent the Harness was the rail (it refused to run anything the Model didn't ask for); with a real agent, the approval prompt and the Codespace play that role.

## The "Working alone?" options

The lab offers two solo versions ([Week 6 Lab, Part 1](../../weeks/06-agents/lab.md#part-1--be-the-agent-30-min)).

**An AI plays the Model; the student is the Harness.** Expect the chat model to:

- write several calls at once, or a whole plan, instead of one call per turn. The student should reply "One call, then wait for the output", which is itself a lesson about how a harness constrains a model;
- claim to know a file's contents before reading it, or "see" the bug from the bug report alone. In the debrief ask: "What did the Model say before it had any evidence? Was it right?";
- sometimes propose changing the test. That's the fake-success pattern; the Harness should refuse, as the rules say.

The ideal trace above still applies. A student who keeps the AI to one call per turn usually finishes in 6–10 calls.

**Play both roles.** The risk is peeking. The call log, with an "expected" and an "actual" column filled in before and after each call, is the evidence. In a check-in, ask the student to read two rows aloud: where did the expectation differ from the output?

## Related: the Studio B planted-bug hunt

In week 6 Studio B, students fix by hand a bug that a partner (or an AI) planted in **their own** agent-written capstone function ([Week 6 Lab, Studio B Part 2](../../weeks/06-agents/lab.md#part-2--find-the-bug-planted-in-agent-written-code-25-min)). There is no single answer; these plants work well, and these are the symptoms to expect:

| Plant | Typical symptom | Good Fixer behavior |
|---|---|---|
| `>` ↔ `>=` in a length or count check | The "exactly at the limit" test fails, or none does if no boundary test exists | Reads the failing test's input, finds the comparison, checks the spec for the boundary |
| A `.trim()` removed | The spaces-only or spaces-around test fails | Notices that the input in the failing test has spaces |
| A `!` removed or added | Several tests fail at once | Looks for the common cause instead of fixing tests one by one |
| A number changed (a limit, an index) | One assertion off by a fixed amount | Compares expected and actual, works backwards to the number |
| Two variables swapped | Strange values; may pass tests if the values happen to be equal | Uses the browser; adds a test with different values |

If **no** test fails, that's a finding, not a failure: the student notes in `TESTS.md` the test that would have caught it, and writes it as homework. Watch for Fixers who "fix" the failure by changing what the test expects: stop them and ask what `SPEC.md` says.

## Variations (to reuse the kit)

- **Easier:** tell the Model the file name in the task card.
- **Harder:** remove the comment on lines 19–20, so the only statement of the rule is the test and the bug report.
- **Different bug:** change line 11 to `roundToCents(bill * tipPercent)` (percent math off by 100×). Four tests fail at once, which teaches "find the common cause". Write a matching bug report ("a 15% tip on $100 came out as $1,500").
- **Context pressure:** limit the Model to 8 calls. Pairs must plan before calling.
- **Scope pressure:** add a rule to the task card, "You may edit only `lib/`", and see whether the Model respects it when a test looks tempting to change. Debrief: what made the rule hold here? (The Harness, not the rule.)
