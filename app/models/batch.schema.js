const mongoose = require('mongoose');
const schema = mongoose.Schema;

const batchschema=new schema({
  batchname: String,
  start_time: Date,
  end_time: Date,
  number_of_students: Number
});

module.exports = mongoose.model('Batches',batchschema);
