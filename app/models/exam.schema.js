const mongoose = require('mongoose');
const schema = mongoose.Schema;

const questionadderschema = require('./questionadder.schema.js').schema
const studentschema=require('./student.schema.js').schema;
const questionpaperschema=require('./questionpaper.schema.js').schema;

const examschema =new schema({
  exam_name: String,
  date: String,
  instruction: String,
  num_in_set_A: Number,
  num_in_set_B: Number,
  num_in_set_C: Number,
  num_in_set_D: Number,
  question_papers:[questionpaperschema]
//  question_adders = [String],
//  students = [String]              //specify unique aadhar number
});

module.exports = mongoose.model('Exams',examschema);
