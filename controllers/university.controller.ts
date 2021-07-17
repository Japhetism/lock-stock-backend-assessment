export{};

const base = require('./base.controller');
const University = require('../models/unversity.model');

// University controller for get universitiies route
exports.getUniversities = base.getAll(University);
