const mongoose = require('mongoose');
const schema = mongoose.Schema;

const responseschema=new schema({
  student_id: String,
  language: String,
  answer : [{question_id: String,response: Number,set:String}]
});

module.exports = mongoose.model('responses',responseschema);
