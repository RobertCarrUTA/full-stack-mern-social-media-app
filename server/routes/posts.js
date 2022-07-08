import express from "express";

const router = express.Router();

// Router routes
// This callback function will execute when someone visits  localhost:5000/
router.get("/", (req, res) => {
  res.send("THIS WORKS!");
});

export default router;
