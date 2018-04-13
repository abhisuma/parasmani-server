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

  var newanswer ={
      question_id:newquestion._id,
      answer_id:data.correct
    };


    let pushData =
  (data.difficulty == 'A' ? {'question_papers.$.A' :newquestion} : data.difficulty == 'B' ? {'question_papers.$.B' :newquestion} : data.difficulty == 'C' ? {'question_papers.$.C' :newquestion} : {'question_papers.$.D' :newquestion} )

  exam.findOne({}).then((ex) => {
    console.log(ex);
    var id = ex._id;
    exam.update({_id : id,"question_papers.language" : data.language},
      {$push : pushData},{upsert: true}, function(err, docs){
//        res.json(docs);
//        console.log(docs);
        });
    exam.update({_id : id,"answerkey.language" : data.language},
      {$push : {'answerkey.$.answers' : newanswer}},{upsert: true}, function(err, docs){
        res.json(docs);
    //        console.log(docs);
        });
    });



}

exports.deleteQuestion=(req,res)=>{
  const data = req.body
  var id=new mongoose.Types.ObjectId(data.id)
  let pullData =
(data.difficulty == 'A' ? {'question_papers.$.A' :{'_id':id}} : data.difficulty == 'B' ? {'question_papers.$.B' :{'_id':id}} : data.difficulty == 'C' ? {'question_papers.$.C' :{'_id':id}} : {'question_papers.$.D' :{'_id':id}} )

  console.log(pullData)
  exam.findOne({}).then((ex) => {
    var eid = ex._id;
    exam.update({_id : eid,"question_papers.language" : data.language},
      {$pull : pullData}, function(err, docs){
       // res.json("err");
       console.log(docs,err);
     });
    exam.update({_id : eid,"answerkey.language" : data.language},
      {$pull : {'answerkey.$.answers' : {'question_id':id}}},{upsert: true}, function(err, docs){
        // res.json(docs);
    //        console.log(docs);
        });

})
}

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
