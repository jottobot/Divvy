const db = require("../models");


exports.getAllBills = function (req, res) {
  db.Bill.findAll({}).then(function (dbExamples) {
    res.json(dbExamples);
  });
}

