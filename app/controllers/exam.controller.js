'use strict';

const mongoose = require('mongoose');
const batch = mongoose.model('Batches');

function strToTime (time) {
  let dd = time.slice(0,2)
  let mm = time.slice(2,4)
  let yyyy = time.slice(4,8)
  let hr = time.slice(8,10)
  let min = time.slice(10,12)
  let date = new Date(`${yyyy}-${mm}-${dd}T${hr}:${mm}:00`);
  return date
}

exports.getExam=(req,res)=>{
  const Exam = mongoose.model('Exams');
  Exam.findOne({},'exam_name batches instruction subjects question_papers',function(err, model) {
       if(err){
        console.log(err);
        return res.send(err);
       }
       //console.log(model);
        return res.json(model);
    });
}


exports.getSubjects=(req,res)=>{
  const Exam = mongoose.model('Exams');
  Exam.findOne({},'subjects',function(err, model) {
       if(err){
        console.log(err);
        return res.send(err);
       }
       var ar=[];
       model['subjects'].forEach(function(value){
         ar.push(value);
       });
       res.send(ar);
    });
}


exports.getLanguages=(req,res)=>{
  const Exam = mongoose.model('Exams');
  Exam.findOne({},'question_papers',function(err, model) {
    if(err){
     console.log(err);
     return res.send(err);
    }
    var ar=[];
    model['question_papers'].forEach(function(value){
      ar.push(value.language);
    });
    res.send(ar);
 });
}

exports.getBatches=(req,res)=>{
  const Exam = mongoose.model('Exams');
  Exam.findOne({},'batches',function(err, model) {
    if(err){
     console.log(err);
     return res.send(err);
    }
    var ar=[];
    model['batches'].forEach(function(value){
      ar.push(value);
    });
    res.send(ar);
 });
}

exports.addExam =(req,res) => {
  const data = req.body;
  const Exam = mongoose.model('Exams');
  const newExam = Exam({
    "exam_name" : data.name,
    "instruction" : data.instructions,
    "duration": data.duration  //enter duration in minutes
  })

  newExam.save().then((value) => {
    console.log("Exam created successfully");
    let id = newExam._id;
    // return res.send("Exam created successfully");


  data.languages.forEach(function(value){
    const question_paper = mongoose.model('Question_papers');
    const newquestion_paper = question_paper({
      language : value.title
    })
    const answerkey = mongoose.model('Answerkey');
    const newanswerkey= answerkey({
      language:newquestion_paper.language
    })
    Exam.findOneAndUpdate(
   {},
   { $push: {"question_papers":newquestion_paper}},
   {  safe: true, upsert: true},
     function(err, model) {
       if(err){
        console.log(err);
       }
    });

    Exam.findOneAndUpdate(
   {},
   { $push: {
     "answerkey":newanswerkey,
 }},
   {  safe: true, upsert: true},
     function(err, model) {
       if(err){
        console.log(err);
       }
    });
  });


  data.batches.forEach(function(value){
    const newbatch= batch({
      batch_number: value.key,
      start_time: strToTime(value.start),
//      number_of_students: Number
    })
    Exam.findOneAndUpdate(
   {},
   { $push: {"batches":newbatch}},
   {  safe: true, upsert: true},
     function(err, model) {
       if(err){
        console.log(err);
       }
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
  Exam.findOneAndUpdate(
 {},
 { $push: {"subjects":subject}},
 {  safe: true, upsert: true},
   function(err, model) {
     if(err){
      console.log(err);
     }
  });
})
return res.send(newExam);
});
// console.log(newExam)

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
