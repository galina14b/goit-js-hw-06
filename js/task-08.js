const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', getValidInputData);

function getValidInputData(event) {
  event.preventDefault();
  if (event.currentTarget.elements.email.value == '' || event.currentTarget.elements.password.value == '') {
    alert('Bсі поля повинні бути заповнені');
  } else {
    const formValues = {
      email: event.currentTarget.elements.email.value,
      password: event.currentTarget.elements.password.value
    };
    console.log(formValues); 
    this.reset();
  }
}
