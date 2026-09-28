// VitePress configuration for the course website.
// Pages are assembled into site/src/ by scripts/build-site.mjs before every build.
import { defineConfig } from "vitepress";
import { readFileSync, existsSync } from "node:fs";

const REPO = "https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101";
const SITE_URL = (process.env.SITE_URL || "https://boyu-zhang-uoi.github.io/Vibe_Coding_101").replace(/\/$/, "");
const BASE = new URL(SITE_URL + "/").pathname;

const manifestFile = new URL("../src/.pages.json", import.meta.url);
if (!existsSync(manifestFile)) {
  throw new Error("site/src/ is missing. Run `npm run site:dev` or `npm run site:build`, which prepare it first.");
}
const pages = JSON.parse(readFileSync(manifestFile, "utf8"));

// GitHub-style heading anchors, so links like SYLLABUS.md#7-assessment work on the site too.
function slugify(text) {
  return text
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{M}\p{N}\p{Pc} -]/gu, "")
    .replace(/ /g, "-");
}

const escapeHtml = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const title = (path) => escapeHtml(pages[path]?.title ?? path);
const link = (path) => "/" + path.replace(/index\.md$/, "").replace(/\.md$/, "");
const item = (path, text) => ({ text: text ? escapeHtml(text) : title(path), link: link(path) });
const has = (path) => path in pages;
const inDir = (dir) => Object.keys(pages).filter((p) => p.startsWith(dir + "/") && !p.slice(dir.length + 1).includes("/"));

// Weeks, in folder order.
const weekDirs = [...new Set(Object.keys(pages).filter((p) => p.startsWith("weeks/")).map((p) => p.split("/").slice(0, 2).join("/")))].sort();
const weekGroups = weekDirs.map((dir) => {
  const number = dir.match(/weeks\/(\d\d)/)[1];
  const extras = inDir(dir).filter((p) => !/\/(index|lab|homework)\.md$/.test(p)).sort();
  return {
    text: title(`${dir}/index.md`),
    collapsed: true,
    items: [
      item(`${dir}/index.md`, "Overview"),
      ...(has(`${dir}/lab.md`) ? [item(`${dir}/lab.md`, "Lab")] : []),
      ...(has(`${dir}/homework.md`) ? [item(`${dir}/homework.md`, "Homework")] : []),
      ...extras.map((p) => item(p)),
      { text: "Slides ↗", link: `${SITE_URL}/slides/week-${number}.html` },
    ],
  };
});

const ordered = (dir, names) => names.map((n) => `${dir}/${n}.md`).filter(has).map((p) => item(p));

export default defineConfig({
  title: "Vibe Coding 101",
  titleTemplate: ":title · Vibe Coding 101",
  description: "Directed Study: Vibe Coding 101. An eight-week, hands-on course on building real software with AI, using free tools.",
  lang: "en-US",
  base: BASE,
  srcDir: "src",
  outDir: "../dist",
  cleanUrls: false,
  ignoreDeadLinks: "localhostLinks",
  head: [["link", { rel: "icon", type: "image/svg+xml", href: `${BASE}favicon.svg` }]],
  vite: { build: { chunkSizeWarningLimit: 4000 } }, // the built-in search index is large

  markdown: {
    anchor: { slugify },
    theme: { light: "github-light", dark: "github-dark" },
  },

  themeConfig: {
    logo: "/favicon.svg",
    siteTitle: "Vibe Coding 101",
    nav: [
      { text: "Syllabus", link: "/SYLLABUS" },
      { text: "Weeks", items: [{ text: "Week 0 — Pre-work", link: "/setup/" }, ...weekGroups.map((g) => ({ text: g.text, link: g.items[0].link }))] },
      { text: "Projects", link: "/projects/" },
      { text: "Resources", link: "/resources/safe-loop" },
      { text: "Tools", link: "/TOOLS" },
      { text: "Slides", link: `${SITE_URL}/slides/` },
    ],

    sidebar: [
      {
        text: "Start here",
        items: [
          { text: "Home", link: "/" },
          item("SYLLABUS.md", "Syllabus"),
          item("TOOLS.md", "Tool handout"),
        ],
      },
      {
        text: "Week 0 — Pre-work",
        collapsed: true,
        items: [
          item("setup/index.md", "Overview"),
          ...ordered("setup", ["safety-contract", "accounts", "privacy-settings", "github-basics", "codespaces", "local-setup"]),
        ],
      },
      ...weekGroups,
      {
        text: "Projects",
        collapsed: true,
        items: [item("projects/index.md", "Overview"), ...ordered("projects", ["home-page", "project-1-useful-tool", "ai-micro-app", "capstone", "capstone-ideas"])],
      },
      {
        text: "Assessment",
        collapsed: true,
        items: [item("assessment/index.md", "Grading and policies"), ...ordered("assessment", ["rubrics", "oral-walkthroughs", "self-assessment"])],
      },
      {
        text: "Resources",
        collapsed: false,
        items: ordered("resources", [
          "safe-loop", "prompt-patterns", "tutor-mode", "troubleshooting", "glossary",
          "without-ai-skills", "case-studies", "git-cheatsheet", "web-basics", "reading-list",
        ]),
      },
      {
        text: "Templates",
        collapsed: true,
        items: inDir("templates").sort().map((p) => item(p, p.split("/").pop())),
      },
      {
        text: "About the course",
        collapsed: true,
        items: [
          item("research/index.md", "Research behind the course"),
          ...ordered("research", ["design-rationale", "landscape-report-2026-09"]),
          { text: "GitHub repository ↗", link: REPO },
        ],
      },
    ],

    outline: { level: [2, 3], label: "On this page" },
    search: { provider: "local" },
    socialLinks: [{ icon: "github", link: REPO }],
    editLink: {
      // This function runs in the browser, so it can only use what the page itself carries.
      // scripts/build-site.mjs stores each page's repository path in its front matter.
      pattern: ({ frontmatter, filePath }) =>
        "https://github.com/Boyu-Zhang-UOI/Vibe_Coding_101/edit/main/" + (frontmatter.source || filePath),
      text: "Suggest a change on GitHub",
    },
    footer: {
      message: 'Materials <a href="' + REPO + '/blob/main/LICENSE">CC BY 4.0</a> · Code <a href="' + REPO + '/blob/main/LICENSE-CODE">MIT</a>',
      copyright: "Directed Study: Vibe Coding 101 · Boyu Zhang and contributors",
    },
  },
});
