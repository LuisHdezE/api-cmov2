import { DataTypes } from "sequelize";
import { sequelize } from "../../data/database.js";

export const User = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  user: { type: DataTypes.STRING, unique: true },
  name: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  level: { type: DataTypes.INTEGER },
});
