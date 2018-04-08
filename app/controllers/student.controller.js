'use strict';

const mongoose = require('mongoose');
const student=mongoose.model('student');


exports.getStudent=(req,res)=>{
  student.find({},function(err,doc){
    res.json(doc);
  })
}

exports.deleteStudent=(req,res)=>{
  student.findByIdAndDelete(data.id,function(err,doc){
    if(err){
      console.log(err);
      res.send("error");
    }
    else{
      res.send("done");
    }
  })

}
