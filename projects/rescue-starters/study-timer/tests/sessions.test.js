// Tests for lib/sessions.js: the timer and log rules in SPEC.md AC3–AC8.
// Dates are fixed in the tests (new Date(year, monthIndex, day, hour, minute)), in local time.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  TOO_SHORT_MESSAGE, finishSession, formatDay, formatTimer, parseSaved, removeSession, weekStart, weeklyTotals,
} from '../lib/sessions.js';

const at = (y, m, d, h = 12, min = 0, s = 0) => new Date(y, m - 1, d, h, min, s).getTime();

test('formatTimer shows mm:ss, and minutes keep counting past 59 (AC3)', () => {
  assert.equal(formatTimer(0), '00:00');
  assert.equal(formatTimer(75.9), '01:15');
  assert.equal(formatTimer(25 * 60 + 13), '25:13');
  assert.equal(formatTimer(75 * 60), '75:00');
});

test('a session of 1 minute or more is saved in whole minutes, rounded down (AC4)', () => {
  const { session } = finishSession({ subject: 'Biology', startedAt: at(2026, 9, 23, 10), endedAt: at(2026, 9, 23, 10, 1, 59), id: 'a' });
  assert.deepEqual(session, { id: 'a', subject: 'Biology', day: '2026-09-23', minutes: 1 });
});

test('a session under 1 minute is not saved and gives the AC5 message', () => {
  const result = finishSession({ subject: 'Biology', startedAt: at(2026, 9, 23, 10), endedAt: at(2026, 9, 23, 10, 0, 59), id: 'b' });
  assert.deepEqual(result, { session: null, message: TOO_SHORT_MESSAGE });
  assert.equal(TOO_SHORT_MESSAGE, "Sessions under 1 minute aren't saved.");
});

test('a session that crosses midnight belongs to the day it started', () => {
  const { session } = finishSession({ subject: 'Spanish', startedAt: at(2026, 9, 23, 23, 50), endedAt: at(2026, 9, 24, 0, 20), id: 'c' });
  assert.equal(session.day, '2026-09-23');
  assert.equal(session.minutes, 30);
});

test('weeks start on Monday, including when today is Sunday', () => {
  assert.equal(weekStart(new Date(2026, 8, 23)).getDate(), 21); // Wed 23 Sep 2026 -> Mon 21 Sep
  assert.equal(weekStart(new Date(2026, 8, 27)).getDate(), 21); // Sun 27 Sep -> Mon 21 Sep
  assert.equal(weekStart(new Date(2026, 8, 28)).getDate(), 28); // Mon 28 Sep -> itself
});

test('weekly totals count only this week, per subject, in menu order (AC7)', () => {
  const sessions = [
    { id: '1', subject: 'Spanish', day: '2026-09-23', minutes: 40 },
    { id: '2', subject: 'Biology', day: '2026-09-23', minutes: 25 },
    { id: '3', subject: 'Biology', day: '2026-09-21', minutes: 70 }, // Monday: counts
    { id: '4', subject: 'Biology', day: '2026-09-20', minutes: 99 }, // last Sunday: doesn't
    { id: '5', subject: 'Statistics', day: '2026-09-28', minutes: 10 }, // next Monday: doesn't
  ];
  assert.deepEqual(weeklyTotals(sessions, ['Biology', 'Spanish', 'Statistics'], new Date(2026, 8, 27, 22)), [
    { subject: 'Biology', minutes: 95 },
    { subject: 'Spanish', minutes: 40 },
  ]);
  assert.deepEqual(weeklyTotals([], ['Biology'], new Date(2026, 8, 27)), []);
});

test('deleting removes only that session and leaves the old log unchanged (AC8)', () => {
  const log = [{ id: 'x', subject: 'A', day: '2026-09-23', minutes: 5 }, { id: 'y', subject: 'B', day: '2026-09-23', minutes: 6 }];
  assert.deepEqual(removeSession(log, 'x').map((s) => s.id), ['y']);
  assert.equal(log.length, 2);
});

test('saved data is read safely: bad or missing data gives an empty log (AC6)', () => {
  assert.deepEqual(parseSaved(null), { subjects: [], sessions: [] });
  assert.deepEqual(parseSaved('{not json'), { subjects: [], sessions: [] });
  const saved = JSON.stringify({ subjects: ['Biology', 7], sessions: [{ id: '1', subject: 'Biology', day: '2026-09-23', minutes: 25 }, { junk: true }] });
  assert.deepEqual(parseSaved(saved), { subjects: ['Biology'], sessions: [{ id: '1', subject: 'Biology', day: '2026-09-23', minutes: 25 }] });
});

test('formatDay writes dates like the wireframe: "Tue 23 Sep"', () => {
  assert.equal(formatDay('2025-09-23'), 'Tue 23 Sep');
  assert.equal(formatDay('2026-09-21'), 'Mon 21 Sep');
  assert.equal(formatDay('2026-01-04'), 'Sun 4 Jan');
});
