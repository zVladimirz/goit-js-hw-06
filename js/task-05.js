inputEl = document.querySelector('#name-input');
outputEl = document.querySelector('#name-output');
inputEl.addEventListener('keyup', () => {
  inputText = inputEl.value;
  if (inputText === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = inputText;
  }
});
