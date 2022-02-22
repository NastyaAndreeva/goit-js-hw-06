const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', onInputBlur);

function onInputBlur() {
    if(inputLengthValidation(inputEl)) {

        classConflictsChecking(inputEl);
        addingClass(inputEl, 'valid');
        return;
    }
    
    addingClass(inputEl, 'invalid');
}

function addingClass(element, className) {
    element.classList.add(className);
}

function classConflictsChecking(element) {
    if (element.classList.contains('invalid')) {
        element.classList.remove('invalid');
    }
}

function inputLengthValidation(element) {
    return element.value.length === Number(element.dataset.length)
}