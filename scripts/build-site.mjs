#!/usr/bin/env node
// Assembles the course website's source pages in site/src/ from the repository's Markdown files.
//
// The repository stays the single source of truth; this script only copies and adapts:
//   - README.md files become index.md, so a folder's README is its page.
//   - Instructor-only material (instructor notes, answer keys, exit tickets, the instructor guide)
//     is left out, and links to it are removed. Instructor-only sections of shared pages are cut.
//   - Links to files that are not website pages (starter kits, code, research notes) point to GitHub.
//   - Links to a week's slides.md point to the built slide deck.
//   - Link text that is only a file path (e.g. "setup/privacy-settings.md") becomes the target page's title.
//   - Template pages get a "Copy this template" block holding the template's raw text.
//   - Text diagrams (boxes drawn with characters) get a text alternative for screen readers, and tables
//     with an empty header row get hidden header labels.
//   - Placeholder text such as <your name> is escaped so the site builder doesn't read it as HTML.
//   - The RLS Attack Lab page (rls-lab/attack.html) is published at /tools/rls-attack.html.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, statSync, readdirSync, cpSync, copyFileSync } from "node:fs";
import { join, dirname, resolve, relative, posix } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "site", "src");
export const REPO = "https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101";
export const SITE_URL = (process.env.SITE_URL || "https://boyu-zhang-uoi.github.io/Vibe_Coding_101").replace(/\/$/, "");

// ---------------------------------------------------------------- which files become pages
// Starter kits (scripts/kits.json) are separate repositories for students, not website pages.
const kitDirs = JSON.parse(readFileSync(join(root, "scripts", "kits.json"), "utf8")).kits.map((k) => k.path);

// Teacher-only files: not published, and links to them are removed (not redirected).
const hidden = (p) =>
  /^weeks\/[^/]+\/instructor-notes\.md$/.test(p) ||
  p === "instructor" ||
  p === "instructor/README.md" ||
  p.startsWith("instructor/answer-keys") ||
  p === "assessment/exit-tickets.md";
// Other instructor pages (variants, pre-cohort checklist) are not published either,
// but links to them go to GitHub, because students are sometimes pointed there.
const instructorOnly = (p) => p.startsWith("instructor/") && p !== "instructor/course-tutor.md";

// Sections cut from pages that are otherwise student-facing.
const cutSections = {
  "assessment/oral-walkthroughs.md": ["Examiner script", "Staffing and scheduling", "Record sheet"],
};
const isInstructorHeading = (text) => /^for instructors\b|\(for instructors\)/i.test(text.trim());

// Pages whose website path differs from their repository path.
const renamed = { "instructor/course-tutor.md": "resources/tutor-mode.md" };

function included(p) {
  if (!p.endsWith(".md") || hidden(p) || instructorOnly(p)) return false;
  if (p === "README.md" || p === "CONTRIBUTING.md") return false; // home page replaces README
  if (kitDirs.some((d) => p.startsWith(d + "/"))) return false;
  if (/^weeks\/[^/]+\/slides\.md$/.test(p)) return false; // built separately as slide decks
  if (p.startsWith("research/notes/")) return false;
  if (p in renamed) return true;
  return /^(SYLLABUS|TOOLS)\.md$/.test(p) || /^(setup|weeks|projects|assessment|templates|resources|research)\//.test(p);
}

function walk(dir, files = []) {
  for (const name of readdirSync(join(root, dir))) {
    if ([".git", "node_modules", "dist", "site", ".github"].includes(name)) continue;
    const rel = dir ? `${dir}/${name}` : name;
    if (statSync(join(root, rel)).isDirectory()) walk(rel, files);
    else files.push(rel);
  }
  return files;
}

const pages = walk("").filter(included);
const stagedPath = (p) => {
  if (p === "README.md") return "index.md";
  if (renamed[p]) return renamed[p];
  return p.replace(/(^|\/)README\.md$/, "$1index.md");
};
const pageSet = new Set(pages);

// ---------------------------------------------------------------- titles and headings
const cleanText = (text) =>
  text
    .replace(/!?\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> their text
    .replace(/<[^>]+>/g, "")
    .replace(/[`*]/g, "")
    .trim();

/** The first "# " heading of a repository Markdown file, or null. */
const titleCache = new Map();
function titleOf(repoPath) {
  if (!titleCache.has(repoPath)) {
    const full = join(root, repoPath);
    const h1 = existsSync(full) && statSync(full).isFile() ? readFileSync(full, "utf8").match(/^#\s+(.+)$/m) : null;
    titleCache.set(repoPath, h1 ? cleanText(h1[1]) : null);
  }
  return titleCache.get(repoPath);
}

// GitHub-style heading anchors (the same rules as scripts/check-links.mjs).
function slugify(text) {
  return cleanText(text)
    .replace(/[~]/g, "")
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, "")
    .replace(/ /g, "-");
}

/** The text of the heading that `anchor` points to in a repository Markdown file, or null. */
function headingText(repoPath, anchor) {
  const counts = new Map();
  let inFence = false;
  for (const line of readFileSync(join(root, repoPath), "utf8").split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
    const m = !inFence && /^#{1,6}\s+(.*?)\s*#*\s*$/.exec(line);
    if (!m) continue;
    const base = slugify(m[1]);
    const n = counts.get(base) ?? 0;
    counts.set(base, n + 1);
    if ((n === 0 ? base : `${base}-${n}`) === anchor) return cleanText(m[1]);
  }
  return null;
}

/**
 * Link text that is only a file path ("setup/privacy-settings.md", "../TOOLS.md#gemini") reads badly,
 * especially to screen readers. Returns a better label (the target's title), or null to keep it.
 */
export function betterLabel(label, target, fromRepoPath) {
  const text = label.replace(/`/g, "").trim();
  if (!/^(?:\.{1,2}\/)*(?:[\w.-]+\/)*[\w.-]+\.md(?:#[\w-]+)?$/.test(text)) return null;
  if (/^[a-z]+:/i.test(target) || target.startsWith("#")) return null;
  const [pathPart, anchor] = target.split("#");
  const repoPath = posix.normalize(posix.join(posix.dirname(fromRepoPath), decodeURIComponent(pathPart)));
  if (repoPath === "instructor/course-tutor.md") return "Tutor mode";
  const slides = repoPath.match(/^weeks\/(\d\d)-[^/]+\/slides\.md$/);
  if (slides) return `Week ${Number(slides[1])} slides`;
  if (!repoPath.endsWith(".md") || !existsSync(join(root, repoPath))) return null;
  const title = repoPath.startsWith("templates/") ? `${posix.basename(repoPath)} template` : titleOf(repoPath);
  if (!title) return null;
  const section = anchor ? headingText(repoPath, anchor) : null;
  return section ? `${title}: ${section}` : title;
}

// ---------------------------------------------------------------- link rewriting
function rewriteTarget(target, fromRepoPath) {
  if (/^(https?:|mailto:|tel:|data:|#)/i.test(target) || target.startsWith("/")) return { url: target };
  const [pathPart, anchor] = target.split("#");
  const hash = anchor ? `#${anchor}` : "";
  const abs = posix.normalize(posix.join(posix.dirname(fromRepoPath), decodeURIComponent(pathPart)));
  const repoPath = abs.replace(/\/$/, "");
  const full = join(root, repoPath);
  const fromStaged = stagedPath(fromRepoPath);
  const rel = (to) => {
    let r = posix.relative(posix.dirname(fromStaged), to);
    if (!r.startsWith(".")) r = "./" + r;
    return r;
  };

  const slides = repoPath.match(/^weeks\/(\d\d)-[^/]+\/slides\.md$/);
  if (slides) return { url: `${SITE_URL}/slides/week-${slides[1]}.html` };
  if (repoPath === "README.md" || repoPath === "") return { url: rel("index.md") + hash };
  if (hidden(repoPath)) return { hidden: true };
  if (!existsSync(full)) return { url: target }; // leave as is; the site build will flag it
  if (statSync(full).isDirectory()) {
    if (pageSet.has(`${repoPath}/README.md`)) return { url: rel(`${stagedPath(`${repoPath}/README.md`)}`).replace(/index\.md$/, "") + hash };
    return { url: `${REPO}/tree/main/${repoPath}` };
  }
  if (pageSet.has(repoPath)) return { url: rel(stagedPath(repoPath)) + hash };
  return { url: `${REPO}/blob/main/${repoPath}${hash}` };
}

const linkRe = /(!?)\[([^\]]*)\]\(\s*<?([^)\s>]+)>?((?:\s+"[^"]*")?)\s*\)/g;

// Positions of `inline code` spans in a line, so link-like text inside code is left alone.
function codeSpans(line) {
  const spans = [];
  for (const m of line.matchAll(/(`+)[^`]*?\1/g)) spans.push([m.index, m.index + m[0].length]);
  return spans;
}
const insideCode = (i, spans) => spans.some(([a, b]) => i >= a && i < b);

function rewriteLinks(text, fromRepoPath) {
  // Drop a parenthetical that only holds a teacher-only link, e.g. " ([protocol](../x.md))".
  let spans = codeSpans(text);
  text = text.replace(/\s*\(\[[^\]]*\]\(([^)\s]+)\)\)/g, (m, target, offset) =>
    !insideCode(offset, spans) && rewriteTarget(target, fromRepoPath).hidden ? "" : m
  );
  spans = codeSpans(text);
  return text.replace(linkRe, (m, bang, label, target, title, offset) => {
    if (insideCode(offset, spans)) return m;
    const r = rewriteTarget(target, fromRepoPath);
    if (r.hidden) return /\.md\b/.test(label) ? "" : label;
    // A label that is only a file path becomes the target page's title (F11).
    if (!bang) label = betterLabel(label, target, fromRepoPath) ?? label;
    return `${bang}[${label}](${r.url}${title})`;
  });
}

// ---------------------------------------------------------------- HTML placeholder escaping
const allowedTags = new Set([
  "a", "b", "br", "code", "details", "div", "em", "i", "kbd", "li", "ol", "p", "pre", "span",
  "strong", "sub", "summary", "sup", "table", "tbody", "td", "th", "thead", "tr", "u", "ul",
]);
function escapeTags(text) {
  return text.replace(/<(\/?)([A-Za-z][\w-]*)([^<>]*)>/g, (m, slash, name, rest) => {
    if (/^(https?|mailto):/i.test(name + rest)) return m; // autolinks like <https://…>
    return allowedTags.has(name.toLowerCase()) ? m : `&lt;${slash}${name}${rest}&gt;`;
  });
}

// Apply a function to the parts of a line that are not inside `inline code`.
function outsideInlineCode(line, fn) {
  const parts = line.split(/(`+[^`]*?`+)/g);
  return parts.map((part, i) => (i % 2 === 1 ? part : fn(part))).join("");
}

// ---------------------------------------------------------------- page transformation
// Characters used to draw boxes, trees and arrows in text diagrams.
const DRAWING = /[─│┌┐└┘├┤┬┴┼╔╗╚╝║═▶▼◀▲]|[+|][-=_]{3,}|[-=]{3,}[+|>]|-->|==>|<--/;

/** A fenced block of plain text whose lines draw a picture (boxes, a file tree). */
function isTextDiagram(lang, body) {
  if (!["", "text", "txt", "plaintext"].includes(lang)) return false;
  return body.filter((line) => DRAWING.test(line)).length >= 2;
}

/** A text alternative for a text diagram: its words, line by line, without the drawing. */
function describeDiagram(body) {
  const words = body
    .map((line) => line.replace(/[─│┌┐└┘├┤┬┴┼╔╗╚╝║═▶▼◀▲←→↑↓+|]/g, " ").replace(/[-=_.]{2,}/g, " ").replace(/\s+/g, " ").trim())
    .filter(Boolean);
  const text = `Text diagram: ${words.join("; ")}`;
  return text.length > 700 ? text.slice(0, 697) + "…" : text;
}

const escapeAttr = (text) => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const isEmptyHeaderRow = (line) => /^\s*\|(?:\s*\|)+\s*$/.test(line);
const isDelimiterRow = (line) => /^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)*\|?\s*$/.test(line);

export function transform(src, repoPath) {
  const lines = src.split("\n");
  const cuts = cutSections[repoPath] || [];
  const result = [];
  let fence = null; // the open code fence: { marker, indent, lang, open, body }
  let skipLevel = 0; // when > 0, we are inside a cut section of that heading level

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Code blocks are copied as they are, except that text diagrams get a text alternative.
    const fenceMatch = line.match(/^(\s*)(`{3,}|~{3,})(.*)$/);
    if (fence) {
      const closes = fenceMatch && fenceMatch[2][0] === fence.marker[0] && fenceMatch[2].length >= fence.marker.length && !fenceMatch[3].trim();
      if (!closes) {
        fence.body.push(line);
        continue;
      }
      if (!skipLevel) {
        if (!fence.indent && isTextDiagram(fence.lang, fence.body)) {
          const label = fence.alt || describeDiagram(fence.body);
          result.push(`<figure class="ascii-diagram" role="img" aria-label="${escapeAttr(label)}">`, "");
          result.push(fence.open, ...fence.body, line, "", "</figure>");
        } else {
          result.push(fence.open, ...fence.body, line);
        }
      }
      fence = null;
      continue;
    }
    if (fenceMatch) {
      // An author can describe a diagram in a comment on the line before it: <!-- alt: … -->
      const before = [...result].reverse().find((l) => l.trim() !== "") ?? "";
      const alt = before.match(/^<!--\s*alt:\s*(.+?)\s*-->$/)?.[1] ?? "";
      fence = { marker: fenceMatch[2], indent: fenceMatch[1], lang: fenceMatch[3].trim().split(/\s/)[0].toLowerCase(), open: line, body: [], alt };
      continue;
    }

    const heading = line.match(/^(#{1,6})\s+(.*)$/);
    if (heading) {
      const level = heading[1].length;
      if (skipLevel && level <= skipLevel) skipLevel = 0;
      if (!skipLevel && (cuts.includes(heading[2].trim()) || isInstructorHeading(heading[2]))) skipLevel = level;
    }
    if (skipLevel) continue;

    // A table row whose first cell links to teacher-only material (e.g. a week's
    // instructor-notes.md in its Materials table) is dropped entirely.
    if (/^\s*\|/.test(line)) {
      const firstCell = line.split("|")[1] || "";
      if ([...firstCell.matchAll(linkRe)].some((m) => rewriteTarget(m[3], repoPath).hidden)) continue;
    }
    // A table with an empty header row ("| | |") gets header labels that only screen readers see.
    if (isEmptyHeaderRow(line) && isDelimiterRow(lines[i + 1] ?? "")) {
      const columns = line.trim().split("|").length - 2;
      const names = columns === 2 ? ["Item", "Details"] : Array.from({ length: columns }, (_, n) => `Column ${n + 1}`);
      result.push(`| ${names.map((n) => `<span class="visually-hidden">${n}</span>`).join(" | ")} |`);
      continue;
    }
    let l = outsideInlineCode(rewriteLinks(line, repoPath), escapeTags);
    // Task-list boxes, which the site's Markdown renderer doesn't draw.
    l = l.replace(/^(\s*[-*]\s+)\[ \]\s/, "$1☐ ").replace(/^(\s*[-*]\s+)\[[xX]\]\s/, "$1☑ ");
    result.push(l);
  }
  if (fence && !skipLevel) result.push(fence.open, ...fence.body); // an unclosed fence: keep it as it was
  return result.join("\n");
}

/** Template pages get a block with the template's raw text and a copy button (F02). */
export function withCopyBlock(page, raw, repoPath) {
  const name = posix.basename(repoPath);
  const longest = Math.max(0, ...(raw.match(/`+/g) || []).map((run) => run.length));
  const fenceMark = "`".repeat(Math.max(4, longest + 1));
  const block = [
    "",
    `::: tip Copy this template`,
    `To start your own \`${name}\`, open **Show the text to copy** below and use the copy button at the top right of the block, then paste it into a new file called \`${name}\` in your repository. On GitHub, use the **Copy raw file** button on [the template's GitHub page](${REPO}/blob/main/${repoPath}).`,
    ":::",
    "",
    "::: details Show the text to copy",
    `${fenceMark}md`,
    raw.replace(/\n$/, ""),
    fenceMark,
    ":::",
    "",
  ].join("\n");
  // Put it straight after the page's title.
  return page.replace(/^(# .*)$/m, (h1) => h1 + "\n" + block);
}

// ---------------------------------------------------------------- write everything
// (Only when run as a script; scripts/tests/build-site.test.mjs imports the functions above.)
if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) build();

function build() {
  rmSync(out, { recursive: true, force: true });
  for (const p of pages) {
    const dest = join(out, stagedPath(p));
    mkdirSync(dirname(dest), { recursive: true });
    const raw = readFileSync(join(root, p), "utf8");
    let page = transform(raw, p);
    if (/^templates\/(?!README\.md$)[^/]+\.md$/.test(p)) page = withCopyBlock(page, raw, p);
    writeFileSync(dest, `---\nsource: ${p}\n---\n\n` + page);
  }
  // The home page is written by hand in site/home.md; static files (the icon) come from site/public/.
  writeFileSync(join(out, "index.md"), readFileSync(join(root, "site", "home.md"), "utf8"));
  cpSync(join(root, "site", "public"), join(out, "public"), { recursive: true });

  // The RLS Attack Lab page, hosted so students don't need the kit to run it (week 7).
  mkdirSync(join(out, "public", "tools"), { recursive: true });
  copyFileSync(join(root, "weeks", "07-security-and-review", "rls-lab", "attack.html"), join(out, "public", "tools", "rls-attack.html"));

  // Page titles and source files, for the sidebar and the "Suggest a change" links.
  const manifest = { "index.md": { title: "Home", source: "site/home.md" } };
  for (const p of pages) {
    manifest[stagedPath(p)] = { title: titleOf(p) ?? p, source: p };
  }
  writeFileSync(join(out, ".pages.json"), JSON.stringify(manifest, null, 2));

  console.log(`Prepared ${pages.length} pages plus the home page in site/src/`);
}
