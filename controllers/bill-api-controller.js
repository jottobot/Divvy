const db = require("../models");


exports.getAllBills = function (req, res) {
  db.Bill.findAll({}).then(function (dbExamples) {
    res.json(dbExamples);
  });
}

// exports.getUsersForBill = function (req, res) {
//   billId = req.params.billId
//   db.Bill.findAll(
//     {
//       where: {
//         id: billId
//       }
//     }
//   ).then(bill => {
//     bill[0].getUser().then(users => {
//       res.json(users)
//     })
//   }
//   ).catch(err => {
//     res.json(err)
//   })
// }