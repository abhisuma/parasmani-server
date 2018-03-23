'use strict';

const mongoose = require('mongoose');

exports.addExam =(req,res) => {
  const data = req.body;
  const Exam = mongoose.model('Exams');
  const newExam = Exam({
    exam_name : data.name,
    date : data.date,
    instruction : data.instruction,
    num_in_set_A: data.setA,
    num_in_set_B: data.setB,
    num_in_set_C: data.setC,
    num_in_set_D: data.setD,
  })
  newExam.save().then((value) => {
    console.log("Exam created successfully");
    return res.send("Exam created successfully");
  },(value) => {
    console.log("Signed Up failed");
    return res.send("Signed Up failed");
  })

}
