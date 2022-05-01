const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
  const inputText = inputEl.value;
  const inputTextLen = Number(inputEl.dataset.length);
  if (inputText.length === inputTextLen) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
