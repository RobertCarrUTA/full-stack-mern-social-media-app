import express from "express";

import { getPosts, createPost } from "../controllers/posts.js";

const router = express.Router();

// Router routes
// This callback function will execute when someone visits  localhost:5000/
router.get("/", getPosts);
router.get("/", createPost);

export default router;
