while True:
    try:
        number1 = int(input('No 1> '))
        #To end the program
        if number1 == 0:
            break
        what_operation = input('+,-,*,/: ')
        number2 = int(input('No 2> '))
        result = None
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
             print(result)
             continue
        print(result)
    except ValueError:
        print('Pls input a valid digit')
