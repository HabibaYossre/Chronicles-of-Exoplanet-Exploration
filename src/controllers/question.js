import { createCustomError } from "../middlewares/errors/customError.js";
import * as questionService from "../services/question.js";

// Add a new question
export const addQuestions = async (req, res, next) => {
    try {
        await questionService.addQuestions(req.body);
        res.status(201).json({
            message: "Questions added successfully!",
            body: null,
            status: 201,
        });
    } catch (error) {
        next(error);
    }
};

// Get random questions
export const getRandomQuestions = async (req, res, next) => {
    try {
        const questions = await questionService.getRandomQuestions();
        res.status(200).json({
            message: "Random questions fetched successfully!",
            body: questions,
            status: 200,
        });
    } catch (error) {
        next(error);
    }
};

// Post answers
export const postAnswers = async (req, res, next) => {
    try {
        const result = await questionService.postAnswers(req.body);
        res.status(200).json({
            message: "Answers posted successfully!",
            body: result,
            status: 200,
        });
    } catch (error) {
        next(error);
    }
};
