inputEl = document.querySelector('#font-size-control');
TextEl = document.querySelector('#text');
TextEl.style.fontSize = inputEl.value + 'px';
inputEl.addEventListener('input', () => {
  TextEl.style.fontSize = inputEl.value + 'px';
});
