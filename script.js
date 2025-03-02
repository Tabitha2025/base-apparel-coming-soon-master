document.addEventListener("DOMContentLoaded", function () {
    const emailForm = document.getElementById("emailForm");
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");
    const formGroup = document.querySelector(".form-group");
  
    // Regular expression for a valid email format
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    emailForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const emailValue = emailInput.value.trim();
  
      if (emailValue === "") {
        showError("Email address is required");
      } else if (!emailPattern.test(emailValue)) {
        showError("Please enter a valid email address");
      } else {
        hideError();
        emailInput.value = ""; // Clear input field after success
        alert("Thank you for subscribing! 🎉");
      }
    });
  
    function showError(message) {
      errorMessage.textContent = message;
      errorMessage.style.display = "block";
      emailInput.style.borderColor = "hsl(0, 93%, 68%)";
      
      // Add error icon
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
      emailInput.style.borderColor = "hsl(0, 36%, 70%)";
  
      // Remove error icon if exists
      const errorIcon = document.querySelector(".icon-error");
      if (errorIcon) {
        errorIcon.remove();
      }
    }
  });
  