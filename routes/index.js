import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to my server!");
});

router.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

export default router;