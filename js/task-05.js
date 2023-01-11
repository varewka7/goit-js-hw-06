const refs = {
    input: document.querySelector('#name-input'),
    span: document.querySelector('#name-output')
}


refs.input.addEventListener('input', onInputCange);

function onInputCange(event) {
    if (event.currentTarget.value === '' ) {
        return refs.span.textContent = 'Anonymous'
    }
   return refs.span.textContent = event.currentTarget.value;
}