const db = require("../models");

exports.createUser = function (req, res) {
  const body = req.body;
  db.User.create({
    firstName: body.firstName,
    lastName: body.lastName,
    email: body.email,
    phoneNumber: body.phoneNumber,
  }).then(result => {
    return res.json(result)
  })
}

exports.getAllUsers = function (req, res) {
  db.User.findAll({}).then(result => {
    return res.json(result)
  })
}

exports.getUserByEmail = function (res, res) {
  db.User.findAll({
    where: {
      email: req.params.email
    }
  }).then(result => {
    return res.json(result)
  })
}