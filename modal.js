function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalClose = document.querySelector(".thanks");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstData = document.getElementById("first");
const lastData = document.getElementById("last");
const emailData = document.getElementById("email");
const birthdateData = document.getElementById("birthdate");
const quantityData = document.getElementById("quantity");
const locationData = document.querySelectorAll('input[name="location"]');
const conditionCheckBox = document.getElementById('checkbox1');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal event
function closeModal() {
  modalbg.style.display = "none";
}

// cancel form submit
function validate(event) {
  event.preventDefault();
  let valid = true;
  let emailValid;
  let selected;

  document.getElementById("divName").setAttribute("data-error-visible", "false")
  document.getElementById("divSurname").setAttribute("data-error-visible", "false")
  document.getElementById("divEmail").setAttribute("data-error-visible", "false")
  document.getElementById("divBirthday").setAttribute("data-error-visible", "false")
  document.getElementById("divQuantity").setAttribute("data-error-visible", "false")
  document.getElementById("divLocation").setAttribute("data-error-visible", "false")
  document.getElementById("divCondition").setAttribute("data-error-visible", "false")


  this.validateEmail(email);
  if ((firstData.value.length < 2) || (/[^a-zA-Z]/.test(firstData.value)) || (first.value.length > 50)) {
    document.getElementById("divName").setAttribute("data-error-visible", "true")
    valid = false;
  }
  if ((lastData.value.length < 2) || (/[^a-zA-Z]/.test(lastData.value))) {
    document.getElementById("divSurname").setAttribute("data-error-visible", "true")
    valid = false;
  }
  if (this.emailValid == false) {
    document.getElementById("divEmail").setAttribute("data-error-visible", "true")
    valid = false;
  }
  if (!birthdateData.value) {
    document.getElementById("divBirthday").setAttribute("data-error-visible", "true")
    valid = false;
  }
  if (!quantityData.value) {
    document.getElementById("divQuantity").setAttribute("data-error-visible", "true")
    valid = false;
  }
  for (const radioButton of locationData) {
    if (radioButton.checked) {
      selected = radioButton.value
    }
  }
  if (!selected) {
    document.getElementById("divLocation").setAttribute("data-error-visible", "true")
    valid = false;
  }
  if (!conditionCheckBox.checked) {
    document.getElementById("divCondition").setAttribute("data-error-visible", "true")
    valid = false;
  }
  if (valid == false) {
    event.preventDefault();
  } else {
    event.preventDefault();
    modalClose.style.display = "block";

  }
}

function validateEmail(email) {
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  if (reg.test(email.value) == false) {
    emailValid = false;
  } else {
    emailValid = true;
  }
}
