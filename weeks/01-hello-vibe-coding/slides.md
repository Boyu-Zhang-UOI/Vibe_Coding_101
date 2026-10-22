---
marp: true
theme: default
paginate: true
header: "Vibe Coding 101 · Week 1"
footer: "CC BY 4.0"
---

# Hello, Vibe Coding

Week 1: what vibe coding is, and how an AI writes code

<!--
Speaker notes (0:10, about 30 seconds).
Studio A concept talk: 16 slides, about 18 minutes. The last five slides are for Studio B's mini-lessons.
Welcome everyone. By the end of this week every person in this room will have a web page live on the public internet, with an address they can text to a friend. Nobody needs to have written code before.
Today: this talk, a 10-minute demo, then you build. Next studio: you publish.
-->

---

## By the end of this week you will have…

- A personal web page, **live on the internet**
- A rough idea of **how the AI made it**
- Three changes you made **with your own hands**
- Your own **rules** for using AI

<!--
Speaker notes (about 1 minute).
Today, Studio A: build the page, look inside it, change it by hand. Studio B: publish it, sharpen your prompts, check it works for everyone, and write your own AI rules.
The third bullet matters most: today you will change the code yourself, with the AI switched off. That is the thread through the whole course.
-->

---

## "Vibe coding" (Karpathy, February 2025)

- Describe what you want
- Accept everything the AI writes
- Don't read the code; paste errors back in

> "forget that the code even exists"

<!--
Speaker notes (about 1.5 minutes).
Andrej Karpathy, a well-known AI researcher, coined the term in a post on 2 February 2025. He described accepting every change the AI suggested, not reading the diffs, and pasting error messages back without comment. Source: his post is reproduced in Geng et al., arXiv 2507.22614 (https://arxiv.org/pdf/2507.22614).
Key point: he said this was fine for throwaway projects. He was not describing how to build a bank.
Collins made "vibe coding" its 2025 Word of the Year (https://www.cnn.com/2025/11/06/tech/vibe-coding-collins-word-year-scli-intl), so you will hear it everywhere, often meaning different things.
-->

---

## Fine for toys. Not for things you keep.

What if people **use** it, **trust** it, or **pay** for it?

Willison's golden rule: don't commit code you couldn't **explain** to someone else.

Course version: *If you can't explain it, you didn't build it.*

<!--
Speaker notes (about 1.5 minutes).
Ask the room: what could go wrong if you never read the code of an app that other people log into? Take two answers. Expected: it leaks data, it breaks and you can't fix it, it costs money. In week 7 we'll look at real cases.
Simon Willison, a respected developer, wrote in March 2025 that not all AI-assisted programming is vibe coding. His golden rule: he won't commit code he couldn't explain exactly to someone else (https://simonwillison.net/2025/Mar/19/vibe-coding/). You read that post in week 2.
"Commit" means save into your project's history; you'll do it for real in Studio B.
This is the rule we grade by. You may use AI for almost everything. You must be able to explain what you submit. This week's exit ticket asks you to explain three parts of your own page.
-->

---

## A spectrum, not a switch

- **Vibe coding:** build a prototype fast; don't read the code
- **Agentic engineering:** spec it, test it, review it, own it
- This course walks you from the first to the second, **one habit a week**

<!--
Speaker notes (about 1 minute).
By 2026 Karpathy described two tiers. Vibe coding "raises the floor": anyone can build a prototype or a personal tool. Agentic engineering is the professional discipline of directing AI agents while keeping quality, security and maintainability. He is clear that you are still responsible for your software and its security (https://karpathy.bearblog.dev/sequoia-ascent-2026/).
Week 1 sits at the vibe-coding end on purpose. Each week adds one habit that moves you along: prompts, save points, specs, reading and debugging, secrets, agents, security, shipping.
-->

---

## How does an AI write code?

It **predicts the next token**, over and over.

A token is a word or piece of a word.

Code is just text, so it predicts code too.

<!--
Speaker notes (about 1.5 minutes).
An LLM, a large language model, was trained on a huge amount of text and code from the internet and books. From all that, it learned patterns: what usually comes next.
Demo idea (10 seconds): say "Twinkle, twinkle, little..." and let the room finish it. That is next-token prediction. You didn't look anything up; you know the pattern.
When you ask for a web page, it writes the most likely next token, then the next, until the page is done. It is very good at patterns it has seen many times, and web pages are extremely common.
-->

---

## It only sees its context window

- Your messages and its replies in **this chat**
- Anything you **paste in**
- Not your screen. Not your files. Not other chats.

<!--
Speaker notes (about 1 minute).
The context window is everything the model can "see" at the moment it answers. If you changed the code by hand and didn't paste it back, the AI doesn't know. If you start a new chat, it starts from zero.
Most "the AI is being stupid" moments are really "the AI didn't have the information". Next week this becomes the Context part of every prompt.
-->

---

## Same prompt, different answers

Ask twice, get two different pages.

That's normal: it picks among likely next tokens.

<!--
Speaker notes (about 1 minute).
The model doesn't always pick the single most likely token; there is some randomness, which is why it can be creative. So your neighbor's page from the same prompt will look different from yours.
Practical consequences: if an answer is bad, asking again (or rephrasing) can help. And you can't assume a fix that worked for your friend will come out the same way for you.
-->

---

## Confident mistakes

- It **invents** plausible things (*hallucination*)
- **Knowledge cutoff**: it misses recent changes
- Equally sure when wrong

**So: run it, read it, check it.**

<!--
Speaker notes (about 1 minute).
The model produces plausible text, not verified facts. It can invent a function that doesn't exist, a setting that isn't there, or a package name nobody published. It says all of this with the same confidence.
Knowledge cutoff: it was trained up to some date. Tools change monthly. That's why the course keeps a dated Tool Handout (TOOLS.md) instead of trusting what an AI says about its own pricing or menus.
The response is not fear, it's checking. Today "checking" means: does the preview do what you asked?
-->

---

## What is a web page?

A text file your **browser** reads and runs.

| Language | Job |
|---|---|
| **HTML** | Structure: what's on the page |
| **CSS** | Style: how it looks |
| **JavaScript** | Behavior: what happens when you click |

<!--
Speaker notes (about 1 minute).
Analogy if helpful: HTML is the walls and rooms of a house, CSS is the paint and furniture, JavaScript is the electricity: switches that make things happen.
The browser (Chrome, Safari, Firefox, Edge) is the program that reads this file and draws the page. Nothing needs installing.
-->

---

## One file, three languages

```html
<h1 id="hi">Hi, I'm Sam</h1>
<button onclick="wave()">Wave</button>
<style> h1 { color: teal; } </style>
<script>
  function wave() { document.getElementById("hi").textContent = "Hi there!"; }
</script>
```

<!--
Speaker notes (about 1.5 minutes).
Point at each line. The h1 and button are HTML: things on the page. The style block is CSS: it says headings are teal. The script block is JavaScript: a function called wave that changes the heading's text when you click the button.
Today your page will be longer, maybe 100 to 300 lines, but it will have exactly these three kinds of parts. In the lab you'll ask the AI to walk you through them, then change a word, a color and a number yourself.
-->

---

## Where we're going

| Weeks | You build | With |
|---|---|---|
| 1–2 | Home page + a game | Chat + live preview |
| 3–4 | A tool you'd actually use | App builders, then an editor with AI |
| 5 | An AI-powered micro-app | Editor + AI assistant |
| 6–8 | Your capstone | An AI agent in your repo |

Habits first, then more power.

<!--
Speaker notes (about 1 minute).
Every project goes live on the web and lives in GitHub, and every project has a PROMPTS.md: a log of how you used AI. You start that log in Studio B.
We start with the most guided tool: a chat window where you copy and paste. That's slower, and that's deliberate: you see every piece of code pass through your hands. Each step up gives the AI more power to act on its own. By week 6 an agent will edit your files and run commands. You'll be ready because you'll have the habits: small steps, save points, reading, testing.
Exact tool names and their free limits are in the Tool Handout. When a tool changes, you switch to its fallback. That's normal, not an emergency. Full detail is in the syllabus.
-->

---

## AI on, AI limited, AI off

- 🟢 AI on: use AI freely
- 🟡 AI limited: the AI may comment or hint; the work is yours
- 🔴 AI off: close the AI tabs; your own understanding

This week, AI off: the **hand changes**, your **AI-use rules**, the **exit ticket**, the **reflection**.

<!--
Speaker notes (about 1 minute).
Every task in the course carries one of these labels, always with the words, not just the color. The full policy is in the assessment guide.
AI-off tasks are where you show what you understand. In a 2026 study, students using ChatGPT scored higher on the task but remembered less of it two days later than students using web search (Bergh et al., arXiv 2609.21194). The AI-off moments are how we make sure you keep the learning.
-->

---

## Safety and privacy

- Privacy settings **first**; assume chats are **not private**
- **Never paste** passwords, keys or other people's data
- **Verify**, don't trust
- Your repo is **public**: no surname, address, phone
- Personal writing goes on **Canvas**, not GitHub

<!--
Speaker notes (about 1.5 minutes).
Free tools may store your chats, train on them, and let people review them. Part A1 of the lab is a two-minute check that your privacy settings are set (setup/privacy-settings.md). With Gemini, we keep Keep Activity off; the trade-off is that a closed chat is gone, so you save your work yourself.
The full safety contract has nine rules, each with a plain-English summary and the week it's taught. You sign it on Canvas this week. Today the relevant ones are on the slide.
Your home page is public on purpose. Use a first name or nickname. Reflections, your AI-use rules, the safety contract and self-assessments go on Canvas only: grades and personal writing are private.
-->

---

## This week

**Studio A (today):** build, look inside, change by hand, save

**Studio B:** publish, three habits, accessibility, your AI-use rules, exit ticket

<!--
Speaker notes (about 30 seconds).
Two studios, one project. The most important step today is the last one: save your file. The chat won't be there next time.
-->

---

## Today's lab

1. Privacy check
2. Build **"Hello, Web"** (5+ iterations)
3. **Guided tour** of your code
4. **Three changes by hand** (🔴 AI off)
5. **Save your work**

<!--
Speaker notes (about 30 seconds).
Open the week 1 lab, Studio A section. Work at your own pace; there are checkpoints. If you're stuck for more than 5 minutes, ask a neighbor, then raise your hand. Prompt ideas are in the prompt starters.
Next: a 10-minute live demo, then you start.
-->

---

# Studio B — Workshop

Publish · three habits · accessibility · your rules

<!--
Speaker notes.
Slides for Studio B's mini-lessons. Use "From your screen to the world" before lab Part B1, "The three habits" before Part B2, "Your own AI-use rules" before Part B5, and "Homework" at the end.
-->

---

## From your screen to the world

1. Your file, `index.html`
2. goes into a **GitHub repository** (a tracked project folder)
3. which **GitHub Pages** serves for free
4. at `https://[your-username].github.io`

<!--
Speaker notes (about 1 minute, before Part B1).
A repository, or repo, is a project folder that GitHub stores and tracks. GitHub Pages is a free service that serves the files in a repo as a website.
Your repo must be named exactly your-username.github.io. The file must be called index.html, because that's the file a browser gets when it visits a site's front door.
It can take a minute or two after you upload before the site appears. Be patient; don't re-upload five times.
-->

---

## The three habits

1. **Ask me questions first** before you build
2. **Show, don't describe:** a sketch or a screenshot
3. **Say what works** before asking for a change

<!--
Speaker notes (about 3 minutes, before Part B2, including a live demo of habit 1).
These come from students: in Carnegie Mellon's Fall 2026 AI-coding course (15-113), these were the practices students named most often in their surveys. Giving the AI a visual reference was the most-cited practice on every assignment; one student who asked the AI to ask clarifying questions first said they had a working game in 25 minutes. Source: https://www.cs.cmu.edu/~113/bestPracticesF26.html (an in-progress report, summarized partly with AI from student survey answers, so treat the counts as rough).
Habit 1: the AI fills gaps with guesses. Let it interview you. "Whatever you think" is not an answer.
Habit 2: crop every picture. Anything in it goes to the AI company.
Habit 3: protects what already works, including your hand changes, from being "improved" away.
Demo habit 1 now on the demo page.
-->

---

## Your own AI-use rules

- 4–6 rules, one sentence each: "When…, I will…"
- What you'll use AI for, what you'll do yourself, how you'll check, what you'll never paste, what you'll do when stuck
- 🔴 AI off · on **Canvas** · revised in **week 8**

<!--
Speaker notes (about 2 minutes, before Part B5).
The course's labels say where AI is on, limited or off. Inside that, you decide how you want to use it. In one study, students who had written their own rules for using AI did better than those who hadn't (Azimi, arXiv 2609.16784).
There are no wrong rules, and they're scored for completion. In week 8 you'll compare them with how you actually worked.
Close the AI tabs now.
-->

---

## Homework (about 9 hours)

- Improve your page + add a **Projects** section; fix your accessibility list
- `PROMPTS.md` with **5+ entries**
- **AI Fluency** course + a short response on Canvas (🔴 AI off)
- On Canvas: safety contract, self-assessment, reflection (🔴 AI off)

<!--
Speaker notes (about 1 minute, end of Studio B).
Details are in the week 1 homework, with a checklist and a time plan. The Projects section will link to the game you build next week.
AI Fluency: Framework and foundations is a free course from Anthropic's academy about working with any AI tool. You can start it without an account; signing in only saves your progress.
The reflection is written without AI. It's graded on specific moments, not on polish. "The AI made my button purple when I asked for blue, and here's what I did" is exactly what we want.
-->
