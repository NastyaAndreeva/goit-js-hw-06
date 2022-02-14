const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = [];

ingredients.forEach(elem => {
  const listItem = document.createElement('li');
  listItem.textContent = elem;
  listItem.classList.add('item');
  listItems.push(listItem);
});

const ingredientsList = document.querySelector('ul#ingredients');
ingredientsList.append(...listItems);