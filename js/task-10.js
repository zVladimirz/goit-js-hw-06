function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const destroyBoxes = () => {
  while (DivEl.firstChild) {
    DivEl.removeChild(DivEl.firstChild);
  }
};
const buttonCreate = document.querySelector('[data-create]');
const buttonDestroy = document.querySelector('[data-destroy]');
const count = document.querySelector('input');
const DivEl = document.querySelector('#boxes');
buttonCreate.addEventListener('click', () => {
  const DivAdd = [];
  let divHeight = 30;
  let divWidth = 30;
  for (let i = 1; i <= count.value; i += 1) {
    DivAdd.push(document.createElement('div'));
    DivAdd[DivAdd.length - 1].style.height = divHeight + 'px';
    DivAdd[DivAdd.length - 1].style.width = divWidth + 'px';
    DivAdd[DivAdd.length - 1].style.background = getRandomHexColor();
    divHeight += 10;
    divWidth += 10;
  }
  DivEl.append(...DivAdd);
});
buttonDestroy.addEventListener('click', destroyBoxes);
