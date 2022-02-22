function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector('button.change-color');
const span = document.querySelector('span.color');

changeColorBtn.addEventListener('click', () => {
  const color = getRandomHexColor();

  document.body.style.background = color;
  span.textContent = color;
})
