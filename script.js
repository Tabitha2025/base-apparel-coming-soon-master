document.addEventListener("DOMContentLoaded", function () {
  // Access elements
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("email");
  const errorMessage = document.getElementById("errorMessage");
  const successMessage = document.querySelector(".success-message");
  const formGroup = document.querySelector(".form-group");
  const submitButton = document.querySelector(".button");
  const errorIcon = document.querySelector(".error-icon");

  // Email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Form submit event listener
  emailForm.addEventListener("submit", function (event) {
    event.preventDefault();
    validateEmail();
  });

  function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === "" || !emailPattern.test(emailValue)) {
      showError("Please provide a valid email address");
    } else {
      hideError();
      showSuccess("You have subscribed successfully! 🎉");
      emailInput.value = ""; // Clear input after success
    }
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    emailInput.classList.add("error-border");

    // Show error icon
    errorIcon.style.display = "block";

    // Shake button animation
    submitButton.classList.add("shake");
    setTimeout(() => {
      submitButton.classList.remove("shake");
    }, 500);
  }

  function hideError() {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error-border");

    // Hide error icon
    errorIcon.style.display = "none";
  }

  function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none"; // Hide after 3 seconds
    }, 3000);
  }
});
