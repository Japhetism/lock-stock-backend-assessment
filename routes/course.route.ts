export {};

const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

router
    .route('/courses')
    .get(courseController.getCourses);

module.exports = router;