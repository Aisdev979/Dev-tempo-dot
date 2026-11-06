/*
  *Challenge 002B - Level up from JavaScript Basic

For those still learning JavaScript

Task:
Write a small JavaScript script that does the following:
Asks the user for their name and GitHub handle
Prints a short welcome message
Asks them to choose a number between 1 and 10

Generates a random number and tells them if they guessed correctly or not
Shows how many attempts they used

Rules:
Use only basic JavaScript (prompt, console.log / alert, if/else, loops, Math.random)

Keep the code clean and readable
Add comments explaining what each part does


How to submit:
Paste your code + a short explanation in the group, or send it privately
You are still leveling up

Ask any questions here, we’ll assist you.
  Deadline: 24 hours
@⁨all⁩
  * */

//get users name and github handle


/*
  * using js builtin input field to request for both user name and github handle
* */

const inputUserName = prompt("Enter your fullname:");

const inputGithubHandle = prompt("Enter your github handle:");

/*
  * Using js builtin dialog box to out a welcome message
* */

alert(`Hello 👋, ${inputUserName} with handle ${inputGithubHandle}. Welcome to Guess My Number Hub. We are so excited you are here!`);

/*
  * storing the maximum tries a user have
* */

const maxAttempts = 5;

/*
  * storing the max try so as to reduce and show numbers of tries left
* */

let attempts = maxAttempts;

/*
  * using for loop to loop through the max attempt so a user can try guessing 5 times
* */

for (let attempt = 0; attempt < maxAttempts; attempt++) {

    /*
      * using js builtin input field to request for user choosen number
    * */

    const userGuest = prompt("Pick a number between 1 and 10:");

    /*
      * setting up computer guessed number at random
    * */

    const computerGuess = Math.floor(Math.random() * 10) + 1;

    /*
      * subtracting the attempt to output the attempt left
    * */

    attempts--;

    /*
      * using if statement to check users number matches computer number.
    * */

    if (+userGuest === computerGuess) {
      alert(`Awwn 😘, amazing work ${inputUserName}! You got it. You have ${attempts} attempts left.`);
      break;
    } else {
      alert(`So sad 😭, don't give up. You have ${attempts} attempts left.`);
    }
}
