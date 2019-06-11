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
<<<<<<< HEAD
      LastName: {
=======
      lastName: {
>>>>>>> 1f5e93abf6de1a8323030948e0f724d44cd96cd0
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
<<<<<<< HEAD
 
=======
          // TODO add phone number validation
>>>>>>> 1f5e93abf6de1a8323030948e0f724d44cd96cd0
        }
      }
    },
  );
<<<<<<< HEAD
 
=======

>>>>>>> 1f5e93abf6de1a8323030948e0f724d44cd96cd0
  User.associate = function (models) {
    User.belongsToMany(models.Bill, {
      as: 'Bill',
      through: 'User_Bill',
    });
  }
<<<<<<< HEAD
 
  return User;
 };
=======

  return User;
};
>>>>>>> 1f5e93abf6de1a8323030948e0f724d44cd96cd0
