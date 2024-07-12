from flask import Flask, send_from_directory, request, jsonify
from flask_cors import CORS
import os
import openai
from dotenv import load_dotenv

# Load environment variables
load_dotenv()
openai.api_key = os.getenv('OPENAI_API_KEY')

app = Flask(__name__, static_folder='build')
CORS(app)

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/get_feedback', methods=['POST'])
def get_feedback():
    data = request.json
    long_term_goal = data.get('long_term_goal')

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": "You are an expert in Design Sprints, following the methodology created by Jake Knapp and John Zeratsky."},
            {"role": "user", "content": long_term_goal}
        ],
        max_tokens=500
    )

    feedback = response.choices[0]['message']['content'].strip()
    polished_goal = long_term_goal  # You might want to refine this logic

    return jsonify({'feedback': feedback, 'polished_goal': polished_goal})

@app.route('/<path:path>')
def static_files(path):
    return send_from_directory(app.static_folder, path)

if __name__ == '__main__':
    app.run(debug=True, port=5001)
