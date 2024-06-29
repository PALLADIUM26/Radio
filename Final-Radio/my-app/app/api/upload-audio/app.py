# from flask import Flask

# app = Flask(__name__)

# # Define your routes and application logic here

# if __name__ == '_main_':
#     # Change the port number here (e.g., to port 5001)
#     port = 5001
#     app.run(port=port)

    # # FOR NUMBER MANIPULATION
from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
# CORS(app)

CORS(app, resources={
    r"/api/*": {
        "origins": ["http://localhost:3000"],  # Adjust to the allowed origins
        "methods": ["GET", "POST"],  # Specify allowed methods
        "allow_headers": ["Content-Type", "Authorization"],  # Specify allowed headers
        "supports_credentials": True  # Allow credentials (cookies, etc.)
    }
})

@app.route('/api/upload-audio', methods=['GET'])
def getdata():
    data = {"message": "Hello from the Python backend!"}
    print("lol")
    return jsonify(data)

if __name__ == '__main__':
    port = 3001
    app.run(port=port)
    app.run(debug=True)
