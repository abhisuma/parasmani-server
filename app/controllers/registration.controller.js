'use strict';

const mongoose = require('mongoose')


exports.signUpStudent = (req,res) => {
  const data = req.body;
  const User = mongoose.model('student');
  const newUser = User({
    firstname: data.firstName,
    middlename: data.middleName,
    lastname: data.lastName,
    gender: data.gender,
    batch: data.batch,
    aadharNo: data.aadharNo,
    contactNo: data.contactNo,
    email: data.email,
    eduQuali: data.eduQuali,
    marStats: data.marStats,
    jobExp: data.jobExp,
    caste: data.caste,
    category: data.category,
    income: data.income,
    incomeCard:data.incomeCard,
    religion: data.religion,
    nationality: data.nationality,
    password: data.aadharNo,
    username:data.aadharNo
  })

  newUser.save().then((value) => {
    console.log("Signed Up successfully");
    return res.send("Signed Up successfully");
  },(value) => {
    console.log("Signed Up failed");
    return res.send("Signed Up failed");
  })

}

exports.signUpAdmin = (req,res) => {
  const data = req.body;
  const User = mongoose.model('admin');
  const newUser = User({
    password: data.password,
    username:data.userId
  })

  newUser.save().then((value) => {
    console.log(value);
    return res.send("Signed Up successfully");
  },(value) => {
    console.log(value);
    return res.send(value.toString());
  })

}


exports.signUpQuestionAdder = (req,res) => {
  const data = req.body;
  const User = mongoose.model('Questionadder');
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



exports.signUpCollaborator = (req,res) => {
  const data = req.body;
  const User = mongoose.model('collaborators');
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
