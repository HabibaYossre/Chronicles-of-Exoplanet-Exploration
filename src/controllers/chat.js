import { createCustomError } from "../middlewares/errors/customError.js";
import * as chatServices from "../services/chat.js";

export const sendPrompt = async (req, res, next) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return next(createCustomError("Please provide a prompt", 400));
        }
        const response = await chatServices.sendPrompt(prompt);
        res.status(200).json({
            message: "Prompt sent successfully and response received!",
            body: response,
            status: 200,
        });
    } catch (error) {
        next(error);
    }
}