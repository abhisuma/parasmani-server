'use strict';

const mongoose = require('mongoose');
const questionpaper=mongoose.model('Question_papers');
const exam=mongoose.model('Exams');
const answerkey=mongoose.model('Answerkey');

exports.addQuestions =(req,res) => {
  const data = req.body;
  const question = mongoose.model('Questions');
  const newquestion = question({
    title: data.question,
    subject: data.subject,
    options: {
      A: {value: data.opt1},
      B: {value: data.opt2},
      C: {value: data.opt3},
      D: {value: data.opt4}
    }
  })



  if(data.set==="A"){
    questionpaper.findOneAndUpdate(
   {"language" : data.language},
   { $push: {"A" :newquestion}},
   {  safe: true, upsert: true},
     function(err, model) {
       if(err){
        console.log(err);
  //      return res.send(err);
       }
      //  return res.json(model);
    });
}

else if(data.set==="B"){
  questionpaper.findOneAndUpdate(
 {"language" : data.language},
 { $push: {"B" :newquestion}},
 {  safe: true, upsert: true},
   function(err, model) {
     if(err){
      console.log(err);
//      return res.send(err);
     }
//      return res.json(model);
  });
}
else if(data.set==="C"){
  questionpaper.findOneAndUpdate(
 {"language" : data.language},
 { $push: {"C" :newquestion}},
 {  safe: true, upsert: true},
   function(err, model) {
     if(err){
      console.log(err);
      //return res.send(err);
     }
      //return res.json(model);
  });
}
else{
  questionpaper.findOneAndUpdate(
 {"language" : data.language},
 { $push: {"D" :newquestion}},
 {  safe: true, upsert: true},
   function(err, model) {
     if(err){
      console.log(err);
//    return res.send(err);
     }
//      return res.json(model);
  });
}

answerkey.findOneAndUpdate({"questionPaperId": id}, {$push:{"answers":{"question_id":newquestion._id,"answer_id":data.correct}}},{  safe: true, upsert: true},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
    res.send("done");
});

}
