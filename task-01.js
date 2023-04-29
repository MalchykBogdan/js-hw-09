const catUl = document.querySelector("ul#categories")
const categoryFirst = catUl.children.length
console.log(categoryFirst);

const catLi = catUl.querySelectorAll('li.item')
console.log(catLi);


catLi.forEach(catLi => {
    const catTitle = catLi.querySelector('h2').textContent;
    const allItems = catLi.querySelector('ul');
    const catAllItems = allItems.children.length;
    console.log(`Категорія: ${catTitle}`);
    console.log(`Кількість елементів: ${catAllItems}`);
  });