var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const bulkAnalyticsSchema=new Schema({
  setvise:{
    setA:{correct:Number,incorrect:Number,unattempted:Number},
    setB:{correct:Number,incorrect:Number,unattempted:Number},
    setC:{correct:Number,incorrect:Number,unattempted:Number},
    setD:{correct:Number,incorrect:Number,unattempted:Number}
  },
  subjectvise:[{
    subject: String,
    correct: Number,
    incorrect:Number,
    unattempted:Number
  }]
})

module.exports=mongoose.model('bulkAnalytics',bulkAnalyticsSchema);
