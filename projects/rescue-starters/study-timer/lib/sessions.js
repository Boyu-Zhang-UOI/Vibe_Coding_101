// lib/sessions.js: the timer and log logic of the Study Log (SPEC.md AC3–AC8).
// Pure functions only: dates come in as arguments instead of being read from the clock,
// so every function can be tested in Node with fixed dates (tests/sessions.test.js).

const DAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** The message from SPEC.md, AC5. */
export const TOO_SHORT_MESSAGE = "Sessions under 1 minute aren't saved.";

/** Show elapsed time as mm:ss, e.g. 75 seconds -> "01:15". Minutes keep counting past 59. */
export function formatTimer(totalSeconds) {
  const seconds = Math.max(0, Math.floor(totalSeconds));
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');
  return `${mm}:${ss}`;
}

/** A date as "YYYY-MM-DD" in the user's own time zone. */
export function localDay(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** "2026-09-23" -> "Tue 23 Sep" (for the log). */
export function formatDay(day) {
  const [y, m, d] = day.split('-').map(Number);
  const date = new Date(y, m - 1, d);
  return `${DAY_NAMES[date.getDay()]} ${d} ${MONTH_NAMES[m - 1]}`;
}

/**
 * Turn a finished timer into a session for the log (AC4, AC5).
 * Returns { session } or { session: null, message }.
 * A session belongs to the day it STARTED (SPEC.md open questions).
 */
export function finishSession({ subject, startedAt, endedAt, id }) {
  const minutes = Math.floor((endedAt - startedAt) / 60_000); // whole minutes, rounded down
  if (minutes < 1) return { session: null, message: TOO_SHORT_MESSAGE };
  return { session: { id, subject, day: localDay(new Date(startedAt)), minutes } };
}

/** The Monday that starts the week containing `today` (weeks run Monday to Sunday). */
export function weekStart(today) {
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const daysSinceMonday = (start.getDay() + 6) % 7; // Monday 0 … Sunday 6
  start.setDate(start.getDate() - daysSinceMonday);
  return start;
}

/**
 * Total minutes per subject for the current week only (AC7).
 * Returns [{ subject, minutes }] in the order of `subjects`, leaving out subjects with 0 minutes.
 */
export function weeklyTotals(sessions, subjects, today) {
  const monday = weekStart(today);
  const nextMonday = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + 7);
  const from = localDay(monday);
  const to = localDay(nextMonday);
  const totals = new Map();
  for (const s of sessions) {
    if (s.day >= from && s.day < to) totals.set(s.subject, (totals.get(s.subject) ?? 0) + s.minutes);
  }
  const order = [...subjects, ...[...totals.keys()].filter((name) => !subjects.includes(name))];
  return order.filter((name) => totals.has(name)).map((subject) => ({ subject, minutes: totals.get(subject) }));
}

/** A new log without the session that has this id (AC8). The old log is not changed. */
export function removeSession(sessions, id) {
  return sessions.filter((s) => s.id !== id);
}

/**
 * Read the saved data (the JSON text from localStorage) safely.
 * Bad, missing or old-format data gives an empty log instead of a crash.
 */
export function parseSaved(text) {
  try {
    const data = JSON.parse(text);
    const subjects = Array.isArray(data?.subjects) ? data.subjects.filter((s) => typeof s === 'string') : [];
    const sessions = Array.isArray(data?.sessions)
      ? data.sessions.filter((s) => s && typeof s.subject === 'string' && typeof s.day === 'string' && Number.isFinite(s.minutes))
      : [];
    return { subjects, sessions };
  } catch {
    return { subjects: [], sessions: [] };
  }
}
