const form = document.getElementById("myForm");
const surNameInput = document.getElementById("surname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone");
const stateInput = document.getElementById("state");
const homeTownInput = document.getElementById("hometown");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = {
    surname: surNameInput.value,
    name: lastNameInput.value,
    email: emailInput.value,
    phone: phoneNumberInput.value,
    state: stateInput.value,
    hometown: homeTownInput.value,
  };
  console.log(formData);
});
