const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listBlockEl = document.querySelector('#ingredients');

// First way

// const listEl = [];

// for (let i = 0; i < ingredients.length; i++) {
//   let ingredient = document.createElement('li');
//   ingredient.classList.add('item');
//   ingredient.textContent = ingredients[i];
//   listEl.push(ingredient);
// };

// listBlockEl.append(...listEl);

//==========================================================================

//Second way

const listEl = ingredients.map(item => {
  let ingredient = document.createElement('li');
  ingredient.classList.add('item');
  ingredient.textContent = item;
  return ingredient;
});

listBlockEl.append(...listEl);