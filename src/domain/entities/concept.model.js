import { DataTypes } from "sequelize";
import { sequelize } from "../../data/database.js";

export const Concept = sequelize.define("concept", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  description: { type: DataTypes.STRING },
  operaciones: { type: DataTypes.INTEGER },
});
