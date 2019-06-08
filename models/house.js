module.exports = function(sequelize, DataTypes) {
  const House = sequelize.define("House", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return House;
};
