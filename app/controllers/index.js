'use strict';

const homeController = require('./home.controller');
const registrationController = require('./registration.controller');
const loginController = require('./login.controller');
const examController = require('./exam.controller');
const questionController = require('./question.controller.js');
const questionpaperController = require('./questionpaper.controller.js')

module.exports = {
  homeController,
  registrationController,
  loginController,
  examController,
  questionController,
  questionpaperController
}
