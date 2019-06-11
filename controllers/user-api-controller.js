const db = require("../models");

exports.createUser = function (req, res) {
  const body = req.body;
  db.User.create(
    {
      firstName: body.firstName, // str
      lastName: body.lastName, // str
      email: body.email, // str
      phoneNumber: body.phoneNumber, // str
    }
  ).then(result => {
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
  db.User.findAll(
    {
      where: {
        email: req.body.email // str
      }
    }
  ).then(result => {
    return res.json(result)
  }).catch(err => {
    res.json(err);
  })
}

// Get all bills associated with a user email
exports.getBillsForUser = function (req, res) {
  userEmail = req.body.email // str
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

// Connects a User to a Bill. Adds a row in the UserBill table. 
// On success returns json of new entry in UserBill table 
// On failure (bill or user does not exist) return empty object {}
// If entry in UserBill already exists returns void 
exports.addBillToUser = function (req, res) {
  const userEmail = req.body.email; // str
  const billId = req.body.billId; // int
  const percentOwed = req.body.percentOwed; // int
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

        user[0].addBill(bill[0], {
          through: { percentOwed: percentOwed } // allows percentOwed field addition
        }
        ).then(result => {
          res.json(result)
        });
      })
      .catch(err => {
        console.log(err)
        res.json(err)
      })
  }).catch(err => {
    console.log(err)
    res.json(err);
  });
}


