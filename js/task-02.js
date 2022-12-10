const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

ingredients.map(ingredient => {
  const listEl = document.createElement('li');
  listEl.textContent = ingredient;
  listEl.classList.add('item');
  list.append(listEl);
});
