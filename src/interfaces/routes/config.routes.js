import express from "express";
import { createConfig, getConfig } from "../controllers/config.controller.js";

const router = express.Router();

// Get all users
router.get("/config", getConfig);

// Get single user by ID
router.get("/config/:id", (req, res) => {
  // ...
});

// Add new user
router.post("/config", createConfig);

// Update user
router.put("/config/:id", (req, res) => {
  // ...
});

// Delete user
router.delete("/config/:id", (req, res) => {
  // ...
});

export default router;
