// Function to toggle navigation menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to handle form submission in index.html
function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    // Fetching form inputs
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var dob = document.getElementById("dob").value;

    // Calculating age
    var today = new Date();
    var birthDate = new Date(dob);
    var age = today.getFullYear() - birthDate.getFullYear();
    var monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    // Displaying information in a pop-up
    var message = `Name: ${fullName}\nEmail: ${email}\nDate of Birth: ${dob}\nAge: ${age}`;
    alert(message);
}

// Function to add interactivity to product listing in products.html
function setupProductListing() {
    var products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        product.addEventListener("click", function() {
            var productName = product.querySelector("h3").textContent;
            var price = product.querySelector("p:nth-of-type(1)").textContent;
            var discount = product.querySelector("p:nth-of-type(2)").textContent;
            alert(`You selected ${productName}. Price: ${price}. Discount: ${discount}`);
        });
    });
}

// Execute setupProductListing function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", setupProductListing);
