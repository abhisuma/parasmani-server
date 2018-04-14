'use strict';

const express  = require('express');
const router = express.Router()
const Middlewares  = require('./middlewares/index');
const Controllers = require('./controllers/index');

router.get('/',Middlewares.auth,Middlewares.studentBatchCheck,Controllers.homeController.index);
//router.post('/signup',Middlewares.jsonParser,Controllers.registrationController.signUp);
router.post('/login',Middlewares.auth,Middlewares.jsonParser,Controllers.loginController.login);
router.post('/login/student',Middlewares.auth,Middlewares.studentCheck,Middlewares.jsonParser,Controllers.loginController.login);


router.post('/signup/admin',Middlewares.jsonParser,Controllers.registrationController.signUpAdmin);
router.post('/signup/student',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.registrationController.signUpStudent);


router.post('/addExam',Middlewares.jsonParser,Controllers.examController.addExam);
router.post('/addQuestion',Middlewares.jsonParser,Controllers.questionController.addQuestions);

router.get('/exam',Middlewares.auth,Middlewares.adminCheck,Controllers.examController.getExam);
router.get('/examStudent',Middlewares.auth,Middlewares.studentCheck,Controllers.examController.getExam);

router.get('/students',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.studentController.getStudent)
router.get('/subjects',Middlewares.auth,Controllers.examController.getSubjects);
router.get('/languages',Middlewares.auth,Controllers.examController.getLanguages);
router.get('/batches',Middlewares.auth,Controllers.examController.getBatches);

router.post('/response',Middlewares.jsonParser,Controllers.responseController.addResponse)

router.get('/generateResults',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.resultController.generateResult)
router.get('/generateStudentAnalytics',Middlewares.jsonParser,Controllers.analyticsController.generateStudentAnalytics)
router.get('/generateBulkAnalytics',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.analyticsController.generateBulkAnalytics)
router.get('/generateIncomeAnalytics',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.analyticsController.generateincomeAnalytics)
router.get('/generateCategoryAnalytics',Middlewares.jsonParser,Controllers.analyticsController.generateCategoryAnalytics)

router.post('/getStudentAnalytics',Middlewares.auth,Middlewares.studentCheck,Middlewares.jsonParser,Controllers.analyticsController.getStudentAnalytics)
router.get('/getBulkAnalytics',Middlewares.jsonParser,Controllers.analyticsController.getBulkAnalytics)



router.get('/examAll',Middlewares.auth,Middlewares.adminCheck,Controllers.examController.getAllExam);
// router.delete('/question',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.questionController.deleteQuestion);
router.post('/students',Middlewares.auth,Middlewares.adminCheck,Middlewares.jsonParser,Controllers.studentController.deleteStudent)

module.exports = router;
