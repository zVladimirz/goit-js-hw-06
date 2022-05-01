const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', () => {
  const inputText = Number(inputEl.value);
  const inputTextLen = inputEl.dataset.length;
console.log(inputTextLen);
console.log(inputText.length);
  if (inputText.length === inputTextLen) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
