 // Fetch saved data
  const username = localStorage.getItem("username");
  const email = localStorage.getItem("email");

  if (username) {
    document.getElementById("welcomeMessage").innerText =
      "🎉 Welcome, " + username + "! You are now logged in.";
  } else if (email) {
    document.getElementById("welcomeMessage").innerText =
      "🎉 Welcome, " + email + "! You are now logged in.";
  }
 document.getElementById("logoutBtn").addEventListener("click", function () {
    const confirmLogout = confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      // Clear saved user data
      localStorage.removeItem("username");
      localStorage.removeItem("email");

      // Redirect to SignUp page
      window.location.href = "sign up.html";
    }
  });