const input = document.querySelector('#validation-input');

input.addEventListener('blur', removeFocus);

function removeFocus(event) {
  const isInputLengthRight = event.currentTarget.value.length === Number(input.dataset.length);
  const hasNotInputGap = event.currentTarget.value.split('').every(el => el.trim() !== '');
  if (isInputLengthRight && hasNotInputGap) {
    event.currentTarget.classList.remove('invalid');
    return event.currentTarget.classList.add('valid');
  }
  event.currentTarget.classList.remove('valid');
  return event.currentTarget.classList.add('invalid');
}
