'use strict';

const express  = require('express');
const router = express.Router()
const Middlewares  = require('./middlewares/index');
const Controllers = require('./controllers/index');

router.get('/',Middlewares.auth,Controllers.homeController.index);
router.post('/signup',Middlewares.jsonParser,Controllers.registrationController.signUp);
router.post('/login',Middlewares.jsonParser,Controllers.loginController.login);

module.exports = router;
