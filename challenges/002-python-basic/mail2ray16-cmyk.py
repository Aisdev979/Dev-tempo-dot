import random

user_name = input('Your Github handle: ')
print(f'welcome {user_name} to the guessing game')
random_number = random.randint(1,10)
guess_count = 0
while True:
   try:
        user_guess = int(input('Guess between 1-10: '))
        guess_count +=1
        if user_guess > random_number:
             print('Too high')
        elif user_guess < random_number:
             print('Too low')
        else:
             print('You guessed right')
             print(f'Total try: {guess_count}')
             break
   except ValueError:
             print('Pls input a valid digit')
             continue
