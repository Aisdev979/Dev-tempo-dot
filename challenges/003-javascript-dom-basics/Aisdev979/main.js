/*
  * Geting access the the html node for button, paragraph and input.
  * */
const submitBtn = document.querySelector("#submit");
const displayText = document.querySelector("#displayText");
const usernameInput = document.querySelector("#username");


/*
  *Storimg the minimum character required
  * */
const MIN_USERNAME_LENGTH = 6;

/*
  *This create the message which will.later be sent
  * */
const showMessage = (message) => {
  displayText.textContent = message;
};

/*
  *This displays the message to the usr
  * */

function displayMessage(e) {
  e.preventDefault();
  
  const getUsername = usernameInput.value.trim();

  /*
    *checking if username is an empty string.or.the character is less than 6 so we can throw an error
    * */
  
  if (getUsername === "" || getUsername < 6) {
    return showMessage(`What are you doing bro, have respect for me brother. Characters must be ${MIN_USERNAME_LENGTH} and above`);
  }
  
  /*
    *Displaying the message to the user if all check where passed successfully
  l
    * */
  showMessage(`Hello ${getUsername}, you click the button right, am seeing your doings 🙈`);
}

/*
  *listen for a click event before running displayMessage.
  * */
submitBtn.addEventListener("click", displayMessage);
