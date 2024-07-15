from config import db

class Book(db.Model):
  __tablename__ = "books"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  released = db.Column(db.Boolean)
  author_id = db.Column(db.Integer, db.ForeignKey("authors.id"))

  author = db.relationship("Author", back_populates="books")

  def __repr__(self):
    return f'<Book id={self.id} title={self.title}>'

"""
CREATE TABLE IF NOT EXIST books (
  id INTEGER PRIMARY KEY
  title TEXT
  released BOOLEAN
);
"""