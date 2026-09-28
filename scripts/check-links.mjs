#!/usr/bin/env node
// Checks every relative link in the repository's Markdown files:
// the target file or folder must exist, and a #heading anchor must match a heading.
// External links (http, https, mailto) are not checked, so this runs offline.
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, resolve, relative, extname } from "node:path";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const skipDirs = new Set([".git", "node_modules", "dist", ".vercel", "site"]); // site/ is checked by the website build

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    if (skipDirs.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else if (extname(name) === ".md") files.push(full);
  }
  return files;
}

// GitHub-style heading slugs: lowercase, drop punctuation, spaces become hyphens.
function slugify(text) {
  return text
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // links and images -> their text
    .replace(/<[^>]+>/g, "") // inline HTML
    .replace(/[`*~]/g, "") // formatting marks
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, "")
    .replace(/ /g, "-");
}

const anchorCache = new Map();
function anchorsFor(file) {
  if (anchorCache.has(file)) return anchorCache.get(file);
  const anchors = new Set();
  const counts = new Map();
  let inFence = false;
  for (const line of readFileSync(file, "utf8").split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    if (inFence) continue;
    const m = /^#{1,6}\s+(.*?)\s*#*\s*$/.exec(line);
    if (m) {
      const base = slugify(m[1]);
      const n = counts.get(base) ?? 0;
      anchors.add(n === 0 ? base : `${base}-${n}`);
      counts.set(base, n + 1);
    }
    for (const id of line.matchAll(/<a\s+(?:id|name)="([^"]+)"/g)) anchors.add(id[1]);
  }
  anchorCache.set(file, anchors);
  return anchors;
}

const problems = [];
let checked = 0;

for (const file of walk(root)) {
  let inFence = false;
  let inComment = false;
  const lines = readFileSync(file, "utf8").split("\n");
  lines.forEach((raw, i) => {
    if (/^\s*(```|~~~)/.test(raw)) inFence = !inFence;
    if (inFence) return;
    // Ignore links inside HTML comments (placeholders in templates, speaker notes).
    let line = raw;
    if (inComment) {
      const end = line.indexOf("-->");
      if (end === -1) return;
      line = line.slice(end + 3);
      inComment = false;
    }
    line = line.replace(/<!--.*?-->/g, "");
    const start = line.indexOf("<!--");
    if (start !== -1) {
      line = line.slice(0, start);
      inComment = true;
    }
    const withoutCode = line.replace(/`[^`]*`/g, "");
    for (const m of withoutCode.matchAll(/!?\[[^\]]*\]\(\s*<?([^)\s>]+)>?(?:\s+"[^"]*")?\s*\)/g)) {
      const target = m[1];
      if (/^(https?:|mailto:|tel:|data:)/i.test(target)) continue;
      if (target.includes("<") || target.includes("{")) continue; // placeholders
      checked++;
      const [pathPart, anchor] = target.split("#");
      const targetFile = pathPart ? resolve(dirname(file), decodeURIComponent(pathPart)) : file;
      const where = `${relative(root, file)}:${i + 1}`;
      if (!existsSync(targetFile)) {
        problems.push(`${where}  missing file: ${target}`);
        continue;
      }
      if (anchor && extname(targetFile) === ".md" && !anchorsFor(targetFile).has(anchor)) {
        problems.push(`${where}  missing anchor: ${target}`);
      }
    }
  });
}

if (problems.length) {
  console.error(`Found ${problems.length} broken link(s) out of ${checked} checked:\n`);
  for (const p of problems) console.error("  " + p);
  process.exit(1);
}
console.log(`All ${checked} relative links OK.`);
