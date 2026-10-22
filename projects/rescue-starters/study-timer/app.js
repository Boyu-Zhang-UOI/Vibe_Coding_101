// app.js: connects the page to the logic in lib/ and saves everything in localStorage.
// The calculations live in lib/ as pure functions, so they can be tested in Node (npm test).
// This file is the only one that touches the page (document) and the browser's storage.

import { checkNewSubject } from './lib/validate.js';
import { finishSession, formatDay, formatTimer, localDay, parseSaved, removeSession, weeklyTotals } from './lib/sessions.js';

const STORAGE_KEY = 'study-log'; // SPEC.md §6

const subjectMenu = document.querySelector('#subject');
const subjectForm = document.querySelector('#subject-form');
const newSubject = document.querySelector('#new-subject');
const timerDisplay = document.querySelector('#timer');
const startStop = document.querySelector('#start-stop');
const message = document.querySelector('#message');
const totalsList = document.querySelector('#totals');
const logList = document.querySelector('#log');

let { subjects, sessions } = parseSaved(localStorage.getItem(STORAGE_KEY));
let startedAt = null; // when the running timer started (a number of milliseconds), or null
let tick = null; // the interval that redraws the timer once a second

// ---------- Subjects (AC1, AC2) ----------

subjectForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const problem = checkNewSubject(newSubject.value, subjects);
  if (problem) {
    showMessage(problem);
    return;
  }
  const name = newSubject.value.trim();
  subjects = [...subjects, name];
  save();
  renderSubjects(name);
  newSubject.value = '';
  showMessage(`Added ${name}.`);
});

function renderSubjects(selected = subjectMenu.value) {
  subjectMenu.replaceChildren();
  if (subjects.length === 0) {
    subjectMenu.append(new Option('Add a subject first', ''));
    subjectMenu.disabled = true;
  } else {
    for (const name of subjects) subjectMenu.append(new Option(name, name, false, name === selected));
    subjectMenu.disabled = startedAt !== null;
  }
  startStop.disabled = subjects.length === 0;
}

// ---------- Timer (AC3, AC4, AC5) ----------

startStop.addEventListener('click', () => {
  if (startedAt === null) start();
  else stop();
});

function start() {
  startedAt = Date.now();
  showMessage('');
  startStop.textContent = 'Stop';
  subjectMenu.disabled = true;
  // Work out the time from the clock each tick, so the timer stays right even if the
  // browser slows down timers in a background tab.
  tick = setInterval(() => {
    timerDisplay.textContent = formatTimer((Date.now() - startedAt) / 1000);
  }, 1000);
}

function stop() {
  clearInterval(tick);
  const result = finishSession({ subject: subjectMenu.value, startedAt, endedAt: Date.now(), id: crypto.randomUUID() });
  startedAt = null;
  timerDisplay.textContent = formatTimer(0);
  startStop.textContent = 'Start';
  subjectMenu.disabled = false;
  if (!result.session) {
    showMessage(result.message);
    return;
  }
  sessions = [result.session, ...sessions]; // newest at the top
  save();
  renderLog();
  showMessage(`Saved ${result.session.minutes} min of ${result.session.subject}.`);
}

// ---------- Weekly totals and log (AC6, AC7, AC8) ----------

function renderTotals() {
  totalsList.replaceChildren();
  const totals = weeklyTotals(sessions, subjects, new Date());
  if (totals.length === 0) {
    totalsList.append(item('No study time logged this week yet.'));
    return;
  }
  for (const { subject, minutes } of totals) totalsList.append(item(`${subject}: ${minutes} min`));
}

function renderLog() {
  logList.replaceChildren();
  if (sessions.length === 0) logList.append(item('No sessions yet. Pick a subject and press Start.'));
  for (const session of sessions) {
    const li = document.createElement('li');
    li.className = 'log-row';
    const text = document.createElement('span');
    const description = `${formatDay(session.day)}, ${session.subject}, ${session.minutes} min`;
    text.textContent = description; // textContent, never innerHTML, for anything the user typed
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'link';
    remove.textContent = 'Delete';
    remove.setAttribute('aria-label', `Delete session: ${description}`);
    remove.addEventListener('click', () => {
      if (!confirm(`Delete this session?\n${description}`)) return; // Cancel changes nothing
      sessions = removeSession(sessions, session.id);
      save();
      renderLog();
      showMessage('Session deleted.');
    });
    li.append(text, remove);
    logList.append(li);
  }
  renderTotals();
}

// ---------- Helpers ----------

function item(text) {
  const li = document.createElement('li');
  li.textContent = text;
  return li;
}

function showMessage(text) {
  message.textContent = text;
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ subjects, sessions }));
  } catch {
    showMessage("Couldn't save: this browser's storage is full or switched off.");
  }
}

// When the date changes while the page is open, the week's totals need redrawing.
let today = localDay(new Date());
setInterval(() => {
  if (localDay(new Date()) !== today) {
    today = localDay(new Date());
    renderTotals();
  }
}, 60_000);

renderSubjects(subjects[0]);
renderLog();
