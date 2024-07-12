from config import api
from flask_restful import Resource
# /api/welcome

class WelcomeResource(Resource):
  def get(self):
    return {"message": "Welcome to Flask!"}, 200
  
api.add_resource(WelcomeResource, "/api/welcome")