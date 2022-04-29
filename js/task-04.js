let counterValue = 0;
buttonDecEl = document.querySelector('[data-action="decrement"]');
buttonAddEl = document.querySelector('[data-action="increment"]');
count = document.querySelector('#value');
count.textContent = counterValue;
buttonDecEl.addEventListener('click', () => {
  counterValue -= 1;
  count.textContent = counterValue;
});
buttonAddEl.addEventListener('click', () => {
  counterValue += 1;
  count.textContent = counterValue;
});
