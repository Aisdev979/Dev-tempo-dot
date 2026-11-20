# a basic python calculator
# first number is stored in a Variable 
number_1 = float(input("Enter your first number: "))
# ask for an operator "+" "-" "*" "/"
print("Operators are '+' '-' '*' '/' ")
operator = input("Choose an operator: ")
# check if operator is valid 
if operator == "+" or operator == "-" or operator == "*" or operator == "/":
  # ask user for a second number and store it
  number_2 = float(input("Enter your second number: "))
  # using if statements to handle conditions for the operations
  if operator == "+":
    # if the user's operator is "+" add number_1 + number_2
    print(number_1 + number_2)


  elif operator == "-":
    # if the user's operator is "-" subtract number_1 from number_2
    print(number_1 - number_2)

  elif operator == "*":
    # if the user's operator is "*" multiply number_1 by number_2
    print(number_1 * number_2)

  elif operator == "/":
    # if user's operator is "/" and number_2 does not equal zero divide number_1 by number_2
    if number_2 != 0:
      print(number_1 / number_2)
    else:
      # if number_2 equal zero python prints undefined 
      print("Undefined")
else:
  print("Invalid operator!!")
  


  
