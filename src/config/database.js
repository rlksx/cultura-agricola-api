const Sequelize = require("sequelize");
const sequelize = new Sequelize("crud-db", "user", "password", {
  dialect: "sqlite",
  host: "./src/database/database.sqlite",
});

module.exports = sequelize;
