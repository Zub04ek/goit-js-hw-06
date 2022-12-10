const form = document.querySelector('.login-form');

form.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    return alert('All the fields should be filled!');
  }
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();
}
