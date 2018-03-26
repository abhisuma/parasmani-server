const mongoose = require('mongoose');

const schema = mongoose.Schema;

var answerkeyschema = new schema({
  questionPaperId: String,
  answers : {question_id:String,answer_id:Number}
});

module.exports = mongoose.model('Answerkey',answerkeyschema);
