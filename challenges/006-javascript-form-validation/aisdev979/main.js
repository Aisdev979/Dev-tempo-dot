const nameInput = document.querySelector("#full-name");
const emailInput = document.querySelector("#Email");
const nameError = document.querySelector("#error");
const emailError = document.querySelector("#error2");
const waitlistSubmitBtn = document.querySelector("#WaitlistBtn");

const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validate = ({ name, email }) => {
  const errors = {};

  if (!name) errors.name = "FullName cannot be empty";
  else if (name.length < 6) errors.name = "Name must be at least 6 characters";

  if (!email) errors.email = "Email cannot be empty";
  else if (!EMAIL_REGEX.test(email)) errors.email = "Please provide a valid email address";

  return errors;
};

const showErrors = (errors) => {
    console.log(errors)
  nameError.textContent = errors.name ?? "";
  emailError.textContent = errors.email ?? "";
};

waitlistSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const data = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
  };

  const errors = validate(data);
  showErrors(errors);
});