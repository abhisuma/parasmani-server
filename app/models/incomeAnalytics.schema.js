var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const incomeAnalyticsSchema=new Schema({
  incomeCard:String,
  subjectvise:[{
    subject: String,
    correct: Number,
    incorrect:Number,
    unattempted:Number
  }]
})

module.exports=mongoose.model('incomeAnalytics',incomeAnalyticsSchema);
