export{};

const base = require('./base.controller');
const Course = require('../models/course.model');

// Course controller for get courses route
exports.getCourses = base.getAll(Course);
