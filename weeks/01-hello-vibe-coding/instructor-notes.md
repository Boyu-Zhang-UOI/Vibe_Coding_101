# Week 1 — Instructor notes

**What success looks like this week.** After **Studio A**, every student has a page they built with an AI, saved as `index.html` on their own computer, and can point at three parts of its code and say what they do. After **Studio B**, the page is live at `https://[username].github.io`, `PROMPTS.md` is started, and personal AI-use rules v1 are on Canvas. Publishing matters more than polish. If Studio A runs short, cut customization iterations, never the guided tour, the hand changes or "Save your work". If Studio B runs short, cut the three-habits practice to one habit, never publishing or the AI-use rules.

## Prep checklist

### The week before

- [ ] Work through the [pre-cohort checklist](../../instructor/pre-cohort-checklist.md) and confirm the [Tool Handout](../../TOOLS.md) is current, including which preview tool leads week 1 (Gemini Canvas or, for adults, Claude Artifacts).
- [ ] Check your cohort's ages and region. Under-18 or EEA/UK/Swiss cohorts use the stack in [course variants](../../instructor/variants.md#under-18-cohorts); in particular, Claude is 18+ only.
- [ ] Email students a reminder: finish [Before Studio 1](../../setup/README.md#before-studio-1), bring a **personal** Google account (not a school or work one), and know their GitHub password.
- [ ] On Canvas, create: a place to post live URLs (or use the class chat), the "Personal AI-use rules v1" assignment, the AI Fluency response, the weekly reflection, the safety contract and the self-assessment.
- [ ] Prepare the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1) as a Canvas quiz or paper slips.
- [ ] Use a **demo GitHub account** without a user site yet, so you can create `[demo].github.io` live in Studio B.
- [ ] Print the three habits (lab Part B2) as a card, one per student, if you can.
- [ ] Check the [AI Fluency course](https://academy.claude.com/courses/ai-fluency-framework-foundations) still loads and starts without an account, and decide on an equivalent in case it doesn't (checked 21 Oct 2026: "Start course" works without signing in; the academy lists about 4 hours, 14 lessons and a quiz).

### Before Studio A (30 minutes)

Tools change without notice, so test every one yourself, on the classroom network if you can.

- [ ] **Gemini Canvas** with a personal account **and Keep Activity off** (the setting students use): run the demo prompt below. Note where Canvas is in the menus today, whether you can type directly in the Code view (lab Part A4 relies on it), and whether there's a download option. If code editing isn't possible, tell students to use the local-file route or make the hand changes on GitHub in Studio B (the lab describes both).
- [ ] **Fallbacks:** run the same prompt in Claude (Artifacts) and ChatGPT. Confirm what ChatGPT currently shows (preview or plain code block).
- [ ] On each classroom device type you expect (Windows, Mac, Chromebook), check that a downloaded or pasted `index.html` opens in the browser by double-clicking. Part A5 depends on it.
- [ ] Put the [emergency starter page](#emergency-starter-page) on a USB stick or in a shared doc.
- [ ] Open [the slides](slides.md) in a Marp viewer and check they display.

### Before Studio B (15 minutes)

- [ ] **GitHub:** with the demo account, create a throwaway repo, upload a file, and time how long Pages takes to go live. Delete the repo afterwards. Check [githubstatus.com](https://www.githubstatus.com).
- [ ] Have your own demo page ready to show the keyboard (Tab) test and a three-habits prompt.
- [ ] Skim the Studio A checkpoint shares: anyone without a saved `index.html` should start Studio B with the [emergency starter page](#emergency-starter-page) or a fresh build from prompt starter A.

## Studio A run sheet

| Time | Block | What you do |
|---|---|---|
| 0:00–0:10 | Welcome | Introductions (name, one thing you'd like to build). How the course works: two studios a week, materials on the course site, personal writing on Canvas, the 🟢 AI on / 🟡 AI limited / 🔴 AI off labels. No recap this week (from week 2, the first 5 minutes recap the most-missed exit-ticket question) |
| 0:10–0:30 | Concept talk | [The slides](slides.md), Studio A section (16 slides, about 1 minute each). Hold questions to the end of each section |
| 0:30–0:40 | Live demo | Script below |
| 0:40–0:50 | Part A1 | Walk the room. Check every student is on a **personal** Google account, has Keep Activity off, and knows their GitHub username |
| 0:50–1:30 | Part A2 | At 1:00, check everyone has a first preview. Anyone without one: go to them first. At 1:25, announce "five minutes, finish your current iteration" |
| 1:30–1:40 | Break | Remind them not to close the chat tab |
| 1:40–2:00 | Part A3 | Ask two or three students to read you one section of the tour and point at it on the page |
| 2:00–2:20 | Part A4 | Emphasize 🔴 AI off for the hand changes. Circulate and ask students to show you their three changes and name the lines |
| 2:20–2:30 | Part A5 | **Don't skip.** Check every student has an `index.html` that opens by double-click, and a scratch note. With Keep Activity off, the chat won't survive to Studio B |
| 2:30–2:50 | Part A6 (if time) and catch-up | Help anyone behind on A2–A5. Early finishers break it on purpose or try a second assistant |
| 2:50–3:00 | Checkpoint share | Neighbors show each other one hand-changed line; two or three volunteers show theirs on the projector. Preview Studio B: "Bring your saved file" |

### Studio A live demo script (10 minutes)

Aim: model the loop and the habits (four-part prompt, checking "Done when", a change by hand), not show off. Narrate what you are thinking.

1. **(1 min) Set up.** Open Gemini with your personal account and start a new chat. Say: "I checked my privacy settings before class, and Keep Activity is off, so this chat disappears when I close the tab. You'll check yours in Part A1." Turn on Canvas.
2. **(2 min) Describe.** Paste:

   ```text
   Goal: Make an interactive greeting card web page for my friend's birthday.
   Context: I'm a beginner. The card is from Alex to Robin. The mood is over-the-top dramatic, like a movie trailer.
   Constraints: One single HTML file with the CSS and JavaScript inside it. No libraries, no external images or fonts; use emoji or shapes drawn with CSS instead. Works on a phone.
   Done when: The card shows a closed "envelope" first; clicking it opens the card with a message and a small celebration animation; a "Play again" button closes it so it can be opened again.
   ```

   While it generates: "It's predicting the next token, again and again. It has seen thousands of web pages, so this is familiar ground."
3. **(2 min) Run and check.** Open the preview. Read each "Done when" item aloud and test it, including "Play again" and a narrow window. Something is often missing or odd. If it is, say so: "It says it's done. It isn't. This is why we check."
4. **(2 min) Customize.** Send:

   ```text
   Goal: Make the celebration more dramatic.
   Context: The card you just made.
   Constraints: CSS and plain JavaScript only. Keep everything else the same.
   Done when: Opening the card makes emoji confetti fall for about two seconds, and "Play again" still works.
   ```

5. **(2 min) Look inside and change by hand.** Ask: "Which lines set the card's background color? Quote them. Don't change anything." Find the line in the Code view. **Predict aloud** ("If I change this to gold, the card turns gold"), change it by hand, switch to Preview.
6. **(1 min) Save and wrap.** Download the file (or copy it) and say: "Before I close this tab, I save my file. Describe, generate, run, customize, look inside, save. That's the lab. Your turn."

**If Gemini fails during the demo:** switch to Claude Artifacts or ChatGPT in front of the class and say "This is the fallback drill; it happens all course." It's a better lesson than a smooth demo.

## Studio B run sheet

| Time | Block | What you do |
|---|---|---|
| 0:00–0:10 | Show and tell | Two or three volunteers open their saved page in the browser and share one prompt that surprised them |
| 0:10–0:45 | Part B1 | At 0:12, do a 3-minute projector walkthrough of creating the repo and adding `index.html` with the demo account. Then circulate; most problems are repo names and file names |
| 0:45–1:10 | Part B2 | 5-minute mini-lesson (script below), then students practice on a new section |
| 1:10–1:20 | Break | |
| 1:20–1:45 | Part B3 | 1-minute demo of the Tab test on your demo page, then students check their own |
| 1:45–2:00 | Part B4 | `PROMPTS.md`. Students who aren't live yet keep working on B1; B4 can be finished at home |
| 2:00–2:20 | Part B5 | 🔴 AI off: AI tabs closed. 2-minute framing (below), then quiet writing. Rules go on Canvas |
| 2:20–2:30 | Part B6 (if time) and catch-up | Priority: anyone whose page isn't live |
| 2:30–2:45 | Debrief | Gallery walk: open 6–8 posted URLs on the projector. Ask: "What surprised you?", "What did the AI get wrong?", "Which habit changed your result most?", "Whose page came from nearly the same prompt as someone else's?" (revisit "same prompt, different answers") |
| 2:45–3:00 | Exit ticket + homework | 10 minutes exit ticket, 🔴 AI off, AI tabs closed. Say it's scored for completion, not correctness. Then 5 minutes on [the homework](homework.md): the Projects section, the AI Fluency course (show its start page), and the Canvas items |

### Mini-lesson: the three habits (5 minutes)

Use the Studio B slides ("The three habits"). Say where they come from: students in CMU's Fall 2026 15-113 course named them as their top practices in end-of-assignment surveys ([CMU report](https://www.cs.cmu.edu/~113/bestPracticesF26.html); summarized in the [October research update](../../research/landscape-update-2026-10.md#cmus-fall-survey-shows-satisfaction-rising-while-understanding-slips)). Be honest that the report is self-reported and partly AI-summarized; the habits are cheap to try either way.

Demo habit 1 live on your demo page: send the lab's "ask me questions first" prompt and answer one question badly ("whatever you think") so students see the AI make a guess on your behalf. Then answer properly. Mention habit 2's privacy rule (crop the photo) before anyone uploads.

### Framing the AI-use rules (2 minutes)

"The course's labels say where AI is on, limited or off. Inside that, you decide how you want to use it. In one study, students who had written their own rules did better ([Azimi, 2026](https://arxiv.org/abs/2609.16784)). There are no wrong rules, and I won't grade what they say, only that you wrote them. In week 8 you'll compare them with how you actually worked." Then silence. Don't show example rules beyond the one in the lab; students copy examples.

## Common pitfalls

| Pitfall | What to do |
|---|---|
| **School or work Google accounts** often block Gemini or hide Canvas | Personal account. If a student has none, they can create one (it may ask for phone verification) or use a fallback for today |
| **Closed the chat tab before saving** (Keep Activity is off, so the chat is gone) | Expected behavior, not a bug. Rebuild from the same first prompt; the second build is faster. This is why Part A5 exists |
| **A GitHub account managed by an employer or school** may not allow public repositories or Pages | Use a personal GitHub account |
| **Students ask for React, Tailwind or "a real framework"**, or the tool picks React by itself (Artifacts sometimes does) | Insist on "one HTML file, no frameworks, no libraries". A React component won't work when uploaded as `index.html`. Frameworks aren't bad; they need a build step we don't have yet |
| **Never used file download, or can't find the Downloads folder** | Skip the download. Copy the code into a plain-text file (lab "No preview? Run it yourself"), or in Studio B use Option B: create `index.html` on GitHub and paste |
| **Chat formatting pasted in**: the file starts with ` ```html ` | Delete the fence lines; use the tool's copy button next time |
| **Wrong repo name** (`homepage`, `website`, a typo, a missing `.io`) | **Settings → General** → rename to exactly `[username].github.io` |
| **Re-uploading repeatedly** while Pages deploys, leaving `index (1).html` | Explain the 1–2 minute delay; show the Actions tab; delete extra files |
| **Already has a `[username].github.io` repo** | They can reuse it: back up the old `index.html` (rename it `old-index.html`) and upload the new one |
| **Personal data on the page** (surname, employer, photos, email) or in a sketch photo | Remind them the site and repo are public, the URL alone reveals their username, and anything in a photo goes to the AI company |
| **Racing through Part A2 and skipping A3–A4** | The tour and hand changes are the point of the week, and the exit ticket depends on them. Ask them to explain three parts to you before they move on |
| **Students under 18** | Follow [course variants](../../instructor/variants.md#under-18-cohorts): no Claude, and check the other tools' age terms |
| **AI-use rules that copy the course policy word for word** | Fine for v1. Ask one question: "Which of these is about you, not the course?" |

## Differentiation

- **Experienced students (they have coded before):** after the core, ask them to make one feature change entirely by hand (a new section, a second button) before touching the AI again, then do the second-assistant comparison. Ask them to help neighbors by pointing, not by typing on their laptop.
- **Nervous or slower students:** use prompt starter A verbatim; it's fine to stop at 3 customization iterations and make up the rest at home. For Part A4, start with the text change, which is the least intimidating. Pair them with a neighbor who talks through each step with them; each student still builds their own page. In Studio B, publishing comes first; the three habits can shrink to habit 3 only.
- **Students writing prompts in another language:** fine. The assistants handle most major languages. Keep "Done when" concrete.
- **Screen-reader and keyboard users:** code views inside chat tools vary in accessibility. The lab points students to the [Screen reader and keyboard guide](../../resources/accessibility.md) and the local-file route, which lets them use their own editor. The sketch in habit 2 can be a written list.
- **Students with a CDAR accommodation:** apply it as usual; timed parts in this week are soft.

## Fallback plans

| If… | Then… |
|---|---|
| Gemini is down or blocked for everyone | Move the class to Claude Artifacts (adults) or ChatGPT with the "No preview? Run it yourself" route. The prompts work unchanged |
| The network blocks all AI tools | Hand out the [emergency starter page](#emergency-starter-page). Students do Parts A3–A5 with it (the AI tour becomes a pair activity: read the code together and label each part HTML, CSS or JavaScript), and Part A2 becomes homework |
| GitHub Pages is slow | Carry on with Parts B2–B5 while waiting (B2 and B3 work on the saved file too). Show your demo site on the projector |
| GitHub is down in Studio B | Students do B2–B5 on their saved file and publish at home. Check they can open the file in a browser before they leave |
| A student can't get into GitHub (verification email delayed) | Let them do B2–B5 on the saved file today; they publish at home following Part B1 |

## Emergency starter page

A minimal page for students with no working AI tool. It has all three languages and room for the three hand changes. Students save it as `index.html`.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hello, Web</title>
  <style>
    body { font-family: system-ui, sans-serif; background: #f4f1ea; color: #222; margin: 0; }
    main { max-width: 40rem; margin: 0 auto; padding: 2rem 1rem; }
    h1 { font-size: 2.5rem; color: teal; }
    button { font-size: 1rem; padding: 0.6rem 1.2rem; border: none; border-radius: 8px; background: teal; color: white; cursor: pointer; }
    #fact { min-height: 1.5rem; }
  </style>
</head>
<body>
  <main>
    <h1>Hi, I'm Sam</h1>
    <p>I'm learning to build things for the web in Vibe Coding 101.</p>
    <h2>Things I like</h2>
    <ul>
      <li>Hiking</li>
      <li>Board games</li>
      <li>Baking bread</li>
    </ul>
    <button id="fact-button">Tell me a fun fact</button>
    <p id="fact"></p>
  </main>
  <script>
    const facts = [
      "I once baked 12 loaves in one day.",
      "My favorite board game takes 4 hours to play.",
      "I've hiked in three countries."
    ];
    document.getElementById("fact-button").addEventListener("click", () => {
      const pick = facts[Math.floor(Math.random() * facts.length)];
      document.getElementById("fact").textContent = pick;
    });
  </script>
</body>
</html>
```

## Exit ticket

End of Studio B, ten minutes, 🔴 AI off. Use the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1): students explain three parts of their own page in plain English. Skim the tickets the same evening and note the most-missed question: it is the 5-minute recap that opens week 2's Studio A. Students who can't name any part of their page need a five-minute check-in before week 2; they are the ones the research says benefit least from AI help ([landscape report](../../research/landscape-report-2026-09.md#ai-raises-output-but-lowers-understanding-unless-teachers-add-structure)).

## After each studio

**After Studio A**

- [ ] Note who left without a saved `index.html` and message them before Studio B.
- [ ] Note any tool that behaved differently from the lab text (menus, Canvas with Keep Activity off, downloads), and open a tool-change issue or fix the [Tool Handout](../../TOOLS.md).

**After Studio B**

- [ ] Open every posted URL. List students whose site isn't live and message them with the [troubleshooting table](lab.md#troubleshooting).
- [ ] Check that every student submitted AI-use rules v1 on Canvas. Don't comment on their content; keep them for week 8.
- [ ] Pick two students to show their pages in week 2's show and tell.
