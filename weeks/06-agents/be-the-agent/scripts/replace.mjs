// scripts/replace.mjs: the "edit" tool for the Be the Agent exercise.
//
//   node scripts/replace.mjs <file> "<old text>" "<new text>"
//
// It replaces <old text> with <new text>, but ONLY if <old text> appears exactly
// once in the file. If it is missing, or appears more than once, nothing changes
// and you get an error. Real coding agents' edit tools work the same way: the
// model must quote the exact text it wants to change.
//
// Write \n for a new line. After a successful edit, the changed lines are printed
// with line numbers, so the Model can check the result.

import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
if (args.length !== 3) {
  fail(
    `Expected 3 arguments but got ${args.length}.\n` +
      '  Usage: node scripts/replace.mjs <file> "<old text>" "<new text>"\n' +
      '  Put the old text and the new text each inside double quotes. Write \\n for a new line.',
  );
}
const [fileArg, oldArg, newArg] = args;

const root = process.cwd();
const target = path.resolve(root, fileArg);
const relative = path.relative(root, target);
if (relative.startsWith('..') || path.isAbsolute(relative)) {
  fail(`Refusing to edit ${fileArg}: it is outside this project.`);
}
if (relative.split(path.sep).some((part) => part === 'node_modules' || part === '.git')) {
  fail(`Refusing to edit ${fileArg}: files in node_modules/ and .git/ are off limits.`);
}
if (!existsSync(target) || !statSync(target).isFile()) {
  fail(`No such file: ${fileArg}. Use list_files to see the exact file names.`);
}

const decode = (text) => text.replace(/\\n/g, '\n');
const oldText = decode(oldArg);
const newText = decode(newArg);
if (oldText === '') {
  fail('The old text is empty. Copy the exact text you want to change from read_file.');
}
if (oldText === newText) {
  fail('The old text and the new text are the same, so there is nothing to change.');
}

const content = readFileSync(target, 'utf8');
const matches = [];
for (let at = content.indexOf(oldText); at !== -1; at = content.indexOf(oldText, at + 1)) {
  matches.push(at);
}

if (matches.length === 0) {
  fail(
    `The old text was not found in ${relative}. Nothing changed.\n` +
      '  Copy it exactly from read_file, including spaces and punctuation, but without the line numbers.',
  );
}
if (matches.length > 1) {
  const lines = matches.map((at) => lineNumberAt(content, at)).join(', ');
  fail(
    `The old text appears ${matches.length} times in ${relative} (lines ${lines}). Nothing changed.\n` +
      '  Include more of the surrounding text so that it matches exactly once.',
  );
}

const at = matches[0];
const updated = content.slice(0, at) + newText + content.slice(at + oldText.length);
writeFileSync(target, updated);

// Show the edited region, numbered like `cat -n`, with one line of context around it.
const firstLine = lineNumberAt(updated, at);
const lastLine = firstLine + newText.split('\n').length - 1;
const allLines = updated.split('\n');
const from = Math.max(1, firstLine - 1);
const to = Math.min(allLines.length, lastLine + 1);
console.log(`Edited ${relative}: replaced 1 match. Lines ${from}-${to} now read:`);
for (let n = from; n <= to; n++) {
  console.log(`${String(n).padStart(6)}\t${allLines[n - 1]}`);
}

function lineNumberAt(text, index) {
  return text.slice(0, index).split('\n').length;
}

function fail(message) {
  console.error(`Error: ${message}`);
  process.exit(1);
}
