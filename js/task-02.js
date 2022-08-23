const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');
const listEl = [];

ingredients.forEach(function (ingredient) {
  const item = document.createElement("li");
  item.textContent = ingredient;
  listEl.push(item);
});

list.append(...listEl);