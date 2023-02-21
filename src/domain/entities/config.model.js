import { DataTypes } from "sequelize";
import { sequelize } from "../../data/database.js";

export const Config = sequelize.define("configs", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING },
  rut: { type: DataTypes.STRING },
  logo: { type: DataTypes.STRING },
  signature: { type: DataTypes.STRING },
});
