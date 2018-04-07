'use strict';

const mongoose = require('mongoose')
const studentanalytics = require('studentAnalytics')

exports.generateStudentAnalytics = (req,res) => {
    response.find({},function(err,doc){
      var sub = [0,0,0];

      doc.forEach(function(student_response){
        var subject=new map();
        var As= [0,0,0],Bs=[0,0,0],Cs= [0,0,0],Ds=[0,0,0];

        exam.findOne({},function(err,value){
            value.subjects.forEach(function(item){
              subject.set(value.title,[0,0,0]);
            })
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
          subject[response.subject][response.correct+1]++;
        })
        var temp=[];
        for (let [k, v] of subject) {
          var obj={
            subject:k,
            incorrect:v[0],
            unattempted:v[1],
            correct:v[2]
          }
          temp.push(obj)
        }

        const newAnalytics = studentanalytics({
          student_id: new Mongo.ObjectID(student_response.student_id),
          setA.incorrect:As[0],
          setA.unattempted:As[1],
          setA.correct:As[2],

          setB.incorrect:As[0],
          setB.unattempted:As[1],
          setB.correct:As[2],

          setC.incorrect:As[0],
          setC.unattempted:As[1],
          setC.correct:As[2],

          setD.incorrect:As[0],
          setD.unattempted:As[1],
          setD.correct:As[2],

          subjectvise:temp

        })

        newAnalytics.save().then(ex){
          console.log(ex);
        }
      })
    })
}
