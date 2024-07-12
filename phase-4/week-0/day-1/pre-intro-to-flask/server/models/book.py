from config import db
from sqlalchemy_serializer import SerializerMixin

class Book(db.Model, SerializerMixin):
  __tablename__ = "books"

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  author_id = db.Column(db.Integer, db.ForeignKey("authors.id"))

  author = db.relationship("Author", back_populates="books")

  serialize_rules=(
    "-author.books",
    "-author_id"
  )

  def __repr__(self):
    return f'<Book id={self.id} title={self.title}>'