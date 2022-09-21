const formEl = document.querySelector(".login-form");

function checkSubmit(e) {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Пожалуйста, заполните все поля");
  }

  const result = { email: email.value, password: password.value };
  console.log(result);
  e.currentTarget.reset();
}

formEl.addEventListener("submit", checkSubmit);
