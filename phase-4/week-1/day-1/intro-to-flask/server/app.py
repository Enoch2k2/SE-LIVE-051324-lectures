from config import app
from models.book import Book
from models.author import Author

if __name__ == "__main__":
  app.run(port=5555, debug=True)