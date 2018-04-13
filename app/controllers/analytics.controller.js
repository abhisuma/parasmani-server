'use strict';

const mongoose = require('mongoose')
const studentanalytics = mongoose.model('studentAnalytics')
const result = mongoose.model('results')
const exam = mongoose.model('Exams')
const student=mongoose.model('student');

exports.getStudentAnalytics=(req,res)=>{
  const data=req.data;
  studentanalytics.findOneById(data.id,function(err,value){
    res.json(value);
  })
};

exports.getBulkAnalytics=(req,res)=>{
  const bulkanalytics=mongoose.model('bulkAnalytics');
  const categoryAnalytics=mongoose.model('categoryAnalytics');
  const incomeAnalytics=mongoose.model('incomeAnalytics');
  const data=req.data;
  const temp={};
  bulkanalytics.findOne({},function(err,value){
    temp['bulk']=value;
  }).then((t)=>{
    categoryAnalytics.findOne({},function(err,valu){
      temp['category']=valu;
    }).then((u)=>{
      incomeAnalytics.findOne({},function(err,val){
        temp['income']=val;
        res.json(temp);
      })
    })
  })
};

exports.generateStudentAnalytics = (req,res) => {
    result.find({},function(err,doc){
      var sub = [0,0,0];

      doc.forEach(function(student_response){
        let subject = [];
        let As = [0,0,0];
        let Bs = [0,0,0];
        let Cs = [0,0,0];
        let Ds = [0,0,0];

        exam.findOne({},function(err,value){
          if(value){
            let subject = {}
            value.subjects.forEach(function(item){
              let key = item.title.toString()
              subject[key] = [0,0,0]
            })

        student_response.answer.forEach(function(response){
          if(response.set=='A'){
            As[response.correct+1]++;
          }
          else if(response.set=='B'){
            Bs[response.correct+1]++;
          }
          else if(response.set=='C'){
            Cs[response.correct+1]++;
          }
          else{
            Ds[response.correct+1]++;
          }
          subject[response.subject][response.correct+1]++
        })
        var temp=[];
        for (let k in subject) {
          var obj={
            subject:k,
            incorrect:subject[k][0],
            unattempted:subject[k][1],
            correct:subject[k][2]
          }
          temp.push(obj)
        }
        console.log(student_response.student_id);
        student.findOne({'_id':student_response.student_id},function(err,val){
          console.log(val);
        // console.log(student_response.student_id)
        console.log("here");
        // console.log(mongoose.Types.ObjectId(student_response.student_id))
        let newAnalytics = studentanalytics({
          student_id: val._id,
          setA: {
            incorrect:As[0],
            unattempted:As[1],
            correct:As[2]
          },
          setB: {
            incorrect:Bs[0],
            unattempted:Bs[1],
            correct:Bs[2]
          },
          setC: {
            incorrect:Cs[0],
            unattempted:Cs[1],
            correct:Cs[2]
          },
          setD: {
            incorrect:Ds[0],
            unattempted:Ds[1],
            correct:Ds[2]
          },
          marks:As[2]-As[0]+Bs[2]-Bs[0]+Cs[2]-Cs[0]+Ds[2]-Ds[0],
          subjectvise:temp
        })
        console.log("newAnalytics")
        newAnalytics.save().then((ex) => {
          return res.json(ex)
        }) })
      }
      })
    })
  })
}



exports.generateBulkAnalytics = (req,res)=>{
  const analytics=mongoose.model('bulkAnalytics');
  var tempAnalytics={};
  studentanalytics.find({},function(err,doc){
    console.log(err,doc)

    var temp={
      setA:{correct:0,incorrect:0,unattempted:0},
      setB:{correct:0,incorrect:0,unattempted:0},
      setC:{correct:0,incorrect:0,unattempted:0},
      setD:{correct:0,incorrect:0,unattempted:0}
    }
    doc.forEach(function(value){
      temp.setA.correct+=value.setA.correct;
      temp.setA.incorrect+=value.setA.incorrect;
      temp.setA.unattempted+=value.setA.unattempted;

      temp.setB.correct+=value.setB.correct;
      temp.setB.incorrect+=value.setB.incorrect;
      temp.setB.unattempted+=value.setB.unattempted;

      temp.setC.correct+=value.setC.correct;
      temp.setC.incorrect+=value.setC.incorrect;
      temp.setC.unattempted+=value.setC.unattempted;

      temp.setD.correct+=value.setD.correct;
      temp.setD.incorrect+=value.setD.incorrect;
      temp.setD.unattempted+=value.setD.unattempted;
    });
    tempAnalytics['setvise']=temp;
    exam.findOne({},function(err,value){
      if(value){
        let subject = {}
        value.subjects.forEach(function(item){
          let key = item.title.toString()
          subject[key] = {correct:0,incorrect:0,unattempted:0}
        })

        doc.forEach(function(val){
          val.subjectvise.forEach((sub) => {
            subject[sub.subject].correct+=sub.correct;
            subject[sub.subject].incorrect+=sub.incorrect;
            subject[sub.subject].unattempted+=sub.unattempted;
          })
        })
        console.log(subject)
        let subList = []
        for(let k in subject) {
          subList.push({
            subject: k,
            correct: subject[k].correct,
            incorrect: subject[k].incorrect,
            unattempted: subject[k].unattempted,
          })
        }
        tempAnalytics['subjectvise']=subList;
        const newAnalytics=analytics({
          setvise:tempAnalytics.setvise,
          subjectvise:tempAnalytics.subjectvise
        })
        newAnalytics.save().then((val) => {
          return res.json(val)
        })
      }
    })

  })
}


exports.generateCategoryAnalytics = (req,res) => {
  const categoryAnalytics=mongoose.model('categoryAnalytics');
  function categoryvalues(cat){
    studentanalytics.find({}).populate('student_id').exec(function(err,doc){
      var tempAnalytics={};
      exam.findOne({},function(err,value){
        if(value){
          let subject = {}
          value.subjects.forEach(function(item){
            let key = item.title.toString()
            subject[key] = {correct:0,incorrect:0,unattempted:0}
          })
          doc.forEach(function(val){
            if(val.student_id.category==cat)
            {
            val.subjectvise.forEach((sub) => {
              subject[sub.subject].correct+=sub.correct;
              subject[sub.subject].incorrect+=sub.incorrect;
              subject[sub.subject].unattempted+=sub.unattempted;
            })
          }
          })
          let subList = []
          for(let k in subject) {
            subList.push({
              subject: k,
              correct: subject[k].correct,
              incorrect: subject[k].incorrect,
              unattempted: subject[k].unattempted,
            })
          }
          tempAnalytics['subjectvise']=subList;
          const newC=categoryAnalytics({
            category:cat,
            subjectvise:subList
          })
          newC.save();
        }
      })
    });

  }
  var categories=['General','SC','ST','OBC','Other'];
  categories.forEach((val) => {
    categoryvalues(val)
  });
  return res.send("done");
}


exports.generateincomeAnalytics = (req,res) => {
  const incomeAnalytics=mongoose.model('incomeAnalytics');
  function cardvalues(car){
    studentanalytics.find({}).populate('student_id').exec(function(err,doc){
      var tempAnalytics={};
      exam.findOne({},function(err,value){
        if(value){
          let subject = {}
          value.subjects.forEach(function(item){
            let key = item.title.toString()
            subject[key] = {correct:0,incorrect:0,unattempted:0}
          })
          doc.forEach(function(val){
            if(val.student_id.incomeCard==car)
            {
            val.subjectvise.forEach((sub) => {
              subject[sub.subject].correct+=sub.correct;
              subject[sub.subject].incorrect+=sub.incorrect;
              subject[sub.subject].unattempted+=sub.unattempted;
            })
          }
          })
          let subList = []
          for(let k in subject) {
            subList.push({
              subject: k,
              correct: subject[k].correct,
              incorrect: subject[k].incorrect,
              unattempted: subject[k].unattempted,
            })
          }
          tempAnalytics['subjectvise']=subList;
          const newC=incomeAnalytics({
            incomeCard:car,
            subjectvise:subList
          })
          newC.save();
        }
      })
    });

  }
  var incomeCards=['BPL','APL'];
  incomeCards.forEach((val) => {
    cardvalues(val)
  });
  return res.send("done");
}
