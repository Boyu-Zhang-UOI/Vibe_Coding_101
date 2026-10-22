# Screen Reader and Keyboard Guide

> How to use the course's tools with a screen reader or the keyboard alone, and how the course handles timed builds, read-aloud activities and video. Also useful if you use zoom, voice control or captions.
> If something in the course doesn't work with your setup, tell your instructor in week 1, or [open an issue](../CONTRIBUTING.md). It's a course problem, not yours.

**On this page:** [Before you start](#before-you-start) · [Chat assistants](#chat-assistants-weeks-13) · [GitHub](#github-on-the-web) · [github.dev and Codespaces](#githubdev-and-vs-code-in-a-codespace) · [DevTools](#browser-devtools) · [Timed builds, read-aloud activities and video](#timed-builds-read-aloud-activities-and-video) · [Accommodations](#asking-for-accommodations) · [Your own pages](#making-your-own-pages-accessible)

---

## Before you start

- **Use the screen reader and browser you know.** Every course tool runs in a web browser, so a current Chrome, Edge or Firefox works well with NVDA or JAWS on Windows, Safari or Chrome with VoiceOver on a Mac, and ChromeVox on a Chromebook.
- **Find commands by name, not by icon.** When a step says "click the icon", you can almost always search for the command instead: the **Command Palette** in VS Code, `?` on GitHub, the **Command Menu** in DevTools. Each is covered below.
- **Every course page is plain text.** Slides are Markdown files (`slides.md` in each week) that you can read directly. Diagrams have text versions: the [Safe Loop](safe-loop.md#the-six-steps) is a numbered list, and the [trust boundary](web-basics.md#the-trust-boundary) is a set of lists. AI-use labels always include words: 🟢 AI on, 🟡 AI limited, 🔴 AI off.
- **Shortcuts are given for Windows (which usually also work on Linux and ChromeOS) and Mac,** with Linux listed separately where it differs. Menus and shortcuts move. If one doesn't work, search the tool's help for "keyboard shortcuts".

## Chat assistants (weeks 1–3)

Chat assistants change their interfaces often, so these are approaches rather than exact keys.

- **Wait for the reply to finish** before reading it. Some screen readers announce a streaming reply in pieces. Then jump to the last reply by heading or by landmark. Code blocks usually have a **Copy** button right after them.
- **Live previews are hard to explore.** The preview panel (Gemini's Canvas, Claude's Artifacts) runs your page inside a frame that some screen readers handle badly, and some previews don't let you type. Copy the code into a file and open it in its own browser tab instead, using the week 1 lab's [No preview? Run it yourself](../weeks/01-hello-vibe-coding/lab.md#no-preview-run-it-yourself). Or publish it on GitHub Pages and test the live page.
- **Ask the assistant for text descriptions.** These prompts help:

  ```text
  Describe the page you just made, element by element, in reading order.
  List every button, link and input box, with its visible label and its accessible name.
  Check the page for accessibility problems: missing labels or alt text, low contrast, headings out of order, anything a keyboard can't reach. List them; don't fix anything yet.
  ```

- **Habit 2, "show, don't describe", doesn't need a drawing.** A structured outline ("header with my name; three project cards in a row; a contact link at the bottom") or a link to a page you like counts as a reference.
- **If your chat tool doesn't work with your setup,** switch to another one from the chat-assistant row of [TOOLS.md](../TOOLS.md). The course prompts work unchanged.

## GitHub on the web

- **Press `?`** on any GitHub page to hear or see its keyboard shortcuts.
- **Useful shortcuts:** `s` or `/` to search, `t` to find a file in a repository, `.` to open the repository in [github.dev](#githubdev-and-vs-code-in-a-codespace), `g` then `c` for the Code tab, `g` then `p` for Pull requests.
- **Single-key shortcuts can clash with your screen reader's quick keys.** GitHub lets you turn character-key shortcuts off in your account's accessibility settings. Menus move; search GitHub's docs for "keyboard shortcuts settings" if you can't find it.
- **Pull requests (weeks 6–7):** in the **Files changed** tab, choose the unified (one-column) view, which reads more simply than split view. To get a whole pull request's diff as plain text, add `.diff` to the end of its address, as in `https://github.com/[username]/[repo]/pull/1.diff`.
- **Edit files in github.dev** (press `.`) rather than in the web page's own editor: github.dev has all the VS Code features below.

## github.dev and VS Code in a Codespace

github.dev (weeks 2–3) and a Codespace (weeks 4–8) are both VS Code running in your browser, so the same features work in both.

| To do this | Windows | Linux | Mac |
|---|---|---|---|
| Run any command by name (the **Command Palette**) | **Ctrl+Shift+P** or **F1** | **Ctrl+Shift+P** or **F1** | **Cmd+Shift+P** or **F1** |
| Get help for the part you're in (**Accessibility Help**) | **Alt+F1** | **Shift+Alt+F1** | **Option+F1** |
| Read the current item as plain text (**Accessible View**): Copilot Chat replies, hovers, suggestions, notifications, terminal output | **Alt+F2** | **Shift+Alt+F2** | **Option+F2** |
| Switch screen reader optimized mode on or off | Command Palette: *Toggle Screen Reader Accessibility Mode* | Same | Same |
| Move between the editor, side bar, panel and status bar | **F6** / **Shift+F6** | **F6** / **Shift+F6** | **F6** / **Shift+F6** |
| Make **Tab** move focus instead of typing a tab (toggle) | **Ctrl+M** | **Ctrl+M** | **Ctrl+Shift+M** |
| Explorer (files) | **Ctrl+Shift+E** | **Ctrl+Shift+E** | **Cmd+Shift+E** |
| Source Control (commits and diffs) | **Ctrl+Shift+G** | **Ctrl+Shift+G** | **Ctrl+Shift+G** |
| Terminal | **Ctrl+`** (backtick) | **Ctrl+`** | **Ctrl+`** |
| Go to a line number (from an error message) | **Ctrl+G** | **Ctrl+G** | **Ctrl+G** |
| Next error or warning | **F8** | **F8** | **F8** |
| Step through a diff line by line (**Accessible Diff Viewer**) | **F7** / **Shift+F7** in a diff | Same | Same |

On a Chromebook, try the Windows keys first; if one doesn't work, run the command by name from the Command Palette. Shortcuts come from [VS Code's accessibility documentation](https://code.visualstudio.com/docs/configure/accessibility/accessibility), which has the full list.

**Tips:**

- **Screen reader mode** is usually switched on automatically when VS Code detects a screen reader. If it isn't, run *Toggle Screen Reader Accessibility Mode* from the Command Palette. Accessibility Help in the editor tells you whether it's on.
- **In a browser, some shortcuts belong to the browser** (such as closing or opening tabs). If a shortcut does the wrong thing, open the Command Palette and type the command's name instead.
- **Copilot Chat:** open the Command Palette, type `chat`, and choose the command that opens the Chat view. After a reply arrives, open the Accessible View (**Alt+F2** on Windows) to read it line by line and copy code.
- **Copilot's grey suggestions** (completions) can be read with the Accessible View. If they get in your way, turn them off and use Chat only ([how](../setup/codespaces.md#turn-copilot-off-for-ai-off-activities)); that's the same setting AI-off activities use.
- **Sounds for errors and events:** VS Code can play a sound for an error line, a warning, a finished task and more. Run *Help: List Signal Sounds* from the Command Palette to choose which.
- **Long terminal output** (`npm test`, error logs): with the terminal focused, open the Accessible View to read it line by line. Or save it to a file and open that: `npm test > test-output.txt 2>&1`. Don't commit that file.
- **git's pager:** `git log` and `git diff` open a scrolling viewer that some screen readers handle badly. Add `--no-pager`, as in `git --no-pager log --oneline`, to print the output straight into the terminal.
- **Prefer a desktop app?** A Codespace can also be opened in the VS Code desktop app, which some screen-reader users find smoother; the Codespace still runs in the cloud. Look for the option to open it in VS Code Desktop (menus move).

## Browser DevTools

You use DevTools from week 1 and constantly from week 4 ([tour](web-basics.md#a-short-devtools-tour)).

| To do this | Windows, Linux, ChromeOS | Mac |
|---|---|---|
| Open DevTools | **F12** or **Ctrl+Shift+I** | **Cmd+Option+I** |
| Open straight to the Console (Chrome, Edge) | **Ctrl+Shift+J** | **Cmd+Option+J** |
| Open straight to the Console (Firefox) | **Ctrl+Shift+K** | **Cmd+Option+K** |
| Run any DevTools command by name (Chrome, Edge: the **Command Menu**) | **Ctrl+Shift+P** with DevTools focused | **Cmd+Shift+P** |
| Switch to the next or previous panel (Chrome, Edge) | **Ctrl+]** / **Ctrl+[** | **Cmd+]** / **Cmd+[** |

- **Command Menu** is the quickest way around: type "Console", "Network", "Application" or "Lighthouse" and press Enter.
- **Errors without DevTools:** in the week 5–8 starters, server errors are written as plain text in the terminal where `npm run dev` runs. To see what your server returns, you can use `curl` in the terminal instead of the Network panel ([how](troubleshooting.md#what-the-starters-messages-mean)).
- **Check what your screen reader will announce:** in Chrome or Edge, the **Accessibility** pane under Elements shows each element's role and accessible name, and the **Lighthouse** panel runs an accessibility audit that lists problems as text. Firefox has an **Accessibility Inspector**. Chrome's own DevTools documentation has a page on using DevTools with assistive technology.

## Timed builds, read-aloud activities and video

These adjustments are open to **everyone**, with or without an accommodation letter.

### Timed builds

The **Game in an Hour** (week 2) and other timed parts are **graded on effort and save points, not speed**, and anyone may do them untimed ([assessment](../assessment/README.md#accommodations)). Pick a game from the [game menu](../weeks/02-prompting-and-save-points/game-menu.md) that suits your setup: turn-based games with keyboard controls and text output (a guessing game, a quiz, a typing test) are much easier to test with a screen reader than fast action games. Ask the AI to announce changes, such as the score, in a status message that screen readers read out (an `aria-live` region).

### Read-aloud activities

- **Be the Agent** (week 6) normally has the Model and the Harness talk aloud. You can run it entirely in typed messages instead, in a shared chat or document. The kit's task and tool cards are Markdown files you can zoom or read with a screen reader. Working alone, use the [solo version](self-paced.md#working-alone-every-pair-activity).
- **Peer explanation swaps, pitches and debriefs:** typed instead of spoken is fine. Ask for a quieter corner if the room is noisy.
- **Oral walkthroughs:** extra time, a written-first version, typed answers, breaks, a quiet room and your own assistive technology are all available ([walkthrough accommodations](../assessment/oral-walkthroughs.md#accommodations)). The examiner can read code aloud if that helps.

### Video

- **Your week 8 demo video** needs captions or a transcript; writing your script first gives you the transcript. If recording or speaking is a barrier, a silent recording with captions or on-screen text, a sequence of screenshots with written narration, or a live 3-minute demo to your instructor all count the same ([week 8 lab](../weeks/08-ship-it/lab.md)).
- **Record somewhere quiet.** If the studio is noisy, record at home later.
- **Recorded concept talks** are posted on Canvas. If one has no captions, ask. Each talk's `slides.md` is the same content in text.
- **Recording studios yourself** is allowed with the instructor's consent or as a CDAR accommodation ([syllabus](../SYLLABUS.md#recording-of-class-sessions)).

## Asking for accommodations

If you believe you need disability-related academic adjustments, contact the University of Idaho's **Center for Disability Access and Resources (CDAR)**. The full statement, address and phone number are in the [syllabus](../SYLLABUS.md#accessibility-and-accommodations).

- **Contact CDAR early,** ideally before the course starts or in week 1. A current CDAR accommodation letter is needed for adjustments beyond those open to everyone, and adjustments are not retroactive.
- **Tell your instructor in week 1** what you use (a screen reader, captions, voice control, extra time) so demos, labs and walkthroughs can be set up for it. You don't have to say why.
- **Everything on this page is open to all students** without a letter: untimed timed builds, typed answers, the video alternatives, the tool approaches above. The full list is in [assessment/README.md](../assessment/README.md#accommodations).

Following the course on your own? Use any of these adjustments freely; see the [self-paced path](self-paced.md).

## Making your own pages accessible

The same skills make your own projects usable by everyone. Week 1 Studio B has an accessibility check of your home page, and week 8 has a full polish pass ([polish checklist](../weeks/08-ship-it/polish-checklist.md)). The quick version:

1. **Keyboard test:** put the mouse away and press **Tab** through the page. You should reach and use every button and field with Tab, Enter and Space, and always see where you are.
2. **Screen reader test:** listen to the page from the top. Do the headings make an outline? Does every image have [alt text](glossary.md#alt-text), and every field a label?
3. **Audit:** run DevTools' **Lighthouse** accessibility audit and fix what it lists, most serious first.

More: [accessibility in the glossary](glossary.md#accessibility).
