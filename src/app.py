from flask import Flask, request, jsonify
from pymongo import MongoClient
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # IMPORTANT for React

client = MongoClient("mongodb://localhost:27017/")
db = client["ngo-1"]
collection = db["child_info"]

@app.route("/submit-form", methods=["POST"])
def submit_form():
    data = request.json

    collection.insert_one({
        "parent_name": data["parent_name"],
        "contact_number": data["contact_number"],
        "child_name": data["child_name"],
        "age": int(data["age"]),
        "disability": data["disability"],
        "condition_description": data["condition_description"]
    })

    return jsonify({"message": "Data saved successfully"})

if __name__ == "__main__":
    app.run(port=5000, debug=True)
