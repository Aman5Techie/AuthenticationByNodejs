// Login form submission
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Make a POST request to the /login endpoint
  fetch("/login", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    if (data.success) {
      // Login successful, do something
      console.log("Login successful");
    } else {
      // Login failed, display error message
      console.error("Login failed");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});

// Register form submission
document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username-register").value;
  const email = document.getElementById("email-register").value;
  const password = document.getElementById("password-register").value;

  // Make a PUT request to the /register endpoint
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    if (data.success) {
      // Registration successful, do something
      window.location.href = "./next.html";
      console.log("suxceesss");
    } else {
      // Registration failed, display error message
      console.error("Registration failed");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});

// Change password form submission
document.getElementById("change-password-form").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username-change").value;
  const email = document.getElementById("email-change").value;
  const password = document.getElementById("new-password").value;

  // Make a PATCH request to the /update-password endpoint
  fetch("/register", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, email, password })
  })
  .then(response => response.json())
  .then(data => {
    // Handle the response from the server
    if (data.success) {
      // Password update successful, do something
      console.log("Password update successful");
    } else {
      // Password update failed, display error message
      console.error("Password update failed");
    }
  })
  .catch(error => {
    console.error("Error:", error);
  });
});
