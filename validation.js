document.getElementById("validationForm").addEventListener("submit", function (event) {
    event.preventDefault(); 
  
    let valid = true;
  
    // Email Validation
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        valid = false;
    } else {
        document.getElementById("emailError").innerText = "";
    }
  
    // Phone Number Validation (Indian format: starts with 6,7,8,9 and 10 digits)
    let phone = document.getElementById("phone").value.trim();
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
  
    // City Code Validation (exactly 6 digits)
    const cityCode = document.getElementById('cityCode').value.trim();
    const cityCodeError = document.getElementById('cityCodeError');
    const cityCodePattern = /^\d{6}$/;
    if (!cityCodePattern.test(cityCode)) {
        cityCodeError.textContent = 'City Code must be exactly 6 digits.';
        valid = false;
    } else {
        cityCodeError.textContent = '';
    }
  
    // Gender
    let gender = "";
    const genderRadios = document.getElementsByName("gender");
    for (let radio of genderRadios) {
        if (radio.checked) {
            gender = radio.value;
            break;
        }
    }
    if (!gender) {
        document.getElementById("genderError").innerText = "Please select your gender";
        valid = false;
    } else {
        document.getElementById("genderError").innerText = "";
    }
  
    // Agreement checkbox
    const isAgreed = document.getElementById("agree").checked;
    if (!isAgreed) {
        document.getElementById("agreeError").innerText = "You must agree to the terms & conditions";
        valid = false;
    } else {
        document.getElementById("agreeError").innerText = "";
    }
  
    // ✅ If all validations pass
    if (valid) {
        const formData = {
            fullName: document.getElementById("name").value.trim(),
            email: email,
            password: password, // Don't store passwords in real apps
            phone: phone,
            age: document.getElementById("age").value.trim(),
            dob: document.getElementById("dob").value,
            gender: gender,
            address: document.getElementById("address").value.trim(),
            city: document.getElementById("city").value.trim(),
            cityCode: cityCode,
            state: document.getElementById("state").value.trim(),
            country: document.getElementById("country").value.trim(),
            skills: document.getElementById("skills").value,
            portfolio: document.getElementById("portfolio").value.trim(),
            experience: document.getElementById("experience").value,
            linkedin: document.getElementById("linkedin").value.trim(),
            github: document.getElementById("github").value.trim(),
            message: document.getElementById("message").value.trim(),
            agreedToTerms: isAgreed
        };
  
        // Store data in localStorage
        localStorage.setItem("formData", JSON.stringify(formData));
  
        alert("Form submitted and data saved to local storage!");
  
        // Reset form
        document.getElementById("validationForm").reset();
    }
  });
  
  