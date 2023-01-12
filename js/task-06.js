const input = document.querySelector('#validation-input')

input.addEventListener('blur', onImputBlur);

function onImputBlur(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
  return  input.classList = 'valid'
    } else input.classList = 'invalid'
}