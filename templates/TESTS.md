# TESTS.md — how I checked that this works

> Manual tests are steps a person follows. Automated tests are code that checks code (`npm test`).
> Every acceptance criterion in `SPEC.md` should have at least one test here. Include edge cases.

## Manual tests

Run these in a fresh browser tab. For the "reload" tests, reload the page before checking.

| ID | Checks | Steps | Expected result | Result (date) |
|---|---|---|---|---|
| T1 | AC1 | 1. Type "Read" in the box. 2. Press Enter. | "Read" appears at the bottom of the list; the box is empty. | ☐ |
| T2 | AC2 (edge case) | 1. Leave the box empty. 2. Press Enter. | Nothing is added; the message "Please type a name" appears. | ☐ |
| T3 | AC3 (edge case) | 1. Add two items. 2. Reload the page. | Both items are still there, in the same order. | ☐ |
| T4 | | | | ☐ |

### Edge cases I considered

- [ ] Empty input
- [ ] Very long input (paste 500 characters)
- [ ] Duplicate entries
- [ ] Special characters and emoji (`<b>hi</b>`, `"quotes"`, 🎉)
- [ ] Reloading the page / closing and reopening the browser
- [ ] Small phone screen
- [ ] Slow or no internet (for apps that call an API)

## Automated tests

Run with:

```bash
npm test
```

| Test file | What it checks |
|---|---|
| `tests/<name>.test.js` | |

## Bugs found by testing

| Date | Bug | How I found it | Fixed in commit |
|---|---|---|---|
| | | | |
