const contactForm = document.getElementById("contact-form");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const flexRadioDefault1 = document.getElementById("flexRadioDefault1");
const flexRadioDefault2 = document.getElementById("flexRadioDefault2");
const message = document.getElementById("message");
const flexCheckDefault = document.getElementById("flexCheckDefault");
const formControl = document.querySelectorAll(".form-control");

const firstNameError = document.getElementById("firstNameError");
const lastNameError = document.getElementById("lastNameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");
const radioError = document.getElementById("radioError");
const checkError = document.getElementById("checkError");

console.log(firstName.value);

contactForm.addEventListener("submit", (e) => {
  // Clear previous error messages
  firstNameError.innerText = "";
  emailError.innerText = "";
  messageError.innerText = "";
  lastNameError.innerText = "";
  radioError.innerText = "";
  checkError.innerText = "";

  formControl.forEach((input) => {
    input.classList.remove("border", "border-danger");
  });

  let hasErrors = false; // Flag to check if any errors are present

  // Validate first name
  if (!firstName.value) {
    firstNameError.innerText = "This field is required.";
    firstName.classList.add("border", "border-danger");
    hasErrors = true;
  }

  // Validate last name
  if (!lastName.value) {
    lastNameError.innerText = "This field is required.";
    lastName.classList.add("border", "border-danger");
    hasErrors = true;
  }

  // Validate email
  if (!email.value) {
    emailError.innerText = "This field is required.";
    email.classList.add("border", "border-danger");
    hasErrors = true;
  } else if (!validateEmail(email.value)) {
    emailError.innerText = "Please enter a valid email address.";
    email.classList.add("border", "border-danger");
    hasErrors = true;
  }

  // Validate message
  if (!message.value) {
    messageError.innerText = "This field is required.";
    message.classList.add("border", "border-danger");
    hasErrors = true;
  }
  if (!flexRadioDefault1.checked && !flexRadioDefault2.checked) {
    radioError.innerText = "Please select a query type";
    hasErrors = true;
  } else if (!flexRadioDefault1.checked) {
    flexRadioDefault1.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none" viewBox="0 0 20 21"><path fill="#0C7D69" d="M10 .75a9.75 9.75 0 1 0 9.75 9.75A9.76 9.76 0 0 0 10 .75Zm0 18a8.25 8.25 0 1 1 8.25-8.25A8.26 8.26 0 0 1 10 18.75Zm5.25-8.25a5.25 5.25 0 1 1-10.499 0 5.25 5.25 0 0 1 10.499 0Z"/></svg>';
  }
  if (!flexCheckDefault.checked) {
    checkError.innerText =
      "To submit this form, please consent to being contacted.";
    hasErrors = true;
  }

  // Prevent form submission if there are errors
  if (hasErrors) {
    e.preventDefault();
  } else {
    e.preventDefault();
    const modal = document.getElementById("modalSheet");
    modal.classList.remove("d-none");
    modal.classList.add("d-block");
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
    flexCheckDefault.checked = "";
    flexRadioDefault1.checked = "";
    flexRadioDefault2.checked = "";
  }
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
