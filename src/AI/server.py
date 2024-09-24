from flask import Flask, request, jsonify
import numpy as np
import joblib
import pandas as pd
import re
import matplotlib.pyplot as plt

app = Flask(__name__)

# Load Data Frame to retrieve random record with the predicted planet type
df = pd.read_csv("Scientific_Info.csv")
# Load trained model

model = joblib.load(r'.\Saved_Model\XGBoost_model.joblib')


# Function to select random questions
@app.route('/predict', methods=['POST'])
def predict():
    data = request.json  # Receiving the Request Data

    response_mapping = {
        'Nearby': 0, 'Intermediate': 1, 'Distant': 2,
        'Small_planet_mass': 0, 'Large_planet_mass': 1,
        'Low_host_radius': 0, 'Medium_host_radius': 1, 'Large_host_radius': 2,
        'Low_host_mass': 0, 'Medium_host_mass': 1, 'Large_host_mass': 2,
        'Low_eccentricity': 0, 'High_eccentricity': 1,
        'Low_stellar_magnitude': 0, 'High_stellar_magnitude': 1,
        'Cool': 0, 'Warm': 1, 'Hot': 2,
        'Sub-Neptune': 0, 'Super-Jovian': 1, 'Mega-Earth': 2, 'Mini-Neptune': 3,
        'Neptune-class': 4, 'Jovian': 5, 'Earth-like': 6, 'Mini-Earth': 7, 'Sub-Jovian': 8,
        'Super-Earth': 9
    }

    # Mapping user responses to numerical features
    features = [response_mapping[answer] for answer in data['responses']]

    # Predict using the model
    prediction = model.predict([features])[0]

    # Mapping predicted numerical values to planet types
    planet_type_mapping = {
        0: 'Neptune-like',
        1: 'Gas Giant',
        2: 'Super Earth',
        3: 'Terrestrial'
    }

    predicted_planet_type = planet_type_mapping[prediction]

    # Search the DataFrame for records that match the predicted planet type
    filtered_df = df[df['planet_type'] == predicted_planet_type]

    if not filtered_df.empty:
        # Select a random record from the filtered DataFrame
        random_record = filtered_df.sample(1).to_dict(orient='records')[0]
    else:
        # Handle case where no records match the predicted type (edge case)
        random_record = {"message": "No records found for the predicted planet type"}

    # Return the prediction and a random record as JSON
    return jsonify({
        'predicted_planet_type': predicted_planet_type,
        'random_record': random_record['name']
    })


if __name__ == '__main__':
    app.run(debug=True)