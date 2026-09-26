// bill.js: the money math for Tip Splitter.
// All amounts are in dollars. Results are rounded to whole cents.

export function roundToCents(amount) {
  return Math.round(amount * 100) / 100;
}

// The tip for a bill, e.g. tipAmount(50, 20) is 10.
export function tipAmount(bill, tipPercent) {
  checkAmount(bill, 'Bill');
  return roundToCents((bill * tipPercent) / 100);
}

// The bill plus the tip.
export function totalWithTip(bill, tipPercent) {
  return roundToCents(bill + tipAmount(bill, tipPercent));
}

// What each person pays. Each share is rounded UP to the next cent,
// so the group always pays at least the full total.
export function perPerson(bill, tipPercent, people) {
  if (Number.isInteger(people) === false || people < 1) {
    throw new Error('People must be a whole number, at least 1');
  }
  const totalCents = Math.round(totalWithTip(bill, tipPercent) * 100);
  return Math.round(totalCents / people) / 100;
}

function checkAmount(value, label) {
  const ok = typeof value === 'number' && Number.isFinite(value) && value >= 0;
  if (ok === false) {
    throw new Error(label + ' must be a number, 0 or more');
  }
}
