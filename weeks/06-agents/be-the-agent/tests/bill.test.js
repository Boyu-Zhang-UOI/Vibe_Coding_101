import { test } from 'node:test';
import assert from 'node:assert/strict';
import { tipAmount, totalWithTip, perPerson } from '../lib/bill.js';

test('tipAmount: 20% of a 50 dollar bill is 10', () => {
  assert.equal(tipAmount(50, 20), 10);
});

test('tipAmount: rounds to whole cents', () => {
  assert.equal(tipAmount(19.99, 15), 3); // 2.9985 rounds to 3.00
});

test('tipAmount: rejects a negative bill', () => {
  assert.throws(() => tipAmount(-5, 10), /Bill must be/);
});

test('totalWithTip: bill plus tip', () => {
  assert.equal(totalWithTip(100, 15), 115);
});

test('perPerson: an even split', () => {
  assert.equal(perPerson(120, 0, 4), 30);
});

test('perPerson: rounds each share UP so the group covers the bill (bug report #12)', () => {
  // 100 dollars + 15% tip = 115.00. Split 3 ways = 38.333...
  // Each person must pay 38.34, because 3 x 38.33 = 114.99 is one cent short.
  assert.equal(perPerson(100, 15, 3), 38.34);
});

test('perPerson: needs a whole number of people, at least 1', () => {
  assert.throws(() => perPerson(100, 15, 0), /at least 1/);
  assert.throws(() => perPerson(100, 15, 2.5), /whole number/);
});

// Add new tests above this line.
