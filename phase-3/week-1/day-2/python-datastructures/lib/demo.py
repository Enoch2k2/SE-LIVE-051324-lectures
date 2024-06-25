lis = ["hello", "world", 1234, True, False, ["hi"]]
lis.clear()

# adds to the end
lis.append("hello")
lis.append("world")

# adds to an index (0 will add to the front)
lis.insert(0, "This is added first")

# remove from the end
lis.pop()

# remove from the beginning
lis = ["hello", "world", 1234, True, False, ["hi"]]

lis = lis[1:6]

# print(lis)

# slice middle 4
lis = ["hello", "world", 1234, True, False, ["hi"]]

lis = lis[1:5]
# print(lis)


tup = ("hi", "goodbye")


### dictionaries our javascript objects!

def some_method():
  print('some method')

dictionary = {
  "first_name": "Bob",
  "last_name": "Smith",
  "greet": some_method
}

dictionary["age"] = 32

# print(dictionary)

del dictionary["age"]
# print(dictionary)

dictionary["first_name"] = "Sam"

# print(len(dictionary))

lis = ["Bob", "Sarah", "Sam", "Martha", "Denise", "Charles", "Bob", "Sam", "Charles"]
st = {"world", "hello", "hi", "bob", "Bob"}
uniq_set = set(lis)
uniq_lis = list(uniq_set)

# print(uniq_lis)

# i = 0

# while i < 10:
#   print(f'the value of i is {i}!')
#   i += 1

# lis = list(range(10))

# print(dictionary.items)

# for key, value in dictionary.items():
#   pass

### our way to map! also filter!

capitalized_list = [name.upper() for name in uniq_lis if len(name) > 3]

# print(capitalized_list)

nested_list = [
  [
    {
      "name": "Bob",
      "last": "Smith"
    },
    {
      "name": "Sam",
      "last": "Gamgee"
    },
    {
      "name": "Frodo",
      "last": "packageins"
    }
  ],
  [
    {
      "name": "Ganon",
      "last": "Dorf"
    },
    {
      "name": "Wario",
      "last": "Mustache"
    },
    {
      "name": "Sonic",
      "last": "Hedgehog"
    }
  ]
]



'''
  list
    -list
      -dictionary
      -dictionary
      -dictionary
    -list
      -dictionary
      -dictionary
      -dictionary
'''

# lis = []

# for list_of_characters in nested_list:
#   for character in list_of_characters:
#       if(character["name"] != 'Sam'):
#         lis.append(character)

# print(lis)

# greet = lambda name: f'hello {name}!'

# result = greet("Bob")

# print(result)

# lambda resp: resp.json()

lis = [
    {
      "name": "Bob",
      "last": "Smith"
    },
    {
      "name": "Sam",
      "last": "Gamgee"
    },
    {
      "name": "Frodo",
      "last": "packageins"
    },
    {
      "name": "Ganon",
      "last": "Dorf"
    },
    {
      "name": "Wario",
      "last": "Mustache"
    },
    {
      "name": "Sonic",
      "last": "Hedgehog"
    }
  ]

# print(lis)
# uniq_lis = sorted(uniq_lis)
uniq_lis = sorted(lis, key=lambda dictionary: len(dictionary["name"]))
print(uniq_lis)