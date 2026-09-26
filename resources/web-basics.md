# How the Web Works

> A plain-English guide for people who have never coded. Read it before week 1 if you like, and again before week 5, when it matters most.
> The one idea to take away: **anything that reaches the browser is public. Secrets and rules belong on the server.**

**On this page:** [Browsers and servers](#browsers-and-servers) · [URLs](#urls) · [HTML, CSS and JavaScript](#html-css-and-javascript) · [Requests and responses (HTTP)](#requests-and-responses-http) · [JSON](#json) · [APIs](#apis) · [Front end and back end](#front-end-and-back-end) · [Static and dynamic sites](#static-and-dynamic-sites) · [Databases](#databases) · [The trust boundary](#the-trust-boundary) · [A short DevTools tour](#a-short-devtools-tour) · [Try it](#try-it-10-minutes)

---

## Browsers and servers

The web is a conversation between two kinds of program.

- A **browser** (Chrome, Edge, Firefox, Safari) runs on the visitor's device. It asks for pages and shows them.
- A **server** runs on a computer somewhere else. It waits for requests and sends back answers.

When you type an address and press Enter, your browser sends a **request** across the internet. A server sends back a **response**, usually a file. The browser reads that file, notices it needs more files (a stylesheet, a script, some images), and asks for each one. Then it assembles the page on your screen.

*It works like a restaurant. You (the browser) order from the menu. The kitchen (the server) cooks and sends out dishes. You never see the kitchen, but you can inspect everything that reaches your table.*

That last sentence is the most important security idea in the course. We come back to it in [the trust boundary](#the-trust-boundary).

## URLs

A **URL** is a web address. Every part of it means something:

```text
https://ada.github.io/game/index.html?level=2#scores
```

| Part | In the example | What it means |
|---|---|---|
| Protocol | `https://` | How to talk. The `s` means the conversation is encrypted. |
| Host (domain) | `ada.github.io` | Which server to ask. |
| Path | `/game/index.html` | Which file or [endpoint](glossary.md#endpoint) on that server. If you leave off the file name, most servers look for `index.html`. |
| Query | `?level=2` | Extra information for the page or server, as `name=value` pairs. |
| Fragment | `#scores` | A spot on the page to scroll to. It is never sent to the server. |

> [!WARNING]
> Never put personal data, passwords or keys in a URL. URLs are saved in browser history, in server logs and in anything you share.

Paths are **case-sensitive** on most servers, GitHub Pages included: `Game/Index.html` and `game/index.html` are different files. That one detail causes many "404 Not Found" errors ([troubleshooting](troubleshooting.md#github-pages-shows-404)).

## HTML, CSS and JavaScript

Every web page is built from three languages, each with one job:

| Language | Job | House analogy | Tiny example |
|---|---|---|---|
| **HTML** | Structure and content: headings, paragraphs, buttons, images | Walls and rooms | `<button id="add">Add</button>` |
| **CSS** | Appearance: colors, fonts, spacing, layout | Paint and furniture | `button { background: teal; }` |
| **JavaScript** | Behavior: what happens when you click, type or load | Wiring and electricity | `button.addEventListener('click', addItem)` |

In your projects these usually live in three files: `index.html`, `style.css` and `app.js`. The HTML file links to the other two.

When the browser reads your HTML, it builds a live model of the page in memory called the **DOM** ([glossary](glossary.md#dom)). JavaScript changes what you see by changing the DOM, for example adding a new list item. Reload the page and the browser rebuilds the DOM from the HTML file, so anything JavaScript added is gone unless you saved it somewhere, such as [localStorage](glossary.md#localstorage).

## Requests and responses (HTTP)

**HTTP** is the set of rules for the browser–server conversation. Each exchange is one request and one response. Here is what your week 5 app sends when someone asks it a question. You can see exactly this in DevTools → Network.

```text
REQUEST  (browser → server)
POST /api/ask
Content-Type: application/json

{"message": "Suggest a name for my cat"}


RESPONSE  (server → browser)
200 OK
Content-Type: application/json

{"reply": "How about Captain Whiskers?"}
```

A request has:

- a **method**: `GET` to fetch something, `POST` to send something;
- a **URL**: where it goes;
- **headers**: labels such as the content type, or an `Authorization` header that carries a key;
- sometimes a **body**: the data being sent.

A response has a **status code**, headers and a body.

### Status codes you will meet

The first digit tells you whose problem it is: **2** means it worked, **4** means the request was wrong, **5** means the server broke.

| Code | Name | What it usually means in this course |
|---|---|---|
| `200` | OK | It worked. |
| `304` | Not Modified | The browser used its cached copy. Fine, unless you expected a change ([hard reload](glossary.md#hard-reload)). |
| `400` | Bad Request | What you sent was malformed, such as broken JSON or a missing field. |
| `401` | Unauthorized | The key or login is missing or wrong. |
| `403` | Forbidden | The server knows who you are and says no. |
| `404` | Not Found | Wrong path, wrong file name (check capital letters), or wrong model name. |
| `429` | Too Many Requests | You hit a [rate limit](glossary.md#rate-limit). Slow down or wait. |
| `500` | Internal Server Error | Your server code crashed. Read the server's log, not the browser's. |
| `502` | Bad Gateway | Something behind the server failed or isn't running. |

What to do about each one: [troubleshooting.md](troubleshooting.md#my-api-call-returns-an-error).

## JSON

**JSON** is a plain-text format for structured data. Almost every API speaks it.

```json
{
  "title": "Water the plants",
  "done": false,
  "tags": ["home", "weekly"],
  "dueInDays": 3
}
```

Curly braces `{ }` hold named values, square brackets `[ ]` hold lists, text goes in "double quotes", and `true`, `false` and numbers don't. JSON is strict: single quotes or a comma after the last item make it invalid, and you'll see an error such as `Unexpected token`. Your apps also use JSON to save lists in localStorage, because localStorage can only store text.

## APIs

An **API** is a menu of requests one program can make to another. *Like ordering through a waiter: you choose from a fixed menu, you get a dish back, and you never enter the kitchen.*

In week 5 your app uses an LLM provider's API:

1. The user types a question on your page.
2. Your page sends it to **your own server** (`/api/ask`).
3. Your server adds the secret [API key](glossary.md#api-key) and sends the question to the provider's API.
4. The provider sends back an answer as JSON. Your server passes the useful part back to the page.

Why the extra hop through your server? Because the key must never reach the browser. If the page called the provider directly, the key would be sitting in public code, and anyone could copy it and spend your quota.

Many providers accept the same request format, called an [OpenAI-compatible API](glossary.md#openai-compatible-api). That is why the course starter can switch providers by changing settings instead of code. Current providers: [TOOLS.md](../TOOLS.md).

## Front end and back end

| | Front end | Back end |
|---|---|---|
| Runs on | The visitor's browser | A server (for us, a Vercel function) |
| Who can read the code | **Anyone** (DevTools → Sources) | Only you and your host |
| Made of | HTML, CSS, JavaScript | JavaScript running on [Node.js](glossary.md#nodejs), plus databases |
| In the course starters | `public/` folder | `api/` folder |
| Safe place for secrets? | **Never** | Yes, in [environment variables](glossary.md#environment-variable) |
| Can enforce rules? | No. The user controls their browser. | Yes |

"Full-stack" just means an app with both.

## Static and dynamic sites

- A **static site** is only files (HTML, CSS, JavaScript, images) that the host sends exactly as they are. There's no server code of your own. GitHub Pages hosts static sites, and weeks 1–4 use them. A static site can still be interactive: JavaScript runs in the browser, and localStorage remembers data on that one device.
- A **dynamic site** also runs code on a server for each request. It can keep secrets, call APIs with a hidden key, and read or write a shared database. From week 5 you host these on Vercel, where each file in `api/` becomes a [serverless function](glossary.md#serverless-function).

You need a server when you have **a secret to keep** or **data to share between users**. Otherwise, static is simpler, free and faster.

## Databases

A **database** stores data on a server so that many people, on many devices, see the same thing. *Picture a shared spreadsheet: a **table** per kind of thing (notes, scores), a **row** per item, a **column** per detail.*

Compare the two places your projects store data:

| | localStorage (weeks 3–4) | Database (weeks 7–8) |
|---|---|---|
| Where it lives | In one browser, on one device | On a server |
| Who sees it | Whoever uses that browser | Everyone the rules allow |
| Survives clearing the browser? | No | Yes |
| Needs access rules? | No, it's single-user | **Yes, always** |

Once data is shared, you have to decide who may read and change each row. In Supabase, the database enforces that with [row-level security](glossary.md#row-level-security-rls). Without it, a public key plus a missing rule means anyone can read and change everything. That is exactly what happened to the apps in the [Lovable and Moltbook case studies](case-studies.md).

## The trust boundary

This diagram shows what runs where in a week 5–8 app, and what the public can see.

```text
               PUBLIC SIDE: assume anyone can see all of this
┌──────────────────────────────────────────────────────────────────────┐
│ The visitor's BROWSER                    Your GitHub REPO (public)   │
│ • your HTML, CSS and JavaScript          • every file                │
│ • localStorage on that device            • every old commit, forever │
│ • every request and response                                         │
│   (DevTools → Network)                                               │
│ • the Supabase publishable key                                       │
└──────────┬──────────────────────────────────────────┬────────────────┘
           │ fetch("/api/ask")                       │ publishable key,
           │                                          │ from the page
═══════════╪═════════════ TRUST BOUNDARY ═════════════╪═════════════════
           ▼                                          ▼
┌─────────────────────────────────┐   ┌────────────────────────────────┐
│ Your SERVER                     │   │ DATABASE (Supabase)            │
│ api/ask.js, running on Vercel  │   │ row-level security policies    │
│ • env vars: LLM_API_KEY,        │   │ decide, row by row, what each  │
│   Supabase secret key           │   │ request may read or change     │
│ • checks input, sets limits     │   │                                │
└──────────┬──────────────────────┘   └────────────────────────────────┘
           │ API key sent in a header
           ▼
┌─────────────────────────────────┐
│ LLM PROVIDER (Gemini, Groq ...) │
└─────────────────────────────────┘
               PRIVATE SIDE: only you and your host can see inside
```

Four rules follow from the picture:

1. **Everything above the line is public.** That includes your front-end code, anything in localStorage, every network request, and every commit in a public repo, including old ones. "Hidden" in a variable or a minified file still means public.
2. **Secrets live only below the line**, in environment variables on the server. The Supabase secret key and your LLM API key never go above it.
3. **Anything that crosses the line can be faked.** A visitor can edit your JavaScript, skip your checks and send any request they like. So the server and the database must check every request themselves. That is where [authorization](glossary.md#authorization) lives.
4. **The publishable key is meant to cross the line**, which is exactly why row-level security must be on for every table.

> [!IMPORTANT]
> One of the [six skills you must show without AI](without-ai-skills.md) is saying where authorization is enforced in your app. The answer is always a place below the line.

## A short DevTools tour

Every desktop browser has developer tools built in. They let you see what your page is really doing instead of guessing.

**Open them:** press **F12**, or **Ctrl+Shift+I** (Windows, Linux, ChromeOS) or **Cmd+Option+I** (Mac). You can also right-click anything on a page and choose **Inspect**. These steps use Chrome or Edge. Firefox is almost the same, but calls the storage tab **Storage**. In Safari, first turn on Settings → Advanced → "Show features for web developers".

> [!NOTE]
> Menus move. If you can't find a tab, look for a `»` or `+` button in the DevTools tab bar, or ask your assistant where it is in your browser.

| Tab | What it shows | Use it when |
|---|---|---|
| **Elements** | The live page structure (the DOM) and the CSS applied to each part. You can edit both, and the changes vanish on reload. | "Why is this button in the wrong place?" Try a CSS change here before asking the AI. |
| **Console** | Errors in red, with the file and line number on the right. You can also type JavaScript here. | Your page is blank or a button does nothing. **Always look here first.** |
| **Network** | Every request the page made: status code, size, time. Click one to see its headers, what was sent (Payload) and what came back (Response). | An API call fails, or you want to prove your key is not sent from the browser. |
| **Sources** | The actual files the browser downloaded. | Proving to yourself that front-end code is public. (Advanced: click a line number to pause the code there.) |
| **Application → Local Storage** | Everything your site saved in localStorage, as key–value pairs. You can edit or delete entries. | Checking what your app saved, or resetting it to test the empty state. |

Two more buttons worth knowing:

- **Device toolbar** (the phone-and-tablet icon, or **Ctrl+Shift+M** / **Cmd+Shift+M** while DevTools is open) shows your page at phone size. Use it for your "small screen" [edge case](glossary.md#edge-case).
- **Disable cache** (a checkbox in the Network tab) makes the browser fetch fresh files while DevTools is open. Handy when your changes don't show up.

## Try it (10 minutes)

Open your own home page (or any page of yours) and open DevTools.

1. **Elements:** click the arrow icon at the top left of DevTools, then click your main heading. Double-click its text in the Elements panel and change it. The page changes. Reload: it's back. *You edited the DOM, not the file.*
2. **Console:** type `document.title` and press Enter. You get your page's title. Now type `document.querySelector('#does-not-exist').textContent = 'hi'` and press Enter. Read the red error: `Cannot set properties of null`. It means "the thing you asked for doesn't exist". You will see this error again.
3. **Network:** reload the page. Find `index.html` (status `200`). Now visit a page on your site that doesn't exist, such as `/nope.html`, and find the `404`.
4. **Application → Local Storage:** in the Console, type `localStorage.setItem('hello', 'world')`. Open Application → Local Storage → your site. There it is. Right-click it and delete it.
5. **Sources:** open your site's files. Everything you wrote is there, readable by anyone. Keep that picture in mind in week 5.

✅ **Checkpoint:** you can find a red error and its line number, find a request and its status code, and find what your site saved in localStorage.

## Where this shows up in the course

| Week | What you'll use from this page |
|---|---|
| [1](../weeks/01-hello-vibe-coding/) | HTML, CSS and JavaScript roles; URLs; static sites on GitHub Pages |
| [3–4](../weeks/04-read-debug-own-it/) | localStorage, the DOM, DevTools Console and Application, status codes |
| [5](../weeks/05-apis-secrets-servers/) | HTTP, JSON, APIs, front end and back end, the trust boundary |
| [7](../weeks/07-security-and-review/) | Databases, authorization, row-level security, the publishable key |

Words you don't know are in the [glossary](glossary.md).
