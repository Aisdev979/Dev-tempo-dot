# Challenge 002 - Python Basic
# Solution by omonire

# Get the random module
import random

# Ask for name and GitHub handle
name = input("Enter your name: ")
github = input("Enter your GitHub handle: ")

# Say welcome
print("Hello " + name + " (" + github + "), welcome to the game!")

# Computer picks a random number from 1 to 10
secret = random.randint(1, 10)

# Start counting attempts
attempts = 0

# Give the user 3 tries
for i in range(3):
    guess = int(input("Guess a number between 1 and 10: "))
    attempts = attempts + 1

    # Check the guess
    if guess == secret:
        print("You are correct!")
        break
    else:
        print("Wrong guess.")

# Show how many attempts were used
print("You used " + str(attempts) + " attempt(s).")
