# Glossary

> Plain-English definitions of every technical word the course uses. Each entry says which week teaches it.
> Don't read this page top to bottom. Look words up when you meet them, then come back to what you were doing.

**Jump to:** [A](#a) · [B](#b) · [C](#c) · [D](#d) · [E](#e) · [F](#f) · [G](#g) · [H](#h) · [I](#i) · [J](#j) · [K](#k) · [L](#l) · [M](#m) · [N](#n) · [O](#o) · [P](#p) · [R](#r) · [S](#s) · [T](#t) · [U](#u) · [V](#v) · [W](#w) · [X](#x)

**Weeks:** [0 Pre-work](../setup/README.md) · [1 Hello, Vibe Coding](../weeks/01-hello-vibe-coding/) · [2 Prompting & Save Points](../weeks/02-prompting-and-save-points/) · [3 Spec First](../weeks/03-spec-first/) · [4 Read It, Debug It, Own It](../weeks/04-read-debug-own-it/) · [5 APIs, Secrets & Servers](../weeks/05-apis-secrets-servers/) · [6 How Agents Work](../weeks/06-agents/) · [7 Security, Data & Review](../weeks/07-security-and-review/) · [8 Ship It](../weeks/08-ship-it/)

> [!TIP]
> Tool names appear here only when you use them every week. Limits, prices and model names live in [TOOLS.md](../TOOLS.md), because they change every month.

---

## A

### Acceptance criterion

One checkable sentence that says what the app must do in one situation, written as **WHEN** *situation*, **THE APP SHALL** *result*. It tells you, and the AI, when a feature is done. *Like a building inspector's checklist: each line passes or fails, no opinions.* Plural: acceptance criteria. See [EARS](#ears) and [templates/SPEC.md](../templates/SPEC.md). *Week 3.*

### Accessibility

Making your app usable by everyone, including people who use a screen reader, navigate with a keyboard, or see colors differently. The basics: text alternatives (`alt` text) for images, enough contrast between text and background, real buttons and headings in the HTML, and everything reachable with the keyboard. *Week 8.*

### Agent

An [LLM](#llm) in a loop with tools. It reads files, edits them, runs commands, looks at the result and decides its next step, again and again until the task is done or it gets stuck. *Like a very fast new intern with keys to your workshop: useful, eager, and needs clear instructions and checking.* *Week 6.*

### Agentic engineering

The professional way to build serious software with [agents](#agent): the AI writes and runs code, but humans stay responsible for the plan, the quality, the security and understanding the result. Andrej Karpathy used the term in 2026 for the discipline that grew out of [vibe coding](#vibe-coding). *Weeks 1 and 6.*

### Agent mode

The setting in an editor assistant such as Copilot where the AI acts as an [agent](#agent): it edits files and runs commands itself, asking for your approval along the way. It uses far more credits than [Ask mode](#ask-mode). *Week 6.*

### AGENTS.md

A file in the top folder of a repository that gives AI agents standing instructions: what the project is, which commands to run, what never to do. *A README written for agents.* Read any AGENTS.md you copy from the internet before using it, because hidden instructions can be planted in it. Template: [templates/AGENTS.md](../templates/AGENTS.md). *Week 6.*

### AI credits

The usage allowance some tools, such as GitHub Copilot, give you each month. Every AI answer spends some. When they run out, the AI features stop until the allowance resets, so switch to a fallback tool. Current allowances are in [TOOLS.md](../TOOLS.md). See [troubleshooting](troubleshooting.md#i-ran-out-of-free-credits). *Weeks 4–8.*

### Alt text

A short description of an image, written in the HTML `alt` attribute: `<img src="cat.jpg" alt="A gray cat asleep on a keyboard">`. Screen readers read it aloud, and browsers show it if the image fails to load. See [accessibility](#accessibility). *Week 8.*

### Anon key

The older name for Supabase's [publishable key](#publishable-key).

### API

Short for *application programming interface*: a set of requests one program can make to another, and the answers it sends back. Your app uses an LLM provider's API to get AI replies. *Like a restaurant menu plus a waiter: you order from a fixed list and something comes back from a kitchen you never see.* See [web-basics.md](web-basics.md#apis). *Week 5.*

### API key

A secret string that identifies you to an [API](#api), so the provider knows whom to bill and limit. Treat it exactly like a password: keep it on the [server](#server), in an [environment variable](#environment-variable), and never put it in browser code, in git or in an AI chat. *Week 5.*

### App builder

A browser tool that generates a whole working app from a description, for example Google AI Studio *Build*, Bolt, Lovable, v0 or Replit. Fast for a first version, but the code lives on their platform until you export it to GitHub. *Week 3.*

### Array

A list of values in JavaScript, written in square brackets: `["milk", "eggs", "bread"]`. Your to-do items, high scores and notes are usually kept in arrays. *Weeks 3–4.*

### Ask mode

The setting in an editor assistant such as Copilot where the AI only answers questions and suggests code in the chat; it doesn't change your files. The mode used in week 4, when *you* write the code. Compare [agent mode](#agent-mode). *Week 4.*

### async and await

JavaScript words for code that has to wait, such as a request to a server. `await` pauses that function until the answer arrives, without freezing the whole page; a function that uses `await` must be marked `async`. *Week 5.*

### Authentication

Proving **who you are**, usually by logging in. *Showing your ID at the front desk.* Compare [authorization](#authorization). *Week 7.*

### Authorization

Deciding **what you are allowed to do** once the app knows who you are (or knows you're anonymous). *Your ID gets you into the building; authorization decides which rooms your key card opens.* It must be enforced on the server or in the database, for example with [row-level security](#row-level-security-rls). Hiding a button in the browser is not authorization. *Week 7.*

## B

### Back end

The parts of an app that run on a [server](#server), out of the public's sight: server routes, the database, and the secrets. Compare [front end](#front-end). *Week 5.*

### Base URL

The start of a web API's address, which every request builds on, such as `https://api.groq.com/openai/v1`. In the week 5 starter it is the `LLM_BASE_URL` setting: change it, the key and the model ID, and you have switched AI provider without touching code. *Week 5.*

### Branch

A separate line of [commits](#commit) where you can try something without touching your main version. When it works, you [merge](#merge) it back. *Like photocopying a draft so you can scribble on the copy.* *Week 6.*

### Breakpoint

A marker you set on a line of code, in DevTools → Sources, that pauses the program when it reaches that line. While it's paused you can look at the value of every variable. Optional, but a powerful debugging tool. *Week 4.*

### Browser

The program that fetches web pages and runs their HTML, CSS and JavaScript: Chrome, Edge, Firefox, Safari. Everything the browser receives, the person using it can inspect with [DevTools](#devtools). *Week 1.*

### Build step

An extra stage some projects need before a browser can run them, where a tool converts and bundles the code. It is common with [frameworks](#framework). This course's projects have no build step, so the files you write are exactly what the browser runs. *Week 3.*

## C

### Cache

Copies of files that your browser keeps so pages load faster. Sometimes it shows you an old version of your site after you've changed it. A [hard reload](#hard-reload) fixes that. *Weeks 1–4.*

### Canvas element

`<canvas>`: an HTML element that JavaScript can draw on, pixel by pixel. Most browser games use one. Not the same thing as Gemini's Canvas, which is a [live preview](#live-preview) panel. *Week 2.*

### CLI

Short for *command-line interface*: a program you use by typing commands in a [terminal](#terminal) instead of clicking. git, npm and Copilot CLI are all CLIs. *Weeks 4–6.*

### Client

The side of a conversation that asks for something, usually the [browser](#browser). Anything sent to the client is public. Compare [server](#server). *Week 5.*

### Clone

To download a complete copy of a repository, including its history, with `git clone <address>`. A Codespace does this for you. You only need it for the optional [local setup](../setup/local-setup.md).

### Codespace

A cloud computer from GitHub that runs VS Code in your browser, attached to one repository. It is the course's main workspace from week 4 and the [sandbox](#sandbox) for agents. Free hours are listed in [TOOLS.md](../TOOLS.md); stop it when you finish. *Week 4.*

### Command Palette

VS Code's search box for every command: press **Ctrl+Shift+P** (Windows, Linux, ChromeOS) or **Cmd+Shift+P** (Mac) and start typing what you want, such as "Reload Window". Useful when you can't find a menu. *Week 4.*

### Commit

A saved snapshot of your project with a short message saying what changed, such as `Add dark mode toggle`. *A save point in a video game: if the next level goes badly, you reload from here.* See [git-cheatsheet.md](git-cheatsheet.md). *Weeks 1–2.*

### Commit hash

The unique ID of a [commit](#commit): a long string of letters and numbers such as `3f9c2ab…`. The first seven characters are usually enough to point at one exact save point. Also called a *SHA*. *Week 2.*

### Completions

Gray "ghost text" that an editor assistant suggests as you type. Press Tab to accept, keep typing to ignore. Also called inline suggestions. They are switched off for the [Debug Clinic](#debug-clinic). *Week 4.*

### Console

The [DevTools](#devtools) tab that shows error messages and notes from JavaScript. Red lines are errors, with the file name and line number. You can also type JavaScript there to try things. *Week 4.*

### Context window

How much text a [model](#model) can "see" at once: your messages, its replies, pasted files and hidden instructions, all counted in [tokens](#token). When it fills up, older parts get squeezed out and answers get worse, which is why long, muddled chats go wrong. *Like a desk: only so much paper fits, and when you pile it high things slide off the back.* *Weeks 1 and 6.*

### Copilot

GitHub's AI assistant inside VS Code: code completions, a chat panel (Ask mode), agent mode, and a command-line agent (Copilot CLI). The course's primary editor assistant from week 4. Plans and limits: [TOOLS.md](../TOOLS.md). *Weeks 4–8.*

### CSS

Short for *Cascading Style Sheets*: the language that says how a page looks, including colors, fonts, spacing and layout. *If HTML is the walls of a house, CSS is the paint and furniture.* *Week 1.*

## D

### Database

Organized storage for data that lives on a server and that many users share. *Like a shared spreadsheet with strict rules about who may read and change each row.* The course uses Supabase in week 7. See [row-level security](#row-level-security-rls). *Week 7.*

### Debug Clinic

The week 4 activity where you find and fix planted bugs with the AI switched off, using error messages, [DevTools](#devtools) and reading. It exists because debugging is the skill that AI help erodes most. *Week 4.*

### Definition of done

A short list of what must be true before you call a project finished, for example: it works at the live URL, the tests pass, the README is complete, the security checklist has evidence. It stops "done" from meaning "it worked once on my screen". *Week 8.*

### degit

A small tool, run with [npx](#npx), that copies one folder of a GitHub repository without its history. The course uses it as the fallback way to [start a project from a starter kit](../setup/codespaces.md#start-a-project-from-a-starter). *Weeks 4–6.*

### Dependency

See [package](#package).

### Deploy

To put your app on the internet at a public address so anyone can open it. The company that serves it is the *host* (GitHub Pages, Vercel). *Weeks 1 and 5.*

### DevTools

The developer tools built into every desktop browser. Open them with **F12**, or **Ctrl+Shift+I** (Windows, Linux, ChromeOS) or **Cmd+Option+I** (Mac). The main tabs are Elements, Console, Network, Sources and Application. Tour: [web-basics.md](web-basics.md#a-short-devtools-tour). *Week 4.*

### Diff

A view of exactly what changed between two versions of a file: removed lines in red (marked `-`), added lines in green (marked `+`). *Like "track changes" in a word processor.* Reading the diff is step 5 of [the Safe Loop](#safe-loop). *Week 2.*

### DOM

Short for *Document Object Model*: the browser's live, in-memory version of your page, built from your HTML. JavaScript changes what you see by changing the DOM. *HTML is the blueprint; the DOM is the building as it stands right now, remodeling included.* The Elements tab in DevTools shows it. *Week 4.*

## E

### EARS

Short for *Easy Approach to Requirements Syntax*: a way of writing requirements as **WHEN** *something happens*, **THE SYSTEM SHALL** *do something*. People who have never coded can learn it in minutes. This course uses the form **WHEN … THE APP SHALL …** for [acceptance criteria](#acceptance-criterion). *Week 3.*

### Edge case

An unusual but possible situation: an empty box, very long text, a duplicate, reloading the page, a tiny phone screen, no internet. AI-written code usually handles the normal case and breaks on edge cases, so you test them on purpose. *Weeks 3–4.*

### EEA

The European Economic Area: the EU countries plus Iceland, Liechtenstein and Norway. Some free AI tiers may not be used to serve people there, or in the UK and Switzerland. See [instructor/variants.md](../instructor/variants.md#eea-uk-and-swiss-cohorts).

### Element

One building block of a web page, written in HTML: a heading `<h1>`, a button, an input box. An element can have an `id`, a unique name that JavaScript uses to find it: `document.getElementById("add-button")`. If the id is misspelled, JavaScript gets [null](#null). *Week 4.*

### Endpoint

One specific address on a server or [API](#api) that does one job, such as `/api/ask`. *Like one counter at a post office: this one takes parcels, that one sells stamps.* *Week 5.*

### .env file

A file that holds [environment variables](#environment-variable), usually secrets, for running your app on your own machine or Codespace. It is listed in [.gitignore](#gitignore) so it is never committed. A companion file, `.env.example`, shows the variable names with placeholder values. *Week 5.*

### Environment variable

A named setting handed to a program from outside its code, such as `LLM_API_KEY`. It keeps secrets and settings out of your files: locally they come from `.env`, and on your host you type them into the dashboard. *Like a sealed envelope handed to the chef each morning, instead of writing the safe combination on the recipe card.* *Week 5.*

### Event and event listener

An *event* is something that happens on the page: a click, a key press, the page finishing loading. An *event listener* is code that waits for one event and runs when it happens: `button.addEventListener("click", addBook)`. *Week 4.*

### Exit ticket

A three-question check, done without AI, in the last minutes of every studio. See [assessment/exit-tickets.md](../assessment/exit-tickets.md). *Every week.*

## F

### Favicon

The tiny icon in the browser tab next to your page's title. A small touch that makes a project look finished. *Week 8.*

### fetch

The built-in JavaScript function for sending an HTTP request, in the browser or in Node.js, such as `await fetch('/api/ask', { method: 'POST', body })`. It's how your page talks to your server, and how your server talks to an LLM provider. *Week 5.*

### Fork

Your own copy of someone else's repository, under your GitHub account. You can change it freely without affecting theirs. *Week 5.*

### Forwarded port

In a [Codespace](#codespace), your app runs on a computer in the cloud. A forwarded [port](#port) gives you a private web address that connects your browser to it. The **Ports** tab lists them. *Weeks 4–8.*

### Framework

A large ready-made toolkit for building apps in one particular style, such as React. App builders usually generate framework code. This course avoids frameworks so that every file stays short enough to read. *Week 3.*

### Free tier

The no-cost level of a paid service, with limits such as messages per day or credits per month. Limits change often and are listed only in [TOOLS.md](../TOOLS.md). Running out is expected; you switch to the fallback ([troubleshooting](troubleshooting.md#i-ran-out-of-free-credits)). *Week 0 onward.*

### Front end

The parts of an app that run in the browser: HTML, CSS and JavaScript. Everything in the front end is public, including any key you put there. Compare [back end](#back-end). *Weeks 1 and 5.*

### Function

A named, reusable block of code that does one job. It can take inputs (called *parameters*) and give back a result (its *return value*). `countWords(text)` takes some text and returns a number. *Like a recipe: ingredients in, dish out, and you can cook it again whenever you like.* Explaining any function you committed is one of the [six skills](without-ai-skills.md#2-explain-any-function-you-committed). *Weeks 1–2.*

## G

### Gem

A custom assistant you set up inside Gemini with saved instructions, available on the free plan. The course's hint-only [tutor](#tutor-mode) can be shared as a Gem. *Week 4.*

### git

A program that records [commits](#commit) of your project so you can see what changed, when, and go back. It runs on your computer or in your Codespace. See [git-cheatsheet.md](git-cheatsheet.md). *Week 2.*

### GitHub

A website that stores git [repositories](#repository) online and adds tools around them: Pages, Codespaces, Copilot, [pull requests](#pull-request). In this course, GitHub is where all your work is saved, whatever tool made it. *Week 0 onward.*

### GitHub Actions

GitHub's automation: small jobs that run by themselves when something happens in a repository, such as publishing your GitHub Pages site after each push, or running tests. You can watch them in the repo's **Actions** tab. Running tests automatically like this is called *CI* (continuous integration). *Weeks 1 and 8.*

### github.dev

A light version of VS Code that opens in the browser when you press the `.` key on a repository page. You can edit files and commit, but there is no terminal. *Week 2.*

### GitHub Pages

GitHub's free hosting for [static sites](#static-site) from a public repository. Your home page lives at `https://<username>.github.io`. *Week 1.*

### .gitignore

A file listing things git must never track, such as `.env`, `node_modules/` and `.DS_Store`. Adding a file here does **not** remove it from past commits. *Week 5.*

### Grace token

One of the two 48-hour extensions each student can use on most deadlines without asking. The rules are in [assessment/README.md](../assessment/README.md#late-work-and-grace-tokens).

## H

### Hallucination

When an AI states something invented as if it were true: a function that doesn't exist, a package name nobody published, a test result that never happened. It sounds exactly as confident as a correct answer, which is why you verify. *Week 1.*

### Happy path

The normal case, where the user does everything as expected. Beginners tend to test only the happy path. Test [edge cases](#edge-case) too. *Week 3.*

### Hard reload

A reload that ignores the [cache](#cache) and fetches fresh files: **Ctrl+Shift+R** (Windows, Linux, ChromeOS) or **Cmd+Shift+R** (Mac). *Weeks 1–4.*

### Harness

The program around an AI model that turns it into an [agent](#agent). It gives the model its tools, runs each [tool call](#tool-call) the model asks for, and feeds the result back. In *Be the Agent*, one student plays the harness. *Week 6.*

### HTML

Short for *HyperText Markup Language*: the structure and content of a page, such as headings, paragraphs, buttons and images. *The walls and rooms of the house.* *Week 1.*

### HTTP

The rules browsers and servers use to talk. The browser sends a **request** (a method such as GET or POST, a URL, and sometimes a body), and the server sends back a **response** (a [status code](#status-code), and a body). HTTPS is the encrypted version. See [web-basics.md](web-basics.md#requests-and-responses-http). *Week 5.*

## I

### innerHTML and textContent

Two ways JavaScript puts text on a page. `textContent` shows text exactly as typed. `innerHTML` treats it as HTML, so if a user types code, the browser may run it. For anything a user typed, use `textContent`; see [XSS](#xss). *Weeks 4 and 7.*

## J

### JavaScript

The programming language browsers run to make pages *do* things: react to clicks, save data, fetch from APIs. With [Node.js](#nodejs) it also runs on servers. *The wiring and electricity of the house.* Not related to Java. *Week 1.*

### JSON

Short for *JavaScript Object Notation*: a plain-text format for structured data, such as `{"name": "Ada", "score": 3}`. Most APIs send and receive JSON. *Week 5.*

## K

### Knowledge cutoff

The date a model's training data ends. The model knows nothing newer (new versions of tools, changed prices, recent events) unless you paste it into the chat, and it may confidently describe an old version as if it were current. *Week 1.*

## L

### Lethal trifecta

Simon Willison's name for a dangerous combination in an AI agent: access to **private data**, exposure to **untrusted content**, and a **way to send data out**. An agent with all three can be tricked into leaking your data. Coding agents usually have all three. See [Rule of Two](#rule-of-two). *Week 7.*

### Live preview

A chat assistant feature that runs the HTML, CSS and JavaScript it writes in a panel next to the chat, so you can see and click your page without saving any files. Gemini calls it *Canvas* and Claude calls it *Artifacts*; which to use is in [TOOLS.md](../TOOLS.md). *Weeks 1–3.*

### LLM

Short for *large language model*: an AI trained on huge amounts of text that writes text, including code, by predicting the next [token](#token) over and over. It does not look anything up or run your code unless a tool lets it, and it can be confidently wrong ([hallucination](#hallucination)). *Week 1.*

### LMS

Learning management system: your school's course website, where you submit links and see grades. Some are called "Canvas", which has nothing to do with Gemini's Canvas.

### localhost

The address that means "this computer", such as `http://localhost:3000`. A server you start in a Codespace listens on localhost, and Codespaces forwards it to a private web address you can open. *Weeks 4–5.*

### localStorage

A small storage area in the browser where a page can save text that survives a reload. It exists only in that browser on that device, and anyone using the device can read it in DevTools → Application. Fine for a to-do list; never for secrets. *Weeks 3–4.*

### LTS

Long-term support: the version of a tool, such as Node.js, that gets fixes for years and is recommended for most people. Choose it in the optional [local setup](../setup/local-setup.md).

## M

### Markdown

A simple way to format plain text files that end in `.md`: `#` for a heading, `**bold**`, `-` for a list. Every page of this course, and every README, is Markdown. *Week 1.*

### MCP

Short for *Model Context Protocol*: an open standard for connecting AI agents to tools and data, such as a database, a browser or a design app. *Like a universal plug that lets any agent use any tool.* An MCP server can run code on your machine, so read it before you install it. *Week 6.*

### Merge

Combining the changes from one [branch](#branch) into another. If both sides changed the same lines, git can't decide and asks you to resolve a *merge conflict* by hand ([how](troubleshooting.md#i-have-a-merge-conflict)). *Weeks 6–7.*

### Mock

A fake stand-in used in a test so the test doesn't depend on the outside world. The course's tests replace the real `fetch` with a mock that returns a made-up answer, so they run without internet access or an API key. *Weeks 5–6.*

### Model

One specific trained AI, such as the one behind a chat assistant. Companies release new models often and retire old ones, so the course names them only in [TOOLS.md](../TOOLS.md). *Week 1.*

### Model ID

The exact name an AI provider uses for one model in API requests. IDs change often, so don't copy one from an old tutorial. In the week 5 starter, `npm run models` lists the IDs your key can use. *Week 5.*

### Module

A JavaScript file that shares some of its functions with other files using `export`, and uses theirs with `import`. The starters keep pure logic in modules under `public/lib/` so the same code runs in the browser and in tests. A page loads a module with `<script type="module">`, which only works when the page is served, not opened as a file. *Week 5.*

### Multimodal

Describes an AI model that accepts more than text, such as images or audio. You can photograph a paper [wireframe](#wireframe) and ask a multimodal assistant to build the page from it. *Week 3.*

### MVP

Minimum viable product: the smallest version of your idea that is actually useful to someone. Build it first, ship it, then add features. *Week 3.*

## N

### Node.js

A program that runs JavaScript outside the browser: on a server, or in your Codespace terminal. The course's starters, servers and tests use it. *Week 5.*

### npm

The *Node package manager*: a command-line tool that installs [packages](#package) and runs a project's scripts (`npm test`, `npm run dev`). Also the name of the public package registry at npmjs.com. *Week 5.*

### npx

A command that comes with [npm](#npm) and runs a package's tool without installing it permanently, such as `npx --yes degit …`. It downloads and runs code, so check the package name first (see [slopsquatting](#slopsquatting)). *Weeks 4–8.*

### Null

JavaScript's value for "nothing here". The error `Cannot read properties of null` usually means the code looked for something, often a page [element](#element), that doesn't exist. *Week 4.*

## O

### OAuth

The standard behind "Sign in with GitHub" or "Sign in with Google" buttons. You let one service use your account on another without giving it your password. Read what access you are granting before you click **Authorize**. *Weeks 3–5.*

### OpenAI-compatible API

An [API](#api) that accepts requests in the same format as OpenAI's "chat completions" API. Many providers offer one, so the course's starter switches providers by changing three environment variables (`LLM_BASE_URL`, `LLM_API_KEY`, `LLM_MODEL`) and no code. *Week 5.*

### Oral walkthrough

A 10-minute conversation with the AI switched off, in weeks 4, 6 and 8: you explain your code, change it live and find a planted bug. See [assessment/oral-walkthroughs.md](../assessment/oral-walkthroughs.md). *Weeks 4, 6, 8.*

## P

### Package

Ready-made code that someone published (for JavaScript, on npm) and your project can install. Also called a *dependency*. Installing a package means trusting a stranger's code to run on your machine, so check that it exists and is the one you meant ([slopsquatting](#slopsquatting)). *Weeks 5 and 7.*

### Pair programming

Two people working on one task at one screen. The *driver* types; the *navigator* reads, asks questions and thinks ahead. Swap every 15 minutes or so. Several labs use it.

### Passkey

A replacement for a password: your device proves who you are with your fingerprint, face or PIN. Much harder to steal with [phishing](#phishing). Use one for GitHub and Google if you can. *Week 0.*

### Phishing

A fake message or website that tricks you into typing a password, code or key. Before signing in anywhere, check the address bar, not the look of the page. *Week 0.*

### Plan mode

An agent setting in which it reads your files and proposes a plan but doesn't edit anything until you approve. In a chat assistant you get the same effect by saying "Don't write any code yet." *Week 6.*

### Policy

A rule written for [row-level security](#row-level-security-rls) that says which rows a request may read or change. A typical Supabase policy lets a signed-in user touch only rows where `auth.uid() = user_id`: "your ID must match the row's owner". *Week 7.*

### Port

A numbered "door" on a computer that a server listens on, such as 8000 or 3000. Codespaces *forwards* ports so you can open your running app in a browser tab. *Week 4.*

### Postgres

PostgreSQL: a popular free [database](#database) that stores data in tables of rows and columns and is queried with [SQL](#sql). Every Supabase project includes one. *Week 7.*

### Production

The real, live version of an app that real users rely on, as opposed to *development*, where you experiment. Keep them separate, and never give an agent production passwords or keys ([case study](case-studies.md#4-replit-the-deleted-production-database)). *Weeks 5–7.*

### Prompt

What you type to an AI. This course writes prompts in four parts: **Goal · Context · Constraints · Done when**. See [prompt-patterns.md](prompt-patterns.md). *Weeks 1–2.*

### Prompt injection

Instructions hidden in content an AI reads, such as a web page, a file, an issue or an email, that hijack it into doing something you didn't ask. The AI can't reliably tell your instructions from the text it is processing. *Like a forged note slipped into an assistant's in-tray: "The boss says to send the files to this address."* *Week 7.*

### PROMPTS.md

The file in every project where you log your key prompts, what the AI got wrong, and what you changed yourself. Template: [templates/PROMPTS.md](../templates/PROMPTS.md). *Week 2 onward.*

### Proxy

A server that passes requests along on someone else's behalf. Your week 5 server route is a small proxy: the browser asks your server, and your server asks the AI provider using the secret key the browser never sees. *Week 5.*

### Publishable key

Supabase's public key (older projects call it the *anon key*). It is designed to sit in browser code, so it is safe **only** if [row-level security](#row-level-security-rls) protects every table. A public key plus missing rules means a public database. *Week 7.*

### Pull request

A request on GitHub to merge one [branch](#branch) into another. It opens a page where people can read the [diff](#diff), comment and approve before anything changes. Often shortened to PR. *Week 7.*

### Pure function

A [function](#function) whose result depends only on its inputs and that changes nothing else: no page, no storage, no network. Pure functions are the easiest code to test, which is why the starter kits keep logic in `lib/` folders. *Weeks 4–6.*

### Push and pull

**Push** sends your commits from your Codespace (or computer) up to GitHub. **Pull** brings down commits made elsewhere. A commit is saved only locally until you push. *Week 4.*

### Push protection

A GitHub feature that blocks a push when it recognizes a known kind of [secret](#secret), such as some API keys, in your commits. Helpful, but it doesn't recognize every kind of key, so check yourself as well. *Week 5.*

## R

### Rate limit

The most requests you may make in a period of time, such as per minute or per day. Go over it and the server answers `429 Too Many Requests`. Free tiers have tight limits, listed in [TOOLS.md](../TOOLS.md). *Week 5.*

### README

The front page of a repository (`README.md`): what the project is, how to use it, how to run it. GitHub shows it below the file list. Template: [templates/PROJECT_README.md](../templates/PROJECT_README.md). *Weeks 1 and 8.*

### Red/green testing

Write a test **first** and watch it fail (red), then change the code until it passes (green). The red step proves the test really checks something. *Week 6.*

### Release

A named, fixed version of your project on GitHub, such as `v1.0`, created from **Releases** on your repo page. It marks "this is the version I shipped". *Week 8.*

### Repository

A project folder tracked by git, including its full history of commits. On GitHub it has a web page. Usually shortened to *repo*. *Week 1.*

### Revert

Undoing a commit by making a **new** commit that does the opposite. History is kept, so you can always see what happened and undo the undo. It is the safe way to undo, unlike *reset*, which rewrites history. See [git-cheatsheet.md](git-cheatsheet.md#revert-vs-reset). *Week 2.*

### Revoke

To cancel a key or token so it stops working. If a secret was ever committed, pasted into a chat or shown on screen, revoke it and create a new one before doing anything else. Deleting the file is not enough, because git history keeps it. *Weeks 5 and 7.*

### Row-level security (RLS)

Database rules, called *policies*, that decide which rows each user may read or change. The database enforces them itself, whatever the browser asks for. In Supabase you must turn RLS on for every table and write policies; missing RLS is how the Lovable and Moltbook data leaks happened ([case studies](case-studies.md)). *Like safe-deposit boxes in a bank vault: everyone walks into the same vault, but your key opens only your box.* *Week 7.*

### Rule of Two

Meta's guideline for AI agents: in one session, an agent should have **no more than two** of (1) untrusted input, (2) access to private data or sensitive systems, and (3) the ability to change things or send data out. If it needs all three, a human approves its actions. See [lethal trifecta](#lethal-trifecta). *Week 7.*

## S

### Safe Loop

The course's six-step way of working with AI: **Describe → Plan → Step → Test → Read → Commit**. See [safe-loop.md](safe-loop.md). *Week 2 onward.*

### Sandbox

An isolated place where a program, especially an [agent](#agent), can work without reaching your real files, passwords or accounts. If it breaks something, only the sandbox is damaged. The course uses a [Codespace](#codespace) as the sandbox. *Week 6.*

### Secret

Anything that grants access: API keys, passwords, access [tokens](#token), a Supabase [secret key](#secret-key-service-role-key), the contents of `.env`. Secrets never go in browser code, in git, or in an AI chat. *Week 5.*

### Secret key (service-role key)

Supabase's server-only key, called the *service-role key* in older projects. It **bypasses** row-level security and can read or delete everything, like a master key. Never put it in front-end code, never commit it, and never give it to an agent. *Week 7.*

### Server

A program, and the computer it runs on, that waits for requests and sends back responses. Code on your server, and its environment variables, cannot be seen by the people using your site. Compare [client](#client). *Week 5.*

### Serverless function

A small piece of server code that the host runs only when a request arrives, so you don't manage a server machine. Vercel runs each file in your `api/` folder this way. *Like calling a taxi instead of owning a car.* *Week 5.*

### Slopsquatting

Publishing malware under package names that AI models tend to invent, then waiting for someone to install the made-up name the AI suggested. Defense: check every new package on npmjs.com before installing it. See [case studies](case-studies.md#10-slopsquatting-the-packages-that-dont-exist). *Week 7.*

### Source Control panel

The part of VS Code (and github.dev) where you see changed files, read their diffs, write a commit message and commit. Open it from the branching-lines icon in the left sidebar. See [git-cheatsheet.md](git-cheatsheet.md). *Weeks 2–4.*

### Spec

A short document, `SPEC.md`, that says what you will build and how you'll know it works: problem, user, user stories, acceptance criteria, what's out of scope, and a wireframe. *The prompt for the whole project.* Template: [templates/SPEC.md](../templates/SPEC.md). *Week 3.*

### SQL

Short for *Structured Query Language*: the language for creating database tables and asking them questions, such as `select * from notes`. Supabase uses Postgres, a popular database that speaks SQL. In week 7 you paste prepared SQL rather than write it from scratch. *Week 7.*

### Stack trace

The list of lines under an error message showing the chain of function calls that led to it, most recent first. The first line that points at one of *your* files is usually where to look ([how to read one](without-ai-skills.md#1-read-an-error-message-and-find-the-failing-line)). *Week 4.*

### Stage

To choose which changes go into your next [commit](#commit). In the Source Control panel, the **+** next to a file stages it; in the terminal, `git add` does the same. *Weeks 2 and 4.*

### State

The information an app is holding right now: the list of items, which one is selected, whether it is loading. Many bugs are the page showing something different from the state. *Week 4.*

### Static site

A site made only of files (HTML, CSS, JavaScript, images) that are sent to the browser exactly as they are, with no server code of your own. GitHub Pages hosts static sites. *Week 1.*

### Status code

The three-digit number at the start of every HTTP response: `200` OK, `404` Not Found, `429` Too Many Requests, `500` server error, and so on. See [web-basics.md](web-basics.md#status-codes-you-will-meet). *Week 5.*

### Streaming

Sending an AI's reply in small pieces as it is generated, so the text appears word by word instead of all at once. A stretch goal in week 5.

### String

Text inside a program, written in quotes: `"hello"`. Anything read from an input box is a string, so `"10" + "5"` gives `"105"`, not `15`, until you convert with `Number(...)`. *Week 4.*

### SyntaxError, TypeError and ReferenceError

Three JavaScript errors you will meet. **SyntaxError:** the code is not valid JavaScript (often a missing bracket), so none of the file runs. **TypeError:** a value is the wrong kind for what the code tried, such as reading a property of [null](#null). **ReferenceError:** a name that was never defined, often a typo. The Console shows each with a file and line number. *Week 4.*

### System prompt

Instructions given to a model before the conversation starts, setting its role and rules. Users usually don't see it. In your week 5 app it's the message with the role `"system"`; the [course tutor](../instructor/course-tutor.md) is a system prompt too. It is not a security wall: [prompt injection](#prompt-injection) can override it. *Weeks 5–6.*

## T

### Telemetry

Usage data an app sends back to its maker, such as which features you used and what errors happened. Most tools let you turn some of it off. *Week 0.*

### Template repository

A GitHub repository set up as a starting point: its **Use this template** button makes a fresh copy under your account, with its own history. The course publishes its starter kits this way ([how to start from a starter](../setup/codespaces.md#start-a-project-from-a-starter)). *Weeks 4–6.*

### Temporary chat

A chat mode that isn't saved to your history and, in most tools, isn't used for training. Use one for anything sensitive. See [privacy settings](../setup/privacy-settings.md). *Week 0.*

### Terminal

A text window where you type commands, such as `git status` or `npm test`, and read their output. In a Codespace it is the panel at the bottom of the screen. Also called the *command line* or *shell*. *Week 4.*

### Test (manual and automated)

A check that the code does what it should. A **manual test** is a list of steps a person follows and a result to expect ([templates/TESTS.md](../templates/TESTS.md)). An **automated test** is code that checks code, run with `npm test`, so you can re-check everything in seconds after each change. *Manual: weeks 3–4. Automated: week 6.*

### Token

Two meanings; context tells you which. (1) A chunk of text, often part of a word, that an [LLM](#llm) reads and writes; context windows and limits are counted in tokens. (2) An *access token*: a secret string that works like a password for programs, such as a GitHub token. *Weeks 1 and 5.*

### Tool call

A request from an AI model to its [harness](#harness) to use one tool, such as "read this file" or "run the tests". The harness runs it and sends back the result, and the model decides what to do next. *Week 6.*

### Tutor mode

Using an AI that gives hints and asks questions instead of handing you the answer. You switch it on by pasting the [course tutor prompt](../instructor/course-tutor.md). It's the only AI allowed in the Debug Clinic. *Week 4.*

### Two-factor authentication (2FA)

A second check when you sign in, such as a code from an authenticator app or a [passkey](#passkey), on top of your password. Turn it on for GitHub and Google in week 0.

### Two-strikes rule

If two attempts to fix the same problem fail, stop. Go back to your last good commit if things got worse, start a fresh chat, and rewrite the prompt with what you learned. See [safe-loop.md](safe-loop.md#the-two-strikes-rule). *Week 2.*

## U

### URL

A web address, such as `https://ada.github.io/game/index.html`. It names the protocol, the site and the file or [endpoint](#endpoint). See [web-basics.md](web-basics.md#urls). *Week 1.*

### User story

One sentence describing what someone wants and why: *As a …, I want to …, so that ….* Each story gets one or more [acceptance criteria](#acceptance-criterion). *Week 3.*

## V

### Variable

A named box that holds a value in a program, such as `let score = 0`. The name stays the same while the value inside can change. *Weeks 1–2.*

### Vercel

A hosting service that serves static files and runs [serverless functions](#serverless-function). The course's primary host from week 5. Its free plan works only with repositories on your personal account ([TOOLS.md](../TOOLS.md)). *Week 5.*

### Vibe coding

Andrej Karpathy's February 2025 name for building software by describing what you want to an AI, accepting whatever it writes without reading the code, and judging only by running it. Fine for throwaway toys. This course starts there in week 1, then adds [the Safe Loop](#safe-loop). Some authors now use the phrase for careful work as well, so check what a writer means. *Week 1.*

### VS Code

Visual Studio Code, a free code editor from Microsoft. Codespaces and github.dev run it in your browser. *Week 4.*

## W

### Wireframe

A rough sketch of a screen's layout: boxes and labels, no colors. Paper and a pen are fine. It goes in your [spec](#spec). *Week 3.*

### WSL

Windows Subsystem for Linux: a way to run a Linux terminal inside Windows. Optional; only for the [local setup](../setup/local-setup.md).

## X

### XSS

Short for *cross-site scripting*: an attacker gets their own JavaScript to run in other people's browsers, usually by typing code into a field that your page later displays with `innerHTML`. Prevent it by showing user text with `textContent`. Test with the input `<img src=x onerror=alert(1)>`: if an alert pops up, you have an XSS bug. *Week 7.*
