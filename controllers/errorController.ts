const {response} = require('express');

interface err {
    statusCode?: string;
    status?: string;
    data?: object;
    message?: string;
}

interface req {

}

interface res {
    status:(arg0?: string) => any;
}

interface next {
    
}

// Express automatically knowa that this entire function is an error handling middleware by specifying 4 parameters
module.exports = (err: err, req: req, res: res, next: next) => {
    err.statusCode = err.statusCode || process.env.HTTP_INTERNAL_SERVER_ERROR_STATUS_CODE;
    err.status = err.status || process.env.ERROR_STATUS;
    const responseData = err.data || null;

    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        responseData,
        responseCode: process.env.ERROR_RESPONSE_CODE
    })
}