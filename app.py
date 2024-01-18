from flask import Flask, request, jsonify, render_template
from prediction import model_predict

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get data from the POST request
        data = request.json

        abstract = data['abstract'] 

        # # Make predictions using the loaded model
        predictions = model_predict(abstract) 

        # # Convert predictions to a JSON response
        response = {'predictions': predictions}

        return jsonify(response)
    
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
