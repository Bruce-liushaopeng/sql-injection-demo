from flask import Flask, request, jsonify
from flask_cors import CORS
from vul import newUserToDB
app = Flask(__name__)
CORS(app)

@app.route('/hello', methods=['GET'])
def sayHi():
    response=[["Bruce","liu"],["James", "Bonds"]]
    return response

@app.route('/addUser', methods=['POST'], strict_slashes=False)
def addUser():
    firstName = request.json['firstName']
    lastName = request.json['lastName']
    newUserToDB(firstName, lastName)
    return "success post"
