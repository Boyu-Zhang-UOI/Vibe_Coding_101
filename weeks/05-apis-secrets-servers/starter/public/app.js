// public/app.js: runs in the visitor's browser. Everything in public/ is PUBLIC:
// anyone can read it with DevTools. So there is no API key here. The browser only
// talks to our own server route, /api/ask, and the server talks to the AI.

import { MAX_INPUT_LENGTH, checkInput, counterText } from './lib/input.js';

const form = document.querySelector('#ask-form');
const questionBox = document.querySelector('#question');
const counter = document.querySelector('#counter');
const button = document.querySelector('#ask-button');
const statusLine = document.querySelector('#status');
const answerSection = document.querySelector('#answer-section');
const answerBox = document.querySelector('#answer');

questionBox.maxLength = MAX_INPUT_LENGTH;
updateCounter();
questionBox.addEventListener('input', updateCounter);
form.addEventListener('submit', onSubmit);

function updateCounter() {
  counter.textContent = counterText(questionBox.value);
}

async function onSubmit(event) {
  event.preventDefault();
  const question = questionBox.value;

  const problem = checkInput(question);
  if (problem) {
    showStatus(problem, true);
    return;
  }

  setLoading(true);
  try {
    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question }),
    });
    // The server always answers with JSON, but a crashed server or a timeout
    // may send back something else, so don't assume.
    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      showStatus(data.error || `Something went wrong (error ${response.status}). Please try again.`, true);
      return;
    }
    answerBox.textContent = data.reply; // textContent, never innerHTML: the reply is untrusted text
    answerSection.hidden = false;
    showStatus('');
  } catch {
    showStatus('Could not reach the server. Check your internet connection and try again.', true);
  } finally {
    setLoading(false);
  }
}

function setLoading(isLoading) {
  button.disabled = isLoading;
  button.textContent = isLoading ? 'Thinking…' : 'Ask';
  if (isLoading) showStatus('Asking the AI…');
}

function showStatus(message, isError = false) {
  statusLine.textContent = message;
  statusLine.classList.toggle('error', isError);
}
