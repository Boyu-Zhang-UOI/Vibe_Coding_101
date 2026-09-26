# AGENTS.md

<!--
Instructions for AI coding assistants and agents working in this repository.
Keep this file SHORT. Humans: see README.md.
-->

## Project

A small web app: the visitor types a question, the server route `/api/ask` sends it to an LLM, and the page shows the reply. See `README.md`.

## Layout

- `public/`: browser code (HTML, CSS, ES modules). **Everything here is public.** No build step, no frameworks.
- `public/lib/`: pure logic used by the browser, and by the server for input checks. Tested in Node.
- `api/ask.js`: the server route. Exports `export default { async fetch(request) { ... } }`.
- `lib/`: server-only code: `llm.js` (AI provider call), `prompt.js` (system prompt), `validate.js` (input checks). Never import these from `public/`.
- `tests/*.test.js`: Node's built-in test runner. Tests must not use the network or a real key; stub `fetch`.

## Commands

- `npm run dev`: local server on port 3000 (restart after changing `.env`, `api/` or `lib/`)
- `npm test`: run all tests
- `npm run models`: list model IDs for the configured provider
- `npm run check:secrets`: scan the repo for secrets

## How to work with me

1. One small task at a time. Propose a short plan and wait for my approval before editing.
2. Run `npm test` before saying you are done, and paste the output.
3. Keep changes small; don't rename or reformat things you weren't asked to change.

## Never

- Read, print or edit `.env`, or put an API key anywhere in `public/`, in a test, or in a log message.
- Call the AI provider from the browser. All AI calls go through `api/` and `lib/llm.js`.
- Remove the input checks in `lib/validate.js` or `public/lib/input.js`.
- Add dependencies, or delete files, without asking first.
- Use `innerHTML` for text from the user or the AI. Use `textContent`.
