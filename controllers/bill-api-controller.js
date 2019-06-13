const db = require('../models');


// GET route for getting all of the bills
exports.getAllBills = function (req, res) {
  // findAll returns all entries for a table when used with no options
  db.Bill.findAll({}).then(function (bills) {
    // We have access to the todos as an argument inside of the callback function
    res.json(bills);
  });
};

// Get all users for a bill id. Populates UserBill property for each user
exports.getUsersForBill = function (req, res) {
  const billId = req.params.billId; // billId: integer

  db.Bill.findAll(
    {
      where: {
        id: billId
      }
    }
  ).then(bill => {
    bill[0].getUsers().then(users => {
      res.json(users);
    }).catch(err => {
      console.log(err);
    });
  }
  ).catch(err => {
    console.log(err);
    res.json(err);
  });
};

// POST route for saving a new bill
exports.postNewBill = function (req, res) {
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property
  db.Bill.create(
    {
      title: req.body.title, // str
      Company: req.body.Company, // str
      Amount: req.body.Amount, // float
      BillDue: req.body.BillDue, // date
      BillPaid: req.body.BillPaid, // bool
    }
  ).then(function (newBill) {
    // We have access to the new bill as an argument inside of the callback function
    res.json(newBill);
  }).catch(function (err) {
    res.json(err);
  });
};

// DELETE route for deleting bills. We can get the id of the bill to be deleted from
// req.params.id
exports.billDelete = function (req, res) {
  // We just have to specify which bill we want to destroy with "where"
  db.Bill.destroy({
    where: {
      id: req.params.id
    }
  }).then(function (result) {
    res.json(result);
  }).catch(function (err) {
    res.json(err);
  });
};

// PUT route for updating todos. We can get the updated todo data from req.body
exports.update = function (req, res) {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  db.Bill.update(
    {
      title: req.body.title, // str
      Company: req.body.Company, // str
      Amount: req.body.Amount, // float
      BillDue: req.body.BillDue, // date
      BillPaid: req.body.BillPaid, // bool
    },
    {
      where: {
        id: req.body.id // int
      }
    }
  ).then(function (result) {
    res.json(result);
  }).catch(function (err) {
    res.json(err);
  });
};

