
# ? all the slicing operators are same as string

l2 = ["apple", "banana", "cherry"]
# l2[1:2] = "kiwi"
# print(l2) # we are getting  th weard result 
# to fix that we can pass as array 
l2[1:2] = {"kiwi"}#  same we dont get beard result
l2[1:2] = ["kiwi"] # same we dont get beard result
l2[1:3] = ["grapes", "kiwi"] 
# l2[1:3] = {"grapes", "kiwi"} # order formating change hori hai 

l2[1:1] = ["test","test"]
l2[1:3] = []
# print(l2) 

# for f in l2:
#     print(f , end='-') # we can change the end of the string or the elems 

l2.append("Oolang")    
if "Oolang" in l2:
    print('Yes')

    #  pop() method
    #  remove method
    #  insert method
    # copy() method 
    # clear() method

# ? lists comprehension
sqr = [x**2 for x in range(1,11)]
print(sqr)
