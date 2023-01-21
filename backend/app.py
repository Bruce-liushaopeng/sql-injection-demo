from flask import Flask, request, jsonify
from flask_cors import CORS
import vul_wrapper as v

app = Flask(__name__)
CORS(app)


@app.route('/addUser/<username>/<password>', methods=['POST'], strict_slashes=False)
def add_user(username=None, password=None):
    """
    Flask API function to add a user to the system.

    :param username: The username of the user to add
    :param password: The password of the user to add
    :return: Redundant message
    """

    print(username, password)
    v.add_user(username, password)
    return "ok"


@app.route('/getUser/<username>', methods=['GET'], strict_slashes=False)
def get_user(username=None) -> list:
    """
    Flask API function to get a user from the system.

    :param username: The username of the user to find
    :return: The user information
    """
    respond = v.get_user(username)
    return respond
