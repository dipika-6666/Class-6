

// Scroll to Registration Form
function scrollToForm() {
    const formSection = document.getElementById('registration');
    formSection.scrollIntoView({ behavior: 'smooth' });
}

// Populate DOB Select Options
document.addEventListener('DOMContentLoaded', function () {
    const dobDay = document.getElementById('dobDay');
    const dobYear = document.getElementById('dobYear');

    for (let i = 1; i <= 31; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dobDay.appendChild(option);
    }

    const currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        dobYear.appendChild(option);
    }
});

// Registration Form Submission
function submitForm(event) {
    event.preventDefault();
    const successMessage = document.getElementById('success-message');
    successMessage.classList.remove('hidden');
}

// Checkout Form Submission
function submitCheckoutForm(event) {
    event.preventDefault();
    const checkoutSuccessMessage = document.getElementById('checkout-success-message');
    checkoutSuccessMessage.classList.remove('hidden');
}

// Function to toggle the navigation menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to handle the slider
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change slide every 2 seconds
}

// Function to handle form submission
function submitForm(event) {
    event.preventDefault(); // Prevent default form submission behavior
    var form = event.target;
    var formData = new FormData(form);
    var fullName = formData.get('fullName');
    var email = formData.get('email');
     var phoneNumber = document.getElementById('phoneNumber').value;
    var phoneError = document.getElementById('phoneError');

    if (!/^\d{10}$/.test(phoneNumber)) {
        phoneError.textContent = "Please enter a valid 10-digit phone number.";
        phoneError.style.display = 'block';
        event.preventDefault();
    } else {
        phoneError.style.display = 'none';
    }
    var dob = formData.get('dob');
    var dobDate = new Date(dob);
    var age = calculateAge(dobDate);
    var message = `Thank you, ${fullName}! Your registration is successful.\nEmail: ${email}\nPhone number: ${phoneNumber}\nDate of Birth: ${dob}\nAge: ${age}`;
    alert(message);
    form.reset(); // Reset the form after submission
}

// Function to calculate age from date of birth
function calculateAge(dob) {
    var today = new Date();
    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    return age;
}

// Function to scroll to the form section
function scrollToForm() {
    var formSection = document.getElementById("registrationForm");
    formSection.scrollIntoView({
        behavior: 'smooth'
    });
}
function toggleMenu() {
            var menu = document.getElementById("nav-menu");
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        }

        // Function to scroll to a section smoothly
        function scrollToSection(sectionId) {
            var section = document.querySelector(sectionId);
            section.scrollIntoView({
                behavior: 'smooth'
            });
        }

// Cart data structure
var cart = [];

// Function to toggle menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to add product to cart
function addToCart(event) {
    // Get the product details
    var product = event.target.closest('.product');
    var productName = product.querySelector('h3').textContent;
    var productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

    // Add the product to the cart data structure
    var cartItem = { name: productName, price: productPrice };
    cart.push(cartItem);

    // Update the cart display
    updateCartDisplay();
}

// Function to update cart display
function updateCartDisplay() {
    var cartCount = document.getElementById('cartCount');
    var cartList = document.getElementById('cartItems');

    // Update cart count
    cartCount.textContent = cart.length;

    // Clear existing cart items
    cartList.innerHTML = '';

    // Populate cart items
    cart.forEach(function(item) {
        var li = document.createElement('li');
        li.textContent = item.name + ' - $' + item.price.toFixed(2);
        cartList.appendChild(li);
    });

    // Show or hide the cart icon based on cart items
    if (cart.length > 0) {
        document.getElementById('cartIcon').style.display = 'block';
    } else {
        document.getElementById('cartIcon').style.display = 'none';
    }
}

// Function to toggle cart display
function toggleCart() {
    var cartList = document.getElementById('cartList');
    if (cartList.style.display === 'block') {
        cartList.style.display = 'none';
    } else {
        cartList.style.display = 'block';
    }
}
// Cart data structure
var cart = [];

// Function to toggle menu
function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Function to add product to cart
function addToCart(event) {
    // Get the product details
    var product = event.target.closest('.product');
    var productName = product.querySelector('h3').textContent;
    var productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

    // Add the product to the cart data structure
    var cartItem = { name: productName, price: productPrice };
    cart.push(cartItem);

    // Update the cart display
    updateCartDisplay();
    updateLocalStorage();
}

// Function to update cart display
function updateCartDisplay() {
    var cartCount = document.getElementById('cartCount');
    var cartList = document.getElementById('cartItems');

    // Update cart count
    if (cartCount) {
        cartCount.textContent = cart.length;
    }

    // Clear existing cart items
    if (cartList) {
        cartList.innerHTML = '';

        // Populate cart items
        cart.forEach(function(item) {
            var li = document.createElement('li');
            li.textContent = item.name + ' - $' + item.price.toFixed(2);
            cartList.appendChild(li);
        });
    }

    // Show or hide the cart icon based on cart items
    if (cart.length > 0) {
        document.getElementById('cartIcon').style.display = 'block';
    } else {
        document.getElementById('cartIcon').style.display = 'none';
    }
}

// Function to toggle cart display
function toggleCart() {
    var cartList = document.getElementById('cartList');
    if (cartList.style.display === 'block') {
        cartList.style.display = 'none';
    } else {
        cartList.style.display = 'block';
    }
}

// Function to proceed to checkout
function proceedToCheckout() {
    var checkoutSection = document.getElementById('checkoutSection');
    checkoutSection.style.display = 'block';
    window.scrollTo({
        top: checkoutSection.offsetTop,
        behavior: 'smooth'
    });
}

// Function to validate phone number
function validatePhoneNumber(input) {
    if (input.value.length > 10) {
        input.value = input.value.slice(0, 10);
    }
}

// Function to handle checkout form submission
function submitCheckout(event) {
    event.preventDefault();
    alert('Checkout form submitted successfully!');
    clearCart();
}

// Function to clear the cart
function clearCart() {
    cart = [];
    updateCartDisplay();
    updateLocalStorage();
}

// Function to update cart in local storage
function updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart from local storage
function loadCartFromLocalStorage() {
    var savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartDisplay();
    }
}

// Load cart from local storage on page load
document.addEventListener('DOMContentLoaded', function() {
    loadCartFromLocalStorage();
    updateCartDisplay();
});
