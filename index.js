const form = document.querySelector(".calc__form");
// const bill = document.getElementById("bill");
// const peopleNumber = document.getElementById("people");
const tipPercents = document.querySelectorAll(".tip__input");
const customPercent = document.getElementById("custom");
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
    // Number(tipPercentPerPerson).toFixed(2);
    console.log(tipPercentPerPerson);
    tipResult.innerText = `$ ${tipPercentPerPerson.toFixed(2)}`;

    const total = (bill + tipPercent) / numberOfPeople;
    totalResult.innerText = `$ ${total.toFixed(2)}`;

    resetBtn.removeAttribute("disabled");
  }
});

/// Custom input

customPercent.addEventListener("input", () => {
  percent = customPercent.value;
  tipPercents.forEach((input) => {
    if (input.checked) {
      input.checked = false;
    }
  });
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
