from config import db
from sqlalchemy_serializer import SerializerMixin

class Book(db.Model, SerializerMixin):
  __tablename__ = "books"

  
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  released = db.Column(db.Boolean)
  author_id = db.Column(db.Integer, db.ForeignKey("authors.id"))

  author = db.relationship("Author", back_populates="books")


  def title_in_all_caps(self):
    return self.title.upper()

  serialize_rules=(
    "-author.books",
    "-author_id",
    "title_in_all_caps"
  )
  
  def __repr__(self):
    return f'<Book id={self.id} title={self.title}>'

"""
CREATE TABLE IF NOT EXIST books (
  id INTEGER PRIMARY KEY
  title TEXT
  released BOOLEAN
);
"""