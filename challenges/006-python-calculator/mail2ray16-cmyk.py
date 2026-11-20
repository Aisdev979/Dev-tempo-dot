while True:
    number1 = int(input('No 1> '))
    #To end the program
    if number1 == 00:
        break
    what_operation = input('+,-,*,/: ')
    number2 = int(input('No 2> '))
  
    if what_operation == '+':
           result = number1 + number2
    elif what_operation == '-':
           result = number1 - number2
    elif what_operation == '*':
            result = number1 * number2
    elif what_operation == '/':
           #zero division error
           if number2 == 0:
               result = f'Error: Cannot divide {number1} by zero'
           else:
                result = number1 / number2
    else:
         print('Invalid Syntax!')
    print(result)
