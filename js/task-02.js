const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map(elem => {
  const listItem = document.createElement('li');
  listItem.textContent = elem;
  listItem.classList.add('item');
  return listItem;
});

const ingredientsList = document.querySelector('ul#ingredients');
ingredientsList.append(...listItems); 