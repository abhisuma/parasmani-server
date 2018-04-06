'use strict';

const mongoose = require('mongoose');
const exam=mongoose.model('Exams');



exam.findOne({},function(err,doc){
  doc.answerkey.forEach(function(value){
    console.log("abhishek");
  })
})
