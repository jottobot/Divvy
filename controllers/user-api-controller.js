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
  }).catch(err => {
    res.json(err);
  })
}

exports.getAllUsers = function (req, res) {
  db.User.findAll({}).then(result => {
    return res.json(result)
  }).catch(err => {
    res.json(err);
  })
}

exports.getUserByEmail = function (req, res) {
  db.User.findAll({
    where: {
      email: req.body.email
    }
  }).then(result => {
    return res.json(result)
  }).catch(err => {
    res.json(err);
  })
}

exports.getBillsForUser = function (req, res) {
  userEmail = req.body.email
  db.User.findAll(
    {
      where: {
        email: userEmail
      }
    }
  ).then(user => {
    user[0].getBill().then(bills => {
      res.json(bills)
    })
  }
  ).catch(err => {
    res.json(err)
  })
}

exports.addBillToUser = function (req, res) {
  const userEmail = req.body.email;
  const billId = req.body.billId;
  const percentOwed = req.body.percentOwed;
  db.User.findAll(
    {
      where: {
        email: userEmail
      }
    }
  ).then(user => {
    db.Bill
      .findAll({ where: { id: billId } })
      .then(bill => {

        user[0].addBill(bill[0], { through: { percentOwed: percentOwed }}).then(result => {
          res.json(result)
        });
      })
      .catch(err => {
        console.log(err)
      })
  }).catch(err => {
    console.log(err)
    res.json(err);
  });
}


