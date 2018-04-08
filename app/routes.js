'use strict';

const express  = require('express');
const router = express.Router()
const Middlewares  = require('./middlewares/index');
const Controllers = require('./controllers/index');

router.get('/',Middlewares.auth,Middlewares.studentBatchCheck,Controllers.homeController.index);
//router.post('/signup',Middlewares.jsonParser,Controllers.registrationController.signUp);
router.post('/login',Middlewares.jsonParser,Controllers.loginController.login);
router.post('/login/student',Middlewares.jsonParser,Controllers.loginController.login);


router.post('/signup/admin',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.registrationController.signUpAdmin);
router.post('/signup/student',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.registrationController.signUpStudent);


router.post('/addExam',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.examController.addExam);
router.post('/addQuestion',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.questionController.addQuestions);

router.get('/exam',Middlewares.auth,Middlewares.adminCheck,Controllers.examController.getExam);
router.get('/examStudent',Middlewares.auth,Middlewares.studentBatchCheck,Controllers.examController.getExam);

router.get('/students',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.studentController.getStudent)
router.get('/subjects',Middlewares.auth,Controllers.examController.getSubjects);
router.get('/languages',Middlewares.auth,Controllers.examController.getLanguages);
router.get('/batches',Middlewares.auth,Controllers.examController.getBatches);

router.post('/response',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.responseController.addResponse)
router.get('/generateResults',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.resultController.generateResult)
router.get('/studentAnalytics',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.analyticsController.generateStudentAnalytics)
router.get('/bulkAnalytics',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.analyticsController.getBulkAnalytics)

router.delete('/students',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.studentController.deleteStudent)
module.exports = router;
//5ab94284c5961d121c9ec97b
//5ab943afc5961d121c9ec97c
/*
{ languages: [ { key: 0, title: 'english' }, { key: 1, title: 'hindi' } ],
  title: 'kani',
  duration: '123',
  batches:
   [ { key: 0, title: '122121212121' },
     { key: 1, title: '234234234356' } ],
  subjects:
   [ { key: 0, title: 'eng', NoQA: '1', NoQB: '1', NoQC: '1', NoQD: '1' },
     { key: 0, title: 'bio', NoQA: '2', NoQB: '4', NoQC: '2', NoQD: '1' } ] }
*/
