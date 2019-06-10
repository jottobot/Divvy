module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User",
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140],
        }
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140],
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
          len: [1, 140],
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          // TODO add phone number validation
        }
      }
    },
  );

  User.associate = function (models) {
    User.belongsToMany(models.Bill, {
      as: 'Bill',
      through: 'User_Bill',
    });
  }

  return User;
};
