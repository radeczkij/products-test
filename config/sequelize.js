import { Sequelize } from "sequelize";

const sequelize = new Sequelize("productstest", "postgres", "root", {
  dialect: "postgres",
  host: "localhost",
  define: {
    timestamps: false,
  },
});

export default sequelize;
