const mongoose = require('mongoose');
const User = require('./user.schema.js');

const Schema = mongoose.Schema;

var options = { discriminatorKey: 'kind' };

const studentSchema = new Schema({
  firstname: String,
  middlename: String,
  lastname: String,
  gender: String,
  batchStart: Number,
  batchEnd: Number,
  aadharNo: String,
  contactNo: String,
  email: String,
  eduQuali: String,
  marStats: String,
  jobExp: String,
  caste: String,
  category: String,
  income: String,
  incomeCard:String,
  religion: String,
  nationality: String,
},options);

module.exports = User.discriminator('student',studentSchema);
