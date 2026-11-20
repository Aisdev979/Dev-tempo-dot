// Engineered by Omonire (github.com/omonire)

// Grab the elements we need from the page
var form = document.getElementById("myForm");
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var message = document.getElementById("message");

// Check the fields when the form is submitted
form.addEventListener("submit", function (e) {
  // Stop the page from reloading
  e.preventDefault();

  // Clear any old message styling
  message.className = "";

  var name = nameInput.value.trim();
  var email = emailInput.value.trim();

  // Show an error if a field is empty
  if (name === "" || email === "") {
    message.textContent = "Please fill in both fields.";
    message.className = "error";
    return;
  }

  // Both fields are filled in
  message.textContent = "Thanks " + name + "! Your form was submitted.";
  message.className = "success";
});
