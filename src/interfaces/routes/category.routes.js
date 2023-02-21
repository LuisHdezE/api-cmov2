import express from "express";
import {
  createCategory,
  getCategories,
} from "../controllers/category.controller.js";

const router = express.Router();

// Get all users
router.get("/category", getCategories);

// Get single user by ID
router.get("/category/:id", (req, res) => {
  // ...
});

// Add new user
router.post("/category", createCategory);

// Update user
router.put("/category/:id", (req, res) => {
  // ...
});

// Delete user
router.delete("/category/:id", (req, res) => {
  // ...
});

export default router;
