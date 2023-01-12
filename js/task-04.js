const counterEl = document.querySelector('#counter');
const removeListenerBtn = counterEl.querySelector('button[data-action="decrement"]')
const addListenerBtn = counterEl.querySelector('button[data-action="increment"]')
const valueEl = counterEl.querySelector('#value')

let counterValue = 0;

  let decrement = () => {
      counterValue -= 1;

      valueEl.innerHTML = counterValue;
    }

removeListenerBtn.addEventListener('click', (decrement))

  let increment = () => {
      counterValue += 1; 

      valueEl.innerHTML = counterValue; 
  }

addListenerBtn.addEventListener('click', (increment))