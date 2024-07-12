from flask import request
from config import db, api
from flask_restful import Resource
from models.models import Book

class BooksResource(Resource):
  def get(self):
    books = Book.query.all()
    book_dicts = [book.to_dict() for book in books]
    return book_dicts, 200
  
  def post(self):
    data = request.get_json()
    title = data.get("title")
    author_id = data.get("author_id")
    book = Book(title=title, author_id=author_id)
    db.session.add(book)
    db.session.commit()
    return book.to_dict(), 201

api.add_resource(BooksResource, "/api/books")