var email = document.getElementById('signupEmail');
var password = document.getElementById('signupPassword');
var username = document.getElementById('signUpUserName');

function signup(e) {

    event.preventDefault()

    Validate()
    // resetform()

    
}

let Validate = () => {
    if (password.value == "" || username.value == "" || email.value == "" || !isValidEmail(email.value)) {
        if (password.value == "") {
            document.getElementById("signupPasswordValidate").innerHTML = "Password cannot be balnk"
        }
        else if (password.value !== null) {
            document.getElementById("signupPasswordValidate").innerHTML = ""

        }
        if (username.value == "") {
            document.getElementById("signUpUserNameValidate").innerHTML = "User cannot be balnk"

        }
        else if (username.value !== null) {
            document.getElementById("signUpUserNameValidate").innerHTML = ""

        }
        if (email.value == "") {
            document.getElementById("signupEmailValidate").innerHTML = "User cannot be balnk"

        }
        else if (email.value !== null) {
            document.getElementById("signupEmailValidate").innerHTML = ""

        }
        if (isValidEmail(email.value)) {
            document.getElementById("signupEmailValidate").innerHTML = ""
        } else {
            document.getElementById("signupEmailValidate").innerHTML = "Enter valid Email Address"
        }
    }
    else {
        
        
        localStorage.setItem('email', email.value);
        localStorage.setItem('password', password.value);
        setTimeout(function () {

            window.location.href = 'index.html';
        }, 100);
    }
   


}

function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function resetform() {
    password.value = ""
    email.value = ""
    username.value = ""
}
