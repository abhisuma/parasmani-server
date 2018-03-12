'use strict';

const express  = require('express');
const passport = require('passport');
let app = express();

require('dotenv').config();
const bootstrap = require('./app/config/bootstrap');

const routes = require('./app/routes');

app.use(passport.initialize())
app.use('/',routes);
app.listen(process.env.PORT);

const mongoose = require('mongoose');
const User = mongoose.model('User');
