const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./");

const Material = sequelize.define("material", {
  // define schema here !

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Material;
