'use strict';

const mongoose = require('mongoose');
mongoose.connect(`mongodb://localhost:27017`);
require('./app/models');
const exam = mongoose.model('Exams');

console.log(exam.populate('subjects'))
