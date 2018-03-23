const mongoose = require('mongoose');

const schema = mongoose.Schema;

var questionSchema = new schema({
  title: String,
  options: {
    A: String,
    B: String,
    C: String,
    D: String
  }
});

module.exports = mongoose.model('Questions',questionSchema);
