# Tool cards

> Print this page (one card per box) or keep it open on the Harness's screen. The **Model** chooses a tool and writes the call. The **Harness** types the matching command into the Codespace terminal (in the project folder, where `package.json` is) and reads the output back **word for word**.

These five tools are a simplified version of what real coding agents have. Real agents also have an "undo", a web browser and many more commands. Today you get only these.

The file names and text on the cards are **examples only**. Don't run them as they are; use whatever the Model asks for.

---

## Card 1 · `list_files`

**What it does:** lists every file in the project (except installed packages and git's own files).

**The Model writes:**

```text
CALL 1: list_files
```

**The Harness runs:**

```bash
find . -type f -not -path "./node_modules/*" -not -path "./.git/*"
```

---

## Card 2 · `read_file`

**What it does:** shows one whole file, with line numbers on the left. The line numbers are **not** part of the file.

**The Model writes:**

```text
CALL 2: read_file lib/format.js
```

**The Harness runs** (with the file name the Model gave):

```bash
cat -n lib/format.js
```

---

## Card 3 · `search`

**What it does:** finds every line, in every file, that contains some text. Shows `file:line:` and the line.

**The Model writes:**

```text
CALL 3: search "formatMoney"
```

**The Harness runs** (with the Model's text inside the quotes):

```bash
grep -rn "formatMoney" --exclude-dir=node_modules --exclude-dir=.git .
```

No output means no matches.

---

## Card 4 · `edit`

**What it does:** replaces an exact piece of text in one file with new text. The old text must appear **exactly once** in the file. If it is not found, or found more than once, **nothing changes** and you get an error. After a successful edit it prints the changed lines.

**The Model writes** three things:

```text
CALL 4: edit
file: lib/format.js
old:  count + ' people'
new:  count + ' guests'
```

**The Harness runs:**

```bash
node scripts/replace.mjs lib/format.js "count + ' people'" "count + ' guests'"
```

Rules for the text:

- Copy the old text **exactly**: same spaces, same quotes, same punctuation. Never include the line numbers from `read_file`.
- For a new line inside the text, write `\n`. Indent with spaces.
- Wrap each text in double quotes `"…"`. If the text itself contains `"`, `$`, `!` or a backtick, the terminal may change it: ask your instructor, or pick a different piece of text.

---

## Card 5 · `run`

**What it does:** runs the project's automated tests and shows which pass (✔) and which fail (✖), with the reason for each failure.

**The Model writes:**

```text
CALL 5: run
```

**The Harness runs:**

```bash
npm test
```

If the output is long, the Harness may turn the screen so the Model can read the **terminal only**: never the editor or the file tree.

---

## Card 6 · Finish

Not a tool: this is how the Model ends its turn. Write a short report to the "user":

```text
DONE
What I changed: <file, line, old → new>
Why: <one sentence>
Evidence: <paste the test summary, e.g. "tests 9, pass 9, fail 0">
Anything I'm unsure about:
```

A report with no evidence does not count. Real agents have claimed tests passed when they had not, so "trust me" is not evidence.
