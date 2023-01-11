const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text')

input.addEventListener('input', onInputStyleChange);

function onInputStyleChange() {
 return   span.style.fontSize = `${input.value}px`
}