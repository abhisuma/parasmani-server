const mongoose = require('mongoose');

process.env.NODE_ENV = 'development';

mongoose.connect(`mongodb://localhost:27017`);
//mongoose.connect(`mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`);
require('../models');
require('./passport');

const qa = mongoose.model("Questions");
const l=mongoose.model("Exams");

const p = qa({
  title: 'question title',
  options:{
    A: 'jfhkc',
    B: 'shdsk',
    C: 'ahsha',
    D: 'kdhf'
  },
  answer: 'A'
})

p.save();
const t= l({
  domain: "sfdsfdf",
  questionPapers:[
    {
      language: 'English',
      sets:{
        A:[p]
      }
    }
  ]
})
t.save();
l.find({},(error,user)=>{
  console.log(user);
})

module.exports = {
  mongoose,
}
