export{};

const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const bodyParser = require('body-parser');
const hpp = require('hpp');

const universityRoutes = require('./routes/university.route');
const courseRoutes = require('./routes/course.route');
const globalErrorHandler = require('./controllers/errorController');
const AppError = require('./utils/appError');

const app = express();

// Allow Cross-origin requests
app.use(cors());

// Set security HTTP headers
app.use(helmet());

// Limit request from the same API
const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too many request from this IP, please try again in an hour'
});
app.use('/api', limiter);

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Body parser, reading data from body to req
app.use(express.json({
    limit: '15kb'
}));

// Data sanitization against XSS (clean, userinput from malicious HTML code)
app.use(xss());

// Prevent parameter pollution
app.use(hpp());

// Routes
app.use('/api/v1', universityRoutes);
app.use('/api/v1', courseRoutes);

// Hanlde unexisting routes
app.use('*', (req: object, res: object, next: any) => {
    const err = new AppError(process.env.HTTP_NOT_FOUND_STATUS_CODE, process.env.ERROR_STATUS, 'Route does not exist');
    next(err, req, res, next);
})

app.use(globalErrorHandler);

module.exports = app;


