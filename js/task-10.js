function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// 1. Отримую доступ до елементів HTML розмітки
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const collection = document.getElementById('boxes');
const input = document.querySelector('input');

// 2. Додаю базові стилі до колекції для візуального оформлення
collection.style.display = 'flex';
collection.style.flexWrap = 'wrap';
collection.style.gap = '10px';
collection.style.marginTop = '10px';

// 3. Додаю прослуховувачі на кпопки
createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

// 4. Прописую умову виконная функції createBoxes
function createBoxes(amount) {
  // 4.1 Присвоюю параметру amount значення, яке ввів користувач в поле
  amount = input.value;

  // 4.2 Задаю початковий розмір боксів, який в циклі при кожній ітерації буде збільшуватись на 10px
  let boxSizeSDefault = 20;

  // 4.3 За допомогою циклу створюю ту кількість боксів, що вказана в змінній amount, додаю до розмітки, на кожній ітрації змінюється розмір боксу, а також присоюється рандомний колір
  for (let i = 0; i <= amount - 1; i += 1) {
    const box = document.createElement('div');
    collection.append(box);

    boxSizeSDefault += 10;

    collection.children[i].style.width = `${boxSizeSDefault}px`;
    collection.children[i].style.height = `${boxSizeSDefault}px`;

    box.style.border = '1px solid #212121';

    const randomColor = getRandomHexColor();
    box.style.backgroundColor = randomColor;
  }
}

// 5. Прописую умову виконная функції destroyBoxes
function destroyBoxes() {
  collection.innerHTML = '';
  input.value = '';
}
