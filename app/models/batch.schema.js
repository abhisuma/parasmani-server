const mongoose = require('mongoose');
const schema = mongoose.Schema;

const batchschema=new schema({
  batch_number: Number,
  start_time: Date,
  end_time: Date,
  // duration: Number,  //enter duration in minutes
//  number_of_students: Number
});

module.exports = mongoose.model('Batches',batchschema);
