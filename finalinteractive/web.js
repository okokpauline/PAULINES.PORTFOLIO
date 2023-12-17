'use strict';

// Contact list focus
const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

// Contact form submission
const handleSubmit = (event) => {
  console.log('handling submit...');
  let isValid = true;

  const namePattern = /^[a-zA-Z]+$/;
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
  const numericPattern = /^\d+$/;

  const name = $('name').value;
  const email = $('email').value;
  const phone = $('phone').value;
  const nameError = $('nameError');
  const emailError = $('emailError');
  const phoneError = $('phoneError');

  const isValidName = namePattern.test(name);
  const isValidEmail = emailPattern.test(email);
  const isValidPhone = numericPattern.test(phone);

  const alertSymbol = '<ion-icon name="alert-outline"></ion-icon>';

  if (!isValidName) {
    isValid = false;
    nameError.innerHTML = alertSymbol + 'Please enter your full name.';
  }
  if (!isValidEmail) {
    isValid = false;
    emailError.innerHTML = alertSymbol + 'Please enter in the format: jungkook@icloud.com';

  }
  if (!isValidPhone) {
    isValid = false;
    phoneError.innerHTML = alertSymbol + 'Please enter a valid phone number (e.g 123-444-5678)';
  }

  if (!isValid) {
    return event.preventDefault();
  }
};

const handleClosePopup = (event) => {
  $('overlay').style.display = 'none';
  $('customPopup').style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  // add event handlers
  $('form').addEventListener('submit', (event) => handleSubmit(event));
  $('closeBtn').addEventListener('click', (event) => handleClosePopup(event));
});
