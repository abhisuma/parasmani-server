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
  console.log(data);
  const Exam = mongoose.model('Exams');
  const newExam = Exam({
    exam_name : data.name,
    instruction : data.instruction
  })
  data.languages.forEach(function(value){
    const question_paper = mongoose.model('Question_papers');
    const newquestion_paper = question_paper({
      language : value
    })
    var id = newExam._id;
    const answerkey = mongoose.model('Answerkey');
    const newanswerkey= answerkey({
      questionPaperId:newquestion_paper._id
    })
    Exam.findByIdAndUpdate(
   id,
   { $push: {"question_papers":newquestion_paper}},
   {  safe: true, upsert: true},
     function(err, model) {
       if(err){
        console.log(err);
        return res.send(err);
       }
        return res.json(model);
    });

    Exam.findByIdAndUpdate(
   id,
   { $push: {"answerkey":newanswerkey}},
   {  safe: true, upsert: true},
     function(err, model) {
       if(err){
        console.log(err);
        return res.send(err);
       }
        return res.json(model);
    });
  });
  const batch = mongoose.model('Batches');

  data.batches.forEach(function(value){
    const newbatch= batch({
      batch_number: value.key,
      start_time: value.start,
      duration: value.duration  //enter duration in minutes
//      number_of_students: Number
    })
    Exam.findByIdAndUpdate(
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
  })

data.subjects.forEach(function(value){
  var subject = {
    title : value.title,
    num_in_set_A: value.NoQA,
    num_in_set_B: value.NoQB,
    num_in_set_C: value.NoQC,
    num_in_set_D: value.NoQD
  }
  Exam.findByIdAndUpdate(
 id,
 { $push: {"subjects":subject}},
 {  safe: true, upsert: true},
   function(err, model) {
     if(err){
      console.log(err);
      return res.send(err);
     }
      return res.json(model);
  });
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
