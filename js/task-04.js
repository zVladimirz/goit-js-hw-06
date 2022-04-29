let counterValue = 0;
const buttonDecEl = document.querySelector('[data-action="decrement"]');
const buttonAddEl = document.querySelector('[data-action="increment"]');
const count = document.querySelector('#value');
count.textContent = counterValue;
buttonDecEl.addEventListener('click', () => {
  counterValue -= 1;
  count.textContent = counterValue;
});
buttonAddEl.addEventListener('click', () => {
  counterValue += 1;
  count.textContent = counterValue;
});
