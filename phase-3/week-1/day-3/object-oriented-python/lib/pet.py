from base import Base
from owner import Owner
class Pet(Base):
  all = [] # class scope variable

  def __init__(self, name, species):
    super().__init__(name)
    self.species = species
    Pet.all.append(self)

  @property
  def name(self):
    return self._name
  
  @name.setter
  def name(self, name):
    if(name != ''):
      self._name = name
    else:
      raise ValueError("Hey! You actually have to give me a name!")

  @classmethod
  def find_by_name(cls, name):
    return list(filter(lambda pet: pet.name == name, cls.all))[0]

  # name = property(get_name, set_name) getters / setters

garfield = Pet(name="Garfield", species="Cat")
odie = Pet(name="Odie", species="Dog")

garfield.mood("hungry")
odie.mood("excited")

garfield.run()

Pet.print_all_names()

# pet = Pet.find_by_name("Garfield")
# print(pet.name)