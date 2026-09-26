# SPEC: Study Session Timer & Log

> [!NOTE]
> **This is an example spec** for a made-up student called Sam. It follows [templates/SPEC.md](../../templates/SPEC.md) exactly, so you can see what "good" looks like before you write your own.
> Don't copy it. You may build a study timer for Project 1 if it's a tool you'd really use, but your spec must be your own words about your own needs. Notes on why this spec works are at the [bottom of the page](#why-this-spec-works).

> **One page.** Write this yourself. You may ask an AI to *critique* it ("What is ambiguous? What edge cases am I missing?"), but not to write it. 🟡
> A good spec lets a classmate, or an AI agent, build the right thing without asking you questions.

**Author:** Sam (example student) · **Last updated:** 2026-09-25

## 1. Problem

I study in short bursts between work shifts, and by Friday I have no idea how much time I actually gave each course. My phone's timer doesn't keep a record, and a spreadsheet is too fiddly to update on the bus. I want to see, at a glance, how many minutes I studied each subject this week, so I notice the course I'm neglecting before the exam, not after.

## 2. User

Me. I'm a part-time student taking three courses (Biology, Spanish, Statistics). I study 3–5 times a day, for 20–50 minutes at a time, on my laptop at the library and on my phone on the bus. I don't want an account or a login. I just want to open a page, press Start, and forget about it.

## 3. User stories

- **MUST**: As a student, I want to start and stop a timer for a subject, so that my study time is recorded without me doing arithmetic.
- **MUST**: As a student, I want to set up my subjects once, so that I can pick one instead of retyping it every time.
- **MUST**: As a student, I want my log to still be there tomorrow, so that I can see a whole week.
- **MUST**: As a student, I want to see this week's total minutes for each subject, so that I notice which course I'm neglecting.
- **SHOULD**: As a student, I want to delete a session I logged by mistake, so that my totals stay honest.
- **COULD**: As a student, I want to add a session I forgot to time, so that my log is complete.
- **COULD**: As a student, I want a soft sound after 25 minutes, so that I remember to take a break.

## 4. Acceptance criteria

Each criterion must be something you can check by using the app. Format: **WHEN** *situation or action*, **THE APP SHALL** *observable result*.

| ID | Criterion | Priority | Passes? |
|---|---|---|---|
| AC1 | WHEN I type a new subject name and press **Add subject**, THE APP SHALL add it to the subject menu and select it. | MUST | ☐ |
| AC2 | WHEN I press **Add subject** with an empty box, or with a name that is already in the menu (ignoring capital letters), THE APP SHALL add nothing and SHALL show "Type a new subject name." | MUST · edge case | ☐ |
| AC3 | WHEN I pick a subject and press **Start**, THE APP SHALL show a timer in minutes and seconds (mm:ss) that goes up once a second, and SHALL change the Start button to **Stop**. | MUST | ☐ |
| AC4 | WHEN I press **Stop** after the timer has run for at least 1 minute, THE APP SHALL add a session to the top of the log showing the subject, today's date and the whole minutes (rounded down), and SHALL reset the timer to 00:00. | MUST | ☐ |
| AC5 | WHEN I press **Stop** before 1 minute has passed, THE APP SHALL NOT add a session and SHALL show "Sessions under 1 minute aren't saved." | MUST · edge case | ☐ |
| AC6 | WHEN I reload the page, or close the browser and open the page again, THE APP SHALL show the same subjects, log and weekly totals as before. | MUST · edge case | ☐ |
| AC7 | WHEN the log contains sessions, THE APP SHALL show each subject's total minutes for the current week (Monday to Sunday), and SHALL NOT count sessions from earlier weeks. | MUST · edge case | ☐ |
| AC8 | WHEN I press **Delete** on a session and confirm, THE APP SHALL remove only that session and update the weekly totals; WHEN I cancel, THE APP SHALL change nothing. | SHOULD | ☐ |

## 5. Out of scope

Things I am deliberately **not** building in version 1:

- Accounts, login, or syncing between my phone and laptop. (Each browser keeps its own log. I accept that.)
- Keeping a running timer alive if I reload or close the tab. (See open questions.)
- Editing a past session. I'll delete it and time it again.
- Renaming or deleting subjects.
- Charts, streaks, badges or goals.
- Reminders or notifications when the tab is closed.
- Exporting to a spreadsheet or PDF.
- Anything about other people: study groups, sharing, leaderboards.

## 6. Constraints

- **Technology:** plain HTML, CSS and JavaScript in three files (`index.html`, `style.css`, `app.js`). No frameworks, no libraries, no build step.
- **Data:** saved in this browser with localStorage, under the key `study-log`, as JSON. Nothing is sent over the internet.
- **Must work on:** current Chrome, Firefox and Safari, on a phone screen 375 pixels wide and on a laptop.
- **Never:** real payments, real personal data about other people, secrets in front-end code.

## 7. Wireframe

Paper sketch: `docs/wireframe.jpg` (photographed, then screenshotted so the photo carries no location data). Text version:

```
+----------------------------------------------+
|  Study Log                                   |
|                                              |
|  Subject: [ Biology       v ]                |
|  New subject: [____________] [Add subject]   |
|                                              |
|                  25:13                       |
|               [   Stop   ]                   |
|  (message area: "Sessions under 1 minute…")  |
|                                              |
|  This week (Mon–Sun)                         |
|    Biology ............ 95 min               |
|    Spanish ............ 40 min               |
|                                              |
|  Log                                         |
|    Tue 23 Sep  Biology   25 min   [Delete]   |
|    Tue 23 Sep  Spanish   40 min   [Delete]   |
|    Mon 22 Sep  Biology   70 min   [Delete]   |
+----------------------------------------------+
```

## 8. Open questions

- If I reload while the timer is running, should the session be lost, or should the app remember the start time and keep counting? *(Version 1: it is lost. Listed in Out of scope.)*
- What should Start do on my first visit, when there are no subjects yet? *(Plan: Start is disabled, and the menu reads "Add a subject first".)*
- Round down, or to the nearest minute? *(AC4 says down. A 1:59 session counts as 1 minute. Is that fair?)*
- What if I forget to press Stop and it runs for 5 hours? Should there be a maximum, or a question like "Still studying?"
- Does my week start on Monday? *(Assumed yes. Many calendars start on Sunday.)*
- A session that starts at 23:50 and ends at 00:20: which day does it belong to? *(Plan: the day it started.)*

---

## Why this spec works

Use these notes to check your own spec in lab Part 2.

| What to notice | Where | Why it matters |
|---|---|---|
| The problem names a real person and a specific pain ("by Friday I have no idea…") | §1–2 | A builder or an AI has to guess much less. It also tells you when the app is good enough |
| Only four MUST stories | §3 | Version 1 stays small enough to build in a few evenings. The extras are SHOULD or COULD, not forgotten |
| Every criterion can be checked by using the app, in under a minute | §4 | "Easy to use" can't be checked. "SHALL show 'Type a new subject name.'" can |
| The exact message text is in quotes | AC2, AC5 | Two people testing the app will agree on pass or fail |
| One edge case per risky feature: empty and duplicate input, a too-short session, reloading, the start of a new week | AC2, AC5, AC6, AC7 | AI-built apps usually get the normal case right and the edges wrong |
| "SHALL NOT" is used where doing nothing is the correct result | AC5, AC7 | It makes "doing nothing" something you can test |
| The out-of-scope list names what an AI is likely to add on its own: login, charts, sync | §5 | It stops you, and the AI, from wandering. It also explains a limitation (separate logs per device) in advance |
| Tentative answers are written next to open questions | §8 | The spec is honest about what isn't decided, but still gives a default to build |

### The same idea, written weakly

Compare this with the table above. Every line here would leave a builder guessing:

> *"A study timer app. Users can time their study sessions and see stats. It should be fast, nice-looking and easy to use, and save everything."*

- **Who** is the user, and what is their problem? (Missing.)
- **"Users"** suggests accounts and many people. (A builder may add a login you don't want.)
- **"See stats"**: which stats? Per day, per week, per subject? (Untestable.)
- **"Fast, nice-looking, easy to use"**: no one can check these. (Vibes, not criteria.)
- **"Save everything"**: where, and for how long? (Local? Cloud? Across devices?)
- **Nothing is out of scope**, so everything is in scope.
