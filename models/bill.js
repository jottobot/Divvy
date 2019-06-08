module.exports = function(sequelize, DataTypes) {
  const Bill = sequelize.define("Bill", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Bill;
};
