import ipdb

# print("Above the ipdb set trace")
# ipdb.set_trace() # basically the same use case as JS debugger!
# print("Below the ipdb set trace")
# ipdb.set_trace()
# print("Below the last ipdb set trace")

### Datatypes

"strings" # strings
123 # numbers
12.12 # floats
True # true boolean
False # false boolean
[] # a list (same as an array)
{"key": "value"} # a dictionary ( same as a js object)
() # tuples (a list but you can't change it!)
{1, 3, 4, 4} # sets which are unordered and uniq
None # no value (null in js)

# name = "Chewbacca"
# LAST_NAME = "Smith" # considered constant, however does not break and will allow you to change


# result_of_conditional = "1" == 1 or name != name

# is_it_truthy = ["hi"]

# if is_it_truthy:
#   print("Yes it's truthy!")
# else:
#   print("It is not truthy! Therefore falsy!")

# print("Yes it's truthy!" if is_it_truthy else "It is not truthy! Therefore falsy!")

## Decorators!
def print_result(func):

  def inner_function(*args, **kwargs):
    print(args)
    print(kwargs)
    result = func(*args, **kwargs)
    print(f"the result is {result}")

  return inner_function

@print_result
def avrakadavra(name = "random person"):
  return f"Casted this spell on {name}"

@print_result
def add_two_nums(num1, num2):
  return num1 + num2

@print_result
def subtract_two_nums(num1, num2):
  return num2 - num1


avrakadavra("Ron Weasley")
avrakadavra("Harry Potter")
avrakadavra()

add_two_nums(1, 3)

subtract_two_nums(num1 = 1, num2 = 3)