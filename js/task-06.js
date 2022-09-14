const inptEl = document.querySelector('#validation-input');
inptEl.addEventListener('blur', checkInputText);

function checkInputText(event) {
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    this.classList.add('valid');
  } else {
    this.classList.add('invalid');
  }

}