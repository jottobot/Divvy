var db = require("../models");

exports.index =  function(req, res) {
  // db.Example.findAll({}).then(function(dbExamples) {
  //   res.render("index", {
  //     msg: "Welcome!",
  //     examples: dbExamples
  //   });
  // });
}

exports.example = function(req, res) {
  // db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //   res.render("example", {
  //     example: dbExample
  //   });
  // });
}

exports.notARoute = function(req, res) {
  res.render("404");
}


//instead of app.get use router.get