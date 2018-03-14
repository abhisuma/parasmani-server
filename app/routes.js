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

module.exports = router;
