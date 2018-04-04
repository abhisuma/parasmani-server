'use strict';

const mongoose = require('mongoose');
const questionpaper=mongoose.model('Question_papers');
const exam=mongoose.model('Exams');
const answerkey=mongoose.model('Answerkey');

exports.addQuestions =(req,res) => {
  const data = req.body;
  const question = mongoose.model('Questions');
  const newquestion = question({
    title: data.title,
    subject: data.subject
    options: {
      A: {value: data.Aoption},
      B: {value: data.Boption},
      C: {value: data.Coption},
      D: {value: data.Doption}
    }
  })

  var id = req.params.id;


  if(data.set==="A"){
    questionpaper.findByIdAndUpdate(
   id,
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
  questionpaper.findByIdAndUpdate(
 id,
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
  questionpaper.findByIdAndUpdate(
 id,
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
  questionpaper.findByIdAndUpdate(
 id,
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

answerkey.findOneAndUpdate({"questionPaperId": id}, {$push:{"answers":{"question_id":newquestion._id,"answer_id":data.answer}}},{  safe: true, upsert: true},function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }

    console.log(doc);
    res.send("done");
});

}
