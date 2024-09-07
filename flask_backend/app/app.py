from flask import Flask, request, jsonify
from translatorFunc import translate_text

app = Flask(__name__)
app.debug = True


@app.route("/calculate", methods=["POST"])
def calculate():
    data = request.json
    operation = data.get("operation")
    num1 = data.get("num1")
    num2 = data.get("num2")

    if operation == "add":
        result = num1 + num2
    elif operation == "subtract":
        result = num1 - num2
    elif operation == "multiply":
        result = num1 * num2
    elif operation == "divide":
        if num2 != 0:
            result = num1 / num2
        else:
            return jsonify({"error": "Division by zero is not allowed"}), 400
    else:
        return jsonify({"error": "Invalid operation"}), 400

    return jsonify({"result": result})


@app.route("/translate", methods=["POST"])
def translate():
    data = request.json
    text = data.get("text")
    target_language = data.get("target_language")

    if not text or not target_language:
        return jsonify({"error": "Text and target language are required"}), 400

    try:
        translation_result = translate_text(text, target_language)
        return jsonify(translation_result)
    except ValueError as ve:
        return jsonify({"error": str(ve)}), 400
    except RuntimeError as re:
        return jsonify({"error": str(re)}), 500


if __name__ == "__main__":
    app.run(port=5000)
