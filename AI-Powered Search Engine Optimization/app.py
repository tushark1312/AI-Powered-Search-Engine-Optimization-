
from flask import Flask, request, jsonify
import pandas as pd
from randomforest import your_random_forest_function  # Import your random forest function

app = Flask(__name__)

@app.route('/process', methods=['POST'])
def process_request():
    input_data = request.json.get('firstname')  # Getting the "firstname" field
    result = your_random_forest_function(input_data)  # Modify this based on your script logic
    
    response = {
        'firstname': input_data,
        'prediction': result  # Return the prediction from randomforest.py
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
