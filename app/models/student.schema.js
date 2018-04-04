const mongoose = require('mongoose');
const User = require('./user.schema.js');

const Schema = mongoose.Schema;

var options = { discriminatorKey: 'kind' };

const studentSchema = new Schema({
  institute: String,
  exam_id: String,
  batch_name: String
},options);

module.exports = User.discriminator('student',studentSchema);
