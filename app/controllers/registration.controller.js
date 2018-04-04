'use strict';

const mongoose = require('mongoose')


exports.signUpStudent = (req,res) => {
  const data = req.body;
  const User = mongoose.model('student');
  const newUser = User({
    firstname: this.firstName,
    middlename: this.middleName,
    lastname: this.lastName,
    gender: this.gender,
    batch: this.batch,
    aadharNo: this.aadharNo,
    contactNo: this.contactNo,
    email: this.email,
    eduQuali: this.eduQuali,
    marStats: this.marStats,
    jobExp: this.jobExp,
    caste: this.caste,
    category: this.category,
    income: this.income,
    incomeCard:this.incomeCard,
    religion: this.religion,
    nationality: this.nationality,
    password: this.password
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
