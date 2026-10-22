// Tests for the pure helpers inside weeks/07-security-and-review/rls-lab/attack.html,
// the RLS Attack Lab page (also published at /tools/rls-attack.html on the course site).
// The helpers sit between "BEGIN pure helpers" and "END pure helpers" in the page's script.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const page = readFileSync(fileURLToPath(new URL('../../weeks/07-security-and-review/rls-lab/attack.html', import.meta.url)), 'utf8');
const start = page.indexOf('BEGIN pure helpers');
const end = page.indexOf('END pure helpers');
assert.ok(start !== -1 && end > start, 'attack.html must keep its BEGIN/END pure helpers markers');
const code = page.slice(page.indexOf('\n', start), page.lastIndexOf('\n', end));
const { inspectKey, normalizeProjectUrl, classifyResult } = new Function(`${code}; return { inspectKey, normalizeProjectUrl, classifyResult };`)();

const b64url = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
const jwt = (payload) => `${b64url({ alg: 'HS256', typ: 'JWT' })}.${b64url(payload)}.signature1234567890`;

test('secret keys are refused, including a legacy service_role JWT', () => {
  assert.equal(inspectKey('sb_' + 'secret_abcdefghijklmnop').kind, 'secret');
  assert.equal(inspectKey('sb_' + 'secret_abcdefghijklmnop').ok, false);
  const legacy = inspectKey(jwt({ iss: 'supabase', role: 'service' + '_role' }));
  assert.deepEqual([legacy.ok, legacy.kind], [false, 'legacy-secret']);
});

test('publishable keys pass; legacy anon keys pass with a deprecation note', () => {
  assert.deepEqual(inspectKey('sb_publishable_abcdefghijklmnop'), { ok: true, kind: 'publishable', message: '' });
  const anon = inspectKey(jwt({ iss: 'supabase', role: 'anon' }));
  assert.equal(anon.ok, true);
  assert.match(anon.message, /retiring the legacy keys/);
  assert.equal(inspectKey(jwt({ role: 'authenticated' })).ok, false);
  assert.equal(inspectKey('').ok, false);
});

test('project URLs are cleaned up, and dashboard addresses are corrected', () => {
  assert.deepEqual(normalizeProjectUrl('https://abcd.supabase.co/rest/v1/'), { ok: true, url: 'https://abcd.supabase.co', message: '' });
  assert.equal(normalizeProjectUrl('abcd.supabase.co').url, 'https://abcd.supabase.co');
  const fixed = normalizeProjectUrl('https://supabase.com/dashboard/project/abcdefgh/editor');
  assert.equal(fixed.url, 'https://abcdefgh.supabase.co');
  assert.equal(normalizeProjectUrl('http://example.com').ok, false);
  assert.equal(normalizeProjectUrl('http://localhost:54321').ok, true);
});

const error = (code, message, status = 400) => ({ data: null, count: null, status, error: { code, message } });

test('errors are told apart: RLS, missing grant, wrong key, wrong table or column, network', () => {
  const cases = [
    [error('42501', 'new row violates row-level security policy for table "guestbook"', 401), 'blocked', 'REFUSED BY RLS'],
    [error('42501', 'permission denied for table guestbook', 401), 'blocked', 'REFUSED: NO GRANT'],
    [error('', 'Invalid API key', 401), 'error', 'ERROR: KEY REJECTED'],
    [error('PGRST205', "Could not find the table 'public.nosuch' in the schema cache", 404), 'error', 'ERROR: TABLE NOT FOUND'],
    [error('PGRST204', "Could not find the 'text' column of 'guestbook' in the schema cache"), 'error', 'ERROR: COLUMN NOT FOUND'],
    [error('23514', 'new row for relation "guestbook" violates check constraint'), 'blocked', 'REFUSED BY A COLUMN RULE'],
    [error('', 'TypeError: Failed to fetch', 0), 'error', "ERROR: COULDN'T REACH THE PROJECT"],
  ];
  for (const [result, tag, label] of cases) {
    const verdict = classifyResult('insert', result, 'guestbook');
    assert.deepEqual([verdict.tag, verdict.label], [tag, label], result.error.message);
  }
});

test('no error is not the same as allowed: 0 rows means RLS filtered them', () => {
  assert.equal(classifyResult('read', { data: [], error: null }).label, '0 ROWS (FILTERED)');
  const read = classifyResult('read', { data: [{ is_public: true }, { is_public: false }], error: null });
  assert.equal(read.tag, 'allowed');
  assert.match(read.explanation, /1 row marked is_public = false/);
  assert.equal(classifyResult('update', { data: null, error: null, count: 0 }).label, '0 ROWS CHANGED (FILTERED)');
  assert.equal(classifyResult('delete', { data: null, error: null, count: 0 }).label, '0 ROWS DELETED (FILTERED)');
  assert.equal(classifyResult('delete', { data: null, error: null, count: 1 }).label, 'ALLOWED: 1 ROW DELETED');
  assert.equal(classifyResult('update', { data: null, error: null, count: null }).label, 'NO ERROR');
  assert.equal(classifyResult('insert', { data: null, error: null, count: 1 }).label, 'ALLOWED: INSERTED');
});

test('the page links only to absolute addresses, so it works when hosted on the course site', () => {
  const hrefs = [...page.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  assert.ok(hrefs.length > 0);
  for (const href of hrefs) assert.match(href, /^https:\/\//, href);
});
