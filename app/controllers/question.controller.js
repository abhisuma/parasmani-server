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
  data.language = "english"

  let pushData =
  (data.difficulty == 'A' ? {'A' :newquestion} : data.difficulty == 'B' ? {'B' :newquestion} : data.difficulty == 'C' ? {'C' :newquestion} : {'D' :newquestion} )

  exam.question_papers.findOne({"language":data.language}
).then((ex) => {
    console.log(ex)
  })


  //   console.log(data.language)
  // questionpaper.findOneAndUpdate(
  //  {"language" : data.language},
  //  { $push: pushData},
  //  {  safe: true, upsert: true},
  //    function(err, model) {
  //      if(err){
  //       console.log(err);
  //      }
  // }).then((val)=>{
  //   answerkey.findOneAndUpdate({"questionPaperId": val['_id']}, {$push:{"answers":{"question_id":newquestion._id,"answer_id":data.correct}}},{  safe: true, upsert: true},function(err, doc){
  //       if(err){
  //           console.log("Something wrong when updating data!");
  //       }
  //       console.log(doc);
  //       res.send("done");
  //   }).then((t) => {
  //     console.log(val)
  //   })
  //
  // })

  //   // console.log(qp)


}
