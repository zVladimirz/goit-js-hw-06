const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const elements = ingredients.map(ingredient => {
  const elem = document.createElement('li');
  elem.textContent = ingredient;
  elem.classList.add('item');
  return elem;
});
ulIngredients = document.querySelector('#ingredients');
ulIngredients.append(...elements);
