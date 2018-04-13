'use strict';

const mongoose = require('mongoose');
const student=mongoose.model('student');


exports.getStudent=(req,res)=>{
  student.find({},function(err,doc){
    res.json(doc);
  })
}

exports.deleteStudent=(req,res)=>{
  const data = req.body
  student.findByIdAndRemove(data.id,function(err,doc){
    console.log(err,doc);
    if(err){
    }
    else{
      res.send("done");
    }
  })

}
