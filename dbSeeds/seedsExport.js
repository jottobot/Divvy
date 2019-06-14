const db = require('../models');

const users = [
  {
    firstName: 'Bobby',
    lastName: 'Jones',
    email: 'Bobby@email.com',
    phoneNumber: '206999999',
    password: 'f7khfdsKJHd'
  },
  {
    firstName: 'Sally',
    lastName: 'Smite',
    email: 'Sally@email.com',
    phoneNumber: '4253828183',
    'password': 'jafsd8Ikads8'
  }
];

const bills = [
  {
    title: 'water',
    Company: 'PSE',
    Amount: 300.5,
    BillDue: Date.now(),
    BillPaid: false,
  },
  {
    title: 'internet',
    Company: 'Comcast',
    Amount: 40.83,
    BillDue: Date.now(),
    BillPaid: false,
  }
];

function seedDB() {
  db.User
    .destroy({ where: {} }) // delete all users
    .then(db.Bill.destroy({ where: {} }) // delete all bills
    )
    .then(
      users.forEach(user => {
        db.User.create({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          password: user.password,
        });
      })
    )
    .then(
      bills.forEach(bill => {
        db.Bill.create(
          {
            title: bill.title,
            Company: bill.Company,
            Amount: bill.Amount,
            BillDue: bill.BillDue,
            BillPaid: bill.BillPaid,
          }
        );
      })
    );
}

module.exports = {seedDb: seedDB};