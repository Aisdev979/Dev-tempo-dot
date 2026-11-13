while True:
    try:
        user_number = int(input("Type a number: "))
        if user_number == 0:
            break
        elif user_number % 2 == 0:
               print("Even")
               for number in range(1,user_number + 1):
                   print(number)
        else:
            print("Odd")
            for number in range(1,user_number + 1):
                print(number)        
    except ValueError:
        print("input a valid number")         
