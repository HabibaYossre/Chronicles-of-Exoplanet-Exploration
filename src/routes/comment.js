import { Router } from "express";
import * as commentControllers from "../controllers/comment.js";

const router = Router();

// router to get all comments
router.get("/", commentControllers.getComments);

// router to add comment
router.post("/", commentControllers.addComment);


export default router;