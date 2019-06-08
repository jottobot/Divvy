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
      LastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 140],
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
          len: [1, 140],
        }
      },
      phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {

        }
      }
    },
  );
  
  User.associate = function (models) {
    User.belongsTo(models.House, {
      foreignKey: {
        allowNull: false
      }
    })
  }

  User.associate = function (models) {
    User.hasMany(models.Bill, {
      onDelete: "cascade"
    });
  };

  return User;
};