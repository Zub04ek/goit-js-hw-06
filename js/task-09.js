function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  body: document.querySelector('body'),
  bgColor: document.querySelector('.color'),
  button: document.querySelector('.change-color'),
};

refs.button.addEventListener('click', changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.bgColor.textContent = randomColor;
}
