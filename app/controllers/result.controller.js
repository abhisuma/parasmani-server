/*'use strict';

const mongoose = require('mongoose');
const exam=mongoose.model('Exams');




exports.generateResult = (req,res) =>{
  exam.findOne({},function(err,doc){
    doc.answerkey.answers.forEach(function(value){
      if(value.question_id)
    })
  })
}
*/
