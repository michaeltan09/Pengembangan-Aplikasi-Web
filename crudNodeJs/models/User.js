const Sequelize = require("sequelize");
const db = require("../config/db");

const User = db.define(
  "invoice",
  {
    customerid: { type: Sequelize.STRING },
    customername: { type: Sequelize.STRING },
    item: { type: Sequelize.STRING },
    qty: { type: Sequelize.STRING },
    price: { type: Sequelize.STRING },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User;
