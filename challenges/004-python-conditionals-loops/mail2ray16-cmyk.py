def even_numbers():
       for number in range(1,user_number + 1):
          if number % 2 == 0:
              print(number) 

def odd_numbers():
       for number in range(1,user_number +1):
           if number % 2 == 1:
               print(number)
while True:
    try:
        user_number = int(input("Type a number: "))
        even = user_number % 2 == 0
        odd = user_number % 2 == 1
        if user_number == 0:
            break
        elif even:
            print("Even")
            even_numbers()
        else:
            print("Odd")
            odd_numbers()        
    except ValueError:
        print("input a valid number")         