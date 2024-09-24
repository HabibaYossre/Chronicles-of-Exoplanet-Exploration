import { createCustomError } from "../middlewares/errors/customError.js";
import * as commentServices from "../services/comment.js";

export const getComments = async (req, res, next) => {
    try {
        const comments = await commentServices.getComments();
        res.status(200).json({
            message: "Comments fetched successfully",
            body: comments,
            status: 200
        });
    } catch (error) {
        next(createCustomError("Could not get comments", 500));
    }
}

export const addComment = async (req, res, next) => {
    try {
        const comment = await commentServices.addComment(req.body);
        res.status(201).json({
            message: "Comment added successfully",
            body: comment,
            status: 201
        });
    } catch (error) {
        next(createCustomError("Could not add comment", 500));
    }
}