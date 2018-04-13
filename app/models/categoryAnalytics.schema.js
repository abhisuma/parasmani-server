var mongoose = require('mongoose');
var Schema = mongoose.Schema;


const categoryAnalyticsSchema=new Schema({
  category:String,
  subjectvise:[{
    subject: String,
    correct: Number,
    incorrect:Number,
    unattempted:Number
  }]
})

module.exports=mongoose.model('categoryAnalytics',categoryAnalyticsSchema);
