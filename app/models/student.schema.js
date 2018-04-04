const mongoose = require('mongoose');
const User = require('./user.schema.js');

const Schema = mongoose.Schema;

var options = { discriminatorKey: 'kind' };

const studentSchema = new Schema({
  firstname: String,
  middlename: String,
  lastname: String,
  gender: String,
  batch: String,
  aadharNo: String,
  contactNo: String,
  email: String,
  eduQuali: String,
  marStats: String,
  jobExp: Number,
  caste: String,
  category: String,
  income: Number,
  incomeCard:String,
  religion: String,
  nationality: String,
  password: String
},options);

module.exports = User.discriminator('student',studentSchema);
