num = int(input("Enter a num: "))
if num %2==0 :    
    print("number is even")
else:
    print("number is odd")
print("Numbers from 1 to " + (str(num)+ ":"))
for i in range(1, num + 1):
    print(i)
