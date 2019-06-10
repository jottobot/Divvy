// Seed the database with test data

const db = require('../models')

const users = [
  {
    firstName: 'Bobby',
    lastName: 'Jones',
    email: 'Bobby@email.com',
    phoneNumber: '206999999'
  },
  {
    firstName: 'Sally',
    lastName: 'Smite',
    email: 'Sally@email.com',
    phoneNumber: '4253828183'
  }
]

const bills = [
  {
    title: "water",
    Company: "PSE",
    Amount: 300.5,
    BillDue: Date.now(),
    BillPaid: false,
  },
  {
    title: "internet",
    Company: "Comcast",
    Amount: 40.83,
    BillDue: Date.now(),
    BillPaid: false,
  }
]

function seedDB() {
  db.User
    .destroy({ where: {} })
    .then(db.Bill.destroy({ where: {} }))
    .then(
      users.forEach(user => {
        db.User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
        })
      }))
    .then(
      bills.forEach(bill => {
        db.Bill.create({
          title: bill.title,
          Company: bill.Company,
          Amount: bill.Amount,
          BillDue: bill.BillDue,
          BillPaid: bill.BillPaid,
        })
      }))
}

// seedDB()



