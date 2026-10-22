// Tests for the page transformations in scripts/build-site.mjs (the website build).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { betterLabel, transform, withCopyBlock } from '../build-site.mjs';

test('link text that is only a file path becomes the page title (F11)', () => {
  assert.equal(betterLabel('privacy-settings.md', 'privacy-settings.md', 'setup/README.md'), 'Privacy settings');
  assert.equal(betterLabel('`TOOLS.md`', '../TOOLS.md', 'setup/README.md'), 'Tool Handout');
  assert.equal(betterLabel('slides.md', 'slides.md', 'weeks/03-spec-first/README.md'), 'Week 3 slides');
  assert.equal(betterLabel('templates/SPEC.md', '../templates/SPEC.md', 'projects/README.md'), 'SPEC.md template');
  assert.equal(betterLabel('course-tutor.md', '../instructor/course-tutor.md', 'resources/glossary.md'), 'Tutor mode');
});

test('a path label with an anchor names the section too', () => {
  const label = betterLabel('setup/codespaces.md#start-a-project-from-a-starter', '../setup/codespaces.md#start-a-project-from-a-starter', 'projects/README.md');
  assert.match(label, /^GitHub Codespaces: Start a project from a starter/);
});

test('ordinary link text and outside links are left alone', () => {
  assert.equal(betterLabel('the privacy guide', 'privacy-settings.md', 'setup/README.md'), null);
  assert.equal(betterLabel('agents.md', 'https://agents.md/', 'templates/AGENTS.md'), null);
  assert.equal(betterLabel('missing.md', 'missing.md', 'setup/README.md'), null);
});

test('text diagrams get a text alternative and stay unwrapped; prompts are untouched', () => {
  const src = ['# Page', '', '```text', '+------+', '| Box  |', '+------+', '```', '', '```text', 'Goal: build a page', '```'].join('\n');
  const out = transform(src, 'resources/example.md');
  assert.match(out, /<figure class="ascii-diagram" role="img" aria-label="Text diagram: Box">/);
  assert.equal((out.match(/<figure/g) || []).length, 1, 'only the drawing is wrapped');
  assert.match(out, /```text\nGoal: build a page\n```/);
});

test('an author can describe a diagram with an alt comment', () => {
  const src = ['<!-- alt: Three boxes in a row -->', '```text', '+---+ +---+', '| A | | B |', '+---+ +---+', '```'].join('\n');
  assert.match(transform(src, 'resources/example.md'), /aria-label="Three boxes in a row"/);
});

test('a table with an empty header row gets hidden header labels', () => {
  const out = transform(['| | |', '|---|---|', '| **Time** | 3 h |'].join('\n'), 'resources/example.md');
  assert.match(out, /^\| <span class="visually-hidden">Item<\/span> \| <span class="visually-hidden">Details<\/span> \|$/m);
});

test('instructor-only sections are still cut', () => {
  const out = transform(['# Page', 'Visible', '## For instructors', 'Secret plan', '## Next', 'Visible too'].join('\n'), 'resources/example.md');
  assert.ok(!out.includes('Secret plan'));
  assert.match(out, /Visible too/);
});

test('template pages get a copy block holding the raw template', () => {
  const raw = '# NOTES.md\n\nUse ```code``` here.\n';
  const page = withCopyBlock('# NOTES.md\n\nRendered.\n', raw, 'templates/NOTES.md');
  assert.match(page, /^# NOTES\.md\n\n::: tip Copy this template/);
  assert.match(page, /````md\n# NOTES\.md\n\nUse ```code``` here\.\n````/, 'the fence is longer than any backtick run inside');
});
