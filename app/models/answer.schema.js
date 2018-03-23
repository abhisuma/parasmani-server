'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const answerschema = new Schema({
  e_id : {type :String, required:true},
  anser_key :[{q_id: String, response:String}]
})

module.exports=mongoose.model("answers",answerschema);
