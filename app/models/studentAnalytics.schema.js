var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const student = mongoose.model('student');

const studentAnalyticsSchema = new Schema({
  student_id : {type : Schema.Types.ObjectId, ref:'student',unique:true},
  setA:{
    correct: Number,
    incorrect:Number,
    unattempted:Number
  },
  setB:{
    correct: Number,
    incorrect:Number,
    unattempted:Number
  },
  setC:{
    correct: Number,
    incorrect:Number,
    unattempted:Number
  },
  setD:{
    correct: Number,
    incorrect:Number,
    unattempted:Number
  },
  marks:Number,
  subjectvise:[{
    subject: String,
    correct: Number,
    incorrect:Number,
    unattempted:Number
  }]
})


module.exports = mongoose.model('studentAnalytics',studentAnalyticsSchema);
