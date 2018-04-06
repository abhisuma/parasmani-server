'use strict';

const mongoose = require('mongoose');
const exam=mongoose.model('Exams');

exports.addResponse = (req,res) =>{
  const data = req.body;
  const response = mongoose.model('responses');
  const newresponse = response({
    student_id: data.Student_id,
    language: data.language,
    answer : data.responses
  });
  newresponse.save().then((value) => {
    console.log("Signed Up successfully");
    return res.send("Signed Up successfully");
  },(value) => {
    console.log("Signed Up failed");
    return res.send("Signed Up failed");
  })
}
