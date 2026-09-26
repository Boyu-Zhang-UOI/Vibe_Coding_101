// app.js: connects the page to the money math in lib/.
import { tipAmount, totalWithTip, perPerson } from './lib/bill.js';
import { formatMoney, formatPeople } from './lib/format.js';

const form = document.querySelector('#bill-form');
const result = document.querySelector('#result');

function update() {
  const bill = Number(document.querySelector('#bill').value);
  const tip = Number(document.querySelector('#tip').value);
  const people = Number(document.querySelector('#people').value);
  try {
    const share = perPerson(bill, tip, people);
    result.className = '';
    result.textContent =
      'Tip ' + formatMoney(tipAmount(bill, tip)) +
      ' · Total ' + formatMoney(totalWithTip(bill, tip)) +
      ' · ' + formatPeople(people) + ' pay ' + formatMoney(share) + ' each';
  } catch (err) {
    result.className = 'error';
    result.textContent = err.message;
  }
}

form.addEventListener('input', update);
update();
