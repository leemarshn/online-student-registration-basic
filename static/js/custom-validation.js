
function validateForm() {
    var registrationID = document.getElementById('registrationID').value;
    var nationalID = document.getElementById('nationalID').value;
    var surname = document.getElementById('surname').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;

    // Validate Registration ID and National ID (assuming they should be numbers)
    if (!isValidNumber(registrationID) || !isValidNumber(nationalID)) {
        showError("Registration ID and National ID must be valid numbers.");
        return false;
    }

    // Validate names (should not be empty)
    if (!isValidText(surname) || !isValidText(firstName) || !isValidText(lastName)) {
        showError("Surname, First Name, and Last Name are required fields.");
        return false;
    }

    // Validate email format
    if (!isValidEmail(email)) {
        showError("Please enter a valid email address.");
        return false;
    }

    // Validate phone number format
    if (!isValidPhoneNumber(phoneNumber)) {
        showError("Please enter a valid phone number.");
        return false;
    }

    // Additional custom validation can be added here

    return true;
}

function isValidNumber(value) {
    return /^\d+$/.test(value);
}

function isValidText(value) {
    return /\S+/.test(value);
}

function isValidEmail(value) {
    // A simple email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function isValidPhoneNumber(value) {
    // A simple phone number validation regex (allowing numbers, spaces, and hyphens)
    return /^[0-9\s-]+$/.test(value);
}

function showError(message) {
    // Display an error message to the user (you can customize this part)
    alert(message);
}
