import { Router } from "express";
import * as questionControllers from "../controllers/question.js";

const router = Router();

// router to add new question
router.post("/", questionControllers.addQuestions);

// router to pick one random question from each feature
router.get("/random", questionControllers.getRandomQuestions);

// router to post answers
router.post("/answers", questionControllers.postAnswers);

export default router;