const form = document.querySelector('.login-form')

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault(); 

    const {
        elements: {email, password}
    } = event.currentTarget

    if (email.value === '' || password.value === '') {
        alert `Всі поля повинні бути заповнені`
    };

    const newObject = { email: email.value, password: password.value };

    console.log(newObject);
    event.currentTarget.reset();
}
