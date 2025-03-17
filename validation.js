document.getElementById("validationForm").addEventListener("submit", function (event) {
    let valid = true;

    // Email Validation
    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }

    // Phone Number Validation (Indian format: starts with 6,7,8,9 and 10 digits)
    let phone = document.getElementById("phone").value;
    let phonePattern = /^[6789]\d{9}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").innerText = "Invalid Indian phone number (10 digits, starts with 6-9)";
        valid = false;
    } else {
        document.getElementById("phoneError").innerText = "";
    }

    // Password Validation (Minimum 6 characters)
    let password = document.getElementById("password").value;
    if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        valid = false;
    } else {
        document.getElementById("passwordError").innerText = "";
    }

    // Confirm Password Validation (Should match Password)
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword !== password) {
        document.getElementById("confirmPasswordError").innerText = "Passwords do not match";
        valid = false;
    } else {
        document.getElementById("confirmPasswordError").innerText = "";
    }

    // Prevent form submission if any field is invalid
    if (!valid) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
