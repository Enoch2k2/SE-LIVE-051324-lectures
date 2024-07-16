from config import app
from models.book import Book
from models.author import Author

from routes.books import *
from routes.authors import *

if __name__ == "__main__":
  app.run(port=5555, debug=True)