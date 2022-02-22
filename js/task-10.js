const refs = {
  boxes: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let amount = null;
let size = 30;

function createBoxes(amount) {

  const elements = [];
  
  for (let i = 0; i < amount; i += 1) {
    let element = document.createElement('div');
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
    element.style.backgroundColor = getRandomHexColor();
    size += 10;
    elements.push(element)
  }

  refs.boxes.append(...elements);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = 0;
}


function getCounter(event) {
  amount = event.currentTarget.value;
}

refs.input.addEventListener('input', getCounter);

refs.createBtn.addEventListener('click', () => {
  createBoxes(amount);
  
});

refs.destroyBtn.addEventListener('click', destroyBoxes);