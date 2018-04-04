const mongoose = require('mongoose');

const schema = mongoose.Schema;

var questionSchema = new schema({
  title: String,
  subject: String,
  options: {
    A: {value:String,id:{type:Number,default:1}},
    B: {value:String,id:{type:Number,default:2}},
    C: {value:String,id:{type:Number,default:3}},
    D: {value:String,id:{type:Number,default:4}},
  }
});

module.exports = mongoose.model('Questions',questionSchema);
