const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
outputEl.textContent = 'Anonymous';

inputEl.addEventListener('input', onInputType);

function onInputType() {
    outputEl.textContent = inputEl.value;
}
