# Debug Clinic hint cards

> Read **one hint at a time**, and only after you've been stuck for 10 minutes. Each hint you read costs 3 bounty points. Try the hint for a few minutes before reading the next one.
> The hints never give you the fix. After hint 3, if you're still stuck, you may use 🟡 tutor mode (see the [README](README.md#the-rules)).
> Instructors: these can be printed and cut into strips.

---

## Bug 1: "Nothing works"

<details>
<summary>Hint 1.1</summary>

Open DevTools and click the **Console** tab, then reload the page. There's a red message. Read all of it: what *kind* of error is it (the word before the colon), and which file and line number are shown on the right?

</details>

<details>
<summary>Hint 1.2</summary>

A **SyntaxError** means the browser couldn't even read the file, so not a single line of `app.js` ran. That's why the page is stuck on "Loading…". The line number is where the browser *noticed* something was wrong. The actual mistake is often at the end of the line **just before** it.

</details>

<details>
<summary>Hint 1.3</summary>

Look at the curly braces `{ … }` around that line: they make an object, a bundle of `name: value` pairs. In JavaScript, each pair must be separated from the next by a particular punctuation mark. Compare every line inside that object, one by one.

</details>

---

## Bug 2: "The list never loads"

<details>
<summary>Hint 2.1</summary>

The red error in the Console is different now, which means you made progress. It says `Cannot read properties of null (reading '…')`. On the line it points to, what is the thing written just **before** the dot? That thing is `null`.

</details>

<details>
<summary>Hint 2.2</summary>

`null` here means "I looked for something on the page and found nothing." Follow that variable back to where it was created: use Ctrl+F (Cmd+F on a Mac) in `app.js` to find the line that starts with `const` and its name. What was it looking for?

</details>

<details>
<summary>Hint 2.3</summary>

`document.getElementById("…")` gives back `null` when no element on the page has **exactly** that id. Open `index.html` and compare, letter by letter. You can also test it: paste the `document.getElementById(...)` part into the Console and see what comes back.

</details>

---

## Bug 3: "Wrong page count"

<details>
<summary>Hint 3.1</summary>

No red error this time: the code runs, but gives the wrong answer. Reproduce it with small numbers: add the sample books, then log 5 pages on *The Time Machine* (40 pages read). Look hard at "405". What would you get if you **wrote** 40 and 5 next to each other instead of adding them?

</details>

<details>
<summary>Hint 3.2</summary>

Everything a user types into an input box reaches JavaScript as **text** (a *string*), even in a box meant for numbers. Try these in the Console and compare the answers: `40 + 5`, then `40 + "5"`, then `typeof "5"`.

</details>

<details>
<summary>Hint 3.3</summary>

Find the code that runs when **Log pages** is clicked (search for `Log pages`). Follow the value called `pages` into the `logPages` function. Add `console.log(typeof pages)` to check what it is. Then look at how the **Add book** form handles the number of total pages. What does it do that the log button doesn't?

</details>

---

## Bug 4: "Delete removes the wrong book"

<details>
<summary>Hint 4.1</summary>

Reproduce carefully and write down what happens. Add the 3 sample books, delete the **top** book, and note which one vanished. Reload, add the samples again, and try the **middle** book, then the **bottom** one. Which deletes go wrong? Which are right?

</details>

<details>
<summary>Hint 4.2</summary>

The pop-up names the right book, so the delete button knows which book it belongs to. The problem is the value that gets passed to `deleteBook`. Find the delete button's click code and follow that value into `deleteBook`. What does `deleteBook` do with it?

</details>

<details>
<summary>Hint 4.3</summary>

The list on screen is not in the same order as the `books` array. Look at how `visibleBooks` is made in `render()`. So "position 0 on the screen" and "position 0 in `books`" can be different books. Type `books` in the Console to see the real order. How could you find this book's position in `books` instead?

</details>

---

## Bug 5: "My books disappear"

<details>
<summary>Hint 5.1</summary>

Add some books, reload, and look at the Console. There's no red error, but there is a yellow **warning**. What does it say the app couldn't do? Which function printed it?

</details>

<details>
<summary>Hint 5.2</summary>

Look at what is actually saved. In Chrome or Edge: DevTools → **Application** → **Local Storage** → your site. In Firefox or Safari: the **Storage** tab. What is stored under `reading-log-books`? Does it look like a list of books with titles and page numbers?

</details>

<details>
<summary>Hint 5.3</summary>

localStorage can only store text. JavaScript has a pair of functions for turning a list of objects into text and turning that text back into objects. `loadBooks` uses one of the pair. Does `saveBooks` use the other? (After your fix, the old broken data may still be saved. Clear it with `localStorage.clear()` in the Console, then test again.)

</details>
