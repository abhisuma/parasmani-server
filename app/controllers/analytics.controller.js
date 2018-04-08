'use strict';

const mongoose = require('mongoose')
const studentanalytics = mongoose.model('studentAnalytics')
const result = mongoose.model('results')
const exam = mongoose.model('Exams')

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
        // console.log(student_response.student_id)
        // console.log(mongoose.Types.ObjectId(student_response.student_id))
        let newAnalytics = studentanalytics({
          student_id: mongoose.Types.ObjectId(student_response.student_id),
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
          subjectvise:temp
        })
        console.log("newAnalytics")
        newAnalytics.save().then((ex) => {
          console.log(ex);
        })
      }
      })
    })
  })
}



exports.getBulkAnalytics = (req,res)=>{
  const analytics=mongoose.model('bulkAnalytics');
  const tempAnalytics={};
  studentanalytics.find({},function(err,doc){
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
      tempAnalytics['setvise']=temp;
    });
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
        newAnalytics.save()
      }
    })

  })
}
