const bodyParser = require('body-parser')
const passport = require('passport');

// create application/json parser
const jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const auth = passport.authenticate('jwt', {session: false});

module.exports = {
  bodyParser,
  jsonParser,
  urlencodedParser,
  auth,
}
