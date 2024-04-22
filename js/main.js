// HAMBURGER MENU TOGGLE
function showMenu() {
  document.querySelector('.menu').classList.add('menu-open');
}

function hideMenu() {
  document.querySelector('.menu').classList.remove('menu-open');
}

document
  .querySelector('#menu-hamburger')
  .addEventListener('click', showMenu);
document
  .querySelector('#menu-close')
  .addEventListener('click', hideMenu);

// FORM VALIDATION
let myForm = document.querySelector('form');
var allInputs = document.querySelectorAll('input');
var textareaInput = document.querySelector('textarea');

function validateEmail(email) {
  var isValidEmail = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  if (isValidEmail) {
    return true;
  } else {
    return false;
  }
}

function onSubmit(event) {
  event.preventDefault();

  // Validate the fields

  // 1. Get the input and error fields
  let firstNameInput = myForm.querySelector('#name');
  let firstNameErrorBox = myForm.querySelector('#name-error');
  // 2. Clear any existing errors and messages
  firstNameInput.style.border = '';
  firstNameErrorBox.innerHTML = '';
  // 3. Get the value from the input field
  let firstName = firstNameInput.value;
  // 4. Do validation
  if (firstName.length === 0) {
    firstNameInput.style.border = '2px solid red';
    firstNameErrorBox.innerHTML = '* The name must have at least one character.';
  }

  // 1. Get the input and error fields for email
  let emailInput = myForm.querySelector('#email');
  let emailErrorBox = myForm.querySelector('#email-error');
  // 2. Clear any existing errors and messages
  emailInput.style.border = '';
  emailErrorBox.innerHTML = '';
  // 3. Get the value from the input field
  let email = emailInput.value;
  // 4. Do validation - make sure email is not empty
  //    If not valid - add style and error message
  if (email.length === 0 || !validateEmail(email)) {
    emailInput.style.border = '2px solid red';
    emailErrorBox.innerHTML = '* Please enter a valid email.';
  }

  // 1. Get the input and error fields for message
  let leaveMessageInput = myForm.querySelector('#messagearea');
  let messageErrorBox = myForm.querySelector('#message-error');
  // 2. Clear any existing errors and messages
  leaveMessageInput.style.border = '';
  messageErrorBox.innerHTML = '';
  // 3. Get the value from the input field
  let leaveMessage = leaveMessageInput.value;
  // 4. Do validation - make sure message is not empty
  //    If not valid - add style and error message
  if (leaveMessage.length === 0) {
    leaveMessageInput.style.border = '2px solid red';
    messageErrorBox.innerHTML = '* Please leave a message.';
  }

  // Anything else after clicking submit
  //   1. Clear input fields - firstNameInput, emailInput, leaveMessageInput
  //   2. Show message to say "Email has been sent successfully"

  // if (firstName.length > 0 && validateEmail(email) && leaveMessage.length > 0 ) {
  //     allInputs.forEach(singleInput => singleInput.value = '');
  //     textareaInput.value = '';
  //     alert('Form Submitted');
  //   }

    if (!(firstName.length === 0) && validateEmail(email) && !(leaveMessage.length === 0)) {
      allInputs.forEach(singleInput => singleInput.value = '');
      textareaInput.value = '';
      alert('Response recieved but not sent because there is no backend yet! Coming soon ;)');
    }
}

myForm.addEventListener('submit', onSubmit);