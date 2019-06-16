module.exports = function (sequelize, DataTypes) {
  const UserBill = sequelize.define('UserBill',
    {
      amountOwed: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          min: 0,
        }
      }
    }
  );

  return UserBill;
};
