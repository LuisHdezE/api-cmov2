import express from "express";
import {
  createConcept,
  getConcept,
} from "../controllers/concept.controller.js";
const router = express.Router();

// Get all users
router.get("/concept", getConcept);

// Get single user by ID
router.get("/concept/:id", (req, res) => {
  // ...
});

// Add new user
router.post("/concept", createConcept);

// Update user
router.put("/concept/:id", (req, res) => {
  // ...
});

// Delete user
router.delete("/concept/:id", (req, res) => {
  // ...
});

export default router;
