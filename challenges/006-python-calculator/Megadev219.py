# calculator 
# Available options 
#  "addition", "subtraction", 
# "multiplication", "division"
operation = (input("What operation do you want to perform:"))
if operation == "+":
    print("ENTER YOUR TWO NUMBERS")
    first_number = int(input("enter your first number:")) 
    second_number = int(input("enter your second number:"))
    result = first_number + second_number
    print(result)

elif operation == "-":
    print("ENTER YOUR TWO NUMBERS")
    first_number = int(input("enter your first number: "))
    second_number = int(input("enter your first number:"))
    if first_number > second_number or second_number > first_number:
      result = first_number - second_number and second_number - first_number
      print(result)
    else:    
        print("Invalid inputs")

elif operation == "*":
   print('ENTER YOUR NUMBERS')
   first_number = int(input("enter your first number: "))
   second_number = int(input("enter your second number: "))
   result = first_number * second_number
   print(result)

elif operation =="/":
   print('ENTER YOUR NUMBERS')
   first_number = int(input('enter your first number: '))
   second_number = int(input('enter your second number: '))
   result = first_number / second_number
   if second number =="0":
     print("undefined")
   else:
       print(result)
