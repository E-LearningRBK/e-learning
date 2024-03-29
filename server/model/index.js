const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "e_learn",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

//connection to the database

const connect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database successfully");
  } catch (error) {
    console.error("Connection failed to connect with database", error);
  }
};

connect();

module.exports = sequelize;
