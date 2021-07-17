class AppError extends Error {
    statusCode: string;
    status: string;
    data: null;

    constructor(statusCode: string, status: string, message: string, data = null) {
        super(message);
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.data = data;
    }
}

module.exports = AppError;