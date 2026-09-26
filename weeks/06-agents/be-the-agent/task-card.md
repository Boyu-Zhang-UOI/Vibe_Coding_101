# Task cards

> **For the Model.** Read your task, then ask for tools one call at a time (see [tool-cards.md](tool-cards.md)). Log every call in the table at the bottom. You may not look at the editor or the file tree, only at tool output.

---

## Task A · Bug report #12 (everyone)

> **From:** Priya, a user of Tip Splitter
>
> Three of us had dinner. The bill was $100 and we added a 15% tip. Tip Splitter said each of us owes **$38.33**, so that's what we paid. The waiter said we were **a cent short**: 3 × $38.33 = $114.99, but the total was $115.00. Please fix it so the group always pays at least the full total.

**Your job:** fix the app so each person's share covers the bill.

**Constraints:**

- Don't change the tests. The tests describe what the app should do.
- Make the smallest change that fixes the problem.

**Done when:** `run` shows every test passing, and your Finish report says which line you changed, why, and shows the test summary as evidence.

---

## Task B · Feature request (for pairs who finish Task A early)

> **From:** Sam
>
> I typed **-10** in the tip box by mistake, and the app happily took 10% *off* the bill. A negative tip should be an error, like a negative bill already is.

**Your job:** make `tipAmount` reject a negative tip percent with the message `Tip percent must be a number, 0 or more`.

**Work red/green**, the way good agents do:

1. **Red:** add a test first. The last line of `tests/bill.test.js` is `// Add new tests above this line.`, which is handy text for `edit`. `run` it and see the new test **fail** (✖).
2. **Green:** change the code. `run` again and see **every** test pass (✔).

**Done when:** your Finish report shows the failing run *and* the passing run.

---

## Call log (the Model fills this in)

| # | Tool and arguments | What I learned from the output |
|---|---|---|
| 1 | | |
| 2 | | |
| 3 | | |
| 4 | | |
| 5 | | |
| 6 | | |
| 7 | | |
| 8 | | |
| 9 | | |
| 10 | | |
| 11 | | |
| 12 | | |

**Total tool calls:** ____ · **Errors from a tool:** ____ · **Finished in:** ____ minutes
