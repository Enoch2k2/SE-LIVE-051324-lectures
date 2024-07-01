import ipdb

class Owner:
  all = []
  database_id = 1

  def __init__(self, name, id=None):
    self._name = name
    self.id = id
    self.pets = []

  @property
  def name(self):
    return self._name
  
  @name.setter
  def name(self, name):
    self._name = name

  def save(self):
    self.id = Owner.database_id
    Owner.database_id += 1
    Owner.all.append(self)

  def adopt(self, pet):
    self.pets.append(pet)

  @classmethod
  def create(cls, name):
    owner = Owner(name)
    owner.save()
    return owner