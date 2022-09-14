const inputEl = document.querySelector('#font-size-control');
const outputText = document.querySelector('#text');
inputEl.value = inputEl.attributes.min.value;

inputEl.addEventListener('input', changeTextSize);

function changeTextSize(event) {
  outputText.style.fontSize = `${event.currentTarget.value}px`;
}