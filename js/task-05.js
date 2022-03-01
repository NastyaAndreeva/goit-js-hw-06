const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', onInputType);

function onInputType() {
    outputEl.textContent = inputEl.value;
    
    isEmptyInput();
}

function isEmptyInput() {
    if (inputEl.value === "") {
        outputEl.innerHTML = 'Anonymous';
    }
}
