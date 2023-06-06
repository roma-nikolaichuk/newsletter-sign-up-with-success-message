"use strict";

// Get the newsletter element
var newsletter = document.getElementById("newsletter");

// Add event listener to the form's submit event
const form = document.getElementById("newsletterForm");
form.addEventListener("submit", submitForm);

// Add event listener to the submit button's click event
const submitButton = document.querySelector(".newsletter__form-button");
submitButton.addEventListener("click", handleButtonClick);

// Get the error label element
const errorLabel = document.getElementById("newsletter__form-error");

// Get the email input element
const emailInput = document.getElementById("email");
emailInput.addEventListener("input", validateEmail);

// Get the success message element and the success message email element
var successMessage = document.getElementById("successMessage");
const successMessageEmail = document.querySelector(".success-message__email");

// Function to validate the email input
function validateEmail() {
  const email = emailInput.value.trim();

  // Store the email in local storage
  localStorage.setItem("email", email);

  // Check if the email is empty
  if (email === "") {
    resetInputStyles();
    hideErrorLabel();
  }
  // Check if the email is not formatted correctly
  else if (!validator.isEmail(email)) {
    setInvalidInput();
    showErrorLabel("Valid email required");
  }
  // The email is valid
  else {
    setValidInput();
    hideErrorLabel();
  }
}

// Function to reset the input styles
function resetInputStyles() {
  emailInput.classList.remove("newsletter__form-input--invalid");
  emailInput.classList.remove("newsletter__form-input--valid");
}

// Function to set the input as invalid
function setInvalidInput() {
  emailInput.classList.toggle("newsletter__form-input--invalid", true);
  emailInput.classList.toggle("newsletter__form-input--valid", false);
}

// Function to set the input as valid
function setValidInput() {
  emailInput.classList.toggle("newsletter__form-input--invalid", false);
  emailInput.classList.toggle("newsletter__form-input--valid", true);
}

// Function to show the error label with a specific message
function showErrorLabel(message) {
  errorLabel.classList.toggle("newsletter__form-error", true);
  errorLabel.textContent = message;
}

// Function to hide the error label
function hideErrorLabel() {
  errorLabel.classList.toggle("newsletter__form-error", false);
  errorLabel.textContent = "";
}

// Function to handle the form submission
function submitForm(event) {
  event.preventDefault();

  // Check if the email input is valid
  if (emailInput.classList.contains("newsletter__form-input--valid")) {
    newsletter.classList.toggle("hidden");

    // Show the success message after a delay
    setTimeout(() => {
      successMessage.classList.toggle("hidden");
    }, 500);

    successMessageEmail.textContent = emailInput.value;
    emailInput.value = "";

    resetInputStyles();
    hideErrorLabel();

    // Remove the email from local storage
    localStorage.removeItem("email");
  }
}

// Function to handle the submit button click
function handleButtonClick() {
  // Check if the email input is not valid
  if (!emailInput.classList.contains("newsletter__form-input--valid")) {
    emailInput.focus();
    emailInput.reportValidity();
  }

  // Call the submitForm function
  submitForm;
}

// Execute code when the window finishes loading
window.onload = function () {
  // Get the saved email from local storage
  const savedEmail = localStorage.getItem("email");

  // Check if there is a saved email
  if (savedEmail) {
    emailInput.value = savedEmail;
    validateEmail();
  }
};
