const mongoose = require('mongoose');
const schema = mongoose.Schema;

const responseschema=new schema({
  student_id: String,
  questionPaperId: String,
  answer : [{question_id: String,answer_id: Number}]
});

module.exports = mongoose.model('responses',responseschema);
