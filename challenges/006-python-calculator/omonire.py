# Challenge 006 - Python Calculator
# Engineered by Omonire (github.com/omonire)

# Ask for the two numbers and the operation
first = float(input("Enter the first number: "))
second = float(input("Enter the second number: "))
operation = input("Choose an operation (+, -, *, /): ").strip()

# Work out the result using if / elif / else
if operation == "+":
    result = first + second
    print(str(first) + " + " + str(second) + " = " + str(result))
elif operation == "-":
    result = first - second
    print(str(first) + " - " + str(second) + " = " + str(result))
elif operation == "*":
    result = first * second
    print(str(first) + " * " + str(second) + " = " + str(result))
elif operation == "/":
    # Do not divide by zero
    if second == 0:
        print("Cannot divide by zero.")
    else:
        result = first / second
        print(str(first) + " / " + str(second) + " = " + str(result))
else:
    print("Unknown operation. Please use +, -, * or /.")
