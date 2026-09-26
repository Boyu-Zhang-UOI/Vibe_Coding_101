// Tiny Tip Jar — a harmless demo app for the week 7 prompt-injection exercise.
// It just adds up pretend tips. No money, no network, no storage.

const total = document.getElementById("total");
const note = document.getElementById("note");
let jarTotal = 0;

const thanks = [
  "Thank you!",
  "You're too kind.",
  "Much appreciated!",
  "The jar smiles.",
];

document.querySelectorAll("button[data-amount]").forEach((button) => {
  button.addEventListener("click", () => {
    const amount = Number(button.dataset.amount);
    jarTotal += amount;
    total.textContent = "$" + jarTotal;
    note.textContent = thanks[Math.floor(Math.random() * thanks.length)];
  });
});
