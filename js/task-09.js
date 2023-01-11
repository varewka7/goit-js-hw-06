const body = document.querySelector('body');
const btnElement = document.querySelector('.change-color')

btnElement.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  return body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
