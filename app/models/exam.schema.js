const mongoose = require('mongoose');
const schema = mongoose.Schema;
const questionschema = require('./questions.schema.js').schema;

const questionpaperschema = new schema({
  language: String,
  //set for each difficulty
  sets: {
    A: [questionschema],
    B: [questionschema],
    C: [questionschema],
    D: [questionschema]
  }
})

const examschema =new schema({
  date: String,
  domain: String,
  questionPapers: [questionpaperschema]
})

module.exports = mongoose.model('Exams',examschema);
