let counterValue = 0;
const value = document.querySelector('#value');
const decrementBtn = document.querySelector('#counter button[data-action="decrement"]');
const incrementBtn = document.querySelector('#counter button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  if (counterValue != 0) {
    counterValue -= 1;
    value.textContent = counterValue;
  }
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
})
