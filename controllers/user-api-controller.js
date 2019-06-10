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

exports.getUserByEmail = function (req, res) {
  db.User.findAll({
    where: {
      email: req.params.email
    }
  }).then(result => {
    return res.json(result)
  })
}


db.User.findAll({
  where: {
    id: 2
  }
})
  .then(
    (user) => 
    {
    db.Bill.findAll({ where: { id: 1 } })
      .then((bill) => {
        // console.log(user[0])
        // console.log(bill[0])
        // user[0].addBill(bill)
        bill[0].getUser().then(bills => { // Need to check for empty array
          console.log(bills)
        })
         
      });
  });
