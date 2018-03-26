const mongoose = require('mongoose');
const schema = mongoose.Schema;
const questionschema = require('./questions.schema.js').schema;

const questionpaperschema = new schema({
  exam_name: String,
  language: String,
  //set for each difficulty
    A: [questionschema],
    B: [questionschema],
    C: [questionschema],
    D: [questionschema]
})


module.exports = mongoose.model('Question_papers',questionpaperschema);
