const { DataTypes } = require("sequelize");
const sequelize = require("./");
const Material = require("./material.model.js");

const User = sequelize.define("User", {
  // define schema with role here !
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl: {
    type: DataTypes.STRING,
    // allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isactive: {
    type: DataTypes.STRING,
    defaultValue: "false",
  },
  activationcode: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// relation Between user , material & teacher

  User.belongsToMany(Material, { through: "UserMaterial" });

  Material.belongsToMany(User, { through: "UserMaterial" });

module.exports = User;
