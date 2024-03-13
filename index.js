const form = document.querySelector(".calc__form");
const tipPercents = document.querySelectorAll(".tip__input");
const customPercent = document.getElementById("custom");
const tipResult = document.getElementById("tipsPerPerson");
const totalResult = document.getElementById("total");
const resetBtn = document.getElementById("reset");
const peopleInput = document.getElementById("people");
const errorMessage = document.getElementById("error");

let percent;

form.addEventListener("input", () => {
  if (form.bill.value > 0 && form.people.value > 0 && percent > 0) {
    const bill = +form.bill.value;
    const numberOfPeople = +form.people.value;
    const tipPercent = (bill / 100) * percent;

    const tipPercentPerPerson = tipPercent / numberOfPeople;
    // Number(tipPercentPerPerson).toFixed(2);
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
  resetBtn.setAttribute("disabled", true);
});

// Number Input Error

peopleInput.addEventListener("input", () => {
  if (parseInt(peopleInput.value) < 1) {
    peopleInput.style.outline = "1px solid red";
    errorMessage.innerHTML = "Cant be zero";
  } else {
    peopleInput.style.outline = "1px solid transparent";
    errorMessage.innerHTML = "";
    peopleInput.classList.add("error");
  }
});
