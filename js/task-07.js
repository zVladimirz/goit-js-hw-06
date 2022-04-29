const inputEl = document.querySelector('#font-size-control');
const TextEl = document.querySelector('#text');
TextEl.style.fontSize = inputEl.value + 'px';
inputEl.addEventListener('input', () => {
  TextEl.style.fontSize = inputEl.value + 'px';
});
