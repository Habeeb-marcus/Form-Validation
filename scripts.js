const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  // using constraint API
isValid = form.checkValidity();

// Style main messagge for an error
if (!isValid) {
  message.textContent = 'Please fill out all fields. ';
message.style.color = 'red';
messageContainer.style.borderColor = 'red';
return;
}

// check to see if passwords match
if (password1El.value === password2El.value) {
  passwordsMatch = true;
  password1El.style.borderColor = 'green';
  password2El.style.borderColor = 'green';
} else {
  passwordsMatch = false;
  message.textContent = 'please make sure passwords match!';
  message.style.color = 'red';
  messageContainer.style.borderColor = 'red';
  password1El.style.borderColor = 'red';
  password2El.style.borderColor = 'red';
  return;
}

// If form is valid and password match
if (isValid && passwordsMatch) {
  message.textContent = 'Registered Successfully !!!';
  message.style.color = 'green';
  messageContainer.style.borderColor ='green';
}
};


function storeFormData () {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value, 
    password: form.password.value
  };

// Do something with user Data
console.log(user);

}

function processFormData (e) {
  e.preventDefault();

  // validate form
  validateForm();
  // submit data if Valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

// add Event list
form.addEventListener("submit", processFormData);