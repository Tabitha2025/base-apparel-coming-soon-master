document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById("email");
    const errorMessage = document.getElementById("errorMessage");

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        errorMessage.style.display = "block";
        emailInput.style.borderColor = "hsl(0, 93%, 68%)";
        emailInput.style.backgroundColor = "hsl(0, 100%, 98%)";
    } else {
        errorMessage.style.display = "none";
        emailInput.style.borderColor = "hsl(0, 36%, 70%)";
        emailInput.style.backgroundColor = "white";
        alert("Subscribed successfully!");
    }
});

/* Focus Styling */
document.getElementById("email").addEventListener("focus", function() {
    this.style.borderColor = "hsl(0, 80%, 86%)";
});
