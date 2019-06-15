module.exports = function (sequelize, DataTypes) {
  var Bill = sequelize.define('Bill', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    Company: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      },
    },
    Amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0
      },
    },
    // BillDue: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   validate: {
    //     // Validation needed?
    //   },
    // },
    BillPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  });

  Bill.associate = function (models) {
    Bill.belongsToMany(models.User, {
      // as: 'User',
      through: models.UserBill,
    });
  };

  return Bill;
};