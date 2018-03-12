'use strict';

exports.index = (req,res) => {
  return res.send(req.user);
  console.log(req.user);
}
