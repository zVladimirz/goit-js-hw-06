const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('input', () => {
  const inputText = inputEl.value;
  if (inputText === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputText;
  }
});
