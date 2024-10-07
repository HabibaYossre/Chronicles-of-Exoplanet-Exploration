import { createCustomError } from "../middlewares/errors/customError.js";
import question from "../DB/models/question.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// service to add questions to the database
export const addQuestions = async (questionsData) => {

    // add questions to the database
    await question.insertMany(questionsData);
};

// service to get random questions from the database
export const getRandomQuestions = async () => {

    // get all questions from the database
    const questions = await question.find({}, { _id: 0, __v: 0 });
    // console.log(questions);
    // console.log(questions.length);
    // console.log(questions[0].questions);

    // create a map to store random questions
    const randomQuestions = new Map();

    // loop through the questions and pick one random question from each feature
    questions.forEach((feature_questions) => {
        const randomIndex = Math.floor(Math.random() * feature_questions.questions.length);
        randomQuestions.set(feature_questions.feature, feature_questions.questions[randomIndex]);
    });

    // convert the map to an array and return
    return Array.from(randomQuestions);
};

// service to post answers to the database
// request body will be like: {"responses": ["Nearby", "Small_planet_mass", "Low_host_radius", "Low_host_mass", "Low_eccentricity", "Low_stellar_magnitude", "Cool", "Sub-Neptune"]}
// using Axios to post the data to the server: https://exoplanet-ai-api.onrender.com/predict

export const postAnswers = async (answers) => {

    // post the answers to the server
    const response = await axios.post(`${process.env.AI_API_URL}/predict`, answers);

    // return the response
    return response.data;
};
