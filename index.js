const form = document.querySelector(".calc__form");
// const bill = document.getElementById("bill");
// const peopleNumber = document.getElementById("people");
const tipPercents = document.querySelectorAll(".tip__input");
const tipResult = document.getElementById("tipsPerPerson");
const totalResult = document.getElementById("total");
const resetBtn = document.getElementById("reset");
let percent;

form.addEventListener("input", () => {
  if (form.bill.value > 0 && form.people.value > 0 && percent > 0) {
    const bill = +form.bill.value;
    const numberOfPeople = +form.people.value;
    const tipPercent = (bill / 100) * percent;

    const tipPercentPerPerson = tipPercent / numberOfPeople;
    tipResult.innerText = `$ ${tipPercentPerPerson}`;

    const total = (bill + tipPercent) / numberOfPeople;
    totalResult.innerText = `$ ${total}`;

    resetBtn.removeAttribute("disabled");
  }
});

function handleClick(event) {
  percent = event.target.value;
  return percent;
}

tipPercents.forEach((tip) => tip.addEventListener("click", handleClick));

// Reset Button

resetBtn.addEventListener("click", () => {
  form.reset();
  totalResult.innerText = "$ 0.00";
  tipResult.innerText = "$ 0.00";
});
