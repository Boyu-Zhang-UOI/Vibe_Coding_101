# Week 1 — Instructor notes

**What success looks like tonight:** every student leaves with a page live at `https://<username>.github.io`, a started `PROMPTS.md`, and the ability to point at three parts of their code and say what they do. Publishing matters more than polish. If time runs short, cut customization iterations, never Part 2.

## Prep checklist

### The week before

- [ ] Work through [instructor/pre-cohort-checklist.md](../../instructor/pre-cohort-checklist.md) and confirm [TOOLS.md](../../TOOLS.md) is current.
- [ ] Check your cohort's ages and region. Under-18 or EEA/UK/Swiss cohorts use the stack in [instructor/variants.md](../../instructor/variants.md#under-18-cohorts); in particular, Claude is 18+ only.
- [ ] Email students a reminder: finish week 0 ([setup/README.md](../../setup/README.md)), bring a **personal** Google account (not a school or work one), and know their GitHub password.
- [ ] Set up a place for students to post their live URLs (class chat channel, shared doc or form).
- [ ] Prepare the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1) as paper slips or a form.
- [ ] Use a **demo GitHub account** without a user site yet, so you can create `<demo>.github.io` live in the Part 3 walkthrough.

### The morning of class (30 minutes)

Tools change without notice, so test every one yourself, on the classroom network if you can.

- [ ] **Gemini Canvas** with a personal account: run the demo prompt below. Note where Canvas is in the menus today, whether you can type directly in the Code view (lab Part 2.2 relies on it), and whether there's a download option. If code editing isn't possible, tell students to do the hand changes on GitHub after Part 3 (the lab already describes this route).
- [ ] **Fallbacks:** run the same prompt in Claude (Artifacts) and ChatGPT. Confirm what ChatGPT currently shows (preview or plain code block).
- [ ] **GitHub:** with the demo account, create a throwaway repo, upload a file, and time how long Pages takes to go live. Delete the repo afterwards. Check [githubstatus.com](https://www.githubstatus.com).
- [ ] Put the [emergency starter page](#emergency-starter-page) on a USB stick or in a shared doc.
- [ ] Open [slides.md](slides.md) in a Marp viewer and check it displays.

## Run sheet

| Time | Block | What you do |
|---|---|---|
| 0:00–0:10 | Welcome | Introductions (name, one thing you'd like to build). Show where materials live. No homework demos this week |
| 0:10–0:30 | Concept talk | [slides.md](slides.md), 19 slides, about 1 minute each. Hold questions to the end of each section |
| 0:30–0:40 | Live demo | Script below |
| 0:40–0:50 | Lab Part 0 | Walk the room. Check every student is on a **personal** Google account and knows their GitHub username |
| 0:50–1:20 | Lab Part 1 | At 1:00, check everyone has a first preview. Anyone without one: go to them first. At 1:15, announce "five minutes, finish your current iteration" |
| 1:20–1:30 | Break | |
| 1:30–1:50 | Lab Part 2 | Emphasize 🔴 for the hand changes. Circulate and ask students to show you their three changes and name the lines |
| 1:50–2:10 | Lab Part 3 | At 1:50, do a 3-minute projector walkthrough of 3.2–3.4 with the demo account. Then circulate; most problems are repo names and file names |
| 2:10–2:20 | Lab Part 4 | `PROMPTS.md`. Students who haven't published yet keep working on Part 3; Part 4 can be homework |
| 2:20–2:45 | Debrief | Gallery walk: open 6–8 posted URLs on the projector. Ask: "What surprised you?", "What did the AI get wrong?", "Whose page came from nearly the same prompt as someone else's?" (use this to revisit "same prompt, different answers") |
| 2:45–3:00 | Exit ticket + homework | 10 minutes exit ticket, 🔴 no AI, laptops closed or AI tabs closed. Then 5 minutes on [homework.md](homework.md); stress the Projects section and the safety contract |

## Live demo script (10 minutes)

Aim: model the loop and the habits (four-part prompt, checking "Done when", a change by hand), not show off. Narrate what you are thinking.

1. **(1 min) Set up.** Open Gemini with your personal account and start a new chat. Say: "I checked my privacy settings before class; you'll check yours in Part 0." Turn on Canvas.
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
6. **(1 min) Wrap.** "Describe, generate, run, customize, and then look inside. That's the lab. Your turn."

**If Gemini fails during the demo:** switch to Claude Artifacts or ChatGPT in front of the class and say "This is the fallback drill; it happens all course." It's a better lesson than a smooth demo.

## Common pitfalls

| Pitfall | What to do |
|---|---|
| **School or work Google accounts** often block Gemini or hide Canvas | Personal account. If a student has none, they can create one (it may ask for phone verification) or use a fallback for today |
| **A GitHub account managed by an employer or school** may not allow public repositories or Pages | Use a personal GitHub account |
| **Students ask for React, Tailwind or "a real framework"**, or the tool picks React by itself (Artifacts sometimes does) | Insist on "one HTML file, no frameworks, no libraries". A React component won't work when uploaded as `index.html`. Frameworks aren't bad; they need a build step we don't have yet |
| **Never used file upload, or can't find the Downloads folder** | Skip the download. Option B in lab step 3.3: create `index.html` on GitHub and paste |
| **Chat formatting pasted in**: the file starts with ` ```html ` | Delete the fence lines; use the tool's copy button next time |
| **Wrong repo name** (`homepage`, `website`, a typo, a missing `.io`) | Settings → General → rename to exactly `<username>.github.io` |
| **Re-uploading repeatedly** while Pages deploys, leaving `index (1).html` | Explain the 1–2 minute delay; show the Actions tab; delete extra files |
| **Already has a `<username>.github.io` repo** | They can reuse it: back up the old `index.html` (rename it `old-index.html`) and upload the new one |
| **Personal data on the page** (surname, employer, photos, email) | Remind them the site and repo are public; the URL alone reveals their username |
| **Racing through Part 1 and skipping Part 2** | Part 2 is the point of the week, and the exit ticket depends on it. Ask them to explain three parts to you before they publish |
| **Students under 18** | Follow [instructor/variants.md](../../instructor/variants.md#under-18-cohorts): no Claude, and check the other tools' age terms |

## Differentiation

- **Experienced students (they have coded before):** after the core, ask them to make one feature change entirely by hand (a new section, a second button) before touching the AI again, then do the second-assistant comparison from the homework stretch. Ask them to help neighbors by pointing, not by typing on their laptop.
- **Nervous or slower students:** use starter prompt A verbatim; it's fine to stop at 3 customization iterations and make up the rest at home. For Part 2.2, start with the text change, which is the least intimidating. Pair them with a neighbor who talks through each step with them; each student still builds their own page.
- **Students writing prompts in another language:** fine. The assistants handle most major languages. Keep "Done when" concrete.
- **Screen-reader users:** code views inside chat tools vary in accessibility. The local-file route (lab section "No preview? Run it yourself") lets them use their own editor.

## Fallback plans

| If… | Then… |
|---|---|
| Gemini is down or blocked for everyone | Move the class to Claude Artifacts (adults) or ChatGPT with the "No preview? Run it yourself" route. The prompts work unchanged |
| The network blocks all AI tools | Hand out the [emergency starter page](#emergency-starter-page). Students do Parts 2–4 with it (the AI tour becomes a pair activity: read the code together and label each part HTML, CSS or JavaScript), and Part 1 becomes homework |
| GitHub Pages is slow | Carry on with Part 4 while waiting. Show your demo site on the projector |
| GitHub is down | Students save `index.html` on their computer and publish at home. Check they can open the file in a browser before they leave |
| A student can't get into GitHub (verification email delayed) | Let them build and do Part 2 today; they publish at home following Part 3 |

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

Ten minutes, 🔴 no AI. Use the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1): students explain three parts of their own page in plain English. Skim the tickets the same evening. Students who can't name any part of their page need a five-minute check-in before next week's lab; they are the ones the research says benefit least from AI help ([landscape report](../../research/landscape-report-2026-09.md#ai-raises-output-but-lowers-understanding-unless-teachers-add-structure)).

## After class

- [ ] Open every posted URL. List students whose site isn't live and message them with the [troubleshooting table](lab.md#troubleshooting).
- [ ] Note any tool that behaved differently from the lab text, and open a tool-change issue or fix [TOOLS.md](../../TOOLS.md).
- [ ] Pick two students to show their pages in week 2's show-and-tell.
