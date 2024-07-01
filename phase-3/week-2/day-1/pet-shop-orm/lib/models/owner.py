from __init__ import CONN, CURSOR
import ipdb

class Owner:
  all = {}

  def __init__(self, name, id=None):
    self.name = name
    self.id = id
    self.pets = {}

  @property
  def name(self):
    return self._name
  
  @name.setter
  def name(self, name):
    self._name = name

  def save(self):
    sql = """
      INSERT INTO owners (name) VALUES (?)
    """

    CURSOR.execute(sql, (self.name,))
    CONN.commit()

    self.id = CURSOR.lastrowid

    Owner.all[self.id] = self

  def adopt(self, pet):
    pet.owner = self
    self.pets[pet.id] = pet

  @classmethod
  def create(cls, name):
    owner = Owner(name)
    owner.save()
    return owner
  
  @classmethod
  def create_table(self):
    sql = """
      CREATE TABLE IF NOT EXISTS owners (
        id INTEGER PRIMARY KEY,
        name TEXT
      );
    """

    CURSOR.execute(sql)
    CONN.commit()

  @classmethod
  def drop_table(cls):
    sql = "DROP TABLE owners"
    CURSOR.execute(sql)
    CONN.commit()

  @classmethod
  def get_all(cls):
    sql = "SELECT * FROM owners"
    data = CURSOR.execute(sql).fetchall()
    for row in data:
      owner = Owner.instance_from_db(row)
      owner.get_pets()
      Owner.all[owner.id] = owner

  def get_pets(self):
    from models.pet import Pet

    sql = "SELECT * FROM pets WHERE pets.owner_id = ?"
    data = CURSOR.execute(sql, (self.id,)).fetchall()
    for row in data:
      pet = Pet.instance_from_db(row)
      self.pets[pet.id] = pet

  @classmethod
  def instance_from_db(cls, row):
    id = row[0]
    name = row[1]
    instance = Owner(name=name, id=id)
    return instance
  
  @classmethod
  def find_by_id(cls, id):
    sql = "SELECT * FROM owners WHERE id = ?"
    data = CURSOR.execute(sql, (id,)).fetchone()
    return Owner.instance_from_db(data)