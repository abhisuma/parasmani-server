const passport = require('passport');
const passportJWT = require("passport-jwt");
const JWTStrategy   = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = mongoose.model('User');


passport.use(new LocalStrategy({
        usernameField: 'userId',
        passwordField: 'password'
      },
      function (userId, password, callb) {
          //this one is typically a DB call. Assume that the returned user object is pre-formatted and ready for storing in JWT
          return User.findOne({userId}).then(user => {
                 if (user != null) {
                   return user.comparePassword(password,(err,isMatch)=>{
                     if(!isMatch){
                       return callb(null, false, {message: 'Incorrect email or password.'});
                     }
                     else{
                       return callb(null, user.toJSON(), {message: 'Logged In Successfully'});
                     }
                   });
                 }
                 return callb(null, false, {message: 'Incorrect email or password.'});
            })
            .catch(err => callb(err));
      }
));

passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey   : 'your_jwt_secret'
    },
    function (jwtPayload, cb) {
        //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
        return User.findOne({id:jwtPayload.id})
            .then(user => {
                return cb(null, user);
            })
            .catch(err => {
                return cb(err);
            });
    }
));
