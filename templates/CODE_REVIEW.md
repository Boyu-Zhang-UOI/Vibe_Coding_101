# CODE_REVIEW.md — peer review checklist

> 🔴 **AI off. Write this review yourself, without AI.** Reviews are addressed to a person. After you finish, you may ask an AI to review the same code and compare (week 7 lab).
> Be kind, specific and useful. Point to files and line numbers. Suggest, don't command.
> **Submit your written review on Canvas**, the course's learning management system. It names a classmate, so it never goes in a repository. You may also leave comments on your classmate's pull request on GitHub; that's ordinary code review and optional. The Canvas review is the graded one.
> Replace every [square-bracket placeholder].

**Reviewer:** [your name] · **Author:** [classmate's name] · **Repo / pull request:** [link] · **Date:** [date]

## 1. First impressions (5 min)

- Could you get the app running from the README alone? ☐ yes ☐ with help ☐ no — what was missing?
- What does the app do, in your own words? (one sentence)

## 2. Does it do what the spec says? (15 min)

Pick three acceptance criteria from their `SPEC.md` and try them on the live site.

| Criterion | Passes? | Notes |
|---|---|---|
| | | |
| | | |
| | | |

Try one edge case the author did not list. What happened?

## 3. Can you read the code? (15 min)

- Pick one function. Explain what it does in plain English:
  > …
- Is anything confusing (names, long functions, repeated code, leftover comments like "TODO" or "rest of code here")? Where?

## 4. Safety (10 min)

- [ ] No secrets in the repo or on the live site. (A Supabase publishable key in `public/config.js` is fine, but only if row-level security is on.)
- [ ] User input shown with `textContent`, not `innerHTML`
- [ ] If there's a database: every table has row-level security on and at least one policy
- [ ] Dependencies look intentional, with exact versions

## 5. Summary

- **One thing that works really well:**
- **The most important thing to fix:**
- **One question I have for the author:**

---

## Afterwards: compare with an AI review (week 7)

| | Found by me | Found by AI |
|---|---|---|
| Real problems | | |
| False alarms | | |
| Missed | | |

What did the AI catch that you didn't? What did you catch that it didn't?
