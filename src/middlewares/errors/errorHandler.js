import { CustomError } from "./customError.js";

const errorHandler = (error, req, res, next) => {
    if (error instanceof CustomError) {
        return res.status(error.statusCode).json({
            message: error.message,
            body: error.body,
            status: error.statusCode,
        });
    }
    console.log(error);
    return res
        .status(500)
        .json({ message: "Internal server error!", body: null, status: 500 });
};

export default errorHandler;