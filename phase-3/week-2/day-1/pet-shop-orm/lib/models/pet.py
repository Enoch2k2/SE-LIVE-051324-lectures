from __init__ import CONN, CURSOR
from models.owner import Owner

import ipdb
class Pet:

  all = {}

  def __init__(self, name, species, owner_id, id=None):
    self.name = name
    self.species = species
    self.owner_id = owner_id
    self.id = id

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
    sql = """
      INSERT INTO pets (name, species, owner_id) VALUES (?, ?, ?);
    """

    CURSOR.execute(sql, (self.name, self.species, self.owner_id))
    CONN.commit()

    self.id = CURSOR.lastrowid
    Pet.all[self.id] = self
  
  @classmethod
  def create(cls, name, species, owner):
    pet = Pet(name=name, species=species, owner_id=owner.id)
    pet.save()
    owner.adopt(pet)
    return pet
  
  @classmethod
  def create_table(self):
    sql = """
      CREATE TABLE IF NOT EXISTS pets (
        id INTEGER PRIMARY KEY,
        name TEXT,
        species TEXT,
        owner_id INTEGER
      );
    """

    CURSOR.execute(sql)
    CONN.commit()

  @classmethod
  def drop_table(self):
    sql = "DROP TABLE pets"
    CURSOR.execute(sql)
    CONN.commit()

  @classmethod
  def get_all(cls):
    sql = "SELECT * FROM pets"
    data = CURSOR.execute(sql).fetchall()
    for row in data:
      pet = Pet.instance_from_db(row)
      pet.owner = Owner.find_by_id(pet.owner_id) # owner object with pets populated
      ipdb.set_trace()
      Pet.all[pet.id] = pet

  @classmethod
  def instance_from_db(cls, row):
      id = row[0]
      name = row[1]
      species = row[2]
      owner_id = row[3]

      return Pet(id=id, name=name, species=species, 
                 owner_id=owner_id)
    