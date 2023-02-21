import { User } from "../../domain/entities/user.model.js";

export const getUser = (req, res) => {
  res.send("Listado de usuarios");
};

export const createUser = (req, res) => {
  res.send("Creating User");
};
