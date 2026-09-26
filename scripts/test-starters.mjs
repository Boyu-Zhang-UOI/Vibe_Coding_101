#!/usr/bin/env node
// Runs `npm test` in every starter kit (any folder under weeks/ or projects/ with a package.json).
// A kit that contains a planted bug on purpose sets "vc101": { "plantedBug": true } in its
// package.json; for those, the tests are expected to FAIL, which proves the bug is still there.
import { readdirSync, statSync, existsSync, readFileSync } from "node:fs";
import { join, dirname, resolve, relative } from "node:path";
import { spawnSync } from "node:child_process";

const root = resolve(dirname(new URL(import.meta.url).pathname), "..");

function findKits(dir, kits = []) {
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (existsSync(join(full, "package.json"))) kits.push(full);
    else findKits(full, kits);
  }
  return kits;
}

const kits = [...findKits(join(root, "weeks")), ...findKits(join(root, "projects"))];
let failures = 0;

for (const kit of kits) {
  const pkg = JSON.parse(readFileSync(join(kit, "package.json"), "utf8"));
  const name = relative(root, kit);
  if (!pkg.scripts?.test) {
    console.log(`- ${name}: no test script, skipped`);
    continue;
  }
  const planted = pkg.vc101?.plantedBug === true;
  const result = spawnSync("npm", ["test", "--silent"], { cwd: kit, encoding: "utf8", shell: process.platform === "win32" });
  const passed = result.status === 0;
  const ok = planted ? !passed : passed;
  console.log(`${ok ? "✔" : "✘"} ${name}: tests ${passed ? "passed" : "failed"}${planted ? " (planted bug: failure expected)" : ""}`);
  if (!ok) {
    failures++;
    process.stdout.write(result.stdout + result.stderr);
  }
}

if (failures) {
  console.error(`\n${failures} starter kit(s) did not behave as expected.`);
  process.exit(1);
}
console.log(`\nAll ${kits.length} starter kits behave as expected.`);
