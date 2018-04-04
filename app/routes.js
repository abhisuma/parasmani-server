'use strict';

const express  = require('express');
const router = express.Router()
const Middlewares  = require('./middlewares/index');
const Controllers = require('./controllers/index');

router.get('/',Middlewares.auth,Controllers.homeController.index);
//router.post('/signup',Middlewares.jsonParser,Controllers.registrationController.signUp);
router.post('/login',Middlewares.jsonParser,Controllers.loginController.login);


router.post('/signup/admin',Middlewares.jsonParser,Controllers.registrationController.signUpAdmin);
router.post('/signup/student',Middlewares.jsonParser,Controllers.registrationController.signUpStudent);
router.post('/signup/questionAdder',Middlewares.jsonParser,Controllers.registrationController.signUpQuestionAdder);
router.post('/signup/collaborator',Middlewares.jsonParser,Controllers.registrationController.signUpCollaborator);

router.post('/addExam',Middlewares.jsonParser,Controllers.examController.addExam);
router.put('/questions/:id',Middlewares.jsonParser,Controllers.questionController.addQuestions);
router.put('/exams/addQuestionPaper/:id',Middlewares.jsonParser,Controllers.questionpaperController.addpaper);
router.put('/exams/addBatches/:id',Middlewares.jsonParser,Controllers.examController.addBatches);
router.get('/exams',Controllers.examController.getExam);
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
