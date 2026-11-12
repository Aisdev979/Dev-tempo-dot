# Engineered by Omonire (github.com/omonire)
# Challenge 004 - Python Conditionals & Loops

# Ask the user to enter a number
number = int(input("Enter a number: "))

# Check if the number is even or odd
if number % 2 == 0:
    print(str(number) + " is even.")
else:
    print(str(number) + " is odd.")

# Print all numbers from 1 up to the number using a loop
print("Numbers from 1 to " + str(number) + ":")
for i in range(1, number + 1):
    print(i)
