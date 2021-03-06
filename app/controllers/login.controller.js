//routes/auth.js

const jwt = require('jsonwebtoken');
const passport = require("passport");

/* POST login. */
exports.login = (req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(user)
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
       req.login(user, {session: false}, (err) => {
           if (err) {
               res.send(err);
           }
           // generate a signed son web token with the contents of user object and return it in the response
           const token = jwt.sign(user, 'your_jwt_secret');
           console.log(user)
           return res.json({
             token: token,
             user: {
               _id:user._id,
               userId:user.username,
               kind:user.kind
             }
           });
        });
    })(req, res);
}
