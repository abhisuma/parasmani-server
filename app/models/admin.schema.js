const mongoose = require('mongoose');
const User = require('./user.schema.js');

const Schema = mongoose.Schema;

var options = { discriminatorKey: 'kind' };

const adminSchema = new Schema({
  institute: String
},options);

module.exports = User.discriminator('admin',adminSchema);
