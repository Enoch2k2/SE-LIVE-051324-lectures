from flask import request
from flask_restful import Resource
from config import db, api
from models.author import Author

class AuthorsResource(Resource):
  def get(self):
    authors = [author.to_dict() for author in Author.query.all()]
    return authors, 200
  
  def post(self):
    # name = request.get_json().get('name')
    data = request.get_json()
    name = data.get('name')
    author = Author(name=name)
    db.session.add(author)
    db.session.commit()
    return author.to_dict(), 201
  
api.add_resource(AuthorsResource, "/authors", endpoint="authors")

class AuthorResource(Resource):
  def get(self, id):
    author = Author.query.get(id)
    return author.to_dict(), 200
  
api.add_resource(AuthorResource, "/authors/<int:id>", endpoint="author")
