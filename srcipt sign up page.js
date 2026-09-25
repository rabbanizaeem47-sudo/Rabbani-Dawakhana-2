 document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop real form submit

    // Save values to localStorage
    localStorage.setItem("username", document.getElementById("username").value);
    localStorage.setItem("email", document.getElementById("email").value);

    // Redirect to welcome page
    window.location.href = "welcome.html";
  });