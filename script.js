// Store registered user details temporarily (simulate a database)
let registeredEmail = '';
let registeredPassword = '';

// Password validation function
function validateRegistrationPassword() {
  const registrationPassword = document.getElementById('registrationPassword').value;
  const confirmPassword = document.getElementById('confirmPassword').value;
  const message = document.getElementById('passwordMessage');

  // Regex for special characters
  const specialCharRegex = /[!@#$%^&*()_+\-={}\[\]|:;'",.<>?/]/g;

  // Validate length
  if (registrationPassword.length !== 8) {
    message.textContent = "Password must be exactly 8 characters long.";
    message.style.color = "red";
    return false;
  }

  // Validate at least 2 special characters
  const specialChars = registrationPassword.match(specialCharRegex);
  if (!specialChars || specialChars.length < 2) {
    message.textContent = "Password must contain at least 2 special characters.";
    message.style.color = "red";
    return false;
  }

  // Confirm passwords match
  if (registrationPassword !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    message.style.color = "red";
    return false;
  }

  // If everything is valid
  message.textContent = "Password is valid!";
  message.style.color = "green";
  return true;
}

// Handle Registration Form
document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('registerEmail').value;

  if (validateRegistrationPassword()) {
    registeredEmail = email;
    registeredPassword = document.getElementById('registrationPassword').value;

    alert("Registration successful! Please log in.");
    
    // Automatically switch to login form
    document.getElementById('loginForm').classList.remove('hidden');
    document.getElementById('registerForm').classList.add('hidden');
  }
});

// Handle Login Form
document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const loginEmail = document.getElementById('loginEmail').value;
  const loginPassword = document.getElementById('loginPassword').value;
  const loginMessage = document.getElementById('loginMessage');

  // Validate login credentials
  if (loginEmail === registeredEmail && loginPassword === registeredPassword) {
    alert("Login successful! Redirecting to homepage...");
    window.location.href = "home.html"; // Redirect to homepage
  } else {
    loginMessage.textContent = "Invalid email or password.";
    loginMessage.style.color = "red";
  }
});
