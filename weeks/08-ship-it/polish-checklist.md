# Polish checklist

> A practical, tickable list for the week 8 polish sprint. Work top to bottom; each item is small.
> For every fix: make one change, test it, read the diff, commit ([Safe Loop](../../resources/safe-loop.md)).
> Not every item applies to every app — skip what genuinely doesn't, but say why.

## How to use it

Go through your **live** site (the deployed URL), not just localhost. Test on a phone-sized window
(your browser's device toolbar, or your actual phone). Fix the quick wins first.

---

## 1. The three states: empty, loading, error

- [ ] **Empty state.** Open the app with no data (new user, empty list). Does it show something
      helpful ("No notes yet — add one above"), not a blank screen or a broken layout?
- [ ] **Loading state.** For anything that waits (an API call, a database read), is there a spinner,
      a "Loading…" line, or a disabled button, so the app doesn't look frozen?
- [ ] **Error state.** Force a failure (turn off wifi, submit bad input). Does the app show a friendly
      message that says what to do next, instead of freezing or doing nothing?

✅ **Checkpoint:** you triggered all three states on purpose and each looks intentional.

## 2. Works on a phone

- [ ] There's a viewport tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`.
- [ ] Nothing overflows sideways; no horizontal scrollbar at phone width.
- [ ] Buttons and links are big enough to tap (roughly 44px).
- [ ] Text is readable without zooming.

## 3. Identity: title, favicon, headings

- [ ] The browser tab shows a real **`<title>`**, not "Untitled" or "Document".
- [ ] There's a **favicon** (even a simple emoji or a small PNG) so the tab isn't blank.
- [ ] There is exactly one main **`<h1>`**, and headings go in order (don't skip levels for styling).

## 4. Accessibility basics

- [ ] Every meaningful **image has `alt` text**. Purely decorative images have `alt=""`.
- [ ] Every input has a **`<label>`** (or an `aria-label`), so it's clear what to type.
- [ ] **Color contrast** is strong enough to read (dark text on light, or the reverse). If unsure,
      run a free contrast checker or your browser's accessibility panel.
- [ ] You can use the whole app with the **keyboard only** (Tab to move, Enter/Space to activate).
- [ ] The element you're on shows a **visible focus outline** (don't remove it in CSS without a
      replacement).
- [ ] Nothing important is signaled by **color alone** (add text or an icon too).

✅ **Checkpoint:** you tabbed through the entire app with no mouse and could see and use everything.

## 5. Content and copy

- [ ] No leftover placeholder text ("Lorem ipsum", "TODO", "rest of code here").
- [ ] Buttons say what they do ("Save note", not "Submit").
- [ ] Numbers and dates are formatted for a human, not raw.
- [ ] Spelling checked (your editor or a quick read-through).

## 6. README a stranger can follow

Use [templates/PROJECT_README.md](../../templates/PROJECT_README.md). Confirm it has:

- [ ] One sentence saying what it does and who it's for.
- [ ] The **live URL** and the **demo video** link.
- [ ] A screenshot.
- [ ] How to run it locally (`npm install`, `.env` from `.env.example`, `npm run dev`).
- [ ] A short "how it works" (which files matter, where data goes, where secrets live).
- [ ] The one-line **"Authorization is enforced in: …"** answer.
- [ ] Credits for any code, images, fonts or APIs you reused.

✅ **Checkpoint:** a classmate got your app running from the README alone (the week-7 handoff test).

## 7. Final technical pass

- [ ] `npm test` passes.
- [ ] `npm run check:secrets` finds nothing.
- [ ] The deployed URL actually works in a fresh browser (try a private window).
- [ ] Your `SECURITY_CHECKLIST.md` is complete (do the [final security pass](lab.md#part-2--final-security-pass-15-min)).
- [ ] The browser console shows no red errors on the live site.

## 8. The little things (optional but nice)

- [ ] A short, clear app name and one-line tagline on the page.
- [ ] Consistent spacing and alignment.
- [ ] A "reduced motion" fallback if you use animation.
- [ ] A visible link back to your repo (open source is honest).

---

When you can tick section 1-7, your capstone is **shippable**. Commit, then record your demo video
and rehearse ([lab.md](lab.md#part-3--record-your-demo-video-20-min)).
