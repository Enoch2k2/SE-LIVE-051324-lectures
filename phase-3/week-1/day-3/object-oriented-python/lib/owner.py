from base import Base

class Owner(Base):
  all = []
  
  def __init__(self, name, age):
    super().__init__(name)
    self.age = age
    Owner.all.append(self)

owner = Owner(name="Bob", age=32)
# owner.mood("Happy")
# owner.run()

Owner.print_all_names()
