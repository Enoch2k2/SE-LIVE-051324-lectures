from flask import request
from config import db, api
from flask_restful import Resource
from models.models import Author

class AuthorsResource(Resource):
  def get(self):
    authors = Author.query.all()
    author_dicts = [author.to_dict() for author in authors]
    return author_dicts, 200
  
  def post(self):
    data = request.get_json()
    name = data.get("name")
    author = Author(name=name)
    db.session.add(author)
    db.session.commit()
    return author.to_dict(), 201

api.add_resource(AuthorsResource, "/api/authors")