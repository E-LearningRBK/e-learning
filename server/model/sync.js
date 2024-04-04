const sequelize = require("./");
const Material = require("./material.model.js");
const User = require("./user.model.js");

(async () => await sequelize.sync({ force: false }))();
