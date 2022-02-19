const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const data = event.currentTarget.elements;
    const email = data.email.value;
    const password = data.password.value;
    
    if (!email || !password) {
        alert('All fields should be filled');
    }

    const logData = {email, password};

    console.log(logData);

    event.currentTarget.reset();
}
