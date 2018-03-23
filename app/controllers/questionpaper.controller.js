'use strict';

const mongoose = require('mongoose');
const exam=mongoose.model('Exams');

exports.addpaper =(req,res) => {
  const data = req.body;
  const question_paper = mongoose.model('Question_papers');
  const newquestion_paper = question_paper({
    language : data.language
  })

  exam.findByIdAndUpdate(
 "5ab3f56326fa091c96043dd3",
 { $push: {"question_papers":newquestion_paper}},
 {  safe: true, upsert: true},
   function(err, model) {
     if(err){
      console.log(err);
      return res.send(err);
     }
      return res.json(model);
  });








/*  newExam.save().then((value) => {
    console.log("Exam created successfully");
    return res.send("Exam created successfully");
  },(value) => {
    console.log("Signed Up failed");
    return res.send("Signed Up failed");
  })
*/
}
