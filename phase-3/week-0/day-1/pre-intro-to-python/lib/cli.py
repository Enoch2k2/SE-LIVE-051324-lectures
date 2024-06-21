# this is a comment
from ipdb import set_trace

# this is a variable (declarator variableName = "SomeValue")
name = "Bob"
# LAST_NAME = "Smith"
last_name = "Smith"

### DATATYPES ###

123
12.12
'this is a string!'
# print(f"This is {name}!") # interpolation
# print("This is " + name + " " + last_name) # concatonation
True
False
l = [123, 'this is a string', True, name, last_name] # wait i thought this was an array? These are list
# print(l)
person = {"first_name": "Bob", "last_name": "Smith"}
# print(person["first_name"])
# print(person["last_name"])
tup = ("hello", "world") # tuple
# print(tup[0])
# print(tup[1])
# tup[0] = "something else"
# print(tup)
st = { "hello", "world", "world" }


lis = ["bob", "bob", "sam", "lisa"]

uniq_set = set(lis)

uniq_list = list(uniq_set)
# print(uniq_list)


### iteration

# new_lis = []

# for element in lis:
#   if element != "lisa":
#     new_lis.append(element.upper())
#   elif len(element) == 4:
#     new_lis.append(element + "!")

# new_lis = [element.upper() for element in lis if element != "lisa"] # list comprehension
# print(new_lis)

# i = 0

# while i < 10:
#   i += 1
#   print(i)

# def greet_person(name):
#   print(f"Hello { name }")

# greet_person("Bob")


def add_two_nums(num_1, num_2):
  return num_1 + num_2

result = add_two_nums(1, 3)
print(result)