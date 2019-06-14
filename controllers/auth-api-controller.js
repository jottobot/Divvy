const db = require('../models');


exports.authenticateUser = function (req, res) {
  const email = req.body.email;
  const password = req.body.password;
  db.User.findOne({
    where: {
      email: email
    }
  }).then(function (dbUser) {
    // If there's no user with the given email
    if (!dbUser) {
      return res.json({
        message: 'Incorrect email.'
      });
    } else if (!dbUser.validPassword(password)) { // If there is a user with the given email, but the password the user gives is incorrect
      return res.json({
        message: 'Incorrect password.'
      });
    }
    // If none of the above, return the user
    return res.json(dbUser);
  });
};
