import Comment from '../DB/models/comment.js';

export const getComments = async () => {
    const comments = await Comment.find();
    return comments;
}

export const addComment = async (comment) => {
    const newComment = new Comment(comment);
    await newComment.save();
    return newComment;
}