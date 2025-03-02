document.getElementById("emailForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");
    const inputContainer = document.querySelector(".input-container");
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value.trim())) {
        errorMessage.style.display = "block";
        inputContainer.classList.add("error"); // Show error icon and border
    } else {
        errorMessage.style.display = "none";
        inputContainer.classList.remove("error"); // Hide error icon and border
    }
});
