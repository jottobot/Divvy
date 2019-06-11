module.exports = function (sequelize, DataTypes) {
  const UserBill = sequelize.define("UserBill",
    {
      percentOwed: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 0,
          max: 100
        }
      }
    }
  )

  return UserBill;
};
