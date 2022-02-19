function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const color = getRandomHexColor();

const changeColorBtn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

changeColorBtn.addEventListener('click', () => {
  document.body.style.background = color;
  span.textContent = color;
})
