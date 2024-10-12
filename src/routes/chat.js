import { Router } from "express";
import * as chatController from "../controllers/chat.js";

const router = Router();

// route to send prompt to chatbot
router.post("/prompt", chatController.sendPrompt);

export default router;