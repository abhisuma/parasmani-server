'use strict';

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
var options = { discriminatorKey: 'kind' };
const UserSchema = new Schema({
  username: String,
  password: String
},options)

UserSchema.pre('save',function(next) {
    const user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    bcrypt.genSalt(10, function(err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  console.log(candidatePassword)
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        console.log(isMatch)
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User',UserSchema);
