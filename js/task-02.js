const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulElements = document.querySelector('#ingredients')

const ingredientsEl = ingredients.map((el) => {
  const liElement = document.createElement('li');
   liElement.textContent = el;
   liElement.classList.add('item');
   return liElement;
   
});

ulElements.append(...ingredientsEl);