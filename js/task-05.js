const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
inputEl.addEventListener('keyup', () => {
  const inputText = inputEl.value;
  if (inputText === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputText;
  }
});
