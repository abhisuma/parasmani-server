'use strict';

const mongoose = require('mongoose')


exports.signUp = (req,res) => {
  const data = req.body;
  const User = mongoose.model('User');
  const newUser = User({
    firstname: data.firstname,
    lastname: data.lastname,
    email:data.email,
    mobile:data.mobile,
    userId:data.userId,
    password:data.password,
  })

  newUser.save().then((value) => {
    console.log("Signed Up successfully");
    return res.send("Signed Up successfully");
  },(value) => {
    console.log("Signed Up failed");
    return res.send("Signed Up failed");
  })

}
