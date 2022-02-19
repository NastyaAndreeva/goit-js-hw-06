const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if(inputEl.value.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        return;
    }
    inputEl.classList.add('invalid');
}