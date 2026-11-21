// Dom Reference

const nameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#email");
const nameError = document.querySelector("#full-name-error");
const emailError = document.querySelector("#email-error");
const statusElement = document.querySelector("#waitlist-form__status");
const waitlistSubmitBtn = document.querySelector("#waitlist-submit-btn");

// Basic regular expression for email validation
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/* Validation Function
  create an error object where but name and email error can be store and access at the same time.
  performing name and email validation
*/
const validate = ({ name, email }) => {
  const errors = {};

  if (!name) errors.name = "FullName cannot be empty";
  else if (name.length < 6) errors.name = "Name must be at least 6 characters";

  if (!email) errors.email = "Email cannot be empty";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Please provide a valid email address";

  return errors;
};

/*
  Shows errors in the DOM based on error store on the custom error object
  the "??" is a shortand for condtion - if the lefthand side is not null or undefined keep using it else use the right hand side value.
*/
const showErrors = (errors) => {
  nameError.textContent = errors.name ?? "";
  emailError.textContent = errors.email ?? "";
};

//Listen for button clicks, get user input, run input through validation function, show error if any...
waitlistSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const data = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
  };

  const errors = validate(data);
  showErrors(errors);

  //checks if the error object is empty so as to display success massage and wait 2secs for it to disappear.
  if (Object.keys(errors).length === 0)
    statusElement.classList.remove("waitlist-form__status-success");
    setTimeout(() => {
      statusElement.classList.add("waitlist-form__status-success");
    }, 2000);
});