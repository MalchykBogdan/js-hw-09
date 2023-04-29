const ingredients = [
  'Картопля',
  'Гриби',
  'Часник',
  'Помідори',
  'Зелень',
  'Приправи',
];

//Робив для себе перевіряв чи все виконується

// const newEl = document.createElement('li')
// newEl.classList.add('ingredients')

// console.log(newEl);

// console.log(newEl);
// newEl.classList.add('.ingredients_link')
// newEl.textContent = 'Картопля'

// const parentEl = document.querySelector('ul'); 
// parentEl.appendChild(newEl); 
// console.log(newEl);

ingredients.forEach(products => {
  const newEl = document.createElement('li')
  newEl.textContent = products;
  const parentEl = document.querySelector('ul'); 
  parentEl.appendChild(newEl); 
  console.log(newEl);
});