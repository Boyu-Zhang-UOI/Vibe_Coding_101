#!/usr/bin/env node
// Crawls the BUILT website in dist/ (run `npm run site:build` first) and checks every internal
// link: the target page or file must exist, and a #anchor must match an id on the target page.
// This catches problems that only appear after the build, such as a link into a section that
// the build cut from a page. It also checks the absolute links to the course website
// (https://boyu-zhang-uoi.github.io/Vibe_Coding_101/…) that starter kits use, because kits are
// published as their own repositories and can't use relative links.
//
// External links are not checked, so this runs offline.
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, posix, relative, resolve, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const SITE_URL = (process.env.SITE_URL || "https://boyu-zhang-uoi.github.io/Vibe_Coding_101").replace(/\/$/, "");
const site = new URL(SITE_URL + "/");
const BASE = site.pathname; // e.g. "/Vibe_Coding_101/"

if (!existsSync(join(dist, "index.html"))) {
  console.error("dist/ has no website yet. Run `npm run site:build` first.");
  process.exit(1);
}

function walk(dir, files = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const decode = (text) =>
  text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

const idCache = new Map();
function idsIn(file) {
  if (!idCache.has(file)) {
    const html = readFileSync(file, "utf8");
    const ids = new Set();
    for (const m of html.matchAll(/\s(?:id|name)="([^"]*)"/g)) ids.add(decode(m[1]));
    idCache.set(file, ids);
  }
  return idCache.get(file);
}

/** The file in dist/ that a site path such as /Vibe_Coding_101/setup/ is served from, or null. */
function fileFor(pathname) {
  if (!pathname.startsWith(BASE)) return null;
  const rel = decodeURIComponent(pathname.slice(BASE.length));
  const candidates = rel === "" || rel.endsWith("/") ? [rel + "index.html"] : [rel, rel + ".html", rel + "/index.html"];
  for (const c of candidates) {
    const full = join(dist, ...c.split("/"));
    if (existsSync(full) && statSync(full).isFile()) return full;
  }
  return null;
}

const problems = [];
let checked = 0;

function check(url, where) {
  checked++;
  const file = fileFor(url.pathname);
  if (!file) {
    problems.push(`${where}  missing page or file: ${url.pathname}`);
    return;
  }
  // Marp slide decks number their slides with JavaScript, so their anchors can't be checked here.
  const isDeck = /\/slides\/week-\d\d\.html$/.test(file);
  if (url.hash && url.hash !== "#" && extname(file) === ".html" && !isDeck) {
    const id = decodeURIComponent(url.hash.slice(1));
    if (!idsIn(file).has(id)) problems.push(`${where}  missing anchor: ${url.pathname}${url.hash}`);
  }
}

// 1. Every link on every built page.
const pages = walk(dist).filter((f) => f.endsWith(".html"));
for (const page of pages) {
  const pageUrl = new URL(relative(dist, page).split("\\").join("/"), site);
  const html = readFileSync(page, "utf8");
  for (const m of html.matchAll(/<a\b[^>]*?\shref="([^"]*)"/g)) {
    const href = decode(m[1]);
    if (!href || /^(mailto|tel|javascript|data):/i.test(href)) continue;
    let url;
    try {
      url = new URL(href, pageUrl);
    } catch {
      problems.push(`${relative(dist, page)}  not a valid link: ${href}`);
      continue;
    }
    if (url.origin !== site.origin || !url.pathname.startsWith(BASE)) continue; // another website
    check(url, relative(dist, page));
  }
}

// 2. Absolute links to the course website from the starter kits.
const kits = JSON.parse(readFileSync(join(root, "scripts", "kits.json"), "utf8")).kits;
const escaped = SITE_URL.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const siteLink = new RegExp(`${escaped}(/[^\\s"'<>)\\]\`]*)?`, "g");
for (const kit of kits) {
  const dir = join(root, kit.path);
  if (!existsSync(dir)) continue;
  for (const file of walk(dir).filter((f) => /\.(md|html|js|mjs|json|sql)$/.test(f) && !f.includes("node_modules"))) {
    readFileSync(file, "utf8").split("\n").forEach((line, i) => {
      for (const m of line.matchAll(siteLink)) {
        const url = new URL(m[0].replace(/[.,;:]+$/, ""));
        check(url, `${posix.join(kit.path, relative(dir, file).split("\\").join("/"))}:${i + 1}`);
      }
    });
  }
}

if (problems.length) {
  console.error(`Built website: ${problems.length} broken link(s) out of ${checked} checked:\n`);
  for (const p of problems) console.error("  " + p);
  process.exit(1);
}
console.log(`Built website: all ${checked} internal links OK across ${pages.length} pages (anchors included).`);
