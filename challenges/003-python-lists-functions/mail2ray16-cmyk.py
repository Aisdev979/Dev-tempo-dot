#Get the sum of all numbers
def sum_numbers(numbers):
    total = sum(numbers)
    return total

#Get the maximum numbers    
def max_numbers(numbers):
    maximum_numbers = max(numbers)  
    return maximum_numbers
    
    
#Get the lowest number
def low_number(numbers):
    lowest_num = min(numbers)
    return lowest_num
 
       
numbers = [1,2,3,4,5]
total = sum_numbers(numbers)
print(f'Total numbers = {total}')
max_no = max_numbers(numbers)
print(f'Maximum numbers = {max_no}')
lowest_no = low_number(numbers)
print(f'Lowest number = {lowest_no}')