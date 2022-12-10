// #1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.

const categoriesAmount = document.querySelectorAll('.item').length;
console.log('Number of categories:', categoriesAmount);

// #2. Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

const categories = document.querySelector('#categories');
const list = categories.children;
[...list].map(category => {
  const categoryTitle = category.querySelector('h2');
  console.log('Category:', categoryTitle.textContent);
  const categoryList = category.querySelector('ul');
  console.log('Elements:', categoryList.children.length);
});
