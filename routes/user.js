import express from "express";
import { getNumber } from "../controllers/userController.js";

const router = express.Router();

// GET all users
router.get("/", (req, res) => {
  res.json({
    message: "List of users",
    users: []
  });
});

// GET single user
router.get("/:id", (req, res) => {
  const { id } = req.params;

  res.json({
    message: `User with id ${id}`,
  });
});

// CREATE user
router.post("/", (req, res) => {
  const user = req.body;

  res.json({
    message: "User created",
    user
  });
});

router.get("/number", getNumber);

export default router;