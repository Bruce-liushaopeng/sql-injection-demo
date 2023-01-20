from flask import Flask, request

app = Flask(__name__)

@app.route('/hello', methods=['GET'])
def sayHi():
    response="Whatever you wish too return"
    return response


