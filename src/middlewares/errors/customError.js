export class CustomError extends Error {
    constructor(message, statusCode, body) {
        super(message);
        this.statusCode = statusCode;
        this.body = body;
    }
}

export function createCustomError(message, statusCode, body = null) {
    return new CustomError(message, statusCode, body);
}