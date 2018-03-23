'use strict';

const mongoose = require('mongoose');

exports.addQuestions = (req,res) => {
  const data = req.body;
  const Exam = mongoose.model('Exams');
  Exam.findOne({date : data.date,domain : data.domain},function(err,docs){
    console.log(docs);
    if(docs === null){
      console.log("yaasss");
    }
  })
}
