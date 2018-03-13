const mongoose = require('mongoose');

const schema = mongoose.Schema;

var questionSchema = new schema({
  title: String,
  options: {
    A: String,
    B: String,
    C: String,
    D: String
  },
  answer:{
    type: String,
    enum: ['A','B','C','D']
  }
});

module.exports = mongoose.model('Questions',questionSchema);
