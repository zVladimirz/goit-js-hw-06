const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
  const inputText = inputEl.value;
  const inputTextLen = inputEl.dataset.length;
  if (inputText.length <= inputTextLen && inputText.length > 0) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
