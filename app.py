
import webbrowser
from threading import Timer
from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/chat", methods=["POST"])
def chat():

    user_message = request.json["message"]

    response = requests.post(
        "http://localhost:11434/api/generate",
        json={
            "model": "llama3.2:1b",
            "prompt": user_message,
            "stream": False
        }
    )

    ai_response = response.json()["response"]

    return jsonify({"response": ai_response})


if __name__ == "__main__":
    Timer(1, lambda: webbrowser.open("http://127.0.0.1:5000")).start()
    app.run(debug=True, use_reloader=False)
