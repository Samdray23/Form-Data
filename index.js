const form = document.getElementById("myForm");
const surNameInput = document.getElementById("surname");
const lastNameInput = document.getElementById("lastname");
const emailInput = document.getElementById("email");
const phoneNumberInput = document.getElementById("phone");
const stateInput = document.getElementById("state");
const homeTownInput = document.getElementById("hometown");

let arrayOfDatas = [];

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

  arrayOfDatas.push(formData);
  console.log(arrayOfDatas);
  form.reset();
});

//print the data to the ui//

let displayCountainer = document.getElementById("countainer");
displayCountainer.innerHTML = "";

function displayData() {
  arrayOfDatas.forEach(function (data) {
    const dataElement = document.createElement("p");
    dataElement.textContent = `Surname: ${data.surname}, Name: ${data.name}, Email: ${data.email}, Phone: ${data.phone}, State: ${data.state}, Hometown: ${data.hometown}`;
    displayCountainer.append(dataElement);
  });
}
