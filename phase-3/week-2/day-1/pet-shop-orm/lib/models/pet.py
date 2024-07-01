class Pet:

  all = []
  database_id = 1

  def __init__(self, name, species, owner, id=None):
    self.name = name
    self.species = species
    self.owner = owner # setting owner object as the owner of this pet
    self.owner.adopt(self) # add the pet to the owner's pets list

  @property
  def name(self):
    return self._name
  
  @name.setter
  def name(self, name):
    self._name = name

  @property
  def species(self):
    return self._species
  
  @species.setter
  def species(self, species):
    self._species = species

  @property
  def owner(self):
    return self._owner
  
  @owner.setter
  def owner(self, owner):
    self._owner = owner

  def save(self):
    self.id = Pet.database_id
    Pet.database_id += 1
    Pet.all.append(self)

  
  @classmethod
  def create(cls, name, species, owner):
    pet = Pet(name, species, owner)
    pet.save()
    return pet