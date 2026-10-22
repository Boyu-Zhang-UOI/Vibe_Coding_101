# Study Log: rescue starter

> **For students who have fallen behind.** This is a small, working app built from the course's
> [week 3 example spec](https://boyu-zhang-uoi.github.io/Vibe_Coding_101/weeks/03-spec-first/example-spec.html)
> (Sam's study timer). It is **a reference, not your Project 1.** Use it to keep taking part in
> week 4 (reading code, debugging, the first automated test) while you catch up, and talk to your
> instructor about how you'll finish your own Project 1.

## What it does

Pick a subject, press **Start**, press **Stop**, and the session goes into your log. The app shows
how many minutes you studied each subject this week (Monday to Sunday). Everything is saved in your
browser with localStorage, under the key `study-log`. Nothing is sent over the internet.

Every acceptance criterion of the example spec is implemented:

| Criterion | Where to look |
|---|---|
| AC1, AC2: add a subject; refuse empty and duplicate names | `lib/validate.js` (`checkNewSubject`), and the `subjectForm` code in `app.js` |
| AC3: the mm:ss timer and the Start/Stop button | `formatTimer` in `lib/sessions.js`; `start()` in `app.js` |
| AC4, AC5: save sessions of 1 minute or more, in whole minutes | `finishSession` in `lib/sessions.js`; `stop()` in `app.js` |
| AC6: still there after a reload | `parseSaved` in `lib/sessions.js`; `save()` in `app.js` |
| AC7: this week's totals, Monday to Sunday | `weekStart` and `weeklyTotals` in `lib/sessions.js` |
| AC8: delete a session, after confirming | `removeSession` in `lib/sessions.js`; `renderLog()` in `app.js` |

## Files

| File | What it does |
|---|---|
| `index.html` | The page: the subject menu, the timer, this week's totals and the log |
| `style.css` | How it looks, including a dark version and a layout that fits a 375-pixel phone |
| `app.js` | Connects the page to the logic, and saves to localStorage. The only file that touches the page |
| `lib/validate.js`, `lib/sessions.js` | The rules, as **pure functions**: they use only their inputs, so Node can test them |
| `tests/` | Automated tests for the pure functions (`npm test`) |
| `package.json` | Tells Node the project uses modules, and what `npm test` runs |

## Run it

1. Copy it into a **new, empty** repository (not your Project 1 repository), following
   [Start a project from a starter](https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/blob/main/setup/codespaces.md#start-a-project-from-a-starter)
   with the path `projects/rescue-starters/study-timer`, and open it in a Codespace.
2. In the terminal, start a small web server, then open port 8000 from the pop-up or the **Ports** tab:

   ```bash
   python3 -m http.server 8000
   ```

3. Run the tests in a second terminal:

   ```bash
   npm test
   ```

`app.js` is an ES module, so the page only works through a web server (the preview or GitHub Pages),
not by double-clicking `index.html`.

## Ways to use it

- **Read it** with the week 4 reading questions: trace what happens from pressing **Stop** to the new line in the log.
- **Debug it**: break one line on purpose (or ask a classmate to), then find it with DevTools.
- **Test it**: add a test to `tests/` before you change anything, for example "a subject name with an emoji is accepted".
- **Compare it** with your own Project 1: which edge cases does each one handle?

If you build on it, say so in your README and `PROMPTS.md` (it's MIT-licensed, so credit "Vibe Coding 101 rescue starter"),
and keep your own work clearly separate. Your grade comes from what you write and can explain yourself.
