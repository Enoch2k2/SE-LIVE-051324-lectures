from models.owner import Owner
from models.pet import Pet
import ipdb

class Cli:
  def start(self):
    print("Welcome to pet shop!")
    self.menu()

  def menu(self):
    print("Type '1' to list out owners")
    print("Type '2' to create an owner")
    print("Type '3' to list out pets")
    print("Type '4' to create an pet")
    print("Type 'exit' to exit program")
    self.selection()

  def selection(self):
    print("")
    user_input = input("Input Here: ")
    if user_input == "1":
      self.list_owners()
    elif user_input == "2":
      self.create_owner()
    elif user_input == "3":
      self.list_pets()
    elif user_input == "4":
      self.create_pet()
    elif user_input == "exit":
      print("exiting program")
    else:
      print("invalid input, try again")
      self.menu()

  def list_owners(self):
    print("-----")
    for owner_id, owner in Owner.all.items():
      print(f'ID: {owner_id}. NAME: {owner.name}')
      print("Pets of owner:")
      for pet_id, pet in owner.pets.items():
        print(f"- ID: {pet_id} NAME: {pet.name} SPECIES: {pet.species }")
      print("-----")
    print("")
    self.menu()

  def create_owner(self):
    print("")
    name = input("Owner Name: ")
    Owner.create(name=name)
    print("Created successfully!")
    print("")
    self.menu()

  def list_pets(self):
    print("-----")
    for pet_id, pet in Pet.all.items():
      print(f'ID: {pet_id}. NAME: {pet.name} SPECIES: {pet.species}')
      print(f"owner: ID: {pet.owner.id} NAME: {pet.owner.name}")
      print("-----")
    print("")
    self.menu()

  def create_pet(self):
    owner_id = input("Type in ID of owner: ")
    try:
      int_owner_id = int(owner_id)
      owner = Owner.all.get(int_owner_id)
    except:
      print("owner not found")
      print("")
      return self.menu()
    if owner:
      name = input("Type in name of pet: ")
      species = input("Type in species of pet: ")
      pet = Pet.create(name=name, species=species, owner=owner)
      print("Pet successfully created!")
      print("")
    else:
      print("owner not found")
      print("")
    self.menu()