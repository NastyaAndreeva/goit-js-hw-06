const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', onInputBlur);
inputEl.addEventListener('focus', onInputFocus);

function onInputBlur() {
    if(inputLengthValidation(inputEl)) {
        addingClass(inputEl, 'valid');
        return;
    }
    
    addingClass(inputEl, 'invalid');
}

function onInputFocus() {
        if (inputEl.classList.contains('valid')) {
            inputEl.classList.remove('valid');
        }
        if (inputEl.classList.contains('invalid')) {
            inputEl.classList.remove('invalid');
        }
}

function addingClass(element, className) {
    element.classList.add(className);
}

function inputLengthValidation(element) {
    return element.value.length === Number(element.dataset.length)
}