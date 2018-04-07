'use strict';

const homeController = require('./home.controller');
const registrationController = require('./registration.controller');
const loginController = require('./login.controller');
const examController = require('./exam.controller');
const questionController = require('./question.controller.js');
const questionpaperController = require('./questionpaper.controller.js');
const responseController = require('./response.controller.js');
const resultController = require('./result.controller.js');
const analyticsController = require('./analytics.controller')

module.exports = {
  homeController,
  registrationController,
  loginController,
  examController,
  questionController,
  questionpaperController,
  responseController,
  resultController,
  analyticsController
}
