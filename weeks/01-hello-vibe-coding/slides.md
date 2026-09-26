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
Speaker notes (0:00, about 1 minute).
Welcome everyone. By the end of today every person in this room will have a web page live on the public internet, with an address they can text to a friend. Nobody needs to have written code before.
The talk is 20 minutes. Then I'll demo for 10, and you build for the rest of the studio.
-->

---

## By the end of today you will have…

- A personal web page, **live on the internet**
- A rough idea of **how the AI made it**
- Three changes you made **with your own hands**

<!--
Speaker notes (about 1 minute).
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

Vibe coding was meant for **throwaway projects**.

What if people **use** it, **trust** it, or **pay** for it?

<!--
Speaker notes (about 1 minute).
Ask the room: what could go wrong if you never read the code of an app that other people log into? Take two answers. Expected: it leaks data, it breaks and you can't fix it, it costs money.
In week 7 we'll look at real cases where vibe-coded apps exposed their users' data. For today, just hold the idea: the stakes decide how careful you need to be.
-->

---

## Willison's golden rule

Don't commit code you couldn't **explain** to someone else.

Course version: *If you can't explain it, you didn't build it.*

<!--
Speaker notes (about 1 minute).
Simon Willison, a respected developer, wrote in March 2025 that not all AI-assisted programming is vibe coding. His golden rule: he won't commit code he couldn't explain exactly to someone else (https://simonwillison.net/2025/Mar/19/vibe-coding/).
"Commit" means save into your project's history; you'll do it for real next week.
This is the rule we grade by. You may use AI for almost everything. You must be able to explain what you submit. Tonight's exit ticket asks you to explain three parts of your own page.
-->

---

## A spectrum, not a switch

**Vibe coding** ◄────────────► **Agentic engineering**

Prototype, don't read · · · Spec, test, review, own it

<!--
Speaker notes (about 1.5 minutes).
By 2026 Karpathy described two tiers. Vibe coding "raises the floor": anyone can build a prototype or a personal tool. Agentic engineering is the professional discipline of directing AI agents while keeping quality, security and maintainability. He is clear that you are still responsible for your software and its security (https://karpathy.bearblog.dev/sequoia-ascent-2026/).
This course walks you along this line. Week 1 sits at the left end on purpose. Each week adds one habit that moves you right: prompts, save points, specs, reading and debugging, secrets, agents, security, shipping.
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
Speaker notes (about 1.5 minutes).
The model produces plausible text, not verified facts. It can invent a function that doesn't exist, a setting that isn't there, or a package name nobody published. It says all of this with the same confidence.
Knowledge cutoff: it was trained up to some date. Tools change monthly. That's why the course keeps a dated TOOLS.md instead of trusting what an AI says about its own pricing or menus.
The response is not fear, it's checking. Today "checking" means: does the preview do what you asked?
-->

---

## What is a web page?

A text file your **browser** reads and runs.

| | Job |
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
Today your page will be longer, maybe 100 to 300 lines, but it will have exactly these three kinds of parts. In Part 2 of the lab you'll ask the AI to walk you through them, then change a word, a color and a number yourself.
-->

---

## From your screen to the world

`index.html` → **GitHub repository** → **GitHub Pages** → `https://you.github.io`

<!--
Speaker notes (about 1 minute).
A repository, or repo, is a project folder that GitHub stores and tracks. GitHub Pages is a free service that serves the files in a repo as a website.
Your repo must be named exactly your-username.github.io. The file must be called index.html, because that's the file a browser gets when it visits a site's front door.
It can take a minute or two after you upload before the site appears. Be patient; don't re-upload five times.
-->

---

## The course map

| Weeks | You build |
|---|---|
| 1–2 | Home page + a game |
| 3–4 | A tool you'd actually use |
| 5 | An AI-powered micro-app |
| 6–8 | Your capstone, built with an AI agent |

<!--
Speaker notes (about 1 minute).
Every project goes live on the web and lives in GitHub. Every project has a PROMPTS.md: a log of how you used AI. You start that log today.
Full detail is in SYLLABUS.md.
-->

---

## The ladder of tools

1. **Chat + live preview** (weeks 1–2)
2. App builders (week 3)
3. Editor + AI assistant (weeks 4–5)
4. AI agent in your repo (weeks 6–8)

Habits first, then more power.

<!--
Speaker notes (about 1 minute).
We start with the most guided tool: a chat window where you copy and paste. That's slower, and that's deliberate: you see every piece of code pass through your hands.
Each step up gives the AI more power to act on its own. By week 6 an agent will edit your files and run commands. You'll be ready because you'll have the habits: small steps, save points, reading, testing.
Exact tool names and their free limits are in TOOLS.md. When a tool changes, you switch to its fallback. That's normal, not an emergency.
-->

---

## Your safety contract (highlights)

- Privacy settings **first**
- **Never paste** passwords, keys or other people's data
- **Verify**, don't trust
- Keep a record of what **you** wrote (`PROMPTS.md`)

<!--
Speaker notes (about 1 minute).
The full contract has eight rules; each exists because something went wrong for real people. The agent rules (commit before and after, contain agents) matter from week 6.
Today the relevant ones are the four on the slide. You sign the contract as part of this week's homework. Link: setup/safety-contract.md.
-->

---

## Privacy: assume it's not private

- Free tools may **store**, **train on** and let **people review** your chats
- Turn training **off** where you can
- Your repo is **public**: no surname, address, phone

<!--
Speaker notes (about 1 minute).
Part 0 of the lab is a two-minute check that your privacy settings are set (setup/privacy-settings.md). Where there's no opt-out, use a temporary chat or simply don't paste anything personal.
Your home page is public on purpose. Use a first name or nickname. Don't put your email address, phone number, address or anything about other people on it.
-->

---

## Today's lab

1. Privacy check
2. Build **"Hello, Web"** (5+ iterations)
3. **Look inside** + 3 changes by hand
4. **Publish** on GitHub Pages
5. Start `PROMPTS.md`

<!--
Speaker notes (about 30 seconds).
Open lab.md. Work at your own pace; there are checkpoints. If you're stuck for more than 5 minutes, raise your hand or ask a neighbor. Prompt ideas are in prompt-starters.md.
Next: a 10-minute live demo, then you start.
-->

---

## Homework (about 3 hours)

- Improve your page + add a **Projects** section
- `PROMPTS.md` with **5+ entries**
- 🔴 Reflection, written **without AI**
- Self-assessment + sign the safety contract

<!--
Speaker notes (about 30 seconds).
Details are in homework.md. The Projects section will link to the game you build next week.
The reflection is written without AI. It's graded on specific moments, not on polish. "The AI made my button purple when I asked for blue, and here's what I did" is exactly what we want.
-->
