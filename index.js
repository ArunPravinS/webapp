function login() {
    // event.preventDefault()
    
    var loginUsername = document.getElementById('loginEmail').value;
    var loginPassword = document.getElementById('loginPassword').value;
    console.log(loginUsername)
    console.log(loginPassword)

    // Retrieve data from local storage
    var storedUsername = localStorage.getItem('email');
    var storedPassword = localStorage.getItem('password');
    console.log(storedUsername)
    console.log(storedUsername)

    // Check if login credentials are valid
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        setTimeout(function () {

            window.location.href = 'dashboard.html';
        }, 100);
        
    } else {
        alert('Invalid login credentials. Please try again.');
    }
}
