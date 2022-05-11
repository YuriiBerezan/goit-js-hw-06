const form = document.querySelector('.login-form')
form.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {

    event.preventDefault();
      const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(" Пожалуйста, заполните все поля!");
  }

  let formValue = {
    Email: `${email.value}`,
    Password : `${password.value}`,
}
console.log(formValue)
  // console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();
}



