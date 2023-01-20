from flask import Flask, request, jsonify
from flask_cors import CORS
from vul import newUserToDB, getUserFromDB
app = Flask(__name__)
CORS(app)

@app.route('/addUser/<userName>/<password>', methods=['POST'], strict_slashes=False)
def addUser(userName=None, password=None):
    print(userName, password)
    response = newUserToDB(userName, password)
    return response

@app.route('/getUser/<userName>', methods=['GET'], strict_slashes=False)
def getUser(userName=None):
    respond = getUserFromDB(userName)
    return respond
