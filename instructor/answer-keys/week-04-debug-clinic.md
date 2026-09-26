# Answer key: Week 4 Debug Clinic (Reading Log)

> [!CAUTION]
> **This file is public if the course repository is public.** Anyone, students included, can read it on GitHub. Treat the clinic as practice: bounty points are for fun, and the grade comes from taking part and from the [oral walkthroughs](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4). To keep the clinic fresh, swap in bugs from the [bug menu](#bug-menu-vary-the-clinic-between-cohorts) below. If you need a truly private key, keep a copy in a private repository or a private fork and delete this file from your public copy.

The student kit is [weeks/04-read-debug-own-it/debug-clinic/](../../weeks/04-read-debug-own-it/debug-clinic/README.md). The lab instructions are in [weeks/04-read-debug-own-it/lab.md](../../weeks/04-read-debug-own-it/lab.md), and the progressive hints in [hint-cards.md](../../weeks/04-read-debug-own-it/debug-clinic/hint-cards.md).

## At a glance

All line numbers refer to the student version of `app.js` (217 lines) as shipped.

| # | Bug report | Root cause | Line | Minimal fix | Main skill |
|---|---|---|---|---|---|
| 1 | "Nothing works" | Missing comma in an object literal → `SyntaxError`, so no JavaScript runs at all | 45 (reported as 46) | Add `,` after `title: title` | Read an error message; the reported line is where the parser noticed |
| 2 | "The list never loads" | `getElementById("books-list")`, but the HTML id is `book-list` → `null` | 10 (crashes at 113) | Correct the id | Follow `null` back to its source; read a stack trace |
| 3 | "Wrong page count" | The log box's value is a string, so `40 + "5"` is `"405"` | 162 (used at 58) | `Number(pages)` | Input values are text; `+` joins text |
| 4 | "Delete removes the wrong book" | The delete button passes its position **on screen** (the list is filtered and reversed) as a position in `books` | 172 | `deleteBook(books.indexOf(book))` | Position is not identity; reproduce systematically |
| 5 | "My books disappear" | `localStorage.setItem(key, books)` without `JSON.stringify`, which saves the text `[object Object],…` | 34 | `JSON.stringify(books)` | localStorage stores only text; use the Application tab |

The bugs reveal themselves in this order: bug 1 stops everything; bug 2 crashes the first draw of the list; bug 3 needs the list to work; bug 4 needs books on screen; bug 5 is only a warning, visible after a reload. Students usually *notice* bug 5 early (their test books vanish on every reload), which is why the README tells them to fix it last and gives them the **Add 3 sample books** button.

## How this was verified

On 2026-09-25 the shipped buggy `app.js` was checked with `node --check` (it fails with `SyntaxError: Unexpected identifier 'totalPages'` at line 46). Then copies were fixed one bug at a time and loaded in a Chromium-based browser, and every symptom and error message below was observed. The fully fixed versions (both the minimal fixes and the reference version at the end of this file) pass `node --check` and behave correctly. Firefox and Safari word their error messages differently; the error *types* and line numbers are the same.

**Re-verify before each cohort** (10 minutes): open the kit in a Codespace, run `python3 -m http.server 8000`, and walk through the five bug reports in [the kit README](../../weeks/04-read-debug-own-it/debug-clinic/README.md#the-bug-reports) with the fixes below.

---

## Bug 1: missing comma (SyntaxError)

**Symptom.** The list says "Loading your books…" forever and the stats line shows "…". Pressing **Add book** makes the page blink: the browser does its default form submission, which reloads the page with `?` at the end of the address, because no JavaScript is running to stop it. The **Add 3 sample books** button does nothing.

**Console (Chrome/Edge):**

```text
Uncaught SyntaxError: Unexpected identifier 'totalPages'        app.js:46
```

Firefox reports a similar `SyntaxError` ("missing } after property list") and also points near line 46.

**How to find it.** Click `app.js:46`. That line (`totalPages: totalPages,`) looks fine, and that's the lesson: the parser only noticed a problem when it reached `totalPages`. The mistake is at the end of line 45.

**Fix:**

```diff
   const book = {
     id: makeId(),
-    title: title
+    title: title,
     totalPages: totalPages,
     pagesRead: 0,
   };
```

**Teaching points**

- A SyntaxError means the browser couldn't read the file, so **no line** of it ran, not even the lines above the mistake. That's why "Loading…" never changes.
- The reported line is where the parser *noticed* the problem. Look at the line before, especially for missing commas, brackets and quotes.
- "The page blinks when I submit" is the browser's default form behavior, which JavaScript normally stops with `event.preventDefault()`.
- Afterwards the page may look just as broken, but the error message has changed. That's progress (bug 2).

**Common wrong moves:** retyping the whole object; adding a comma at the end of line 46 (already there); deleting line 46.

---

## Bug 2: wrong id → `null`

**Symptom.** The stats line now works ("0 books · 0 finished · 0 pages read"), but the list still says "Loading your books…". Clicking **Add 3 sample books** changes the stats to "3 books · 1 finished · 320 pages read", but no books appear.

**Console on page load:**

```text
Uncaught TypeError: Cannot read properties of null (reading 'replaceChildren')
    at render (app.js:113:12)
    at app.js:217:1
```

**Console after clicking Add 3 sample books** (a good stack trace to show the class):

```text
Uncaught TypeError: Cannot read properties of null (reading 'replaceChildren')
    at render (app.js:113:12)
    at saveAndRender (app.js:98:3)
    at HTMLButtonElement.addSampleBooks (app.js:73:3)
```

**How to find it.** Line 113 is `bookList.replaceChildren();`, so `bookList` is `null`. Search for `const bookList`: line 10 is `document.getElementById("books-list")`. In `index.html` the list is `<ul id="book-list" …>`. Test it in the Console: `document.getElementById("books-list")` returns `null`, while `document.getElementById("book-list")` returns the list.

**Fix:**

```diff
-const bookList = document.getElementById("books-list");
+const bookList = document.getElementById("book-list");
```

Changing the HTML id to `books-list` also works and is acceptable. Discuss which one is the better "source of truth". (Here, nothing else depends on the id, but in bigger apps CSS or tests might.)

**Teaching points**

- `Cannot read properties of null` means "the thing before the dot doesn't exist". The error appears where the variable is **used** (line 113), not where it went wrong (line 10). Follow the variable back.
- Read the stack trace from the top (where it broke) down (who called whom): `render` ← `saveAndRender` ← the sample button's click.
- The stats line worked because `render()` sets it *before* it touches the list. Partial success tells you where the crash is.
- Ids must match exactly: one extra letter is enough to break them.

---

## Bug 3: text instead of a number

**Symptom.** Add the sample books, then log 5 pages on *The Time Machine* (40 read). It now shows **"405 / 118 pages (343%)"**, the progress bar is full, it is marked finished, and the stats line says **"280405 pages read"**. On a new book (0 pages read), logging 10 shows "010", and then logging 5 shows "0105". There is no error message.

**How to find it.** Follow the **Log pages** click handler (lines 156–163): `const pages = logInput.value;` and then `logPages(book.id, pages)`. In `logPages` (line 58): `book.pagesRead = book.pagesRead + pages;`. Test in the Console: `40 + "5"` gives `"405"`. Add `console.log(typeof pages)` and it prints `string`. Compare with the Add book form (line 188), which does `Number(pagesInput.value)`.

**Fix (minimal, at the source):**

```diff
-    logPages(book.id, pages);
+    logPages(book.id, Number(pages));
```

Also acceptable: `book.pagesRead + Number(pages)` on line 58, `parseInt(pages, 10)`, or `+pages`.

**Not acceptable:** converting only where the number is *displayed* (for example `Number(book.pagesRead)` in the detail text). That hides one symptom but leaves text in the data, so the stats total and the "finished" check stay wrong. Fix the cause, not the symptom.

**Teaching points**

- Everything from an input box is text (a *string*), even with `type="number"`.
- `+` joins strings. Other operators (`-`, `*`, `/`, `<`, `<=`) quietly convert text to numbers. That's why the check `pages <= 0` worked and hid the bug: the code *looked* as if it handled numbers.
- One bad value in the state caused three symptoms (the page count, the stats total, the finished status). Look for the single cause.
- Once bug 5 is fixed, the Application tab would show `"pagesRead":"405"` in quotes: a string saved in the data.

---

## Bug 4: position on screen is not position in the data

**Symptom.** With the three sample books on screen (newest first: *The Time Machine*, *Frankenstein*, *Pride and Prejudice*), click **Delete** on the top book. The confirmation correctly says `Delete "The Time Machine"?`, but *Pride and Prejudice* disappears. Deleting the **middle** book works correctly, which confuses students who test only once.

**How to find it.** The delete handler (line 172) calls `deleteBook(index)`. That `index` comes from `visibleBooks.forEach((book, index) => …)` (line 124), and `visibleBooks` is `books.filter(matchesFilter).reverse()` (line 114): filtered **and** reversed. `deleteBook` (lines 62–63) does `books.splice(index, 1)` on the full, unreversed array. Type `books` in the Console to compare the order with the screen.

**Fix (minimal):**

```diff
     if (confirm(`Delete "${book.title}"?`)) {
-      deleteBook(index);
+      deleteBook(books.indexOf(book));
     }
```

**Tidier fix (delete by id, as in the reference version):**

```diff
-function deleteBook(index) {
-  books.splice(index, 1);
+function deleteBook(id) {
+  books = books.filter((b) => b.id !== id);
   saveAndRender();
 }
```

```diff
-      deleteBook(index);
+      deleteBook(book.id);
```

Then remove the unused `index` parameter from `createBookItem` and from the `forEach` in `render`.

**Not acceptable:** removing `.reverse()` on line 114. It makes the **All** view look right, but the bug comes back in the **Finished** and **Reading** views (a filtered list's positions still don't match `books`), and it removes the newest-first feature. This is the best example in the clinic of a fix that changes the symptom but not the cause. If a pair does it, ask them to test the Finished view.

**Teaching points**

- A position ("the 1st item") depends on which list you're looking at. An id identifies the same item everywhere.
- "Sometimes it works" (the middle book) is a clue, not bad luck. Reproduce systematically: top, middle, bottom.
- Verify with more than the one case in the bug report.

---

## Bug 5: saving objects without JSON

**Symptom.** Everything works until a reload; then the list is empty ("No books yet"). There's no red error. The Console shows a yellow warning on load:

```text
Could not read saved books, so starting with an empty list.
SyntaxError: Unexpected token 'o', "[object Obj"... is not valid JSON
    at JSON.parse (<anonymous>)
    at loadBooks (app.js:26:17)
    at app.js:16:13
```

**How to find it.** DevTools → **Application** → **Local Storage** (Firefox and Safari: **Storage**) shows the key `reading-log-books` with the value `[object Object],[object Object],[object Object]`. `loadBooks` uses `JSON.parse`, but `saveBooks` (line 34) stores `books` directly. `setItem` turns it into text with JavaScript's default conversion, and a plain object's default text is `[object Object]`.

**Fix:**

```diff
 function saveBooks() {
-  localStorage.setItem(STORAGE_KEY, books);
+  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
 }
```

**Heads-up for the verify step.** The broken value is still stored after the fix, so the *first* reload shows the warning once more. Adding a book overwrites it, or students can clear it with `localStorage.clear()` in the Console or from the Application tab. Warn pairs, so they don't undo a correct fix.

**Teaching points**

- localStorage stores only text. `JSON.stringify` turns data into text; `JSON.parse` turns it back. They are always used as a pair.
- The `try`/`catch` in `loadBooks` turned a crash into silent data loss. Error handling that hides problems makes debugging harder: the yellow warning was the only clue. Read warnings, not just errors.
- When data is involved, look at the data itself (the Application tab), not only at the code.

**Not acceptable:** deleting the `try`/`catch`, or changing `loadBooks` to skip `JSON.parse`. The saved text is the problem, not the loading.

---

## Running the debrief (25 minutes)

For each bug, about 5 minutes:

1. Ask a pair who solved it to narrate **reproduce → isolate → hypothesize → test → fix → verify**, in that order. Stop them if they jump to "fix".
2. Show the diff on screen and ask the room: "Why does this one change fix it?"
3. State the teaching point in one sentence, and connect it to their Project 1: "Where does your app read an input box? Did you convert it?"
4. Ask for a wrong fix someone tried and why it didn't work (bugs 3 and 4 produce the best ones).

Close with the six-skill list: bugs 1 and 2 are "read an error message and find the failing line" ([without-AI skills](../../resources/without-ai-skills.md)).

## Unplanted quirks (bonus-point decisions)

These are real behaviors of the *fixed* app that the clinic doesn't count as the five bugs. Award the +10 bonus if a pair reports one with clear reproduction steps and a sensible expected behavior.

| Quirk | Reproduce | Notes |
|---|---|---|
| Pages read can go past the total | Log 90 pages on *The Time Machine* (40/118): it shows "130 / 118 pages (110%)" | A design question: cap it, or warn? Great prompt for writing a WHEN … THE APP SHALL … criterion |
| Decimal pages are accepted | Type `2.5` in the log box | `step="1"` only affects the arrows, not what can be typed |
| Enter does nothing in the log box | Type a number, press Enter | The log box isn't a form |
| Duplicate books | Add the same title twice, or click the sample button twice | Duplicates are allowed; is that a bug? |
| Very large totals | Add a book with 5000 pages, log 99999 | No upper limit on logging |
| Storage blocked or full | Some private-browsing modes block localStorage | `setItem` would throw; the app doesn't catch it |

---

## Bug menu: vary the clinic between cohorts

Keep the **ladder** (one bug per slot, in this order) so the difficulty curve and the reveal order still work:

1. **Stops the whole script** (SyntaxError)
2. **Crashes with a message** (null, undefined or TypeError)
3. **Wrong value, no error**
4. **Logic: works in some cases only**
5. **Storage or state across reloads**

Each entry below is a change to the **reference version** (at the end of this file; line numbers refer to it). All of them were planted and observed in the browser on 2026-09-25. When you swap a bug: update the bug report in the kit README, rewrite that bug's three hint cards (hints, never the fix), confirm the reveal order still holds, and run `node --check app.js` (it must fail only if slot 1 is planted).

| ID | Slot | What to change (reference line) | What students see | Skill | Difficulty |
|---|---|---|---|---|---|
| M1 | 1 | Delete the closing `}` of `isFinished` (line 79) | `SyntaxError: Unexpected end of input` pointing at the **last** line of the file | The error line can be far from the mistake; use the editor's bracket matching and code folding | Hard |
| M2 | 1 | Line 155: `"Log pages";` → `"Log pages;` (remove the closing quote) | `SyntaxError: Invalid or unexpected token` at line 155; nothing runs | Unclosed strings; the editor's colors change after the missing quote | Easy |
| M3 | 2 | Line 125: `bookList.append(…)` → `booklist.append(…)` | List stays empty, `ReferenceError: booklist is not defined` with a stack through `Array.forEach` → `render` | Names are case-sensitive; ReferenceError vs TypeError | Easy |
| M4 | 2 | In `index.html`, move `<script src="app.js"></script>` from the end of `<body>` into `<head>` | Stuck on "Loading…"; `Cannot read properties of null (reading 'addEventListener')` at the `form.addEventListener` line (185), even though **every id is correct** | Scripts run when they're reached; the cause is in a different file | Hard |
| M5 | 2 | Line 16: `let books` → `const books` | Everything works until **Delete**: `TypeError: Assignment to constant variable.` at `deleteBook` | `let` vs `const` | Medium |
| M6 | 3 | Line 140: `Math.round((book.pagesRead / book.totalPages) * 100)` → `Math.round(book.pagesRead / book.totalPages) * 100` | Percentages only ever show 0% or 100% (40/118 shows 0%) | Order of operations; test with in-between values | Medium |
| M7 | 4 | Line 78: `>=` → `>` | *Frankenstein* (280/280) isn't finished; the stats line says "0 finished" | Boundary values: test exactly-equal cases | Medium |
| M8 | 4 | Line 83: `return !isFinished(book);` → `return isFinished(book);` | The Reading and Finished tabs show the same books | Read conditions aloud; `!` means "not" | Easy |
| M9 | 4 | Line 63: replace with `const index = books.findIndex((b) => b.id === id);` and `books.splice(index);` | Deleting the middle book also deletes every book added after it | Read the docs for the function's arguments (MDN: `splice`) | Medium |
| M10 | 4 | Line 209: `button.dataset.filter` → `button.dataset.filters` | Filter buttons do nothing, and none of them look selected | `data-` attributes; `undefined` fails quietly | Medium |
| M11 | 4 | Delete line 186 (`event.preventDefault();`) | The page blinks on **Add book**, the "Added …" message never shows, and `?` appears in the address, yet the book *is* saved | "Works but feels wrong"; default browser behavior | Medium |
| M12 | 5 | Line 21: `getItem(STORAGE_KEY)` → `getItem("reading-log-book")` | Books vanish after a reload with **no warning at all**; the Application tab shows the data is saved | Compare saved keys with loaded keys; silent failures | Hard |
| M13 | 5 | Line 26: `return JSON.parse(saved);` → `return saved;` | Works on the first visit; after a reload, `TypeError: books.filter is not a function` at `render` | The same data as text vs as objects | Medium |
| M14 | bonus | Line 134: `title.textContent` → `title.innerHTML` | A book titled `<img src=x onerror=alert(1)>` makes a pop-up appear | Cross-site scripting: a preview of week 7 | Medium |
| M15 | bonus | Line 187: remove `.trim()` | A title of only spaces is accepted as a book | Edge cases in validation | Easy |

**Using the menu for oral walkthroughs.** The "examiner's break" in [walkthrough 1](../../assessment/oral-walkthroughs.md#walkthrough-1-week-4) is a live one-line change to the student's **own** Project 1, not to the clinic app. M1/M2 (a missing bracket or quote), M3 (a misspelled name), M7 (a boundary) and M12 (a storage key) translate to almost any student app.

---

## Reference version: the fixed `app.js`

This uses the tidier id-based fix for bug 4. The minimal one-line fixes above also produce a correct app. `index.html` and `style.css` contain no planted bugs and are unchanged.

```js
// Reading Log: keeps a list of books and how many pages you have read.
// Everything is saved in this browser with localStorage.

// ---------- 1. Find the parts of the page we need ----------
const form = document.getElementById("book-form");
const titleInput = document.getElementById("title-input");
const pagesInput = document.getElementById("pages-input");
const formMessage = document.getElementById("form-message");
const stats = document.getElementById("stats");
const bookList = document.getElementById("book-list");
const filterButtons = document.querySelectorAll("[data-filter]");
const sampleButton = document.getElementById("sample-button");

// ---------- 2. State: the data the app keeps track of ----------
const STORAGE_KEY = "reading-log-books";
let books = loadBooks(); // an array of book objects
let currentFilter = "all"; // "all", "reading" or "finished"

// ---------- 3. Saving and loading ----------
function loadBooks() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === null) {
    return []; // first visit: nothing saved yet
  }
  try {
    return JSON.parse(saved);
  } catch (error) {
    console.warn("Could not read saved books, so starting with an empty list.", error);
    return [];
  }
}

function saveBooks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
}

// ---------- 4. Actions: things the user can do ----------
function makeId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function addBook(title, totalPages) {
  const book = {
    id: makeId(),
    title: title,
    totalPages: totalPages,
    pagesRead: 0,
  };
  books.push(book);
  saveAndRender();
}

function logPages(id, pages) {
  const book = books.find((b) => b.id === id);
  if (!book) {
    return;
  }
  book.pagesRead = book.pagesRead + pages;
  saveAndRender();
}

function deleteBook(id) {
  books = books.filter((b) => b.id !== id);
  saveAndRender();
}

function addSampleBooks() {
  books.push(
    { id: makeId(), title: "Pride and Prejudice", totalPages: 432, pagesRead: 0 },
    { id: makeId(), title: "Frankenstein", totalPages: 280, pagesRead: 280 },
    { id: makeId(), title: "The Time Machine", totalPages: 118, pagesRead: 40 },
  );
  saveAndRender();
}

// ---------- 5. Small helpers ----------
function isFinished(book) {
  return book.pagesRead >= book.totalPages;
}

function matchesFilter(book) {
  if (currentFilter === "reading") {
    return !isFinished(book);
  }
  if (currentFilter === "finished") {
    return isFinished(book);
  }
  return true; // "all"
}

function plural(count, word) {
  return count === 1 ? `${count} ${word}` : `${count} ${word}s`;
}

// ---------- 6. Drawing the page from the state ----------
function saveAndRender() {
  saveBooks();
  render();
}

function render() {
  // The summary line
  const finishedCount = books.filter(isFinished).length;
  const pagesTotal = books.reduce((sum, book) => sum + book.pagesRead, 0);
  stats.textContent = `${plural(books.length, "book")} · ${finishedCount} finished · ${pagesTotal} pages read`;

  // Highlight the filter button that is switched on
  filterButtons.forEach((button) => {
    button.setAttribute("aria-pressed", button.dataset.filter === currentFilter);
  });

  // The list of books, newest first
  bookList.replaceChildren();
  const visibleBooks = books.filter(matchesFilter).reverse();

  if (visibleBooks.length === 0) {
    const empty = document.createElement("li");
    empty.className = "empty";
    empty.textContent = books.length === 0 ? "No books yet. Add one above." : "No books match this filter.";
    bookList.append(empty);
    return;
  }

  visibleBooks.forEach((book) => {
    bookList.append(createBookItem(book));
  });
}

function createBookItem(book) {
  const item = document.createElement("li");
  item.className = isFinished(book) ? "book finished" : "book";

  const title = document.createElement("h3");
  title.textContent = book.title;

  const progress = document.createElement("progress");
  progress.max = book.totalPages;
  progress.value = book.pagesRead;

  const percent = Math.round((book.pagesRead / book.totalPages) * 100);
  const detail = document.createElement("p");
  detail.className = "detail";
  detail.textContent = `${book.pagesRead} / ${book.totalPages} pages (${percent}%)`;

  // A small box and button for logging a reading session
  const logInput = document.createElement("input");
  logInput.type = "number";
  logInput.min = "1";
  logInput.step = "1";
  logInput.placeholder = "pages";
  logInput.setAttribute("aria-label", `Pages read in ${book.title}`);

  const logButton = document.createElement("button");
  logButton.type = "button";
  logButton.textContent = "Log pages";
  logButton.addEventListener("click", () => {
    const pages = logInput.value;
    if (pages === "" || pages <= 0) {
      logInput.focus();
      return;
    }
    logPages(book.id, Number(pages));
  });

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${book.title}`);
  deleteButton.addEventListener("click", () => {
    if (confirm(`Delete "${book.title}"?`)) {
      deleteBook(book.id);
    }
  });

  const actions = document.createElement("div");
  actions.className = "actions";
  actions.append(logInput, logButton, deleteButton);

  item.append(title, progress, detail, actions);
  return item;
}

// ---------- 7. Listen for what the user does ----------
form.addEventListener("submit", (event) => {
  event.preventDefault(); // stop the browser from reloading the page
  const title = titleInput.value.trim();
  const totalPages = Number(pagesInput.value);

  if (title === "") {
    formMessage.textContent = "Please type a title.";
    titleInput.focus();
    return;
  }
  if (!Number.isInteger(totalPages) || totalPages < 1) {
    formMessage.textContent = "Total pages must be a whole number above 0.";
    pagesInput.focus();
    return;
  }

  addBook(title, totalPages);
  formMessage.textContent = `Added "${title}".`;
  form.reset();
  titleInput.focus();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    render();
  });
});

sampleButton.addEventListener("click", addSampleBooks);

// ---------- 8. Start ----------
render();
```
