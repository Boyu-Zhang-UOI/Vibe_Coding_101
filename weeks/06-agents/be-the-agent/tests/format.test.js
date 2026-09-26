import { test } from 'node:test';
import assert from 'node:assert/strict';
import { formatMoney, formatPeople } from '../lib/format.js';

test('formatMoney: always shows two decimals', () => {
  assert.equal(formatMoney(38.5), '$38.50');
  assert.equal(formatMoney(0), '$0.00');
});

test('formatPeople: singular and plural', () => {
  assert.equal(formatPeople(1), '1 person');
  assert.equal(formatPeople(3), '3 people');
});
