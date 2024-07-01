from cli import Cli
from models.owner import Owner
from models.pet import Pet

Owner.create_table()
Pet.create_table()

Owner.get_all()
Pet.get_all()

Cli().start()