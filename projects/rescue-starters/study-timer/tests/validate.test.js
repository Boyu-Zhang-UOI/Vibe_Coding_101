// Tests for lib/validate.js: SPEC.md AC2 (empty or duplicate subject names).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MAX_SUBJECT_LENGTH, NEW_SUBJECT_MESSAGE, checkNewSubject } from '../lib/validate.js';

test('a new subject name is accepted', () => {
  assert.equal(checkNewSubject('Biology', []), '');
  assert.equal(checkNewSubject('  Spanish  ', ['Biology']), '');
});

test('an empty box or only spaces gives the AC2 message', () => {
  assert.equal(checkNewSubject('', ['Biology']), NEW_SUBJECT_MESSAGE);
  assert.equal(checkNewSubject('   ', []), NEW_SUBJECT_MESSAGE);
  assert.equal(NEW_SUBJECT_MESSAGE, 'Type a new subject name.');
});

test('a duplicate, ignoring capital letters, gives the AC2 message', () => {
  assert.equal(checkNewSubject('biology', ['Biology']), NEW_SUBJECT_MESSAGE);
  assert.equal(checkNewSubject(' BIOLOGY ', ['Biology']), NEW_SUBJECT_MESSAGE);
});

test('names up to the limit are fine; longer ones are refused', () => {
  assert.equal(checkNewSubject('a'.repeat(MAX_SUBJECT_LENGTH), []), '');
  assert.match(checkNewSubject('a'.repeat(MAX_SUBJECT_LENGTH + 1), []), /up to 40 characters/);
});
