document.addEventListener("DOMContentLoaded", function () {
    // Form submission for newsletter
    document.getElementById("newsletter-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
        var email = document.getElementById("email").value;
        alert("Thank you for subscribing to our newsletter with email: " + email);
    });

    // Form submission for registration
    document.getElementById("registration-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var calculation = document.getElementById("calculation").value;
        
        // Perform validation for the calculation
        if (parseInt(calculation) === 5 + 7) {
            // Display dynamic information
            document.getElementById("display-name").textContent = name;
            document.getElementById("display-age").textContent = age;
            document.getElementById("display-calculation").textContent = parseInt(calculation);
        } else {
            alert("The calculation result is incorrect. Please try again.");
        }
    });
});
