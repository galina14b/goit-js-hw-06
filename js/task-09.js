function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColorBtn = document.querySelector('.change-color');
const colorTextEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

changeColorBtn.addEventListener('click', changingBackgroundColor);

function changingBackgroundColor() {
  let newColor = getRandomHexColor();
  bodyEl.style.backgroundColor = newColor;
  colorTextEl.textContent = newColor;
}