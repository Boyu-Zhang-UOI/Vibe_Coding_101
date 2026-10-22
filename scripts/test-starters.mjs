#!/usr/bin/env node
// Checks that every starter kit behaves as the course expects.
//
//   - Runs the tests of every kit (any folder under weeks/ or projects/ with a package.json).
//   - A kit with a planted bug says so in its package.json:
//       "vc101": { "plantedBug": true, "expectFailing": ["exact name of the test that must fail"] }
//     Its tests run with Node's TAP reporter so each test's result can be read. Exactly the named
//     tests must fail and every other test must pass, so a second, accidental bug can't hide
//     behind the planted one, and a "fixed" planted bug is noticed.
//   - A kit in scripts/kits.json with "plantedSyntaxError" must still fail `node --check` at that
//     file and line (the Debug Clinic's first bug; its answer key quotes the line number).
//   - Files listed under "sharedFiles" in scripts/kits.json must be identical in both Node starters.
//   - Every kit folder must be listed in scripts/kits.json, so it gets published and link-checked.
import { readdirSync, statSync, existsSync, readFileSync } from 'node:fs';
import { join, dirname, resolve, relative } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const config = JSON.parse(readFileSync(join(root, 'scripts', 'kits.json'), 'utf8'));
const rel = (p) => relative(root, p).split('\\').join('/');

function findKits(dir, kits = []) {
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (existsSync(join(full, 'package.json'))) kits.push(full);
    else findKits(full, kits);
  }
  return kits;
}

/** Read top-level test results from Node's TAP output: [{ name, ok }]. */
function parseTap(text) {
  const results = [];
  for (const line of text.split(/\r?\n/)) {
    const m = /^(not ok|ok) \d+ - (.*?)(?: # (?:SKIP|TODO)\b.*)?$/.exec(line);
    if (m) results.push({ ok: m[1] === 'ok', name: m[2].replace(/\\#/g, '#').replace(/\\\\/g, '\\') });
  }
  return results;
}

let failures = 0;
const fail = (message, output = '') => {
  failures++;
  console.log(`✘ ${message}`);
  if (output) process.stdout.write(output.endsWith('\n') ? output : output + '\n');
};

// 1. Tests in every kit with a package.json.
const kits = [...findKits(join(root, 'weeks')), ...findKits(join(root, 'projects'))];
const listed = new Set(config.kits.map((k) => k.path));
for (const kit of kits) {
  const name = rel(kit);
  if (!listed.has(name)) fail(`${name}: has a package.json but is not listed in scripts/kits.json`);
  const pkg = JSON.parse(readFileSync(join(kit, 'package.json'), 'utf8'));
  if (!pkg.scripts?.test) {
    console.log(`- ${name}: no test script, skipped`);
    continue;
  }
  if (pkg.vc101?.plantedBug === true) {
    const expected = pkg.vc101.expectFailing;
    if (!Array.isArray(expected) || expected.length === 0) {
      fail(`${name}: "vc101.plantedBug" needs "expectFailing": the names of the tests the planted bug breaks`);
      continue;
    }
    const run = spawnSync(process.execPath, ['--test', '--test-reporter=tap'], { cwd: kit, encoding: 'utf8' });
    const results = parseTap(run.stdout);
    const failed = results.filter((r) => !r.ok).map((r) => r.name);
    const missing = expected.filter((n) => !results.some((r) => r.name === n));
    const unexpected = failed.filter((n) => !expected.includes(n));
    const stillPassing = expected.filter((n) => results.some((r) => r.name === n && r.ok));
    if (missing.length || unexpected.length || stillPassing.length) {
      const problems = [
        ...missing.map((n) => `  expected failing test not found: "${n}"`),
        ...stillPassing.map((n) => `  planted bug seems fixed, this test passes: "${n}"`),
        ...unexpected.map((n) => `  a test that should pass failed: "${n}"`),
      ];
      fail(`${name}: planted bug check failed\n${problems.join('\n')}`, run.stdout + run.stderr);
    } else {
      console.log(`✔ ${name}: ${results.length - failed.length} passed; ${failed.length} failed as planted (${failed.join('; ')})`);
    }
    continue;
  }
  const run = spawnSync('npm', ['test', '--silent'], { cwd: kit, encoding: 'utf8', shell: process.platform === 'win32' });
  if (run.status === 0) console.log(`✔ ${name}: tests passed`);
  else fail(`${name}: tests failed`, run.stdout + run.stderr);
}

// 2. Planted syntax errors and kit folders listed in kits.json.
for (const kit of config.kits) {
  const dir = join(root, kit.path);
  if (!existsSync(dir)) {
    fail(`${kit.path}: listed in scripts/kits.json but the folder does not exist`);
    continue;
  }
  if (kit.plantedSyntaxError) {
    const { file, line } = kit.plantedSyntaxError;
    const check = spawnSync(process.execPath, ['--check', join(dir, file)], { encoding: 'utf8' });
    const where = new RegExp(`${file.replace(/[.]/g, '\\.')}:${line}\\b`);
    if (check.status === 0) fail(`${kit.path}: the planted syntax error in ${file} is gone`);
    else if (!where.test(check.stderr)) fail(`${kit.path}: the planted syntax error moved away from ${file} line ${line} (update the answer key)`, check.stderr);
    else console.log(`✔ ${kit.path}: planted syntax error still at ${file} line ${line}`);
  }
}

// 3. Files the two Node starters share must not drift apart.
const [a, b] = config.sharedFiles.between;
const drifted = config.sharedFiles.files.filter((f) => {
  const fa = join(root, a, f);
  const fb = join(root, b, f);
  return !existsSync(fa) || !existsSync(fb) || !readFileSync(fa).equals(readFileSync(fb));
});
if (drifted.length) fail(`These files differ between ${a} and ${b} (copy the newer one over the other):\n  ${drifted.join('\n  ')}`);
else console.log(`✔ ${config.sharedFiles.files.length} shared files are identical in both Node starters`);

if (failures) {
  console.error(`\n${failures} starter-kit check(s) failed.`);
  process.exit(1);
}
console.log(`\nAll ${kits.length} tested starter kits behave as expected.`);
