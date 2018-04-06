'use strict';

const mongoose = require('mongoose');
const exam=mongoose.model('Exams');
const response=mongoose.model('responses');
const result=mongoose.model('results');

// function resultcalculator(student_id,response_id,response){
//   response.find(response._id : response.id,function(err,doc){
//     doc.answer
//   })
// }

function questionChecker(language,question_id,response,cb){
  if(response==0){
    cb(0)
  }
  exam.find({},function(err,doc){
    doc.answerkey.forEach(function(item){
      if(item.language==language){
        item.answers.forEach(function(value){
          if(value.question_id==question_id){
            if(value.answer_id==response){
              cb(1)
            }
            else {
              cb(-1)
            }
          }
        })
      }
    })
  })
}


exports.generateResult = (req,res) =>{
response.find({},function(err,responses){
  responses.forEach(function(value){
    const newResult = result({
      student_id: value.student_id,
      language: value.language
    })
    newResult.save().then((err,model) => {
        value.answer.forEach(function(item){
          questionChecker(value.language,item.question_id,item.response,(corr) => {
            var answer = {
              question_id: item.question_id,
              correct: corr,
              set: item.set
            }
            var id = newResult._id;
            result.findByIdAndUpdate(
              id,
              { $push: {"answer":answer}},
              {  safe: true, upsert: true},
              function(err, model) {
                if(err){
                  console.log(err);
                }
              })
          })
        })

    })
})
})


  // exam.findOne({},function(err,doc){
  //   doc.answerkey.answers.forEach(function(value){
  //     if(value.question_id)
  //   })
  // })
}
