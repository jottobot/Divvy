const db = require('../models');

const utils = require('./utils');

exports.createUser = function (req, res) {
  const body = req.body;
  db.User.create(
    {
      firstName: body.firstName, // str
      lastName: body.lastName, // str
      email: body.email, // str
      phoneNumber: body.phoneNumber, // str
      password: body.password, // str
    }
  ).then(result => {
    return res.json(result);
  }).catch(err => {
    res.json(err);
  });
};

exports.getAllUsers = function (req, res) {
  db.User.findAll({}).then(result => {
    return res.json(result);
  }).catch(err => {
    res.json(err);
  });
};

exports.getUserByEmail = function (req, res) {
  const email = req.params.email;
  db.User.findAll(
    {
      where: {
        email: email // str
      }
    }
  ).then(result => {
    return res.json(result);
  }).catch(err => {
    res.json(err);
  });
};

// Get all bills associated with a user email
exports.getBillsForUser = function (req, res) {
  userEmail = req.params.email; // str
  db.User.findAll(
    {
      where: {
        email: userEmail
      }
    }
  ).then(user => {
    user[0].getBill().then(bills => {
      res.json(bills);
    }).catch(err => {
      res.json(err);
    });
  }).catch(err => {
    res.json(err);
  });
};



// Get all bills associated with a user email and populates each user for the bill
exports.getBillsForUserPopulateUsers = function (req, res) {
  userEmail = req.params.email; // str
  db.User.findAll(
    {
      where: {
        email: userEmail
      }
    }
  ).then(user => {
    user[0].getBill().then(async function(bills) {
      const result = [];
      await utils.asyncForEach(bills, async (bill) => {
        const usersForBill = await bill.getUsers();
        result.push(usersForBill);
      });
      res.json(result);
    }).catch(err => {
      res.json(err);
    });
  }).catch(err => {
    res.json(err);
  });
};

// Connects a User to a Bill. Adds a row in the UserBill table.
// On success returns json of new entry in UserBill table
// On failure (bill or user does not exist) return empty object {}
// If entry in UserBill already exists returns void
exports.addBillToUser = function (req, res) {
  const email = req.body.email; // str
  const billId = req.body.billId; // int
  const amountOwed = req.body.amountOwed; // int
  db.User.findAll(
    {
      where: {
        email: email
      }
    }
  ).then(user => {
    db.Bill
      .findAll({ where: { id: billId } })
      .then(bill => {
        user[0].addBill(bill[0], {
          through: { amountOwed: amountOwed }
        }
        ).then(result => {
          res.json(result);
        }).catch(err => {
          console.log(err);
          return res.json(err);
        });
      })
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  }).catch(err => {
    console.log(err);
    res.json(err);
  });
};


