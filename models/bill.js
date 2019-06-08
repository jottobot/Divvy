module.exports = function (sequelize, DataTypes) {
  const Bill = sequelize.define("Bill", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Bill.associate = function (models) {
    Bill.belongsToMany(models.User, {
      as: 'User',
      through: 'User_Bill',
    });
  }

  return Bill;
};
