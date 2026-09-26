# Debug Clinic: Reading Log

> [!WARNING]
> **This app contains five planted bugs, on purpose.** It is the practice kit for the Vibe Coding 101 week 4 **Debug Clinic**. Don't use it as the starting point for a real project, and don't "fix" it with AI: the clinic is 🔴 **AI off**.

**Reading Log** is a small web app for tracking the books you're reading: add a book, log the pages you read in each session, filter by Reading or Finished, and delete books. Everything is saved in your browser with localStorage.

Its developer shipped it in a hurry. Five users have sent bug reports (below). Your job, with a partner and **without AI**, is to reproduce each bug, find the line that causes it, fix it with the smallest change you can, and prove the fix works.

## What's in this folder

| File | What it does | Planted bugs? |
|---|---|---|
| `index.html` | The page structure: the form, the filter buttons, the empty list | No |
| `style.css` | How it looks | No |
| `app.js` | Everything the app does: saving, loading, adding, logging, deleting, drawing the list | **Yes, all five** |
| `hint-cards.md` | Three hints per bug, from gentle to strong | — |
| `.vscode/settings.json` | Switches Copilot off in this workspace | — |

`app.js` is loaded as a classic script (not a module) on purpose, so that you can type its variable names, such as `books`, into the browser's Console and see what's inside.

## How to run it

1. Open this repository in a GitHub Codespace (**Code** → **Codespaces** → **Create codespace on main**).
2. In the terminal at the bottom, start a small web server:

   ```bash
   python3 -m http.server 8000
   ```

3. A pop-up says your application is running on port 8000. Click **Open in Browser**. (No pop-up? Open the **Ports** tab next to the terminal and click the globe icon next to port 8000.)
4. In the new browser tab, open **DevTools**: press F12, or Ctrl+Shift+I on Windows, Linux and ChromeOS, or Cmd+Option+I on a Mac. Click the **Console** tab.
5. After every change: **save** the file in the Codespace (Ctrl+S or Cmd+S), then **reload** the app's tab. If the change doesn't seem to apply, hard-reload with Ctrl+Shift+R (Cmd+Shift+R on a Mac).

To stop the server, click in the terminal and press Ctrl+C.

## The rules

1. 🔴 **AI off.** Copilot's suggestions and chat are switched off in this workspace (check the Copilot icon in the status bar at the bottom). Don't use any other AI tool either. The one exception is rule 6.
2. **Pairs.** The **driver** types. The **navigator** reads the code, asks questions and keeps the bug notes. Swap roles after every bug.
3. **In order.** Fix bug 1 first. Each bug hides behind the one before it.
4. **Small fixes.** Every bug can be fixed by changing one or two lines. Don't rewrite functions, and don't delete features.
5. **You may use:** DevTools, reading the code, MDN Web Docs (<https://developer.mozilla.org>), the course [glossary](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/resources/glossary.md) and [web basics](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/resources/web-basics.md) pages, the [hint cards](hint-cards.md), and your instructor.
6. **Stuck for 10 minutes on the same bug?** Take a hint card. Still stuck? You may use 🟡 **tutor mode**: open your chat assistant in a new tab, paste the tutor prompt from the course's [course-tutor page](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/instructor/course-tutor.md), then describe the bug, paste the error message and the function you're looking at. The tutor gives hints, not fixes.
7. **Claim and commit.** When a bug is fixed, write its claim in `BUGS.md` (format below), show your instructor or TA if they're collecting claims, then commit, for example: `Fix bug 1: <what you changed>`.

## Scoring: the bug bounty

Points are for fun and bragging rights. They are not part of your grade; taking part is.

| Bug | Points |
|---|---|
| 1 | 10 |
| 2 | 15 |
| 3 | 20 |
| 4 | 25 |
| 5 | 30 |
| A real bug that isn't one of the five (your instructor decides) | +10 |
| Each hint card you use | −3 |
| Tutor mode used on a bug | −5 |

A claim only counts if you can explain the **cause** in your own words. "I changed it and it worked" scores zero.

## The debugging method

| Step | Question to ask | In this clinic |
|---|---|---|
| 1. **Reproduce** | Can I make the bug happen on purpose? | Follow the bug report's steps. The "Add 3 sample books" button at the bottom gives you test data fast |
| 2. **Isolate** | Where does it go wrong? | Read the Console message. Click the `app.js:NN` link. Find the function |
| 3. **Hypothesize** | What do I think is wrong, and why? | Say it out loud to your partner: "I think `x` is … because …" |
| 4. **Test** | How can I check my idea *before* changing the code? | Type a variable name in the Console, or add a temporary `console.log(...)` |
| 5. **Fix** | What is the smallest change? | One or two lines |
| 6. **Verify** | Is it really fixed, and did I break anything? | Repeat the bug report's steps, then check the earlier bugs are still fixed |

## The bug reports

> [!NOTE]
> You'll probably notice bug 5 early, because every time you reload the page your test books disappear. That's expected. Use the **Add 3 sample books** button to refill the list, and fix bug 5 last.

**Bug report #1: "Nothing works."**
> I open the app and it says "Loading your books…" forever. When I type a book and press **Add book**, the page just blinks and my book isn't there.

**Bug report #2: "The list never loads."**
> After your last update, the line at the top now says "0 books · 0 finished · 0 pages read", but the list still says "Loading your books…". When I click **Add 3 sample books**, the top line changes to "3 books", but I can't see any books.

**Bug report #3: "Wrong page count."**
> I'd read 40 pages of *The Time Machine*. I logged 5 more pages, and now it says I've read 405 pages of a 118-page book! It also jumped to Finished, and the total at the top is a huge number.

**Bug report #4: "Delete removes the wrong book."**
> I clicked **Delete** on the book at the top of my list. The pop-up even asked 'Delete "The Time Machine"?' and I clicked OK, but *The Time Machine* is still there and *Pride and Prejudice* vanished!

**Bug report #5: "My books disappear."**
> Everything works now, until I reload the page or come back the next day. Then my list is empty again: "No books yet."

## BUGS.md: how to write a claim

Create a file called `BUGS.md` in this repository and add one block per bug:

```markdown
## Bug 1

- **Symptom (what the user sees):**
- **Steps to reproduce:**
- **Where the problem is (file and line):**
- **Why it happened (one sentence, in our own words):**
- **The fix (what we changed):**
- **How we verified it (and what we re-tested):**
- **Hints or tutor used:**
```

## Handy DevTools moves

| Want to… | Do this |
|---|---|
| See errors | **Console** tab. Red lines are errors, yellow lines are warnings. The link on the right (`app.js:46`) takes you to the line |
| Read a stack trace | The top line is where it broke. Each line below is the function that called the one above |
| Look inside a variable | Type its name in the Console, for example `books` or `currentFilter`, and press Enter |
| Check whether something is text or a number | Type `typeof something` in the Console. It answers `"string"` or `"number"` |
| Print a value while the app runs | Add `console.log("pages is", pages, typeof pages);` to `app.js`, save and reload. Remove it before you commit |
| See what's saved in the browser | Chrome and Edge: **Application** tab → **Local Storage** → your site. Firefox and Safari: the **Storage** tab |
| Start again with nothing saved | In the Console: `localStorage.clear()`, then reload |

## When you're done

- Every bug has a claim in `BUGS.md`, and each fix is its own commit.
- Run through all five bug reports once more on the fixed app.
- Stop your codespace when you finish (github.com/codespaces → **…** → **Stop codespace**) so it doesn't use up your free hours.
