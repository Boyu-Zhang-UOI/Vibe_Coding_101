// lib/validate.js: the check behind AC2 ("Add subject" with an empty box or a duplicate).
// A pure function: it uses only its inputs and returns an answer. No document, no
// localStorage, so Node can test it (tests/validate.test.js).

/** The longest subject name the app accepts. */
export const MAX_SUBJECT_LENGTH = 40;

/** The message from SPEC.md, AC2. */
export const NEW_SUBJECT_MESSAGE = 'Type a new subject name.';

/**
 * Is this a new subject name that can be added?
 * Returns '' if it can, or the message to show if it can't.
 * @param {string} name      what the user typed
 * @param {string[]} subjects the subjects already in the menu
 */
export function checkNewSubject(name, subjects) {
  const trimmed = String(name ?? '').trim();
  if (trimmed === '') return NEW_SUBJECT_MESSAGE;
  if (trimmed.length > MAX_SUBJECT_LENGTH) return `Subject names can be up to ${MAX_SUBJECT_LENGTH} characters.`;
  const taken = subjects.some((subject) => subject.toLowerCase() === trimmed.toLowerCase());
  return taken ? NEW_SUBJECT_MESSAGE : '';
}
