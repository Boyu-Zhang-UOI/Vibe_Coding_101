// format.js: turns numbers into text for the page.

// Show an amount of money in US dollars with two decimals, e.g. 38.5 becomes "$38.50".
export function formatMoney(amount) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount);
}

// Show a number of people, e.g. 1 becomes "1 person" and 3 becomes "3 people".
export function formatPeople(count) {
  return count === 1 ? '1 person' : count + ' people';
}
