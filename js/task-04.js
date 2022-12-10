const refs = {
  decreaseBtn: document.querySelector('button[data-action="decrement"]'),
  valueEl: document.querySelector('#value'),
  increaseBtn: document.querySelector('button[data-action="increment"]'),
};

let counterValue = 0;

const decrementCounter = () => {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
};

const incrementCounter = () => {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
};

refs.decreaseBtn.addEventListener('click', decrementCounter);
refs.increaseBtn.addEventListener('click', incrementCounter);
