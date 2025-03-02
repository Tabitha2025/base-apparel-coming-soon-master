document.addEventListener("DOMContentLoaded", function () {
  // Accessing elements
  const emailForm = document.getElementById("emailForm");
  const emailInput = document.getElementById("email");
  const errorMessage = document.querySelector(".error-message");
  const successMessage = document.querySelector(".success-message");
  const formGroup = document.querySelector(".form-group");
  const submitButton = document.querySelector(".button");

  // Email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();

    if (emailValue === "" || !emailPattern.test(emailValue)) {
      showError("Please provide a valid email");
    } else {
      hideError();
      showSuccess("You have subscribed successfully! 🎉");
      emailInput.value = ""; // Clear input after success
    }
  });

  function showError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    emailInput.classList.add("error-border");

    // Add error icon if not present
    if (!document.querySelector(".icon-error")) {
      const errorIcon = document.createElement("img");
      errorIcon.src = "images/icon-error.svg";
      errorIcon.alt = "Error icon";
      errorIcon.classList.add("icon-error");
      formGroup.appendChild(errorIcon);
    }
  }

  function hideError() {
    errorMessage.style.display = "none";
    emailInput.classList.remove("error-border");

    // Remove error icon if exists
    const errorIcon = document.querySelector(".icon-error");
    if (errorIcon) {
      errorIcon.remove();
    }
  }

  function showSuccess(message) {
    successMessage.textContent = message;
    successMessage.style.display = "block";

    setTimeout(() => {
      successMessage.style.display = "none"; // Hide after 3 seconds
    }, 3000);
  }
});
