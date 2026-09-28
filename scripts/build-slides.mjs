#!/usr/bin/env node
// Builds every weeks/*/slides.md deck into dist/slides/ as a standalone HTML presentation,
// plus a small index page. Press "p" in a deck for presenter view with speaker notes.
// Run it after the website build (npm run site:build does this), because the website
// build clears dist/ first.
import { readdirSync, existsSync, mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { execFileSync } from "node:child_process";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const weeksDir = join(root, "weeks");
const out = join(root, "dist", "slides");
mkdirSync(out, { recursive: true });

const marp = join(root, "node_modules", ".bin", process.platform === "win32" ? "marp.cmd" : "marp");
const command = existsSync(marp) ? [marp] : ["npx", "--yes", "@marp-team/marp-cli@4"];

const decks = [];
for (const week of readdirSync(weeksDir).sort()) {
  const src = join(weeksDir, week, "slides.md");
  if (!existsSync(src)) continue;
  const number = week.slice(0, 2);
  const title = (readFileSync(join(weeksDir, week, "README.md"), "utf8").match(/^#\s+(.+)$/m) || [, week])[1];
  const target = join(out, `week-${number}.html`);
  execFileSync(command[0], [...command.slice(1), src, "--output", target, "--allow-local-files"], {
    stdio: ["ignore", "ignore", "inherit"],
  });
  decks.push({ file: `week-${number}.html`, title });
  console.log(`Built ${target.replace(root + "/", "")}`);
}

const items = decks.map((d) => `      <li><a href="${d.file}">${d.title}</a></li>`).join("\n");
writeFileSync(
  join(out, "index.html"),
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Vibe Coding 101 — Slides</title>
    <style>
      body { font-family: system-ui, sans-serif; max-width: 40rem; margin: 3rem auto; padding: 0 1rem; line-height: 1.6; }
      a { color: #0b57d0; }
    </style>
  </head>
  <body>
    <h1>Vibe Coding 101 — Slides</h1>
    <p>Concept talks for each week. Press <kbd>p</kbd> inside a deck for presenter view with speaker notes.
    Course website: <a href="../">Directed Study: Vibe Coding 101</a>.</p>
    <ul>
${items}
    </ul>
    <p><small>Licensed under CC BY 4.0.</small></p>
  </body>
</html>
`
);
console.log(`Built ${decks.length} decks and dist/slides/index.html`);
