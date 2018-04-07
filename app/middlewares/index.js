const bodyParser = require('body-parser')
const passport = require('passport');

const additionalAuth = require('./authMiddlewares')

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const auth = passport.authenticate('jwt', {session: false});

const cors = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
}

module.exports = {
  bodyParser,
  jsonParser,
  urlencodedParser,
  auth,
  cors,
  studentCheck : additionalAuth.studentCheck,
  adminCheck : additionalAuth.adminCheck,
  studentBatchCheck : additionalAuth.studentBatchCheck,
}
