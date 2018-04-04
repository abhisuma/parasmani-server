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

router.post('/exams',Middlewares.jsonParser,Controllers.examController.addExam);
router.put('/questions/:id',Middlewares.jsonParser,Controllers.questionController.addQuestions);
router.put('/exams/addQuestionPaper/:id',Middlewares.jsonParser,Controllers.questionpaperController.addpaper);
router.put('/exams/addBatches/:id',Middlewares.jsonParser,Controllers.examController.addBatches);
router.get('/exams',Controllers.examController.getExam);
module.exports = router;
//5ab94284c5961d121c9ec97b
//5ab943afc5961d121c9ec97c
