# decorators are used for extending functionality?

# def decorator(func):
#   def wrapper(*args, **kwargs):
#     func(*args, **kwargs)
#     func(*args, **kwargs)


#   return wrapper

# def greet(name):
#   print(f'hello, {name}')

# @decorator
# def goodbye():
#   print('goodbye')

# @decorator
# def add_two_nums(num1, num2):
#   print(num1 + num2)

# @decorator
# def subtract_two_nums(num1, num2):
#   print(num1 - num2)

# greet = decorator(greet)

# greet('Bob')
# goodbye()
# add_two_nums(1, 3)
# subtract_two_nums(num2=1, num1=5)

# subtract_two_nums(**{'num1': 5, 'num2': 3})
def square_results(func):
  print('inside the decorator')
  print(func)
  def bananas(num1, num2):
    print('inside the wrapper')
    result = func(num1, num2)
    print(f'result is {result}')
    # do whatever we want with the function

  return bananas


@square_results
def add_two_nums(num1, num2):
  print('inside add two nums')
  return num1 + num2

@square_results
def subtract_two_nums(num1, num2):
  print('inside subtract two nums')
  return num1 - num2

@square_results
def multiply_two_nums(num1, num2):
  print('inside multiply two nums')
  return num1 * num2

@square_results
def divide_two_nums(num1, num2):
  print('inside divide two nums')
  return num1 / num2

# set add two nums to the wrapper method of square results, passing in the add_two_nums function

add_two_nums(1, 3)
subtract_two_nums(3, 1)
multiply_two_nums(2, 2)
divide_two_nums(4, 2)
