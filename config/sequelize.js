import { Sequelize } from "sequelize";

const sequelize = new Sequelize("productsdb", "root", "root", {
  dialect: "mysql",
  host: "localhost",
  define: {
    timestamps: false,
  },
});

export default sequelize;
