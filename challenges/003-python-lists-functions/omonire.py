# List of at least 5 numbers
nums = [4, 8, 1, 9, 3]


# Return the sum of all numbers in a list
def total(lst):
    s = 0
    for n in lst:
        s += n
    return s


# Return the highest number in a list
def highest(lst):
    h = lst[0]
    for n in lst:
        if n > h:
            h = n
    return h


# Return the lowest number in a list
def lowest(lst):
    l = lst[0]
    for n in lst:
        if n < l:
            l = n
    return l


print("Numbers:", nums)
print("Sum:", total(nums))
print("Highest:", highest(nums))
print("Lowest:", lowest(nums))
