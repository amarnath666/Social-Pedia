import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
// GET request to retrieve feed posts
router.get("/", verifyToken, getFeedPosts);

// GET request to retrieve posts for a specific user
router.get("/userId/posts", verifyToken, getUserPosts);

/* UPDATE */

// PATCH request to like or unlike a post by ID
router.patch("/:id/like", verifyToken, likePost);
export default router;