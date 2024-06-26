class Base:
  def __init__(self, name):
    self.name = name

  def mood(self, mood_we_are_in):
    print(f'{self.name} is {mood_we_are_in}')

  def run(self):
    print(f'{self.name} is running!')

  @classmethod  
  def print_all_names(cls):
    for pet_instance in cls.all:
      print(pet_instance.name)