function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

const createBoxes = amount => {

   const elementsToAdd = []
    for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div')
  	div.style.height = `${30 + 10 * i}px`
    div.style.width = `${30 + 10 * i}px`
    div.style.background = getRandomHexColor()
    
   	elementsToAdd.push(div)
	}
	return elementsToAdd
}

const destroyBoxes = () => {
	boxes.innerHTML = ''
}

btnCreate.addEventListener('click', () => {
	let boxesToAdd = createBoxes(input.value)
	boxes.append(...boxesToAdd)
})
console.log(input.value)

btnDestroy.addEventListener('click', () => {
	destroyBoxes.call()
})