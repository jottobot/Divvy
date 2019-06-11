const db = require("../models");



// GET route for getting all of the bills
exports.getAllBills = function (req, res) {
  // findAll returns all entries for a table when used with no options
  db.Bill.findAll({}).then(function (divvy_db) {
    // We have access to the todos as an argument inside of the callback function
    res.json(divvy_db);
  });
}

exports.getUsersForBill = function (req, res) {
  billId = req.params.billId
  db.Bill.findAll(
    {
      where: {
        id: billId
      }
    }
  ).then(bill => {
    bill[0].getUser().then(users => {
      res.json(users)
    })
  }
  ).catch(err => {
    res.json(err)
  })
}

// POST route for saving a new bill
exports.postNewBill = function (req, res) {
  // create takes an argument of an object describing the item we want to
  // insert into our table. In this case we just we pass in an object with a text
  // and complete property
  db.Bill.create({
    text: req.body.text,
    complete: req.body.complete
  }).then(function (divvy_db) {
    // We have access to the new bill as an argument inside of the callback function
    res.json(divvy_db);
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
  }).then(function (divvy_db) {
    res.json(divvy_db);
  });
};




// PUT route for updating todos. We can get the updated todo data from req.body
exports.put = function (req, res) {
  // Update takes in an object describing the properties we want to update, and
  // we use where to describe which objects we want to update
  db.bill.update({
    text: req.body.text,
    complete: req.body.complete
  }, {
      where: {
        id: req.body.id
      }
    }).then(function (divvy_db) {
      res.json(divvy_db);
    });
};

