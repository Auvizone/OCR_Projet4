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
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const firstData = document.getElementById("first");
const lastData = document.getElementById("last");
const emailData = document.getElementById("email");
const birthdateData = document.getElementById("birthdate");
const quantityData = document.getElementById("quantity");
const locationData = document.querySelectorAll('input[name="location"]');
const dataCheckBox = document.getElementById('checkbox1');

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
  let selected;
  document.getElementById("firstErrorMessage").style.display = "none";
  document.getElementById("lastErrorMessage").style.display = "none";
  document.getElementById("emailErrorMessage").style.display = "none";
  document.getElementById("birthdateErrorMessage").style.display = "none";
  document.getElementById("quantityErrorMessage").style.display = "none";
  document.getElementById("locationErrorMessage").style.display = "none";

  if (firstData.value.length < 2) {
    document.getElementById("firstErrorMessage").style.display = "block";
    value = false;
  }
  if (lastData.value.length < 2) {
    document.getElementById("lastErrorMessage").style.display = "block";
    value = false;
  }
  if (birthdateData.value == '') {
    document.getElementById("birthdateErrorMessage").style.display = "block";
    value = false;
  }
  if (quantityData.value == '') {
    document.getElementById("quantityErrorMessage").style.display = "block";
    value = false;
  }
  if (quantityData.value == '') {
    document.getElementById("quantityErrorMessage").style.display = "block";
    value = false;
  }
  for (const radioButton of locationData) {
    if (radioButton.checked) {
      selected = radioButton.value
    }
  }
  if (selected == undefined) {
    document.getElementById('locationErrorMessage').style.display="block"
  }
}

// function submit(event) {
//   event.preventDefault();
//   let valid = true;
//   document.getElementById("firstErrorMessage").style.display = "none";
//   document.getElementById("lastErrorMessage").style.display = "none";
//   document.getElementById("emailErrorMessage").style.display = "none";
//   document.getElementById("birthdateErrorMessage").style.display = "none";
//   document.getElementById("quantityErrorMessage").style.display = "none";
//   document.getElementById("locationErrorMessage").style.display = "none";
//   document.getElementById("firstErrorMessage").style.display = "none";

//   if (firstData.value.length < 2) {
//     document.getElementById("firstErrorMessage").style.display = "block";
//     value = false;
//     console.log('test', value)
//   }
// }
