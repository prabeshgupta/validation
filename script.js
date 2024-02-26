var nameError = document.getElementById("nameError");
var phoneError = document.getElementById("phoneError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("messageError");
var submitError = document.getElementById("submitError");

function validateName() {
    var name = document.getElementById("contactName").value;

    if (name.length == 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Enter full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateNumber() {
    var number = document.getElementById("contactNumber").value;

    if (number.length == 0) {
        phoneError.innerHTML = "Number is required";
        return false;
    }
    if (number !== 10) {
        phoneError.innerHTML = "Phone Number should be 10 digits";
    }
    if (!number.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only Number";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    var email = document.getElementById("contactEmail").value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Invalid email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage() {
    var message = document.getElementById("contactMessage").value;
    var required = 30;
    var remaining = required - message.length;

    if (remaining > 0) {
        messageError.innerHTML = remaining + " more characters required";
        return false;
    }

    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm() {
    if (!validateName() || !validateNumber() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix error";
        setTimeout(function () {
            submitError.style.display = "none";
        }, 5000);
        return false;
    }
}