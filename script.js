document.addEventListener("DOMContentLoaded", function () {
  // Accessing elements
  const submitBtn = document.getElementById("submit-btn");
  const emailInput = document.querySelector(".email-field");
  const errorMessage = document.querySelector(".error-message");
  const successMessage = document.querySelector(".success-message");
  const formGroup = document.querySelector(".form-group");
  const errorIcon = document.querySelector(".error-icon");

  // Email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Button click event listener
  submitBtn.addEventListener("click", function (event) {
    event.preventDefault();
    validateEmail();
  });

  function validateEmail() {
    const emailValue = emailInput.value.trim();

    if (emailValue === "" || !emailPattern.test(emailValue)) {
      showError("Please provide a valid email");
    } else {
      hideError();
      showSuccess("You have subscribed successfully! 🎉");
      emailInput.value = ""; // Clear input after success
    }
  }

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    errorMessage.classList.add("error-txt");
    emailInput.classList.add("failed");
    errorIcon.style.display = "block"; // Show error icon

    // Shake button animation on error
    submitBtn.classList.add("shake");
    setTimeout(() => {
      submitBtn.classList.remove("shake");
    }, 500);
  }

  function hideError() {
    errorMessage.style.display = "none";
    errorMessage.classList.remove("error-txt");
    emailInput.classList.remove("failed");
    errorIcon.style.display = "none"; // Hide error icon
  }

  function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.classList.add("success-txt");
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none"; // Hide after 3 seconds
    }, 3000);
  }
});
