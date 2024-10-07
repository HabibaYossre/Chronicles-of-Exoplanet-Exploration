from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import joblib
import pandas as pd
import logging

# Set up logging
logging.basicConfig(level=logging.INFO)

# Load the pre-trained model
model = joblib.load('app/model.joblib')

# Load the CSV file containing the data
df = pd.read_csv("app/Scientific_Info.csv")

app = FastAPI()

class PredictRequest(BaseModel):
    responses: list[str] 

@app.get("/")
def read_root():
    return {"message": "Hello, World"}

@app.post('/predict')
def predict(data: PredictRequest):
    logging.info(f"Received data: {data}")

    # Mapping of user responses to numerical values
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

    # Map user responses to numerical features
    try:
        features = [response_mapping[answer] for answer in data.responses]
    except KeyError as e:
        logging.error(f"Invalid response: {e}")
        raise HTTPException(status_code=400, detail=f"Invalid response: {e}")

    # Predict using the model
    try:
        prediction = model.predict([features])[0]
    except Exception as e:
        logging.error(f"Prediction error: {e}")
        raise HTTPException(status_code=500, detail="Prediction error")

    # Mapping predicted numerical values to planet types
    planet_type_mapping = {
        0: 'Neptune-like',
        1: 'Gas Giant',
        2: 'Super Earth',
        3: 'Terrestrial'
    }

    predicted_planet_type = planet_type_mapping.get(prediction, "Unknown")

    # Search the DataFrame for records that match the predicted planet type
    filtered_df = df[df['planet_type'] == predicted_planet_type]

    if not filtered_df.empty:
        # Select a random record from the filtered DataFrame
        random_record = filtered_df.sample(1).to_dict(orient='records')[0]
    else:
        random_record = {"message": "No records found for the predicted planet type"}

    # Return the prediction and a random record as JSON
    return {
        "predicted_planet_type": predicted_planet_type,
        "random_record": random_record.get('name', "No record found")
    }
