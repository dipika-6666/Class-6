function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

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
