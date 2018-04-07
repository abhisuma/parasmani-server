var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const student = mongoose.model('student');

const studentAnalyticsSchema=new Schema({
  student_id : {type : Schema.Types.ObjectId, ref:'student'},
  setvise:[{
    set: String,
    correct: Number,
    incorrect:Number,
    unattempted:Number
  }],
  subjectvise:[{
    subject: String,
    correct: Number,
    incorrect:Number,
    unattempted:Number
  }]
})


module.exports = mongoose.model('studentAnalytics',studentAnalyticsSchema);
