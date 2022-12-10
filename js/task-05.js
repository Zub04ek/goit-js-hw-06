const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');

inputText.addEventListener('input', enteringText);

function enteringText(event) {
  if (!event.currentTarget.value) {
    return (outputText.textContent = 'Anonymous');
  }
  outputText.textContent = event.currentTarget.value;
}
