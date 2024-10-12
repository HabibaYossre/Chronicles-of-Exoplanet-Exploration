import { createCustomError } from "../middlewares/errors/customError.js";
import dotenv from "dotenv";
import { Ollama } from "ollama";

dotenv.config();


export const sendPrompt = async (prompt) => {
    const ollama = new Ollama();

    const response = await ollama.chat({
        model: 'llama3.1',
        messages: [{ role: 'user', content: prompt }],
    })

    return response.message.content;
}