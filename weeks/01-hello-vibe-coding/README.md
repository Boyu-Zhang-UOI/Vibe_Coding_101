# Week 1 — Hello, Vibe Coding

> You can build a working web page just by describing it to an AI, but you only own it once you can explain what is inside.

## This week at a glance

| Item | Details |
|---|---|
| **Before Studio A** (60–90 min) | Finish [Before Studio 1](../../setup/README.md#before-studio-1) in the week 0 pre-work (accounts, privacy settings, a test Codespace). Read this page. Bring a laptop and charger |
| **Studio A** | Concept talk, then build your home page in a chat preview, take a guided tour of its code, and make three changes by hand |
| **Studio B** | Publish the page on GitHub Pages, practice the three habits, check your page's accessibility, write your personal AI-use rules (🔴 AI off), exit ticket |
| **Due before next week's Studio A** (default 11:59 pm the night before) | Your page live at `https://[your-username].github.io` with a **Projects** section · `PROMPTS.md` with 5+ entries · on Canvas (the course's learning management system, not Gemini's Canvas tool): your AI Fluency response, your reflection, your AI-use rules, the signed safety contract and the pre-course self-assessment · your GitHub Education application sent. Full list: [deliverables checklist](homework.md#deliverables-checklist) |
| **AI use this week** | 🟢 AI on: building, customizing and explaining your page; the accessibility review · 🟡 AI limited: none this week · 🔴 AI off: the three hand changes, "What I wrote or decided myself" in `PROMPTS.md`, your AI-use rules, the exit ticket, the AI Fluency response, the reflection and the self-assessment |
| **Must read** | This page, the [lab](lab.md), the [homework](homework.md) |
| **Look up when needed** | [Prompt starters](prompt-starters.md) · [How the Web Works](../../resources/web-basics.md) · [GitHub basics](../../setup/github-basics.md) · [Troubleshooting](../../resources/troubleshooting.md) · [Glossary](../../resources/glossary.md) · [Tool Handout](../../TOOLS.md) · [Screen reader and keyboard guide](../../resources/accessibility.md) |
| **Minimum to keep up** | Your page is live at `https://[your-username].github.io` with a Projects section. Week 2's game goes into the same repository |
| **Time** | Studios 6 h · outside about 10–11 h (prep up to 1½ h, homework core about 9 h); stretch is optional |

## Studio agenda

| Studio | What happens |
|---|---|
| **Studio A — Learn & build** | Welcome · concept talk ([slides](slides.md)): vibe coding, how an LLM writes code, what a web page is · live demo · lab: build "Hello, Web", take the guided tour, make three changes by hand, save your work · checkpoint share |
| **Studio B — Workshop** | Show and tell · lab: publish on GitHub Pages, the three habits, an accessibility check, start `PROMPTS.md`, your personal AI-use rules · gallery walk of everyone's live page · [exit ticket](../../assessment/exit-tickets.md#week-1) (🔴 AI off) |

## Learning objectives

By the end of this week you can:

1. Explain what "vibe coding" originally meant, why it was meant for throwaway projects, and how it differs from *agentic engineering*.
2. Describe, in plain English, how a large language model (LLM) produces code: it predicts the next piece of text, it sees only its context window, its answers vary, and it can be confidently wrong.
3. Name the three languages of a web page (HTML, CSS, JavaScript) and say what each one does.
4. Build a one-file web page with the loop **describe → generate → run → customize**, writing your prompts in four parts: **Goal · Context · Constraints · Done when**.
5. Change a page **by hand**, with no AI, and see the change take effect.
6. Publish a page on GitHub Pages and share its address (URL).
7. Use three prompting habits: ask the AI to ask you questions first, show it a picture or reference, and say what works before asking for a change.
8. Check your own page for basic accessibility problems (keyboard, zoom, contrast, headings) and fix one.
9. Set the privacy settings on your AI tools, say what you must never paste into one, and write your own rules for when you will and won't use AI.

## Before Studio A

- [ ] Finish [Before Studio 1](../../setup/README.md#before-studio-1) in the week 0 pre-work: a **GitHub account**, a **personal Google account** (school or work accounts often block Gemini), and the [privacy settings](../../setup/privacy-settings.md) on every AI tool you plan to use.
- [ ] Bring a laptop and charger. Make sure you can sign in to GitHub and Google on it.
- [ ] Think of three things about yourself you are happy to put on a **public** web page: a first name or nickname, some interests, something you are learning. Nothing you would not want a stranger to read.

The rest of week 0 (signing the [safety contract](../../setup/safety-contract.md), the self-assessment, GitHub Education) is listed under [During week 1](../../setup/README.md#during-week-1) and is part of this week's homework.

> [!IMPORTANT]
> Under 18, or in the EEA, UK or Switzerland? Some tools in this course have age or region rules. Your instructor will tell you which to use; the details are on the [course variants page](../../instructor/variants.md).

## Key ideas

If you are working through this week on your own, read this section, then do the [lab](lab.md). The [self-paced path](../../resources/self-paced.md) says what to do instead of the pair and class activities.

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

This week everything lives in one file called `index.html`. **GitHub Pages** puts that file on the public web for free. More in [How the Web Works](../../resources/web-basics.md).

### The loop you use this week

**Describe → generate → run → customize.** Describe what you want in four parts, let the AI generate it, run it in the live preview, then ask for one change at a time. From week 2 this grows into the full [Safe Loop](../../resources/safe-loop.md).

### Three habits that make prompts work

Students in a Fall 2026 AI-coding course at Carnegie Mellon named these as their most useful practices ([CMU 15-113 report](https://www.cs.cmu.edu/~113/bestPracticesF26.html)). You practice all three in Studio B and use them for the rest of the course.

1. **Ask me questions first.** Before the AI builds, have it ask you what it needs to know. Otherwise it fills the gaps with guesses.
2. **Show, don't describe.** A quick sketch or a screenshot with the problem circled says more than a paragraph.
3. **Say what works before asking for a change.** Name what must stay the same, so the AI doesn't "improve" it away.

### Why you make changes by hand

Changing a word, a color and a number yourself proves the code is just text that you control. It is also the first of the [six skills you must show without AI](../../resources/without-ai-skills.md).

### AI on, AI limited, AI off

Every task in the course carries one of three labels. **🟢 AI on:** use AI freely. **🟡 AI limited:** the AI may comment or give hints, but the work is yours. **🔴 AI off:** close the AI tabs and work alone; these tasks check your own understanding or are writing addressed to people. The full policy is in the [assessment guide](../../assessment/README.md#ai-use-policy).

Inside those course rules, you also write **your own** rules for when you will and won't use AI (Studio B, 🔴 AI off). In one study, students who had written their own rules for using AI did better than those who hadn't ([Azimi, 2026](https://arxiv.org/abs/2609.16784)). You revise your rules in week 8.

### Privacy from day one

Free AI tools may store your chats, use them for training and let people review them. Turn training off where you can, and never paste passwords, keys or other people's personal information. Your GitHub repository is public, so treat everything in it as public too. Personal writing (reflections, your AI-use rules, the signed safety contract, self-assessments) goes on Canvas, never in a repository ([Privacy of your work](../../assessment/README.md#privacy-of-your-work)).

## Understanding check

At the end of Studio B you complete the [Week 1 exit ticket](../../assessment/exit-tickets.md#week-1) on Canvas or paper, with 🔴 AI off. You will be asked to explain **three parts of your own page** in plain English: for example, what one HTML tag does, which CSS rule sets a color, and what happens when someone clicks your button. If you did the guided tour and the hand changes in Studio A, this takes five minutes. Exit tickets are scored for completion, not correctness: they tell your instructor what to go over again.

## Homework

About 9 hours of core work. Full details and the checklist are on the [homework page](homework.md).

- **Project time:** improve your page, add a **Projects** section that will link to next week's game, and fix your accessibility list.
- **Journal:** grow `PROMPTS.md` to at least 5 entries; write the weekly reflection on Canvas (🔴 AI off).
- **AI fluency pre-work:** Anthropic's free course "AI Fluency: Framework and foundations" (or an equivalent your instructor names), then a short response on Canvas (🔴 AI off).
- **Week 0 tasks for week 1:** sign the safety contract and take the pre-course self-assessment on Canvas, and apply for GitHub Education.
- **Stretch (optional):** the same prompt in a second assistant, a dark-mode toggle, or two minutes with a screen reader.

Graded on effort and completion of the core tier ([rubric](../../assessment/rubrics.md#weekly-labs-and-homework)).

## If a tool is down

| Problem | What to do |
|---|---|
| Gemini is down, blocked, or refuses to open Canvas | Use a fallback from the [Tool Handout](../../TOOLS.md): Claude with Artifacts (18+) also has a live preview; with ChatGPT, copy the code into a file and run it yourself ([No preview? Run it yourself](lab.md#no-preview-run-it-yourself)) |
| "Not available for your account" in Gemini | You are probably signed in with a school or work account. Switch to a personal Google account |
| You hit a usage limit | Switch to the next tool in the row. See [I ran out of free credits](../../resources/troubleshooting.md#i-ran-out-of-free-credits) |
| GitHub or Pages is slow or down | Check [githubstatus.com](https://www.githubstatus.com). Keep your `index.html` safe on your computer and publish later |

## Going further

- Andrej Karpathy, [notes from his 2026 Sequoia talk](https://karpathy.bearblog.dev/sequoia-ascent-2026/) on vibe coding versus agentic engineering.
- GitHub Docs, [Quickstart for GitHub Pages](https://docs.github.com/en/pages/quickstart).
- More videos, readings and free courses: the [Reading List](../../resources/reading-list.md).
