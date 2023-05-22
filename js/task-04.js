const counterValue = document.getElementById("value");
let currentValue = 0;

function increment() {
  currentValue += 1;
  counterValue.textContent = currentValue;
}

function decrement() {
  currentValue -= 1;
  counterValue.textContent = currentValue;
}

const decrementButton = document.querySelector("[data-action='decrement']");
const incrementButton = document.querySelector("[data-action='increment']");

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
