function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyColor = document.querySelector('body');
const buttonChangeColor = document.querySelector('.change-color');
buttonChangeColor.addEventListener('click', () => {
  document.body.style.background = getRandomHexColor();
});
