exports.studentCheck = function (req, res, next) {
  if (req.user.kind == "student") {
    next()
  } else {
    res.send("Error : The user is not a student")
  }
}

exports.adminCheck = function (req, res, next) {
  if (req.user.kind == "admin") {
    next()
  } else {
    res.send("Error : The user is not an Admin")
  }
}

exports.studentBatchCheck = function (req, res, next) {
  if (req.user.kind == "admin") {
    next()
  } else if (req.user.kind == "student") {
    if (req.user.batchStart <= Date.parse(Date()) && Date.parse(req.user.batchEnd) >= Date.parse(Date())) {
      next()
    } else {
      res.send("Error : The Student cannot give exam in the given time slot.")
    }
    }
}
