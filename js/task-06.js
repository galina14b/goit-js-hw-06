const inptEl = document.querySelector('#validation-input');
inptEl.addEventListener('blur', checkInputText);
inptEl.addEventListener('focus', () => inptEl.value = '')

function checkInputText(event) {
  this.classList.remove('valid');
  this.classList.remove('invalid');
  if (event.currentTarget.value.length == event.currentTarget.dataset.length) {
    this.classList.add('valid');
  } else {
    this.classList.add('invalid');
  }

}