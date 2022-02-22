const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const data = event.currentTarget.elements;
    const email = data.email.value;
    const password = data.password.value;
    
    alertMessage(email, password);
    logMessage(email, password);

    event.currentTarget.reset();
}

function alertMessage(email, password) {
    if (!email || !password) {
        alert('All fields should be filled');
    }
}

function logMessage (email, password) {
    const logData = {email, password};

    if (email && password) {
        console.log(logData);
    }
}
