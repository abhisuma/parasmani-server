'use strict';

const mongoose = require('mongoose');

exports.addExam =(req,res) => {
  const data = req.body;
  const Exam = mongoose.model('Exams');
  const newExam = Exam({
    date : data.date,
    domain : data.domain,
  })
  newExam.save().then((value) => {
    console.log("Signed Up successfully");
    return res.send("Signed Up successfully");
  },(value) => {
    console.log("Signed Up failed");
    return res.send("Signed Up failed");
  })

}
