export {};

const express = require('express');
const router = express.Router();
const universityController = require('../controllers/university.controller');

router
    .route('/universities')
    .get(universityController.getUniversities);

module.exports = router;