const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngridients = document.querySelector('#ingredients');

ingredients.forEach(item => {
  const listItem = document.createElement('li');
  listItem.textContent = item;
  listItem.classList.add('item');
  listIngridients.appendChild(listItem);
})
