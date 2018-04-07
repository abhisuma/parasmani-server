const mongoose = require('mongoose');
const schema = mongoose.Schema;

const resultschema = new schema({
  student_id: String,
  language: String,
  answer : [{question_id: String,correct: Number,set: String,subject:String}]
})

module.exports = mongoose.model('results',resultschema);
