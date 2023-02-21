import express from "express";
import { createUser, getUser } from "../controllers/user.controller.js";
const router = express.Router();

// Get all users
router.get("/user", getUser);

// Get single user by ID
router.get("/user/:id", (req, res) => {
  // ...
});

// Add new user
router.post("/user", createUser);

// Update user
router.put("/user/:id", (req, res) => {
  // ...
});

// Delete user
router.delete("/user/:id", (req, res) => {
  // ...
});

export default router;
