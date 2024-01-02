import { Sequelize } from "sequelize";
import sequelize from "../config/sequelize.js";

const Models = sequelize.define("models", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Products = sequelize.define("products", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  articul: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  sizes: {
    type: Sequelize.ARRAY(Sequelize.INTEGER),
    allowNull: false,
  },
});
Models.hasMany(Products);
Products.belongsTo(Models);

sequelize
  .sync()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => console.log(err));

module.exports = { Models, Products };
