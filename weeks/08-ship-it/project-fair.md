# Project Fair

> The closing event of the course, in week 8 Studio B. A gallery walk (science-fair style), so everyone presents and everyone tries each other's apps, plus a few spotlight demos and peer voting. It takes about 90 minutes, with 10 minutes of set-up before it.
> Written for a class of **5 or more students**. Smaller class? See [Small classes](#small-classes).

## The idea

Not everyone presenting to a silent room. Instead: **half the class presents at stations while the other half walks around and tries their apps, then they swap.** Two rounds means everyone both presents and visits. It's low-pressure and hands-on, and every project gets real users.

Your oral walkthrough 3 is already done by now (it's in Studio A, or by appointment before the Fair), so the Fair is about showing your work, not being examined. Your votes and the votes you receive don't affect anyone's grade; taking part counts toward Studio B's participation.

## What each presenter brings

- The **live app** at its production URL, open on a laptop or phone, ready to hand to a visitor.
- A one-line problem statement you can say in 10 seconds.
- Your **known issues**: your README's "Known issues and next steps" section open in a tab, or the top one or two on a sticky note.
- Your **demo video** queued as a backup if the live app hiccups.
- A sign or sticky note with the app's name and its URL or QR code.

## Format

### Two rounds (gallery walk)

- **Round A (25 min):** Group 1 stands at their stations; Group 2 visits, tries apps, asks questions, fills in feedback cards and votes.
- **Swap (5 min).**
- **Round B (25 min):** Group 2 presents; Group 1 visits.

Presenters give a **60–90 second** pitch when a visitor arrives: problem → quick demo → one thing you're proud of → **one known issue**. Then **hand the app over** and let the visitor try it. With 5–6 students, visitors spend about 8–10 minutes at each station; with 10, about 5.

### Spotlight demos (15 min)

Pick **3–4** projects to demo to the whole room for about 3 minutes each. Choose a spread: one strong build, one great recovery story, one with a clear known-issues section, one that shows a security feature (such as its RLS policies). Rotate who gets picked across cohorts so it isn't always the same students. Presenting a spotlight is always optional.

## Run sheet

| Time | What | Who |
|---|---|---|
| Before (10 min) | Set up stations; post every URL and QR code in one shared list | All |
| 0:00–0:05 | Explain the format; hand out feedback cards and voting slips; split into Group 1 (presents first) and Group 2 | Instructor |
| 0:05–0:30 | **Round A:** Group 1 presents, Group 2 visits and votes | All |
| 0:30–0:35 | Swap | All |
| 0:35–1:00 | **Round B:** Group 2 presents, Group 1 visits and votes | All |
| 1:00–1:15 | **Spotlight demos** (3–4 projects, about 3 minutes each) | Selected |
| 1:15–1:25 | Presenters read their feedback cards; instructor tallies votes | All |
| 1:25–1:30 | Buffer; awards are announced in the closing debrief | Instructor |

> [!TIP]
> For a class larger than about 16, run three rounds of thirds instead of two halves, or spread the Fair across two studio slots. Keep each presenter's audience small so apps actually get used.

## Peer voting categories

Give each student a few votes (sticky dots or slips). Vote for projects other than your own. Use **Clearest known issues** plus 3–4 others:

- **Clearest known issues**: told me honestly what doesn't work yet, and what they'd do about it. (Always included: the course gives credit for this.)
- **Most useful**: I'd actually use this.
- **Best recovery story**: the best "what broke and how I fixed it".
- **Most secure**: clearest access rules; thought hard about safety.
- **Best spec**: the app matches a clear, well-written spec.
- **Crowd favorite**: overall.
- (Optional) **Most accessible**, **Best README**, **Most surprising**.

Keep it celebratory, not competitive: everyone who ships gets recognized, and the categories spotlight different strengths so many students win something.

## Feedback cards

Print a stack, or use the digital form your instructor shares. Each visitor fills in one card per app they try, with **AI off** (🔴): it's your own opinion, addressed to a person. Keep it short:

1. **App:** [app name] · **Visitor:** [first name or GitHub username, optional]
2. **I tried:** what you did in the app.
3. **One thing I liked:**
4. **One thing I'd improve:**
5. **Did the presenter tell you one thing that doesn't work yet?** yes / no
6. **Did it work from the app alone, with no help?** yes / mostly / no

Presenters keep their cards. They're honest user feedback and good material for the final reflection and for one last fix. Don't photograph or commit them to a repo.

## Accessibility considerations

- **Stations:** leave clear paths for wheelchair and mobility access; don't cram tables.
- **Noise:** a loud room is hard for some people. Offer a quieter corner, and let anyone present their video with headphones instead of a live pitch.
- **Presenting is flexible in form:** a student who can't give a live spoken pitch may play their demo video and answer questions in writing or chat.
- **Standing:** provide chairs; nobody has to stand for the whole event.
- **Visuals:** ask presenters to zoom their app to a readable size; remind everyone that color-only cues are hard to see.
- **Feedback cards:** offer the digital form for anyone who prefers typing or uses a screen reader.

More on how the course handles timed and spoken activities: [Accessibility guide](../../resources/accessibility.md).

## Online/hybrid variant

Run the same shape in a video call:

- **Stations = breakout rooms.** Each Group 1 presenter hosts a breakout room with their screen shared; Group 2 members drop into rooms, watch a quick demo, try it from the production URL, and fill in the **digital feedback form**. Swap for Round B.
- **Spotlights** happen in the main room with screen sharing.
- **Voting** by a poll or a shared form.
- Ask presenters to share the **production URL in chat** so visitors use the app, not just watch.
- Record only with everyone's consent; cameras stay optional.

For a **hybrid** room (some in person, some remote), pair each remote presenter with an in-person buddy who carries a laptop to their station, and put all URLs and QR codes in a shared list so both audiences can reach every app.

## Small classes

With fewer than 5 students, a gallery walk has too few visitors. Instead, each student gets a **public demo slot** your instructor arranges (a department seminar, a lab meeting, or invited staff), plus **three outside testers** who use the feedback card on made-up data. There's no voting; the "clearest known issues" credit stays. Details for instructors: [Course variants](../../instructor/variants.md); for students working alone: the [Self-paced path](../../resources/self-paced.md).

## After the Fair

- Announce the category winners in the closing debrief; thank everyone for shipping.
- Remind students the **final submission** is still due: production URL plus a screenshot, the `v1.0` release, the demo video and the final reflection on Canvas ([homework](homework.md)).
- Encourage students to keep their repos as a portfolio and to follow the [Keep going roadmap](homework.md#keep-going-roadmap-after-the-course).
