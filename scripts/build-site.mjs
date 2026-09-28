#!/usr/bin/env node
// Assembles the course website's source pages in site/src/ from the repository's Markdown files.
//
// The repository stays the single source of truth; this script only copies and adapts:
//   - README.md files become index.md, so a folder's README is its page.
//   - Instructor-only material (instructor notes, answer keys, exit tickets, the instructor guide)
//     is left out, and links to it are removed. Instructor-only sections of shared pages are cut.
//   - Links to files that are not website pages (starter kits, code, research notes) point to GitHub.
//   - Links to a week's slides.md point to the built slide deck.
//   - Placeholder text such as <your name> is escaped so the site builder doesn't read it as HTML.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, statSync, readdirSync, cpSync } from "node:fs";
import { join, dirname, resolve, relative, posix } from "node:path";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");
const out = join(root, "site", "src");
export const REPO = "https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101";
export const SITE_URL = (process.env.SITE_URL || "https://boyu-zhang-uoi.github.io/Vibe_Coding_101").replace(/\/$/, "");

// ---------------------------------------------------------------- which files become pages
const kitDirs = [
  "weeks/04-read-debug-own-it/debug-clinic",
  "weeks/05-apis-secrets-servers/starter",
  "weeks/06-agents/be-the-agent",
  "weeks/07-security-and-review/rls-lab",
  "weeks/07-security-and-review/injection-demo",
  "projects/capstone-starter",
];

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
    // A label that is just a repository path of a renamed page (e.g. `instructor/course-tutor.md`)
    // would confuse site readers, so it becomes the page's site name.
    const renamedLabel = Object.keys(renamed).find((src) => label.replace(/`/g, "") === src);
    if (renamedLabel) label = renamedLabel === "instructor/course-tutor.md" ? "Tutor mode" : renamed[renamedLabel];
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
function transform(src, repoPath) {
  const lines = src.split("\n");
  const cuts = cutSections[repoPath] || [];
  const result = [];
  let inFence = false;
  let fenceMarker = "";
  let skipLevel = 0; // when > 0, we are inside a cut section of that heading level

  for (const line of lines) {
    const fence = line.match(/^\s*(```+|~~~+)/);
    if (fence) {
      if (!inFence) {
        inFence = true;
        fenceMarker = fence[1][0];
      } else if (fence[1][0] === fenceMarker) {
        inFence = false;
      }
      if (!skipLevel) result.push(line);
      continue;
    }
    if (!inFence) {
      const heading = line.match(/^(#{1,6})\s+(.*)$/);
      if (heading) {
        const level = heading[1].length;
        if (skipLevel && level <= skipLevel) skipLevel = 0;
        if (!skipLevel && (cuts.includes(heading[2].trim()) || isInstructorHeading(heading[2]))) skipLevel = level;
      }
    }
    if (skipLevel) continue;
    if (inFence) {
      result.push(line);
      continue;
    }

    // A table row whose first cell links to teacher-only material (e.g. a week's
    // instructor-notes.md in its Materials table) is dropped entirely.
    if (/^\s*\|/.test(line)) {
      const firstCell = line.split("|")[1] || "";
      if ([...firstCell.matchAll(linkRe)].some((m) => rewriteTarget(m[3], repoPath).hidden)) continue;
    }
    let l = outsideInlineCode(rewriteLinks(line, repoPath), escapeTags);
    // Task-list boxes, which the site's Markdown renderer doesn't draw.
    l = l.replace(/^(\s*[-*]\s+)\[ \]\s/, "$1☐ ").replace(/^(\s*[-*]\s+)\[[xX]\]\s/, "$1☑ ");
    result.push(l);
  }
  return result.join("\n");
}

// ---------------------------------------------------------------- write everything
rmSync(out, { recursive: true, force: true });
for (const p of pages) {
  const dest = join(out, stagedPath(p));
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, `---\nsource: ${p}\n---\n\n` + transform(readFileSync(join(root, p), "utf8"), p));
}
// The home page is written by hand in site/home.md; static files (the icon) come from site/public/.
writeFileSync(join(out, "index.md"), readFileSync(join(root, "site", "home.md"), "utf8"));
cpSync(join(root, "site", "public"), join(out, "public"), { recursive: true });

// Page titles and source files, for the sidebar and the "Suggest a change" links.
const manifest = { "index.md": { title: "Home", source: "site/home.md" } };
for (const p of pages) {
  const h1 = readFileSync(join(root, p), "utf8").match(/^#\s+(.+)$/m);
  manifest[stagedPath(p)] = { title: h1 ? h1[1].replace(/[`*]/g, "").trim() : p, source: p };
}
writeFileSync(join(out, ".pages.json"), JSON.stringify(manifest, null, 2));

console.log(`Prepared ${pages.length} pages plus the home page in site/src/`);
