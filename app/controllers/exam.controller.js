'use strict';

const mongoose = require('mongoose');

exports.getExam=(req,res)=>{
  const Exam = mongoose.model('Exams');
  Exam.findOne({},'exam_name batches instruction subjects question_papers',function(err, model) {
       if(err){
        console.log(err);
        return res.send(err);
       }
        return res.json(model);
    });
}

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

exports.addBatches =(req,res) => {
  const data = req.body;
  const batch = mongoose.model('Batches');
  const newbatch = batch({
    batchname: data.name,
    date: data.date,
    start_time: data.start_time,
    end_time: data.end_time,
    number_of_students: data.number_of_students
  });
  var id = req.params.id;
  exam.findByIdAndUpdate(
 id,
 { $push: {"batches":newbatch}},
 {  safe: true, upsert: true},
   function(err, model) {
     if(err){
      console.log(err);
      return res.send(err);
     }
      return res.json(model);
  });
}
