# Exoplanet Personality Quiz (ExoVibe)

---

## Overview
ExoVibe is an interactive quiz platform that matches users with exoplanets based on their personality traits. This project utilizes various datasets and machine learning techniques to create an engaging educational experience. This README provides details about the project structure, files, and their purposes.

---


## Folder and File Descriptions

### 1. Saved Model/
This folder is intended for storing the trained machine learning model (XGBoost) that classify exoplanets based on user responses.

### 2. planets_images_dataset/
This directory contains a collection of images representing various exoplanets. These images are used in the quiz results to visually engage users and enhance the overall experience and used alse in an exoplanets information page.

### 3. ExoVibe_Personality_Description.json
This JSON file includes detailed personality descriptions for each type of exoplanet. Each entry maps an exoplanet type to its corresponding personality traits, making the quiz results more relatable and fun for users.

### 4. ExoVibe_Questions.json
This JSON file contains the structured quiz questions that users will answer to determine their exoplanet match. Each question is formatted for easy integration with the frontend, allowing for dynamic question rendering.

### 5. Exoplanet_Types_Classification.ipynb
This Jupyter notebook contains the code and processes used to train the machine learning model for classifying exoplanets. It documents the workflow for loading data, preprocessing, model training, and evaluating performance. Any recent changes to the model parameters or logic should be noted within the notebook.

### 6. Scientific_Info.csv
This CSV file contains scientific data on various exoplanets, including attributes such as name  , planet mass,  planet radius, planet discovery method, and more. This is the data we used to display exoplanets information.

### 7. nasa_exoplanets.csv
This dataset includes confirmed exoplanets data sourced from NASA. It serves as a comprehensive reference for the project, providing reliable data that supports the educational content presented in the quiz.