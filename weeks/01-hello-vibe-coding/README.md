# Week 1 — Hello, Vibe Coding

> You can build a working web page just by describing it to an AI, but you only own it once you can explain what is inside.

| | |
|---|---|
| **Time** | One 3-hour studio + about 3 hours of homework |
| **Tools** | A chat assistant with a live preview (Gemini Canvas; fallbacks in [TOOLS.md](../../TOOLS.md)) · the GitHub website · GitHub Pages |
| **You'll build** | **"Hello, Web"**: a one-file personal home page, live at `https://<your-username>.github.io` |
| **Due before week 2** | An improved home page with a Projects section · `PROMPTS.md` with 5+ entries · an AI-free reflection · the pre-course self-assessment · your signed safety contract |

## Learning objectives

By the end of this week you can:

1. Explain what "vibe coding" originally meant, why it was meant for throwaway projects, and how it differs from *agentic engineering*.
2. Describe, in plain English, how a large language model (LLM) produces code: it predicts the next piece of text, it sees only its context window, its answers vary, and it can be confidently wrong.
3. Name the three languages of a web page (HTML, CSS, JavaScript) and say what each one does.
4. Build a one-file web page with the loop **describe → generate → run → customize**, writing your prompts in four parts: **Goal · Context · Constraints · Done when**.
5. Change a page **by hand**, with no AI, and see the change take effect.
6. Publish a page on GitHub Pages and share its address (URL).
7. Set the privacy settings on your AI tools and say what you must never paste into one.

## Before class

Do the week 0 pre-work in [setup/README.md](../../setup/README.md). In particular:

- [ ] Create a **GitHub account** and a **personal Google account** ([setup/accounts.md](../../setup/accounts.md)). School or work Google accounts often block Gemini, so use a personal one.
- [ ] Change the privacy settings on every AI tool you plan to use ([setup/privacy-settings.md](../../setup/privacy-settings.md)).
- [ ] Read the [safety contract](../../setup/safety-contract.md). You will sign it this week.
- [ ] Bring a laptop and charger. Make sure you can sign in to GitHub and Google on it.
- [ ] Think of three things about yourself you are happy to put on a **public** web page: a first name or nickname, some interests, something you are learning. Nothing you would not want a stranger to read.

> [!IMPORTANT]
> Under 18, or in the EEA, UK or Switzerland? Some tools in this course have age or region rules. Your instructor will tell you which to use; the details are in [instructor/variants.md](../../instructor/variants.md).

## Studio agenda

| Time | Block | What happens |
|---|---|---|
| 0:00–0:10 | Welcome | Introductions, how the course works, where the materials live |
| 0:10–0:30 | Concept talk | [slides.md](slides.md): vibe coding, how an LLM writes code, what a web page is, safety |
| 0:30–0:40 | Live demo | The instructor builds a greeting card in Gemini Canvas, then changes one color by hand |
| 0:40–2:20 | Lab | [lab.md](lab.md): build "Hello, Web", look inside, publish it, start `PROMPTS.md` (includes a 10-minute break) |
| 2:20–2:45 | Debrief | Gallery walk: everyone's live URL on screen. What surprised you? What did the AI get wrong? |
| 2:45–3:00 | Exit ticket and homework | [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1) (🔴 no AI), then a homework preview |

## Materials

| File | What it is |
|---|---|
| [slides.md](slides.md) | The 20-minute concept talk (Marp slides with speaker notes) |
| [lab.md](lab.md) | The studio lab, step by step, with checkpoints and troubleshooting |
| [prompt-starters.md](prompt-starters.md) | Copy-paste starter prompts for your home page |
| [homework.md](homework.md) | Core and stretch homework, with a checklist |
| [instructor-notes.md](instructor-notes.md) | Run sheet, demo script, pitfalls and fallback plans |

Shared course files you will use this week:

- [templates/PROMPTS.md](../../templates/PROMPTS.md): your AI-use log
- [templates/REFLECTION.md](../../templates/REFLECTION.md): the AI-free weekly reflection
- [setup/safety-contract.md](../../setup/safety-contract.md) and [setup/privacy-settings.md](../../setup/privacy-settings.md)
- [setup/github-basics.md](../../setup/github-basics.md): a tour of the GitHub website
- [resources/web-basics.md](../../resources/web-basics.md): HTML, CSS and JavaScript in one page
- [resources/glossary.md](../../resources/glossary.md): every term used in the course
- [projects/home-page.md](../../projects/home-page.md): the full brief for the home-page project

## Key ideas

If you are working through this week on your own, read this section, then do the [lab](lab.md).

### Vibe coding, then and now

In February 2025 Andrej Karpathy described a new way to build: you tell an AI what you want, accept everything it writes without reading it, run it, and paste any error back in. He said it was fine for throwaway projects ([his post, reproduced in Geng et al.](https://arxiv.org/pdf/2507.22614)). A few weeks later Simon Willison drew a line: using AI is fine, but his golden rule is to never commit code he could not explain to someone else ([Willison, 2025](https://simonwillison.net/2025/Mar/19/vibe-coding/)). By 2026 Karpathy himself described two tiers: vibe coding, which lets anyone build a prototype, and *agentic engineering*, the professional discipline of building serious software with AI agents, where you stay responsible for security and for understanding the code ([Karpathy, 2026](https://karpathy.bearblog.dev/sequoia-ascent-2026/)).

This course starts at the vibe-coding end, because it is fun and fast. Every week then adds one habit from the engineering end.

### How an LLM writes code

A large language model is a program trained on a huge amount of text and code. Given some text, it predicts what comes next, one small piece (a **token**) at a time. Code is text, so it predicts code the same way. Four consequences matter every day:

- **It only sees its context window**: the conversation so far and anything you paste in. It cannot see your screen or your files.
- **The same prompt can give different answers.** Ask twice and you get two different pages.
- **It can be confidently wrong.** It produces plausible text, not checked facts. Making things up is called *hallucination*.
- **It has a knowledge cutoff.** It learned from data up to a certain date, so it may not know about recent tools or changes.

So you check its work by running it and by reading it.

### What a web page is

A web page is a text file that your browser reads and runs. It uses three languages:

| Language | Job | Example |
|---|---|---|
| **HTML** | Structure: what is on the page | `<h1>Hi, I'm Sam</h1>` |
| **CSS** | Style: how it looks | `h1 { color: teal; }` |
| **JavaScript** | Behavior: what happens when you click or type | `button.onclick = () => alert("Hello!")` |

This week everything lives in one file called `index.html`. **GitHub Pages** puts that file on the public web for free. More in [resources/web-basics.md](../../resources/web-basics.md).

### The loop you use this week

**Describe → generate → run → customize.** Describe what you want in four parts, let the AI generate it, run it in the live preview, then ask for one change at a time. From week 2 this grows into the full [Safe Loop](../../resources/safe-loop.md).

### Why you make changes by hand

Changing a word, a color and a number yourself proves the code is just text that you control. It is also the first of the skills you must be able to show without AI ([resources/without-ai-skills.md](../../resources/without-ai-skills.md)).

### Privacy from day one

Free AI tools may store your chats, use them for training and let people review them. Turn training off where you can, and never paste passwords, keys or other people's personal information. Your GitHub repository is public, so treat everything in it as public too.

## Understanding check

At the end of the studio you complete the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1) on paper or in a form, with **no AI** (🔴). You will be asked to explain **three parts of your own page** in plain English: for example, what one HTML tag does, which CSS rule sets a color, and what happens when someone clicks your button. If you did Part 2 of the lab properly, this takes five minutes.

## Homework

About 3 hours. Full details in [homework.md](homework.md).

- **Core (required):** improve your page and add a **Projects** section that will link to next week's game; grow `PROMPTS.md` to at least 5 entries; write the AI-free reflection; complete the [pre-course self-assessment](../../assessment/self-assessment.md); sign the safety contract.
- **Stretch (optional):** try the same prompt in a second assistant and compare; add a dark-mode toggle; run an accessibility check.

Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)).

## If a tool is down

| Problem | What to do |
|---|---|
| Gemini is down, blocked, or refuses to open Canvas | Use a fallback from [TOOLS.md](../../TOOLS.md): Claude with Artifacts (18+) also has a live preview; with ChatGPT, copy the code into a file and run it yourself ([lab.md, "No preview?"](lab.md#no-preview-run-it-yourself)) |
| "Not available for your account" in Gemini | You are probably signed in with a school or work account. Switch to a personal Google account |
| You hit a usage limit | Switch to the next tool in the row. See [resources/troubleshooting.md](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| GitHub or Pages is slow or down | Check [githubstatus.com](https://www.githubstatus.com). Keep your `index.html` safe on your computer and publish later |

## Going further

- Simon Willison, [Not all AI-assisted programming is vibe coding](https://simonwillison.net/2025/Mar/19/vibe-coding/): the post behind the golden rule.
- Andrej Karpathy, [notes from his 2026 Sequoia talk](https://karpathy.bearblog.dev/sequoia-ascent-2026/) on vibe coding versus agentic engineering.
- GitHub Docs, [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart).
- More videos and readings: [resources/reading-list.md](../../resources/reading-list.md).
